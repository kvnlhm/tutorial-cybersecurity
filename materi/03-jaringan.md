# Bab 03: Memahami perjalanan data di jaringan

Tahap 2 dari 6: Memahami cara sistem bekerja

## Tujuan dan prasyarat

Kamu akan membaca alamat, menghitung pembagiannya, dan mengikuti perjalanan nota dari kasir ke aplikasi Laundry Aman.
Kita membedakan pencarian alamat dari pengiriman ke layanan.

Selesaikan [Bab 02](02-komputer.md), termasuk pengenalan bit, byte, dan proses.
Gunakan terminal serta Python yang sudah disiapkan pada [Bab 01](01-lab.md).
Kamu bisa mengerjakan hitungan dan gambar tanpa internet, termasuk dari HP dengan kertas.
Untuk menjalankan perintah, gunakan komputer sendiri. Perintah hanya membaca konfigurasi atau memeriksa komunikasi di dalam komputer itu.

## Konsep

Kasir menyimpan nota lalu mengirimnya ke aplikasi Laundry Aman.
Laptop perlu menemukan alamat tujuan dan jalan untuk mencapainya.
Di tempat tujuan, layanan yang tepat harus menerima nota itu.
Kita akan mengikuti perjalanan ini, lalu membagi nomor alamat untuk perangkat toko.
Terakhir, kamu akan membaca pengaturan laptop dan menggambar jalurnya.

Istilah dalam cerita dipakai dalam praktik; nama pelengkap ada di “Cukup kenali dulu”.

### Dari laptop kasir ke aplikasi

Kasir menyimpan nota. Hubungan antarperangkat untuk mengirim data ke aplikasi disebut **jaringan**.

Aplikasi menerima permintaan dan mengirim jawaban.
Program atau perangkat yang melayani permintaan disebut **server**.

**Switch** menghubungkan perangkat jaringan lokal, misalnya laptop kasir dan printer.

Jika server aplikasi berada di jaringan lain, nota perlu keluar dari jaringan toko.

**Router** meneruskan bagian data antarjaringan, seperti pintu penghubung ke luar toko.
Satu kotak perangkat rumahan sering menggabungkan router, switch, dan pemancar Wi-Fi.

#### Cukup kenali dulu

- **LAN**: jaringan lokal, seperti jaringan toko.
- **WAN**: jaringan yang menghubungkan area lebih luas.
- **Paket**: bagian data yang dikirim melalui jaringan.
- **Titik akses Wi-Fi**: tempat perangkat terhubung melalui Wi-Fi.

### Menulis alamat tujuan atau menghubungi diri sendiri

Kasir perlu mengirim ke tujuan yang benar, seperti menulis alamat pada kiriman pakaian.
**IP address**, atau alamat IP, menunjukkan alamat komunikasi perangkat.
Alamat IP dapat berubah; satu perangkat juga dapat mempunyai beberapa alamat.

Untuk latihan, kita memakai **IPv4**, alamat 32 bit yang ditulis sebagai empat angka dari 0 sampai 255.
Contohnya `192.168.10.20`. IP tidak membuktikan identitas manusia.

Kasir mencoba layanan di laptop sendiri melalui **loopback**, jalur kembali ke perangkat sendiri, seperti berbicara kepada diri sendiri.
Buku memakai alamat IPv4 `127.0.0.1` untuk jalur ini.

| Tujuan percobaan | Alamat contoh |
|---|---|
| Perangkat di jaringan toko | `192.168.10.20` |
| Komputer sendiri | `127.0.0.1` |

Saat membaca pengaturan, cari sambungan kabel atau Wi-Fi yang sedang dipakai.
Tempat perangkat tersambung ke jaringan disebut **antarmuka jaringan**. Satu perangkat dapat mempunyai beberapa antarmuka.

#### Cukup kenali dulu

- **IPv6**: bentuk alamat sepanjang 128 bit; alamat loopback-nya `::1`.
- **Localhost**: nama `localhost` yang biasanya menunjuk loopback.
- **Bind**: pengaturan alamat tempat server menerima koneksi; `0.0.0.0` umumnya berarti semua antarmuka IPv4.
- **Ethernet**: teknologi komunikasi jaringan yang lazim memakai kabel.

Jangan mengganti alamat bind lab menjadi `0.0.0.0` hanya untuk mengatasi masalah koneksi.

### Membagi nomor alamat untuk toko

Laundry Aman memakai blok `192.168.10.0/24`. Bayangkan deretan rumah yang kita bagi menjadi beberapa blok alamat.
Pembagian ruang alamat menjadi bagian lebih kecil disebut **subnet**.

Penulisan seperti `/24` disebut **notasi CIDR**. Angka 24 menandai banyaknya bit jaringan dalam alamat IPv4.

Bagian jaringan disebut **prefix**. Pada `/24`, bagian awal alamat tetap, sementara nomor terakhir membedakan perangkat.

| Bagian contoh | Nilai |
|---|---|
| Bagian awal yang tetap | `192.168.10` |
| Nomor dalam blok | `0` sampai `255`, sebanyak 256 alamat |

Perangkat pemakai alamat disebut **host**, seperti penghuni bernomor rumah. Perangkat memakai nomor di antara dua alamat khusus berikut.

**Alamat jaringan** adalah penanda blok, seperti nama blok pada deretan rumah.
`192.168.10.0` menandai blok; perangkat memakai alamat lain di dalamnya.

**Broadcast** adalah pengiriman ke seluruh perangkat dalam subnet IPv4, seperti pengumuman untuk satu blok.
Alamatnya `192.168.10.255`.
Setelah menyisihkan alamat jaringan dan broadcast, tersedia 254 alamat host.

**Mask** seperti pembatas pada formulir alamat: ia memisahkan bagian jaringan dari bagian perangkat.
Untuk `/24`, mask `255.255.255.0` menunjukkan tiga bagian angka awal sebagai bagian jaringan.

Hitungan tetap mengikuti bit; prefix lain dapat membagi bagian angka secara berbeda dari perbandingan rumah tadi.

<details>
<summary>Pendalaman opsional: pengecualian hitungan host</summary>

Hitungan alamat toko menyisihkan dua alamat khusus pada subnet biasa.
Aturan ini tidak berlaku seragam pada `/31` dan `/32`, yang mempunyai kegunaan khusus.

</details>

#### Cukup kenali dulu

- **Alamat privat IPv4**: rentang `10.0.0.0/8`, `172.16.0.0/12`, dan `192.168.0.0/16`; dapat dipakai ulang pada jaringan berbeda.
- **Alamat publik**: alamat untuk komunikasi di internet.
- **Firewall**: pembatas komunikasi berdasarkan aturan.
- **NAT**: pengubah informasi alamat paket saat melewati perangkat jaringan; sering memungkinkan banyak perangkat berbagi satu alamat publik, tetapi tidak menggantikan kebijakan firewall.

### Mencari nama aplikasi lalu memilih jalan keluar

Kasir membuka aplikasi dengan **nama domain**, nama tujuan seperti nama penerima pada buku kontak.

**DNS** seperti pencarian buku kontak: nama domain diterjemahkan menjadi jawaban, misalnya alamat IP.

Laptop bertanya kepada **resolver DNS**, layanan penerima pertanyaan nama, seperti petugas pencarian buku kontak.

Pada contoh toko, server aplikasi berada di jaringan lain.

Jika tujuan di luar jaringan yang terhubung langsung, laptop memilih jalur pengiriman.

**Default gateway** adalah router jalur keluar bawaan, seperti pintu keluar toko. Jalur yang lebih khusus dapat dipakai lebih dahulu.

Untuk komunikasi lokal, perangkat memakai **MAC address**, alamat antarmuka seperti label sambungan Ethernet atau Wi-Fi.
Alamat ini dapat diacak atau dipalsukan; identitas manusia tetap memerlukan bukti lain.

#### Cukup kenali dulu

- **DHCP**: pembagi konfigurasi alamat, termasuk gateway dan resolver DNS.
- **ARP**: pembantu IPv4 untuk menemukan alamat perangkat link lokal berdasarkan IP tetangganya.

<details>
<summary>Pendalaman opsional: pencarian tetangga IPv6</summary>

Saat perangkat toko mengirim melalui IPv6, ia perlu menemukan tetangga pada sambungannya.
**Neighbor Discovery** membantu menemukan tetangga pada sambungan lokal; IPv6 menggunakannya sebagai pengganti ARP.

</details>

### Menyerahkan nota ke layanan yang tepat

Nota sudah menuju server aplikasi. Sekarang laptop perlu memilih layanan penerimanya.
**Port** mengidentifikasi titik komunikasi layanan, seperti nomor loket pada suatu alamat gedung.
Nomornya memberi petunjuk jenis layanan; kamu tetap perlu memeriksa layanan yang berjalan.

Saat kasir menjalankan `ping`, perangkat memakai **ICMP**, aturan pesan kendali jaringan, untuk memeriksa respons.
Seperti ketukan pintu, `ping` meminta balasan.
Untuk memastikan aplikasi menerima nota, uji layanannya juga.

#### Cukup kenali dulu

- **Protokol**: aturan pertukaran data.
- **TCP**: pengirim aliran byte berurutan dengan pengiriman ulang saat diperlukan.
- **Datagram**: satuan pesan yang dikirim melalui jaringan.
- **UDP**: pengirim datagram tanpa jaminan bawaan seperti TCP; aplikasi dapat menambahkan mekanisme pengurutan atau pengiriman ulang.

Kasir juga perlu melindungi isi nota selama perjalanan.
**Enkripsi** menyembunyikan isi dengan kunci, seperti mengirim dalam kotak terkunci.
Aplikasi tetap perlu memeriksa hak penerima untuk membaca nota.

#### Cukup kenali dulu

- **HTTP**: aturan pertukaran permintaan dan jawaban web.
- **TLS**: pelindung komunikasi antara pihak yang terhubung; Bab 08 membahas cara kerjanya.
- **HTTPS**: HTTP dengan perlindungan TLS; biasa memakai TCP 443.

<details>
<summary>Pendalaman opsional: protokol dan port yang lazim</summary>

Petugas toko perlu mengakses aplikasi dari jauh.
**QUIC** adalah protokol komunikasi di atas UDP.

**HTTP/3**, salah satu versi HTTP, memakai QUIC. Karena itu, HTTPS juga dapat memakai UDP 443 pada HTTP/3.

**SSH** menyediakan akses shell terenkripsi, seperti shell yang kamu kenali pada Bab 01.

Petugas toko memakai SSH untuk merawat server aplikasi.

**RDP** menyediakan akses desktop dari jarak jauh.

| Contoh protokol | Fungsi | Port yang lazim |
|---|---|---|
| SSH | Akses shell terenkripsi | TCP 22 |
| DNS | Pertanyaan nama domain | UDP/TCP 53 |
| HTTP | Pertukaran permintaan dan jawaban web | TCP 80 |
| HTTPS | HTTP dengan perlindungan TLS | TCP 443; HTTP/3 memakai UDP 443 |
| RDP | Desktop jarak jauh | TCP/UDP 3389 |

</details>

<details>
<summary>Pendalaman opsional: membagi pemeriksaan dengan model OSI</summary>

Jika nota toko gagal sampai, pisahkan pemeriksaan kabel dari aplikasi.
Model **OSI** membagi pembahasan jaringan menjadi tujuh lapisan untuk membantu pemeriksaan tersebut.

| Lapisan | Yang dibahas |
|---|---|
| Physical | Sinyal dan kabel |
| Data link | Komunikasi lokal |
| Network | Alamat IP |
| Transport | TCP dan UDP |
| Session | Sesi komunikasi |
| Presentation | Bentuk penyajian data |
| Application | Fungsi aplikasi |

Implementasi internet tidak selalu memisahkan tujuh lapisan secara rapi.
Gunakan model untuk pemeriksaan; keamanan produk tetap membutuhkan bukti pengujian.

</details>

### Ringkasan

- IP menunjuk alamat komunikasi; port menunjuk titik komunikasi layanan.
- Loopback mengarah ke komputer sendiri, sehingga lab lokal dapat berjalan tanpa internet.
- DNS membantu mencari alamat dari nama. Gateway membantu mengirim ke luar jaringan yang terhubung langsung.
- Subnet membagi ruang alamat; ukuran blok mengikuti panjang prefix.
- Uji sambungan dan pemeriksaan hak membaca nota menjawab pertanyaan yang berbeda.

### Cek pemahaman

1. Ke mana data dikirim saat kamu memakai `127.0.0.1`?
2. Apa perbedaan pekerjaan DNS dan default gateway?
3. Berapa bit yang tersisa untuk alamat dalam blok IPv4 `/24`?
4. Mengapa aplikasi tetap harus memeriksa pemilik nota saat memakai enkripsi?

## Praktik

### 1. Hitung subnet di kertas

`2^8` dibaca “dua pangkat delapan”. Mulai dari 1, lalu kalikan dua sebanyak delapan kali. Hasilnya `2^8 = 256`.
Angka setelah garis miring menyatakan panjang prefix jaringan. Nomor port ditulis terpisah dari notasi subnet ini.

Dengan tiga angka awal tetap, tulis nomor terakhir dari `0` sampai `255`.
Ada 256 nomor karena nol ikut dihitung.
Belah menjadi `0–127` dan `128–255`. Tiap bagian mempunyai 128 nomor.

Pada subnet biasa latihan ini, nomor pertama menandai jaringan dan nomor terakhir menjadi broadcast.
Host memakai nomor di antaranya.

Laundry Aman memakai jaringan contoh `192.168.10.0/24`:

- Alamat jaringan: `192.168.10.0`.
- Broadcast: `192.168.10.255`.
- Rentang host: `192.168.10.1` sampai `192.168.10.254`.
- Mask: `255.255.255.0`.

Sekarang bagi menjadi dua `/25`. Tiap blok mempunyai `2^7 = 128` alamat.

| Bagian | Blok pertama | Blok kedua |
|---|---|---|
| Nomor awal | `.0` | `.128` |
| Rentang host | `.1` sampai `.126` | `.129` sampai `.254` |
| Broadcast | `.127` | `.255` |

Router, printer, dan server tetap memakai alamat dari rentang host yang tersedia, bukan alamat tambahan di luar rentang.

Pilih jalur sesuai perangkatmu untuk memeriksa hitungan dengan Python.

**Windows PowerShell**

Jalankan perintah ini. Folder kerja bebas karena perintah tidak memakai file latihan.

```powershell
py -c "import ipaddress; n=ipaddress.ip_network('192.168.10.0/25'); print(n.netmask); print(n.broadcast_address); print(n.num_addresses)"
```

**Linux/macOS**

Pakai perintah yang sama. Ganti `py` menjadi `python3`.

Hasilnya, berurutan: `255.255.255.128`, `192.168.10.127`, dan `128`.
Python menghitung seluruh alamat dalam blok. Untuk subnet biasa ini, sisihkan alamat jaringan dan broadcast saat menghitung alamat host.

### 2. Baca konfigurasi tanpa mengubahnya

Pilih jalur sesuai perangkatmu. Buka terminal biasa dan jalankan baris satu per satu; folder kerja boleh di mana saja.

**Windows PowerShell**

```powershell
ipconfig
ping -n 2 127.0.0.1
```

`ipconfig` menampilkan konfigurasi jaringan. Cari sambungan yang sedang kamu pakai, lalu catat alamat IP dan gateway bila tersedia.

**Linux**

```bash
ip address
ip route
ping -c 2 127.0.0.1
```

`ip address` menampilkan antarmuka dan alamatnya. `ip route` menampilkan jalur pengiriman; cari gateway bila tersedia.

**macOS**

```bash
ifconfig
route -n get default
ping -c 2 127.0.0.1
```

`ifconfig` menampilkan antarmuka dan alamatnya. `route -n get default` meminta informasi jalur keluar bawaan.

**VPN** menyerupai terowongan terlindungi menuju jaringan atau layanan; laptop kasir yang memakainya dapat mempunyai antarmuka tambahan.
VM dari Bab 01 juga dapat menambah antarmuka. Pilih sambungan aktif berdasarkan pemakaianmu, bukan langsung baris pertama.

Semua jalur tadi menjalankan `ping` ke loopback memakai ICMP untuk memeriksa respons.
Balasan lokal biasanya cepat; waktunya dapat berbeda antarperangkat.

Ping yang berhasil menunjukkan respons pada pemeriksaan itu.
Untuk memastikan aplikasi web bekerja, kamu perlu menguji aplikasinya juga.
Ping ke target lain dapat gagal karena aturan jaringan; kegagalan itu perlu diperiksa bersama konteksnya.

### 3. Gambarkan jalur satu request

**Request** berarti permintaan, misalnya permintaan kasir untuk membuka nota.
Gambar empat kotak di kertas atau editor:

1. Laptop kasir.
2. Switch/router toko.
3. Resolver DNS.
4. Server aplikasi.

Hubungkan kotak sesuai perjalanan permintaan. Tulis kapan laptop membutuhkan DNS dan kapan membutuhkan gateway.
Saat mencari alamat nama aplikasi, laptop dapat bertanya kepada resolver DNS.
Jika server berada di jaringan lain tanpa jalur khusus, laptop memakai default gateway.

Tambahkan perangkat Wi-Fi pelanggan pada bagian terpisah.
Gambar ini menyatakan rancangan. Untuk membuktikan pemisahan jaringan sudah diterapkan, kamu perlu pemeriksaan tambahan.

## Hasil yang diharapkan

Hitungan `/25` cocok dengan hasil Python: mask `255.255.255.128`, broadcast `192.168.10.127`, dan 128 alamat.
Kamu dapat menunjuk alamat lokal serta gateway bila ada pada konfigurasi perangkatmu.
Kamu juga dapat menjelaskan mengapa loopback bekerja tanpa perjalanan ke internet.

Simpan diagram jalur permintaan. Catat bahwa waktu balasan ping lokal boleh berbeda antarperangkat.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `ip` tidak tersedia di macOS | Gunakan kelompok perintah macOS; `ip` tidak tersedia secara bawaan di sana |
| Gateway tidak terlihat | Perangkat offline mungkin tidak mempunyai default gateway |
| Alamat komputer berbeda dari contoh | Pakai alamat contoh untuk hitungan; jangan menyalinnya sebagai konfigurasi perangkatmu |
| Dua gateway terlihat saat VPN aktif | Catat keadaan itu tanpa menghapus rute |

## Latihan

**Dengan petunjuk**

Untuk `192.168.10.64/26`, lakukan langkah berikut:

1. Hitung sisa bit `32−26`, lalu ukuran blok.
2. Gunakan `.64` sebagai awal blok.
3. Tambahkan ukuran blok dikurangi satu untuk mendapatkan alamat terakhir.
4. Tulis rentang host dan jumlahnya.

**Tanpa petunjuk langkah**

Ulangi untuk `192.168.10.128/26`.
Sebelum membuka pembahasan, jelaskan mengapa hasilmu berbeda dari latihan sebelumnya.
Jelaskan juga mengapa pelanggan Wi-Fi tidak boleh otomatis mengakses administrasi kasir.

<details>
<summary>Pembahasan setelah mencoba: dua kasus /26</summary>

Enam bit tersisa memberi 64 alamat. Mask-nya `255.255.255.192`.

| Blok | Broadcast | Host | Jumlah host |
|---|---|---|---|
| `.64` | `.64 + 63 = .127` | `.65–.126` | 62 |
| `.128` | `.191` | `.129–.190` | 62 |

Prefix yang sama memberi ukuran blok yang sama. Alamat awal menentukan letak blok.
Kita memakai aturan dua alamat khusus pada subnet biasa ini. Untuk prefix dengan kegunaan khusus, periksa aturannya sebelum menghitung.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan diagram jaringan dan dua perhitungan subnet.
- [ ] Saya dapat membedakan IP, nama domain, port, gateway, dan MAC address.
- [ ] Saya dapat menjelaskan mengapa enkripsi tetap membutuhkan pemeriksaan izin akses.
- [ ] Saya dapat membedakan uji ping dari uji layanan.

### Lanjut belajar

Jika alamat atau hitungan belum jelas, ulangi contoh `/25` lalu coba lagi dua soal `/26`.
Kembali ke [Bab 02](02-komputer.md) untuk mengulang bit dan perangkat.
Setelah bukti siap, lanjut ke [Bab 04: Linux](04-linux.md).

## Referensi

- [RFC 1918: rentang IPv4 privat](https://www.rfc-editor.org/rfc/rfc1918).
- [Python ipaddress](https://docs.python.org/3/library/ipaddress.html).
- [MDN: gambaran HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
