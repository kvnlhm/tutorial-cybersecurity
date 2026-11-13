# Bab 16: Menangani insiden dan berburu ancaman

Tahap 4 dari 6: Membaca bukti dan menangani kejadian

## Tujuan dan prasyarat

Kamu akan menyusun urutan kejadian, memilih tindakan, dan merancang syarat pemulihan Laundry Aman.
Praktik memakai **tabletop**, yaitu simulasi meja: kamu membaca kejadian dan mencatat keputusan tanpa menyerang atau mematikan sistem.
Sisihkan 3–5 sesi dan siapkan hasil [Bab 15](15-deteksi.md), termasuk aturan peringatan serta batas kesimpulan log.

Ulangi [pemulihan dan pemeriksaan cadangan pada Bab 10](10-hardening.md).
Kamu bisa mengikuti simulasi dari HP atau komputer dengan editor, atau memakai kertas.
Gunakan hanya cerita dan data buatan di bab ini. Semua keputusan menjadi catatan latihan, bukan perubahan pada layanan nyata.

## Konsep

Laundry Aman menemukan login operator setelah beberapa kegagalan pada akun berbeda.
Tim perlu memeriksa cakupannya sambil menjaga transaksi kasir tetap berjalan.
Kita akan membedakan tindakan membatasi kerugian, menghilangkan penyebab, dan memulihkan layanan.
Setiap keputusan harus menyebut alasan, bukti, serta orang yang berwenang.
Setelah itu, kita mencari aktivitas lain yang mungkin berkaitan.

### Menentukan tindakan saat akun dicurigai

Pengelola Laundry Aman menerima hasil pemeriksaan awal dari bab sebelumnya.
**Incident response**, atau respons insiden, adalah cara organisasi menyiapkan diri, mengenali masalah, menangani dampak, dan memulihkan layanan.
Bayangkan prosedur toko saat kunci diduga hilang: periksa masalah, batasi akses, tangani penyebab, lalu periksa layanan sebelum kembali bekerja.

Kita memakai istilah kerja berikut dalam latihan. Organisasi menyesuaikan prosesnya dengan tata kelola dan kebutuhan bisnis.

- **Preparation**: menyiapkan orang, alat, dan prosedur sebelum kejadian.
- **Identification**: mengenali masalah dan menilai cakupannya dari bukti.

Pencabutan sesi akun yang terkonfirmasi disalahgunakan adalah contoh pembatasan akses.
**Containment** berarti membatasi kerugian, seperti menahan pemakaian kunci yang dicurigai sambil menyelidiki masalahnya.
Pembatasan sementara juga dapat dipilih saat dugaan sudah beralasan, dengan mempertimbangkan dampak dan persetujuan pihak berwenang.

Setelah dampak dibatasi, pengelola menangani jalur masuk yang ditemukan.
Contohnya, memperbaiki bug jika terbukti ada dan mengganti kredensial yang bocor melalui prosedur resmi.
**Eradication** berarti menghilangkan penyebab, seperti menangani cara kunci toko jatuh ke tangan yang salah.
Mengganti password tanpa mencabut sesi lama atau memahami jalur masuk dapat meninggalkan akses aktif.

Tim lalu memeriksa layanan sebelum membukanya kembali.
**Recovery** berarti memulihkan layanan dengan verifikasi, seperti membuka toko setelah memeriksa kunci dan pekerjaan kasir.
Tindakan tadi punya tujuan berbeda; perbandingan kunci tidak menjelaskan seluruh mekanisme akses digital.

Tim juga mempelajari hasil penanganan agar kejadian berikutnya lebih mudah dihadapi.
Langkah dapat berulang. Jika menemukan akun terdampak tambahan, tim kembali menilai cakupan dan containment.

#### Cukup kenali dulu

- **Lessons learned**: pelajaran dari penanganan untuk memperbaiki persiapan dan tindakan berikutnya.
- **CSF 2.0**: kerangka NIST untuk mengelola risiko keamanan siber; respons insiden menjadi bagian pengelolaan risiko tersebut.

NIST SP 800-61 Rev. 3 terbit April 2025 dan menggantikan Rev. 2.
Dokumen ini menempatkan respons insiden dalam pengelolaan risiko berbasis CSF 2.0.
Istilah kerja latihan di atas membantu membedakan tindakan; sesuaikan penerapannya dengan organisasi.
[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) menjelaskan hubungan tersebut.

### Menulis panduan yang bisa diikuti petugas

Pemilik Laundry Aman ingin menahan ekspor sementara, tetapi menjaga transaksi kasir tetap berjalan.
Petugas memerlukan panduan yang menyebut siapa boleh menyetujui perubahan berdampak besar.

**Runbook** adalah panduan tindakan yang dapat diikuti petugas, seperti lembar prosedur toko untuk menangani kunci hilang.
Isinya mencakup pemicu, prasyarat, keputusan, tindakan, bukti, dan eskalasi.

**Eskalasi** berarti meneruskan masalah kepada penanggung jawab yang mempunyai kewenangan atau keahlian yang diperlukan.
Petugas mencatat keputusan pembatasan ekspor beserta alasan dan waktu tinjau kembali.

### Mencari aktivitas lain dengan pertanyaan yang jelas

Pengelola Laundry Aman ingin tahu apakah akun operator dipakai untuk kegiatan lain setelah login.
**Threat hunting** berarti pencarian terarah berdasarkan hipotesis, termasuk ketika belum ada alert, seperti menelusuri buku transaksi dengan satu pertanyaan tertentu.

Contoh hipotesisnya: “Jika akun operator disalahgunakan, mungkin terdapat ekspor massal setelah login tidak biasa.”
Pilih sumber data, rentang waktu, cara pencarian, serta bukti yang mendukung atau melemahkan hipotesis.
Tanpa pertanyaan, pencarian mudah berlangsung tanpa akhir.

**Timeline** adalah urutan kejadian menurut waktu, seperti jadwal kegiatan toko yang disusun kembali dari catatan.
Kita memakainya untuk menempatkan bukti pencarian pada urutan yang bisa diperiksa.

### Ringkasan

- Containment membatasi kerugian, eradication menangani penyebab, dan recovery memulihkan layanan dengan pemeriksaan.
- Catat alasan tindakan, bukti, pihak yang menyetujui, dan waktu peninjauan.
- Pencarian terarah membutuhkan hipotesis dan batas data.
- Bukti tambahan dapat mengubah cakupan sehingga tim perlu mengulang penilaian.

### Cek pemahaman

1. Mengapa mengganti password saja dapat meninggalkan akses aktif?
2. Apa yang membedakan containment dari eradication pada kasus operator?
3. Mengapa hunting memerlukan rentang waktu dan bukti yang bisa melemahkan hipotesis?

## Praktik

### 1. Tentukan peran

Di catatan latihan, tulis pembagian tugas berikut. Kamu boleh memainkan semua peran, tetapi pisahkan keputusan menurut perannya.

| Peran | Tanggung jawab |
|---|---|
| Analis | Memeriksa bukti |
| Pengelola aplikasi | Menjalankan perubahan |
| Pemilik usaha | Menyetujui gangguan layanan |
| Penanggung jawab komunikasi | Menyampaikan informasi |

Untuk insiden nyata, libatkan pihak hukum atau privasi yang berwenang sesuai kewajiban organisasi.
Latihan ini tidak menetapkan tenggat hukum.

### 2. Mulai dari log Bab 15

Buka `labs/data/auth.jsonl` di editor dan cari pukul 08.02.30 UTC.
Operator berhasil login dari sumber yang sebelumnya gagal pada beberapa akun. Catat sebagai fakta dalam timeline.

Pada kolom terpisah, tulis dugaan: “akun operator mungkin disalahgunakan”.
Jangan menyatakan Alice atau Bob juga berhasil diambil alih; log tidak menunjukkan itu.

### 3. Tambahkan bukti sintetis berikut

Salin tabel ini ke catatan dengan label sumber “bahan cerita tabletop”.
Data ini adalah bukti tambahan untuk simulasi, bukan hasil program peringkas.

| Waktu UTC | Sumber bukti | Catatan |
|---|---|---|
| 08.03 | Log aplikasi | Sesi operator meminta ekspor 40 nota latihan |
| 08.04 | Konfirmasi pegawai | Operator menyatakan belum memakai aplikasi pagi itu |
| 08.05 | Log aplikasi | Server menolak perubahan peran operator menjadi admin |
| 08.06 | Inventaris | Akun operator dipakai bersama oleh dua pegawai |

Tambahkan batas bukti pada catatan. Permintaan ekspor belum membuktikan seluruh isi diterima; kamu memerlukan hasil respons dan konteks aplikasi.
Pernyataan satu pegawai belum menjelaskan aktivitas pegawai kedua.
Akun bersama mempersulit penentuan siapa yang bertindak. Perbaiki pemakaian akun bersama setelah keadaan terkendali.

### 4. Pilih tindakan dan alasan

Di catatan keputusan, bandingkan pencabutan sesi operator, pembatasan ekspor, dan penghentian seluruh aplikasi.
Nilai dampak masing-masing terhadap bukti, risiko, dan transaksi laundry.
Untuk simulasi ini, pilih pencabutan sesi operator serta pembatasan ekspor. Tulis siapa yang menyetujuinya.

Pertahankan salinan log dan catat tindakan sebelum perubahan berikutnya.
Jangan menghapus file atau me-reboot perangkat secara otomatis.
Bukti volatil, yaitu bukti yang mudah hilang saat keadaan perangkat berubah, dapat hilang karena tindakan tersebut.

### 5. Rancang pemulihan

Di catatan pemulihan, tulis syarat yang harus diperiksa:

- Jalur masuk sudah dipahami atau risiko sisa disetujui.
- Kredensial dan sesi terdampak sudah ditangani.
- Izin akun sudah diperbaiki dan log berjalan.
- Pemilik aplikasi menerima hasil pengujian.

Uji rancangan pemulihan dalam tabletop memakai fungsi sah kasir dan satu kasus akses terlarang.
Catat keputusan untuk kedua kasus, lalu tentukan masa pemantauan tambahan serta orang yang meninjau hasilnya.
Hasilnya adalah pengujian rancangan dalam simulasi; kamu belum membuktikan layanan nyata telah pulih.

### 6. Lakukan satu hunt

Di tabel latihan, cari akses selain ekspor setelah login. Kamu akan menemukan perubahan peran yang ditolak pada 08.05 UTC.
Tulis kesimpulan: ada percobaan tindakan tersebut, dan kontrol menolaknya pada kejadian yang tercatat.

Kamu belum mengetahui permintaan lain di luar jangkauan data.
Susun permintaan log tambahan dengan rentang waktu dan field yang diperlukan.

## Hasil yang diharapkan

Kamu mempunyai timeline, daftar fakta dan hipotesis, keputusan containment, serta kriteria pemulihan.
Semua tindakan tetap berupa simulasi. Kamu dapat menjelaskan alasan memilih pencabutan sesi serta pembatasan ekspor sambil menjaga transaksi kasir.
Menutup seluruh usaha memerlukan pertimbangan dampak dan kewenangan; setiap alert tidak otomatis memerlukan tindakan itu.

## Jika macet

| Yang menghambat | Pemeriksaan atau langkah aman |
|---|---|
| Bukti bertentangan | Catat dua kemungkinan dan cari sumber pembanding; jangan memilih cerita paling dramatis |
| Waktu tidak cocok | Periksa UTC, zona waktu lokal, dan kesesuaian jam antarsumber |
| Kewenangan tidak cukup | Eskalasi kepada pemilik yang tercatat dalam runbook |

## Latihan

1. Buat runbook satu halaman untuk akun pegawai yang diduga bocor.
2. Tambahkan titik berhenti bila alat menunjukkan akun pelanggan lain ikut terdampak.
3. Tulis pemberitahuan internal tiga kalimat: kejadian yang diketahui, dampak yang sudah dipastikan, dan waktu pembaruan berikutnya.

Hindari menyebut identitas pelaku tanpa bukti. Periksa apakah pemberitahuanmu membedakan fakta dari dugaan pada timeline.

## Bukti kelulusan

- [ ] Orang lain dapat menjalankan tabletop dari runbook saya dan memahami siapa mengambil keputusan.
- [ ] Saya dapat membedakan containment, eradication, dan recovery.
- [ ] Saya mempertahankan bukti dan menyatakan ketidakpastian tanpa menghentikan tindakan yang sudah beralasan.

### Lanjut belajar

Kembali ke [Bab 15](15-deteksi.md) jika fakta login masih tercampur dengan dugaan.
Ulangi simulasi dengan menandai sumber setiap klaim.
Setelah bukti siap, lanjut ke [Bab 17: menjaga bukti](17-forensik.md) untuk mencatat asal data dan memeriksa salinannya.

## Referensi

- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): pedoman respons insiden yang diperiksa untuk tutorial ini.
- [MITRE ATT&CK](https://attack.mitre.org/): sumber hipotesis perilaku, bukan alat penentuan identitas pelaku.
