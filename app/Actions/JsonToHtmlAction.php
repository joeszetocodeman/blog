<?php

namespace App\Actions;

use App\Models\Blog;
use Tiptap\Editor;
use Tiptap\Extensions\StarterKit;
use Tiptap\Nodes\CodeBlockShiki;
use Tiptap\Nodes\Image;

class JsonToHtmlAction
{
    public function handle(array $json): string
    {
        $json = $this->correctImageSrc($json);
        return (new Editor([
            'extensions' => [
                new Image(),
                new StarterKit([
                    'codeBlock' => false,
                ]),
                new CodeBlockShiki([
                    'theme' => 'catppuccin-macchiato',
                    'defaultLanguage' => 'php'
                ]),
            ],
        ]))->setContent($json)->getHTML();
    }

    protected function correctImageSrc(array $data): array
    {
        foreach ($data as $key => $item) {
            if ($key === 'src') {
                $data['src'] = $item[0];
                continue;
            }
            if (is_array($item)) {
                $data[$key] = $this->correctImageSrc($item);
            }
        }
        return $data;
    }

}
