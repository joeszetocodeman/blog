<?php

namespace App\Models;

use App\Actions\ContentTraveler;
use App\Actions\CreateBlogExcerpt;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        static::saving(function ($model) {
            $model->content = (new \Tiptap\Editor)->setContent($model->json_content)->getHTML();
        });
    }


}
