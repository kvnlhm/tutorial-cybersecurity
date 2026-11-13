# Bab 08: Hash, enkripsi, TLS, dan penyimpanan password

Tahap 2 dari 6: Memahami cara sistem bekerja

## Tujuan dan prasyarat

Kamu akan membedakan encoding, hashing, enkripsi, serta tanda tangan digital.
Kamu juga akan menguji perubahan nilai hash menggunakan data buatan sendiri di Python.
Pengetahuan ini menjadi bekal penting untuk melindungi data transaksi dan akun pelanggan Laundry Aman.

Selesaikan [Bab 06](06-pemrograman.md) untuk dasar Python dan [Bab 07](07-web.md) untuk memahami protokol web.
Kamu tidak membutuhkan rumus matematika rumit untuk mengikuti praktik dasar ini.

## Konsep

Laundry Aman mengirim nota melalui internet dan menyimpan akun pelanggan.
Kita menghadapi kebutuhan perlindungan yang berbeda untuk setiap situasi data.
Ada data yang dirahasiakan, ada yang dipastikan keasliannya, dan ada password yang disimpan aman.
Satu alat tidak bisa memenuhi seluruh kebutuhan itu sekaligus.
Kita akan mempelajari perbedaan encoding, hashing, enkripsi, serta pengamanan sambungan web.

### Membedakan empat cara memperlakukan data

Laundry Aman perlu menyesuaikan bentuk nota, memeriksa perubahan, merahasiakan isi, dan memeriksa asal pembaruan aplikasi.

Pertama, **encoding** mengubah bentuk representasi data agar cocok dikirim atau disimpan di berbagai media.
Contohnya adalah Base64 yang menyajikan data biner ke dalam deretan teks biasa.
Encoding dapat dikembalikan ke bentuk asli tanpa kunci rahasia.
Karena itu encoding sama sekali tidak melindungi password.

Kedua, fungsi **hash** menghasilkan ringkasan berukuran tetap untuk algoritma tertentu.
Fungsi hash dirancang bekerja satu arah, seperti sidik jari dokumen.

Namun, penyerang dapat menebak masukan yang mudah lalu membandingkan hasil hash-nya.
Karena itu, hash password pendek tetap dapat ditebak.
Hash file juga tidak membuktikan asal file bila penyerang dapat mengganti file dan nilai hash pembanding sekaligus.

Ketiga, **enkripsi** menyembunyikan isi pesan memakai kunci rahasia.
Penerima memakai kunci yang sesuai untuk mengembalikan isi pesan; keamanan tetap bergantung pada penerapan dan perlindungan kuncinya.

Keempat, **tanda tangan digital** membantu memeriksa asal pesan dan perubahan data memakai pasangan kunci.

Bandingkan keempat fungsi tersebut pada tabel berikut:

| Istilah | Fungsi | Contoh pemakaian |
|---|---|---|
| Encoding | Mengubah bentuk representasi agar cocok dikirim atau disimpan | Base64 untuk merepresentasikan byte sebagai teks |
| Hash | Menghasilkan ringkasan berukuran tetap untuk algoritma tertentu | Memeriksa perubahan file dengan SHA-256 |
| Enkripsi | Menyembunyikan isi dengan kunci | Melindungi data saat disimpan atau dikirim |
| Tanda tangan digital | Memverifikasi asal pesan dan perubahan dengan pasangan kunci | Memeriksa pembaruan perangkat lunak |

#### Cukup kenali dulu

- **Kerahasiaan**: perlindungan isi data dari pihak yang tidak berhak.
- **Integritas**: perlindungan keutuhan data dari perubahan yang tidak diizinkan.
- **Otentikasi**: pembuktian keaslian identitas pihak pengirim.

### Menggunakan kunci rahasia dan pasangan kunci

Laundry Aman ingin merahasiakan backup dan memeriksa pembaruan dari pembuat aplikasi.
Kebutuhan ini memakai kunci dengan cara berbeda:

Metode **enkripsi simetris** memakai kunci rahasia yang sama untuk proses enkripsi dan dekripsi.
Kedua pihak yang berkomunikasi harus saling menjaga kerahasiaan satu kunci tersebut.

Metode **kriptografi asimetris** memakai pasangan kunci publik dan privat, dengan operasi yang bergantung pada skema yang dipilih.
Kunci publik boleh dibagikan kepada siapa saja; kunci privat harus dilindungi dan disimpan rapat oleh pemiliknya.
Jangan menyederhanakan tanda tangan sebagai “enkripsi dengan kunci privat”; protokol tanda tangan memiliki rancangan dan pemeriksaan tersendiri.
Untuk memercayai asal pembaruan, pastikan kunci publik pemeriksa benar-benar milik penerbit yang diharapkan.

#### Cukup kenali dulu

- **Kunci publik**: kunci yang boleh dibagikan secara bebas.
- **Kunci privat**: kunci rahasia yang harus dilindungi pemiliknya.
- **Dekripsi**: proses membuka kembali pesan terenkripsi memakai kunci.

### Mengamankan komunikasi web dengan TLS dan sertifikat

Saat kasir mengakses server aplikasi Laundry Aman melalui internet, koneksi perlu dilindungi dari penyadapan.

Protokol **TLS** melindungi komunikasi antara dua ujung yang terhubung di jaringan.

Pada koneksi HTTPS, pihak-pihak melakukan handshake, proses menyiapkan perlindungan sesi yang mencakup pemeriksaan sertifikat server oleh browser.

Pihak otoritas penerbit sertifikat disebut **certificate authority**, atau CA.
CA menandatangani sertifikat yang mengikat identitas seperti nama domain dengan kunci publik menurut aturan validasinya.

Sistem pengelolaan kepercayaan dan sertifikat digital secara menyeluruh disebut **PKI**, singkatan dari *public key infrastructure*.

HTTPS membantu kerahasiaan serta integritas selama pengiriman data, tetapi halaman penipu juga bisa memiliki sertifikat valid untuk domain miliknya.
Periksa selalu nama domain yang kamu tuju di bilah alamat browser.
Selain itu, TLS juga tidak mencegah server yang sah menyimpan password dengan cara keliru.

#### Cukup kenali dulu

- **Sertifikat digital**: catatan elektronik yang mengikat identitas seperti nama domain dengan kunci publik.
- **Validasi domain**: pemeriksaan oleh CA terhadap kendali pemohon atas nama domain.

### Menyimpan password pelanggan secara bertanggung jawab

Laundry Aman perlu memeriksa password saat login tanpa menyimpan teks password aslinya.
Gunakan fungsi khusus yang membutuhkan kerja komputasi dan memori, seperti Argon2id melalui library yang terawat.
Fungsi lambat ini memperberat kerja penyerang saat mencoba menebak password.

**Salt** adalah nilai unik untuk tiap penyimpanan password yang disimpan bersama hasil hash; tujuannya bukan menjadi rahasia.
Salt menghambat pemakaian ulang hasil tebakan yang sama untuk banyak akun.
Parameter biaya perlu disesuaikan dan diperbarui mengikuti panduan resmi.
Buku ini tidak membangun sistem autentikasi produksi atau menyuruh kamu menciptakan algoritma kriptografi sendiri.

### Ringkasan

- Encoding mengubah format representasi data, sedangkan enkripsi mengunci kerahasiaan memakai kunci.
- Hash memeriksa integritas data; gunakan fungsi lambat dengan salt untuk menyimpan password.
- Kriptografi simetris memakai satu kunci bersama, sedangkan asimetris memakai pasangan kunci publik dan privat.
- TLS mengamankan saluran komunikasi HTTPS melalui sertifikat CA; periksa nama domain dengan teliti.

### Cek pemahaman

1. Mengapa Base64 sama sekali tidak boleh dipakai untuk menyembunyikan password?
2. Mengapa sebuah situs penipu tetap bisa memiliki sertifikat TLS yang sah?
3. Apa tujuan utama menambahkan salt unik pada setiap penyimpanan hash password?

## Praktik

Kamu akan menjalankan skrip Python untuk membuktikan kepekaan fungsi hash terhadap perubahan data kecil.
Siapkan terminal di komputermu.

### 1. Bandingkan dua hash

Simpan kode berikut sebagai `hasil-belajar/cek_hash.py`:

```python
import hashlib

nota_awal = b"L001:30000"
nota_ubah = b"L001:30001"
hash_awal = hashlib.sha256(nota_awal).hexdigest()
hash_ubah = hashlib.sha256(nota_ubah).hexdigest()

print("Hash awal:", hash_awal)
print("Hash ubah:", hash_ubah)
print("Panjang:", len(hash_awal))
print("Sama:", hash_awal == hash_ubah)
assert hashlib.sha256(nota_awal).hexdigest() == hash_awal
assert hash_awal != hash_ubah
```

Jalankan skrip dari folder utama tutorial.
Pilih jalur sesuai perangkatmu:

**Windows PowerShell**

```powershell
py hasil-belajar/cek_hash.py
```

**Linux/macOS**

```bash
python3 hasil-belajar/cek_hash.py
```

Awalan `b` membuat nilai byte yang ditulis langsung di kode.
Fungsi hash bekerja pada byte, bukan pada makna kalimat.
Metode `hexdigest()` menampilkan hasil sebagai karakter heksadesimal, yaitu tulisan angka berbasis 16.

Algoritma SHA-256 menghasilkan 256 bit, yang dalam bentuk ini menjadi 64 karakter heksadesimal.
Untuk dua contoh nota tersebut, hasil perbandingannya `False`.
Pada contoh ini, perubahan satu angka terakhir menghasilkan nilai hash berbeda.

Perubahan spasi, encoding, atau akhir baris juga mengubah byte.
Dua dokumen yang terlihat sama di layar dapat mempunyai hash berbeda jika karakternya tidak sama persis.
Saat memeriksa file unduhan, bandingkan hash dari file yang tepat dan sumber pembanding yang dipercaya.

### 2. Uji dugaan tentang hash

Buka kembali file `hasil-belajar/cek_hash.py` di editor teks.
Ganti `nota_ubah` agar sama persis dengan `nota_awal`.
Jalankan kembali program di terminal.

Perbandingan sekarang bernilai `True`; assert terakhir gagal dan menghentikan program dengan `AssertionError`.
Kegagalan itu sesuai perubahan eksperimen; baca baris yang ditunjuk di traceback.
Kembalikan isi yang berbeda setelah selesai melakukan pengujian.

Satu percobaan ini membuktikan perilaku pada dua masukan.
Ia tidak membuktikan secara matematis bahwa algoritma bebas collision.
**Collision** terjadi ketika dua masukan berbeda menghasilkan hash yang sama; ruang keluaran terbatas berarti collision ada secara teori.
Algoritma kriptografis yang baik membuat pencariannya tidak praktis menurut analisis dan kemampuan yang diketahui.

### 3. Amati sertifikat situs dokumentasi

Buka situs dokumentasi resmi melalui HTTPS, misalnya `https://docs.python.org/`.
Gunakan informasi koneksi pada browser untuk melihat sertifikat.
Catat nama domain, penerbit, dan masa berlaku tanpa menyalin informasi akun.

Letak menu sertifikat berbeda antarbrowser; biasanya berada di samping bilah alamat web.
Jangan melanjutkan melewati peringatan sertifikat untuk menyelesaikan latihan; periksa jam sistem serta domain yang diketik.

## Hasil yang diharapkan

Kamu mendapat dua hash berbeda sepanjang 64 karakter dan dapat mengubah eksperimen hingga assert gagal dengan alasan yang dipahami.
Kamu juga dapat membaca identitas domain dari sertifikat atau mencatat bagian sertifikat sebagai belum dikerjakan jika sedang offline.
Simpan catatan perbandingan hash di jurnal belajarmu.

## Jika macet

Jika menemui kendala saat menjalankan program atau memeriksa web, gunakan panduan berikut.

| Masalah yang terlihat | Penyebab umum dan tindakan aman |
|---|---|
| Pesan `strings must be encoded before hashing` | Berikan data dalam bentuk byte; gunakan `.encode('utf-8')` pada teks |
| Nilai hash berbeda antarmesin | Periksa byte masukan; perbedaan akhir baris adalah salah satu kemungkinan penyebab |
| Peringatan sertifikat di browser | Periksa kesesuaian jam sistem dan periksa kembali ejaan nama domain |

Jangan pernah menghapus pemeriksaan sertifikat atau memakai algoritma usang hanya demi menghilangkan pesan error.

## Latihan

Terangkan pilihan solusi untuk tiga kebutuhan pengamanan di Laundry Aman berikut:

1. Mendeteksi perubahan catatan nota pesanan secara cepat.
2. Merahasiakan isi file cadangan data pelanggan di media penyimpanan.
3. Memeriksa keaslian asal file pembaruan aplikasi kasir.

Jawaban harus mencakup pengelolaan kunci atau sumber hash yang dipercaya, bukan hanya menyebut nama algoritma.
Jelaskan juga alasan mengapa password membutuhkan perlakuan khusus yang berbeda dari hash file biasa.

<details>
<summary>Pembahasan setelah mencoba: memilih fungsi kriptografi</summary>

Untuk mendeteksi perubahan nota, gunakan fungsi hash dan cocokkan dengan nilai ringkasan dari sumber terpercaya.
Untuk merahasiakan cadangan, gunakan enkripsi simetris yang kuat dengan kunci rahasia yang disimpan terpisah.
Untuk pembaruan aplikasi, gunakan tanda tangan digital dengan verifikasi kunci publik resmi penerbit program.

Password memerlukan fungsi khusus seperti Argon2id dengan salt untuk memperberat tebakan jika penyimpanan hash bocor.
Kecepatan tebakan bergantung pada fungsi, parameter, dan perangkat yang dipakai.

</details>

## Bukti kelulusan

- [ ] Saya dapat membedakan encoding, hash, enkripsi, dan tanda tangan digital.
- [ ] Saya memahami batas hash jika tidak didukung oleh sumber pembanding yang terpercaya.
- [ ] Saya dapat menjelaskan fungsi penambahan salt pada penyimpanan password.
- [ ] Saya menyimpan kode eksperimen dan membuktikan bahwa perubahan satu byte mengubah hash contoh.

### Lanjut belajar

Kamu telah menyelesaikan seluruh materi Tahap 2: Memahami cara sistem bekerja (Bab 03 sampai 08).
Di tahap ini, kamu mempelajari perjalanan jaringan, Linux, Windows, Python, web, dan dasar kriptografi.

Pada tahap berikutnya (Tahap 3: Menjaga dan menguji akses), kita berpindah ke penerapan keamanan nyata.
Kamu akan belajar mengatur hak akses akun pada [Bab 09: Identitas](09-identitas.md).
Untuk menyegarkan dasar web, buka kembali [Bab 07](07-web.md).

## Referensi

- [Python hashlib](https://docs.python.org/3/library/hashlib.html).
- [OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [MDN: Transport Layer Security](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security).
