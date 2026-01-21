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

class JsonToHtmlJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(protected int $blogId)
    {
    }

    public function handle(): void
    {
        $blog = Blog::find($this->blogId);
        if (!$blog) {
            return;
        }

        $blog->content = (new Editor([
            'extensions' => [
                new StarterKit([
                    'codeBlock' => false,
                ]),
                new CodeBlockShiki([
                    'theme' => 'catppuccin-macchiato',
                    'defaultLanguage' => 'php'
                ]),
            ],
        ]))->setContent($blog->json_content)->getHTML();

        $blog->saveQuietly();
    }
}
