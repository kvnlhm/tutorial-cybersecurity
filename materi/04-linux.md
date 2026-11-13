# Bab 04: Membaca dan mengelola Linux

Tahap 2 dari 6: Memahami cara sistem bekerja

## Tujuan dan prasyarat

Kamu akan menavigasi folder, mencari teks, memahami izin file, dan mengamati proses Linux.
Semua langkah ini membantu menjaga server aplikasi Laundry Aman.

Selesaikan [Bab 01](01-lab.md) untuk menyiapkan Linux dan [Bab 02](02-komputer.md) untuk mengenal proses dan file.
Bekal alamat dan port dari [Bab 03](03-jaringan.md) akan membantu pada pendalaman SSH opsional nanti.

Gunakan terminal Linux atau WSL.
Perintah berikut ditujukan untuk Bash pada Linux; jangan menempelkannya ke PowerShell.
Jika belum punya Linux, baca konsep lalu gunakan lingkungan latihan resmi seperti OverTheWire Bandit untuk berlatih sesuai aturannya.

## Konsep

Server aplikasi Laundry Aman memakai sistem operasi Linux.
Kita perlu memeriksa file pesanan, menjaga data pelanggan, dan memantau layanan.
Sistem file Linux menyusun data dalam satu pohon direktori teratur.
Setiap file dan folder memiliki aturan izin untuk mencegah kebocoran data.
Kita akan menjelajah folder, membedakan hak akses, dan membaca proses yang aktif.

### Menjelajah pohon folder di server

Semua folder di Linux bermula dari satu pangkal utama.
Tanda `/` adalah akar sistem file, tempat seluruh folder dan perangkat terhubung.

Folder `/home` biasanya berisi ruang kerja para pengguna, seperti kasir atau administrator.
Folder `/etc` menyimpan banyak konfigurasi sistem dan aplikasi.
Folder `/var/log` menyimpan banyak log rekaman aktivitas server.
Susunannya dapat berbeda antarlingkungan, tetapi fungsi dasarnya serupa.

Linux membedakan huruf besar dan kecil pada sistem file yang lazim dipakai.
Nama `Nota.txt` dan `nota.txt` dapat menjadi dua file yang berbeda dalam satu folder.

Nama file atau folder yang diawali tanda titik biasanya tersembunyi dari daftar biasa.
Contohnya adalah folder konfigurasi `.config`.
Perintah `ls -a` menampilkannya di terminal.
File tersembunyi tetap tunduk pada izin; tanda titik bukan perlindungan kerahasiaan.

#### Cukup kenali dulu

- **Root directory**: direktori pangkal `/` pada sistem file Linux.
- **Home directory**: folder pribadi tempat kerja pengguna biasa.
- **File tersembunyi**: file berawalan titik yang tidak muncul pada perintah biasa.

### Mengatur hak baca, tulis, dan jalan

Data pelanggan Laundry Aman tidak boleh dibaca oleh sembarang orang di server.
Linux membagi hak akses ke dalam tiga pihak.

Pihak pertama adalah **owner**, yaitu pengguna pemilik file atau direktori.
Pihak kedua adalah **group**, yaitu kelompok pengguna yang berbagi hak kerja sama.
Pihak ketiga adalah **others**, yaitu semua pengguna lain di sistem.

Tiap pihak memiliki tiga jenis izin dasar:

- Huruf `r` berarti membaca (*read*), seperti melihat isi catatan pesanan.
- Huruf `w` berarti menulis (*write*), seperti mengubah atau menambah isi data.
- Huruf `x` berarti mengeksekusi (*execute*), seperti menjalankan file program.

Untuk direktori, arti izin memiliki perbedaan penting dari file biasa.
Izin `r` pada direktori membantu melihat daftar nama file di dalamnya.
Izin `w` membantu mengubah entri, seperti membuat, mengganti nama, atau menghapus file.
Izin `x` membantu melewati direktori untuk mengakses isinya.

Menghapus file terutama terkait izin direktori induk, sehingga pemahaman izin file saja belum cukup.
Jika pengguna memiliki izin `w` dan `x` pada folder induk, ia bisa menghapus file di dalamnya meski file itu berstatus hanya-baca.

Sistem juga menuliskan izin dalam bentuk angka **oktal**, yaitu angka berbasis delapan.
Angka `4`, `2`, dan `1` mewakili read, write, dan execute.
Nilai izin dihitung dari penjumlahan angka tersebut untuk tiap pihak.

Perintah `chmod` mengubah izin file atau folder.
Contoh `chmod 600 catatan.txt` memberi owner `4+2`, group `0`, others `0`.
Hasilnya pada tampilan daftar adalah `rw-------`.
Perintah `chmod 644` memberi owner baca/tulis dan pihak lain baca.

Pengaturan yang tepat bergantung fungsi data.
Memberi `777` ke seluruh folder untuk menghilangkan error akan membuka akses yang tidak diperlukan.
Tindakan ceroboh itu membuat semua pengguna di server bisa mengubah atau menghapus data Laundry Aman.

#### Cukup kenali dulu

- **Izin oktal**: penulisan izin Linux memakai angka 0 sampai 7.
- **Izin direktori**: aturan akses folder yang membedakan pembacaan daftar dari akses file.
- **Hak minimal**: prinsip memberikan izin secukupnya sesuai kebutuhan tugas.

### Hak istimewa dan menjalankan perintah

Pengguna **root** mempunyai kewenangan luas di seluruh sistem.
Akun administrator ini dapat membaca atau menghapus file apa pun tanpa halangan.

Perintah `sudo` dapat menjalankan perintah dengan identitas lain sesuai kebijakan keamanan.
Biasanya `sudo` dipakai untuk menjalankan tugas pemeliharaan sistem dengan wewenang root sementara.

Jangan menambahkan `sudo` pada perintah yang belum kamu pahami.
Kesalahan ketik dengan `sudo` dapat merusak konfigurasi penting server.
Untuk folder latihan milik sendiri, operasi dasar di bab ini tidak memerlukannya.

<details>
<summary>Pendalaman opsional: menyambung ke server latihan lewat SSH</summary>

Saat merawat server jarak jauh atau mengerjakan tantangan OverTheWire Bandit, kamu menggunakan SSH.
SSH menghubungkan terminal komputermu ke shell komputer tujuan secara terenkripsi.

Ketik perintah dengan format berikut di terminal Linux atau PowerShell:

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

Ketik `yes` saat terminal menanyakan sidik jari host untuk pertama kali.
Sidik jari host adalah kode pengenal mesin tujuan agar kamu mengenali server yang sama di lain waktu.
Lalu masukkan password yang diberikan, misalnya `bandit0`.
Karakter password sengaja tidak muncul di layar demi keamanan.
Setelah selesai, ketik `exit` untuk kembali ke terminal lokalmu.

</details>

### Ringkasan

- Sistem file Linux berpangkal pada `/` dan membedakan huruf besar serta kecil.
- Izin akses dibagi untuk owner, group, dan others memakai huruf `rwx` atau angka `4`, `2`, `1`.
- Menghapus file ditentukan oleh izin direktori induk, bukan hanya izin file itu sendiri.
- Hindari pemakaian `chmod 777` dan jangan gunakan `sudo` tanpa alasan jelas.

### Cek pemahaman

1. Apa akibat buruk jika kamu memberikan izin `777` pada folder data pelanggan?
2. Mengapa pengguna tetap bisa menghapus file yang berizin hanya-baca jika ia punya izin tulis pada foldernya?
3. Berapa angka oktal untuk izin file yang boleh dibaca dan ditulis oleh pemiliknya saja?

## Praktik

Pilih folder kerja di terminal Linux komputermu atau WSL.
Jalankan langkah demi langkah sambil memeriksa keluaran terminal.

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

Tanda `~` menunjuk home pengguna saat ini.
Perintah `mkdir -p` membuat direktori jika belum ada, `cd` memindahkan direktori kerja, dan `pwd` menunjukkan lokasinya.
Perintah `printf` menulis tiga baris melalui `>` ke file.
Tanda `>` mengalihkan keluaran ke file dan menimpa isi lama.
Tanda `>>` menambahkan isi ke bagian akhir file.
Periksa nama sebelum menulis.

Jalankan satu baris dahulu, baca hasilnya, lalu lanjutkan.
Perintah yang berhasil tidak selalu mencetak pesan: `cd` biasanya mengubah lokasi tanpa menulis “berhasil”.
Gunakan `pwd` untuk memeriksanya.
Untuk membuat salinan sebelum percobaan, jalankan `cp pesanan.txt pesanan-salinan.txt`, lalu `cat pesanan-salinan.txt`.
Nama kedua adalah tujuan; gunakan nama baru bila salinan dengan nama itu sudah ada.

### 2. Cari dan hitung

Ketik perintah berikut untuk menyaring catatan pesanan:

```bash
grep -n 'selesai' pesanan.txt
wc -l pesanan.txt
head -n 2 pesanan.txt
tail -n 1 pesanan.txt
```

Perintah `grep -n` mencari baris yang mengandung teks lalu menampilkan nomor baris.
Perintah `wc -l` menghitung karakter akhir baris, sehingga cocok untuk file latihan yang tiap barisnya diakhiri tanda baris baru (*newline*).
Perintah `head` membaca awal dan `tail` membaca akhir.
Pada file ini, status selesai ada di baris 1 dan 3, jumlah baris 3, serta baris terakhir `L003 selesai`.

Untuk pola yang dapat mengandung karakter bermakna khusus, pertimbangkan `grep -F` agar mencarinya sebagai teks literal.
Perbedaan antara teks biasa dan pola pencarian akan penting saat membaca log.

### 3. Periksa izin lalu ubah file sendiri

Ketik perintah berikut untuk mengunci izin file:

```bash
chmod 600 pesanan.txt
ls -l pesanan.txt
id
```

Awal kolom izin file akan menyerupai `-rw-------`.
Tanda pertama `-` menandakan file biasa.
Perintah `id` menunjukkan identitas serta grup kamu.
Owner masih dapat membaca file.
Percobaan ini tidak membuktikan pembatasan terhadap pengguna lain karena kamu belum menjalankannya sebagai identitas lain; catat batas bukti tersebut.

### 4. Amati proses dan dokumentasi

Jalankan perintah berikut untuk melihat proses pengguna dan membaca manual:

```bash
ps -u "$USER" -o pid,comm
man chmod
```

Perintah pertama meminta proses milik pengguna saat ini.
Bagian `$USER` adalah variabel shell; tanda kutip menjaga nilainya tetap satu argumen.
Perintah `man chmod` membuka manual, dan tombol `q` keluar.
Pada instalasi minimal, paket manual mungkin belum tersedia.
Kamu dapat membaca dokumentasi resmi dari browser.

Layanan pada banyak distribusi dikelola oleh systemd.
Jika lingkungan kamu memakai systemd, `systemctl --type=service --state=running` menampilkan layanan berjalan.
WSL, container, atau lingkungan pendidikan dapat memakai pengaturan berbeda.
Error `not booted with systemd` menjelaskan lingkungan, bukan otomatis masalah keamanan.

## Hasil yang diharapkan

Kamu memiliki file tiga baris dan dapat menjelaskan output pencarian serta izin `600`.
Kamu mengetahui folder kerja dan tidak mengubah file konfigurasi sistem.
Simpan salinan perintah serta hasil yang relevan di jurnal.

## Jika macet

Pesan error terminal memberi petunjuk langsung perbaikan.

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `No such file or directory` | Periksa ejaan nama file dan direktori kerja aktif |
| `Permission denied` | Periksa pemilik file atau izin folder induk dengan `ls -ld .` dan `ls -l pesanan.txt` |
| `man` tidak ditemukan | Buka dokumentasi manual Linux melalui browser internet |
| `not booted with systemd` | Lingkungan WSL atau container tidak menjalankan systemd secara bawaan; abaikan pesan ini |

Gunakan `pwd`, `ls -ld .`, dan `ls -l pesanan.txt` untuk memeriksa sebelum mengubah izin.
Jangan menjalankan perintah rekursif pada `/` atau home hanya untuk memperbaiki satu file.

## Latihan

Tambahkan `L004 diproses` menggunakan `>>`, lalu hitung kembali.
Prediksi hasil sebelum menjalankan.
Jelaskan arti izin `640` dan alasan folder yang dapat dibaca belum tentu dapat dilewati.
Sebagai pendalaman, selesaikan beberapa level awal Bandit dan simpan penjelasan konsep tanpa memublikasikan password tantangan.

<details>
<summary>Pembahasan setelah mencoba: latihan Linux</summary>

Gunakan `printf '%s\n' 'L004 diproses' >> pesanan.txt`.
Jumlah baris menjadi empat jika langkah tambahan hanya dijalankan sekali; menjalankannya lagi menambah baris kelima.
Izin `640` memberi owner baca/tulis, group baca, dan others tanpa izin.
Pada direktori, izin `x` diperlukan untuk melewati direktori sehingga mengetahui nama di dalamnya belum berarti boleh mengakses isi file.
Jika hasil jumlah baris berbeda, baca isi terlebih dahulu sebelum menganggap alatnya salah.

</details>

## Bukti kelulusan

- [ ] Saya dapat membuat, membaca, mencari, dan menyalin file tanpa GUI.
- [ ] Saya dapat menerangkan arti izin `600`, `640`, dan `644`.
- [ ] Saya memahami alasan folder yang bisa dibaca belum tentu bisa dilewati.
- [ ] Saya mengetahui kapan perlu membaca manual dan cara keluar dari `man`.

Kecepatan mengetik tidak menjadi syarat.

### Lanjut belajar

Jika navigasi folder atau izin masih membingungkan, ulangi latihan dengan file baru di folder latihanmu.
Buka kembali [Bab 02](02-komputer.md) untuk menyegarkan pemahaman proses dan penyimpanan.
Setelah siap, lanjutkan ke [Bab 05: Windows](05-windows.md) untuk mempelajari administrasi sistem di Windows.

## Referensi

- [GNU Coreutils: izin file](https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html).
- [Ubuntu: command line untuk pemula](https://ubuntu.com/tutorials/command-line-for-beginners).
- [OverTheWire Bandit](https://overthewire.org/wargames/bandit/).
