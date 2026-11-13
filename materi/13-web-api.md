# Bab 13: Menemukan dan memperbaiki kelemahan web dan API

Tahap 3 dari 6: Menjaga dan menguji akses

## Tujuan dan prasyarat

Kamu akan membandingkan dua lab offline Laundry Aman, lalu memilih satu latihan web resmi.
Hasilnya berupa penjelasan penyebab kelemahan, usulan perbaikan, dan daftar pengujian.
Sisihkan 4–8 sesi agar kamu bisa memisahkan tiap percobaan.

Bekalmu adalah [Python dari Bab 06](06-pemrograman.md), [HTTP dan SQL dari Bab 07](07-web.md), serta [encoding dari Bab 08](08-kriptografi.md).
Ulangi [login dan izin pada Bab 09](09-identitas.md), juga [batas pengujian pada Bab 12](12-pentest.md).
Gunakan komputer dengan Python untuk lab lokal. Pakai data buatan dan hanya target latihan yang diizinkan.

## Konsep

Kasir mencari nota, memperbarui alamat, lalu mengunduh salinan untuk pelanggan.
Aplikasi harus membedakan isi permintaan dari perintah yang dijalankannya.
Aplikasi juga perlu memeriksa siapa yang boleh membaca atau mengubah tiap nota.
Kita akan mengikuti kesalahan pada perjalanan data ini, lalu membandingkan dua contoh lokal dan merancang perbaikannya.

### Masukan mana yang boleh dipakai aplikasi?

Aplikasi Laundry Aman menerima nomor nota, alamat, dan nama file.
Pengembang menentukan cara memperlakukan masukan itu, siapa yang boleh memakainya, serta komponen mana yang boleh menerimanya.

Kredensial dari Bab 09 adalah bukti untuk mengakses layanan, seperti password atau pengenal sesi.
Kita perlu memeriksa bagaimana browser mengirimkannya saat menilai kelemahan web.

**API**, singkatan dari *application programming interface*, adalah kontrak komunikasi antarprogram.
Bab 07 sudah mengenalkannya sebagai cara program saling berkomunikasi, misalnya meminta status nota.

Untuk permintaan status nota, server tetap memeriksa identitas, izin objek, serta tipe dan ukuran data.
Server juga membatasi pemakaian sumber daya, seperti jumlah pekerjaan yang dapat diminta.

#### Cukup kenali dulu

- **Endpoint**: titik tujuan permintaan pada API; pemeriksaan tadi tetap berlaku di sini.
- **JSON**: format teks untuk data terstruktur, misalnya nomor dan status nota; pemakaiannya tidak membuat endpoint kebal terhadap kelemahan.

### SQL injection: masukan mengubah instruksi pencarian

Kasir mencari nota satu pelanggan, tetapi aplikasi justru mengirim pesanan pelanggan lain.
**SQL injection** terjadi saat aplikasi mencampur masukan dengan instruksi basis data sehingga masukan dapat mengubah arti pencarian.

**Query** berarti permintaan kepada basis data, seperti pencarian status nota pada Bab 07.
Pengembang perlu memisahkan instruksi query dari nilai yang pengguna masukkan.

Bayangkan kasir mengisi kolom nama pada formulir pencarian yang sudah tetap.
**Parameterisasi** mengirim nilai masukan terpisah dari instruksi query.
Basis data lalu memperlakukan masukan sebagai nilai yang dicari. Pengembang juga perlu membatasi hak akses basis data sesuai kebutuhan aplikasi.

### IDOR/BOLA: nomor nota berubah, izin tidak diperiksa

Alice meminta nomor nota Bob. Aplikasi seharusnya memeriksa izin sebelum mengirim jawabannya.
**IDOR/BOLA** adalah kelemahan pemeriksaan hak terhadap objek yang diminta.
Jika pemeriksaan ini hilang, mengganti nomor nota membuat Alice membaca milik Bob.
Perbaikannya adalah memeriksa pemilik atau izin di server pada setiap permintaan.

### XSS: catatan pesanan berjalan sebagai kode

Kasir membuka catatan pesanan dari pelanggan. Browser seharusnya menampilkan isinya sebagai data.
**XSS** terjadi saat browser menjalankan masukan pengguna sebagai kode.
Contohnya, aplikasi menampilkan catatan pesanan sebagai HTML aktif sehingga isi catatan dapat mengubah perilaku halaman.

Encoding dari Bab 08 mengubah bentuk penyajian data.
Untuk mencegah XSS, pengembang perlu memakai encoding yang sesuai tempat data ditampilkan.
Aturan untuk teks HTML berbeda dari aturan untuk kode JavaScript.

#### Cukup kenali dulu

- **DOM**: bentuk dokumen halaman yang bisa dibaca dan diubah program di browser; gunakan API DOM yang aman untuk menampilkan data sebagai teks.

### CSRF: browser menjalankan tindakan yang tidak dimaksud pengguna

Kasir sedang login ketika membuka situs lain. Situs itu memicu permintaan perubahan alamat melalui browser kasir.
**CSRF** terjadi ketika situs lain memicu tindakan dengan kredensial yang browser pengguna kirim secara otomatis.
Browser mengirim permintaan memakai sesi kasir, padahal kasir tidak bermaksud mengubah alamat.

Bayangkan kasir memberi tanda pemeriksaan pada formulir yang ia keluarkan, lalu memeriksa tanda itu saat formulir kembali.
Pada aplikasi, **token anti-CSRF** adalah nilai rahasia yang sulit ditebak dan harus diverifikasi server sesuai sesi pengguna.
Situs lain seharusnya tidak dapat membaca atau menebaknya. Perbandingan formulir hanya menjelaskan tujuan pemeriksaan.

#### Cukup kenali dulu

- **Origin**: asal web berdasarkan skema, host, dan port; kontrol origin sesuai rancangan membantu membatasi permintaan dari asal lain.

### SSRF: server menghubungi tujuan yang tidak dibatasi

Fitur Laundry Aman mengambil gambar dari alamat yang pengguna kirim. Tujuan yang salah dapat mengarah ke layanan internal.
**SSRF** terjadi ketika server mengakses tujuan jaringan dari masukan yang tidak dibatasi.
Pengembang perlu membatasi tujuan, protokol, serta akses jaringan keluar.

### Path traversal: nama file membawa pembaca keluar folder

Kasir mengunduh nota. Aplikasi seharusnya mengambil file hanya dari folder nota yang diizinkan.
**Path traversal** terjadi ketika masukan nama file mengarah ke luar direktori yang diizinkan.
Misalnya, fitur unduh nota justru membaca file dari folder lain.
Pengembang dapat memetakan ID nota ke file yang boleh diakses.

Bayangkan berangkat dari ruang depan: masuk gudang, lalu kembali ke ruang depan.
Tujuan akhirnya tetap ruang depan.

**Jalur kanonis** menyatakan lokasi file setelah bagian jalur dan tautan simbolik diselesaikan, termasuk perpindahan ke folder induk.
Pengembang memeriksa apakah lokasi akhir tetap di direktori yang diizinkan dan apakah pengguna berhak membaca nota itu.
Perbandingan ruangan membantu mengikuti jalur; pemeriksaan tetap harus memakai lokasi file yang sebenarnya.

### Properti apa yang boleh diubah pelanggan?

Pelanggan mengirim alamat baru. Ia juga menyisipkan properti peran administrator yang tidak boleh ia ubah.
Pengembang harus memilih properti yang boleh diubah secara eksplisit.

#### Cukup kenali dulu

- **Mass assignment**: penerimaan terlalu banyak properti masukan sebagai perubahan data, seperti peran administrator pada contoh alamat tadi.

<details>
<summary>Pendalaman opsional: aturan bisnis dan permintaan bersamaan</summary>

Laundry Aman memberi kupon sekali pakai. Pemakaian kedua seharusnya ditolak.
**Business logic flaw** adalah kesalahan penerapan aturan bisnis.
Contohnya, kupon sekali pakai bisa dipakai berulang karena cara aplikasi memperbarui statusnya keliru.

**Atomik** berarti suatu operasi berlaku sebagai satu kesatuan.
Pada contoh, pemeriksaan dan pemakaian kupon tidak dijaga sebagai satu kesatuan.
Perbaikan harus mencegah dua permintaan lolos pemeriksaan dan memakai kupon yang sama.

**Race condition** terjadi ketika hasil bergantung pada urutan pelaksanaan operasi yang waktunya berdekatan.
Dua permintaan kupon yang datang berdekatan dapat memunculkan masalah ini.

Untuk mendalami perbaikan kupon, kenali bekal tambahan berikut:

- **Transaksi basis data**: pengelompokan operasi data menjadi satu kesatuan kerja.
- **Constraint**: aturan yang basis data periksa terhadap data.
- **Pengujian konkurensi**: pemeriksaan perilaku saat beberapa pekerjaan berlangsung bersamaan.

Dua lab lokal di bawah belum mengajarkan seluruh bekal ini.

</details>

### Ringkasan

- Pisahkan instruksi SQL dari nilai masukan melalui parameterisasi.
- Periksa izin membaca setiap nota di server.
- Sesuaikan perlindungan dengan tempat data dipakai: browser, basis data, file, atau koneksi jaringan.
- Batasi properti yang boleh diubah melalui API.

### Cek pemahaman

1. Mengapa query berparameter masih membutuhkan pemeriksaan izin terhadap nota?
2. Apa perbedaan jalur data pada XSS dan SSRF?
3. Mengapa server perlu membatasi properti meskipun masukan memakai JSON?

## Praktik

### 1. Bandingkan query rentan dan query berparameter

Pilih jalur sesuai perangkatmu. Buka terminal pada folder utama tutorial, yaitu folder yang memuat `README.md` dan `labs`.

**Windows PowerShell**

Jalankan perintah berikut:

```powershell
py labs/sql_demo.py
```

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Contoh membuat basis data latihan di memori. Buka sumbernya di editor.
Temukan penggabungan string pada jalur rentan.

Pada jalur aman, cari **placeholder**, yaitu penanda tempat nilai parameter akan dipakai.
Masukan latihan `' OR 1=1 --` dapat mengubah kondisi query yang digabung sebagai teks.
Pada query berparameter, basis data memperlakukannya sebagai nilai yang dicari.

Catat hasil berikut:

| Percobaan | Hasil yang diharapkan |
|---|---|
| Pencarian nama normal | Pesanan pelanggan yang dicari |
| Masukan latihan pada query rentan | Baris Alice dan Bob |
| Masukan sama pada query berparameter | Daftar kosong `[]` |

Hasil terakhir kosong karena tidak ada pelanggan bernama persis seperti masukan latihan.
Menghapus apostrof dapat merusak nama sah dan tidak menggantikan parameterisasi.
[PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) menyediakan penjelasan serta latihan lanjutan.

### 2. Periksa akses objek

Dari folder utama tutorial, pilih jalur yang sesuai.

**Windows PowerShell**

Jalankan `py labs/access_demo.py`.

**Linux/macOS**

Ganti `py` menjadi `python3` pada perintah langkah ini.

Bandingkan Alice membaca nota 101 dengan Bob membaca nota yang sama.
Alice harus diizinkan, sedangkan Bob ditolak.
Tulis kondisi izin dengan bahasa sehari-hari, lalu tunjuk baris sumber yang menerapkannya.
Tambahkan pengguna belum login dan nomor nota yang tidak ada ke daftar pengujianmu.

### 3. Tinjau fitur file tanpa mengeksekusi masukan

Bayangkan pengembang menulis fitur: “ambil parameter `filename`, sambungkan ke folder nota, lalu buka hasilnya.”
Tulis dua pemeriksaan yang dibutuhkan:

1. Apakah hasil jalur tetap berada dalam direktori yang diizinkan?
2. Apakah pengguna berhak membaca nota itu?

Pemeriksaan jalur membatasi lokasi file. Otorisasi membatasi siapa yang boleh membaca file tersebut.

### 4. Lanjutkan ke lab web resmi

Buka [Web Security Academy](https://portswigger.net/web-security). Buat akun gratis bila dibutuhkan untuk menyimpan progres.
Pilih SQL injection atau Access control, lalu lab tingkat Apprentice.
Baca tujuan lab dan buka **instance**, yaitu lingkungan latihan khusus, melalui tombol peluncurnya.
Gunakan hanya domain instance yang diberikan.

Browser cukup untuk beberapa lab awal.
Lab lain memakai Burp Suite Community Edition dengan browser bawaannya.
Untuk satu lab, catat fungsi normal, parameter yang diuji, dugaan kelemahan, perubahan permintaan, hasil, dan perbaikan.

Coba sendiri sebelum membuka solusi resmi.
Setelah selesai, tutup lab dan tulis ulang penyebab masalah tanpa melihat panduan solusinya.
Gunakan penjelasan penyebab untuk menilai pemahamanmu; hafalan string saja tidak cukup untuk menguji aplikasi baru.

### 5. Buat kasus regresi

**Kasus regresi** adalah pengujian untuk memeriksa apakah masalah kembali muncul setelah perubahan.
Tulis perilaku yang diharapkan, lalu sampaikan kepada pengembang sebelum menilai hasil test.

| Bagian | Kasus yang diperiksa |
|---|---|
| SQL | Nama biasa, nama dengan apostrof, masukan latihan, nilai kosong |
| Otorisasi | Pemilik, pengguna lain, tanpa login, objek yang tidak ada |

## Hasil yang diharapkan

Contoh SQL rentan mengembalikan baris Alice dan Bob untuk masukan latihan.
Versi aman mengembalikan `[]`.
Contoh akses mengizinkan pemilik dan menolak pengguna lain.

Kamu mempunyai satu laporan lab resmi atau catatan `NOT_RUN` jika belum mengerjakannya.
Simpan juga daftar kasus regresi dengan hasil yang diharapkan.

## Jika macet

**Payload** adalah masukan uji yang dibuat untuk memicu perilaku tertentu.
Jika payload tidak berpengaruh pada lab resmi, periksa konteks query.
Query numerik dan query string mempunyai bentuk berbeda. Ulangi materi SQL sebelum mencoba rangkaian payload acak.

**Proxy** adalah perantara yang dapat membantu memeriksa permintaan browser saat latihan.
Jika proxy tidak menangkap permintaan, gunakan browser bawaan alat dan periksa ruang lingkup pengujian.

**Sertifikat intersepsi** memungkinkan alat memeriksa isi komunikasi HTTPS yang melewatinya ketika browser mempercayai sertifikat tersebut.
Jangan memasang sertifikat intersepsi pada browser harian tanpa memahami pengaruhnya. Gunakan browser khusus latihan untuk memisahkan aktivitas pribadi.

## Latihan

Pilih satu topik tambahan, misalnya XSS atau CSRF.
Tulis perjalanan data dari masukan sampai tindakan browser.

- Untuk XSS, jelaskan mengapa encoding HTML tidak otomatis cocok untuk konteks JavaScript.
- Untuk CSRF, jelaskan kapan browser mengirim kredensial secara otomatis.

Buat rancangan perbaikan dan minimal satu **kasus uji negatif**, yaitu percobaan yang seharusnya ditolak atau dibatasi.
Gunakan penjelasan Konsep untuk menentukan kontrol yang sesuai penyebabnya.

## Bukti kelulusan

- [ ] Saya dapat menjelaskan empat keluarga kelemahan.
- [ ] Saya dapat mendemonstrasikan dua lab lokal.
- [ ] Saya dapat mengusulkan kontrol yang sesuai penyebab masalah.
- [ ] Untuk tahap lanjutan, saya mengerjakan lab yang belum pernah saya baca solusinya.
- [ ] Untuk tahap lanjutan, saya membuat laporan yang dapat direproduksi orang lain.

### Lanjut belajar

Jika izin objek masih membingungkan, ulangi [Bab 09](09-identitas.md).
Kembali ke [Bab 12](12-pentest.md) untuk memeriksa batas pengujian dan bentuk laporan.
Setelah bukti siap, lanjut ke [Bab 14: lalu lintas jaringan](14-jaringan.md).

## Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security): latihan web gratis.
- [PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) dan [access control](https://portswigger.net/web-security/access-control).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/): daftar pemeriksaan untuk memperluas cakupan.
