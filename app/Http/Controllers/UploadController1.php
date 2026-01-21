<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UploadController1 extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'image|max:10240', // max 10MB per file
        ]);
        $paths = collect($request->file('files'))->map(function (UploadedFile $file) {
            return $file->store('uploads', 's3');
        });
        return response()->json([
            'data' => $paths->map(fn($path) => Storage::disk('s3')->url($path)),
        ]);
    }
}
