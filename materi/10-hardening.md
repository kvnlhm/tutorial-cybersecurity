# Bab 10: Memperkuat perangkat dan menguji cadangan

Tahap 3 dari 6: Menjaga dan menguji akses

## Tujuan dan prasyarat

Kamu akan membuat baseline perangkat Laundry Aman dan menguji pemulihan file latihan.
Hasilnya berupa inventaris, lima pemeriksaan, hash, dan catatan waktu restore.

Bekalmu adalah [proses dan file dari Bab 02](02-komputer.md) serta [izin dari Bab 04–05](04-linux.md).
Ulangi juga [hash dari Bab 08](08-kriptografi.md) dan [akun dari Bab 09](09-identitas.md).
**Hardening** adalah mengurangi kesempatan sistem disalahgunakan melalui konfigurasi yang sesuai.
Sediakan 2–3 sesi. Latihan file tidak memerlukan administrator.
Jangan mengubah komputer kantor tanpa persetujuan pemilik.

## Konsep

Komputer kasir Laundry Aman mungkin dipakai membuka aplikasi penjualan, email, dan dokumen.
Setiap aplikasi, akun, serta layanan menambah bagian yang perlu dirawat.
Kita akan memetakan bagian yang bisa dijangkau, menyepakati keadaan awal, lalu merawat cadangan.
Setelah itu kamu menguji pemulihan file latihan tanpa menghapus data asli.

### Bagian mana yang bisa dijangkau penyerang?

Setiap aplikasi yang terpasang menambah pintu masuk potensial.
**Attack surface** adalah bagian sistem yang bisa dijangkau atau dipengaruhi penyerang.
Kamu menguranginya dengan menghapus software yang tidak diperlukan, menutup akses yang tidak dipakai, dan membatasi hak pengguna.
Bayangkan toko yang hanya membuka pintu yang dipakai karyawan; pintu lain dikunci.

### Keadaan awal apa yang disepakati bersama?

Tanpa catatan bersama, “sudah aman” sulit diperiksa ulang.
**Baseline** adalah keadaan awal yang disepakati: aplikasi apa yang boleh berjalan, siapa administrator, kapan pembaruan dipasang, dan bagaimana bukti dikumpulkan.
Tanpa baseline, kamu sulit membedakan perubahan sah dengan masalah.
Simpan versi baseline dan pemiliknya.

Patching memperbaiki kelemahan atau bug melalui pembaruan.
Jadwal yang baik mencakup pemeriksaan kompatibilitas, pemasangan, verifikasi, dan jalan pemulihan jika aplikasi bisnis berhenti bekerja.
Prioritas mengikuti paparan dan dampak.
Server yang menerima permintaan internet memerlukan perhatian berbeda dari mesin latihan yang terputus dari jaringan.

### Alat pertahanan apa yang saling melengkapi?

Firewall membatasi komunikasi berdasarkan aturan.
Antivirus membantu mengenali file atau perilaku berbahaya.
Hasil alat tersebut memerlukan pemeriksaan manusia.

#### Cukup kenali dulu

- **EDR**: *endpoint detection and response*; memberi visibilitas serta tindakan respons pada perangkat.
- **IDS**: memberi peringatan terhadap aktivitas mencurigakan.
- **IPS**: dapat memblokir aktivitas dalam jalur lalu lintas.

Produk yang terpasang tetapi tidak mengirim log atau tidak diperbarui memberi perlindungan yang berbeda dari asumsi pemiliknya.

### Bagaimana cadangan membantu saat komputer rusak?

Backup menyimpan salinan untuk pemulihan.
Snapshot VM berguna untuk kembali ke keadaan latihan, tetapi tidak menggantikan cadangan yang terpisah dari perangkat asal.
Jika disk rusak, snapshot yang tersimpan pada disk itu juga terancam.

Rencana backup perlu memikirkan salinan terpisah, pembatasan akses, enkripsi, dan pengujian restore.
**RPO** menyatakan kehilangan data yang dapat diterima menurut waktu.
**RTO** menyatakan target waktu pemulihan layanan.
Laundry yang mencadangkan transaksi sekali sehari dapat kehilangan perubahan sejak cadangan terakhir.
Bayangkan fotokopi buku kas: salinan membantu, tetapi hanya sampai halaman yang sudah difotokopi.

### Ringkasan

- Kurangi permukaan yang bisa dijangkau dengan menghapus yang tidak perlu dan membatasi hak.
- Baseline memberi acuan bersama untuk memeriksa ulang.
- Cadangan baru berguna jika restore pernah diuji dan salinannya terpisah.
- RPO dan RTO membantu membicarakan kehilangan data dan lama pemulihan.

### Cek pemahaman

1. Mengapa snapshot pada disk yang sama belum cukup sebagai cadangan utama?
2. Apa beda RPO dan RTO dalam satu kalimat masing-masing?
3. Mengapa “antivirus terpasang” belum membuktikan perlindungan aktif?

## Praktik

### 1. Buat inventaris fiktif

Tulis tiga aset: komputer kasir, laptop pemilik, dan server latihan.
Isi pemilik, fungsi, data yang disimpan, akses administrator, sumber pembaruan, dan cara backup.
Tandai fakta yang belum kamu ketahui sebagai `UNKNOWN`.

### 2. Tetapkan lima pemeriksaan baseline

Untuk komputer kasir, pilih akun harian tanpa hak administrator, penguncian layar, software yang masih didukung, firewall aktif, dan backup yang pernah dipulihkan.
Buat kolom keadaan saat ini, keadaan yang diinginkan, serta bukti.
Periksa pengaturan melalui menu OS sendiri.
Jangan mengubah komputer kantor tanpa persetujuan pemilik.

### 3. Simulasikan restore tanpa menghapus apa pun

Pilih jalur sesuai perangkatmu.
Dari folder tutorial, buka terminal.

**Windows PowerShell**

Jalankan:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/backup-demo
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: dicuci' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Destination hasil-belajar/backup-demo/pesanan.cadangan.txt
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: data latihan berubah' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt -Destination hasil-belajar/backup-demo/pesanan.pulih.txt
Get-Content -LiteralPath hasil-belajar/backup-demo/pesanan.pulih.txt
Get-FileHash -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt,hasil-belajar/backup-demo/pesanan.pulih.txt -Algorithm SHA256
```

`New-Item` membuat folder, `Set-Content` menulis data latihan, dan `Copy-Item` membuat salinan.
Pemulihan memakai nama baru agar file asal tetap tersedia.
`Get-FileHash` menghitung sidik jari isi.
Jika mengulang latihan, perintah menimpa file demo bernama sama.
Gunakan folder lain bila ingin mempertahankan percobaan sebelumnya.

**Linux/macOS**

Lakukan urutan yang sama melalui pengelola file: buat file teks, duplikat sebagai cadangan, ubah file asal, lalu duplikat cadangan menjadi file pulih.
Bandingkan isinya melalui editor.
Jalur ini melatih pemulihan tanpa memerlukan perintah shell tambahan.

### 4. Ukur hasil

Catat waktu mulai dan selesai pemulihan.
Nyatakan apakah kamu memenuhi target latihan RTO lima menit.
Jika pesanan baru masuk setelah backup, tulis data mana yang hilang ketika kembali ke cadangan tersebut.

## Hasil yang diharapkan

File `pesanan.pulih.txt` berisi `LA-001: dicuci`.
Hash file cadangan dan file pulih sama.
File asal tetap berisi teks perubahan.
Kamu memahami bahwa latihan satu folder ini menguji proses restore, sementara cadangan sungguhan perlu tempat dan hak akses yang terpisah.

## Jika macet

Jika PowerShell melaporkan jalur tidak ada, jalankan perintah pembuatan folder lebih dahulu.
Hash berbeda dapat menunjukkan perubahan isi, encoding, atau akhir baris.
Jangan mengedit salinan sebelum membandingkan.
Jika backup produksi belum pernah diuji, tulis “restore belum diuji”, bukan “backup berhasil”.

## Latihan

Rancang pemulihan saat komputer kasir rusak pukul 16.00 dan backup terakhir pukul 12.00.
Pesanan kertas tersedia selama gangguan.
Tentukan urutan pemulihan, cara mencocokkan transaksi, dan siapa yang menyetujui layanan dibuka.
Tambahkan kemungkinan akun backup ikut dicuri dan perbaiki rancangannya.

<details>
<summary>Pembahasan setelah mencoba: akun cadangan ikut dicuri</summary>

Jika akun backup dicuri, penyerang dapat menghapus atau mengubah salinan.
Pisahkan hak akses cadangan dari akun harian kasir.
Simpan salinan di tempat yang tidak otomatis bisa dihapus dari komputer kasir.
Uji restore tetap dibutuhkan setelah perubahan akses.

</details>

## Bukti kelulusan

- [ ] Saya mengumpulkan inventaris, baseline lima pemeriksaan, hash, catatan waktu restore, dan perkiraan kehilangan data.
- [ ] Saya dapat menjelaskan alasan setiap kontrol dan dampaknya pada kasir.
- [ ] Saya dapat menjelaskan cara membatalkan perubahan jika aplikasi bermasalah.

### Lanjut belajar

Jika hash masih membingungkan, ulangi [Bab 08](08-kriptografi.md).
Setelah bukti siap, lanjut ke [Bab 11: memetakan ancaman](11-threat-modeling.md).

## Referensi

- [CIS Controls v8](https://www.cisecurity.org/controls/v8): kerangka kontrol pertahanan yang dapat dinilai.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): pemeriksaan integritas file.
