# Bab 09: Identitas, login, dan hak akses

Tahap 3 dari 6: Menjaga dan menguji akses

## Tujuan dan prasyarat

Kamu akan memisahkan identitas, sesi login, dan izin tindakan pada Laundry Aman.
Hasilnya berupa tabel izin akses, diagram keputusan server, dan catatan uji contoh lokal.

Bekalmu adalah [permintaan HTTP dan cookie dari Bab 07](07-web.md) serta [hash dan HTTPS dari Bab 08](08-kriptografi.md).
Sediakan 2–3 sesi belajar dan folder catatan pribadi.
Gunakan komputer dengan Python untuk contoh lokal. Di HP, kamu bisa menyusun matriks dan diagram.
Pakai data latihan saja. Jangan memakai akun atau data pelanggan sungguhan.

## Konsep

Kasir Laundry Aman menerima kartu pelanggan sebelum menyerahkan pakaian.
Ia juga memeriksa nomor pesanan.
Aplikasi perlu pemeriksaan serupa untuk mengenali peminta dan menentukan pesanan yang boleh dibaca.
Setelah login, browser membawa bukti agar pengguna tidak perlu mengetik password pada setiap klik.
Kita akan melindungi bukti itu dan membatasi hak tiap peran.
Terakhir, kamu menyusun tabel izin dan menjalankan contoh lokal.

### Siapa yang meminta akses ke pesanan?

Petugas laundry menerima kartu pelanggan.
**Authentication**, atau autentikasi, membuktikan siapa pengguna.
Setelah kartu diterima, petugas masih memeriksa nomor pesanan sebelum menyerahkan pakaian.

**Authorization**, atau otorisasi, menentukan tindakan yang boleh ia lakukan.
Alice yang berhasil login tetap tidak berhak melihat pesanan Bob.
Bayangkan petugas mencocokkan kartu pelanggan dengan catatan tepercaya untuk mengenali peminta.
Untuk otorisasi, bayangkan kunci loker: tiap kunci hanya memberi akses ke loker tertentu.
Aplikasi tetap memeriksa bukti login dan aturan izin di server; kartu atau nomor pesanan saja belum cukup.

Nomor pesanan bisa memakai **UUID**, format pengenal 128 bit yang dirancang untuk membedakan objek.
Sebagian jenis UUID memakai angka acak; jenis lain memakai waktu atau nama.
UUID yang dibuat dengan sumber acak yang aman mempersulit penebakan nomor pesanan.
Server tetap wajib memeriksa hak pengguna meskipun nomornya sulit ditebak.

### Bagaimana login tetap berlaku setelah password dicek?

Setelah login, Alice tidak ingin mengetik password di setiap klik.
**Session** adalah hubungan login yang berlanjut setelah pemeriksaan identitas.
Server biasanya memberi browser sebuah pengenal sesi acak melalui cookie.
Browser mengirim cookie itu pada permintaan berikutnya.
Pengenal sesi membawa bukti login, sehingga harus sulit ditebak.
Jangan memakai nomor urut sebagai pengenal sesi.

Pengenal ini memiliki nilai seperti tiket masuk.
Orang yang mendapatkannya mungkin dapat memakai sesi tersebut.
Karena itu aplikasi memerlukan HTTPS, masa berlaku, pencabutan sesi, dan rotasi pengenal setelah login atau perubahan hak akses.

### Apa yang cookie boleh dan tidak boleh lakukan?

Cookie membawa tiket sesi, tetapi tiap atribut mengatur batas berbeda.
`HttpOnly` membatasi pembacaan cookie lewat JavaScript.
Atribut ini membantu saat skrip di halaman mencoba membaca tiket.

`Secure` membatasi pengiriman lewat HTTPS.
Tanpa itu, tiket bisa ikut pada koneksi yang tidak dilindungi.

`SameSite` membantu mengendalikan pengiriman cookie pada permintaan lintas situs.
Pembatasannya bergantung pada nilai atribut; keberadaan `SameSite` saja tidak berarti semua permintaan lintas situs diblokir.

Atribut-atribut ini melindungi cookie, tetapi tidak menggantikan pemeriksaan izin di server.
Menyembunyikan tombol “Hapus pesanan” tidak membatasi permintaan HTTP yang seseorang buat tanpa tombol itu.

### Faktor apa yang dipakai untuk membuktikan identitas?

Kasir Laundry Aman bisa kehilangan password karena dicuri atau ditebak.
**MFA**, singkatan *multi-factor authentication*, menggabungkan faktor yang berbeda: sesuatu yang diketahui, dimiliki, atau melekat pada pengguna.
Dua password masih berasal dari satu jenis faktor.

Kasir juga bisa tertipu halaman login palsu.
**Phishing** adalah tipuan yang membuat orang menyerahkan bukti login ke pihak yang salah.

**Passkey** adalah cara login memakai pasangan kunci yang mengikat autentikasi pada situs yang sesuai.
Ikatan ini membantu melawan phishing.

Jika kasir kehilangan alat login, pemulihan akun tetap perlu dirancang.
Helpdesk yang memberi akses hanya berdasarkan nama pelanggan dapat merusak perlindungan login yang kuat.

### Siapa boleh membaca pesanan cabang mana?

Kasir cabang A tidak otomatis boleh membaca seluruh pelanggan cabang B.
**RBAC**, singkatan *role-based access control*, memberi izin berdasarkan peran, misalnya kasir atau manajer.

Aturan berbasis atribut juga memperhatikan cabang, pemilik pesanan, waktu, dan keadaan pesanan.

Terapkan **least privilege**, yaitu memberikan hak sebatas kebutuhan tugas.
Tinjau kembali hak saat tugas berubah.
OWASP menganjurkan penolakan akses secara bawaan dan pemeriksaan izin pada setiap permintaan.
Artinya, server menolak tindakan yang belum memiliki izin eksplisit.
Lihat [panduan otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

<details>
<summary>Pendalaman opsional: OAuth, OpenID Connect, dan SSO</summary>

Pemilik laundry ingin memberi aplikasi lain akses terbatas ke layanan laundry tanpa menyerahkan password.
**OAuth** memberi cara mendelegasikan akses.

**OpenID Connect** menambahkan lapisan identitas di atas OAuth.

**SSO**, *single sign-on*, membuat pengguna bisa masuk ke beberapa aplikasi melalui penyedia identitas.

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
3. Mengapa dua password belum memenuhi syarat MFA?

## Praktik

### 1. Buat matriks akses

Salin tabel berikut ke catatan.
Matriks akses adalah tabel yang memasangkan peminta, objek, tindakan, dan keputusan izin.
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

Tulis urutan berikut di catatan:

1. Browser mengirim permintaan.
2. Server memeriksa sesi.
3. Server mengambil identitas dari sesi tepercaya.
4. Server memeriksa hak terhadap objek.
5. Server membaca atau mengubah data jika izin sesuai.

Jangan mengambil identitas pengguna dari parameter `user_id` yang bebas diganti pengunjung.

### 3. Jalankan contoh lokal

Pilih jalur sesuai perangkatmu.
Dari folder utama tutorial, buka terminal.

**Windows PowerShell**

Jalankan perintah berikut:

```powershell
py labs/access_demo.py
```

**Linux/macOS**

Pakai `python3 labs/access_demo.py`.

Cocokkan hasil: Alice diizinkan membaca pesanan 101; Bob dan pengguna tanpa identitas ditolak.
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
Gabungkan empat kasus kurir dengan enam kasus Praktik agar matriksmu berisi sepuluh kasus beserta alasan keputusan.
Tentukan perilaku sesi saat pegawai keluar dari perusahaan.

Jawab juga mengapa nomor pesanan berupa UUID yang sulit ditebak tetap membutuhkan otorisasi di server.

<details>
<summary>Pembahasan setelah mencoba: UUID dan otorisasi</summary>

UUID acak yang dibuat dengan sumber acak yang aman mempersulit penebakan nomor objek.
Pengenal itu tidak membuktikan bahwa peminta berhak membaca objek tersebut.
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
- [RFC 9562](https://www.rfc-editor.org/rfc/rfc9562.html): jenis UUID dan batas penggunaannya untuk keamanan.
- [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html): perlindungan cookie dan pengenal sesi.
