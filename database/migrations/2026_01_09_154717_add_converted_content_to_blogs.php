<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->text('converted_content')->nullable()->after('content');
        });

        \App\Models\Blog::all()->each(function ($blog) {
            $blog->converted_content = (new \App\Actions\ContentTraveler())->handle($blog->content);
            $blog->save();
        });
    }
};
