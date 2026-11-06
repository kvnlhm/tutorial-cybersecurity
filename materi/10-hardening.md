# Bab 10: Memperkuat perangkat dan menguji cadangan

## Tujuan dan prasyarat

Anda sudah mengenal akun, proses, layanan, dan jaringan. Bab ini mengajarkan **hardening**, yaitu mengurangi kesempatan sistem disalahgunakan melalui konfigurasi yang sesuai. Anda akan membuat baseline dan melakukan pemulihan file latihan. Sediakan 2–3 sesi; latihan file tidak memerlukan administrator.

## Konsep

Komputer kasir Laundry Aman mungkin dipakai membuka aplikasi penjualan, email, dan dokumen. Setiap aplikasi, akun, serta layanan menambah bagian yang perlu dirawat. **Attack surface** adalah bagian sistem yang bisa dijangkau atau dipengaruhi penyerang. Anda menguranginya dengan menghapus software yang tidak diperlukan, menutup akses yang tidak dipakai, dan membatasi hak pengguna.

**Baseline** merupakan keadaan awal yang disepakati: aplikasi apa yang boleh berjalan, siapa administrator, kapan pembaruan dipasang, dan bagaimana bukti dikumpulkan. Tanpa baseline, Anda sulit membedakan perubahan sah dengan masalah. Simpan versi baseline dan pemiliknya; “sudah aman” tidak memberi orang lain petunjuk untuk memeriksa ulang.

Patching memperbaiki kelemahan atau bug melalui pembaruan. Jadwal yang baik mencakup pemeriksaan kompatibilitas, pemasangan, verifikasi, dan jalan pemulihan jika aplikasi bisnis berhenti bekerja. Prioritas mengikuti paparan dan dampak. Server yang menerima permintaan internet memerlukan perhatian berbeda dari mesin latihan yang terputus dari jaringan.

Firewall membatasi komunikasi berdasarkan aturan. Antivirus membantu mengenali file atau perilaku berbahaya; EDR, *endpoint detection and response*, memberi visibilitas serta tindakan respons pada perangkat. IDS memberi peringatan terhadap aktivitas mencurigakan; IPS dapat memblokir aktivitas dalam jalur lalu lintas. Hasil alat tersebut memerlukan pemeriksaan manusia. Produk yang terpasang tetapi tidak mengirim log atau tidak diperbarui memberi perlindungan yang berbeda dari asumsi pemiliknya.

Backup menyimpan salinan untuk pemulihan. Snapshot VM berguna untuk kembali ke keadaan latihan, tetapi tidak menggantikan cadangan yang terpisah dari perangkat asal. Jika disk rusak, snapshot yang tersimpan pada disk itu juga terancam. Rencana backup perlu memikirkan salinan terpisah, pembatasan akses, enkripsi, dan pengujian restore. **RPO** menyatakan kehilangan data yang dapat diterima menurut waktu; **RTO** menyatakan target waktu pemulihan layanan. Laundry yang mencadangkan transaksi sekali sehari dapat kehilangan perubahan sejak cadangan terakhir.

## Praktik

**1. Buat inventaris fiktif.** Tulis tiga aset: komputer kasir, laptop pemilik, dan server latihan. Isi pemilik, fungsi, data yang disimpan, akses administrator, sumber pembaruan, dan cara backup. Tandai fakta yang belum Anda ketahui sebagai `UNKNOWN`.

**2. Tetapkan lima pemeriksaan baseline.** Untuk komputer kasir, pilih akun harian tanpa hak administrator, penguncian layar, software yang masih didukung, firewall aktif, dan backup yang pernah dipulihkan. Buat kolom keadaan saat ini, keadaan yang diinginkan, serta bukti. Periksa pengaturan melalui menu OS sendiri; jangan mengubah komputer kantor tanpa persetujuan pemilik.

**3. Simulasikan restore tanpa menghapus apa pun.** Dari folder tutorial, buka PowerShell dan jalankan:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/backup-demo
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: dicuci' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Destination hasil-belajar/backup-demo/pesanan.cadangan.txt
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: data latihan berubah' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt -Destination hasil-belajar/backup-demo/pesanan.pulih.txt
Get-Content -LiteralPath hasil-belajar/backup-demo/pesanan.pulih.txt
Get-FileHash -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt,hasil-belajar/backup-demo/pesanan.pulih.txt -Algorithm SHA256
```

`New-Item` membuat folder, `Set-Content` menulis data latihan, dan `Copy-Item` membuat salinan. Pemulihan memakai nama baru agar file asal tetap tersedia. `Get-FileHash` menghitung sidik jari isi. Jika mengulang latihan, perintah menimpa file demo bernama sama; gunakan folder lain bila ingin mempertahankan percobaan sebelumnya.

Di Linux/macOS, lakukan urutan yang sama melalui pengelola file: buat file teks, duplikat sebagai cadangan, ubah file asal, lalu duplikat cadangan menjadi file pulih. Bandingkan isinya melalui editor. Jalur ini melatih pemulihan tanpa memerlukan perintah shell tambahan.

**4. Ukur hasil.** Catat waktu mulai dan selesai pemulihan. Nyatakan apakah Anda memenuhi target latihan RTO lima menit. Jika pesanan baru masuk setelah backup, tulis data mana yang hilang ketika kembali ke cadangan tersebut.

## Hasil yang diharapkan

File `pesanan.pulih.txt` berisi `LA-001: dicuci`. Hash file cadangan dan file pulih sama. File asal tetap berisi teks perubahan. Anda memahami bahwa latihan satu folder ini menguji proses restore, sementara cadangan sungguhan perlu tempat dan hak akses yang terpisah.

## Jika macet

Jika PowerShell melaporkan jalur tidak ada, jalankan perintah pembuatan folder lebih dahulu. Hash berbeda dapat menunjukkan perubahan isi, encoding, atau akhir baris; jangan mengedit salinan sebelum membandingkan. Jika backup produksi belum pernah diuji, tulis “restore belum diuji”, bukan “backup berhasil”.

## Latihan

Rancang pemulihan saat komputer kasir rusak pukul 16.00 dan backup terakhir pukul 12.00. Pesanan kertas tersedia selama gangguan. Tentukan urutan pemulihan, cara mencocokkan transaksi, dan siapa yang menyetujui layanan dibuka. Tambahkan kemungkinan akun backup ikut dicuri dan perbaiki rancangannya.

## Bukti kelulusan

Kumpulkan inventaris, baseline lima pemeriksaan, hash, catatan waktu restore, dan perkiraan kehilangan data. Anda harus bisa menjelaskan alasan setiap kontrol, dampaknya pada kasir, serta cara membatalkan perubahan jika aplikasi bermasalah.

## Referensi

- [CIS Controls v8](https://www.cisecurity.org/controls/v8): kerangka kontrol pertahanan yang dapat dinilai.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): pemeriksaan integritas file.
