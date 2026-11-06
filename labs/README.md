# Empat lab offline Laundry Aman

Prasyarat: Python 3.11+, mampu membuka terminal, dan folder tutorial sudah diekstrak.
Semua file memakai standard library: tidak ada `pip install`, API key, Docker,
atau layanan cloud. Jalankan dari root folder tutorial. Contoh perintah menggunakan
Windows PowerShell; di Linux/macOS ganti `py` dengan `python3`.

## Lab 1: bedakan data dengan perintah SQL

```powershell
py labs/sql_demo.py
```

Hasil:

```text
Data normal: [(1, 'Alice', 'siap')]
Input uji: "' OR 1=1 --"
Query rentan: [(1, 'Alice', 'siap'), (2, 'Bob', 'dicuci')]
Query berparameter: []
```

Buka [sql_demo.py](sql_demo.py). `sqlite3.connect(':memory:')` membuat database
sementara dalam RAM. Program mengisi dua nota buatan. Saat program selesai,
database hilang. Baris `f"... '{customer}'"` menyatukan input dengan kalimat SQL.
Pada cabang rentan, input uji mengubah syarat pencarian sehingga dua nota terlihat.
Cabang aman memakai `WHERE customer = ?` dan `(customer,)`; driver memperlakukan
input sebagai nilai nama. Tidak ada pelanggan dengan nama tersebut sehingga
hasilnya kosong. Tanda koma pada `(customer,)` membuat tuple satu nilai.

Jangan salin cabang rentan ke aplikasi. Parameterisasi melindungi posisi **nilai**;
nama kolom yang dinamis tetap membutuhkan daftar pilihan yang diizinkan. Query
berparameter juga tidak menggantikan pemeriksaan hak akses.

**Tugas:** prediksi hasil pencarian `Alice`, `O'Neil`, dan teks uji. Cocokkan
dengan fungsi `search_orders` atau test. Jelaskan kenapa menghapus tanda petik
dari input bukan perbaikan yang baik. **Lulus:** dapat menjelaskan perubahan
struktur query serta tetap menerima nama dengan apostrof sebagai data sah.

## Lab 2: periksa pemilik setiap objek

```powershell
py labs/access_demo.py
```

Alice boleh membaca nota 101. Bob dan pengguna tanpa login ditolak. Baca
[access_demo.py](access_demo.py), terutama perbandingan `order['owner'] != actor`.
`actor` pada contoh mewakili identitas yang **sudah diverifikasi server**. Aplikasi
nyata tidak boleh mempercayai `actor=alice` yang dikirim pengguna sebagai bukti login.

**Tugas:** gambar tabel Alice/Bob × nota 101/102, lalu tandai akses yang boleh.
Tambahkan kasus Bob membaca nota 102 di salinan latihan. Uji ulang agar Alice
tetap tidak boleh membacanya. Memakai UUID untuk ID nota boleh mengurangi tebakan,
tetapi izin tetap harus diperiksa. **Lulus:** empat kombinasi akses sesuai pemilik,
akses anonim ditolak, dan nota yang tidak ada mendapat penanganan yang jelas.

Lab ini berupa fungsi lokal, bukan server atau implementasi autentikasi siap produksi.
Pada aplikasi HTTP, tim perlu memilih respons yang tidak membocorkan keberadaan
objek kepada pengguna yang tidak berhak.

## Lab 3: deteksi perubahan isi

```powershell
py labs/crypto_demo.py
```

Program menghitung SHA-256 untuk `nota=10000` dan `nota=90000`. Dua digest berbeda
dan baris `Sama` bernilai `False`. Hash bukan enkripsi: tidak ada kunci dekripsi
untuk mengembalikan digest menjadi nota. Bila penyerang mengganti file beserta
hash pembandingnya, perbandingan hash saja tidak membuktikan keaslian. Anda
membutuhkan sumber pembanding tepercaya atau tanda tangan digital.

**Tugas:** ubah satu karakter pada salinan input. Prediksi hasil bila input
dikembalikan ke nilai awal. **Lulus:** bisa menjelaskan integritas, sumber
pembanding, dan alasan SHA-256 cepat tidak cocok sebagai penyimpan password
langsung. Untuk password, pakai library password hashing yang dirancang untuk
itu, beserta salt dan parameter biaya yang mengikuti rekomendasi terkini.

## Lab 4: triase log tanpa terburu menyimpulkan

```powershell
py labs/log_triage.py
```

Program membaca [data/auth.jsonl](data/auth.jsonl). JSONL menyimpan satu objek JSON
per baris. Field-nya `timestamp`, `user`, `source_ip`, dan `event`. IP dalam data
ini khusus dokumentasi, bukan target untuk dihubungi.

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

Bob gagal sekali lalu berhasil dari alamat yang sama; salah ketik masuk akal
sebagai salah satu hipotesis. Alamat lain memiliki tiga kegagalan pada tiga akun,
diikuti login berhasil sebagai operator. Perlu menyelidiki apakah ini aktivitas
sah. Ringkasan tersebut **belum membuktikan serangan**. Periksa waktu, asal
perangkat, catatan MFA, serta tindakan setelah login. Jangan menganggap satu IP
selalu mewakili satu orang; NAT dan proxy dapat berbagi alamat.

Program memeriksa struktur dasar JSON, field wajib, dan jenis event. Program
tidak memvalidasi format timestamp/IP, mengurutkan kronologi, menerapkan jendela
waktu, atau menentukan identitas pelaku. Batas ini sengaja dijaga agar pemula
dapat membaca kode satu halaman.

Untuk data latihan sendiri, salin file ke `hasil-belajar/auth-salinan.jsonl`,
tambahkan baris sintetis, lalu jalankan:

```powershell
py labs/log_triage.py hasil-belajar/auth-salinan.jsonl
```

Buat folder `hasil-belajar` lewat pengelola file terlebih dahulu. Jika JSON rusak,
program menyebut nomor baris dan keluar dengan status gagal. **Tugas:** tambahkan
satu kegagalan untuk Bob dari `192.0.2.20`, prediksi total 8, failed 5, success 3,
dan hitungan IP tersebut 2. **Lulus:** hitungan benar dan laporan memisahkan fakta,
hipotesis, serta bukti tambahan yang dibutuhkan.

## Uji dan masalah umum

```powershell
py -m unittest discover -s tests -v
```

`OK` berarti seluruh test yang ada lulus. Baca nama test untuk mengetahui cakupan;
hasil itu tidak menyatakan bahwa semua kemungkinan serangan telah dicegah.

| Gejala | Pemeriksaan |
|---|---|
| `py` tidak ditemukan | Coba `python --version`, lalu gunakan `python`; atau ikuti instalasi Bab 01 |
| `can't open file` | Buka terminal di root tutorial, bukan di dalam folder `labs` |
| File berakhir `.py.txt` | Aktifkan tampilan ekstensi file dan ubah nama menjadi `.py` |
| `SyntaxError` setelah mengedit | Periksa kutip dan indentasi; bandingkan dengan file asli |
| Log gagal dibaca | Pakai UTF-8, satu objek JSON per baris, event hanya `login_failed`/`login_success` |

Referensi: [parameter SQL Python](https://docs.python.org/3/library/sqlite3.html#how-to-use-placeholders-to-bind-values-in-sql-queries),
[otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html),
[hashlib](https://docs.python.org/3/library/hashlib.html).
