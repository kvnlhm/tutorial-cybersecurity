# Bab 16: Menangani insiden dan berburu ancaman

## Tujuan dan prasyarat

Anda telah menyusun alert dan memahami batas log. Bab ini mengajarkan keputusan saat sesuatu benar-benar perlu ditangani. Praktik memakai simulasi meja, atau *tabletop*: Anda membaca kejadian dan mencatat keputusan tanpa menyerang atau mematikan sistem. Sediakan 3–5 sesi dan hasil Bab 15.

## Konsep

**Incident response** mengatur cara organisasi mempersiapkan diri, mengidentifikasi masalah, membatasi dampak, menghilangkan penyebab, dan memulihkan layanan. Tim juga belajar dari penanganan agar kejadian berikutnya lebih mudah dihadapi. Langkah-langkahnya dapat berulang: ketika menemukan akun tambahan yang terdampak, tim kembali menilai cakupan dan containment.

NIST SP 800-61 Rev. 3, terbit April 2025, menempatkan respons insiden dalam pengelolaan risiko berbasis CSF 2.0. Dokumen tersebut menggantikan Rev. 2. Gunakan preparation, identification, containment, eradication, recovery, dan lessons learned sebagai istilah kerja untuk latihan, sambil memahami bahwa organisasi menyesuaikan prosesnya dengan tata kelola dan kebutuhan bisnis. [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final).

**Containment** membatasi kerugian, misalnya mencabut sesi akun yang terkonfirmasi disalahgunakan. **Eradication** menghilangkan penyebab, misalnya memperbaiki bug dan mengganti kredensial yang bocor melalui prosedur resmi. **Recovery** mengembalikan layanan dengan verifikasi. Mengganti password tanpa mencabut sesi lama atau memahami jalur masuk dapat meninggalkan akses yang masih aktif.

**Runbook** adalah panduan tindakan yang dapat diikuti petugas: pemicu, prasyarat, keputusan, tindakan, bukti, dan eskalasi. Tentukan siapa boleh mengambil tindakan berdampak besar. Pemilik Laundry Aman mungkin memilih menahan fitur ekspor sementara agar transaksi kasir tetap berjalan. Keputusan itu harus dicatat bersama alasan dan waktu tinjau kembali.

**Threat hunting** adalah pencarian terarah berdasarkan hipotesis, termasuk ketika belum ada alert. Contoh: “Jika akun operator disalahgunakan, mungkin terdapat ekspor massal setelah login tidak biasa.” Anda memilih sumber data, rentang waktu, cara pencarian, serta bukti yang akan mendukung atau melemahkan hipotesis. Hunting tanpa pertanyaan mudah berubah menjadi pencarian tanpa akhir.

## Praktik

**1. Tentukan peran.** Anda boleh memainkan semuanya, tetapi tulis keputusan menurut peran: analis memeriksa bukti, pengelola aplikasi menjalankan perubahan, pemilik usaha menyetujui gangguan layanan, dan penanggung jawab komunikasi menyampaikan informasi. Untuk insiden nyata, libatkan pihak hukum atau privasi yang berwenang sesuai kewajiban organisasi; latihan ini tidak menetapkan tenggat hukum.

**2. Mulai dari log Bab 15.** Pada pukul 08.02.30 UTC, operator berhasil login dari sumber yang sebelumnya gagal pada beberapa akun. Catat fakta ini. Pisahkan dari dugaan: “akun operator mungkin disalahgunakan”. Jangan menulis bahwa Alice atau Bob juga berhasil diambil alih; log yang tersedia tidak menunjukkan itu.

**3. Tambahkan bukti sintetis berikut.** Ini merupakan bahan cerita latihan, bukan hasil program:

| Waktu UTC | Sumber bukti | Catatan |
|---|---|---|
| 08.03 | Log aplikasi | Sesi operator meminta ekspor 40 nota latihan |
| 08.04 | Konfirmasi pegawai | Operator menyatakan belum memakai aplikasi pagi itu |
| 08.05 | Log aplikasi | Server menolak perubahan peran operator menjadi admin |
| 08.06 | Inventaris | Akun operator dipakai bersama oleh dua pegawai |

Tulis batas bukti: permintaan ekspor tidak otomatis membuktikan seluruh isi diterima; Anda perlu hasil respons dan konteks aplikasi. Pernyataan satu pegawai belum menjelaskan aktivitas pegawai kedua. Akun bersama mempersulit atribusi dan perlu diperbaiki setelah keadaan terkendali.

**4. Pilih tindakan dan alasan.** Susun opsi: mencabut sesi operator, membatasi ekspor, atau menghentikan seluruh aplikasi. Bandingkan dampak pada bukti, risiko, dan transaksi laundry. Untuk simulasi ini pilih pencabutan sesi operator dan pembatasan ekspor, lalu tulis siapa menyetujuinya. Pertahankan salinan log dan catat tindakan sebelum perubahan berikutnya. Jangan menghapus file atau me-reboot perangkat secara otomatis; bukti volatil dapat hilang.

**5. Rancang pemulihan.** Tetapkan kriteria: jalur masuk sudah dipahami atau risiko sisa disetujui, kredensial/sesi terdampak ditangani, izin akun diperbaiki, log berjalan, dan pemilik aplikasi menerima hasil pengujian. Uji fungsi sah kasir dan satu kasus akses terlarang. Tentukan masa pemantauan tambahan serta orang yang meninjau hasilnya.

**6. Lakukan satu hunt.** Cari dalam tabel latihan apakah ada akses selain ekspor setelah login. Anda menemukan perubahan peran yang ditolak. Kesimpulan yang tepat: terdapat percobaan tindakan tersebut dan kontrol menolaknya pada kejadian yang tercatat. Anda belum tahu apakah ada permintaan lain di luar jangkauan data. Susun permintaan log tambahan dengan rentang waktu dan field yang diperlukan.

## Hasil yang diharapkan

Anda mempunyai timeline, daftar fakta dan hipotesis, keputusan containment, serta kriteria pemulihan. Semua tindakan dalam bab ini berupa simulasi. Anda dapat menjelaskan kenapa menutup seluruh usaha tidak menjadi keputusan otomatis untuk setiap alert.

## Jika macet

Jika bukti bertentangan, catat dua kemungkinan dan cari sumber pembanding; jangan memilih cerita yang paling dramatis. Jika waktu tidak cocok, periksa UTC, zona waktu lokal, dan sinkronisasi jam. Jika tidak mempunyai wewenang menjalankan tindakan, eskalasi kepada pemilik yang tercatat dalam runbook.

## Latihan

Buat runbook satu halaman untuk akun pegawai yang diduga bocor. Tambahkan titik berhenti bila alat menunjukkan akun pelanggan lain ikut terdampak. Tulis pemberitahuan internal tiga kalimat: kejadian yang diketahui, dampak yang sudah dipastikan, dan waktu pembaruan berikutnya. Hindari menyebut atribusi pelaku tanpa bukti.

## Bukti kelulusan

Orang lain dapat menjalankan tabletop dari runbook Anda dan memahami siapa mengambil keputusan. Anda lulus bila membedakan containment, eradication, dan recovery, mempertahankan bukti, serta menyatakan ketidakpastian tanpa menghentikan tindakan yang sudah beralasan.

## Referensi

- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): pedoman respons insiden terkini yang diperiksa untuk tutorial ini.
- [MITRE ATT&CK](https://attack.mitre.org/): sumber hipotesis perilaku, bukan alat penentuan identitas pelaku.
