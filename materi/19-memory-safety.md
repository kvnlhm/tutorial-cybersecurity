# Bab 19: Memory safety, debugging, dan fuzzing

Tahap 5 dari 6: Memeriksa program dan lingkungan

## Tujuan dan prasyarat

Kamu akan menemukan cacat pembacaan input dengan contoh kecil, menjelaskan akar penyebabnya, lalu merancang pengujian perbaikan.
Contoh Python melatih pemeriksaan format masukan. Contoh C menunjukkan bagaimana penyalinan tanpa batas dapat merusak memori.

Bekal utamamu adalah [lingkungan lab dari Bab 01](01-lab.md) serta [proses dan memori dari Bab 02](02-komputer.md).
Pahami juga [fungsi dari Bab 06](06-pemrograman.md) serta [analisis program dari Bab 18](18-malware-reverse.md).
Jalur Python dapat dijalankan langsung tanpa memerlukan compiler biner tambahan.
Jalur C memerlukan Clang di Linux atau VM lab yang sudah kamu siapkan; kamu boleh mencatatnya sebagai `NOT_RUN` sampai alat tersedia.

## Konsep

Program komputer menyimpan data masukan di memori saat mengolah pesanan.
Jika batas ruang memori tidak dijaga, pembacaan atau penulisan bisa meluap ke luar area yang sah.
Kesalahan memori dapat merusak data atau membuat program berhenti mendadak.
Pengujian otomatis membantu menemukan celah batas sebelum program dipakai di produksi.
Kita akan memeriksa ruang penyimpanan, menguji variasi masukan, lalu membatasi penyalinan sesuai kapasitasnya.

### Menjaga batas kapasitas ruang memori

Memori komputer diibaratkan seperti deretan loker penyimpanan bernomor urut di Laundry Aman.
Program menyimpan data pada rentang alamat tertentu yang dialokasikan oleh sistem operasi.

Sebuah **buffer** adalah area penyimpanan dengan kapasitas tertentu untuk menampung data.
Program yang membaca atau menulis di luar batas dapat merusak data atau berhenti.
Pada kondisi tertentu, penyerang bisa memanfaatkan kerusakan ini untuk mengubah perilaku program.

Saat program C Laundry Aman menyimpan lokasi label, ia memakai **pointer**, nilai berisi alamat memori, seperti catatan nomor loker.

Celah **use-after-free** terjadi ketika program memakai alamat setelah melepaskan penyimpanannya.
Seperti memakai nomor loker yang sudah diserahkan kepada orang lain, alamat itu sudah tidak sah untuk pemakaian semula.

**Integer overflow** terjadi ketika hasil perhitungan melampaui rentang tipe bilangan, seperti jumlah barang yang melebihi kapasitas pencatatan ukuran.
Jangan menganggap hasilnya selalu berputar menjadi angka kecil; perilakunya bergantung pada tipe dan aturan bahasa.
Mengganti satu fungsi salin tidak menyelesaikan seluruh kelas masalah tersebut.

### Menguji ketahanan input dengan fuzzing

Petugas Laundry Aman ingin memeriksa banyak variasi label tanpa mengetiknya satu per satu.

Metode **fuzzing** menguji program dengan banyak input yang berubah-ubah secara otomatis.
Peneliti mencari crash, yaitu program berhenti akibat kegagalan, waktu proses berlebihan, atau pelanggaran aturan keamanan.

Kumpulan input awal disebut **corpus**, seperti satu paket label contoh untuk diuji ulang.
Corpus membantu membandingkan hasil sebelum dan sesudah perbaikan.

Program penghubung yang memberikan input kepada fungsi yang hendak diuji disebut **harness**.
Bayangkan petugas pengumpan label ke mesin: ia menentukan masukan mana yang mencapai bagian pemeriksaan.
Kualitas harness menentukan bagian program yang terjangkau oleh proses pengujian.

#### Cukup kenali dulu

- **Mutation fuzzing**: pengujian dengan mengubah sedikit bagian dari contoh input yang valid.
- **Code coverage**: ukuran bagian kode yang dijalankan pengujian; ukuran baris dan cabang menjawab pertanyaan berbeda.
- **Crash triage**: pemilahan dan analisis laporan kegagalan untuk menemukan akar masalah.

### Menemukan bug memori memakai sanitizer

Program label Laundry Aman yang ditulis dalam C bisa terus berjalan sesaat setelah kesalahan memori terjadi.

Alat bantu **sanitizer** menambahkan pemeriksaan ketika compiler membangun program, seperti memasang sensor batas pada mesin.
AddressSanitizer membantu menemukan sejumlah kesalahan memori, seperti penulisan di luar batas array.
Sebuah crash memberi petunjuk bug; peneliti masih harus menentukan penyebab dan dampaknya.
Program tanpa crash pada satu corpus juga belum membuktikan keamanan menyeluruh.

### Ringkasan

- Buffer memiliki kapasitas tetap; penulisan di luar batas merusak memori di sekitarnya.
- Pemakaian pointer yang tidak sah dan kesalahan perhitungan ukuran dapat menimbulkan cacat memori.
- Fuzzing menguji ketahanan program menggunakan corpus dan harness secara otomatis.
- Sanitizer membantu mendeteksi akses memori liar saat program biner dieksekusi.

### Cek pemahaman

1. Mengapa penyalinan data ke buffer harus memeriksa kapasitas tujuannya?
2. Apa fungsi corpus dalam kegiatan fuzzing pengujian program?
3. Mengapa program yang tidak mengalami crash saat diuji seribu input acak belum tentu bebas dari bug?

## Praktik

Laundry Aman memakai format label paket mainan dengan satu byte panjang, lalu byte nama.
**ASCII** adalah pemetaan karakter ke angka; contoh ini memakai huruf A–Z dan a–z yang masing-masing menempati satu byte.

Contoh `b"\x03Ani"` menyatakan tiga karakter nama pelanggan.
Awalan b menandai data byte; `\x03` menyatakan satu byte bernilai desimal 3.
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

Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan perintah berikut:

**Windows PowerShell**

```powershell
py hasil-belajar/bab19/parser_lab.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Telusuri alur fungsi `baca_label` langkah demi langkah:
Pemeriksaan pertama memastikan data tidak kosong.
Pemeriksaan kedua membatasi panjang nama maksimal 16 byte.
Pemeriksaan ketiga mencocokkan total ukuran data dengan header, yaitu byte pertama yang berisi panjang nama.
Setelah itu, program mengubah byte menjadi teks ASCII dan memastikan nama hanya berisi huruf.

Nilai 42 pada `Random(42)` adalah **seed**, nilai awal pembangkit acak, seperti titik mulai urutan percobaan.
Seed yang sama membantu pengulangan; catat versi Python karena algoritma pembangkitan dapat berubah antarversi.
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
Array adalah deretan elemen; tipe char pada contoh menyimpan satu byte per elemen.
Dalam string C, karakter null `\0` menandai akhir teks. Delapan byte menampung tujuh huruf ASCII dan satu byte penutup.
Nama delapan huruf ASCII sudah terlalu panjang untuk ditampung.
Penyebabnya adalah menyalin input tanpa memeriksa kapasitas tujuan terlebih dahulu.

### 3. Kompilasi dengan AddressSanitizer (opsional)

Untuk jalur C opsional, simpan kode sebagai `label.c` di folder lab.
Di terminal Linux dengan Clang yang tersedia, buka folder `hasil-belajar/bab19/`, lalu jalankan perintah berikut:

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

Di editor, ganti baris penyalinan pada `label.c` dengan kode berikut, sebelum pemanggilan pencetak nama:

```c
size_t panjang = strlen(argv[1]);
if (panjang >= sizeof nama) {
    fputs("nama terlalu panjang\n", stderr);
    return 1;
}
memcpy(nama, argv[1], panjang + 1);
```

Pada potongan ini, strlen menghitung panjang teks sebelum penutup; sizeof menghitung kapasitas array.
Memcpy menyalin jumlah byte yang diminta. Tambahan satu pada panjang ikut menyalin byte penutup.

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
| Pesan `clang: command not found` | Lanjutkan Python, tandai C sebagai `NOT_RUN`, dan ikuti panduan toolchain resmi saat menyiapkan compiler |
| Tidak ada laporan sanitizer di C | Periksa flag `-fsanitize=address` saat kompilasi dan linking, jalankan biner build terakhir, lalu catat lingkungan |
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
Mutasi corpus valid dapat menjangkau pemeriksaan yang gagal dicapai masukan acak murni.
Bandingkan bagian kode yang tercapai pada percobaanmu; kecepatannya bergantung pada program dan masukan.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan berkas `parser_lab.py`, delapan kasus batas, nilai seed eksperimen, dan hasil perbaikannya.
- [ ] Saya menyertakan satu contoh bug yang belum diuji dan menandainya sebagai belum diverifikasi.
- [ ] Orang lain dapat mengulang kegagalan dan memahami alasan perbaikan dari catatan saya.
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
