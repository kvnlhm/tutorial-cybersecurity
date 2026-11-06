# Bab 05: Memahami Windows dan PowerShell

## Tujuan dan prasyarat

Anda akan membaca objek PowerShell, mengamati proses dan layanan, serta mengenali event log. Gunakan Windows milik Anda. Pembaca Linux/macOS dapat mengerjakan latihan log sintetis dengan Python pada bab deteksi, lalu kembali ke sini ketika memiliki lingkungan Windows berizin.

## Konsep

PowerShell mempunyai perintah yang disebut **cmdlet**, biasanya memakai pola kata kerja dan kata benda seperti `Get-Process`. Hasilnya sering berupa **objek** dengan properti, bukan sekadar teks. `ProcessName` dan `Id` adalah properti proses. Dengan begitu Anda bisa menyaring berdasarkan nilai tanpa menebak letak kolom.

**Registry** menyimpan banyak konfigurasi Windows dan aplikasi. **Service** menjalankan fungsi latar belakang. **Scheduled task** menjalankan tugas berdasarkan jadwal atau pemicu. Ketiganya memiliki kegunaan sah dan juga dapat menjadi tempat munculnya perubahan yang perlu diperiksa. Sebuah entri yang asing belum cukup untuk menyebutnya berbahaya.

Windows memakai identitas seperti akun lokal dan akun organisasi. **SID**, atau security identifier, adalah identitas internal sebuah akun atau grup. **ACL**, access control list, berisi aturan akses pada objek seperti file. Izin dapat diwariskan dari folder induk. **UAC** memberi pembatas antara aktivitas sehari-hari dan operasi yang membutuhkan elevasi; tetap periksa asal program sebelum menyetujui permintaannya.

**Event log** mencatat kejadian dari sumber tertentu. Satu event punya waktu, provider, ID, level, dan detail. Nomor event perlu dibaca bersama providernya. Tidak semua kejadian tercatat: konfigurasi audit, kapasitas penyimpanan, dan masa retensi memengaruhi bukti yang tersedia.

## Praktik

### 1. Belajar memeriksa properti

Jalankan di PowerShell biasa:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
Get-Service | Select-Object -First 5 Name, Status
Get-Help Get-Process
```

`Select-Object` memilih properti dan membatasi jumlah objek. `Get-Help` meminta bantuan lokal; isi bantuan mungkin ringkas jika berkas bantuan lengkap belum tersedia. Anda dapat membaca halaman Microsoft Learn tanpa mengubah pengaturan komputer.

### 2. Saring data sintetis

Ketik blok berikut di PowerShell. Semua nama dan kejadian merupakan rekaan:

```powershell
$kejadianLab = @(
    [pscustomobject]@{User='kasir-demo'; Result='gagal'},
    [pscustomobject]@{User='kasir-demo'; Result='berhasil'},
    [pscustomobject]@{User='pemilik-demo'; Result='gagal'}
)
$kejadianLab | Where-Object Result -eq 'gagal'
$kejadianLab | Group-Object Result | Select-Object Name, Count
```

`@(...)` membuat kumpulan objek. `[pscustomobject]` memberi properti bernama. `Where-Object` memilih yang memenuhi syarat; `-eq` berarti sama dengan. `Group-Object` mengelompokkan nilai yang sama. Anda akan menemukan dua kejadian gagal dan satu berhasil. Variabel ini hidup di sesi terminal; membuka terminal baru tidak otomatis memulihkannya.

### 3. Baca log sistem dengan batas kecil

```powershell
Get-WinEvent -LogName System -MaxEvents 5 |
    Select-Object TimeCreated, Id, ProviderName, LevelDisplayName
```

Perintah ini membaca lima event terbaru pada log System tanpa mengubahnya. Angka dan sumbernya berbeda antarperangkat. Pilih satu event, lalu baca penjelasan providernya di dokumentasi Microsoft. Jangan memublikasikan pesan lengkap sebelum memeriksa apakah ada nama mesin, akun, atau path pribadi.

Log Security dapat memerlukan hak lebih tinggi dan kebijakan audit tertentu. Anda tidak perlu mengubah audit atau meminta hak administrator untuk menyelesaikan bab ini. Gunakan event sintetis bila perangkat kerja membatasi pembacaan log. Event login gagal seperti 4625 menjadi berguna setelah Anda memahami konteks audit dan jenis logon; ketiadaannya tidak membuktikan bahwa tidak ada percobaan akses.

### 4. Baca izin file latihan

Dari folder tutorial:

```powershell
Get-Acl hasil-belajar/cek-lab.txt | Format-List
```

Cari owner dan entri akses. Hasil ini mengamati aturan yang ada; Anda belum mengubahnya. `Format-List` membantu tampilan manusia, sehingga letakkan perintah pemformatan di akhir alur. Untuk analisis lanjutan, pertahankan objek mentah sampai operasi penyaringan selesai.

## Hasil yang diharapkan

Anda bisa memilih properti, menyaring dua kejadian gagal, dan membaca metadata event atau memakai pengganti sintetis. Anda dapat menjelaskan bahwa izin file berbeda dari status program sedang berjalan.

## Jika macet

`Get-WinEvent` bergantung pada Windows; PowerShell di Linux tidak menyediakan akses ke log Windows lokal. `Access is denied` meminta pemeriksaan hak dan kebijakan perangkat, bukan penonaktifan perlindungan. Jika PowerShell menolak skrip, contoh interaktif bab ini dapat diketik langsung; Anda tidak perlu mengubah execution policy global.

## Latihan

Tambahkan dua objek: satu kegagalan milik `kasir-demo` dan satu keberhasilan milik `pemilik-demo`. Prediksi jumlah per hasil, lalu periksa. Jelaskan mengapa tiga login gagal belum cukup untuk menyimpulkan akun sudah diambil alih. Sebutkan bukti tambahan yang ingin Anda lihat.

<details>
<summary>Petunjuk penambahan dan pembahasan</summary>

Edit blok pembentukan `$kejadianLab`, tambahkan dua objek sebelum penutup `)`, dan beri koma pemisah antarobjek. Jalankan kembali blok tersebut agar variabel memuat data baru, lalu ulangi dua perintah penyaringan. Hasil akhir seharusnya tiga gagal dan dua berhasil. Mengedit teks di editor tanpa menjalankan ulang pembentukan variabel tidak mengubah isi variabel pada sesi PowerShell yang sudah berjalan. Jumlah gagal tidak menunjukkan apakah password akhirnya ditebak; Anda perlu konteks waktu, asal, hasil login berikutnya, dan aktivitas akun.

</details>

## Bukti kelulusan

Simpan query data sintetis dan hasil hitungnya. Anda lulus jika mengerti objek, properti, filter, serta batas informasi dari event log. Untuk event asli, cukup catat ID, provider, dan penjelasan umum tanpa data pribadi.

## Referensi

- [Microsoft: Get-WinEvent](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent).
- [Microsoft: Where-Object](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/where-object).
- [Microsoft: Get-Acl](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-acl).
