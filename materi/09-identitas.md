# Bab 09: Identitas, login, dan hak akses

## Tujuan dan prasyarat

Setelah memahami HTTP dan hash di Bab 07–08, Anda akan memisahkan identitas, sesi login, dan izin tindakan. Target praktik: menyusun aturan akses Laundry Aman lalu menemukan keputusan yang keliru. Sediakan 2–3 sesi belajar dan folder catatan pribadi.

## Konsep

Petugas laundry menerima kartu pelanggan dan memeriksa nomor pesanan sebelum menyerahkan pakaian. Aplikasi memerlukan pemeriksaan serupa. **Authentication**, atau autentikasi, membuktikan siapa pengguna. **Authorization**, atau otorisasi, menentukan tindakan yang boleh ia lakukan. Alice yang berhasil login tetap tidak berhak melihat pesanan Bob.

**Session** adalah hubungan login yang berlanjut setelah pemeriksaan identitas. Server biasanya memberi browser sebuah pengenal sesi acak melalui cookie. Browser mengirim cookie itu pada permintaan berikutnya. Pengenal ini memiliki nilai seperti tiket masuk: orang yang mendapatkannya mungkin dapat memakai sesi tersebut. Karena itu aplikasi memerlukan HTTPS, masa berlaku, pencabutan sesi, dan rotasi pengenal setelah login atau perubahan hak akses.

Cookie mempunyai atribut dengan fungsi berbeda. `HttpOnly` membatasi pembacaan cookie lewat JavaScript; `Secure` membatasi pengiriman lewat HTTPS; `SameSite` membantu mengendalikan pengiriman lintas situs. Ketiganya tidak menggantikan pemeriksaan izin di server. Menyembunyikan tombol “Hapus pesanan” juga tidak membatasi permintaan yang seseorang buat tanpa tombol itu.

**MFA**, singkatan *multi-factor authentication*, menggabungkan faktor yang berbeda: sesuatu yang diketahui, dimiliki, atau melekat pada pengguna. Dua password masih berasal dari satu jenis faktor. Passkey menggunakan pasangan kunci dan mengikat autentikasi pada situs yang sesuai, sehingga membantu melawan phishing. Pemulihan akun tetap perlu dirancang: helpdesk yang memberi akses hanya berdasarkan nama pelanggan dapat merusak perlindungan login yang kuat.

**RBAC** memberi izin berdasarkan peran, misalnya kasir atau manajer. Aturan berbasis atribut juga memperhatikan cabang, pemilik pesanan, waktu, dan keadaan pesanan. Pegawai cabang A tidak otomatis boleh membaca seluruh pelanggan cabang B. Terapkan *least privilege*: berikan hak yang diperlukan untuk tugasnya, lalu tinjau kembali saat tugas berubah. OWASP menganjurkan penolakan akses secara bawaan dan pemeriksaan izin pada setiap permintaan. [Panduan otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

OAuth memberi cara mendelegasikan akses; OpenID Connect menambahkan lapisan identitas di atas OAuth. SSO, *single sign-on*, membuat pengguna bisa masuk ke beberapa aplikasi melalui penyedia identitas. Anda cukup memahami pembagian peran ini dahulu. Implementasi protokol memerlukan library terawat dan pengujian khusus; menulis sistem login sendiri menjadi proyek lanjutan.

## Praktik

**1. Buat matriks akses.** Salin tabel berikut ke catatan. Data Alice, Bob, dan pesanan merupakan data latihan.

| Aktor | Objek | Tindakan | Keputusan yang benar |
|---|---|---|---|
| Alice | Pesanan Alice | Baca status | Izinkan |
| Alice | Pesanan Bob | Baca status | Tolak |
| Bob | Pesanan Alice | Ubah alamat | Tolak |
| Kasir cabang A | Pesanan cabang A | Tandai dibayar | Izinkan sesuai tugas |
| Kasir cabang A | Pengaturan pemilik | Tambah administrator | Tolak |
| Pengunjung belum login | Daftar seluruh pelanggan | Baca | Tolak |

**2. Ikuti alur satu permintaan.** Tulis urutan: browser mengirim permintaan, server memeriksa sesi, mengambil identitas dari sesi tepercaya, memeriksa hak terhadap objek, lalu membaca atau mengubah data. Jangan mengambil identitas pengguna dari parameter `user_id` yang bebas diganti pengunjung.

**3. Jalankan contoh lokal.** Dari folder utama tutorial, gunakan PowerShell:

```powershell
py labs/access_demo.py
```

Di Linux/macOS gunakan `python3 labs/access_demo.py`. Buka file contoh di editor. Temukan pemeriksaan `actor is None` dan perbandingan pemilik pesanan dengan `actor`. Parameter `actor` dalam contoh mewakili identitas yang sudah ditentukan server setelah login; aplikasi nyata tidak boleh mempercayai nilai ini dari browser. Tulis apa yang akan terjadi jika pemeriksaan pemilik dihapus, tanpa perlu menghapusnya. Program memakai data latihan di memori, sehingga tidak membutuhkan akun sungguhan.

**4. Uji desain pemulihan.** Bayangkan Alice kehilangan telepon. Tulis prosedur yang menyediakan jalur pemulihan, mencatat tindakan, dan mencabut sesi lama bila diperlukan. Jangan meminta pegawai mengirim kode pemulihan melalui chat umum. Pisahkan permintaan pengguna dari keputusan petugas yang berwenang.

## Hasil yang diharapkan

Anda punya matriks enam kasus dan diagram keputusan server. Contoh mengizinkan Alice membaca pesanan 101, menolak Bob membaca 101, dan menolak pengguna tanpa identitas. Anda dapat menjelaskan bahwa identitas yang benar belum tentu mempunyai izin terhadap objek tertentu.

## Jika macet

Jika program tidak ditemukan, pastikan terminal berada di folder yang berisi `labs`. Jika istilah sesi terasa abstrak, gunakan tiket penitipan barang sebagai analogi, lalu tulis kembali versi teknisnya. Saat aplikasi menolak permintaan, bedakan pengguna belum login dari pengguna yang sudah login tetapi tidak punya izin; aplikasi boleh menyamarkan keberadaan objek untuk mengurangi kebocoran informasi.

## Latihan

Tambahkan peran kurir yang hanya melihat alamat untuk pengiriman yang ditugaskan kepadanya. Buat empat kasus: tugas miliknya, tugas orang lain, tugas selesai, dan akun dinonaktifkan. Tentukan perilaku sesi saat pegawai keluar dari perusahaan. Jawab juga mengapa UUID yang sulit ditebak tetap membutuhkan otorisasi.

## Bukti kelulusan

Simpan matriks beserta keputusan dan alasan untuk sepuluh kasus. Anda lulus ketika dapat menjelaskan satu serangan akses lintas pelanggan, letak pemeriksaan yang memperbaikinya, dan satu cara menguji agar bug tidak muncul lagi.

## Referensi

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html): login dan pemulihan akun.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html): pemeriksaan izin.
- [PortSwigger: access control](https://portswigger.net/web-security/access-control): latihan resmi tentang akses objek.
