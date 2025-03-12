<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\Divisi;


class HomeController extends Controller
{
    public function Home()
    {
        $divisions = Divisi::orderBy('nama', 'ASC')->get()->toArray();
        $data = [
            'title' => "Beranda / Himsi Kaliabang",
            'divisions' => $divisions,
        ];
        return Inertia::render('Guest/Home', $data);
    }
}
