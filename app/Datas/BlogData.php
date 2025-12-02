<?php

namespace App\Datas;

use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Arrayable;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
readonly class BlogData implements Arrayable
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public string $content,
        public Carbon $created_at,
    )
    {
    }

    public static function fromModel(Blog $blog): self
    {
        return new self(
            id: $blog->id,
            title: $blog->title,
            slug: $blog->slug,
            content: $blog->content,
            created_at: $blog->created_at?? now(),
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'content' => $this->content,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
