# Memelihara tutorial

Panduan ini untuk pemelihara materi dan simulator Laundry Aman.
Untuk mulai belajar atau bermain, kembali ke [halaman depan](../README.md).
Jalankan perintah berikut dari root folder tutorial, yaitu folder yang memuat README, bukan dari folder `docs`.

## Periksa sumber dan buku gabungan

Edit sumber di `materi/` dan `lampiran/`.
Buku gabungan dibuat dari sumber tersebut. Setelah menyunting, jalankan pemeriksaan sesuai pekerjaan yang dilakukan.

**Windows PowerShell**

```powershell
py tools/build_book.py
py tools/check_docs.py
py -m unittest discover -s tests -v
node --test tests/simulator.test.cjs
```

**Linux/macOS**

Ganti `py` dengan `python3` untuk tiga perintah Python di atas.
Perintah `node --test tests/simulator.test.cjs` tetap sama.

[Catatan verifikasi](ai/task-log.md) membedakan contoh yang telah dijalankan dari latihan VM/platform luar yang belum diuji pada lingkungan penulis.
Rujukan diperiksa pada 6 November 2026. Nama menu dan ketersediaan platform dapat berubah.

## Periksa simulator melalui browser

Gunakan bagian ini jika Playwright CLI sudah tersedia.
Nyalakan server lokal dari root tutorial mengikuti [panduan simulator](../simulator/README.md), lalu jalankan:

```powershell
playwright-cli -s=laundry-qa open http://127.0.0.1:8765/simulator/ --browser chrome
$qaScript = Get-Content -Raw -Encoding utf8 tests/browser-simulator.js
playwright-cli -s=laundry-qa run-code $qaScript
playwright-cli -s=laundry-qa close
```

Script `tests/browser-resilience.js` memeriksa penyimpanan, penggunaan offline, keyboard, dan layar kecil pada URL yang sedang dibuka.
Jalankan pada server lokal sesuai [panduan QA](ai/simulator-qa.md).

Gunakan profil tes terpisah.
Suite menghapus hanya kunci progres simulator pada profil tes sebelum berjalan.
Langkah ini tidak wajib bagi pembaca untuk bermain.

Script `tests/browser-mobile.js` memeriksa sentuhan, form, pergantian mode, progres, orientasi layar, dan tautan bacaan pada emulasi HP.
Jalankan melalui Playwright CLI pada URL simulator yang sedang dibuka, dengan folder `artifacts` tersedia.
Emulasi tidak menggantikan pengujian HP fisik.

## Publikasi GitHub Pages

GitHub Pages menyajikan branch `main` dari root folder.
Berkas `.nojekyll` menjaga HTML/CSS/JS tetap statis. `index.html` mengarahkan pengunjung ke simulator.

Setelah mengubah berkas, jalankan pemeriksaan di atas sebelum push ke `main` untuk publikasi yang diminta pemilik.
Ikuti instruksi publikasi pemilik; penyuntingan materi saja tidak menjadi perintah untuk menerbitkan perubahan.
