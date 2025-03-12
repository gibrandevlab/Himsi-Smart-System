<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadImageTextEditor extends Controller
{
    public function upload(Request $request)
    {
        // Validasi file gambar
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        // Simpan gambar ke dalam storage/public/uploads
        $path = $request->file('image')->store('ImageTextEditor', 'public');

        // Kirim URL gambar yang tersimpan
        return response()->json([
            'image_url' => asset('storage/' . $path)
        ]);
    }
}
