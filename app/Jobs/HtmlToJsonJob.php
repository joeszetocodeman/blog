<?php

namespace App\Jobs;

use App\Models\Blog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Tiptap\Editor;
use Tiptap\Extensions\StarterKit;
use Tiptap\Nodes\CodeBlockShiki;

class HtmlToJsonJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        protected int $blogId
    ) {
    }

    public function handle(): void
    {
        $blog = Blog::find($this->blogId);
        if (!$blog) {
            return;
        }

        $blog->json_content = (new Editor())
            ->setContent($blog->content)->getDocument();

        $blog->saveQuietly();
    }
}
