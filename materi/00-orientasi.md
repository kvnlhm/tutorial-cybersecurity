# Bab 00: Mulai dari nol dan ukur kemampuanmu

Tahap 1 dari 6: Mulai memakai alat

## Tujuan dan prasyarat

Kamu akan mengenali pekerjaan keamanan siber, menentukan batas latihan, dan membuat catatan belajar.
Jika membuka folder, menyimpan file, atau membedakan browser dan terminal masih membingungkan, kerjakan [Pra-bab: mulai dari nol](pra-00-mulai-dari-nol.md).

Bagi bab ini menjadi dua sesi 15–25 menit.
Sesi pertama mengenali kasus Laundry Aman. Sesi kedua membuat catatan dan menjelaskan keputusan.
Kamu boleh mengulang sesuai kebutuhan.

## Konsep

Kasir Laundry Aman menerima pesanan dan menyimpan alamat pelanggan.
Ia perlu menyerahkan informasi kepada orang yang tepat, menjaga angka tagihan, dan tetap melayani ketika toko buka.
Kita akan melihat apa yang bisa mengganggu pekerjaan itu.
Setelah itu, kamu akan memilih batas latihan dan mencatat bukti hasilnya.

### Apa yang perlu dijaga di meja kasir?

Laundry Aman adalah usaha rekaan dengan laptop kasir, Wi-Fi pelanggan, aplikasi pesanan, dan cadangan data.
Semua nama pelanggan dan transaksi latihan juga rekaan.
Kita dapat mencoba kesalahan tanpa memakai data pelanggan sungguhan.

Kasir menyimpan daftar pesanan yang diperlukan toko.
Sesuatu yang bernilai dan perlu dijaga disebut **aset**, seperti barang berharga dalam lemari toko.
Daftar pesanan adalah salah satu aset Laundry Aman.

Toko perlu menjaga tiga sisi aset sekaligus.
Ketiganya dikenal sebagai **CIA triad**, pengingat untuk kerahasiaan, keutuhan, dan ketersediaan.
Tabel ini menunjukkan kejadian yang ingin kita pertahankan.

| Tujuan | Arti | Contoh Laundry Aman |
|---|---|---|
| Confidentiality | Kerahasiaan | Pelanggan hanya melihat pesanannya sendiri |
| Integrity | Keutuhan dan ketepatan | Orang lain tidak bisa mengubah tagihan |
| Availability | Ketersediaan | Kasir bisa menerima pesanan saat toko buka |

Satu kejadian bisa mengganggu beberapa sisi.
File pesanan yang terhapus mengganggu ketersediaan. Jika pelaku mengubah angka sebelum menghapusnya, keutuhan data juga rusak.
Cadangan membantu pemulihan, tetapi salinannya dapat membocorkan data jika aksesnya terlalu luas.

### Dari kelemahan ke kemungkinan kerugian

Bayangkan semua pegawai Laundry Aman memakai satu akun kasir tanpa pembatasan hak.
Kelemahan yang memungkinkan kerugian disebut **kerentanan**, seperti kunci lemari yang bisa dipakai orang tanpa kewenangan.
Akun bersama tadi adalah contoh kelemahan pengelolaan akses.

Seseorang dapat memakai kelemahan itu untuk membaca alamat pelanggan lain.
Kejadian atau tindakan yang dapat merugikan aset disebut **ancaman**, seperti orang mengambil isi lemari tanpa izin.

Contohnya, satu file berisi alamat pelanggan dan tagihan sekaligus.
Membaca alamat tanpa izin mengganggu kerahasiaan; mengubah tagihan mengganggu keutuhan.

Saat memilih masalah yang didahulukan, pertimbangkan peluang kejadian dan akibatnya pada toko.
Gabungan kemungkinan dan dampak ini disebut **risiko**, seperti menilai kemungkinan pakaian tertukar beserta kerugiannya.
Rumus sederhana membantu membandingkan prioritas, tetapi angka tetap membutuhkan bukti.

### Batas latihan seperti apa yang disepakati?

Pemilik laundry boleh mengizinkanmu mencoba aplikasi latihan tanpa memberi izin memeriksa semua laptop pegawai.
**Scope**, atau ruang lingkup, membatasi target dan tindakan, seperti kesepakatan bagian toko yang boleh diperiksa.
Izin memakai Wi-Fi tetap tidak memberi izin menguji laptop orang lain.

Pemilik suatu nama situs juga tidak otomatis berwenang mengizinkan pengujian layanan pihak ketiga yang terhubung dengannya.
Untuk pekerjaan nyata, pemilik dan penguji menyepakati target, waktu, metode, penanganan data, serta kontak darurat secara tertulis.

Pada latihan awal, pakai komputer sendiri atau lingkungan yang penyelenggara sediakan.
**Lab** berarti lingkungan latihan dengan target dan data yang sudah disiapkan.

#### Cukup kenali dulu

- **Domain**: nama suatu situs; kepemilikan nama itu tidak mencakup izin menguji seluruh layanan terkait.
- **Hacker**: orang yang memahami sistem lalu menemukan cara mengubah perilakunya; buku ini mengajarkan pengujian berizin dan perbaikan.
- **AI**: alat bantu yang dapat memberi penjelasan atau jawaban; cocokkan jawabannya dengan dokumentasi dan hasil percobaan.

### Siapa yang mengerjakan keamanan toko?

Ketika aplikasi Laundry Aman berkembang, orang dapat membagi tugas menjaga, menguji, dan menyelidikinya.
Kamu boleh mendalami satu bidang sambil memahami bidang lain.
Keahlian tumbuh melalui latihan, pemeriksaan kegagalan, dan pengalaman pada sistem berbeda.

#### Cukup kenali dulu

- **Blue team**: membangun perlindungan dan menyelidiki peringatan.
- **Pentester**: menguji kelemahan dalam ruang lingkup yang disepakati.
- **AppSec**: membantu pengembang membuat aplikasi aman.
- **DFIR**: memeriksa bukti digital dan menangani kejadian keamanan.
- **Security researcher**: meneliti akar masalah yang belum dipahami.

Selesai membaca memberi landasan dan jalur pendalaman.
Kemampuan profesional tetap perlu dibuktikan lewat pekerjaan dan latihan di luar halaman buku.

### Ringkasan

- Aset adalah sesuatu yang perlu dijaga; satu aset dapat mengalami beberapa jenis kerugian.
- Ancaman memanfaatkan keadaan tertentu; kerentanan memberi kesempatan terjadinya kerugian.
- Risiko menghubungkan kemungkinan dengan dampak dalam kasus yang sedang diperiksa.
- Tentukan izin sebelum memilih alat atau menguji target.

### Cek pemahaman

1. Apa perbedaan membaca alamat pelanggan lain dan mengubah tagihannya?
2. Pada kasus akun bersama, mana aset, kelemahan, dan ancamannya?
3. Mengapa izin memakai Wi-Fi tidak mencakup pengujian laptop pegawai?

## Praktik

### 1. Buat kontrak belajar

Di folder tutorial, buat folder `hasil-belajar` jika belum ada.
Melalui editor teks, simpan dokumen `00-kontrak-belajar.md` di dalamnya.
**Markdown** adalah format teks dengan tanda sederhana untuk judul dan daftar; file-nya memakai ekstensi `.md`.

Pakai Notepad atau editor teks, lalu ikuti cara simpan-buka-ulang pada pra-bab.
Tampilan yang masih berupa teks biasa tetap bisa kamu pakai.
`localhost` adalah nama untuk komputer sendiri, seperti latihan lokal yang nanti akan kamu jalankan.

Isi catatan berikut, lalu tutup dan buka kembali untuk memeriksa hasil simpan:

```text
Tujuan tiga bulan pertama:
Waktu belajar per minggu:
Perangkat yang boleh saya gunakan:
Sumber data latihan: data buatan sendiri
Target pengujian: localhost dan akun lab yang disediakan penyelenggara
Hal yang menghentikan latihan: data nyata muncul atau target di luar izin
Tempat menyimpan catatan:
```

Isi target hanya dengan lingkungan yang diizinkan. Hentikan latihan jika data nyata muncul atau target keluar dari izin.

### 2. Kenali perbedaan kejadian

Di catatan belajar, tulis tujuan CIA yang terdampak untuk setiap kasus:

1. Pelanggan A bisa membaca alamat pelanggan B.
2. Kasir salah memasukkan harga dari Rp30.000 menjadi Rp3.000.
3. Laptop rusak dan cadangan terakhir belum pernah diuji.
4. Pemilik memakai satu password yang sama untuk email dan aplikasi toko.

Bandingkan alasanmu dengan penjelasan berikut.
Kasus pertama terutama menyangkut kerahasiaan. Kasus kedua menyangkut integritas, yaitu keutuhan, walaupun kesalahan itu bisa terjadi tanpa penyerang.

Kasus ketiga mengancam ketersediaan.
Kasus keempat adalah kelemahan pengelolaan identitas yang dapat memengaruhi ketiganya.
Pisahkan kejadian yang terlihat dari dampak yang masih mungkin terjadi.

### 3. Buat jurnal eksperimen

Setelah mencoba sesuatu di Laundry Aman, catat tujuan, dugaan awal, langkah, hasil, penjelasan, dan perbaikan.
Sertakan perintah yang dipakai. Catatan ini membantu orang lain mengikuti alasanmu.

**Token sesi** adalah pengenal login yang perlu dirahasiakan, seperti tiket masuk yang dapat dipakai pemegangnya.
Jangan memasukkan password, data pribadi, atau token sesi ke jurnal yang akan diunggah.

Jika memakai AI, minta penjelasan pesan kesalahan lalu periksa jawabannya melalui dokumentasi dan percobaan.
Salinan jawaban saja belum menunjukkan bahwa kamu memahami hasilnya.

## Hasil yang diharapkan

Kamu mempunyai kontrak belajar dan empat analisis singkat.
Kamu dapat menyebut apa yang boleh diuji, lalu menceritakan perubahan hasil latihan beserta bukti yang mendukungnya.

## Jika macet

Mulai dari akun terkunci, file hilang, atau transaksi salah.
Hubungkan masalah itu dengan aset dan dampaknya. Nama alat dan singkatan sertifikasi dapat dipelajari kemudian.
Jika perangkat latihan belum tersedia, kerjakan konsep dan data sintetis, yaitu data buatan, lebih dahulu.

## Latihan

Pilih satu aset Laundry Aman. Buat dua skenario kegagalan, satu tindakan pencegahan, dan cara memeriksa pencegahan itu.
Contohnya, cadangkan file pesanan lalu pulihkan salinannya ke folder berbeda.
Pernyataan “sudah punya backup” perlu dilengkapi hasil percobaan pemulihan.

## Bukti kelulusan

- [ ] Saya dapat membedakan aset, ancaman, kelemahan, dan risiko dengan contoh sendiri.
- [ ] Saya menyebut target latihan yang diizinkan dan menyimpan jurnal tanpa rahasia.
- [ ] Saya meminta teman membaca satu analisis dan menjelaskan dampaknya tanpa belajar komputer dahulu.

### Uji pindah kasus

Toko menambah printer untuk mencetak nota. Tulis satu kemungkinan masalah dan akibatnya dengan contoh printer, bukan menyalin kasus website.
Jika baru mengganti nama perangkat tanpa bisa menerangkan akibatnya, ulangi hubungan aset dan dampak.
Tugas ini memeriksa pemahaman pada situasi baru; kecepatan menghafal istilah tidak menjadi ukuran.

<details>
<summary>Pembahasan setelah mencoba: printer toko</summary>

Printer berhenti ketika toko buka mengganggu ketersediaan pencetakan.
Orang yang mengambil nota pelanggan lain dapat membocorkan informasi pada kertas.
Untuk mencegah kasus kedua, tempatkan printer di area petugas dan serahkan nota kepada penerima yang tepat.

Uji proses memakai nota dummy, yaitu nota buatan, lalu periksa siapa penerimanya.
Pilih kontrol sesuai masalah yang kamu temukan.

</details>

### Lanjut belajar

Jika menyimpan catatan masih sulit, kembali ke [pra-bab](pra-00-mulai-dari-nol.md).
Setelah bukti siap, lanjut ke [Bab 01: menyiapkan meja praktik](01-lab.md).

## Referensi

- [Roadmap Cyber Security](https://roadmap.sh/cyber-security): peta kelompok kemampuan acuan urutan buku.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): kerangka pengelolaan risiko keamanan organisasi.
