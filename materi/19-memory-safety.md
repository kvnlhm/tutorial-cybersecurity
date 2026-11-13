# Bab 19: Memory safety, debugging, dan fuzzing

Tahap 5 dari 6: Memeriksa program dan lingkungan

## Tujuan dan prasyarat

Kamu akan menemukan cacat pembacaan input dengan contoh kecil, menjelaskan akar penyebabnya, lalu merancang pengujian perbaikan.
Pemahaman ini membantumu melindungi aplikasi Laundry Aman dari kerusakan memori tak terduga.

Bekal utamamu adalah [lingkungan lab dari Bab 01](01-lab.md) serta [proses dan memori dari Bab 02](02-komputer.md).
Pahami juga [fungsi dari Bab 06](06-pemrograman.md) serta [analisis program dari Bab 18](18-malware-reverse.md).
Jalur Python dapat dijalankan langsung tanpa memerlukan compiler biner tambahan.
Jalur C memerlukan Clang di Linux atau VM lab yang sudah kamu siapkan; kamu boleh mencatatnya sebagai `NOT_RUN` sampai alat tersedia.

## Konsep

Program komputer menyimpan data masukan di memori saat mengolah pesanan.
Jika batas ruang memori tidak dijaga, pembacaan atau penulisan bisa meluap ke luar area yang sah.
Kesalahan memori dapat merusak data atau membuat program berhenti mendadak.
Pengujian otomatis membantu menemukan celah batas sebelum program dipakai di produksi.
Kita akan mempelajari pengelolaan memori, pengujian masukan acak, dan pembatasan buffer.

### Menjaga batas kapasitas ruang memori

Memori komputer diibaratkan seperti deretan loker penyimpanan bernomor urut di Laundry Aman.
Program menyimpan data pada rentang alamat tertentu yang dialokasikan oleh sistem operasi.

Sebuah **buffer** adalah area penyimpanan dengan kapasitas tertentu untuk menampung data.
Program yang membaca atau menulis di luar batas dapat merusak data atau berhenti.
Pada kondisi tertentu, penyerang bisa memanfaatkan kerusakan ini untuk mengubah perilaku program.

Bahasa tingkat rendah mengelola alamat memori secara langsung.
Sebuah **pointer** menyimpan alamat memori tempat suatu data tersimpan.
Celah **use-after-free** terjadi ketika program memakai alamat setelah melepaskan penyimpanannya.
Celah **integer overflow** dapat membuat perhitungan ukuran melampaui rentang tipe angka, sehingga berputar kembali ke angka kecil yang tak terduga.
Mengganti satu fungsi salin tidak menyelesaikan seluruh kelas masalah tersebut.

#### Cukup kenali dulu

- **Stack**: ruang memori lokal untuk variabel fungsi yang berukuran tetap dan dialokasikan cepat.
- **Heap**: ruang memori dinamis yang dialokasikan dan dibebaskan secara manual oleh kode program.
- **Memory leak**: pemborosan memori saat alokasi heap tidak dibebaskan setelah selesai digunakan.

### Menguji ketahanan input dengan fuzzing

Memeriksa ribuan kombinasi masukan secara manual membutuhkan waktu yang sangat lama.

Metode **fuzzing** menguji program dengan banyak input yang berubah-ubah secara otomatis.
Peneliti mencari crash, waktu proses berlebihan, atau pelanggaran aturan keamanan.
Kumpulan input awal yang menjadi modal uji disebut **corpus**.
Program penghubung yang memberikan input kepada fungsi yang hendak diuji disebut **harness**.
Kualitas harness menentukan bagian program yang terjangkau oleh proses pengujian.

#### Cukup kenali dulu

- **Mutation fuzzing**: pengujian dengan mengubah sedikit bagian dari contoh input yang valid.
- **Code coverage**: ukuran persentase jalur percabangan kode yang berhasil disentuh oleh pengujian.
- **Crash triage**: pemilahan dan analisis laporan kegagalan untuk menemukan akar masalah.

### Menemukan bug memori memakai sanitizer

Pada bahasa seperti C, bug memori tidak selalu langsung menghentikan program di tempat terjadinya kesalahan.

Alat bantu **sanitizer** menambahkan pemeriksaan ketika compiler membangun program.
AddressSanitizer membantu menemukan sejumlah kesalahan memori, seperti penulisan di luar batas array.
Sebuah crash memberi petunjuk bug; peneliti masih harus menentukan penyebab dan dampaknya.
Program tanpa crash pada satu corpus juga belum membuktikan keamanan menyeluruh.

<details>
<summary>Pendalaman opsional: notasi byte Python dan karakter null bahasa C</summary>

Pada Python, literal byte ditulis dengan awalan b seperti `b"\x03Ani"`, di mana `\x03` adalah angka desimal 3.
Pada bahasa C, deretan karakter string diakhiri dengan karakter null `\0`.
Array penampung 8 byte hanya dapat menyimpan maksimal 7 karakter huruf, karena 1 byte wajib disediakan untuk penutup `\0`.

</details>

### Ringkasan

- Buffer memiliki kapasitas tetap; penulisan di luar batas merusak memori di sekitarnya.
- Pointer, use-after-free, dan integer overflow adalah penyebab umum cacat keamanan memori.
- Fuzzing menguji ketahanan program menggunakan corpus dan harness secara otomatis.
- Sanitizer membantu mendeteksi akses memori liar saat program biner dieksekusi.

### Cek pemahaman

1. Mengapa array bertipe char dengan kapasitas 8 byte di C hanya boleh diisi teks maksimal 7 huruf?
2. Apa fungsi corpus dalam kegiatan fuzzing pengujian program?
3. Mengapa program yang tidak mengalami crash saat diuji seribu input acak belum tentu bebas dari bug?

## Praktik

Laundry Aman menggunakan format label paket mainan: byte pertama menyatakan panjang nama, lalu byte berikutnya berisi nama ASCII.
Contoh `b"\x03Ani"` menyatakan tiga karakter nama pelanggan.
Format ini sengaja kecil agar kamu bisa memeriksa tiap byte secara mandiri.

### 1. Uji parser label dengan Python

Buat folder `hasil-belajar/bab19/` melalui pengelola berkas.
Simpan kode berikut sebagai `parser_lab.py` di dalamnya:

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

Jalankan perintah berikut:

**Windows PowerShell**

```powershell
py hasil-belajar/bab19/parser_lab.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Telusuri alur fungsi `baca_label` langkah demi langkah:
Pemeriksaan pertama memastikan data tidak kosong.
Pemeriksaan kedua membatasi panjang nama maksimal 16 byte.
Pemeriksaan ketiga memverifikasi total ukuran data sesuai dengan header.
Pemeriksaan keempat memastikan nama hanya tersusun dari huruf ASCII.

Inisialisasi `Random(42)` membuat urutan eksperimen acak dapat diulang persis.
Kelas `UnicodeDecodeError` adalah turunan `ValueError`, sehingga input non-ASCII otomatis masuk jalur penolakan yang aman.
Jangan menangkap seluruh `Exception`: tindakan itu bisa menyembunyikan bug pemrograman internal yang ingin kamu temukan.

Empat contoh awal harus menerima Ani dan menolak tiga input lainnya.
Seribu input acak cenderung menghasilkan banyak penolakan karena formatnya ketat.
Tambahkan corpus terarah: panjang 1, 16, 17; input kosong; satu byte header; karakter non-ASCII; dan satu byte tambahan setelah nama.
Kamu sedang menguji **batas**, tempat banyak asumsi program gagal.

### 2. Pelajari cacat penyalinan buffer di bahasa C

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

Array menyediakan delapan byte, termasuk byte penutup string `\0`.
Nama delapan karakter sudah terlalu panjang untuk ditampung.
Penyebabnya adalah menyalin input tanpa memeriksa kapasitas tujuan terlebih dahulu.

### 3. Kompilasi dengan AddressSanitizer (opsional)

Untuk jalur C opsional, simpan kode sebagai `label.c` di folder lab.
Pada terminal Linux dengan Clang yang tersedia, jalankan:

```bash
clang -g -O1 -fsanitize=address -fno-omit-frame-pointer label.c -o label
./label Ani
./label ABCDEFGH
```

Opsi `-g` menyertakan informasi debug; `-fsanitize=address` memasang pemeriksaan memori otomatis.
Kasus kedua seharusnya menghasilkan laporan akses di luar buffer.
Teks dan alamat laporan bergantung pada compiler serta sistem yang digunakan.
Jalankan hanya biner lab milik sendiri di komputer latihan.

### 4. Perbaiki penyalinan memori yang aman

Perbaiki bagian salin dengan pemeriksaan panjang sebelum menulis ke array:

```c
size_t panjang = strlen(argv[1]);
if (panjang >= sizeof nama) {
    fputs("nama terlalu panjang\n", stderr);
    return 1;
}
memcpy(nama, argv[1], panjang + 1);
```

Kompilasi kembali, lalu uji nama panjang 0, 1, 7, 8, dan 20.
Program versi perbaikan harus menerima paling banyak tujuh karakter; input lebih panjang harus keluar dengan kode 1 tanpa laporan sanitizer.
Contoh ini hanya menangani argumen string yang telah memiliki penutup sesuai kontrak `argv`, bukan format biner arbitrer.

## Hasil yang diharapkan

Kamu memiliki corpus input batas, perbedaan hasil sebelum dan sesudah perbaikan, serta uraian akar penyebab masalah.
Dalam jalur Python, total percobaan acak harus 1000 dan tidak ada `AssertionError`.
Dalam jalur C, kamu dapat menunjuk kapasitas buffer, panjang data, dan kebutuhan satu byte penutup.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Pesan `clang: command not found` | Lanjutkan latihan Python dan tandai C sebagai `NOT_RUN` sampai compiler tersedia |
| Tidak ada laporan sanitizer di C | Pastikan flag `-fsanitize=address` disertakan saat kompilasi dan linking |
| Semua input acak Python ditolak | Tambah input valid terarah ke corpus, lalu ubah satu byte darinya untuk menguji batas |

Banyaknya penolakan input acak tidak otomatis berarti cakupan kode pengujian sudah menyeluruh.

## Latihan

Ubah aturan nama pada parser Python menjadi huruf dan satu spasi di tengah.
Tulis dahulu contoh yang harus diterima dan ditolak sebelum mengubah kode.
Bandingkan random fuzzing dengan mutasi corpus valid.

Untuk pendalaman spesialis, pelajari libFuzzer, coverage, minimisasi input pemicu, dan deduplikasi crash pada program open-source yang mengizinkan riset.

<details>
<summary>Pembahasan setelah mencoba: latihan validasi nama</summary>

Saat menambahkan aturan spasi di tengah, kamu perlu memastikan nama tidak diawali atau diakhiri spasi kosong.
Pengujian batas mencakup masukan dengan dua spasi berurutan, spasi di awal, atau spasi di akhir.
Mutasi terhadap corpus valid jauh lebih cepat menemukan percabangan baru dibandingkan pengujian acak murni.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan berkas `parser_lab.py`, delapan kasus batas, nilai seed eksperimen, dan hasil perbaikannya.
- [ ] Saya dapat menerangkan peran satu byte penutup `\0` pada string bahasa C.
- [ ] Saya memahami batas pengujian fuzzing acak dan pentingnya menyusun corpus terarah.
- [ ] Saya dapat menjelaskan satu contoh cacat memori tanpa menjalankan serangan terhadap sistem luar.

### Lanjut belajar

Jika pengujian fungsi dan penanganan kesalahan masih membingungkan, buka kembali [Bab 06](06-pemrograman.md).
Untuk menyegarkan pemahaman analisis biner, baca kembali [Bab 18](18-malware-reverse.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 20: Enterprise](20-enterprise.md) untuk mempelajari arsitektur identitas dan domain perusahaan berskala besar.

## Referensi

- [Clang AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html).
- [LLVM libFuzzer](https://llvm.org/docs/LibFuzzer.html).
- [Python: random](https://docs.python.org/3/library/random.html).
