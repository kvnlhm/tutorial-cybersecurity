# Bab 17: Menjaga bukti dan menyusun kronologi

Tahap 4 dari 6: Membaca bukti dan menangani kejadian

## Tujuan dan prasyarat

Kamu akan membuat salinan log Laundry Aman, memeriksa kesamaan isinya, lalu menyusun urutan kejadian yang bisa ditelusuri.
Sisihkan 3–5 sesi. Bekalmu adalah [file dari Bab 02](02-komputer.md), [hash dari Bab 08](08-kriptografi.md), serta [log dari Bab 15](15-deteksi.md).
Siapkan juga [catatan simulasi Bab 16](16-respons-insiden.md).

Gunakan komputer dengan PowerShell atau Python untuk menyalin dan menghitung hash file sintetis.
Dari HP, kamu bisa membaca kronologi, tetapi pemeriksaan file tetap memerlukan komputer.
Pemeriksaan disk atau perangkat nyata memerlukan kewenangan serta keahlian tambahan. Latihan ini hanya memeriksa satu file buatan.

## Konsep

Pengelola Laundry Aman ingin mengetahui urutan login yang tercatat.
Kita perlu menyimpan asal catatan sebelum memeriksanya.
Kita akan memisahkan file sumber dari file untuk analisis, lalu membandingkan isinya.
Setelah itu, kita menyusun kejadian menurut waktu dan menuliskan batas kesimpulannya.
Orang lain harus bisa mengikuti asal setiap klaim.

### Memisahkan sumber, salinan bukti, dan salinan kerja

Pengelola Laundry Aman menyerahkan log untuk diperiksa.
**Forensik digital** memakai metode yang dapat dijelaskan untuk memperoleh, memeriksa, dan menafsirkan bukti digital.
Bayangkan memeriksa nota toko: simpan asalnya, catat cara memperoleh salinannya, lalu jelaskan dasar setiap kesimpulan.

**Sumber asli** adalah data tempat kita mengambil bukti, seperti nota yang pertama diterima.
Dalam latihan, sumbernya adalah file log sintetis yang sudah disediakan.

**Salinan bukti** adalah salinan yang kita pertahankan sebagai acuan, seperti fotokopi nota yang disimpan tanpa coretan.
Catat cara memperoleh data, alat yang dipakai, waktu, serta langkah penanganannya.

Pada nota latihan, tandai sumber dan salinan yang akan disimpan. Di mana kamu akan menulis hasil pemeriksaan tanpa mengubah keduanya?

**Salinan kerja** adalah salinan untuk analisis, seperti fotokopi lain untuk diberi catatan.
File dapat berubah saat dibuka, dipindah, atau diproses oleh alat. Karena itu, gunakan salinan kerja untuk analisis.

Hash dari Bab 08 membantu memeriksa perubahan isi, seperti pembanding untuk memastikan isi salinan tetap sama.
Hash tidak membuktikan isi benar sejak awal. Kita tetap memerlukan asal data dan konteks pengambilannya.

#### Cukup kenali dulu

- **Metadata**: keterangan tentang file, seperti waktu pembuatan; keterangan ini dapat berubah tanpa perubahan isi file.

### Mencatat siapa menangani bukti

Petugas Laundry Aman menyerahkan salinan kepada analis lain. Keduanya perlu mencatat perpindahan tersebut.
**Chain of custody** adalah catatan siapa menguasai bukti, kapan, untuk tujuan apa, dan bagaimana perpindahannya.
Bayangkan lembar serah terima pakaian: setiap penerima dan perpindahan dicatat agar asal penanganannya bisa ditelusuri.

Untuk latihan pribadi, tabel sederhana cukup. Pada pekerjaan nyata, organisasi memakai prosedur penyimpanan dan akses yang lebih ketat.
File dengan hash sama tetap membutuhkan konteks pengambilan serta asal yang dapat dipertanggungjawabkan.

### Memilih bukti sebelum keadaan berubah

Pengelola Laundry Aman mempertimbangkan mematikan perangkat yang dicurigai.
**Volatile data** adalah data yang mudah hilang saat keadaan perangkat berubah, seperti memori dan koneksi aktif.
Bayangkan catatan sementara pada papan yang bisa terhapus ketika pekerjaan berakhir. Salinan file saja tidak merekam seluruh keadaan perangkat.

Disk menyimpan data lebih lama, tetapi aktivitas sistem operasi tetap dapat menulis ke dalamnya.
Jangan menganggap penyalinan folder memperoleh seluruh bukti disk, termasuk data yang sudah dihapus.
**Akuisisi** berarti proses memperoleh bukti, termasuk pengambilan data memori dengan alat khusus.
Pengambilan bukti memori dan disk memerlukan alat serta latihan khusus.

**Image disk** adalah salinan representasi disk untuk pemeriksaan, yang cakupannya berbeda dari sekadar menyalin folder.
Pembuatan image memerlukan alat dan latihan khusus.

<details>
<summary>Pendalaman opsional: mencegah penulisan ke media bukti</summary>

Saat toko memerlukan pemeriksaan perangkat, analis perlu mencegah perubahan pada media sumber.
**Write blocker** adalah alat untuk mencegah penulisan ke media bukti saat pengambilan data.
Penggunaannya juga memerlukan alat serta latihan khusus.

</details>

### Mengurutkan kejadian tanpa menebak penyebab

Analis Laundry Aman menyatukan log login dan catatan simulasi dari Bab 16.
Timeline mengurutkan kejadian dari beberapa sumber, seperti menyusun kembali jadwal kegiatan toko dari buku yang berbeda.

**Timestamp** berarti penanda waktu pada data. Periksa zona waktu, ketepatan jam, jenis penanda waktu, dan kemungkinan log terlambat dikirim.
Waktu pembuatan file, perubahan isi, dan penerimaan event oleh server dapat berbeda.
Dua kejadian berurutan belum membuktikan bahwa kejadian pertama menyebabkan kejadian kedua.

NIST SP 800-86 membahas pengumpulan, pemeriksaan, analisis, dan pelaporan forensik untuk respons insiden.
Dokumen ini berasal dari 2006. Gunakan prinsip prosesnya bersama dokumentasi alat yang masih terawat untuk format sistem operasi modern.
[NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final) menjadi rujukan proses bab ini.

### Ringkasan

- Pisahkan sumber asli, salinan bukti, dan salinan kerja.
- Catat asal serta penanganan bukti; hash membantu memeriksa perubahan isi.
- Salinan satu file tidak mencakup seluruh bukti disk atau memori.
- Kronologi perlu konteks waktu; urutan kejadian belum membuktikan hubungan sebab-akibat.

### Cek pemahaman

1. Mengapa analisis memakai salinan kerja?
2. Apa yang belum dibuktikan oleh dua file dengan hash sama?
3. Mengapa waktu file dan waktu penerimaan event perlu dibedakan?

## Praktik

### 1. Buat berkas kasus

Di editor atau kertas, salin tabel berikut ke catatan kasus.
**Fixture** berarti data latihan tetap untuk membandingkan hasil. Pada bab ini, fixture menjadi sumber file yang disalin.

| Field | Nilai latihan |
|---|---|
| ID kasus | LA-LAB-017 |
| Pertanyaan | Urutan aktivitas login apa yang tercatat? |
| Sumber | Fixture sintetis `labs/data/auth.jsonl` |
| Pengambil | Nama atau alias kamu untuk latihan |
| Waktu pengambilan | Isi waktu aktual beserta zona waktu |
| Cakupan | Satu file; bukan image perangkat |

### 2. Buat salinan dan bandingkan hash

Pilih jalur sesuai perangkatmu. Mulai dari folder utama tutorial, yaitu folder yang memuat `README.md` dan `labs`.
Pastikan folder tujuan belum berisi bukti percobaan sebelumnya.
Jika mengulang percobaan, pakai folder kasus baru agar bukti lama tidak tertimpa; sesuaikan lokasi file pada perintah.

**Windows PowerShell**

Jalankan perintah berikut untuk membuat folder, dua salinan, dan menghitung hash:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/forensik-demo
Copy-Item -LiteralPath labs/data/auth.jsonl -Destination hasil-belajar/forensik-demo/auth.bukti.jsonl
Copy-Item -LiteralPath hasil-belajar/forensik-demo/auth.bukti.jsonl -Destination hasil-belajar/forensik-demo/auth.kerja.jsonl
Get-FileHash -LiteralPath labs/data/auth.jsonl,hasil-belajar/forensik-demo/auth.bukti.jsonl,hasil-belajar/forensik-demo/auth.kerja.jsonl -Algorithm SHA256
```

Ketiga hash seharusnya sama. Simpan nilai beserta nama file dalam catatan kasus.

**Linux/macOS**

Buat folder `hasil-belajar/forensik-demo` melalui pengelola file.
Salin sumber menjadi `auth.bukti.jsonl`, lalu salin file itu menjadi `auth.kerja.jsonl` di folder tersebut.
Dari terminal pada folder utama tutorial, jalankan perintah pembanding berikut:

```bash
python3 -c "from pathlib import Path; import hashlib; print(hashlib.sha256(Path('labs/data/auth.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.bukti.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.kerja.jsonl').read_bytes()).hexdigest())"
```

Perintah membaca byte file dan menghitung SHA-256 tanpa mengubah isinya. Tiga nilai hasil perlu sama.
Simpan nilai beserta nama file dalam catatan kasus.

Untuk kedua jalur, jangan mengedit fixture asli atau salinan bukti. Gunakan salinan kerja untuk analisis.

### 3. Analisis salinan kerja

Buka terminal pada folder utama tutorial. Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

Jalankan `py labs/log_triage.py hasil-belajar/forensik-demo/auth.kerja.jsonl`.

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Bandingkan hasil dengan Bab 15: tujuh kejadian, empat login gagal, dan tiga berhasil.
Buka salinan kerja di editor. Susun tabel waktu UTC, pengguna, sumber, kejadian, serta nomor baris asal.

### 4. Pisahkan pengamatan dan kesimpulan

Di catatan kasus, pisahkan tiga hal berikut:

- Pengamatan: pada 08.02.00–08.02.20 UTC, satu sumber tercatat gagal pada tiga akun.
- Dugaan: terjadi percobaan terhadap beberapa akun.
- Batas: kumpulan data kecil, tanpa password, informasi perangkat, atau aktivitas sebelum rentang tersebut.

Kamu boleh menilai kejadian mencurigakan sambil menjelaskan batas itu. Tunjuk baris sumber untuk setiap pengamatan.

### 5. Periksa integritas setelah analisis

Di terminal pada folder utama tutorial, hitung hash salinan bukti lagi.
Pada PowerShell, jalankan hanya baris `Get-FileHash` dari langkah 2; pada Linux/macOS, ulangi perintah Python pembanding.
Cocokkan hasil dengan nilai awal tanpa mengulang perintah penyalinan.

Tambahkan catatan chain of custody: waktu, pelaksana, tindakan “membuat salinan kerja”, dan lokasi file.
Jika hash berbeda, hentikan klaim bahwa salinan masih identik. Selidiki perubahan yang terjadi.

## Hasil yang diharapkan

Kamu mempunyai dua salinan identik, tabel kronologi dengan nomor baris, dan catatan asal bukti.
Hasil peringkas sama dengan fixture awal. Hash salinan bukti sesudah analisis cocok dengan catatan awal.
Laporan menyatakan cakupannya: analisis satu log sintetis, tanpa akuisisi disk atau memori.

## Jika macet

Jika hash berbeda, periksa apakah editor mengubah akhir baris atau encoding dari Bab 08.
Salin ulang dari sumber latihan yang belum berubah ke folder kasus baru. Catat percobaan yang gagal.

Jika alat lain menampilkan waktu berbeda, periksa pengaturan zona waktu.
Jangan mengubah timestamp sumber agar cocok dengan cerita yang kamu harapkan.

## Latihan

1. Tambahkan bukti tabletop dari Bab 16 ke timeline. Beri sumber berbeda dari log autentikasi.
2. Tulis dua pertanyaan yang belum terjawab, misalnya apakah ekspor berhasil dikirim atau siapa yang memakai akun bersama.
3. Rancang jenis bukti tambahan dan cara memperolehnya melalui pengelola yang berwenang.

## Bukti kelulusan

- [ ] Saya mengumpulkan catatan kasus, hash sebelum dan sesudah, chain of custody, timeline, serta kesimpulan dengan batasan.
- [ ] Pembaca lain dapat mengikuti asal setiap klaim.
- [ ] Saya dapat membedakan analisis satu file dari akuisisi disk atau memori.

### Lanjut belajar

Kembali ke [Bab 16](16-respons-insiden.md) jika batas bukti tabletop belum jelas. Ulangi penandaan sumber sebelum melanjutkan.
Setelah bukti siap, pilih pendalaman [Bab 18: analisis program](18-malware-reverse.md).
Pendalaman forensik juga dapat memakai image latihan publik dan alat forensik setelah kamu memahami akuisisi, privasi, serta prosedur alatnya.
Bekal bab ini belum berarti kamu sudah menjadi spesialis pemeriksaan perangkat.

## Referensi

- [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final): proses forensik dalam respons insiden.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): hash file dengan PowerShell.
- [Python hashlib](https://docs.python.org/3/library/hashlib.html): fungsi hash pada contoh lintas OS.
