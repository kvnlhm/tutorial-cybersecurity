# Rencana Tutorial Cybersecurity

**Tujuan:** menghasilkan buku Markdown yang mengikuti kelompok topik roadmap.sh,
dengan progres dari awam ke latihan spesialis dan bukti kemampuan.

**Arsitektur:** bab sumber di `materi/`, buku gabungan di
`Tutorial-Cybersecurity.md`, pintu masuk `README.md`, lab offline di `labs/`.
Narasi memakai Laundry Aman dengan data sintetis. Bahasa Indonesia memakai
istilah teknis Inggris beserta penjelasannya. Contoh tidak menguji sistem publik.

**Stack:** Markdown, Python standard library (tersedia Python 3.14.0).
Direktori awal kosong dan bukan git repository. Tidak ada konfigurasi existing
yang perlu backup. DB/API/UI/auth/deployment produksi: tidak berlaku.
CodeGraph: tidak ada sumber kode/index proyek pada audit awal.

**Sumber:** roadmap.sh/cyber-security, direktori upstream
`roadmaps/cyber-security/content`, dan gaya tutorial-ai-engineer milik pengguna.
Gunakan dokumentasi primer untuk detail teknis. Materi ditulis sendiri; tidak
menyalin artikel atau solusi tantangan pihak lain.

## Rencana implementasi

- [x] Bab 00–08: orientasi, lab, komputer, jaringan, Linux, Windows, pemrograman,
  web, dan kriptografi. Penjelasan dari nol dengan latihan kecil.
- [x] Bab 09–17: identitas, hardening, threat modeling, pentest, web/API,
  jaringan, deteksi, respons insiden, dan forensik.
- [x] Bab 18–26: malware/reverse engineering, memory safety, identitas enterprise,
  cloud, secure development, intelijen, GRC, spesialisasi, dan capstone.
- [x] Lab executable tanpa dependency: SQL parameterisasi, otorisasi objek,
  hash/integritas, analisis log sintetis. TDD untuk logika lab.
- [x] Lampiran: jadwal belajar, rubrik, kamus, template laporan, pemetaan sumber.
- [x] Gabungkan buku, cek tautan lokal/anchor, jalankan test, review akurasi dan
  kelengkapan; catat bukti di task-log.

## Verifikasi dan risiko

Periksa bahwa semua bab punya praktik dan kriteria lulus; hindari janji keahlian
instan. Setiap perintah perlu konteks shell dan direktori. Data lab harus sintetis.
Unit test harus membuktikan SQL literal, penolakan akses lintas pengguna, hitungan
log yang benar, serta deteksi perubahan file. Link checker memeriksa file dan
anchor; rujukan eksternal diverifikasi melalui browser/dokumentasi resmi.
Latihan VM, platform eksternal, dan compiler yang tidak dijalankan ditandai
NOT_RUN. Tidak memasang Docker atau membeli layanan. Tidak ada push otomatis.

## Fokus review

Pembaca tanpa Linux, mesin berspesifikasi rendah, perbedaan shell, IP dinamis,
serta pembaca yang menyamakan selesai membaca dengan penguasaan profesional.
Setiap jalur harus memberi titik awal dan bukti hasil yang dapat dievaluasi.

## Peningkatan untuk awam total dan simulator (6 November 2026)

Audit menunjukkan prasyarat tersirat: membuka folder/terminal, membedakan input
dan output, membaca JSON, memakai dua jendela, serta menghubungkan konsep dengan
kasus baru. Tambahkan pra-bab, worked example, bantuan yang dikurangi bertahap,
dan panduan pendamping/retensi. Tidak ada jaminan universal penguasaan 100%.

UI baru: `simulator/index.html`, `styles.css`, `app.js`; business rules terpisah
di `engine.js`, skenario di `scenarios.js`. Vanilla HTML/CSS/JS UMD tanpa build,
dependency, request eksternal, atau layanan produksi. `file://` menjadi jalur
utama; server loopback Python opsional untuk QA. Tidak ada DB/API/auth produksi.
Identitas, terminal, jaringan, query, dan backup simulator merupakan model
pendidikan lokal; perintah tidak menyentuh OS. Pelajaran mengaitkan batas model
dengan bab dan lab nyata.

8 jenis misi: berkas/terminal, pesan phishing, aturan jaringan, izin objek,
parameter SQL, triase insiden, backup, dan keputusan capstone. Masing-masing
memiliki mode terbimbing dan kasus ujian berbeda. State belajar, bantuan,
bukti, percobaan, serta hasil dipisahkan per mode. localStorage opsional dengan
fallback memori dan ekspor JSON/catatan, tanpa upload data. Data tersimpan
divalidasi; progres bukan kredensial/tanda sertifikasi.

Rencana: TDD engine memakai `node --test tests/simulator.test.cjs`, UI aksesibel,
pengujian semua misi dan kasus gagal, reload/reset/export serta storage rusak,
browserQA Playwright CLI desktop/mobile/keyboard/console/network. Perbarui
buku gabungan dan checker untuk pra-bab. Regresi labPython dan tautan tetap wajib.
Risiko: hafalan jawaban (varian ujian), storage file tidak konsisten (fallback
terlihat), representasi keamanan terlalu sederhana (batas model tertulis),
beban kognitif (satu misi, definisi dekat tindakan). Belum ada uji pengguna manusia.

### Hasil implementasi

Pra-bab dan panduan pendamping tersedia; Bab 00–07 memperjelas langkah dasar dan
penanganan kesalahan. Buku gabungan menyertakan pra-bab dan enam lampiran.
Delapan misi dengan dua mode, petunjuk, umpan balik, refleksi, progres lokal,
reset terbatas, serta unduhan catatan sudah berfungsi. UI mengikuti DESIGN.md.
Engine lulus 35 unit test; 16 test lab Python tetap lulus. Playwright CLI
menjalankan seluruh misi pada kedua mode, kasus gagal, file lokal, kegagalan
storage, serta tampilan desktop/ponsel. Detail dan batas bukti ada di
[laporan QA simulator](simulator-qa.md). Tidak memasang tool atau layanan baru.

## Publikasi GitHub dan akses HP (7 November 2026)

Pengguna meminta push ke repo, penyesuaian, dan akses dari HP. Repo tujuan
`kvnlhm/tutorial-cybersecurity` bersifat publik, mengikuti repo tutorial AI Engineer.
GitHub Pages menyajikan branch `main` dari root dengan `.nojekyll`; halaman masuk
mengarah ke `simulator/index.html`. Tidak ada backend, akun belajar, atau DB baru.
HTML/CSS/JS yang sama melayani browser ponsel dan unduhan offline di komputer.

README dan panduan memberikan tautan bermain langsung serta ZIP. Pada host
`kvnlhm.github.io`, tautan bab mengarah ke tampilan dokumen GitHub. Pada file lokal
dan localhost, tautan relatif dipertahankan. Penyimpanan tetap di browser masing-
masing; hasil pada HP, komputer, online, dan file lokal tidak tersinkron otomatis.
Tidak memasang service worker atau mengklaim akses offline pertama dari tautan web.

Verifikasi publikasi: baca ulang repo/branch/commit melalui API, pastikan build
Pages selesai, uji URL publik beserta asetnya, dan jalankan misi melalui emulasi
ponsel dengan sentuhan. Periksa menu, pergantian mode, hasil, tautan bab, console,
serta overflow. Jangan menyamakan emulasi dengan pengujian perangkat fisik.
Rujukan konfigurasi: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Penyederhanaan materi (12 November 2026)

Rencana susunan, prasyarat, paket penulis, risiko, dan verifikasi ada di [rancangan materi](rancangan-materi.md).
[Panduan gaya dan templat bab](../panduan-gaya.md) mengatur bahasa serta struktur; Bab 03 dan 13 menjadi contoh penerapannya.
Isi teknis, perintah, kode, dan batas latihan dipertahankan; stack, DB/API, serta fungsi simulator tidak berubah.
Pemeriksaan mencakup perbandingan sumber lama, pembacaan sebagai pemula, contoh lokal, dan `py tools/check_docs.py` sebelum integrasi buku.
