# Bab 02: Mengenali komputer dan mencari sumber masalah

Tahap 1 dari 6: Mulai memakai alat

## Tujuan dan prasyarat

Kamu akan membedakan perangkat keras, sistem operasi, proses, file, dan layanan.
Gunakan komputer sendiri serta folder latihan dari [Bab 01](01-lab.md).
Latihan hanya membaca informasi dan membuat file kecil. Pengaturan sistem tetap seperti semula.

## Konsep

Kasir Laundry Aman menyimpan pesanan, lalu mencetak nota.
Komputer mengerjakan instruksi, menampung pekerjaan yang sedang dibuka, dan menyimpan hasilnya.
Ketika sesuatu gagal, kasir perlu menentukan bagian mana yang diperiksa dahulu.
Kita akan mengamati pekerjaan yang berjalan, membaca ukuran file, lalu memperbaiki satu kesalahan nama.

### Apa yang bekerja saat kasir menyimpan nota?

Kasir meminta komputer menghitung dan menyimpan pesanan.
**CPU**, atau prosesor, mengerjakan instruksi, seperti petugas yang menjalankan langkah pekerjaan.

Data yang sedang dipakai membutuhkan tempat kerja sementara.
**RAM** menampung keadaan kerja itu, seperti meja tempat petugas membuka catatan hari ini.

Setelah selesai, kasir menyimpan file agar tetap ada setelah komputer mati.
**Storage** menyimpan data tersebut, seperti lemari penyimpanan catatan.
Kapasitas disk yang besar tetap tidak menggantikan kekurangan RAM.

| Bagian | Peran pada contoh kasir |
|---|---|
| CPU | Mengerjakan instruksi penyimpanan |
| RAM | Menampung data kerja sementara |
| Storage | Menyimpan file yang perlu bertahan |

Perbandingan meja dan lemari membantu membedakan peran.
Komputer tetap mengelola data menurut aturan program; catat hasil pengamatan sebelum menilai penyebab masalahnya.

### Aplikasi dibuka, pekerjaan mulai berjalan

Kasir membuka editor untuk menulis nota.
**Sistem operasi**, seperti Windows atau Linux, mengatur sumber daya dan akses perangkat, seperti pengelola tempat kerja.
Aplikasi berjalan di atas sistem operasi itu.

Ketika program berjalan, ia menjadi **proses**, seperti pekerjaan yang sedang dikerjakan petugas.
Proses mempunyai identitas dan sumber daya sendiri.
File aplikasi bisa tersedia tanpa sedang berjalan; satu aplikasi juga bisa membuat banyak proses.

Kasir dapat melihat nomor untuk mengenali pekerjaan yang berjalan.
**PID** adalah nomor identitas proses. Nomornya bisa berubah setelah program dijalankan ulang, seperti nomor antrean pada kunjungan berikutnya.

Misalnya, editor terlihat di layar, tetapi daftar lima proses pertama belum tentu memuatnya.
Kamu perlu memeriksa aplikasi dan proses yang sesuai, bukan menganggap baris pertama sebagai jawabannya.

Pencetakan juga dapat bekerja di latar belakang.
**Service**, atau layanan, adalah program untuk fungsi tersebut, seperti petugas yang siap menerima pekerjaan cetak.

#### Cukup kenali dulu

- **Kernel**: bagian inti sistem operasi yang mengelola memori, proses, dan perangkat.
- **SSD**: salah satu jenis perangkat penyimpanan, atau storage.
- **Server web**: program yang melayani permintaan halaman; juga contoh service.

### Menemukan nota dan membaca ukurannya

Kasir mencari nota lewat nama foldernya.
Sistem file mengatur nama, folder, isi, dan **metadata**, yaitu keterangan seperti ukuran serta waktu perubahan.

Akar adalah titik awal path lengkap: pada contoh Windows `C:\`, sedangkan pada Linux/macOS `/`.

Lokasi lengkap dari akar disebut **path absolut**, seperti alamat lengkap sebuah rumah.
Contohnya `C:\lab\nota.txt` atau `/home/pelajar/lab/nota.txt`.

Lokasi yang bergantung pada folder kerja disebut **path relatif**, seperti petunjuk “di ruangan ini”.
Contohnya `nota.txt`. Kamu sudah memakai cara ini pada Bab 01.

Nama `nota.txt` membantu memilih aplikasi pembuka lewat ekstensi `.txt`.
Ekstensi hanya petunjuk: mengganti `.exe` menjadi `.txt` tetap tidak mengubah isi program menjadi dokumen aman.

**Bit** adalah satuan data yang bernilai 0 atau 1, seperti pilihan dengan dua kemungkinan.

Untuk membandingkan ukuran nota dan salinannya, kita memakai **byte**, satuan data seperti gram saat menimbang cucian.
Satu byte terdiri dari delapan bit. Perhatikan satuan yang dicantumkan, bukan hanya angkanya.

Ukuran unduhan 100 MB berbeda dari kecepatan 100 megabit per detik.
Yang pertama menyebut banyak data; yang kedua menyebut laju pengiriman.

#### Cukup kenali dulu

- **Kilobyte dan megabyte**: pada produk dapat memakai kelipatan 1.000.
- **KiB dan MiB**: memakai kelipatan 1.024; 1 KiB = 1.024 byte, sedangkan 1 MiB = 1.024 KiB.

### Memeriksa satu dugaan setiap kali

Kasir mencoba membuka nota, tetapi nama file yang diketik salah.
**Troubleshooting** berarti mencari sumber masalah secara bertahap, seperti menelusuri nota hilang dari tempat terakhir yang diketahui.
Ubah satu hal, lalu baca hasilnya agar penyebab perbaikan dapat diketahui.

### Ringkasan

- CPU mengerjakan instruksi; RAM menampung keadaan kerja; storage menyimpan file.
- Proses adalah program yang sedang berjalan. File program bisa ada tanpa prosesnya berjalan.
- Lokasi file dan satuan ukuran membantu menjelaskan hasil pengamatan.
- Satu perubahan kecil lebih mudah diperiksa daripada mengganti banyak pengaturan sekaligus.

### Cek pemahaman

1. Mengapa disk yang lebih besar tidak menggantikan RAM yang kurang?
2. Mengapa nomor PID boleh berbeda setelah program dibuka ulang?
3. Jika nota tidak ditemukan, apa yang kamu periksa sebelum mengubah izin?

## Praktik

### 1. Amati proses tanpa menghentikannya

Pilih jalur sesuai perangkatmu. Buka terminal biasa; folder kerja boleh di mana saja.

**Windows PowerShell**

Jalankan:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
```

Perintah mengambil lima proses beserta nama dan ID-nya.
Tanda `|`, disebut **pipe**, meneruskan hasil ke perintah berikutnya, seperti menyerahkan daftar ke petugas pemilih kolom.

**Linux**

Jalankan:

```bash
ps -eo pid,comm | head -n 6
```

Hasil menampilkan kolom PID dan nama. Enam baris mencakup satu judul kolom.
Nomor PID dan nama proses boleh berbeda dari komputer lain.

**macOS**

Buka Activity Monitor melalui pencarian Spotlight. Baca nama proses tanpa menekan tombol penghentian.

Pada semua jalur, buka aplikasi editor, lalu ulangi pengamatan.
Jika editor tidak muncul pada lima proses pertama, periksa melalui Task Manager di Windows atau monitor sistem Linux.
Task Manager dapat dicari melalui menu Start.
Hubungkan aplikasi yang terlihat dengan prosesnya; jangan menghentikan proses atau layanan sistem.

### 2. Buat file dan periksa ukurannya

Dari folder tutorial, pilih jalur sesuai perangkatmu.
Perintah menulis file latihan, membaca ukurannya, lalu membuat salinan.
Periksa `nota.txt` dan `nota-salinan.txt` dahulu; perintah penulisan dan penyalinan bisa menimpa file yang sudah ada.
Pertahankan hasil lama sebelum mengulang jika masih diperlukan.

**Windows PowerShell**

```powershell
Set-Content hasil-belajar/nota.txt 'Pesanan L001: 3 kilogram'
Get-Item hasil-belajar/nota.txt | Select-Object Name, Length
Copy-Item hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

`Length` menunjukkan ukuran dalam byte.

**Linux/macOS**

```bash
printf '%s\n' 'Pesanan L001: 3 kilogram' > hasil-belajar/nota.txt
wc -c hasil-belajar/nota.txt
cp hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

`wc -c` menghitung byte.
Ukuran dapat berbeda karena encoding dan akhir baris dari perintah penulisan.
Windows PowerShell versi lama juga mempunyai encoding bawaan yang berbeda. Catat cara membuat file; angkanya tidak perlu dipaksa sama.

### 3. Latih troubleshooting bertahap

Kita sengaja membaca nama file yang belum dibuat. Pilih jalur sesuai perangkatmu dari folder tutorial.

**Windows PowerShell**

Ketik `Get-Content hasil-belajar/nota-tidak-ada.txt`.

**Linux/macOS dengan Bash**

Ketik `cat hasil-belajar/nota-tidak-ada.txt`.

Baca pesan kesalahan. Hasil gagal memang diharapkan karena file itu belum ada.
Periksa lokasi, daftar file, dan ejaannya.
Ganti hanya `nota-tidak-ada.txt` menjadi `nota.txt`, lalu jalankan lagi.

Nota yang kini terbaca menunjukkan bahwa penyebab kasus latihan adalah nama file.
Kamu tidak perlu meminta izin administrator untuk memperbaiki salah nama tersebut.

Untuk masalah lebih besar, gunakan urutan berikut:

1. Tulis hasil yang diharapkan dan yang terlihat.
2. Catat kapan masalah mulai terjadi dan perubahan terakhir.
3. Buat satu dugaan yang dapat diuji.
4. Uji dengan perubahan paling kecil.
5. Simpan hasil, termasuk dugaan yang salah.

Jika website kasir tidak terbuka, pisahkan pertanyaan: apakah proses server berjalan dan apakah aplikasinya mengembalikan kesalahan?
Periksa juga port terbuka dan jawaban nama domain.
Keduanya akan dijelaskan di [Bab 03](03-jaringan.md); di sini cukup kenali sebagai pemeriksaan jalur menuju aplikasi.

## Hasil yang diharapkan

Kamu melihat proses aktif, membuat dua file nota, dan memperbaiki kesalahan nama file.
Catatan memuat satu hipotesis, yaitu dugaan yang diuji, beserta bukti yang mendukung atau membantahnya.
Latihan selesai tanpa menghentikan layanan sistem.

## Jika macet

Daftar proses yang panjang lazim terjadi karena sistem modern menjalankan banyak layanan.
Jumlahnya saja belum menunjukkan penyusupan.

RAM terpakai perlu konteks: sistem dapat memakai memori kosong untuk **cache**, yaitu data sementara yang membantu akses berikutnya.
Jika membaca file gagal, periksa path dahulu sebelum mengubah izin.

## Latihan

Bedakan tiga keadaan: file hilang, file ada tetapi akses ditolak, serta file terbuka dengan isi yang salah.
Untuk setiap keadaan, tentukan satu pemeriksaan awal.
Pulihkan nota dari salinan ke nama baru, lalu buka hasilnya untuk memeriksa isi.

## Bukti kelulusan

- [ ] Saya menjelaskan CPU, RAM, storage, proses, dan service dengan contoh pekerjaan kasir.
- [ ] Saya menyimpan jurnal kesalahan nama file beserta pemulihannya.
- [ ] Saya dapat mengulang masalah, mengumpulkan bukti, lalu memperbaikinya.

### Lanjut belajar

Jika folder kerja masih membingungkan, ulangi [Bab 01](01-lab.md).
Setelah bukti siap, lanjut ke [Bab 03: perjalanan data di jaringan](03-jaringan.md).

## Referensi

- [Microsoft: Get-Process](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process).
- [Ubuntu: pengantar command line](https://ubuntu.com/tutorials/command-line-for-beginners).
