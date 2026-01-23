<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\BlogPreviewController;
use App\Http\Controllers\UploadController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\BlogController::class, 'index'])->name('home');
Route::get('blog/{blog}', [\App\Http\Controllers\BlogController::class, 'detail'])->name('frontend.blog.detail');
Route::get('blog/{blog}/preview', BlogPreviewController::class)->name('frontend.blog.preview')->middleware('signed');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::resource('blog', BlogController::class);
});

Route::middleware(['auth'])->group(function () {
    Route::post('upload-endpoint', UploadController::class);
});

require __DIR__.'/settings.php';


