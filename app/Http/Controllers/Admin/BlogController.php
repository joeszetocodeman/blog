<?php

namespace App\Http\Controllers\Admin;

use App\Datas\BlogData;
use App\Models\Blog;
use Inertia\Inertia;

class BlogController
{
    public function index()
    {
        return Inertia::render('admin/blog/index', [
            'blogs' => Blog::all()->map(fn($blog) => BlogData::fromModel($blog) ),
        ]);
    }

    public function show(Blog $blog)
    {
        return Inertia::render('admin/blog/detail', [
            'blog' => $blog,
        ]);
    }

    public function update(Blog $blog)
    {
        $validated = request()->validate([
            'title' => 'required|string|max:80',
            'slug' => 'required|string|max:50',
            'content' => 'required|string',
        ]);

        $blog->update($validated);

        return back();
    }

}
