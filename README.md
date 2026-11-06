# Tutorial Cybersecurity: dari Awam sampai Mahir

Belajar keamanan siber dalam bahasa Indonesia, dari mengenal terminal sampai
menguji aplikasi, menyelidiki insiden, dan memulai riset keamanan. Pola belajar
mengikuti [tutorial AI Engineer](https://github.com/kvnlhm/tutorial-ai-engineer)
milik pengguna: konsep, praktik, hasil, dan latihan. Peta topik merujuk
[roadmap.sh/cyber-security](https://roadmap.sh/cyber-security).

**Belum paham IT sama sekali? Mulai dari [pra-bab: mulai dari nol](materi/pra-00-mulai-dari-nol.md).**

**[Mainkan simulasi Laundry Aman di HP atau komputer](https://kvnlhm.github.io/tutorial-cybersecurity/).**
Buka tautan itu di browser, tanpa akun atau instalasi. Pada HP, ketuk **Pilih
misi dan mode** untuk membuka daftar latihan. Untuk mengetik, gunakan kotak di
dalam halaman; ketuk **Jalankan perintah** setelah mengisi perintah.

Ingin bermain offline di komputer? [Unduh ZIP](https://github.com/kvnlhm/tutorial-cybersecurity/archive/refs/heads/main.zip),
ekstrak, buka folder `simulator`, lalu klik dua kali `index.html`. Tidak perlu
Python untuk simulasi. [Berkas simulator lokal](simulator/index.html) menampilkan
kode jika dibuka di GitHub; gunakan tautan bermain di atas untuk menjalankannya.
[Panduan bermain](simulator/README.md) menjelaskan langkah dan cara menyimpan hasil.

**Buku lengkap: [Tutorial-Cybersecurity.md](Tutorial-Cybersecurity.md).**

Tutorial berisi pra-bab untuk awam total, 27 bab, delapan misi interaktif dengan
kasus ujian berbeda, empat lab Python offline, latihan per bab, proyek akhir,
kamus istilah, dan template laporan. Semua contoh memakai kasus **Laundry Aman**
dengan data buatan. Jalur utama tidak memerlukan layanan berbayar atau kartu kredit.

## Pilih titik awal

| Kondisimu | Mulai dari |
|---|---|
| Belum mengenal komputer/IT | [Pra-bab](materi/pra-00-mulai-dari-nol.md), lalu [simulasi pertama](https://kvnlhm.github.io/tutorial-cybersecurity/) |
| Sudah bisa membuka file, belum memakai terminal | [Bab 00: orientasi](materi/00-orientasi.md), lalu Bab 01–08 berurutan |
| Sudah paham jaringan dan pemrograman | Buktikan latihan Bab 03–08, lalu masuk Bab 09 |
| Ingin praktik tanpa instal banyak alat | [Panduan empat lab offline](labs/README.md) |
| Ingin menjadi pentester/AppSec | Fondasi, Bab 09–14, 22, lalu jalur Bab 25 |
| Ingin SOC, incident response, atau forensik | Fondasi, Bab 10–11, 14–18, 23–26 |
| Ingin riset tingkat lanjut | Bab 18–22 dan jalur spesialisasi Bab 25 setelah menguasai fondasi |

“Level dewa” di sini berarti kemampuan mandiri yang bisa diperiksa: menjelaskan
akar masalah, membuat reproduksi di lab, memperbaiki, menguji ulang, dan menulis
bukti yang bisa diikuti orang lain. Buku ini menyediakan jalurnya. Penguasaan
profesional membutuhkan latihan berulang, ulasan rekan, dan pengalaman sistem nyata
dengan izin; selesai membaca tidak otomatis membuat seseorang ahli.

Kami tidak menjamin semua orang menguasai 100% bidang cybersecurity. Yang bisa
diperiksa di sini adalah hasil tugas: menjalankan, menjelaskan, mengulang tanpa
petunjuk, dan menerapkan pada kasus baru. Simulator memisahkan progres belajar
dengan progres ujian. Penilaian otomatis memeriksa aturan skenario, bukan seluruh
kemampuan manusia. Materi belum menjalani studi usability dengan peserta awam.

## Sesudah simulasi: jalankan lab Python pertama

Unduh folder repo melalui **Code → Download ZIP** jika membaca di GitHub, lalu
ekstrak. Buka terminal di folder yang memuat README ini. Pasang Python 3.11 atau
lebih baru dari [python.org](https://www.python.org/downloads/) jika belum tersedia.

Windows PowerShell:

```powershell
py --version
py labs/sql_demo.py
```

Linux/macOS:

```bash
python3 --version
python3 labs/sql_demo.py
```

Program memperlihatkan data buatan yang bocor melalui query rentan, kemudian
menunjukkan hasil query berparameter. Tidak ada koneksi jaringan atau database
produksi. Lanjutkan ke [panduan lab](labs/README.md) untuk penjelasan output.

## Pendamping belajar

- [Jadwal dan cara mengukur kemajuan](lampiran/jadwal-belajar.md)
- [Panduan pendamping dan pemeriksaan retensi](lampiran/panduan-pendamping.md)
- [Pemetaan roadmap dan kedalaman materi](lampiran/peta-roadmap.md)
- [Kamus istilah](lampiran/kamus.md)
- [Template catatan, scope, temuan, dan insiden](lampiran/template.md)
- [Sumber utama dan pilihan latihan gratis](lampiran/referensi.md)

Uji sistem sendiri, target lab, atau target dengan izin tertulis dan batas jelas.
Simpan bukti yang sudah disamarkan. Jangan memakai data pelanggan sungguhan dalam
latihan atau mengunggah credential ke GitHub.

## Memelihara tutorial

Edit sumber di `materi/` dan `lampiran/`, lalu jalankan dari root folder:

```powershell
py tools/build_book.py
py tools/check_docs.py
py -m unittest discover -s tests -v
node --test tests/simulator.test.cjs
```

Ganti `py` dengan `python3` untuk Linux/macOS. Buku gabungan dibuat dari sumber
tersebut. [Catatan verifikasi](docs/ai/task-log.md) membedakan contoh yang telah
dijalankan dari latihan VM/platform luar yang belum diuji pada lingkungan penulis.
Rujukan diperiksa pada 6 November 2026; nama menu dan ketersediaan platform dapat berubah.

Untuk pemeriksaan UI oleh pemelihara yang sudah memiliki Playwright CLI, jalankan
server lokal dari root tutorial seperti panduan simulator, lalu:

```powershell
playwright-cli -s=laundry-qa open http://127.0.0.1:8765/simulator/ --browser chrome
$qaScript = Get-Content -Raw -Encoding utf8 tests/browser-simulator.js
playwright-cli -s=laundry-qa run-code $qaScript
playwright-cli -s=laundry-qa close
```

Script `tests/browser-resilience.js` memeriksa storage, offline, keyboard, dan
layar kecil pada URL yang sedang dibuka; jalankan pada server lokal sesuai
[panduan QA](docs/ai/simulator-qa.md). Gunakan profil tes terpisah:
suite menghapus hanya kunci progres
simulator pada profil tes sebelum berjalan. Tidak ada langkah ini yang wajib
bagi pembaca untuk bermain.

Script `tests/browser-mobile.js` memeriksa sentuhan, form, pergantian mode,
progres, orientasi layar, serta tautan bacaan pada emulasi HP. Jalankan melalui
Playwright CLI pada URL simulator yang sedang dibuka, dengan folder `artifacts`
tersedia. Emulasi tidak menggantikan pengujian HP fisik.

GitHub Pages menyajikan branch `main` dari root folder. Berkas `.nojekyll` menjaga
HTML/CSS/JS tetap statis; `index.html` mengarahkan pengunjung ke simulator.
Setelah mengubah berkas, jalankan pemeriksaan di atas lalu push ke `main`.
