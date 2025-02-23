<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Divisi extends Model
{
    use HasFactory;

    protected $table = 'divisi';

    protected $fillable = [
        'nama', 'deskripsi', 'logo', 'jumlah_anggota'
    ];

    public function anggota()
    {
        return $this->hasMany(Anggota::class, 'divisi_id');
    }
}
