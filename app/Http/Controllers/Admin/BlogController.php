<?php

namespace App\Http\Controllers\Admin;

use App\Datas\BlogData;
use App\Models\Blog;
use Illuminate\Http\Request;
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
        return Inertia::render('admin/blog/detail', [
            'blog' => $blog,
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

        return back();
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
