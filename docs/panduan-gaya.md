# Panduan gaya dan templat bab

## Untuk siapa kita menulis

Bu Rina memakai WhatsApp dan browser, tetapi belum terbiasa dengan terminal.
Ia membutuhkan arti kata baru dan petunjuk tempat mengetik sebelum mencoba.
Pada Bab 09–26, Dimas membawa bekal bab sebelumnya, tanpa pengetahuan tambahan.
Kita memakai pekerjaan di Laundry Aman untuk menjelaskan alasan setiap tindakan.
Pembaca maju setelah bisa menjelaskan dan mengulang hasil, sesuai bukti kelulusan bab.

## Aturan bahasa

Contoh “sebelum” pada aturan 1–9 mengutip sumber versi `7996351`.
Aturan 10–14 mengutip draf dua bab contoh sebelum revisi alur cerita.
Nama bab menunjukkan asal kutipan. Contoh pendek hanya memperagakan aturan terkait.
Saat menulis bab utuh, pertahankan seluruh rincian teknis di sekitarnya.

1. **Apakah setiap kalimat penjelasan paling panjang 24 kata?**
   Hitung kata berdasarkan spasi. Pecah kalimat panjang pada pergantian tindakan atau alasan.
   Kutipan asli, kode, perintah, URL, dan judul resmi boleh melewati batas.

   Sebelum, Bab 00: “Anda lulus bab ini jika bisa membedakan aset, ancaman, kelemahan, dan risiko dengan contoh Anda sendiri; menyebutkan target latihan yang diizinkan; serta menyimpan jurnal tanpa informasi rahasia.”

   Sesudah: “Untuk lulus, jelaskan aset, ancaman, kelemahan, dan risiko dengan contohmu sendiri. Sebutkan target latihan yang diizinkan. Simpan jurnal tanpa informasi rahasia.”

2. **Apakah satu paragraf membahas satu gagasan, dengan paling banyak 60 kata?**
   Pisahkan penjelasan fungsi, batas kesimpulan, dan tindakan berikutnya bila ketiganya memerlukan uraian sendiri.

   Sebelum, Bab 03: “Alamat IP dapat berubah dan satu perangkat dapat mempunyai beberapa alamat. IP saja belum membuktikan identitas manusia.”

   Sesudah: “Satu perangkat dapat mempunyai beberapa alamat IP. Alamatnya juga dapat berubah.”

   “Untuk mengenali orang yang memakai perangkat, kamu memerlukan bukti lain selain alamat IP.”

3. **Apakah satu paragraf memperkenalkan paling banyak satu istilah teknis baru?**
   Singkatan dan kepanjangannya dihitung satu istilah. Arti sehari-harinya harus hadir dalam kalimat yang sama.
   Istilah dianggap dikenal hanya jika prasyarat bab sudah mengajarkannya.
   Pada daftar atau tabel, periksa batas ini per butir atau baris.

   Sebelum, Bab 06: “**String** menyimpan teks, **integer** menyimpan bilangan bulat, dan **list** menyimpan urutan nilai.”

   Sesudah: “**String** menyimpan teks, seperti nama pelanggan.”

   “**Integer** menyimpan bilangan bulat, seperti jumlah pesanan.”

   “**List** menyimpan urutan nilai, seperti daftar status pesanan.”

4. **Apakah sapaan kepada pembaca memakai “kamu”?**
   Gunakan “kita” untuk penalaran bersama. Gunakan “saya” pada contoh catatan milik pembaca.
   Pertahankan sapaan asli dalam kutipan, data, pesan program, dan kode yang wajib tetap.

   Sebelum, Bab 03: “Anda akan membaca alamat IP, menghitung subnet kecil, serta membedakan DNS, TCP, UDP, dan port.”

   Sesudah: “Kamu akan membaca alamat jaringan dan menghitung pembagian alamatnya. Kita juga akan mengikuti perjalanan data dari kasir ke aplikasi.”

5. **Apakah instruksi menyebut tindakan langsung dengan kata sehari-hari?**
   Pakai “adalah”, “memakai”, “lalu”, dan “coba” sesuai makna.
   Ganti “merupakan” dengan “adalah” atau kata kerja konkret. Pertahankan kata resmi bila maknanya diperlukan.

   Sebelum, pra-bab: “PowerShell dan Bash merupakan dua shell yang berbeda.”

   Sesudah: “PowerShell dan Bash memakai aturan perintah yang berbeda.”

6. **Apakah penyangkalan menjelaskan batas bukti atau mencegah kesalahan nyata?**
   Buang penyangkalan hiasan. Untuk batas bukti, sebutkan hasil yang terbukti dan pemeriksaan yang masih dibutuhkan.
   Pertahankan larangan keamanan, seperti larangan mengunggah rahasia.

   Sebelum, pra-bab: “Lima menit merupakan target kecil untuk percobaan awal, bukan batas waktu.”

   Sesudah: “Sisihkan sekitar lima menit untuk percobaan awal. Kamu boleh mengulangnya sesuai kebutuhan.”

7. **Apakah bentuk penyajian cocok dengan tugas pembaca?**
   Pakai nomor untuk urutan tindakan dan butir untuk kumpulan syarat.
   Pakai tabel hanya untuk membandingkan hal dengan kolom yang sama, setelah menjelaskan konsepnya.
   Batasi tabel penjelasan menjadi empat kolom. Pecah tabel yang memperkenalkan banyak konsep menjadi uraian bertahap.

   Sebelum, Bab 13: “Catat tiga hasil: pencarian nama normal, masukan latihan pada query rentan, dan masukan yang sama pada query aman.”

   Sesudah: “Bandingkan hasil dengan tabel berikut.”

   | Percobaan | Hasil yang dicatat |
   |---|---|
   | Nama normal | Baris yang ditemukan |
   | Masukan latihan, query rentan | Baris yang ditemukan |
   | Masukan sama, query berparameter | Baris yang ditemukan |

8. **Apakah pilihan perangkat terpisah dan pembaca tahu jalur yang dipilih?**
   Tulis “Pilih jalur sesuai perangkatmu” sebelum pilihan.
   Gunakan label **Windows PowerShell**, **Linux**, **macOS**, atau **HP** pada baris sendiri.
   Gabungkan Linux/macOS hanya jika langkahnya sama. Nyatakan kebutuhan komputer untuk langkah yang tidak tersedia di HP.
   Jangan menciptakan perintah pengganti saat tugas hanya mengizinkan penyuntingan bahasa.

   Sebelum, Bab 03: “Linux/macOS memakai perintah sama dengan mengganti `py` menjadi `python3`.”

   Sesudah:

   **Linux/macOS**

   “Pakai perintah di atas. Ganti `py` menjadi `python3`.”

9. **Apakah setiap langkah menjelaskan tempat, tindakan, lalu hasil yang diperiksa?**
   Sebut shell dan folder sebelum perintah yang memakai file relatif.
   Beri label blok: perintah untuk dijalankan, kode untuk disimpan, atau hasil untuk dibandingkan.
   Setelah blok, sebut hasil yang terlihat. Jika hasil bergantung perangkat, sebut bagian yang boleh berbeda.
   Pisahkan hasil yang terlihat dari kesimpulan keamanan.

   Sebelum, Bab 13: “**2. Periksa akses objek.** Jalankan `py labs/access_demo.py`.”

   Sesudah: “Dari folder utama tutorial, jalankan `py labs/access_demo.py` di Windows PowerShell. Cocokkan hasilnya: Alice boleh membaca nota 101; Bob ditolak.”

10. **Apakah Konsep dibuka dengan gambaran seluruh alur dalam tiga sampai enam kalimat sehari-hari?**
    Letakkan gambaran sebelum subbagian pertama. Hindari istilah tebal baru dan jelaskan pekerjaan yang akan diikuti pembaca.

    Sebelum, pembuka Konsep Bab 03: “Kasir menyimpan nota di laptop, lalu mengirimnya ke aplikasi Laundry Aman. **Jaringan** menghubungkan perangkat agar bisa bertukar data, termasuk nota tersebut.”

    Sesudah: “Kasir mengirim nota ke aplikasi Laundry Aman. Laptop perlu mencari alamat tujuan, memilih jalan, lalu menyerahkannya ke layanan penerima. Kita akan mengikuti perjalanan itu.”

11. **Apakah setiap subbagian penjelasan dimulai dengan kejadian di Laundry Aman dan tersambung ke kejadian berikutnya?**
    Perkenalkan istilah sebagai nama hal yang baru dilihat pembaca. Hubungkan paragraf dengan kebutuhan atau akibat, bukan sekadar urutan definisi.
    Batasi deretan menjadi tiga paragraf definisi. Setelah itu, berikan contoh, tabel kecil, gambar teks, atau pertanyaan sebelum definisi berikutnya.
    Aturan kejadian berlaku pada penjelasan Konsep; Ringkasan dan Cek pemahaman mengikuti bentuknya sendiri.

    Sebelum, Bab 03: “**Ethernet** adalah teknologi komunikasi jaringan yang lazim memakai kabel.”

    Sesudah: “Kasir menghubungkan laptop dan printer dengan kabel. Teknologi jaringan berkabel yang lazim dipakai ini disebut **Ethernet**. Setelah tersambung, perangkat perlu menentukan tujuan pengiriman.”

12. **Apakah setiap istilah inti yang abstrak memiliki satu perbandingan sehari-hari beserta batasnya jika diperlukan?**
    Pilih satu perbandingan untuk tiap istilah dan gunakan secara konsisten dalam bab.
    Hubungkan perbandingan dengan contoh nyata. Sebut batasnya jika pembaca bisa salah menyamakan analogi dengan cara kerja teknis.

    Sebelum, Bab 03: “**Mask** menunjukkan bagian jaringan pada alamat.”

    Sesudah: “**Mask** seperti pembatas pada formulir alamat: ia memisahkan bagian jaringan dari bagian perangkat. Untuk `/24`, mask-nya `255.255.255.0`.”

    “Perbandingan formulir membantu mengenali pembagian. Komputer tetap menghitung bit; prefix lain dapat membagi bagian angka secara berbeda.”

13. **Apakah istilah inti dijelaskan melalui cerita dan istilah pelengkap dikelompokkan setelah cerita?**
    Istilah inti dipakai dalam Praktik, Latihan, atau Bukti kelulusan. Istilah dari prasyarat cukup diberi pengingat bila perlu.
    Tempatkan istilah pelengkap dalam daftar “Cukup kenali dulu”, paling banyak lima butir per daftar.
    Setiap butir memakai satu baris: nama tebal dan arti singkat. Rincian ahli boleh masuk Pendalaman opsional.
    Pertahankan semua fakta; letakkan larangan keamanan di tempat yang terlihat tanpa membuka kotak.

    Sebelum, Bab 03: “**Datagram** adalah satuan pesan yang dikirim melalui jaringan.”

    Sesudah, setelah cerita memilih layanan:

    #### Cukup kenali dulu

    - **Datagram**: satuan pesan yang dikirim melalui jaringan.

14. **Apakah setelah judul bab terdapat baris tahap yang sesuai rancangan enam tahap?**
    Pakai bentuk “Tahap N dari 6: Nama tahap” pada paragraf setelah judul.
    Baris pertama file tetap judul tingkat satu. Paragraf tahap tetap teks biasa agar pembangun buku mempertahankannya tanpa mengubah daftar isi.

    Sebelum, Bab 03: “# Bab 03: Memahami perjalanan data di jaringan” langsung diikuti “## Tujuan dan prasyarat”.

    Sesudah:

    ```markdown
    # Bab 03: Memahami perjalanan data di jaringan

    Tahap 2 dari 6: Memahami cara sistem bekerja

    ## Tujuan dan prasyarat
    ```

## Istilah

Pertahankan nama perintah, protokol, produk, atribut, dan istilah yang pembaca butuhkan untuk mencari dokumentasi.
Untuk kata umum, pilih padanan Indonesia: “masukan”, “hasil”, “permintaan”, “jawaban”, “hak akses”, dan “uji ulang”.

Pada kemunculan pertama, tulis **istilah** diikuti arti sehari-hari dan contoh Laundry Aman.

Misalnya: “**Default gateway** adalah router tujuan untuk mengirim data ke luar jaringan yang terhubung langsung.”
Jelaskan “router” lebih dahulu. Jangan memulai definisi dengan istilah lain yang masih asing.

Cetak tebal istilah hanya saat pertama didefinisikan dalam bab.
Istilah dari prasyarat boleh mendapat pengingat singkat tanpa cetak tebal.
Gunakan kode sebaris untuk nama file, masukan persis, opsi, dan pesan program.

Selaraskan arti dengan [kamus](../lampiran/kamus.md). Definisi dekat contoh tetap wajib; pembaca tidak harus bolak-balik membuka kamus.
Catat istilah yang belum ada untuk penulis kamus. Jangan mengubah arti teknis demi memendekkan kalimat.

## Templat bab

Salin kerangka berikut. Ganti isi dalam kurung siku dan hapus petunjuknya.
Delapan judul tingkat dua wajib tetap persis. Nomor langkah berada pada judul tingkat tiga agar mudah dirujuk.

```markdown
# Bab NN: [Judul bab]

Tahap [N] dari 6: [Nama tahap sesuai rancangan materi]

## Tujuan dan prasyarat

[Hasil yang akan kamu buat, bekal dari bab sebelumnya, perangkat, dan batas latihan.]

## Konsep

[Gambaran seluruh alur bab dalam tiga sampai enam kalimat sehari-hari, tanpa istilah tebal baru.]

### [Pertanyaan atau pekerjaan pertama di Laundry Aman]

[Kejadian di toko, istilah inti sebagai nama hal yang terlihat, lalu kebutuhan atau akibat yang menyambung paragraf.]
[Satu perbandingan sehari-hari untuk istilah inti yang abstrak; sebut batasnya bila bisa menyesatkan.]

#### Cukup kenali dulu

- **[Istilah pelengkap]**: [Arti singkat; maksimal lima butir per daftar.]

### [Konsep berikutnya]

[Mulai dari kejadian berikutnya; paling banyak tiga paragraf definisi sebelum contoh, tabel kecil, gambar teks, atau pertanyaan.]

<details>
<summary>Pendalaman opsional: [topik]</summary>

[Rincian ahli atau kasus khusus, setelah penjelasan dasar.]

</details>

### Ringkasan

- [Gagasan yang membantu tindakan, tanpa istilah baru.]
- [Gagasan berikutnya jika dibutuhkan.]

### Cek pemahaman

1. [Pertanyaan alasan atau prediksi dari konsep yang baru dijelaskan.]
2. [Pertanyaan pembeda yang diperlukan untuk praktik.]

## Praktik

### 1. [Kata kerja dan sasaran]

[Tempat bekerja, tindakan, perintah atau kode asli, lalu hasil yang diperiksa.]

### 2. [Kata kerja dan sasaran berikutnya]

[Satu kelompok tindakan menuju satu hasil kecil.]

## Hasil yang diharapkan

[Hasil konkret beserta bagian yang bisa berbeda dan batas kesimpulannya.]

## Jika macet

[Gejala, satu pemeriksaan awal, lalu langkah aman.]

## Latihan

[Seluruh tugas asli. Urutkan dari bantuan lebih banyak menuju kasus baru.]

<details>
<summary>Pembahasan setelah mencoba: [topik]</summary>

[Alasan jawaban, tanpa menyembunyikan tugas atau syarat wajib di sini.]

</details>

## Bukti kelulusan

- [ ] Saya menyimpan [hasil yang dapat diperiksa].
- [ ] Saya dapat menjelaskan [hubungan atau batas penting].

### Lanjut belajar

[Tautan bab sebelumnya, langkah jika belum siap, dan tautan bab berikutnya.]

## Referensi

- [Rujukan asli beserta kegunaannya.]
```

Gunakan kisaran berikut untuk mengatur ruang. Kisaran membantu penyuntingan; kewajiban mempertahankan isi teknis tetap menang.

| Bagian | Kisaran dan isi |
|---|---|
| Tujuan dan prasyarat | 60–130 kata; hasil, tautan bekal, perangkat, batas aman |
| Konsep | 350–1.400 kata; gambaran awal, cerita istilah inti, dan daftar pelengkap |
| Praktik | 250–850 kata di luar kode; langkah kecil dengan pemeriksaan hasil |
| Hasil yang diharapkan | 40–120 kata; cocokkan dengan praktik |
| Jika macet | 40–180 kata; pasangan gejala dan pemeriksaan |
| Latihan | 80–250 kata; tugas asli dan pembahasan bila sudah ada |
| Bukti kelulusan | 50–170 kata; daftar centang berisi seluruh syarat asli |
| Referensi | Semua rujukan asli; beri alasan singkat bila membantu |

Batasi panjang bab baru di bawah sekitar dua kali jumlah kata bab lama.
Hitung dengan pemisahan berdasarkan spasi, termasuk tabel dan kode. Jangan membuang fakta untuk mengejar angka.
Jika isi belum muat, pecah sesi dan subbagian di file yang sama. Laporkan jika batas tetap terlampaui.

Gunakan satu penanda untuk rincian ahli dan kasus khusus: kotak lipat berjudul “Pendalaman opsional: [topik]”.
Simpan definisi, larangan keamanan, perintah, dan syarat lulus yang diperlukan praktik utama di luar kotak.
Kotak pembahasan latihan memakai judul tersendiri seperti kerangka di atas.

Sebelum menulis, tandai istilah yang diperlukan untuk Praktik, Latihan, dan Bukti kelulusan sebagai istilah inti.
Jelaskan istilah inti melalui kejadian; kelompokkan sisanya setelah cerita pada subbagian terkait.
Label “Cukup kenali dulu” membedakan prioritas belajar, tanpa menghapus istilah dari bab.

Tutup Konsep dengan Ringkasan berisi dua sampai lima butir, tanpa konsep baru.
Lanjutkan dengan dua sampai empat pertanyaan Cek pemahaman.
Jawabannya harus tersedia pada uraian sebelumnya. Pertanyaan tambahan ini tidak menggantikan latihan atau bukti kelulusan asli.

## Bab lanjutan dan spesialis (09 sampai 26)

Dimas sudah menyelesaikan bab sebelumnya. Ia masih membutuhkan definisi untuk konsep yang belum pernah diajarkan.
Sebut nomor bab dan kemampuan prasyarat, bukan “pahami dasar-dasarnya”.
Jika bekal baru diajarkan belakangan, berikan jembatan singkat di tempat pemakaian atau tandai jalurnya sebagai pendalaman opsional.

Jelaskan mekanisme, contoh masukan, akibat, perbaikan, dan cara memeriksanya dalam subbagian yang sama.
Pertahankan rincian seperti batas bukti, akses sah yang harus tetap bekerja, dan uji penolakan.
Penjelasan sederhana tetap harus membedakan tindakan nyata, rancangan, dan hasil yang belum diuji.

Pisahkan sesi berdasarkan hasil: misalnya SQL lokal, akses objek, lalu lab web resmi.
Jangan mengandalkan tabel singkatan sebagai pengganti penjelasan.
Untuk jalur dengan alat tambahan, tulis prasyarat serta hasil `NOT_RUN` jika pembaca belum menjalankannya.

## Yang tidak boleh berubah

- Nama file pra-bab, Bab 00–26, dan enam lampiran tetap.
- Baris pertama tiap bab dan lampiran tetap judul tingkat satu, `# ...`.
- Delapan judul tingkat dua pada kerangka tetap persis. Judul tambahan boleh.
- Semua fakta, hasil, peringatan keamanan, latihan, syarat lulus, dan rujukan harus tetap tersedia.
- Perintah dan blok kode tetap sama huruf demi huruf. Laporkan kesalahan yang ditemukan sebelum mengoreksinya.
- Semua tautan lama tetap ada. Tautan lokal beserta bagian tujuannya harus hidup; pagar kode harus berpasangan.
- Studi kasus Laundry Aman tetap. Jelaskan istilah sebelum memakainya untuk penalaran atau tindakan.
- Latihan memakai data buatan, localhost, atau platform berizin. Pertahankan batas izin dan larangan membocorkan rahasia.
- Jalur belajar tetap gratis. Jangan menambah layanan berbayar.

## Daftar periksa

Penulis dan pemeriksa menjawab setiap butir dengan ya atau tidak, lalu menyebut bagian yang menjadi buktinya.
Jawaban “tidak” perlu perbaikan atau catatan pengecualian yang disetujui coordinator.
Untuk pengujian, catat `PASS`, `FAIL`, atau `NOT_RUN` beserta perintah dan hasil teramati.

- [ ] Apakah judul pertama, nama file, dan delapan judul wajib tetap sesuai?
- [ ] Apakah semua kalimat penjelasan paling panjang 24 kata, selain pengecualian aturan 1?
- [ ] Apakah tiap paragraf berisi satu gagasan dan paling banyak 60 kata?
- [ ] Apakah tiap paragraf, butir, atau baris tabel memperkenalkan paling banyak satu istilah baru?
- [ ] Apakah Konsep dibuka dengan tiga sampai enam kalimat gambaran alur sehari-hari, tanpa istilah tebal baru?
- [ ] Apakah setiap subbagian penjelasan dimulai dari kejadian toko, tersambung sebab-akibat, dan membatasi deretan definisi menjadi tiga paragraf?
- [ ] Apakah istilah inti yang abstrak mendapat satu perbandingan sehari-hari, dengan batas bila diperlukan?
- [ ] Apakah istilah inti mengikuti cerita dan istilah pelengkap berada setelahnya dalam Cukup kenali dulu atau Pendalaman opsional?
- [ ] Apakah baris posisi setelah judul menyebut tahap yang benar dan tetap menjadi teks biasa dalam buku gabungan?
- [ ] Apakah sapaan memakai “kamu”, selain isi yang harus tetap persis?
- [ ] Apakah instruksi memakai kata kerja langsung dan kata sehari-hari?
- [ ] Apakah setiap penyangkalan menjaga makna, batas bukti, atau keselamatan?
- [ ] Apakah daftar menyajikan urutan atau syarat, dan tabel membandingkan kolom yang sama?
- [ ] Apakah jalur Windows, Linux, macOS, dan HP terpisah serta kebutuhan komputer jelas?
- [ ] Apakah tiap langkah menyebut tempat kerja, tindakan, dan hasil yang diperiksa?
- [ ] Apakah setiap istilah baru mendapat arti sebelum dipakai, sesuai kamus atau daftar usulan istilah?
- [ ] Apakah prasyarat menyebut kemampuan dan tautan bab yang sudah tersedia?
- [ ] Apakah rincian ahli memakai penanda yang sama dan boleh dilewati untuk praktik utama?
- [ ] Apakah Ringkasan dan Cek pemahaman hanya memakai konsep yang sudah dijelaskan?
- [ ] Apakah setiap fakta, kode, perintah, tautan, hasil, peringatan, latihan, dan syarat lulus lama masih ada?
- [ ] Apakah panjang bab berada di bawah sekitar dua kali versi lama?
- [ ] Apakah tautan beserta bagian tujuannya hidup dan pagar kode berpasangan menurut `py tools/check_docs.py`?
- [ ] Apakah contoh yang bisa dijalankan sudah dicocokkan dengan hasil yang dijanjikan, dan sisanya tercatat `NOT_RUN`?
- [ ] Apakah pembacaan ulang menemukan tempat mengetik dan alasan tindakan tanpa perlu menebak?
- [ ] Apakah laporan membedakan pemeriksaan penulis dari uji pemahaman peserta manusia?
