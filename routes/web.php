<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\Guest\DivisionController;
use App\Http\Controllers\User\AbsensiController;
use App\Http\Controllers\Dashboard\AnggotaController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\Dashboard\ManageDivisiController;
use App\Http\Controllers\UploadImageTextEditor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

// Guest Routes
Route::get('/', [HomeController::class, 'Home'])->name('guest.home');
Route::get('/divisi/{id}', [DivisionController::class, 'DivisionById'])->name('guest.division.id');

Route::prefix('blog')->group(function () {
    Route::get('/', fn() => Inertia::render('Guest/Blog'))->name('blog');
    Route::get('/laravel-dasar', fn() => Inertia::render('Guest/DetailBlog'))->name('blog.detail');
});

// Dashboard Routes (akses untuk beberapa role)
Route::middleware(['role:superadmin|wakil_kordinator|ketua_kordinator|ketua_cabang|wakil_cabang|bendahara|sekretaris'])
    ->group(function () {
        Route::get('/profile-edit', fn() => Inertia::render('AdminTesting/KelolaDivisi/Index'))->name('profile.edit');
    });

// Admin Routes (khusus superadmin)
Route::middleware(['auth', 'role:superadmin'])
    ->group(function () {
        Route::resource('anggota', AnggotaController::class);
        Route::resource('users', UserController::class);
    });

// Divisi Routes
Route::prefix('divisi')->group(function () {
    Route::get('/pendidikan', fn() => Inertia::render('Guest/Divisi'))->name('divisi.pendidikan.home');
    Route::get('/rsdm', fn() => Inertia::render('Divisi/Rsdm/Home'))->name('divisi.rsdm.home');
    Route::get('/litbang', fn() => Inertia::render('Divisi/Litbang/Home'))->name('divisi.litbang.home');
    Route::get('/kominfo', fn() => Inertia::render('Divisi/Kominfo/Home'))->name('divisi.kominfo.home');
});

// Absensi Routes (khusus member)
Route::middleware(['role:member'])->group(function () {
    Route::post('/absen', [AbsensiController::class, 'absen'])->name('absen');
    Route::get('/absen', fn() => Inertia::render('Guest/Home'))->name('absen.view');
});

// Route ini cuma buat pengembangan ui dashboard kalo udah ada controller nya ntar bisa di ubah
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/MainDashboard');
});
Route::get('/dashboard/profile', function () {
    return Inertia::render('Dashboard/Profile');
});
Route::get('/dashboard/list-anggota', function () {
    return Inertia::render('Dashboard/Admin/ListAnggota/UserList');
});
Route::get('/dashboard/tambah-anggota', function () {
    return Inertia::render('Dashboard/Admin/ListAnggota/AddMembers');
});
Route::get('/dashboard/acara/mendatang', function () {
    return Inertia::render('Dashboard/User/Mendatang/Acara');
});
Route::get('/dashboard/pertemuan/mendatang', function () {
    return Inertia::render('Dashboard/User/Mendatang/Pertemuan');
});
Route::get('/dashboard/acara/detail', function () {
    return Inertia::render('Dashboard/Details/DetailAcara');
});
// Route::post('/upload-image', [UploadImageTextEditor::class, 'upload']);

// Dashboard Manage Divisi 
Route::resource('dashboard/manage-divisi', ManageDivisiController::class);
Route::post('upload-image-content-divisi', [ManageDivisiController::class, 'uploadImageContentDivisi'])->name('upload-image-content-divisi');
Route::delete('delete-image-content-divisi', [ManageDivisiController::class, 'deleteImageContentDivisi'])->name('delete-image-content-divisi');
Route::delete('delete-image-content-divisi-reload', [ManageDivisiController::class, 'deleteUnusedImages'])->name('delete-image-content-divisi-reload');
// End Dashboard Manage Divisi 

// Auth Routes
require __DIR__ . '/auth.php';