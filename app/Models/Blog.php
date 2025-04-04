<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blog';

    protected $fillable = [
        'slug', 'judul', 'konten', 'banner', 'status'
    ];

    public function anggota()
    {
        return $this->hasMany(Anggota::class, 'divisi_id');
    }
}
