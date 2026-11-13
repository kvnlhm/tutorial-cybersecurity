# Bab 24: Risiko, tata kelola, dan keputusan bisnis

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

## Tujuan dan prasyarat

Kamu akan mengubah tiga temuan Laundry Aman menjadi daftar tindakan dengan pemilik, tenggat, dan bukti keberhasilan.
Hasil akhirnya mencakup daftar risiko, target pemulihan, hubungan kontrol dengan bukti, serta memo untuk pemilik toko.

Bekalmu adalah [pemulihan pada Bab 10](10-hardening.md) dan [aset, ancaman, serta kontrol pada Bab 11](11-threat-modeling.md).
Ulangi [respons insiden pada Bab 16](16-respons-insiden.md) dan [akses vendor pada Bab 20](20-enterprise.md).

Gunakan kertas atau editor di komputer maupun HP. Semua kasus dan angka adalah ilustrasi.
Latihan ini tidak memberikan kesimpulan hukum atau sertifikasi kepatuhan.

## Konsep

Pemilik Laundry Aman menerima tiga temuan, tetapi waktu pemeliharaan toko terbatas.
Ia perlu tahu data apa yang terancam dan apakah toko dapat terus beroperasi.
Kita akan menjelaskan dampak, memilih pekerjaan, lalu menentukan siapa yang boleh mengambil keputusan.
Sesudah perbaikan, kita memeriksa bukti sebelum menutup temuan.

### Siapa memutuskan, apa yang dijaga, dan aturan mana yang berlaku?

Pemilik toko menetapkan siapa boleh menyetujui penghentian layanan dan siapa harus memperbaiki aplikasi.
**Governance**, atau tata kelola, menjelaskan siapa yang menetapkan arah dan bertanggung jawab.
Seperti pembagian tanggung jawab membuka toko, tata kelola membuat orang tahu keputusan yang menjadi wewenangnya.

Pemilik lalu menilai kemungkinan transaksi hilang atau pelanggan membaca pesanan orang lain.
**Risk management** adalah pengelolaan ketidakpastian yang dapat merugikan tujuan organisasi.
Seperti menentukan pekerjaan toko yang harus didahulukan, kamu membandingkan skenario kerugian dan memilih penanganannya.

Toko juga mempunyai kewajiban dari kontrak atau regulasi.
**Compliance**, atau kepatuhan, memeriksa kesesuaian terhadap kewajiban yang berlaku.
Bayangkan mencocokkan pekerjaan dengan syarat kontrak: kamu perlu bukti pelaksanaan, bukan hanya janji.

Ketiga bidang ini sering disingkat **GRC**, yaitu tata kelola, pengelolaan risiko, dan kepatuhan.
Pembagian kerja dan pemeriksaan dokumen membantu penilaian. Kamu tetap perlu menguji kontrol teknis dan memeriksa kewajiban yang sesuai konteks.

### Ubah temuan menjadi skenario kerugian

Akun vendor Laundry Aman masih aktif setelah kontraknya berakhir.
Hubungkan aset, ancaman, kelemahan, dan dampak seperti pada Bab 11.
Kalimat “server berisiko tinggi” belum menjelaskan tindakan yang dibutuhkan.
Tulis: “Akun vendor yang masih aktif dapat mengubah konfigurasi server cabang setelah kontraknya berakhir.”

**Risk owner** adalah orang yang berwenang menentukan respons terhadap risiko.
Seperti pemilik toko yang menyetujui jadwal tutup, ia mempertimbangkan dampak bisnis.
Analis menyediakan bukti dan pilihan; analis tidak menerima seluruh risiko bisnis atas nama pemilik.

Pemilik dapat memilih respons berikut:

- Mengurangi risiko melalui kontrol.
- Menghindari kegiatan yang menimbulkan risiko.
- Berbagi sebagian konsekuensi melalui perjanjian.
- Menerima risiko dengan alasan dan masa tinjau.

Asuransi termasuk cara berbagi sebagian konsekuensi, tetapi tidak menggantikan kontrol teknis.

### Tentukan bukti dan batas perbaikan

Laundry Aman mempunyai backup, tetapi petugas belum pernah mencoba pemulihannya.
**Risk register** adalah daftar risiko beserta pemilik dan tindak lanjut, seperti buku pekerjaan yang belum ditutup.
Kamu mencatat ukuran keberhasilan agar status selesai mempunyai dasar pemeriksaan.

**Residual risk** adalah risiko yang tersisa setelah kontrol diterapkan.
Seperti pakaian yang masih harus diperiksa setelah pencucian, kamu meninjau bagian masalah yang belum teratasi.
Backup mengurangi dampak kehilangan data jika pemulihan berhasil. Backup belum mencegah kebocoran salinan data.

Toko juga membutuhkan **evidence matrix**, hubungan pernyataan kontrol dengan bukti pemeriksaannya.
Seperti daftar serah terima yang menunjuk nota, matriks ini menunjukkan bukti untuk setiap klaim.
Kebijakan tertulis dan hasil uji menjawab pertanyaan yang berbeda.

#### Cukup kenali dulu

- **NIST CSF 2.0**: kerangka hasil keamanan untuk memeriksa cakupan kerja sesuai ukuran organisasi.
- **Skala ordinal**: angka yang menunjukkan urutan tingkat; perkaliannya dalam latihan belum menghitung kerugian secara presisi.

Enam fungsi NIST CSF 2.0 adalah Govern, Identify, Protect, Detect, Respond, dan Recover.
Artinya mencakup tata kelola, pengenalan aset dan risiko, perlindungan, deteksi, respons, serta pemulihan.
Pilih tindakan sesuai kebutuhan toko. Menempelkan nama kerangka pada dokumen belum membuktikan pelaksanaannya.

### Ringkasan

- Tulis risiko sebagai skenario yang menghubungkan aset, kelemahan, ancaman, dan dampak.
- Pemilik risiko memilih respons berdasarkan bukti dan kebutuhan bisnis.
- Tentukan bukti penutupan serta risiko yang masih tersisa.
- Periksa kewajiban yang berlaku sebelum menyimpulkan kepatuhan.

### Cek pemahaman

1. Mengapa analis perlu mencatat siapa yang menerima risiko saat perbaikan ditunda?
2. Mengapa status backup sukses belum membuktikan toko dapat memulihkan transaksi?
3. Bagian risiko apa yang masih tersisa ketika backup dapat dipulihkan tetapi salinannya bocor?

## Praktik

### 1. Catat tiga masalah toko

Di kertas atau editor, buat risk register untuk tiga masalah fiktif berikut.
Gunakan tabel sebagai fakta awal; jangan menambahkan bukti yang belum kamu periksa.

| ID | Fakta awal | Dampak yang masuk akal |
|---|---|---|
| R1 | Akun vendor lama masih aktif dan memiliki hak admin cabang | Perubahan konfigurasi tanpa kebutuhan sah |
| R2 | Backup berjalan harian, pemulihan belum pernah diuji | Toko mungkin gagal memulihkan transaksi saat dibutuhkan |
| R3 | API mengembalikan pesanan pelanggan lain pada uji lokal | Data transaksi dapat dibaca lintas pelanggan |

### 2. Tentukan prioritas dan bukti penutupan

Gunakan skala kemungkinan 1–3 dan dampak 1–3. Definisikan arti tiap tingkat sebelum memberi skor.
Kemungkinan 3 berarti jalur penyalahgunaan mudah dijangkau dalam konteks kasus.
Dampak 3 berarti gangguan pada operasi utama atau pembukaan data pelanggan secara berarti.
Skor perkalian membantu mengurutkan pekerjaan; angka ordinal ini bukan perhitungan kerugian yang presisi.

Isi tiap risiko dengan deskripsi, bukti, aset, pemilik, skor awal, tindakan, tenggat, ukuran keberhasilan, dan risiko sisa.
Periksa apakah orang lain tahu siapa harus melakukan apa.
Blok berikut adalah contoh catatan R2 untuk dibandingkan, bukan perintah:

```text
Risiko: backup transaksi mungkin tidak dapat dipulihkan saat mesin rusak.
Bukti: catatan job sukses tersedia; tidak ada berita acara restore.
Pemilik: penanggung jawab operasional Laundry Aman.
Skor latihan: kemungkinan 2, dampak 3, prioritas 6.
Tindakan: uji restore salinan sintetis ke lingkungan terpisah minggu ini.
Ukuran berhasil: jumlah transaksi sesuai, aplikasi dapat membaca hasil,
dan waktu pemulihan memenuhi kebutuhan yang disepakati.
Risiko sisa: kehilangan transaksi setelah jadwal backup terakhir.
```

### 3. Cocokkan rencana dengan kebutuhan pemulihan

Di catatan R2, tentukan dua target pemulihan dari Bab 10.
**RPO** adalah batas kehilangan data berdasarkan rentang waktu yang masih diterima.
Bayangkan pemilik menentukan seberapa jauh catatan transaksi boleh mundur.
Jika batasnya satu jam transaksi, backup harian saja tidak memenuhi rancangan RPO itu.

**RTO** adalah waktu pemulihan yang ditargetkan, seperti tenggat membuka kembali kasir setelah gangguan.
Jika toko perlu kembali melayani dalam dua jam, pengunduhan backup selama enam jam bertentangan dengan target RTO.
Target waktu perlu dibandingkan dengan hasil pengukuran pemulihan.

Bandingkan dua rencana latihan dengan fakta R2:

| Rencana | Pemakaian enam jam kerja |
|---|---|
| A | Menguji restore dan memperbaiki prosedurnya |
| B | Merapikan tampilan dashboard monitoring |

Jelaskan manfaat A memakai kebutuhan pemulihan toko.
Keputusan dapat berubah jika dashboard ternyata menyembunyikan peringatan penting.
Catat asumsi supaya pemilik dapat meninjau keputusan ketika bukti berubah.

### 4. Hubungkan kontrol dengan bukti

Pada catatan yang sama, susun evidence matrix berikut.
Periksa apakah bukti yang kamu minta menguji pelaksanaan kontrol.

| Pernyataan kontrol | Bukti yang dicari | Bukti yang belum cukup |
|---|---|---|
| Akses vendor berakhir setelah kontrak | Persetujuan dan hasil pemeriksaan akun | Dokumen kebijakan saja |
| Backup dapat dipulihkan | Catatan restore beserta pemeriksaan isi | Status job backup hijau |
| Ekspor dibatasi per cabang | Test positif/negatif dan konfigurasi aktif | Screenshot tombol tersembunyi |

### 5. Catat batas kewajiban

Untuk kewajiban hukum dan kontrak, catat yurisdiksi, yaitu wilayah hukum yang berlaku.
Tambahkan jenis data, peran organisasi, serta pihak penanggung jawab.
Periksa sumber resmi yang berlaku ketika menghadapi kasus nyata dan libatkan pemilik kewajiban.
Jangan menyimpulkan tenggat pelaporan dari ingatan atau memakai satu aturan untuk seluruh negara.

## Hasil yang diharapkan

Kamu mempunyai tiga risiko yang dapat ditindaklanjuti, pemilik keputusan, dan bukti untuk menutup tiap temuan.
Laporan satu halaman untuk pemilik toko menjelaskan dampak dan pilihan.
Lampiran teknis menjelaskan cara pemeriksaannya, termasuk akses yang harus tetap diizinkan dan akses yang harus ditolak.

Target pemulihan dalam catatan masih berupa kebutuhan. Catat hasil uji terpisah jika kamu sudah menjalankannya.

## Jika macet

- Semua risiko mendapat skor tertinggi: perbaiki definisi skala dan bandingkan keterjangkauan serta dampak pada proses utama.
- Pemilik menunda perbaikan: catat alasan, kontrol sementara, siapa menerima risiko, dan tanggal tinjau.
- Auditor meminta bukti: berikan artefak yang relevan dan disamarkan, tanpa mengirim data pelanggan yang tidak dibutuhkan.

## Latihan

Tulis memo maksimal 200 kata yang meminta waktu pemeliharaan untuk memperbaiki R3.
Sertakan dampak penghentian sementara dan cara memeriksa keberhasilan.
Pastikan akses pesanan sendiri tetap bekerja dan akses pesanan orang lain ditolak.

Minta teman yang tidak belajar keamanan menjelaskan kembali keputusan yang kamu minta.
Catat bagian yang membuatnya ragu, lalu perbaiki memo.

## Bukti kelulusan

- [ ] Saya menyerahkan risk register berisi tiga risiko dengan tindakan dan penanggung jawab.
- [ ] Saya menetapkan dua target pemulihan dan menyertakan evidence matrix.
- [ ] Saya menyerahkan memo bisnis dengan syarat keberhasilan yang dapat diperiksa.
- [ ] Pembaca dapat menjelaskan tindakan yang diminta tanpa menebak istilah teknis.

### Lanjut belajar

Kembali ke [Bab 23](23-intelijen.md) jika klaim risiko belum mempunyai sumber yang jelas.
Jika target pemulihan masih tertukar, ulangi [Bab 10](10-hardening.md) dan tulis contoh kehilangan data serta waktu henti.
Setelah bukti siap, lanjut ke [Bab 25: memilih pendalaman](25-spesialisasi.md).

## Referensi

- [NIST Cybersecurity Framework dan CSF 2.0](https://www.nist.gov/cyberframework).
- [NIST CSF Quick Start Guides](https://www.nist.gov/cyberframework/quick-start-guides).
