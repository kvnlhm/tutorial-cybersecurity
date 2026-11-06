# Bab 08: Hash, enkripsi, TLS, dan penyimpanan password

## Tujuan dan prasyarat

Anda akan membedakan encoding, hashing, enkripsi, serta tanda tangan digital. Anda juga akan menguji perubahan hash dengan data buatan sendiri. Selesaikan Bab 06 dan 07. Tidak perlu matematika tingkat lanjut untuk mengikuti praktik ini.

## Konsep

Laundry Aman mengirim nota melalui internet dan menyimpan data pelanggan. Kebutuhannya berbeda: menjaga isi pesan agar tidak terbaca pihak lain, mengetahui apakah file berubah, serta memastikan pesan berasal dari pihak yang diharapkan. Satu alat tidak otomatis memenuhi seluruh kebutuhan itu.

| Istilah | Fungsi | Contoh pemakaian |
|---|---|---|
| Encoding | Mengubah bentuk representasi agar cocok dikirim atau disimpan | Base64 untuk merepresentasikan byte sebagai teks |
| Hash | Menghasilkan ringkasan berukuran tetap untuk algoritma tertentu | Memeriksa perubahan file dengan SHA-256 |
| Enkripsi | Menyembunyikan isi dengan kunci | Melindungi data saat disimpan atau dikirim |
| Tanda tangan digital | Memverifikasi asal pesan dan perubahan dengan pasangan kunci | Memeriksa pembaruan perangkat lunak |

Base64 dapat dikembalikan tanpa rahasia sehingga tidak melindungi password. Hash dirancang sebagai fungsi satu arah, tetapi penyerang dapat menebak masukan yang mudah lalu membandingkan hash-nya. Karena itu hash password pendek tetap dapat ditebak. Hash file juga tidak membuktikan asal file bila penyerang dapat mengganti file dan nilai hash pembanding sekaligus.

**Enkripsi simetris** memakai kunci rahasia yang sama untuk enkripsi dan dekripsi. **Kriptografi asimetris** memakai pasangan kunci publik dan privat, dengan operasi yang bergantung pada skema yang dipilih. Kunci publik boleh dibagikan; kunci privat harus dilindungi. Jangan menyederhanakan tanda tangan sebagai “enkripsi dengan kunci privat”; protokol tanda tangan memiliki rancangan dan pemeriksaan tersendiri.

**TLS** melindungi komunikasi antara endpoint. Pada koneksi HTTPS, browser memeriksa sertifikat server, lalu pihak-pihak melakukan handshake untuk menyiapkan perlindungan sesi. **Certificate authority**, atau CA, menandatangani sertifikat yang mengikat identitas seperti nama domain dengan kunci publik menurut aturan validasinya. **PKI** mencakup sistem pengelolaan kepercayaan dan sertifikat tersebut.

HTTPS membantu kerahasiaan serta integritas selama transmisi, tetapi halaman penipu juga bisa memiliki sertifikat valid untuk domain miliknya. Periksa nama domain yang Anda tuju. TLS juga tidak mencegah server yang sah menyimpan password dengan cara keliru.

Untuk password, gunakan fungsi khusus yang sengaja membutuhkan biaya komputasi dan memori, seperti Argon2id melalui library yang terawat. **Salt** adalah nilai unik per password yang disimpan bersama hasil hash; tujuannya bukan menjadi rahasia. Parameter biaya perlu disesuaikan dan diperbarui mengikuti panduan resmi. Buku ini tidak membangun sistem autentikasi produksi atau menyuruh Anda menciptakan algoritma kriptografi sendiri.

## Praktik

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

Windows PowerShell:

```powershell
py hasil-belajar/cek_hash.py
```

Linux/macOS:

```bash
python3 hasil-belajar/cek_hash.py
```

Awalan `b` membuat literal byte. Fungsi hash bekerja pada byte, bukan pada makna kalimat. `hexdigest()` menampilkan hasil sebagai karakter heksadesimal. SHA-256 menghasilkan 256 bit, yang dalam bentuk ini menjadi 64 karakter. Untuk dua contoh nota tersebut, hasil perbandingannya `False`.

Perubahan spasi, encoding, atau akhir baris juga mengubah byte. Dua dokumen yang terlihat sama dapat mempunyai hash berbeda. Saat memeriksa file unduhan, bandingkan hash dari file yang tepat dan sumber pembanding yang dipercaya.

### 2. Uji dugaan tentang hash

Ganti `nota_ubah` agar sama persis dengan `nota_awal`. Perbandingan sekarang `True`, dan assert terakhir gagal. Kegagalan itu sesuai perubahan eksperimen; baca baris yang ditunjuk. Kembalikan isi yang berbeda setelah selesai.

Satu percobaan ini membuktikan perilaku pada dua masukan. Ia tidak membuktikan secara matematis bahwa algoritma bebas collision. **Collision** terjadi ketika dua masukan berbeda menghasilkan hash yang sama; ruang keluaran terbatas berarti collision ada secara teori. Algoritma kriptografis yang baik membuat pencariannya tidak praktis menurut analisis dan kemampuan yang diketahui.

### 3. Amati sertifikat situs dokumentasi

Buka situs dokumentasi resmi melalui HTTPS, misalnya `https://docs.python.org/`. Gunakan informasi koneksi pada browser untuk melihat sertifikat. Catat nama domain, penerbit, dan masa berlaku tanpa menyalin informasi akun. Letak menu berbeda antarbrowser. Jangan melanjutkan melewati peringatan sertifikat untuk menyelesaikan latihan; periksa jam sistem serta domain yang diketik.

## Hasil yang diharapkan

Anda mendapat dua hash berbeda sepanjang 64 karakter dan dapat mengubah eksperimen hingga assert gagal dengan alasan yang dipahami. Anda juga dapat membaca identitas domain dari sertifikat atau mencatat bagian sertifikat sebagai belum dikerjakan jika sedang offline.

## Jika macet

Error “strings must be encoded before hashing” berarti Anda memberi teks ketika fungsi memerlukan byte. Untuk variabel teks, gunakan `.encode('utf-8')`. Hash file berbeda antarmesin dapat berasal dari akhir baris, bukan kerusakan alat. Jangan menghapus pemeriksaan sertifikat atau memakai algoritma lama untuk menyembunyikan error.

## Latihan

Terangkan pilihan untuk tiga kebutuhan: mendeteksi perubahan nota, merahasiakan isi backup, dan memeriksa asal pembaruan aplikasi. Jawaban harus mencakup pengelolaan kunci atau sumber hash yang dipercaya, bukan hanya nama algoritma. Jelaskan juga alasan password membutuhkan perlakuan berbeda dari hash file.

## Bukti kelulusan

Anda lulus jika dapat membedakan empat konsep pada tabel, menjelaskan batas hash tanpa sumber pembanding tepercaya, serta menyebutkan fungsi salt. Simpan kode eksperimen dan hasil yang membuktikan perubahan satu byte dapat mengubah hash contoh.

## Referensi

- [Python hashlib](https://docs.python.org/3/library/hashlib.html).
- [OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [MDN: Transport Layer Security](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security).
