<?php

namespace App\Http\Controllers\Admin;

use App\Models\Blog;
use Inertia\Inertia;

class BlogController
{
    public function index()
    {
        return Inertia::render('admin/blog/index', [
            'blogs' => Blog::all(),
        ]);
    }

}
