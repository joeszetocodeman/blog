<?php

namespace App\Models;

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
        'excerpt',
    ];

    protected static function booted(): void
    {
        static::saving(function ($model) {
            app(CreateBlogExcerpt::class)->handle($model, save: false);
        });
    }
}
