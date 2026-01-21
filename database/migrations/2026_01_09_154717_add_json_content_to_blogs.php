<?php

use App\Jobs\HtmlToJsonJob;
use App\Models\Blog;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->json('json_content')->nullable()->after('content');
        });

        Blog::get()->each(function ($blog) {
            HtmlToJsonJob::dispatch($blog->id);
        });
    }
};
