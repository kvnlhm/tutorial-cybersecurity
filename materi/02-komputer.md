# Bab 02: Mengenali komputer dan mencari sumber masalah

## Tujuan dan prasyarat

Anda akan membedakan perangkat keras, sistem operasi, proses, file, dan layanan. Gunakan komputer milik Anda dan folder lab dari Bab 01. Latihan ini membaca informasi serta membuat file kecil; Anda tidak perlu mengubah pengaturan sistem.

## Konsep

Di Laundry Aman, kasir menyimpan pesanan lalu mencetak nota. Di balik satu klik, prosesor menjalankan instruksi, memori menyimpan data yang sedang dipakai, dan disk menyimpan file. **CPU** mengerjakan instruksi. **RAM** menyimpan keadaan kerja sementara. **Storage** seperti SSD menyimpan data yang perlu bertahan setelah komputer mati. Kapasitas disk besar tidak menggantikan RAM yang kurang.

**Sistem operasi**, misalnya Windows atau Linux, mengatur sumber daya dan akses perangkat. **Kernel** adalah bagian inti yang mengelola hal seperti memori, proses, dan perangkat. **Aplikasi** berjalan di atasnya. **Proses** adalah program yang sedang berjalan, lengkap dengan identitas dan sumber dayanya. **PID** merupakan nomor identitas proses; nomor ini bisa berbeda setelah program dijalankan ulang.

**Service** atau layanan adalah program latar belakang, misalnya pencetakan atau server web. File program dan proses bukan hal yang sama. Anda dapat memiliki file aplikasi tanpa menjalankannya. Sebaliknya, satu aplikasi dapat membuat banyak proses.

Sistem file mengatur nama, folder, isi, dan metadata. Metadata mencakup ukuran serta waktu perubahan. **Path absolut** menyebut lokasi dari akar, misalnya `C:\lab\nota.txt` atau `/home/pelajar/lab/nota.txt`. **Path relatif** seperti `nota.txt` bergantung pada direktori kerja. **Ekstensi** memberi petunjuk jenis file; mengganti `.exe` menjadi `.txt` tidak mengubah isi program menjadi dokumen aman.

Byte adalah satuan data. Satu byte terdiri dari delapan bit. Kilobyte dan megabyte pada produk dapat memakai kelipatan 1.000; KiB dan MiB memakai kelipatan 1.024. Untuk troubleshooting, catat satuannya. Ukuran unduhan 100 MB berbeda dari kecepatan koneksi 100 megabit per detik.

## Praktik

### 1. Amati proses tanpa menghentikannya

Windows PowerShell:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
```

Di Linux:

```bash
ps -eo pid,comm | head -n 6
```

Perintah Windows mengambil daftar proses lalu memilih lima baris beserta nama dan ID. Tanda `|`, disebut *pipe*, meneruskan hasil ke perintah berikutnya. Perintah Linux menampilkan kolom PID dan nama; enam baris mencakup satu baris judul. Jangan mengharapkan nomor PID atau nama proses yang sama dengan komputer lain.

Buka aplikasi editor lalu jalankan perintah lagi. Daftar lima proses pertama belum tentu memuat editor itu, sehingga Anda boleh memeriksa melalui Task Manager di Windows atau monitor sistem Linux. Tujuan Anda menghubungkan aplikasi yang terlihat dengan proses yang bekerja.

### 2. Buat file dan periksa ukurannya

Dari folder tutorial, jalankan Windows PowerShell:

```powershell
Set-Content hasil-belajar/nota.txt 'Pesanan L001: 3 kilogram'
Get-Item hasil-belajar/nota.txt | Select-Object Name, Length
Copy-Item hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

Linux/macOS:

```bash
printf '%s\n' 'Pesanan L001: 3 kilogram' > hasil-belajar/nota.txt
wc -c hasil-belajar/nota.txt
cp hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

`Length` dan `wc -c` mengukur byte. Besarnya dapat berbeda antarperintah penulisan karena encoding dan akhir baris. Windows PowerShell versi lama juga punya pilihan encoding bawaan yang berbeda. Anda tidak perlu memaksa angkanya sama; catat bagaimana Anda membuat file tersebut.

### 3. Latih troubleshooting bertahap

Ketik perintah pembacaan dengan nama file yang salah. Pada PowerShell gunakan `Get-Content hasil-belajar/nota-tidak-ada.txt`; pada Bash gunakan `cat hasil-belajar/nota-tidak-ada.txt`. File itu memang belum dibuat, sehingga kegagalan pada langkah ini merupakan hasil yang diharapkan. Baca pesan error. Lalu periksa lokasi, daftar file, dan ejaannya. Ganti hanya nama `nota-tidak-ada.txt` menjadi `nota.txt`, kemudian jalankan lagi. Berhasil membaca nota sesudah perubahan tersebut memberi bukti bahwa penyebab latihan ini adalah nama file, bukan kebutuhan izin administrator.

Gunakan urutan ini untuk masalah yang lebih besar:

1. Tulis perilaku yang diharapkan dan yang terlihat.
2. Catat kapan mulai terjadi dan perubahan terakhir.
3. Buat satu dugaan yang dapat diuji.
4. Uji dengan perubahan paling kecil.
5. Simpan hasil, termasuk dugaan yang ternyata salah.

Untuk kasus “website kasir tidak terbuka”, pisahkan pertanyaan: apakah proses server berjalan, apakah port terbuka, apakah nama domain terjawab, dan apakah aplikasinya mengembalikan error? Mengganti banyak pengaturan sekaligus menghapus petunjuk penyebabnya.

## Hasil yang diharapkan

Anda melihat proses aktif, membuat dua file nota, dan memulihkan error nama file. Catatan Anda memuat satu hipotesis serta bukti bahwa hipotesis itu benar atau salah. Tidak ada layanan sistem yang dihentikan.

## Jika macet

Daftar proses yang panjang bukan tanda komputer disusupi. Sistem modern menjalankan banyak layanan. Angka RAM terpakai juga perlu konteks karena sistem dapat memakai memori kosong untuk cache. Jika pembacaan file gagal, periksa path dahulu sebelum mengubah izin.

## Latihan

Tuliskan perbedaan “file hilang”, “file ada tetapi akses ditolak”, dan “file terbuka tetapi isinya salah”. Untuk masing-masing, tentukan satu pemeriksaan awal. Tambahkan langkah pemulihan nota dari salinan ke nama baru dan baca hasilnya.

## Bukti kelulusan

Anda dapat menjelaskan CPU, RAM, storage, proses, dan service memakai contoh aktivitas kasir. Sertakan jurnal error nama file dan pemulihannya. Ini menjadi kebiasaan untuk bab keamanan: reproduksi, kumpulkan bukti, lalu perbaiki.

## Referensi

- [Microsoft: Get-Process](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process).
- [Ubuntu: pengantar command line](https://ubuntu.com/tutorials/command-line-for-beginners).
