# Template bukti belajar

Salin template yang kamu butuhkan ke folder `hasil-belajar/`. Folder tersebut diabaikan Git secara default.
Pilih dan samarkan bukti sebelum memublikasikannya. Pakai data buatan Laundry Aman untuk contoh latihan.

## Catatan eksperimen

Isi satu catatan untuk satu pertanyaan. Pisahkan prediksi sebelum percobaan dari hasil yang benar-benar kamu lihat.
Misalnya, tulis pertanyaan “Apakah Bob ditolak saat membaca nota Alice?” lalu catat hasil program setelah dijalankan.

```text
Judul dan tanggal:
Pertanyaan yang ingin dijawab:
Lingkungan (OS, versi alat, data buatan):
Prasyarat:
Prediksi sebelum menjalankan:
Langkah dan perintah:
Output yang diamati:
Penjelasan hasil:
Hipotesis alternatif:
Kesalahan dan cara memperbaiki:
Langkah berikutnya:
Sumber:
Status: PASS / FAIL / NOT_RUN
```

Pakai PASS bila hasil memenuhi harapan, FAIL bila tidak sesuai, dan NOT_RUN bila belum dijalankan.
Sertakan bukti hasilnya. Untuk NOT_RUN, tulis alasan pada penjelasan hasil.

## Scope dan rules of engagement

**Scope** berarti batas pekerjaan yang diizinkan, seperti hanya menguji aplikasi lab pada laptopmu.

**Rules of engagement** berarti kesepakatan cara melakukan pengujian dalam batas tersebut.
Isi pemberi izin, target, larangan, dan kondisi berhenti sebelum mencoba perintah.

```text
Pemilik pemberi izin dan bukti izin:
Tujuan:
Target yang diizinkan (alamat, aplikasi, akun test):
Target di luar scope:
Waktu pengujian dan zona waktu:
Teknik yang diizinkan:
Batas laju dan tindakan yang dilarang:
Data dummy yang boleh dibaca/diubah:
Kondisi berhenti:
Kontak bila ada gangguan:
Penyimpanan bukti, masa retensi, dan penghapusan:
Pemulihan/cleanup:
Penyerahan laporan dan jadwal retest:
```

Contoh scope lab: hanya `127.0.0.1:8000`, file dummy di direktori lab, selama satu sesi 30 menit.
Data dummy berarti data buatan untuk latihan.
Pemilik laptop menyetujui pembacaan file buatan dan koneksi manual; pemindaian jaringan lokal tidak diizinkan.

Berhenti jika layanan lain terganggu atau muncul data pribadi.
Alamat privat kantor tidak otomatis masuk scope karena dapat dijangkau.

## Laporan temuan

Isi langkah minimum yang memungkinkan orang lain mengulang temuan. Pisahkan dampak terbukti dari dugaan yang masih memerlukan bukti.

```text
ID dan judul:
Ringkasan satu kalimat:
Target/versi dan batas scope:
Prasyarat (peran, kondisi, konfigurasi):
Langkah reproduksi minimum:
Hasil yang semestinya:
Hasil yang diamati:
Bukti tersamarkan:
Dampak yang terbukti:
Dampak yang masih hipotesis:
Prioritas dan alasan bisnis:
Akar masalah:
Rekomendasi:
Pemilik perbaikan dan target tanggal:
Hasil retest, tanggal, dan regresi:
Keterbatasan pengujian:
```

Contoh: **LA-001: Bob bisa membaca nota Alice.** Pada fungsi lab tanpa pemeriksaan pemilik, Bob meminta nota 101 dan menerima status milik Alice.
Dampak terbukti adalah kebocoran satu nota buatan.

Perbaikan: verifikasi identitas dari sesi server, lalu periksa kepemilikan objek.
Uji ulang harus menunjukkan Bob ditolak dan Alice tetap berhasil.
Jangan menulis “seluruh database bocor” jika bukti hanya menunjukkan satu objek.

## Timeline insiden

**Timeline** berarti urutan kejadian menurut waktu, seperti menyusun kembali aktivitas Laundry Aman dari log.
Isi fakta sesuai sumber, lalu tempatkan dugaan pada kolom Hipotesis. Keyakinan menyatakan seberapa kuat dukungan buktinya.

Contoh berikut mempertahankan dua kejadian login. Keterangan perangkat pada kolom bukti tambahan belum tersedia; tulis kebutuhan itu sebagai pertanyaan lanjutan.

| Waktu UTC | Sumber | Fakta yang diamati | Hipotesis | Bukti tambahan | Keyakinan |
|---|---|---|---|---|---|
| 08:02:00 | Log login sintetis | Login Alice gagal dari 198.51.100.8 | Aktivitas otomatis atau pengguna sah | Device, MFA, konteks user | Rendah |
| 08:02:30 | Log yang sama | Operator berhasil dari alamat tersebut | Akun mungkin perlu diperiksa | Tindakan setelah login | Rendah |

Gunakan [Bab 15](../materi/15-deteksi.md) untuk membaca log dan [Bab 16](../materi/16-respons-insiden.md) untuk membedakan fakta dari dugaan.

## Serah terima bukti

Isi sumber dan setiap perpindahan bukti agar penerima dapat mengikuti asalnya.
Misalnya, catat penyalinan log buatan menjadi salinan kerja, waktu penyalinan, petugas, lokasi, serta hash yang dibandingkan.
[Bab 17](../materi/17-forensik.md) menjelaskan cara menjaga salinan tersebut.

```text
ID barang/file:
Deskripsi dan sumber:
Petugas dan waktu UTC:
Metode akuisisi dan batasnya:
Hash SHA-256 sebelum/sesudah penyalinan:
Lokasi asli (akses terbatas):
Lokasi salinan kerja:
Riwayat penyerahan (dari, kepada, waktu, tujuan):
Perubahan yang dilakukan pada salinan kerja:
```

## Register risiko

**Register risiko** adalah daftar risiko beserta penanganannya, seperti daftar kemungkinan kebocoran nota dan orang yang memperbaikinya.
Isi alasan penilaian serta tindakan berikutnya. Gunakan contoh R-01 sebagai pola, lalu ganti dengan kasus latihanmu.

| Risiko | Aset | Skenario | Kontrol saat ini | Dampak | Kemungkinan dan alasan | Tindakan | Pemilik | Tenggat | Risiko tersisa |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Nota pelanggan | Kasir membaca nota lintas cabang | Login tanpa pembatasan cabang | Privasi dan komplain | Sedang; akses objek belum diuji | Tambah cek cabang dan test negatif | Tim aplikasi | Tanggal rencana | Evaluasi setelah retest |

Gunakan tanggal nyata saat mengerjakan. Nilai risiko di template adalah contoh pendidikan, bukan penilaian untuk perusahaan tertentu.
[Bab 24](../materi/24-grc.md) menjelaskan penilaian risiko dan bukti pendukungnya.
