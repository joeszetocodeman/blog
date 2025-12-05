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
            'blogs' => Blog::latest()->get()->map(fn($blog) => BlogData::fromModel($blog) ),
        ]);
    }

    public function detail(Blog $blog)
    {
        return Inertia::render('blog/detail', [
            'blog' => BlogData::fromModel($blog),
        ]);
    }

}
