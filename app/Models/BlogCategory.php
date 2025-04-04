<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $table = 'blog_kategori';

    protected $fillable = [
        'slug', 'nama', 'icon'
    ];

    public function anggota()
    {
        return $this->hasMany(Anggota::class, 'divisi_id');
    }
}
