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
