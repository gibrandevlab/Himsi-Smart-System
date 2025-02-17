<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FotoProker extends Model
{
    use HasFactory;

    protected $table = 'foto_proker';

    protected $fillable = [
        'id_proker',
        'file_foto',
    ];

    // Relasi: FotoProker milik suatu Proker
    public function proker()
    {
        return $this->belongsTo(Proker::class, 'id_proker');
    }
}
