<?php

use Inertia\Testing\AssertableInertia;
use function Pest\Laravel\get;

it('can list blogs', function () {
    \App\Models\Blog::factory()->count(4)->create();
    get(route('home'))->assertInertia(function (AssertableInertia $page) {
        $page->has('blogs')->count('blogs', 4);
    });
});
