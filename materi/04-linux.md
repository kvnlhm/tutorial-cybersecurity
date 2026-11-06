# Bab 04: Membaca dan mengelola Linux

## Tujuan dan prasyarat

Anda akan menavigasi folder, mencari teks, memahami izin file, dan mengamati proses Linux. Gunakan terminal Linux dari Bab 01. Perintah berikut ditujukan untuk Bash pada Linux; jangan menempelkannya ke PowerShell. Jika belum punya Linux, baca konsep lalu gunakan lingkungan latihan resmi seperti OverTheWire Bandit untuk berlatih sesuai aturannya.

## Konsep

Linux banyak digunakan pada server. Anda perlu memahami operasi sehari-hari sebelum menguji keamanannya. `/` adalah akar sistem file. Folder `/home` biasanya berisi ruang pengguna, `/etc` menyimpan banyak konfigurasi, dan `/var/log` menyimpan banyak log. Susunannya dapat berbeda antarlingkungan.

Linux membedakan huruf besar dan kecil pada sistem file yang lazim dipakai: `Nota.txt` dan `nota.txt` dapat menjadi dua file. Nama yang diawali titik seperti `.config` biasanya tersembunyi dari daftar biasa. `ls -a` menampilkannya. File tersembunyi tetap tunduk pada izin; tanda titik bukan perlindungan kerahasiaan.

Izin dasar dibagi menjadi **owner**, **group**, dan **others**. Untuk file, `r` berarti membaca, `w` menulis, dan `x` mengeksekusi. Untuk direktori, `r` membantu melihat daftar nama, `w` mengubah entri, dan `x` melewati direktori untuk mengakses isinya. Menghapus file terutama terkait izin direktori induk, sehingga pemahaman izin file saja belum cukup.

Angka `4`, `2`, dan `1` mewakili read, write, dan execute. `chmod 600 catatan.txt` memberi owner `4+2`, group `0`, others `0`. Hasilnya `rw-------`. `chmod 644` memberi owner baca/tulis dan pihak lain baca. Pengaturan yang tepat bergantung fungsi data; memberi `777` ke seluruh folder untuk menghilangkan error akan membuka akses yang tidak diperlukan.

Pengguna **root** mempunyai kewenangan luas. `sudo` dapat menjalankan perintah dengan identitas lain sesuai kebijakan. Jangan menambahkan `sudo` pada perintah yang belum Anda pahami. Untuk folder latihan milik sendiri, operasi dasar di bab ini tidak memerlukannya.

## Praktik

### 1. Buat file kerja

Jalankan di terminal Linux:

```bash
mkdir -p ~/laundry-lab
cd ~/laundry-lab
pwd
printf '%s\n' 'L001 selesai' 'L002 diproses' 'L003 selesai' > pesanan.txt
ls -l pesanan.txt
cat pesanan.txt
```

`~` menunjuk home pengguna saat ini. `mkdir -p` membuat direktori jika belum ada, `cd` memindahkan direktori kerja, dan `pwd` menunjukkan lokasinya. `printf` menulis tiga baris melalui `>` ke file. Redirection `>` menimpa isi lama, sedangkan `>>` menambahkan isi ke bagian akhir. Periksa nama sebelum menulis.

Jalankan satu baris dahulu, baca hasilnya, lalu lanjutkan. Perintah yang berhasil tidak selalu mencetak pesan: `cd` biasanya mengubah lokasi tanpa menulis “berhasil”. Gunakan `pwd` untuk memeriksanya. Untuk membuat salinan sebelum percobaan, jalankan `cp pesanan.txt pesanan-salinan.txt`, lalu `cat pesanan-salinan.txt`. Nama kedua adalah tujuan; gunakan nama baru bila salinan dengan nama itu sudah ada.

### 2. Cari dan hitung

```bash
grep -n 'selesai' pesanan.txt
wc -l pesanan.txt
head -n 2 pesanan.txt
tail -n 1 pesanan.txt
```

`grep -n` mencari baris yang mengandung teks lalu menampilkan nomor baris. `wc -l` menghitung karakter akhir baris, sehingga cocok untuk file latihan yang tiap barisnya diakhiri newline. `head` membaca awal dan `tail` membaca akhir. Pada file ini, status selesai ada di baris 1 dan 3, jumlah baris 3, serta baris terakhir `L003 selesai`.

Untuk pola yang dapat mengandung karakter bermakna khusus, pertimbangkan `grep -F` agar mencarinya sebagai teks literal. Perbedaan antara teks biasa dan pola pencarian akan penting saat membaca log.

### 3. Periksa izin lalu ubah file sendiri

```bash
chmod 600 pesanan.txt
ls -l pesanan.txt
id
```

Awal kolom izin file akan menyerupai `-rw-------`. Tanda pertama `-` menandakan file biasa. `id` menunjukkan identitas serta grup Anda. Owner masih dapat membaca file. Percobaan ini tidak membuktikan pembatasan terhadap pengguna lain karena Anda belum menjalankannya sebagai identitas lain; catat batas bukti tersebut.

### 4. Amati proses dan dokumentasi

```bash
ps -u "$USER" -o pid,comm
man chmod
```

Perintah pertama meminta proses milik pengguna saat ini. `$USER` adalah variabel shell; tanda kutip menjaga nilainya tetap satu argumen. `man chmod` membuka manual, dan tombol `q` keluar. Pada instalasi minimal, paket manual mungkin belum tersedia. Anda dapat membaca dokumentasi resmi dari browser.

Layanan pada banyak distribusi dikelola oleh systemd. Jika lingkungan Anda memakai systemd, `systemctl --type=service --state=running` menampilkan layanan berjalan. WSL, container, atau lingkungan pendidikan dapat memakai pengaturan berbeda. Error “not booted with systemd” menjelaskan lingkungan, bukan otomatis masalah keamanan.

## Hasil yang diharapkan

Anda memiliki file tiga baris dan dapat menjelaskan output pencarian serta izin `600`. Anda mengetahui folder kerja dan tidak mengubah file konfigurasi sistem. Simpan salinan perintah serta hasil yang relevan di jurnal.

## Jika macet

`No such file or directory` biasanya meminta pemeriksaan nama dan direktori. `Permission denied` pada file latihan bisa berarti owner berbeda atau folder induk membatasi akses. Gunakan `pwd`, `ls -ld .`, dan `ls -l pesanan.txt` untuk memeriksa sebelum mengubah izin. Jangan menjalankan perintah rekursif pada `/` atau home hanya untuk memperbaiki satu file.

## Latihan

Tambahkan `L004 diproses` menggunakan `>>`, lalu hitung kembali. Prediksi hasil sebelum menjalankan. Jelaskan arti izin `640` dan alasan folder yang dapat dibaca belum tentu dapat dilewati. Sebagai pendalaman, selesaikan beberapa level awal Bandit dan simpan penjelasan konsep tanpa memublikasikan password tantangan.

<details>
<summary>Petunjuk dan pembahasan setelah mencoba</summary>

Gunakan `printf '%s\n' 'L004 diproses' >> pesanan.txt`. Jumlah baris menjadi empat jika langkah tambahan hanya dijalankan sekali; menjalankannya lagi menambah baris kelima. Izin `640` memberi owner baca/tulis, group baca, dan others tanpa izin. Pada direktori, izin `x` diperlukan untuk melewati direktori sehingga mengetahui nama di dalamnya belum berarti boleh mengakses isi file. Jika hasil jumlah baris berbeda, baca isi terlebih dahulu sebelum menganggap alatnya salah.

</details>

## Bukti kelulusan

Anda lulus jika dapat membuat, membaca, mencari, dan menyalin file tanpa GUI; menerangkan `600`, `640`, dan `644`; serta mengetahui kapan perlu membaca manual. Kecepatan mengetik tidak menjadi syarat.

## Referensi

- [GNU Coreutils: izin file](https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html).
- [Ubuntu: command line untuk pemula](https://ubuntu.com/tutorials/command-line-for-beginners).
- [OverTheWire Bandit](https://overthewire.org/wargames/bandit/).
