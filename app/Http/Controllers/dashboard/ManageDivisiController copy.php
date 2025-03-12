<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
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
        ]);
    
        // Inisialisasi model Divisi
        $DivisiModel = new Divisi();
    
        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logo_name = 'logo-divisi-' . Str::uuid() . '.' . $logo->getClientOriginalExtension();
            $logo->storeAs('DivisiAssets/Logo', $logo_name, 'public');
            $DivisiModel->logo = $logo_name;
        }
        
        // Assign properti ke model Divisi
        $DivisiModel->slug = Str::slug($request->nama);
        $DivisiModel->nama = $request->nama;
        $DivisiModel->deskripsi = $request->deskripsi;
        $DivisiModel->jumlah_anggota = $request->jumlah_anggota;
        
        // Simpan model Divisi terlebih dahulu agar mendapatkan id-nya
        $DivisiModel->save();

        foreach ($request->images as $image) {
            $DivisiImagesModel = new DivisiImages();
            // Ambil divisi_id terbaru dari model Divisi
            $DivisiImagesModel->divisi_id = $DivisiModel->id;
            // Simpan nama file masing-masing (tanpa json_encode)
            $DivisiImagesModel->filename = $image;
            $DivisiImagesModel->save();
        }
        
    
        return redirect()->route('manage-divisi.index')->with('success', 'Data created successfully.');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data_divisi = Divisi::where('id', $id)->first();
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
        $data_divisi = Divisi::where('id', $id)->first();
        $data_divisi_images = DivisiImages::where('divisi_id', $id)->get()->toArray();
        // dd($data_divisi_images);
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
        ]);

        $DivisiModel = Divisi::findOrFail($id);

        // Jika ada file baru untuk logo, lakukan upload dan hapus file lama
        if ($request->hasFile('data_form.logo')) {
            $image = $request->file('data_form.logo');

            // Buat nama file baru
            $image_name = 'logo-divisi-' . Str::uuid() . '.' . $image->getClientOriginalExtension();

            // Simpan file baru
            $image->storeAs('DivisiAssets/Logo', $image_name, 'public');

            // Hapus file lama jika ada
            if ($DivisiModel->logo) {
                $oldFilePath = 'DivisiAssets/Logo/' . $DivisiModel->logo;
                if (Storage::exists($oldFilePath)) {
                    Storage::delete($oldFilePath);
                }
            }
            $DivisiModel->logo = $image_name;
        }

        $DivisiModel->slug = Str::slug($request->input("data_form.nama"));
        $DivisiModel->nama = $request->input("data_form.nama");
        $DivisiModel->deskripsi = $request->input("data_form.deskripsi");
        $DivisiModel->jumlah_anggota = $request->input("data_form.jumlah_anggota");

        $DivisiModel->save();

        // Update data images
        // Hapus dulu semua images lama untuk divisi ini
        DivisiImages::where('divisi_id', $DivisiModel->id)->delete();

        // Cek apakah ada images baru yang dikirim, dan pastikan tipe datanya array
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
        $divisi = Divisi::find($id);
        if (!$divisi) {
            return redirect()->back()->with('error', 'Data not found.');
        }
        
        // Ambil collection model images (tidak diubah ke array)
        $divisiImages = DivisiImages::where('divisi_id', $id)->get();
        
        // Looping untuk hapus file gambar yang terkait
        foreach ($divisiImages as $image) {
            // Pastikan path file sudah lengkap, misalnya:
            $filePath = 'DivisiAssets/ContentImage/' . $image->filename;
            if (Storage::disk('public')->exists($filePath)) {
                Storage::disk('public')->delete($filePath);
            }
        }
        
        // Hapus record di tabel divisi_images
        DivisiImages::where('divisi_id', $id)->delete();
        
        // Hapus file logo divisi jika ada
        if ($divisi->logo) {
            $oldLogoPath = 'DivisiAssets/Logo/' . $divisi->logo;
            if (Storage::disk('public')->exists($oldLogoPath)) {
                Storage::disk('public')->delete($oldLogoPath);
            }
        }
        
        // Hapus record divisi
        $divisi->delete();
        
        return redirect()->back()->with('success', 'Data deleted successfully.');
    }

    public function uploadImageContentDivisi(Request $request)
    {
        $request->validate([
            'image' => 'required|file|mimes:jpg,png,jpeg,webp'
        ]);
    
        // Ambil nama file asli dari client
        $originalName = $request->file('image')->getClientOriginalName();
        // Simpan file dengan nama asli (gunakan storeAs agar nama file tidak diacak)
        $path = $request->file('image')->storeAs('DivisiAssets/ContentImage', $originalName, 'public');
        $imageUrl = asset('storage/' . $path);
    
        return response()->json([
            'success' => true,
            'image_url' => $imageUrl
        ]);
    }

    public function deleteImageContentDivisi(Request $request) {

        $request->validate([
            'imageUrl' => 'required|string',
        ]);
        
        $imageUrl = $request->input('imageUrl'); // Ambil dari body request
        
        // Ambil hanya nama file
        $fileName = basename($imageUrl);
        
        // dd($fileName);
        DivisiImages::where('filename', $fileName)->delete();

        // Sesuaikan path sesuai storage
        $filePath = 'DivisiAssets/ContentImage/' . $fileName;
    
        if (Storage::disk('public')->exists($filePath)) {
            Storage::disk('public')->delete($filePath);
            return response()->json(['success' => true, 'message' => 'File deleted successfully'], 200);
        }
    
        return response()->json(['success' => false, 'message' => 'File not found'], 400);
    }
}
