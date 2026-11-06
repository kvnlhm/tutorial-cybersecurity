# Verifikasi simulator Laundry Aman

6 November 2026. Lingkungan: Windows, Node.js v24.14.0, Python 3.14.0,
Playwright CLI 0.1.22 dengan Chrome headless. Semua akun, berkas, pesan, dan
peristiwa pada misi adalah data buatan. Tidak ada sistem luar yang diuji.

## Perilaku yang diuji

| Pemeriksaan | Status | Bukti |
|---|---|---|
| Mesin misi | PASS | `node --test tests/simulator.test.cjs`: 35 lulus, 0 gagal |
| Lab Python | PASS | `py -m unittest discover -s tests -v`: 16 lulus |
| Misi belajar dan ujian | PASS | tests/browser-simulator.js menyelesaikan seluruh 16 kasus lewat kontrol UI; termasuk respons terhadap tindakan salah |
| Progres dan catatan | PASS | Reload memulihkan hasil/refleksi, reset hanya misi dan mode aktif, JSON benar-benar terunduh, tema bertahan |
| Gangguan penyimpanan | PASS | tests/browser-resilience.js: SecurityError dan JSON rusak menampilkan penjelasan; misi tetap dapat selesai |
| Tanpa server/internet | PASS | File lokal dibuka melalui file:/// dan misi terminal selesai; interaksi setelah browser dibuat offline tetap berjalan |
| Navigasi dan input | PASS | Enter menjalankan perintah, Tab memindah fokus, Escape menutup dialog dan mengembalikan fokus; tombol lanjut dan pemilih mode ponsel bekerja |
| Teks dari pengguna | PASS | Refleksi dengan tag HTML tampil sebagai teks dan bertahan setelah reload; tidak menjadi elemen img |
| Console dan jaringan | PASS | Tidak ada error/warning; request selama pengujian hanya ke server localhost untuk aset lokal |

Penilaian otomatis memeriksa aturan skenario. Refleksi tertulis tidak dinilai
otomatis. Ujian memiliki kasus berbeda dan tidak menyediakan petunjuk, tetapi
tetap memberi umpan balik dan dapat diulang; ini bukan ujian sertifikasi.

## Pemeriksaan tampilan

- PASS: delapan misi pada lebar 320, 390, 768, dan 1440 piksel tidak menyebabkan
  halaman meluber secara horizontal. Navigasi misi/mode dilipat pada ponsel.
- PASS: empat screenshot desktop/ponsel, terang/gelap diperiksa setelah koreksi.
  Perubahan utama adalah kontras placeholder dan ringkasan navigasi ponsel.
- PASS: 16 pasangan warna teks/latar yang diuji bernilai 5,66:1–14,84:1.
  Parser uji menangani warna hex tiga digit dan menolak hasil non-finite.
- PASS: label kontrol, judul tugas, status awal, hasil salah/benar, petunjuk,
  bukti, dan pemulihan storage terlihat. Tindakan inti dapat dipakai dengan
  keyboard. Ini pemeriksaan terbatas, bukan sertifikasi WCAG atau audit screen reader.
- FAIL pada detektor mekanis: Impeccable mengeluarkan satu warning
  `cream-palette` untuk warna kertas `#f6f3eb`. Palet ini dipertahankan sesuai
  [DESIGN.md](../../DESIGN.md): tampilan buku kerja, kontras terukur, dan mode gelap.
  Tidak ada klaim bahwa detektor memberi hasil bersih.

Screenshot lokal disimpan di `artifacts/` dan tidak dimasukkan ke versi sumber.
Sumber callback visual tersedia di `tests/browser-visual.js`.

## Menjalankan ulang

Dari root tutorial, mulai server pada terminal terpisah:

```powershell
py -m http.server 8765 --bind 127.0.0.1
```

Pada terminal QA, gunakan instalasi Playwright CLI yang sudah tersedia:

```powershell
playwright-cli -s=laundry-qa open http://127.0.0.1:8765/simulator/ --browser chrome
$qaScript = Get-Content -Raw -Encoding utf8 tests/browser-simulator.js
playwright-cli -s=laundry-qa run-code $qaScript
$qaScript = Get-Content -Raw -Encoding utf8 tests/browser-resilience.js
playwright-cli -s=laundry-qa run-code $qaScript
New-Item -ItemType Directory -Force artifacts
$qaScript = Get-Content -Raw -Encoding utf8 tests/browser-visual.js
playwright-cli -s=laundry-qa run-code $qaScript
playwright-cli -s=laundry-qa close
```

Script resilience memakai URL yang sedang dibuka; tidak ada path komputer penulis.
Gunakan URL HTTP(S) pada runner yang membatasi navigasi file lokal. Pemeriksaan
file lokal tanggal 6 November tercatat di atas; percobaan ulang lewat perintah
CLI `goto` pada 7 November ditolak oleh pembatasan protokol runner, sehingga
tidak dihitung sebagai uji file lokal yang berhasil pada sesi publikasi.
Gunakan profil QA terpisah; script menghapus kunci progres simulator pada profil
tersebut. Hentikan server dengan Ctrl+C setelah selesai. Pembaca tidak perlu
menjalankan rangkaian QA ini untuk bermain.

## Yang belum dibuktikan

NOT_RUN: studi belajar dengan peserta awam, penggunaan screen reader, browser
selain Chrome, OS lain, serta praktik VM/platform eksternal. Tidak ada dasar
untuk menjamin semua pembaca menguasai 100% cybersecurity. Pra-bab, latihan
bertahap, kasus ujian, pemeriksaan retensi, dan panduan pendamping memberi cara
menilai kemajuan yang lebih nyata daripada sekadar menandai bab telah dibaca.

## Publikasi dan HP, 7 November 2026

URL publik: [Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/).
GitHub Pages build `42280991304` berhasil untuk commit `f837e4d`; root mengarah ke
simulator, dan keenam URL halaman/aset yang diperiksa memberi HTTP 200.
Seluruh 16 kasus belajar/ujian lulus pada URL publik lewat browser-simulator.js.

Callback `tests/browser-mobile.js` memakai konteks Chrome dengan sentuhan dan
viewport ponsel: terminal belajar/ujian, form phishing, menu, reload, orientasi
mendatar, serta membuka bab di GitHub dan Kembali berhasil. Lebar 320, 360, 390,
dan 768 piksel tidak meluber. Console utama dan error JavaScript konteks ponsel
bersih. Screenshot lokal: `artifacts/published-mobile.png`.

Untuk mengulang pemeriksaan sentuhan, buka URL publik dalam sesi QA lalu jalankan
isi `tests/browser-mobile.js` melalui `playwright-cli run-code`. Buat folder
`artifacts` terlebih dahulu. Suite memakai konteks browser sementara dan
menutupnya setelah selesai. Pengujian perangkat HP fisik/Safari tetap NOT_RUN.
