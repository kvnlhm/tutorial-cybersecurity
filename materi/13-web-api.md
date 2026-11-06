# Bab 13: Menemukan dan memperbaiki kelemahan web dan API

## Tujuan dan prasyarat

Anda telah belajar HTTP, SQL, login, dan scope pengujian. Bab ini mempertemukan konsep tersebut dalam dua lab offline dan jalur latihan resmi. Sediakan 4–8 sesi. Fokus awal ialah memahami asal masalah dan perbaikannya; hafalan payload tidak cukup untuk menguji aplikasi baru.

## Konsep

Aplikasi Laundry Aman menerima masukan seperti nomor nota, alamat, dan nama file. Pengembang harus memutuskan bagian mana yang merupakan data, siapa yang boleh menggunakannya, dan komponen apa yang boleh menerima masukan tersebut. Kesalahan pada batas ini melahirkan beberapa keluarga kelemahan.

| Kelemahan | Penjelasan sederhana | Contoh pada laundry | Arah perbaikan |
|---|---|---|---|
| SQL injection | Aplikasi mencampur masukan dengan instruksi database | Pencarian pelanggan mengubah arti query | Parameterisasi query; pembatasan hak database |
| XSS | Browser menjalankan masukan pengguna sebagai kode | Catatan pesanan tampil sebagai HTML aktif | Encoding sesuai konteks; API DOM yang aman |
| CSRF | Situs lain memicu tindakan dengan sesi pengguna | Browser kasir mengirim perubahan alamat yang tidak ia maksud | Token anti-CSRF dan kontrol origin sesuai rancangan |
| IDOR/BOLA | Server tidak memeriksa hak terhadap objek | Alice mengganti nomor nota dan membaca milik Bob | Pemeriksaan pemilik/izin di server |
| SSRF | Server mengakses tujuan jaringan dari masukan yang tidak dibatasi | Fitur ambil gambar menghubungi layanan internal | Batasi tujuan/protokol dan akses jaringan keluar |
| Path traversal | Masukan nama file keluar dari direktori yang diizinkan | Fitur unduh membaca file di luar folder nota | Pemetaan ID ke file; pemeriksaan jalur kanonis |

**API**, *application programming interface*, adalah kontrak komunikasi program. Endpoint API tetap memerlukan autentikasi, otorisasi objek, validasi tipe dan ukuran data, serta pembatasan sumber daya. JSON tidak membuat endpoint kebal terhadap kelemahan. **Mass assignment** muncul ketika aplikasi menerima terlalu banyak properti: pelanggan yang boleh mengganti alamat mungkin ikut mengirim properti peran administrator. Pilih properti yang boleh diubah secara eksplisit.

**Business logic flaw** adalah kesalahan aturan bisnis, misalnya kupon sekali pakai dapat dipakai berulang karena aplikasi tidak memperbarui statusnya secara atomik. Dua permintaan yang datang berdekatan dapat memunculkan **race condition**, ketika hasil tergantung urutan eksekusi. Pendalaman topik ini memerlukan transaksi database, constraint, dan pengujian konkurensi.

## Praktik

**1. Bandingkan query rentan dan query berparameter.** Dari folder tutorial jalankan:

```powershell
py labs/sql_demo.py
```

Linux/macOS menggunakan `python3`. Contoh membuat database latihan di memori. Buka sumbernya di editor. Temukan pemakaian penggabungan string pada jalur rentan serta placeholder parameter pada jalur aman. Masukan latihan `' OR 1=1 --` dapat mengubah kondisi query yang digabung sebagai teks. Pada query berparameter, database memperlakukannya sebagai nilai yang dicari.

Catat tiga hasil: pencarian nama normal, masukan latihan pada query rentan, dan masukan yang sama pada query aman. Hasil aman berupa daftar kosong karena tidak ada pelanggan bernama persis seperti string latihan. Perlindungan yang Anda pelajari ialah pemisahan instruksi dan data. Menghapus karakter apostrof dapat merusak nama sah dan tidak menggantikan parameterisasi. [PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) menyediakan penjelasan serta latihan lanjutan.

**2. Periksa akses objek.** Jalankan `py labs/access_demo.py`. Bandingkan Alice membaca nota 101 dengan Bob membaca nota yang sama. Tulis kondisi izin dalam bahasa manusia, lalu tunjuk baris yang menerapkannya. Tambahkan kasus pengguna belum login dan nomor nota yang tidak ada pada daftar pengujian Anda.

**3. Lakukan review tanpa mengeksekusi masukan.** Bayangkan pengembang menulis fitur: “ambil parameter `filename`, sambungkan ke folder nota, lalu buka hasilnya.” Tulis dua masalah yang perlu diperiksa: apakah hasil jalur tetap berada dalam direktori yang diizinkan, dan apakah pengguna berhak membaca nota itu. Pemeriksaan jalur dan otorisasi menyelesaikan masalah yang berbeda.

**4. Lanjutkan ke lab web resmi.** Buka [Web Security Academy](https://portswigger.net/web-security), buat akun gratis bila dibutuhkan untuk menyimpan progres, lalu pilih topik SQL injection atau Access control dan lab tingkat Apprentice. Baca tujuan lab dan buka instance latihan dari tombol peluncurnya. Gunakan hanya domain instance yang diberikan. Browser cukup untuk beberapa lab awal; lab lain memakai Burp Suite Community Edition dengan browser bawaan.

Untuk satu lab, tulis: fungsi normal, parameter yang diuji, dugaan kelemahan, perubahan permintaan, hasil, dan perbaikan. Coba sendiri sebelum membuka solusi resmi. Setelah selesai, tutup lab dan tulis ulang penyebab masalah tanpa melihat walkthrough. Anda belum memahami lab jika hanya mengingat string yang membuat indikatornya berubah.

**5. Buat kasus regresi.** Untuk SQL, periksa nama biasa, nama dengan apostrof, masukan latihan, serta nilai kosong. Untuk otorisasi, periksa pemilik, pengguna lain, tanpa login, dan objek yang tidak ada. Sampaikan perilaku yang diharapkan pada pengembang sebelum menilai hasil test.

## Hasil yang diharapkan

Contoh SQL rentan mengembalikan baris Alice dan Bob ketika menerima masukan latihan; versi aman mengembalikan `[]`. Contoh akses mengizinkan pemilik dan menolak pengguna lain. Anda mempunyai satu laporan lab resmi atau catatan `NOT_RUN` bila belum mengerjakannya, beserta daftar kasus regresi.

## Jika macet

Jika payload tidak berpengaruh pada lab resmi, periksa konteksnya: query numerik dan query string memiliki bentuk berbeda. Kembali ke materi SQL sebelum mencoba rangkaian payload acak. Jika proxy tidak menangkap permintaan, gunakan browser bawaan alat dan cek scope. Jangan memasang sertifikat intersepsi pada browser harian tanpa memahami pengaruhnya; browser khusus latihan memisahkan aktivitas pribadi.

## Latihan

Pilih satu topik tambahan, misalnya XSS atau CSRF. Tulis perjalanan data dari masukan sampai tindakan browser. Untuk XSS, jelaskan mengapa encoding HTML tidak otomatis cocok untuk konteks JavaScript. Untuk CSRF, jelaskan kapan browser mengirim kredensial secara otomatis. Buat rancangan perbaikan dan minimal satu kasus uji negatif.

## Bukti kelulusan

Anda dapat menjelaskan empat keluarga kelemahan, mendemonstrasikan dua lab lokal, dan mengusulkan kontrol yang sesuai dengan penyebabnya. Tahap lanjutan menuntut lab yang belum pernah Anda baca solusinya serta laporan yang dapat direproduksi orang lain.

## Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security): latihan web gratis.
- [PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) dan [access control](https://portswigger.net/web-security/access-control).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/): daftar pemeriksaan untuk memperluas cakupan.
