# Catatan verifikasi

Tanggal: 6 November 2026. Lingkungan penulis: Windows PowerShell, Python 3.14.0.
Data lab sintetis. PASS hanya untuk pemeriksaan yang benar-benar dijalankan;
tidak berarti seluruh latihan pada setiap OS atau layanan telah diuji.

Tabel pertama mencatat versi buku sebelum simulator dibuat. Hasil peningkatan
terbaru ada pada tabel kedua; status UI lama tidak berlaku untuk versi terbaru.

| TASK | STATUS (PASS/FAIL/NOT_RUN) | EVIDENCE | BLOCKER | RESULT |
|---|---|---|---|---|
| Audit awal | PASS | Get-ChildItem kosong; git status: not a git repository | Tidak ada | Tidak ada file pengguna yang ditimpa; tanpa instal dependency |
| Baca sumber contoh | PASS | GitHub API dan raw Tutorial-AI-Engineer.md | Tidak ada | Format konsep/praktik/latihan dipakai |
| Inventaris roadmap | PASS | GitHub API commit d922417cd1ef690e66c008a3c3612f683e8e433a, 302 berkas | Tidak ada | Snapshot roadmap-inventory.json |
| TDD fase merah | FAIL | `py -m unittest discover -s tests -v`: 16 assertion failures terhadap stub | Implementasi belum ada pada fase ini | Kegagalan yang diharapkan sebelum implementasi |
| TDD fase hijau | PASS | `py -m unittest discover -s tests -v`: Ran 16 tests, OK | Tidak ada | SQL parameterisasi, otorisasi, hash, dan parser log teruji |
| Lab SQL | PASS | `py labs/sql_demo.py`: rentan 2 nota, berparameter [] | Tidak ada | Output sesuai panduan |
| Lab otorisasi | PASS | `py labs/access_demo.py`: Alice diizinkan, Bob/anonim ditolak | Tidak ada | Pembatasan pemilik objek bekerja |
| Lab hash | PASS | `py labs/crypto_demo.py`: digest berbeda, Sama False | Tidak ada | Perubahan byte terdeteksi |
| Lab log | PASS | `py labs/log_triage.py`: total 7, failed 4, success 3 | Tidak ada | Ringkasan sesuai hitungan manual |
| Sintaks Python | PASS | `py -m compileall -q labs tools tests`: exit 0 | Tidak ada | File Python dapat dikompilasi |
| HTTP loopback | PASS | Smoke test Python dengan ThreadingHTTPServer, direktori temporer, bind 127.0.0.1; HTTP 200 dan isi cocok | Menggunakan port sementara, bukan uji Nmap/browser | Server ditutup setelah test |
| Snippet fondasi | PASS | Ekstraksi blok Python Bab06/08 lalu eksekusi melalui `py -`: Login gagal 3; hash64 karakter, Sama False; assert lulus | Tidak ada | Contoh Python bab cocok dengan keluaran |
| Hitungan subnet | PASS | Python ipaddress: /25 mask255.255.255.128 broadcast.127 total128; /26 host62 | Tidak ada | Jawaban latihan cocok |
| PowerShell fondasi | PASS | Objek sintetis Bab05: Where-Object 2 gagal; Group-Object gagal2 berhasil1 | Tidak ada | Filtering dan pengelompokan sesuai narasi |
| Restore Bab10 | PASS | Snippet PowerShell Bab10: teks pulih LA-001: dicuci; hash backup=hasil pulih E5B59E1130A67701E4542A9914DCF82B9A2D140195953099E688179F1A3E8D75 | Tidak ada | Data sumber versi berubah tetap ada |
| Forensik Bab17 | PASS | Snippet PowerShell Bab17: hash sumber/bukti/kerja identik A945E4AEF7DEFA157F6C3A6D144548795CF5756BE2769E2B95CD93DCB27E5454 sebelum/sesudah | Tidak ada | Salinan tidak berubah setelah analisis; ringkasan7/4/3 |
| Python lanjutan | PASS | Lima blok Python Bab18/19/20/26 diekstrak lalu compile+exec; biaya21000/18900, parser1000 trial, graf vendor dua lompatan | Tidak ada | Perilaku sesuai penjelasan |
| Capstone aman | PASS | Python `-B -m unittest discover -s <direktori temporer> -p test_*.py -v`: 4 tests OK | Tidak ada | Akses sah bekerja, lintas pemilik/anonim ditolak |
| Kontrol negatif capstone | FAIL | Import sementara memakai baca_rentan: FAILED failures=2, exit1 | Implementasi sengaja rentan | Test lintas pemilik/anonim menangkap cacat; setelah dipulihkan 4/4 PASS |
| Build buku | PASS | `py tools/build_book.py`: 27 bab dan 5 lampiran, sekitar27.300 kata | Tidak ada | Tutorial-Cybersecurity.md tersedia |
| Struktur dan link lokal | PASS | `py tools/check_docs.py`: 39 Markdown, 27 bab, 50 tautan lokal; sinkron | Tidak memeriksa seluruh link eksternal otomatis | Fence, bagian wajib, path dan anchor lulus |
| Review lintas bab | PASS | Pembacaan sumber oleh penulis dan reviewer: 09–17 serta18–23; root meninjau fondasi, web/cloud, spesialisasi/capstone | Review manual bukan jaminan bebas kesalahan | Pengantar JSON, folder latihan, dan instruksi import test diperjelas |
| Latihan platform eksternal | NOT_RUN | Bandit, PortSwigger, pwn.college dirujuk; sesi challenge tidak dijalankan | Memerlukan sesi pembaca | Tidak mengklaim challenge selesai |
| VM, Linux/macOS dan compiler C | NOT_RUN | Tidak menginstal VM/compiler atau menjalankan OS lain | Lingkungan penulis Windows | Jalur alternatif perlu verifikasi pada mesin pembaca |
| UI/browser QA | NOT_RUN | Tidak ada aplikasi UI | Tidak berlaku untuk buku Markdown | Tidak ada klaim QA browser aplikasi |
| Lint/typecheck framework | NOT_RUN | Tidak ada framework, linter, atau typechecker terkonfigurasi | Tidak berlaku; tanpa instal paket | Verifikasi Python melalui test dan compile |
| GitHub publish | NOT_RUN | Tidak membuat remote atau push | Publikasi bukan bagian instruksi eksplisit | Hasil disimpan lokal |

## Peningkatan awam total dan simulator

Tanggal: 6 November 2026. Node.js v24.14.0, Playwright CLI 0.1.22, Chrome,
Windows. Rincian UI dan batas pemeriksaan: [laporan QA](simulator-qa.md).

| TASK | STATUS (PASS/FAIL/NOT_RUN) | EVIDENCE | BLOCKER | RESULT |
|---|---|---|---|---|
| Audit dan backup | PASS | Membaca sumber dan instruksi; salinan AGENTS.md, .gitignore, architecture.md di .claude/backups/simulator-20261106 | Tidak ada | Perubahan instruksi/config digabung; tanpa instalasi |
| Materi awam total | PASS | Review 11 dokumen; pra-bab, panduan pendamping, dan Bab 00–07; snippet Python dan hitungan subnet diperiksa | Belum diuji peserta manusia | Langkah folder/browser/terminal, input-output, bantuan, dan retensi diperjelas |
| TDD engine merah | FAIL | `node --test tests/simulator.test.cjs`: 20 kegagalan awal; dua test restore tambahan gagal sebelum perbaikan | Stub belum diimplementasikan saat fase merah | Kegagalan yang diharapkan |
| TDD engine hijau | PASS | `node --test tests/simulator.test.cjs`: 35/35 lulus | Tidak ada | Aturan misi, kasus negatif, perubahan state, dan pemulihan diuji |
| Regresi lab Python | PASS | `py -m unittest discover -s tests -v`: 16/16 lulus | Tidak ada | Empat lab tetap bekerja |
| Sintaks simulator dan callback QA | PASS | `node --check` pada app.js, engine.js, scenarios.js dan tiga callback browser: exit 0 | Tidak ada | Enam sumber JavaScript dapat diparse |
| Build buku terbaru | PASS | `py tools/build_book.py`: 32.346 kata, 245.243 byte | Tidak ada | Pra-bab, 27 bab, dan enam lampiran tergabung |
| Dokumen dan tautan terbaru | PASS | `py tools/check_docs.py`: 45 Markdown, 27 bab, 69 tautan lokal; buku sinkron | Tidak memeriksa semua link eksternal otomatis | Struktur, fence, path, dan anchor lulus |
| Browser semua misi | PASS | `playwright-cli -s=laundry-qa run-code` dengan tests/browser-simulator.js | Chrome pada Windows | 8 misi belajar dan 8 ujian selesai melalui UI; kasus salah, reset, reload, ekspor, dan tema diuji |
| Storage dan offline | PASS | Playwright callback tests/browser-resilience.js | Perilaku file lokal dapat berbeda di browser lain | Storage ditolak/rusak, file lokal, keyboard, interaksi offline, dan 8 misi pada layar kecil lulus |
| Review source/UI | PASS | Reviewer menemukan dan penulis memperbaiki pilihan anonim, bukti, penjelasan capstone, fokus, serta label unduhan; smoke browser tambahan lulus | Review bukan bukti bebas cacat | Kontrol sesuai tindakan dan hasil yang ditampilkan |
| Responsive dan warna | PASS | Callback tests/browser-visual.js; 32 kombinasi misi/lebar; 4 screenshot diperiksa; 16 pasangan kontras >= 5,66:1 | Bukan audit WCAG menyeluruh | Tidak ada overflow 320/390/768/1440px; placeholder terang/gelap terbaca |
| Validasi alat ukur kontras | PASS | Parser diperbaiki agar membaca hex 3 digit dan menolak NaN; 16 pasangan dihitung ulang | Pemeriksaan awal dua pasangan belum valid | Hasil final semuanya angka finite di atas 4,5:1 |
| Console dan network | PASS | `playwright-cli -s=laundry-qa console` dan `requests --static`: 0 error/warning; request hanya localhost | Tidak mencakup semua browser | Tidak ada request layanan luar saat alur QA |
| Detektor gaya mekanis | FAIL | `impeccable.cmd detect --json simulator/index.html simulator/styles.css simulator/app.js`: exit 1, warning cream-palette | Palet kertas sengaja dipilih pada DESIGN.md | Peringatan ditinjau dan dipertahankan; bukan kegagalan fungsi atau klaim detektor bersih |
| Lint/typecheck framework | NOT_RUN | Tidak ada framework/linter/typechecker terpasang di proyek | Tidak dikonfigurasi | Syntax check Node dan test dipakai; tidak mengklaim lint lulus |
| Studi pengguna awam | NOT_RUN | Belum ada peserta awam yang menjalankan sesi observasi | Memerlukan peserta nyata | Tidak mengklaim jaminan penguasaan 100% atau validasi usability manusia |
| Browser/OS lain dan lab eksternal | NOT_RUN | Tidak menjalankan Firefox/Safari atau memasang VM/platform challenge | Di luar lingkungan verifikasi ini | Batas tetap tercantum di panduan |

## Publikasi GitHub dan akses HP

Tanggal: 7 November 2026. Pengguna mengizinkan push dan meminta akses HP.

| TASK | STATUS (PASS/FAIL/NOT_RUN) | EVIDENCE | BLOCKER | RESULT |
|---|---|---|---|---|
| Audit berkas publikasi | PASS | Pemeriksaan nama berkas dan pola credential pada staged files; review 51 referensi lokal | Pencarian pola bukan jaminan tidak ada secret | Tidak ditemukan kandidat kunci/token; hasil latihan, cache, screenshot dan backup diabaikan Git |
| Push awal | PASS | `gh repo create kvnlhm/tutorial-cybersecurity --public --source . --remote origin --push`; commit 697e771 | Tidak ada | Repo publik dibuat, branch main mengikuti origin/main |
| Test sebelum publikasi | PASS | `node --test tests/simulator.test.cjs`: 35/35; `py -m unittest discover -s tests -v`: 16/16; `py tools/check_docs.py`: 45 dokumen/69 tautan, sinkron | Tidak ada | Materi dan lab lolos pemeriksaan |
| Regresi UI lokal | PASS | Callback tests/browser-resilience.js pada localhost: blocked/corrupt/normal, 8 misi pada 390px, Escape/Tab, offline | Chrome emulasi | Script memakai URL aktif dan tidak lagi menyimpan path komputer penulis |
| Ulang QA file lokal | NOT_RUN | Perintah Playwright CLI `goto file:///...` ditolak runner | Pembatasan protokol file pada perintah CLI | Tidak mengklaim pengujian ulang file lokal berhasil; hasil historis 6 November tetap terpisah |
| GitHub Pages | PASS | API Pages: built, main/root, https_enforced true; run 42280991304 success pada f837e4d; enam URL halaman/aset HTTP 200 | Tidak ada | Tautan publik dan homepage repo aktif |
| Prasyarat suite desktop | FAIL | Eksekusi pertama memakai viewport 390px sisa uji sebelumnya; pemilih mode terlipat menyebabkan timeout | Prekondisi runner belum eksplisit | Suite menetapkan viewport 1440x1000 sebelum reload; eksekusi ulang seluruh kasus lulus |
| Semua kasus pada situs publik | PASS | tests/browser-simulator.js: 31 hasil tercatat, mencakup 8 misi belajar dan 8 ujian; console 0 error/warning | Chrome | Kasus salah, hasil, reload, reset, ekspor, dan tema bekerja |
| Akses HP | PASS | tests/browser-mobile.js: kontrol tap, terminal belajar/ujian, form phishing, mode, reload, portrait 320/360/390/768, landscape, klik bab GitHub HTTP sukses lalu Kembali | Emulasi Chrome dengan hasTouch/isMobile | Simulator dapat diakses melalui tautan tanpa ZIP; progres dipertahankan |
| Validitas bukti menu ponsel | PASS | Reviewer menemukan pemeriksaan atribut boolean ambigu; diganti properti el.open; callback mobile dan resilience diulang, PASS | Tidak ada | Menu tertutup dibuktikan melalui properti DOM |
| Penyimpanan versi online | PASS | Callback resilience pada situs publik: storage blocked/corrupt/normal, delapan misi 390px, keyboard, offline | Offline hanya interaksi halaman yang sudah termuat | Fallback memori dan pesan pemulihan tetap bekerja |
| Buku dan panduan HP | PASS | `py tools/build_book.py`: 32.542 kata, 246.684 byte; `py tools/check_docs.py`: 45 dokumen/68 tautan lokal, buku sinkron | Tidak ada | Pra-bab, intro buku, README, dan panduan mengarahkan HP ke URL bermain |
| HP fisik/Safari | NOT_RUN | Tidak ada perangkat fisik yang dipakai dalam sesi ini | Lingkungan uji Chrome emulasi | Tidak mengklaim verifikasi Android/iPhone fisik |

## QA perombakan tampilan terminal simulator

Tanggal: 9 November 2026. Perombakan tampilan (bukan fungsi) sesuai brief
artifacts/briefs/terminal-ui-brief.md. Perubahan di working tree, belum
di-commit: DESIGN.md, simulator/app.js, simulator/styles.css; index.html tidak
berubah. Lingkungan QA: Windows, Node.js v24, Python 3.14.0, Playwright CLI
0.1.22 Chrome, server lokal 127.0.0.1:8765 (dimatikan setelah sesi). Rincian:
[laporan QA](simulator-qa.md). QA ini memverifikasi implementasi thread lain;
tidak ada file simulator/ yang diubah oleh sesi QA.

| TASK | STATUS (PASS/FAIL/NOT_RUN) | EVIDENCE | BLOCKER | RESULT |
|---|---|---|---|---|
| Regresi engine | PASS | `node --test tests/simulator.test.cjs`: 35/35 lulus | Tidak ada | Aturan misi tidak berubah oleh perombakan tampilan |
| Regresi lab Python | PASS | `py -m unittest discover -s tests -v`: 16/16 lulus | Tidak ada | Lab fondasi tetap bekerja |
| Struktur dokumen | PASS | `py tools/check_docs.py`: 45 Markdown, 27 bab, 68 tautan lokal; sinkron | Tidak ada | DESIGN.md baru lolos pemeriksaan struktur |
| Sintaks JS | PASS | `node --check` app.js, engine.js, scenarios.js: exit 0 | Tidak ada | Tiga sumber dapat diparse |
| Browser semua misi | PASS | `playwright-cli -s=terminal-qa run-code` tests/browser-simulator.js: 31 alur tercatat, 8 misi belajar + 8 ujian lewat kontrol UI | Chrome | Kasus salah, reset, reload, ekspor JSON, dan tema bekerja pada tampilan baru |
| Gangguan penyimpanan dan mobile | PASS | tests/browser-resilience.js (blocked/corrupt/normal, 8 misi 390px, Escape/Tab, offline) dan tests/browser-mobile.js (tap, portrait 320/360/390/768, landscape, tautan bab) | Emulasi Chrome | Fungsi tetap utuh; console konteks mobile 0 error |
| Kontras kedua tema | PASS | tests/browser-visual.js: 16 pasangan warna 5,76:1–17,0:1; pasangan tambahan `--terminal-muted/--terminal` (placeholder) diukur terpisah 8,95:1 | Bukan audit WCAG menyeluruh | Seluruh teks di atas ambang 4,5:1 pada tema terang dan gelap |
| Layout responsif | PASS | Callback visual: 8 misi x lebar 320/390/768/1440 tanpa overflow horizontal; callback mobile menambah 360px dan landscape | Chrome | Tidak ada elemen meluber pada layar sempit |
| Kursor blok dan caret | PASS | Pemeriksaan tambahan via run-code: `.cursor` animasi cursor-blink 1,1s terlihat saat input kosong dengan caret native transparan (tidak ganda); saat mengetik kursor `visibility:hidden` dan caret native aktif | Chrome | Perilaku kursor terminal sesuai DESAIN tanpa tampilan ganda |
| Reduced-motion | PASS | Emulasi `page.emulateMedia({reducedMotion:'reduce'})`: animationName kursor 'none', transisi tombol 0s; kembali berkedip setelah 'no-preference' | Chrome | Kedip dan animasi mati saat pengguna meminta gerak minimal |
| Label log pseudo-element | PASS | getComputedStyle `::before` pada feedback: `[INFO]` saat pending, `[GAGAL]` setelah jawaban salah; strip `[SIMULASI]` tampil; innerText tidak berubah | Chrome | Status bergaya log terlihat tanpa mengganggu assert test |
| Toggle tema | PASS | Tema awal light; klik pertama `#theme` menghasilkan data-theme="dark" (assert browser-simulator.js:79 dan browser-resilience.js:35 lulus); klik kedua kembali light; dark bertahan setelah reload | Chrome | Toggle dua arah bekerja; default light dipertahankan menunggu keputusan pengguna |
| Console dan jaringan | PASS | 0 error console/pageerror selama alur pemeriksaan tambahan; log server hanya request aset localhost | Chrome | Tidak ada request layanan luar |
| Screenshot dan penilaian visual | PASS | artifacts/terminal-ui-desktop-dark.png, terminal-ui-desktop-light.png, terminal-ui-mobile-dark.png (fullPage). Model utama sesi ini tidak mendukung input gambar; penilaian dilakukan subagent berkemampuan lihat gambar plus pengukuran programatik | Penilaian bukan oleh peserta manusia | Desktop gelap/terang dan mobile dinilai terbaca dan tanpa elemen terpotong; dua dugaan awal (header mobile tidak rata, typo "membantuk") gugur setelah pengukuran dan pengecekan sumber |
| Review diff independen | PASS | Subagent reviewer pada `git diff`: tanpa temuan KRITIS; selector test, keamanan, kontras, dan konsistensi DESIGN.md diperiksa bersih | Review bukan bukti bebas cacat | Satu temuan SEDANG dan tiga RENDAH tercatat di bawah |
| Semantik label bukti `[OK]` | NOT_RUN | Reviewer: styles.css:177 memberi prefiks `[OK]` pada semua item bukti, termasuk observasi kebocoran dan keputusan yang "perlu diperbaiki" | Menunggu keputusan pengguna; sesuai huruf brief namun ambigu bagi pembaca awam | Opsi perbaikan disiapkan (penanda netral atau kelas per item); tidak diubah sesi ini |
| Temuan RENDAH reviewer | NOT_RUN | (1) pasangan `--terminal-prompt/--terminal` dan `--terminal-muted/--terminal` belum dijaga browser-visual.js:9 (nilai hari ini lolos); (2) `:has()` styles.css:122 membuat kursor ganda di browser sangat lama saat mengetik; (3) kursor blok di ujung kanan kotak, bukan di titik sisip | Perbaikan di tangan thread implementasi | Tidak memengaruhi test yang berjalan; dicatat sebagai polesan opsional |
| Keputusan tema bawaan | NOT_RUN | Default saat ini light sesuai perilaku lama | Menunggu jawaban pengguna apakah dark menjadi bawaan | Tidak ada perubahan default oleh implementasi maupun QA |
| Studi pengguna awam dan screen reader | NOT_RUN | Tidak ada peserta manusia pada sesi ini | Memerlukan peserta nyata | Tidak mengklaim validasi usability manusia |
| Browser/OS lain | NOT_RUN | Hanya Chrome emulasi di Windows | Lingkungan QA | Firefox/Safari/HP fisik belum diuji pada tampilan baru |

## QA iterasi kedua: tema bawaan gelap dan label bukti [CATAT]

Tanggal: 9 November 2026. Lanjutan QA perombakan terminal atas keputusan
pengguna: tema gelap menjadi bawaan (app.js view.theme 'dark' + data-theme
statis di index.html, anti-FOUC) dan item bukti berlabel [CATAT]. Assertion
tiga file test browser disesuaikan thread implementasi (klik pertama #theme
kini 'light'). Sesi QA menjalankan ulang seluruh verifikasi dan tidak mengubah
simulator/ maupun tests/; rincian di [laporan QA](simulator-qa.md).

| TASK | STATUS (PASS/FAIL/NOT_RUN) | EVIDENCE | BLOCKER | RESULT |
|---|---|---|---|---|
| Regresi engine | PASS | `node --test tests/simulator.test.cjs`: 35/35 lulus | Tidak ada | Aturan misi tetap tidak tersentuh perubahan tema |
| Regresi lab Python | PASS | `py -m unittest discover -s tests -v`: 16/16 lulus | Tidak ada | Lab fondasi tetap bekerja |
| Struktur dokumen | PASS | `py tools/check_docs.py`: 45 Markdown, 27 bab, 69 tautan lokal | Tidak ada | Dokumen sinkron setelah perubahan iterasi |
| Sintaks JS | PASS | `node --check` app.js, engine.js, scenarios.js: exit 0 | Tidak ada | Sumber dapat diparse |
| Browser semua misi | PASS | tests/browser-simulator.js versi baru via `playwright-cli -s=terminal-qa run-code`: 31 alur; klik pertama #theme -> light, reload bertahan light | Chrome | Semua fungsi bekerja pada tema bawaan gelap |
| Gangguan penyimpanan dan mobile | PASS | tests/browser-resilience.js (assert toggle offline ke light lulus) dan tests/browser-mobile.js; console konteks mobile 0 error | Chrome emulasi | Fungsi utuh pada default baru |
| Kontras kedua tema | PASS | tests/browser-visual.js (dark diukur duluan): 16 pasangan 5,76:1–17,0:1; placeholder terminal 8,95:1 terukur terpisah | Bukan audit WCAG menyeluruh | Semua di atas 4,5:1 |
| Layout responsif | PASS | Callback visual 8 misi x 320/390/768/1440 tanpa overflow; mobile menambah 360px dan landscape | Chrome | Tidak ada meluber |
| Tema gelap tanpa FOUC | PASS | Init script + MutationObserver: data-theme 'dark' tercatat sejak t=12 ms tanpa nilai lain; background body rgb(14,23,18) aktif saat domcontentloaded | Chrome | Kunjungan pertama langsung gelap, tanpa flash terang |
| Toggle dua arah dan persistensi | PASS | Klik pertama -> light, reload bertahan; klik kedua -> dark, reload bertahan | Chrome | Preferensi pengguna dihormati kedua arah |
| Label bukti [CATAT] | PASS | Computed ::before item bukti `"[CATAT] "`; innerText tak berubah; "Belum ada bukti" tetap ada; [OK] tetap di feedback/completion; screenshot terminal-ui-evidence-catat.png memperlihatkan keduanya tidak tertukar | Chrome | Ambiguitas [OK] pada observasi kebocoran teratasi |
| Kursor blok dan caret | PASS | Kedip 1,1s saat kosong dengan caret transparan; sembunyi saat mengetik, caret native aktif | Chrome | Tidak ada kursor ganda |
| Reduced-motion | PASS | emulateMedia reduce: animation none, transisi 0s | Chrome | Gerak minimal dihormati |
| Screenshot dan penilaian visual | PASS | terminal-ui-desktop-dark/light.png dan terminal-ui-mobile-dark.png ditimpa (dark = kondisi kunjungan pertama) + terminal-ui-evidence-catat.png; dinilai subagent berkemampuan lihat gambar: ketiganya LAYAK | Penilaian bukan peserta manusia | Header mobile rata; [CATAT]/[OK] terbaca; tanpa elemen terpotong |
| Console dan jaringan | PASS | 0 error console/pageerror; log server hanya aset localhost | Chrome | Tidak ada request luar |
| Review diff independen | PASS | Subagent reviewer pada git diff penuh: tanpa KRITIS/regresi; pemulihan preferensi light tersimpan dihormati | Review bukan bukti bebas cacat | 1 SEDANG + beberapa RENDAH tercatat di bawah |
| Label statis #theme (SEDANG) | NOT_RUN | index.html:20 masih "Tampilan gelap" (asumsi bawaan light); arah salah sebelum JS dan pada jalur gagal-muat | Perbaikan di tangan thread implementasi | Satu kata menjadi "Tampilan terang" |
| Fallback tema app.js:55 (RENDAH) | NOT_RUN | Field theme hilang/rusak jatuh ke 'light', tak konsisten dengan bawaan 'dark'; jalur nyaris tak tercapai | Perbaikan di tangan thread implementasi | Disarankan membalik arah fallback |
| Focus ring prompt (RENDAH, kosmetik) | NOT_RUN | Saat input fokus, outline menyela jarak `$` sehingga terbaca `$Contoh: pwd` | Perbaikan di tangan thread implementasi | Focus indicator dipertahankan, jarak perlu dirapikan |
| Cakupan assertion kontras dan :has() (RENDAH) | NOT_RUN | Pasangan --terminal-prompt/--terminal dan --terminal-muted/--terminal belum dijaga test (lolos hari ini); :has() menyebabkan kursor ganda di browser lama | Perbaikan di tangan thread implementasi | Polesan opsional, tanpa kegagalan test |
| Studi pengguna awam dan screen reader | NOT_RUN | Tidak ada peserta manusia pada sesi ini | Memerlukan peserta nyata | Tidak mengklaim validasi usability |
| Browser/OS lain | NOT_RUN | Hanya Chrome emulasi di Windows | Lingkungan QA | Firefox/Safari/HP fisik belum diuji; [CATAT] pada 390px terverifikasi programatik saja |

## Penyederhanaan materi dan teks simulator

Tanggal: 12 sampai 13 November 2026. Pemilik menilai susunan materi dan bahasanya
terlalu membingungkan. Seluruh kursus ditulis ulang mengikuti
[panduan gaya](../panduan-gaya.md) dan [rancangan](rancangan-materi.md), lalu
tiap bab ditinjau penulis kedua terhadap versi `7996351`. Baris pertama mencatat
rilis tampilan terminal yang belum tercatat.

| TASK | STATUS (PASS/FAIL/NOT_RUN) | EVIDENCE | BLOCKER | RESULT |
|---|---|---|---|---|
| Rilis tampilan terminal (12 November) | PASS | `git push origin main` d6286e2..7996351; build GitHub Pages `built`; enam file `simulator/` di halaman publik ber-hash sama dengan commit | Halaman publik tidak dibuka di browser pada sesi itu | Tampilan terminal tayang |
| Panduan gaya dan rancangan | PASS | `docs/panduan-gaya.md`: 14 aturan, templat bab, daftar periksa; `docs/ai/rancangan-materi.md`: enam tahap, rantai prasyarat, catatan per bab | Penilaian mudah dipahami berasal dari penulis dan coordinator | Pegangan penulisan ulang; `AGENTS.md` menunjuk ke sana |
| Penulisan ulang pra-bab, 27 bab, README, lima lampiran, panduan lab | PASS | Pembanding mekanis terhadap `7996351` pada 37 file: blok kode, kode sebaris, tautan, delapan judul wajib. FAIL hanya README (catatan pemelihara pindah ke `docs/pemeliharaan.md`, 13 dari 13 butir ada) dan kamus (rasio kata) | Pembanding tidak menilai kebenaran klaim | Perintah, kode, dan tautan lama utuh |
| Tinjauan kebenaran semua bab | PASS | Penulis kedua membandingkan tiap bab dengan versi lama dan sumber resmi; lebih dari 300 titik diperbaiki; klaim keliru atau terlalu mutlak yang muncul saat penulisan ulang dibuang; syarat yang hilang dipulihkan | Review penulis, bukan uji peserta | Pra-bab dan Bab 00 sampai 26 ditinjau |
| Kamus | PASS | 525 entri dan 166 alias; inventaris: 525 dari 525 istilah tebal tertampung | Coordinator hanya membaca 46 entri | Tiap istilah tebal punya entri atau alias |
| Teks dan polesan simulator | PASS | `node --test tests/simulator.test.cjs` 35 lulus; `tests/browser-simulator.js` 31 alur; `tests/browser-visual.js` 20 pasangan kontras 5,76 sampai 17,01:1; `tests/browser-resilience.js` dan `tests/browser-mobile.js` lulus; screenshot di `artifacts/teks-sim-lanjutan/` | Chrome dengan emulasi ponsel | Sapaan kamu; jarak fokus prompt, kelas `typing` pengganti `:has()`, dan fallback tema beres |
| Pemeriksaan akhir | PASS | `py tools/build_book.py`: 65.165 kata; `py tools/check_docs.py`: PASS, 48 Markdown, 27 bab, 1654 tautan lokal, buku sinkron; `py -m unittest discover -s tests`: 16 OK; `node --test tests/simulator.test.cjs`: 35 lulus | Tidak ada | Buku gabungan sinkron dengan sumber |
| Jalur Linux/macOS, alat luar, lab daring | NOT_RUN | Bash Bab 04, Clang/AddressSanitizer Bab 19, Nmap, Wireshark, PortSwigger/Burp, dan sambungan Bandit tidak dijalankan | Lingkungan Windows tanpa alat itu | Perintahnya dipertahankan sama persis dari versi lama |
| Uji pembaca manusia, HP fisik, Safari/Firefox, screen reader | NOT_RUN | Tidak ada peserta atau perangkat pada sesi ini | Memerlukan peserta nyata | Tidak mengklaim validasi usability |
