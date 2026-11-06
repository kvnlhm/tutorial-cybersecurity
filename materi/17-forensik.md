# Bab 17: Menjaga bukti dan menyusun kronologi

## Tujuan dan prasyarat

Anda sudah mengenal hash, file, log, dan respons insiden. **Forensik digital** menggunakan metode yang dapat dijelaskan untuk memperoleh, memeriksa, dan menafsirkan bukti digital. Bab ini mengajarkan disiplin awal dengan file sintetis. Sediakan 3–5 sesi. Pemeriksaan disk atau perangkat nyata memerlukan kewenangan dan keahlian tambahan.

## Konsep

File log dapat berubah saat dibuka, dipindah, atau diproses oleh alat. Metadata juga dapat berubah tanpa perubahan isi. Karena itu analis membedakan sumber asli, salinan bukti, dan salinan kerja. Ia mencatat bagaimana memperoleh data, alat yang dipakai, waktu, serta langkah yang dilakukan. Hash membantu mendeteksi perubahan isi, tetapi tidak membuktikan bahwa isi tersebut benar sejak awal.

**Chain of custody** adalah catatan siapa menguasai bukti, kapan, untuk tujuan apa, dan bagaimana perpindahannya. Untuk latihan pribadi, tabel sederhana cukup. Pada pekerjaan nyata, organisasi memiliki prosedur penyimpanan dan akses yang lebih ketat. File dengan hash yang sama masih memerlukan konteks pengambilan dan asal yang dapat dipertanggungjawabkan.

**Volatile data** mudah hilang ketika keadaan perangkat berubah, contohnya memori dan koneksi yang sedang aktif. Disk lebih persisten, tetapi aktivitas OS tetap dapat menulis ke dalamnya. Akuisisi memori, pembuatan image disk, dan penggunaan write blocker memerlukan alat serta latihan khusus. Jangan menganggap menyalin folder sama dengan memperoleh seluruh bukti disk, termasuk data yang sudah dihapus.

**Timeline** mengurutkan kejadian dari beberapa sumber. Anda perlu memperhatikan zona waktu, ketepatan jam, jenis timestamp, dan kemungkinan log terlambat dikirim. Waktu pembuatan file, waktu perubahan isi, dan waktu server menerima event dapat berbeda. Dua kejadian berurutan belum membuktikan bahwa yang pertama menyebabkan yang kedua.

NIST SP 800-86 membahas pengumpulan, pemeriksaan, analisis, dan pelaporan forensik untuk respons insiden. Dokumen ini berasal dari 2006: gunakan untuk prinsip proses, lalu ikuti dokumentasi alat yang masih terawat untuk format OS modern. [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final).

## Praktik

**1. Buat berkas kasus.** Salin tabel berikut ke catatan:

| Field | Nilai latihan |
|---|---|
| ID kasus | LA-LAB-017 |
| Pertanyaan | Urutan aktivitas login apa yang tercatat? |
| Sumber | Fixture sintetis `labs/data/auth.jsonl` |
| Pengambil | Nama atau alias Anda untuk latihan |
| Waktu pengambilan | Isi waktu aktual beserta zona waktu |
| Cakupan | Satu file; bukan image perangkat |

**2. Buat salinan dan bandingkan hash.** Dari folder tutorial pada PowerShell:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/forensik-demo
Copy-Item -LiteralPath labs/data/auth.jsonl -Destination hasil-belajar/forensik-demo/auth.bukti.jsonl
Copy-Item -LiteralPath hasil-belajar/forensik-demo/auth.bukti.jsonl -Destination hasil-belajar/forensik-demo/auth.kerja.jsonl
Get-FileHash -LiteralPath labs/data/auth.jsonl,hasil-belajar/forensik-demo/auth.bukti.jsonl,hasil-belajar/forensik-demo/auth.kerja.jsonl -Algorithm SHA256
```

Ketiga hash seharusnya sama. Simpan nilai hash beserta nama file dalam catatan kasus. Jangan mengedit fixture asli atau salinan bukti. Gunakan salinan kerja untuk analisis. Jika mengulang percobaan, pakai folder kasus baru agar bukti percobaan sebelumnya tidak tertimpa.

Di Linux/macOS, buat dua salinan melalui pengelola file. Untuk membandingkan isinya dengan Python dari folder tutorial, jalankan:

```bash
python3 -c "from pathlib import Path; import hashlib; print(hashlib.sha256(Path('labs/data/auth.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.bukti.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.kerja.jsonl').read_bytes()).hexdigest())"
```

Baris tersebut membaca byte file dan menghitung SHA-256, tanpa mengubah isinya. Tiga nilai keluaran perlu sama.

**3. Analisis salinan kerja.** Jalankan `py labs/log_triage.py hasil-belajar/forensik-demo/auth.kerja.jsonl` pada Windows atau ganti `py` dengan `python3` pada Linux/macOS. Bandingkan hasil dengan Bab 15. Kemudian buka salinan kerja di editor dan susun tabel berisi waktu UTC, pengguna, sumber, kejadian, serta nomor baris asal.

**4. Pisahkan pengamatan dan kesimpulan.** Pengamatan: pada 08.02.00–08.02.20 UTC, satu sumber tercatat gagal pada tiga akun. Dugaan: terjadi percobaan terhadap beberapa akun. Batas: dataset kecil, tidak memuat password, informasi perangkat, atau aktivitas sebelum rentang tersebut. Anda boleh menilai kejadian mencurigakan sambil menjelaskan batas itu.

**5. Periksa integritas setelah analisis.** Hitung hash salinan bukti lagi dan cocokkan dengan nilai awal. Tambahkan catatan chain of custody: waktu, pelaksana, tindakan “membuat salinan kerja”, dan lokasi file. Jika menemukan perbedaan hash, hentikan klaim bahwa salinan masih identik dan selidiki perubahan yang terjadi.

## Hasil yang diharapkan

Anda memperoleh dua salinan identik, tabel kronologi yang merujuk nomor baris, dan catatan asal bukti. Hasil peringkas sama dengan fixture awal. Laporan menyatakan bahwa ini latihan analisis satu log sintetis; Anda belum melakukan akuisisi disk atau memori.

## Jika macet

Jika hash berbeda, periksa apakah editor mengubah akhir baris atau encoding. Salin ulang dari sumber latihan yang belum berubah ke folder kasus baru, lalu catat percobaan yang gagal. Jika waktu terlihat berbeda saat dibuka alat lain, periksa pengaturan zona waktu. Jangan mengubah timestamp sumber agar cocok dengan cerita yang Anda harapkan.

## Latihan

Tambahkan bukti tabletop dari Bab 16 ke timeline, tetapi beri sumber berbeda dari log autentikasi. Tulis dua pertanyaan yang belum dapat dijawab, misalnya apakah ekspor berhasil dikirim atau siapa yang memakai akun bersama. Rancang jenis bukti tambahan dan cara memperolehnya melalui pengelola berwenang.

## Bukti kelulusan

Kumpulkan catatan kasus, hash sebelum dan sesudah, chain of custody, timeline, serta kesimpulan dengan batasan. Pembaca lain harus dapat mengikuti asal setiap klaim. Pendalaman berikutnya dapat memakai image latihan publik dan alat forensik, setelah Anda memahami akuisisi, privasi, dan prosedur alatnya.

## Referensi

- [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final): proses forensik dalam respons insiden.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): hash file dengan PowerShell.
- [Python hashlib](https://docs.python.org/3/library/hashlib.html): fungsi hash pada contoh lintas OS.
