<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    use HasFactory;

    protected $table = 'kegiatan';

    protected $fillable = [
        'id',
        'jenis_kegiatan',
        'nama_kegiatan',
        'deskripsi',
        'mulai',
        'selesai',
        'id_pic',
        'status',
        'kordinat_lokasi',
    ];

    protected $dates = [
        'mulai',
        'selesai',
    ];

    // Relasi: Kegiatan memiliki PIC yang merupakan data Anggota
    public function pic()
    {
        return $this->belongsTo(Anggota::class, 'id_pic');
    }

    // Relasi: Kegiatan memiliki banyak absensi
    public function absensis()
    {
        return $this->hasMany(Absensi::class, 'id_kegiatan');
    }

    // Relasi: Kegiatan memiliki banyak catatan
    public function catatans()
    {
        return $this->hasMany(Catatan::class, 'id_kegiatan');
    }

    // Relasi: Kegiatan memiliki banyak dokumen
    public function dokumens()
    {
        return $this->hasMany(Dokumen::class, 'id_kegiatan');
    }
}
