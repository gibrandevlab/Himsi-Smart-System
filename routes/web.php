<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

#Homepages
Route::get('/', function () {
    return Inertia::render('Guest/Home');
});

#WriteandReadDataAccess Routes
Route::middleware(['role:superadmin', 'role:wakil_kordinator', 'role:ketua_kordinator', 'role:ketua_cabang', 'role:wakil_cabang', 'role:bendahara', 'role:sekretaris'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
});


#ReadDataAccess Routes
Route::group(['prefix' => 'divisi'], function () {
    Route::get('/pendidikan', function () {
        return Inertia::render('Divisi/Pendidikan/Home');
    });

    Route::get('/rsdm', function () {
        return Inertia::render('Divisi/Rsdm/Home');
    });

    Route::get('/litbang', function () {
        return Inertia::render('Divisi/Litbang/Home');
    });

    Route::get('/kominfo', function () {
        return Inertia::render('Divisi/Kominfo/Home');
    });
});
require __DIR__.'/auth.php';
