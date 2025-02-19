<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Absensi;
use App\Models\Kegiatan;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AbsensiController extends Controller
{
    public function absen(Request $request)
    {
        $request->validate([
            'id_kegiatan' => 'required|exists:kegiatan,id',
            'latitude'    => 'required|numeric',
            'longitude'   => 'required|numeric',
        ]);

        $user = Auth::user();

        if (!$user->anggota) {
            return redirect()->back()->with('error', 'Profil anggota tidak ditemukan.');
        }

        $idAnggota = $user->anggota->id;

        $absensiExists = Absensi::where('id_kegiatan', $request->id_kegiatan)
            ->where('id_anggota', $idAnggota)
            ->exists();

        if ($absensiExists) {
            return redirect()->back()->with('error', 'Anda sudah melakukan absen untuk kegiatan ini.');
        }

        $kegiatan = Kegiatan::find($request->id_kegiatan);
        if (!$kegiatan) {
            return redirect()->back()->with('error', 'Kegiatan tidak ditemukan.');
        }

        if (!$kegiatan->kordinat_lokasi) {
            return redirect()->back()->with('error', 'Lokasi kegiatan tidak tersedia.');
        }

        $kordinat = explode(',', $kegiatan->kordinat_lokasi);
        if (count($kordinat) != 2) {
            return redirect()->back()->with('error', 'Format kordinat kegiatan tidak valid.');
        }
        $eventLat = floatval(trim($kordinat[0]));
        $eventLng = floatval(trim($kordinat[1]));

        $userLat = $request->latitude;
        $userLng = $request->longitude;

        $distance = $this->calculateDistance($userLat, $userLng, $eventLat, $eventLng);

        if ($distance > 300) {
            return redirect()->back()->with('error', 'Anda berada di luar jarak 300 meter dari lokasi kegiatan.');
        }

        Absensi::create([
            'id_kegiatan'      => $request->id_kegiatan,
            'id_anggota'       => $idAnggota,
            'status_kehadiran' => 'hadir',
        ]);

        return redirect()->back()->with('success', 'Absen berhasil.');
    }

    public function viewabsen()
    {
        $kegiatan = Kegiatan::orderBy('mulai', 'desc')->get();
        return Inertia::render('Users/Absen', ['kegiatan' => $kegiatan]);
    }

    private function calculateDistance($lat1, $lon1, $lat2, $lon2)
    {
        $earthRadius = 6371000;
        $deltaLat = deg2rad($lat2 - $lat1);
        $deltaLon = deg2rad($lon2 - $lon1);
        $a = sin($deltaLat / 2) * sin($deltaLat / 2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($deltaLon / 2) * sin($deltaLon / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
        return $earthRadius * $c;
    }
}
