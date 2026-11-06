# Bab 01: Menyiapkan meja praktik yang aman

## Tujuan dan prasyarat

Anda akan menyiapkan folder kerja, memastikan Python tersedia, dan memahami pilihan lab. Selesaikan Bab 00 dahulu. Untuk bagian awal, laptop yang mampu menjalankan browser, editor teks, dan Python sudah cukup. Mesin virtual menjadi pilihan lanjutan; Anda tidak perlu membeli perangkat untuk memulai.

## Konsep

**Terminal** adalah tempat mengetik perintah. **Shell** menerjemahkan perintah itu. Windows biasanya memakai PowerShell, Linux sering memakai Bash, sedangkan macOS umumnya memakai zsh. Perintahnya kadang mirip tetapi aturan kutip, variabel, dan path dapat berbeda. Perhatikan label pada blok kode.

**Direktori kerja** adalah folder tempat terminal sedang berada. Perintah dengan path relatif dihitung dari sana. `catatan.txt` berarti file di folder sekarang; `../catatan.txt` berarti naik satu folder dahulu. Inilah penyebab umum error “file tidak ditemukan”.

Ada tiga tingkat lab:

| Tingkat | Kebutuhan | Dipakai untuk |
|---|---|---|
| Lokal ringan | Python dan editor | Mengolah data sintetis, hash, SQL, otorisasi |
| Lab melalui browser | Internet dan akun bila diminta | Tantangan yang targetnya disediakan pengelola |
| Mesin virtual | RAM dan ruang disk tambahan | Belajar Linux, konfigurasi jaringan, pengujian sistem |

**Virtual machine**, disingkat VM, adalah komputer buatan yang berjalan di dalam komputer fisik. Sistem utama disebut *host*, sistem di VM disebut *guest*. **Snapshot** merekam keadaan VM agar Anda dapat kembali ke kondisi sebelumnya. Snapshot di disk yang sama bukan pengganti cadangan terpisah.

Untuk VM latihan, bedakan mode jaringan. **NAT** biasanya memberi guest akses keluar melalui host; ini tidak membuat guest terisolasi dari semua tujuan. **Host-only** menghubungkan guest dengan host dan guest lain pada jaringan tersebut. **Internal network** menghubungkan guest yang berada di jaringan virtual yang sama. **Bridged** menempatkan guest pada jaringan fisik; hindari mode ini untuk sistem latihan yang sengaja rentan. Periksa dokumentasi hypervisor yang Anda pilih sebelum menyalakan target.

## Praktik

### 1. Buka folder tutorial

Jika mengunduh ZIP dari GitHub, ekstrak dahulu. Buka folder yang berisi `README.md`. Anda tidak wajib memasang editor khusus untuk membuka terminal. Pada Windows, buka Start, ketik `PowerShell`, lalu buka sebagai pengguna biasa. Ikuti langkah `Set-Location` pada [pra-bab](pra-00-mulai-dari-nol.md) untuk memilih folder tutorial. Jika menu klik kanan folder menyediakan **Open in Terminal**, Anda dapat menggunakannya; pastikan sesi yang terbuka memakai PowerShell. Periksa lokasi dan isi:

```powershell
Get-Location
Get-ChildItem
```

Di Linux atau macOS:

```bash
pwd
ls
```

Jangan mengetik tanda seperti `PS C:\...>` atau `$` yang tampil di awal baris terminal; itu penanda kesiapan shell. Buku hanya menampilkan perintah yang perlu diketik.

### 2. Periksa Python

Windows PowerShell:

```powershell
py --version
py -c "print('Lab Laundry Aman siap')"
```

Linux atau macOS:

```bash
python3 --version
python3 -c "print('Lab Laundry Aman siap')"
```

Jika belum tersedia, ambil Python dari [python.org](https://www.python.org/downloads/) atau pengelola paket resmi distribusi Linux. Ikuti petunjuk pemasangan untuk sistem Anda, lalu buka terminal baru dan ulangi pemeriksaan. Gunakan Python 3.11 atau lebih baru. Contoh buku memakai standard library, yaitu modul bawaan. Anda tidak perlu memasang paket dari internet untuk lab inti.

Di Windows, jika `py` tidak tersedia tetapi `python --version` menunjukkan Python 3, gunakan `python` sebagai pengganti `py`. Di Linux/macOS, gunakan `python3`. Jangan menebak interpreter berdasarkan nama file saja.

### 3. Buat tempat menyimpan hasil

Windows PowerShell, dari folder tutorial:

```powershell
New-Item -ItemType Directory -Path hasil-belajar -Force
Set-Content -Path hasil-belajar/cek-lab.txt -Value 'Lab Laundry Aman siap'
Get-Content hasil-belajar/cek-lab.txt
```

Linux/macOS:

```bash
mkdir -p hasil-belajar
printf '%s\n' 'Lab Laundry Aman siap' > hasil-belajar/cek-lab.txt
cat hasil-belajar/cek-lab.txt
```

`New-Item` atau `mkdir` membuat folder. Perintah kedua menulis file dan mengganti isinya jika nama itu sudah ada. Perintah ketiga membaca isi. Gunakan nama baru saat Anda belum yakin apakah sebuah file perlu dipertahankan.

### 4. Tentukan jalur Linux

Untuk Bab 04, Anda perlu terminal Linux. Anda dapat memakai mesin Linux yang sudah dimiliki, VM pribadi, atau lingkungan belajar resmi yang menyediakan shell. Windows Subsystem for Linux membantu belajar perintah Linux, tetapi jangan memperlakukannya sebagai tempat menjalankan malware. Folder Windows dapat diakses dari WSL dan berbagi perangkat dengan sistem utama.

**Opsi Windows: Ubuntu melalui WSL.** Pada Windows 11 atau Windows 10 versi 2004/build 19041 ke atas, pemasangan resmi dapat dilakukan melalui langkah berikut. Pemasangan ini opsional dan mengubah komponen Windows; lakukan hanya di perangkat yang Anda kelola.

1. Simpan pekerjaan, buka PowerShell sebagai administrator, lalu jalankan `wsl --install`.
2. Restart komputer jika diminta. Buka Ubuntu dari menu Start dan tunggu penyiapan selesai.
3. Buat nama pengguna Linux dan password baru. Password tidak terlihat saat diketik; itu perilaku normal.
4. Di terminal Ubuntu, jalankan `pwd` lalu `whoami`. Gunakan terminal ini untuk perintah Bash Bab 04.
5. Di PowerShell, `wsl --list --verbose` menampilkan distribusi yang terpasang. `exit` menutup sesi shell Linux.

Jika WSL sudah ada tetapi Ubuntu belum terpasang, ikuti pilihan distribusi pada [panduan instalasi Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install). Bila perangkat organisasi membatasi pemasangan, gunakan lab yang disetujui pengelolanya.

Jika memilih VM, gunakan image resmi, matikan shared clipboard serta shared folder saat bereksperimen, dan buat snapshot kondisi awal. Uji jaringan pada diagram sebelum memasang aplikasi rentan. Buku tidak membutuhkan Docker, akun cloud berbayar, ataupun kartu kredit.

## Hasil yang diharapkan

Terminal menampilkan versi Python 3 dan kalimat `Lab Laundry Aman siap`. File `hasil-belajar/cek-lab.txt` muncul di folder yang Anda maksud. Anda mengetahui shell yang sedang dipakai dan pilihan lingkungan Linux untuk bab selanjutnya.

Selesaikan satu jalur dahulu. Untuk tiga langkah pertama, pengguna Windows cukup memakai PowerShell dan Python. Persiapan Linux pada langkah 4 menjadi kebutuhan ketika masuk Bab 04; jangan menunda latihan file hanya karena VM atau WSL belum tersedia. Simulator dapat membantu mengenali perintah virtual sambil Anda menyiapkan lingkungan yang sesuai.

## Jika macet

`Command not found` atau “not recognized” berarti shell belum menemukan program. Periksa pemasangan dan buka terminal baru. `Permission denied` saat menulis biasanya berarti Anda berada di folder yang tidak dapat ditulis; pindah ke folder proyek milik Anda. Jangan menyelesaikan semua error dengan menjalankan terminal sebagai administrator.

Ekstensi file tersembunyi dapat membuat `contoh.py` tersimpan sebagai `contoh.py.txt`. Aktifkan tampilan ekstensi di pengelola file. Jika laptop lambat, tutup VM dan lanjutkan lab Python lokal; bagian awal tidak membutuhkan VM aktif.

## Latihan

Buka terminal baru, masuk kembali ke folder tutorial, lalu baca file tadi tanpa melihat panduan. Tulis perbedaan host, guest, NAT, dan internal network dalam catatan. Gambarkan koneksi mana yang Anda inginkan dan mana yang perlu dicegah saat memakai VM rentan.

## Bukti kelulusan

Simpan versi Python, nama shell, lokasi folder, serta hasil pembacaan file. Anda lulus jika dapat menjelaskan mengapa direktori kerja memengaruhi perintah dan memilih lab yang sesuai kemampuan perangkat Anda.

## Referensi

- [Python: penggunaan pada Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [VirtualBox: jaringan virtual](https://www.virtualbox.org/manual/ch06.html).
- [Microsoft: memasang WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
