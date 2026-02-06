<?php

namespace App\Http\Controllers\Admin;

use App\Datas\BlogData;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class BlogController
{
    public function index()
    {
        return Inertia::render('admin/blog/index', [
            'blogs' => Blog::latest()->get()->map(fn($blog) => BlogData::fromModel($blog)),
        ]);
    }

    public function show(Blog $blog)
    {
        $previewUrl = URL::signedRoute('frontend.blog.preview', ['blog' => $blog->id]);
        return Inertia::render('admin/blog/detail', [
            'blog' => $blog,
            'previewUrl' => $previewUrl,
        ]);
    }

    public function update(Blog $blog, Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:80',
            'slug' => 'required|string|max:50',
            'json_content' => 'nullable|array',
            'status' => 'required|in:draft,published',
        ]);
        $blog->update($validated);

        return back()->with('success', 'Blog updated successfully');
    }

    public function create()
    {
        return Inertia::render('admin/blog/create', [
            'blog' => BlogData::fromEmpty()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:80',
            'slug' => 'required|string|max:50',
            'json_content' => 'required|array',
            'status' => 'required|in:draft,published',
        ]);

        Blog::create($validated);
        return redirect()->route('blog.index');
    }

}
