<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    use HasFactory;

    protected $table = 'anggota';

    protected $fillable = [
        'nama', 'nim', 'no_telpon', 'status_aktif', 'id_user', 'periode', 'divisi_id'
    ];


    public function divisi()
    {
        return $this->belongsTo(Divisi::class, 'divisi_id');
    }


    protected static function booted()
    {
        static::created(function ($anggota) {
            $anggota->divisi()->increment('jumlah_anggota');
        });

        static::deleted(function ($anggota) {
            $anggota->divisi()->decrement('jumlah_anggota');
        });
    }
}
