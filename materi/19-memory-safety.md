# Bab 19: Memory safety, debugging, dan fuzzing

## Tujuan dan prasyarat

Anda akan menemukan cacat pembacaan input dengan contoh kecil, menjelaskan akar penyebab, lalu merancang pengujian perbaikan. Pahami variabel, fungsi, byte, dan terminal. Jalur Python berjalan tanpa compiler. Jalur C memerlukan Clang di Linux atau VM lab yang sudah Anda siapkan; Anda boleh mencatatnya sebagai NOT_RUN sampai alat tersedia.

## Konsep

Memori seperti deretan loker bernomor. Program menyimpan data pada rentang alamat tertentu. **Buffer** adalah area penyimpanan dengan kapasitas tertentu. Program yang membaca atau menulis di luar batas dapat merusak data atau berhenti. Pada kondisi tertentu, penyerang bisa memanfaatkan kerusakan ini untuk mengubah perilaku program.

**Pointer** menyimpan alamat memori. **Use-after-free** terjadi ketika program memakai alamat setelah melepaskan penyimpanannya. **Integer overflow** dapat membuat perhitungan ukuran melampaui rentang tipe angka. Mengganti satu fungsi salin tidak menyelesaikan seluruh kelas masalah tersebut.

**Fuzzing** menguji program dengan banyak input yang berubah-ubah. Peneliti mencari crash, waktu proses berlebihan, atau pelanggaran aturan. **Corpus** adalah kumpulan input awal. **Harness** adalah program penghubung yang memberikan input kepada fungsi yang hendak diuji. Kualitas harness menentukan bagian program yang terjangkau.

**Sanitizer** menambahkan pemeriksaan ketika compiler membangun program. AddressSanitizer membantu menemukan sejumlah kesalahan memori. Sebuah crash memberi petunjuk bug; peneliti masih harus menentukan penyebab dan dampaknya. Program tanpa crash pada satu corpus juga belum membuktikan keamanan menyeluruh.

## Praktik

Laundry Aman menggunakan format label paket mainan: byte pertama menyatakan panjang nama, lalu byte berikutnya berisi nama ASCII. Contoh `b"\x03Ani"` menyatakan tiga karakter. Format ini sengaja kecil agar Anda bisa memeriksa tiap byte.

Buat folder `hasil-belajar/bab19/` melalui pengelola berkas, lalu simpan kode berikut sebagai `parser_lab.py` di dalamnya:

```python
import random

def baca_label(data):
    if not data:
        raise ValueError("header kosong")
    ukuran = data[0]
    if ukuran > 16:
        raise ValueError("nama terlalu panjang")
    if len(data) != ukuran + 1:
        raise ValueError("panjang tidak cocok")
    nama = data[1:].decode("ascii")
    if not nama.isalpha():
        raise ValueError("nama harus huruf ASCII")
    return nama

contoh = [b"\x03Ani", b"", b"\x05Ani", b"\x03A1i"]
for data in contoh:
    try:
        print(repr(data), "DITERIMA", baca_label(data))
    except ValueError as error:
        print(repr(data), "DITOLAK", str(error))

acak = random.Random(42)
diterima = ditolak = 0
for _ in range(1000):
    data = bytes(acak.randrange(256) for _ in range(acak.randrange(22)))
    try:
        nama = baca_label(data)
        assert 1 <= len(nama) <= 16
        assert nama.isascii() and nama.isalpha()
        diterima += 1
    except ValueError:
        ditolak += 1
print("Total:", diterima + ditolak)
```

Jalankan dengan `py hasil-belajar/bab19/parser_lab.py` di PowerShell, atau `python3` di Linux/macOS. `Random(42)` membuat urutan eksperimen dapat diulang. `UnicodeDecodeError` merupakan turunan `ValueError`, sehingga input non-ASCII juga masuk jalur penolakan. Jangan menangkap seluruh `Exception`: itu bisa menyembunyikan bug pemrograman yang ingin Anda temukan.

Empat contoh awal harus menerima Ani dan menolak tiga input lainnya. Seribu input acak cenderung menghasilkan banyak penolakan karena formatnya ketat. Tambahkan corpus terarah: panjang 1, 16, 17; input kosong; satu byte header; karakter non-ASCII; dan satu byte tambahan setelah nama. Anda sedang menguji **batas**, tempat banyak asumsi program gagal.

Sekarang pelajari pola cacat C berikut tanpa menjalankannya dahulu:

```c
#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
    char nama[8];
    if (argc != 2) return 2;
    strcpy(nama, argv[1]);
    puts(nama);
    return 0;
}
```

Array menyediakan delapan byte, termasuk byte penutup string `\0`. Nama delapan karakter sudah terlalu panjang. Penyebabnya adalah menyalin input tanpa memeriksa kapasitas tujuan.

Untuk jalur C opsional, simpan kode sebagai `label.c` di folder lab, lalu pada Bash Linux dengan Clang yang tersedia:

```bash
clang -g -O1 -fsanitize=address -fno-omit-frame-pointer label.c -o label
./label Ani
./label ABCDEFGH
```

`-g` menyertakan informasi debug; `-fsanitize=address` memasang pemeriksaan memori. Kasus kedua seharusnya menghasilkan laporan akses di luar buffer. Teks dan alamat laporan bergantung pada compiler serta sistem. Jalankan hanya biner lab milik sendiri.

Perbaiki bagian salin dengan pemeriksaan panjang sebelum menulis:

```c
size_t panjang = strlen(argv[1]);
if (panjang >= sizeof nama) {
    fputs("nama terlalu panjang\n", stderr);
    return 1;
}
memcpy(nama, argv[1], panjang + 1);
```

Kompilasi kembali, lalu uji nama panjang 0, 1, 7, 8, dan 20. Program versi perbaikan harus menerima paling banyak tujuh karakter; input lebih panjang harus keluar dengan kode 1 tanpa laporan sanitizer. Contoh ini hanya menangani argumen string yang telah memiliki penutup sesuai kontrak `argv`, bukan format biner arbitrer.

## Hasil yang diharapkan

Anda memiliki corpus input batas, perbedaan hasil sebelum/sesudah perbaikan, dan uraian akar penyebab. Dalam jalur Python, total percobaan acak harus 1000 dan tidak ada `AssertionError`. Dalam jalur C, Anda dapat menunjuk kapasitas buffer, panjang data, dan kebutuhan satu byte penutup.

## Jika macet

- `clang: command not found`: lanjutkan latihan Python dan tandai C sebagai NOT_RUN. Gunakan panduan toolchain resmi saat menyiapkan compiler.
- Tidak ada laporan sanitizer: pastikan flag masuk saat kompilasi dan linking, jalankan biner hasil build terakhir, serta catat lingkungan.
- Semua input acak ditolak: tambah input valid terarah, lalu ubah satu byte dari input itu. Banyak penolakan tidak sama dengan cakupan kode yang baik.

## Latihan

Ubah aturan nama menjadi huruf dan satu spasi di tengah. Tulis dahulu contoh yang harus diterima dan ditolak. Bandingkan random fuzzing dengan mutasi corpus valid. Untuk pendalaman spesialis, pelajari libFuzzer, coverage, minimisasi input pemicu, dan deduplikasi crash pada program open-source yang mengizinkan riset.

## Bukti kelulusan

Serahkan parser, delapan kasus batas, seed eksperimen, hasil perbaikan, dan satu contoh bug yang belum diuji. Anda lulus jika orang lain dapat mengulang kegagalan dan memahami alasan perbaikan tanpa menjalankan serangan terhadap layanan lain.

## Referensi

- [Clang AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html).
- [LLVM libFuzzer](https://llvm.org/docs/LibFuzzer.html).
- [Python: random](https://docs.python.org/3/library/random.html).
