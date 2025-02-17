<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Tabel users
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->enum('role', ['admin', 'member', 'guest']);
        });

        // Tabel password_reset_tokens
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // Tabel sessions
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index()->constrained('users')->onDelete('cascade');
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        // Tabel cache
        Schema::create('cache', function (Blueprint $table) {
            $table->string('key')->primary();
            $table->mediumText('value');
            $table->integer('expiration');
        });

        // Tabel cache_locks
        Schema::create('cache_locks', function (Blueprint $table) {
            $table->string('key')->primary();
            $table->string('owner');
            $table->integer('expiration');
        });

        // Tabel jobs
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('queue')->index();
            $table->longText('payload');
            $table->unsignedTinyInteger('attempts');
            $table->unsignedInteger('reserved_at')->nullable();
            $table->unsignedInteger('available_at');
            $table->unsignedInteger('created_at');
        });

        // Tabel job_batches
        Schema::create('job_batches', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name');
            $table->integer('total_jobs');
            $table->integer('pending_jobs');
            $table->integer('failed_jobs');
            $table->longText('failed_job_ids');
            $table->mediumText('options')->nullable();
            $table->integer('cancelled_at')->nullable();
            $table->integer('created_at');
            $table->integer('finished_at')->nullable();
        });

        // Tabel failed_jobs
        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique();
            $table->text('connection');
            $table->text('queue');
            $table->longText('payload');
            $table->longText('exception');
            $table->timestamp('failed_at')->useCurrent();
        });

        // Tabel anggota
        Schema::create('anggota', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nim')->unique();
            $table->tinyInteger('status_aktif');
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade');
            $table->string('periode');
            $table->enum('divisi', ['pendidikan', 'litbang', 'kominfo', 'rsdm']);
        });

        // Tabel kegiatan
        Schema::create('kegiatan', function (Blueprint $table) {
            $table->id();
            $table->enum('jenis_kegiatan', ['event', 'rapat']);
            $table->string('nama_kegiatan');
            $table->text('deskripsi');
            $table->dateTime('mulai');
            $table->dateTime('selesai');
            $table->foreignId('id_pic')->constrained('anggota')->onDelete('cascade');
            $table->tinyInteger('status');
        });

        // Tabel absensi
        Schema::create('absensi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_kegiatan')->constrained('kegiatan')->onDelete('cascade');
            $table->foreignId('id_anggota')->constrained('anggota')->onDelete('cascade');
            $table->enum('status_kehadiran', ['hadir', 'sakit', 'izin', 'absen']);
        });

        // Tabel catatan
        Schema::create('catatan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_kegiatan')->nullable();
            $table->foreign('id_kegiatan')->references('id')->on('kegiatan')->onDelete('set null');
            $table->text('isi_catatan');
        });

        // Tabel dokumen
        Schema::create('dokumen', function (Blueprint $table) {
            $table->id();
            $table->enum('jenis_dokumen', ['umum', 'sertifikat']);
            $table->string('file');
            $table->string('nama_dokumen');
            $table->unsignedBigInteger('id_kegiatan')->nullable();
            $table->foreign('id_kegiatan')->references('id')->on('kegiatan')->onDelete('set null');
        });

        // Tabel proker (dibuat terlebih dahulu karena akan direferensikan)
        Schema::create('proker', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->text('deskripsi');
        });

        // Tabel foto_proker (mengacu ke tabel proker)
        Schema::create('foto_proker', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_proker')->constrained('proker')->onDelete('cascade');
            $table->string('file_foto');
        });

        // Tabel transaksi_keuangan
        Schema::create('transaksi_keuangan', function (Blueprint $table) {
            $table->id();
            $table->enum('jenis_transaksi', ['pemasukan', 'pengeluaran', 'denda']);
            $table->date(column: 'tanggal');
            $table->enum('bulan', [
                'Januari',
                'Februari',
                'Maret',
                'April',
                'Mei',
                'Juni',
                'Juli',
                'Agustus',
                'September',
                'Oktober',
                'November',
                'Desember'
            ]);
            $table->float('jumlah');
            $table->text('keterangan');
        });

        // Tabel galeri
        Schema::create('galeri', function (Blueprint $table) {
            $table->id();
            $table->string('file_foto');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galeri');
        Schema::dropIfExists('transaksi_keuangan');
        Schema::dropIfExists('foto_proker');
        Schema::dropIfExists('proker');
        Schema::dropIfExists('dokumen');
        Schema::dropIfExists('catatan');
        Schema::dropIfExists('absensi');
        Schema::dropIfExists('kegiatan');
        Schema::dropIfExists('anggota');
        Schema::dropIfExists('failed_jobs');
        Schema::dropIfExists('job_batches');
        Schema::dropIfExists('jobs');
        Schema::dropIfExists('cache_locks');
        Schema::dropIfExists('cache');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('users');
    }
};
