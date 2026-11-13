# Bab 05: Memahami Windows dan PowerShell

Tahap 2 dari 6: Memahami cara sistem bekerja

## Tujuan dan prasyarat

Kamu akan membaca objek PowerShell, mengamati proses dan layanan, serta mengenali event log.
Langkah ini membantumu memeriksa kesehatan dan keamanan komputer kasir Laundry Aman.

Selesaikan [Bab 01](01-lab.md) untuk menyiapkan terminal dan [Bab 02](02-komputer.md) untuk memahami proses serta memori.
Bandingkan juga pengelolaan sistem ini dengan Linux pada [Bab 04](04-linux.md).

Gunakan Windows milik kamu untuk menjalankan perintah PowerShell.
Pembaca Linux/macOS dapat mengerjakan latihan log sintetis dengan Python pada bab deteksi, lalu kembali ke sini ketika memiliki lingkungan Windows berizin.

## Konsep

Komputer kasir Laundry Aman menggunakan sistem operasi Windows.
Kita perlu memeriksa program yang aktif, meninjau layanan latar belakang, dan membaca catatan kejadian sistem.
PowerShell membantu kita memeriksa data sistem dalam bentuk informasi terstruktur.
Setiap berkas dan pengaturan Windows memiliki identitas keamanan serta hak akses tersendiri.
Kita akan mempelajari cara menyaring data proses, mengenali komponen sistem, dan membaca log keamanan.

### Memeriksa proses kasir memakai objek PowerShell

PowerShell mempunyai perintah khusus yang disebut **cmdlet**.
Penamaan cmdlet biasanya memakai pola kata kerja dan kata benda, seperti `Get-Process`.

Hasil keluaran cmdlet sering berupa **objek** dengan properti bernama, bukan sekadar baris teks mentah.
Nama properti seperti `ProcessName` dan `Id` menunjukkan atribut milik proses tersebut.
Bayangkan struk pesanan laundry yang memiliki kolom nama pelanggan dan berat cucian.
Dengan struktur objek ini, kamu bisa langsung menyaring data berdasarkan nilai tanpa menebak letak kolom teks.

Perintah `Select-Object` memilih properti dan membatasi jumlah objek.
Perintah `Get-Help` meminta bantuan panduan lokal.

#### Cukup kenali dulu

- **Properti**: atribut bernama di dalam sebuah objek.
- **Pipeline**: penyaluran data antarkomando memakai tanda pipa `|`.
- **Eksekusi interaktif**: menjalankan perintah langsung di terminal.

### Meninjau komponen sistem: pengaturan, layanan, dan tugas

Di komputer kasir, banyak komponen bekerja otomatis tanpa membuka jendela aplikasi.

Komponen **Registry** menyimpan banyak konfigurasi Windows dan aplikasi yang terpasang.
Komponen **Service** menjalankan fungsi latar belakang secara terus-menerus demi kelancaran sistem.
Komponen **Scheduled task** menjalankan tugas secara otomatis berdasarkan jadwal waktu atau pemicu tertentu.

Ketiganya memiliki kegunaan sah untuk operasional komputer sehari-hari.
Namun, ketiganya juga dapat menjadi tempat munculnya perubahan yang perlu diperiksa saat menyelidiki gangguan.
Sebuah entri yang asing belum cukup untuk menyebutnya berbahaya.
Kamu selalu memerlukan pemeriksaan fungsi dan asal file program tersebut.

#### Cukup kenali dulu

- **Registry key**: penampung nilai konfigurasi di registry.
- **Service status**: kondisi aktif layanan sistem.
- **Trigger**: pemicu yang memulai scheduled task.

### Mengenali identitas akun dan aturan hak akses

Saat kasir menyalakan komputer toko, Windows memastikan identitas pengguna yang berhak masuk.
Windows memakai identitas internal seperti akun lokal dan akun organisasi.

Pengenal **SID**, singkatan dari *security identifier*, adalah identitas internal unik untuk sebuah akun atau grup.
Tiap pengguna memiliki kode SID tersendiri di dalam sistem operasi.

Untuk melindungi file nota pelanggan, Windows memakai **ACL**, singkatan dari *access control list*.
ACL berisi daftar aturan akses pada objek seperti file dan folder.
Izin akses pada sebuah file dapat diwariskan dari folder induknya.

Sistem **UAC** (*User Account Control*) memberi pembatas antara aktivitas sehari-hari dan operasi yang membutuhkan elevasi hak.
Ketika program meminta izin khusus administrator, UAC menampilkan jendela konfirmasi.
Tetap periksa asal program sebelum menyetujui permintaannya.

#### Cukup kenali dulu

- **Hak akses file**: izin operasi file pada NTFS.
- **Elevasi hak**: peningkatan wewenang pengguna sementara.
- **Akun lokal**: akun pengguna di komputer lokal.

### Membaca catatan aktivitas dengan event log

Setiap kali komputer kasir menyala, pengguna masuk, atau terjadi gangguan, sistem membuat catatan.
Komponen **Event log** mencatat kejadian dari sumber tertentu yang disebut provider.

Satu event memiliki catatan waktu kejadian, nama provider, nomor ID, tingkat keparahan (*level*), dan rincian pesan.
Nomor event perlu dibaca bersama providernya.
Nomor ID yang sama dapat memiliki arti berbeda pada provider yang berbeda.

Tidak semua kejadian otomatis tercatat di komputer.
Konfigurasi audit, kapasitas penyimpanan, dan masa retensi memengaruhi bukti yang tersedia.
Event login gagal seperti 4625 menjadi berguna setelah kamu memahami konteks audit dan jenis logon.
Ketiadaan catatan tidak langsung membuktikan bahwa tidak ada percobaan akses.

<details>
<summary>Pendalaman opsional: jenis log Windows dan izin akses</summary>

Windows membagi log ke dalam beberapa kategori utama:

- **System**: mencatat kejadian sistem operasi dan perangkat keras.
- **Application**: mencatat kejadian program aplikasi.
- **Security**: mencatat audit keamanan seperti login pengguna.

Log Security dapat memerlukan hak administrator dan kebijakan audit aktif.
Gunakan data sintetis bila perangkat kerjamu membatasi akses log.

</details>

### Ringkasan

- PowerShell menghasilkan objek berproperti bernama, mempermudah penyaringan data dibanding teks biasa.
- Registry, service, dan scheduled task adalah komponen penting yang perlu ditinjau keteraturannya.
- SID menandai identitas akun, ACL mengatur hak akses objek, dan UAC membatasi kenaikan wewenang.
- Event log mencatat aktivitas sistem; periksa nomor ID selalu bersama nama providernya.

### Cek pemahaman

1. Mengapa menyaring data objek PowerShell lebih mudah daripada memotong baris teks mentah?
2. Mengapa entri service yang baru kamu lihat belum tentu berbahaya?
3. Mengapa event ID harus dipadukan dengan nama provider saat membaca log?

## Praktik

Pilih jendela PowerShell biasa di komputermu tanpa perlu hak administrator.
Jalankan langkah-langkah berikut sambil memeriksa keluarannya.

### 1. Belajar memeriksa properti

Jalankan perintah berikut di PowerShell biasa:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
Get-Service | Select-Object -First 5 Name, Status
Get-Help Get-Process
```

Perintah `Select-Object` memilih properti dan membatasi jumlah objek yang ditampilkan di layar.
Perintah `Get-Help` meminta bantuan lokal; isi bantuan mungkin ringkas jika berkas bantuan lengkap belum tersedia.
Kamu dapat membaca halaman Microsoft Learn tanpa mengubah pengaturan komputer.

### 2. Saring data sintetis

Ketik blok perintah berikut di PowerShell.
Semua nama pengguna dan kejadian di sini adalah data rekaan:

```powershell
$kejadianLab = @(
    [pscustomobject]@{User='kasir-demo'; Result='gagal'},
    [pscustomobject]@{User='kasir-demo'; Result='berhasil'},
    [pscustomobject]@{User='pemilik-demo'; Result='gagal'}
)
$kejadianLab | Where-Object Result -eq 'gagal'
$kejadianLab | Group-Object Result | Select-Object Name, Count
```

Tanda `@(...)` membuat kumpulan objek baru.
Bentuk `[pscustomobject]` memberi properti bernama pada tiap baris data.
Perintah `Where-Object` memilih data yang memenuhi syarat tertentu; parameter `-eq` berarti sama dengan (*equal*).
Perintah `Group-Object` mengelompokkan nilai yang sama.

Kamu akan menemukan dua kejadian gagal dan satu berhasil.
Variabel `$kejadianLab` ini hidup di sesi terminal saat ini; membuka terminal baru tidak otomatis memulihkannya.

### 3. Baca log sistem dengan batas kecil

Ketik perintah berikut untuk melihat lima catatan sistem terbaru:

```powershell
Get-WinEvent -LogName System -MaxEvents 5 |
    Select-Object TimeCreated, Id, ProviderName, LevelDisplayName
```

Perintah `Get-WinEvent` membaca lima event terbaru pada log System tanpa mengubahnya.
Angka ID dan providernya berbeda antarperangkat.
Pilih satu event, lalu baca penjelasan providernya di dokumentasi Microsoft.
Jangan memublikasikan pesan lengkap sebelum memeriksa nama mesin, akun, atau path pribadi.

Log Security dapat memerlukan hak lebih tinggi dan kebijakan audit tertentu.
Kamu tidak perlu mengubah audit atau meminta hak administrator untuk menyelesaikan bab ini.
Gunakan event sintetis bila perangkat kerja membatasi pembacaan log.
Event login gagal seperti 4625 menjadi berguna setelah kamu memahami konteks audit dan jenis logon; ketiadaannya tidak membuktikan bahwa tidak ada percobaan akses.

### 4. Baca izin file latihan

Dari folder utama tutorial, jalankan perintah berikut:

```powershell
Get-Acl hasil-belajar/cek-lab.txt | Format-List
```

Perintah `Get-Acl` menampilkan daftar izin pada file `hasil-belajar/cek-lab.txt`.
Cari nama owner dan entri akses di layar terminal.
Hasil ini mengamati aturan yang ada; kamu belum mengubahnya sama sekali.

Perintah `Format-List` membantu tampilan dibaca manusia, sehingga letakkan perintah pemformatan di akhir alur.
Untuk analisis lanjutan, pertahankan objek mentah sampai operasi penyaringan selesai.

## Hasil yang diharapkan

Kamu bisa memilih properti objek, menyaring dua kejadian gagal, dan membaca metadata event atau memakai pengganti sintetis.
Kamu dapat menjelaskan bahwa izin file pada ACL berbeda dari status program yang sedang berjalan di memori.
Simpan ringkasan perintah dan catatan hasil pengamatanmu di jurnal belajar.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `Get-WinEvent` gagal di Linux | Perintah `Get-WinEvent` bergantung pada Windows; gunakan data sintetis pada PowerShell Linux |
| Pesan `Access is denied` | Periksa hak akun dan kebijakan perangkat; jangan menonaktifkan perlindungan sistem |
| PowerShell menolak skrip | Ketik perintah interaktif langsung satu per satu di terminal; jangan ubah execution policy global |

## Latihan

Tambahkan dua objek baru pada data sintetis:
Satu kegagalan milik `kasir-demo` dan satu keberhasilan milik `pemilik-demo`.

Prediksi jumlah per hasil, lalu periksa dengan perintah kelompok.
Jelaskan mengapa tiga login gagal belum cukup untuk menyimpulkan akun sudah diambil alih.
Sebutkan bukti tambahan yang ingin kamu lihat.

<details>
<summary>Pembahasan setelah mencoba: menambah data sintetis</summary>

Edit blok pembentukan `$kejadianLab`, tambahkan dua objek sebelum penutup `)`, dan beri koma pemisah antarobjek.
Jalankan kembali blok tersebut agar variabel memuat data baru, lalu ulangi dua perintah penyaringan.
Hasil akhir seharusnya tiga gagal dan dua berhasil.

Mengedit teks di editor tanpa menjalankan ulang pembentukan variabel tidak mengubah isi variabel pada sesi PowerShell yang sudah berjalan.
Jumlah gagal tidak menunjukkan apakah password akhirnya ditebak; kamu perlu konteks waktu, asal, hasil login berikutnya, dan aktivitas akun.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan query data sintetis dan hasil perhitungannya.
- [ ] Saya memahami objek, properti, dan penyaringan dengan `Where-Object`.
- [ ] Saya dapat menjelaskan batas informasi dari event log dan alasan event ID perlu dibaca bersama providernya.
- [ ] Untuk event asli, saya mencatat ID, provider, dan penjelasan umum tanpa mencantumkan data pribadi.

### Lanjut belajar

Jika konsep objek masih baru bagimu, ulangi langkah pemilihan properti dengan cmdlet lain seperti `Get-Service`.
Buka kembali [Bab 02](02-komputer.md) jika ingin membandingkan proses dengan konsumsi memori.
Setelah selesai, lanjutkan ke [Bab 06: Pemrograman](06-pemrograman.md) untuk belajar menulis kode Python dan mengolah data otomatis.

## Referensi

- [Microsoft: Get-WinEvent](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent).
- [Microsoft: Where-Object](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/where-object).
- [Microsoft: Get-Acl](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-acl).
