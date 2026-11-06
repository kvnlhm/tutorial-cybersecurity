# Bab 00: Mulai dari nol dan ukur kemampuan Anda

## Tujuan dan prasyarat

Anda akan memahami pekerjaan cybersecurity, menentukan batas latihan, dan membuat catatan belajar. Jika membuka folder, menyimpan file, atau membedakan browser dengan terminal masih membingungkan, kerjakan [Pra-bab: mulai dari nol](pra-00-mulai-dari-nol.md) dahulu. Pecah bab ini menjadi dua sesi 15–25 menit: sesi pertama mengenali kasus, sesi kedua membuat catatan serta menjelaskan keputusan. Anda boleh mengulang satu sesi sesuai kebutuhan.

Kata *hacker* dapat merujuk pada orang yang memahami sistem lalu menemukan cara mengubah perilakunya. Dalam buku ini, Anda belajar menguji sistem dengan izin, menjelaskan dampak, dan membantu pemilik memperbaikinya. Kemampuan tinggi tumbuh dari latihan, kegagalan yang dianalisis, dan pengalaman menghadapi sistem yang berbeda. Menyelesaikan buku memberi landasan serta jalur pendalaman; keahlian profesional perlu pembuktian di luar halaman buku.

## Konsep

Bayangkan Anda membantu **Laundry Aman**, usaha fiktif yang menerima pesanan melalui website. Ada laptop kasir, Wi-Fi pelanggan, aplikasi pesanan, dan cadangan data. Seluruh nama pelanggan dan transaksi dalam latihan adalah rekaan.

Anda perlu menjaga tiga hal yang dikenal sebagai **CIA triad**:

| Tujuan | Arti | Contoh Laundry Aman |
|---|---|---|
| Confidentiality | Kerahasiaan | Pelanggan hanya melihat pesanannya sendiri |
| Integrity | Keutuhan dan ketepatan | Orang lain tidak bisa mengubah tagihan |
| Availability | Ketersediaan | Kasir bisa menerima pesanan saat toko buka |

**Aset** adalah sesuatu yang bernilai, misalnya daftar pesanan. **Ancaman** adalah kejadian atau tindakan yang dapat merugikan aset. **Kerentanan** adalah kelemahan yang memungkinkan kerugian, seperti akun kasir bersama tanpa pembatasan hak. **Risiko** menggabungkan kemungkinan kejadian dan dampaknya. Rumus sederhana dalam kelas dapat membantu membandingkan prioritas, tetapi angka tanpa bukti mudah menyesatkan.

Satu masalah sering menyentuh beberapa tujuan. File pesanan yang terhapus mengganggu ketersediaan. Pelaku yang mengubah angka sebelum menghapusnya juga merusak integritas. Cadangan data membantu pemulihan, tetapi cadangan tanpa pembatasan akses dapat membocorkan data.

Bidang ini punya beberapa pekerjaan. **Blue team** membangun perlindungan dan menyelidiki peringatan. **Pentester** menguji kelemahan dalam ruang lingkup yang disepakati. **AppSec** membantu pengembang membuat aplikasi aman. **DFIR** menangani forensik digital dan respons insiden. **Security researcher** meneliti akar masalah yang belum dipahami. Seseorang dapat menguasai satu bidang mendalam sambil memahami bidang lain.

## Praktik

### 1. Buat kontrak belajar

Buat folder `hasil-belajar` di dalam folder tutorial. Simpan dokumen `00-kontrak-belajar.md` melalui editor teks. Isi dengan jawaban Anda:

Ekstensi `.md` berarti Markdown, format teks yang memakai tanda sederhana untuk judul dan daftar. Anda dapat mengeditnya dengan Notepad atau editor teks. Gunakan langkah simpan-buka-ulang pada pra-bab; tampilan yang masih berupa teks biasa tetap dapat dipakai untuk belajar.

```text
Tujuan tiga bulan pertama:
Waktu belajar per minggu:
Perangkat yang boleh saya gunakan:
Sumber data latihan: data buatan sendiri
Target pengujian: localhost dan akun lab yang disediakan penyelenggara
Hal yang menghentikan latihan: data nyata muncul atau target di luar izin
Tempat menyimpan catatan:
```

**Scope**, atau ruang lingkup, menentukan target dan tindakan yang boleh diuji. Izin memakai Wi-Fi tidak otomatis memberi izin menguji laptop orang lain. Kepemilikan sebuah domain juga tidak otomatis memberi izin menyerang layanan pihak ketiga yang terhubung dengannya. Untuk pekerjaan nyata, pemilik dan penguji menyepakati target, waktu, metode, penanganan data, serta kontak darurat secara tertulis.

### 2. Kenali perbedaan kejadian

Tulis tujuan CIA yang terdampak untuk empat kasus:

1. Pelanggan A bisa membaca alamat pelanggan B.
2. Kasir salah memasukkan harga dari Rp30.000 menjadi Rp3.000.
3. Laptop rusak dan cadangan terakhir belum pernah diuji.
4. Pemilik memakai satu password yang sama untuk email dan aplikasi toko.

Kasus pertama terutama menyangkut kerahasiaan. Kasus kedua menyangkut integritas, walaupun belum tentu melibatkan penyerang. Kasus ketiga mengancam ketersediaan. Kasus keempat merupakan kelemahan pengelolaan identitas yang dapat memengaruhi ketiganya. Anda belajar membedakan bukti kejadian dari kemungkinan dampak.

### 3. Buat jurnal eksperimen

Untuk setiap latihan, catat tujuan, dugaan awal, langkah, hasil, penjelasan, dan perbaikan. Sertakan perintah yang relevan. Jangan memasukkan password, token sesi, atau data pribadi ke jurnal yang akan diunggah. Jika Anda memakai AI, minta penjelasan error dan periksa jawabannya melalui dokumentasi serta percobaan. Salinan jawaban tanpa pemahaman belum menjadi bukti kemampuan.

## Hasil yang diharapkan

Anda mempunyai kontrak belajar dan empat analisis singkat. Anda bisa menjelaskan apa yang boleh diuji sebelum membicarakan alat. Setelah sebuah latihan, Anda mampu menceritakan perubahan yang terjadi dan bukti yang mendukung penjelasan Anda.

## Jika macet

Mulai dengan masalah sehari-hari: akun terkunci, file hilang, atau transaksi salah. Hubungkan setiap masalah dengan aset dan dampaknya. Anda belum perlu menghafal nama alat atau singkatan sertifikasi. Jika sebuah latihan menyebut perangkat yang belum Anda punya, kerjakan bagian konsep dan data sintetis lebih dahulu.

## Latihan

Pilih satu aset Laundry Aman. Buat dua skenario kegagalan, satu tindakan pencegahan, dan cara memeriksa bahwa pencegahan itu bekerja. Contoh: cadangkan file pesanan lalu pulihkan salinannya ke folder berbeda. Menulis “sudah punya backup” tanpa percobaan pemulihan belum membuktikan kesiapan.

## Bukti kelulusan

Anda lulus bab ini jika bisa membedakan aset, ancaman, kelemahan, dan risiko dengan contoh Anda sendiri; menyebutkan target latihan yang diizinkan; serta menyimpan jurnal tanpa informasi rahasia. Minta teman membaca satu analisis Anda. Jika ia mengerti dampaknya tanpa belajar komputer dahulu, penjelasan Anda sudah berguna.

**Uji pindah kasus:** toko menambah printer yang mencetak nota. Tulis satu kemungkinan masalah dan akibatnya tanpa memakai contoh website di atas. Bila Anda hanya mengganti kata “website” menjadi “printer” tetapi belum bisa menerangkan akibatnya, kembali ke hubungan aset dan dampak. Penilaian ini memeriksa pemahaman pada situasi baru, bukan kecepatan menghafal istilah.

<details>
<summary>Contoh pembahasan printer setelah Anda mencoba</summary>

Printer berhenti bekerja ketika toko buka mengganggu ketersediaan proses cetak. Orang yang mengambil nota pelanggan lain dapat membocorkan informasi pada kertas. Salah satu pencegahan untuk kasus kedua adalah menempatkan printer di area petugas dan memberikan nota kepada penerima yang tepat. Untuk menguji prosesnya, gunakan nota dummy dan periksa kepada siapa petugas menyerahkannya. Kontrol yang cocok bergantung pada masalah yang Anda pilih.

</details>

## Referensi

- [Roadmap Cyber Security](https://roadmap.sh/cyber-security): peta kelompok kompetensi yang menjadi acuan urutan buku.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): kerangka untuk mengelola risiko keamanan organisasi.
