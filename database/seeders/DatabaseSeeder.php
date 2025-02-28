<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // 1. Seeder untuk Users (1 data per role)
        $roles = [
            'superadmin',
            'wakil_kordinator',
            'ketua_kordinator',
            'ketua_cabang',
            'wakil_cabang',
            'bendahara',
            'sekretaris',
            'member',
            'guest',
        ];

        foreach ($roles as $role) {
            DB::table('users')->insert([
                'name'       => ucfirst($role),
                'email'      => $role.'@example.com',
                'password'   => Hash::make('password'),
                'role'       => $role,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        // 2. Seeder untuk Anggota (5 data)
        $userIds = DB::table('users')->pluck('id')->toArray();
        $divisi  = ['pendidikan', 'litbang', 'kominfo', 'rsdm'];

        for ($i = 0; $i < 5; $i++) {
            DB::table('anggota')->insert([
                'nama'         => 'Anggota ' . Str::random(5),
                'nim'          => 'NIM' . rand(10000, 99999),
                'status_aktif' => rand(0, 1),
                'id_user'      => $userIds[array_rand($userIds)],
                'periode'      => '2025',
                'divisi'       => $divisi[array_rand($divisi)],
            ]);
        }

        // 3. Seeder untuk Kegiatan (5 data)
        $anggotaIds = DB::table('anggota')->pluck('id')->toArray();
        $jenisKegiatan = ['event', 'rapat'];

        for ($i = 0; $i < 5; $i++) {
            $mulai   = Carbon::now()->addDays(rand(1, 10));
            $selesai = (clone $mulai)->addHours(rand(1, 5));

            DB::table('kegiatan')->insert([
                'jenis_kegiatan'  => $jenisKegiatan[array_rand($jenisKegiatan)],
                'nama_kegiatan'   => 'Kegiatan ' . Str::random(5),
                'deskripsi'       => 'Deskripsi ' . Str::random(10),
                'mulai'           => $mulai,
                'selesai'         => $selesai,
                'id_pic'          => $anggotaIds[array_rand($anggotaIds)],
                'kordinat_lokasi' => '0,0',
                'status'          => rand(0, 1),
            ]);
        }

        // 4. Seeder untuk Absensi (5 data)
        $kegiatanIds    = DB::table('kegiatan')->pluck('id')->toArray();
        $anggotaIds     = DB::table('anggota')->pluck('id')->toArray();
        $statusKehadiran = ['hadir', 'sakit', 'izin', 'absen'];

        for ($i = 0; $i < 5; $i++) {
            DB::table('absensi')->insert([
                'id_kegiatan'      => $kegiatanIds[array_rand($kegiatanIds)],
                'id_anggota'       => $anggotaIds[array_rand($anggotaIds)],
                'status_kehadiran' => $statusKehadiran[array_rand($statusKehadiran)],
            ]);
        }

        // 5. Seeder untuk Catatan (5 data)
        for ($i = 0; $i < 5; $i++) {
            DB::table('catatan')->insert([
                'id_kegiatan' => count($kegiatanIds) ? $kegiatanIds[array_rand($kegiatanIds)] : null,
                'isi_catatan' => 'Catatan ' . Str::random(10),
            ]);
        }

        // 6. Seeder untuk Dokumen (5 data)
        $jenisDokumen = ['umum', 'sertifikat'];

        for ($i = 0; $i < 5; $i++) {
            DB::table('dokumen')->insert([
                'jenis_dokumen' => $jenisDokumen[array_rand($jenisDokumen)],
                'file'          => 'file_' . Str::random(5) . '.pdf',
                'nama_dokumen'  => 'Dokumen ' . Str::random(5),
                'id_kegiatan'   => count($kegiatanIds) ? $kegiatanIds[array_rand($kegiatanIds)] : null,
            ]);
        }

        // 7. Seeder untuk Proker (5 data)
        for ($i = 0; $i < 5; $i++) {
            DB::table('proker')->insert([
                'judul'     => 'Proker ' . Str::random(5),
                'deskripsi' => 'Deskripsi proker ' . Str::random(10),
            ]);
        }

        // 8. Seeder untuk Foto Proker (5 data)
        $prokerIds = DB::table('proker')->pluck('id')->toArray();

        for ($i = 0; $i < 5; $i++) {
            DB::table('foto_proker')->insert([
                'id_proker' => $prokerIds[array_rand($prokerIds)],
                'file_foto' => 'foto_' . Str::random(5) . '.jpg',
            ]);
        }

        // 9. Seeder untuk Transaksi Keuangan (5 data)
        $bulan = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        $jenisTransaksi = ['pemasukan', 'pengeluaran', 'denda'];

        for ($i = 0; $i < 5; $i++) {
            DB::table('transaksi_keuangan')->insert([
                'jenis_transaksi' => $jenisTransaksi[array_rand($jenisTransaksi)],
                'tanggal'         => Carbon::now()->subDays(rand(1, 30))->toDateString(),
                'bulan'           => $bulan[array_rand($bulan)],
                'jumlah'          => rand(1000, 100000) / 100,
                'keterangan'      => 'Keterangan ' . Str::random(10),
            ]);
        }

        // 10. Seeder untuk Galeri (5 data)
        for ($i = 0; $i < 5; $i++) {
            DB::table('galeri')->insert([
                'file_foto' => 'galeri_' . Str::random(5) . '.jpg',
            ]);
        }
    }
}
