<?php

use App\Models\Blog;
use App\Models\User;
use Inertia\Testing\AssertableInertia;
use function Pest\Laravel\{actingAs, get, post, put};


it('only shows published blogs on home page', function () {
    Blog::factory()->count(3)->create(['status' => 'published']);
    Blog::factory()->count(2)->create(['status' => 'draft']);

    get(route('home'))->assertInertia(function (AssertableInertia $page) {
        $page->has('blogs', 3);
    });
});

it('shows published blog detail page', function () {
    $blog = Blog::factory()->create(['status' => 'published']);

    get(route('frontend.blog.detail', $blog))
        ->assertOk()
        ->assertInertia(function (AssertableInertia $page) use ($blog) {
            $page->where('blog.id', $blog->id);
        });
});

it('returns 404 for draft blog detail page', function () {
    $blog = Blog::factory()->create(['status' => 'draft']);

    get(route('frontend.blog.detail', $blog))
        ->assertNotFound();
});

it('published scope filters only published blogs', function () {
    Blog::factory()->count(5)->create(['status' => 'published']);
    Blog::factory()->count(3)->create(['status' => 'draft']);

    expect(Blog::count())->toBe(8);
    expect(Blog::published()->count())->toBe(5);
});

it('admin can create blog with draft status', function () {
    $user = User::factory()->create();

    actingAs($user)->post(route('blog.store'), [
        'title' => 'Test Draft Blog',
        'slug' => 'test-draft-blog',
        'json_content' => ['type' => 'doc', 'content' => []],
        'status' => 'draft',
    ])->assertRedirect();

    expect(Blog::where('slug', 'test-draft-blog')->first())
        ->status->toBe('draft');
});

it('admin can create blog with published status', function () {
    $user = User::factory()->create();

    actingAs($user)->post(route('blog.store'), [
        'title' => 'Test Published Blog',
        'slug' => 'test-published-blog',
        'json_content' => ['type' => 'doc', 'content' => []],
        'status' => 'published',
    ])->assertRedirect();

    expect(Blog::where('slug', 'test-published-blog')->first())
        ->status->toBe('published');
});

it('admin can update blog status from draft to published', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create(['status' => 'draft']);

    actingAs($user)->put(route('blog.update', $blog), [
        'title' => 'Hello',
        'slug' => 'hi',
        'json_content' => $blog->json_content,
        'status' => 'published',
    ])->assertRedirect();

    expect($blog->refresh()->status)->toBe('published');
});

it('admin can update blog status from published to draft', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create(['status' => 'published']);

    actingAs($user)->put(route('blog.update', $blog), [
        'title' => 'heelo',
        'slug' => 'hii',
        'json_content' => $blog->json_content,
        'status' => 'draft',
    ])->assertRedirect();

    expect($blog->fresh()->status)->toBe('draft');
});

it('rejects invalid status values', function () {
    $user = User::factory()->create();

    actingAs($user)->post(route('blog.store'), [
        'title' => 'Test Blog',
        'slug' => 'test-blog',
        'json_content' => ['type' => 'doc', 'content' => []],
        'status' => 'invalid-status',
    ])->assertSessionHasErrors('status');
});

it('requires status field when creating blog', function () {
    $user = User::factory()->create();

    actingAs($user)->post(route('blog.store'), [
        'title' => 'Test Blog',
        'slug' => 'test-blog',
        'json_content' => ['type' => 'doc', 'content' => []],
    ])->assertSessionHasErrors('status');
});

it('requires status field when updating blog', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create();

    actingAs($user)->put(route('blog.update', $blog), [
        'title' => $blog->title,
        'slug' => $blog->slug,
        'json_content' => $blog->json_content,
    ])->assertSessionHasErrors('status');
});
