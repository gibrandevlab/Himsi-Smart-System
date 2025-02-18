<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Anggota;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function index(): Response
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request)
    {
        $request->validate([
            'login' => 'required', // Bisa NIM atau email
            'password' => 'required',
        ]);

        $login = $request->input('login');
        $password = $request->input('password');

        // Cek apakah input adalah email atau NIM
        $user = User::where('email', $login)->first();

        if (!$user) {
            $anggota = Anggota::where('nim', $login)->first();
            if ($anggota && $anggota->user) {
                $user = $anggota->user;
            }
        }

        if ($user && Hash::check($password, $user->password)) {
            Auth::login($user);
            $request->session()->regenerate();
            return redirect()->intended(route('dashboard'));
        }

        return back()->withErrors(['login' => 'Login gagal, periksa kembali NIM/Email dan Password.']);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
