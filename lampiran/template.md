# Template bukti belajar

Salin template ke folder `hasil-belajar/`. Folder tersebut diabaikan Git secara
default; pilih dan samarkan bukti sebelum memublikasikannya.

## Catatan eksperimen

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

## Scope dan rules of engagement

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

Contoh scope lab: hanya `127.0.0.1:8000`, file dummy di direktori lab, selama
satu sesi 30 menit. Pemilik laptop menyetujui baca file dummy dan koneksi manual;
tidak ada scan LAN. Berhenti jika layanan lain terganggu atau muncul data pribadi.
Alamat privat kantor tidak otomatis masuk scope karena dapat dijangkau.

## Laporan temuan

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

Contoh ringkas: **LA-001: Bob bisa membaca nota Alice.** Pada fungsi lab tanpa
cek pemilik, Bob meminta nota 101 dan menerima status milik Alice. Dampak terbukti:
kebocoran satu nota dummy. Perbaikan: verifikasi identitas dari sesi server lalu
periksa kepemilikan objek. Retest: Bob ditolak, Alice tetap berhasil. Jangan
menulis “seluruh database bocor” jika bukti hanya menunjukkan satu objek.

## Timeline insiden

| Waktu UTC | Sumber | Fakta yang diamati | Hipotesis | Bukti tambahan | Keyakinan |
|---|---|---|---|---|---|
| 08:02:00 | Log login sintetis | Login Alice gagal dari 198.51.100.8 | Aktivitas otomatis atau pengguna sah | Device, MFA, konteks user | Rendah |
| 08:02:30 | Log yang sama | Operator berhasil dari alamat tersebut | Akun mungkin perlu diperiksa | Tindakan setelah login | Rendah |

## Serah terima bukti

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

| Risiko | Aset | Skenario | Kontrol saat ini | Dampak | Kemungkinan dan alasan | Tindakan | Pemilik | Tenggat | Risiko tersisa |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Nota pelanggan | Kasir membaca nota lintas cabang | Login tanpa pembatasan cabang | Privasi dan komplain | Sedang; akses objek belum diuji | Tambah cek cabang dan test negatif | Tim aplikasi | Tanggal rencana | Evaluasi setelah retest |

Gunakan tanggal nyata saat mengerjakan. Nilai risiko di template merupakan contoh
pendidikan, bukan asesmen untuk perusahaan tertentu.
