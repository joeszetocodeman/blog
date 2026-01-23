<?php

namespace App\Http\Controllers;

use App\Datas\BlogData;
use App\Models\Blog;
use Inertia\Inertia;

class BlogPreviewController extends Controller
{
    public function __invoke(Blog $blog)
    {
        return Inertia::render('blog/detail', [
            'blog' => BlogData::fromModel($blog),
        ]);
    }
}
