# Empat lab offline Laundry Aman

Empat lab ini memakai nota dan log buatan Laundry Aman. Kamu akan membandingkan pencarian data, izin membaca nota, perubahan isi, dan hitungan login.
Siapkan Python 3.11+, kemampuan membuka terminal, serta folder tutorial yang sudah diekstrak.

Semua file memakai **standard library**, yaitu kumpulan modul bawaan Python.
Kamu tidak memerlukan `pip install`, API key, Docker, atau layanan cloud.

## Bekal dan tempat menjalankan perintah

Pelajari [Python pada Bab 06](../materi/06-pemrograman.md) dan [SQL pada Bab 07](../materi/07-web.md) sebelum membaca lab pertama.
Untuk lab kedua, ulangi [izin pada Bab 09](../materi/09-identitas.md).
Lab ketiga memakai [hash pada Bab 08](../materi/08-kriptografi.md); lab keempat memakai [log pada Bab 15](../materi/15-deteksi.md).
[Bab 13](../materi/13-web-api.md) menghubungkan dua lab pertama dengan kelemahan aplikasi.

Buka terminal pada folder utama tutorial, yaitu folder yang memuat `README.md` dan `labs`.
Semua perintah di halaman ini memakai lokasi tersebut. Jangan menjalankannya dari dalam folder `labs`.

Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

Jalankan perintah seperti yang tertulis pada tiap lab.

**Linux/macOS**

Gunakan terminal dengan mengganti `py` menjadi `python3` pada setiap perintah.

**HP**

Kamu bisa membaca kode dan memprediksi hasil. Gunakan komputer untuk menjalankan empat lab ini.

## Lab 1: bedakan data dengan perintah SQL

Kasir Laundry Aman mencari nota berdasarkan nama pelanggan.
Query berarti permintaan kepada basis data, seperti pencarian nama dari Bab 07.
Dari folder utama tutorial, jalankan perintah lab berikut:

```powershell
py labs/sql_demo.py
```

Bandingkan hasilnya dengan contoh ini:

```text
Data normal: [(1, 'Alice', 'siap')]
Input uji: "' OR 1=1 --"
Query rentan: [(1, 'Alice', 'siap'), (2, 'Bob', 'dicuci')]
Query berparameter: []
```

Buka [sql_demo.py](sql_demo.py) di editor. `sqlite3.connect(':memory:')` membuat basis data sementara dalam RAM, yaitu memori kerja komputer.
Program mengisi dua nota buatan. Saat program selesai, basis data hilang.

Baris `f"... '{customer}'"` menyatukan masukan dengan kalimat SQL.
Pada cabang rentan, masukan uji mengubah syarat pencarian sehingga dua nota terlihat.

Cabang aman memakai `WHERE customer = ?` dan `(customer,)`.
Tanda `?` menjadi tempat nilai yang dikirim terpisah dari instruksi pencarian.
**Driver** adalah bagian perangkat lunak yang menghubungkan program dengan basis data; pada contoh ini, driver memperlakukan masukan sebagai nilai nama.

Nama tersebut tidak cocok dengan pelanggan mana pun, sehingga hasilnya kosong.
**Tuple** adalah kumpulan nilai berurutan dalam Python; tanda koma pada `(customer,)` membuat tuple berisi satu nilai.

Jangan salin cabang rentan ke aplikasi.
Parameterisasi memisahkan nilai dari instruksi SQL; perlindungannya berlaku pada posisi nilai.
Nama kolom yang dipilih secara dinamis tetap membutuhkan daftar pilihan yang diizinkan. Query berparameter juga tidak menggantikan pemeriksaan hak akses.

### Tugas dan bukti lulus

1. Prediksi hasil pencarian `Alice`, `O'Neil`, dan teks uji.
2. Cocokkan prediksi dengan fungsi `search_orders` atau test.
3. Jelaskan mengapa menghapus tanda petik dari masukan dapat merusak nama sah dan tidak menggantikan parameterisasi.

Kamu lulus jika dapat menjelaskan perubahan struktur query dan tetap menerima nama dengan apostrof sebagai data sah.

## Lab 2: periksa pemilik setiap objek

Alice ingin membaca notanya sendiri. Bob harus ditolak saat meminta nota yang sama.
Dari folder utama tutorial, jalankan perintah berikut:

```powershell
py labs/access_demo.py
```

Alice boleh membaca nota 101. Bob dan pengguna tanpa login ditolak.
Periksa tulisan `DIIZINKAN` untuk Alice dan `DITOLAK` untuk kedua percobaan lainnya.

Baca [access_demo.py](access_demo.py), terutama perbandingan `order['owner'] != actor`.
`actor` pada contoh mewakili identitas yang **sudah diverifikasi server**.
Aplikasi nyata tidak boleh mempercayai `actor=alice` dari pengguna sebagai bukti login.

**UUID** adalah bentuk pengenal yang dapat dipakai untuk ID nota. Nilainya dapat dibuat acak untuk mengurangi kemudahan menebak ID.
Memakai UUID boleh mengurangi tebakan, tetapi aplikasi tetap harus memeriksa izin setiap nota.

### Tugas dan bukti lulus

1. Gambar tabel Alice/Bob × nota 101/102, lalu tandai akses yang boleh.
2. Pada salinan latihan, tambahkan kasus Bob membaca nota 102.
3. Uji ulang agar Alice tetap tidak boleh membaca nota 102.
4. Periksa akses anonim dan penanganan nota yang tidak ada.

Kamu lulus jika empat kombinasi akses sesuai pemilik, akses anonim ditolak, dan nota yang tidak ada mendapat penanganan jelas.

Lab ini berupa fungsi lokal, bukan server atau implementasi autentikasi siap produksi.
Pada aplikasi HTTP, pilih respons yang tidak membocorkan keberadaan objek kepada pengguna tanpa hak.

## Lab 3: deteksi perubahan isi

Kasir membandingkan isi nota sebelum dan sesudah perubahan.
Dari folder utama tutorial, jalankan perintah berikut:

```powershell
py labs/crypto_demo.py
```

Program menghitung SHA-256 untuk `nota=10000` dan `nota=90000`.
Ringkasan hash disebut **digest**. Dua digest berbeda, dan baris `Sama` bernilai `False`.

Hash bukan enkripsi: tidak ada kunci dekripsi untuk mengembalikan digest menjadi nota.
Jika penyerang mengganti file beserta hash pembandingnya, perbandingan hash saja belum membuktikan keaslian.
Kamu memerlukan sumber pembanding tepercaya atau tanda tangan digital dari Bab 08.

### Tugas dan bukti lulus

1. Ubah satu karakter pada salinan masukan.
2. Prediksi hasil jika masukan dikembalikan ke nilai awal.
3. Cocokkan perubahan hash dengan prediksi.

Kamu lulus jika dapat menjelaskan integritas, yaitu keutuhan data, serta perlunya sumber pembanding tepercaya.
Jelaskan juga alasan SHA-256 yang cepat tidak cocok untuk menyimpan password secara langsung.
Untuk password, pakai pustaka password hashing yang dirancang khusus, beserta salt dan parameter biaya sesuai rekomendasi terkini.
Istilah dan batas penggunaannya dibahas pada Bab 08.

## Lab 4: triase log tanpa terburu menyimpulkan

Pengelola Laundry Aman membaca login gagal dan berhasil sebelum menentukan aktivitas yang perlu diperiksa.
Dari folder utama tutorial, jalankan perintah berikut:

```powershell
py labs/log_triage.py
```

Program membaca [data/auth.jsonl](data/auth.jsonl). JSONL menyimpan satu objek JSON per baris, seperti catatan kejadian pada Bab 15.
Field-nya `timestamp`, `user`, `source_ip`, dan `event`.
IP dalam data khusus dokumentasi; alamat tersebut bukan target untuk dihubungi.

Bandingkan hasil program dengan contoh berikut:

```json
{
  "total": 7,
  "failed": 4,
  "success": 3,
  "failures_by_ip": {
    "192.0.2.20": 1,
    "198.51.100.8": 3
  }
}
```

Bob gagal sekali, lalu berhasil dari alamat yang sama. Salah ketik masuk akal sebagai salah satu dugaan.
Alamat lain mempunyai tiga kegagalan pada tiga akun, diikuti login berhasil sebagai operator.
Selidiki apakah ini aktivitas sah. Ringkasan ini **belum membuktikan serangan**.

Periksa waktu, asal perangkat, catatan MFA, serta tindakan setelah login.
Jangan menganggap satu IP selalu mewakili satu orang.
NAT dari Bab 03 dapat membuat beberapa perangkat berbagi alamat; proxy, yaitu perantara koneksi, juga dapat membuat sumber berbagi alamat.

Program memeriksa struktur dasar JSON, field wajib, dan jenis event.
Program tidak memvalidasi format timestamp/IP, mengurutkan kronologi, menerapkan jendela waktu, atau menentukan identitas pelaku.
Batas ini menjaga kode tetap satu halaman agar pemula dapat membacanya.

### Tugas dan bukti lulus

Lewat pengelola file, buat folder `hasil-belajar` jika belum ada.
Salin data menjadi `hasil-belajar/auth-salinan.jsonl`. Tambahkan satu baris sintetis berupa kegagalan Bob dari `192.0.2.20`.
Simpan sebagai UTF-8 dengan satu objek JSON per baris.

Prediksi hasil: total 8, failed 5, success 3, dan hitungan IP tersebut 2.
Dari terminal pada folder utama tutorial, jalankan perintah untuk membaca salinan:

```powershell
py labs/log_triage.py hasil-belajar/auth-salinan.jsonl
```

Cocokkan hasil dengan prediksi. Jika JSON rusak, program menyebut nomor baris dan keluar dengan status gagal.
Untuk latihan data sendiri, gunakan salinan tersebut dan tambahkan hanya baris sintetis.
Kamu lulus jika hitungannya benar serta laporan memisahkan fakta, dugaan, dan kebutuhan bukti tambahan.

## Uji dan masalah umum

Dari terminal pada folder utama tutorial, jalankan pemeriksaan berikut:

```powershell
py -m unittest discover -s tests -v
```

`OK` berarti seluruh test yang ada lulus. Baca nama test untuk mengetahui cakupannya.
Hasil itu tidak membuktikan semua kemungkinan serangan sudah dicegah.

| Gejala | Pemeriksaan |
|---|---|
| `py` tidak ditemukan | Coba `python --version`, lalu gunakan `python`; atau ikuti instalasi Bab 01 |
| `can't open file` | Buka terminal di folder utama tutorial, bukan di dalam folder `labs` |
| File berakhir `.py.txt` | Aktifkan tampilan ekstensi file dan ubah nama menjadi `.py` |
| `SyntaxError` setelah mengedit | Periksa kutip dan indentasi; bandingkan dengan file asli |
| Log gagal dibaca | Pakai UTF-8, satu objek JSON per baris, event hanya `login_failed`/`login_success` |

Referensi: [parameter SQL Python](https://docs.python.org/3/library/sqlite3.html#how-to-use-placeholders-to-bind-values-in-sql-queries),
[otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html),
[hashlib](https://docs.python.org/3/library/hashlib.html).
