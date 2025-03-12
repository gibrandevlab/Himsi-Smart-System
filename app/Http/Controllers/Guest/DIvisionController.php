<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\Divisi;


class DivisionController extends Controller
{
    public function DivisionById($id)
    {
        $divisions = Divisi::get()->toArray();
        $divisionDetail = Divisi::where('nama', $id)->first();
        if ($divisionDetail) {
            $data = [
                'title' => "Divisi $id / Himsi Kaliabang",
                'divisions' => $divisions,
                'divisionDetail' => $divisionDetail,
            ];
            return Inertia::render('Guest/Divisi', $data);
        }

        abort(404);

    }
}
