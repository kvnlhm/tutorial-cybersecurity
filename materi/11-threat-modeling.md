# Bab 11: Memetakan ancaman dan menentukan prioritas

Tahap 3 dari 6: Menjaga dan menguji akses

## Tujuan dan prasyarat

Kamu akan menilai keamanan layanan Laundry Aman sebelum memilih alat.
Hasilnya berupa diagram aliran data, empat skenario risiko, dan satu catatan tugas perbaikan yang dapat diuji.

Bekalmu adalah [aset dan risiko dari Bab 00](00-orientasi.md), [aliran data web dari Bab 07](07-web.md), [akses dari Bab 09](09-identitas.md), serta [cadangan dari Bab 10](10-hardening.md).
Sediakan 2–4 sesi, kertas atau editor teks, serta catatan Bab 09–10.
Pakai rancangan fiktif dan data latihan saja.

## Konsep

Pelanggan melihat status cucian. Kasir memperbarui pesanan. Pemilik membaca laporan.
Sebelum memilih alat, kita perlu tahu apa yang dilindungi dan bagaimana bisa salah.
Kita akan menamai aset, menggambar aliran data, lalu menyusun skenario ancaman.
Setelah itu kamu menilai prioritas dan membuat tiket perbaikan yang bisa diuji ulang.

### Apa yang dilindungi di Laundry Aman?

Laundry Aman perlu menjaga catatan pelanggan dan tetap menerima pesanan.
Aset adalah sesuatu yang perlu dilindungi, seperti data pelanggan atau kemampuan menerima pesanan.

Ancaman adalah kejadian atau pelaku yang dapat merugikan aset.

Kerentanan adalah kelemahan yang memungkinkan kerugian.
Password bersama adalah kelemahan.
Mantan pegawai yang masih masuk adalah skenario ancaman.
Hilangnya catatan transaksi adalah salah satu dampaknya.

Risiko menggabungkan kemungkinan kejadian dan dampaknya dalam konteks tertentu.
Ini melanjutkan pengertian aset, ancaman, dan risiko dari Bab 00.
Bayangkan risiko seperti cuaca buruk untuk toko: kemungkinan hujan dan dampak genangan digabung saat merencanakan atap.

### Bagaimana kita memeriksa rancangan sebelum memilih alat?

Pemilik ingin memeriksa rancangan layanan sebelum pelanggan memakainya.
**Threat modeling** berarti memeriksa rancangan untuk menemukan cara sistem bisa disalahgunakan.
Mulailah dengan fungsi bisnis: pelanggan melihat status cucian, kasir memperbarui pesanan, dan pemilik melihat laporan.
Gambar tempat data masuk, berpindah, dan tersimpan.

Tandai **trust boundary**, batas antara pihak atau komponen dengan tingkat kepercayaan berbeda.
Browser pelanggan dan server memiliki batas kepercayaan.
Server harus memeriksa data dari browser.
Bayangkan meja kasir: uang dari pelanggan melewati batas sebelum masuk laci toko.

Telusuri satu aliran data secara utuh sebelum memakai kerangka kerja.
Pelanggan mengetik nomor nota di browser, data dikirim lewat internet, masuk ke server aplikasi, lalu server meminta data ke database.
Di tiap titik, tanyakan siapa yang dapat menyalahgunakannya, data apa yang terancam, dan bagaimana layanan bisa gagal.

**STRIDE** adalah kerangka pengingat enam jenis ancaman.
Gunakan pertanyaan berikut untuk menelusuri aliran tadi:

- Pemalsuan identitas (*spoofing*): dapatkah orang menyamar sebagai kasir?
- Perubahan tanpa izin (*tampering*): dapatkah orang mengubah harga tanpa izin?
- Penyangkalan tindakan (*repudiation*): bisakah kasir menyangkal perubahan karena bukti pencatatannya tidak memadai?
- Kebocoran informasi (*information disclosure*): dapatkah pelanggan membaca nota orang lain?
- Gangguan ketersediaan layanan (*denial of service*): dapatkah aplikasi dibuat tidak melayani pesanan?
- Kenaikan hak akses (*elevation of privilege*): dapatkah kasir memperoleh hak administrator?

Gunakan pengingat ini untuk menanyai setiap titik aliran data.
Kamu tidak harus menemukan keenam ancaman pada setiap kotak aliran data.
Pendekatan pemodelan ancaman ini dijelaskan lebih lanjut dalam [OWASP Threat Modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html).

### Bagaimana kelemahan dikelola setelah ditemukan?

Pemilik laundry menerima laporan dugaan kelemahan aplikasi kasir.
**Vulnerability management**, atau pengelolaan kerentanan, mencakup menemukan aset, mengidentifikasi kelemahan, memvalidasi temuan, memprioritaskan perbaikan, dan menguji ulang.
Pemindai dapat membantu menemukan kandidat.
Kamu masih perlu memeriksa versi, konfigurasi, dan kondisi yang memungkinkan masalah terjadi.

Port terbuka bisa melayani kebutuhan sah; keterbukaan port saja belum membuktikan kelemahan.
Temuan tanpa bukti dapat membuang waktu pengembang.

Kode **CVE** (*Common Vulnerabilities and Exposures*) adalah pengenal kerentanan publik.

Sistem **CVSS** (*Common Vulnerability Scoring System*) membantu menyatakan tingkat keparahan teknis.
Skor tersebut belum mencakup seluruh dampak pada usaha kamu.
Sebuah layanan yang terekspos internet dan menyimpan transaksi dapat lebih mendesak daripada software bernilai CVSS lebih tinggi yang tidak terpasang.

Catat ketidakpastian.
Jangan memberi probabilitas seperti “93% akan diretas” tanpa metode dan data yang mendukungnya.

### Bagaimana pemilik memilih perbaikan lebih dahulu?

Pemilik laundry perlu membandingkan kebocoran nota dengan kegagalan cadangan.
Untuk latihan, beri nilai kemungkinan dan dampak dari 1 sampai 3: rendah, sedang, lalu tinggi.
Kalikan kedua nilai untuk membantu mengurutkan perhatian.
Skala ini alat diskusi lokal, bukan perhitungan statistik atau skor CVSS.

Jika pemeriksaan pemilik nota terbukti bekerja, tinjau kembali nilai kemungkinan kebocoran lintas pelanggan.
Tulis asumsi dan alasan perubahan; kamu tidak harus menurunkan semua nilai.

**Kontrol** adalah tindakan atau aturan untuk mengurangi risiko, misalnya pemeriksaan pemilik nota di server.
Sesudah kontrol berjalan, catat risiko yang masih tersisa.

**Tiket perbaikan** adalah catatan tugas yang menjelaskan penanggung jawab, perubahan, dan cara memeriksa hasilnya.
Seperti catatan perbaikan mesin laundry, tiket perlu syarat selesai yang bisa diperiksa.
Menyebut fitur saja belum membuktikan bahwa pengguna sah tetap bisa bekerja dan akses tanpa izin ditolak.

### Ringkasan

- Aset, ancaman, kerentanan, dan risiko menjawab pertanyaan berbeda.
- Gambar aliran data dan batas kepercayaan sebelum menilai skor.
- Prioritas mengikuti konteks usaha, bukan hanya angka alat.
- Tiket perbaikan perlu cara uji yang bisa diulang.

### Cek pemahaman

1. Mengapa port terbuka belum otomatis menjadi kerentanan?
2. Apa yang berubah pada skor jika pemeriksaan pemilik sudah terbukti bekerja?
3. Mengapa tiket perbaikan membutuhkan kriteria uji, bukan hanya usulan fitur?

## Praktik

### 1. Gambar aliran data

Gunakan rancangan fiktif berikut:

```text
Pelanggan -> Browser -> HTTPS -> Aplikasi Laundry -> Database pesanan
Kasir    -> Browser -> HTTPS -> Aplikasi Laundry -> Log audit
Pemilik  -> Browser -> HTTPS -> Aplikasi Laundry -> Ekspor laporan
                                                -> Cadangan terpisah
```

Tulis data yang melewati tiap panah.
Contohnya, permintaan status membawa pengenal pesanan dan sesi.
Jawaban seharusnya hanya membawa informasi yang boleh dibaca pengguna itu.
Tandai batas internet ke aplikasi serta batas aplikasi ke database.

### 2. Buat empat skenario

Gunakan kalimat berstruktur: “Aktor melakukan tindakan melalui komponen sehingga aset mengalami dampak.”
Contoh: “Pelanggan mengganti ID pesanan pada permintaan sehingga aplikasi mengirim alamat pelanggan lain.”
Tambahkan akun pegawai lama yang belum dicabut, kegagalan backup, dan perubahan harga tanpa catatan audit.

### 3. Beri penilaian yang dapat diperdebatkan

Pakai skala latihan 1–3 untuk kemungkinan dan dampak, kemudian kalikan.
Skala ini alat diskusi lokal, bukan perhitungan statistik.

| Skenario | Kemungkinan | Dampak | Nilai |
|---|---:|---:|---:|
| Akses pesanan lintas pelanggan | 3 | 3 | 9 |
| Akun pegawai lama masih aktif | 2 | 3 | 6 |
| Cadangan gagal dipulihkan | 2 | 3 | 6 |
| Harga berubah tanpa jejak | 2 | 2 | 4 |

Alasan awal tiap penilaian:

- Akses lintas pelanggan: layanan menerima permintaan internet dan belum memeriksa pemilik pesanan.
- Akun pegawai lama: proses keluar pegawai belum mempunyai penanggung jawab.
- Cadangan gagal dipulihkan: belum ada uji restore.
- Harga berubah tanpa jejak: kasir berbagi akun.

Angka ini sengaja mengacu pada asumsi kasus latihan.
Jika kamu menemukan pemeriksaan pemilik yang bekerja, nilai kemungkinan skenario pertama perlu ditinjau.
Hindari mempertahankan skor hanya karena sudah tercantum dalam tabel.

### 4. Buat tiket perbaikan

Pilih skenario pertama.
Isi pemilik tindakan, perubahan yang diminta, tanggal target latihan, cara pengujian, dan risiko yang tersisa.
Kriteria selesai: Alice dapat membuka pesanannya sendiri dan ditolak saat meminta milik Bob.
Penolakan tercatat tanpa memuat data pribadi Bob.

### 5. Lakukan verifikasi

Jalankan ulang contoh akses melalui langkah Praktik 3 [Bab 09](09-identitas.md) dan cocokkan hasilnya dengan tiket.
Contoh itu menguji keputusan akses, tetapi belum membuat log audit aplikasi.

Log audit adalah catatan tindakan yang membantu pemeriksaan setelah kejadian.
Tandai syarat pencatatan penolakan `NOT_RUN` sampai ada implementasi yang diuji; keluaran terminal saja belum membuktikan syarat itu.

Bila perbaikan hanya menyembunyikan nomor pesanan pada layar, tiket belum memenuhi kriteria server.
Tulis keputusan menerima risiko apabila sebuah kontrol belum dapat diterapkan, beserta pihak yang mempunyai wewenang.

## Hasil yang diharapkan

Kamu mempunyai satu diagram, empat skenario dengan asumsi, serta satu tiket yang dapat diuji.
Orang lain dapat membaca alasan prioritas tanpa harus percaya pada penilaian pribadi kamu.

## Jika macet

Jika diagram terlalu rumit, mulai dari satu tindakan pelanggan.
Jika semua risiko mendapat nilai tertinggi, bedakan data apa yang terpapar, siapa yang dapat menjangkau komponen, dan kontrol yang sudah terbukti.
Jika laporan pemindai menyebut versi rentan, cari **advisory**, yaitu pemberitahuan keamanan dari pembuat software.
Periksa apakah versi, konfigurasi, dan kondisi pada pemberitahuan itu cocok dengan sistem latihan.

## Latihan

Tambahkan fitur unggah bukti pembayaran.
Tulis sumber file, tempat penyimpanan, siapa yang membukanya, dan batas ukuran.
Buat dua skenario penyalahgunaan serta kontrolnya.
Jelaskan risiko tersisa setelah kontrol berjalan.
Satu kontrol jarang menyelesaikan seluruh persoalan bisnis.

<details>
<summary>Pembahasan setelah mencoba: risiko tersisa setelah kontrol</summary>

Kontrol ukuran file membatasi beban penyimpanan, tetapi tidak memeriksa isi berbahaya sendiri.
Pembatasan siapa yang membuka file mengurangi paparan, tetapi akun yang dicuri tetap berisiko.
Catat risiko tersisa agar pemilik tahu apa yang belum selesai.

</details>

## Bukti kelulusan

- [ ] Saya meminta pembaca lain memilih satu risiko dan menantang asumsi saya.
- [ ] Saya merevisi diagram atau penilaian berdasarkan bukti.
- [ ] Saya dapat menghubungkan aset, ancaman, kontrol, dan pengujian dengan kalimat yang dapat dipahami pemilik laundry.

### Lanjut belajar

Jika akses objek masih membingungkan, ulangi [Bab 09](09-identitas.md).
Setelah bukti siap, lanjut ke [Bab 12: pengujian terencana](12-pentest.md).

## Referensi

- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html): pemetaan ancaman.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): pengelolaan risiko dan hasil keamanan.
