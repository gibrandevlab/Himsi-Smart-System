<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogImages extends Model
{
    use HasFactory;

    protected $table = 'blog_images';

    protected $fillable = [
        'blog_id', 'filename'
    ];

    // relasi model divisi
    public function divisi()
    {
        return $this->belongsTo(Divisi::class, 'blog_id', 'id');
    }
}
