<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\AbsensiController;
use App\Http\Controllers\DashboardController;

// Guest Routes
Route::get('/', fn() => Inertia::render('Guest/Home'))->name('home');

// Dashboard Routes (role: superadmin|wakil_kordinator|ketua_kordinator|ketua_cabang|wakil_cabang|bendahara|sekretaris)
Route::middleware([
    'role:superadmin|wakil_kordinator|ketua_kordinator|ketua_cabang|wakil_cabang|bendahara|sekretaris'
])->group(function () {
    // Route::get('/dashboard', action: [DashboardController::class, 'dashboard'])->name('dashboard');
});

// Divisi Routes
Route::prefix('divisi')->group(function () {
    Route::get('/pendidikan', fn() => Inertia::render('Guest/Divisi'))->name('divisi.pendidikan.home');
    Route::get('/rsdm', fn() => Inertia::render('Divisi/Rsdm/Home'))->name('divisi.rsdm.home');
    Route::get('/litbang', fn() => Inertia::render('Divisi/Litbang/Home'))->name('divisi.litbang.home');
    Route::get('/kominfo', fn() => Inertia::render('Divisi/Kominfo/Home'))->name('divisi.kominfo.home');
});

// Absensi Routes
Route::middleware(['role:member'])->group(function () {
    Route::post('/absen', [AbsensiController::class, 'absen'])->name('absen');
    Route::get('/absen', fn() => Inertia::render(component: 'Guest/Home'))->name('absen/view');
    // Route::get('/absen', [AbsensiController::class, 'viewabsen'])->name('absen/view');
});


// Authentication Routes
require __DIR__ . '/auth.php';
