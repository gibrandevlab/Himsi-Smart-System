<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    use HasFactory;

    protected $table = 'anggota';

    protected $fillable = [
        'nama',
        'nim',
        'status_aktif',
        'id_user',
        'periode',
        'divisi',
    ];

    // Relasi: Anggota milik User
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    // Relasi: Sebagai PIC pada kegiatan
    public function kegiatanAsPIC()
    {
        return $this->hasMany(Kegiatan::class, 'id_pic');
    }

    // Relasi: Anggota memiliki banyak absensi
    public function absensis()
    {
        return $this->hasMany(Absensi::class, 'id_anggota');
    }
}
