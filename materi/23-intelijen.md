# Bab 23: OSINT dan intelijen ancaman yang dapat diperiksa

## Tujuan dan prasyarat

Anda akan menilai informasi ancaman, memisahkan fakta dari penafsiran, dan menentukan tindakan untuk Laundry Aman. Pahami log, kerentanan, serta sumber jaringan. Praktik menggunakan kartu kasus fiktif; Anda tidak perlu mencari data pribadi atau menghubungi infrastruktur mencurigakan.

## Konsep

**OSINT**, Open Source Intelligence, menggunakan sumber yang tersedia secara terbuka untuk menjawab pertanyaan tertentu. Membuka banyak situs belum menghasilkan intelijen yang berguna. Mulailah dari keputusan: apakah Laundry Aman perlu memprioritaskan pembaruan komponen tertentu, atau apakah sebuah alamat dalam log memerlukan penyelidikan?

**Threat intelligence** menghubungkan informasi ancaman dengan konteks aset dan keputusan. **IOC**, indicator of compromise, adalah petunjuk seperti hash atau domain yang berhubungan dengan aktivitas tertentu. **TTP**, tactics, techniques, and procedures, menjelaskan pola tindakan pelaku. IOC dapat berubah cepat; pola perilaku membantu merancang deteksi yang tidak bergantung pada satu alamat.

**CVE** memberi pengenal bagi kerentanan tertentu. **CWE** mengelompokkan jenis kelemahan, seperti kontrol akses yang keliru. Nomor CVE tidak berarti komponen Laundry Aman pasti terdampak. Anda perlu memeriksa produk, versi, konfigurasi, keterjangkauan, dan mitigasi yang berlaku.

Sumber primer berasal dari pihak yang mengamati atau memelihara objek terkait, misalnya advisori vendor. Dua artikel yang menyalin satu laporan bukan dua bukti independen. Simpan asal informasi agar pembaca dapat melacaknya.

## Praktik

Gunakan paket latihan berikut. Nama produk dan advisori seluruhnya fiktif.

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

Kerjakan enam langkah:

1. Tulis pertanyaan: “Apakah kita terdampak dan tindakan apa yang perlu dilakukan hari ini?”
2. Catat fakta: versi masuk rentang; fitur aktif; permintaan tercatat sebagai ditolak; aplikasi punya ketergantungan pada import.
3. Pisahkan dugaan: penolakan itu mungkin percobaan tak sah atau salah input pengguna. Belum ada bukti bahwa data terbaca.
4. Nilai sumber: A relevan terhadap mekanisme bug; B membuat klaim luas tanpa bukti; C menjelaskan keadaan aset milik sendiri.
5. Pilih tindakan: koordinasikan pembatasan import atau jalur pemakaiannya, amankan log, uji pembaruan, dan periksa aktivitas import di sekitar waktu kejadian.
6. Tetapkan pemilik, tenggat, serta kondisi penutupan: versi baru terpasang dan test fungsi import serta test penolakan path lulus.

Tulis ringkasan seperti ini:

> Inventaris menunjukkan versi dan fitur kita cocok dengan kondisi terdampak pada advisori latihan. Kita belum memiliki bukti kompromi. Tim aplikasi perlu menguji pembaruan malam ini. Sambil menunggu, pemilik toko menyetujui pembatasan import dan memeriksa kebutuhan kerja cabang. Tim investigasi menyimpan log serta menelusuri permintaan terkait.

Tambahkan **tingkat keyakinan** beserta alasannya. Anda dapat memakai tinggi untuk kecocokan versi karena inventaris dan advisori sepakat, serta rendah untuk dugaan kompromi karena hanya ada satu event penolakan. Hindari angka probabilitas yang tidak memiliki dasar pengukuran.

Untuk latihan sumber nyata, buka repositori resmi CISA KEV melalui tautan referensi. Pilih satu entri, lalu buka advisori vendor dari entri tersebut. Catat tanggal pemeriksaan, produk, kondisi terdampak, dan tindakan vendor. Tidak perlu mengunduh proof-of-concept atau menjalankan apa pun. KEV membantu mengenali kerentanan yang telah dieksploitasi, tetapi ketidakhadiran sebuah bug dari katalog tidak membuktikan bahwa bug itu aman.

Pemetaan ATT&CK membantu memberi nama perilaku. Kaitkan hanya perilaku yang memang didukung bukti. Jangan mengisi seluruh rantai serangan hanya karena satu teknik tampak mungkin. Pemetaan yang jujur dapat berisi “belum diketahui”.

## Hasil yang diharapkan

Anda menghasilkan catatan intelijen satu halaman dengan pertanyaan, fakta, dugaan, sumber, keyakinan, dan tindakan. Pembaca dapat membedakan “terdampak kerentanan” dari “terbukti mengalami kompromi”. Keduanya menuntut respons yang berhubungan tetapi tidak identik.

## Jika macet

- Ada banyak artikel serupa: telusuri tautan ke laporan asal dan hitung sumber independennya.
- Alamat IP masuk daftar reputasi buruk: periksa tanggal, layanan bersama, dan konteks log sebelum memblokir layanan penting.
- Analisis macet karena belum pasti: tulis data yang kurang dan tindakan sementara yang proporsional dengan dampaknya.

## Latihan

Ubah kasus sehingga versi aplikasi 2.5.0, tetapi inventaris terakhir berumur enam bulan. Tentukan kesimpulan yang masih boleh dibuat dan pemeriksaan pertama yang paling berguna. Buat juga catatan distribusi: siapa perlu tahu rincian teknis, siapa hanya membutuhkan keputusan bisnis.

## Bukti kelulusan

Serahkan satu brief kasus fiktif dan satu verifikasi advisori nyata tanpa pengujian target. Anda lulus jika semua klaim penting memiliki sumber atau label dugaan, serta rekomendasi mempertimbangkan aset Laundry Aman.

## Referensi

- [CISA KEV, mirror resmi data](https://github.com/cisagov/kev-data).
- [MITRE ATT&CK](https://attack.mitre.org/).
- [FIRST Traffic Light Protocol untuk batas berbagi informasi](https://www.first.org/tlp/).
