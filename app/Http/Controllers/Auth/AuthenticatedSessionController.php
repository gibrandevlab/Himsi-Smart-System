<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Anggota;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Menampilkan halaman login.
     */
    public function index(): Response
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * Menangani permintaan autentikasi masuk.
     */
    public function store(Request $request)
    {
        $request->validate([
            'login'    => 'required', // Bisa NIM atau email
            'password' => 'required',
            // Jika menggunakan reCAPTCHA, tambahkan validasi di sini.
        ]);

        // Menggabungkan input login dan IP untuk membuat key pembatasan.
        $loginInput = $request->input('login');
        $throttleKey = Str::lower($loginInput) . '|' . $request->ip();

        // Cek apakah jumlah percobaan melebihi batas (misal: 5 kali)
        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            return back()->withErrors(['login' => "Terlalu banyak percobaan login. Silakan coba lagi dalam {$seconds} detik."]);
        }

        $password = $request->input('password');

        // Cek apakah input merupakan email atau NIM.
        $user = User::where('email', $loginInput)->first();

        if (!$user) {
            $anggota = Anggota::where('nim', $loginInput)->first();
            if ($anggota && $anggota->user) {
                $user = $anggota->user;
            }
        }

        if ($user && Hash::check($password, $user->password)) {
            // Jika login berhasil, hapus hitungan rate limiter.
            RateLimiter::clear($throttleKey);

            // Login dan regenerasi session untuk keamanan.
            Auth::login($user);
            $request->session()->regenerate();

            return redirect()->intended(route('dashboard'));
        }

        // Tambahkan hit rate limiter jika login gagal (blokir selama 60 detik untuk setiap percobaan gagal).
        RateLimiter::hit($throttleKey, 60);

        return back()->withErrors(['login' => 'Login gagal, periksa kembali NIM/Email dan Password.']);
    }

    /**
     * Menghentikan sesi autentikasi.
     */
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
