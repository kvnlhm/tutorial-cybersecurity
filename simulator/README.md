# Memainkan simulasi Laundry Aman

Anda berlatih menjadi petugas keamanan sebuah usaha laundry fiktif. Delapan
misi meminta Anda melakukan tindakan, melihat hasil, lalu menjelaskan keputusan.
Semua file, email, pengguna, koneksi, dan log di dalam simulasi adalah data buatan.
Tidak ada scan, pengiriman email, atau perintah yang dijalankan pada komputer Anda.

## Buka tanpa instalasi

1. Jika file masih berbentuk ZIP, klik kanan ZIP dan pilih **Extract All / Ekstrak semua**.
2. Buka folder hasil ekstraksi, lalu folder `simulator`.
3. Klik dua kali `index.html`. Jika terbuka sebagai teks, klik kanan dan pilih
   **Open with / Buka dengan**, lalu Chrome, Edge, Firefox, atau browser lain.
4. Pilih **Belajar dengan petunjuk**. Pada misi pertama, baca tugas, ketik `pwd`
   ke kotak perintah, lalu tekan Enter. Baca lokasi yang muncul.
5. Ketik `ls` untuk melihat isi folder. Pada kasus belajar pertama, ketik
   `cd catatan` untuk masuk ke folder catatan, lalu `ls` untuk melihat isinya.
   Ketik `cat jadwal.txt` untuk membaca file tugas. Jalankan satu perintah setiap
   kali, dengan menekan Enter. Perintah yang belum dikenali mendapat penjelasan.

Jangan mengetik perintah simulator ke address bar browser. Address bar berada di
bagian paling atas, biasanya menampilkan alamat file `file:///.../index.html`.
Kotak perintah latihan berada **di dalam halaman**, dengan label yang terlihat.
Pada layar kecil, buka **Pilih misi dan mode** untuk melihat daftar misi serta
pilihan belajar/ujian. Mode belajar sudah dipilih saat pertama kali membuka.

## Delapan meja praktik

| Misi | Tindakan | Bukti yang diperiksa |
|---|---|---|
| Terminal dan berkas | Baca lokasi, daftar, lalu isi berkas virtual | Perintah observasi dan target yang benar dibaca |
| Pesan mencurigakan | Periksa pengirim/tujuan, klasifikasikan dan beri alasan | Dua pesan dinilai berdasarkan bukti, bukan sekadar rasa takut |
| Aturan jaringan | Izinkan/tolak aliran, jalankan uji | Kebutuhan kerja tetap berjalan dan akses yang salah tertutup |
| Hak membaca nota | Reproduksi kebocoran, aktifkan pemeriksaan pemilik | Pemilik diizinkan, orang lain dan tanpa login ditolak |
| Query database | Bandingkan gabungan teks dengan parameter, uji input | Input normal dan nama berapostrof bekerja; input uji tak mengubah instruksi |
| Triase insiden | Periksa event, pilih kesimpulan dan tindakan | Bukti cukup, kesimpulan tidak melebihi yang diketahui |
| Pemulihan cadangan | Pilih sumber, pulihkan salinan, periksa isi | Cadangan sesuai kebutuhan dan hasil pulih diverifikasi |
| Kasus gabungan | Susun rencana dari bukti beberapa kontrol | Keputusan akses, respons, dan pemulihan saling sesuai |

**Belajar** menyediakan tiga petunjuk bertahap. Petunjuk tidak menyelesaikan
tugas secara otomatis. **Ujian kasus berbeda** mengubah data dan beberapa kondisi
kasus serta tidak menyediakan petunjuk. Kedua mode memberi umpan balik; ujian ini
tetap latihan, bukan ujian sertifikasi yang diawasi. Jumlah tindakan dan bantuan
tercatat sehingga hasil tidak disamakan dengan percobaan pertama tanpa bantuan.

Semua misi dapat dibuka supaya pembaca bisa mengulang topik tertentu. Untuk awam,
ikuti nomor urut. Setelah selesai, tulis alasan tindakan, unduh catatan, kerjakan
kasus ujian, lalu praktikkan bab yang ditautkan. Kembalilah setelah 48 jam dan
7 hari tanpa membaca jawaban terlebih dahulu.

## Progres dan catatan

Browser mencoba menyimpan progres pada perangkat yang sama melalui localStorage.
Penyimpanan `file://` berbeda antarbrowser. Mode privat, membersihkan data browser,
atau memindah folder dapat menghilangkan progres. Halaman memberi pesan jika
penyimpanan ditolak dan tetap mengizinkan latihan dalam tab yang sedang terbuka.

Klik **Unduh catatan** untuk menyimpan JSON yang memuat hasil, tindakan, bantuan,
dan refleksi. Buka file itu dengan editor teks. File ini merupakan bukti belajar
untuk dibaca; simulator tidak menyediakan impor progres atau sertifikat.
Jangan menulis credential atau data pribadi dalam refleksi.

**Ulangi misi ini** membuka konfirmasi. Hanya misi dan mode aktif yang diulang;
misi lain tetap ada. Gunakan jika ingin mengukur percobaan baru. Unduh hasil lama
sebelum mengulang.

## Jika tidak berjalan

| Gejala | Langkah |
|---|---|
| Yang terlihat kode HTML di GitHub | Unduh ZIP, ekstrak, buka file lokal |
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

Terminal hanya mengenali beberapa perintah. Mesin query memperagakan input
yang ada dalam kasus, bukan mengimplementasikan SQL penuh. Aturan jaringan dan
identitas merupakan model sederhana. Triase memakai kumpulan bukti kecil yang
disiapkan penulis. Pemulihan membandingkan isi teks, bukan mengukur pemulihan
database produksi. Lulus semua misi menunjukkan kemampuan pada kasus-kasus ini;
gunakan buku, lab kode, dan proyek lanjutan untuk memperluas kemampuan.

Rujukan teknis: [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
menjelaskan keterbatasan penyimpanan file lokal; [Python http.server](https://docs.python.org/3/library/http.server.html)
menjelaskan server file sederhana untuk alternatif lokal.
