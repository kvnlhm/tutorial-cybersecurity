# Bab 07: Melihat cara kerja website dari dekat

Tahap 2 dari 6: Memahami cara sistem bekerja

## Tujuan dan prasyarat

Kamu akan menjalankan server file di loopback, membaca request dan response HTTP, serta memahami peran browser dan basis data.
Latihan ini membantumu melihat bagaimana aplikasi Laundry Aman melayani pelanggan melalui web.

Selesaikan [Bab 03](03-jaringan.md) untuk memahami port serta IP, dan [Bab 06](06-pemrograman.md) untuk menjalankan perintah Python.
Latihan ini hanya menyajikan folder berisi data dummy buatan.
Server bawaan Python cocok untuk demonstrasi lokal ini, bukan untuk layanan produksi di internet.

## Konsep

Pelanggan Laundry Aman membuka situs toko untuk memeriksa status cucian mereka.
Browser meminta halaman nota, lalu server mengirimkan data pakaian yang sudah selesai.
Komunikasi antara browser dan server terjadi melalui aturan protokol web yang teratur.
Selain menampilkan halaman, website juga menyimpan sesi login dan membaca basis data.
Kita akan mempelajari cara kerja alamat web, pesan permintaan, dan penyimpanan data.

### Membaca bagian alamat web (URL)

Dalam arsitektur web, program yang kamu pakai dibagi menjadi dua peran utama.

Aplikasi browser bertindak sebagai **client** yang meminta sesuatu dari sumber daya web.
Program di komputer tujuan yang menerima request dan mengirim response disebut **server**.

Saat pelanggan membuka alamat `http://127.0.0.1:8000/nota.txt`, alamat tersebut memuat beberapa komponen penting:

- Skema `http` menyatakan aturan komunikasi pengiriman data.
- Host `127.0.0.1` menunjukkan alamat komputer server tujuan.
- Port `8000` menunjukkan pintu layanan aplikasi yang sedang berjalan.
- Path `/nota.txt` menunjukkan jalur file dokumen yang diminta.

Port dapat dihilangkan jika memakai port bawaan skemanya, misalnya port 80 untuk HTTP biasa.

#### Cukup kenali dulu

- **URL**: alamat lengkap penunjuk lokasi sumber daya di web.
- **Skema**: aturan protokol komunikasi yang digunakan, seperti HTTP atau HTTPS.
- **Path**: jalur file atau endpoint yang dituju di komputer server.

### Mengikuti pertukaran request dan response HTTP

Setiap kali browser meminta halaman, ia mengirim pesan request dan menunggu response dari server.

Pesan request mempunyai **method**, tujuan path, deretan header, dan kadang memuat body pesan.
Method `GET` biasanya meminta representasi sumber daya tanpa mengubah data di server.
Method `POST` lazim dipakai untuk mengirim data baru atau memulai tindakan, seperti mengisi formulir pesanan.
Bagian header berisi metadata, misalnya jenis konten dokumen.
Bagian body membawa isi pesan yang dikirimkan.

Pesan response dari server mempunyai kode status, response headers, dan body isi data.
Kode status `200` menunjukkan permintaan berhasil dalam konteks operasi itu.
Kode status `404` berarti sumber daya atau file yang diminta tidak ditemukan di server.

Kode status `500` menyatakan kegagalan atau gangguan di sisi program server.
Kode `200` saja tidak menjamin logika bisnis benar; itu hanya menandakan komunikasi HTTP berjalan lancar.

#### Cukup kenali dulu

- **Status code**: kode angka tiga digit penanda hasil pemrosesan permintaan HTTP.
- **Response header**: informasi metadata dari server tentang jenis dan ukuran data yang dikirim.
- **Response body**: isi utama jawaban server yang ditampilkan oleh browser.

### Menjaga ingatan pengguna dengan cookie dan session

Protokol HTTP bersifat mandiri dan tidak otomatis mengingat identitas pengguna di setiap request.
Agar kasir tidak perlu mengetik password di setiap klik halaman, aplikasi memakai mekanisme ingatan khusus.

Aplikasi dapat memakai **cookie**, yaitu data kecil yang browser simpan dan kirim sesuai aturan domain, path, dan atributnya.
Mekanisme **session** biasanya menghubungkan pengenal acak tertentu dengan keadaan login pengguna di server.

Cookie sesi perlu diperlakukan sebagai rahasia penting.
Cookie tidak sama dengan password, tetapi penguasaannya dapat memberi akses sampai sesi berakhir atau dicabut oleh sistem.

#### Cukup kenali dulu

- **Stateless**: sifat protokol yang memperlakukan tiap permintaan secara terpisah tanpa ingatan bawaan.
- **Masa aktif sesi**: rentang waktu berlakunya sesi login sebelum kedaluwarsa.
- **Pencabutan sesi**: proses membatalkan izin sesi saat pengguna menekan tombol keluar.

### Komponen tampilan dan penyimpanan data di server

Di dalam jendela browser, tiga teknologi saling melengkapi untuk menyajikan halaman:

Bahasa **HTML** menyusun struktur dokumen teks, seperti paragraf dan judul nota.
Bahasa **CSS** mengatur tampilan visual, warna, dan tata letak halaman.
Bahasa **JavaScript** menjalankan logika interaktif langsung di komputer pengguna.

Pengguna menguasai penuh browser miliknya, sehingga server tidak boleh mempercayai pembatasan yang hanya berada di tampilan.
Tombol admin yang disembunyikan tetap memerlukan pemeriksaan izin di server.
Jika ada pelanggan nakal yang memunculkan kembali tombol itu, server tetap wajib menolak aksesnya.

Di bagian belakang, basis data menyimpan informasi secara teratur.
Dalam model relasional, komponen **table** seperti lembar data pesanan.
Komponen **row** seperti satu rekaman pesanan pelanggan.
Komponen **column** seperti kolom ID atau status cucian.

Bahasa **SQL** adalah bahasa untuk meminta atau mengubah data di basis data tersebut.
Sementara itu, **API** menyediakan cara terstruktur bagi program untuk berkomunikasi tanpa antarmuka grafis.
API pesanan tetap membutuhkan pemeriksaan identitas dan hak akses, sama seperti halaman web biasa.

<details>
<summary>Pendalaman opsional: risiko manipulasi tampilan browser</summary>

Pengguna dapat membuka Developer Tools browser untuk mengubah tampilan CSS atau memanipulasi kode JavaScript.
Menyembunyikan tombol atau kolom formulir di layar browser bukanlah pengamanan data.
Server aplikasi selalu wajib memvalidasi izin pengguna pada setiap permintaan data yang masuk.

</details>

### Ringkasan

- URL memuat skema, host, port, dan path untuk menunjuk data di server.
- HTTP bekerja dengan pasangan request (method, header, body) dan response (status, header, body).
- Cookie dan session menjaga status login pengguna; rawat cookie sesi sebagai rahasia.
- Server tidak boleh mengandalkan pembatasan tampilan browser karena pengguna menguasai perangkatnya sendiri.

### Cek pemahaman

1. Mengapa kode status HTTP `200` belum menjamin bahwa aturan bisnis aplikasi berjalan benar?
2. Apa bahayanya jika pembatasan hak admin hanya diterapkan dengan menyembunyikan tombol lewat CSS?
3. Mengapa cookie sesi harus dijaga kerahasiaannya mirip dengan password akun?

## Praktik

Kamu akan menjalankan server web sederhana di komputermu sendiri dan mengamati lalu lintas HTTP.
Siapkan dua jendela: satu jendela terminal dan satu jendela browser.

### 1. Buat folder khusus yang akan disajikan

Di folder tutorial, buat folder `hasil-belajar/web-lab` melalui pengelola file komputermu.
Buat file `nota.txt` di dalamnya, berisi teks berikut:

```text
Laundry Aman
Pesanan demo L001
Status: siap diambil
```

Folder ini hanya boleh berisi materi dummy untuk latihan.
Jangan menyajikan home, folder kerja kantor, atau folder yang mengandung secret.
Python dapat menampilkan daftar folder bila halaman index tidak tersedia.

### 2. Nyalakan server lokal

Buka terminal di folder utama tutorial.
Pilih jalur sesuai sistem operasi yang kamu gunakan:

**Windows PowerShell**

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

**Linux/macOS**

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

Opsi `-m` menjalankan modul bawaan Python.
Angka `8000` memilih port, `--bind` membatasi alamat dengar ke loopback, dan `--directory` menentukan folder yang dibagikan.
Terminal tetap sibuk karena proses melayani request secara terus-menerus.
Biarkan terminal ini terbuka, lalu buka alamat `http://127.0.0.1:8000/nota.txt` di browser.

Kamu kini memakai dua jendela: **terminal server** untuk menjalankan layanan dan **browser** untuk meminta file.
Klik bilah alamat browser, ketik URL lengkap, lalu tekan Enter.
Jangan mengetik URL sebagai perintah PowerShell dan jangan menutup terminal server karena terlihat “diam”.
Setelah browser meminta nota, terminal dapat mencetak catatan permintaan.
Hal itu membantu menghubungkan tindakan pada browser dengan proses server.

### 3. Periksa request di browser

Buka Developer Tools melalui menu browser atau tombol F12, pilih tab Network, lalu muat ulang halaman.
Pilih request `nota.txt`.
Cari method, URL, status, response headers, serta isi response di panel rincian.
Browser mungkin meminta favicon; request tambahan itu tidak berasal dari isi nota.

Ikuti langkah observasi kecil berikut:
Buka tab Network terlebih dahulu, baru tekan tombol muat ulang halaman.
Jika daftar kosong, permintaan mungkin sudah terjadi sebelum pencatatan dimulai.
Pilih baris yang namanya `nota.txt`; catat `200` sebagai status dan teks nota sebagai isi.
Kamu tidak perlu memahami seluruh kolom sekaligus.
Selanjutnya ubah hanya bagian nama file pada URL agar perbandingannya jelas.

Buka alamat `http://127.0.0.1:8000/tidak-ada.txt` di bilah alamat browser.
Server mengembalikan status `404`.
Bandingkan kedua request tersebut di panel Developer Tools.
Kamu sudah mempunyai satu kasus berhasil dan satu gagal yang bisa diulang tanpa menghubungi sistem orang lain.

Jika perintah curl tersedia di komputermu, buka jendela terminal kedua untuk mengamati respons mentah.

**Windows PowerShell**

```powershell
curl.exe -i http://127.0.0.1:8000/nota.txt
```

**Linux/macOS**

```bash
curl -i http://127.0.0.1:8000/nota.txt
```

Opsi `-i` menyertakan response headers bersama body data.
Windows memakai `curl.exe` agar tidak tertukar dengan alias pada versi PowerShell tertentu.
Hasilnya akan menyebut status HTTP dan teks nota.
Versi HTTP pada response dapat berbeda dari website lain; yang diamati adalah server sederhana pada mesinmu.

### 4. Baca contoh query

Bayangkan tabel pesanan di basis data mempunyai kolom `id`, `owner`, dan `status`.
Query berikut berarti meminta status pesanan bernomor L001:

```sql
SELECT status FROM pesanan WHERE id = 'L001';
```

Query tersebut belum memeriksa siapa pengguna yang meminta data.
Jika aplikasi memanggilnya untuk pengguna mana pun, pelanggan lain mungkin memperoleh data yang bukan haknya.
Bab otorisasi dan web security akan memisahkan dua masalah: keamanan penyusunan query serta pemeriksaan hak atas objek.

### 5. Hentikan server

Kembali ke jendela terminal server dan tekan tombol Ctrl+C untuk mematikan proses.
Muat ulang halaman dengan cache browser dinonaktifkan melalui Developer Tools.
Koneksi baru seharusnya gagal karena tidak ada server yang melayani port tersebut lagi.
Jangan meninggalkan proses latihan berjalan tanpa tujuan di komputermu.

## Hasil yang diharapkan

Kamu mengamati response sukses `200` dan `404`, membaca header serta body pesan, lalu menghentikan server dengan aman.
Catatan jurnalmu menerangkan peran setiap bagian URL dan alasan folder server dibatasi hanya untuk data lab.

## Jika macet

Jika server gagal menyala atau browser tidak menampilkan nota, gunakan panduan berikut.

| Pesan atau kendala | Solusi dan langkah aman |
|---|---|
| `Address already in use` | Port sedang dipakai; jalankan dengan port `8001` dan sesuaikan URL browser |
| Pesan `Connection refused` | Periksa apakah server di terminal masih menyala dan pastikan nomor port sesuai |
| Halaman tidak terbuka | Pastikan kamu membuka protokol `http`, bukan `https`, pada server latihan lokal ini |

Jangan menghilangkan `--bind 127.0.0.1` atau menonaktifkan firewall sebagai jalan pintas.

## Latihan

Tambahkan file dummy kedua di folder latihan, minta melalui browser, lalu bandingkan path dan ukuran response.
Jelaskan bagian mana yang akan berubah jika server memerlukan autentikasi login.
Sebutkan mengapa status `404` dan tampilan tombol yang tersembunyi belum cukup untuk membuktikan perlindungan data.

**Kasus diagnosis:**
Satu teman mendapat `404`, sementara teman lain mendapat pesan gagal tersambung.
Tentukan pemeriksaan pertama untuk masing-masing tanpa mengubah firewall atau memasang ulang Python.

<details>
<summary>Pembahasan dua kegagalan yang berbeda</summary>

Pesan `404` berarti kamu mendapat jawaban HTTP dari server; periksa nama file dan folder yang disajikan.
Gagal tersambung berarti browser belum memperoleh jawaban HTTP tersebut; periksa apakah server masih berjalan serta alamat dan portnya cocok.
Ini adalah pemeriksaan awal yang aman tanpa mengubah konfigurasi sistem secara drastis.
Mengganti banyak pengaturan sekaligus akan menyulitkan penentuan langkah yang memperbaiki masalah.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan tabel dua request berisi method, path, status, dan tujuan percobaan.
- [ ] Saya dapat menjelaskan aliran data dari browser menuju server hingga pembacaan basis data.
- [ ] Saya dapat menunjukkan bahwa server lokal sudah berhasil dihentikan setelah latihan selesai.
- [ ] Saya dapat membedakan peran HTML, CSS, JavaScript, dan perlindungan di server.

### Lanjut belajar

Jika alur request dan response HTTP belum lancar, ulangi permintaan file dengan variasi nama baru.
Buka kembali [Bab 03](03-jaringan.md) untuk menyegarkan pemahaman port dan protokol jaringan.
Setelah bukti kelulusan siap, lanjutkan ke [Bab 08: Kriptografi](08-kriptografi.md) untuk mempelajari enkripsi, hash, dan perlindungan HTTPS.

## Referensi

- [Python http.server](https://docs.python.org/3/library/http.server.html): opsi bind, folder, dan batas penggunaan.
- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
- [MDN: HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).
