<?php

namespace App\Actions;

use App\Models\Blog;

class CreateBlogExcerpt
{
    public function handle(Blog $blog, bool $save = true): void
    {
        $blog->excerpt = str()->limit(strip_tags($blog->content), 150);
        if ($save) {
            $blog->save();
        }
    }
}
