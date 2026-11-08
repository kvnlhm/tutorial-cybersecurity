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

## Perombakan tampilan terminal, 9 November 2026 (iterasi pertama)

Catatan: bagian ini mencatat QA iterasi pertama. Iterasi kedua pada hari yang
sama mengubah tema bawaan menjadi gelap dan label bukti menjadi `[CATAT]`;
lihat bagian "Iterasi kedua" di bawah — deskripsi tema awal light pada tabel
ini sudah tidak menggambarkan working tree terbaru.

Perombakan tampilan (bukan fungsi) simulator menjadi gaya terminal sesuai
permintaan pengguna; brief di `artifacts/briefs/terminal-ui-brief.md`.
Perubahan ada di working tree dan belum di-commit: `DESIGN.md`,
`simulator/app.js`, `simulator/styles.css`; `simulator/index.html` tidak
berubah. Lingkungan QA: Windows, Node.js v24, Python 3.14.0, Playwright CLI
0.1.22 dengan Chrome, server `py -m http.server 8765 --bind 127.0.0.1` dari
root repo (dimatikan setelah sesi). Sesi QA memverifikasi implementasi thread
lain dan tidak mengubah file `simulator/`; yang ditulis hanya dokumen ini,
task-log, dan screenshot di `artifacts/`.

### Pemeriksaan yang dijalankan

| Pemeriksaan | Status | Bukti |
|---|---|---|
| Mesin misi | PASS | `node --test tests/simulator.test.cjs`: 35 lulus, 0 gagal |
| Lab Python | PASS | `py -m unittest discover -s tests -v`: 16 lulus |
| Struktur dokumen | PASS | `py tools/check_docs.py`: 45 Markdown, 27 bab, 68 tautan lokal |
| Sintaks JS | PASS | `node --check` pada app.js, engine.js, scenarios.js |
| Misi belajar dan ujian | PASS | tests/browser-simulator.js lewat `playwright-cli -s=terminal-qa run-code`: 31 alur tercatat pada tampilan terminal; kasus salah, reset, reload, ekspor, tema |
| Gangguan penyimpanan | PASS | tests/browser-resilience.js: SecurityError dan JSON rusak menampilkan penjelasan; 8 misi 390px; Escape/Tab; interaksi offline |
| Kontrol sentuh mobile | PASS | tests/browser-mobile.js: tap, terminal belajar/ujian, form phishing, reload, portrait 320/360/390/768, landscape, tautan bab lokal |
| Kontras kedua tema | PASS | tests/browser-visual.js: 16 pasangan warna 5,76:1–17,0:1; placeholder terminal (`--terminal-muted/--terminal`) diukur terpisah 8,95:1 |
| Tanpa overflow horizontal | PASS | Callback visual: 8 misi pada 320/390/768/1440 px; callback mobile menambah 360 px dan orientasi mendatar |
| Reduced-motion | PASS | Pemeriksaan tambahan `page.emulateMedia`: kedip kursor `animation:none`, transisi tombol 0s; kembali normal setelah prefensi dinonaktifkan |
| Kursor blok dan caret | PASS | Pemeriksaan tambahan: kursor blok berkedip 1,1s saat input kosong dengan caret native transparan (tidak ganda); saat mengetik kursor disembunyikan dan caret native aktif |
| Label log | PASS | getComputedStyle `::before`: `[INFO]` pending, `[GAGAL]` setelah tindakan salah, `[SIMULASI]` pada strip; innerText tidak berubah sehingga assert test aman |
| Toggle tema | PASS | Tema awal light; klik pertama `#theme` menjadi dark (assert browser-simulator.js:79 dan browser-resilience.js:35 lulus); klik kedua kembali light; dark bertahan setelah reload |
| Console dan jaringan | PASS | 0 error console/pageerror selama alur tambahan; log server hanya request aset localhost |

### Screenshot dan penilaian visual

File: `artifacts/terminal-ui-desktop-dark.png`, `artifacts/terminal-ui-desktop-light.png`,
`artifacts/terminal-ui-mobile-dark.png` (fullPage; callback visual juga menyimpan
`desktop-light.png`, `desktop-dark.png`, `mobile-dark.png`, `mobile-light.png`,
dan callback mobile `published-mobile.png`). Model utama sesi QA tidak
mendukung input gambar, sehingga penilaian visual dilakukan oleh subagent
berkemampuan melihat gambar, ditambah pengukuran programatik. Kesimpulan
penilaian: desktop gelap dan terang terbaca jelas tanpa elemen terpotong dan
tetap ramah untuk awam; mobile 390px muat tanpa meluber. Dua dugaan dari
penilaian gambar gugur setelah diverifikasi: tombol header mobile sebenarnya
sejajar rata pada grid tiga kolom (x=16/138/260, lebar 114px), dan teks sumber
menulis "membantu" dengan benar.

### Temuan (bukan kegagalan test)

- SEDANG, `simulator/styles.css:177`: prefiks `[OK]` diberikan ke semua item
  bukti, termasuk observasi kebocoran dan keputusan yang ditandai "perlu
  diperbaiki". Sesuai huruf brief, tetapi ambigu bagi pembaca awam; menunggu
  keputusan pengguna sebelum diubah.
- RENDAH, `tests/browser-visual.js:9`: pasangan warna terminal baru
  `--terminal-prompt/--terminal` dan `--terminal-muted/--terminal` belum masuk
  daftar pasangan yang dijaga; nilai hari ini lolos ambang.
- RENDAH, `simulator/styles.css:122`: penyembunyian kursor saat mengetik memakai
  `:has()`; pada browser sangat lama tampil kursor ganda (fungsi tidak rusak).
- RENDAH, kosmetik: kursor blok berada di ujung kanan kotak input, bukan di
  titik sisip teks.
- Catatan: temuan `cream-palette` dari 6 November tidak lagi berlaku karena
  palet kertas telah diganti palet terminal pada DESIGN.md versi working tree.

Perbaikan temuan di atas berada di tangan thread implementasi; sesi QA ini
tidak mengubah `simulator/`. Yang belum dibuktikan tetap seperti bagian
sebelumnya: peserta manusia, screen reader, browser selain Chrome, OS lain,
dan HP fisik.

## Iterasi kedua: tema bawaan gelap dan label bukti [CATAT], 9 November 2026

Iterasi kedua atas perombakan terminal, atas keputusan pengguna: tema gelap
menjadi bawaan sejak kunjungan pertama (`view.theme` default 'dark' di
simulator/app.js:14 dan `data-theme="dark"` statis pada `<html>` di
simulator/index.html untuk mencegah flash terang), dan item bukti diberi
prefiks netral `[CATAT]` menggantikan `[OK]` yang ambigu (simulator/styles.css
`.evidence li::before`; `[OK]` tetap pada panel umpan balik dan selesai).
Assertion tema pada tests/browser-simulator.js:79-80, tests/browser-resilience.js:35,
dan urutan tests/browser-visual.js disesuaikan: klik pertama `#theme` kini
menghasilkan `data-theme="light"`. Lingkungan QA sama seperti iterasi pertama
(Chrome, Playwright CLI 0.1.22, server 127.0.0.1:8765, dimatikan setelah sesi).
Sesi QA tetap tidak mengubah `simulator/` maupun `tests/`.

### Pemeriksaan yang dijalankan

| Pemeriksaan | Status | Bukti |
|---|---|---|
| Mesin misi | PASS | `node --test tests/simulator.test.cjs`: 35 lulus, 0 gagal |
| Lab Python | PASS | `py -m unittest discover -s tests -v`: 16 lulus |
| Struktur dokumen | PASS | `py tools/check_docs.py`: 45 Markdown, 27 bab, 69 tautan lokal |
| Sintaks JS | PASS | `node --check` pada app.js, engine.js, scenarios.js |
| Misi belajar dan ujian | PASS | tests/browser-simulator.js versi baru: 31 alur tercatat; klik pertama `#theme` menghasilkan `light` dan bertahan setelah reload (assert :79-80 lulus) |
| Gangguan penyimpanan | PASS | tests/browser-resilience.js versi baru: blocked/corrupt/normal, 8 misi 390px, Escape/Tab, interaksi offline dengan toggle ke `light` (assert :35 lulus) |
| Kontrol sentuh mobile | PASS | tests/browser-mobile.js: tap, terminal belajar/ujian, form phishing, reload, portrait 320/360/390/768, landscape, tautan bab lokal; console konteks mobile 0 error |
| Kontras kedua tema | PASS | tests/browser-visual.js versi baru (dark diukur duluan): 16 pasangan 5,76:1–17,0:1; placeholder terminal diukur terpisah 8,95:1 |
| Tanpa overflow horizontal | PASS | Callback visual: 8 misi pada 320/390/768/1440 px; callback mobile menambah 360 px dan orientasi mendatar |
| Tema gelap sejak kunjungan pertama | PASS | Pemeriksaan tambahan dengan init script + MutationObserver: `data-theme` tercatat `dark` sejak t=12 ms sampai load, tanpa nilai lain sebelum interaksi; background body `rgb(14,23,18)` (#0e1712) sudah aktif saat domcontentloaded — tidak ada flash terang |
| Toggle dua arah dan persistensi | PASS | Klik pertama -> `light`, reload bertahan `light`; klik kedua -> `dark`, reload bertahan `dark` |
| Label bukti [CATAT] | PASS | getComputedStyle `::before` item bukti = `"[CATAT] "` setelah `pwd`, tidak bocor ke innerText; teks "Belum ada bukti" tetap di innerText saat kosong; `[OK]` tetap pada feedback/completion; terlihat pada screenshot `terminal-ui-evidence-catat.png` |
| Kursor blok dan caret | PASS | Kursor blok berkedip 1,1s saat input kosong dengan caret native transparan; disembunyikan saat mengetik dan caret native aktif |
| Reduced-motion | PASS | `page.emulateMedia`: kedip kursor `animation:none`, transisi tombol 0s |
| Console dan jaringan | PASS | 0 error console/pageerror selama alur tambahan; log server hanya request aset localhost |

### Screenshot dan penilaian visual

File yang diperbarui (ditimpa, nama sama): `artifacts/terminal-ui-desktop-dark.png`
(kondisi kunjungan pertama, tanpa toggle), `artifacts/terminal-ui-desktop-light.png`
(via toggle), `artifacts/terminal-ui-mobile-dark.png` (kunjungan pertama 390px).
Tambahan: `artifacts/terminal-ui-evidence-catat.png` (desktop gelap setelah
perintah `pwd`, memperlihatkan `[CATAT]` pada bukti dan `[OK]` pada umpan
balik). Penilaian dilakukan subagent berkemampuan melihat gambar (model utama
sesi QA tidak mendukung input gambar) plus pengukuran programatik. Kesimpulan:
ketiga tampilan LAYAK — kesan terminal kuat, teks terbaca, tanpa elemen
terpotong, tetap ramah awam; tombol header mobile rata pada grid tiga kolom;
`[CATAT]` dan `[OK]` tidak tertukar. Masukan iterasi sebelumnya tentang area
kosong terminal dan teks meta kecil tetap berlaku sebagai polesan opsional.

### Temuan iterasi kedua (bukan kegagalan test)

- SEDANG, `simulator/index.html:20`: label statis tombol `#theme` masih
  "Tampilan gelap" (mengasumsikan bawaan light). Sebelum app.js berjalan, dan
  pada jalur gagal-muat (app.js error), tombol menampilkan arah yang salah;
  app.js:125 menimpa dengan benar begitu render jalan. Perbaikan satu kata:
  "Tampilan terang".
- RENDAH, `simulator/app.js:55`: fallback tema saat field tersimpan hilang/rusak
  jatuh ke 'light', tidak konsisten dengan bawaan baru 'dark'. Jalur nyaris
  tak tercapai (field theme selalu tersimpan sejak rilis pertama).
- RENDAH, kosmetik, `simulator/styles.css` (focus ring input): saat input
  fokus setelah submit, outline menyela jarak prompt sehingga terbaca
  `$Contoh: pwd` — focus indicator tetap perlu dipertahankan, hanya jaraknya
  perlu dirapikan.
- RENDAH (berulang dari iterasi pertama): pasangan warna
  `--terminal-prompt/--terminal` dan `--terminal-muted/--terminal` belum masuk
  assertion kontras (nilai hari ini lolos), dan `:has()` pada styles.css:122
  menyebabkan kursor ganda di browser sangat lama saat mengetik.
- Catatan perilaku (acceptable): pengguna dengan preferensi 'light' tersimpan
  melihat render gelap sesaat sampai app.js memasang `light`; pengguna versi
  lama yang tidak pernah toggle tetap mendapat light karena preferensi
  tersimpan dihormati.

Perbaikan temuan berada di tangan thread implementasi. Yang belum dibuktikan
tetap: peserta manusia, screen reader, browser selain Chrome, OS lain, dan HP
fisik; varian `[CATAT]` pada lebar 390px belum ditangkap screenshot (terverifikasi
programatik lewat computed style).
