# Memainkan simulasi Laundry Aman

Kamu berlatih menjadi petugas keamanan sebuah usaha laundry fiktif. Delapan
misi meminta kamu melakukan tindakan, melihat hasil, lalu menjelaskan keputusan.
Semua file, pesan, pengguna, koneksi, dan catatan kejadian di dalam simulasi adalah data buatan.
Tindakan misi hanya mengolah data latihan di halaman ini.

## Mainkan dari HP atau komputer

Buka **[simulator Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/)**
di browser. Tidak perlu akun, ZIP, atau instalasi. Internet diperlukan untuk
membuka halaman online. Pada HP, ketuk **Pilih misi dan mode** bila ingin
mengganti latihan. Ketuk kotak perintah, isi `pwd`, lalu ketuk **Jalankan perintah**.
Kamu tidak perlu membuka terminal sistem atau memakai keyboard komputer.

Gunakan posisi tegak atau mendatar yang nyaman. Tautan **Baca bab dan praktik
lanjutannya** membuka materi di GitHub; tombol Kembali pada browser membawamu
kembali ke latihan. Simpan tautan bermain sebagai penanda browser agar mudah dibuka lagi.
Lab Python dan latihan mesin virtual (VM) di buku tetap membutuhkan komputer.

## Buka offline di komputer

1. Jika file masih berbentuk ZIP, klik kanan ZIP dan pilih **Extract All / Ekstrak semua**.
2. Buka folder hasil ekstraksi, lalu folder `simulator`.
3. Klik dua kali `index.html`. Jika terbuka sebagai teks, klik kanan dan pilih
   **Open with / Buka dengan**, lalu Chrome, Edge, Firefox, atau browser lain.
4. Pilih **Belajar dengan petunjuk**. Pada misi pertama, baca tugas, ketik `pwd`
   ke kotak perintah, lalu tekan Enter. Tanda `$` di depan kotak tidak perlu
   diketik. Baca lokasi yang muncul.
5. Ketik `ls` untuk melihat isi folder. Pada kasus belajar pertama, ketik
   `cd catatan` untuk masuk ke folder catatan, lalu `ls` untuk melihat isinya.
   Ketik `cat jadwal.txt` untuk membaca file tugas. Jalankan satu perintah setiap
   kali, dengan menekan Enter. Perintah yang belum dikenali mendapat penjelasan.

Jangan mengetik perintah simulator ke kotak alamat browser di bagian paling atas.
Kotak alamat biasanya menampilkan `file:///.../index.html` saat kamu membuka file lokal.
Kotak perintah latihan berada **di dalam halaman**, dengan label yang terlihat.
Pada layar kecil, buka **Pilih misi dan mode** untuk melihat daftar misi serta
pilihan belajar/ujian. Mode belajar sudah dipilih saat pertama kali membuka.

Hasil perintah muncul pada panel terminal gelap, di atas kotak perintah.
Baca hasilnya untuk memilih langkah berikutnya. Jika belum tahu caranya, ketik
`help` atau buka petunjuk bertahap.

## Delapan meja praktik

| Misi | Tindakan | Bukti yang diperiksa |
|---|---|---|
| Terminal dan berkas | Baca lokasi, daftar, lalu isi berkas virtual | Lokasi dan isi folder diperiksa; file tugas dibaca |
| Pesan mencurigakan | Periksa pengirim dan tujuan, pilih keputusan dan beri alasan | Dua pesan dinilai berdasarkan bukti, bukan sekadar rasa takut |
| Aturan jaringan | Izinkan/tolak aliran, jalankan uji | Kebutuhan kerja tetap berjalan dan akses yang salah tertutup |
| Hak membaca nota | Coba akses nota orang lain, aktifkan pemeriksaan pemilik | Pemilik diizinkan, orang lain dan tanpa login ditolak |
| Pencarian data | Bandingkan gabungan teks dengan parameter, uji masukan | Nama biasa dan nama dengan petik tunggal ditemukan; masukan uji tidak mengubah instruksi |
| Pemeriksaan awal insiden | Periksa kejadian, pilih kesimpulan dan tindakan | Bukti cukup, kesimpulan tidak melebihi yang diketahui |
| Pemulihan cadangan | Pilih sumber, pulihkan salinan, periksa isi | Cadangan sesuai kebutuhan dan hasil pulih diperiksa |
| Kasus gabungan | Susun rencana dari bukti beberapa kontrol | Keputusan akses, respons, dan pemulihan saling sesuai |

Pada misi pencarian data, query berarti permintaan data ke database, tempat aplikasi menyimpan data.
SQL adalah bahasa untuk meminta atau mengubah data.
Parameter mengirim nilai masukan terpisah dari instruksi SQL.
Apostrof adalah tanda petik tunggal, seperti pada nama `O’Neil`.

**Belajar** menyediakan tiga petunjuk bertahap. Petunjuk tidak menyelesaikan
tugas secara otomatis. **Ujian kasus berbeda** mengubah data dan beberapa kondisi
kasus serta tidak menyediakan petunjuk. Kedua mode memberi umpan balik; ujian ini
tetap latihan, bukan ujian sertifikasi yang diawasi. Jumlah tindakan dan bantuan
tercatat sehingga hasil tidak disamakan dengan percobaan pertama tanpa bantuan.

Kamu bisa membuka semua misi untuk mengulang topik tertentu.
Jika baru mulai, ikuti nomor urut. Setelah selesai, tulis alasan tindakan, unduh catatan, kerjakan
kasus ujian, lalu praktikkan bab yang ditautkan. Kembalilah setelah 48 jam dan
7 hari tanpa membaca jawaban terlebih dahulu.

## Progres dan catatan

Browser mencoba menyimpan progres pada perangkat yang sama.
Penyimpanan lokal browser ini disebut localStorage.
Progres versi online, file lokal, browser lain, dan HP/komputer tidak saling
tersinkron. Pakai browser yang sama dan unduh catatan sebagai salinan.
Penyimpanan `file://` berbeda antarbrowser. Mode privat, membersihkan data browser,
atau memindah folder dapat menghilangkan progres. Halaman memberi pesan jika
penyimpanan ditolak dan tetap mengizinkan latihan dalam tab yang sedang terbuka.

Klik **Unduh catatan** untuk menyimpan hasil, tindakan, bantuan, dan refleksi.
Catatan memakai JSON, format teks yang menyusun data menurut nama dan nilainya.
Buka file itu dengan editor teks. File ini adalah bukti belajar untuk dibaca;
simulator tidak menyediakan impor progres atau sertifikat.
Jangan menulis kata sandi, kode login, atau data pribadi dalam refleksi.

**Ulangi misi ini** membuka konfirmasi. Hanya misi dan mode aktif yang diulang;
misi lain tetap ada. Gunakan jika ingin mengukur percobaan baru. Unduh hasil lama
sebelum mengulang.

## Jika tidak berjalan

| Gejala | Langkah |
|---|---|
| Yang terlihat kode HTML di GitHub | Gunakan tautan bermain online di atas, atau unduh ZIP dan buka file lokal |
| Pesan memuat tidak hilang | Pastikan kelima file HTML/CSS/JS ada di folder yang sama dan JavaScript aktif |
| Nama file muncul `index.html.txt` | Aktifkan tampilan ekstensi file dan periksa file asli hasil ekstraksi |
| Progres kembali kosong | Periksa mode belajar/ujian, browser/profil, lokasi file, dan mode privat |
| Tindakan ditolak | Baca umpan balik; periksa kebutuhan kasus dan rincian bukti sebelum mengulang |
| Huruf terlalu kecil | Tekan Ctrl dan + untuk memperbesar; Ctrl dan 0 mengembalikan zoom |
| Memakai keyboard | Tab berpindah kontrol, Enter menjalankan tombol/form, Escape menutup dialog |

Jika browser membatasi file lokal dan Python sudah tersedia, jalankan dari folder
utama tutorial pada PowerShell:

```powershell
py -m http.server 8765 --bind 127.0.0.1
```

Buka `http://127.0.0.1:8765/simulator/`. Biarkan terminal terbuka selama latihan,
lalu hentikan dengan Ctrl+C. Server ini menyajikan folder tutorial; jangan
menjalankannya dari folder pribadi lain. Untuk Linux/macOS ganti `py` dengan
`python3`. Jangan mengubah bind ke `0.0.0.0`. Cara ini opsional, bukan prasyarat
untuk mencoba simulator.

## Batas yang perlu dipahami

Terminal hanya mengenali beberapa perintah virtual.
Simulasi pencarian data hanya mengolah tiga masukan yang tersedia pada kasus. Aturan jaringan dan
identitas merupakan model sederhana. Pemeriksaan awal memakai kumpulan bukti
kecil yang disiapkan penulis. Pemulihan membandingkan isi teks, bukan mengukur
pemulihan penyimpanan data toko sungguhan. Lulus semua misi menunjukkan kemampuan pada
kasus-kasus ini; gunakan buku, lab kode, dan proyek lanjutan untuk memperluas
kemampuan.

Rujukan teknis: [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
menjelaskan keterbatasan penyimpanan file lokal; [Python http.server](https://docs.python.org/3/library/http.server.html)
menjelaskan server file sederhana untuk alternatif lokal.
