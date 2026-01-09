<?php

namespace App\Datas;

use App\Actions\ContentTraveler;
use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\HtmlString;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
readonly class BlogData implements Arrayable
{
    public function __construct(
        public int $id,
        public string $title,
        public string $excerpt,
        public string $slug,
        public string $content,
        public Carbon $created_at,
    ) {
    }

    public static function fromModel(Blog $blog): self
    {
        return new self(
            id: $blog->id,
            title: $blog->title,
            excerpt: $blog->excerpt ?? '',
            slug: $blog->slug,
            content: $blog->converted_content,
            created_at: $blog->created_at ?? now(),
        );
    }

    public static function fromEmpty()
    {
        return new self(
            id: 0,
            title: '',
            excerpt: '',
            slug: '',
            content: '',
            created_at: now(),
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'slug' => $this->slug,
            'content' => $this->content,
//            'content' => $this->content,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }

    protected function transform(string $content)
    {
        $traveler = new ContentTraveler();
        return $traveler->handle($content);
    }
}
