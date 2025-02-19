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
    public function store(Request $request) {
        $request->validate([
            'login'    => 'required',
            'password' => 'required',
        ]);

        $loginInput = $request->input('login');
        $throttleKey = Str::lower($loginInput) . '|' . $request->ip();

        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            return back()->withErrors(['login' => "Terlalu banyak percobaan login. Silakan coba lagi dalam {$seconds} detik."]);
        }

        $password = $request->input('password');

        $user = User::where('email', $loginInput)->first();

        if (!$user) {
            $anggota = Anggota::where('nim', $loginInput)->first();
            if ($anggota && $anggota->user) {
                $user = $anggota->user;
            }
        }

        if ($user && Hash::check($password, $user->password)) {
            RateLimiter::clear($throttleKey);

            if (!$user->role) {
                return back()->withErrors(['login' => 'Akun tidak memiliki role yang valid.']);
            }

            $remember = $request->has('remember');

            Auth::login($user, $remember);
            $request->session()->regenerate();

            if ($user->role === 'member') {
                return redirect()->route('absen/view');
            } elseif (!in_array($user->role, ['member', 'guest'])) {
                return redirect()->route('dashboard');
            }

            return back()->withErrors(['login' => 'Role tidak valid untuk login.']);
        }

        RateLimiter::hit($throttleKey, 60);

        return back()->withErrors(['login' => 'Login gagal, periksa kembali NIM/Email dan Password.']);
    }

    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
