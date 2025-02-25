<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\AbsensiController;
use App\Http\Controllers\Dashboard\AnggotaController;
use App\Http\Controllers\Dashboard\UserController;

// Guest Routes
Route::get('/', fn() => Inertia::render('Guest/Home'))->name('home');
Route::prefix('blog')->group(function () {
    Route::get('/', fn() => Inertia::render('Guest/Blog'))->name('blog');
    Route::get('/laravel-dasar', fn() => Inertia::render('Guest/DetailBlog'))->name('blog.detail');
});

// Dashboard Routes (akses untuk beberapa role)
Route::middleware(['role:superadmin|wakil_kordinator|ketua_kordinator|ketua_cabang|wakil_cabang|bendahara|sekretaris'])
    ->group(function () {
        Contoh: Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
        Route::get('/profile-edit', fn() => Inertia::render('AdminTesting/KelolaDivisi/Index'))->name('profile.edit');
    });

// Admin Routes (khusus superadmin)
Route::middleware(['auth', 'role:superadmin'])
    ->group(function () {
        Route::resource('anggota', AnggotaController::class);
        Route::resource('users', UserController::class);
        Route::get('/kelola-divisi', fn() => Inertia::render('AdminTesting/KelolaDivisi/Index'))->name('kelola.divisi');
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

// Auth Routes
require __DIR__ . '/auth.php';
