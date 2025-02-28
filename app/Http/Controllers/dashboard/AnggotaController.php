<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Anggota;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    // Menampilkan daftar anggota
    public function index()
    {
        $anggota = Anggota::all();
        return view('anggota.index', compact('anggota'));
    }

    // Menampilkan form untuk membuat anggota baru
    public function create()
    {
        return view('anggota.create');
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
        return redirect()->route('anggota.index')->with('success', 'Data anggota berhasil dibuat.');
    }

    // Menampilkan detail satu anggota
    public function show(Anggota $anggota)
    {
        return view('anggota.show', compact('anggota'));
    }

    // Menampilkan form edit anggota
    public function edit(Anggota $anggota)
    {
        return view('anggota.edit', compact('anggota'));
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
        return redirect()->route('anggota.index')->with('success', 'Data anggota berhasil diperbarui.');
    }

    // Menghapus data anggota
    public function destroy(Anggota $anggota)
    {
        $anggota->delete();
        return redirect()->route('anggota.index')->with('success', 'Data anggota berhasil dihapus.');
    }
}

