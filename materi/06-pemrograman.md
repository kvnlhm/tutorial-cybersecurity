# Bab 06: Menulis skrip kecil dan mencatat perubahan

Tahap 2 dari 6: Memahami cara sistem bekerja

## Tujuan dan prasyarat

Kamu akan menulis Python untuk menghitung kejadian sintetis, mengenali Bash, dan menyimpan perubahan dengan Git.
Kemampuan ini membantumu mengolah data operasional Laundry Aman dengan cepat dan rapi.

Selesaikan latihan folder dan terminal pada [Bab 01](01-lab.md) serta [Bab 02](02-komputer.md).
Kamu juga bisa membandingkan perintah terminal dengan [Bab 04](04-linux.md) dan [Bab 05](05-windows.md).

Kamu belum perlu menghafal sintaks bahasa pemrograman.
Baca setiap baris kode dengan tenang, lalu ubah satu hal untuk melihat pengaruhnya.

## Konsep

Di Laundry Aman, kasir memeriksa catatan nota dan rekaman login setiap sore.
Jika jumlah catatan hanya sepuluh baris, kita bisa membacanya satu per satu.
Namun, ketika ada ribuan catatan, memeriksa secara manual memakan waktu dan melelahkan.
Skrip program membantu kita menghitung dan menyaring kejadian penting secara otomatis.
Kita akan mempelajari cara menulis program kecil, menguji hasilnya, dan menyimpan riwayat kerja.

### Mengolah data toko dengan aturan yang konsisten

Kasir Laundry Aman ingin menghitung status login dengan aturan yang sama setiap sore.
Kita menggunakan wadah dan aturan dasar untuk menyimpan serta mengolah data.

Sebuah **variabel** memberi nama pada suatu nilai, seperti menempel label pada toples detergen.
Tanda `=` memberi nilai pada variabel.
Tanda `==` membandingkan dua nilai.

Sebuah **string** menyimpan teks, seperti nama pelanggan Laundry Aman.

Sebuah **integer** menyimpan bilangan bulat, seperti jumlah pesanan baju.

Sebuah **list** menyimpan urutan nilai, seperti daftar status pesanan pakaian.

Kasir dapat menaruh beberapa status dalam satu list, lalu memeriksa anggotanya satu per satu.
Ia tidak perlu membuat variabel terpisah untuk setiap kejadian.

Sebuah **dictionary** menghubungkan kunci dengan nilai, mirip label pada laci penyimpanan nota.

Sebuah **loop** mengulangi langkah kerja untuk setiap data di dalam kelompok.

Sebuah **kondisi** memilih tindakan berdasarkan syarat yang ditentukan.

Misalnya, kasir hanya menambah hitungan jika status yang dibaca sama dengan teks gagal.

Sebuah **fungsi** mengemas pekerjaan agar dapat dipanggil dan diuji dengan masukan berbeda.
Perintah `assert` memeriksa dugaan hasil di latihan dan menghentikan program jika hasilnya tidak cocok.

#### Cukup kenali dulu

- **Tipe data**: kategori nilai di komputer, seperti teks, angka bulat, atau daftar.
- **Kunci dan nilai**: pasangan data di dictionary untuk mencari informasi dengan cepat.
- **Parameter**: nama penerima masukan dalam definisi fungsi; pada contoh nanti, namanya hasil_login.

### Memilih alat pemrograman untuk keamanan

Setiap bahasa pemrograman memiliki kegunaan tersendiri dalam pekerjaan keamanan komputer:

- Python cocok untuk pengolahan data dan otomasi tugas berulang.
- Bash membantu merangkai perintah pada sistem operasi Linux.
- PowerShell mengolah objek terstruktur pada lingkungan Windows.
- JavaScript penting untuk memahami cara kerja halaman browser.
- SQL dipakai untuk mengelola dan mencari data di basis data.
- Bahasa C membantu memahami alokasi memori pada materi lanjutan nanti.

Mulai belajar dengan satu bahasa terlebih dahulu sampai kamu mampu membaca pesan error dan menguji hasil.

#### Cukup kenali dulu

- **Sintaks**: aturan penulisan kode pada suatu bahasa pemrograman.
- **Otomasi**: menjalankan tugas berulang secara mandiri melalui program.
- **Traceback**: laporan baris kesalahan saat program Python berhenti tiba-tiba.

### Menyimpan riwayat perubahan dengan Git

Saat menulis program atau laporan catatan, kamu perlu menyimpan kemajuan pekerjaan secara teratur.

Perangkat lunak **Git** mencatat versi perubahan file dari waktu ke waktu.
Sebuah **commit** menyimpan potret perubahan file beserta pesan penjelasannya.
Sebuah **repository** adalah folder kerja beserta riwayat Git yang merekam jejaknya.

Git dapat dipakai tanpa GitHub dan tanpa sambungan internet di komputermu sendiri.
Layanan GitHub adalah salah satu tempat di internet untuk berbagi repository dengan orang lain.

File yang masuk riwayat dapat tetap tersedia dalam commit lama setelah kamu menghapus versi terbarunya.
Oleh karena itu, cegah rahasia seperti password masuk ke Git sejak awal.

<details>
<summary>Pendalaman opsional: mengapa rahasia tidak boleh masuk Git</summary>

Saat kamu membuat commit, Git menyimpan potret isi file dalam riwayat.
Menghapus file pada commit berikutnya tidak menghapus catatan lama dari riwayat.
Orang yang mempunyai commit lama dapat menemukan password di dalamnya.
Simpan rahasia di luar file yang dilacak Git.
File pengecualian `.gitignore` membantu mengabaikan file yang belum dilacak; menambahkannya tidak menghapus rahasia dari riwayat.

</details>

### Ringkasan

- Variabel, tipe data, kondisi, dan loop adalah fondasi dasar untuk mengolah data otomatis.
- Fungsi mengemas tugas berulang agar mudah diuji dengan berbagai masukan data.
- Git mencatat riwayat perubahan secara lokal di komputermu tanpa perlu internet.
- Jangan pernah memasukkan password atau data rahasia ke dalam commit Git.

### Cek pemahaman

1. Apa perbedaan cara kerja `=` (pemberian nilai) dan `==` (perbandingan)?
2. Mengapa menghapus file rahasia dari folder kerja belum tentu menghapusnya dari riwayat Git?
3. Mengapa `assert` hanya cocok untuk pengujian latihan dan bukan satu-satunya pertahanan aplikasi produksi?

## Praktik

Siapkan komputer dan Python dari Bab 01. Buka folder utama tutorial di editor dan terminal.
Ikuti langkah-langkah berikut secara berurutan.

### 1. Buat program pertama

Di editor teks, simpan file `hasil-belajar/hitung_login.py` dengan isi berikut:

```python
def hitung_gagal(hasil_login):
    jumlah = 0
    for hasil in hasil_login:
        if hasil == "gagal":
            jumlah += 1
    return jumlah


kejadian = ["berhasil", "gagal", "gagal", "berhasil", "gagal"]
print("Login gagal:", hitung_gagal(kejadian))
assert hitung_gagal([]) == 0
assert hitung_gagal(["berhasil"]) == 0
assert hitung_gagal(["gagal", "gagal"]) == 2
```

Jalankan program dari folder utama tutorial.
Pilih jalur sesuai sistem operasi yang kamu gunakan:

**Windows PowerShell**

```powershell
py hasil-belajar/hitung_login.py
```

**Linux/macOS**

```bash
python3 hasil-belajar/hitung_login.py
```

Kata kunci `def` mendefinisikan fungsi baru.
Baris `jumlah = 0` menyiapkan variabel penghitung awal.
Perintah `for` mengulangi pekerjaan untuk tiap elemen; `if` memilih tindakan saat syaratnya benar.
Pada contoh, `==` membandingkan teks, sedangkan `+= 1` menambah satu pada nilai jumlah.
Kata kunci `return` mengembalikan nilai hasil perhitungan kepada pemanggil fungsi.

Indentasi spasi adalah bagian aturan sintaks Python; gunakan empat spasi untuk satu tingkat indentasi.
Perintah `assert` memeriksa dugaan hasil dan menghentikan program jika hasil pengujian tidak cocok.
Assert berguna di latihan, tetapi jangan menjadikannya satu-satunya pemeriksaan keamanan aplikasi.
Mode optimasi Python dapat mematikan assert, sehingga pemeriksaan penting tidak boleh mengandalkannya saja.

Ikuti perubahan nilainya di kertas untuk memahami alur eksekusi.
Fungsi belum menghitung saat baris `def` dibaca; Python hanya menyiapkan definisinya di memori.
Pemanggilan `hitung_gagal(kejadian)` memberikan list ke nama `hasil_login`, lalu Python menjalankan isi fungsi.
Tabel berikut menunjukkan satu putaran untuk setiap anggota list:

| Elemen yang sedang dibaca | Nilai `jumlah` sebelumnya | Apakah sama dengan `gagal`? | Nilai setelah langkah |
|---|---:|---|---:|
| `berhasil` | 0 | Tidak | 0 |
| `gagal` | 0 | Ya | 1 |
| `gagal` | 1 | Ya | 2 |
| `berhasil` | 2 | Tidak | 2 |
| `gagal` | 2 | Ya | 3 |

Tanda `=` memberi nilai, sedangkan `==` membandingkan dua nilai.
Kedua tanda itu melakukan pekerjaan berbeda yang tidak boleh tertukar.
Pada list kosong, loop tidak melakukan putaran sehingga fungsi mengembalikan nol.
Cocokkan penjelasan tersebut dengan pengujian pertama sebelum mengubah kode.

Keluaran yang diharapkan di layar adalah `Login gagal: 3`.
Program tidak mencetak teks apa pun untuk pengujian assert yang lulus.
Ubah satu elemen dari `gagal` menjadi `berhasil`; prediksi angka hasilnya sebelum kamu menjalankan kembali program.

### 2. Bedakan data valid dan data asing

Tambahkan teks `GAGAL` dengan huruf besar ke dalam list data.
Hitungan tidak naik karena fungsi mencari teks `gagal` huruf kecil secara persis.
Ini adalah keputusan mengenai definisi data pada program.

Pada sistem nyata, kamu perlu memutuskan perlakuan data tersebut:
Apakah nilai berbeda itu dianggap sah, perlu normalisasi bentuk, atau termasuk kesalahan format.
Jangan mengubah semua input tanpa memahami kontrak aturan datanya.

Tambahkan pengujian `assert hitung_gagal(["GAGAL"]) == 0`.
Hasil pengujian ini mendokumentasikan perilaku program saat ini.
Jika aturan bisnis berubah agar keduanya dianggap sama, tulis harapan baru dahulu, lihat kegagalannya, lalu perbarui fungsi dan jalankan seluruh pemeriksaan lagi.

### 3. Kenali skrip shell kecil

Pada Linux Bash, kamu bisa membuat perulangan sederhana di terminal:

```bash
for status in berhasil gagal gagal; do
  printf 'Hasil latihan: %s\n' "$status"
done
```

Loop shell di atas menjalankan perintah `printf` sebanyak tiga kali.
Tanda kutip `"$status"` menjaga nilai variabel tetap menjadi satu argumen utuh.

Untuk masukan dari pengguna luar yang tak tepercaya, hindari menyusunnya langsung menjadi perintah shell.
Dalam Python, panggil fungsi pustaka yang tersedia, bukan menggabungkan teks masukan ke perintah seperti `os.system`.

### 4. Simpan riwayat lokal jika Git tersedia

Perintah Git berikut dapat dijalankan di PowerShell Windows atau terminal Linux/macOS.
Periksa ketersediaan Git di komputermu dengan perintah `git --version`.
Jika belum tersedia, kamu boleh melanjutkan bab tanpa Git lalu memasangnya dari sumber resmi saat diperlukan.

Buat folder latihan terpisah melalui pengelola file, misalnya `git-latihan-laundry`, lalu buka terminal di dalamnya.
Jangan menjalankan `git init` di home atau di repository lain.

Jalankan perintah inisialisasi berikut di dalam folder baru:

```text
git init
git status
```

Buat file baru bernama `catatan.md` menggunakan editor teks, tulis satu pelajaran, lalu simpan file.
Kemudian jalankan perintah penyimpanan riwayat:

```text
git add catatan.md
git diff --cached
git -c user.name="Pelajar Lab" -c user.email="pelajar@example.invalid" commit -m "Catat latihan pertama"
git log --oneline
```

Perintah `git add` menyiapkan isi file saat itu untuk disimpan dalam commit.
Perintah `git diff --cached` memperlihatkan perubahan isi yang akan disimpan.
Dua opsi `-c` menyediakan identitas sementara khusus perintah ini tanpa mengubah konfigurasi global komputermu.

Alamat `.invalid` memang dipakai sebagai domain contoh pengujian, bukan alamat email pengiriman nyata.
Jangan menjalankan perintah push ke internet; latihan ini selesai sepenuhnya di komputermu secara lokal.

## Hasil yang diharapkan

Program berhasil menghitung tiga kegagalan, pengujian assert lulus tanpa pesan error, dan perubahan data mengubah keluaran sesuai prediksi.
Jika mengerjakan bagian Git, kamu memiliki satu commit lokal dengan file catatan yang sudah diperiksa isinya.

## Jika macet

Jika program berhenti dan menampilkan pesan kesalahan, baca panduan tabel berikut.

| Pesan kesalahan | Penyebab umum dan tindakan aman |
|---|---|
| `SyntaxError` | Periksa tanda kurung, titik dua, dan tanda petik pada kode |
| `IndentationError` | Samakan jumlah spasi indentasi; gunakan empat spasi konsisten |
| `NameError` | Periksa ejaan nama variabel atau fungsi yang belum dibuat |

Bacalah baris terakhir laporan traceback, kemudian periksa nomor baris kode yang ditunjuk.
Perbaiki satu kesalahan dengan teliti, lalu simpan file dan jalankan ulang.

## Latihan

Buat fungsi `hitung_berhasil` dan uji dengan list kosong, satu keberhasilan, serta campuran hasil.
Jelaskan alasan hitungan gagal total belum cukup menentukan adanya serangan.
Kamu masih memerlukan informasi waktu kejadian, sumber alamat, pola, dan konteks akun.

**Kurangi bantuan:**
Salin fungsi pertama dengan nama `hitung_berhasil`, lalu tentukan sendiri bagian kondisi yang perlu berubah.

**Pindah kasus:**
Laundry Aman mempunyai catatan status pesanan `dicuci`, `selesai`, `selesai`, dan `diantar`.
Tulis fungsi penghitung status selesai tanpa membuka solusi, lalu uji dengan list kosong dan list tanpa status selesai.

<details>
<summary>Pembahasan penelusuran dan pindah kasus</summary>

Untuk `hitung_berhasil`, bandingkan tiap elemen dengan string `berhasil`; pola loop dan penghitung tetap sama.
Pada kasus status laundry, dua elemen cocok dengan `selesai`, sehingga hasilnya dua.
List kosong dan list tanpa kecocokan sama-sama menghasilkan nol.

Mengganti judul output saja tidak mengubah aturan hitung; kondisi di dalam fungsi yang menentukan kecocokan.
Jika kamu menulis nama fungsi baru tetapi masih memanggil fungsi lama, perubahan hasil belum menguji fungsi baru tersebut.

</details>

## Bukti kelulusan

- [ ] Saya dapat menerangkan alur fungsi Python tanpa membaca komentar kode.
- [ ] Saya dapat membuat satu pengujian yang sengaja dibuat gagal karena bug, lalu memperbaikinya.
- [ ] Saya menyimpan versi file sebelum dan sesudah melalui Git atau salinan file bernama jelas.
- [ ] Saya memahami alasan mengapa hitungan login gagal saja belum membuktikan adanya serangan.

### Lanjut belajar

Jika konsep loop atau fungsi masih terasa asing, buat variasi data baru dan telusuri nilainya di kertas.
Buka kembali [Bab 01](01-lab.md) jika perlu memastikan cara menjalankan Python di terminal.
Setelah bukti kelulusan siap, lanjutkan ke [Bab 07: Web](07-web.md) untuk mempelajari cara kerja aplikasi web dan pertukaran pesan HTTP.

## Referensi

- [Tutorial resmi Python](https://docs.python.org/3/tutorial/).
- [Git init](https://git-scm.com/docs/git-init) dan [Git diff](https://git-scm.com/docs/git-diff).
- [GNU Bash manual](https://www.gnu.org/software/bash/manual/bash.html).
