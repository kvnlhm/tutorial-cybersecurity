# Bab 22: Membangun perangkat lunak yang bisa dipercaya

Tahap 5 dari 6: Memeriksa program dan lingkungan

## Tujuan dan prasyarat

Kamu akan mengubah temuan keamanan menjadi syarat fitur, test, perubahan kode, serta bukti rilis.
Kemampuan ini membantumu memastikan aplikasi Laundry Aman dibangun dan dirilis secara bertanggung jawab.

Bekal utamamu adalah [Git dari Bab 06](06-pemrograman.md) serta [kriptografi dari Bab 08](08-kriptografi.md).
Pahami juga [otorisasi dari Bab 09](09-identitas.md), [threat modeling dari Bab 11](11-threat-modeling.md), dan [kelemahan web dari Bab 13](13-web-api.md).
Latihan memakai rancangan fitur Laundry Aman serta lab lokal yang tersedia dalam repositori di `labs/access_demo.py`.

## Konsep

Laundry Aman terus memperbarui aplikasi layanannya dengan menambah fitur baru.
Keamanan tidak bisa hanya dipikirkan saat program selesai dibuat.
Keputusan rancangan awal menentukan seberapa tahan aplikasi terhadap serangan.
Alur kerja yang baik menguji keamanan sejak awal dan mencatat rilis teratur.
Kita akan mempelajari siklus aplikasi, rantai pasok kode, dan pengujian keamanan.

### Mengintegrasikan keamanan ke dalam siklus SDLC

Laundry Aman ingin menambah fitur ekspor tanpa membuka data cabang lain.

Kerangka kerja **SDLC**, singkatan dari *Software Development Life Cycle*, mencakup pekerjaan sejak kebutuhan aplikasi sampai pemeliharaannya.
Tim memasukkan keamanan pada tahap desain, implementasi, pengujian, rilis, dan respons terhadap temuan.
Menemukan bug setelah rilis tetap penting, tetapi keputusan awal sering menentukan berapa sulit memperbaikinya.

**Security requirement** adalah syarat keamanan fitur, seperti kasir hanya boleh mengekspor transaksi cabangnya.
Seperti syarat penyerahan pakaian kepada pemiliknya, syarat fitur perlu mempunyai cara pemeriksaan yang jelas.

#### Cukup kenali dulu

- **Rancangan aman**: keputusan arsitektur yang membatasi hak akses sejak awal pembuatan program.
- **Regression test**: pengujian agar perubahan tidak mengembalikan bug atau merusak perilaku lain.

### Mengamankan rantai pasok perangkat lunak

Pengembang Laundry Aman memakai pustaka luar untuk membuat berkas ekspor.
Dependency berarti komponen yang dibutuhkan aplikasi, seperti pustaka pembentuk berkas ekspor.

Build adalah proses membentuk paket aplikasi yang akan dipasang.

Konsep **supply chain perangkat lunak** mencakup kode, dependency, pembuat paket, sistem build, dan jalur distribusi.
Aplikasi dapat menerima risiko dari paket keliru, akun pengelola paket yang diambil alih, atau build yang berubah tanpa review.
Mengetahui asal sebuah berkas membantu penyelidikan, tetapi asal tepercaya tidak membuktikan seluruh kodenya bebas cacat.

#### Cukup kenali dulu

- **Kunci versi**: penetapan versi pustaka; hasil build identik juga memerlukan sumber, lingkungan, serta instruksi build yang sesuai.
- **Pipeline build**: alur otomatis yang menguji dan membangun paket kode; isolasi lingkungannya perlu dirancang.
- **Integritas paket**: verifikasi sidik hash paket untuk memastikan file tidak diubah di perjalanan.

### Memilih alat bantu pengujian keamanan kode

Tim Laundry Aman ingin memeriksa fitur ekspor dan asal komponen pembentuknya.
Pilih alat berdasarkan pertanyaan yang perlu dijawab:

**SAST**, *Static Application Security Testing*, memeriksa pola berisiko pada kode, seperti membaca rancangan mesin sebelum menyalakannya.

**DAST**, *Dynamic Application Security Testing*, memeriksa perilaku aplikasi berjalan, seperti menguji mesin yang sudah menyala.

**SCA**, *Software Composition Analysis*, memeriksa komponen pihak ketiga dan kerentanan yang diketahui, seperti mencocokkan suku cadang dengan pemberitahuan masalah pemasok.

**SBOM**, *Software Bill of Materials*, memuat daftar komponen perangkat lunak, seperti daftar bahan untuk menelusuri isi paket.
Kelengkapannya bergantung pada proses penyusunan daftar itu.

**Provenance** menjelaskan sumber dan proses build asal artefak, yaitu berkas hasil build, seperti catatan asal barang dari pemasok.

Bandingkan fokus kelima pendekatan tersebut pada tabel berikut:

| Istilah | Pertanyaan yang dibantu |
|---|---|
| SAST | Pola berisiko apa yang tampak pada kode? |
| DAST | Perilaku berisiko apa yang tampak ketika aplikasi berjalan? |
| SCA | Komponen pihak ketiga apa yang dipakai dan diketahui bermasalah? |
| SBOM | Apa daftar bahan penyusun perangkat lunak ini? |
| Provenance | Dari sumber dan proses build mana artefak berasal? |

Alat tersebut menjawab pertanyaan berbeda.
Pemindai dependency tidak membuktikan otorisasi pesanan benar.
Signature atau tanda tangan digital dari Bab 08 membantu memverifikasi penerbit atau integritas sesuai mekanismenya.
Tanda tangan tidak menjamin bahwa kode yang ditandatangani aman.

### Ringkasan

- SDLC memasukkan pertimbangan keamanan sejak tahap perancangan hingga rilis dan pemeliharaan.
- Supply chain perangkat lunak mencakup seluruh pustaka dan alur build yang membentuk aplikasi.
- SAST, DAST, SCA, SBOM, dan provenance menjawab aspek pengujian yang saling melengkapi.
- Pengujian izin hak akses di server tidak boleh digantikan oleh pemeriksaan di peramban.

### Cek pemahaman

1. Mengapa pemindai pustaka (SCA) yang menyatakan hijau belum menjamin aplikasi bebas dari celah otorisasi?
2. Mengapa tanda tangan digital pada file rilis belum membuktikan bahwa kode di dalamnya bebas dari bug?
3. Mengapa jawaban dari model AI wajib diperlakukan sebagai masukan tak tepercaya oleh server?

## Praktik

Di editor, buat catatan rancangan fitur ekspor transaksi Laundry Aman.
Mulai dari kebutuhan: kasir boleh mengekspor transaksi cabangnya, supervisor boleh mengekspor cabang yang dikelolanya, dan pelanggan tidak mendapat fitur ekspor seluruh transaksi.

### 1. Tetapkan invariant aturan bisnis

Ubah kebutuhan menjadi empat **invariant**, yaitu aturan yang harus tetap benar:

1. Server mengambil identitas peminta dari sesi yang telah diverifikasi.
2. Server memeriksa peran dan cabang sebelum menghasilkan ekspor.
3. Ekspor tidak memuat kolom yang tidak diperlukan untuk pekerjaan peminta.
4. Log mencatat siapa mengekspor apa dan kapan tanpa menyimpan seluruh isi data.

Jangan menerima `role=admin` dari body permintaan sebagai bukti peran.
Nilai dari pengguna adalah input; server perlu mencari hak yang sah dari sumber identitasnya.

### 2. Susun matriks pengujian kasus

Buat rancangan test berikut sebelum menulis fungsi:

| Kasus | Hasil |
|---|---|
| Kasir A meminta cabang A | Data yang diperbolehkan saja |
| Kasir A meminta cabang B | Penolakan tanpa data cabang B |
| Pelanggan meminta ekspor penuh | Penolakan |
| Kasir A mengirim parameter peran palsu | Hak tetap sebagai kasir A |
| Sesi sudah berakhir | Penolakan autentikasi |
| Ekspor sah selesai | Audit event tercatat tanpa isi pelanggan |

Gunakan `labs/access_demo.py` untuk mengulang konsep pemeriksaan pemilik objek.
Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan perintah berikut:

**Windows PowerShell**

```powershell
py labs/access_demo.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Baca sumber contoh, lalu jelaskan bagian mana yang dapat berkembang menjadi pemeriksaan cabang.
Contoh lokal adalah model pembelajaran; penanganan sesi, penyimpanan, serta audit produksi memerlukan rancangan tambahan.

### 3. Audit alur rilis dan buat catatan rilis

Selanjutnya, audit jalur rilis fiktif berikut:

```text
Developer mengubah kode
  -> dependency diambil tanpa versi terkunci
  -> test dijalankan
  -> paket dibangun di laptop pribadi
  -> paket diunggah dengan akun bersama
  -> server memasang berkas tanpa pencatatan hash
```

Tandai titik yang menyulitkan pengulangan dan pertanggungjawaban:
Test hari ini mungkin memakai versi dependency berbeda karena tidak terkunci.
Akun bersama mengaburkan identitas pelaku rilis.
Artefak build sulit ditautkan dengan commit yang diuji.

Rancang alur pengganti: review perubahan, dependency terkunci serta ditinjau, test otomatis, build pada lingkungan terkendali, identitas rilis terbatas, lalu pencatatan commit dan digest artefak.
Sebelum memasang, verifikasi bukti asal yang disediakan proses build.
Tentukan pula cara menarik rilis bermasalah dan memulihkan versi sebelumnya.

Buat catatan rilis latihan:

```text
Perubahan: pembatasan ekspor berdasarkan cabang
Sumber: identitas commit atau snapshot sumber yang diuji
Verifikasi: enam kasus izin, satu uji format ekspor
Artefak: nama dan SHA-256 berkas hasil
Pemulihan: kembali ke versi sebelumnya setelah memeriksa kompatibilitas data
Pemilik: penanggung jawab rilis fiktif
Keterbatasan: belum menguji data produksi atau kapasitas besar
```

Jangan memasukkan secret ke commit, hasil test, atau screenshot.
Jika secret benar-benar bocor, penghapusan teks dari commit terakhir tidak mencabut nilainya.
Pemilik perlu melakukan pencabutan atau rotasi, meninjau pemakaian, dan membersihkan lokasi penyimpanan yang relevan.

Untuk aplikasi yang memakai model AI, perlakukan jawaban model dan dokumen yang diambilnya sebagai input tak tepercaya.
Pemeriksaan izin serta pembatasan alat tetap berada pada kode aplikasi.
Isi dokumen pelanggan tidak boleh mengubah hak pengguna atau kebijakan ekspor.

## Hasil yang diharapkan

Kamu menghasilkan aturan fitur yang bisa diuji, matriks izin, serta diagram rilis dengan bukti sumber dan artefak.
Temuan keamanan berubah menjadi kondisi kelulusan test yang jelas.
Kamu dapat menjelaskan siapa yang menangani temuan setelah produk dipakai.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Test hanya menguji akses berhasil | Tambahkan kasus negatif: perpindahan pengguna, cabang, peran palsu, dan sesi kedaluwarsa |
| Pemindai memberi ratusan peringatan | Validasi keterjangkauan serta dampak sebelum menentukan prioritas; simpan alasan penundaan |
| Versi pustaka terkunci usang | Lakukan pembaruan terencana secara berkala dan pantau advisori keamanan resmi |

## Latihan

Tambahkan fitur hapus transaksi dengan pembatalan yang tercatat.
Tentukan siapa yang boleh melakukan, batas umur transaksi, dan jejak audit.
Susun test untuk menghindari penghapusan lintas cabang serta test bahwa kegagalan tidak meninggalkan data setengah berubah.

<details>
<summary>Pembahasan setelah mencoba: fitur pembatalan transaksi</summary>

Gunakan aturan peran dan umur transaksi yang kamu tetapkan sendiri untuk menentukan siapa yang boleh membatalkan.
Uji bahwa pengguna di luar izin, termasuk cabang lain, ditolak.
Periksa bahwa kegagalan tidak meninggalkan perubahan sebagian dan jejak audit tetap sesuai hasil tindakan.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan berkas threat model kecil, rancangan test positif dan negatif, serta catatan rilis.
- [ ] Pemeriksa lain dapat menautkan satu risiko ke syarat fitur, perubahan, dan bukti test yang menutupnya.
- [ ] Saya dapat menerangkan peran SAST, DAST, SCA, SBOM, dan provenance dalam alur build.
- [ ] Saya memahami langkah penanganan saat secret atau kunci API tidak sengaja masuk ke repositori.

### Lanjut belajar

Kamu telah menyelesaikan seluruh materi Tahap 5: Memeriksa program dan lingkungan (Bab 18 sampai 22).
Di tahap ini, kamu sudah mempelajari analisis program, keamanan memori, identitas Active Directory, arsitektur cloud, dan secure SDLC.

Pada tahap terakhir (Tahap 6: Mengambil keputusan dan membuktikan kemampuan), kamu akan beralih ke penilaian risiko tingkat lanjut dan proyek akhir.
Lanjutkan ke [Bab 23: Threat Intelligence](23-intelijen.md) untuk mempelajari pengumpulan informasi ancaman keamanan.
Untuk mengulang pemodelan ancaman aplikasi, buka kembali [Bab 11](11-threat-modeling.md) dan [Bab 13](13-web-api.md).

## Referensi

- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf).
- [SLSA specification](https://slsa.dev/spec/v1.2/).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
