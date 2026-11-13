# Bab 14: Membaca lalu lintas dan memisahkan jaringan

Tahap 3 dari 6: Menjaga dan menguji akses

## Tujuan dan prasyarat

Kamu akan membaca percakapan jaringan latihan dan merancang segmentasi Laundry Aman.
Hasilnya berupa matriks komunikasi antarzona dan, bila alat tersedia, satu capture traffic loopback.

Bekalmu adalah [alamat dan port dari Bab 03](03-jaringan.md) serta [HTTP dari Bab 07](07-web.md).
Ulangi juga [TLS dari Bab 08](08-kriptografi.md), [akses dari Bab 09](09-identitas.md), dan [server loopback dari Bab 12](12-pentest.md).
Siapkan 3–5 sesi.
Wireshark opsional untuk praktik paket.
Rancangan jaringan dapat dikerjakan tanpa memasang alat.
Jangan merekam traffic kantor, Wi-Fi umum, atau komunikasi keluarga.

## Konsep

Kasir, tamu, dan printer berada di jaringan yang sama terlalu sering.
Kita perlu memisahkan siapa boleh bicara kepada siapa.
Kita juga perlu membaca satu percakapan latihan di komputer sendiri.
Setelah itu kamu menghubungkan observasi paket dengan aturan segmentasi toko.

### Apa yang terlihat saat kita merekam paket?

**Packet capture** adalah rekaman paket yang terlihat pada titik pengamatan.
Wireshark membantu membaca alamat, protokol, waktu, dan sebagian isi.
Rekaman tidak selalu melihat seluruh komunikasi.
Pemilihan interface, lokasi sensor, enkripsi, dan kehilangan paket memengaruhi kesimpulan.

Traffic TLS biasanya menyembunyikan isi aplikasi, meski pengamat masih dapat melihat sebagian metadata.
Capture tanpa paket HTTP tidak membuktikan bahwa pengguna tidak mengakses situs.
Bayangkan kamera di satu lorong toko: lorong lain tidak terekam.

### Filter mana yang membatasi rekaman, mana yang hanya tampilan?

**Capture filter** membatasi paket yang direkam.

**Display filter** memilih paket yang ditampilkan dari rekaman yang sudah ada.

Jika kamu salah memilih capture filter, paket yang dibuang tidak bisa dimunculkan dengan mengganti display filter.

Mulailah merekam traffic lokal yang sempit dan diketahui, kemudian gunakan display filter untuk membacanya.

Bayangkan capture filter seperti memutuskan apa yang disimpan di kamera.
Display filter seperti memutar ulang potongan yang sudah tersimpan.

### Bagaimana jaringan toko dipisah menurut kebutuhan?

**Segmentasi** memisahkan kelompok perangkat dan mengendalikan komunikasi antarkelompok.
Laundry dapat memisahkan jaringan tamu, komputer kasir, dan perangkat seperti printer atau kamera.
VLAN mengelompokkan jaringan pada lapisan tertentu, tetapi keamanan antarkelompok tetap memerlukan aturan routing dan firewall.
Mengubah nama Wi-Fi saja tidak menjamin pemisahan.

DMZ adalah segmen untuk layanan yang perlu berhubungan dengan jaringan kurang tepercaya.
Jump server menjadi titik administrasi yang terkontrol.
VPN membuat kanal terlindungi menuju jaringan atau layanan, tetapi akun VPN tetap memerlukan pembatasan akses.
“Sudah masuk VPN” tidak semestinya memberi izin membaca seluruh database.

### Apa yang perlu dijaga pada Wi-Fi toko?

Pada Wi-Fi, lindungi administrasi access point, perbarui firmware, dan pilih protokol keamanan yang masih didukung perangkat.
WPA3 memberi peningkatan dibanding generasi lama, tetapi kualitas konfigurasi dan kompatibilitas tetap perlu diperiksa.
WEP sudah tidak layak untuk melindungi jaringan.
WPS memperkenalkan jalur pengaturan yang perlu dinilai atau dinonaktifkan jika tidak diperlukan.

#### Cukup kenali dulu

- **WPA3**: protokol keamanan Wi-Fi yang lebih baru dari generasi sebelumnya.
- **WEP**: protokol lama yang sudah tidak layak dipakai untuk melindungi jaringan.
- **WPS**: jalur pengaturan cepat pada access point; nilai ulang atau nonaktifkan bila tidak perlu.
- **Access point**: titik akses Wi-Fi yang menghubungkan perangkat ke jaringan.

Pengujian deauthentication, evil twin, atau peniruan access point dapat mengganggu orang lain.
Bab ini memakai rancangan dan pengamatan milik sendiri.

### Ringkasan

- Capture merekam; display filter hanya memilih tampilan dari yang sudah terekam.
- Segmentasi mengikuti kebutuhan bisnis, lalu dicek dengan aturan firewall.
- Enkripsi melindungi isi di perjalanan; otorisasi tetap memeriksa hak di server.
- Batasi pengamatan pada traffic latihan milik sendiri.

### Cek pemahaman

1. Mengapa mengganti display filter tidak mengembalikan paket yang dibuang capture filter?
2. Mengapa mengganti nama Wi-Fi belum cukup sebagai segmentasi?
3. Mengapa HTTPS tidak memperbaiki aplikasi yang mengirim nota Bob kepada Alice?

## Praktik

### 1. Gambarkan kebutuhan bisnis

Buat tiga zona: `TAMU`, `KASIR`, dan `PERANGKAT`.
Tambahkan internet dan antarmuka administrasi router.
Buat tabel keputusan:

| Sumber | Tujuan | Keputusan rancangan | Alasan |
|---|---|---|---|
| Tamu | Internet | Izinkan sesuai kebijakan | Pengunjung memakai Wi-Fi |
| Tamu | Kasir | Tolak | Tidak perlu mengakses transaksi |
| Kasir | Printer | Izinkan layanan cetak yang diperlukan | Mencetak nota |
| Printer/kamera | Kasir | Tolak koneksi baru tanpa kebutuhan | Membatasi pergerakan dari perangkat |
| Akun admin pada perangkat khusus | Pengaturan router | Izinkan dengan autentikasi | Perawatan jaringan |

Tabel ini rancangan, bukan bukti bahwa router kamu menerapkannya.
Tulis siapa yang mengelola aturan dan bagaimana memeriksa pengecualian.

### 2. Siapkan traffic latihan

Gunakan server loopback Bab 12 yang menyajikan `index.txt`.
Jangan merekam interface kantor, Wi-Fi umum, atau komunikasi anggota keluarga.
Buka Wireshark yang sudah terpasang dan pilih interface loopback; namanya bergantung OS.

Pilih jalur sesuai perangkatmu.

**Linux**

Nama interface biasanya `lo`.

**macOS**

Nama interface biasanya `lo0`.

**Windows**

Gunakan interface loopback yang tersedia melalui dukungan capture setempat.

### 3. Mulai capture dan buat satu permintaan

Buka alamat lokal `http://127.0.0.1:8000/index.txt`, lalu hentikan capture.
Masukkan display filter berikut pada kotak filter Wireshark:

```text
tcp.port == 8000
```

Filter ini menampilkan paket dengan salah satu port TCP bernilai 8000.
Pilih paket, buka bagian Internet Protocol dan Transmission Control Protocol, lalu catat alamat sumber, tujuan, dan port.
Port sementara pada sisi browser boleh berbeda pada tiap percobaan.
[Dokumentasi display filter Wireshark](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html).

### 4. Ikuti satu percakapan

Pilih paket aliran tersebut dan gunakan menu **Follow → TCP Stream** jika tersedia.
Cari permintaan terhadap `index.txt` dan responsnya.
Server latihan menggunakan HTTP tanpa TLS, sehingga teks latihan dapat terlihat.
Tutup tampilan stream, bersihkan filter tambahan jika ingin melihat semua paket lagi, lalu simpan capture ke folder hasil belajar pribadi.

### 5. Hubungkan observasi dengan pertahanan

Tulis bahwa enkripsi melindungi isi selama perjalanan, sementara otorisasi membatasi siapa yang boleh menerima data dari server.
HTTPS tidak memperbaiki aplikasi yang mengirim nota Bob kepada Alice.
Untuk jaringan laundry, jelaskan di mana sensor perlu ditempatkan agar dapat melihat traffic antarsegmen.

## Hasil yang diharapkan

Kamu memiliki matriks komunikasi dan, bila menjalankan Wireshark, satu capture traffic latihan.
Kamu dapat menunjukkan koneksi TCP serta permintaan HTTP yang kamu buat.
Tidak perlu melihat DNS: alamat IP loopback tidak memerlukan pencarian nama untuk permintaan tersebut.

## Jika macet

Jika tidak ada paket, periksa interface dan pastikan kamu membuat permintaan setelah capture dimulai.
Browser mungkin memakai cache; muat ulang atau gunakan `curl.exe` pada Windows.
Jika Wireshark tidak mengenali HTTP di port latihan, lihat TCP Stream tanpa memaksakan kesimpulan.
Hindari mengubah pengaturan driver atau firewall secara acak.
Tandai capture `NOT_RUN` jika dukungan setempat belum siap.

## Latihan

Tambahkan mesin pembayaran ke diagram.
Tentukan layanan minimum yang dibutuhkan dan siapa yang boleh mengadministrasinya.
Buat dua kasus pengujian negatif: tamu mencoba mencapai kasir dan kamera mencoba membuka koneksi baru ke kasir.
Tulis hasil yang diharapkan tanpa menjalankan pengujian pada jaringan nyata.

<details>
<summary>Pembahasan setelah mencoba: kasus uji negatif</summary>

Tamu ke kasir seharusnya ditolak oleh aturan antarzona.
Kamera yang memulai koneksi baru ke kasir juga seharusnya ditolak.
Keduanya adalah rancangan yang dicek di atas kertas; belum membuktikan pengaturan router sungguhan.

</details>

## Bukti kelulusan

- [ ] Saya dapat menjelaskan perbedaan capture dan display filter.
- [ ] Saya dapat membaca alamat serta port satu koneksi.
- [ ] Saya dapat menyusun aturan jaringan dari kebutuhan bisnis.
- [ ] Saya menyatakan batas pengamatan agar laporan tidak mengklaim melihat data yang terenkripsi atau tidak direkam.

### Lanjut belajar

Jika HTTP lokal masih membingungkan, ulangi [Bab 12](12-pentest.md).
Setelah bukti siap, lanjut ke [Bab 15: membaca log dan menyusun deteksi](15-deteksi.md).

## Referensi

- [Wireshark User's Guide: bekerja dengan paket](https://www.wireshark.org/docs/wsug_html_chunked/ChapterWork.html).
- [Wireshark: ekspresi display filter](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html).
- [Canadian Centre for Cyber Security: Wi-Fi security](https://www.cyber.gc.ca/en/guidance/wi-fi-security-itsp80002/): pemisahan jaringan, protokol Wi-Fi, dan pengaturan WPS.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): hasil pengelolaan dan perlindungan keamanan.
