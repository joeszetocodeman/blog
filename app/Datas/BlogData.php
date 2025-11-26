<?php

namespace App\Datas;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
readonly class BlogData
{
    public function __construct(
        public string $title,
        public string $slug,
        public string $content,
    )
    {
    }

}
