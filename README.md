White Paper: HIMSI Smart System Branching Strategy
1. Pengembangan Fitur
Tujuan:
Mengembangkan fitur baru secara terpisah agar tidak mengganggu branch utama pengembangan.
Langkah-langkah:
1. Pastikan Branch Dasar Terbaru
•	Mulailah dengan memastikan bahwa branch development sudah ter-update dengan perubahan terbaru dari remote.
```bash
git checkout development
git pull origin development
```
2. Buat Branch Feature dari Development
•	Buat branch baru untuk fitur yang akan dikerjakan. Misalnya, untuk fitur login front-end:
```bash
git checkout -b feature/fitur-login-frontend
```
3. Kembangkan Fitur
•	Lakukan pengembangan pada branch feature yang baru dibuat.
```bash
git add .
git commit -m "Menambahkan komponen dasar halaman login frontend"
```
4. Push Branch ke Remote Repository
•	Setelah commit lokal, push branch ke GitHub agar bisa diakses dan direview oleh tim:
```bash
git push origin feature/fitur-login-frontend
```
2. Integrasi
Tujuan:
Menggabungkan fitur yang telah dikembangkan ke dalam branch development agar semua fitur bisa diuji bersama-sama.
Langkah-langkah:
1. Buka Pull Request (PR)
•	Di GitHub, buka PR dari branch feature (misalnya, feature/fitur-login-frontend) ke branch development.
2. Merge ke Branch Development
•	Setelah PR disetujui, lakukan merge ke branch development. Jika ingin melakukan merge secara lokal:
```bash
git checkout development
git pull origin development
git merge feature/fitur-login-frontend
git push origin development
```
3. Hapus Branch Feature (Opsional)
•	Setelah merge, branch feature bisa dihapus untuk menjaga kebersihan repository:
```bash
git branch -d feature/fitur-login-frontend
git push origin --delete feature/fitur-login-frontend
```
3. Pembuatan Rilis
Tujuan:
Menyiapkan versi rilis yang sudah stabil dan siap untuk final testing serta perbaikan minor sebelum deployment.
Langkah-langkah:
1. Buat Branch Release dari Development
•	Setelah seluruh fitur yang direncanakan telah diintegrasikan dan diuji di branch development, buat branch release.
```bash
git checkout development
git pull origin development
git checkout -b release/himsi-v1
```
2. Lakukan Final Testing dan Perbaikan
•	Di branch release, lakukan testing menyeluruh. Perbaiki bug kecil atau masalah yang ditemukan selama testing.
```bash
git add .
git commit -m "Bugfix dan final testing untuk Himsi v1"
```
3. Push Branch Release ke Remote
•	Kirim branch release ke repository remote:
```bash
git push origin release/himsi-v1
```
4. Deployment
Tujuan:
Mengimplementasikan rilis yang telah distabilkan ke lingkungan produksi (hosting).
Langkah-langkah:
1. Merge Branch Release ke Main
•	Setelah branch release sudah dianggap stabil dan telah lulus final testing, merge branch tersebut ke branch main:
```bash
git checkout main
git pull origin main
git merge release/himsi-v1
git push origin main
```
2. Deploy ke Hosting
•	Kode di branch main ini sudah siap untuk dideploy ke hosting produksi.
3. Tag Versi Rilis (Opsional)
•	Untuk menandai versi rilis, tambahkan tag:
```bash
git tag -a v1.0 -m "Release Himsi v1"
git push origin --tags
```
Ringkasan Alur Kerja
1. Pengembangan Fitur:
•	- Buat Branch Feature: Buat branch baru (misalnya, feature/fitur-login-frontend) dari development.
•	- Kerjakan Fitur: Lakukan pengembangan, commit secara berkala, dan push branch ke remote.
2. Integrasi:
•	- Merge ke Development: Buat Pull Request atau merge secara lokal dari branch feature ke development setelah fitur selesai dan direview.
3. Pembuatan Rilis:
•	- Buat Branch Release: Buat branch rilis (misalnya, release/himsi-v1) dari development.
•	- Final Testing: Lakukan testing dan perbaikan di branch release, kemudian push ke remote.
4. Deployment:
•	- Merge ke Main: Merge branch release ke main.
•	- Deploy: Deploy kode dari main ke hosting.
•	- Tag Rilis: Tandai versi rilis dengan tag jika diperlukan.
