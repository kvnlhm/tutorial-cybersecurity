# Bab 25: Menjadi spesialis dan melakukan riset mandiri

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

## Tujuan dan prasyarat

Kamu akan memilih satu bidang pendalaman dan membuat rencana riset yang dapat diperiksa orang lain.
Hasilnya mencakup pertanyaan sempit, percobaan berulang, laporan, dan rencana belajar 12 minggu.

Selesaikan fondasi dan proyek kecil bab sebelumnya.
Gunakan [batas izin dan pelaporan Bab 12](12-pentest.md), [penilaian sumber Bab 23](23-intelijen.md), serta [keputusan risiko Bab 24](24-grc.md).
Bekal khusus tiap jalur ada pada bagian Konsep; ulangi yang masih lemah.
Kamu boleh memilih bidang sebelum menguasai seluruh alat.

Gunakan editor untuk perencanaan. Percobaan kode membutuhkan komputer dan lingkungan lokal atau lab berizin dari jalur pilihanmu.
Semua jalur inti tetap gratis; sertifikasi tidak diwajibkan.

## Konsep

Laundry Aman membutuhkan orang yang dapat menyelesaikan masalah baru, lalu menjelaskan hasilnya kepada rekan kerja.
Kamu akan memilih satu jenis masalah untuk didalami tanpa meninggalkan bekal dasar.
Kita akan membuat dugaan yang bisa diuji, mencoba kasus kecil, lalu mencari bukti yang mendukung atau membantahnya.
Rekan lain akan mengulang hasilmu sebelum kamu menganggap risetnya selesai.

### Pilih masalah yang akan kamu tangani lebih dalam

Saat aplikasi toko menolak masukan yang sah, kamu mungkin ingin memahami kode pemeriksanya lebih jauh.
**Spesialisasi** adalah pendalaman satu bidang, seperti petugas yang menguasai perawatan mesin tertentu sambil memahami alur kerja toko.
Bidang keamanan terlalu luas untuk dikuasai dengan kedalaman sama oleh satu orang.
Bangun fondasi lebar, pilih satu bidang utama, lalu bekerja sama dengan spesialis lain sambil memperluas kemampuan.

Keahlian tampak saat kamu menangani kasus baru, menjelaskan keterbatasan, dan memperbaiki kesalahan dengan bukti.
Menghafal jawaban lab membantu sedikit; kamu perlu menguji alasan suatu hasil terjadi.
Istilah “level dewa” pada tujuan awal buku menunjukkan arah kemampuan, tanpa jaminan waktu atau gelar otomatis setelah membaca.

### Cocokkan jalur dengan bekal yang sudah kamu buktikan

Pemilik Laundry Aman meminta perbaikan akses pesanan, sementara rekan lain meninjau log dan layanan cloud.
Pilih satu hasil kerja yang ingin kamu kuasai.
Istilah pada pilihan berikut melanjutkan bab prasyarat yang ditautkan.

- **Web/API dan application security**: pendalaman keamanan aplikasi; ulangi [Bab 13](13-web-api.md) untuk otorisasi, logika bisnis, dan race condition.
  Pelajari juga parser dari [Bab 19](19-memory-safety.md). Buktinya berupa temuan yang dapat diulang, patch, dan regression test.
- **Detection engineering**: perancangan dan evaluasi deteksi; ulangi [Bab 15](15-deteksi.md) untuk telemetri, yaitu data pengamatan sistem, dan evaluasi rule.
  Buktinya mencakup ukuran salah alarm dan kasus terlewat.
- **DFIR**, *digital forensics and incident response*: pemeriksaan bukti digital dan respons insiden; ulangi [Bab 16](16-respons-insiden.md) dan [Bab 17](17-forensik.md).
  Latih penyusunan timeline serta pengujian hipotesis bersama pekerjaan deteksi.
- **Reverse engineering**: pemahaman program dari artefaknya; ulangi [Bab 18](18-malware-reverse.md) untuk assembly, debugger, dan format berkas.
  Lanjutkan bekal C dan fuzzing pada [Bab 19](19-memory-safety.md).
- **Vulnerability research**: penyelidikan kelemahan; gunakan bekal program dan biner tadi untuk menjelaskan akar masalah serta membuat reproduksi minimal.

Kelompok jalur berikut berfokus pada lingkungan dan desain:

- **Cloud dan identitas**: pendalaman layanan cloud serta izin; ulangi [Bab 20](20-enterprise.md) dan [Bab 21](21-cloud.md).
  Pelajari IAM, trust, jaringan, kebijakan, dan IaC. Buktinya berupa audit izin serta test akses efektif.
- **Security engineering dan arsitektur**: perancangan perlindungan sistem; ulangi [Bab 11](11-threat-modeling.md) untuk threat modeling.
  Hubungkan desain kontrol dengan operasi dan [risiko Bab 24](24-grc.md). Buktinya berupa perubahan desain yang menurunkan risiko terukur.

Kamu bisa mendalami aplikasi mobile, jaringan wireless, atau perangkat keras dengan lingkungan dan pengetahuan tambahan.
**OT/ICS** adalah teknologi operasional dan sistem kendali industri, misalnya pengendali mesin.
Pada sistem fisik, kegagalan dapat memengaruhi keselamatan manusia.
Latihan harus memakai simulator atau lab pendidikan yang memang dirancang untuk itu.

### Uji satu dugaan sampai penyebabnya terlihat

Aplikasi Laundry Aman membaca label pesanan dengan parser, program pembaca struktur masukan dari Bab 19.
Kamu menduga parser menerima data tambahan yang semestinya ditolak.
**Hipotesis** adalah dugaan yang dapat diuji, seperti dugaan petugas tentang bagian mesin penyebab gangguan.
Tuliskan hasil yang akan membantah dugaanmu sebelum mencoba perbaikan.

**Eksperimen** adalah percobaan dengan kondisi dan masukan tercatat untuk memeriksa dugaan itu.
Seperti menguji mesin memakai beban yang sama, kamu menjaga kondisi agar orang lain dapat mengulang hasil.
Perbandingan ini membantu perencanaan; catatan versi dan data uji tetap diperlukan pada program.

Untuk mengulang pemeriksaan label toko, catat **seed**, nilai awal yang membantu mengulang pembangkitan masukan percobaan.
Bayangkan mencatat titik mulai urutan percobaan. Versi alat dan kondisinya tetap perlu sama agar hasil dapat dibandingkan.

Kamu juga dapat menyimpan **corpus**, kumpulan masukan uji, seperti menyimpan satu paket label untuk diperiksa ulang oleh rekan.
Masukkan contoh normal dan masukan batas agar pemeriksa tidak hanya mengulang kasus yang berhasil.

#### Cukup kenali dulu

- **Root-cause analysis**: penjelasan penyebab dasar hasil yang kamu amati.
- **Walkthrough**: petunjuk langkah penyelesaian; tutup saat menguji kemampuan mengulang sendiri.
- **Tenant**: batas organisasi atau kelompok pengguna dalam layanan bersama.

### Nilai hasil dan bagikan dengan aman

Rekan Laundry Aman perlu memeriksa apakah laporanmu cukup jelas untuk dipakai memperbaiki aplikasi.
Gunakan empat tingkat bukti berikut untuk menilai kemajuan:

| Tingkat | Kondisi yang dapat diperiksa |
|---|---|
| Mengikuti | Mengulang contoh dan menjelaskan tiap langkah |
| Menerapkan | Menyelesaikan varian tanpa petunjuk rinci |
| Menganalisis | Memilih hipotesis, mencari bukti pembantah, menjelaskan akar masalah |
| Menghasilkan | Membuat perbaikan atau pengetahuan baru yang direview pihak lain |

**Review sejawat** adalah pemeriksaan hasil oleh rekan yang dapat menilai dan mencoba pekerjaanmu.
Seperti pemeriksaan nota oleh petugas kedua, review membantu menemukan bagian yang terlewat.
Perbaiki laporan ketika rekan menemukan kelemahannya.

Jika riset berizin menemukan masalah produk nyata, gunakan **coordinated vulnerability disclosure**, pelaporan kelemahan dengan koordinasi pemilik produk.
Seperti melaporkan kerusakan kepada penanggung jawab sebelum mengumumkannya, kamu mengikuti saluran dan aturan publikasi yang berlaku.
Temuan bukan izin untuk memperluas akses. Langkah batas izin ada pada Praktik.

Sertifikasi dapat membantu kebutuhan kerja tertentu, tetapi tidak diwajibkan dalam jalur gratis buku ini.
Jika kelak mempertimbangkannya, periksa silabus, biaya, aturan pembaruan, dan relevansi pekerjaan.
Jumlah badge atau peringkat CTF saja belum mengukur kemampuan menangani kasus baru.

### Ringkasan

- Pilih satu bidang utama dan ulangi bekal yang belum kuat.
- Uji pertanyaan sempit dengan masukan serta kondisi yang dapat diulang.
- Cari bukti pembantah dan jelaskan akar masalah sebelum memperbaiki.
- Gunakan review sejawat dan batas izin saat menilai serta membagikan hasil.

### Cek pemahaman

1. Mengapa menyimpan masukan dan versi membantu rekan mengulang percobaan?
2. Bukti apa yang membedakan mengikuti solusi dari menganalisis penyebab?
3. Mengapa temuan pada produk nyata tidak memberi izin memperluas akses?

## Praktik

### 1. Pilih pertanyaan dan siapkan catatan

Di editor, tulis satu pertanyaan riset sempit.
Contohnya: “Apakah parser label tetap menolak input tambahan setelah nama?”
Pertanyaan yang dapat diuji lebih berguna daripada “pelajari semua fuzzing”.
Catat jalur, bab bekal, serta lingkungan lokal atau lab berizin yang kamu gunakan.

### 2. Kerjakan empat sesi riset

Di lingkungan pilihanmu, gunakan siklus berikut. Tiap sesi harus menghasilkan catatan yang dapat diperiksa.

1. **Sesi pertama, memahami:** baca sumber dan dokumentasi format. Gambar aliran input ke keputusan. Tuliskan kontrak fungsi dan tiga asumsi yang mungkin salah.
2. **Sesi kedua, membuat eksperimen:** tulis input normal serta input batas. Tetapkan seed atau simpan corpus agar orang lain bisa mengulang. Catat versi lingkungan.
3. **Sesi ketiga, menjelaskan:** pilih satu hasil mengejutkan. Kurangi input sampai bagian pemicunya terlihat. Hubungkan dengan satu cabang kode atau asumsi format.
4. **Sesi keempat, memperbaiki dan meninjau:** buat perubahan terkecil yang menutup penyebab. Ulangi test normal dan gagal. Minta orang lain mengikuti catatan tanpa petunjuk tambahan.

Contoh hasil riset kecil: parser menerima nama tiga huruf walaupun ada data tambahan setelahnya.
Peneliti menemukan bahwa kode hanya mengambil `data[1:4]` dan tidak memeriksa panjang total.
Perbaikan memeriksa apakah jumlah byte tepat sama dengan panjang yang dinyatakan.
Regression test memakai input valid, input kurang, dan input berlebih.
Kasus lokal ini melatih riset meskipun belum menyangkut bug produk nyata.

### 3. Ulangi dengan perubahan kasus

Untuk web/API, buka lab PortSwigger melalui Referensi dan buat catatan konsep tanpa menyalin solusi.
Setelah menyelesaikan satu topik dengan bantuan, ulangi beberapa hari kemudian tanpa membuka walkthrough.
Coba varian dengan peran lain, objek lain, metode lain, atau batas tenant.
Uraikan mengapa kontrol seharusnya berada pada server.

Untuk sistem dan biner, pwn.college menyediakan jalur latihan bertahap.
Ikuti aturan publikasi platform; simpan rincian solusi secara pribadi jika pengelola melarang penyebaran.
Catatan publik boleh membahas konsep, kegagalan pemahaman, dan program contoh milik sendiri.
Jika belum menjalankan jalur pilihan, catat `NOT_RUN` beserta bekal atau alat yang masih dibutuhkan.

### 4. Siapkan hasil untuk pemeriksaan

Bangun portofolio dengan dua jenis hasil:

- Hasil teknis: reproduksi, patch, data uji, atau rule deteksi.
- Komunikasi: ringkasan dampak dan langkah perbaikan untuk orang di luar spesialisasi.

Samarkan identitas. Jangan menyertakan kredensial atau data pihak lain.
Untuk kelemahan produk nyata dalam lingkup izin, periksa kebijakan pemilik, saluran laporan, batas pengujian, dan aturan publikasi sebelum bertindak.
Laporkan reproduksi minimal serta dampak yang terbukti. Hentikan pengumpulan saat bukti cukup.
Koordinasikan jadwal komunikasi dan perbaikan melalui saluran yang ditetapkan.
Buku ini tidak memberi tenggat universal untuk semua vendor.

## Hasil yang diharapkan

Kamu mempunyai satu fokus, daftar prasyarat, pertanyaan riset, eksperimen berulang, dan rencana review.
Kamu dapat menjelaskan satu hal yang terbukti dan satu hal yang belum diketahui.
Jam latihan membantu perencanaan; bukti kemampuan berasal dari hasil yang dapat diperiksa.

## Jika macet

- Berpindah alat setiap hari: pertahankan satu pertanyaan selama beberapa sesi sampai memperoleh hasil yang dapat diuji.
- Selalu membutuhkan walkthrough: tulis petunjuk singkat sendiri, tutup solusi, lalu ulangi dengan jeda.
- Bug sulit direproduksi: kecilkan input, catat versi serta kondisi awal, dan bedakan hasil deterministik dari efek waktu atau lingkungan.

## Latihan

Susun rencana 12 minggu untuk satu jalur: tiga proyek kecil, satu proyek gabungan, dan dua review sejawat.
Tetapkan hasil per minggu, seperti reproduksi atau laporan yang dapat diulang.
Jumlah video yang ditonton belum menunjukkan hasil itu.
Sisakan waktu untuk mengulang fondasi yang gagal saat praktik.

## Bukti kelulusan

- [ ] Saya menyerahkan laporan riset yang dapat diulang.
- [ ] Saya menyertakan perbaikan atau eksperimen pembantah beserta bukti hasilnya.
- [ ] Saya menyimpan catatan review dan memperbaiki laporan setelah rekan menemukan kelemahannya.

### Lanjut belajar

Kembali ke [Bab 24](24-grc.md) untuk menghubungkan hasil teknis dengan kebutuhan pemilik toko.
Jika percobaan belum dapat diulang, kembali ke bab bekal jalurmu dan periksa masukan serta kondisi awalnya.
Lanjut ke [Bab 26: proyek akhir](26-capstone.md) untuk menggabungkan beberapa kemampuan sebelum mendalami jalur pilihan.

## Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security).
- [pwn.college dan aturan pembelajarannya](https://pwn.college/).
- [CERT/CC: Vulnerability Disclosure Guidance](https://www.kb.cert.org/vuls/guidance/).
