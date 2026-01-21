<?php

namespace App\Models;

use App\Actions\ContentTraveler;
use App\Actions\CreateBlogExcerpt;
use App\Jobs\JsonToHtmlJob;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tiptap\Editor;
use Tiptap\Extensions\StarterKit;
use Tiptap\Nodes\CodeBlockHighlight;
use Tiptap\Nodes\CodeBlockShiki;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'json_content',
        'excerpt',
    ];

    protected function casts(): array
    {
        return [
            'json_content' => 'array'
        ];
    }

    protected static function booted(): void
    {
        static::saved(function ($model) {
            JsonToHtmlJob::dispatch($model->id);
        });
    }


}
