<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Inertia\Inertia;

use App\Models\BlogCategory;


class ManageBlogCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data_blog_category = BlogCategory::get()->toArray();
        $data = [
            'data_blog_category' => $data_blog_category,
        ];
        return Inertia::render('Dashboard/Admin/ManageBlogCategory/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Admin/ManageBlogCategory/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'icon' => 'required',
        ]);

        $BlogCategory = new BlogCategory();
        $BlogCategory->slug = Str::slug($request->nama);
        $BlogCategory->nama = $request->nama;
        $BlogCategory->icon = $request->icon;
        $BlogCategory->save();

        return redirect()->route('manage-blog-category.index')->with('success', 'Data created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        abort(404);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data_blog_category = BlogCategory::where('slug', $id)->firstOrFail();

        $data = [
            'data_blog_category' => $data_blog_category
        ];

        return Inertia::render('Dashboard/Admin/ManageBlogCategory/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'data_form.nama' => 'required',
            'data_form.icon' => 'required',
        ]);

        $BlogCategory = BlogCategory::where('slug', $id)->first();
        $BlogCategory->nama = $request->input('data_form.nama');
        $BlogCategory->icon = $request->input('data_form.icon');
        $BlogCategory->save();

        return redirect()->route('manage-blog-category.index')->with('success', 'Data update successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $BlogCategory = BlogCategory::where('slug', $id)->first();
        if (!$BlogCategory) {
            return redirect()->back()->with('error', 'Data not found.');
        }
        $BlogCategory->delete();
    }
}
