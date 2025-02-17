<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proker extends Model
{
    use HasFactory;

    protected $table = 'proker';

    protected $fillable = [
        'judul',
        'deskripsi',
    ];

    // Relasi: Proker memiliki banyak foto
    public function fotoProkers()
    {
        return $this->hasMany(FotoProker::class, 'id_proker');
    }
}
