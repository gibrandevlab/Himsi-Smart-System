<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use Inertia\Inertia;

use App\Models\BlogCategory;
use App\Models\Blog;
use App\Models\BlogImages;


class ManageBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data_blog = Blog::join('blog_kategori', 'blog.kategori_blog_id', '=', 'blog_kategori.id')
        ->select('blog.*', 'blog_kategori.id as id_kategori_blog', 'blog_kategori.nama as nama_kategori_blog', 'blog_kategori.icon as icon_kategori_blog')
        ->get()
        ->toArray();
        $data = [
            'data_blog' => $data_blog,
        ];
        return Inertia::render('Dashboard/Admin/ManageBlog/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data_blog_category = BlogCategory::get()->toArray();
        $data = [
            'data_blog_category' => $data_blog_category,
        ];
        return Inertia::render('Dashboard/Admin/ManageBlog/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'judul' => 'required',
            'kategori_blog' => 'required',
            'konten' => 'required',
            'status' => 'required',
            'banner' => 'required|file|mimes:jpg,png,jpeg,webp',
        ]);

        $Blog = new Blog();

        if ($request->hasFile('banner')) {
            $banner = $request->file('banner');
            $banner_name = 'banner-blog-' . Str::uuid() . '.' . $banner->getClientOriginalExtension();
            $banner->storeAs('BlogAssets/Banner', $banner_name, 'public');

            $Blog->banner = $banner_name;
        }

        $Blog->slug = Str::slug($request->judul);
        $Blog->judul = $request->judul;
        $Blog->kategori_blog_id = $request->kategori_blog;
        $Blog->konten = $request->konten;
        $Blog->status = $request->status;
        $Blog->save();

        // Proses simpan data blog konten images jika ada
        if ($request->has('images') && is_array($request->input('images'))) {
            foreach ($request->input('images') as $image) {
                $BlogImages = new BlogImages();
                $BlogImages->blog_id = $Blog->id;
                $BlogImages->filename = $image;
                $BlogImages->save();
            }
        }

        return redirect()->route('manage-blog.index')->with('success', 'Data created successfully.');    
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data_blog = Blog::join('blog_kategori', 'blog.kategori_blog_id', '=', 'blog_kategori.id')
        ->select('blog.*', 'blog_kategori.id as id_kategori_blog', 'blog_kategori.nama as nama_kategori_blog', 'blog_kategori.icon as icon_kategori_blog')
        ->where('blog.id', $id)
        ->firstOrFail();

        $data = [
            'data_blog' => $data_blog,
        ];
        return Inertia::render('Dashboard/Admin/ManageBlog/Show', $data);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data_blog = Blog::join('blog_kategori', 'blog.kategori_blog_id', '=', 'blog_kategori.id')
        ->select('blog.*', 'blog_kategori.id as id_kategori_blog', 'blog_kategori.nama as nama_kategori_blog', 'blog_kategori.icon as icon_kategori_blog')
        ->where('blog.slug', $id)
        ->firstOrFail();

        $data_blog_category = BlogCategory::get()->toArray();

        $data = [
            'data_blog' => $data_blog,
            'data_blog_category' => $data_blog_category,
        ];

        return Inertia::render('Dashboard/Admin/ManageBlog/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'data_form.judul' => 'required',
            'data_form.kategori_blog' => 'required',
            'data_form.konten' => 'required',
            'data_form.status' => 'required',
            'data_form.banner' => $request->hasFile('data_form.banner') ? 'file|mimes:jpg,png,jpeg,webp' : 'sometimes|string',
        ]);

        $Blog = Blog::where('id', $id)->first();

        if ($request->hasFile('data_form.banner')) {
            $image = $request->file('data_form.banner');

            $image_name = 'banner-blog-' . Str::uuid() . '.' . $image->getClientOriginalExtension();

            $image->storeAs('BlogAssets/banner', $image_name, 'public');

            if ($Blog->banner) {
                $oldFilePath = 'BlogAssets/Banner/' . $Blog->banner;
                if (Storage::disk('public')->exists($oldFilePath)) {
                    Storage::disk('public')->delete($oldFilePath);
                }
            }
            $Blog->banner = $image_name;
        }
        
        $Blog->slug = Str::slug($request->input("data_form.judul"));
        $Blog->judul = $request->input("data_form.judul");
        $Blog->kategori_blog_id = $request->input("data_form.kategori_blog");
        $Blog->konten = $request->input("data_form.konten");
        $Blog->status = $request->input("data_form.status");
        $Blog->save();

        BlogImages::where('id', $Blog->id)->delete();
        if ($request->has('data_form.images') && is_array($request->input('data_form.images'))) {
            foreach ($request->input('data_form.images') as $imageName) {
                $BlogImagesModel = new BlogImages();
                $BlogImagesModel->blog_id = $Blog->id;
                $BlogImagesModel->filename = $imageName;
                $BlogImagesModel->save();
            }
        }

        return redirect()->route('manage-blog.index')->with('success', 'Data update successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog = Blog::where('id', $id)->first();
        if (!$blog) {
            return redirect()->back()->with('error', 'Data not found.');
        }

        $blog_id = $blog->id;
        $blogImages = BlogImages::where('blog_id', $blog_id)->get();

        // Looping untuk menghapus file gambar konten
        foreach ($blogImages as $image) {
            $filePath = 'BlogAssets/ContentImage/' . $image->filename;
            if (Storage::disk('public')->exists($filePath)) {
                Storage::disk('public')->delete($filePath);
            }
        }

        BlogImages::where('blog_id', $blog_id)->delete();

        if ($blog->banner) {
            $oldBannerPath = 'BlogAssets/Banner/' . $blog->banner;
            if (Storage::disk('public')->exists($oldBannerPath)) {
                Storage::disk('public')->delete($oldBannerPath);
            }
        }

        $blog->delete();

        return redirect()->back()->with('success', 'Data deleted successfully.');
    }

    public function uploadImageContentBlog(Request $request)
    {
        $request->validate([
            'image' => 'required|file|mimes:jpg,png,jpeg,webp'
        ]);

        $originalName = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->storeAs('BlogAssets/ContentImage', $originalName, 'public');
        $imageUrl = asset('storage/' . $path);

        return response()->json([
            'success' => true,
            'image_url' => $imageUrl
        ]);
    }

    public function deleteImageContentBlog(Request $request)
    {
        $request->validate([
            'imageUrl' => 'required|string',
        ]);

        $imageUrl = $request->input('imageUrl');
        $fileName = basename($imageUrl);

        $image = BlogImages::where('filename', $fileName)->first();
        $filePath = 'BlogAssets/ContentImage/' . $fileName;

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
