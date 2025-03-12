<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DivisiImages extends Model
{
    use HasFactory;

    protected $table = 'divisi_images';

    protected $fillable = [
        'divisi_id', 'filename'
    ];

    // relasi model divisi
    public function divisi()
    {
        return $this->belongsTo(Divisi::class, 'divisi_id', 'id');
    }
}
