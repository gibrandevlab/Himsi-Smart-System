<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Divisi;
use App\Models\DivisiImages;

class ManageDivisiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data_divisi = Divisi::get()->toArray();
        $data = [
            'data_divisi' => $data_divisi,
        ];
        return Inertia::render('Dashboard/Admin/ManageDivisi/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Admin/ManageDivisi/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'jumlah_anggota' => 'required',
            'deskripsi' => 'required',
            'logo' => 'required|file|mimes:jpg,png,jpeg,webp',
            'banner' => 'required|file|mimes:jpg,png,jpeg,webp',
        ]);

        // Inisialisasi model Divisi
        $DivisiModel = new Divisi();

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logo_name = 'logo-divisi-' . Str::uuid() . '.' . $logo->getClientOriginalExtension();
            $logo->storeAs('DivisiAssets/Logo', $logo_name, 'public');
            $DivisiModel->logo = $logo_name;
        }
        if ($request->hasFile('banner')) {
            $banner = $request->file('banner');
            $banner_name = 'banner-divisi-' . Str::uuid() . '.' . $banner->getClientOriginalExtension();
            $banner->storeAs('DivisiAssets/Banner', $banner_name, 'public');
            $DivisiModel->banner = $banner_name;
        }

        // Proses simpan data divisi
        $DivisiModel->slug = Str::slug($request->nama);
        $DivisiModel->nama = $request->nama;
        $DivisiModel->deskripsi = $request->deskripsi;
        $DivisiModel->jumlah_anggota = $request->jumlah_anggota;

        $DivisiModel->save();

        // Proses simpan data divisi images jika ada
        if ($request->has('images') && is_array($request->input('images'))) {
            foreach ($request->input('images') as $image) {
                $DivisiImagesModel = new DivisiImages();
                $DivisiImagesModel->divisi_id = $DivisiModel->id;
                $DivisiImagesModel->filename = $image;
                $DivisiImagesModel->save();
            }
        }

        return redirect()->route('manage-divisi.index')->with('success', 'Data created successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data_divisi = Divisi::where('slug', $id)->firstOrFail();
        $data = [
            'data_divisi' => $data_divisi,
        ];
        return Inertia::render('Dashboard/Admin/ManageDivisi/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data_divisi = Divisi::where('slug', $id)->firstOrFail();
        $data_divisi_images = DivisiImages::where('divisi_id', $data_divisi->id)->get()->toArray();
        $data = [
            'data_divisi' => $data_divisi,
            'data_divisi_images' => $data_divisi_images,
        ];
        return Inertia::render('Dashboard/Admin/ManageDivisi/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'data_form.nama' => 'required',
            'data_form.jumlah_anggota' => 'required',
            'data_form.deskripsi' => 'required',
            'data_form.logo' => $request->hasFile('data_form.logo') ? 'file|mimes:jpg,png,jpeg,webp' : 'sometimes|string',
            'data_form.banner' => $request->hasFile('data_form.banner') ? 'file|mimes:jpg,png,jpeg,webp' : 'sometimes|string',
        ]);

        $DivisiModel = Divisi::where('slug', $id)->first();

        if ($request->hasFile('data_form.logo')) {
            $image = $request->file('data_form.logo');

            $image_name = 'logo-divisi-' . Str::uuid() . '.' . $image->getClientOriginalExtension();

            $image->storeAs('DivisiAssets/Logo', $image_name, 'public');

            if ($DivisiModel->logo) {
                $oldFilePath = 'DivisiAssets/Logo/' . $DivisiModel->logo;
                if (Storage::disk('public')->exists($oldFilePath)) {
                    Storage::disk('public')->delete($oldFilePath);
                }
            }
            $DivisiModel->logo = $image_name;
        }

        if ($request->hasFile('data_form.banner')) {
            $image = $request->file('data_form.banner');

            $image_name = 'banner-divisi-' . Str::uuid() . '.' . $image->getClientOriginalExtension();

            $image->storeAs('DivisiAssets/banner', $image_name, 'public');

            if ($DivisiModel->banner) {
                $oldFilePath = 'DivisiAssets/Banner/' . $DivisiModel->banner;
                if (Storage::disk('public')->exists($oldFilePath)) {
                    Storage::disk('public')->delete($oldFilePath);
                }
            }
            $DivisiModel->banner = $image_name;
        }

        $DivisiModel->slug = Str::slug($request->input("data_form.nama"));
        $DivisiModel->nama = $request->input("data_form.nama");
        $DivisiModel->deskripsi = $request->input("data_form.deskripsi");
        $DivisiModel->jumlah_anggota = $request->input("data_form.jumlah_anggota");

        $DivisiModel->save();

        // Update data images: hapus gambar lama dan simpan gambar baru jika ada
        DivisiImages::where('divisi_id', $DivisiModel->id)->delete();
        if ($request->has('data_form.images') && is_array($request->input('data_form.images'))) {
            foreach ($request->input('data_form.images') as $imageName) {
                $DivisiImagesModel = new DivisiImages();
                $DivisiImagesModel->divisi_id = $DivisiModel->id;
                $DivisiImagesModel->filename = $imageName;
                $DivisiImagesModel->save();
            }
        }

        return redirect()->route('manage-divisi.index')->with('success', 'Data updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $divisi = Divisi::where('slug', $id)->first();
        if (!$divisi) {
            return redirect()->back()->with('error', 'Data not found.');
        }

        $divisi_id = $divisi->id;
        $divisiImages = DivisiImages::where('divisi_id', $divisi_id)->get();

        // Looping untuk menghapus file gambar konten
        foreach ($divisiImages as $image) {
            $filePath = 'DivisiAssets/ContentImage/' . $image->filename;
            if (Storage::disk('public')->exists($filePath)) {
                Storage::disk('public')->delete($filePath);
            }
        }

        DivisiImages::where('divisi_id', $divisi_id)->delete();

        // Hapus file logo jika ada
        if ($divisi->logo) {
            $oldLogoPath = 'DivisiAssets/Logo/' . $divisi->logo;
            if (Storage::disk('public')->exists($oldLogoPath)) {
                Storage::disk('public')->delete($oldLogoPath);
            }
        }

        if ($divisi->banner) {
            $oldBannerPath = 'DivisiAssets/Banner/' . $divisi->banner;
            if (Storage::disk('public')->exists($oldBannerPath)) {
                Storage::disk('public')->delete($oldBannerPath);
            }
        }

        $divisi->delete();

        return redirect()->back()->with('success', 'Data deleted successfully.');
    }

    public function uploadImageContentDivisi(Request $request)
    {
        $request->validate([
            'image' => 'required|file|mimes:jpg,png,jpeg,webp'
        ]);

        $originalName = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->storeAs('DivisiAssets/ContentImage', $originalName, 'public');
        $imageUrl = asset('storage/' . $path);

        return response()->json([
            'success' => true,
            'image_url' => $imageUrl
        ]);
    }

    public function deleteImageContentDivisi(Request $request)
    {
        $request->validate([
            'imageUrl' => 'required|string',
        ]);

        $imageUrl = $request->input('imageUrl');
        $fileName = basename($imageUrl);

        $image = DivisiImages::where('filename', $fileName)->first();
        $filePath = 'DivisiAssets/ContentImage/' . $fileName;

        if (!$image && !Storage::disk('public')->exists($filePath)) {
            return response()->json([
                'success' => true,
                'hasImage' => false,
                'message' => 'Gambar tidak ditemukan, tetapi proses tetap sukses'
            ], 200);
        }

        if ($image) {
            $image->delete();
        }

        if (Storage::disk('public')->exists($filePath)) {
            Storage::disk('public')->delete($filePath);
        }

        return response()->json([
            'success' => true,
            'hasImage' => true,
            'message' => 'File deleted successfully'
        ], 200);
    }
}
