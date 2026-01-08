<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class uploadController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'image|max:10240', // max 10MB per file
        ]);
        $paths = collect($request->file('files'))->map(function (UploadedFile $file) {
            return $file->store('uploads');
        });
        return response()->json([
            'data' => $paths->map(fn($path) => Storage::temporaryUrl($path, now()->addMinutes(30)))
        ]);
    }
}
