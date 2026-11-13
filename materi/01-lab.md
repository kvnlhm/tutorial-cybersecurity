# Bab 01: Menyiapkan meja praktik yang aman

Tahap 1 dari 6: Mulai memakai alat

## Tujuan dan prasyarat

Kamu akan menyiapkan folder kerja, memastikan Python tersedia, dan memilih tempat latihan yang sesuai perangkatmu.
Selesaikan [Bab 00](00-orientasi.md) agar batas latihanmu jelas.
Jika membuka terminal masih membingungkan, ulangi [pra-bab](pra-00-mulai-dari-nol.md).

Untuk bagian awal, cukup gunakan komputer yang bisa membuka browser, editor teks, dan Python.
Mesin virtual adalah pilihan lanjutan. Kamu tidak perlu membeli perangkat untuk memulai.

## Konsep

Kasir Laundry Aman ingin mencoba membaca dan menyimpan catatan latihan.
Ia perlu tahu tempat mengetik, folder yang dipakai, dan hasil yang harus terlihat.
Kita akan menyiapkan ketiganya sebelum memilih tempat latihan yang lebih rumit.
Setelah itu, kamu akan membuka ulang file untuk memeriksa bahwa catatan tersimpan di tempat yang benar.

### Mengetik perintah di tempat yang tepat

Kasir membuka jendela untuk meminta daftar file.
**Terminal** adalah tempat mengetik perintah dan membaca jawabannya, seperti meja untuk menyerahkan instruksi kerja.

Program yang mengartikan instruksi itu disebut **shell**, seperti petugas yang membaca permintaan di meja tadi.
Shell yang berbeda dapat mempunyai aturan kutip, variabel, dan lokasi file yang berbeda.
Perhatikan label blok sebelum mengetik.

Pada Windows, kasir biasanya memakai PowerShell.
Linux sering memakai Bash, sedangkan macOS umumnya memakai zsh.
Nama-nama ini menunjukkan pilihan shell, bukan perintah yang harus diketik semuanya.

#### Cukup kenali dulu

- **Linux**: sistem operasi yang akan dipakai untuk latihan perintah pada Bab 04.
- **Variabel shell**: nama untuk suatu nilai yang dapat dipakai dalam perintah; aturannya bergantung pada shell.

### Menentukan folder sebelum membaca nota

Kasir mempunyai banyak map. Permintaan “buka nota” perlu menyebut map mana yang sedang dipakai.
**Direktori kerja** adalah folder tempat terminal berada, seperti map yang terbuka di meja.

**Path relatif** menyebut lokasi dari direktori kerja itu.
`catatan.txt` berarti file di folder sekarang; `../catatan.txt` berarti naik satu folder dahulu.
Jika folder kerja salah, program dapat melaporkan file tidak ditemukan walaupun file itu ada di tempat lain.

Pada Praktik, kamu akan membaca lokasi dan isi folder sebelum membuat catatan.
Cara ini membantu memastikan hasil latihan berada di folder yang dimaksud.

### Memilih tempat latihan sesuai kebutuhan

Kasir dapat memulai dari file buatan sendiri, lalu beralih ke latihan yang penyelenggara sediakan.
Untuk mencoba sistem lain, ia dapat memakai **virtual machine**, disingkat VM, yaitu komputer buatan di dalam komputer fisik.
Bayangkan ruang latihan di dalam gedung; ruang itu tetap memakai sumber daya gedung yang sama.

| Tingkat lab | Kebutuhan | Dipakai untuk |
|---|---|---|
| Lokal ringan | Python dan editor | Data sintetis, pemeriksaan perubahan file, pencarian data, dan izin membaca nota |
| Lab melalui browser | Internet dan akun bila diminta | Tantangan pada target yang pengelola sediakan |
| Mesin virtual | Memori kerja (RAM) dan ruang penyimpanan tambahan | Linux, konfigurasi jaringan, dan pengujian sistem |

Sistem utama pada komputer fisik disebut **host**, seperti pengelola gedung tempat latihan berlangsung.

**Guest** adalah sistem di dalam VM, seperti peserta yang bekerja dalam ruang latihan tadi.
Ia tetap dapat mempunyai hubungan dengan host atau jaringan lain, sesuai pengaturan.
Bedakan keduanya agar tidak salah mengubah sistem utama.

Contohnya, kamu ingin mencoba Linux tanpa mengganti sistem utama komputer kasir.
VM menyediakan tempatnya, tetapi kamu tetap perlu memeriksa jalur hubungan datanya.

**Snapshot** merekam keadaan VM agar bisa dikembalikan, seperti foto keadaan ruang latihan sebelum percobaan.
Snapshot pada disk yang sama tetap terancam jika disk rusak. Gunakan cadangan terpisah untuk kebutuhan pencadangan.

#### Cukup kenali dulu

- **Data sintetis**: data buatan untuk percobaan.
- **Hash**: ringkasan data untuk membantu memeriksa perubahan file.
- **SQL**: bahasa untuk meminta atau mengubah data tersusun pada basis data.
- **Otorisasi**: pemeriksaan apakah pengguna boleh melakukan tindakan, seperti membaca nota tertentu.
- **Hypervisor**: perangkat lunak pengelola VM; periksa dokumentasinya sebelum menyalakan target latihan.

### Menggambar sambungan sebelum menyalakan VM

Kasir ingin tahu apakah komputer latihan bisa menghubungi komputer utama, teman latihan, atau tujuan di luar toko.
Gambarkan hubungan yang dibutuhkan sebelum mengaktifkan target.

Mode **NAT** biasanya memberi guest akses keluar melalui host, seperti pintu keluar lewat gedung utama.
Mode ini tidak membuat guest terisolasi dari semua tujuan.

Mode **internal network** menghubungkan guest pada jaringan virtual yang sama, seperti ruang bersama khusus peserta latihan.
Bandingkan mode ini dengan kebutuhanmu, lalu tandai sambungan yang perlu dicegah.

Misalnya, target yang sengaja rentan cukup berkomunikasi dengan mesin latihan lain.
Kamu perlu memeriksa pengaturan jaringan, bukan berasumsi bahwa nama mode sudah menjamin seluruh isolasi.

#### Cukup kenali dulu

- **Host-only**: menghubungkan guest dengan host dan guest lain pada jaringan tersebut.
- **Bridged**: menempatkan guest pada jaringan fisik; hindari mode ini untuk sistem latihan yang sengaja rentan.

### Ringkasan

- Pilih shell yang sesuai label perintah.
- Periksa direktori kerja sebelum membaca atau menulis file.
- Mulai dari lab lokal ringan; VM dan persiapan Linux boleh menyusul sesuai kebutuhan bab.
- Pada VM, bedakan host, guest, snapshot, serta hubungan jaringan yang diizinkan.

### Cek pemahaman

1. Mengapa file yang ada tetap dapat dilaporkan tidak ditemukan?
2. Apa perbedaan host dan guest pada contoh komputer kasir?
3. Mengapa snapshot pada disk yang sama perlu dilengkapi cadangan terpisah?
4. Apakah NAT berarti guest terisolasi dari semua tujuan?

## Praktik

### 1. Buka folder tutorial

Jika mengunduh ZIP, ekstrak dahulu. Buka folder yang berisi `README.md`.
Editor khusus tidak wajib untuk membuka terminal. Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

1. Buka Start, ketik `PowerShell`, lalu buka sebagai pengguna biasa.
2. Ikuti `Set-Location` pada [pra-bab](pra-00-mulai-dari-nol.md) untuk memilih folder tutorial.
3. Jika menu klik kanan menyediakan **Open in Terminal**, kamu boleh memakainya. Pastikan sesi yang terbuka memakai PowerShell.
4. Periksa lokasi dan isi:

```powershell
Get-Location
Get-ChildItem
```

**Linux/macOS**

Buka terminal di folder tutorial, lalu periksa:

```bash
pwd
ls
```

Daftar harus memuat berkas dan folder tutorial, seperti `README.md` dan `labs`.
Jangan mengetik ulang `PS C:\...>` atau `$`; keduanya adalah penanda kesiapan shell.
Buku hanya menampilkan perintah yang perlu diketik.

### 2. Periksa Python

Dari terminal tadi, pilih jalur sesuai perangkatmu.

**Windows PowerShell**

```powershell
py --version
py -c "print('Lab Laundry Aman siap')"
```

**Linux/macOS**

```bash
python3 --version
python3 -c "print('Lab Laundry Aman siap')"
```

Hasil harus menunjukkan Python 3.11 atau lebih baru dan kalimat `Lab Laundry Aman siap`.
Contoh memakai standard library, yaitu modul bawaan. Paket tambahan dari internet tidak diperlukan untuk lab inti.

Jika Python belum tersedia, ambil dari [python.org](https://www.python.org/downloads/) atau pengelola paket resmi distribusi Linux.
Ikuti petunjuk untuk sistemmu, buka terminal baru, lalu ulangi pemeriksaan.

**Windows PowerShell**

Jika `py` tidak tersedia tetapi `python --version` menunjukkan Python 3.11 atau lebih baru, gunakan `python` sebagai pengganti `py`.

**Linux/macOS**

Gunakan `python3`. Periksa program yang benar-benar berjalan; nama file saja tidak menentukan program penjalan kodenya.

### 3. Buat tempat menyimpan hasil

Dari folder tutorial, pilih jalur sesuai perangkatmu. Jalankan baris satu per satu.
Perintah kedua menimpa isi jika nama file sudah ada. Pakai nama baru bila hasil lama perlu dipertahankan.
Jika memakai nama baru, sesuaikan nama pada perintah penulisan dan pembacaan agar keduanya menunjuk file yang sama.

**Windows PowerShell**

```powershell
New-Item -ItemType Directory -Path hasil-belajar -Force
Set-Content -Path hasil-belajar/cek-lab.txt -Value 'Lab Laundry Aman siap'
Get-Content hasil-belajar/cek-lab.txt
```

**Linux/macOS**

```bash
mkdir -p hasil-belajar
printf '%s\n' 'Lab Laundry Aman siap' > hasil-belajar/cek-lab.txt
cat hasil-belajar/cek-lab.txt
```

`New-Item` atau `mkdir` membuat folder. Perintah kedua menulis file, lalu perintah ketiga membacanya.
Cocokkan isi yang terbaca dengan `Lab Laundry Aman siap`.

### 4. Tentukan jalur Linux

Untuk Bab 04, kamu perlu terminal Linux.
Pilih mesin Linux yang dimiliki, VM pribadi, atau lingkungan belajar resmi yang menyediakan shell.
Persiapan ini boleh menyusul setelah tiga langkah pertama selesai.

**Opsi Windows: Ubuntu melalui WSL**

**Windows Subsystem for Linux**, disingkat WSL, membantu menjalankan lingkungan Linux untuk belajar perintah pada Windows.
Folder Windows dapat diakses dari WSL dan perangkatnya dibagi dengan sistem utama.
Jangan memperlakukan WSL sebagai tempat menjalankan malware.

**Ubuntu** adalah salah satu pilihan Linux untuk jalur ini.
Langkah pemasangan berlaku pada Windows 11 atau Windows 10 versi 2004/build 19041 ke atas.
Pemasangan bersifat opsional dan mengubah komponen Windows. Lakukan hanya pada perangkat yang kamu kelola.

1. Simpan pekerjaan. Buka PowerShell sebagai administrator, lalu jalankan `wsl --install`.
2. Restart jika diminta. Buka Ubuntu dari Start dan tunggu penyiapan selesai.
3. Buat nama pengguna Linux dan password baru. Password tidak terlihat saat diketik; itu normal.
4. Di terminal Ubuntu, jalankan `pwd` lalu `whoami`. Pakai terminal ini untuk Bash Bab 04.
5. Di PowerShell, `wsl --list --verbose` menampilkan distribusi terpasang. `exit` menutup sesi shell Linux.

Jika WSL tersedia tetapi Ubuntu belum terpasang, ikuti pilihan distribusi pada [panduan instalasi Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install).
Jika perangkat organisasi membatasi pemasangan, gunakan lab yang disetujui pengelolanya.

**Jika memilih VM**

Gunakan image resmi, yaitu berkas sistem yang penyedia resminya terbitkan, lalu periksa pengaturan berikut:

- Matikan **shared clipboard**, fasilitas salin-tempel antara host dan guest, saat bereksperimen.
- Matikan **shared folder**, folder yang dibagikan antara host dan guest, saat bereksperimen.
- Buat snapshot kondisi awal.
- Cocokkan pengaturan jaringan VM dengan diagram sebelum memasang aplikasi rentan; gambar saja belum membuktikan isolasi.

Buku tidak membutuhkan Docker, akun cloud berbayar, atau kartu kredit.

## Hasil yang diharapkan

Terminal menampilkan versi Python 3.11 atau lebih baru dan kalimat `Lab Laundry Aman siap`.
File `hasil-belajar/cek-lab.txt` ada di folder yang kamu maksud.
Kamu mengetahui shell yang dipakai dan pilihan lingkungan Linux untuk bab selanjutnya.

Pengguna Windows cukup memakai PowerShell dan Python untuk tiga langkah pertama.
Lingkungan Linux diperlukan untuk Bab 04; VM dan WSL adalah pilihan jika Linux belum tersedia.
Kamu tetap boleh mengerjakan latihan file sebelum VM atau WSL siap.
Simulator dapat membantu mengenali perintah virtual sambil lingkungan praktik disiapkan.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `Command not found` atau “not recognized” | Periksa pemasangan program, lalu buka terminal baru |
| `Permission denied` saat menulis | Periksa folder; pindah ke folder proyek milikmu yang boleh ditulis |
| `contoh.py` ternyata `contoh.py.txt` | Aktifkan tampilan ekstensi di pengelola file |
| Komputer lambat saat VM aktif | Tutup VM dan lanjutkan lab Python lokal |

Jangan menyelesaikan semua kesalahan dengan menjalankan terminal sebagai administrator.
Latihan awal tidak memerlukan VM aktif.

## Latihan

Buka terminal baru, masuk kembali ke folder tutorial, lalu baca file tadi tanpa melihat panduan.
Tulis perbedaan host, guest, NAT, dan internal network.
Gambarkan sambungan yang diinginkan dan yang perlu dicegah ketika memakai VM rentan.

## Bukti kelulusan

- [ ] Saya menyimpan versi Python, nama shell, lokasi folder, dan hasil pembacaan file.
- [ ] Saya menjelaskan mengapa direktori kerja memengaruhi perintah.
- [ ] Saya memilih lab yang sesuai kemampuan perangkat.

### Lanjut belajar

Jika batas latihan belum jelas, ulangi [Bab 00](00-orientasi.md).
Untuk latihan membuka terminal, kembali ke [pra-bab](pra-00-mulai-dari-nol.md).
Setelah bukti siap, lanjut ke [Bab 02: komputer dan sumber masalah](02-komputer.md).

## Referensi

- [Python: penggunaan pada Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [VirtualBox: jaringan virtual](https://www.virtualbox.org/manual/ch06.html).
- [Microsoft: memasang WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
