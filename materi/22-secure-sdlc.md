# Bab 22: Membangun perangkat lunak yang bisa dipercaya

## Tujuan dan prasyarat

Anda akan mengubah temuan keamanan menjadi requirement, test, perubahan kode, serta bukti rilis. Pahami pemrograman, Git, otorisasi, dan kelemahan web. Latihan memakai rancangan fitur Laundry Aman serta lab lokal yang tersedia dalam repositori.

## Konsep

**SDLC**, Software Development Life Cycle, mencakup pekerjaan sejak kebutuhan aplikasi sampai pemeliharaannya. Tim memasukkan keamanan pada tahap desain, implementasi, pengujian, rilis, dan respons terhadap temuan. Menemukan bug setelah rilis tetap penting, tetapi keputusan awal sering menentukan berapa sulit memperbaikinya.

**Supply chain perangkat lunak** mencakup kode, dependency, pembuat paket, sistem build, dan jalur distribusi. Aplikasi aman dapat menerima risiko dari paket yang keliru, akun maintainer yang diambil alih, atau build yang berubah tanpa review. Mengetahui asal sebuah berkas membantu penyelidikan, tetapi asal tepercaya tidak membuktikan seluruh kodenya bebas cacat.

Beberapa istilah yang akan Anda temui:

| Istilah | Pertanyaan yang dibantu |
|---|---|
| SAST | Pola berisiko apa yang tampak pada kode? |
| DAST | Perilaku berisiko apa yang tampak ketika aplikasi berjalan? |
| SCA | Komponen pihak ketiga apa yang dipakai dan diketahui bermasalah? |
| SBOM | Apa daftar bahan penyusun perangkat lunak ini? |
| Provenance | Dari sumber dan proses build mana artefak berasal? |

Alat tersebut menjawab pertanyaan berbeda. Pemindai dependency tidak membuktikan otorisasi pesanan benar. Signature dapat membantu memverifikasi penerbit atau integritas sesuai mekanismenya, tetapi tidak menjamin bahwa kode yang ditandatangani aman.

## Praktik

Laundry Aman akan menambah fitur ekspor transaksi. Mulai dari kebutuhan: kasir boleh mengekspor transaksi cabangnya, supervisor boleh mengekspor cabang yang dikelolanya, dan pelanggan tidak mendapat fitur ekspor seluruh transaksi.

Ubah kebutuhan menjadi empat **invariant**, yaitu aturan yang harus tetap benar:

1. Server mengambil identitas peminta dari sesi yang telah diverifikasi.
2. Server memeriksa peran dan cabang sebelum menghasilkan ekspor.
3. Ekspor tidak memuat kolom yang tidak diperlukan untuk pekerjaan peminta.
4. Log mencatat siapa mengekspor apa dan kapan tanpa menyimpan seluruh isi data.

Jangan menerima `role=admin` dari body permintaan sebagai bukti peran. Nilai dari pengguna merupakan input; server perlu mencari hak yang sah dari sumber identitasnya.

Buat rancangan test berikut sebelum menulis fungsi:

| Kasus | Hasil |
|---|---|
| Kasir A meminta cabang A | Data yang diperbolehkan saja |
| Kasir A meminta cabang B | Penolakan tanpa data cabang B |
| Pelanggan meminta ekspor penuh | Penolakan |
| Kasir A mengirim parameter peran palsu | Hak tetap sebagai kasir A |
| Sesi sudah berakhir | Penolakan autentikasi |
| Ekspor sah selesai | Audit event tercatat tanpa isi pelanggan |

Gunakan `labs/access_demo.py` untuk mengulang konsep pemeriksaan pemilik objek. Jalankan dari folder proyek dengan `py labs/access_demo.py`, atau `python3` pada Linux/macOS. Baca sumber contoh, lalu jelaskan bagian mana yang dapat berkembang menjadi pemeriksaan cabang. Contoh lokal adalah model pembelajaran; penanganan sesi, penyimpanan, serta audit produksi memerlukan rancangan tambahan.

Selanjutnya, audit jalur rilis fiktif berikut:

```text
Developer mengubah kode
  -> dependency diambil tanpa versi terkunci
  -> test dijalankan
  -> paket dibangun di laptop pribadi
  -> paket diunggah dengan akun bersama
  -> server memasang berkas tanpa pencatatan hash
```

Tandai titik yang menyulitkan pengulangan dan pertanggungjawaban. Contoh: test hari ini mungkin memakai versi dependency berbeda; akun bersama mengaburkan pelaku; artefak build sulit ditautkan dengan commit yang diuji.

Rancang alur pengganti: review perubahan, dependency terkunci serta ditinjau, test otomatis, build pada lingkungan terkendali, identitas rilis terbatas, lalu pencatatan commit dan digest artefak. Sebelum memasang, verifikasi bukti asal yang disediakan proses build. Tentukan pula cara menarik rilis bermasalah dan memulihkan versi sebelumnya.

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

Jangan memasukkan secret ke commit, hasil test, atau screenshot. Jika secret benar-benar bocor, penghapusan teks dari commit terakhir tidak mencabut nilainya. Pemilik perlu melakukan pencabutan atau rotasi, meninjau pemakaian, dan membersihkan lokasi penyimpanan yang relevan.

Untuk aplikasi yang memakai model AI, perlakukan jawaban model dan dokumen yang diambilnya sebagai input tak tepercaya. Pemeriksaan izin serta pembatasan alat tetap berada pada kode aplikasi. Isi dokumen pelanggan tidak boleh mengubah hak pengguna atau kebijakan ekspor.

## Hasil yang diharapkan

Anda menghasilkan aturan fitur yang bisa diuji, matriks izin, serta diagram rilis dengan bukti sumber dan artefak. Temuan keamanan berubah menjadi kondisi kelulusan test yang jelas. Anda dapat menjelaskan siapa yang menangani temuan setelah produk dipakai.

## Jika macet

- Test hanya menguji akses yang diizinkan: tambahkan perpindahan pengguna, cabang, peran, dan sesi kedaluwarsa.
- Scanner memberi ratusan hasil: validasi keterjangkauan dan dampak sebelum memilih prioritas; simpan alasan penundaan.
- Versi terkunci dianggap aman selamanya: lakukan pembaruan terencana dan pantau advisori resmi komponen yang dipakai.

## Latihan

Tambahkan fitur hapus transaksi dengan pembatalan yang tercatat. Tentukan siapa yang boleh melakukan, batas umur transaksi, dan jejak audit. Susun test untuk menghindari penghapusan lintas cabang serta test bahwa kegagalan tidak meninggalkan data setengah berubah.

## Bukti kelulusan

Serahkan threat model kecil, test negatif dan positif, serta catatan rilis. Anda lulus jika reviewer dapat menautkan satu risiko ke requirement, perubahan, dan bukti test yang menutupnya.

## Referensi

- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf).
- [SLSA specification](https://slsa.dev/spec/v1.2/).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
