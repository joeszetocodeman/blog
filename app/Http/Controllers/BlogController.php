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
            'blogs' => Blog::latest()->published()->get()
                ->map(fn($blog) => BlogData::fromModel($blog))->all(),
        ]);
    }

    public function detail(Blog $blog)
    {
        abort_if($blog->status !== 'published', 404);

        return Inertia::render('blog/detail', [
            'blog' => BlogData::fromModel($blog),
        ]);
    }

}
