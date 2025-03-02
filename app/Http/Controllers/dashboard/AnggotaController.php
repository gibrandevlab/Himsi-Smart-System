<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Anggota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class AnggotaController extends Controller
{

    public function index()
    {
        $anggota = Anggota::paginate(15);
        return view('anggota.index', compact('anggota'));
    }

    // Menyimpan data anggota baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama'         => 'required|string|max:255',
            'nim'          => 'required|string|max:50|unique:anggota',
            'status_aktif' => 'required|boolean',
            'id_user'      => 'required|exists:users,id',
            'periode'      => 'required|string|max:50',
            'divisi'       => 'required|string|max:100',
            'no_telpon'    => 'required|string|max:15',
        ]);

        Anggota::create($validated);
        return redirect()->route('anggota.index')
                         ->with('success', 'Data anggota berhasil dibuat.');
    }

    // Memperbarui data anggota
    public function update(Request $request, Anggota $anggota)
{
    $validated = $request->validate([
        'nama'         => 'required|string|max:255',
        'nim'          => 'required|string|max:50|unique:anggota,nim,' . $anggota->id,
        'status_aktif' => 'required|boolean',
        'id_user'      => 'required|exists:users,id',
        'periode'      => 'required|string|max:50',
        'divisi'       => 'required|string|max:100',
        'no_telpon'    => 'required|string|max:15',
    ]);

    $anggota->update($validated);
    return redirect()->route('anggota.index')
                     ->with('success', 'Data anggota berhasil diperbarui.');
}

    // Menghapus data anggota
    public function destroy(Anggota $anggota)
    {
        $anggota->delete();
        return redirect()->route('anggota.index')
                         ->with('success', 'Data anggota berhasil dihapus.');
    }
}
