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

require __DIR__.'/auth.php';
