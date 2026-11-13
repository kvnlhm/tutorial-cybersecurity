# Bab 09: Identitas, login, dan hak akses

Tahap 3 dari 6: Menjaga dan menguji akses

## Tujuan dan prasyarat

Kamu akan memisahkan identitas, sesi login, dan izin tindakan pada Laundry Aman.
Hasilnya berupa matriks akses, diagram keputusan server, dan catatan uji contoh lokal.

Bekalmu adalah [permintaan HTTP dan cookie dari Bab 07](07-web.md) serta [hash dan HTTPS dari Bab 08](08-kriptografi.md).
Sediakan 2–3 sesi belajar dan folder catatan pribadi.
Pakai data latihan saja. Jangan memakai akun atau data pelanggan sungguhan.

## Konsep

Kasir Laundry Aman menerima kartu pelanggan sebelum menyerahkan pakaian.
Ia juga memeriksa nomor pesanan. Aplikasi perlu pemeriksaan serupa.
Pertama, server membuktikan siapa yang meminta.
Lalu server memutuskan tindakan yang boleh dilakukan terhadap pesanan itu.
Kita akan mengikuti tiket sesi, atribut cookie, faktor login, dan aturan peran.
Terakhir, kamu menyusun matriks akses dan menjalankan contoh lokal.

### Siapa yang meminta akses ke pesanan?

Petugas laundry menerima kartu pelanggan.
**Authentication**, atau autentikasi, membuktikan siapa pengguna.
Setelah kartu diterima, petugas masih memeriksa nomor pesanan sebelum menyerahkan pakaian.

**Authorization**, atau otorisasi, menentukan tindakan yang boleh ia lakukan.
Alice yang berhasil login tetap tidak berhak melihat pesanan Bob.
Bayangkan kartu nama di pintu: kartu membuktikan identitas.
Kunci loker berbeda lagi; tiap kunci hanya membuka loker tertentu.

### Bagaimana login tetap berlaku setelah password dicek?

Setelah login, Alice tidak ingin mengetik password di setiap klik.
**Session** adalah hubungan login yang berlanjut setelah pemeriksaan identitas.
Server biasanya memberi browser sebuah pengenal sesi acak melalui cookie.
Browser mengirim cookie itu pada permintaan berikutnya.

Pengenal ini memiliki nilai seperti tiket masuk.
Orang yang mendapatkannya mungkin dapat memakai sesi tersebut.
Karena itu aplikasi memerlukan HTTPS, masa berlaku, pencabutan sesi, dan rotasi pengenal setelah login atau perubahan hak akses.

### Apa yang cookie boleh dan tidak boleh lakukan?

Cookie membawa tiket sesi, tetapi tiap atribut mengatur batas berbeda.
`HttpOnly` membatasi pembacaan cookie lewat JavaScript.
Atribut ini membantu saat skrip di halaman mencoba membaca tiket.

`Secure` membatasi pengiriman lewat HTTPS.
Tanpa itu, tiket bisa ikut pada koneksi yang tidak dilindungi.

`SameSite` membantu mengendalikan pengiriman lintas situs.
Ketiganya tidak menggantikan pemeriksaan izin di server.
Menyembunyikan tombol “Hapus pesanan” juga tidak membatasi permintaan yang seseorang buat tanpa tombol itu.

### Faktor apa yang dipakai untuk membuktikan identitas?

Password saja bisa dicuri atau ditebak.
**MFA**, singkatan *multi-factor authentication*, menggabungkan faktor yang berbeda: sesuatu yang diketahui, dimiliki, atau melekat pada pengguna.
Dua password masih berasal dari satu jenis faktor.

Passkey menggunakan pasangan kunci dan mengikat autentikasi pada situs yang sesuai, sehingga membantu melawan phishing.
Pemulihan akun tetap perlu dirancang.
Helpdesk yang memberi akses hanya berdasarkan nama pelanggan dapat merusak perlindungan login yang kuat.

#### Cukup kenali dulu

- **Phishing**: tipuan yang membuat orang menyerahkan bukti login ke pihak yang salah.

### Siapa boleh membaca pesanan cabang mana?

Kasir cabang A tidak otomatis boleh membaca seluruh pelanggan cabang B.
**RBAC** memberi izin berdasarkan peran, misalnya kasir atau manajer.

Aturan berbasis atribut juga memperhatikan cabang, pemilik pesanan, waktu, dan keadaan pesanan.
Terapkan *least privilege*: berikan hak yang diperlukan untuk tugasnya, lalu tinjau kembali saat tugas berubah.
OWASP menganjurkan penolakan akses secara bawaan dan pemeriksaan izin pada setiap permintaan.
[Panduan otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

<details>
<summary>Pendalaman opsional: OAuth, OpenID Connect, dan SSO</summary>

OAuth memberi cara mendelegasikan akses.
OpenID Connect menambahkan lapisan identitas di atas OAuth.
SSO, *single sign-on*, membuat pengguna bisa masuk ke beberapa aplikasi melalui penyedia identitas.

Kamu cukup memahami pembagian peran ini dahulu.
Implementasi protokol memerlukan library terawat dan pengujian khusus.
Menulis sistem login sendiri menjadi proyek lanjutan.

</details>

### Ringkasan

- Autentikasi menjawab “siapa”; otorisasi menjawab “boleh apa pada objek ini”.
- Tiket sesi perlu dilindungi seperti kunci yang bisa dipinjam orang lain.
- Atribut cookie membantu batas pengiriman, bukan mengganti cek izin di server.
- Beri hak seminimal mungkin untuk tugas, lalu tinjau ulang saat tugas berubah.

### Cek pemahaman

1. Mengapa Alice yang sudah login tetap ditolak saat membuka pesanan Bob?
2. Apa perbedaan peran `HttpOnly` dan pemeriksaan pemilik di server?
3. Mengapa dua password belum tentu menghitung sebagai MFA?

## Praktik

### 1. Buat matriks akses

Salin tabel berikut ke catatan.
Data Alice, Bob, dan pesanan adalah data latihan.

| Aktor | Objek | Tindakan | Keputusan yang benar |
|---|---|---|---|
| Alice | Pesanan Alice | Baca status | Izinkan |
| Alice | Pesanan Bob | Baca status | Tolak |
| Bob | Pesanan Alice | Ubah alamat | Tolak |
| Kasir cabang A | Pesanan cabang A | Tandai dibayar | Izinkan sesuai tugas |
| Kasir cabang A | Pengaturan pemilik | Tambah administrator | Tolak |
| Pengunjung belum login | Daftar seluruh pelanggan | Baca | Tolak |

### 2. Ikuti alur satu permintaan

Tulis urutan berikut di catatan.
Browser mengirim permintaan.
Server memeriksa sesi.
Server mengambil identitas dari sesi tepercaya.
Server memeriksa hak terhadap objek.
Baru kemudian server membaca atau mengubah data.

Jangan mengambil identitas pengguna dari parameter `user_id` yang bebas diganti pengunjung.

### 3. Jalankan contoh lokal

Pilih jalur sesuai perangkatmu.
Dari folder utama tutorial, buka terminal.

**Windows PowerShell**

```powershell
py labs/access_demo.py
```

**Linux/macOS**

Pakai `python3 labs/access_demo.py`.

Buka file contoh di editor.
Temukan pemeriksaan `actor is None` dan perbandingan pemilik pesanan dengan `actor`.
Parameter `actor` dalam contoh mewakili identitas yang sudah ditentukan server setelah login.
Aplikasi nyata tidak boleh mempercayai nilai ini dari browser.

Tulis apa yang akan terjadi jika pemeriksaan pemilik dihapus, tanpa perlu menghapusnya.
Program memakai data latihan di memori, sehingga tidak membutuhkan akun sungguhan.

### 4. Uji desain pemulihan

Bayangkan Alice kehilangan telepon.
Tulis prosedur yang menyediakan jalur pemulihan, mencatat tindakan, dan mencabut sesi lama bila diperlukan.
Jangan meminta pegawai mengirim kode pemulihan melalui chat umum.
Pisahkan permintaan pengguna dari keputusan petugas yang berwenang.

## Hasil yang diharapkan

Kamu punya matriks enam kasus dan diagram keputusan server.
Contoh mengizinkan Alice membaca pesanan 101, menolak Bob membaca 101, dan menolak pengguna tanpa identitas.
Kamu dapat menjelaskan bahwa identitas yang benar belum tentu mempunyai izin terhadap objek tertentu.

## Jika macet

Jika program tidak ditemukan, pastikan terminal berada di folder yang berisi `labs`.
Jika istilah sesi terasa abstrak, gunakan tiket penitipan barang sebagai analogi, lalu tulis kembali versi teknisnya.
Saat aplikasi menolak permintaan, bedakan pengguna belum login dari pengguna yang sudah login tetapi tidak punya izin.
Aplikasi boleh menyamarkan keberadaan objek untuk mengurangi kebocoran informasi.

## Latihan

Tambahkan peran kurir yang hanya melihat alamat untuk pengiriman yang ditugaskan kepadanya.
Buat empat kasus: tugas miliknya, tugas orang lain, tugas selesai, dan akun dinonaktifkan.
Tentukan perilaku sesi saat pegawai keluar dari perusahaan.

**UUID** adalah pengenal acak yang sulit ditebak dari urutan nomor biasa.
Jawab juga mengapa UUID yang sulit ditebak tetap membutuhkan otorisasi.

<details>
<summary>Pembahasan setelah mencoba: UUID dan otorisasi</summary>

UUID mempersulit menebak nomor objek.
Ia tidak membuktikan bahwa peminta berhak membaca objek itu.
Server tetap harus memeriksa pemilik atau izin pada setiap permintaan.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan matriks beserta keputusan dan alasan untuk sepuluh kasus.
- [ ] Saya dapat menjelaskan satu serangan akses lintas pelanggan.
- [ ] Saya dapat menunjukkan letak pemeriksaan yang memperbaikinya.
- [ ] Saya dapat menyebut satu cara menguji agar bug tidak muncul lagi.

### Lanjut belajar

Jika cookie dan HTTPS masih membingungkan, ulangi [Bab 07](07-web.md) dan [Bab 08](08-kriptografi.md).
Setelah bukti siap, lanjut ke [Bab 10: memperkuat perangkat](10-hardening.md).

## Referensi

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html): login dan pemulihan akun.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html): pemeriksaan izin.
- [PortSwigger: access control](https://portswigger.net/web-security/access-control): latihan resmi tentang akses objek.
