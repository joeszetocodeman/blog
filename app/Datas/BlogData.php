<?php

namespace App\Datas;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
readonly class BlogData
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public string $content,
    )
    {
    }

}
