# Tutorial Cybersecurity

Repositori materi belajar berbahasa Indonesia untuk pembaca awam hingga spesialis.
Format utama Markdown; contoh lokal memakai Python standard library. Tidak ada
database produksi atau autentikasi layanan. Simulator browser di simulator/
memakai HTML/CSS/JavaScript tanpa dependency; baca DESIGN.md. Versi publik memakai
GitHub Pages dari branch main/root; folder unduhan tetap dapat dimainkan offline.

Pertahankan studi kasus Laundry Aman, definisikan istilah sebelum memakainya,
dan sertakan prasyarat, langkah praktik, hasil, troubleshooting, latihan, serta
indikator kelulusan pada bab. Bedakan materi pengantar dari pendalaman spesialis.
Latihan memakai data sintetis, localhost, atau platform latihan berizin.
Jangan menambah layanan berbayar atau memublikasikan tanpa instruksi pengguna.

Tulis materi dan teks simulator mengikuti docs/panduan-gaya.md: bahasa
sehari-hari, sapaan kamu, templat bab, dan daftar periksanya. Susunan enam tahap
belajar dan catatan per bab ada di docs/ai/rancangan-materi.md. Langkah untuk
pemelihara ada di docs/pemeliharaan.md. Penulisan ulang hanya mengubah bahasa
dan susunan: periksa tiap fakta baru terhadap sumber resmi, dan jangan mengubah
perintah atau blok kode.

Command verifikasi yang telah dijalankan: `py -m unittest discover -s tests -v` dan
`py tools/check_docs.py`. Status eksekusi ada di docs/ai/task-log.md.
Saat mengubah contoh, uji output yang dijanjikan dalam tutorial.

Engine simulator memakai `node --test tests/simulator.test.cjs`. BrowserQA
menggunakan Playwright CLI sesi khusus task. Seluruh perintah terminal simulator
harus virtual; jangan eksekusi input sebagai shell/kode OS. Simpan bukti di
artifacts/ dan task-log; bedakan review teknis dari uji pengguna manusia.
