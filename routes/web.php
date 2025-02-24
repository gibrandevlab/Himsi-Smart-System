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


require __DIR__.'/auth.php';
