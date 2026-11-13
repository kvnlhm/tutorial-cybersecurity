# Bab 15: Membaca log dan menyusun deteksi

Tahap 4 dari 6: Membaca bukti dan menangani kejadian

## Tujuan dan prasyarat

Kamu akan menghitung catatan login Laundry Aman, membandingkan hasil dengan program, lalu membuat aturan peringatan.
Hasil akhirnya adalah kartu aturan dan catatan pemeriksaan awal. Sisihkan 3–5 sesi.

Bekalmu adalah [alamat jaringan dari Bab 03](03-jaringan.md), [log dan properti dari Bab 05](05-windows.md), serta [Python dari Bab 06](06-pemrograman.md).
Ulangi [login dan sesi dari Bab 09](09-identitas.md).
Gunakan komputer dengan Python untuk menjalankan program. Dari HP, kamu bisa membaca data dan menghitungnya secara manual.
Semua data latihan buatan; alamat di dalamnya tidak perlu dihubungi.

## Konsep

Kasir Laundry Aman gagal masuk sekali, lalu berhasil setelah mengetik ulang.
Pada saat lain, satu sumber mencoba masuk ke beberapa akun.
Kita akan membaca catatannya dan menentukan aktivitas yang perlu diperiksa.
Setelah itu, kita menyusun peringatan dan menilai seberapa baik aturan menangkap kejadian yang dicari.

### Dari catatan login ke keputusan pemeriksaan

Aplikasi Laundry Aman mencatat login berhasil, login gagal, penolakan akses, dan perubahan hak pengguna.
**Log** adalah catatan kejadian, seperti buku kejadian toko yang bisa kamu baca kembali.

**Event** berarti satu kejadian, seperti satu isian pada buku tadi.
Satu login gagal dapat berasal dari salah ketik. Kita perlu melihat kejadian di sekitarnya sebelum mengambil keputusan.

**Alert** berarti peringatan karena kejadian memenuhi aturan tertentu, seperti tanda pada isian buku yang perlu diperiksa.
Contohnya, satu sumber gagal masuk ke tiga akun dalam waktu berdekatan.

| Catatan toko | Pemeriksaan berikutnya |
|---|---|
| Satu kegagalan lalu berhasil | Periksa apakah pegawai salah mengetik |
| Kegagalan pada beberapa akun | Periksa sumber, waktu, dan aktivitas setelahnya |

**Incident**, atau insiden, berarti kejadian yang sudah dinilai memerlukan penanganan keamanan, seperti masalah toko yang perlu tindakan penanggung jawab.
Tim menilai bukti sebelum menetapkan insiden. Menganggap semua alert sebagai insiden menghabiskan waktu untuk gangguan kecil.

Pemeriksaan awal untuk menentukan langkah berikutnya disebut **triage**, seperti memilah laporan toko menurut kebutuhan penanganannya.
Tanda peringatan membantu memilih yang diperiksa; hasil pemeriksaan menentukan tindakan.

### Menjaga catatan agar bisa diperiksa

Pengelola Laundry Aman ingin mencocokkan login dengan perubahan akun.
**Korelasi** berarti menghubungkan kejadian yang berkaitan, seperti mencocokkan catatan masuk pegawai dengan transaksi sesudahnya.
Pengenal sesi membantu menghubungkan catatan, tetapi tetap memerlukan konteks.

Catat waktu beserta zona waktu, sumber, identitas, jenis kejadian, hasil, dan pengenal untuk menghubungkan kejadian.
Tentukan masa simpan serta hak akses. Pelaku dapat mencoba mengubah log; isinya juga dapat memuat data sensitif.

Jangan menaruh password, token sesi lengkap, atau isi pribadi pelanggan di log.

Pengelola ingin mendapat peringatan sebelum mengotomatisasi tindakan.
Menonaktifkan seluruh akun karena beberapa login gagal dapat mengganggu usaha.
Mulai dari peringatan yang bisa diperiksa, lalu tentukan tindakan yang aman untuk diotomatisasi.

#### Cukup kenali dulu

- **SOC**, *security operations center*: tim yang memantau, menilai, dan merespons aktivitas keamanan; bab ini melatih pekerjaan awalnya.
- **SIEM**, *security information and event management*: sistem yang mengumpulkan log serta membantu pencarian dan korelasi.
- **SOAR**, *security orchestration, automation and response*: sistem yang membantu menjalankan alur penanganan, dengan kontrol pada tindakan otomatis.

### Menilai peringatan yang tepat dan yang luput

Pengelola Laundry Aman membandingkan peringatan dengan hasil pemeriksaan kejadian.
Untuk menghitung mutu aturan, kita memerlukan label pembanding yang cukup tepercaya.
Tanpa penyelidikan, peringatan baru menjadi kandidat untuk diperiksa.

**True positive (TP)** berarti peringatan yang cocok dengan kejadian berbahaya, seperti tanda pemeriksaan pada laporan yang memang bermasalah.

**False positive (FP)** berarti aktivitas sah yang memicu peringatan, seperti laporan kegiatan pegawai yang ikut ditandai.

**False negative (FN)** berarti aktivitas berbahaya yang luput, seperti laporan masalah yang terlewat tanpa tanda.

Misalnya, pemeriksaan memastikan delapan dari sepuluh peringatan memang berbahaya. Ada empat kejadian berbahaya lain yang luput.
Kita menilai dua hal berbeda dari angka tersebut.

**Precision** mengukur bagian peringatan yang benar: TP dibagi (TP+FP).
Bayangkan memeriksa isi tumpukan laporan bertanda. Delapan laporan benar dari sepuluh memberi precision 80%.

**Recall** mengukur bagian kejadian berbahaya yang tertangkap: TP dibagi (TP+FN).
Bayangkan mencari berapa laporan masalah yang berhasil diberi tanda. Delapan dari dua belas memberi recall sekitar 67%.

Kedua perbandingan memakai hasil pemeriksaan sebagai pembanding.
Nilainya berlaku pada kumpulan pengujian itu; angka tersebut tidak menjamin kemampuan aturan pada semua keadaan.

#### Cukup kenali dulu

- **True negative (TN)**: aktivitas sah yang tidak memicu peringatan, seperti laporan kegiatan biasa yang memang tidak perlu ditandai.

### Ringkasan

- Bedakan kejadian, peringatan, dan keputusan bahwa penanganan keamanan diperlukan.
- Simpan konteks log dan lindungi isinya agar pemeriksaan bisa dipertanggungjawabkan.
- Precision menilai ketepatan peringatan; recall menilai kejadian berbahaya yang tertangkap.
- Bandingkan hitungan program dengan data sebelum mengambil keputusan.

### Cek pemahaman

1. Mengapa satu login gagal belum cukup untuk menetapkan insiden?
2. Apa yang perlu diketahui sebelum menyebut suatu peringatan false positive?
3. Mengapa precision tinggi masih dapat disertai kejadian berbahaya yang luput?

## Praktik

### 1. Baca data sebelum menjalankan alat

Di editor, buka `labs/data/auth.jsonl` dari folder utama tutorial, yaitu folder yang memuat `README.md` dan `labs`.

**JSON** adalah format teks untuk data terstruktur, seperti formulir kejadian dengan nama kolom dan nilainya.
Objek memakai kurung kurawal `{}` dan pasangan nama serta nilai yang dipisahkan titik dua.
Teks memakai kutip ganda; koma memisahkan pasangan.

**JSONL** memisahkan satu nilai JSON per baris; dataset log ini memakai objek pada tiap barisnya.
Contoh data berikut mencatat satu kejadian. Kejadian berikutnya berada pada baris baru, tanpa koma penghubung antarbaris:

```json
{"timestamp":"2026-01-01T08:00:00Z","user":"alice","source_ip":"192.0.2.10","event":"login_success"}
```

**Field** berarti bagian bernama dalam data, seperti kolom pada formulir tadi.
Baca isinya memakai panduan berikut:

| Field | Arti pada latihan |
|---|---|
| `timestamp` | Waktu UTC, yaitu acuan waktu bersama; akhiran `Z` menandainya |
| `user` | Identitas latihan |
| `source_ip` | Alamat sumber sintetis |
| `event` | Jenis kejadian |

Alamat dalam data adalah alamat dokumentasi. Kamu tidak perlu menghubunginya.
Hitung baris secara manual: tujuh kejadian, terdiri dari empat login gagal dan tiga login berhasil.
Bob gagal dari `192.0.2.20`, lalu berhasil. Sumber `198.51.100.8` gagal terhadap Alice, Bob, dan operator, lalu berhasil sebagai operator.

### 2. Jalankan peringkas offline

Pilih jalur sesuai perangkatmu. Buka terminal pada folder utama tutorial.

**Windows PowerShell**

Jalankan perintah berikut:

```powershell
py labs/log_triage.py
```

**Linux/macOS**

Jalankan `python3 labs/log_triage.py` dari folder yang sama.

Bandingkan hasil program dengan contoh berikut:

```json
{
  "total": 7,
  "failed": 4,
  "success": 3,
  "failures_by_ip": {
    "192.0.2.20": 1,
    "198.51.100.8": 3
  }
}
```

Program menghitung kejadian. Program tidak menentukan penyerang atau menghubungkan kejadian berdasarkan waktu.
Pemeriksaannya memastikan field wajib berisi teks dan jenis event dikenal; program belum memvalidasi format waktu atau alamat IP.
Cocokkan dengan hitungan manual. Selidiki selisih satu baris sebelum mengandalkan angka pada layar ringkasan.

### 3. Tulis aturan deteksi dalam kalimat

Di catatan latihan, tulis aturan berikut:
“Buat alert jika satu sumber mencatat setidaknya tiga login gagal pada tiga akun berbeda dalam lima menit.”

Tentukan field yang dibutuhkan, cara menangani waktu, dan perilaku saat log terlambat.
Peringkas belum menerapkan aturan ini. Periksa kumpulan data secara manual, atau jadikan implementasinya tugas lanjutan.

### 4. Lakukan triage

Di catatan yang sama, periksa sumber dengan tiga kegagalan. Tulis pertanyaan berikut:

1. Apakah sumber milik alat pengujian yang sah?
2. Apakah operator mengenali aktivitasnya?
3. Apakah ada perubahan akun setelah login?

**Password spraying** adalah pola mencoba sedikit tebakan password pada banyak akun, seperti mencoba satu kunci pada beberapa pintu.
Pola beberapa akun dengan sedikit tebakan per akun cocok dengan dugaan ini.
Log tidak mencatat password yang dicoba, sehingga belum membuktikan teknik tersebut.

### 5. Buat kartu aturan

Di catatan latihan, isi nama aturan, tujuan, log yang dibutuhkan, kondisi, kemungkinan false positive, langkah pemeriksaan, pemilik, serta tanggal peninjauan.
Tambahkan contoh aktivitas sah yang memicu aturan, misalnya pelatihan pegawai dari satu jaringan bersama.

**Fixture** adalah data latihan tetap yang dipakai untuk memeriksa hasil, seperti lembar contoh yang menjadi pembanding.
Buat salinan sebelum menambahkan kasus baru. Pertahankan fixture asli sebagai pembanding hasil, bukan sebagai tempat menambah percobaan.

## Hasil yang diharapkan

Hitungan manual cocok dengan program: tujuh kejadian, empat gagal, dan tiga berhasil.
Kamu memilih sumber dengan tiga kegagalan untuk diperiksa serta menulis alternatif penjelasan yang masuk akal.
Kartu aturan menyebut kebutuhan bukti tambahan. Kegagalan login saja belum membuktikan pengambilalihan akses.

## Jika macet

Pesan `JSON tidak valid` menunjuk baris yang perlu diperiksa. Cocokkan kutip ganda dan susunan tanda dengan contoh.
Program juga menolak field wajib yang kosong atau nama event yang tidak dikenal.

Jangan menghapus baris bermasalah agar angka terlihat rapi.
Simpan bukti dan perbaiki sumber atau program pembaca secara terkontrol.

## Latihan

1. Hitung precision dan recall untuk TP=12, FP=8, FN=3 memakai rumus dalam Konsep.
2. Pada salinan data, tambahkan skenario lima kegagalan dari pegawai yang baru mengganti password.
3. Tulis informasi tambahan untuk membedakannya dari serangan tanpa membaca password pegawai tersebut.

<details>
<summary>Pembahasan setelah mencoba: ketepatan dan jangkauan aturan</summary>

Precision = 12/(12+8) = 60%. Recall = 12/(12+3) = 80%.
Pembagi pertama menghitung peringatan; pembagi kedua menghitung kejadian berbahaya pada kumpulan pengujian.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan hasil program, hitungan manual, kartu aturan, dan catatan triage.
- [ ] Saya dapat menjelaskan satu false positive dan satu potensi false negative.
- [ ] Saya dapat menyebut log tambahan yang diperlukan untuk memperkuat kesimpulan.

### Lanjut belajar

Kembali ke [Bab 14](14-jaringan.md) untuk mengulang pengamatan jaringan.
Jika hitungan belum cocok, baca ulang tujuh baris data sebelum menjalankan peringkas lagi.
Setelah bukti siap, lanjut ke [Bab 16: respons insiden](16-respons-insiden.md) untuk memilih tindakan berdasarkan bukti.

## Referensi

- [MITRE ATT&CK](https://attack.mitre.org/): pengetahuan perilaku penyerang untuk menyusun hipotesis deteksi.
- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): hubungan deteksi dan respons dengan pengelolaan risiko.
