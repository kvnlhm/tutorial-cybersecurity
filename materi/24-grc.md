# Bab 24: Risiko, tata kelola, dan keputusan bisnis

## Tujuan dan prasyarat

Anda akan menerjemahkan temuan teknis menjadi keputusan yang bisa diambil pemilik Laundry Aman. Pahami aset, ancaman, kontrol, dan respons insiden. Praktik menggunakan angka ilustrasi dan tidak memberikan kesimpulan hukum atau sertifikasi kepatuhan.

## Konsep

**Governance** atau tata kelola menjelaskan siapa yang menetapkan arah dan bertanggung jawab. **Risk management** mengelola ketidakpastian yang dapat merugikan tujuan organisasi. **Compliance** memeriksa kesesuaian terhadap kewajiban yang berlaku, misalnya kontrak atau regulasi. Ketiganya sering disingkat **GRC**.

Pemilik laundry mungkin tidak membutuhkan penjelasan seluruh header HTTP. Ia perlu mengetahui data apa yang berisiko, apakah toko dapat tetap beroperasi, siapa yang memperbaiki, dan bagaimana memastikan perbaikannya berhasil. Detail teknis tetap tersedia untuk pelaksana.

Risiko menghubungkan aset, ancaman, kelemahan, dan dampak. Kalimat “server berisiko tinggi” terlalu kabur. Kalimat “akun vendor yang masih aktif dapat mengubah konfigurasi server cabang setelah kontraknya berakhir” memberi objek yang dapat ditindaklanjuti.

**Risk owner** mempunyai wewenang menentukan respons terhadap risiko. Analis menyediakan bukti dan pilihan; ia tidak menerima seluruh risiko bisnis atas nama pemilik. Respons dapat berupa mengurangi, menghindari, berbagi sebagian konsekuensi melalui perjanjian, atau menerima risiko dengan alasan serta masa tinjau. Pembelian asuransi juga tidak menggantikan kontrol teknis.

**Residual risk** adalah risiko yang tersisa setelah kontrol diterapkan. Backup mengurangi dampak kehilangan data jika pemulihan berhasil, tetapi belum mencegah kebocoran salinan data. Satu kontrol jarang menutup seluruh sisi masalah.

NIST CSF 2.0 menyediakan kerangka hasil keamanan melalui fungsi Govern, Identify, Protect, Detect, Respond, dan Recover. Gunakan sebagai cara memeriksa cakupan kerja, kemudian pilih tindakan yang sesuai ukuran organisasi. Menempelkan nama framework pada dokumen belum membuktikan pelaksanaannya.

## Praktik

Laundry Aman memiliki tiga masalah fiktif:

| ID | Fakta awal | Dampak yang masuk akal |
|---|---|---|
| R1 | Akun vendor lama masih aktif dan memiliki hak admin cabang | Perubahan konfigurasi tanpa kebutuhan sah |
| R2 | Backup berjalan harian, pemulihan belum pernah diuji | Toko mungkin gagal memulihkan transaksi saat dibutuhkan |
| R3 | API mengembalikan pesanan pelanggan lain pada uji lokal | Data transaksi dapat dibaca lintas pelanggan |

Buat **risk register**, daftar risiko dengan pemilik dan tindak lanjut. Untuk latihan, gunakan skala kemungkinan 1–3 dan dampak 1–3. Definisikan arti skala terlebih dahulu: kemungkinan 3 berarti jalur penyalahgunaan mudah dijangkau dalam konteks kasus; dampak 3 berarti mengganggu operasi utama atau membuka data pelanggan secara berarti. Skor perkalian hanya alat bantu urutan; angka ordinal ini bukan perhitungan kerugian yang presisi.

Isi tiap baris dengan: deskripsi, bukti, aset, pemilik, skor awal, tindakan, tenggat, ukuran keberhasilan, dan risiko sisa. Contoh R2:

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

Tentukan **RPO**, jumlah kehilangan data dalam rentang waktu yang masih diterima, dan **RTO**, waktu pemulihan yang ditargetkan. Jika pemilik menerima kehilangan paling banyak satu jam transaksi, backup harian saja tidak memenuhi rancangan RPO itu. Jika ia membutuhkan layanan kembali dalam dua jam, mengunduh backup selama enam jam akan bertentangan dengan target RTO.

Sekarang bandingkan dua rencana latihan. Rencana A: enam jam kerja untuk menguji restore dan memperbaiki prosedurnya. Rencana B: enam jam kerja untuk merapikan tampilan dashboard monitoring. Dengan fakta R2, Anda dapat menjelaskan manfaat A menggunakan kebutuhan pemulihan. Keputusan ini bisa berubah jika dashboard ternyata menyembunyikan peringatan penting; catat asumsi agar keputusan dapat ditinjau.

Susun **evidence matrix**, yaitu hubungan aturan dengan buktinya:

| Pernyataan kontrol | Bukti yang dicari | Bukti yang belum cukup |
|---|---|---|
| Akses vendor berakhir setelah kontrak | Persetujuan dan hasil pemeriksaan akun | Dokumen kebijakan saja |
| Backup dapat dipulihkan | Catatan restore beserta pemeriksaan isi | Status job backup hijau |
| Ekspor dibatasi per cabang | Test positif/negatif dan konfigurasi aktif | Screenshot tombol tersembunyi |

Untuk kewajiban hukum dan kontrak, catat yurisdiksi, jenis data, peran organisasi, serta pihak penanggung jawab. Periksa sumber resmi yang berlaku ketika menghadapi kasus nyata dan libatkan pemilik kewajiban. Jangan menyimpulkan tenggat pelaporan dari ingatan atau memakai satu aturan untuk seluruh negara.

## Hasil yang diharapkan

Anda memiliki tiga risiko yang dapat ditindaklanjuti, pemilik keputusan, dan bukti yang diperlukan untuk menutup tiap temuan. Laporan satu halaman untuk pemilik toko menjelaskan dampak dan pilihan. Lampiran teknis menjelaskan cara pemeriksaannya.

## Jika macet

- Semua risiko mendapat skor tertinggi: perbaiki definisi skala dan bandingkan keterjangkauan serta dampak pada proses utama.
- Pemilik menunda perbaikan: catat alasan, kontrol sementara, siapa menerima risiko, dan tanggal tinjau.
- Auditor meminta bukti: berikan artefak yang relevan dan disamarkan, tanpa mengirim data pelanggan yang tidak dibutuhkan.

## Latihan

Tulis memo maksimal 200 kata yang meminta waktu pemeliharaan untuk memperbaiki R3. Sertakan dampak penghentian sementara dan cara memeriksa keberhasilan. Minta teman yang tidak belajar keamanan menjelaskan kembali keputusan yang Anda minta.

## Bukti kelulusan

Serahkan risk register, dua target pemulihan, evidence matrix, dan memo bisnis. Anda lulus jika pembaca mengetahui tindakan, penanggung jawab, serta syarat keberhasilan tanpa perlu menebak istilah teknis.

## Referensi

- [NIST Cybersecurity Framework dan CSF 2.0](https://www.nist.gov/cyberframework).
- [NIST CSF Quick Start Guides](https://www.nist.gov/cyberframework/quick-start-guides).
