<?php

namespace App\Jobs;

use App\Actions\JsonToHtmlAction;
use App\Models\Blog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Tiptap\Editor;
use Tiptap\Extensions\StarterKit;
use Tiptap\Nodes\CodeBlockShiki;
use Tiptap\Nodes\Image;

class JsonToHtmlJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(protected int $blogId)
    {
    }

    public function handle(JsonToHtmlAction $action): void
    {
        $blog = Blog::find($this->blogId);
        if (!$blog) {
            return;
        }
        if (is_null($blog->json_content)) {
            return;
        }

        $blog->content = $action->handle($blog->json_content);

        $blog->saveQuietly();
    }
}
