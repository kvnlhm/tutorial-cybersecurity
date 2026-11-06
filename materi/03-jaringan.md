# Bab 03: Memahami perjalanan data di jaringan

## Tujuan dan prasyarat

Anda akan membaca alamat IP, menghitung subnet kecil, serta membedakan DNS, TCP, UDP, dan port. Selesaikan Bab 02. Latihan hitung dapat dilakukan tanpa internet. Perintah pengamatan hanya membaca konfigurasi komputer sendiri atau memeriksa loopback.

## Konsep

Bayangkan nota digital bergerak dari laptop kasir ke aplikasi Laundry Aman. **Jaringan** menghubungkan perangkat agar dapat bertukar data. **LAN** mencakup jaringan lokal seperti toko. **WAN** menghubungkan area lebih luas. **Switch** menghubungkan perangkat dalam jaringan lokal; **router** meneruskan paket antarjaringan. Perangkat rumahan sering menggabungkan router, switch, dan titik akses Wi-Fi dalam satu kotak.

**IP address** adalah alamat pada jaringan. IPv4 memakai empat angka, masing-masing 0 sampai 255, contohnya `192.168.10.20`. IPv6 memakai alamat 128 bit, misalnya loopback `::1`. Alamat IP dapat berubah dan satu perangkat dapat mempunyai beberapa alamat. IP saja belum membuktikan identitas manusia.

**Loopback** mengarah ke perangkat itu sendiri. Buku memakai IPv4 `127.0.0.1` untuk lab lokal. `localhost` adalah nama yang biasanya menuju loopback. Berbeda dari itu, `0.0.0.0` pada pengaturan server umumnya berarti mendengarkan di semua antarmuka IPv4. Jangan mengganti alamat bind lab menjadi `0.0.0.0` untuk sekadar mengatasi masalah koneksi.

Alamat privat IPv4 berada pada `10.0.0.0/8`, `172.16.0.0/12`, dan `192.168.0.0/16`. Jaringan berbeda dapat memakai rentang privat yang sama. **NAT** mengubah informasi alamat ketika paket melewati perangkat jaringan. NAT sering memungkinkan banyak perangkat berbagi satu alamat publik, tetapi tidak menggantikan kebijakan firewall.

**Subnet** membagi ruang alamat. Notasi **CIDR** seperti `/24` menyatakan berapa bit yang menjadi bagian jaringan. IPv4 memiliki 32 bit, jadi `/24` menyisakan 8 bit untuk bagian host: `2^8 = 256` alamat. Untuk subnet biasa ini, satu alamat merupakan alamat jaringan dan satu lagi broadcast; tersisa 254 alamat host. Aturan pengurangan dua tidak berlaku seragam pada `/31` dan `/32` yang punya kegunaan khusus.

**Default gateway** adalah router tujuan ketika komputer perlu mengirim ke luar jaringan yang terhubung langsung. **DHCP** dapat membagikan konfigurasi alamat, gateway, dan resolver DNS. **DNS** menerjemahkan nama seperti domain website menjadi jawaban, misalnya alamat IP. **MAC address** merupakan alamat antarmuka pada lapisan link lokal, misalnya pada Ethernet dan Wi-Fi. Alamat ini dapat diacak atau dipalsukan sehingga tidak menjadi bukti identitas manusia. **ARP** membantu perangkat IPv4 menemukan alamat perangkat link lokal untuk IP tetangga. IPv6 menggunakan mekanisme Neighbor Discovery, bukan ARP.

**Port** mengidentifikasi titik komunikasi sebuah layanan. IP mirip alamat gedung, port mirip nomor loket. TCP menyediakan aliran byte yang berurutan dan pengiriman ulang ketika diperlukan. UDP mengirim datagram tanpa jaminan bawaan tersebut; aplikasi dapat menambahkan mekanismenya sendiri. HTTPS biasa memakai TCP 443, sedangkan HTTP/3 memakai QUIC di atas UDP. Nomor port memberi petunjuk, bukan bukti pasti jenis layanan.

| Contoh protokol | Fungsi | Port yang lazim |
|---|---|---|
| SSH | Akses shell terenkripsi | TCP 22 |
| DNS | Pertanyaan nama domain | UDP/TCP 53 |
| HTTP | Pertukaran request dan response web | TCP 80 |
| HTTPS | HTTP dengan perlindungan TLS | TCP 443; HTTP/3 memakai UDP 443 |
| RDP | Desktop jarak jauh | TCP/UDP 3389 |

Model **OSI** membantu membagi pertanyaan troubleshooting. Physical mencakup sinyal dan kabel; data link mencakup komunikasi lokal; network mencakup IP; transport mencakup TCP/UDP. Session, presentation, dan application membantu membahas sesi, representasi data, serta fungsi aplikasi. Implementasi internet tidak selalu memisahkan ketujuh lapisan itu secara rapi. Gunakan model sebagai alat berpikir, bukan bukti bahwa suatu produk aman.

## Praktik

### 1. Hitung subnet di kertas

Jika bilangan biner belum pernah Anda pelajari, mulai dari pembagian blok. `2^8` dibaca “dua pangkat delapan”: mulai dari 1 lalu kalikan dua sebanyak delapan kali, menghasilkan 256. Bagian setelah garis miring bukan nomor port. `/24` berarti 24 dari 32 bit alamat IPv4 dipakai untuk prefix jaringan, sehingga tersisa delapan bit untuk membedakan alamat dalam blok.

Untuk latihan dengan tiga angka awal yang tetap, bayangkan deretan nomor terakhir `0` sampai `255`. Deretan itu mempunyai 256 nomor karena nol ikut dihitung. Membelahnya menjadi dua menghasilkan `0–127` dan `128–255`, masing-masing 128 nomor. Pada subnet biasa yang kita pakai, nomor pertama menandai jaringan dan nomor terakhir menjadi broadcast. Nomor di antaranya dapat dipakai host. Baca contoh lengkap sebelum menghitung sendiri.

Laundry Aman memakai jaringan contoh `192.168.10.0/24`. Tentukan:

- Alamat jaringan: `192.168.10.0`.
- Broadcast: `192.168.10.255`.
- Rentang host: `192.168.10.1` sampai `192.168.10.254`.
- Mask: `255.255.255.0`.

Bagi menjadi dua `/25`. Masing-masing memiliki `2^7 = 128` alamat. Blok pertama dimulai `.0`, blok kedua `.128`. Host blok pertama `.1` sampai `.126`; broadcast `.127`. Host blok kedua `.129` sampai `.254`; broadcast `.255`. Router, printer, dan server tetap memerlukan alamat dari rentang host yang tersedia.

Periksa dengan Python, Windows PowerShell:

```powershell
py -c "import ipaddress; n=ipaddress.ip_network('192.168.10.0/25'); print(n.netmask); print(n.broadcast_address); print(n.num_addresses)"
```

Linux/macOS memakai perintah sama dengan mengganti `py` menjadi `python3`. Hasilnya `255.255.255.128`, `192.168.10.127`, dan `128`. Python menghitung seluruh alamat, bukan jumlah host yang bisa dibagikan.

### 2. Baca konfigurasi tanpa mengubahnya

Windows PowerShell:

```powershell
ipconfig
ping -n 2 127.0.0.1
```

Linux:

```bash
ip address
ip route
ping -c 2 127.0.0.1
```

macOS:

```bash
ifconfig
route -n get default
ping -c 2 127.0.0.1
```

Cari antarmuka aktif dan alamatnya. Komputer dengan VPN atau VM dapat memiliki beberapa antarmuka; jangan langsung memilih baris pertama. `ping` memakai ICMP untuk memeriksa respons, sehingga keberhasilan ping belum membuktikan aplikasi web bekerja. Kegagalan ping ke target lain juga dapat disebabkan aturan jaringan.

### 3. Gambarkan jalur satu request

Gambar empat kotak: laptop kasir, switch/router toko, resolver DNS, dan server aplikasi. Tulis kapan kasir membutuhkan DNS dan gateway. Tambahkan perangkat Wi-Fi pelanggan pada bagian terpisah. Diagram ini baru rancangan; belum membuktikan bahwa pemisahan jaringan telah diterapkan.

## Hasil yang diharapkan

Perhitungan `/25` cocok dengan Python. Anda dapat menunjuk alamat lokal, gateway bila ada, dan alasan loopback tidak membutuhkan perjalanan ke internet. Balasan ping lokal biasanya cepat, tetapi waktunya tidak perlu sama antarperangkat.

## Jika macet

`ip` tidak tersedia secara bawaan di macOS; gunakan kelompok perintah macOS. Perangkat offline mungkin tidak memiliki default gateway. Alamat privat pada diagram adalah contoh, sehingga jangan menyalinnya sebagai konfigurasi komputer Anda. Jika ada dua gateway karena VPN, catat situasinya tanpa menghapus rute.

## Latihan

**Dengan petunjuk:** untuk `192.168.10.64/26`, hitung sisa bit `32−26`, lalu ukuran blok. Blok dimulai `.64`. Tentukan alamat terakhir dengan menambahkan ukuran blok dikurangi satu. Setelah itu tulis rentang host dan jumlahnya.

**Tanpa petunjuk langkah:** ulangi untuk `192.168.10.128/26`. Sebelum membuka pembahasan, tulis alasan mengapa hasil Anda berbeda dari latihan sebelumnya. Jelaskan juga mengapa pelanggan Wi-Fi tidak boleh otomatis memperoleh akses ke administrasi kasir.

<details>
<summary>Pembahasan dua kasus /26</summary>

Enam bit tersisa memberi 64 alamat. Mask adalah `255.255.255.192`. Untuk blok `.64`, broadcast adalah `.64 + 63 = .127`, host `.65–.126`, dengan 62 alamat host. Blok `.128` mempunyai broadcast `.191`, host `.129–.190`, dan jumlah host yang sama. Prefix sama berarti ukuran blok sama; alamat awal menentukan letak blok. Ini latihan subnet biasa, sehingga aturan dua alamat khusus digunakan di sini, bukan diterapkan tanpa pengecualian pada seluruh prefix.

</details>

## Bukti kelulusan

Simpan diagram jaringan dan dua perhitungan subnet. Anda lulus jika dapat membedakan IP, nama domain, port, gateway, dan MAC address; menjelaskan bahwa enkripsi tidak otomatis memperbaiki izin akses; serta membedakan uji ping dari uji layanan.

## Referensi

- [RFC 1918: rentang IPv4 privat](https://www.rfc-editor.org/rfc/rfc1918).
- [Python ipaddress](https://docs.python.org/3/library/ipaddress.html).
- [MDN: gambaran HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
