# Bab 23: OSINT dan intelijen ancaman yang dapat diperiksa

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

## Tujuan dan prasyarat

Kamu akan membuat catatan satu halaman untuk menentukan tindakan Laundry Aman setelah menerima kabar kerentanan.
Kamu juga akan memeriksa satu pemberitahuan vendor nyata tanpa menguji produknya.

Bekalmu adalah [aset dan risiko pada Bab 11](11-threat-modeling.md), serta [kelemahan jalur file pada Bab 13](13-web-api.md).
Ulangi [pembacaan log pada Bab 15](15-deteksi.md) dan [penilaian kejadian pada Bab 16](16-respons-insiden.md).

Gunakan kertas atau editor untuk kasus fiktif. Browser di komputer atau HP cukup untuk membaca sumber nyata.
Jangan mencari data pribadi, menghubungi infrastruktur mencurigakan, atau menguji target di luar izin.

## Konsep

Pemilik Laundry Aman membaca kabar bahwa aplikasi laporannya bermasalah.
Ia perlu tahu apakah toko memakai versi yang terdampak dan pekerjaan apa yang harus didahulukan.
Kita akan memeriksa asal kabar, mencocokkannya dengan keadaan toko, lalu memisahkan fakta dari dugaan.
Setelah itu, kita menentukan tindakan beserta orang yang bertanggung jawab.

### Mulai dari keputusan pemilik toko

Pemilik bertanya apakah aplikasi perlu diperbarui hari ini.
**OSINT**, singkatan dari *Open Source Intelligence*, memakai sumber terbuka untuk menjawab pertanyaan tertentu.
Kamu mencari informasi seperti petugas toko yang memeriksa pengumuman pemasok sebelum menerima barang.
Membuka banyak situs saja belum menjawab keputusan pemilik.

**Threat intelligence** menghubungkan informasi ancaman dengan aset dan keputusan yang perlu diambil.
Seperti mencocokkan pengumuman pemasok dengan barang di gudang, kamu memeriksa apakah kabar itu berlaku bagi toko.
Kamu juga bisa memakai cara ini untuk menentukan apakah alamat dalam log perlu diselidiki.

### Cocokkan kabar dengan aplikasi yang terpasang

Kasir menemukan pemberitahuan vendor tentang aplikasi laporan.
**Advisori** adalah pemberitahuan teknis tentang masalah, kondisi terdampak, dan tindakan yang disarankan.
Catat produk, versi, konfigurasi, siapa yang dapat menjangkau fitur, serta perlindungan sementara yang berlaku.

Advisori dapat menyebut **CVE**, pengenal untuk kerentanan tertentu, seperti nomor tiket satu kerusakan.
Nomor itu membantu mencari catatan yang sama. Kamu tetap perlu mencocokkan kondisi teknisnya dengan aplikasi Laundry Aman.

**CWE** mengelompokkan jenis kelemahan, seperti kategori kerusakan pada buku servis.
Kontrol akses yang keliru adalah contoh jenis kelemahan. Pengenal kerentanan tertentu dan kelompok jenis kelemahan menjawab pertanyaan berbeda.

Versi yang cocok dengan advisori menunjukkan kemungkinan terdampak sesuai kondisi tersebut.
Untuk menyatakan **kompromi**, yaitu pihak tak berhak berhasil menguasai atau mengakses sesuatu, kamu memerlukan bukti kejadian tambahan.

### Telusuri asal kabar sebelum mempercayainya

Pemilik menerima dua artikel dengan kalimat serupa tentang aplikasi toko.
**Sumber primer** berasal dari pihak yang mengamati atau memelihara objek terkait, misalnya vendor yang menulis advisori.
Bayangkan dua fotokopi nota yang sama: keduanya tetap berasal dari satu transaksi.
Dua artikel yang menyalin satu laporan juga bukan dua bukti independen.

Simpan asal informasi agar pembaca bisa menelusurinya.
Lalu beri **tingkat keyakinan**, penilaian seberapa kuat bukti mendukung satu klaim.
Kecocokan versi dapat memiliki keyakinan tinggi ketika inventaris dan advisori sepakat.
Dugaan kompromi tetap lemah jika kamu hanya melihat satu permintaan yang ditolak.

### Bedakan alamat petunjuk dari pola tindakan

Petugas Laundry Aman melihat sebuah domain pada laporan ancaman.
**IOC**, singkatan dari *indicator of compromise*, adalah petunjuk seperti hash atau domain yang terkait aktivitas tertentu.
Petunjuk ini seperti nomor kendaraan pada laporan kejadian: kamu masih perlu memeriksa waktu dan konteksnya.

Petugas juga ingin mengenali tindakan serupa jika pelaku mengganti alamat.
**TTP**, singkatan dari *tactics, techniques, and procedures*, menjelaskan tujuan, cara, dan rincian pola tindakan pelaku.
Seperti mencatat cara seseorang masuk gudang, pola perilaku membantu merancang deteksi yang tidak bergantung pada satu alamat.
IOC dapat berubah cepat; kecocokannya sendiri belum membuktikan siapa pelaku atau apa yang berhasil dilakukan.

### Cari catatan eksploitasi dan nama perilaku

Petugas toko ingin tahu apakah kerentanan aplikasi sudah pernah dimanfaatkan.
**KEV** adalah katalog CISA tentang kerentanan yang diketahui telah dieksploitasi, seperti daftar kejadian yang sudah dikonfirmasi.
Bug yang tidak tercantum tetap dapat berbahaya. Cocokkan entri dengan advisori vendor dan keadaan aset toko.

Setelah membaca log toko, petugas perlu menamai perilaku yang terlihat.
**ATT&CK** adalah kumpulan pengetahuan perilaku penyerang dari MITRE, seperti daftar kategori tindakan untuk mencocokkan catatan kejadian.
Pemetaan memberi nama pada perilaku yang didukung bukti; pemetaan sendiri belum membuktikan tindakan lain dalam rangkaian serangan.

#### Cukup kenali dulu

- **Traffic Light Protocol**: aturan penandaan batas berbagi informasi; rujukan FIRST membantu menentukan penerima yang sesuai.

### Ringkasan

- Mulai dari pertanyaan keputusan, lalu cocokkan kabar dengan aset toko.
- Pisahkan pengenal kerentanan, jenis kelemahan, dan bukti kejadian.
- Telusuri sumber asal dan tulis keyakinan untuk tiap klaim.
- Pilih tindakan yang tetap berguna ketika informasi belum lengkap.

### Cek pemahaman

1. Mengapa dua artikel yang menyalin satu advisori belum menjadi dua bukti independen?
2. Mengapa versi terdampak dan satu permintaan ditolak belum membuktikan kompromi?
3. Apa manfaat pola perilaku ketika alamat dalam laporan berubah?

## Praktik

### 1. Baca kartu kasus

Di kertas atau editor, siapkan catatan kasus Laundry Aman.
Blok berikut adalah data untuk dibaca, bukan perintah. Nama produk dan advisori seluruhnya fiktif.

```text
Aset: Laundry-Report 2.4.1
Posisi: layanan internal, menerima permintaan dari aplikasi kasir
Fitur import: aktif
Log: satu permintaan import ditolak pada 2026-11-01 09:10 UTC

Sumber A, advisori vendor latihan, 2026-11-01:
Versi 2.4.0 sampai 2.4.2 memiliki validasi path yang salah pada fitur import.
Versi 2.4.3 memperbaikinya. Menonaktifkan import merupakan mitigasi sementara.

Sumber B, unggahan forum latihan, 2026-11-02:
"Semua pengguna Laundry-Report sudah diretas."
Tidak ada log, rincian versi, atau bukti reproduksi.

Sumber C, inventaris lokal, 2026-11-02:
Versi 2.4.1 terpasang. Aplikasi kasir memakai import setiap sore.
Pemilik aplikasi dapat menjadwalkan uji pembaruan malam ini.
```

### 2. Susun keputusan dari bukti

Pada catatanmu, kerjakan enam langkah berikut:

1. Tulis pertanyaan: “Apakah kita terdampak dan tindakan apa yang perlu dilakukan hari ini?”
2. Catat fakta: versi masuk rentang; fitur aktif; permintaan tercatat sebagai ditolak; aplikasi punya ketergantungan pada import.
3. Pisahkan dugaan: penolakan itu mungkin percobaan tak sah atau salah input pengguna. Belum ada bukti bahwa data terbaca.
4. Nilai sumber: A relevan terhadap mekanisme bug; B membuat klaim luas tanpa bukti; C menjelaskan keadaan aset milik sendiri.
5. Pilih tindakan: koordinasikan pembatasan import atau jalur pemakaiannya, amankan log, uji pembaruan, dan periksa aktivitas import di sekitar waktu kejadian.
6. Tetapkan pemilik, tenggat, serta kondisi penutupan: versi baru terpasang dan test fungsi import serta test penolakan path lulus.

Periksa apakah tiap fakta menunjuk sumber A, B, C, atau log pada kartu.
Tulis ringkasan seperti contoh ini:

> Inventaris menunjukkan versi dan fitur kita cocok dengan kondisi terdampak pada advisori latihan. Kita belum memiliki bukti kompromi. Tim aplikasi perlu menguji pembaruan malam ini. Sambil menunggu, pemilik toko menyetujui pembatasan import dan memeriksa kebutuhan kerja cabang. Tim investigasi menyimpan log serta menelusuri permintaan terkait.

Tambahkan tingkat keyakinan beserta alasannya untuk tiap klaim penting.
Gunakan tinggi untuk kecocokan versi karena inventaris dan advisori sepakat.
Gunakan rendah untuk dugaan kompromi karena hanya ada satu kejadian penolakan.
Hindari angka probabilitas tanpa dasar pengukuran.

### 3. Periksa satu advisori nyata

Buka repositori resmi CISA KEV melalui Referensi di browser komputer atau HP.
Pilih satu entri, lalu buka advisori vendor dari entri tersebut.
Catat tanggal pemeriksaan, produk, kondisi terdampak, dan tindakan vendor.
Hasilnya adalah catatan sumber nyata yang dapat ditelusuri.

Kamu hanya membaca sumber. Jangan mengunduh demonstrasi eksploitasi atau menjalankan pengujian target.
Ketidakhadiran sebuah bug dari KEV tidak membuktikan bug itu aman.
Jika belum membaca sumber nyata, tandai bagian ini `NOT_RUN` beserta alasannya.

### 4. Batasi pemetaan perilaku

Pada catatan kasus, tulis perilaku yang didukung bukti sebelum mencari nama teknik dalam ATT&CK.
Jangan mengisi seluruh rantai serangan hanya karena satu teknik tampak mungkin.
Kamu boleh menulis “belum diketahui” jika kartu belum memberi bukti yang cukup.

## Hasil yang diharapkan

Kamu mempunyai catatan intelijen satu halaman berisi pertanyaan, fakta, dugaan, sumber, keyakinan, dan tindakan.
Pembaca bisa membedakan “terdampak kerentanan” dari “terbukti mengalami kompromi”.
Keduanya memerlukan respons sesuai bukti: perbaikan kondisi rentan dan penyelidikan kejadian dapat berjalan bersama.

Simpan verifikasi advisori nyata atau catatan `NOT_RUN` jika belum dikerjakan.
Catatan itu belum menggantikan syarat kelulusan verifikasi sumber nyata.

## Jika macet

- Ada banyak artikel serupa: telusuri tautan ke laporan asal dan hitung sumber independennya.
- Alamat IP masuk daftar reputasi buruk: periksa tanggal, layanan bersama, dan konteks log sebelum memblokir layanan penting.
- Analisis macet karena belum pasti: tulis data yang kurang dan tindakan sementara yang proporsional dengan dampaknya.

## Latihan

Ubah kasus sehingga versi aplikasi 2.5.0, tetapi inventaris terakhir berumur enam bulan.
Tentukan kesimpulan yang masih boleh dibuat dan pemeriksaan pertama yang paling berguna.
Gunakan umur catatan sebagai petunjuk untuk menilai keyakinanmu.

Buat juga catatan distribusi: siapa perlu tahu rincian teknis, siapa hanya membutuhkan keputusan bisnis.
Periksa apakah penerima dapat menjalankan tanggung jawabnya dengan informasi yang kamu pilih.

## Bukti kelulusan

- [ ] Saya menyerahkan satu catatan ringkas kasus fiktif dan satu verifikasi advisori nyata tanpa pengujian target.
- [ ] Saya memberi sumber atau label dugaan pada semua klaim penting.
- [ ] Saya menyertakan alasan tingkat keyakinan dan rekomendasi yang mempertimbangkan aset Laundry Aman.

### Lanjut belajar

Kembali ke [Bab 22](22-secure-sdlc.md) untuk meninjau bukti pembaruan komponen.
Jika fakta dan dugaan masih tercampur, ulangi [Bab 16](16-respons-insiden.md), lalu nilai kembali satu klaim pada kartu.
Setelah bukti siap, lanjut ke [Bab 24: keputusan risiko](24-grc.md).

## Referensi

- [CISA KEV, mirror resmi data](https://github.com/cisagov/kev-data).
- [MITRE ATT&CK](https://attack.mitre.org/).
- [FIRST Traffic Light Protocol untuk batas berbagi informasi](https://www.first.org/tlp/).
