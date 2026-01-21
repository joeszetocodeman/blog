<?php

namespace App\Http\Controllers;

use App\Datas\BlogData;
use App\Models\Blog;
use Inertia\Inertia;

class BlogController
{
    public function index()
    {
        return Inertia::render('blog/index', [
            'blogs' => Blog::published()->latest()->get()->map(fn($blog) => BlogData::fromModel($blog)),
        ]);
    }

    public function detail(Blog $blog)
    {
        // Only show published blogs publicly
        abort_if($blog->status !== 'published', 404);

        return Inertia::render('blog/detail', [
            'blog' => BlogData::fromModel($blog),
        ]);
    }

}
