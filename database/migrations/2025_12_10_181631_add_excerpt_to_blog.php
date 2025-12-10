<?php

use App\Actions\CreateBlogExcerpt;
use App\Models\Blog;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->string('excerpt')->nullable()->after('title');
        });

        $action = app(CreateBlogExcerpt::class);
        Blog::all()->each(function ($blog) use ($action) {
            $action->handle($blog);
        });
    }
};
