# Bab 07: Melihat cara kerja website dari dekat

## Tujuan dan prasyarat

Anda akan menjalankan server file di loopback, membaca request dan response HTTP, serta memahami peran browser dan basis data. Selesaikan Bab 03 dan 06. Latihan hanya menyajikan folder berisi data dummy. Server bawaan Python cocok untuk demonstrasi lokal ini, bukan layanan produksi.

## Konsep

Browser bertindak sebagai **client** yang meminta sesuatu. **Server** menerima request dan mengirim response. URL `http://127.0.0.1:8000/nota.txt` terdiri dari skema `http`, host `127.0.0.1`, port `8000`, dan path `/nota.txt`. Port dapat dihilangkan jika memakai port bawaan skemanya.

Request punya **method**, tujuan, header, dan kadang body. `GET` biasanya meminta representasi sumber daya. `POST` lazim dipakai untuk mengirim data atau memulai tindakan. Header berisi metadata, misalnya jenis konten. Body membawa isi pesan. Response punya status, header, dan body. `200` menunjukkan permintaan berhasil dalam konteks operasi itu; `404` berarti sumber daya tidak ditemukan; `500` menyatakan kegagalan di sisi server. Kode `200` saja tidak menjamin logika bisnis benar.

HTTP tidak otomatis mengingat identitas pengguna di setiap request. Aplikasi dapat memakai **cookie**, yaitu data yang browser simpan dan kirim sesuai aturan domain, path, dan atributnya. **Session** biasanya menghubungkan pengenal tertentu dengan keadaan login. Cookie sesi perlu diperlakukan sebagai rahasia. Cookie tidak sama dengan password, tetapi penguasaannya dapat memberi akses sampai sesi berakhir atau dicabut.

**HTML** menyusun dokumen, **CSS** mengatur tampilan, dan **JavaScript** menjalankan logika di browser. Pengguna menguasai browser miliknya, sehingga server tidak boleh mempercayai pembatasan yang hanya berada di tampilan. Tombol admin yang disembunyikan tetap memerlukan pemeriksaan izin di server.

Basis data menyimpan informasi terstruktur. Dalam model relasional, **table** seperti lembar data, **row** seperti satu pesanan, dan **column** seperti ID atau status. **SQL** adalah bahasa untuk meminta atau mengubah data tersebut. **API** menyediakan cara terstruktur bagi program untuk berkomunikasi. API pesanan tetap membutuhkan pemeriksaan identitas dan hak akses, sama seperti halaman web.

## Praktik

### 1. Buat folder khusus yang akan disajikan

Di folder tutorial, buat folder `hasil-belajar/web-lab` melalui pengelola file. Buat file `nota.txt` di dalamnya, berisi:

```text
Laundry Aman
Pesanan demo L001
Status: siap diambil
```

Folder ini hanya boleh berisi materi dummy. Jangan menyajikan home, folder kerja kantor, atau folder yang mengandung secret. Python dapat menampilkan daftar folder bila halaman index tidak tersedia.

### 2. Nyalakan server lokal

Windows PowerShell, dari folder tutorial:

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

Linux/macOS:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

`-m` menjalankan modul bawaan. `8000` memilih port, `--bind` membatasi alamat dengar, dan `--directory` menentukan folder. Terminal tetap sibuk karena proses melayani request. Biarkan terminal ini terbuka, lalu buka `http://127.0.0.1:8000/nota.txt` di browser.

Anda kini memakai dua jendela: **terminal server** untuk menjalankan layanan dan **browser** untuk meminta file. Klik bilah alamat browser, ketik URL lengkap, lalu tekan Enter. Jangan mengetik URL sebagai perintah PowerShell dan jangan menutup terminal server karena terlihat “diam”. Setelah browser meminta nota, terminal dapat mencetak catatan permintaan. Hal itu membantu menghubungkan tindakan pada browser dengan proses server.

### 3. Periksa request di browser

Buka Developer Tools melalui menu browser atau F12, pilih tab Network, lalu muat ulang halaman. Pilih request `nota.txt`. Cari method, URL, status, response headers, serta isi response. Browser mungkin meminta favicon; request tambahan itu tidak berasal dari isi nota.

**Langkah observasi kecil:** buka tab Network terlebih dahulu, baru tekan tombol muat ulang halaman. Jika daftar kosong, permintaan mungkin sudah terjadi sebelum pencatatan dimulai. Pilih baris yang namanya `nota.txt`; catat `200` sebagai status dan teks nota sebagai isi. Anda tidak perlu memahami seluruh kolom. Selanjutnya ubah hanya bagian nama file pada URL agar perbandingannya jelas.

Kemudian buka `http://127.0.0.1:8000/tidak-ada.txt`. Server mengembalikan `404`. Bandingkan kedua request. Anda sudah mempunyai satu kasus berhasil dan satu gagal yang bisa diulang tanpa menghubungi sistem orang lain.

Jika curl tersedia, buka terminal kedua. Windows PowerShell:

```powershell
curl.exe -i http://127.0.0.1:8000/nota.txt
```

Linux/macOS:

```bash
curl -i http://127.0.0.1:8000/nota.txt
```

`-i` menyertakan response headers bersama body. Windows memakai `curl.exe` agar tidak tertukar dengan alias pada versi PowerShell tertentu. Hasilnya akan menyebut status HTTP dan teks nota. Versi HTTP pada response dapat berbeda dari website lain; yang diamati adalah server sederhana pada mesin Anda.

### 4. Baca contoh query

Bayangkan tabel pesanan mempunyai kolom `id`, `owner`, dan `status`. Query berikut berarti meminta status pesanan bernomor L001:

```sql
SELECT status FROM pesanan WHERE id = 'L001';
```

Query tersebut belum memeriksa siapa yang meminta. Jika aplikasi memanggilnya untuk pengguna mana pun, pelanggan lain mungkin memperoleh data yang bukan haknya. Bab otorisasi dan web security akan memisahkan dua masalah: keamanan penyusunan query serta pemeriksaan hak atas objek.

### 5. Hentikan server

Kembali ke terminal server dan tekan Ctrl+C. Muat ulang halaman dengan cache browser dinonaktifkan melalui Developer Tools. Koneksi baru seharusnya gagal karena tidak ada server yang melayani port tersebut. Jangan meninggalkan proses latihan berjalan tanpa tujuan.

## Hasil yang diharapkan

Anda mengamati response sukses dan `404`, membaca header serta body, lalu menghentikan server. Catatan Anda menerangkan peran setiap bagian URL dan alasan folder server dibatasi.

## Jika macet

`Address already in use` berarti port sedang dipakai; pilih 8001 dan ubah URL sesuai port baru. `Connection refused` biasanya meminta pemeriksaan proses dan port. Pastikan Anda membuka `http`, bukan `https`, pada server contoh ini. Jangan menghilangkan `--bind 127.0.0.1` atau menonaktifkan firewall sebagai jalan pintas.

## Latihan

Tambahkan file dummy kedua, minta melalui browser, lalu bandingkan path dan ukuran response. Jelaskan bagian mana yang akan berubah jika server memerlukan login. Sebutkan mengapa status `404` dan tampilan tombol yang tersembunyi belum cukup untuk membuktikan perlindungan data.

**Kasus diagnosis:** satu teman mendapat `404`, sementara teman lain mendapat pesan gagal tersambung. Tentukan pemeriksaan pertama untuk masing-masing tanpa mengubah firewall atau memasang ulang Python.

<details>
<summary>Pembahasan dua kegagalan yang berbeda</summary>

`404` berarti Anda mendapat jawaban HTTP dari server; periksa nama/path file dan folder yang disajikan. Gagal tersambung berarti browser belum memperoleh jawaban HTTP tersebut; periksa apakah server masih berjalan serta alamat dan portnya cocok. Ini pemeriksaan awal, bukan kesimpulan universal tentang seluruh penyebab. Mengganti banyak pengaturan sekaligus akan menyulitkan penentuan langkah yang memperbaiki masalah.

</details>

## Bukti kelulusan

Simpan tabel dua request berisi method, path, status, dan tujuan percobaan. Anda lulus jika dapat menjelaskan aliran browser ke server ke data, serta menunjukkan server sudah berhenti setelah latihan.

## Referensi

- [Python http.server](https://docs.python.org/3/library/http.server.html): opsi bind, folder, dan batas penggunaan.
- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
- [MDN: HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).
