# Tutorial Cybersecurity: dari Awam sampai Mahir

Belajar keamanan siber lewat pekerjaan di **Laundry Aman**: menyimpan nota, menjaga akses, memeriksa kesalahan, dan memulihkan data.
Kamu akan mengikuti cara kerja komputer, menguji kelemahan di lingkungan berizin, memperbaiki sistem, dan membaca bukti insiden.
Kamu juga akan membangun kebiasaan riset melalui pertanyaan, percobaan, dan pencatatan hasil.
Semua kasus memakai data buatan. Jalur utama memakai alat gratis, tanpa layanan berbayar.

## Pilih titik awal

1. Jika belum memahami komputer, mulai dari [pra-bab: mulai dari nol](#mulai-dari-nol).
   Kamu akan mengenal file, browser, tempat mengetik perintah, dan percobaan pertama tanpa instalasi.
2. Jika ingin mencoba satu tindakan dahulu, buka [simulator Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/).
   Kamu bisa bermain dari browser HP atau komputer.
3. Jika sudah punya bekal, cari tahap yang sesuai pada [daftar isi](#daftar-isi).
   Buktikan kemampuan melalui latihan bab sebelum melanjutkan.

## Coba satu misi

Browser adalah aplikasi pembuka halaman, seperti Chrome atau Safari.
Di halaman simulator, ikuti langkah berikut:

1. Pada HP, ketuk **Pilih misi dan mode** untuk membuka daftar latihan.
2. Ketuk kotak perintah di dalam halaman, lalu ketik tindakan latihan.
3. Tekan **Jalankan perintah** dan baca hasilnya.

Delapan misi menyediakan petunjuk bertahap, respons terhadap kesalahan, bukti tindakan, dan kasus ujian berbeda.
Kamu memakai model latihan di halaman. Untuk praktik Python, terminal sistem, dan mesin virtual berikutnya, gunakan komputer.
Terminal adalah jendela untuk memberi perintah teks dan membaca hasilnya; pra-bab menunjukkan cara membukanya.

Untuk bermain offline di komputer, [unduh ZIP tutorial](https://github.com/kvnlhm/tutorial-cybersecurity/archive/refs/heads/main.zip), lalu ekstrak dan buka folder simulator.
[Panduan simulasi](simulator/README.md) menjelaskan cara membuka berkas latihan dan menyimpan hasil.
Kamu belum memerlukan Kali Linux atau laptop mahal untuk mulai belajar.

## Lanjutkan belajar dan simpan bukti

Empat lab Python berjalan offline. [Panduan lab](labs/README.md) menjelaskan bekal, cara menjalankan, dan hasil yang perlu dibandingkan.
Contoh perintah menyebut shell, yaitu program pembaca perintah, yang digunakan.
Saat menjalankan file tutorial, buka terminal pada folder utama yang memuat README dan folder labs.

Setiap bab memuat tujuan, prasyarat, praktik, hasil yang diharapkan, cara mengatasi masalah, latihan, dan bukti kelulusan.
Gunakan [jadwal dan rubrik](lampiran/jadwal-belajar.md) untuk menilai kemampuan dari hasil yang dapat dijelaskan dan diulang.

Keahlian tingkat lanjut tumbuh melalui latihan, pemeriksaan rekan, dan pengalaman berizin.
Bab spesialisasi memberi dasar dan proyek lanjutan. Satu buku tidak menggantikan pengalaman profesional atau membuktikan penguasaan hanya dari jumlah halaman yang dibaca.
Uji hanya sistem sendiri, target lab, atau target dengan izin dan batas yang jelas.

### Asal dan acuan

Peta topik mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security).
Pola konsep, praktik, dan latihan mengikuti [tutorial AI Engineer](https://github.com/kvnlhm/tutorial-ai-engineer) milik pengguna.
Penulis menyusun penjelasan, data, dan eksperimen untuk buku ini.

### Untuk pemelihara

[Panduan pemeliharaan](docs/pemeliharaan.md) memuat langkah pemeriksaan dan pembangunan buku.
[Daftar verifikasi](docs/ai/task-log.md) mencatat bagian yang sudah diuji serta yang masih membutuhkan lingkungan lain.
Pembaca dapat belajar tanpa menjalankan langkah pemeliharaan.

## Daftar isi


### Tahap 1 dari 6: Mulai memakai alat

Membuka file, membatasi latihan, dan menyiapkan tempat kerja.

- [Pra-bab: Mulai di sini jika kamu belum mengenal komputer](#mulai-dari-nol)
- [Bab 00: Mulai dari nol dan ukur kemampuanmu](#bab-00)
- [Bab 01: Menyiapkan meja praktik yang aman](#bab-01)
- [Bab 02: Mengenali komputer dan mencari sumber masalah](#bab-02)

### Tahap 2 dari 6: Memahami cara sistem bekerja

Mengikuti data, menjalankan perintah, membaca kode, dan mengenali perlindungan komunikasi.

- [Bab 03: Memahami perjalanan data di jaringan](#bab-03)
- [Bab 04: Membaca dan mengelola Linux](#bab-04)
- [Bab 05: Memahami Windows dan PowerShell](#bab-05)
- [Bab 06: Menulis skrip kecil dan mencatat perubahan](#bab-06)
- [Bab 07: Melihat cara kerja website dari dekat](#bab-07)
- [Bab 08: Hash, enkripsi, TLS, dan penyimpanan password](#bab-08)

### Tahap 3 dari 6: Menjaga dan menguji akses

Menetapkan izin, mengurangi risiko, menguji aplikasi, dan memisahkan jaringan.

- [Bab 09: Identitas, login, dan hak akses](#bab-09)
- [Bab 10: Memperkuat perangkat dan menguji cadangan](#bab-10)
- [Bab 11: Memetakan ancaman dan menentukan prioritas](#bab-11)
- [Bab 12: Menguji keamanan dengan metode yang dapat dipertanggungjawabkan](#bab-12)
- [Bab 13: Menemukan dan memperbaiki kelemahan web dan API](#bab-13)
- [Bab 14: Membaca lalu lintas dan memisahkan jaringan](#bab-14)

### Tahap 4 dari 6: Membaca bukti dan menangani kejadian

Menilai log, memilih respons, dan menjaga bukti.

- [Bab 15: Membaca log dan menyusun deteksi](#bab-15)
- [Bab 16: Menangani insiden dan berburu ancaman](#bab-16)
- [Bab 17: Menjaga bukti dan menyusun kronologi](#bab-17)

### Tahap 5 dari 6: Memeriksa program dan lingkungan

Menyelidiki program, memori, identitas perusahaan, cloud, serta proses rilis.

- [Bab 18: Memahami program dan perilaku malware](#bab-18)
- [Bab 19: Memory safety, debugging, dan fuzzing](#bab-19)
- [Bab 20: Identitas perusahaan, Active Directory, dan Kerberos](#bab-20)
- [Bab 21: Keamanan cloud, container, dan konfigurasi](#bab-21)
- [Bab 22: Membangun perangkat lunak yang bisa dipercaya](#bab-22)

### Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

Menilai sumber, menjelaskan risiko, memilih pendalaman, dan menyelesaikan proyek akhir.

- [Bab 23: OSINT dan intelijen ancaman yang dapat diperiksa](#bab-23)
- [Bab 24: Risiko, tata kelola, dan keputusan bisnis](#bab-24)
- [Bab 25: Menjadi spesialis dan melakukan riset mandiri](#bab-25)
- [Bab 26: Proyek akhir Laundry Aman](#bab-26)

### Lampiran pendamping

Gunakan jadwal, peta, kamus, templat, referensi, dan panduan pendamping sesuai kebutuhanmu.

- [Jadwal belajar dan penilaian](#lampiran-1)
- [Peta roadmap ke tutorial](#lampiran-2)
- [Kamus istilah](#lampiran-3)
- [Template bukti belajar](#lampiran-4)
- [Referensi dan latihan lanjutan](#lampiran-5)
- [Panduan pendamping dan pemeriksaan kemampuan](#lampiran-6)

---

<a id="mulai-dari-nol"></a>

## Pra-bab: Mulai di sini jika kamu belum mengenal komputer

Tahap 1 dari 6: Mulai memakai alat

### Tujuan dan prasyarat

Kamu boleh mulai tanpa bekal istilah komputer.
Target pertama adalah menemukan catatan, membuka halaman latihan, dan menjelaskan hasil satu tindakan.
Kita memakai Laundry Aman, toko rekaan dengan komputer kasir dan catatan pesanan. Data pelanggannya juga rekaan.

Siapkan HP atau komputer yang bisa membuka halaman latihan.
Sesi pertama dan delapan misi bisa dimulai dari HP tanpa memasang program tambahan.

Gunakan komputer dengan keyboard untuk latihan membuat catatan dan menjalankan kode pada tahap berikutnya.
Kamu boleh memulai halaman latihan sekarang, lalu meneruskan praktik komputer ketika perangkat tersedia.

Bagi pra-bab menjadi sesi 15–25 menit. Durasi ini membantu membagi pekerjaan; kamu boleh mengulang sesuai kebutuhan.
Ulangi latihan menemukan file sebelum beralih ke pemrograman jika lokasi file masih membingungkan.

Pesan kesalahan tidak memberi penilaian “bodoh” pada pelajar.
Pesan itu menunjukkan langkah yang perlu diperiksa. Catat tindakan dan hasil, lalu perbaiki satu hal setiap kali mencoba.

### Konsep

Kasir Laundry Aman menulis catatan, menyimpannya, lalu membukanya lagi besok.
Ia perlu tahu tempat catatan disimpan dan tempat mengetik permintaan.
Kita akan mengikuti pekerjaan kecil itu sebelum memakai perintah.
Kamu juga akan membedakan percobaan di halaman latihan dari tindakan pada komputer sendiri.

#### Menyimpan catatan di meja kasir

Bayangkan meja kasir Laundry Aman.
Komputer adalah perangkat di meja.

**Aplikasi** adalah alat kerja yang dibuka, seperti kalkulator atau pengolah nota.

**Dokumen** adalah isi pekerjaan yang disimpan. Menutup aplikasi tidak menghapus dokumen, tetapi perubahan yang belum disimpan dapat hilang.

Kasir memberi nama agar catatannya bisa ditemukan lagi.
**File**, atau berkas, menyimpan data dengan nama, seperti lembar nota bernama `nota.txt`.

Agar catatan tidak bercampur, kasir mengelompokkannya.
**Folder** menampung file dan folder lain, seperti laci untuk menyusun nota. Buku juga memakai kata direktori untuk folder.

Untuk melihat isi laci digital itu, buka **pengelola file**, aplikasi penampil file dan folder.
Namanya File Explorer di Windows, Finder di macOS, atau pengelola file pada Linux.

Contohnya, kamu membuka folder tutorial lalu melihat nama `README.md` dan `index.html`.
Bagian akhir nama membantu memilih aplikasi untuk membuka file tersebut.

Bagian akhir seperti `.txt`, `.html`, atau `.py` disebut **ekstensi**, seperti label jenis pada map.
Label membantu memilih pembuka, tetapi nama file dapat menyesatkan. Nama saja tidak membuktikan isinya aman.

| Nama contoh | Isi yang lazim |
|---|---|
| `catatan.txt` | Teks biasa |
| `index.html` | Dokumen halaman |
| `contoh.py` | Kode Python |

#### Membuat salinan sebelum mencoba

Kasir ingin mencoba mengubah catatan tanpa kehilangan sumbernya.
**Simpan** berarti menulis pekerjaan ke file, seperti memasukkan nota yang sudah ditulis ke map.

**Salin** membuat salinan sambil mempertahankan sumber, seperti menggandakan nota.
Untuk latihan awal, gunakan salinan agar perubahan bisa dibandingkan dengan sumber.

**Pindah** mengubah lokasi file, seperti memindahkan nota ke laci lain.
Periksa lokasi sebelum dan sesudah agar file tetap mudah ditemukan.

#### Membuka halaman dan membaca alamat

Kasir ingin membuka halaman latihan.
**Browser** adalah aplikasi pembuka halaman, misalnya Edge, Chrome, Firefox, atau Safari.
Browser juga bisa membuka file halaman dari komputer sendiri.

**Internet** menghubungkan banyak perangkat dalam jaringan.
Membuka browser tidak selalu mengirim data ke internet, misalnya saat membuka halaman lokal.

**Website** adalah kumpulan halaman yang dibuka melalui alamatnya, seperti kumpulan lembar informasi toko.
Untuk menuju halaman, kasir perlu memilih tempat penulisan alamat.

Contohnya, kasir hendak membuka `https://docs.python.org/`.
Ia mengetik alamat pada bagian atas jendela, bukan di sembarang kotak pada halaman.

**Address bar**, atau bilah alamat, adalah kotak alamat di bagian atas browser, seperti tempat menulis tujuan kiriman.
Kotak pencarian pada halaman berfungsi mencari informasi.
Browser juga dapat mengubah teks biasa di bilah alamat menjadi pencarian, sehingga kedua tempat itu bisa terlihat mirip.

Periksa hasil setelah menekan Enter: apakah halaman yang dituju terbuka atau hanya daftar hasil pencarian?

##### Cukup kenali dulu

- **Alamat lokal**: awalan `file:///` menunjuk file pada komputer sendiri.
- **Alamat layanan sendiri**: `http://127.0.0.1:8000/` pada latihan nanti menunjuk layanan di komputer sendiri.
- **HTTPS**: awalan `https://` menjelaskan jenis koneksi; pengelola situsnya tetap perlu diperiksa sebelum dipercaya.

#### Memilih tempat mengetik

Kasir menulis isi catatan pada **editor teks**, aplikasi untuk menyunting teks, seperti lembar kerja tempat menulis nota.
Notepad adalah salah satu contohnya.

Untuk meminta pekerjaan lewat perintah teks, kasir membuka **terminal**, jendela tempat memberi perintah dan membaca hasil.
Bayangkan meja untuk menyerahkan instruksi kerja.

**Shell** adalah program yang mengartikan perintah, seperti petugas pembaca instruksi di meja tadi.
PowerShell dan Bash adalah dua shell dengan aturan berbeda.

| Tempat | Yang diketik | Contoh |
|---|---|---|
| Editor teks | Isi untuk disimpan ke file | `Catatan latihan pertama` |
| Bilah alamat browser | Lokasi halaman | `http://127.0.0.1:8000/nota.txt` |
| Terminal | Perintah untuk program atau shell | `Get-Location` |

**Input** berarti masukan bagi program, seperti permintaan pekerjaan kepada kasir. Pada latihan ini, masukannya berupa perintah.

**Output** berarti hasil program, seperti jawaban kasir setelah membaca permintaan.
Kamu perlu membedakan keduanya saat menjelaskan percobaan.

Penanda bahwa shell siap menerima perintah disebut **prompt**, seperti tanda loket siap melayani.
Contohnya `PS C:\...>`, yang sering menyertakan lokasi saat ini. Jangan menyalin penanda ini sebagai bagian perintah.

Contohnya, kamu mengetik `Get-Location` di PowerShell dan membaca nama folder sebagai hasilnya.
Alamat website masuk ke bilah alamat; isi kode Python masuk ke file untuk latihan simpan-lalu-jalankan.
Menempelkan kode Python ke bilah alamat tidak menjalankan latihan Python dalam buku.

#### Mencoba perintah virtual lebih dahulu

Kasir berlatih pada **simulator**, model latihan di halaman dengan data buatan yang sudah disediakan.
Perintahnya hanya bekerja pada data itu.

Kasir membuka nota **virtual**, yaitu nota dalam model latihan.
Ia membaca data buatan dan tidak mengakses data pelanggan nyata.

PowerShell yang dibuka dari menu Windows adalah program nyata yang bisa membaca atau mengubah file sesuai perintah.
Keberhasilan di simulator belum membuktikan bahwa kamu sudah memakai shell Linux nyata.
Nanti kamu akan memindahkan pemahaman ke file lokal dan kasus baru dengan batas izin yang jelas.

#### Ringkasan

- File menyimpan isi; folder membantu menyusun dan menemukan file.
- Menyalin mempertahankan sumber agar perubahan bisa dibandingkan.
- Editor, bilah alamat, dan terminal menerima jenis isian yang berbeda.
- Simulator menjalankan perintah virtual pada data latihan; terminal sistem dapat memengaruhi file komputer.

#### Cek pemahaman

1. Di mana kamu mengetik alamat website dan di mana kamu menulis isi catatan?
2. Mengapa salinan lebih cocok untuk percobaan awal daripada dokumen penting?
3. Apa perbedaan perintah yang kamu ketik dan hasil yang muncul?
4. Mengapa perintah simulator perlu dibedakan dari PowerShell nyata?

### Praktik

#### Sesi 1: hasil pertama dalam kira-kira lima menit

Sisihkan sekitar lima menit untuk percobaan awal. Kamu boleh mengulangnya.
Pilih jalur sesuai perangkatmu.

**Dari HP atau browser komputer:**

1. Buka [simulator Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/). Internet diperlukan untuk versi online; akun dan unduhan ZIP tidak diperlukan.
2. Pada progres baru, halaman menampilkan **Temukan catatan toko** dengan mode belajar terpilih. Jika pernah belajar, pilih kembali misi dan mode itu.
3. Pada HP, ketuk **Pilih misi dan mode** jika perlu membuka daftar latihan.
4. Ketuk **Ketik perintah di sini**, isi `pwd`, lalu ketuk **Jalankan perintah**. Jangan mengetik `pwd` di bilah alamat browser.
5. Baca lokasi pada kotak hasil. Jelaskan dengan kalimat sendiri: “Saya meminta lokasi folder, simulator menunjukkan ….”
6. Coba `ls` dengan cara yang sama. Jika hasilnya belum jelas, buka **Pahami istilah dan konsep misi**, lalu gunakan petunjuk di bawah meja praktik.
7. Simpan tautan sebagai bookmark atau favorit browser agar mudah dibuka lagi.

Jika penyimpanan diizinkan, progres tersimpan pada browser ini. Berpindah HP, komputer, atau browser tidak memindahkan progres secara otomatis.
Periksa pesan penyimpanan pada halaman. Jika penyimpanan gagal, unduh catatan sebelum menutup tab.

**Alternatif: file offline di komputer setelah mengunduh:**

ZIP adalah paket file. Jika baru mengunduhnya dari GitHub, temukan di Downloads.
Kerjakan latihan dari folder hasil ekstraksi agar file pendukung dapat ditemukan.

1. Buka pengelola file. Di Windows, tekan tombol bergambar Windows dan `E` bersama-sama, atau pilih ikon File Explorer dari Start.
2. Temukan folder tutorial pada lokasi yang diberikan jika seseorang sudah menyiapkannya. Jangan memakai contoh path penulis sebagai lokasi komputermu.
3. Jika masih berupa ZIP, klik kanan dan pilih **Extract All** atau **Ekstrak Semua**. Buka folder hasil ekstraksinya.
4. Cari `README.md`, `materi`, `labs`, dan `simulator` sebagai penanda folder utama. Buka folder `simulator`.
5. Buka `index.html` dengan browser. Jika terbuka di editor, klik kanan, pilih **Open with** atau **Buka dengan**, lalu pilih browser.
6. Pilih mode belajar dan misi pertama. Baca tugas sebelum mengetik; gunakan petunjuk jika perlu.
7. Lakukan satu tindakan, baca hasil, lalu jelaskan: “Saya meminta …, simulator menunjukkan ….”

Hasil pertama selesai ketika simulator terbuka dan kamu bisa membedakan instruksi dari jawabannya.
Warna tombol atau skor saja tidak cukup untuk menilai pemahaman.
Kerjakan satu misi dahulu.
Simpan nama folder unduhan agar bisa dibuka besok. Kamu boleh melanjutkan misi dari HP sebelum praktik komputer tersedia.

#### Sesi 2: buat catatan yang dapat ditemukan kembali

Untuk sesi ini dan latihan file berikutnya, gunakan komputer. Pilih jalur sesuai perangkatmu.

**Windows**

1. Tutup atau kecilkan browser, lalu kembali ke folder utama tutorial.
2. Klik kanan area kosong. Pilih **New → Folder** atau **Baru → Folder**, beri nama `hasil-belajar`, lalu tekan Enter.
3. Jika folder itu sudah ada, buka yang sudah ada. Hindari membuat folder kedua dengan nama hampir sama.
4. Buka Notepad dari Start. Untuk contoh ini, gunakan editor teks; Word tidak diperlukan.
5. Ketik isi berikut:

```text
Latihan pertama Laundry Aman
Saya membuka simulator dari folder tutorial.
Saya masih ingin memahami perbedaan file dan folder.
```

6. Pilih **File → Save As** atau **Simpan Sebagai**. Masuk ke `hasil-belajar` dan simpan sebagai `catatan-pertama.txt`.
7. Tutup Notepad. Buka kembali file lewat pengelola file dan baca isinya untuk memeriksa tempat serta hasil simpan.

Untuk menampilkan ekstensi di Windows 11, pilih **View → Show → File name extensions** pada File Explorer.
Pada versi Windows lain, cari **File name extensions** di menu View.
Cocokkan menu melalui [panduan ekstensi Microsoft](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).

Sekarang buat salinan:

1. Pilih file dengan satu klik, tekan `Ctrl+C`, lalu `Ctrl+V` pada folder yang sama.
2. Sistem biasanya memberi nama berbeda. Ubah nama salinan menjadi `catatan-salinan.txt`.
3. Edit salinan dan tambahkan “Ini salinan untuk latihan.”
4. Buka sumber untuk memastikan isinya tetap. Gunakan file latihan ini; jangan mencoba pada dokumen penting.

**macOS**

Gunakan Finder untuk membuat folder dan menyalin file. Pintasan salin/tempel umumnya memakai Command.
Jika memakai TextEdit untuk kode, pilih **Format → Make Plain Text** agar tersimpan sebagai teks biasa.

**Linux**

Gunakan menu pengelola file dan editor teks yang tersedia untuk membuat folder, menyimpan catatan, dan membuat salinannya.

Pada semua jalur, periksa hasil yang sama: satu sumber, satu salinan, dan lokasi yang bisa ditemukan kembali.

#### Sesi 3: kenali tombol dan baca satu baris perintah

Kasir ingin menyalin catatan tanpa mengetik ulang.
`Ctrl+C` berarti tahan Ctrl, tekan C, lalu lepaskan. Jangan mengetik kata “Ctrl” atau tanda tambah.
Di editor, pintasan ini menyalin teks yang dipilih.

Di terminal yang sedang menjalankan program, `Ctrl+C` lazim meminta program berhenti.
Tempat kamu menekan tombol menentukan tindakannya.

**Kursor** adalah tanda posisi pengetikan, seperti ujung pena yang menunjukkan tempat tulisan berikutnya.

**Fokus** menentukan kotak atau kontrol yang menerima ketikan.
Jika teks tidak muncul di kotak yang dimaksud, klik kotak itu dahulu.
Dengan keyboard, tekan Tab sampai bingkai fokus berada pada kontrol yang dibutuhkan.

| Tombol atau tindakan | Pemakaian awal |
|---|---|
| Enter | Mengirim perintah atau mengakhiri isian |
| Backspace | Menghapus karakter sebelum kursor |
| Tombol panah | Memindah posisi atau memilih riwayat, sesuai aplikasi |
| Tab | Berpindah fokus antar kontrol halaman; perilaku terminal berbeda |
| Ctrl+S | Menyimpan file pada banyak editor |
| Ctrl+L di browser | Memilih bilah alamat pada browser yang umum |

Baca label blok pada buku sebelum mengetik:

| Label | Isi yang ditunjukkan |
|---|---|
| `powershell` | Perintah PowerShell |
| `bash` | Perintah shell Bash, biasanya di Linux |
| `python` | Kode yang umumnya disimpan ke file `.py`, lalu dijalankan dengan Python |
| `text` | Data atau hasil; baca kalimat pengantar sebelum menganggapnya perintah |

Ikuti kata kerja sebelum blok: simpan, jalankan, atau bandingkan hasil.

#### Sesi 4: buka terminal nyata tanpa mengubah pengaturan

Pilih jalur sesuai perangkatmu. Gunakan komputer sendiri atau perangkat yang kamu diizinkan pakai.

**Windows PowerShell**

Buka Start, ketik `PowerShell`, lalu pilih Windows PowerShell sebagai pengguna biasa.
Jendela bisa berada di Windows Terminal, aplikasi penampung sesi; shell di dalamnya tetap PowerShell.
[Microsoft: memulai PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started).

Lihat prompt, misalnya `PS C:\...>`. **Jangan ketik ulang prompt.** Ketik hanya perintah berikut, lalu tekan Enter:

```powershell
Get-Location
```

PowerShell menampilkan folder saat ini tanpa memindahkan atau menghapus file.
Untuk masuk ke folder tutorial, salin alamatnya dari bilah alamat File Explorer.
Ketik `Set-Location -LiteralPath `, lalu masukkan alamat dalam kutip tunggal. Ganti contoh alamat berikut dengan lokasi foldermu:

```powershell
Set-Location -LiteralPath 'C:\Belajar\Tutorial Cybersecurity'
Get-ChildItem
```

Kutip menjaga alamat dengan spasi sebagai satu nilai.
`Set-Location` memilih folder kerja; `Get-ChildItem` membaca isinya.
Periksa apakah hasil memuat `README.md`, `materi`, dan `labs`.

Jika daftar tidak cocok, kamu mungkin satu tingkat terlalu luar atau terlalu dalam.
Kembali ke pengelola file, pilih folder yang benar, lalu ulangi. Alamat absolut boleh dilihat kembali; kamu tidak perlu menghafalnya.

Jika nama folder mengandung petik tunggal, buka terminal melalui menu konteks folder atau minta bantuan pengutipan path.
Jangan mengganti nama folder yang sedang dipakai aplikasi lain tanpa alasan.

**Linux/macOS**

Buka aplikasi Terminal. Pakai `pwd` untuk membaca lokasi, `cd` untuk berpindah, dan `ls` untuk melihat isi.
Perintah Bash Bab 04 tetap memerlukan lingkungan Linux yang sesuai.

**Persiapan Linux pada Windows**

Langkah WSL opsional ada di [Bab 01](materi/01-lab.md). Kerjakan setelah latihan dasar ini terasa jelas.
Kamu boleh memakai simulator lebih dahulu.

#### Sesi 5: siapkan Python ketika akan masuk lab kode

Kasir ingin menjalankan contoh kode kecil.
Python adalah bahasa pemrograman sekaligus nama program penjalan kode tersebut.
Memasangnya menambah kemampuan menjalankan file `.py`; seluruh bahasanya bisa dipelajari bertahap.

Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

Jalankan `py --version`. Jika hasil menunjukkan Python 3.11 atau lebih baru, lanjutkan.
Jika `py` tidak ditemukan, coba `python --version`.
Pakai nama perintah yang bekerja secara konsisten; nama yang berbeda tidak langsung berarti perlu memasang ulang.

Jika Python belum tersedia:

1. Buka [unduhan resmi Python](https://www.python.org/downloads/) dan pilih jalur Windows.
2. Unduh **Python install manager** dari situs resmi. Buka pemasang dan pilih **Install**.
3. Tutup dan buka kembali PowerShell. Jalankan `python --version`.
4. Internet masih diperlukan jika pengelola pemasangan mengunduh runtime, yaitu program penjalan Python, pada pemakaian awal.

Jika perangkat organisasi menolak pemasangan, minta pengelola menyediakan Python dan lanjutkan simulator sambil menunggu.
[Panduan resmi Windows](https://docs.python.org/3/using/windows.html) menjelaskan pemasangannya.

Setelah versi tampil, jalankan contoh berikut.
Jika hanya `py` yang bekerja, gunakan nama itu sebagai pengganti `python` pada contoh ini:

```powershell
python -c "print('Saya berhasil menjalankan Python')"
```

Hasilnya `Saya berhasil menjalankan Python`.
`-c` meminta Python menjalankan kode pendek dalam kutip; `print` menampilkan teks.
Perintah ini tidak membuat file baru.

**Linux/macOS**

Gunakan Python dari sumber resmi atau pengelola paket sistem.
Periksa dengan `python3 --version`; langkah pemasangan bergantung pada sistem.
Kamu boleh meminta bantuan khusus sistem itu tanpa mengganti komputer.

#### Sesi 6: simpan kode lalu jalankan

Gunakan komputer dan editor teks. Di Notepad, buat file baru berisi:

```python
print('Laundry Aman siap belajar')
```

Byte adalah satuan data yang akan dibahas lagi pada Bab 02.

**Encoding** adalah aturan mengubah teks menjadi byte, seperti aturan penulisan yang membantu pembaca mengenali isi.
Pilih UTF-8 untuk contoh buku; program tetap mengikuti aturan encoding yang dipakai saat membaca file.

Pilih Save As, masuk ke `hasil-belajar`, lalu pilih **All files** bila tersedia.
Simpan sebagai `halo.py` dengan encoding UTF-8. Periksa agar namanya `halo.py`, bukan `halo.py.txt`.
Pada editor lain, pilih penyimpanan teks biasa.

Pilih jalur sesuai perangkatmu untuk menjalankan file dari folder utama tutorial.

**Windows PowerShell**

```powershell
py hasil-belajar/halo.py
```

Ganti `py` dengan `python` jika itulah perintah yang bekerja.
Kamu meminta Python membuka file pada lokasi tersebut; isi `print(...)` tetap berada di file untuk pola latihan ini.

**Linux/macOS**

Pakai `python3` sebagai pengganti `py` pada perintah di atas.

Pada kedua jalur, hasil awalnya adalah `Laundry Aman siap belajar`.

Ubah teks di file menjadi `Saya bisa membuka file saya sendiri`, simpan, lalu ulangi perintah.
Jika pesan lama masih muncul, periksa hasil simpan dan cocokkan file yang diedit dengan lokasi pada perintah.
Ini latihan awal debugging, yaitu memeriksa kecocokan niat, file, perintah, dan hasil.

### Hasil yang diharapkan

Kamu bisa membuka simulator, menemukan kembali catatan, dan memilih tempat mengetik yang benar.
Jika Python siap, `halo.py` menampilkan pesan baru setelah isi diedit dan disimpan.
Jika Python belum tersedia, tandai bagian kode **belum dikerjakan**. Membaca hasil contoh belum berarti menjalankannya.

### Jika macet

| Yang terlihat | Periksa satu hal ini dahulu |
|---|---|
| Simulator terbuka sebagai kode | Pilih Open with lalu browser untuk `index.html` |
| Tampilan simulator tidak utuh | Ekstrak seluruh ZIP; pertahankan file pendamping dalam folder yang sama |
| Perintah menjadi pencarian internet | Buka terminal yang diminta; kamu tadi mengetik pada browser |
| `not recognized` atau `command not found` | Periksa ejaan, shell, dan pemasangan program |
| `can't open file` atau file tidak ditemukan | Periksa folder saat ini dan nama lengkap file, termasuk ekstensi |
| `halo.py.txt` | Aktifkan tampilan ekstensi, lalu simpan sebagai `.py` |
| Pesan lama muncul setelah mengedit | Simpan perubahan dan cocokkan path file yang diedit dengan perintah |
| `SyntaxError` | Periksa kutip lurus, tanda kurung, dan nomor baris; salin pesan kesalahan ke jurnal |
| Prompt `>>>` | Kamu berada di Python interaktif; ketik `exit()` untuk kembali ke shell |
| Terminal menunggu tanpa prompt baru | Program mungkin masih berjalan; baca petunjuk sebelum menutupnya |
| Progres tidak muncul di browser lain | Penyimpanan dapat berbeda menurut browser/lokasi; gunakan ekspor bila tersedia dan catat hasil sendiri |

Saat meminta bantuan, jelaskan tempat, tindakan, harapan, dan hasil:
“Saya sedang mencoba … pada Windows/Linux/macOS. Saya mengetik … di …, berharap …, tetapi mendapat ….”
Sertakan pesan kesalahan yang sudah diperiksa agar tidak memuat rahasia. Kalimat “tidak bisa” saja belum memberi cukup petunjuk.

### Latihan

Kerjakan tiga tingkat berikut. Catat bantuan yang dipakai, termasuk petunjuk atau jawaban AI.

**Terbimbing**

Buka kembali `catatan-pertama.txt` dengan sesi 2.
Jelaskan mengapa membuka ulang lebih kuat sebagai bukti daripada melihat tombol Save.

**Sebagian petunjuk**

Buat `catatan-kedua.txt` berisi dua hal yang kamu pahami.
Gunakan nama target dan hasil yang diminta, tanpa mengikuti urutan klik. Tutup lalu buka ulang.

**Kasus baru**

Buat folder `latihan-cabang-b` dalam `hasil-belajar`.
Simpan `jadwal.txt`, salin sebagai `jadwal-uji.txt`, lalu ubah hanya salinan.
Tunjukkan lokasi keduanya kepada pendamping atau jelaskan pada rekaman suara pribadi.
Jangan menghapus sumber untuk “merapikan”.

<details>
<summary>Pembahasan setelah mencoba: sumber, salinan, dan tempat mengetik</summary>

Membuka ulang memeriksa bahwa isi tersimpan pada file yang dapat ditemukan.
Pada kasus baru, sumber dan salinan berada di folder sama dengan nama berbeda.
Mengedit salinan seharusnya mempertahankan sumber. Jika keduanya berubah, periksa apakah file yang sama dibuka dua kali.

Lokasi sumber dihitung dari folder utama, atau path relatifnya, adalah `hasil-belajar/latihan-cabang-b/jadwal.txt`.
`Get-Location` masuk ke PowerShell; alamat website masuk ke bilah alamat; isi `print(...)` masuk ke file Python untuk pola simpan-lalu-jalankan.
Perintah virtual simulator tetap berbeda dari shell Linux nyata.

</details>

### Bukti kelulusan

- [ ] Saya dapat membuka folder utama dan membedakannya dari ZIP unduhan.
- [ ] Saya dapat membuka simulator melalui browser dan membaca hasil satu tindakan.
- [ ] Saya dapat membuat, menyimpan, menutup, dan membuka kembali file catatan.
- [ ] Saya dapat membedakan input, output, prompt, serta tempat mengetik.
- [ ] Saya dapat membuat salinan dan memeriksa bahwa sumber tetap utuh.
- [ ] Saya mencatat bagian yang masih membutuhkan bantuan atau belum dikerjakan.

#### Lanjut belajar

Lanjut ke [Bab 00](materi/00-orientasi.md) setelah lima kemampuan pertama bisa diperagakan.
Latihan Python boleh diselesaikan bersama [Bab 01](materi/01-lab.md).
Ulangi kasus baru setelah 48 jam tanpa melihat langkah.
Jika masih membutuhkan bantuan, beri label “terbimbing” dan ulangi bagian terkait.
Daftar ini mengukur persiapan belajar, bukan penguasaan seluruh keamanan siber.

### Referensi

- [Microsoft: ekstensi nama file](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).
- [Microsoft: mulai menggunakan PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started).
- [Python: penggunaan di Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan di macOS](https://docs.python.org/3/using/mac.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [Panduan pendamping dan pemeriksaan kemampuan](lampiran/panduan-pendamping.md).

---

<a id="bab-00"></a>

## Bab 00: Mulai dari nol dan ukur kemampuanmu

Tahap 1 dari 6: Mulai memakai alat

### Tujuan dan prasyarat

Kamu akan mengenali pekerjaan keamanan siber, menentukan batas latihan, dan membuat catatan belajar.
Jika membuka folder, menyimpan file, atau membedakan browser dan terminal masih membingungkan, kerjakan [Pra-bab: mulai dari nol](materi/pra-00-mulai-dari-nol.md).

Bagi bab ini menjadi dua sesi 15–25 menit.
Sesi pertama mengenali kasus Laundry Aman. Sesi kedua membuat catatan dan menjelaskan keputusan.
Kamu boleh mengulang sesuai kebutuhan.

### Konsep

Kasir Laundry Aman menerima pesanan dan menyimpan alamat pelanggan.
Ia perlu menyerahkan informasi kepada orang yang tepat, menjaga angka tagihan, dan tetap melayani ketika toko buka.
Kita akan melihat apa yang bisa mengganggu pekerjaan itu.
Setelah itu, kamu akan memilih batas latihan dan mencatat bukti hasilnya.

#### Apa yang perlu dijaga di meja kasir?

Laundry Aman adalah usaha rekaan yang menerima pesanan melalui website.
Tokonya memakai laptop kasir, Wi-Fi pelanggan, aplikasi pesanan, dan cadangan data.
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

#### Dari kelemahan ke kemungkinan kerugian

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

#### Batas latihan seperti apa yang disepakati?

Pemilik laundry boleh mengizinkanmu mencoba aplikasi latihan tanpa memberi izin memeriksa semua laptop pegawai.
**Scope**, atau ruang lingkup, membatasi target dan tindakan, seperti kesepakatan bagian toko yang boleh diperiksa.
Izin memakai Wi-Fi tetap tidak memberi izin menguji laptop orang lain.

Pemilik suatu nama situs juga tidak otomatis berwenang mengizinkan pengujian layanan pihak ketiga yang terhubung dengannya.
Untuk pekerjaan nyata, pemilik dan penguji menyepakati target, waktu, metode, penanganan data, serta kontak darurat secara tertulis.

Pada latihan awal, pakai komputer sendiri atau lingkungan yang penyelenggara sediakan.
**Lab** berarti lingkungan latihan dengan target dan data yang sudah disiapkan.

##### Cukup kenali dulu

- **Domain**: nama internet untuk situs atau layanan lain; kepemilikannya tidak mencakup izin menguji seluruh layanan terkait.
- **Hacker**: orang yang memahami sistem lalu menemukan cara mengubah perilakunya; buku ini mengajarkan pengujian berizin dan perbaikan.
- **AI**: alat bantu yang dapat memberi penjelasan atau jawaban; cocokkan jawabannya dengan dokumentasi dan hasil percobaan.

#### Siapa yang mengerjakan keamanan toko?

Ketika aplikasi Laundry Aman berkembang, orang dapat membagi tugas menjaga, menguji, dan menyelidikinya.
Kamu boleh mendalami satu bidang sambil memahami bidang lain.
Keahlian tumbuh melalui latihan, pemeriksaan kegagalan, dan pengalaman pada sistem berbeda.

##### Cukup kenali dulu

- **Blue team**: membangun perlindungan dan menyelidiki peringatan.
- **Pentester**: menguji kelemahan dalam ruang lingkup yang disepakati.
- **AppSec**: membantu pengembang membuat aplikasi aman.
- **DFIR**: memeriksa bukti digital dan menangani kejadian keamanan.
- **Security researcher**: meneliti akar masalah yang belum dipahami.

Selesai membaca memberi landasan dan jalur pendalaman.
Kemampuan profesional tetap perlu dibuktikan lewat pekerjaan dan latihan di luar halaman buku.

#### Ringkasan

- Aset adalah sesuatu yang perlu dijaga; satu aset dapat mengalami beberapa jenis kerugian.
- Ancaman dapat merugikan aset; kerentanan adalah kelemahan yang dapat memudahkan terjadinya kerugian.
- Risiko menghubungkan kemungkinan dengan dampak dalam kasus yang sedang diperiksa.
- Tentukan izin sebelum memilih alat atau menguji target.

#### Cek pemahaman

1. Apa perbedaan membaca alamat pelanggan lain dan mengubah tagihannya?
2. Pada kasus akun bersama, mana aset, kelemahan, dan ancamannya?
3. Mengapa izin memakai Wi-Fi tidak mencakup pengujian laptop pegawai?

### Praktik

#### 1. Buat kontrak belajar

Di folder tutorial, buat folder `hasil-belajar` jika belum ada.
Melalui editor teks, simpan dokumen `00-kontrak-belajar.md` di dalamnya.
**Markdown** adalah format teks dengan tanda sederhana untuk judul dan daftar; file-nya memakai ekstensi `.md`.

Pakai Notepad atau editor teks, lalu ikuti cara simpan-buka-ulang pada pra-bab.
Di Notepad, pilih **All files** saat menyimpan. Periksa agar namanya `00-kontrak-belajar.md`, bukan `00-kontrak-belajar.md.txt`.
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

#### 2. Kenali perbedaan kejadian

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

#### 3. Buat jurnal eksperimen

Buka kembali `00-kontrak-belajar.md` di editor. Tambahkan jurnal di bawah kontrak yang sudah kamu isi.
Setelah mencoba sesuatu di Laundry Aman, catat tujuan, dugaan awal, langkah, hasil, penjelasan, dan perbaikan.
Sertakan perintah yang dipakai. Catatan ini membantu orang lain mengikuti alasanmu.

**Token sesi** adalah pengenal login yang perlu dirahasiakan, seperti tiket masuk yang dapat dipakai pemegangnya.
Jangan memasukkan password, data pribadi, atau token sesi ke jurnal yang akan diunggah.

Jika memakai AI, minta penjelasan pesan kesalahan lalu periksa jawabannya melalui dokumentasi dan percobaan.
Salinan jawaban saja belum menunjukkan bahwa kamu memahami hasilnya.

### Hasil yang diharapkan

Kamu mempunyai kontrak belajar dan empat analisis singkat.
Kamu dapat menyebut apa yang boleh diuji, lalu menceritakan perubahan hasil latihan beserta bukti yang mendukungnya.

### Jika macet

Mulai dari akun terkunci, file hilang, atau transaksi salah.
Hubungkan masalah itu dengan aset dan dampaknya. Nama alat dan singkatan sertifikasi dapat dipelajari kemudian.
Jika perangkat latihan belum tersedia, kerjakan konsep dan data sintetis, yaitu data buatan, lebih dahulu.

### Latihan

Pilih satu aset Laundry Aman. Buat dua skenario kegagalan, satu tindakan pencegahan, dan cara memeriksa pencegahan itu.
Contohnya, cadangkan file pesanan lalu pulihkan salinannya ke folder berbeda.
Pernyataan “sudah punya backup” perlu dilengkapi hasil percobaan pemulihan.

### Bukti kelulusan

- [ ] Saya dapat membedakan aset, ancaman, kelemahan, dan risiko dengan contoh sendiri.
- [ ] Saya menyebut target latihan yang diizinkan dan menyimpan jurnal tanpa rahasia.
- [ ] Saya meminta teman membaca satu analisis dan menjelaskan dampaknya tanpa belajar komputer dahulu.

#### Uji pindah kasus

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

#### Lanjut belajar

Jika menyimpan catatan masih sulit, kembali ke [pra-bab](materi/pra-00-mulai-dari-nol.md).
Setelah bukti siap, lanjut ke [Bab 01: menyiapkan meja praktik](materi/01-lab.md).

### Referensi

- [Roadmap Cyber Security](https://roadmap.sh/cyber-security): peta kelompok kemampuan acuan urutan buku.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): kerangka pengelolaan risiko keamanan organisasi.

---

<a id="bab-01"></a>

## Bab 01: Menyiapkan meja praktik yang aman

Tahap 1 dari 6: Mulai memakai alat

### Tujuan dan prasyarat

Kamu akan menyiapkan folder kerja, memastikan Python tersedia, dan memilih tempat latihan yang sesuai perangkatmu.
Selesaikan [Bab 00](materi/00-orientasi.md) agar batas latihanmu jelas.
Jika membuka terminal masih membingungkan, ulangi [pra-bab](materi/pra-00-mulai-dari-nol.md).

Untuk bagian awal, cukup gunakan komputer yang bisa membuka browser, editor teks, dan Python.
Mesin virtual adalah pilihan lanjutan. Kamu tidak perlu membeli perangkat untuk memulai.

### Konsep

Kasir Laundry Aman ingin mencoba membaca dan menyimpan catatan latihan.
Ia perlu tahu tempat mengetik, folder yang dipakai, dan hasil yang harus terlihat.
Kita akan menyiapkan ketiganya sebelum memilih tempat latihan yang lebih rumit.
Setelah itu, kamu akan membuka ulang file untuk memeriksa bahwa catatan tersimpan di tempat yang benar.

#### Mengetik perintah di tempat yang tepat

Kasir membuka jendela untuk meminta daftar file.
**Terminal** adalah tempat mengetik perintah dan membaca jawabannya, seperti meja untuk menyerahkan instruksi kerja.

Program yang mengartikan instruksi itu disebut **shell**, seperti petugas yang membaca permintaan di meja tadi.
Shell yang berbeda dapat mempunyai aturan kutip, variabel, dan lokasi file yang berbeda.
Perhatikan label blok sebelum mengetik.

Pada Windows, kasir biasanya memakai PowerShell.
Linux sering memakai Bash, sedangkan macOS umumnya memakai zsh.
Nama-nama ini menunjukkan pilihan shell, bukan perintah yang harus diketik semuanya.

##### Cukup kenali dulu

- **Linux**: sistem operasi yang akan dipakai untuk latihan perintah pada Bab 04.
- **Variabel shell**: nama untuk suatu nilai yang dapat dipakai dalam perintah; aturannya bergantung pada shell.

#### Menentukan folder sebelum membaca nota

Kasir mempunyai banyak map. Permintaan “buka nota” perlu menyebut map mana yang sedang dipakai.
**Direktori kerja** adalah folder tempat terminal berada, seperti map yang terbuka di meja.

**Path relatif** menyebut lokasi dari direktori kerja itu.
`catatan.txt` berarti file di folder sekarang; `../catatan.txt` berarti naik satu folder dahulu.
Jika folder kerja salah, program dapat melaporkan file tidak ditemukan walaupun file itu ada di tempat lain.

Pada Praktik, kamu akan membaca lokasi dan isi folder sebelum membuat catatan.
Cara ini membantu memastikan hasil latihan berada di folder yang dimaksud.

#### Memilih tempat latihan sesuai kebutuhan

Kasir dapat memulai dari file buatan sendiri, lalu beralih ke latihan yang penyelenggara sediakan.
Untuk mencoba sistem lain, ia dapat memakai **virtual machine**, disingkat VM, yaitu komputer buatan di dalam komputer fisik.
Bayangkan ruang latihan di dalam gedung; ruang itu tetap memakai sumber daya gedung yang sama.

| Tingkat lab | Kebutuhan | Dipakai untuk |
|---|---|---|
| Lokal ringan | Python dan editor | Data sintetis, pemeriksaan perubahan file, pencarian data, dan izin membaca nota |
| Lab melalui browser | Internet dan akun bila diminta | Tantangan pada target yang pengelola sediakan |
| Mesin virtual | Memori kerja (RAM) dan ruang penyimpanan tambahan | Linux, konfigurasi jaringan, dan pengujian sistem |

Sistem utama pada komputer fisik disebut **host**, seperti pengelola gedung tempat latihan berlangsung.

**Guest** adalah sistem di dalam VM, seperti peserta yang bekerja dalam ruang latihan tadi.
Ia tetap dapat mempunyai hubungan dengan host atau jaringan lain, sesuai pengaturan.
Bedakan keduanya agar tidak salah mengubah sistem utama.

Contohnya, kamu ingin mencoba Linux tanpa mengganti sistem utama komputer kasir.
VM menyediakan tempatnya, tetapi kamu tetap perlu memeriksa jalur hubungan datanya.

**Snapshot** merekam keadaan VM agar bisa dikembalikan, seperti foto keadaan ruang latihan sebelum percobaan.
Snapshot pada disk yang sama tetap terancam jika disk rusak. Gunakan cadangan terpisah untuk kebutuhan pencadangan.

##### Cukup kenali dulu

- **Data sintetis**: data buatan untuk percobaan.
- **Hash**: ringkasan data untuk membantu memeriksa perubahan file.
- **SQL**: bahasa untuk meminta atau mengubah data tersusun pada basis data.
- **Otorisasi**: pemeriksaan apakah pengguna boleh melakukan tindakan, seperti membaca nota tertentu.
- **Hypervisor**: perangkat lunak pengelola VM; periksa dokumentasinya sebelum menyalakan target latihan.

#### Menggambar sambungan sebelum menyalakan VM

Kasir ingin tahu apakah komputer latihan bisa menghubungi komputer utama, teman latihan, atau tujuan di luar toko.
Gambarkan hubungan yang dibutuhkan sebelum mengaktifkan target.

Mode **NAT** biasanya memberi guest akses keluar melalui host, seperti pintu keluar lewat gedung utama.
Mode ini tidak membuat guest terisolasi dari semua tujuan.

Mode **internal network** menghubungkan guest pada jaringan virtual yang sama, seperti ruang bersama khusus peserta latihan.
Bandingkan mode ini dengan kebutuhanmu, lalu tandai sambungan yang perlu dicegah.

Misalnya, target yang sengaja rentan cukup berkomunikasi dengan mesin latihan lain.
Kamu perlu memeriksa pengaturan jaringan, bukan berasumsi bahwa nama mode sudah menjamin seluruh isolasi.

##### Cukup kenali dulu

- **Host-only**: menghubungkan guest dengan host dan guest lain pada jaringan tersebut.
- **Bridged**: menempatkan guest pada jaringan fisik; hindari mode ini untuk sistem latihan yang sengaja rentan.

#### Ringkasan

- Pilih shell yang sesuai label perintah.
- Periksa direktori kerja sebelum membaca atau menulis file.
- Mulai dari lab lokal ringan; VM dan persiapan Linux boleh menyusul sesuai kebutuhan bab.
- Pada VM, bedakan host, guest, snapshot, serta hubungan jaringan yang diizinkan.

#### Cek pemahaman

1. Mengapa file yang ada tetap dapat dilaporkan tidak ditemukan?
2. Apa perbedaan host dan guest pada contoh komputer kasir?
3. Mengapa snapshot pada disk yang sama perlu dilengkapi cadangan terpisah?
4. Apakah NAT berarti guest terisolasi dari semua tujuan?

### Praktik

#### 1. Buka folder tutorial

Jika mengunduh ZIP, ekstrak dahulu. Buka folder yang berisi `README.md`.
Editor khusus tidak wajib untuk membuka terminal. Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

1. Buka Start, ketik `PowerShell`, lalu buka sebagai pengguna biasa.
2. Ikuti `Set-Location` pada [pra-bab](materi/pra-00-mulai-dari-nol.md) untuk memilih folder tutorial.
3. Jika menu klik kanan menyediakan **Open in Terminal**, kamu boleh memakainya. Pastikan sesi yang terbuka memakai PowerShell.
4. Periksa lokasi dan isi:

```powershell
Get-Location
Get-ChildItem
```

**Linux/macOS**

Buka terminal di folder tutorial, lalu periksa:

```bash
pwd
ls
```

Daftar harus memuat berkas dan folder tutorial, seperti `README.md` dan `labs`.
Jangan mengetik ulang `PS C:\...>` atau `$`; keduanya adalah penanda kesiapan shell.
Buku hanya menampilkan perintah yang perlu diketik.

#### 2. Periksa Python

Dari terminal tadi, pilih jalur sesuai perangkatmu.

**Windows PowerShell**

```powershell
py --version
py -c "print('Lab Laundry Aman siap')"
```

**Linux/macOS**

```bash
python3 --version
python3 -c "print('Lab Laundry Aman siap')"
```

Hasil harus menunjukkan Python 3.11 atau lebih baru dan kalimat `Lab Laundry Aman siap`.
Contoh memakai standard library, yaitu modul bawaan. Paket tambahan dari internet tidak diperlukan untuk lab inti.

Jika Python belum tersedia, ambil dari [python.org](https://www.python.org/downloads/) atau pengelola paket resmi distribusi Linux.
Ikuti petunjuk untuk sistemmu, buka terminal baru, lalu ulangi pemeriksaan.

**Windows PowerShell**

Jika `py` tidak tersedia tetapi `python --version` menunjukkan Python 3.11 atau lebih baru, gunakan `python` sebagai pengganti `py`.

**Linux/macOS**

Gunakan `python3`. Periksa program yang benar-benar berjalan; nama file saja tidak menentukan program penjalan kodenya.

#### 3. Buat tempat menyimpan hasil

Dari folder tutorial, pilih jalur sesuai perangkatmu. Jalankan baris satu per satu.
Perintah kedua menimpa isi jika nama file sudah ada. Pakai nama baru bila hasil lama perlu dipertahankan.
Jika memakai nama baru, sesuaikan nama pada perintah penulisan dan pembacaan agar keduanya menunjuk file yang sama.

**Windows PowerShell**

```powershell
New-Item -ItemType Directory -Path hasil-belajar -Force
Set-Content -Path hasil-belajar/cek-lab.txt -Value 'Lab Laundry Aman siap'
Get-Content hasil-belajar/cek-lab.txt
```

**Linux/macOS**

```bash
mkdir -p hasil-belajar
printf '%s\n' 'Lab Laundry Aman siap' > hasil-belajar/cek-lab.txt
cat hasil-belajar/cek-lab.txt
```

`New-Item` atau `mkdir` membuat folder. Perintah kedua menulis file, lalu perintah ketiga membacanya.
Cocokkan isi yang terbaca dengan `Lab Laundry Aman siap`.

#### 4. Tentukan jalur Linux

Untuk Bab 04, kamu perlu terminal Linux.
Pilih mesin Linux yang dimiliki, VM pribadi, atau lingkungan belajar resmi yang menyediakan shell.
Persiapan ini boleh menyusul setelah tiga langkah pertama selesai.

**Opsi Windows: Ubuntu melalui WSL**

**Windows Subsystem for Linux**, disingkat WSL, membantu menjalankan lingkungan Linux untuk belajar perintah pada Windows.
Folder Windows dapat diakses dari WSL dan perangkatnya dibagi dengan sistem utama.
Jangan memperlakukan WSL sebagai tempat menjalankan malware.

**Ubuntu** adalah salah satu pilihan Linux untuk jalur ini.
Langkah pemasangan berlaku pada Windows 11 atau Windows 10 versi 2004/build 19041 ke atas.
Pemasangan bersifat opsional dan mengubah komponen Windows. Lakukan hanya pada perangkat yang kamu kelola.

1. Simpan pekerjaan. Buka PowerShell sebagai administrator, lalu jalankan `wsl --install`.
2. Restart jika diminta. Buka Ubuntu dari Start dan tunggu penyiapan selesai.
3. Buat nama pengguna Linux dan password baru. Password tidak terlihat saat diketik; itu normal.
4. Di terminal Ubuntu, jalankan `pwd` lalu `whoami`. Pakai terminal ini untuk Bash Bab 04.
5. Di PowerShell, `wsl --list --verbose` menampilkan distribusi terpasang. `exit` menutup sesi shell Linux.

Jika WSL tersedia tetapi Ubuntu belum terpasang, ikuti pilihan distribusi pada [panduan instalasi Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install).
Jika perangkat organisasi membatasi pemasangan, gunakan lab yang disetujui pengelolanya.

**Jika memilih VM**

Gunakan image resmi, yaitu berkas sistem yang penyedia resminya terbitkan, lalu periksa pengaturan berikut:

- Matikan **shared clipboard**, fasilitas salin-tempel antara host dan guest, saat bereksperimen.
- Matikan **shared folder**, folder yang dibagikan antara host dan guest, saat bereksperimen.
- Buat snapshot kondisi awal.
- Cocokkan pengaturan jaringan VM dengan diagram sebelum memasang aplikasi rentan; gambar saja belum membuktikan isolasi.

Buku tidak membutuhkan Docker, akun cloud berbayar, atau kartu kredit.

### Hasil yang diharapkan

Terminal menampilkan versi Python 3.11 atau lebih baru dan kalimat `Lab Laundry Aman siap`.
File `hasil-belajar/cek-lab.txt` ada di folder yang kamu maksud.
Kamu mengetahui shell yang dipakai dan pilihan lingkungan Linux untuk bab selanjutnya.

Pengguna Windows cukup memakai PowerShell dan Python untuk tiga langkah pertama.
Lingkungan Linux diperlukan untuk Bab 04; VM dan WSL adalah pilihan jika Linux belum tersedia.
Kamu tetap boleh mengerjakan latihan file sebelum VM atau WSL siap.
Simulator dapat membantu mengenali perintah virtual sambil lingkungan praktik disiapkan.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `Command not found` atau “not recognized” | Periksa pemasangan program, lalu buka terminal baru |
| `Permission denied` saat menulis | Periksa folder; pindah ke folder proyek milikmu yang boleh ditulis |
| `contoh.py` ternyata `contoh.py.txt` | Aktifkan tampilan ekstensi di pengelola file |
| Komputer lambat saat VM aktif | Tutup VM dan lanjutkan lab Python lokal |

Jangan menyelesaikan semua kesalahan dengan menjalankan terminal sebagai administrator.
Latihan awal tidak memerlukan VM aktif.

### Latihan

Buka terminal baru, masuk kembali ke folder tutorial, lalu baca file tadi tanpa melihat panduan.
Tulis perbedaan host, guest, NAT, dan internal network.
Gambarkan sambungan yang diinginkan dan yang perlu dicegah ketika memakai VM rentan.

### Bukti kelulusan

- [ ] Saya menyimpan versi Python, nama shell, lokasi folder, dan hasil pembacaan file.
- [ ] Saya menjelaskan mengapa direktori kerja memengaruhi perintah.
- [ ] Saya memilih lab yang sesuai kemampuan perangkat.

#### Lanjut belajar

Jika batas latihan belum jelas, ulangi [Bab 00](materi/00-orientasi.md).
Untuk latihan membuka terminal, kembali ke [pra-bab](materi/pra-00-mulai-dari-nol.md).
Setelah bukti siap, lanjut ke [Bab 02: komputer dan sumber masalah](materi/02-komputer.md).

### Referensi

- [Python: penggunaan pada Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [VirtualBox: jaringan virtual](https://www.virtualbox.org/manual/ch06.html).
- [Microsoft: memasang WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

---

<a id="bab-02"></a>

## Bab 02: Mengenali komputer dan mencari sumber masalah

Tahap 1 dari 6: Mulai memakai alat

### Tujuan dan prasyarat

Kamu akan membedakan perangkat keras, sistem operasi, proses, file, dan layanan.
Gunakan komputer sendiri serta folder latihan dari [Bab 01](materi/01-lab.md).
Latihan hanya membaca informasi dan membuat file kecil. Pengaturan sistem tetap seperti semula.

### Konsep

Kasir Laundry Aman menyimpan pesanan, lalu mencetak nota.
Komputer mengerjakan instruksi, menampung pekerjaan yang sedang dibuka, dan menyimpan hasilnya.
Ketika sesuatu gagal, kasir perlu menentukan bagian mana yang diperiksa dahulu.
Kita akan mengamati pekerjaan yang berjalan, membaca ukuran file, lalu memperbaiki satu kesalahan nama.

#### Apa yang bekerja saat kasir menyimpan nota?

Kasir meminta komputer menghitung dan menyimpan pesanan.
**CPU**, atau prosesor, mengerjakan instruksi, seperti petugas yang menjalankan langkah pekerjaan.

Data yang sedang dipakai membutuhkan tempat kerja sementara.
**RAM** menampung keadaan kerja itu, seperti meja tempat petugas membuka catatan hari ini.

Setelah selesai, kasir menyimpan file agar tetap ada setelah komputer mati.
**Storage** menyimpan data tersebut, seperti lemari penyimpanan catatan.
Kapasitas disk yang besar tetap tidak menggantikan kekurangan RAM.

| Bagian | Peran pada contoh kasir |
|---|---|
| CPU | Mengerjakan instruksi penyimpanan |
| RAM | Menampung data kerja sementara |
| Storage | Menyimpan file yang perlu bertahan |

Perbandingan meja dan lemari membantu membedakan peran.
Komputer tetap mengelola data menurut aturan program; catat hasil pengamatan sebelum menilai penyebab masalahnya.

#### Aplikasi dibuka, pekerjaan mulai berjalan

Kasir membuka editor untuk menulis nota.
**Sistem operasi**, seperti Windows atau Linux, mengatur sumber daya dan akses perangkat, seperti pengelola tempat kerja.
Aplikasi berjalan di atas sistem operasi itu.

Ketika program berjalan, ia menjadi **proses**, seperti pekerjaan yang sedang dikerjakan petugas.
Proses mempunyai identitas dan sumber daya sendiri.
File aplikasi bisa tersedia tanpa sedang berjalan; satu aplikasi juga bisa membuat banyak proses.

Kasir dapat melihat nomor untuk mengenali pekerjaan yang berjalan.
**PID** adalah nomor identitas proses. Nomornya bisa berubah setelah program dijalankan ulang, seperti nomor antrean pada kunjungan berikutnya.

Misalnya, editor terlihat di layar, tetapi daftar lima proses pertama belum tentu memuatnya.
Kamu perlu memeriksa aplikasi dan proses yang sesuai, bukan menganggap baris pertama sebagai jawabannya.

Pencetakan juga dapat bekerja di latar belakang.
**Service**, atau layanan, adalah program untuk fungsi tersebut, seperti petugas yang siap menerima pekerjaan cetak.

##### Cukup kenali dulu

- **Kernel**: bagian inti sistem operasi yang mengelola memori, proses, dan perangkat.
- **SSD**: salah satu jenis perangkat penyimpanan, atau storage.
- **Server web**: program yang melayani permintaan halaman; juga contoh service.

#### Menemukan nota dan membaca ukurannya

Kasir mencari nota lewat nama foldernya.
Sistem file mengatur nama, folder, isi, dan **metadata**, yaitu keterangan seperti ukuran serta waktu perubahan.

Akar adalah titik awal path lengkap: pada contoh Windows `C:\`, sedangkan pada Linux/macOS `/`.

Lokasi lengkap dari akar disebut **path absolut**, seperti alamat lengkap sebuah rumah.
Contohnya `C:\lab\nota.txt` atau `/home/pelajar/lab/nota.txt`.

Lokasi yang bergantung pada folder kerja disebut **path relatif**, seperti petunjuk “di ruangan ini”.
Contohnya `nota.txt`. Kamu sudah memakai cara ini pada Bab 01.

Nama `nota.txt` membantu memilih aplikasi pembuka lewat ekstensi `.txt`.
Ekstensi hanya petunjuk: mengganti `.exe` menjadi `.txt` tetap tidak mengubah isi program menjadi dokumen aman.

**Bit** adalah satuan data yang bernilai 0 atau 1, seperti pilihan dengan dua kemungkinan.

Untuk membandingkan ukuran nota dan salinannya, kita memakai **byte**, satuan data seperti gram saat menimbang cucian.
Satu byte terdiri dari delapan bit. Perhatikan satuan yang dicantumkan, bukan hanya angkanya.

Ukuran unduhan 100 MB berbeda dari kecepatan 100 megabit per detik.
Yang pertama menyebut banyak data; yang kedua menyebut laju pengiriman.

##### Cukup kenali dulu

- **Kilobyte dan megabyte**: pada produk dapat memakai kelipatan 1.000.
- **KiB dan MiB**: memakai kelipatan 1.024; 1 KiB = 1.024 byte, sedangkan 1 MiB = 1.024 KiB.

#### Memeriksa satu dugaan setiap kali

Kasir mencoba membuka nota, tetapi nama file yang diketik salah.
**Troubleshooting** berarti mencari sumber masalah secara bertahap, seperti menelusuri nota hilang dari tempat terakhir yang diketahui.
Ubah satu hal, lalu baca hasilnya agar penyebab perbaikan dapat diketahui.

#### Ringkasan

- CPU mengerjakan instruksi; RAM menampung keadaan kerja; storage menyimpan file.
- Proses adalah program yang sedang berjalan. File program bisa ada tanpa prosesnya berjalan.
- Lokasi file dan satuan ukuran membantu menjelaskan hasil pengamatan.
- Satu perubahan kecil lebih mudah diperiksa daripada mengganti banyak pengaturan sekaligus.

#### Cek pemahaman

1. Mengapa disk yang lebih besar tidak menggantikan RAM yang kurang?
2. Mengapa nomor PID boleh berbeda setelah program dibuka ulang?
3. Jika nota tidak ditemukan, apa yang kamu periksa sebelum mengubah izin?

### Praktik

#### 1. Amati proses tanpa menghentikannya

Pilih jalur sesuai perangkatmu. Buka terminal biasa; folder kerja boleh di mana saja.

**Windows PowerShell**

Jalankan:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
```

Perintah mengambil lima proses beserta nama dan ID-nya.
Tanda `|`, disebut **pipe**, meneruskan hasil ke perintah berikutnya, seperti menyerahkan daftar ke petugas pemilih kolom.

**Linux**

Jalankan:

```bash
ps -eo pid,comm | head -n 6
```

Hasil menampilkan kolom PID dan nama. Enam baris mencakup satu judul kolom.
Nomor PID dan nama proses boleh berbeda dari komputer lain.

**macOS**

Buka Activity Monitor melalui pencarian Spotlight. Baca nama proses tanpa menekan tombol penghentian.

Pada semua jalur, buka aplikasi editor, lalu ulangi pengamatan.
Jika editor tidak muncul pada lima proses pertama, periksa melalui Task Manager di Windows atau monitor sistem Linux.
Task Manager dapat dicari melalui menu Start.
Hubungkan aplikasi yang terlihat dengan prosesnya; jangan menghentikan proses atau layanan sistem.

#### 2. Buat file dan periksa ukurannya

Dari folder tutorial, pilih jalur sesuai perangkatmu.
Perintah menulis file latihan, membaca ukurannya, lalu membuat salinan.
Periksa `nota.txt` dan `nota-salinan.txt` dahulu; perintah penulisan dan penyalinan bisa menimpa file yang sudah ada.
Pertahankan hasil lama sebelum mengulang jika masih diperlukan.

**Windows PowerShell**

```powershell
Set-Content hasil-belajar/nota.txt 'Pesanan L001: 3 kilogram'
Get-Item hasil-belajar/nota.txt | Select-Object Name, Length
Copy-Item hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

`Length` menunjukkan ukuran dalam byte.

**Linux/macOS**

```bash
printf '%s\n' 'Pesanan L001: 3 kilogram' > hasil-belajar/nota.txt
wc -c hasil-belajar/nota.txt
cp hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

`wc -c` menghitung byte.
Ukuran dapat berbeda karena encoding dan akhir baris dari perintah penulisan.
Windows PowerShell versi lama juga mempunyai encoding bawaan yang berbeda. Catat cara membuat file; angkanya tidak perlu dipaksa sama.

#### 3. Latih troubleshooting bertahap

Kita sengaja membaca nama file yang belum dibuat. Pilih jalur sesuai perangkatmu dari folder tutorial.

**Windows PowerShell**

Ketik `Get-Content hasil-belajar/nota-tidak-ada.txt`.

**Linux/macOS dengan Bash**

Ketik `cat hasil-belajar/nota-tidak-ada.txt`.

Baca pesan kesalahan. Hasil gagal memang diharapkan karena file itu belum ada.
Periksa lokasi, daftar file, dan ejaannya.
Ganti hanya `nota-tidak-ada.txt` menjadi `nota.txt`, lalu jalankan lagi.

Nota yang kini terbaca menunjukkan bahwa penyebab kasus latihan adalah nama file.
Kamu tidak perlu meminta izin administrator untuk memperbaiki salah nama tersebut.

Untuk masalah lebih besar, gunakan urutan berikut:

1. Tulis hasil yang diharapkan dan yang terlihat.
2. Catat kapan masalah mulai terjadi dan perubahan terakhir.
3. Buat satu dugaan yang dapat diuji.
4. Uji dengan perubahan paling kecil.
5. Simpan hasil, termasuk dugaan yang salah.

Jika website kasir tidak terbuka, pisahkan pertanyaan: apakah proses server berjalan dan apakah aplikasinya mengembalikan kesalahan?
Periksa juga port terbuka dan jawaban nama domain.
Keduanya akan dijelaskan di [Bab 03](materi/03-jaringan.md); di sini cukup kenali sebagai pemeriksaan jalur menuju aplikasi.

### Hasil yang diharapkan

Kamu melihat proses aktif, membuat dua file nota, dan memperbaiki kesalahan nama file.
Catatan memuat satu hipotesis, yaitu dugaan yang diuji, beserta bukti yang mendukung atau membantahnya.
Latihan selesai tanpa menghentikan layanan sistem.

### Jika macet

Daftar proses yang panjang lazim terjadi karena sistem modern menjalankan banyak layanan.
Jumlahnya saja belum menunjukkan penyusupan.

RAM terpakai perlu konteks: sistem dapat memakai memori kosong untuk **cache**, yaitu data sementara yang membantu akses berikutnya.
Jika membaca file gagal, periksa path dahulu sebelum mengubah izin.

### Latihan

Bedakan tiga keadaan: file hilang, file ada tetapi akses ditolak, serta file terbuka dengan isi yang salah.
Untuk setiap keadaan, tentukan satu pemeriksaan awal.
Pulihkan nota dari salinan ke nama baru, lalu buka hasilnya untuk memeriksa isi.

### Bukti kelulusan

- [ ] Saya menjelaskan CPU, RAM, storage, proses, dan service dengan contoh pekerjaan kasir.
- [ ] Saya menyimpan jurnal kesalahan nama file beserta pemulihannya.
- [ ] Saya dapat mengulang masalah, mengumpulkan bukti, lalu memperbaikinya.

#### Lanjut belajar

Jika folder kerja masih membingungkan, ulangi [Bab 01](materi/01-lab.md).
Setelah bukti siap, lanjut ke [Bab 03: perjalanan data di jaringan](materi/03-jaringan.md).

### Referensi

- [Microsoft: Get-Process](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process).
- [Ubuntu: pengantar command line](https://ubuntu.com/tutorials/command-line-for-beginners).

---

<a id="bab-03"></a>

## Bab 03: Memahami perjalanan data di jaringan

Tahap 2 dari 6: Memahami cara sistem bekerja

### Tujuan dan prasyarat

Kamu akan membaca alamat, menghitung pembagiannya, dan mengikuti perjalanan nota dari kasir ke aplikasi Laundry Aman.
Kita membedakan pencarian alamat dari pengiriman ke layanan.

Selesaikan [Bab 02](materi/02-komputer.md), termasuk pengenalan bit, byte, dan proses.
Gunakan terminal serta Python yang sudah disiapkan pada [Bab 01](materi/01-lab.md).
Kamu bisa mengerjakan hitungan dan gambar tanpa internet, termasuk dari HP dengan kertas.
Untuk menjalankan perintah, gunakan komputer sendiri. Perintah hanya membaca konfigurasi atau memeriksa komunikasi di dalam komputer itu.

### Konsep

Kasir menyimpan nota lalu mengirimnya ke aplikasi Laundry Aman.
Laptop perlu menemukan alamat tujuan dan jalan untuk mencapainya.
Di tempat tujuan, layanan yang tepat harus menerima nota itu.
Kita akan mengikuti perjalanan ini, lalu membagi nomor alamat untuk perangkat toko.
Terakhir, kamu akan membaca pengaturan laptop dan menggambar jalurnya.

Istilah dalam cerita dipakai dalam praktik; nama pelengkap ada di “Cukup kenali dulu”.

#### Dari laptop kasir ke aplikasi

Kasir menyimpan nota. Hubungan antarperangkat untuk mengirim data ke aplikasi disebut **jaringan**.

Aplikasi menerima permintaan dan mengirim jawaban.
Program atau perangkat yang melayani permintaan disebut **server**.

**Switch** menghubungkan perangkat jaringan lokal, misalnya laptop kasir dan printer.

Jika server aplikasi berada di jaringan lain, nota perlu keluar dari jaringan toko.

**Router** meneruskan bagian data antarjaringan, seperti pintu penghubung ke luar toko.
Satu kotak perangkat rumahan sering menggabungkan router, switch, dan pemancar Wi-Fi.

##### Cukup kenali dulu

- **LAN**: jaringan lokal, seperti jaringan toko.
- **WAN**: jaringan yang menghubungkan area lebih luas.
- **Paket**: bagian data yang dikirim melalui jaringan.
- **Titik akses Wi-Fi**: tempat perangkat terhubung melalui Wi-Fi.

#### Menulis alamat tujuan atau menghubungi diri sendiri

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

##### Cukup kenali dulu

- **IPv6**: bentuk alamat sepanjang 128 bit; alamat loopback-nya `::1`.
- **Localhost**: nama `localhost` yang biasanya menunjuk loopback.
- **Bind**: pengaturan alamat tempat server menerima koneksi; `0.0.0.0` umumnya berarti semua antarmuka IPv4.
- **Ethernet**: teknologi komunikasi jaringan yang lazim memakai kabel.

Jangan mengganti alamat bind lab menjadi `0.0.0.0` hanya untuk mengatasi masalah koneksi.

#### Membagi nomor alamat untuk toko

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

##### Cukup kenali dulu

- **Alamat privat IPv4**: rentang `10.0.0.0/8`, `172.16.0.0/12`, dan `192.168.0.0/16`; dapat dipakai ulang pada jaringan berbeda.
- **Alamat publik**: alamat untuk komunikasi di internet.
- **Firewall**: pembatas komunikasi berdasarkan aturan.
- **NAT**: pengubah informasi alamat paket saat melewati perangkat jaringan; sering memungkinkan banyak perangkat berbagi satu alamat publik, tetapi tidak menggantikan kebijakan firewall.

#### Mencari nama aplikasi lalu memilih jalan keluar

Kasir membuka aplikasi dengan **nama domain**, nama tujuan seperti nama penerima pada buku kontak.

**DNS** seperti pencarian buku kontak: nama domain diterjemahkan menjadi jawaban, misalnya alamat IP.

Laptop bertanya kepada **resolver DNS**, layanan penerima pertanyaan nama, seperti petugas pencarian buku kontak.

Pada contoh toko, server aplikasi berada di jaringan lain.

Jika tujuan di luar jaringan yang terhubung langsung, laptop memilih jalur pengiriman.

**Default gateway** adalah router jalur keluar bawaan, seperti pintu keluar toko. Jalur yang lebih khusus dapat dipakai lebih dahulu.

Untuk komunikasi lokal, perangkat memakai **MAC address**, alamat antarmuka seperti label sambungan Ethernet atau Wi-Fi.
Alamat ini dapat diacak atau dipalsukan; identitas manusia tetap memerlukan bukti lain.

##### Cukup kenali dulu

- **DHCP**: pembagi konfigurasi alamat, termasuk gateway dan resolver DNS.
- **ARP**: pembantu IPv4 untuk menemukan alamat perangkat link lokal berdasarkan IP tetangganya.

<details>
<summary>Pendalaman opsional: pencarian tetangga IPv6</summary>

Saat perangkat toko mengirim melalui IPv6, ia perlu menemukan tetangga pada sambungannya.
**Neighbor Discovery** membantu menemukan tetangga pada sambungan lokal; IPv6 menggunakannya sebagai pengganti ARP.

</details>

#### Menyerahkan nota ke layanan yang tepat

Nota sudah menuju server aplikasi. Sekarang laptop perlu memilih layanan penerimanya.
**Port** mengidentifikasi titik komunikasi layanan, seperti nomor loket pada suatu alamat gedung.
Nomornya memberi petunjuk jenis layanan; kamu tetap perlu memeriksa layanan yang berjalan.

Saat kasir menjalankan `ping`, perangkat memakai **ICMP**, aturan pesan kendali jaringan, untuk memeriksa respons.
Seperti ketukan pintu, `ping` meminta balasan.
Untuk memastikan aplikasi menerima nota, uji layanannya juga.

##### Cukup kenali dulu

- **Protokol**: aturan pertukaran data.
- **TCP**: pengirim aliran byte berurutan dengan pengiriman ulang saat diperlukan.
- **Datagram**: satuan pesan yang dikirim melalui jaringan.
- **UDP**: pengirim datagram tanpa jaminan bawaan seperti TCP; aplikasi dapat menambahkan mekanisme pengurutan atau pengiriman ulang.

Kasir juga perlu melindungi isi nota selama perjalanan.
**Enkripsi** menyembunyikan isi dengan kunci, seperti mengirim dalam kotak terkunci.
Aplikasi tetap perlu memeriksa hak penerima untuk membaca nota.

##### Cukup kenali dulu

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

#### Ringkasan

- IP menunjuk alamat komunikasi; port menunjuk titik komunikasi layanan.
- Loopback mengarah ke komputer sendiri, sehingga lab lokal dapat berjalan tanpa internet.
- DNS membantu mencari alamat dari nama. Gateway membantu mengirim ke luar jaringan yang terhubung langsung.
- Subnet membagi ruang alamat; ukuran blok mengikuti panjang prefix.
- Uji sambungan dan pemeriksaan hak membaca nota menjawab pertanyaan yang berbeda.

#### Cek pemahaman

1. Ke mana data dikirim saat kamu memakai `127.0.0.1`?
2. Apa perbedaan pekerjaan DNS dan default gateway?
3. Berapa bit yang tersisa untuk alamat dalam blok IPv4 `/24`?
4. Mengapa aplikasi tetap harus memeriksa pemilik nota saat memakai enkripsi?

### Praktik

#### 1. Hitung subnet di kertas

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

#### 2. Baca konfigurasi tanpa mengubahnya

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

#### 3. Gambarkan jalur satu request

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

### Hasil yang diharapkan

Hitungan `/25` cocok dengan hasil Python: mask `255.255.255.128`, broadcast `192.168.10.127`, dan 128 alamat.
Kamu dapat menunjuk alamat lokal serta gateway bila ada pada konfigurasi perangkatmu.
Kamu juga dapat menjelaskan mengapa loopback bekerja tanpa perjalanan ke internet.

Simpan diagram jalur permintaan. Catat bahwa waktu balasan ping lokal boleh berbeda antarperangkat.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `ip` tidak tersedia di macOS | Gunakan kelompok perintah macOS; `ip` tidak tersedia secara bawaan di sana |
| Gateway tidak terlihat | Perangkat offline mungkin tidak mempunyai default gateway |
| Alamat komputer berbeda dari contoh | Pakai alamat contoh untuk hitungan; jangan menyalinnya sebagai konfigurasi perangkatmu |
| Dua gateway terlihat saat VPN aktif | Catat keadaan itu tanpa menghapus rute |

### Latihan

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

### Bukti kelulusan

- [ ] Saya menyimpan diagram jaringan dan dua perhitungan subnet.
- [ ] Saya dapat membedakan IP, nama domain, port, gateway, dan MAC address.
- [ ] Saya dapat menjelaskan mengapa enkripsi tetap membutuhkan pemeriksaan izin akses.
- [ ] Saya dapat membedakan uji ping dari uji layanan.

#### Lanjut belajar

Jika alamat atau hitungan belum jelas, ulangi contoh `/25` lalu coba lagi dua soal `/26`.
Kembali ke [Bab 02](materi/02-komputer.md) untuk mengulang bit dan perangkat.
Setelah bukti siap, lanjut ke [Bab 04: Linux](materi/04-linux.md).

### Referensi

- [RFC 1918: rentang IPv4 privat](https://www.rfc-editor.org/rfc/rfc1918).
- [Python ipaddress](https://docs.python.org/3/library/ipaddress.html).
- [MDN: gambaran HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

---

<a id="bab-04"></a>

## Bab 04: Membaca dan mengelola Linux

Tahap 2 dari 6: Memahami cara sistem bekerja

### Tujuan dan prasyarat

Kamu akan menavigasi folder, mencari teks, memahami izin file, dan mengamati proses Linux.
Semua langkah ini membantu menjaga server aplikasi Laundry Aman.

Selesaikan [Bab 01](materi/01-lab.md) untuk menyiapkan Linux dan [Bab 02](materi/02-komputer.md) untuk mengenal proses dan file.
Bekal alamat dan port dari [Bab 03](materi/03-jaringan.md) akan membantu pada pendalaman SSH opsional nanti.

Gunakan terminal Linux atau WSL.
Perintah berikut ditujukan untuk Bash pada Linux; jangan menempelkannya ke PowerShell.
Jika belum punya Linux, baca konsep lalu gunakan lingkungan latihan resmi seperti OverTheWire Bandit untuk berlatih sesuai aturannya.

### Konsep

Server aplikasi Laundry Aman memakai sistem operasi Linux.
Kita perlu memeriksa file pesanan, menjaga data pelanggan, dan memantau layanan.
Sistem file Linux menyusun data dalam satu pohon direktori teratur.
Setiap file dan folder memiliki aturan izin untuk mencegah kebocoran data.
Kita akan menjelajah folder, membedakan hak akses, dan membaca proses yang aktif.

#### Menjelajah pohon folder di server

Semua folder di Linux bermula dari satu pangkal utama.
Tanda `/` adalah akar sistem file, tempat seluruh folder dan perangkat terhubung.

Folder `/home` biasanya berisi ruang kerja para pengguna, seperti kasir atau administrator.
Folder `/etc` menyimpan banyak konfigurasi sistem dan aplikasi.
Folder `/var/log` menyimpan banyak log rekaman aktivitas server.
Susunannya dapat berbeda antarlingkungan, tetapi fungsi dasarnya serupa.

Linux membedakan huruf besar dan kecil pada sistem file yang lazim dipakai.
Nama `Nota.txt` dan `nota.txt` dapat menjadi dua file yang berbeda dalam satu folder.

Nama file atau folder yang diawali tanda titik biasanya tersembunyi dari daftar biasa.
Contohnya adalah folder konfigurasi `.config`.
Perintah `ls -a` menampilkannya di terminal.
File tersembunyi tetap tunduk pada izin; tanda titik bukan perlindungan kerahasiaan.

##### Cukup kenali dulu

- **Root directory**: direktori pangkal `/` pada sistem file Linux.
- **Home directory**: folder pribadi tempat kerja pengguna biasa.
- **File tersembunyi**: file berawalan titik yang tidak muncul pada perintah biasa.

#### Mengatur hak baca, tulis, dan jalan

Data pelanggan Laundry Aman tidak boleh dibaca oleh sembarang orang di server.
Linux membagi hak akses ke dalam tiga pihak.

Pihak pertama adalah **owner**, yaitu pengguna pemilik file atau direktori.

Pihak kedua adalah **group**, yaitu kelompok pengguna yang berbagi hak kerja sama.

Pihak ketiga adalah **others**, yaitu semua pengguna lain di sistem.

Izin yang diperiksa bergantung apakah pengguna cocok sebagai owner, anggota group, atau others.
Untuk file biasa, tiga jenis izinnya adalah:

- Huruf `r` berarti membaca (*read*), seperti melihat isi catatan pesanan.
- Huruf `w` berarti menulis (*write*), seperti mengubah atau menambah isi data.
- Huruf `x` berarti mengeksekusi (*execute*), seperti menjalankan file program.

Untuk direktori, arti izin memiliki perbedaan penting dari file biasa.
Izin `r` pada direktori membantu melihat daftar nama file di dalamnya.
Izin `w` membantu mengubah entri, seperti membuat, mengganti nama, atau menghapus file.
Izin `x` membantu melewati direktori untuk mengakses isinya.

Menghapus file terutama terkait izin direktori induk, sehingga pemahaman izin file saja belum cukup.
Pada folder latihan biasa, izin `w` dan `x` pada folder induk dapat mengizinkan penghapusan file hanya-baca.
Pembatas tambahan pada direktori atau sistem file dapat tetap mencegah penghapusan.

Sistem juga menuliskan izin dalam bentuk angka **oktal**, yaitu angka berbasis delapan.
Angka `4`, `2`, dan `1` mewakili read, write, dan execute.
Nilai izin dihitung dari penjumlahan angka tersebut untuk tiap pihak.

Perintah `chmod` mengubah izin file atau folder.
Contoh `chmod 600 catatan.txt` memberi owner `4+2`, group `0`, others `0`.
Hasilnya pada tampilan daftar adalah `rw-------`.
Perintah `chmod 644` memberi owner baca/tulis dan pihak lain baca.

Pengaturan yang tepat bergantung fungsi data.
Memberi `777` ke seluruh folder untuk menghilangkan error akan membuka akses yang tidak diperlukan.
Izin itu memberi hak baca, tulis, dan lewat kepada owner, group, serta others; pembatas lain tetap dapat berlaku.

##### Cukup kenali dulu

- **Izin oktal**: penulisan izin Linux memakai angka 0 sampai 7.
- **Izin direktori**: aturan akses folder yang membedakan pembacaan daftar dari akses file.
- **Hak minimal**: prinsip memberikan izin secukupnya sesuai kebutuhan tugas.

#### Hak istimewa dan menjalankan perintah

Pengguna **root** mempunyai kewenangan luas di seluruh sistem.
Akun ini dapat melewati banyak pemeriksaan izin biasa, tetapi sistem file hanya-baca dan pembatas keamanan lain tetap dapat menghalanginya.

Perintah `sudo` dapat menjalankan perintah dengan identitas lain sesuai kebijakan keamanan.
Biasanya `sudo` dipakai untuk menjalankan tugas pemeliharaan sistem dengan wewenang root sementara.

Jangan menambahkan `sudo` pada perintah yang belum kamu pahami.
Kesalahan ketik dengan `sudo` dapat merusak konfigurasi penting server.
Untuk folder latihan milik sendiri, operasi dasar di bab ini tidak memerlukannya.

<details>
<summary>Pendalaman opsional: menyambung ke server latihan lewat SSH</summary>

Saat merawat server jarak jauh atau mengerjakan tantangan OverTheWire Bandit, kamu menggunakan SSH.
SSH menghubungkan terminal komputermu ke shell komputer tujuan secara terenkripsi.

Ketik perintah dengan format berikut di terminal Linux atau PowerShell:

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

Sidik jari host adalah ringkasan kunci server untuk membantu memeriksa identitas tujuan.
Bandingkan dengan informasi dari pengelola melalui sumber tepercaya sebelum mengetik `yes`.

Jika belum dapat memverifikasinya, tunda jalur SSH ini. Jangan abaikan peringatan perubahan kunci pada sambungan berikutnya.

Setelah tujuan terverifikasi, masukkan password latihan dari petunjuk resmi, misalnya `bandit0` untuk level awal.
Karakter password sengaja tidak muncul di layar demi keamanan.
Setelah selesai, ketik `exit` untuk kembali ke terminal lokalmu.

</details>

#### Ringkasan

- Sistem file Linux berpangkal pada `/` dan membedakan huruf besar serta kecil.
- Izin akses dibagi untuk owner, group, dan others memakai huruf `rwx` atau angka `4`, `2`, `1`.
- Menghapus file ditentukan oleh izin direktori induk, bukan hanya izin file itu sendiri.
- Hindari pemakaian `chmod 777` dan jangan gunakan `sudo` tanpa alasan jelas.

#### Cek pemahaman

1. Apa akibat buruk jika kamu memberikan izin `777` pada folder data pelanggan?
2. Mengapa izin file hanya-baca belum cukup mencegah penghapusan dari folder induk yang mengizinkannya?
3. Berapa angka oktal untuk izin file yang boleh dibaca dan ditulis oleh pemiliknya saja?

### Praktik

Pilih folder kerja di terminal Linux komputermu atau WSL.
Jalankan langkah demi langkah sambil memeriksa keluaran terminal.

#### 1. Buat file kerja

Jalankan di terminal Linux:

```bash
mkdir -p ~/laundry-lab
cd ~/laundry-lab
pwd
printf '%s\n' 'L001 selesai' 'L002 diproses' 'L003 selesai' > pesanan.txt
ls -l pesanan.txt
cat pesanan.txt
```

Tanda `~` menunjuk home pengguna saat ini.
Perintah `mkdir -p` membuat direktori jika belum ada, `cd` memindahkan direktori kerja, dan `pwd` menunjukkan lokasinya.
Perintah `printf` menulis tiga baris melalui `>` ke file.
Tanda `>` mengalihkan keluaran ke file dan menimpa isi lama.
Tanda `>>` menambahkan isi ke bagian akhir file.
Periksa nama sebelum menulis.

Jalankan satu baris dahulu, baca hasilnya, lalu lanjutkan.
Perintah yang berhasil tidak selalu mencetak pesan: `cd` biasanya mengubah lokasi tanpa menulis “berhasil”.
Gunakan `pwd` untuk memeriksanya.
Untuk membuat salinan sebelum percobaan, jalankan `cp pesanan.txt pesanan-salinan.txt`, lalu `cat pesanan-salinan.txt`.
Nama kedua adalah tujuan; gunakan nama baru bila salinan dengan nama itu sudah ada.

#### 2. Cari dan hitung

Ketik perintah berikut untuk menyaring catatan pesanan:

```bash
grep -n 'selesai' pesanan.txt
wc -l pesanan.txt
head -n 2 pesanan.txt
tail -n 1 pesanan.txt
```

Perintah `grep -n` mencari baris yang mengandung teks lalu menampilkan nomor baris.
Perintah `wc -l` menghitung karakter akhir baris, sehingga cocok untuk file latihan yang tiap barisnya diakhiri tanda baris baru (*newline*).
Perintah `head` membaca awal dan `tail` membaca akhir.
Pada file ini, status selesai ada di baris 1 dan 3, jumlah baris 3, serta baris terakhir `L003 selesai`.

Untuk pola yang dapat mengandung karakter bermakna khusus, pertimbangkan `grep -F` agar mencarinya sebagai teks literal.
Perbedaan antara teks biasa dan pola pencarian akan penting saat membaca log.

#### 3. Periksa izin lalu ubah file sendiri

Ketik perintah berikut untuk mengunci izin file:

```bash
chmod 600 pesanan.txt
ls -l pesanan.txt
id
```

Awal kolom izin file akan menyerupai `-rw-------`.
Tanda pertama `-` menandakan file biasa.
Perintah `id` menunjukkan identitas serta grup kamu.
Owner masih dapat membaca file.
Percobaan ini tidak membuktikan pembatasan terhadap pengguna lain karena kamu belum menjalankannya sebagai identitas lain; catat batas bukti tersebut.

#### 4. Amati proses dan dokumentasi

Jalankan perintah berikut untuk melihat proses pengguna dan membaca manual:

```bash
ps -u "$USER" -o pid,comm
man chmod
```

Perintah pertama meminta proses milik pengguna saat ini.
Bagian `$USER` adalah variabel shell; tanda kutip menjaga nilainya tetap satu argumen.
Perintah `man chmod` membuka manual, dan tombol `q` keluar.
Pada instalasi minimal, paket manual mungkin belum tersedia.
Kamu dapat membaca dokumentasi resmi dari browser.

Layanan pada banyak distribusi dikelola oleh systemd.
Jika lingkungan kamu memakai systemd, `systemctl --type=service --state=running` menampilkan layanan berjalan.
WSL, container, atau lingkungan pendidikan dapat memakai pengaturan berbeda.
Error `not booted with systemd` menjelaskan lingkungan, bukan otomatis masalah keamanan.

### Hasil yang diharapkan

Kamu memiliki file tiga baris dan dapat menjelaskan output pencarian serta izin `600`.
Kamu mengetahui folder kerja dan tidak mengubah file konfigurasi sistem.
Simpan salinan perintah serta hasil yang relevan di jurnal.

### Jika macet

Pesan error terminal memberi petunjuk langsung perbaikan.

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `No such file or directory` | Periksa ejaan nama file dan direktori kerja aktif |
| `Permission denied` | Periksa pemilik file atau izin folder induk dengan `ls -ld .` dan `ls -l pesanan.txt` |
| `man` tidak ditemukan | Buka dokumentasi manual Linux melalui browser internet |
| `not booted with systemd` | Lingkungan ini belum menjalankan systemd; lewati pemeriksaan layanan opsional dan lanjutkan latihan file |

Gunakan `pwd`, `ls -ld .`, dan `ls -l pesanan.txt` untuk memeriksa sebelum mengubah izin.
Jangan menjalankan perintah rekursif pada `/` atau home hanya untuk memperbaiki satu file.

### Latihan

Tambahkan `L004 diproses` menggunakan `>>`, lalu hitung kembali.
Prediksi hasil sebelum menjalankan.
Jelaskan arti izin `640` dan alasan folder yang dapat dibaca belum tentu dapat dilewati.
Sebagai pendalaman, selesaikan beberapa level awal Bandit dan simpan penjelasan konsep tanpa memublikasikan password tantangan.

<details>
<summary>Pembahasan setelah mencoba: latihan Linux</summary>

Gunakan `printf '%s\n' 'L004 diproses' >> pesanan.txt`.
Jumlah baris menjadi empat jika langkah tambahan hanya dijalankan sekali; menjalankannya lagi menambah baris kelima.
Izin `640` memberi owner baca/tulis, group baca, dan others tanpa izin.
Pada direktori, izin `x` diperlukan untuk melewati direktori sehingga mengetahui nama di dalamnya belum berarti boleh mengakses isi file.
Jika hasil jumlah baris berbeda, baca isi terlebih dahulu sebelum menganggap alatnya salah.

</details>

### Bukti kelulusan

- [ ] Saya dapat membuat, membaca, mencari, dan menyalin file tanpa GUI.
- [ ] Saya dapat menerangkan arti izin `600`, `640`, dan `644`.
- [ ] Saya memahami alasan folder yang bisa dibaca belum tentu bisa dilewati.
- [ ] Saya mengetahui kapan perlu membaca manual dan cara keluar dari `man`.

Kecepatan mengetik tidak menjadi syarat.

#### Lanjut belajar

Jika navigasi folder atau izin masih membingungkan, ulangi latihan dengan file baru di folder latihanmu.
Buka kembali [Bab 02](materi/02-komputer.md) untuk menyegarkan pemahaman proses dan penyimpanan.
Setelah siap, lanjutkan ke [Bab 05: Windows](materi/05-windows.md) untuk mempelajari administrasi sistem di Windows.

### Referensi

- [GNU Coreutils: izin file](https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html).
- [Ubuntu: command line untuk pemula](https://ubuntu.com/tutorials/command-line-for-beginners).
- [OverTheWire Bandit](https://overthewire.org/wargames/bandit/).

---

<a id="bab-05"></a>

## Bab 05: Memahami Windows dan PowerShell

Tahap 2 dari 6: Memahami cara sistem bekerja

### Tujuan dan prasyarat

Kamu akan membaca objek PowerShell, mengamati proses dan layanan, serta mengenali event log.
Langkah ini membantumu memeriksa kesehatan dan keamanan komputer kasir Laundry Aman.

Selesaikan [Bab 01](materi/01-lab.md) untuk menyiapkan terminal dan [Bab 02](materi/02-komputer.md) untuk memahami proses serta memori.
Bandingkan juga pengelolaan sistem ini dengan Linux pada [Bab 04](materi/04-linux.md).

Gunakan Windows milikmu untuk menjalankan perintah PowerShell.
Pembaca Linux/macOS dapat mengerjakan latihan log sintetis dengan Python pada [Bab 15](materi/15-deteksi.md), lalu kembali ke sini ketika memiliki lingkungan Windows berizin.

### Konsep

Komputer kasir Laundry Aman memakai Windows.
Kita akan memeriksa program, layanan latar belakang, dan catatan kejadian.
PowerShell menyajikan data sistem dalam bentuk terstruktur.
Windows mengenali akun dengan pengenal khusus dan membatasi aksesnya.
Kita akan menyaring proses serta membaca log keamanan.

#### Memeriksa proses kasir memakai objek PowerShell

Untuk memeriksa proses kasir, PowerShell menyediakan **cmdlet**, yaitu perintah dengan fungsi tertentu.
Penamaan cmdlet biasanya memakai pola kata kerja dan kata benda, seperti `Get-Process`.

Hasil keluaran cmdlet sering berupa **objek** dengan properti bernama, bukan sekadar baris teks mentah.
Nama properti seperti `ProcessName` dan `Id` menunjukkan atribut milik proses tersebut.
Bayangkan struk pesanan laundry yang memiliki kolom nama pelanggan dan berat cucian.
Dengan struktur objek ini, kamu bisa langsung menyaring data berdasarkan nilai tanpa menebak letak kolom teks.

Perintah `Select-Object` memilih properti dan membatasi jumlah objek.
Perintah `Get-Help` meminta bantuan panduan lokal.

##### Cukup kenali dulu

- **Properti**: atribut bernama di dalam sebuah objek.
- **Pipeline**: penyaluran data antarkomando memakai tanda pipa `|`.
- **Perintah interaktif**: perintah yang kamu ketik langsung di terminal, satu demi satu.

#### Meninjau komponen sistem: pengaturan, layanan, dan tugas

Di komputer kasir, banyak komponen bekerja otomatis tanpa membuka jendela aplikasi.

Komponen **Registry** menyimpan banyak konfigurasi Windows dan aplikasi yang terpasang.

Komponen **Service** menjalankan fungsi latar belakang; layanan dapat berjalan atau berhenti sesuai kebutuhan dan pengaturannya.

Komponen **Scheduled task** menjalankan tugas secara otomatis berdasarkan jadwal waktu atau pemicu tertentu.

Ketiganya memiliki kegunaan sah untuk operasional komputer sehari-hari.
Namun, ketiganya juga dapat menjadi tempat munculnya perubahan yang perlu diperiksa saat menyelidiki gangguan.
Sebuah entri yang asing belum cukup untuk menyebutnya berbahaya.
Periksa fungsi dan asal programnya.

##### Cukup kenali dulu

- **Registry key**: penampung nilai konfigurasi di registry.
- **Service status**: kondisi aktif layanan sistem.
- **Trigger**: pemicu yang memulai scheduled task.

#### Mengenali identitas akun dan aturan hak akses

Saat kasir menyalakan komputer toko, Windows memastikan identitas pengguna yang berhak masuk.
Windows memakai identitas internal seperti akun lokal dan akun organisasi.

Pengenal **SID**, singkatan dari *security identifier*, adalah identitas internal unik untuk sebuah akun atau grup.
Tiap pengguna memiliki kode SID tersendiri di dalam sistem operasi.

Untuk melindungi file nota pelanggan, Windows memakai **ACL**, singkatan dari *access control list*.
ACL berisi daftar aturan akses pada objek seperti file dan folder.
Izin akses pada sebuah file dapat diwariskan dari folder induknya.

Sistem **UAC** (*User Account Control*) memberi pembatas antara aktivitas sehari-hari dan operasi yang membutuhkan hak lebih tinggi.
Permintaan hak lebih tinggi dapat memunculkan konfirmasi atau permintaan identitas administrator, sesuai akun dan kebijakan perangkat.
Tetap periksa asal program sebelum menyetujui permintaannya.

##### Cukup kenali dulu

- **Hak akses file**: izin operasi file pada sistem file Windows yang lazim (NTFS).
- **Elevasi hak**: peningkatan wewenang pengguna sementara, seperti saat UAC meminta konfirmasi.
- **Akun lokal**: akun pengguna di komputer lokal.

#### Membaca catatan aktivitas dengan event log

Komputer kasir dapat mencatat saat menyala, pengguna masuk, atau terjadi gangguan, sesuai konfigurasi pencatatannya.
Komponen **Event log** mencatat kejadian dari sumber tertentu yang disebut provider.

Satu event memiliki catatan waktu kejadian, nama provider, nomor ID, tingkat keparahan (*level*), dan rincian pesan.
Nomor event perlu dibaca bersama providernya.
Nomor ID yang sama dapat memiliki arti berbeda pada provider yang berbeda.

Tidak semua kejadian otomatis tercatat di komputer.
Pengaturan pencatatan, kapasitas penyimpanan, dan retensi atau lama penyimpanan log memengaruhi bukti yang tersedia.
Event login gagal seperti 4625 perlu dibaca bersama pengaturan audit dan jenis logon atau cara masuk.
Ketiadaan catatan tidak langsung membuktikan bahwa tidak ada percobaan akses.

<details>
<summary>Pendalaman opsional: jenis log Windows dan izin akses</summary>

Windows membagi log ke dalam beberapa kategori utama:

- **System**: mencatat kejadian sistem operasi dan perangkat keras.
- **Application**: mencatat kejadian program aplikasi.
- **Security**: mencatat audit keamanan seperti login pengguna.

Log Security dapat memerlukan hak administrator dan kebijakan audit aktif.
Gunakan data sintetis bila perangkat kerjamu membatasi akses log.

</details>

#### Ringkasan

- PowerShell menghasilkan objek berproperti bernama, mempermudah penyaringan data dibanding teks biasa.
- Registry, service, dan scheduled task adalah komponen penting yang perlu ditinjau keteraturannya.
- SID menandai identitas akun, ACL mengatur hak akses objek, dan UAC membatasi kenaikan wewenang.
- Event log mencatat aktivitas sistem; periksa nomor ID selalu bersama nama providernya.

#### Cek pemahaman

1. Mengapa menyaring data objek PowerShell lebih mudah daripada memotong baris teks mentah?
2. Mengapa entri service yang baru kamu lihat belum tentu berbahaya?
3. Mengapa event ID harus dipadukan dengan nama provider saat membaca log?

### Praktik

Pilih jendela PowerShell biasa di komputermu tanpa perlu hak administrator.
Jalankan langkah-langkah berikut sambil memeriksa keluarannya.

#### 1. Belajar memeriksa properti

Jalankan perintah berikut di PowerShell biasa:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
Get-Service | Select-Object -First 5 Name, Status
Get-Help Get-Process
```

Perintah `Select-Object` memilih properti dan membatasi jumlah objek.
Perintah `Get-Help` meminta bantuan lokal; isi bantuan mungkin ringkas jika berkas bantuan lengkap belum tersedia.
Kamu dapat membaca halaman Microsoft Learn tanpa mengubah pengaturan komputer.

#### 2. Saring data sintetis

Ketik blok perintah berikut di PowerShell.
Semua nama pengguna dan kejadian di sini adalah data rekaan:

```powershell
$kejadianLab = @(
    [pscustomobject]@{User='kasir-demo'; Result='gagal'},
    [pscustomobject]@{User='kasir-demo'; Result='berhasil'},
    [pscustomobject]@{User='pemilik-demo'; Result='gagal'}
)
$kejadianLab | Where-Object Result -eq 'gagal'
$kejadianLab | Group-Object Result | Select-Object Name, Count
```

Tanda `@(...)` membuat kumpulan objek baru.
Bentuk `[pscustomobject]` memberi properti bernama pada tiap baris data.
Perintah `Where-Object` memilih data yang memenuhi syarat tertentu; parameter `-eq` berarti sama dengan (*equal*).
Perintah `Group-Object` mengelompokkan nilai yang sama.

Kamu akan menemukan dua kejadian gagal dan satu berhasil.
Variabel `$kejadianLab` hanya tersedia dalam sesi ini; terminal baru tidak otomatis memulihkannya.

#### 3. Baca log sistem dengan batas kecil

Ketik perintah berikut untuk melihat lima catatan sistem terbaru:

```powershell
Get-WinEvent -LogName System -MaxEvents 5 |
    Select-Object TimeCreated, Id, ProviderName, LevelDisplayName
```

Perintah `Get-WinEvent` membaca lima event terbaru pada log System tanpa mengubahnya.
Angka ID dan providernya berbeda antarperangkat.
Pilih satu event, lalu baca penjelasan providernya di dokumentasi Microsoft.
Jangan memublikasikan pesan lengkap sebelum memeriksa nama mesin, akun, atau path pribadi.

Log Security dapat memerlukan hak lebih tinggi dan kebijakan audit tertentu.
Kamu tidak perlu mengubah audit atau meminta hak administrator untuk menyelesaikan bab ini.
Gunakan event sintetis bila perangkat kerja membatasi pembacaan log.
Gunakan batas penafsiran log yang dijelaskan pada Konsep; ketiadaan catatan belum membuktikan ketiadaan percobaan akses.

#### 4. Baca izin file latihan

Dari folder utama tutorial, jalankan perintah berikut:

File `hasil-belajar/cek-lab.txt` berasal dari Bab 01. Jika belum ada, ulangi langkah pembuatannya di sana.

```powershell
Get-Acl hasil-belajar/cek-lab.txt | Format-List
```

Perintah `Get-Acl` menampilkan daftar izin pada file `hasil-belajar/cek-lab.txt`.
Cari nama owner dan entri akses di layar terminal.
Hasil ini mengamati aturan yang ada; kamu belum mengubahnya sama sekali.

Perintah `Format-List` membantu tampilan dibaca manusia, sehingga letakkan perintah pemformatan di akhir alur.
Untuk analisis lanjutan, pertahankan objek mentah sampai operasi penyaringan selesai.

### Hasil yang diharapkan

Kamu bisa memilih properti objek, menyaring dua kejadian gagal, dan membaca metadata event, yaitu keterangan tentang kejadian itu, atau memakai pengganti sintetis.
Kamu dapat menjelaskan bahwa izin file pada ACL berbeda dari status program yang sedang berjalan di memori.
Simpan ringkasan perintah dan catatan hasil pengamatanmu di jurnal belajar.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `Get-WinEvent` gagal di Linux | Perintah `Get-WinEvent` bergantung pada Windows; gunakan data sintetis pada PowerShell Linux |
| Pesan `Access is denied` | Periksa hak akun dan kebijakan perangkat; jangan menonaktifkan perlindungan sistem |
| PowerShell menolak skrip | Ketik perintah interaktif langsung satu per satu di terminal; jangan ubah execution policy global |

### Latihan

Tambahkan dua objek baru pada data sintetis:
Satu kegagalan milik `kasir-demo` dan satu keberhasilan milik `pemilik-demo`.

Prediksi jumlah per hasil, lalu periksa dengan perintah kelompok.
Jelaskan mengapa tiga login gagal belum cukup untuk menyimpulkan akun sudah diambil alih.
Sebutkan bukti tambahan yang ingin kamu lihat.

<details>
<summary>Pembahasan setelah mencoba: menambah data sintetis</summary>

Edit blok pembentukan `$kejadianLab`, tambahkan dua objek sebelum penutup `)`, dan beri koma pemisah antarobjek.
Jalankan kembali blok tersebut agar variabel memuat data baru, lalu ulangi dua perintah penyaringan.
Hasil akhir seharusnya tiga gagal dan dua berhasil.

Mengedit teks di editor tanpa menjalankan ulang pembentukan variabel tidak mengubah isi variabel pada sesi PowerShell yang sudah berjalan.
Jumlah gagal tidak menunjukkan apakah password akhirnya ditebak; kamu perlu konteks waktu, asal, hasil login berikutnya, dan aktivitas akun.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan query data sintetis dan hasil perhitungannya.
- [ ] Saya memahami objek, properti, dan penyaringan dengan `Where-Object`.
- [ ] Saya dapat menjelaskan batas informasi dari event log dan alasan event ID perlu dibaca bersama providernya.
- [ ] Untuk event asli, saya mencatat ID, provider, dan penjelasan umum tanpa mencantumkan data pribadi.

#### Lanjut belajar

Jika konsep objek masih baru bagimu, ulangi langkah pemilihan properti dengan cmdlet lain seperti `Get-Service`.
Buka kembali [Bab 02](materi/02-komputer.md) jika ingin membandingkan proses dengan konsumsi memori.
Setelah selesai, lanjutkan ke [Bab 06: Pemrograman](materi/06-pemrograman.md) untuk belajar menulis kode Python dan mengolah data otomatis.

### Referensi

- [Microsoft: Get-WinEvent](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent).
- [Microsoft: Where-Object](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/where-object).
- [Microsoft: Get-Acl](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-acl).

---

<a id="bab-06"></a>

## Bab 06: Menulis skrip kecil dan mencatat perubahan

Tahap 2 dari 6: Memahami cara sistem bekerja

### Tujuan dan prasyarat

Kamu akan menulis Python untuk menghitung kejadian sintetis, mengenali Bash, dan menyimpan perubahan dengan Git.
Kemampuan ini membantumu mengolah data operasional Laundry Aman dengan cepat dan rapi.

Selesaikan latihan folder dan terminal pada [Bab 01](materi/01-lab.md) serta [Bab 02](materi/02-komputer.md).
Kamu juga bisa membandingkan perintah terminal dengan [Bab 04](materi/04-linux.md) dan [Bab 05](materi/05-windows.md).

Kamu belum perlu menghafal sintaks bahasa pemrograman.
Baca setiap baris kode dengan tenang, lalu ubah satu hal untuk melihat pengaruhnya.

### Konsep

Di Laundry Aman, kasir memeriksa catatan nota dan rekaman login setiap sore.
Jika jumlah catatan hanya sepuluh baris, kita bisa membacanya satu per satu.
Namun, ketika ada ribuan catatan, memeriksa secara manual memakan waktu dan melelahkan.
Skrip program membantu kita menghitung dan menyaring kejadian penting secara otomatis.
Kita akan mempelajari cara menulis program kecil, menguji hasilnya, dan menyimpan riwayat kerja.

#### Mengolah data toko dengan aturan yang konsisten

Kasir Laundry Aman ingin menghitung status login dengan aturan yang sama setiap sore.
Kita menggunakan wadah dan aturan dasar untuk menyimpan serta mengolah data.

Sebuah **variabel** memberi nama pada suatu nilai, seperti menempel label pada toples detergen.
Tanda `=` memberi nilai pada variabel.
Tanda `==` membandingkan dua nilai.

Sebuah **string** menyimpan teks, seperti nama pelanggan Laundry Aman.

Sebuah **integer** menyimpan bilangan bulat, seperti jumlah pesanan baju.

Sebuah **list** menyimpan urutan nilai, seperti daftar status pesanan pakaian.

Kasir dapat menaruh beberapa status dalam satu list, lalu memeriksa anggotanya satu per satu.
Ia tidak perlu membuat variabel terpisah untuk setiap kejadian.

Sebuah **dictionary** menghubungkan kunci dengan nilai, mirip label pada laci penyimpanan nota.

Sebuah **loop** mengulangi langkah kerja untuk setiap data di dalam kelompok.

Sebuah **kondisi** memilih tindakan berdasarkan syarat yang ditentukan.

Misalnya, kasir hanya menambah hitungan jika status yang dibaca sama dengan teks gagal.

Sebuah **fungsi** mengemas pekerjaan agar dapat dipanggil dan diuji dengan masukan berbeda.
Perintah `assert` memeriksa dugaan hasil di latihan dan menghentikan program jika hasilnya tidak cocok.

##### Cukup kenali dulu

- **Tipe data**: kategori nilai di komputer, seperti teks, angka bulat, atau daftar.
- **Kunci dan nilai**: pasangan data di dictionary untuk mencari informasi dengan cepat.
- **Parameter**: nama penerima masukan dalam definisi fungsi; pada contoh nanti, namanya hasil_login.

#### Memilih alat pemrograman untuk keamanan

Setiap bahasa pemrograman memiliki kegunaan tersendiri dalam pekerjaan keamanan komputer:

- Python cocok untuk pengolahan data dan otomasi tugas berulang.
- Bash membantu merangkai perintah pada sistem operasi Linux.
- PowerShell mengolah objek terstruktur pada lingkungan Windows.
- JavaScript penting untuk memahami cara kerja halaman browser.
- SQL dipakai untuk mengelola dan mencari data di basis data.
- Bahasa C membantu memahami alokasi memori pada materi lanjutan nanti.

Mulai belajar dengan satu bahasa terlebih dahulu sampai kamu mampu membaca pesan error dan menguji hasil.

##### Cukup kenali dulu

- **Sintaks**: aturan penulisan kode pada suatu bahasa pemrograman.
- **Otomasi**: menjalankan tugas berulang secara mandiri melalui program.
- **Traceback**: laporan baris kesalahan saat program Python berhenti tiba-tiba.

#### Menyimpan riwayat perubahan dengan Git

Saat menulis program atau laporan catatan, kamu perlu menyimpan kemajuan pekerjaan secara teratur.

Perangkat lunak **Git** mencatat versi perubahan file dari waktu ke waktu.
Sebuah **commit** menyimpan potret perubahan file beserta pesan penjelasannya.
Sebuah **repository** adalah folder kerja beserta riwayat Git yang merekam jejaknya.

Git dapat dipakai tanpa GitHub dan tanpa sambungan internet di komputermu sendiri.
Layanan GitHub adalah salah satu tempat di internet untuk berbagi repository dengan orang lain.

File yang masuk riwayat dapat tetap tersedia dalam commit lama setelah kamu menghapus versi terbarunya.
Oleh karena itu, cegah rahasia seperti password masuk ke Git sejak awal.

<details>
<summary>Pendalaman opsional: mengapa rahasia tidak boleh masuk Git</summary>

Saat kamu membuat commit, Git menyimpan potret isi file dalam riwayat.
Menghapus file pada commit berikutnya tidak menghapus catatan lama dari riwayat.
Orang yang mempunyai commit lama dapat menemukan password di dalamnya.
Simpan rahasia di luar file yang dilacak Git.
File pengecualian `.gitignore` membantu mengabaikan file yang belum dilacak; menambahkannya tidak menghapus rahasia dari riwayat.

</details>

#### Ringkasan

- Variabel, tipe data, kondisi, dan loop adalah fondasi dasar untuk mengolah data otomatis.
- Fungsi mengemas tugas berulang agar mudah diuji dengan berbagai masukan data.
- Git mencatat riwayat perubahan secara lokal di komputermu tanpa perlu internet.
- Jangan pernah memasukkan password atau data rahasia ke dalam commit Git.

#### Cek pemahaman

1. Apa perbedaan cara kerja `=` (pemberian nilai) dan `==` (perbandingan)?
2. Mengapa menghapus file rahasia dari folder kerja belum tentu menghapusnya dari riwayat Git?
3. Mengapa `assert` hanya cocok untuk pengujian latihan dan bukan satu-satunya pertahanan aplikasi produksi?

### Praktik

Siapkan komputer dan Python dari Bab 01. Buka folder utama tutorial di editor dan terminal.
Ikuti langkah-langkah berikut secara berurutan.

#### 1. Buat program pertama

Di editor teks, simpan file `hasil-belajar/hitung_login.py` dengan isi berikut:

```python
def hitung_gagal(hasil_login):
    jumlah = 0
    for hasil in hasil_login:
        if hasil == "gagal":
            jumlah += 1
    return jumlah


kejadian = ["berhasil", "gagal", "gagal", "berhasil", "gagal"]
print("Login gagal:", hitung_gagal(kejadian))
assert hitung_gagal([]) == 0
assert hitung_gagal(["berhasil"]) == 0
assert hitung_gagal(["gagal", "gagal"]) == 2
```

Jalankan program dari folder utama tutorial.
Pilih jalur sesuai sistem operasi yang kamu gunakan:

**Windows PowerShell**

```powershell
py hasil-belajar/hitung_login.py
```

**Linux/macOS**

```bash
python3 hasil-belajar/hitung_login.py
```

Kata kunci `def` mendefinisikan fungsi baru.
Baris `jumlah = 0` menyiapkan variabel penghitung awal.
Perintah `for` mengulangi pekerjaan untuk tiap elemen; `if` memilih tindakan saat syaratnya benar.
Pada contoh, `==` membandingkan teks, sedangkan `+= 1` menambah satu pada nilai jumlah.
Kata kunci `return` mengembalikan nilai hasil perhitungan kepada pemanggil fungsi.

Indentasi spasi adalah bagian aturan sintaks Python; gunakan empat spasi untuk satu tingkat indentasi.
Perintah `assert` memeriksa dugaan hasil dan menghentikan program jika hasil pengujian tidak cocok.
Assert berguna di latihan, tetapi jangan menjadikannya satu-satunya pemeriksaan keamanan aplikasi.
Mode optimasi Python dapat mematikan assert, sehingga pemeriksaan penting tidak boleh mengandalkannya saja.

Ikuti perubahan nilainya di kertas untuk memahami alur eksekusi.
Fungsi belum menghitung saat baris `def` dibaca; Python hanya menyiapkan definisinya di memori.
Pemanggilan `hitung_gagal(kejadian)` memberikan list ke nama `hasil_login`, lalu Python menjalankan isi fungsi.
Tabel berikut menunjukkan satu putaran untuk setiap anggota list:

| Elemen yang sedang dibaca | Nilai `jumlah` sebelumnya | Apakah sama dengan `gagal`? | Nilai setelah langkah |
|---|---:|---|---:|
| `berhasil` | 0 | Tidak | 0 |
| `gagal` | 0 | Ya | 1 |
| `gagal` | 1 | Ya | 2 |
| `berhasil` | 2 | Tidak | 2 |
| `gagal` | 2 | Ya | 3 |

Tanda `=` memberi nilai, sedangkan `==` membandingkan dua nilai.
Kedua tanda itu melakukan pekerjaan berbeda yang tidak boleh tertukar.
Pada list kosong, loop tidak melakukan putaran sehingga fungsi mengembalikan nol.
Cocokkan penjelasan tersebut dengan pengujian pertama sebelum mengubah kode.

Keluaran yang diharapkan di layar adalah `Login gagal: 3`.
Program tidak mencetak teks apa pun untuk pengujian assert yang lulus.
Ubah satu elemen dari `gagal` menjadi `berhasil`; prediksi angka hasilnya sebelum kamu menjalankan kembali program.

#### 2. Bedakan data valid dan data asing

Tambahkan teks `GAGAL` dengan huruf besar ke dalam list data.
Hitungan tidak naik karena fungsi mencari teks `gagal` huruf kecil secara persis.
Ini adalah keputusan mengenai definisi data pada program.

Pada sistem nyata, kamu perlu memutuskan perlakuan data tersebut:
Apakah nilai berbeda itu dianggap sah, perlu normalisasi bentuk, atau termasuk kesalahan format.
Jangan mengubah semua input tanpa memahami kontrak aturan datanya.

Tambahkan pengujian `assert hitung_gagal(["GAGAL"]) == 0`.
Hasil pengujian ini mendokumentasikan perilaku program saat ini.
Jika aturan bisnis berubah agar keduanya dianggap sama, tulis harapan baru dahulu, lihat kegagalannya, lalu perbarui fungsi dan jalankan seluruh pemeriksaan lagi.

#### 3. Kenali skrip shell kecil

Pada Linux Bash, kamu bisa membuat perulangan sederhana di terminal:

```bash
for status in berhasil gagal gagal; do
  printf 'Hasil latihan: %s\n' "$status"
done
```

Loop shell di atas menjalankan perintah `printf` sebanyak tiga kali.
Tanda kutip `"$status"` menjaga nilai variabel tetap menjadi satu argumen utuh.

Untuk masukan dari pengguna luar yang tak tepercaya, hindari menyusunnya langsung menjadi perintah shell.
Dalam Python, panggil fungsi pustaka yang tersedia, bukan menggabungkan teks masukan ke perintah seperti `os.system`.

#### 4. Simpan riwayat lokal jika Git tersedia

Perintah Git berikut dapat dijalankan di PowerShell Windows atau terminal Linux/macOS.
Periksa ketersediaan Git di komputermu dengan perintah `git --version`.
Jika belum tersedia, kamu boleh melanjutkan bab tanpa Git lalu memasangnya dari sumber resmi saat diperlukan.

Buat folder latihan terpisah melalui pengelola file, misalnya `git-latihan-laundry`, lalu buka terminal di dalamnya.
Jangan menjalankan `git init` di home atau di repository lain.

Jalankan perintah inisialisasi berikut di dalam folder baru:

```text
git init
git status
```

Buat file baru bernama `catatan.md` menggunakan editor teks, tulis satu pelajaran, lalu simpan file.
Kemudian jalankan perintah penyimpanan riwayat:

```text
git add catatan.md
git diff --cached
git -c user.name="Pelajar Lab" -c user.email="pelajar@example.invalid" commit -m "Catat latihan pertama"
git log --oneline
```

Perintah `git add` menyiapkan isi file saat itu untuk disimpan dalam commit.
Perintah `git diff --cached` memperlihatkan perubahan isi yang akan disimpan.
Dua opsi `-c` menyediakan identitas sementara khusus perintah ini tanpa mengubah konfigurasi global komputermu.

Alamat `.invalid` memang dipakai sebagai domain contoh pengujian, bukan alamat email pengiriman nyata.
Jangan menjalankan perintah push ke internet; latihan ini selesai sepenuhnya di komputermu secara lokal.

### Hasil yang diharapkan

Program berhasil menghitung tiga kegagalan, pengujian assert lulus tanpa pesan error, dan perubahan data mengubah keluaran sesuai prediksi.
Jika mengerjakan bagian Git, kamu memiliki satu commit lokal dengan file catatan yang sudah diperiksa isinya.

### Jika macet

Jika program berhenti dan menampilkan pesan kesalahan, baca panduan tabel berikut.

| Pesan kesalahan | Penyebab umum dan tindakan aman |
|---|---|
| `SyntaxError` | Periksa tanda kurung, titik dua, dan tanda petik pada kode |
| `IndentationError` | Samakan jumlah spasi indentasi; gunakan empat spasi konsisten |
| `NameError` | Periksa ejaan nama variabel atau fungsi yang belum dibuat |

Bacalah baris terakhir laporan traceback, kemudian periksa nomor baris kode yang ditunjuk.
Perbaiki satu kesalahan dengan teliti, lalu simpan file dan jalankan ulang.

### Latihan

Buat fungsi `hitung_berhasil` dan uji dengan list kosong, satu keberhasilan, serta campuran hasil.
Jelaskan alasan hitungan gagal total belum cukup menentukan adanya serangan.
Kamu masih memerlukan informasi waktu kejadian, sumber alamat, pola, dan konteks akun.

**Kurangi bantuan:**
Salin fungsi pertama dengan nama `hitung_berhasil`, lalu tentukan sendiri bagian kondisi yang perlu berubah.

**Pindah kasus:**
Laundry Aman mempunyai catatan status pesanan `dicuci`, `selesai`, `selesai`, dan `diantar`.
Tulis fungsi penghitung status selesai tanpa membuka solusi, lalu uji dengan list kosong dan list tanpa status selesai.

<details>
<summary>Pembahasan penelusuran dan pindah kasus</summary>

Untuk `hitung_berhasil`, bandingkan tiap elemen dengan string `berhasil`; pola loop dan penghitung tetap sama.
Pada kasus status laundry, dua elemen cocok dengan `selesai`, sehingga hasilnya dua.
List kosong dan list tanpa kecocokan sama-sama menghasilkan nol.

Mengganti judul output saja tidak mengubah aturan hitung; kondisi di dalam fungsi yang menentukan kecocokan.
Jika kamu menulis nama fungsi baru tetapi masih memanggil fungsi lama, perubahan hasil belum menguji fungsi baru tersebut.

</details>

### Bukti kelulusan

- [ ] Saya dapat menerangkan alur fungsi Python tanpa membaca komentar kode.
- [ ] Saya dapat membuat satu pengujian yang sengaja dibuat gagal karena bug, lalu memperbaikinya.
- [ ] Saya menyimpan versi file sebelum dan sesudah melalui Git atau salinan file bernama jelas.
- [ ] Saya memahami alasan mengapa hitungan login gagal saja belum membuktikan adanya serangan.

#### Lanjut belajar

Jika konsep loop atau fungsi masih terasa asing, buat variasi data baru dan telusuri nilainya di kertas.
Buka kembali [Bab 01](materi/01-lab.md) jika perlu memastikan cara menjalankan Python di terminal.
Setelah bukti kelulusan siap, lanjutkan ke [Bab 07: Web](materi/07-web.md) untuk mempelajari cara kerja aplikasi web dan pertukaran pesan HTTP.

### Referensi

- [Tutorial resmi Python](https://docs.python.org/3/tutorial/).
- [Git init](https://git-scm.com/docs/git-init) dan [Git diff](https://git-scm.com/docs/git-diff).
- [GNU Bash manual](https://www.gnu.org/software/bash/manual/bash.html).

---

<a id="bab-07"></a>

## Bab 07: Melihat cara kerja website dari dekat

Tahap 2 dari 6: Memahami cara sistem bekerja

### Tujuan dan prasyarat

Kamu akan menjalankan server file di loopback, membaca permintaan dan jawaban HTTP, serta memahami peran browser dan basis data.
Latihan ini membantumu melihat bagaimana aplikasi Laundry Aman melayani pelanggan melalui web.

Selesaikan [Bab 03](materi/03-jaringan.md) untuk memahami port serta IP, dan [Bab 06](materi/06-pemrograman.md) untuk menjalankan perintah Python.
Latihan ini hanya menyajikan folder berisi data dummy buatan.
Server bawaan Python cocok untuk demonstrasi lokal ini, bukan untuk layanan produksi di internet.

### Konsep

Pelanggan Laundry Aman membuka situs toko untuk memeriksa status cucian mereka.
Browser meminta halaman nota, lalu server mengirimkan data pakaian yang sudah selesai.
Komunikasi antara browser dan server mengikuti aturan yang disebut protokol web.
Aplikasi toko juga dapat menyimpan keadaan login dan membaca data pesanan.
Kita akan mempelajari cara kerja alamat web, pesan permintaan, dan penyimpanan data.

#### Membaca bagian alamat web (URL)

Saat Bu Rina membuka nota Laundry Aman, browser dan aplikasi toko mempunyai peran berbeda.

Aplikasi browser bertindak sebagai **client** yang meminta sesuatu dari sumber daya web.

Program di komputer tujuan yang melayani permintaan itu disebut **server**.

Pesan permintaan disebut **request**.

Pesan jawaban disebut **response**.

Saat pelanggan membuka alamat `http://127.0.0.1:8000/nota.txt`, alamat tersebut memuat beberapa komponen penting:

- Skema `http` menyatakan aturan komunikasi pengiriman data.
- Host `127.0.0.1` menunjukkan alamat komputer server tujuan.
- Port `8000` menunjukkan pintu layanan aplikasi yang sedang berjalan.
- Path `/nota.txt` menunjukkan tujuan yang diminta; pada server latihan ini, tujuannya adalah file nota.

Port dapat dihilangkan jika memakai port bawaan skemanya, misalnya port 80 untuk HTTP biasa.

##### Cukup kenali dulu

- **URL**: alamat lengkap penunjuk lokasi sumber daya di web.
- **Skema**: aturan protokol komunikasi yang digunakan, seperti HTTP atau HTTPS.
- **Path**: jalur file atau tujuan yang diminta di komputer server.

#### Mengikuti pertukaran request dan response HTTP

Browser Bu Rina meminta nota, lalu server Laundry Aman mengirim jawaban sesuai permintaan itu.

Pesan request mempunyai **method**, yaitu jenis tindakan yang diminta, bersama tujuan path dan keterangan tambahan.
Method `GET` biasanya meminta representasi sumber daya tanpa mengubah data di server.
Method `POST` lazim dipakai untuk mengirim data baru atau memulai tindakan, seperti mengisi formulir pesanan.

Bagian **header** berisi keterangan tambahan, misalnya jenis konten dokumen, seperti keterangan pada amplop kiriman.

Bagian **body** membawa isi pesan yang dikirimkan, seperti isi surat di dalam amplop.

Pesan response dari server mempunyai kode status, response headers, dan body isi data.
Kode status `200` menunjukkan permintaan berhasil dalam konteks operasi itu.
Kode status `404` berarti server tidak menemukan sumber daya yang diminta atau tidak mengungkap keberadaannya.

Kode status `500` menyatakan kegagalan atau gangguan di sisi program server.
Kode `200` menyatakan keberhasilan menurut jawaban server; kode itu sendiri belum membuktikan logika bisnis benar.

##### Cukup kenali dulu

- **Status code**: kode angka tiga digit penanda hasil pemrosesan permintaan HTTP.
- **Response header**: keterangan dari server tentang jenis dan ukuran data yang dikirim.
- **Response body**: isi utama jawaban server, seperti teks nota yang diminta.

#### Menjaga ingatan pengguna dengan cookie dan session

Bu Rina membuka beberapa halaman setelah login. HTTP tidak otomatis mengingat identitasnya pada tiap permintaan.
Agar kasir tidak perlu mengetik password di setiap klik halaman, aplikasi memakai mekanisme ingatan khusus.

Aplikasi dapat memakai **cookie**, yaitu data kecil yang browser simpan dan kirim sesuai aturan domain, path, dan atributnya.

Mekanisme **session** biasanya menghubungkan pengenal acak tertentu dengan keadaan login pengguna di server.

Cookie sesi perlu diperlakukan sebagai rahasia penting.
Cookie tidak sama dengan password, tetapi penguasaannya dapat memberi akses sampai sesi berakhir atau dicabut oleh sistem.

##### Cukup kenali dulu

- **Stateless**: sifat protokol yang memperlakukan tiap permintaan secara terpisah tanpa ingatan bawaan.
- **Masa aktif sesi**: rentang waktu berlakunya sesi login sebelum kedaluwarsa.
- **Pencabutan sesi**: pembatalan keadaan login oleh aplikasi; tombol keluar seharusnya memicunya sesuai rancangan sesi.

#### Komponen tampilan dan penyimpanan data di server

Bu Rina melihat judul nota, warna status, dan tombol halaman di browser.
Tiga teknologi berikut saling melengkapi untuk menyajikannya:

Bahasa **HTML** menyusun struktur dokumen teks, seperti paragraf dan judul nota.

Bahasa **CSS** mengatur tampilan visual, warna, dan tata letak halaman.

Bahasa **JavaScript** menjalankan logika interaktif langsung di komputer pengguna.

Pengguna menguasai penuh browser miliknya, sehingga server tidak boleh mempercayai pembatasan yang hanya berada di tampilan.
Tombol admin yang disembunyikan tetap memerlukan pemeriksaan izin di server.
Jika ada pelanggan nakal yang memunculkan kembali tombol itu, server tetap wajib menolak aksesnya.

Di bagian belakang, basis data menyimpan informasi secara teratur.
Dalam model relasional, komponen **table** seperti lembar data pesanan.

Komponen **row** seperti satu rekaman pesanan pelanggan.

Komponen **column** seperti kolom ID atau status cucian.

Bahasa **SQL** adalah bahasa untuk meminta atau mengubah data di basis data tersebut.

Sementara itu, **API** menyediakan cara terstruktur bagi program untuk berkomunikasi, misalnya browser meminta status pesanan kepada aplikasi.
API pesanan tetap membutuhkan pemeriksaan identitas dan hak akses, sama seperti halaman web biasa.

<details>
<summary>Pendalaman opsional: risiko manipulasi tampilan browser</summary>

Pengguna dapat membuka Developer Tools browser untuk mengubah tampilan CSS atau memanipulasi kode JavaScript.
Menyembunyikan tombol atau kolom formulir di layar browser bukanlah pengamanan data.
Server aplikasi selalu wajib memvalidasi izin pengguna pada setiap permintaan data yang masuk.

</details>

#### Ringkasan

- URL memuat skema, host, port, dan path untuk menunjuk data di server.
- HTTP bekerja dengan pasangan request (method, header, body) dan response (status, header, body).
- Cookie dan session menjaga status login pengguna; rawat cookie sesi sebagai rahasia.
- Server tidak boleh mengandalkan pembatasan tampilan browser karena pengguna menguasai perangkatnya sendiri.

#### Cek pemahaman

1. Mengapa kode status HTTP `200` belum menjamin bahwa aturan bisnis aplikasi berjalan benar?
2. Apa bahayanya jika pembatasan hak admin hanya diterapkan dengan menyembunyikan tombol lewat CSS?
3. Mengapa cookie sesi harus dijaga kerahasiaannya mirip dengan password akun?

### Praktik

Kamu akan menjalankan server web sederhana di komputermu sendiri dan mengamati lalu lintas HTTP.
Siapkan dua jendela: satu jendela terminal dan satu jendela browser.

#### 1. Buat folder khusus yang akan disajikan

Di folder tutorial, buat folder `hasil-belajar/web-lab` melalui pengelola file komputermu.
Buat file `nota.txt` di dalamnya, berisi teks berikut:

```text
Laundry Aman
Pesanan demo L001
Status: siap diambil
```

Folder ini hanya boleh berisi materi dummy untuk latihan.
Jangan menyajikan home, folder kerja kantor, atau folder yang mengandung rahasia.
Python dapat menampilkan daftar folder bila halaman index tidak tersedia.
Jangan masukkan tautan simbolik, yaitu penghubung ke lokasi file lain; server ini dapat mengikutinya ke luar folder latihan.

#### 2. Nyalakan server lokal

Buka terminal di folder utama tutorial.
Pilih jalur sesuai sistem operasi yang kamu gunakan:

**Windows PowerShell**

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

**Linux/macOS**

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

Opsi `-m` menjalankan modul bawaan Python.
Angka `8000` memilih port, `--bind` membatasi alamat dengar ke loopback, dan `--directory` menentukan folder yang dibagikan.
Terminal tetap sibuk karena proses melayani request secara terus-menerus.
Biarkan terminal ini terbuka, lalu buka alamat `http://127.0.0.1:8000/nota.txt` di browser.

Kamu kini memakai dua jendela: **terminal server** untuk menjalankan layanan dan **browser** untuk meminta file.
Klik bilah alamat browser, ketik URL lengkap, lalu tekan Enter.
Jangan mengetik URL sebagai perintah PowerShell dan jangan menutup terminal server karena terlihat “diam”.
Setelah browser meminta nota, terminal dapat mencetak catatan permintaan.
Hal itu membantu menghubungkan tindakan pada browser dengan proses server.

#### 3. Periksa request di browser

Buka Developer Tools melalui menu browser atau tombol F12, pilih tab Network, lalu muat ulang halaman.
Pilih request `nota.txt`.
Cari method, URL, status, response headers, serta isi response di panel rincian.
Browser mungkin meminta favicon, yaitu ikon kecil situs; request tambahan itu tidak berasal dari isi nota.

Ikuti langkah observasi kecil berikut:
Buka tab Network terlebih dahulu, baru tekan tombol muat ulang halaman.
Jika daftar kosong, permintaan mungkin sudah terjadi sebelum pencatatan dimulai.
Pilih baris yang namanya `nota.txt`; catat `200` sebagai status dan teks nota sebagai isi.
Kamu tidak perlu memahami seluruh kolom sekaligus.
Selanjutnya ubah hanya bagian nama file pada URL agar perbandingannya jelas.

Buka alamat `http://127.0.0.1:8000/tidak-ada.txt` di bilah alamat browser.
Server mengembalikan status `404`.
Bandingkan kedua request tersebut di panel Developer Tools.
Kamu sudah mempunyai satu kasus berhasil dan satu gagal yang bisa diulang tanpa menghubungi sistem orang lain.

Jika perintah curl tersedia di komputermu, buka jendela terminal kedua untuk mengamati respons mentah.

**Windows PowerShell**

```powershell
curl.exe -i http://127.0.0.1:8000/nota.txt
```

**Linux/macOS**

```bash
curl -i http://127.0.0.1:8000/nota.txt
```

Opsi `-i` menyertakan response headers bersama body data.
Windows memakai `curl.exe` agar tidak tertukar dengan alias pada versi PowerShell tertentu.
Hasilnya akan menyebut status HTTP dan teks nota.
Versi HTTP pada response dapat berbeda dari website lain; yang diamati adalah server sederhana pada mesinmu.

#### 4. Baca contoh query

Bayangkan tabel pesanan di basis data mempunyai kolom `id`, `owner`, dan `status`.
Query berikut berarti meminta status pesanan bernomor L001:

Blok SQL ini untuk dibaca, bukan diketik di PowerShell atau terminal server.
Server file latihan ini tidak menjalankan basis data atau fitur login.

```sql
SELECT status FROM pesanan WHERE id = 'L001';
```

Query tersebut belum memeriksa siapa pengguna yang meminta data.
Jika aplikasi memanggilnya untuk pengguna mana pun, pelanggan lain mungkin memperoleh data yang bukan haknya.
[Bab 09](materi/09-identitas.md) dan [Bab 13](materi/13-web-api.md) akan memisahkan dua masalah: keamanan penyusunan query serta pemeriksaan hak atas objek.

#### 5. Hentikan server

Kembali ke jendela terminal server dan tekan tombol Ctrl+C untuk mematikan proses.
Muat ulang halaman dengan cache browser dinonaktifkan melalui Developer Tools.
Koneksi baru seharusnya gagal karena tidak ada server yang melayani port tersebut lagi.
Jangan meninggalkan proses latihan berjalan tanpa tujuan di komputermu.

### Hasil yang diharapkan

Kamu mengamati response sukses `200` dan response file tidak ditemukan `404`, lalu membaca header serta body pesan.
Setelah itu, kamu menghentikan server dengan aman.
Catatan jurnalmu menerangkan peran setiap bagian URL dan alasan folder server dibatasi hanya untuk data lab.

### Jika macet

Jika server gagal menyala atau browser tidak menampilkan nota, gunakan panduan berikut.

| Pesan atau kendala | Solusi dan langkah aman |
|---|---|
| `Address already in use` | Port sedang dipakai; jalankan dengan port `8001` dan sesuaikan URL browser |
| Pesan `Connection refused` | Periksa apakah server di terminal masih menyala dan pastikan nomor port sesuai |
| Halaman tidak terbuka | Pastikan kamu membuka protokol `http`, bukan `https`, pada server latihan lokal ini |

Jangan menghilangkan `--bind 127.0.0.1` atau menonaktifkan firewall sebagai jalan pintas.

### Latihan

Tambahkan file dummy kedua di folder latihan, minta melalui browser, lalu bandingkan path dan ukuran response.
Jelaskan bagian mana yang akan berubah jika server memerlukan pemeriksaan login.
Sebutkan mengapa status `404` dan tampilan tombol yang tersembunyi belum cukup untuk membuktikan perlindungan data.

**Kasus diagnosis:**
Satu teman mendapat `404`, sementara teman lain mendapat pesan gagal tersambung.
Tentukan pemeriksaan pertama untuk masing-masing tanpa mengubah firewall atau memasang ulang Python.

<details>
<summary>Pembahasan dua kegagalan yang berbeda</summary>

Pesan `404` berarti kamu mendapat jawaban HTTP dari server; periksa nama file dan folder yang disajikan.
Gagal tersambung berarti browser belum memperoleh jawaban HTTP tersebut; periksa apakah server masih berjalan serta alamat dan portnya cocok.
Ini pemeriksaan awal yang aman, bukan kesimpulan untuk semua kemungkinan penyebab.
Mengganti banyak pengaturan sekaligus akan menyulitkan penentuan langkah yang memperbaiki masalah.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan tabel dua request berisi method, path, status, dan tujuan percobaan.
- [ ] Saya dapat menjelaskan aliran data dari browser menuju server hingga pembacaan basis data.
- [ ] Saya dapat menunjukkan bahwa server lokal sudah berhasil dihentikan setelah latihan selesai.
- [ ] Saya dapat membedakan peran HTML, CSS, JavaScript, dan perlindungan di server.

#### Lanjut belajar

Jika alur request dan response HTTP belum lancar, ulangi permintaan file dengan variasi nama baru.
Buka kembali [Bab 03](materi/03-jaringan.md) untuk menyegarkan pemahaman port dan protokol jaringan.
Setelah bukti kelulusan siap, lanjutkan ke [Bab 08: Kriptografi](materi/08-kriptografi.md) untuk mempelajari enkripsi, hash, dan perlindungan HTTPS.

### Referensi

- [Python http.server](https://docs.python.org/3/library/http.server.html): opsi bind, folder, dan batas penggunaan.
- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
- [MDN: HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

---

<a id="bab-08"></a>

## Bab 08: Hash, enkripsi, TLS, dan penyimpanan password

Tahap 2 dari 6: Memahami cara sistem bekerja

### Tujuan dan prasyarat

Kamu akan membedakan encoding, hashing, enkripsi, serta tanda tangan digital.
Kamu juga akan menguji perubahan nilai hash menggunakan data buatan sendiri di Python.
Pengetahuan ini menjadi bekal penting untuk melindungi data transaksi dan akun pelanggan Laundry Aman.

Selesaikan [Bab 06](materi/06-pemrograman.md) untuk dasar Python dan [Bab 07](materi/07-web.md) untuk memahami protokol web.
Kamu tidak membutuhkan rumus matematika rumit untuk mengikuti praktik dasar ini.

### Konsep

Laundry Aman mengirim nota melalui internet dan menyimpan akun pelanggan.
Kita menghadapi kebutuhan perlindungan yang berbeda untuk setiap situasi data.
Ada data yang dirahasiakan, ada yang dipastikan keasliannya, dan ada password yang disimpan aman.
Satu alat tidak bisa memenuhi seluruh kebutuhan itu sekaligus.
Kita akan mempelajari perbedaan encoding, hashing, enkripsi, serta pengamanan sambungan web.

#### Membedakan empat cara memperlakukan data

Laundry Aman perlu menyesuaikan bentuk nota, memeriksa perubahan, merahasiakan isi, dan memeriksa asal pembaruan aplikasi.

Pertama, **encoding** mengubah bentuk representasi data agar cocok dikirim atau disimpan di berbagai media.
Contohnya adalah Base64 yang menyajikan data biner ke dalam deretan teks biasa.
Encoding dapat dikembalikan ke bentuk asli tanpa kunci rahasia.
Karena itu encoding sama sekali tidak melindungi password.

Kedua, fungsi **hash** menghasilkan ringkasan berukuran tetap untuk algoritma tertentu.
Fungsi hash dirancang bekerja satu arah, seperti sidik jari dokumen.

Namun, penyerang dapat menebak masukan yang mudah lalu membandingkan hasil hash-nya.
Karena itu, hash password pendek tetap dapat ditebak.
Hash file juga tidak membuktikan asal file bila penyerang dapat mengganti file dan nilai hash pembanding sekaligus.

Ketiga, **enkripsi** menyembunyikan isi pesan memakai kunci rahasia.
Penerima memakai kunci yang sesuai untuk mengembalikan isi pesan; keamanan tetap bergantung pada penerapan dan perlindungan kuncinya.

Keempat, **tanda tangan digital** membantu memeriksa asal pesan dan perubahan data memakai pasangan kunci.

Bandingkan keempat fungsi tersebut pada tabel berikut:

| Istilah | Fungsi | Contoh pemakaian |
|---|---|---|
| Encoding | Mengubah bentuk representasi agar cocok dikirim atau disimpan | Base64 untuk merepresentasikan byte sebagai teks |
| Hash | Menghasilkan ringkasan berukuran tetap untuk algoritma tertentu | Memeriksa perubahan file dengan SHA-256 |
| Enkripsi | Menyembunyikan isi dengan kunci | Melindungi data saat disimpan atau dikirim |
| Tanda tangan digital | Memverifikasi asal pesan dan perubahan dengan pasangan kunci | Memeriksa pembaruan perangkat lunak |

##### Cukup kenali dulu

- **Kerahasiaan**: perlindungan isi data dari pihak yang tidak berhak.
- **Integritas**: perlindungan keutuhan data dari perubahan yang tidak diizinkan.
- **Otentikasi**: pembuktian keaslian identitas pihak pengirim.

#### Menggunakan kunci rahasia dan pasangan kunci

Laundry Aman ingin merahasiakan backup dan memeriksa pembaruan dari pembuat aplikasi.
Kebutuhan ini memakai kunci dengan cara berbeda:

Metode **enkripsi simetris** memakai kunci rahasia yang sama untuk proses enkripsi dan dekripsi.
Kedua pihak yang berkomunikasi harus saling menjaga kerahasiaan satu kunci tersebut.

Metode **kriptografi asimetris** memakai pasangan kunci publik dan privat, dengan operasi yang bergantung pada skema yang dipilih.
Kunci publik boleh dibagikan kepada siapa saja; kunci privat harus dilindungi dan disimpan rapat oleh pemiliknya.
Jangan menyederhanakan tanda tangan sebagai “enkripsi dengan kunci privat”; protokol tanda tangan memiliki rancangan dan pemeriksaan tersendiri.
Untuk memercayai asal pembaruan, pastikan kunci publik pemeriksa benar-benar milik penerbit yang diharapkan.

##### Cukup kenali dulu

- **Kunci publik**: kunci yang boleh dibagikan secara bebas.
- **Kunci privat**: kunci rahasia yang harus dilindungi pemiliknya.
- **Dekripsi**: proses membuka kembali pesan terenkripsi memakai kunci.

#### Mengamankan komunikasi web dengan TLS dan sertifikat

Saat kasir mengakses server aplikasi Laundry Aman melalui internet, koneksi perlu dilindungi dari penyadapan.

Protokol **TLS** melindungi komunikasi antara dua ujung yang terhubung di jaringan.

Pada koneksi HTTPS, pihak-pihak melakukan handshake, proses menyiapkan perlindungan sesi yang mencakup pemeriksaan sertifikat server oleh browser.

Pihak otoritas penerbit sertifikat disebut **certificate authority**, atau CA.
CA menandatangani sertifikat yang mengikat identitas seperti nama domain dengan kunci publik menurut aturan validasinya.

Sistem pengelolaan kepercayaan dan sertifikat digital secara menyeluruh disebut **PKI**, singkatan dari *public key infrastructure*.

HTTPS membantu kerahasiaan serta integritas selama pengiriman data, tetapi halaman penipu juga bisa memiliki sertifikat valid untuk domain miliknya.
Periksa selalu nama domain yang kamu tuju di bilah alamat browser.
Selain itu, TLS juga tidak mencegah server yang sah menyimpan password dengan cara keliru.

##### Cukup kenali dulu

- **Sertifikat digital**: catatan elektronik yang mengikat identitas seperti nama domain dengan kunci publik.
- **Validasi domain**: pemeriksaan oleh CA terhadap kendali pemohon atas nama domain.

#### Menyimpan password pelanggan secara bertanggung jawab

Laundry Aman perlu memeriksa password saat login tanpa menyimpan teks password aslinya.
Gunakan fungsi khusus yang membutuhkan kerja komputasi dan memori, seperti Argon2id melalui library yang terawat.
Fungsi lambat ini memperberat kerja penyerang saat mencoba menebak password.

**Salt** adalah nilai unik untuk tiap penyimpanan password yang disimpan bersama hasil hash; tujuannya bukan menjadi rahasia.
Salt menghambat pemakaian ulang hasil tebakan yang sama untuk banyak akun.
Parameter biaya perlu disesuaikan dan diperbarui mengikuti panduan resmi.
Buku ini tidak membangun sistem autentikasi produksi atau menyuruh kamu menciptakan algoritma kriptografi sendiri.

#### Ringkasan

- Encoding mengubah format representasi data, sedangkan enkripsi mengunci kerahasiaan memakai kunci.
- Hash memeriksa integritas data; gunakan fungsi lambat dengan salt untuk menyimpan password.
- Kriptografi simetris memakai satu kunci bersama, sedangkan asimetris memakai pasangan kunci publik dan privat.
- TLS mengamankan saluran komunikasi HTTPS melalui sertifikat CA; periksa nama domain dengan teliti.

#### Cek pemahaman

1. Mengapa Base64 sama sekali tidak boleh dipakai untuk menyembunyikan password?
2. Mengapa sebuah situs penipu tetap bisa memiliki sertifikat TLS yang sah?
3. Apa tujuan utama menambahkan salt unik pada setiap penyimpanan hash password?

### Praktik

Kamu akan menjalankan skrip Python untuk membuktikan kepekaan fungsi hash terhadap perubahan data kecil.
Siapkan terminal di komputermu.

#### 1. Bandingkan dua hash

Simpan kode berikut sebagai `hasil-belajar/cek_hash.py`:

```python
import hashlib

nota_awal = b"L001:30000"
nota_ubah = b"L001:30001"
hash_awal = hashlib.sha256(nota_awal).hexdigest()
hash_ubah = hashlib.sha256(nota_ubah).hexdigest()

print("Hash awal:", hash_awal)
print("Hash ubah:", hash_ubah)
print("Panjang:", len(hash_awal))
print("Sama:", hash_awal == hash_ubah)
assert hashlib.sha256(nota_awal).hexdigest() == hash_awal
assert hash_awal != hash_ubah
```

Jalankan skrip dari folder utama tutorial.
Pilih jalur sesuai perangkatmu:

**Windows PowerShell**

```powershell
py hasil-belajar/cek_hash.py
```

**Linux/macOS**

```bash
python3 hasil-belajar/cek_hash.py
```

Awalan `b` membuat nilai byte yang ditulis langsung di kode.
Fungsi hash bekerja pada byte, bukan pada makna kalimat.
Metode `hexdigest()` menampilkan hasil sebagai karakter heksadesimal, yaitu tulisan angka berbasis 16.

Algoritma SHA-256 menghasilkan 256 bit, yang dalam bentuk ini menjadi 64 karakter heksadesimal.
Untuk dua contoh nota tersebut, hasil perbandingannya `False`.
Pada contoh ini, perubahan satu angka terakhir menghasilkan nilai hash berbeda.

Perubahan spasi, encoding, atau akhir baris juga mengubah byte.
Dua dokumen yang terlihat sama di layar dapat mempunyai hash berbeda jika karakternya tidak sama persis.
Saat memeriksa file unduhan, bandingkan hash dari file yang tepat dan sumber pembanding yang dipercaya.

#### 2. Uji dugaan tentang hash

Buka kembali file `hasil-belajar/cek_hash.py` di editor teks.
Ganti `nota_ubah` agar sama persis dengan `nota_awal`.
Jalankan kembali program di terminal.

Perbandingan sekarang bernilai `True`; assert terakhir gagal dan menghentikan program dengan `AssertionError`.
Kegagalan itu sesuai perubahan eksperimen; baca baris yang ditunjuk di traceback.
Kembalikan isi yang berbeda setelah selesai melakukan pengujian.

Satu percobaan ini membuktikan perilaku pada dua masukan.
Ia tidak membuktikan secara matematis bahwa algoritma bebas collision.
**Collision** terjadi ketika dua masukan berbeda menghasilkan hash yang sama; ruang keluaran terbatas berarti collision ada secara teori.
Algoritma kriptografis yang baik membuat pencariannya tidak praktis menurut analisis dan kemampuan yang diketahui.

#### 3. Amati sertifikat situs dokumentasi

Buka situs dokumentasi resmi melalui HTTPS, misalnya `https://docs.python.org/`.
Gunakan informasi koneksi pada browser untuk melihat sertifikat.
Catat nama domain, penerbit, dan masa berlaku tanpa menyalin informasi akun.

Letak menu sertifikat berbeda antarbrowser; biasanya berada di samping bilah alamat web.
Jangan melanjutkan melewati peringatan sertifikat untuk menyelesaikan latihan; periksa jam sistem serta domain yang diketik.

### Hasil yang diharapkan

Kamu mendapat dua hash berbeda sepanjang 64 karakter dan dapat mengubah eksperimen hingga assert gagal dengan alasan yang dipahami.
Kamu juga dapat membaca identitas domain dari sertifikat atau mencatat bagian sertifikat sebagai belum dikerjakan jika sedang offline.
Simpan catatan perbandingan hash di jurnal belajarmu.

### Jika macet

Jika menemui kendala saat menjalankan program atau memeriksa web, gunakan panduan berikut.

| Masalah yang terlihat | Penyebab umum dan tindakan aman |
|---|---|
| Pesan `strings must be encoded before hashing` | Berikan data dalam bentuk byte; gunakan `.encode('utf-8')` pada teks |
| Nilai hash berbeda antarmesin | Periksa byte masukan; perbedaan akhir baris adalah salah satu kemungkinan penyebab |
| Peringatan sertifikat di browser | Periksa kesesuaian jam sistem dan periksa kembali ejaan nama domain |

Jangan pernah menghapus pemeriksaan sertifikat atau memakai algoritma usang hanya demi menghilangkan pesan error.

### Latihan

Terangkan pilihan solusi untuk tiga kebutuhan pengamanan di Laundry Aman berikut:

1. Mendeteksi perubahan catatan nota pesanan secara cepat.
2. Merahasiakan isi file cadangan data pelanggan di media penyimpanan.
3. Memeriksa keaslian asal file pembaruan aplikasi kasir.

Jawaban harus mencakup pengelolaan kunci atau sumber hash yang dipercaya, bukan hanya menyebut nama algoritma.
Jelaskan juga alasan mengapa password membutuhkan perlakuan khusus yang berbeda dari hash file biasa.

<details>
<summary>Pembahasan setelah mencoba: memilih fungsi kriptografi</summary>

Untuk mendeteksi perubahan nota, gunakan fungsi hash dan cocokkan dengan nilai ringkasan dari sumber terpercaya.
Untuk merahasiakan cadangan, gunakan enkripsi simetris yang kuat dengan kunci rahasia yang disimpan terpisah.
Untuk pembaruan aplikasi, gunakan tanda tangan digital dengan verifikasi kunci publik resmi penerbit program.

Password memerlukan fungsi khusus seperti Argon2id dengan salt untuk memperberat tebakan jika penyimpanan hash bocor.
Kecepatan tebakan bergantung pada fungsi, parameter, dan perangkat yang dipakai.

</details>

### Bukti kelulusan

- [ ] Saya dapat membedakan encoding, hash, enkripsi, dan tanda tangan digital.
- [ ] Saya memahami batas hash jika tidak didukung oleh sumber pembanding yang terpercaya.
- [ ] Saya dapat menjelaskan fungsi penambahan salt pada penyimpanan password.
- [ ] Saya menyimpan kode eksperimen dan membuktikan bahwa perubahan satu byte mengubah hash contoh.

#### Lanjut belajar

Kamu telah menyelesaikan seluruh materi Tahap 2: Memahami cara sistem bekerja (Bab 03 sampai 08).
Di tahap ini, kamu mempelajari perjalanan jaringan, Linux, Windows, Python, web, dan dasar kriptografi.

Pada tahap berikutnya (Tahap 3: Menjaga dan menguji akses), kita berpindah ke penerapan keamanan nyata.
Kamu akan belajar mengatur hak akses akun pada [Bab 09: Identitas](materi/09-identitas.md).
Untuk menyegarkan dasar web, buka kembali [Bab 07](materi/07-web.md).

### Referensi

- [Python hashlib](https://docs.python.org/3/library/hashlib.html).
- [OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [MDN: Transport Layer Security](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security).

---

<a id="bab-09"></a>

## Bab 09: Identitas, login, dan hak akses

Tahap 3 dari 6: Menjaga dan menguji akses

### Tujuan dan prasyarat

Kamu akan memisahkan identitas, sesi login, dan izin tindakan pada Laundry Aman.
Hasilnya berupa tabel izin akses, diagram keputusan server, dan catatan uji contoh lokal.

Bekalmu adalah [permintaan HTTP dan cookie dari Bab 07](materi/07-web.md) serta [hash dan HTTPS dari Bab 08](materi/08-kriptografi.md).
Sediakan 2–3 sesi belajar dan folder catatan pribadi.
Gunakan komputer dengan Python untuk contoh lokal. Di HP, kamu bisa menyusun matriks dan diagram.
Pakai data latihan saja. Jangan memakai akun atau data pelanggan sungguhan.

### Konsep

Kasir Laundry Aman menerima kartu pelanggan sebelum menyerahkan pakaian.
Ia juga memeriksa nomor pesanan.
Aplikasi perlu pemeriksaan serupa untuk mengenali peminta dan menentukan pesanan yang boleh dibaca.
Setelah login, browser membawa bukti agar pengguna tidak perlu mengetik password pada setiap klik.
Kita akan melindungi bukti itu dan membatasi hak tiap peran.
Terakhir, kamu menyusun tabel izin dan menjalankan contoh lokal.

#### Siapa yang meminta akses ke pesanan?

Petugas laundry menerima kartu pelanggan.
**Authentication**, atau autentikasi, membuktikan siapa pengguna.
Setelah kartu diterima, petugas masih memeriksa nomor pesanan sebelum menyerahkan pakaian.

**Authorization**, atau otorisasi, menentukan tindakan yang boleh ia lakukan.
Alice yang berhasil login tetap tidak berhak melihat pesanan Bob.
Bayangkan petugas mencocokkan kartu pelanggan dengan catatan tepercaya untuk mengenali peminta.
Untuk otorisasi, bayangkan kunci loker: tiap kunci hanya memberi akses ke loker tertentu.
Aplikasi tetap memeriksa bukti login dan aturan izin di server; kartu atau nomor pesanan saja belum cukup.

Nomor pesanan bisa memakai **UUID**, format pengenal 128 bit yang dirancang untuk membedakan objek.
Sebagian jenis UUID memakai angka acak; jenis lain memakai waktu atau nama.
UUID yang dibuat dengan sumber acak yang aman mempersulit penebakan nomor pesanan.
Server tetap wajib memeriksa hak pengguna meskipun nomornya sulit ditebak.

#### Bagaimana login tetap berlaku setelah password dicek?

Setelah login, Alice tidak ingin mengetik password di setiap klik.
**Session** adalah hubungan login yang berlanjut setelah pemeriksaan identitas.
Server biasanya memberi browser sebuah pengenal sesi acak melalui cookie.
Browser mengirim cookie itu pada permintaan berikutnya.
Pengenal sesi membawa bukti login, sehingga harus sulit ditebak.
Jangan memakai nomor urut sebagai pengenal sesi.

Pengenal ini memiliki nilai seperti tiket masuk.
Orang yang mendapatkannya mungkin dapat memakai sesi tersebut.
Karena itu aplikasi memerlukan HTTPS, masa berlaku, pencabutan sesi, dan rotasi pengenal setelah login atau perubahan hak akses.

#### Apa yang cookie boleh dan tidak boleh lakukan?

Cookie membawa tiket sesi, tetapi tiap atribut mengatur batas berbeda.
`HttpOnly` membatasi pembacaan cookie lewat JavaScript.
Atribut ini membantu saat skrip di halaman mencoba membaca tiket.

`Secure` membatasi pengiriman lewat HTTPS.
Tanpa itu, tiket bisa ikut pada koneksi yang tidak dilindungi.

`SameSite` membantu mengendalikan pengiriman cookie pada permintaan lintas situs.
Pembatasannya bergantung pada nilai atribut; keberadaan `SameSite` saja tidak berarti semua permintaan lintas situs diblokir.

Atribut-atribut ini melindungi cookie, tetapi tidak menggantikan pemeriksaan izin di server.
Menyembunyikan tombol “Hapus pesanan” tidak membatasi permintaan HTTP yang seseorang buat tanpa tombol itu.

#### Faktor apa yang dipakai untuk membuktikan identitas?

Kasir Laundry Aman bisa kehilangan password karena dicuri atau ditebak.
**MFA**, singkatan *multi-factor authentication*, menggabungkan faktor yang berbeda: sesuatu yang diketahui, dimiliki, atau melekat pada pengguna.
Dua password masih berasal dari satu jenis faktor.

Kasir juga bisa tertipu halaman login palsu.
**Phishing** adalah tipuan yang membuat orang menyerahkan bukti login ke pihak yang salah.

**Passkey** adalah cara login memakai pasangan kunci yang mengikat autentikasi pada situs yang sesuai.
Ikatan ini membantu melawan phishing.

Jika kasir kehilangan alat login, pemulihan akun tetap perlu dirancang.
Helpdesk yang memberi akses hanya berdasarkan nama pelanggan dapat merusak perlindungan login yang kuat.

#### Siapa boleh membaca pesanan cabang mana?

Kasir cabang A tidak otomatis boleh membaca seluruh pelanggan cabang B.
**RBAC**, singkatan *role-based access control*, memberi izin berdasarkan peran, misalnya kasir atau manajer.

Aturan berbasis atribut juga memperhatikan cabang, pemilik pesanan, waktu, dan keadaan pesanan.

Terapkan **least privilege**, yaitu memberikan hak sebatas kebutuhan tugas.
Tinjau kembali hak saat tugas berubah.
OWASP menganjurkan penolakan akses secara bawaan dan pemeriksaan izin pada setiap permintaan.
Artinya, server menolak tindakan yang belum memiliki izin eksplisit.
Lihat [panduan otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

<details>
<summary>Pendalaman opsional: OAuth, OpenID Connect, dan SSO</summary>

Pemilik laundry ingin memberi aplikasi lain akses terbatas ke layanan laundry tanpa menyerahkan password.
**OAuth** memberi cara mendelegasikan akses.

**OpenID Connect** menambahkan lapisan identitas di atas OAuth.

**SSO**, *single sign-on*, membuat pengguna bisa masuk ke beberapa aplikasi melalui penyedia identitas.

Kamu cukup memahami pembagian peran ini dahulu.
Implementasi protokol memerlukan library terawat dan pengujian khusus.
Menulis sistem login sendiri menjadi proyek lanjutan.

</details>

#### Ringkasan

- Autentikasi menjawab “siapa”; otorisasi menjawab “boleh apa pada objek ini”.
- Tiket sesi perlu dilindungi seperti kunci yang bisa dipinjam orang lain.
- Atribut cookie membantu batas pengiriman, bukan mengganti cek izin di server.
- Beri hak seminimal mungkin untuk tugas, lalu tinjau ulang saat tugas berubah.

#### Cek pemahaman

1. Mengapa Alice yang sudah login tetap ditolak saat membuka pesanan Bob?
2. Apa perbedaan peran `HttpOnly` dan pemeriksaan pemilik di server?
3. Mengapa dua password belum memenuhi syarat MFA?

### Praktik

#### 1. Buat matriks akses

Salin tabel berikut ke catatan.
Matriks akses adalah tabel yang memasangkan peminta, objek, tindakan, dan keputusan izin.
Data Alice, Bob, dan pesanan adalah data latihan.

| Aktor | Objek | Tindakan | Keputusan yang benar |
|---|---|---|---|
| Alice | Pesanan Alice | Baca status | Izinkan |
| Alice | Pesanan Bob | Baca status | Tolak |
| Bob | Pesanan Alice | Ubah alamat | Tolak |
| Kasir cabang A | Pesanan cabang A | Tandai dibayar | Izinkan sesuai tugas |
| Kasir cabang A | Pengaturan pemilik | Tambah administrator | Tolak |
| Pengunjung belum login | Daftar seluruh pelanggan | Baca | Tolak |

#### 2. Ikuti alur satu permintaan

Tulis urutan berikut di catatan:

1. Browser mengirim permintaan.
2. Server memeriksa sesi.
3. Server mengambil identitas dari sesi tepercaya.
4. Server memeriksa hak terhadap objek.
5. Server membaca atau mengubah data jika izin sesuai.

Jangan mengambil identitas pengguna dari parameter `user_id` yang bebas diganti pengunjung.

#### 3. Jalankan contoh lokal

Pilih jalur sesuai perangkatmu.
Dari folder utama tutorial, buka terminal.

**Windows PowerShell**

Jalankan perintah berikut:

```powershell
py labs/access_demo.py
```

**Linux/macOS**

Pakai `python3 labs/access_demo.py`.

Cocokkan hasil: Alice diizinkan membaca pesanan 101; Bob dan pengguna tanpa identitas ditolak.
Buka file contoh di editor.
Temukan pemeriksaan `actor is None` dan perbandingan pemilik pesanan dengan `actor`.
Parameter `actor` dalam contoh mewakili identitas yang sudah ditentukan server setelah login.
Aplikasi nyata tidak boleh mempercayai nilai ini dari browser.

Tulis apa yang akan terjadi jika pemeriksaan pemilik dihapus, tanpa perlu menghapusnya.
Program memakai data latihan di memori, sehingga tidak membutuhkan akun sungguhan.

#### 4. Uji desain pemulihan

Bayangkan Alice kehilangan telepon.
Tulis prosedur yang menyediakan jalur pemulihan, mencatat tindakan, dan mencabut sesi lama bila diperlukan.
Jangan meminta pegawai mengirim kode pemulihan melalui chat umum.
Pisahkan permintaan pengguna dari keputusan petugas yang berwenang.

### Hasil yang diharapkan

Kamu punya matriks enam kasus dan diagram keputusan server.
Contoh mengizinkan Alice membaca pesanan 101, menolak Bob membaca 101, dan menolak pengguna tanpa identitas.
Kamu dapat menjelaskan bahwa identitas yang benar belum tentu mempunyai izin terhadap objek tertentu.

### Jika macet

Jika program tidak ditemukan, pastikan terminal berada di folder yang berisi `labs`.
Jika istilah sesi terasa abstrak, gunakan tiket penitipan barang sebagai analogi, lalu tulis kembali versi teknisnya.
Saat aplikasi menolak permintaan, bedakan pengguna belum login dari pengguna yang sudah login tetapi tidak punya izin.
Aplikasi boleh menyamarkan keberadaan objek untuk mengurangi kebocoran informasi.

### Latihan

Tambahkan peran kurir yang hanya melihat alamat untuk pengiriman yang ditugaskan kepadanya.
Buat empat kasus: tugas miliknya, tugas orang lain, tugas selesai, dan akun dinonaktifkan.
Gabungkan empat kasus kurir dengan enam kasus Praktik agar matriksmu berisi sepuluh kasus beserta alasan keputusan.
Tentukan perilaku sesi saat pegawai keluar dari perusahaan.

Jawab juga mengapa nomor pesanan berupa UUID yang sulit ditebak tetap membutuhkan otorisasi di server.

<details>
<summary>Pembahasan setelah mencoba: UUID dan otorisasi</summary>

UUID acak yang dibuat dengan sumber acak yang aman mempersulit penebakan nomor objek.
Pengenal itu tidak membuktikan bahwa peminta berhak membaca objek tersebut.
Server tetap harus memeriksa pemilik atau izin pada setiap permintaan.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan matriks beserta keputusan dan alasan untuk sepuluh kasus.
- [ ] Saya dapat menjelaskan satu serangan akses lintas pelanggan.
- [ ] Saya dapat menunjukkan letak pemeriksaan yang memperbaikinya.
- [ ] Saya dapat menyebut satu cara menguji agar bug tidak muncul lagi.

#### Lanjut belajar

Jika cookie dan HTTPS masih membingungkan, ulangi [Bab 07](materi/07-web.md) dan [Bab 08](materi/08-kriptografi.md).
Setelah bukti siap, lanjut ke [Bab 10: memperkuat perangkat](materi/10-hardening.md).

### Referensi

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html): login dan pemulihan akun.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html): pemeriksaan izin.
- [PortSwigger: access control](https://portswigger.net/web-security/access-control): latihan resmi tentang akses objek.
- [RFC 9562](https://www.rfc-editor.org/rfc/rfc9562.html): jenis UUID dan batas penggunaannya untuk keamanan.
- [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html): perlindungan cookie dan pengenal sesi.

---

<a id="bab-10"></a>

## Bab 10: Memperkuat perangkat dan menguji cadangan

Tahap 3 dari 6: Menjaga dan menguji akses

### Tujuan dan prasyarat

Kamu akan mencatat keadaan awal perangkat Laundry Aman dan menguji pemulihan file latihan.
Hasilnya berupa daftar aset, lima pemeriksaan, hash, dan catatan waktu pemulihan.

Bekalmu adalah [proses dan file dari Bab 02](materi/02-komputer.md) serta [izin dari Bab 04](materi/04-linux.md) dan [Bab 05](materi/05-windows.md).
Ulangi juga [hash dari Bab 08](materi/08-kriptografi.md) dan [akun dari Bab 09](materi/09-identitas.md).

**Hardening** adalah mengurangi kesempatan sistem disalahgunakan melalui konfigurasi yang sesuai.
Sediakan 2–3 sesi. Latihan file tidak memerlukan administrator.

Gunakan komputer untuk praktik pemulihan. Di HP, kamu bisa membuat inventaris, yaitu daftar aset, dan rancangan pemeriksaannya.
Jangan mengubah komputer kantor tanpa persetujuan pemilik.

### Konsep

Komputer kasir Laundry Aman mungkin dipakai membuka aplikasi penjualan, email, dan dokumen.
Setiap aplikasi, akun, serta layanan menambah bagian yang perlu dirawat.
Kita akan memetakan bagian yang bisa dijangkau, menyepakati keadaan awal, lalu merawat cadangan.
Setelah itu kamu menguji pemulihan file latihan tanpa menghapus data asli.

#### Bagian mana yang bisa dijangkau penyerang?

Komputer kasir Laundry Aman hanya membutuhkan aplikasi untuk tugas toko.
Setiap aplikasi yang terpasang menambah pintu masuk potensial.
**Attack surface** adalah bagian sistem yang bisa dijangkau atau dipengaruhi penyerang.
Kamu menguranginya dengan menghapus software yang tidak diperlukan, menutup akses yang tidak dipakai, dan membatasi hak pengguna.
Bayangkan toko yang hanya membuka pintu yang dipakai karyawan; pintu lain dikunci.

#### Keadaan awal apa yang disepakati bersama?

Pemilik laundry perlu memeriksa apakah pengaturan komputer kasir berubah.
Tanpa catatan bersama, “sudah aman” sulit diperiksa ulang.
**Baseline** adalah keadaan awal yang disepakati: aplikasi apa yang boleh berjalan, siapa administrator, kapan pembaruan dipasang, dan bagaimana bukti dikumpulkan.
Tanpa baseline, kamu sulit membedakan perubahan sah dengan masalah.
Simpan versi baseline dan pemiliknya.

Saat aplikasi kasir mendapat pembaruan, pemilik perlu merencanakan pemasangannya.
**Patching** memperbaiki kelemahan atau bug melalui pembaruan.
Jadwal yang baik mencakup pemeriksaan kompatibilitas, pemasangan, verifikasi, dan jalan pemulihan jika aplikasi bisnis berhenti bekerja.
Prioritas mengikuti paparan dan dampak.
Server yang menerima permintaan internet memerlukan perhatian berbeda dari mesin latihan yang terputus dari jaringan.

#### Alat pertahanan apa yang saling melengkapi?

Komputer kasir perlu membatasi komunikasi sekaligus memeriksa file yang dibuka pegawai.
Firewall membatasi komunikasi berdasarkan aturan, misalnya alamat dan port.
Antivirus membantu mengenali file atau perilaku berbahaya di komputer.
Hasil alat pertahanan tetap memerlukan pemeriksaan dan keputusan manusia.

##### Cukup kenali dulu

- **EDR** (*endpoint detection and response*): membantu memantau perangkat dan melakukan tindakan respons.
- **IDS** (*intrusion detection system*): memberi peringatan terhadap aktivitas mencurigakan.
- **IPS** (*intrusion prevention system*): dapat memblokir aktivitas dalam jalur lalu lintas.

Produk yang terpasang tetapi tidak mengirim log atau tidak diperbarui memberi perlindungan yang berbeda dari asumsi pemiliknya.

#### Bagaimana cadangan membantu saat komputer rusak?

Komputer kasir bisa rusak setelah menerima pesanan baru.
**Backup** menyimpan salinan untuk pemulihan, seperti fotokopi buku kas yang disimpan terpisah.

**Restore** berarti memulihkan data dari salinan tersebut.
Salinan hanya membantu sampai halaman atau transaksi yang sudah disalin.

Snapshot VM berguna untuk kembali ke keadaan latihan, tetapi tidak menggantikan cadangan yang terpisah dari perangkat asal.
Jika disk rusak, snapshot yang tersimpan pada disk itu juga terancam.

Rencana backup perlu memikirkan salinan terpisah, pembatasan akses, enkripsi, dan pengujian restore.

**RPO** (*recovery point objective*) menyatakan batas kehilangan data yang dapat diterima, diukur sebagai rentang waktu.
Jika pemilik menetapkan RPO satu jam, rencana pemulihan harus membatasi kehilangan data hingga satu jam sebelum gangguan.

**RTO** (*recovery time objective*) menyatakan target waktu pemulihan agar layanan kembali beroperasi.

Jika cadangan terakhir pukul 12.00 dan komputer rusak pukul 16.00, transaksi antara kedua waktu itu bisa hilang.
Kembali ke cadangan tersebut dapat kehilangan empat jam perubahan dan belum memenuhi RPO satu jam tadi.

#### Ringkasan

- Kurangi permukaan yang bisa dijangkau dengan menghapus yang tidak perlu dan membatasi hak.
- Baseline memberi acuan bersama untuk memeriksa ulang.
- Uji restore untuk memeriksa kegunaan cadangan, dan pisahkan salinannya dari perangkat asal.
- RPO dan RTO membantu membicarakan kehilangan data dan lama pemulihan.

#### Cek pemahaman

1. Mengapa snapshot pada disk yang sama belum cukup sebagai cadangan utama?
2. Apa beda RPO dan RTO dalam satu kalimat masing-masing?
3. Mengapa “antivirus terpasang” belum membuktikan perlindungan aktif?

### Praktik

#### 1. Buat inventaris fiktif

Buka catatan di editor atau buku tulis.
Tulis tiga aset: komputer kasir, laptop pemilik, dan server latihan.
Isi pemilik, fungsi, data yang disimpan, akses administrator, sumber pembaruan, dan cara backup.
Tandai fakta yang belum kamu ketahui sebagai `UNKNOWN`.

#### 2. Tetapkan lima pemeriksaan baseline

Untuk komputer kasir, pilih akun harian tanpa hak administrator, penguncian layar, software yang masih didukung, firewall aktif, dan backup yang pernah dipulihkan.
Buat kolom keadaan saat ini, keadaan yang diinginkan, serta bukti.
Periksa pengaturan melalui menu OS sendiri.
Jangan mengubah komputer kantor tanpa persetujuan pemilik.

#### 3. Simulasikan restore tanpa menghapus apa pun

Pilih jalur sesuai perangkatmu.
Dari folder tutorial, buka terminal.

**Windows PowerShell**

Jalankan:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/backup-demo
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: dicuci' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Destination hasil-belajar/backup-demo/pesanan.cadangan.txt
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: data latihan berubah' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt -Destination hasil-belajar/backup-demo/pesanan.pulih.txt
Get-Content -LiteralPath hasil-belajar/backup-demo/pesanan.pulih.txt
Get-FileHash -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt,hasil-belajar/backup-demo/pesanan.pulih.txt -Algorithm SHA256
```

`New-Item` membuat folder, `Set-Content` menulis data latihan, dan `Copy-Item` membuat salinan.
Pemulihan memakai nama baru agar file asal tetap tersedia.
`Get-FileHash` menghitung sidik jari isi.
Jika mengulang latihan, perintah menimpa file demo bernama sama.
Gunakan folder lain bila ingin mempertahankan percobaan sebelumnya.

**Linux/macOS**

Lakukan urutan yang sama melalui pengelola file: buat file teks, duplikat sebagai cadangan, ubah file asal, lalu duplikat cadangan menjadi file pulih.
Bandingkan isinya melalui editor.
Jalur ini melatih pemulihan tanpa memerlukan perintah shell tambahan.

#### 4. Ukur hasil

Catat waktu mulai dan selesai pemulihan.
Nyatakan apakah kamu memenuhi target latihan RTO lima menit.
Ini mengukur pemulihan satu file; pemulihan layanan kasir secara utuh memerlukan pengujian tersendiri.
Jika pesanan baru masuk setelah backup, tulis data mana yang hilang ketika kembali ke cadangan tersebut.

### Hasil yang diharapkan

File `pesanan.pulih.txt` berisi `LA-001: dicuci`.
Hash file cadangan dan file pulih sama.
File asal tetap berisi teks perubahan.
Kamu memahami bahwa latihan satu folder ini menguji proses restore, sementara cadangan sungguhan perlu tempat dan hak akses yang terpisah.

### Jika macet

Jika PowerShell melaporkan jalur tidak ada, jalankan perintah pembuatan folder lebih dahulu.
Hash berbeda dapat menunjukkan perubahan isi, encoding, atau akhir baris.
Jangan mengedit salinan sebelum membandingkan.
Jika backup produksi belum pernah diuji, tulis “restore belum diuji”, bukan “backup berhasil”.

### Latihan

Rancang pemulihan saat komputer kasir rusak pukul 16.00 dan backup terakhir pukul 12.00.
Pesanan kertas tersedia selama gangguan.
Tentukan urutan pemulihan, cara mencocokkan transaksi, dan siapa yang menyetujui layanan dibuka.
Tambahkan kemungkinan akun backup ikut dicuri dan perbaiki rancangannya.

<details>
<summary>Pembahasan setelah mencoba: akun cadangan ikut dicuri</summary>

Jika akun backup dicuri, penyerang dapat menghapus atau mengubah salinan.
Pisahkan hak akses cadangan dari akun harian kasir.
Simpan salinan di tempat yang tidak otomatis bisa dihapus dari komputer kasir.
Uji restore tetap dibutuhkan setelah perubahan akses.

</details>

### Bukti kelulusan

- [ ] Saya mengumpulkan inventaris, baseline lima pemeriksaan, hash, catatan waktu restore, dan perkiraan kehilangan data.
- [ ] Saya dapat menjelaskan alasan setiap kontrol dan dampaknya pada kasir.
- [ ] Saya dapat menjelaskan cara membatalkan perubahan jika aplikasi bermasalah.

#### Lanjut belajar

Jika hash masih membingungkan, ulangi [Bab 08](materi/08-kriptografi.md).
Setelah bukti siap, lanjut ke [Bab 11: memetakan ancaman](materi/11-threat-modeling.md).

### Referensi

- [CIS Controls v8](https://www.cisecurity.org/controls/v8): kerangka kontrol pertahanan yang dapat dinilai.
- [NIST: RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective) dan [RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective): sasaran kehilangan data dan waktu pemulihan.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): pemeriksaan integritas file.

---

<a id="bab-11"></a>

## Bab 11: Memetakan ancaman dan menentukan prioritas

Tahap 3 dari 6: Menjaga dan menguji akses

### Tujuan dan prasyarat

Kamu akan menilai keamanan layanan Laundry Aman sebelum memilih alat.
Hasilnya berupa diagram aliran data, empat skenario risiko, dan satu catatan tugas perbaikan yang dapat diuji.

Bekalmu adalah [aset dan risiko dari Bab 00](materi/00-orientasi.md), [aliran data web dari Bab 07](materi/07-web.md), [akses dari Bab 09](materi/09-identitas.md), serta [cadangan dari Bab 10](materi/10-hardening.md).
Sediakan 2–4 sesi, kertas atau editor teks, serta catatan Bab 09–10.
Pakai rancangan fiktif dan data latihan saja.

### Konsep

Pelanggan melihat status cucian. Kasir memperbarui pesanan. Pemilik membaca laporan.
Sebelum memilih alat, kita perlu tahu apa yang dilindungi dan bagaimana bisa salah.
Kita akan menamai aset, menggambar aliran data, lalu menyusun skenario ancaman.
Setelah itu kamu menilai prioritas dan membuat tiket perbaikan yang bisa diuji ulang.

#### Apa yang dilindungi di Laundry Aman?

Laundry Aman perlu menjaga catatan pelanggan dan tetap menerima pesanan.
Aset adalah sesuatu yang perlu dilindungi, seperti data pelanggan atau kemampuan menerima pesanan.

Ancaman adalah kejadian atau pelaku yang dapat merugikan aset.

Kerentanan adalah kelemahan yang memungkinkan kerugian.
Password bersama adalah kelemahan.
Mantan pegawai yang masih masuk adalah skenario ancaman.
Hilangnya catatan transaksi adalah salah satu dampaknya.

Risiko menggabungkan kemungkinan kejadian dan dampaknya dalam konteks tertentu.
Ini melanjutkan pengertian aset, ancaman, dan risiko dari Bab 00.
Bayangkan risiko seperti cuaca buruk untuk toko: kemungkinan hujan dan dampak genangan digabung saat merencanakan atap.

#### Bagaimana kita memeriksa rancangan sebelum memilih alat?

Pemilik ingin memeriksa rancangan layanan sebelum pelanggan memakainya.
**Threat modeling** berarti memeriksa rancangan untuk menemukan cara sistem bisa disalahgunakan.
Mulailah dengan fungsi bisnis: pelanggan melihat status cucian, kasir memperbarui pesanan, dan pemilik melihat laporan.
Gambar tempat data masuk, berpindah, dan tersimpan.

Tandai **trust boundary**, batas antara pihak atau komponen dengan tingkat kepercayaan berbeda.
Browser pelanggan dan server memiliki batas kepercayaan.
Server harus memeriksa data dari browser.
Bayangkan meja kasir: uang dari pelanggan melewati batas sebelum masuk laci toko.

Telusuri satu aliran data secara utuh sebelum memakai kerangka kerja.
Pelanggan mengetik nomor nota di browser, data dikirim lewat internet, masuk ke server aplikasi, lalu server meminta data ke database.
Di tiap titik, tanyakan siapa yang dapat menyalahgunakannya, data apa yang terancam, dan bagaimana layanan bisa gagal.

**STRIDE** adalah kerangka pengingat enam jenis ancaman.
Gunakan pertanyaan berikut untuk menelusuri aliran tadi:

- Pemalsuan identitas (*spoofing*): dapatkah orang menyamar sebagai kasir?
- Perubahan tanpa izin (*tampering*): dapatkah orang mengubah harga tanpa izin?
- Penyangkalan tindakan (*repudiation*): bisakah kasir menyangkal perubahan karena bukti pencatatannya tidak memadai?
- Kebocoran informasi (*information disclosure*): dapatkah pelanggan membaca nota orang lain?
- Gangguan ketersediaan layanan (*denial of service*): dapatkah aplikasi dibuat tidak melayani pesanan?
- Kenaikan hak akses (*elevation of privilege*): dapatkah kasir memperoleh hak administrator?

Gunakan pengingat ini untuk menanyai setiap titik aliran data.
Kamu tidak harus menemukan keenam ancaman pada setiap kotak aliran data.
Pendekatan pemodelan ancaman ini dijelaskan lebih lanjut dalam [OWASP Threat Modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html).

#### Bagaimana kelemahan dikelola setelah ditemukan?

Pemilik laundry menerima laporan dugaan kelemahan aplikasi kasir.
**Vulnerability management**, atau pengelolaan kerentanan, mencakup menemukan aset, mengidentifikasi kelemahan, memvalidasi temuan, memprioritaskan perbaikan, dan menguji ulang.
Pemindai dapat membantu menemukan kandidat.
Kamu masih perlu memeriksa versi, konfigurasi, dan kondisi yang memungkinkan masalah terjadi.

Port terbuka bisa melayani kebutuhan sah; keterbukaan port saja belum membuktikan kelemahan.
Temuan tanpa bukti dapat membuang waktu pengembang.

Kode **CVE** (*Common Vulnerabilities and Exposures*) adalah pengenal kerentanan publik.

Sistem **CVSS** (*Common Vulnerability Scoring System*) membantu menyatakan tingkat keparahan teknis.
Skor tersebut belum mencakup seluruh dampak pada usaha kamu.
Sebuah layanan yang terekspos internet dan menyimpan transaksi dapat lebih mendesak daripada software bernilai CVSS lebih tinggi yang tidak terpasang.

Catat ketidakpastian.
Jangan memberi probabilitas seperti “93% akan diretas” tanpa metode dan data yang mendukungnya.

#### Bagaimana pemilik memilih perbaikan lebih dahulu?

Pemilik laundry perlu membandingkan kebocoran nota dengan kegagalan cadangan.
Untuk latihan, beri nilai kemungkinan dan dampak dari 1 sampai 3: rendah, sedang, lalu tinggi.
Kalikan kedua nilai untuk membantu mengurutkan perhatian.
Skala ini alat diskusi lokal, bukan perhitungan statistik atau skor CVSS.

Jika pemeriksaan pemilik nota terbukti bekerja, tinjau kembali nilai kemungkinan kebocoran lintas pelanggan.
Tulis asumsi dan alasan perubahan; kamu tidak harus menurunkan semua nilai.

**Kontrol** adalah tindakan atau aturan untuk mengurangi risiko, misalnya pemeriksaan pemilik nota di server.
Sesudah kontrol berjalan, catat risiko yang masih tersisa.

**Tiket perbaikan** adalah catatan tugas yang menjelaskan penanggung jawab, perubahan, dan cara memeriksa hasilnya.
Seperti catatan perbaikan mesin laundry, tiket perlu syarat selesai yang bisa diperiksa.
Menyebut fitur saja belum membuktikan bahwa pengguna sah tetap bisa bekerja dan akses tanpa izin ditolak.

#### Ringkasan

- Aset, ancaman, kerentanan, dan risiko menjawab pertanyaan berbeda.
- Gambar aliran data dan batas kepercayaan sebelum menilai skor.
- Prioritas mengikuti konteks usaha, bukan hanya angka alat.
- Tiket perbaikan perlu cara uji yang bisa diulang.

#### Cek pemahaman

1. Mengapa port terbuka belum otomatis menjadi kerentanan?
2. Apa yang berubah pada skor jika pemeriksaan pemilik sudah terbukti bekerja?
3. Mengapa tiket perbaikan membutuhkan kriteria uji, bukan hanya usulan fitur?

### Praktik

#### 1. Gambar aliran data

Gunakan rancangan fiktif berikut:

```text
Pelanggan -> Browser -> HTTPS -> Aplikasi Laundry -> Database pesanan
Kasir    -> Browser -> HTTPS -> Aplikasi Laundry -> Log audit
Pemilik  -> Browser -> HTTPS -> Aplikasi Laundry -> Ekspor laporan
                                                -> Cadangan terpisah
```

Tulis data yang melewati tiap panah.
Contohnya, permintaan status membawa pengenal pesanan dan sesi.
Jawaban seharusnya hanya membawa informasi yang boleh dibaca pengguna itu.
Tandai batas internet ke aplikasi serta batas aplikasi ke database.

#### 2. Buat empat skenario

Gunakan kalimat berstruktur: “Aktor melakukan tindakan melalui komponen sehingga aset mengalami dampak.”
Contoh: “Pelanggan mengganti ID pesanan pada permintaan sehingga aplikasi mengirim alamat pelanggan lain.”
Tambahkan akun pegawai lama yang belum dicabut, kegagalan backup, dan perubahan harga tanpa catatan audit.

#### 3. Beri penilaian yang dapat diperdebatkan

Pakai skala latihan 1–3 untuk kemungkinan dan dampak, kemudian kalikan.
Skala ini alat diskusi lokal, bukan perhitungan statistik.

| Skenario | Kemungkinan | Dampak | Nilai |
|---|---:|---:|---:|
| Akses pesanan lintas pelanggan | 3 | 3 | 9 |
| Akun pegawai lama masih aktif | 2 | 3 | 6 |
| Cadangan gagal dipulihkan | 2 | 3 | 6 |
| Harga berubah tanpa jejak | 2 | 2 | 4 |

Alasan awal tiap penilaian:

- Akses lintas pelanggan: layanan menerima permintaan internet dan belum memeriksa pemilik pesanan.
- Akun pegawai lama: proses keluar pegawai belum mempunyai penanggung jawab.
- Cadangan gagal dipulihkan: belum ada uji restore.
- Harga berubah tanpa jejak: kasir berbagi akun.

Angka ini sengaja mengacu pada asumsi kasus latihan.
Jika kamu menemukan pemeriksaan pemilik yang bekerja, nilai kemungkinan skenario pertama perlu ditinjau.
Hindari mempertahankan skor hanya karena sudah tercantum dalam tabel.

#### 4. Buat tiket perbaikan

Pilih skenario pertama.
Isi pemilik tindakan, perubahan yang diminta, tanggal target latihan, cara pengujian, dan risiko yang tersisa.
Kriteria selesai: Alice dapat membuka pesanannya sendiri dan ditolak saat meminta milik Bob.
Penolakan tercatat tanpa memuat data pribadi Bob.

#### 5. Lakukan verifikasi

Jalankan ulang contoh akses melalui langkah Praktik 3 [Bab 09](materi/09-identitas.md) dan cocokkan hasilnya dengan tiket.
Contoh itu menguji keputusan akses, tetapi belum membuat log audit aplikasi.

Log audit adalah catatan tindakan yang membantu pemeriksaan setelah kejadian.
Tandai syarat pencatatan penolakan `NOT_RUN` sampai ada implementasi yang diuji; keluaran terminal saja belum membuktikan syarat itu.

Bila perbaikan hanya menyembunyikan nomor pesanan pada layar, tiket belum memenuhi kriteria server.
Tulis keputusan menerima risiko apabila sebuah kontrol belum dapat diterapkan, beserta pihak yang mempunyai wewenang.

### Hasil yang diharapkan

Kamu mempunyai satu diagram, empat skenario dengan asumsi, serta satu tiket yang dapat diuji.
Orang lain dapat membaca alasan prioritas tanpa harus percaya pada penilaian pribadi kamu.

### Jika macet

Jika diagram terlalu rumit, mulai dari satu tindakan pelanggan.
Jika semua risiko mendapat nilai tertinggi, bedakan data apa yang terpapar, siapa yang dapat menjangkau komponen, dan kontrol yang sudah terbukti.
Jika laporan pemindai menyebut versi rentan, cari **advisory**, yaitu pemberitahuan keamanan dari pembuat software.
Periksa apakah versi, konfigurasi, dan kondisi pada pemberitahuan itu cocok dengan sistem latihan.

### Latihan

Tambahkan fitur unggah bukti pembayaran.
Tulis sumber file, tempat penyimpanan, siapa yang membukanya, dan batas ukuran.
Buat dua skenario penyalahgunaan serta kontrolnya.
Jelaskan risiko tersisa setelah kontrol berjalan.
Satu kontrol jarang menyelesaikan seluruh persoalan bisnis.

<details>
<summary>Pembahasan setelah mencoba: risiko tersisa setelah kontrol</summary>

Kontrol ukuran file membatasi beban penyimpanan, tetapi tidak memeriksa isi berbahaya sendiri.
Pembatasan siapa yang membuka file mengurangi paparan, tetapi akun yang dicuri tetap berisiko.
Catat risiko tersisa agar pemilik tahu apa yang belum selesai.

</details>

### Bukti kelulusan

- [ ] Saya meminta pembaca lain memilih satu risiko dan menantang asumsi saya.
- [ ] Saya merevisi diagram atau penilaian berdasarkan bukti.
- [ ] Saya dapat menghubungkan aset, ancaman, kontrol, dan pengujian dengan kalimat yang dapat dipahami pemilik laundry.

#### Lanjut belajar

Jika akses objek masih membingungkan, ulangi [Bab 09](materi/09-identitas.md).
Setelah bukti siap, lanjut ke [Bab 12: pengujian terencana](materi/12-pentest.md).

### Referensi

- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html): pemetaan ancaman.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): pengelolaan risiko dan hasil keamanan.

---

<a id="bab-12"></a>

## Bab 12: Menguji keamanan dengan metode yang dapat dipertanggungjawabkan

Tahap 3 dari 6: Menjaga dan menguji akses

### Tujuan dan prasyarat

Kamu akan menulis ruang lingkup uji, memeriksa satu port localhost, dan membuat laporan.
**Penetration testing** adalah pengujian terencana untuk membuktikan dampak kelemahan dalam ruang lingkup yang disepakati.

Bekalmu adalah [alamat dan port dari Bab 03](materi/03-jaringan.md), [server lokal dari Bab 07](materi/07-web.md), serta [pemetaan ancaman dan prioritas dari Bab 11](materi/11-threat-modeling.md).
Sediakan 2–4 sesi.
Nmap bersifat opsional.
Jalur HTTP dasar memerlukan komputer dengan Python dan browser.
Di HP, kamu bisa menulis ruang lingkup serta rancangan laporan.
Uji hanya `127.0.0.1` milikmu sendiri.

### Konsep

Penguji keamanan Laundry Aman mulai dari pertanyaan, misalnya “dapatkah pelanggan membaca nota pelanggan lain?”
Ia mengumpulkan bukti secukupnya, menjelaskan penyebab, dan membantu pemilik sistem memeriksa perbaikan.
Kita akan membedakan izin uji, pengamatan HTTP, dan pemeriksaan port opsional.
Setelah itu kamu menulis laporan yang memisahkan fakta dari dugaan.

#### Apa yang boleh diuji dan bagaimana mengenalinya?

Pemilik Laundry Aman ingin memeriksa layanan latihan tanpa mengganggu kasir.
**Scope** adalah batas aset, teknik, dan waktu yang disepakati untuk pengujian.

**Reconnaissance** berarti mengenali target dan konteksnya.
Recon pasif membaca informasi yang sudah tersedia.
Recon aktif mengirim permintaan ke sistem.
Keduanya perlu memperhatikan scope dan penggunaan data.

**Rules of engagement**, disingkat RoE, adalah aturan pelaksanaan pengujian.
RoE mencakup pemberi izin, aset, teknik, waktu, batas kecepatan, kontak darurat, dan kondisi berhenti.

Alamat IP privat tidak otomatis berarti kamu berhak mengujinya.
Jaringan kantor, tetangga, dan layanan pihak ketiga tetap mempunyai pemilik.
Bayangkan RoE sebagai kesepakatan pemilik gudang tentang ruangan dan kegiatan yang diizinkan.
Tetap berada dalam batas itu meskipun ruangan lain bisa dimasuki.

#### Urutan kerja apa yang bisa diulang?

Penguji memeriksa apakah server latihan laundry menyajikan folder yang tepat.
Urutannya: sepakati scope, kenali komponen, susun dugaan, lakukan uji terbatas, konfirmasi dampak, lalu laporkan.

Setelah perbaikan, lakukan **retest**, yaitu uji ulang untuk memeriksa apakah masalah masih ada.

**Hipotesis** adalah dugaan yang menghubungkan hasil pengamatan dengan kemungkinan masalah.
“Port 8000 terbuka” adalah observasi.
“Server mungkin menyajikan file di folder yang salah” adalah hipotesis yang memerlukan pemeriksaan tambahan.

#### Apa arti label port pada Nmap?

Untuk memeriksa layanan latihan laundry, kamu dapat memakai **Nmap**, alat pemeriksaan jaringan.
Alat ini melihat keadaan port dari titik pengujian.

`open` berarti ada layanan yang menerima koneksi.

`closed` berarti host merespons tetapi tidak ada layanan yang menerima pada port itu.

`filtered` berarti hambatan jaringan membuat Nmap tidak dapat menentukan keadaan secara pasti.
Tidak satu pun dari tiga label itu sendiri membuktikan kerentanan.
[Penjelasan status port Nmap](https://nmap.org/book/man-port-scanning-basics.html).

Nmap bersifat opsional. Jika belum tersedia, tandai pemeriksaannya `NOT_RUN` dan kerjakan pengamatan HTTP melalui browser.

#### Ringkasan

- Izin dan RoE datang sebelum permintaan uji.
- Observasi berbeda dari hipotesis dan temuan yang terbukti.
- Port terbuka belum membuktikan kerentanan.
- Laporan jujur boleh menyatakan belum ada kelemahan yang terbukti.

#### Cek pemahaman

1. Mengapa alamat privat belum otomatis boleh diuji?
2. Apa beda observasi “port 8000 terbuka” dan hipotesis tentang folder yang salah?
3. Kapan bagian Nmap boleh ditandai `NOT_RUN`?

### Praktik

#### 1. Tulis RoE latihan

Isi scope dengan `127.0.0.1`, port TCP `8000`, dan folder `hasil-belajar/web-demo`.
Pemiliknya kamu sendiri.
Teknik yang diizinkan: satu permintaan HTTP per pemeriksaan dan pemeriksaan koneksi port.
Pengulangan hanya untuk membandingkan keadaan server aktif dan berhenti.
Kondisi berhenti: kamu melihat data yang bukan data latihan, port dimiliki aplikasi lain, atau target berbeda dari loopback.
Jangan menambahkan rentang jaringan rumah untuk memperluas percobaan.

#### 2. Buat layanan lokal

Pilih jalur sesuai perangkatmu.
Buka terminal dari folder tutorial.

**Windows PowerShell**

Jalankan perintah berikut:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/web-demo
Set-Content -LiteralPath hasil-belajar/web-demo/index.txt -Value 'Laundry Aman: server latihan' -Encoding utf8
py -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-demo
```

Server memakai folder demo yang hanya berisi data latihan.
`--bind 127.0.0.1` membatasi pendengar ke loopback.
`--directory` menentukan folder yang disajikan.
Terminal menampilkan pesan layanan pada `127.0.0.1` dan port `8000`.
Biarkan terminal ini terbuka.
Python menjelaskan bahwa `http.server` ditujukan untuk penggunaan sederhana dan tidak direkomendasikan sebagai server produksi.
[Dokumentasi Python](https://docs.python.org/3/library/http.server.html).

**Linux/macOS**

Buat folder dan file tersebut melalui pengelola file, lalu buka terminal di folder tutorial.
Jalankan perintah berikut:

```text
python3 -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-demo
```

#### 3. Periksa aplikasi

Buka `http://127.0.0.1:8000/index.txt` di browser.

**Windows PowerShell**

Alternatif dari terminal kedua:

```powershell
curl.exe -i http://127.0.0.1:8000/index.txt
```

`-i` menampilkan header bersama isi jawaban.

**Linux/macOS**

Pakai `curl` tanpa `.exe`.

Cocokkan status HTTP 200 dan teks `Laundry Aman: server latihan`.
Catat status HTTP dan teks yang diterima.
Jangan menyimpulkan aplikasi aman hanya karena memberi status 200.
Hasil ini membuktikan satu permintaan berhasil.

#### 4. Pemeriksaan Nmap opsional

Jika Nmap sudah tersedia dari sumber resminya, jalankan dari terminal kedua:

```text
nmap -sT -Pn -p 8000 127.0.0.1
```

`-sT` menggunakan koneksi TCP, `-Pn` melewati langkah penemuan host, dan `-p 8000` membatasi pemeriksaan ke satu port.
Latihan ini tidak membutuhkan pemindaian seluruh port atau fitur eksploitasi.
Jika Nmap belum terpasang, selesaikan pemeriksaan browser dan tandai bagian ini `NOT_RUN`.

#### 5. Uji perubahan keadaan

Hentikan server dengan `Ctrl+C` pada terminal pertama.
Buka ulang alamat tadi.
Koneksi seharusnya gagal jika tidak ada proses lain pada port tersebut.
Bila memakai Nmap, ulangi perintah yang sama dan bandingkan.
Simpan waktu, perintah, dan hasil.
Hindari menulis hasil yang hanya kamu perkirakan.

#### 6. Buat laporan satu halaman

Tuliskan tujuan, scope, metode, observasi, batas kesimpulan, dan langkah berikutnya.
Dalam latihan ini, layanan HTTP lokal yang sengaja kamu jalankan adalah hasil observasi, bukan temuan keamanan berkeparahan tinggi.
Laporan yang jujur boleh menyatakan belum ada kerentanan yang terbukti.

### Hasil yang diharapkan

Saat server aktif, browser menampilkan teks latihan dan HTTP berhasil.
Setelah server berhenti, permintaan gagal.
Nmap yang dijalankan dapat menunjukkan perubahan `open` ke `closed`.
Hasil dipengaruhi proses dan konfigurasi setempat.
Kamu punya RoE serta laporan yang memisahkan fakta dari dugaan.

### Jika macet

Pesan “address already in use” berarti port dipakai proses lain.
Jangan mematikan proses yang belum dikenali.
Pilih port latihan lain, misalnya 8765, lalu ubah scope, perintah, dan URL secara konsisten.
Jika browser gagal saat server aktif, periksa alamat bind, nomor port, dan terminal server.
Jangan menonaktifkan firewall seluruh perangkat untuk menyelesaikannya.

### Latihan

Tulis laporan kedua untuk akses lintas pelanggan pada contoh konseptual Bab 09.
Sertakan langkah reproduksi dengan dua akun latihan, bukti minimum, dampak, perbaikan, dan retest.
Jelaskan batas data yang diperlukan untuk membuktikan masalah tanpa mengunduh seluruh database.

Contoh lokal Bab 09 sudah menolak akses lintas pelanggan.
Pisahkan skenario kelemahan yang kamu rancang dari hasil program yang benar-benar kamu amati; jangan mengklaim program itu membocorkan nota.

<details>
<summary>Pembahasan setelah mencoba: batas bukti lintas pelanggan</summary>

Untuk membuktikan kelemahan, satu objek latihan yang terbaca oleh pengguna tanpa izin sudah cukup.
Contohnya, Bob bisa membaca nota Alice meskipun tidak berhak.
Sebaliknya, penolakan Bob adalah bukti kontrol bekerja untuk kasus itu.
Mengunduh seluruh database melebihi kebutuhan bukti dan memperbesar risiko kebocoran.
Catat langkah yang cukup untuk orang lain mengulang hasil yang sama.

</details>

### Bukti kelulusan

- [ ] Saya dapat mengulang hasil dan menjelaskan setiap opsi perintah.
- [ ] Saya dapat menunjukkan bahwa target sesuai scope.
- [ ] Saya dapat membedakan port terbuka dari kelemahan yang terbukti.
- [ ] Pembaca lain bisa memeriksa laporan tanpa menebak konfigurasi saya.

#### Lanjut belajar

Jika loopback dan port masih membingungkan, ulangi [Bab 03](materi/03-jaringan.md).
Setelah bukti siap, lanjut ke [Bab 13: kelemahan web dan API](materi/13-web-api.md).

### Referensi

- [Nmap: status port](https://nmap.org/book/man-port-scanning-basics.html) dan [teknik koneksi TCP](https://nmap.org/book/man-port-scanning-techniques.html).
- [Python http.server](https://docs.python.org/3/library/http.server.html): server latihan lokal.
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/): metode pengujian aplikasi web.

---

<a id="bab-13"></a>

## Bab 13: Menemukan dan memperbaiki kelemahan web dan API

Tahap 3 dari 6: Menjaga dan menguji akses

### Tujuan dan prasyarat

Kamu akan membandingkan dua lab offline Laundry Aman, lalu memilih satu latihan web resmi.
Hasilnya berupa penjelasan penyebab kelemahan, usulan perbaikan, dan daftar pengujian.
Sisihkan 4–8 sesi agar kamu bisa memisahkan tiap percobaan.

Bekalmu adalah [Python dari Bab 06](materi/06-pemrograman.md), [HTTP dan SQL dari Bab 07](materi/07-web.md), serta [encoding dari Bab 08](materi/08-kriptografi.md).
Ulangi [login dan izin pada Bab 09](materi/09-identitas.md), juga [batas pengujian pada Bab 12](materi/12-pentest.md).
Gunakan komputer dengan Python untuk lab lokal. Pakai data buatan dan hanya target latihan yang diizinkan.

### Konsep

Kasir mencari nota, memperbarui alamat, lalu mengunduh salinan untuk pelanggan.
Aplikasi harus membedakan isi permintaan dari perintah yang dijalankannya.
Aplikasi juga perlu memeriksa siapa yang boleh membaca atau mengubah tiap nota.
Kita akan mengikuti kesalahan pada perjalanan data ini, lalu membandingkan dua contoh lokal dan merancang perbaikannya.

#### Masukan mana yang boleh dipakai aplikasi?

Aplikasi Laundry Aman menerima nomor nota, alamat, dan nama file.
Pengembang menentukan cara memperlakukan masukan itu, siapa yang boleh memakainya, serta komponen mana yang boleh menerimanya.

Kredensial dari Bab 09 adalah bukti untuk mengakses layanan, seperti password atau pengenal sesi.
Kita perlu memeriksa bagaimana browser mengirimkannya saat menilai kelemahan web.

**API**, singkatan dari *application programming interface*, adalah kontrak komunikasi antarprogram.
Bab 07 sudah mengenalkannya sebagai cara program saling berkomunikasi, misalnya meminta status nota.

Untuk permintaan status nota, server tetap memeriksa identitas, izin objek, serta tipe dan ukuran data.
Server juga membatasi pemakaian sumber daya, seperti jumlah pekerjaan yang dapat diminta.

##### Cukup kenali dulu

- **Endpoint**: titik tujuan permintaan pada API; pemeriksaan tadi tetap berlaku di sini.
- **JSON**: format teks untuk data terstruktur, misalnya nomor dan status nota; pemakaiannya tidak membuat endpoint kebal terhadap kelemahan.

#### SQL injection: masukan mengubah instruksi pencarian

Kasir mencari nota satu pelanggan, tetapi aplikasi justru mengirim pesanan pelanggan lain.
**SQL injection** terjadi saat aplikasi mencampur masukan dengan instruksi basis data sehingga masukan dapat mengubah arti pencarian.

**Query** berarti permintaan kepada basis data, seperti pencarian status nota pada Bab 07.
Pengembang perlu memisahkan instruksi query dari nilai yang pengguna masukkan.

Bayangkan kasir mengisi kolom nama pada formulir pencarian yang sudah tetap.
**Parameterisasi** mengirim nilai masukan terpisah dari instruksi query.
Basis data lalu memperlakukan masukan sebagai nilai yang dicari. Pengembang juga perlu membatasi hak akses basis data sesuai kebutuhan aplikasi.

#### IDOR/BOLA: nomor nota berubah, izin tidak diperiksa

Alice meminta nomor nota Bob. Aplikasi seharusnya memeriksa izin sebelum mengirim jawabannya.
**IDOR/BOLA** adalah kelemahan pemeriksaan hak terhadap objek yang diminta.
Jika pemeriksaan ini hilang, mengganti nomor nota membuat Alice membaca milik Bob.
Perbaikannya adalah memeriksa pemilik atau izin di server pada setiap permintaan.

#### XSS: catatan pesanan berjalan sebagai kode

Kasir membuka catatan pesanan dari pelanggan. Browser seharusnya menampilkan isinya sebagai data.
**XSS** terjadi saat browser menjalankan masukan pengguna sebagai kode.
Contohnya, aplikasi menampilkan catatan pesanan sebagai HTML aktif sehingga isi catatan dapat mengubah perilaku halaman.

Encoding dari Bab 08 mengubah bentuk penyajian data.
Untuk mencegah XSS, pengembang perlu memakai encoding yang sesuai tempat data ditampilkan.
Aturan untuk teks HTML berbeda dari aturan untuk kode JavaScript.

##### Cukup kenali dulu

- **DOM**: bentuk dokumen halaman yang bisa dibaca dan diubah program di browser; gunakan API DOM yang aman untuk menampilkan data sebagai teks.

#### CSRF: browser menjalankan tindakan yang tidak dimaksud pengguna

Kasir sedang login ketika membuka situs lain. Situs itu memicu permintaan perubahan alamat melalui browser kasir.
**CSRF** terjadi ketika situs lain memicu tindakan dengan kredensial yang browser pengguna kirim secara otomatis.
Browser mengirim permintaan memakai sesi kasir, padahal kasir tidak bermaksud mengubah alamat.

Bayangkan kasir memberi tanda pemeriksaan pada formulir yang ia keluarkan, lalu memeriksa tanda itu saat formulir kembali.
Pada aplikasi, **token anti-CSRF** adalah nilai rahasia yang sulit ditebak dan harus diverifikasi server sesuai sesi pengguna.
Situs lain seharusnya tidak dapat membaca atau menebaknya. Perbandingan formulir hanya menjelaskan tujuan pemeriksaan.

##### Cukup kenali dulu

- **Origin**: asal web berdasarkan skema, host, dan port; kontrol origin sesuai rancangan membantu membatasi permintaan dari asal lain.

#### SSRF: server menghubungi tujuan yang tidak dibatasi

Fitur Laundry Aman mengambil gambar dari alamat yang pengguna kirim. Tujuan yang salah dapat mengarah ke layanan internal.
**SSRF** terjadi ketika server mengakses tujuan jaringan dari masukan yang tidak dibatasi.
Pengembang perlu membatasi tujuan, protokol, serta akses jaringan keluar.

#### Path traversal: nama file membawa pembaca keluar folder

Kasir mengunduh nota. Aplikasi seharusnya mengambil file hanya dari folder nota yang diizinkan.
**Path traversal** terjadi ketika masukan nama file mengarah ke luar direktori yang diizinkan.
Misalnya, fitur unduh nota justru membaca file dari folder lain.
Pengembang dapat memetakan ID nota ke file yang boleh diakses.

Bayangkan berangkat dari ruang depan: masuk gudang, lalu kembali ke ruang depan.
Tujuan akhirnya tetap ruang depan.

**Jalur kanonis** menyatakan lokasi file setelah bagian jalur dan tautan simbolik diselesaikan, termasuk perpindahan ke folder induk.
Pengembang memeriksa apakah lokasi akhir tetap di direktori yang diizinkan dan apakah pengguna berhak membaca nota itu.
Perbandingan ruangan membantu mengikuti jalur; pemeriksaan tetap harus memakai lokasi file yang sebenarnya.

#### Properti apa yang boleh diubah pelanggan?

Pelanggan mengirim alamat baru. Ia juga menyisipkan properti peran administrator yang tidak boleh ia ubah.
Pengembang harus memilih properti yang boleh diubah secara eksplisit.

##### Cukup kenali dulu

- **Mass assignment**: penerimaan terlalu banyak properti masukan sebagai perubahan data, seperti peran administrator pada contoh alamat tadi.

<details>
<summary>Pendalaman opsional: aturan bisnis dan permintaan bersamaan</summary>

Laundry Aman memberi kupon sekali pakai. Pemakaian kedua seharusnya ditolak.
**Business logic flaw** adalah kesalahan penerapan aturan bisnis.
Contohnya, kupon sekali pakai bisa dipakai berulang karena cara aplikasi memperbarui statusnya keliru.

**Atomik** berarti suatu operasi berlaku sebagai satu kesatuan.
Pada contoh, pemeriksaan dan pemakaian kupon tidak dijaga sebagai satu kesatuan.
Perbaikan harus mencegah dua permintaan lolos pemeriksaan dan memakai kupon yang sama.

**Race condition** terjadi ketika hasil bergantung pada urutan pelaksanaan operasi yang waktunya berdekatan.
Dua permintaan kupon yang datang berdekatan dapat memunculkan masalah ini.

Untuk mendalami perbaikan kupon, kenali bekal tambahan berikut:

- **Transaksi basis data**: pengelompokan operasi data menjadi satu kesatuan kerja.
- **Constraint**: aturan yang basis data periksa terhadap data.
- **Pengujian konkurensi**: pemeriksaan perilaku saat beberapa pekerjaan berlangsung bersamaan.

Dua lab lokal di bawah belum mengajarkan seluruh bekal ini.

</details>

#### Ringkasan

- Pisahkan instruksi SQL dari nilai masukan melalui parameterisasi.
- Periksa izin membaca setiap nota di server.
- Sesuaikan perlindungan dengan tempat data dipakai: browser, basis data, file, atau koneksi jaringan.
- Batasi properti yang boleh diubah melalui API.

#### Cek pemahaman

1. Mengapa query berparameter masih membutuhkan pemeriksaan izin terhadap nota?
2. Apa perbedaan jalur data pada XSS dan SSRF?
3. Mengapa server perlu membatasi properti meskipun masukan memakai JSON?

### Praktik

#### 1. Bandingkan query rentan dan query berparameter

Pilih jalur sesuai perangkatmu. Buka terminal pada folder utama tutorial, yaitu folder yang memuat `README.md` dan `labs`.

**Windows PowerShell**

Jalankan perintah berikut:

```powershell
py labs/sql_demo.py
```

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Contoh membuat basis data latihan di memori. Buka sumbernya di editor.
Temukan penggabungan string pada jalur rentan.

Pada jalur aman, cari **placeholder**, yaitu penanda tempat nilai parameter akan dipakai.
Masukan latihan `' OR 1=1 --` dapat mengubah kondisi query yang digabung sebagai teks.
Pada query berparameter, basis data memperlakukannya sebagai nilai yang dicari.

Catat hasil berikut:

| Percobaan | Hasil yang diharapkan |
|---|---|
| Pencarian nama normal | Pesanan pelanggan yang dicari |
| Masukan latihan pada query rentan | Baris Alice dan Bob |
| Masukan sama pada query berparameter | Daftar kosong `[]` |

Hasil terakhir kosong karena tidak ada pelanggan bernama persis seperti masukan latihan.
Menghapus apostrof dapat merusak nama sah dan tidak menggantikan parameterisasi.
[PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) menyediakan penjelasan serta latihan lanjutan.

#### 2. Periksa akses objek

Dari folder utama tutorial, pilih jalur yang sesuai.

**Windows PowerShell**

Jalankan `py labs/access_demo.py`.

**Linux/macOS**

Ganti `py` menjadi `python3` pada perintah langkah ini.

Bandingkan Alice membaca nota 101 dengan Bob membaca nota yang sama.
Alice harus diizinkan, sedangkan Bob ditolak.
Tulis kondisi izin dengan bahasa sehari-hari, lalu tunjuk baris sumber yang menerapkannya.
Tambahkan pengguna belum login dan nomor nota yang tidak ada ke daftar pengujianmu.

#### 3. Tinjau fitur file tanpa mengeksekusi masukan

Bayangkan pengembang menulis fitur: “ambil parameter `filename`, sambungkan ke folder nota, lalu buka hasilnya.”
Tulis dua pemeriksaan yang dibutuhkan:

1. Apakah hasil jalur tetap berada dalam direktori yang diizinkan?
2. Apakah pengguna berhak membaca nota itu?

Pemeriksaan jalur membatasi lokasi file. Otorisasi membatasi siapa yang boleh membaca file tersebut.

#### 4. Lanjutkan ke lab web resmi

Buka [Web Security Academy](https://portswigger.net/web-security). Buat akun gratis bila dibutuhkan untuk menyimpan progres.
Pilih SQL injection atau Access control, lalu lab tingkat Apprentice.
Baca tujuan lab dan buka **instance**, yaitu lingkungan latihan khusus, melalui tombol peluncurnya.
Gunakan hanya domain instance yang diberikan.

Browser cukup untuk beberapa lab awal.
Lab lain memakai Burp Suite Community Edition dengan browser bawaannya.
Untuk satu lab, catat fungsi normal, parameter yang diuji, dugaan kelemahan, perubahan permintaan, hasil, dan perbaikan.

Coba sendiri sebelum membuka solusi resmi.
Setelah selesai, tutup lab dan tulis ulang penyebab masalah tanpa melihat panduan solusinya.
Gunakan penjelasan penyebab untuk menilai pemahamanmu; hafalan string saja tidak cukup untuk menguji aplikasi baru.

#### 5. Buat kasus regresi

**Kasus regresi** adalah pengujian untuk memeriksa apakah masalah kembali muncul setelah perubahan.
Tulis perilaku yang diharapkan, lalu sampaikan kepada pengembang sebelum menilai hasil test.

| Bagian | Kasus yang diperiksa |
|---|---|
| SQL | Nama biasa, nama dengan apostrof, masukan latihan, nilai kosong |
| Otorisasi | Pemilik, pengguna lain, tanpa login, objek yang tidak ada |

### Hasil yang diharapkan

Contoh SQL rentan mengembalikan baris Alice dan Bob untuk masukan latihan.
Versi aman mengembalikan `[]`.
Contoh akses mengizinkan pemilik dan menolak pengguna lain.

Kamu mempunyai satu laporan lab resmi atau catatan `NOT_RUN` jika belum mengerjakannya.
Simpan juga daftar kasus regresi dengan hasil yang diharapkan.

### Jika macet

**Payload** adalah masukan uji yang dibuat untuk memicu perilaku tertentu.
Jika payload tidak berpengaruh pada lab resmi, periksa konteks query.
Query numerik dan query string mempunyai bentuk berbeda. Ulangi materi SQL sebelum mencoba rangkaian payload acak.

**Proxy** adalah perantara yang dapat membantu memeriksa permintaan browser saat latihan.
Jika proxy tidak menangkap permintaan, gunakan browser bawaan alat dan periksa ruang lingkup pengujian.

**Sertifikat intersepsi** memungkinkan alat memeriksa isi komunikasi HTTPS yang melewatinya ketika browser mempercayai sertifikat tersebut.
Jangan memasang sertifikat intersepsi pada browser harian tanpa memahami pengaruhnya. Gunakan browser khusus latihan untuk memisahkan aktivitas pribadi.

### Latihan

Pilih satu topik tambahan, misalnya XSS atau CSRF.
Tulis perjalanan data dari masukan sampai tindakan browser.

- Untuk XSS, jelaskan mengapa encoding HTML tidak otomatis cocok untuk konteks JavaScript.
- Untuk CSRF, jelaskan kapan browser mengirim kredensial secara otomatis.

Buat rancangan perbaikan dan minimal satu **kasus uji negatif**, yaitu percobaan yang seharusnya ditolak atau dibatasi.
Gunakan penjelasan Konsep untuk menentukan kontrol yang sesuai penyebabnya.

### Bukti kelulusan

- [ ] Saya dapat menjelaskan empat keluarga kelemahan.
- [ ] Saya dapat mendemonstrasikan dua lab lokal.
- [ ] Saya dapat mengusulkan kontrol yang sesuai penyebab masalah.
- [ ] Untuk tahap lanjutan, saya mengerjakan lab yang belum pernah saya baca solusinya.
- [ ] Untuk tahap lanjutan, saya membuat laporan yang dapat direproduksi orang lain.

#### Lanjut belajar

Jika izin objek masih membingungkan, ulangi [Bab 09](materi/09-identitas.md).
Kembali ke [Bab 12](materi/12-pentest.md) untuk memeriksa batas pengujian dan bentuk laporan.
Setelah bukti siap, lanjut ke [Bab 14: lalu lintas jaringan](materi/14-jaringan.md).

### Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security): latihan web gratis.
- [PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) dan [access control](https://portswigger.net/web-security/access-control).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/): daftar pemeriksaan untuk memperluas cakupan.

---

<a id="bab-14"></a>

## Bab 14: Membaca lalu lintas dan memisahkan jaringan

Tahap 3 dari 6: Menjaga dan menguji akses

### Tujuan dan prasyarat

Kamu akan membaca percakapan jaringan latihan dan merancang segmentasi Laundry Aman.
Hasilnya berupa tabel izin komunikasi antarkelompok perangkat dan, bila alat tersedia, satu rekaman paket pada loopback.

Bekalmu adalah [alamat dan port dari Bab 03](materi/03-jaringan.md) serta [HTTP dari Bab 07](materi/07-web.md).
Ulangi juga [TLS dari Bab 08](materi/08-kriptografi.md), [akses dari Bab 09](materi/09-identitas.md), dan [server loopback dari Bab 12](materi/12-pentest.md).

Siapkan 3–5 sesi.
Wireshark opsional untuk praktik paket.
Rancangan jaringan dapat dikerjakan di kertas atau HP tanpa memasang alat.
Gunakan komputer untuk merekam paket dengan Wireshark.
Jangan merekam traffic kantor, Wi-Fi umum, atau komunikasi keluarga.

### Konsep

Laundry Aman ingin memisahkan akses kasir, tamu, dan printer sesuai tugasnya.
Kita akan menentukan perangkat mana yang boleh saling menghubungi.
Kita juga akan merekam satu percakapan latihan di komputer sendiri.
Setelah itu kamu menghubungkan hasil pengamatan dengan aturan pemisahan jaringan toko.

#### Apa yang terlihat saat kita merekam paket?

Kasir membuka nota latihan, lalu kamu ingin memeriksa perjalanan permintaannya.
**Packet capture**, atau capture, adalah rekaman paket yang terlihat pada titik pengamatan.

Lalu lintas paket ini juga disebut traffic.
Wireshark membantu membaca alamat, protokol, waktu, dan sebagian isi.
Rekaman tidak selalu melihat seluruh komunikasi.

Pemilihan antarmuka jaringan, lokasi alat perekam, enkripsi, dan kehilangan paket memengaruhi kesimpulan.
Antarmuka atau interface adalah sambungan jaringan yang kamu kenali pada Bab 03.

Traffic TLS biasanya menyembunyikan isi aplikasi, meski pengamat masih dapat melihat sebagian metadata, seperti alamat dan waktu komunikasi.
Capture tanpa paket HTTP tidak membuktikan bahwa pengguna tidak mengakses situs.
Bayangkan kamera di satu lorong toko: lorong lain tidak terekam.

#### Filter mana yang membatasi rekaman, mana yang hanya tampilan?

Kamu hanya ingin merekam percakapan latihan kasir, lalu memilih paket tertentu untuk dibaca.
**Capture filter** membatasi paket yang direkam.

**Display filter** memilih paket yang ditampilkan dari rekaman yang sudah ada.

Jika kamu salah memilih capture filter, paket yang dibuang tidak bisa dimunculkan dengan mengganti display filter.

Mulailah merekam traffic lokal yang sempit dan diketahui, kemudian gunakan display filter untuk membacanya.

Bayangkan capture filter seperti memutuskan apa yang disimpan di kamera.
Display filter seperti memutar ulang potongan yang sudah tersimpan.

#### Bagaimana jaringan toko dipisah menurut kebutuhan?

Tamu laundry perlu internet, tetapi tidak perlu membuka komputer kasir.
**Segmentasi** memisahkan kelompok perangkat dan mengendalikan komunikasi antarkelompok.
Laundry dapat memisahkan jaringan tamu, komputer kasir, dan perangkat seperti printer atau kamera.
Bayangkan ruang toko dengan pintu penghubung: tiap pintu hanya mengizinkan perjalanan yang diperlukan.
Di jaringan, aturan komunikasi harus diterapkan dan diuji; gambar ruangan saja belum membuktikan pemisahan.

**VLAN** mengelompokkan perangkat ke jaringan lokal yang terpisah secara logis.

Keamanan antarkelompok tetap memerlukan aturan penerusan antarjaringan, atau routing, dan firewall.
Mengubah nama Wi-Fi saja tidak menjamin pemisahan.

Pemilik yang mengakses toko dari jauh dapat memakai VPN sebagai kanal terlindungi menuju jaringan atau layanan.
Akun VPN tetap memerlukan pembatasan akses.
“Sudah masuk VPN” tidak semestinya memberi izin membaca seluruh database.

##### Cukup kenali dulu

- **DMZ**: segmen untuk layanan yang perlu berhubungan dengan jaringan kurang tepercaya.
- **Jump server**: titik administrasi yang terkontrol untuk mengakses sistem lain.

#### Apa yang perlu dijaga pada Wi-Fi toko?

Kasir dan tamu memakai titik akses Wi-Fi, atau access point, untuk terhubung ke jaringan toko.
Lindungi akses pengaturannya dan pilih protokol keamanan yang masih didukung perangkat.

**Firmware** adalah software yang menjalankan fungsi perangkat jaringan tersebut.
Perbarui sesuai petunjuk pembuatnya.

##### Cukup kenali dulu

- **WPA3**: protokol keamanan Wi-Fi dengan peningkatan perlindungan dibanding generasi lama; periksa kualitas konfigurasi dan kecocokan perangkat.
- **WEP**: protokol lama yang sudah tidak layak dipakai untuk melindungi jaringan.
- **WPS**: jalur pengaturan cepat pada access point; nilai ulang atau nonaktifkan bila tidak perlu.
- **Deauthentication**: pemutusan sambungan Wi-Fi perangkat; pengujiannya mencoba memutus sambungan tersebut.
- **Evil twin**: peniruan titik akses agar perangkat terhubung ke tiruannya.

Pengujian pemutusan sambungan atau peniruan access point dapat mengganggu orang lain.
Bab ini hanya memakai rancangan dan pengamatan milik sendiri; jangan menjalankan pengujian tersebut pada jaringan orang lain.

#### Ringkasan

- Capture merekam; display filter hanya memilih tampilan dari yang sudah terekam.
- Segmentasi mengikuti kebutuhan bisnis, lalu dicek dengan aturan firewall.
- Enkripsi melindungi isi di perjalanan; otorisasi tetap memeriksa hak di server.
- Batasi pengamatan pada traffic latihan milik sendiri.

#### Cek pemahaman

1. Mengapa mengganti display filter tidak mengembalikan paket yang dibuang capture filter?
2. Mengapa mengganti nama Wi-Fi belum cukup sebagai segmentasi?
3. Mengapa HTTPS tidak memperbaiki aplikasi yang mengirim nota Bob kepada Alice?

### Praktik

#### 1. Gambarkan kebutuhan bisnis

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

#### 2. Siapkan traffic latihan

Jalankan server loopback melalui Praktik 2 [Bab 12](materi/12-pentest.md), yang menyajikan `index.txt`.
Jika Wireshark atau dukungan perekamannya belum tersedia, kerjakan rancangan dan tandai capture `NOT_RUN`.
Bukti membaca alamat serta port dari rekaman belum terpenuhi sampai kamu menjalankan bagian ini.
Jangan merekam interface kantor, Wi-Fi umum, atau komunikasi anggota keluarga.
Buka Wireshark yang sudah terpasang dan pilih interface loopback; namanya bergantung OS.

Pilih jalur sesuai perangkatmu.

**Linux**

Nama interface biasanya `lo`.

**macOS**

Nama interface biasanya `lo0`.

**Windows**

Gunakan interface loopback yang tersedia melalui dukungan capture setempat.

#### 3. Mulai capture dan buat satu permintaan

Di Wireshark, mulai capture pada antarmuka loopback yang sudah kamu pilih.
Setelah capture berjalan, buka alamat lokal `http://127.0.0.1:8000/index.txt` di browser.
Pastikan teks latihan muncul, lalu hentikan capture di Wireshark.
Masukkan display filter berikut pada kotak filter Wireshark:

```text
tcp.port == 8000
```

Filter ini menampilkan paket dengan salah satu port TCP bernilai 8000.
Pilih paket, lalu buka bagian Internet Protocol untuk membaca alamat IP.
Buka Transmission Control Protocol untuk membaca port TCP.
Catat alamat sumber, tujuan, dan port.
Port sementara pada sisi browser boleh berbeda pada tiap percobaan.
[Dokumentasi display filter Wireshark](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html).

#### 4. Ikuti satu percakapan

Pilih paket aliran tersebut dan gunakan menu **Follow → TCP Stream** jika tersedia.
Cari permintaan terhadap `index.txt` dan responsnya.
Server latihan menggunakan HTTP tanpa TLS, sehingga teks latihan dapat terlihat.
Tutup tampilan stream, bersihkan filter tambahan jika ingin melihat semua paket lagi, lalu simpan capture ke folder hasil belajar pribadi.

#### 5. Hubungkan observasi dengan pertahanan

Tulis bahwa enkripsi melindungi isi selama perjalanan, sementara otorisasi membatasi siapa yang boleh menerima data dari server.
HTTPS tidak memperbaiki aplikasi yang mengirim nota Bob kepada Alice.
Untuk jaringan laundry, jelaskan di mana sensor perlu ditempatkan agar dapat melihat traffic antarsegmen.

### Hasil yang diharapkan

Kamu memiliki matriks komunikasi dan, bila menjalankan Wireshark, satu capture traffic latihan.
Kamu dapat menunjukkan koneksi TCP serta permintaan HTTP yang kamu buat.
Tidak perlu melihat DNS: alamat IP loopback tidak memerlukan pencarian nama untuk permintaan tersebut.

### Jika macet

Jika tidak ada paket, periksa interface dan pastikan kamu membuat permintaan setelah capture dimulai.
Browser mungkin memakai cache; muat ulang atau gunakan `curl.exe` pada Windows.
Jika Wireshark tidak mengenali HTTP di port latihan, lihat TCP Stream tanpa memaksakan kesimpulan.
Hindari mengubah pengaturan driver atau firewall secara acak.
Tandai capture `NOT_RUN` jika dukungan setempat belum siap.

### Latihan

Tambahkan mesin pembayaran ke diagram.
Tentukan layanan minimum yang dibutuhkan dan siapa yang boleh mengadministrasinya.
Kasus uji negatif adalah percobaan yang seharusnya ditolak atau dibatasi.
Buat dua kasus pengujian negatif: tamu mencoba mencapai kasir dan kamera mencoba membuka koneksi baru ke kasir.
Tulis hasil yang diharapkan tanpa menjalankan pengujian pada jaringan nyata.

<details>
<summary>Pembahasan setelah mencoba: kasus uji negatif</summary>

Tamu ke kasir seharusnya ditolak oleh aturan antarzona.
Kamera yang memulai koneksi baru ke kasir juga seharusnya ditolak.
Keduanya adalah rancangan yang dicek di atas kertas; belum membuktikan pengaturan router sungguhan.

</details>

### Bukti kelulusan

- [ ] Saya dapat menjelaskan perbedaan capture dan display filter.
- [ ] Saya dapat membaca alamat serta port satu koneksi.
- [ ] Saya dapat menyusun aturan jaringan dari kebutuhan bisnis.
- [ ] Saya menyatakan batas pengamatan agar laporan tidak mengklaim melihat data yang terenkripsi atau tidak direkam.

#### Lanjut belajar

Jika HTTP lokal masih membingungkan, ulangi [Bab 12](materi/12-pentest.md).
Setelah bukti siap, lanjut ke [Bab 15: membaca log dan menyusun deteksi](materi/15-deteksi.md).

### Referensi

- [Wireshark User's Guide: bekerja dengan paket](https://www.wireshark.org/docs/wsug_html_chunked/ChapterWork.html).
- [Wireshark: ekspresi display filter](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html).
- [Canadian Centre for Cyber Security: Wi-Fi security](https://www.cyber.gc.ca/en/guidance/wi-fi-security-itsp80002/): pemisahan jaringan, protokol Wi-Fi, dan pengaturan WPS.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): hasil pengelolaan dan perlindungan keamanan.

---

<a id="bab-15"></a>

## Bab 15: Membaca log dan menyusun deteksi

Tahap 4 dari 6: Membaca bukti dan menangani kejadian

### Tujuan dan prasyarat

Kamu akan menghitung catatan login Laundry Aman, membandingkan hasil dengan program, lalu membuat aturan peringatan.
Hasil akhirnya adalah kartu aturan dan catatan pemeriksaan awal. Sisihkan 3–5 sesi.

Bekalmu adalah [alamat jaringan dari Bab 03](materi/03-jaringan.md), [log dan properti dari Bab 05](materi/05-windows.md), serta [Python dari Bab 06](materi/06-pemrograman.md).
Ulangi [login dan sesi dari Bab 09](materi/09-identitas.md).
Gunakan komputer dengan Python untuk menjalankan program. Dari HP, kamu bisa membaca data dan menghitungnya secara manual.
Semua data latihan buatan; alamat di dalamnya tidak perlu dihubungi.

### Konsep

Kasir Laundry Aman gagal masuk sekali, lalu berhasil setelah mengetik ulang.
Pada saat lain, satu sumber mencoba masuk ke beberapa akun.
Kita akan membaca catatannya dan menentukan aktivitas yang perlu diperiksa.
Setelah itu, kita menyusun peringatan dan menilai seberapa baik aturan menangkap kejadian yang dicari.

#### Dari catatan login ke keputusan pemeriksaan

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

#### Menjaga catatan agar bisa diperiksa

Pengelola Laundry Aman ingin mencocokkan login dengan perubahan akun.
**Korelasi** berarti menghubungkan kejadian yang berkaitan, seperti mencocokkan catatan masuk pegawai dengan transaksi sesudahnya.
Pengenal sesi membantu menghubungkan catatan, tetapi tetap memerlukan konteks.

Catat waktu beserta zona waktu, sumber, identitas, jenis kejadian, hasil, dan pengenal untuk menghubungkan kejadian.
Tentukan masa simpan serta hak akses. Pelaku dapat mencoba mengubah log; isinya juga dapat memuat data sensitif.

Jangan menaruh password, token sesi lengkap, atau isi pribadi pelanggan di log.

Pengelola ingin mendapat peringatan sebelum mengotomatisasi tindakan.
Menonaktifkan seluruh akun karena beberapa login gagal dapat mengganggu usaha.
Mulai dari peringatan yang bisa diperiksa, lalu tentukan tindakan yang aman untuk diotomatisasi.

##### Cukup kenali dulu

- **SOC**, *security operations center*: tim yang memantau, menilai, dan merespons aktivitas keamanan; bab ini melatih pekerjaan awalnya.
- **SIEM**, *security information and event management*: sistem yang mengumpulkan log serta membantu pencarian dan korelasi.
- **SOAR**, *security orchestration, automation and response*: sistem yang membantu menjalankan alur penanganan, dengan kontrol pada tindakan otomatis.

#### Menilai peringatan yang tepat dan yang luput

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

##### Cukup kenali dulu

- **True negative (TN)**: aktivitas sah yang tidak memicu peringatan, seperti laporan kegiatan biasa yang memang tidak perlu ditandai.

#### Ringkasan

- Bedakan kejadian, peringatan, dan keputusan bahwa penanganan keamanan diperlukan.
- Simpan konteks log dan lindungi isinya agar pemeriksaan bisa dipertanggungjawabkan.
- Precision menilai ketepatan peringatan; recall menilai kejadian berbahaya yang tertangkap.
- Bandingkan hitungan program dengan data sebelum mengambil keputusan.

#### Cek pemahaman

1. Mengapa satu login gagal belum cukup untuk menetapkan insiden?
2. Apa yang perlu diketahui sebelum menyebut suatu peringatan false positive?
3. Mengapa precision tinggi masih dapat disertai kejadian berbahaya yang luput?

### Praktik

#### 1. Baca data sebelum menjalankan alat

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

#### 2. Jalankan peringkas offline

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

#### 3. Tulis aturan deteksi dalam kalimat

Di catatan latihan, tulis aturan berikut:
“Buat alert jika satu sumber mencatat setidaknya tiga login gagal pada tiga akun berbeda dalam lima menit.”

Tentukan field yang dibutuhkan, cara menangani waktu, dan perilaku saat log terlambat.
Peringkas belum menerapkan aturan ini. Periksa kumpulan data secara manual, atau jadikan implementasinya tugas lanjutan.

#### 4. Lakukan triage

Di catatan yang sama, periksa sumber dengan tiga kegagalan. Tulis pertanyaan berikut:

1. Apakah sumber milik alat pengujian yang sah?
2. Apakah operator mengenali aktivitasnya?
3. Apakah ada perubahan akun setelah login?

**Password spraying** adalah pola mencoba sedikit tebakan password pada banyak akun, seperti mencoba satu kunci pada beberapa pintu.
Pola beberapa akun dengan sedikit tebakan per akun cocok dengan dugaan ini.
Log tidak mencatat password yang dicoba, sehingga belum membuktikan teknik tersebut.

#### 5. Buat kartu aturan

Di catatan latihan, isi nama aturan, tujuan, log yang dibutuhkan, kondisi, kemungkinan false positive, langkah pemeriksaan, pemilik, serta tanggal peninjauan.
Tambahkan contoh aktivitas sah yang memicu aturan, misalnya pelatihan pegawai dari satu jaringan bersama.

**Fixture** adalah data latihan tetap yang dipakai untuk memeriksa hasil, seperti lembar contoh yang menjadi pembanding.
Buat salinan sebelum menambahkan kasus baru. Pertahankan fixture asli sebagai pembanding hasil, bukan sebagai tempat menambah percobaan.

### Hasil yang diharapkan

Hitungan manual cocok dengan program: tujuh kejadian, empat gagal, dan tiga berhasil.
Kamu memilih sumber dengan tiga kegagalan untuk diperiksa serta menulis alternatif penjelasan yang masuk akal.
Kartu aturan menyebut kebutuhan bukti tambahan. Kegagalan login saja belum membuktikan pengambilalihan akses.

### Jika macet

Pesan `JSON tidak valid` menunjuk baris yang perlu diperiksa. Cocokkan kutip ganda dan susunan tanda dengan contoh.
Program juga menolak field wajib yang kosong atau nama event yang tidak dikenal.

Jangan menghapus baris bermasalah agar angka terlihat rapi.
Simpan bukti dan perbaiki sumber atau program pembaca secara terkontrol.

### Latihan

1. Hitung precision dan recall untuk TP=12, FP=8, FN=3 memakai rumus dalam Konsep.
2. Pada salinan data, tambahkan skenario lima kegagalan dari pegawai yang baru mengganti password.
3. Tulis informasi tambahan untuk membedakannya dari serangan tanpa membaca password pegawai tersebut.

<details>
<summary>Pembahasan setelah mencoba: ketepatan dan jangkauan aturan</summary>

Precision = 12/(12+8) = 60%. Recall = 12/(12+3) = 80%.
Pembagi pertama menghitung peringatan; pembagi kedua menghitung kejadian berbahaya pada kumpulan pengujian.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan hasil program, hitungan manual, kartu aturan, dan catatan triage.
- [ ] Saya dapat menjelaskan satu false positive dan satu potensi false negative.
- [ ] Saya dapat menyebut log tambahan yang diperlukan untuk memperkuat kesimpulan.

#### Lanjut belajar

Kembali ke [Bab 14](materi/14-jaringan.md) untuk mengulang pengamatan jaringan.
Jika hitungan belum cocok, baca ulang tujuh baris data sebelum menjalankan peringkas lagi.
Setelah bukti siap, lanjut ke [Bab 16: respons insiden](materi/16-respons-insiden.md) untuk memilih tindakan berdasarkan bukti.

### Referensi

- [MITRE ATT&CK](https://attack.mitre.org/): pengetahuan perilaku penyerang untuk menyusun hipotesis deteksi.
- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): hubungan deteksi dan respons dengan pengelolaan risiko.

---

<a id="bab-16"></a>

## Bab 16: Menangani insiden dan berburu ancaman

Tahap 4 dari 6: Membaca bukti dan menangani kejadian

### Tujuan dan prasyarat

Kamu akan menyusun urutan kejadian, memilih tindakan, dan merancang syarat pemulihan Laundry Aman.
Praktik memakai **tabletop**, yaitu simulasi meja: kamu membaca kejadian dan mencatat keputusan tanpa menyerang atau mematikan sistem.
Sisihkan 3–5 sesi dan siapkan hasil [Bab 15](materi/15-deteksi.md), termasuk aturan peringatan serta batas kesimpulan log.

Ulangi [pemulihan dan pemeriksaan cadangan pada Bab 10](materi/10-hardening.md).
Kamu bisa mengikuti simulasi dari HP atau komputer dengan editor, atau memakai kertas.
Gunakan hanya cerita dan data buatan di bab ini. Semua keputusan menjadi catatan latihan, bukan perubahan pada layanan nyata.

### Konsep

Laundry Aman menemukan login operator setelah beberapa kegagalan pada akun berbeda.
Tim perlu memeriksa cakupannya sambil menjaga transaksi kasir tetap berjalan.
Kita akan membedakan tindakan membatasi kerugian, menghilangkan penyebab, dan memulihkan layanan.
Setiap keputusan harus menyebut alasan, bukti, serta orang yang berwenang.
Setelah itu, kita mencari aktivitas lain yang mungkin berkaitan.

#### Menentukan tindakan saat akun dicurigai

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

##### Cukup kenali dulu

- **Lessons learned**: pelajaran dari penanganan untuk memperbaiki persiapan dan tindakan berikutnya.
- **CSF 2.0**: kerangka NIST untuk mengelola risiko keamanan siber; respons insiden menjadi bagian pengelolaan risiko tersebut.

NIST SP 800-61 Rev. 3 terbit April 2025 dan menggantikan Rev. 2.
Dokumen ini menempatkan respons insiden dalam pengelolaan risiko berbasis CSF 2.0.
Istilah kerja latihan di atas membantu membedakan tindakan; sesuaikan penerapannya dengan organisasi.
[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) menjelaskan hubungan tersebut.

#### Menulis panduan yang bisa diikuti petugas

Pemilik Laundry Aman ingin menahan ekspor sementara, tetapi menjaga transaksi kasir tetap berjalan.
Petugas memerlukan panduan yang menyebut siapa boleh menyetujui perubahan berdampak besar.

**Runbook** adalah panduan tindakan yang dapat diikuti petugas, seperti lembar prosedur toko untuk menangani kunci hilang.
Isinya mencakup pemicu, prasyarat, keputusan, tindakan, bukti, dan eskalasi.

**Eskalasi** berarti meneruskan masalah kepada penanggung jawab yang mempunyai kewenangan atau keahlian yang diperlukan.
Petugas mencatat keputusan pembatasan ekspor beserta alasan dan waktu tinjau kembali.

#### Mencari aktivitas lain dengan pertanyaan yang jelas

Pengelola Laundry Aman ingin tahu apakah akun operator dipakai untuk kegiatan lain setelah login.
**Threat hunting** berarti pencarian terarah berdasarkan hipotesis, termasuk ketika belum ada alert, seperti menelusuri buku transaksi dengan satu pertanyaan tertentu.

Contoh hipotesisnya: “Jika akun operator disalahgunakan, mungkin terdapat ekspor massal setelah login tidak biasa.”
Pilih sumber data, rentang waktu, cara pencarian, serta bukti yang mendukung atau melemahkan hipotesis.
Tanpa pertanyaan, pencarian mudah berlangsung tanpa akhir.

**Timeline** adalah urutan kejadian menurut waktu, seperti jadwal kegiatan toko yang disusun kembali dari catatan.
Kita memakainya untuk menempatkan bukti pencarian pada urutan yang bisa diperiksa.

#### Ringkasan

- Containment membatasi kerugian, eradication menangani penyebab, dan recovery memulihkan layanan dengan pemeriksaan.
- Catat alasan tindakan, bukti, pihak yang menyetujui, dan waktu peninjauan.
- Pencarian terarah membutuhkan hipotesis dan batas data.
- Bukti tambahan dapat mengubah cakupan sehingga tim perlu mengulang penilaian.

#### Cek pemahaman

1. Mengapa mengganti password saja dapat meninggalkan akses aktif?
2. Apa yang membedakan containment dari eradication pada kasus operator?
3. Mengapa hunting memerlukan rentang waktu dan bukti yang bisa melemahkan hipotesis?

### Praktik

#### 1. Tentukan peran

Di catatan latihan, tulis pembagian tugas berikut. Kamu boleh memainkan semua peran, tetapi pisahkan keputusan menurut perannya.

| Peran | Tanggung jawab |
|---|---|
| Analis | Memeriksa bukti |
| Pengelola aplikasi | Menjalankan perubahan |
| Pemilik usaha | Menyetujui gangguan layanan |
| Penanggung jawab komunikasi | Menyampaikan informasi |

Untuk insiden nyata, libatkan pihak hukum atau privasi yang berwenang sesuai kewajiban organisasi.
Latihan ini tidak menetapkan tenggat hukum.

#### 2. Mulai dari log Bab 15

Buka `labs/data/auth.jsonl` di editor dan cari pukul 08.02.30 UTC.
Operator berhasil login dari sumber yang sebelumnya gagal pada beberapa akun. Catat sebagai fakta dalam timeline.

Pada kolom terpisah, tulis dugaan: “akun operator mungkin disalahgunakan”.
Jangan menyatakan Alice atau Bob juga berhasil diambil alih; log tidak menunjukkan itu.

#### 3. Tambahkan bukti sintetis berikut

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

#### 4. Pilih tindakan dan alasan

Di catatan keputusan, bandingkan pencabutan sesi operator, pembatasan ekspor, dan penghentian seluruh aplikasi.
Nilai dampak masing-masing terhadap bukti, risiko, dan transaksi laundry.
Untuk simulasi ini, pilih pencabutan sesi operator serta pembatasan ekspor. Tulis siapa yang menyetujuinya.

Pertahankan salinan log dan catat tindakan sebelum perubahan berikutnya.
Jangan menghapus file atau me-reboot perangkat secara otomatis.
Bukti volatil, yaitu bukti yang mudah hilang saat keadaan perangkat berubah, dapat hilang karena tindakan tersebut.

#### 5. Rancang pemulihan

Di catatan pemulihan, tulis syarat yang harus diperiksa:

- Jalur masuk sudah dipahami atau risiko sisa disetujui.
- Kredensial dan sesi terdampak sudah ditangani.
- Izin akun sudah diperbaiki dan log berjalan.
- Pemilik aplikasi menerima hasil pengujian.

Uji rancangan pemulihan dalam tabletop memakai fungsi sah kasir dan satu kasus akses terlarang.
Catat keputusan untuk kedua kasus, lalu tentukan masa pemantauan tambahan serta orang yang meninjau hasilnya.
Hasilnya adalah pengujian rancangan dalam simulasi; kamu belum membuktikan layanan nyata telah pulih.

#### 6. Lakukan satu hunt

Di tabel latihan, cari akses selain ekspor setelah login. Kamu akan menemukan perubahan peran yang ditolak pada 08.05 UTC.
Tulis kesimpulan: ada percobaan tindakan tersebut, dan kontrol menolaknya pada kejadian yang tercatat.

Kamu belum mengetahui permintaan lain di luar jangkauan data.
Susun permintaan log tambahan dengan rentang waktu dan field yang diperlukan.

### Hasil yang diharapkan

Kamu mempunyai timeline, daftar fakta dan hipotesis, keputusan containment, serta kriteria pemulihan.
Semua tindakan tetap berupa simulasi. Kamu dapat menjelaskan alasan memilih pencabutan sesi serta pembatasan ekspor sambil menjaga transaksi kasir.
Menutup seluruh usaha memerlukan pertimbangan dampak dan kewenangan; setiap alert tidak otomatis memerlukan tindakan itu.

### Jika macet

| Yang menghambat | Pemeriksaan atau langkah aman |
|---|---|
| Bukti bertentangan | Catat dua kemungkinan dan cari sumber pembanding; jangan memilih cerita paling dramatis |
| Waktu tidak cocok | Periksa UTC, zona waktu lokal, dan kesesuaian jam antarsumber |
| Kewenangan tidak cukup | Eskalasi kepada pemilik yang tercatat dalam runbook |

### Latihan

1. Buat runbook satu halaman untuk akun pegawai yang diduga bocor.
2. Tambahkan titik berhenti bila alat menunjukkan akun pelanggan lain ikut terdampak.
3. Tulis pemberitahuan internal tiga kalimat: kejadian yang diketahui, dampak yang sudah dipastikan, dan waktu pembaruan berikutnya.

Hindari menyebut identitas pelaku tanpa bukti. Periksa apakah pemberitahuanmu membedakan fakta dari dugaan pada timeline.

### Bukti kelulusan

- [ ] Orang lain dapat menjalankan tabletop dari runbook saya dan memahami siapa mengambil keputusan.
- [ ] Saya dapat membedakan containment, eradication, dan recovery.
- [ ] Saya mempertahankan bukti dan menyatakan ketidakpastian tanpa menghentikan tindakan yang sudah beralasan.

#### Lanjut belajar

Kembali ke [Bab 15](materi/15-deteksi.md) jika fakta login masih tercampur dengan dugaan.
Ulangi simulasi dengan menandai sumber setiap klaim.
Setelah bukti siap, lanjut ke [Bab 17: menjaga bukti](materi/17-forensik.md) untuk mencatat asal data dan memeriksa salinannya.

### Referensi

- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): pedoman respons insiden yang diperiksa untuk tutorial ini.
- [MITRE ATT&CK](https://attack.mitre.org/): sumber hipotesis perilaku, bukan alat penentuan identitas pelaku.

---

<a id="bab-17"></a>

## Bab 17: Menjaga bukti dan menyusun kronologi

Tahap 4 dari 6: Membaca bukti dan menangani kejadian

### Tujuan dan prasyarat

Kamu akan membuat salinan log Laundry Aman, memeriksa kesamaan isinya, lalu menyusun urutan kejadian yang bisa ditelusuri.
Sisihkan 3–5 sesi. Bekalmu adalah [file dari Bab 02](materi/02-komputer.md), [hash dari Bab 08](materi/08-kriptografi.md), serta [log dari Bab 15](materi/15-deteksi.md).
Siapkan juga [catatan simulasi Bab 16](materi/16-respons-insiden.md).

Gunakan komputer dengan PowerShell atau Python untuk menyalin dan menghitung hash file sintetis.
Dari HP, kamu bisa membaca kronologi, tetapi pemeriksaan file tetap memerlukan komputer.
Pemeriksaan disk atau perangkat nyata memerlukan kewenangan serta keahlian tambahan. Latihan ini hanya memeriksa satu file buatan.

### Konsep

Pengelola Laundry Aman ingin mengetahui urutan login yang tercatat.
Kita perlu menyimpan asal catatan sebelum memeriksanya.
Kita akan memisahkan file sumber dari file untuk analisis, lalu membandingkan isinya.
Setelah itu, kita menyusun kejadian menurut waktu dan menuliskan batas kesimpulannya.
Orang lain harus bisa mengikuti asal setiap klaim.

#### Memisahkan sumber, salinan bukti, dan salinan kerja

Pengelola Laundry Aman menyerahkan log untuk diperiksa.
**Forensik digital** memakai metode yang dapat dijelaskan untuk memperoleh, memeriksa, dan menafsirkan bukti digital.
Bayangkan memeriksa nota toko: simpan asalnya, catat cara memperoleh salinannya, lalu jelaskan dasar setiap kesimpulan.

**Sumber asli** adalah data tempat kita mengambil bukti, seperti nota yang pertama diterima.
Dalam latihan, sumbernya adalah file log sintetis yang sudah disediakan.

**Salinan bukti** adalah salinan yang kita pertahankan sebagai acuan, seperti fotokopi nota yang disimpan tanpa coretan.
Catat cara memperoleh data, alat yang dipakai, waktu, serta langkah penanganannya.

Pada nota latihan, tandai sumber dan salinan yang akan disimpan. Di mana kamu akan menulis hasil pemeriksaan tanpa mengubah keduanya?

**Salinan kerja** adalah salinan untuk analisis, seperti fotokopi lain untuk diberi catatan.
File dapat berubah saat dibuka, dipindah, atau diproses oleh alat. Karena itu, gunakan salinan kerja untuk analisis.

Hash dari Bab 08 membantu memeriksa perubahan isi, seperti pembanding untuk memastikan isi salinan tetap sama.
Hash tidak membuktikan isi benar sejak awal. Kita tetap memerlukan asal data dan konteks pengambilannya.

##### Cukup kenali dulu

- **Metadata**: keterangan tentang file, seperti waktu pembuatan; keterangan ini dapat berubah tanpa perubahan isi file.

#### Mencatat siapa menangani bukti

Petugas Laundry Aman menyerahkan salinan kepada analis lain. Keduanya perlu mencatat perpindahan tersebut.
**Chain of custody** adalah catatan siapa menguasai bukti, kapan, untuk tujuan apa, dan bagaimana perpindahannya.
Bayangkan lembar serah terima pakaian: setiap penerima dan perpindahan dicatat agar asal penanganannya bisa ditelusuri.

Untuk latihan pribadi, tabel sederhana cukup. Pada pekerjaan nyata, organisasi memakai prosedur penyimpanan dan akses yang lebih ketat.
File dengan hash sama tetap membutuhkan konteks pengambilan serta asal yang dapat dipertanggungjawabkan.

#### Memilih bukti sebelum keadaan berubah

Pengelola Laundry Aman mempertimbangkan mematikan perangkat yang dicurigai.
**Volatile data** adalah data yang mudah hilang saat keadaan perangkat berubah, seperti memori dan koneksi aktif.
Bayangkan catatan sementara pada papan yang bisa terhapus ketika pekerjaan berakhir. Salinan file saja tidak merekam seluruh keadaan perangkat.

Disk menyimpan data lebih lama, tetapi aktivitas sistem operasi tetap dapat menulis ke dalamnya.
Jangan menganggap penyalinan folder memperoleh seluruh bukti disk, termasuk data yang sudah dihapus.
**Akuisisi** berarti proses memperoleh bukti, termasuk pengambilan data memori dengan alat khusus.
Pengambilan bukti memori dan disk memerlukan alat serta latihan khusus.

**Image disk** adalah hasil perekaman isi media untuk pemeriksaan. Metode akuisisi menentukan cakupannya; hasilnya berbeda dari sekadar menyalin folder.
Pembuatan image memerlukan alat dan latihan khusus.

<details>
<summary>Pendalaman opsional: mencegah penulisan ke media bukti</summary>

Saat toko memerlukan pemeriksaan perangkat, analis perlu mencegah perubahan pada media sumber.
**Write blocker** adalah alat untuk mencegah penulisan ke media bukti saat pengambilan data.
Penggunaannya juga memerlukan alat serta latihan khusus.

</details>

#### Mengurutkan kejadian tanpa menebak penyebab

Analis Laundry Aman menyatukan log login dan catatan simulasi dari Bab 16.
Timeline mengurutkan kejadian dari beberapa sumber, seperti menyusun kembali jadwal kegiatan toko dari buku yang berbeda.

**Timestamp** berarti penanda waktu pada data. Periksa zona waktu, ketepatan jam, jenis penanda waktu, dan kemungkinan log terlambat dikirim.
Waktu pembuatan file, perubahan isi, dan penerimaan event oleh server dapat berbeda.
Dua kejadian berurutan belum membuktikan bahwa kejadian pertama menyebabkan kejadian kedua.

NIST SP 800-86 membahas pengumpulan, pemeriksaan, analisis, dan pelaporan forensik untuk respons insiden.
Dokumen ini berasal dari 2006. Gunakan prinsip prosesnya bersama dokumentasi alat yang masih terawat untuk format sistem operasi modern.
[NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final) menjadi rujukan proses bab ini.

#### Ringkasan

- Pisahkan sumber asli, salinan bukti, dan salinan kerja.
- Catat asal serta penanganan bukti; hash membantu memeriksa perubahan isi.
- Salinan satu file tidak mencakup seluruh bukti disk atau memori.
- Kronologi perlu konteks waktu; urutan kejadian belum membuktikan hubungan sebab-akibat.

#### Cek pemahaman

1. Mengapa analisis memakai salinan kerja?
2. Apa yang belum dibuktikan oleh dua file dengan hash sama?
3. Mengapa waktu file dan waktu penerimaan event perlu dibedakan?

### Praktik

#### 1. Buat berkas kasus

Di editor atau kertas, salin tabel berikut ke catatan kasus.
**Fixture** berarti data latihan tetap untuk membandingkan hasil. Pada bab ini, fixture menjadi sumber file yang disalin.

| Field | Nilai latihan |
|---|---|
| ID kasus | LA-LAB-017 |
| Pertanyaan | Urutan aktivitas login apa yang tercatat? |
| Sumber | Fixture sintetis `labs/data/auth.jsonl` |
| Pengambil | Nama atau alias kamu untuk latihan |
| Waktu pengambilan | Isi waktu aktual beserta zona waktu |
| Cakupan | Satu file; bukan image perangkat |

#### 2. Buat salinan dan bandingkan hash

Pilih jalur sesuai perangkatmu. Mulai dari folder utama tutorial, yaitu folder yang memuat `README.md` dan `labs`.
Pastikan folder tujuan belum berisi bukti percobaan sebelumnya.
Jika mengulang percobaan, pakai folder kasus baru agar bukti lama tidak tertimpa; sesuaikan lokasi file pada perintah.

**Windows PowerShell**

Jalankan perintah berikut untuk membuat folder, dua salinan, dan menghitung hash:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/forensik-demo
Copy-Item -LiteralPath labs/data/auth.jsonl -Destination hasil-belajar/forensik-demo/auth.bukti.jsonl
Copy-Item -LiteralPath hasil-belajar/forensik-demo/auth.bukti.jsonl -Destination hasil-belajar/forensik-demo/auth.kerja.jsonl
Get-FileHash -LiteralPath labs/data/auth.jsonl,hasil-belajar/forensik-demo/auth.bukti.jsonl,hasil-belajar/forensik-demo/auth.kerja.jsonl -Algorithm SHA256
```

Ketiga hash seharusnya sama untuk isi yang disalin. Ini tidak membuktikan nama file, waktu pembuatan, atau metadata lain ikut sama.
Simpan nilai beserta nama file dalam catatan kasus.

**Linux/macOS**

Buat folder `hasil-belajar/forensik-demo` melalui pengelola file.
Salin sumber menjadi `auth.bukti.jsonl`, lalu salin file itu menjadi `auth.kerja.jsonl` di folder tersebut.
Dari terminal pada folder utama tutorial, jalankan perintah pembanding berikut:

```bash
python3 -c "from pathlib import Path; import hashlib; print(hashlib.sha256(Path('labs/data/auth.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.bukti.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.kerja.jsonl').read_bytes()).hexdigest())"
```

Perintah membaca byte file dan menghitung SHA-256 tanpa mengubah isinya. Tiga nilai hasil perlu sama.
Simpan nilai beserta nama file dalam catatan kasus.

Untuk kedua jalur, jangan mengedit fixture asli atau salinan bukti. Gunakan salinan kerja untuk analisis.
Catat waktu aktual dan pelaksana saat membuat serta menyerahkan salinan; gunakan catatan itu untuk chain of custody.

#### 3. Analisis salinan kerja

Buka terminal pada folder utama tutorial. Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

Jalankan `py labs/log_triage.py hasil-belajar/forensik-demo/auth.kerja.jsonl`.

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Bandingkan hasil dengan Bab 15: tujuh kejadian, empat login gagal, dan tiga berhasil.
Buka salinan kerja di editor. Susun tabel waktu UTC, pengguna, sumber, kejadian, serta nomor baris asal.

#### 4. Pisahkan pengamatan dan kesimpulan

Di catatan kasus, pisahkan tiga hal berikut:

- Pengamatan: pada 08.02.00–08.02.20 UTC, satu sumber tercatat gagal pada tiga akun.
- Dugaan: terjadi percobaan terhadap beberapa akun.
- Batas: kumpulan data kecil, tanpa password, informasi perangkat, atau aktivitas di luar tujuh kejadian yang tersedia.

Kamu boleh menilai kejadian mencurigakan sambil menjelaskan batas itu. Tunjuk baris sumber untuk setiap pengamatan.

#### 5. Periksa integritas setelah analisis

Di terminal pada folder utama tutorial, hitung hash salinan bukti lagi.
Pada PowerShell, jalankan hanya baris `Get-FileHash` dari langkah 2; pada Linux/macOS, ulangi perintah Python pembanding.
Cocokkan hasil dengan nilai awal tanpa mengulang perintah penyalinan.

Tambahkan catatan chain of custody: waktu, pelaksana, tindakan “membuat salinan kerja”, dan lokasi file.
Jika hash berbeda, hentikan klaim bahwa salinan masih identik. Selidiki perubahan yang terjadi.

### Hasil yang diharapkan

Kamu mempunyai dua salinan dengan isi identik, tabel kronologi dengan nomor baris, dan catatan asal bukti.
Hasil peringkas sama dengan fixture awal. Hash salinan bukti sesudah analisis cocok dengan catatan awal.
Laporan menyatakan cakupannya: analisis satu log sintetis, tanpa akuisisi disk atau memori.

### Jika macet

Jika hash berbeda, periksa apakah editor mengubah akhir baris atau encoding dari Bab 08.
Salin ulang dari sumber latihan yang belum berubah ke folder kasus baru. Catat percobaan yang gagal.

Jika alat lain menampilkan waktu berbeda, periksa pengaturan zona waktu.
Jangan mengubah timestamp sumber agar cocok dengan cerita yang kamu harapkan.

### Latihan

1. Tambahkan bukti tabletop dari Bab 16 ke timeline. Beri sumber berbeda dari log autentikasi.
2. Tulis dua pertanyaan yang belum terjawab, misalnya apakah ekspor berhasil dikirim atau siapa yang memakai akun bersama.
3. Rancang jenis bukti tambahan dan cara memperolehnya melalui pengelola yang berwenang.

### Bukti kelulusan

- [ ] Saya mengumpulkan catatan kasus, hash sebelum dan sesudah, chain of custody, timeline, serta kesimpulan dengan batasan.
- [ ] Pembaca lain dapat mengikuti asal setiap klaim.
- [ ] Saya dapat membedakan analisis satu file dari akuisisi disk atau memori.

#### Lanjut belajar

Kembali ke [Bab 16](materi/16-respons-insiden.md) jika batas bukti tabletop belum jelas. Ulangi penandaan sumber sebelum melanjutkan.
Setelah bukti siap, pilih pendalaman [Bab 18: analisis program](materi/18-malware-reverse.md).
Pendalaman forensik juga dapat memakai image latihan publik dan alat forensik setelah kamu memahami akuisisi, privasi, serta prosedur alatnya.
Bekal bab ini belum berarti kamu sudah menjadi spesialis pemeriksaan perangkat.

### Referensi

- [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final): proses forensik dalam respons insiden.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): hash file dengan PowerShell.
- [Python hashlib](https://docs.python.org/3/library/hashlib.html): fungsi hash pada contoh lintas OS.

---

<a id="bab-18"></a>

## Bab 18: Memahami program dan perilaku malware

Tahap 5 dari 6: Memeriksa program dan lingkungan

### Tujuan dan prasyarat

Kamu akan membaca perilaku sebuah program, memisahkan bukti dari dugaan, dan menulis laporan analisis.
Langkah ini membantumu menilai apakah perangkat lunak tambahan aman digunakan di Laundry Aman.

Bekal utamamu adalah [proses dari Bab 02](materi/02-komputer.md), [jaringan dari Bab 03](materi/03-jaringan.md), [Python dari Bab 06](materi/06-pemrograman.md), [hash dari Bab 08](materi/08-kriptografi.md), serta [forensik dari Bab 17](materi/17-forensik.md).
Praktik wajib bab ini memakai program Python yang kamu tulis sendiri.

Pendalaman biner memerlukan compiler serta debugger pada lab terpisah.
Compiler menerjemahkan kode sumber menjadi program; debugger membantu memeriksa program saat berjalan.
[Bab 19](materi/19-memory-safety.md) nanti mengenalkan contoh bahasa C; jalur Python di sini cukup untuk praktik wajib.

Jangan pernah mengunggah berkas perusahaan ke pemindai publik tanpa izin resmi pemilik data.

### Konsep

Laundry Aman menerima program penghitung biaya pesanan dari vendor luar.
Sebelum program dipasang di komputer kasir, kita perlu memeriksa perilakunya.
Kita memeriksa apakah program bekerja sesuai perjanjian dan mencari tindakan merugikan dalam cakupan pengujian.
Penyelidikan program membantu membedakan dugaan kecurigaan dari bukti nyata yang teramati.
Kita akan mempelajari cara meneliti kode, mengamati alur instruksi, dan mencatat batasan temuan.

#### Mengenali tujuan dan perilaku program

Kasir Laundry Aman perlu membedakan program bermasalah dari program yang dipakai untuk merugikan toko.

Istilah **malware** adalah perangkat lunak yang pelakunya gunakan untuk tindakan merugikan tanpa izin pemilik sistem.
Jenisnya menggambarkan perilaku: ransomware mengganggu akses data, pencuri informasi mengambil informasi, dan worm menyebar antarsistem.
Satu program bisa memiliki beberapa perilaku sekaligus dalam aksinya.
Nama keluarga dari sebuah antivirus belum menjelaskan seluruh dampaknya pada sistem tokomu.

##### Cukup kenali dulu

- **Ransomware**: malware yang mengunci atau mengenkripsi data korban untuk memeras tebusan.
- **Pencuri informasi**: malware yang mencari dan mengambil data rahasia seperti password.
- **Worm**: malware yang menggandakan diri dan menyebar antarkomputer melalui jaringan secara mandiri.

#### Menyelidiki cara kerja program tanpa kode sumber

Laundry Aman mungkin menerima program vendor tanpa kode sumber aslinya.

Pendekatan **reverse engineering** berarti menyimpulkan cara kerja program dari bentuk yang tersedia.
Kamu mungkin hanya mendapat berkas executable, yaitu berkas program yang dapat dijalankan, tanpa kode sumber awal.
Seperti teknisi memeriksa mesin cuci, kamu mempelajari komponennya, mengikuti aliran kerja, lalu menguji dugaan.

**Analisis statis** memeriksa berkas tanpa menjalankannya: format, teks, fungsi, dan alur instruksi.
Seperti membaca petunjuk mesin cuci, kamu menelusuri tindakan yang mungkin terjadi sebelum menyalakannya.

**Analisis dinamis** mengamati program saat berjalan: proses anak, perubahan berkas, atau koneksi.
Seperti mengamati mesin saat diuji, kamu mencatat tindakan yang benar-benar terlihat pada percobaan itu.
Keduanya saling melengkapi untuk menghasilkan gambaran utuh.
Teks `hapus_backup` di dalam berkas belum membuktikan bahwa fungsi tersebut pernah berjalan di sistem.

##### Cukup kenali dulu

- **Indikator kompromi**: tanda teknis seperti artefak file atau alamat jaringan mencurigakan.

#### Membaca instruksi mesin dan teknik penyamaran

Program vendor Laundry Aman mungkin berbentuk biner, yaitu berkas yang memuat instruksi mesin.
Instruksi ini sulit dibaca langsung oleh manusia.

**Assembly** adalah bentuk teks untuk membaca instruksi mesin, seperti daftar langkah pendek bagi prosesor.
Alat **disassembler** menampilkan instruksi mesin dalam bentuk assembly, seperti mengubah tanda mesin menjadi daftar yang dapat dibaca.

Alat **decompiler** mencoba membentuk kode tingkat tinggi, seperti bentuk fungsi dan percabangan pada Python, dari instruksi itu.
Bayangkan menyusun kembali petunjuk kerja dari daftar langkah mesin.
Nama variabel dan struktur sumber aslinya bisa hilang selama proses kompilasi.
Ghidra menyediakan kedua kemampuan tersebut; dokumentasi resminya menjadi titik awal saat kamu masuk ke analisis biner.

Saat memeriksa program vendor, petugas Laundry Aman mungkin kesulitan mengikuti bentuk kodenya.
Teknik **obfuscation** mengubah tampilan program agar pembaca sulit mengikuti logikanya.
Seperti mengganti label komponen dengan nama yang membingungkan, teknik ini menyulitkan pembacaan.

Teknik **packing** membungkus kode sehingga sebagian isi baru tampak setelah proses pembukaan.
Seperti membuka kemasan sebelum memeriksa mesin, analis perlu memahami pembungkus itu untuk melihat isinya.
Pengembang perangkat lunak sah juga bisa memakai teknik serupa.
Kamu memerlukan konteks dan perilaku untuk menilai sebuah sampel secara objektif.

**Bytecode** adalah instruksi bagi mesin virtual Python, yaitu program pelaksana instruksi Python.
Seperti daftar tugas untuk petugas perantara, bytecode perlu dijalankan oleh mesin virtual tersebut.
Prosesor fisik menjalankan instruksi mesin; assembly adalah bentuk teks untuk membaca instruksi itu.
Analisis biner membutuhkan bekal bahasa C dan pemahaman memori yang dibahas di [Bab 19](materi/19-memory-safety.md).

#### Ringkasan

- Malware dinilai dari perilaku nyatanya, bukan sekadar label nama dari antivirus.
- Reverse engineering memadukan analisis statis untuk memeriksa struktur dan dinamis untuk mengamati perilaku aktif.
- Disassembler dan decompiler membantu membaca instruksi mesin pada program biner.
- Bukti teks dalam kode harus dibedakan dari bukti eksekusi nyata pada sistem.

#### Cek pemahaman

1. Mengapa adanya teks perintah berbahaya di dalam file belum tentu membuktikan perintah itu pernah dijalankan?
2. Apa perbedaan hasil kerja antara disassembler dan decompiler?
3. Mengapa teknik packing atau obfuscation belum tentu membuktikan suatu program adalah malware?

### Praktik

Laundry Aman menerima skrip penghitung biaya dari vendor fiktif.
Kamu harus menjelaskan apa yang dikerjakannya sebelum pemilik toko memakainya.

#### 1. Buat dan amati skrip aman

Buka folder utama tutorial di editor, lalu buat folder `hasil-belajar/bab18/`.
Simpan kode berikut sebagai `analisis_aman.py` di folder tersebut:

```python
import dis
import hashlib

def biaya(berat, anggota=False):
    if berat < 0:
        raise ValueError("berat harus nol atau positif")
    total = berat * 7000
    if anggota:
        total = total * 9 // 10
    return total

sampel = b"program laundry latihan"
print("SHA256:", hashlib.sha256(sampel).hexdigest())
print("Normal:", biaya(3))
print("Anggota:", biaya(3, True))
dis.dis(biaya)
```

Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan program:

**Windows PowerShell**

```powershell
py hasil-belajar/bab18/analisis_aman.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Program ini menghitung biaya, menampilkan sidik hash dari byte contoh, dan mencetak bytecode Python.
Bytecode adalah instruksi bagi mesin virtual Python; bentuknya berbeda dari assembly CPU.
Nama instruksi dapat berubah antarversi Python.

#### 2. Jalankan tiga putaran pengujian

Lakukan tiga putaran pemeriksaan terencana:

1. **Sebelum menjalankan:** tulis prediksi untuk `biaya(3)`, `biaya(3, True)`, dan `biaya(-1)`.
   Catat seluruh impor dan operasi.
   Tidak ada pemanggilan jaringan, penulisan berkas, atau proses anak dalam contoh ini.
2. **Saat menjalankan:** cocokkan hasil dengan prediksi.
   Cari perbandingan terhadap nol, percabangan `anggota`, perkalian, dan nilai kembali di keluaran `dis`.
   Opcode berarti nama instruksi bytecode. Kamu cukup mengikuti alurnya tanpa menghafal nama tersebut.
3. **Sesudah menjalankan:** tambahkan pemanggilan `biaya(-1)` dalam blok `try/except ValueError`.
   Buktikan jalur penolakan.
   Ubah tarif menjadi 8000 dan jelaskan dua hasil normal yang ikut berubah.

#### 3. Susun tabel bukti analisis

Bandingkan temuanmu dengan tabel laporan berikut:

| Pernyataan | Bukti | Batas kesimpulan |
|---|---|---|
| Program menghitung diskon 10% | Cabang `anggota`, hasil 18900 untuk 3 kg | Baru mencakup contoh input ini |
| Fungsi menolak berat negatif | Pengecualian `ValueError` | Tipe nonangka belum diperiksa |
| Skrip tidak membuka koneksi pada kode yang dibaca | Tidak ada API jaringan pada sumber | Tidak berlaku untuk file vendor lain |

Di editor, tambahkan pemeriksaan `biaya("3")` setelah pengujian angka, lalu jalankan ulang skrip.
Python menampilkan `TypeError` karena teks dibandingkan dengan angka pada pemeriksaan berat negatif.
Hasil ini menunjukkan fungsi belum memvalidasi tipe dengan pesan yang ramah pengguna.
Ini temuan kualitas input, bukan bukti malware.

Untuk pendalaman opsional, gunakan compiler untuk membangun program C sederhana milik sendiri.
Buka hasilnya di Ghidra, temukan fungsi `main`, lalu cocokkan cabang hasil dekompilasi dengan sumber.
Catat versi compiler dan opsi optimasinya karena keduanya memengaruhi hasil.
Ikuti panduan instalasi resmi Ghidra ketika benar-benar mengambil jalur ini.

Analisis sampel malware hidup memerlukan rancangan lab, penanganan bukti, dan pendampingan tersendiri.
Gunakan latihan benign, yaitu program yang sengaja aman seperti contoh bab ini, serta tantangan pendidikan sampai kamu menguasai isolasi.
Jika alat analisis biner belum tersedia, catat jalur itu sebagai `NOT_RUN`.
Jangan mengunggah berkas perusahaan ke pemindai publik tanpa izin pemilik data.

### Hasil yang diharapkan

Kamu memperoleh keluaran `Normal: 21000` dan `Anggota: 18900`, serta laporan yang menunjuk bukti untuk tiap kesimpulan.
Nilai hash berulang sama untuk byte sampel yang sama.
Kamu dapat menjelaskan bahwa hash mengenali isi, bukan menentukan niat pembuat program.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| `ModuleNotFoundError` pada `dis` | Periksa apakah kamu memberi nama file sendiri `dis.py` yang menutupi modul standar |
| Instruksi bytecode berbeda dari contoh | Bandingkan versi Python dan ikuti alur logikanya tanpa panik |
| Program berhenti pada berat negatif | Tangkap pengecualian dengan `try/except`; catat bahwa penolakan berat negatif adalah perilaku yang diharapkan |

### Latihan

Tambahkan biaya antar untuk alamat di luar radius tertentu, memakai jarak angka fiktif.
Tukar program dengan teman tanpa menjelaskan aturan harganya.
Minta ia menyimpulkan aturan melalui sumber dan enam input uji.
Setelah itu, bandingkan dugaan dengan aturan asli.

<details>
<summary>Pembahasan setelah mencoba: latihan analisis program</summary>

Saat teman menguji programmu, ia mengamati keluaran dari berbagai kombinasi angka jarak dan berat.
Ia menarik hipotesis aturan harga dari pola angka yang dihasilkan.
Pencocokan dugaan dengan kode asli membuktikan bahwa analisis perilaku memerlukan pengujian batas masukan secara cermat.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan kode `analisis_aman.py`, enam hasil uji, diagram alur percabangan, dan satu halaman laporan.
- [ ] Pembaca lain dapat mengulang hasil dari kode dan catatan saya.
- [ ] Saya dapat membedakan hasil pengamatan nyata dari dugaan yang belum dibuktikan.
- [ ] Saya dapat menunjukkan setidaknya satu keterbatasan dari metode analisis yang digunakan.
- [ ] Saya memahami alasan mengapa berkas data perusahaan dilarang diunggah ke layanan pemindai publik tanpa izin.

#### Lanjut belajar

Jika pembacaan alur kode masih terasa rumit, latih kembali pembacaan fungsi sederhana pada [Bab 06](materi/06-pemrograman.md).
Untuk menyegarkan pemahaman bukti digital, buka kembali [Bab 17](materi/17-forensik.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 19: Keamanan Memori](materi/19-memory-safety.md) untuk mempelajari bagaimana kesalahan penanganan memori dapat menimbulkan celah keamanan.

### Referensi

- [Ghidra, repositori resmi dan panduan awal](https://github.com/NationalSecurityAgency/ghidra).
- [Dokumentasi Python: modul dis](https://docs.python.org/3/library/dis.html).
- [MITRE ATT&CK untuk bahasa perilaku ancaman](https://attack.mitre.org/).

---

<a id="bab-19"></a>

## Bab 19: Memory safety, debugging, dan fuzzing

Tahap 5 dari 6: Memeriksa program dan lingkungan

### Tujuan dan prasyarat

Kamu akan menemukan cacat pembacaan input dengan contoh kecil, menjelaskan akar penyebabnya, lalu merancang pengujian perbaikan.
Contoh Python melatih pemeriksaan format masukan. Contoh C menunjukkan bagaimana penyalinan tanpa batas dapat merusak memori.

Bekal utamamu adalah [lingkungan lab dari Bab 01](materi/01-lab.md) serta [proses dan memori dari Bab 02](materi/02-komputer.md).
Pahami juga [fungsi dari Bab 06](materi/06-pemrograman.md) serta [analisis program dari Bab 18](materi/18-malware-reverse.md).
Jalur Python dapat dijalankan langsung tanpa memerlukan compiler biner tambahan.
Jalur C memerlukan Clang di Linux atau VM lab yang sudah kamu siapkan; kamu boleh mencatatnya sebagai `NOT_RUN` sampai alat tersedia.

### Konsep

Program komputer menyimpan data masukan di memori saat mengolah pesanan.
Jika batas ruang memori tidak dijaga, pembacaan atau penulisan bisa meluap ke luar area yang sah.
Kesalahan memori dapat merusak data atau membuat program berhenti mendadak.
Pengujian otomatis membantu menemukan celah batas sebelum program dipakai di produksi.
Kita akan memeriksa ruang penyimpanan, menguji variasi masukan, lalu membatasi penyalinan sesuai kapasitasnya.

#### Menjaga batas kapasitas ruang memori

Memori komputer diibaratkan seperti deretan loker penyimpanan bernomor urut di Laundry Aman.
Program menyimpan data pada rentang alamat tertentu yang dialokasikan oleh sistem operasi.

Sebuah **buffer** adalah area penyimpanan dengan kapasitas tertentu untuk menampung data.
Program yang membaca atau menulis di luar batas dapat merusak data atau berhenti.
Pada kondisi tertentu, penyerang bisa memanfaatkan kerusakan ini untuk mengubah perilaku program.

Saat program C Laundry Aman menyimpan lokasi label, ia memakai **pointer**, nilai berisi alamat memori, seperti catatan nomor loker.

Celah **use-after-free** terjadi ketika program memakai alamat setelah melepaskan penyimpanannya.
Seperti memakai nomor loker yang sudah diserahkan kepada orang lain, alamat itu sudah tidak sah untuk pemakaian semula.

**Integer overflow** terjadi ketika hasil perhitungan melampaui rentang tipe bilangan, seperti jumlah barang yang melebihi kapasitas pencatatan ukuran.
Jangan menganggap hasilnya selalu berputar menjadi angka kecil; perilakunya bergantung pada tipe dan aturan bahasa.
Mengganti satu fungsi salin tidak menyelesaikan seluruh kelas masalah tersebut.

#### Menguji ketahanan input dengan fuzzing

Petugas Laundry Aman ingin memeriksa banyak variasi label tanpa mengetiknya satu per satu.

Metode **fuzzing** menguji program dengan banyak input yang berubah-ubah secara otomatis.
Peneliti mencari crash, yaitu program berhenti akibat kegagalan, waktu proses berlebihan, atau pelanggaran aturan keamanan.

Kumpulan input awal disebut **corpus**, seperti satu paket label contoh untuk diuji ulang.
Corpus membantu membandingkan hasil sebelum dan sesudah perbaikan.

Program penghubung yang memberikan input kepada fungsi yang hendak diuji disebut **harness**.
Bayangkan petugas pengumpan label ke mesin: ia menentukan masukan mana yang mencapai bagian pemeriksaan.
Kualitas harness menentukan bagian program yang terjangkau oleh proses pengujian.

##### Cukup kenali dulu

- **Mutation fuzzing**: pengujian dengan mengubah sedikit bagian dari contoh input yang valid.
- **Code coverage**: ukuran bagian kode yang dijalankan pengujian; ukuran baris dan cabang menjawab pertanyaan berbeda.
- **Crash triage**: pemilahan dan analisis laporan kegagalan untuk menemukan akar masalah.

#### Menemukan bug memori memakai sanitizer

Program label Laundry Aman yang ditulis dalam C bisa terus berjalan sesaat setelah kesalahan memori terjadi.

Alat bantu **sanitizer** menambahkan pemeriksaan ketika compiler membangun program, seperti memasang sensor batas pada mesin.
AddressSanitizer membantu menemukan sejumlah kesalahan memori, seperti penulisan di luar batas array.
Sebuah crash memberi petunjuk bug; peneliti masih harus menentukan penyebab dan dampaknya.
Program tanpa crash pada satu corpus juga belum membuktikan keamanan menyeluruh.

#### Ringkasan

- Buffer memiliki kapasitas tetap; penulisan di luar batas merusak memori di sekitarnya.
- Pemakaian pointer yang tidak sah dan kesalahan perhitungan ukuran dapat menimbulkan cacat memori.
- Fuzzing menguji ketahanan program menggunakan corpus dan harness secara otomatis.
- Sanitizer membantu mendeteksi akses memori liar saat program biner dieksekusi.

#### Cek pemahaman

1. Mengapa penyalinan data ke buffer harus memeriksa kapasitas tujuannya?
2. Apa fungsi corpus dalam kegiatan fuzzing pengujian program?
3. Mengapa program yang tidak mengalami crash saat diuji seribu input acak belum tentu bebas dari bug?

### Praktik

Laundry Aman memakai format label paket mainan dengan satu byte panjang, lalu byte nama.
**ASCII** adalah pemetaan karakter ke angka; contoh ini memakai huruf A–Z dan a–z yang masing-masing menempati satu byte.

Contoh `b"\x03Ani"` menyatakan tiga karakter nama pelanggan.
Awalan b menandai data byte; `\x03` menyatakan satu byte bernilai desimal 3.
Format ini sengaja kecil agar kamu bisa memeriksa tiap byte secara mandiri.

#### 1. Uji parser label dengan Python

Buat folder `hasil-belajar/bab19/` melalui pengelola berkas.
Simpan kode berikut sebagai `parser_lab.py` di dalamnya:

```python
import random

def baca_label(data):
    if not data:
        raise ValueError("header kosong")
    ukuran = data[0]
    if ukuran > 16:
        raise ValueError("nama terlalu panjang")
    if len(data) != ukuran + 1:
        raise ValueError("panjang tidak cocok")
    nama = data[1:].decode("ascii")
    if not nama.isalpha():
        raise ValueError("nama harus huruf ASCII")
    return nama

contoh = [b"\x03Ani", b"", b"\x05Ani", b"\x03A1i"]
for data in contoh:
    try:
        print(repr(data), "DITERIMA", baca_label(data))
    except ValueError as error:
        print(repr(data), "DITOLAK", str(error))

acak = random.Random(42)
diterima = ditolak = 0
for _ in range(1000):
    data = bytes(acak.randrange(256) for _ in range(acak.randrange(22)))
    try:
        nama = baca_label(data)
        assert 1 <= len(nama) <= 16
        assert nama.isascii() and nama.isalpha()
        diterima += 1
    except ValueError:
        ditolak += 1
print("Total:", diterima + ditolak)
```

Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan perintah berikut:

**Windows PowerShell**

```powershell
py hasil-belajar/bab19/parser_lab.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Telusuri alur fungsi `baca_label` langkah demi langkah:
Pemeriksaan pertama memastikan data tidak kosong.
Pemeriksaan kedua membatasi panjang nama maksimal 16 byte.
Pemeriksaan ketiga mencocokkan total ukuran data dengan header, yaitu byte pertama yang berisi panjang nama.
Setelah itu, program mengubah byte menjadi teks ASCII dan memastikan nama hanya berisi huruf.

Nilai 42 pada `Random(42)` adalah **seed**, nilai awal pembangkit acak, seperti titik mulai urutan percobaan.
Seed yang sama membantu pengulangan; catat versi Python karena algoritma pembangkitan dapat berubah antarversi.
Kelas `UnicodeDecodeError` adalah turunan `ValueError`, sehingga input non-ASCII otomatis masuk jalur penolakan yang aman.
Jangan menangkap seluruh `Exception`: tindakan itu bisa menyembunyikan bug pemrograman internal yang ingin kamu temukan.

Empat contoh awal harus menerima Ani dan menolak tiga input lainnya.
Seribu input acak cenderung menghasilkan banyak penolakan karena formatnya ketat.
Tambahkan corpus terarah: panjang 1, 16, 17; input kosong; satu byte header; karakter non-ASCII; dan satu byte tambahan setelah nama.
Kamu sedang menguji **batas**, tempat banyak asumsi program gagal.

#### 2. Pelajari cacat penyalinan buffer di bahasa C

Sekarang pelajari pola cacat C berikut tanpa menjalankannya dahulu:

```c
#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
    char nama[8];
    if (argc != 2) return 2;
    strcpy(nama, argv[1]);
    puts(nama);
    return 0;
}
```

Array menyediakan delapan byte, termasuk byte penutup string `\0`.
Array adalah deretan elemen; tipe char pada contoh menyimpan satu byte per elemen.
Dalam string C, karakter null `\0` menandai akhir teks. Delapan byte menampung tujuh huruf ASCII dan satu byte penutup.
Nama delapan huruf ASCII sudah terlalu panjang untuk ditampung.
Penyebabnya adalah menyalin input tanpa memeriksa kapasitas tujuan terlebih dahulu.

#### 3. Kompilasi dengan AddressSanitizer (opsional)

Untuk jalur C opsional, simpan kode sebagai `label.c` di folder lab.
Di terminal Linux dengan Clang yang tersedia, buka folder `hasil-belajar/bab19/`, lalu jalankan perintah berikut:

```bash
clang -g -O1 -fsanitize=address -fno-omit-frame-pointer label.c -o label
./label Ani
./label ABCDEFGH
```

Opsi `-g` menyertakan informasi debug; `-fsanitize=address` memasang pemeriksaan memori otomatis.
Kasus kedua seharusnya menghasilkan laporan akses di luar buffer.
Teks dan alamat laporan bergantung pada compiler serta sistem yang digunakan.
Jalankan hanya biner lab milik sendiri di komputer latihan.

#### 4. Perbaiki penyalinan memori yang aman

Di editor, ganti baris penyalinan pada `label.c` dengan kode berikut, sebelum pemanggilan pencetak nama:

```c
size_t panjang = strlen(argv[1]);
if (panjang >= sizeof nama) {
    fputs("nama terlalu panjang\n", stderr);
    return 1;
}
memcpy(nama, argv[1], panjang + 1);
```

Pada potongan ini, strlen menghitung panjang teks sebelum penutup; sizeof menghitung kapasitas array.
Memcpy menyalin jumlah byte yang diminta. Tambahan satu pada panjang ikut menyalin byte penutup.

Kompilasi kembali, lalu uji nama panjang 0, 1, 7, 8, dan 20.
Program versi perbaikan harus menerima paling banyak tujuh karakter; input lebih panjang harus keluar dengan kode 1 tanpa laporan sanitizer.
Contoh ini hanya menangani argumen string yang telah memiliki penutup sesuai kontrak `argv`, bukan format biner arbitrer.

### Hasil yang diharapkan

Kamu memiliki corpus input batas, perbedaan hasil sebelum dan sesudah perbaikan, serta uraian akar penyebab masalah.
Dalam jalur Python, total percobaan acak harus 1000 dan tidak ada `AssertionError`.
Dalam jalur C, kamu dapat menunjuk kapasitas buffer, panjang data, dan kebutuhan satu byte penutup.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Pesan `clang: command not found` | Lanjutkan Python, tandai C sebagai `NOT_RUN`, dan ikuti panduan toolchain resmi saat menyiapkan compiler |
| Tidak ada laporan sanitizer di C | Periksa flag `-fsanitize=address` saat kompilasi dan linking, jalankan biner build terakhir, lalu catat lingkungan |
| Semua input acak Python ditolak | Tambah input valid terarah ke corpus, lalu ubah satu byte darinya untuk menguji batas |

Banyaknya penolakan input acak tidak otomatis berarti cakupan kode pengujian sudah menyeluruh.

### Latihan

Ubah aturan nama pada parser Python menjadi huruf dan satu spasi di tengah.
Tulis dahulu contoh yang harus diterima dan ditolak sebelum mengubah kode.
Bandingkan random fuzzing dengan mutasi corpus valid.

Untuk pendalaman spesialis, pelajari libFuzzer, coverage, minimisasi input pemicu, dan deduplikasi crash pada program open-source yang mengizinkan riset.

<details>
<summary>Pembahasan setelah mencoba: latihan validasi nama</summary>

Saat menambahkan aturan spasi di tengah, kamu perlu memastikan nama tidak diawali atau diakhiri spasi kosong.
Pengujian batas mencakup masukan dengan dua spasi berurutan, spasi di awal, atau spasi di akhir.
Mutasi corpus valid dapat menjangkau pemeriksaan yang gagal dicapai masukan acak murni.
Bandingkan bagian kode yang tercapai pada percobaanmu; kecepatannya bergantung pada program dan masukan.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan berkas `parser_lab.py`, delapan kasus batas, nilai seed eksperimen, dan hasil perbaikannya.
- [ ] Saya menyertakan satu contoh bug yang belum diuji dan menandainya sebagai belum diverifikasi.
- [ ] Orang lain dapat mengulang kegagalan dan memahami alasan perbaikan dari catatan saya.
- [ ] Saya dapat menerangkan peran satu byte penutup `\0` pada string bahasa C.
- [ ] Saya memahami batas pengujian fuzzing acak dan pentingnya menyusun corpus terarah.
- [ ] Saya dapat menjelaskan satu contoh cacat memori tanpa menjalankan serangan terhadap sistem luar.

#### Lanjut belajar

Jika pengujian fungsi dan penanganan kesalahan masih membingungkan, buka kembali [Bab 06](materi/06-pemrograman.md).
Untuk menyegarkan pemahaman analisis biner, baca kembali [Bab 18](materi/18-malware-reverse.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 20: Enterprise](materi/20-enterprise.md) untuk mempelajari arsitektur identitas dan domain perusahaan berskala besar.

### Referensi

- [Clang AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html).
- [LLVM libFuzzer](https://llvm.org/docs/LibFuzzer.html).
- [Python: random](https://docs.python.org/3/library/random.html).

---

<a id="bab-20"></a>

## Bab 20: Identitas perusahaan, Active Directory, dan Kerberos

Tahap 5 dari 6: Memeriksa program dan lingkungan

### Tujuan dan prasyarat

Kamu akan menelusuri hubungan akun, grup, mesin, dan hak akses pada jaringan perusahaan.
Pengetahuan ini membantumu melindungi data cabang Laundry Aman dari eskalasi izin yang tidak sah.

Bekal utamamu adalah [DNS dari Bab 03](materi/03-jaringan.md) serta [identitas Windows dari Bab 05](materi/05-windows.md).
Pahami juga [dasar Python dari Bab 06](materi/06-pemrograman.md), serta [otorisasi dari Bab 09](materi/09-identitas.md) dan [Bab 10](materi/10-hardening.md).
Latihan menggunakan tabel inventaris fiktif dan pemodelan Python.
Kamu tidak membutuhkan Windows Server berbayar atau akses domain kantor nyata.

### Konsep

Laundry Aman kini mengelola belasan cabang toko di berbagai kota.
Mengatur akun kasir secara terpisah di setiap toko mulai merepotkan.
Jaringan perusahaan membutuhkan pengelolaan identitas pengguna secara terpusat.
Hubungan grup bertingkat dapat memberi akses yang tidak sesuai tugas.
Kita akan mempelajari direktori perusahaan, tiket masuk, dan penelusuran izin akses.

#### Mengelola identitas terpusat dengan Active Directory

Petugas Laundry Aman ingin mengelola akun cabang dari satu tempat agar pencabutan akses tidak terlewat.

Layanan **directory service** menyimpan identitas dan hubungan organisasi secara terpusat, seperti buku induk akun seluruh cabang.

Layanan **Active Directory Domain Services**, disingkat AD DS, adalah sistem dari Microsoft untuk memenuhi kebutuhan tersebut.

Server pengendali yang menjalankan layanan direktori ini disebut **domain controller**.

Struktur Active Directory disusun secara bertingkat untuk memudahkan pembagian wewenang:

Sebuah **domain** mengelompokkan identitas dan pengelolaannya, seperti satu bagian buku induk akun.
Domain tidak harus terbatas pada satu jaringan fisik.

Struktur **forest** dapat memuat beberapa domain dengan hubungan kepercayaan, seperti kumpulan buku induk yang saling mengenali akun.
Kepercayaan membantu pengenalan identitas; izin mengakses file tetap perlu diperiksa.

Pengaturan **Group Policy** membantu administrator menerapkan aturan ke pengguna atau komputer, seperti instruksi kerja bersama untuk cabang.

Wadah **Organizational Unit**, atau OU, mengelompokkan objek untuk administrasi, seperti map akun cabang yang dikelola petugas tertentu.
Wadah OU bukan pengganti grup izin file.

##### Cukup kenali dulu

- **Objek direktori**: rekaman data identitas pengguna, grup, atau komputer di dalam AD DS.
- **Pohon domain**: susunan domain yang berbagi struktur penamaan DNS yang sama di dalam forest.
- **Replikasi direktori**: proses penyelarasan data akun antarberbagai domain controller secara otomatis.

#### Membuktikan identitas lewat tiket Kerberos

Laptop kasir Laundry Aman perlu mencari informasi akun, lalu membuktikan identitas saat membuka layanan.

Protokol **LDAP** adalah aturan komunikasi untuk membaca dan mencari informasi di dalam direktori.
Seperti petugas yang mencari nama di buku induk, klien meminta informasi yang diizinkan untuk dibaca.

Mekanisme **Kerberos** membantu membuktikan identitas pengguna melalui sistem tiket digital.
Bayangkan loket yang memeriksa identitas, lalu memberikan tiket untuk meminta tiket layanan tertentu.

Pusat penerbit tiket disebut **KDC** (*Key Distribution Center*), yang berada pada domain controller dalam lingkungan AD DS.

Saat berhasil login, pengguna menerima **TGT** (*Ticket Granting Ticket*), tiket untuk meminta tiket layanan tanpa menyerahkan ulang password ke tiap layanan.

Tiket TGT dipakai untuk meminta tiket layanan tertentu saat kasir membuka server aplikasi atau file bersama.
Server layanan memeriksa tiket untuk mengenali identitas, lalu tetap memeriksa izin tindakan yang diminta.
Penjelasan ini menyederhanakan proses pertukaran kunci kriptografi yang terjadi di baliknya.

Layanan DNS membantu klien menemukan layanan domain, termasuk domain controller.
Sinkronisasi waktu jam sangat penting untuk memeriksa masa berlaku tiket Kerberos.
Gangguan login karena DNS atau waktu tidak otomatis berarti serangan; periksa konfigurasi dan log sebelum menyimpulkan penyebab.

##### Cukup kenali dulu

- **SPN**: Service Principal Name, pengenal unik untuk suatu layanan jaringan pada Kerberos.
- **Masa aktif tiket**: batas waktu berlakunya tiket sebelum klien harus meminta tiket baru.
- **Otentikasi bersama**: situasi di mana klien dan server saling membuktikan identitas masing-masing.

#### Menelusuri tiga jenis hubungan izin akses

Saat meninjau akses vendor Laundry Aman, bedakan tiga jenis hubungan berikut:

- **Keanggotaan:** akun mewarisi hak dari grup, termasuk grup di dalam grup lain secara bersarang.
- **Kontrol:** akun dapat mengubah anggota grup atau mengatur ulang akun lain.
- **Penggunaan:** akun layanan menjalankan aplikasi dengan akses tertentu pada komputer.

Izin tampak kecil dapat membentuk jalur menuju aset besar.
Seorang operator yang boleh mengubah anggota grup administrator mungkin memperoleh pengaruh lebih luas daripada hak baca direktori biasa.
Penilaian perlu mengikuti hubungan, bukan hanya nama jabatan akun semata.

Untuk mengikuti hubungan tadi, kita memakai **graf**, gambar titik dan penghubung, seperti peta jalur antarcabang.
Tiap titik atau simpul mewakili akun atau grup; panah berarti keanggotaan.
Dictionary Python memetakan tiap nama ke daftar grup induknya.

Skrip memakai antrean, daftar pekerjaan yang diperiksa dari urutan depan.
Set `pernah` menyimpan nama yang sudah diperiksa tanpa duplikasi, sehingga hubungan melingkar tidak membuat pemeriksaan berulang tanpa henti.

#### Ringkasan

- Active Directory menyatukan pengelolaan identitas dan kebijakan komputer perusahaan secara terpusat.
- Kerberos membuktikan identitas melalui tiket TGT dan tiket layanan yang diterbitkan oleh KDC.
- Hubungan izin terbagi menjadi keanggotaan, kontrol, dan penggunaan akun layanan.
- Celah eskalasi hak sering muncul dari rantai keanggotaan grup yang bertingkat.

#### Cek pemahaman

1. Apa perbedaan peran antara tiket TGT dan tiket layanan pada Kerberos?
2. Mengapa akun yang hanya punya hak mengubah anggota grup admin bisa sama berbahayanya dengan akun admin itu sendiri?
3. Mengapa sinkronisasi jam sangat penting untuk kelancaran login Kerberos?

### Praktik

Kamu akan mengaudit data keanggotaan grup fiktif menggunakan pemodelan graf di Python.

Gunakan inventaris fiktif ini:

| Akun | Status | Grup langsung | Kebutuhan kerja |
|---|---|---|---|
| rani.kasir | aktif | Kasir | Membaca dan membuat transaksi cabangnya |
| bima.it | aktif | Helpdesk | Mengatur ulang akun kasir |
| vendor.lama | kontrak berakhir | OperatorBackup | Tidak ada |
| svc.laporan | aktif | AdminCabang | Membaca transaksi untuk laporan |

Hubungan grup: `OperatorBackup` masuk ke `AdminCabang`; `AdminCabang` memiliki hak mengubah konfigurasi server cabang.
Ini rancangan buruk untuk latihan, bukan rekomendasi struktur organisasi.

#### 1. Buat dan jalankan skrip audit graf

Buat folder `hasil-belajar/bab20/` melalui pengelola berkas.
Simpan kode berikut sebagai `audit_grup.py` di dalamnya:

```python
anggota = {
    "vendor.lama": ["OperatorBackup"],
    "OperatorBackup": ["AdminCabang"],
    "svc.laporan": ["AdminCabang"],
    "rani.kasir": ["Kasir"],
}

def jalur_ke_admin(awal):
    antrean = [(awal, [awal])]
    pernah = set()
    while antrean:
        simpul, jalur = antrean.pop(0)
        if simpul == "AdminCabang":
            return jalur
        if simpul in pernah:
            continue
        pernah.add(simpul)
        for induk in anggota.get(simpul, []):
            antrean.append((induk, jalur + [induk]))
    return None

for akun in ("vendor.lama", "svc.laporan", "rani.kasir"):
    print(akun, jalur_ke_admin(akun))
```

Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan perintah berikut:

**Windows PowerShell**

```powershell
py hasil-belajar/bab20/audit_grup.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Kamu membuat graf kecil: simpul adalah akun atau grup, sedangkan panah berarti keanggotaan.
Variabel set `pernah` mencegah perulangan tak berujung jika data memuat siklus hubungan tertutup.

#### 2. Identifikasi tiga temuan keamanan

Tulis tiga temuan penting berdasarkan hasil analisis:
Pertama, akun vendor yang kontraknya berakhir masih memiliki jalur menuju admin melalui `OperatorBackup`.
Kedua, akun laporan memiliki hak berlebih dibanding kebutuhan kerja membaca transaksi.
Ketiga, struktur grup backup mencampurkan tugas pemulihan dengan administrasi server penuh.
Menonaktifkan akun vendor menyelesaikan akses akun itu, tetapi belum memperbaiki rancangan grup yang salah.

#### 3. Rancang perbaikan bertahap

Rancang perbaikan bertahap untuk menata ulang struktur izin:

1. Minta pemilik layanan memastikan ketergantungan akun vendor, lalu cabut akses sesuai proses penghentian kontrak.
2. Buat peran laporan yang hanya dapat membaca data yang diperlukan. Uji pekerjaan laporan dengan peran itu pada lab.
3. Pisahkan tugas backup dari administrasi. Tentukan siapa yang menyetujui pemulihan dan siapa yang mengauditnya.
4. Jadwalkan tinjauan keanggotaan bersama pemilik aplikasi; simpan alasan tiap pengecualian.

Uji rancangan pada data Python dengan mengganti hubungan yang berlebih.
Tambahkan uji positif: pekerjaan laporan tetap mendapat hak baca yang sah.
Skrip ini hanya mencari jalur admin. Pemeriksaan hak baca memerlukan model izin tambahan atau lab berizin; simpan hasilnya secara terpisah.
Audit yang hanya mencabut izin dapat merusak layanan jika tidak memeriksa kebutuhan operasional secara menyeluruh.

#### 4. Pendalaman lingkungan AD DS berizin

Pada lingkungan AD DS berizin, perluas latihan menjadi pemeriksaan kebijakan akun layanan, pembatasan administrator, protokol lama, serta log perubahan grup.
Teknik seperti password spraying, pass-the-hash, dan penyalahgunaan tiket menjelaskan risiko identitas; pembelajaran operasionalnya perlu lab khusus dan cakupan tertulis.
Materi ini melatih cara menemukan dan menutup jalur izin tanpa mencoba kredensial pihak lain.

<details>
<summary>Pendalaman opsional: istilah risiko identitas</summary>

- **Password spraying**: mencoba sedikit password pada banyak akun.
- **Pass-the-hash**: menyalahgunakan hash autentikasi untuk bertindak sebagai akun tanpa mengetahui password aslinya.
- **Penyalahgunaan tiket**: memakai tiket autentikasi di luar hak atau tujuan yang sah.

</details>

### Hasil yang diharapkan

Program menunjukkan jalur dua lompatan dari `vendor.lama` menuju `AdminCabang`, jalur langsung untuk `svc.laporan`, dan `None` untuk `rani.kasir`.
Kamu menghasilkan peta akses sesudah perbaikan serta daftar pemilik keputusan.
Hasil `None` hanya berlaku bagi hubungan yang dimasukkan, bukan seluruh izin suatu domain nyata.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Sulit membayangkan hubungan graf | Gambar tiap nama pada kertas, lalu tarik panah ke grup induknya |
| Semua akun tampak berbahaya | Bandingkan izin dengan kebutuhan kerja nyata, status akun, dan sensitivitas aset |
| Percobaan login lab gagal | Periksa kesesuaian waktu jam, DNS, konektivitas, dan pesan error sebelum mengubah kebijakan |

### Latihan

Tambahkan grup `Supervisor` yang boleh mengubah anggota `Kasir`.
Bedakan hubungan kontrol tersebut dari keanggotaan biasa.
Jelaskan mengapa algoritma di atas belum menghitung seluruh bentuk kontrol dan apa data tambahan yang dibutuhkan.

<details>
<summary>Pembahasan setelah mencoba: hubungan kontrol versus keanggotaan</summary>

Hubungan keanggotaan berarti akun mewarisi hak yang dimiliki oleh grup.
Hubungan kontrol berarti akun memiliki izin mengubah struktur keanggotaan grup lain.
Untuk memodelkan hubungan kontrol, kamu memerlukan struktur data relasi tambahan yang mencatat hak manajemen selain hak warisan.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan data inventaris, peta akses sebelum dan sesudah perbaikan, serta tiga temuan risiko.
- [ ] Saya dapat menjelaskan cara kerja tiket Kerberos menggunakan bahasa sendiri.
- [ ] Saya dapat membedakan hasil audit graf sederhana dari penilaian domain Active Directory lengkap.
- [ ] Saya menyimpan hasil uji bahwa fungsi bisnis yang sah tetap berjalan setelah perbaikan izin.

#### Lanjut belajar

Jika konsep izin Windows lokal perlu disegarkan kembali, buka [Bab 05](materi/05-windows.md).
Untuk menyegarkan prinsip least privilege dan pemisahan akun, baca kembali [Bab 10](materi/10-hardening.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 21: Cloud](materi/21-cloud.md) untuk mempelajari arsitektur identitas dan pembatasan izin di lingkungan cloud.

### Referensi

- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).
- [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview).

---

<a id="bab-21"></a>

## Bab 21: Keamanan cloud, container, dan konfigurasi

Tahap 5 dari 6: Memeriksa program dan lingkungan

### Tujuan dan prasyarat

Kamu akan menilai konfigurasi cloud tanpa membuka akun atau menyalakan sumber daya berbayar.
Kemampuan ini membantumu mengaudit penyimpanan data cadangan dan layanan aplikasi Laundry Aman.

Bekal utamamu adalah [jaringan dari Bab 03](materi/03-jaringan.md) serta [identitas dari Bab 09](materi/09-identitas.md) dan [hardening Bab 10](materi/10-hardening.md).
Pahami juga [pembacaan format data JSON dari Bab 15](materi/15-deteksi.md).
Pahami prinsip least privilege untuk membatasi wewenang seminimal mungkin.
Praktik dilakukan dengan membaca dokumen JSON serta rancangan konfigurasi di komputermu sendiri.
Tandai pengujian lingkungan cloud nyata sebagai `NOT_RUN` jika belum terhubung ke sistem berizin.

### Konsep

Laundry Aman mulai memindahkan data cadangan ke pusat data internet.
Komputasi jarak jauh memudahkan toko menambah kapasitas tanpa server fisik baru.
Meskipun penyedia mengurus infrastruktur, pemilik toko tetap bertanggung jawab atas izin datanya.
Kesalahan izin atau konfigurasi wadah dapat membuka data pelanggan.
Kita akan mempelajari tanggung jawab bersama, izin cloud, dan pengamanan container.

#### Memahami model layanan dan tanggung jawab bersama

Laundry Aman ingin menyimpan backup tanpa membeli server baru.

Teknologi **cloud** menyediakan kemampuan komputasi melalui layanan penyedia, seperti menyewa fasilitas kerja sesuai kebutuhan.

Dalam **IaaS** (*Infrastructure as a Service*), pelanggan mengelola lebih banyak lapisan, termasuk sistem operasi mesin virtual.
Bayangkan menyewa ruang kerja yang masih perlu kamu atur sendiri.

Model **PaaS** (*Platform as a Service*) memindahkan sebagian pengelolaan platform kepada penyedia.
Seperti menyewa ruang dengan peralatan dasar, kamu lebih berfokus pada aplikasi.

Model **SaaS** (*Software as a Service*) menyediakan aplikasi siap pakai bagi pengguna akhir.
Seperti memakai layanan pencatatan siap pakai, kamu tetap menentukan akun dan data yang boleh masuk.
Pemilik akun tetap perlu mengatur akses, klasifikasi data, serta konfigurasi yang menjadi tanggung jawabnya.

Model **shared responsibility** membagi tanggung jawab antara penyedia dan pelanggan.
Pembagiannya bergantung pada jenis layanan yang dipilih.

Penyedia menjaga keamanan fisik fasilitas dan perangkat keras; rincian pembagian tetap mengikuti layanan yang dipilih.
Pelanggan bertanggung jawab mengelola akun, data, dan pengaturan izin.
Memindahkan backup Laundry Aman ke cloud tidak menentukan siapa yang boleh mengunduh backup itu; administrator masih harus menetapkan izin.

##### Cukup kenali dulu

- **Penyedia cloud**: perusahaan pengelola infrastruktur komputasi awan.
- **Bucket**: wadah penyimpanan objek file di lingkungan penyimpanan cloud.
- **Multi-tenancy**: pemakaian sumber daya bersama oleh beberapa pelanggan dengan pemisahan sesuai rancangan layanan.

#### Mengatur hak akses dengan IAM dan ARN

Laundry Aman ingin aplikasi laporan hanya membaca berkas yang diperlukan.

Sistem **IAM**, singkatan dari *Identity and Access Management*, mengatur identitas dan izinnya.
Sebuah kebijakan menjawab siapa boleh melakukan aksi apa pada sumber daya mana.
Contoh kebijakan AWS di sini memakai JSON dari Bab 15: nama kolom dipasangkan dengan nilai.
Pada contoh nanti, kolom efek menentukan izinkan/tolak, kolom aksi menentukan tindakan, dan kolom sumber daya menentukan sasaran.

Dalam ekosistem AWS, kode **ARN** (*Amazon Resource Name*) adalah nama pengenal sumber daya.
Penyedia lain memiliki konsep setara dengan format berbeda.
Kebijakan contoh di bab ini memakai AWS agar sintaksnya konkret, tetapi prinsipnya berlaku lintas penyedia.
Hindari pemakaian tanda bintang tanpa batas pada penulisan kebijakan hak akses.

##### Cukup kenali dulu

- **Prinsipal**: pengguna, akun, atau layanan yang meminta izin melakukan tindakan.
- **Efek pernyataan**: penentuan izin, berupa mengizinkan (*Allow*) atau menolak (*Deny*).
- **KMS**: Key Management Service, layanan pengelola kunci enkripsi data.

#### Mengisolasi aplikasi dengan container dan serverless

Laundry Aman ingin memindahkan aplikasi laporan tanpa menyiapkan ulang seluruh lingkungan aplikasi.

Teknologi **container** mengemas aplikasi beserta lingkungan pengguna yang dibutuhkannya.
Container pada umumnya berbagi kernel host, sehingga batasnya berbeda dari VM.
Kernel adalah inti sistem operasi; host adalah komputer yang menjalankan container.
Menjalankannya dengan hak istimewa atau memasang direktori host dapat memperluas dampak kesalahan.
Mode privileged memberi container wewenang tambahan terhadap host.

Praktik **Infrastructure as Code**, atau IaC, menyimpan rancangan infrastruktur sebagai kode agar tim bisa meninjau dan mengulang perubahan.

Arsitektur **Serverless** mengurangi pengelolaan server langsung, tetapi fungsi tetap mempunyai identitas, input, komponen tambahan, dan akses jaringan.
Rahasia yang tertulis di kode fungsi tetap menjadi masalah meskipun penyedia mengurus servernya.

<details>
<summary>Pendalaman opsional: audit kluster Kubernetes</summary>

**Kubernetes** mengelola container pada sekumpulan komputer atau kluster.
Kamu tidak perlu memasangnya untuk audit rancangan ini. Kenali perlindungan berikut saat mengambil jalur tersebut:

- **Pod Security Standards**: aturan keamanan untuk unit aplikasi Kubernetes yang disebut Pod.
- **Service account**: identitas bagi pekerjaan yang berjalan dalam kluster.
- **RBAC**: pengaturan hak akses berdasarkan peran.
- **NetworkPolicy**: aturan komunikasi jaringan untuk Pod, yang memerlukan dukungan sistem jaringan kluster.
- **Namespace**: pengelompokan sumber daya; pengelompokan ini belum menyediakan seluruh isolasi keamanan.

</details>

#### Ringkasan

- Model shared responsibility membagi tanggung jawab; keamanan data dan izin tetap di tangan pelanggan.
- Kebijakan IAM berformat JSON mengatur aksi yang diizinkan pada sumber daya ARN tertentu.
- Container berbagi kernel sistem; hindari opsi privileged dan jangan pasang direktori root host.
- Infrastructure as Code mencatat konfigurasi sebagai kode yang dapat diaudit dan diulang.

#### Cek pemahaman

1. Apa yang tetap perlu diatur pemilik akun setelah memilih layanan cloud?
2. Mengapa tanda bintang `*` tanpa batas sumber daya perlu diperiksa terhadap kebutuhan aplikasi?
3. Mengapa sebuah container yang dibobol dapat berdampak lebih luas jika dijalankan dengan opsi privileged?

### Praktik

Pemilik Laundry Aman meminta aplikasi laporan membaca berkas dari awalan `laporan/` di sebuah bucket, yaitu wadah objek penyimpanan.
Ia tidak memberi kebutuhan menghapus, menulis, atau membaca backup pelanggan.

#### 1. Periksa kebijakan yang terlalu luas

Berikut usulan kebijakan awal yang terlalu luas dan berbahaya:

Baca blok JSON ini di editor sebagai dokumen usulan. Jangan menempelkannya ke terminal atau memasangnya pada akun cloud.

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "s3:*",
    "Resource": "*"
  }]
}
```

Tanda `*` pada aksi mencakup aksi S3 yang cocok dengan pola; tanda `*` pada sumber daya memperluas cakupan sumber daya dalam evaluasi kebijakan.
Akses efektif masih bergantung pada kebijakan lain dan penolakan eksplisit.
Jangan menganggap satu dokumen sudah mewakili seluruh keputusan izin.

#### 2. Tulis usulan perbaikan least privilege

Tulis perbaikan berikut ke catatan sebagai usulan, bukan perintah deployment:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::laundry-lab-contoh/laporan/*"
  }]
}
```

Nama bucket di sini hanya contoh.
Kebijakan membatasi pembacaan objek pada awalan yang diminta.
Aksi `s3:ListBucket` adalah izin berbeda pada ARN bucket; tambahkan hanya bila kebutuhan aplikasi memerlukannya dan batasi kondisinya.
Kebijakan ini juga belum memberi izin KMS jika objek membutuhkan kunci KMS tertentu.

#### 3. Buat matriks uji keputusan

Buat matriks uji sebelum mempertimbangkan deployment:

| Permintaan | Keputusan yang diinginkan | Alasan |
|---|---|---|
| Membaca `laporan/november.csv` | Izinkan | Sesuai tugas |
| Membaca `backup/pelanggan.csv` | Tolak | Di luar awalan |
| Menghapus laporan | Tolak | Tidak ada kebutuhan hapus |
| Menulis laporan baru | Tolak | Aplikasi ini hanya pembaca |

Matriks ini adalah rancangan test, bukan hasil pemanggilan AWS.
Tandai validasi cloud sebagai `NOT_RUN`.
Saat kelak memakai lingkungan berizin, uji akses positif dan negatif melalui simulator atau lingkungan uji yang sesuai, lalu periksa keseluruhan kebijakan yang berlaku.

#### 4. Audit konfigurasi container

Lanjutkan dengan audit rancangan container fiktif berikut:

```text
image: laundry-app:latest
user: root
privileged: true
host_mount: /:/host
secret: ditulis dalam berkas konfigurasi sumber
network: menerima koneksi dari semua alamat
```

Hubungkan tiap temuan dengan kemungkinan dampak:

- Image adalah paket aplikasi; tag seperti latest dapat menunjuk isi berbeda sehingga artefak yang dipasang sulit dilacak.
- Pengguna root mempunyai wewenang tinggi di container; mode privileged memperluas kewenangan terhadap host.
- Mount menghubungkan folder host ke container; mount root host membuka akses ke data host sesuai izin yang berlaku.
- Secret atau rahasia di sumber dapat menyebar ke riwayat Git.
- Akses jaringan perlu mengikuti kebutuhan layanan.

Usulkan perbaikan konfigurasi:
Gunakan image dengan digest, yaitu pengenal berdasarkan hash isi, yang sudah diverifikasi.
Terapkan pengguna non-root dan hapus privilese yang tidak diperlukan.
Hilangkan mount host dan kelola secret melalui mekanisme yang aman.
Batasi koneksi jaringan sesuai kebutuhan tugas.

Konfigurasi ini perlu uji aplikasi: beberapa program memerlukan direktori sementara yang tetap dapat ditulis.
Filesystem read-only melarang penulisan; tanpa rancangan penyimpanan sementara, aplikasi dapat gagal.

### Hasil yang diharapkan

Kamu menghasilkan kebijakan lebih sempit, empat keputusan uji, serta enam temuan konfigurasi container.
Untuk tiap temuan, kamu menjelaskan siapa yang terdampak dan uji apa yang membuktikan perbaikannya.
Kamu juga dapat membedakan review offline dari bukti akses efektif di cloud.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Sulit memahami format ARN | Pisahkan bagian layanan, nama bucket, dan awalan objek secara teratur |
| Tergoda memakai tanda `*` | Catat aksi yang gagal dan kebutuhan bisnisnya, lalu tambahkan izin spesifik |
| Hardening memutus aplikasi | Periksa kebutuhan izin tulis sementara dan jaringan tanpa membuka wewenang penuh |

### Latihan

Rancang akses cabang A dan B sehingga masing-masing hanya membaca awalan miliknya.
Tambahkan satu akun audit yang boleh membaca kedua laporan tanpa menghapusnya.
Buat enam kasus uji lintas peran, termasuk akses ke backup yang harus ditolak.

<details>
<summary>Pembahasan setelah mencoba: pembagian awalan bucket</summary>

Gunakan ARN terpisah untuk masing-masing cabang, misalnya `laporan/cabang-a/*` dan `laporan/cabang-b/*`.
Akun audit mendapat izin `s3:GetObject` dengan sumber daya mencakup kedua awalan tersebut.
Periksa seluruh kebijakan yang berlaku agar tidak ada izin efektif untuk `s3:DeleteObject` atau akses ke awalan cadangan `backup/*`.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan diagram aliran data, tabel tanggung jawab, usulan kebijakan JSON, dan matriks izin.
- [ ] Saya dapat membedakan batas IAM, kontrol jaringan, enkripsi, dan backup sebagai mekanisme terpisah.
- [ ] Saya dapat menjelaskan bahaya pemakaian hak root dan mount host pada rancangan container.
- [ ] Saya mencatat hasil review luring terpisah dari validasi akses cloud yang masih `NOT_RUN`.

#### Lanjut belajar

Jika konsep least privilege dan akun perlu diperdalam lagi, buka kembali [Bab 10](materi/10-hardening.md).
Untuk menyegarkan pemahaman pembacaan log JSON, baca kembali [Bab 15](materi/15-deteksi.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 22: Secure SDLC](materi/22-secure-sdlc.md) untuk mempelajari integrasi pengujian keamanan ke dalam alur pengembangan perangkat lunak.

### Referensi

- [AWS IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).
- [AWS S3 policy language dan cakupan sumber daya](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html).
- [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/).

---

<a id="bab-22"></a>

## Bab 22: Membangun perangkat lunak yang bisa dipercaya

Tahap 5 dari 6: Memeriksa program dan lingkungan

### Tujuan dan prasyarat

Kamu akan mengubah temuan keamanan menjadi syarat fitur, test, perubahan kode, serta bukti rilis.
Kemampuan ini membantumu memastikan aplikasi Laundry Aman dibangun dan dirilis secara bertanggung jawab.

Bekal utamamu adalah [Git dari Bab 06](materi/06-pemrograman.md) serta [kriptografi dari Bab 08](materi/08-kriptografi.md).
Pahami juga [otorisasi dari Bab 09](materi/09-identitas.md), [threat modeling dari Bab 11](materi/11-threat-modeling.md), dan [kelemahan web dari Bab 13](materi/13-web-api.md).
Latihan memakai rancangan fitur Laundry Aman serta lab lokal yang tersedia dalam repositori di `labs/access_demo.py`.

### Konsep

Laundry Aman terus memperbarui aplikasi layanannya dengan menambah fitur baru.
Keamanan tidak bisa hanya dipikirkan saat program selesai dibuat.
Keputusan rancangan awal menentukan seberapa tahan aplikasi terhadap serangan.
Alur kerja yang baik menguji keamanan sejak awal dan mencatat rilis teratur.
Kita akan mempelajari siklus aplikasi, rantai pasok kode, dan pengujian keamanan.

#### Mengintegrasikan keamanan ke dalam siklus SDLC

Laundry Aman ingin menambah fitur ekspor tanpa membuka data cabang lain.

Kerangka kerja **SDLC**, singkatan dari *Software Development Life Cycle*, mencakup pekerjaan sejak kebutuhan aplikasi sampai pemeliharaannya.
Tim memasukkan keamanan pada tahap desain, implementasi, pengujian, rilis, dan respons terhadap temuan.
Menemukan bug setelah rilis tetap penting, tetapi keputusan awal sering menentukan berapa sulit memperbaikinya.

**Security requirement** adalah syarat keamanan fitur, seperti kasir hanya boleh mengekspor transaksi cabangnya.
Seperti syarat penyerahan pakaian kepada pemiliknya, syarat fitur perlu mempunyai cara pemeriksaan yang jelas.

##### Cukup kenali dulu

- **Rancangan aman**: keputusan arsitektur yang membatasi hak akses sejak awal pembuatan program.
- **Regression test**: pengujian agar perubahan tidak mengembalikan bug atau merusak perilaku lain.

#### Mengamankan rantai pasok perangkat lunak

Pengembang Laundry Aman memakai pustaka luar untuk membuat berkas ekspor.
Dependency berarti komponen yang dibutuhkan aplikasi, seperti pustaka pembentuk berkas ekspor.

Build adalah proses membentuk paket aplikasi yang akan dipasang.

Konsep **supply chain perangkat lunak** mencakup kode, dependency, pembuat paket, sistem build, dan jalur distribusi.
Aplikasi dapat menerima risiko dari paket keliru, akun pengelola paket yang diambil alih, atau build yang berubah tanpa review.
Mengetahui asal sebuah berkas membantu penyelidikan, tetapi asal tepercaya tidak membuktikan seluruh kodenya bebas cacat.

##### Cukup kenali dulu

- **Kunci versi**: penetapan versi pustaka; hasil build identik juga memerlukan sumber, lingkungan, serta instruksi build yang sesuai.
- **Pipeline build**: alur otomatis yang menguji dan membangun paket kode; isolasi lingkungannya perlu dirancang.
- **Integritas paket**: verifikasi sidik hash paket untuk memastikan file tidak diubah di perjalanan.

#### Memilih alat bantu pengujian keamanan kode

Tim Laundry Aman ingin memeriksa fitur ekspor dan asal komponen pembentuknya.
Pilih alat berdasarkan pertanyaan yang perlu dijawab:

**SAST**, *Static Application Security Testing*, memeriksa pola berisiko pada kode, seperti membaca rancangan mesin sebelum menyalakannya.

**DAST**, *Dynamic Application Security Testing*, memeriksa perilaku aplikasi berjalan, seperti menguji mesin yang sudah menyala.

**SCA**, *Software Composition Analysis*, memeriksa komponen pihak ketiga dan kerentanan yang diketahui, seperti mencocokkan suku cadang dengan pemberitahuan masalah pemasok.

**SBOM**, *Software Bill of Materials*, memuat daftar komponen perangkat lunak, seperti daftar bahan untuk menelusuri isi paket.
Kelengkapannya bergantung pada proses penyusunan daftar itu.

**Provenance** menjelaskan sumber dan proses build asal artefak, yaitu berkas hasil build, seperti catatan asal barang dari pemasok.

Bandingkan fokus kelima pendekatan tersebut pada tabel berikut:

| Istilah | Pertanyaan yang dibantu |
|---|---|
| SAST | Pola berisiko apa yang tampak pada kode? |
| DAST | Perilaku berisiko apa yang tampak ketika aplikasi berjalan? |
| SCA | Komponen pihak ketiga apa yang dipakai dan diketahui bermasalah? |
| SBOM | Apa daftar bahan penyusun perangkat lunak ini? |
| Provenance | Dari sumber dan proses build mana artefak berasal? |

Alat tersebut menjawab pertanyaan berbeda.
Pemindai dependency tidak membuktikan otorisasi pesanan benar.
Signature atau tanda tangan digital dari Bab 08 membantu memverifikasi penerbit atau integritas sesuai mekanismenya.
Tanda tangan tidak menjamin bahwa kode yang ditandatangani aman.

#### Ringkasan

- SDLC memasukkan pertimbangan keamanan sejak tahap perancangan hingga rilis dan pemeliharaan.
- Supply chain perangkat lunak mencakup seluruh pustaka dan alur build yang membentuk aplikasi.
- SAST, DAST, SCA, SBOM, dan provenance menjawab aspek pengujian yang saling melengkapi.
- Pengujian izin hak akses di server tidak boleh digantikan oleh pemeriksaan di peramban.

#### Cek pemahaman

1. Mengapa pemindai pustaka (SCA) yang menyatakan hijau belum menjamin aplikasi bebas dari celah otorisasi?
2. Mengapa tanda tangan digital pada file rilis belum membuktikan bahwa kode di dalamnya bebas dari bug?
3. Mengapa jawaban dari model AI wajib diperlakukan sebagai masukan tak tepercaya oleh server?

### Praktik

Di editor, buat catatan rancangan fitur ekspor transaksi Laundry Aman.
Mulai dari kebutuhan: kasir boleh mengekspor transaksi cabangnya, supervisor boleh mengekspor cabang yang dikelolanya, dan pelanggan tidak mendapat fitur ekspor seluruh transaksi.

#### 1. Tetapkan invariant aturan bisnis

Ubah kebutuhan menjadi empat **invariant**, yaitu aturan yang harus tetap benar:

1. Server mengambil identitas peminta dari sesi yang telah diverifikasi.
2. Server memeriksa peran dan cabang sebelum menghasilkan ekspor.
3. Ekspor tidak memuat kolom yang tidak diperlukan untuk pekerjaan peminta.
4. Log mencatat siapa mengekspor apa dan kapan tanpa menyimpan seluruh isi data.

Jangan menerima `role=admin` dari body permintaan sebagai bukti peran.
Nilai dari pengguna adalah input; server perlu mencari hak yang sah dari sumber identitasnya.

#### 2. Susun matriks pengujian kasus

Buat rancangan test berikut sebelum menulis fungsi:

| Kasus | Hasil |
|---|---|
| Kasir A meminta cabang A | Data yang diperbolehkan saja |
| Kasir A meminta cabang B | Penolakan tanpa data cabang B |
| Pelanggan meminta ekspor penuh | Penolakan |
| Kasir A mengirim parameter peran palsu | Hak tetap sebagai kasir A |
| Sesi sudah berakhir | Penolakan autentikasi |
| Ekspor sah selesai | Audit event tercatat tanpa isi pelanggan |

Gunakan `labs/access_demo.py` untuk mengulang konsep pemeriksaan pemilik objek.
Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan perintah berikut:

**Windows PowerShell**

```powershell
py labs/access_demo.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Baca sumber contoh, lalu jelaskan bagian mana yang dapat berkembang menjadi pemeriksaan cabang.
Contoh lokal adalah model pembelajaran; penanganan sesi, penyimpanan, serta audit produksi memerlukan rancangan tambahan.

#### 3. Audit alur rilis dan buat catatan rilis

Selanjutnya, audit jalur rilis fiktif berikut:

```text
Developer mengubah kode
  -> dependency diambil tanpa versi terkunci
  -> test dijalankan
  -> paket dibangun di laptop pribadi
  -> paket diunggah dengan akun bersama
  -> server memasang berkas tanpa pencatatan hash
```

Tandai titik yang menyulitkan pengulangan dan pertanggungjawaban:
Test hari ini mungkin memakai versi dependency berbeda karena tidak terkunci.
Akun bersama mengaburkan identitas pelaku rilis.
Artefak build sulit ditautkan dengan commit yang diuji.

Rancang alur pengganti: review perubahan, dependency terkunci serta ditinjau, test otomatis, build pada lingkungan terkendali, identitas rilis terbatas, lalu pencatatan commit dan digest artefak.
Sebelum memasang, verifikasi bukti asal yang disediakan proses build.
Tentukan pula cara menarik rilis bermasalah dan memulihkan versi sebelumnya.

Buat catatan rilis latihan:

```text
Perubahan: pembatasan ekspor berdasarkan cabang
Sumber: identitas commit atau snapshot sumber yang diuji
Verifikasi: enam kasus izin, satu uji format ekspor
Artefak: nama dan SHA-256 berkas hasil
Pemulihan: kembali ke versi sebelumnya setelah memeriksa kompatibilitas data
Pemilik: penanggung jawab rilis fiktif
Keterbatasan: belum menguji data produksi atau kapasitas besar
```

Jangan memasukkan secret ke commit, hasil test, atau screenshot.
Jika secret benar-benar bocor, penghapusan teks dari commit terakhir tidak mencabut nilainya.
Pemilik perlu melakukan pencabutan atau rotasi, meninjau pemakaian, dan membersihkan lokasi penyimpanan yang relevan.

Untuk aplikasi yang memakai model AI, perlakukan jawaban model dan dokumen yang diambilnya sebagai input tak tepercaya.
Pemeriksaan izin serta pembatasan alat tetap berada pada kode aplikasi.
Isi dokumen pelanggan tidak boleh mengubah hak pengguna atau kebijakan ekspor.

### Hasil yang diharapkan

Kamu menghasilkan aturan fitur yang bisa diuji, matriks izin, serta diagram rilis dengan bukti sumber dan artefak.
Temuan keamanan berubah menjadi kondisi kelulusan test yang jelas.
Kamu dapat menjelaskan siapa yang menangani temuan setelah produk dipakai.

### Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Test hanya menguji akses berhasil | Tambahkan kasus negatif: perpindahan pengguna, cabang, peran palsu, dan sesi kedaluwarsa |
| Pemindai memberi ratusan peringatan | Validasi keterjangkauan serta dampak sebelum menentukan prioritas; simpan alasan penundaan |
| Versi pustaka terkunci usang | Lakukan pembaruan terencana secara berkala dan pantau advisori keamanan resmi |

### Latihan

Tambahkan fitur hapus transaksi dengan pembatalan yang tercatat.
Tentukan siapa yang boleh melakukan, batas umur transaksi, dan jejak audit.
Susun test untuk menghindari penghapusan lintas cabang serta test bahwa kegagalan tidak meninggalkan data setengah berubah.

<details>
<summary>Pembahasan setelah mencoba: fitur pembatalan transaksi</summary>

Gunakan aturan peran dan umur transaksi yang kamu tetapkan sendiri untuk menentukan siapa yang boleh membatalkan.
Uji bahwa pengguna di luar izin, termasuk cabang lain, ditolak.
Periksa bahwa kegagalan tidak meninggalkan perubahan sebagian dan jejak audit tetap sesuai hasil tindakan.

</details>

### Bukti kelulusan

- [ ] Saya menyimpan berkas threat model kecil, rancangan test positif dan negatif, serta catatan rilis.
- [ ] Pemeriksa lain dapat menautkan satu risiko ke syarat fitur, perubahan, dan bukti test yang menutupnya.
- [ ] Saya dapat menerangkan peran SAST, DAST, SCA, SBOM, dan provenance dalam alur build.
- [ ] Saya memahami langkah penanganan saat secret atau kunci API tidak sengaja masuk ke repositori.

#### Lanjut belajar

Kamu telah menyelesaikan seluruh materi Tahap 5: Memeriksa program dan lingkungan (Bab 18 sampai 22).
Di tahap ini, kamu sudah mempelajari analisis program, keamanan memori, identitas Active Directory, arsitektur cloud, dan secure SDLC.

Pada tahap terakhir (Tahap 6: Mengambil keputusan dan membuktikan kemampuan), kamu akan beralih ke penilaian risiko tingkat lanjut dan proyek akhir.
Lanjutkan ke [Bab 23: Threat Intelligence](materi/23-intelijen.md) untuk mempelajari pengumpulan informasi ancaman keamanan.
Untuk mengulang pemodelan ancaman aplikasi, buka kembali [Bab 11](materi/11-threat-modeling.md) dan [Bab 13](materi/13-web-api.md).

### Referensi

- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf).
- [SLSA specification](https://slsa.dev/spec/v1.2/).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).

---

<a id="bab-23"></a>

## Bab 23: OSINT dan intelijen ancaman yang dapat diperiksa

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

### Tujuan dan prasyarat

Kamu akan membuat catatan satu halaman untuk menentukan tindakan Laundry Aman setelah menerima kabar kerentanan.
Kamu juga akan memeriksa satu pemberitahuan vendor nyata tanpa menguji produknya.

Bekalmu adalah [aset dan risiko pada Bab 11](materi/11-threat-modeling.md), serta [kelemahan jalur file pada Bab 13](materi/13-web-api.md).
Ulangi [pembacaan log pada Bab 15](materi/15-deteksi.md) dan [penilaian kejadian pada Bab 16](materi/16-respons-insiden.md).

Gunakan kertas atau editor untuk kasus fiktif. Browser di komputer atau HP cukup untuk membaca sumber nyata.
Jangan mencari data pribadi, menghubungi infrastruktur mencurigakan, atau menguji target di luar izin.

### Konsep

Pemilik Laundry Aman membaca kabar bahwa aplikasi laporannya bermasalah.
Ia perlu tahu apakah toko memakai versi yang terdampak dan pekerjaan apa yang harus didahulukan.
Kita akan memeriksa asal kabar, mencocokkannya dengan keadaan toko, lalu memisahkan fakta dari dugaan.
Setelah itu, kita menentukan tindakan beserta orang yang bertanggung jawab.

#### Mulai dari keputusan pemilik toko

Pemilik bertanya apakah aplikasi perlu diperbarui hari ini.
**OSINT**, singkatan dari *Open Source Intelligence*, memakai sumber terbuka untuk menjawab pertanyaan tertentu.
Kamu mencari informasi seperti petugas toko yang memeriksa pengumuman pemasok sebelum menerima barang.
Membuka banyak situs saja belum menjawab keputusan pemilik.

**Threat intelligence** menghubungkan informasi ancaman dengan aset dan keputusan yang perlu diambil.
Seperti mencocokkan pengumuman pemasok dengan barang di gudang, kamu memeriksa apakah kabar itu berlaku bagi toko.
Kamu juga bisa memakai cara ini untuk menentukan apakah alamat dalam log perlu diselidiki.

#### Cocokkan kabar dengan aplikasi yang terpasang

Kasir menemukan pemberitahuan vendor tentang aplikasi laporan.
**Advisori** adalah pemberitahuan teknis tentang masalah, kondisi terdampak, dan tindakan yang disarankan.
Catat produk, versi, konfigurasi, siapa yang dapat menjangkau fitur, serta perlindungan sementara yang berlaku.

Advisori dapat menyebut **CVE**, pengenal untuk kerentanan tertentu, seperti nomor tiket satu kerusakan.
Nomor itu membantu mencari catatan yang sama. Kamu tetap perlu mencocokkan kondisi teknisnya dengan aplikasi Laundry Aman.

**CWE** mengelompokkan jenis kelemahan, seperti kategori kerusakan pada buku servis.
Kontrol akses yang keliru adalah contoh jenis kelemahan. Pengenal kerentanan tertentu dan kelompok jenis kelemahan menjawab pertanyaan berbeda.

Versi yang cocok dengan advisori menunjukkan kemungkinan terdampak sesuai kondisi tersebut.
Untuk menyatakan **kompromi**, yaitu keberhasilan pihak tak berhak mengakses atau mengubah sistem atau data, kamu memerlukan bukti kejadian tambahan.

#### Telusuri asal kabar sebelum mempercayainya

Pemilik menerima dua artikel dengan kalimat serupa tentang aplikasi toko.
**Sumber primer** berasal dari pihak yang mengamati atau memelihara objek terkait, misalnya vendor yang menulis advisori.
Bayangkan dua fotokopi nota yang sama: keduanya tetap berasal dari satu transaksi.
Dua artikel yang menyalin satu laporan juga bukan dua bukti independen.

Simpan asal informasi agar pembaca bisa menelusurinya.
Lalu beri **tingkat keyakinan**, penilaian seberapa kuat bukti mendukung satu klaim.
Kecocokan versi dapat memiliki keyakinan tinggi ketika inventaris dan advisori sepakat.
Dugaan kompromi tetap lemah jika kamu hanya melihat satu permintaan yang ditolak.

#### Bedakan alamat petunjuk dari pola tindakan

Petugas Laundry Aman melihat sebuah domain pada laporan ancaman.
**IOC**, singkatan dari *indicator of compromise*, adalah petunjuk seperti hash atau domain yang terkait aktivitas tertentu.
Petunjuk ini seperti nomor kendaraan pada laporan kejadian: kamu masih perlu memeriksa waktu dan konteksnya.

Petugas juga ingin mengenali tindakan serupa jika pelaku mengganti alamat.
**TTP**, singkatan dari *tactics, techniques, and procedures*, menjelaskan tujuan, cara, dan rincian pola tindakan pelaku.
Seperti mencatat cara seseorang masuk gudang, pola perilaku membantu merancang deteksi yang tidak bergantung pada satu alamat.
IOC dapat berubah cepat; kecocokannya sendiri belum membuktikan siapa pelaku atau apa yang berhasil dilakukan.

#### Cari catatan eksploitasi dan nama perilaku

Petugas toko ingin tahu apakah kerentanan aplikasi sudah pernah dimanfaatkan.
**KEV**, *Known Exploited Vulnerabilities*, adalah katalog CISA tentang kerentanan yang diketahui telah dieksploitasi.
Bayangkan daftar jenis kunci yang sudah pernah dibobol; daftar itu tidak menyatakan bahwa kunci toko ini juga sudah dibobol.
Bug yang tidak tercantum tetap dapat berbahaya. Cocokkan entri dengan advisori vendor dan keadaan aset toko.

Setelah membaca log toko, petugas perlu menamai perilaku yang terlihat.
**ATT&CK** adalah kumpulan pengetahuan perilaku penyerang dari MITRE, seperti daftar kategori tindakan untuk mencocokkan catatan kejadian.
Pemetaan memberi nama pada perilaku yang didukung bukti; pemetaan sendiri belum membuktikan tindakan lain dalam rangkaian serangan.

##### Cukup kenali dulu

- **Traffic Light Protocol**: aturan penandaan batas berbagi informasi; rujukan FIRST membantu menentukan penerima yang sesuai.

#### Ringkasan

- Mulai dari pertanyaan keputusan, lalu cocokkan kabar dengan aset toko.
- Pisahkan pengenal kerentanan, jenis kelemahan, dan bukti kejadian.
- Telusuri sumber asal dan tulis keyakinan untuk tiap klaim.
- Pilih tindakan yang tetap berguna ketika informasi belum lengkap.

#### Cek pemahaman

1. Mengapa dua artikel yang menyalin satu advisori belum menjadi dua bukti independen?
2. Mengapa versi terdampak dan satu permintaan ditolak belum membuktikan kompromi?
3. Apa manfaat pola perilaku ketika alamat dalam laporan berubah?

### Praktik

#### 1. Baca kartu kasus

Di kertas atau editor, siapkan catatan kasus Laundry Aman.
Blok berikut adalah data untuk dibaca, bukan perintah. Nama produk dan advisori seluruhnya fiktif.

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

#### 2. Susun keputusan dari bukti

Pada catatanmu, kerjakan enam langkah berikut:

1. Tulis pertanyaan: “Apakah kita terdampak dan tindakan apa yang perlu dilakukan hari ini?”
2. Catat fakta: versi masuk rentang; fitur aktif; permintaan tercatat sebagai ditolak; aplikasi punya ketergantungan pada import.
3. Pisahkan dugaan: penolakan itu mungkin percobaan tak sah atau salah input pengguna. Belum ada bukti bahwa data terbaca.
4. Nilai sumber: A relevan terhadap mekanisme bug; B membuat klaim luas tanpa bukti; C menjelaskan keadaan aset milik sendiri.
5. Pilih tindakan: koordinasikan pembatasan import atau jalur pemakaiannya, amankan log, uji pembaruan, dan periksa aktivitas import di sekitar waktu kejadian.
6. Tetapkan pemilik, tenggat, serta kondisi penutupan: versi baru terpasang dan test fungsi import serta test penolakan path lulus.

Periksa apakah tiap fakta menunjuk sumber A, B, C, atau log pada kartu.
Tulis ringkasan seperti contoh ini:

> Inventaris menunjukkan versi dan fitur kita cocok dengan kondisi terdampak pada advisori latihan. Kita belum memiliki bukti kompromi. Tim aplikasi perlu menguji pembaruan malam ini. Sambil menunggu, pemilik toko menyetujui pembatasan import dan memeriksa kebutuhan kerja cabang. Tim investigasi menyimpan log serta menelusuri permintaan terkait.

Tambahkan tingkat keyakinan beserta alasannya untuk tiap klaim penting.
Gunakan tinggi untuk kecocokan versi karena inventaris dan advisori sepakat.
Gunakan rendah untuk dugaan kompromi karena hanya ada satu kejadian penolakan.
Hindari angka probabilitas tanpa dasar pengukuran.

#### 3. Periksa satu advisori nyata

Buka repositori resmi CISA KEV melalui Referensi di browser komputer atau HP.
Pilih satu entri dan ikuti tautannya. Jika belum menuju vendor, cari advisori resmi untuk CVE yang sama.
Catat tanggal pemeriksaan, produk, kondisi terdampak, dan tindakan vendor.
Hasilnya adalah catatan sumber nyata yang dapat ditelusuri.

Kamu hanya membaca sumber. Jangan mengunduh demonstrasi eksploitasi atau menjalankan pengujian target.
Ketidakhadiran sebuah bug dari KEV tidak membuktikan bug itu aman.
Jika belum membaca sumber nyata, tandai bagian ini `NOT_RUN` beserta alasannya.

#### 4. Batasi pemetaan perilaku

Pada catatan kasus, tulis perilaku yang didukung bukti sebelum mencari nama teknik dalam ATT&CK.
Jangan mengisi seluruh rantai serangan hanya karena satu teknik tampak mungkin.
Kamu boleh menulis “belum diketahui” jika kartu belum memberi bukti yang cukup.

### Hasil yang diharapkan

Kamu mempunyai catatan intelijen satu halaman berisi pertanyaan, fakta, dugaan, sumber, keyakinan, dan tindakan.
Pembaca bisa membedakan “terdampak kerentanan” dari “terbukti mengalami kompromi”.
Keduanya memerlukan respons sesuai bukti: perbaikan kondisi rentan dan penyelidikan kejadian dapat berjalan bersama.

Simpan verifikasi advisori nyata atau catatan `NOT_RUN` jika belum dikerjakan.
Catatan itu belum menggantikan syarat kelulusan verifikasi sumber nyata.

### Jika macet

- Ada banyak artikel serupa: telusuri tautan ke laporan asal dan hitung sumber independennya.
- Alamat IP masuk daftar reputasi buruk: periksa tanggal, layanan bersama, dan konteks log sebelum memblokir layanan penting.
- Analisis macet karena belum pasti: tulis data yang kurang dan tindakan sementara yang proporsional dengan dampaknya.

### Latihan

Ubah kasus sehingga versi aplikasi 2.5.0, tetapi inventaris terakhir berumur enam bulan.
Tentukan kesimpulan yang masih boleh dibuat dan pemeriksaan pertama yang paling berguna.
Gunakan umur catatan sebagai petunjuk untuk menilai keyakinanmu.

Buat juga catatan distribusi: siapa perlu tahu rincian teknis, siapa hanya membutuhkan keputusan bisnis.
Periksa apakah penerima dapat menjalankan tanggung jawabnya dengan informasi yang kamu pilih.

### Bukti kelulusan

- [ ] Saya menyerahkan satu catatan ringkas kasus fiktif dan satu verifikasi advisori nyata tanpa pengujian target.
- [ ] Saya memberi sumber atau label dugaan pada semua klaim penting.
- [ ] Saya menyertakan alasan tingkat keyakinan dan rekomendasi yang mempertimbangkan aset Laundry Aman.

#### Lanjut belajar

Kembali ke [Bab 22](materi/22-secure-sdlc.md) untuk meninjau bukti pembaruan komponen.
Jika fakta dan dugaan masih tercampur, ulangi [Bab 16](materi/16-respons-insiden.md), lalu nilai kembali satu klaim pada kartu.
Setelah bukti siap, lanjut ke [Bab 24: keputusan risiko](materi/24-grc.md).

### Referensi

- [CISA KEV, mirror resmi data](https://github.com/cisagov/kev-data).
- [MITRE ATT&CK](https://attack.mitre.org/).
- [FIRST Traffic Light Protocol untuk batas berbagi informasi](https://www.first.org/tlp/).

---

<a id="bab-24"></a>

## Bab 24: Risiko, tata kelola, dan keputusan bisnis

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

### Tujuan dan prasyarat

Kamu akan mengubah tiga temuan Laundry Aman menjadi daftar tindakan dengan pemilik, tenggat, dan bukti keberhasilan.
Hasil akhirnya mencakup daftar risiko, target pemulihan, hubungan kontrol dengan bukti, serta memo untuk pemilik toko.

Bekalmu adalah [pemulihan pada Bab 10](materi/10-hardening.md) dan [aset, ancaman, serta kontrol pada Bab 11](materi/11-threat-modeling.md).
Ulangi [respons insiden pada Bab 16](materi/16-respons-insiden.md) dan [akses vendor pada Bab 20](materi/20-enterprise.md).

Gunakan kertas atau editor di komputer maupun HP. Semua kasus dan angka adalah ilustrasi.
Latihan ini tidak memberikan kesimpulan hukum atau sertifikasi kepatuhan.

### Konsep

Pemilik Laundry Aman menerima tiga temuan, tetapi waktu pemeliharaan toko terbatas.
Ia perlu tahu data apa yang terancam dan apakah toko dapat terus beroperasi.
Kita akan menjelaskan dampak, memilih pekerjaan, lalu menentukan siapa yang boleh mengambil keputusan.
Sesudah perbaikan, kita memeriksa bukti sebelum menutup temuan.

#### Siapa memutuskan, apa yang dijaga, dan aturan mana yang berlaku?

Pemilik toko menetapkan siapa boleh menyetujui penghentian layanan dan siapa harus memperbaiki aplikasi.
**Governance**, atau tata kelola, menjelaskan siapa yang menetapkan arah dan bertanggung jawab.
Seperti pembagian tanggung jawab membuka toko, tata kelola membuat orang tahu keputusan yang menjadi wewenangnya.

Pemilik lalu menilai kemungkinan transaksi hilang atau pelanggan membaca pesanan orang lain.
**Risk management** adalah pengelolaan ketidakpastian yang dapat merugikan tujuan organisasi.
Seperti menentukan pekerjaan toko yang harus didahulukan, kamu membandingkan skenario kerugian dan memilih penanganannya.

Toko juga mempunyai kewajiban dari kontrak atau regulasi.
**Compliance**, atau kepatuhan, memeriksa kesesuaian terhadap kewajiban yang berlaku.
Bayangkan mencocokkan pekerjaan dengan syarat kontrak: kamu perlu bukti pelaksanaan, bukan hanya janji.

Ketiga bidang ini sering disingkat **GRC**, yaitu tata kelola, pengelolaan risiko, dan kepatuhan.
Pembagian kerja dan pemeriksaan dokumen membantu penilaian. Kamu tetap perlu menguji kontrol teknis dan memeriksa kewajiban yang sesuai konteks.

#### Ubah temuan menjadi skenario kerugian

Akun vendor Laundry Aman masih aktif setelah kontraknya berakhir.
Hubungkan aset, ancaman, kelemahan, dan dampak seperti pada Bab 11.
Kalimat “server berisiko tinggi” belum menjelaskan tindakan yang dibutuhkan.
Tulis: “Akun vendor yang masih aktif dapat mengubah konfigurasi server cabang setelah kontraknya berakhir.”

**Risk owner** adalah orang yang berwenang menentukan respons terhadap risiko.
Seperti pemilik toko yang menyetujui jadwal tutup, ia mempertimbangkan dampak bisnis.
Analis menyediakan bukti dan pilihan; analis tidak menerima seluruh risiko bisnis atas nama pemilik.

Pemilik dapat memilih respons berikut:

- Mengurangi risiko melalui kontrol.
- Menghindari kegiatan yang menimbulkan risiko.
- Berbagi sebagian konsekuensi melalui perjanjian.
- Menerima risiko dengan alasan dan masa tinjau.

Asuransi termasuk cara berbagi sebagian konsekuensi, tetapi tidak menggantikan kontrol teknis.

#### Tentukan bukti dan batas perbaikan

Laundry Aman mempunyai backup, tetapi petugas belum pernah mencoba pemulihannya.
**Risk register** adalah daftar risiko beserta pemilik dan tindak lanjut, seperti buku pekerjaan yang belum ditutup.
Kamu mencatat ukuran keberhasilan agar status selesai mempunyai dasar pemeriksaan.

**Residual risk** adalah risiko yang tersisa setelah kontrol diterapkan.
Seperti mengunci pintu toko tanpa menutup jendela, satu kontrol dapat menyisakan jalur kerugian lain.
Satu kontrol jarang menutup seluruh sisi masalah.
Backup mengurangi dampak kehilangan data jika pemulihan berhasil. Backup belum mencegah kebocoran salinan data.

Toko juga membutuhkan **evidence matrix**, hubungan pernyataan kontrol dengan bukti pemeriksaannya.
Seperti daftar serah terima yang menunjuk nota, matriks ini menunjukkan bukti untuk setiap klaim.
Kebijakan tertulis dan hasil uji menjawab pertanyaan yang berbeda.

##### Cukup kenali dulu

- **NIST CSF 2.0**: kerangka hasil keamanan untuk memeriksa cakupan kerja sesuai ukuran organisasi.
- **Skala ordinal**: angka yang menunjukkan urutan tingkat; perkaliannya dalam latihan belum menghitung kerugian secara presisi.

Enam fungsi NIST CSF 2.0 adalah Govern, Identify, Protect, Detect, Respond, dan Recover.
Artinya mencakup tata kelola, pengenalan aset dan risiko, perlindungan, deteksi, respons, serta pemulihan.
Pilih tindakan sesuai kebutuhan toko. Menempelkan nama kerangka pada dokumen belum membuktikan pelaksanaannya.

#### Ringkasan

- Tulis risiko sebagai skenario yang menghubungkan aset, kelemahan, ancaman, dan dampak.
- Pemilik risiko memilih respons berdasarkan bukti dan kebutuhan bisnis.
- Tentukan bukti penutupan serta risiko yang masih tersisa.
- Periksa kewajiban yang berlaku sebelum menyimpulkan kepatuhan.

#### Cek pemahaman

1. Mengapa analis perlu mencatat siapa yang menerima risiko saat perbaikan ditunda?
2. Mengapa status backup sukses belum membuktikan toko dapat memulihkan transaksi?
3. Bagian risiko apa yang masih tersisa ketika backup dapat dipulihkan tetapi salinannya bocor?

### Praktik

#### 1. Catat tiga masalah toko

Di kertas atau editor, buat risk register untuk tiga masalah fiktif berikut.
Gunakan [templat register risiko](lampiran/template.md#register-risiko) sebagai pola, lalu lengkapi kolom sesuai langkah 2.
Gunakan tabel sebagai fakta awal; jangan menambahkan bukti yang belum kamu periksa.

| ID | Fakta awal | Dampak yang masuk akal |
|---|---|---|
| R1 | Akun vendor lama masih aktif dan memiliki hak admin cabang | Perubahan konfigurasi tanpa kebutuhan sah |
| R2 | Backup berjalan harian, pemulihan belum pernah diuji | Toko mungkin gagal memulihkan transaksi saat dibutuhkan |
| R3 | API mengembalikan pesanan pelanggan lain pada uji lokal | Data transaksi dapat dibaca lintas pelanggan |

#### 2. Tentukan prioritas dan bukti penutupan

Gunakan skala kemungkinan 1–3 dan dampak 1–3. Definisikan arti tiap tingkat sebelum memberi skor.
Kemungkinan 3 berarti jalur penyalahgunaan mudah dijangkau dalam konteks kasus.
Dampak 3 berarti gangguan pada operasi utama atau pembukaan data pelanggan secara berarti.
Skor perkalian membantu mengurutkan pekerjaan; angka ordinal ini bukan perhitungan kerugian yang presisi.

Isi tiap risiko dengan deskripsi, bukti, aset, pemilik, skor awal, tindakan, tenggat, ukuran keberhasilan, dan risiko sisa.
Periksa apakah orang lain tahu siapa harus melakukan apa.
Blok berikut adalah contoh catatan R2 untuk dibandingkan, bukan perintah:

```text
Risiko: backup transaksi mungkin tidak dapat dipulihkan saat mesin rusak.
Bukti: catatan job sukses tersedia; tidak ada berita acara restore.
Pemilik: penanggung jawab operasional Laundry Aman.
Skor latihan: kemungkinan 2, dampak 3, prioritas 6.
Tindakan: uji restore salinan sintetis ke lingkungan terpisah minggu ini.
Ukuran berhasil: jumlah transaksi sesuai, aplikasi dapat membaca hasil,
dan waktu pemulihan memenuhi kebutuhan yang disepakati.
Risiko sisa: kehilangan transaksi setelah jadwal backup terakhir.
```

#### 3. Cocokkan rencana dengan kebutuhan pemulihan

Di catatan R2, tentukan dua target pemulihan dari Bab 10.
**RPO** adalah batas kehilangan data berdasarkan rentang waktu yang masih diterima.
Bayangkan pemilik menentukan seberapa jauh catatan transaksi boleh mundur.
Jika batasnya satu jam transaksi, backup harian saja tidak memenuhi rancangan RPO itu.

**RTO** adalah waktu pemulihan yang ditargetkan, seperti tenggat membuka kembali kasir setelah gangguan.
Jika toko perlu kembali melayani dalam dua jam, pengunduhan backup selama enam jam bertentangan dengan target RTO.
Target waktu perlu dibandingkan dengan hasil pengukuran pemulihan.

Bandingkan dua rencana latihan dengan fakta R2:

| Rencana | Pemakaian enam jam kerja |
|---|---|
| A | Menguji restore dan memperbaiki prosedurnya |
| B | Merapikan tampilan dashboard monitoring |

Jelaskan manfaat A memakai kebutuhan pemulihan toko.
Keputusan dapat berubah jika dashboard ternyata menyembunyikan peringatan penting.
Catat asumsi supaya pemilik dapat meninjau keputusan ketika bukti berubah.

#### 4. Hubungkan kontrol dengan bukti

Pada catatan yang sama, susun evidence matrix berikut.
Periksa apakah bukti yang kamu minta menguji pelaksanaan kontrol.

| Pernyataan kontrol | Bukti yang dicari | Bukti yang belum cukup |
|---|---|---|
| Akses vendor berakhir setelah kontrak | Persetujuan dan hasil pemeriksaan akun | Dokumen kebijakan saja |
| Backup dapat dipulihkan | Catatan restore beserta pemeriksaan isi | Status job backup hijau |
| Ekspor dibatasi per cabang | Test positif/negatif dan konfigurasi aktif | Screenshot tombol tersembunyi |

#### 5. Catat batas kewajiban

Untuk kewajiban hukum dan kontrak, catat yurisdiksi, yaitu wilayah hukum yang berlaku.
Tambahkan jenis data, peran organisasi, serta pihak penanggung jawab.
Periksa sumber resmi yang berlaku ketika menghadapi kasus nyata dan libatkan pemilik kewajiban.
Jangan menyimpulkan tenggat pelaporan dari ingatan atau memakai satu aturan untuk seluruh negara.

### Hasil yang diharapkan

Kamu mempunyai tiga risiko yang dapat ditindaklanjuti, pemilik keputusan, dan bukti untuk menutup tiap temuan.
Laporan satu halaman untuk pemilik toko menjelaskan dampak dan pilihan.
Lampiran teknis menjelaskan cara pemeriksaannya, termasuk akses yang harus tetap diizinkan dan akses yang harus ditolak.

Target pemulihan dalam catatan masih berupa kebutuhan. Catat hasil uji terpisah jika kamu sudah menjalankannya.

### Jika macet

- Semua risiko mendapat skor tertinggi: perbaiki definisi skala dan bandingkan keterjangkauan serta dampak pada proses utama.
- Pemilik menunda perbaikan: catat alasan, kontrol sementara, siapa menerima risiko, dan tanggal tinjau.
- Auditor meminta bukti: berikan artefak yang relevan dan disamarkan, tanpa mengirim data pelanggan yang tidak dibutuhkan.

### Latihan

Tulis memo maksimal 200 kata yang meminta waktu pemeliharaan untuk memperbaiki R3.
Sertakan dampak penghentian sementara dan cara memeriksa keberhasilan.
Pastikan akses pesanan sendiri tetap bekerja dan akses pesanan orang lain ditolak.

Minta teman yang tidak belajar keamanan menjelaskan kembali keputusan yang kamu minta.
Catat bagian yang membuatnya ragu, lalu perbaiki memo.

### Bukti kelulusan

- [ ] Saya menyerahkan risk register berisi tiga risiko dengan tindakan dan penanggung jawab.
- [ ] Saya menetapkan dua target pemulihan dan menyertakan evidence matrix.
- [ ] Saya menyerahkan memo bisnis dengan syarat keberhasilan yang dapat diperiksa.
- [ ] Pembaca dapat menyebut tindakan, penanggung jawab, serta syarat keberhasilan tanpa menebak istilah teknis.

#### Lanjut belajar

Kembali ke [Bab 23](materi/23-intelijen.md) jika klaim risiko belum mempunyai sumber yang jelas.
Jika target pemulihan masih tertukar, ulangi [Bab 10](materi/10-hardening.md) dan tulis contoh kehilangan data serta waktu henti.
Setelah bukti siap, lanjut ke [Bab 25: memilih pendalaman](materi/25-spesialisasi.md).

### Referensi

- [NIST Cybersecurity Framework dan CSF 2.0](https://www.nist.gov/cyberframework).
- [NIST CSF Quick Start Guides](https://www.nist.gov/cyberframework/quick-start-guides).

---

<a id="bab-25"></a>

## Bab 25: Menjadi spesialis dan melakukan riset mandiri

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

### Tujuan dan prasyarat

Kamu akan memilih satu bidang pendalaman dan membuat rencana riset yang dapat diperiksa orang lain.
Hasilnya mencakup pertanyaan sempit, percobaan berulang, laporan, dan rencana belajar 12 minggu.

Selesaikan fondasi dan proyek kecil bab sebelumnya.
Gunakan [batas izin dan pelaporan Bab 12](materi/12-pentest.md), [penilaian sumber Bab 23](materi/23-intelijen.md), serta [keputusan risiko Bab 24](materi/24-grc.md).
Bekal khusus tiap jalur ada pada bagian Konsep; ulangi yang masih lemah.
Kamu boleh memilih bidang sebelum menguasai seluruh alat.

Gunakan editor untuk perencanaan. Percobaan kode membutuhkan komputer dan lingkungan lokal atau lab berizin dari jalur pilihanmu.
Semua jalur inti tetap gratis; sertifikasi tidak diwajibkan.

### Konsep

Laundry Aman membutuhkan orang yang dapat menyelesaikan masalah baru, lalu menjelaskan hasilnya kepada rekan kerja.
Kamu akan memilih satu jenis masalah untuk didalami tanpa meninggalkan bekal dasar.
Kita akan membuat dugaan yang bisa diuji, mencoba kasus kecil, lalu mencari bukti yang mendukung atau membantahnya.
Siapkan catatan agar rekan dapat mengulang hasilmu dan memeriksa kesimpulannya.

#### Pilih masalah yang akan kamu tangani lebih dalam

Saat aplikasi toko menolak masukan yang sah, kamu mungkin ingin memahami kode pemeriksanya lebih jauh.
**Spesialisasi** adalah pendalaman satu bidang, seperti petugas yang menguasai perawatan mesin tertentu sambil memahami alur kerja toko.
Bidang keamanan terlalu luas untuk dikuasai dengan kedalaman sama oleh satu orang.
Bangun fondasi lebar, pilih satu bidang utama, lalu bekerja sama dengan spesialis lain sambil memperluas kemampuan.

Keahlian tampak saat kamu menangani kasus baru, menjelaskan keterbatasan, dan memperbaiki kesalahan dengan bukti.
Menghafal jawaban lab membantu sedikit; kamu perlu menguji alasan suatu hasil terjadi.
Istilah “level dewa” pada tujuan awal buku menunjukkan arah kemampuan, tanpa jaminan waktu atau gelar otomatis setelah membaca.

#### Cocokkan jalur dengan bekal yang sudah kamu buktikan

Pemilik Laundry Aman meminta perbaikan akses pesanan, sementara rekan lain meninjau log dan layanan cloud.
Pilih satu hasil kerja yang ingin kamu kuasai.
Istilah pada pilihan berikut melanjutkan bab prasyarat yang ditautkan.

**Telemetri** berarti data pengamatan sistem, misalnya log login Laundry Aman.
Data ini membantu menilai deteksi pada jalur berikut.

- **Web/API dan application security**: pendalaman keamanan aplikasi; ulangi [Bab 13](materi/13-web-api.md) untuk otorisasi, logika bisnis, dan race condition.
  Pelajari juga parser dari [Bab 19](materi/19-memory-safety.md). Buktinya berupa temuan yang dapat diulang, patch, dan regression test.
- **Detection engineering**: perancangan dan evaluasi deteksi; ulangi [Bab 15](materi/15-deteksi.md) untuk membaca telemetri dan menilai aturan deteksi.
  Buktinya mencakup ukuran salah alarm dan kasus terlewat.
- **DFIR**, *digital forensics and incident response*: pemeriksaan bukti digital dan respons insiden; ulangi [Bab 16](materi/16-respons-insiden.md) dan [Bab 17](materi/17-forensik.md).
  Latih penyusunan timeline serta pengujian hipotesis bersama pekerjaan deteksi.
- **Reverse engineering**: pemahaman program dari artefaknya; ulangi [Bab 18](materi/18-malware-reverse.md) untuk assembly, debugger, dan format berkas.
  Lanjutkan bekal C dan fuzzing pada [Bab 19](materi/19-memory-safety.md).
- **Vulnerability research**: penyelidikan kelemahan; gunakan bekal program dan biner tadi untuk menjelaskan akar masalah serta membuat reproduksi minimal.

Kelompok jalur berikut berfokus pada lingkungan dan desain:

- **Cloud dan identitas**: pendalaman layanan cloud serta izin; ulangi [Bab 20](materi/20-enterprise.md) dan [Bab 21](materi/21-cloud.md).
  Pelajari IAM, trust, jaringan, kebijakan, dan IaC. Buktinya berupa audit izin serta test akses efektif.
- **Security engineering dan arsitektur**: perancangan perlindungan sistem; ulangi [Bab 11](materi/11-threat-modeling.md) untuk threat modeling.
  Hubungkan desain kontrol dengan operasi dan [risiko Bab 24](materi/24-grc.md). Buktinya berupa perubahan desain yang menurunkan risiko terukur.

Kamu bisa mendalami aplikasi mobile, jaringan wireless, atau perangkat keras dengan lingkungan dan pengetahuan tambahan.
**OT/ICS** adalah teknologi operasional dan sistem kendali industri, misalnya pengendali mesin.
Pada sistem fisik, kegagalan dapat memengaruhi keselamatan manusia.
Latihan harus memakai simulator atau lab pendidikan yang memang dirancang untuk itu.

#### Uji satu dugaan sampai penyebabnya terlihat

Aplikasi Laundry Aman membaca label pesanan dengan parser, program pembaca struktur masukan dari Bab 19.
Kamu menduga parser menerima data tambahan yang semestinya ditolak.
**Hipotesis** adalah dugaan yang dapat diuji, seperti dugaan petugas tentang bagian mesin penyebab gangguan.
Tuliskan hasil yang akan membantah dugaanmu sebelum mencoba perbaikan.

**Eksperimen** adalah percobaan dengan kondisi dan masukan tercatat untuk memeriksa dugaan itu.
Seperti menguji mesin memakai beban yang sama, kamu menjaga kondisi agar orang lain dapat mengulang hasil.
Perbandingan ini membantu perencanaan; catatan versi dan data uji tetap diperlukan pada program.

Untuk mengulang pemeriksaan label toko, catat **seed**, nilai awal yang membantu mengulang pembangkitan masukan percobaan.
Bayangkan mencatat titik mulai urutan percobaan.
Catat versi alat dan kondisi percobaan; seed saja belum menjamin hasil sama jika lingkungan berubah.

Kamu juga dapat menyimpan **corpus**, kumpulan masukan uji, seperti menyimpan satu paket label untuk diperiksa ulang oleh rekan.
Masukkan contoh normal dan masukan batas agar pemeriksa tidak hanya mengulang kasus yang berhasil.

##### Cukup kenali dulu

- **Root-cause analysis**: penjelasan penyebab dasar hasil yang kamu amati.
- **Walkthrough**: petunjuk langkah penyelesaian; tutup saat menguji kemampuan mengulang sendiri.
- **Tenant**: ruang layanan yang dikelola terpisah secara logis untuk suatu organisasi atau kelompok pengguna dalam layanan bersama.

#### Nilai hasil dan bagikan dengan aman

Rekan Laundry Aman perlu memeriksa apakah laporanmu cukup jelas untuk dipakai memperbaiki aplikasi.
Gunakan empat tingkat bukti berikut untuk menilai kemajuan:

| Tingkat | Kondisi yang dapat diperiksa |
|---|---|
| Mengikuti | Mengulang contoh dan menjelaskan tiap langkah |
| Menerapkan | Menyelesaikan varian tanpa petunjuk rinci |
| Menganalisis | Memilih hipotesis, mencari bukti pembantah, menjelaskan akar masalah |
| Menghasilkan | Membuat perbaikan atau pengetahuan baru yang direview pihak lain |

**Review sejawat** adalah pemeriksaan hasil oleh rekan yang dapat menilai dan mencoba pekerjaanmu.
Seperti pemeriksaan nota oleh petugas kedua, review membantu menemukan bagian yang terlewat.
Perbaiki laporan ketika rekan menemukan kelemahannya.

Jika riset berizin menemukan masalah produk nyata, gunakan **coordinated vulnerability disclosure**, pelaporan kelemahan dengan koordinasi pemilik produk.
Seperti melaporkan kerusakan kepada penanggung jawab sebelum mengumumkannya, kamu mengikuti saluran dan aturan publikasi yang berlaku.
Temuan bukan izin untuk memperluas akses. Langkah batas izin ada pada Praktik.

Sertifikasi dapat membantu kebutuhan kerja tertentu, tetapi tidak diwajibkan dalam jalur gratis buku ini.
Jika kelak mempertimbangkannya, periksa silabus, biaya, aturan pembaruan, dan relevansi pekerjaan.
Jumlah badge atau peringkat CTF saja belum mengukur kemampuan menangani kasus baru.

#### Ringkasan

- Pilih satu bidang utama dan ulangi bekal yang belum kuat.
- Uji pertanyaan sempit dengan masukan serta kondisi yang dapat diulang.
- Cari bukti pembantah dan jelaskan akar masalah sebelum memperbaiki.
- Gunakan review sejawat dan batas izin saat menilai serta membagikan hasil.

#### Cek pemahaman

1. Mengapa menyimpan masukan dan versi membantu rekan mengulang percobaan?
2. Bukti apa yang membedakan mengikuti solusi dari menganalisis penyebab?
3. Mengapa temuan pada produk nyata tidak memberi izin memperluas akses?

### Praktik

#### 1. Pilih pertanyaan dan siapkan catatan

Di editor, tulis satu pertanyaan riset sempit.
Contohnya: “Apakah parser label tetap menolak input tambahan setelah nama?”
Pertanyaan yang dapat diuji lebih berguna daripada “pelajari semua fuzzing”.
Catat jalur, bab bekal, serta lingkungan lokal atau lab berizin yang kamu gunakan.

#### 2. Kerjakan empat sesi riset

Di lingkungan pilihanmu, gunakan siklus berikut. Tiap sesi harus menghasilkan catatan yang dapat diperiksa.

1. **Sesi pertama, memahami:** baca sumber dan dokumentasi format. Gambar aliran input ke keputusan. Tuliskan kontrak fungsi dan tiga asumsi yang mungkin salah.
2. **Sesi kedua, membuat eksperimen:** tulis input normal serta input batas. Tetapkan seed atau simpan corpus agar orang lain bisa mengulang. Catat versi lingkungan.
3. **Sesi ketiga, menjelaskan:** pilih satu hasil mengejutkan. Kurangi input sampai bagian pemicunya terlihat. Hubungkan dengan satu cabang kode atau asumsi format.
4. **Sesi keempat, memperbaiki dan meninjau:** buat perubahan terkecil yang menutup penyebab. Ulangi test normal dan gagal. Minta orang lain mengikuti catatan tanpa petunjuk tambahan.

Contoh hasil riset kecil: parser menerima nama tiga huruf walaupun ada data tambahan setelahnya.
Peneliti menemukan bahwa kode hanya mengambil `data[1:4]` dan tidak memeriksa panjang total.
Perbaikan memeriksa apakah jumlah byte tepat sama dengan panjang yang dinyatakan.
Regression test memakai input valid, input kurang, dan input berlebih.
Kasus lokal ini melatih riset meskipun belum menyangkut bug produk nyata.

#### 3. Ulangi dengan perubahan kasus

Untuk web/API, buka lab PortSwigger melalui Referensi dan buat catatan konsep tanpa menyalin solusi.
Setelah menyelesaikan satu topik dengan bantuan, ulangi beberapa hari kemudian tanpa membuka walkthrough.
Coba varian dengan peran lain, objek lain, metode lain, atau batas tenant.
Uraikan mengapa kontrol seharusnya berada pada server.

Untuk sistem dan biner, pwn.college menyediakan jalur latihan bertahap.
Ikuti aturan publikasi platform; simpan rincian solusi secara pribadi jika pengelola melarang penyebaran.
Catatan publik boleh membahas konsep, kegagalan pemahaman, dan program contoh milik sendiri.
Jika belum menjalankan jalur pilihan, catat `NOT_RUN` beserta bekal atau alat yang masih dibutuhkan.

#### 4. Siapkan hasil untuk pemeriksaan

Bangun portofolio dengan dua jenis hasil:

- Hasil teknis: reproduksi, patch, data uji, atau rule deteksi.
- Komunikasi: ringkasan dampak dan langkah perbaikan untuk orang di luar spesialisasi.

Samarkan identitas. Jangan menyertakan kredensial atau data pihak lain.
Untuk kelemahan produk nyata dalam lingkup izin, periksa kebijakan pemilik, saluran laporan, batas pengujian, dan aturan publikasi sebelum bertindak.
Laporkan reproduksi minimal serta dampak yang terbukti. Hentikan pengumpulan saat bukti cukup.
Koordinasikan jadwal komunikasi dan perbaikan melalui saluran yang ditetapkan.
Buku ini tidak memberi tenggat universal untuk semua vendor.

### Hasil yang diharapkan

Kamu mempunyai satu fokus, daftar prasyarat, pertanyaan riset, eksperimen berulang, dan rencana review.
Kamu dapat menjelaskan satu hal yang terbukti dan satu hal yang belum diketahui.
Jam latihan membantu perencanaan; bukti kemampuan berasal dari hasil yang dapat diperiksa.

### Jika macet

- Berpindah alat setiap hari: pertahankan satu pertanyaan selama beberapa sesi sampai memperoleh hasil yang dapat diuji.
- Selalu membutuhkan walkthrough: tulis petunjuk singkat sendiri, tutup solusi, lalu ulangi dengan jeda.
- Bug sulit direproduksi: kecilkan input, catat versi serta kondisi awal, dan bedakan hasil deterministik dari efek waktu atau lingkungan.

### Latihan

Susun rencana 12 minggu untuk satu jalur: tiga proyek kecil, satu proyek gabungan, dan dua review sejawat.
Tetapkan hasil per minggu, seperti reproduksi atau laporan yang dapat diulang.
Jumlah video yang ditonton belum menunjukkan hasil itu.
Sisakan waktu untuk mengulang fondasi yang gagal saat praktik.

### Bukti kelulusan

- [ ] Saya menyerahkan laporan riset yang dapat diulang.
- [ ] Saya menyertakan perbaikan atau eksperimen pembantah beserta bukti hasilnya.
- [ ] Saya menyimpan catatan review dan memperbaiki laporan setelah rekan menemukan kelemahannya.

#### Lanjut belajar

Kembali ke [Bab 24](materi/24-grc.md) untuk menghubungkan hasil teknis dengan kebutuhan pemilik toko.
Jika percobaan belum dapat diulang, kembali ke bab bekal jalurmu dan periksa masukan serta kondisi awalnya.
Lanjut ke [Bab 26: proyek akhir](materi/26-capstone.md) untuk menggabungkan beberapa kemampuan sebelum mendalami jalur pilihan.

### Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security).
- [pwn.college dan aturan pembelajarannya](https://pwn.college/).
- [CERT/CC: Vulnerability Disclosure Guidance](https://www.kb.cert.org/vuls/guidance/).

---

<a id="bab-26"></a>

## Bab 26: Proyek akhir Laundry Aman

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

### Tujuan dan prasyarat

Kamu akan menguji akses pesanan Laundry Aman, membandingkan perbaikan, menyelidiki log, lalu memulihkan file transaksi.
Hasil tiap sesi menjadi bagian paket akhir yang dapat diulang orang lain.

Siapkan [Python dan test dari Bab 06](materi/06-pemrograman.md), serta [hash dari Bab 08](materi/08-kriptografi.md).
Gunakan bekal [identitas Bab 09](materi/09-identitas.md), [pemulihan Bab 10](materi/10-hardening.md), [risiko Bab 11](materi/11-threat-modeling.md), dan [cakupan Bab 12](materi/12-pentest.md).
Ulangi [izin objek Bab 13](materi/13-web-api.md), [log Bab 15](materi/15-deteksi.md), [respons Bab 16](materi/16-respons-insiden.md), serta [bukti Bab 17](materi/17-forensik.md).
[Bab 24](materi/24-grc.md) membantu menyusun keputusan bisnis.

Gunakan komputer dengan Python dan editor. Jalur inti berjalan lokal dengan berkas teks, tanpa layanan tambahan.
Anggap seluruh akun, log, dan data sebagai data sintetis.

### Konsep

Pelanggan Laundry Aman harus bisa membaca pesanannya sendiri, sementara transaksi pelanggan lain tetap terlindungi.
Toko juga perlu memulihkan layanan jika file transaksi rusak.
Kita akan mengikuti masalah dari kebutuhan bisnis, bukti kesalahan, dan perbaikan sampai pemeriksaan ulang.
Setelah membaca log, kita menyusun deteksi serta keputusan pemulihan tanpa menganggap setiap dugaan sudah terbukti.

#### Gabungkan hasil tanpa melewati batas bukti

Pemilik toko meminta satu paket yang menjelaskan masalah, tindakan, dan hasil pemeriksaannya.
**Capstone** adalah proyek gabungan untuk membuktikan hubungan kemampuan dari beberapa bab.
Seperti menangani satu pesanan dari penerimaan sampai penyerahan, kamu mengikuti seluruh alur dengan bukti pada tiap bagian.

Kamu berganti peran sebagai penguji, pengembang, analis, dan pemilik risiko.
Jika bekerja dengan teman, pisahkan peran agar hasil tidak bergantung pada pengetahuan satu orang.
Pemilik membutuhkan keputusan jelas tanpa menghentikan seluruh pekerjaan karena satu dugaan.

#### Bandingkan tindakan penguji dengan pengamatan petugas

Penguji Laundry Aman mencoba membaca pesanan orang lain dalam cakupan latihan.
**Red team** menguji apakah tujuan pengujian dapat dicapai dalam cakupan yang disetujui.
Bayangkan pemeriksa yang mendapat izin untuk mencoba melewati aturan pengambilan pakaian.

Petugas lain memeriksa penolakan dan catatan aplikasi.
**Blue team** melindungi, mendeteksi, dan merespons, seperti petugas yang menjaga aturan pengambilan serta menangani pelanggarannya.
Kasus lokal ini adalah simulasi kecil; hasilnya tidak menggantikan operasi red team perusahaan.

Kedua pihak lalu mencocokkan percobaan dengan bukti yang tercatat.
**Purple teaming** membantu mereka membandingkan tindakan pengujian dengan bukti deteksi, lalu memperbaiki kekurangannya.
Perbandingan petugas membantu menjelaskan tujuan kerja sama; kamu tetap perlu mencatat hasil percobaan dan deteksi secara terpisah.

#### Susun sesi dari satu hasil ke hasil berikutnya

Pemilik Laundry Aman ingin bisa meninjau hasil tanpa menebak bagian yang sudah dikerjakan.
Pisahkan pekerjaan menjadi enam sesi dengan hasil berikut:

| Sesi | Peran latihan | Hasil yang disimpan |
|---|---|---|
| 1 | Pemilik dan penguji | Cakupan, diagram, aset, peran, daftar bukti |
| 2 | Penguji dan pengembang | Reproduksi akses serta penjelasan perbaikan |
| 3 | Pengembang dan pemeriksa | Test lulus, pembuktian test negatif, test lulus kembali |
| 4 | Analis | Timeline dan rancangan deteksi yang diperiksa |
| 5 | Petugas pemulihan dan pemilik | Bukti restore serta keputusan risiko |
| 6 | Pemeriksa lain | Paket yang dapat diulang tanpa bantuan lisan |

#### Ringkasan

- Tetapkan cakupan sebelum mencoba akses.
- Periksa bahwa perbaikan menjaga akses sah dan menolak akses terlarang.
- Hubungkan log dengan kode serta reproduksi; batasi dugaan sesuai bukti.
- Periksa isi dan hash pemulihan sebelum melaporkan keberhasilan.
- Serahkan paket yang dapat diulang pemeriksa lain.

#### Cek pemahaman

1. Mengapa perbaikan perlu diuji dengan pemilik pesanan dan pengguna lain?
2. Apa yang harus dibandingkan penguji dan analis saat bekerja bersama?
3. Mengapa dugaan login mencurigakan memerlukan bukti tambahan sebelum menjadi kesimpulan?

### Praktik

#### 1. Tetapkan cakupan dan bukti awal

Buka folder utama tutorial di editor, lalu buat folder `hasil-belajar/capstone/` dan catatan `scope.md`.
Tulis bahwa pengujian hanya memakai kode serta data bab ini, tanpa layanan publik dan tanpa kredensial nyata.
Latihan tidak memerlukan koneksi jaringan. Berhenti jika kamu menyadari sedang memakai data di luar paket latihan.

Buat empat hasil awal:

1. Diagram pengguna ke aplikasi ke data.
2. Daftar tiga aset: data pesanan, identitas pelanggan, dan salinan pemulihan.
3. Daftar peran yang mengerjakan dan memeriksa hasil.
4. Daftar bukti yang akan dikumpulkan.

Kamu boleh menggambar diagram di kertas, lalu menulis ulang dalam teks.
Periksa apakah catatan menyebut batas izin dan kondisi berhenti sebelum melanjutkan.

#### 2. Reproduksi kesalahan akses pada program lokal

Di editor, simpan kode berikut sebagai `hasil-belajar/capstone/pesanan.py`.
Blok ini adalah kode untuk disimpan, bukan perintah yang ditempel ke terminal.

```python
PESANAN = {
    "LA-101": {"pemilik": "ani", "status": "selesai", "total": 21000},
    "LA-102": {"pemilik": "budi", "status": "dicuci", "total": 35000},
}

def baca_rentan(pengguna, nomor):
    return PESANAN.get(nomor)

def baca_aman(pengguna, nomor):
    data = PESANAN.get(nomor)
    if data is None or data["pemilik"] != pengguna:
        return None
    return {"status": data["status"], "total": data["total"]}

if __name__ == "__main__":
    for pengguna, nomor in [
        ("ani", "LA-101"),
        ("ani", "LA-102"),
        ("budi", "LA-102"),
        ("budi", "LA-999"),
    ]:
        print(pengguna, nomor)
        print("sebelum:", baca_rentan(pengguna, nomor))
        print("sesudah:", baca_aman(pengguna, nomor))
```

Pilih jalur sesuai perangkatmu. Buka terminal pada folder utama tutorial.

**Windows PowerShell**

Jalankan `py hasil-belajar/capstone/pesanan.py`.

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Bandingkan empat pasangan hasil berikut:

| Pengguna dan pesanan | Sebelum | Sesudah |
|---|---|---|
| Ani, LA-101 | Seluruh data pesanan Ani | Status dan total pesanan Ani |
| Ani, LA-102 | Seluruh data pesanan Budi | `None` |
| Budi, LA-102 | Seluruh data pesanan Budi | Status dan total pesanan Budi |
| Budi, LA-999 | `None` | `None` |

Pada versi rentan, fungsi mengabaikan identitas peminta sehingga Ani dapat membaca pesanan Budi.
Pada versi aman, fungsi memeriksa pemilik dan hanya mengirim status serta total jika pengguna berhak.
Mengganti nomor pesanan dengan ID acak belum memperbaiki pemeriksaan izin.

Di catatan temuan, pakai judul “Fungsi pembacaan pesanan tidak memeriksa pemilik”.
Sertakan prasyarat, input minimal, hasil aktual, hasil yang diharapkan, dan dampak.
Periksa apakah orang lain dapat mengulang hasil dari catatan itu.

Identitas `pengguna` pada contoh berasal dari argumen yang dipercaya oleh test.
Pada aplikasi nyata, server harus mengambil identitas dari sesi yang sah.
Pengguna tidak boleh memilih identitas sendiri melalui parameter permintaan.
Contoh ini belum mengurus konkurensi atau penyimpanan produksi.

#### 3. Tambahkan regression test

Di editor, simpan kode test berikut sebagai `hasil-belajar/capstone/test_pesanan.py`.
Letakkan bersama file program pada sesi sebelumnya.

```python
import unittest
from pesanan import baca_aman

class UjiPesanan(unittest.TestCase):
    def test_pemilik_boleh_membaca(self):
        self.assertEqual(baca_aman("ani", "LA-101")["total"], 21000)

    def test_pengguna_lain_ditolak(self):
        self.assertIsNone(baca_aman("ani", "LA-102"))

    def test_nomor_tidak_ada(self):
        self.assertIsNone(baca_aman("ani", "LA-999"))

    def test_tanpa_identitas_ditolak(self):
        self.assertIsNone(baca_aman(None, "LA-101"))

if __name__ == "__main__":
    unittest.main()
```

Dari folder utama tutorial, pilih jalur sesuai perangkatmu.

**Windows PowerShell**

Jalankan `py -m unittest discover -s hasil-belajar/capstone -p "test_*.py" -v`.

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Empat test harus lulus. Selanjutnya, buktikan bahwa test dapat mendeteksi implementasi rentan:

1. Di editor, sementara ubah baris import menjadi `from pesanan import baca_rentan as baca_aman`.
2. Jalankan perintah test yang sama. Dua test penolakan harus gagal.
3. Kembalikan import ke `from pesanan import baca_aman`, lalu ulangi perintah. Empat test harus lulus kembali.

Simpan catatan perbedaannya. Hasil hijau saja belum membuktikan test dapat mengenali kesalahan yang dimaksud.
Perubahan import ini hanya untuk pembuktian; kode akhir tetap memakai fungsi aman.

#### 4. Selidiki rangkaian event sintetis

Di editor, salin tabel berikut ke laporan sebagai bahan **timeline**, yaitu urutan kejadian berdasarkan waktu.
Waktu menggunakan UTC dan semua jam latihan dianggap sinkron.

| Waktu | Sumber | Peristiwa |
|---|---|---|
| 09:00:00 | auth | ani login sukses, sesi S1 |
| 09:02:00 | app | S1 membaca LA-101, status 200 |
| 09:03:00 | app | S1 membaca LA-102, status 200 |
| 09:04:00 | auth | admin login gagal dari 192.0.2.25 |
| 09:04:30 | auth | admin login gagal dari 192.0.2.25 |
| 09:05:00 | auth | admin login sukses dari 192.0.2.25 |
| 09:06:00 | app | admin menjalankan laporan harian, status 200 |
| 09:10:00 | change | Perbaikan pemeriksaan pemilik dipasang pada lab |
| 09:12:00 | app | S1 membaca LA-102, status 403 |

Alamat `192.0.2.25` adalah alamat dokumentasi, bukan target untuk dihubungi.
Data aplikasi menunjukkan permintaan lintas pemilik sebelum perbaikan.
Status 200 sendiri, tanpa konteks isi respons atau kode, belum selalu membuktikan pengembalian data sensitif.
Dalam paket ini, kode rentan dan reproduksi lokal memberi bukti tambahan.

Dua login gagal sebelum sukses menuntut pemeriksaan.
Pemilik akun mungkin salah mengetik, atau pihak lain mencoba masuk.
Tabel belum membuktikan siapa yang berada di belakang alamat tersebut.
Catat kebutuhan bukti tambahan: konfirmasi pemilik, perangkat, metode MFA, dan aktivitas sesi.

Rancang deteksi untuk pembacaan pesanan lintas pemilik yang ditolak.
Catat waktu, actor atau pelaku tindakan, objek, pemilik atau hasil keputusan izin, serta status.

Tambahkan **correlation ID**, pengenal penghubung catatan dari permintaan yang sama, seperti nomor tiket untuk satu permintaan layanan.
Bedakan dari nomor pesanan: satu pesanan dapat dibaca melalui beberapa permintaan.

Hindari mencatat seluruh isi pesanan.
Tabel belum memuat semua field itu. Buat kasus normal dan penolakan sintetis dengan field yang diperlukan pada salinan data.
Tandai field tambahan sebagai data latihan, bukan fakta yang ditemukan pada log.

Uji rule atau aturan deteksi pada kejadian normal dan penolakan.
Untuk uji manual, tentukan apakah tiap kasus memicu aturan, lalu bandingkan dengan label hasil yang diharapkan.
Catat hasil masing-masing, termasuk kemungkinan salah alarm dari Bab 15.

Penolakan yang terdeteksi membuktikan kontrol bekerja pada permintaan itu; hasil tersebut belum membuktikan pencurian data berhasil.

Tabel adalah skenario log; program lokal sebelumnya mengembalikan nilai Python dan tidak menjalankan server HTTP.

#### 5. Latih pemulihan dan keputusan bisnis

Di folder capstone, buat berkas teks berisi tiga transaksi sintetis, lalu buat salinannya sebagai backup.
Gunakan cara pemeriksaan hash dari Bab 08 atau Bab 10.
Kerjakan urutan berikut:

1. Catat jumlah baris dan SHA-256 kedua berkas.
2. Ubah satu transaksi pada salinan kerja.
3. Pulihkan ke **berkas baru**. Jangan menimpa bukti perubahan.
4. Periksa hash dan isi hasil pemulihan terhadap backup.

Simpan hasil pemeriksaan agar kamu bisa menunjukkan bahwa isi kembali sesuai backup.
Tulis urutan respons: simpan bukti, batasi fitur terdampak sesuai keputusan pemilik, pasang perbaikan, uji akses sah dan terlarang, lalu pantau.
Untuk anomali login admin, buat jalur investigasi terpisah sampai ada bukti yang menghubungkannya dengan masalah akses pesanan.

Pemilik toko memberi waktu pemeliharaan 30 menit dalam skenario.
Ukur lama latihan pemulihan dan catat lingkunganmu.
Jelaskan bahwa hasil file kecil tidak memprediksi waktu pemulihan database produksi.
Buat risk register dari Bab 24 untuk kelemahan izin, logging yang kurang, dan backup yang belum diuji secara berkala.

#### 6. Serahkan paket hasil

Di folder capstone, kumpulkan hasil akhir berikut:

- `scope.md`, diagram, daftar aset, peran, dan bukti.
- Laporan temuan, kode perbaikan, dan hasil test.
- Timeline dan rancangan deteksi beserta hasil pemeriksaannya.
- Bukti restore, risk register, serta memo bisnis maksimal 200 kata.

Tambahkan `limitations.md` yang menyebut komponen yang belum diuji.
Tandai pemeriksaan yang belum dikerjakan `NOT_RUN` beserta alasannya.
Hindari menampilkan data nyata sebagai contoh portofolio.
Periksa apakah orang lain dapat menemukan file, perintah, versi alat, dan hasil yang harus dibandingkan.

### Hasil yang diharapkan

Kamu dapat menunjukkan jalur dari kebutuhan bisnis ke bug, bukti, perbaikan, regression test, deteksi, dan pemulihan.
Empat test implementasi aman lulus; saat memakai fungsi rentan, dua test penolakan gagal.
Setelah import dikembalikan, empat test lulus lagi.

Pembaca lain dapat menjalankan ulang kode tanpa menebak lokasi file atau versi alat.
Hash dan isi pemulihan sesuai backup.
Kesimpulan tentang login admin tetap terbatas pada bukti yang tersedia.

### Jika macet

- `ModuleNotFoundError: pesanan`: simpan kedua file pada folder yang sama dan gunakan command discovery dengan `-s` seperti di atas.
- Test hijau tetapi akses lintas pengguna masih terbuka: pastikan test memanggil implementasi yang benar dan mencakup penolakan.
- Sulit menulis kesimpulan: pisahkan kolom fakta, dugaan, bukti tambahan, dan keputusan sementara.
- Hash restore berbeda: periksa encoding, akhir baris, serta apakah kamu menyalin byte atau mengetik ulang isi.

### Latihan

Pada salinan pengembangan latihan, tambahkan peran supervisor yang hanya boleh membaca pesanan cabang yang dikelolanya.
Rancang sendiri empat test baru, termasuk supervisor cabang lain.
Jangan memberi akses seluruh pesanan hanya karena nama perannya supervisor.

Untuk penilaian berpasangan, minta teman mengubah satu kebutuhan dan satu kejadian log tanpa memberi tahu lokasi perubahannya.
Temukan dampaknya melalui review dan test, lalu perbarui laporan.
Latihan ini memeriksa apakah kamu dapat memakai pemahaman pada kasus baru.

### Bukti kelulusan

| Aspek | Bobot | Syarat bukti penuh |
|---|---:|---|
| Cakupan dan inventaris | 10 | Aset, izin, batas, dan kondisi berhenti jelas |
| Reproduksi serta akar masalah | 20 | Temuan dapat diulang dengan data minimum |
| Perbaikan dan test | 25 | Akses sah tetap bekerja, akses terlarang ditolak |
| Analisis log dan deteksi | 20 | Timeline benar, dugaan dipisahkan, false positive dibahas |
| Pemulihan dan komunikasi | 15 | Restore diperiksa dan keputusan bisnis jelas |
| Pengulangan oleh reviewer | 10 | Reviewer mengulang tanpa bantuan lisan |

Target kelulusan latihan adalah 80/100. Periksa juga tiga syarat wajib berikut:

- [ ] Saya tetap dalam cakupan pengujian.
- [ ] Saya tidak membocorkan secret, yaitu rahasia seperti kredensial.
- [ ] Saya tidak menyebut dugaan sebagai fakta.

Skor tinggi pada laporan tidak menutupi kegagalan syarat wajib.
Kelulusan menunjukkan kemampuan pada kasus ini; bab spesialisasi memberi jalur untuk memperluasnya.

<details>
<summary>Pembahasan setelah mencoba: petunjuk review proyek</summary>

Temuan utama adalah otorisasi objek yang hilang.
Perbaikan memeriksa pemilik di server dan mengurangi field respons.
Test harus menolak pengguna lain serta identitas kosong.

Timeline mendukung perbedaan perilaku sebelum/sesudah perbaikan.
Login admin perlu investigasi tambahan; jangan menyebutnya pengambilalihan akun.
Restore yang baik memeriksa isi dan integritas, lalu menjelaskan batas ukuran latihan.

Pemeriksa memberi nilai lebih untuk uji negatif baru dan alasan keputusan.
Jumlah alat yang digunakan belum menunjukkan kualitas bukti.

</details>

#### Lanjut belajar

Kembali ke [Bab 25](materi/25-spesialisasi.md) untuk memilih pendalaman berdasarkan bagian proyek yang ingin kamu kuasai.
Jika satu bagian belum dapat diulang, gunakan tautan prasyarat untuk mengulang kemampuan itu sebelum penilaian ulang.
Setelah lulus, lanjutkan rencana 12 minggu pada jalur pilihanmu dengan proyek baru dan review sejawat.

### Referensi

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework).
- [Python unittest](https://docs.python.org/3/library/unittest.html).

---

<a id="lampiran-1"></a>

## Jadwal belajar dan penilaian

Pakai bukti hasil belajar untuk menentukan kapan kamu siap lanjut. Jumlah minggu membantu mengatur waktu; hasil latihan menentukan kesiapanmu.
Jika istilah dasar belum jelas, ulangi bagiannya sebelum menambah alat.

Untuk sesi 60 menit, coba pembagian berikut:

1. Baca selama 15 menit.
2. Praktik selama 35 menit.
3. Tulis hasil selama 10 menit.

Sisihkan satu sesi per minggu untuk mengulang tanpa petunjuk.
Waktu ini adalah rancangan belajar, bukan jaminan durasi atau hasil yang sama untuk semua pembaca.

### Enam tahap untuk memilih tujuan

Mulai dari [pra-bab](materi/pra-00-mulai-dari-nol.md) jika kamu belum terbiasa membuka folder atau memilih tempat mengetik.
Ikuti nomor bab dalam setiap tahap. Nama tahap menjelaskan pekerjaan yang akan kamu pelajari.

| Tahap | Nama tahap | Bagian yang dipelajari |
|---|---|---|
| 1 dari 6 | Mulai memakai alat | Pra-bab, Bab 00–02 |
| 2 dari 6 | Memahami cara sistem bekerja | Bab 03–08 |
| 3 dari 6 | Menjaga dan menguji akses | Bab 09–14 |
| 4 dari 6 | Membaca bukti dan menangani kejadian | Bab 15–17 |
| 5 dari 6 | Memeriksa program dan lingkungan | Bab 18–22 |
| 6 dari 6 | Mengambil keputusan dan membuktikan kemampuan | Bab 23–26 |

Enam tahap ini mengelompokkan materi. Lima tingkat kemampuan di bawah menilai apa yang sudah bisa kamu kerjakan.
Keduanya memakai ukuran berbeda: selesai membaca satu tahap belum membuktikan kemampuan pada seluruh kasusnya.

### Rencana 48 minggu dengan 6–10 jam per minggu

Gunakan tabel sebagai rencana waktu. Simpan bukti pada kolom terakhir sebelum melanjutkan.
Misalnya, untuk Laundry Aman, keberhasilan memulihkan salinan nota lebih berguna daripada sekadar mencatat bahwa bab cadangan sudah dibaca.

**Hash** adalah ringkasan isi data untuk membantu memeriksa perubahan, seperti pembanding isi nota; Bab 08 mengajarkan batas penggunaannya.

| Minggu | Materi | Bukti sebelum lanjut |
|---|---|---|
| 1–2 | Pra-bab, Bab 00–02 | Inventaris laptop, folder lab, batas izin, dan catatan kesalahan pertama |
| 3–5 | Bab 03–05 | Diagram jaringan, pembagian alamat sederhana, hak file, dan pencarian log |
| 6–8 | Bab 06–08 | Program kecil, penjelasan komunikasi web, dan percobaan hash |
| 9–12 | Bab 09–11 | Tabel akses, rencana pengamanan konfigurasi, pemulihan data sintetis, dan gambaran ancaman beserta kontrolnya |
| 13–17 | Bab 12–14 | Laporan temuan web di lab beserta bukti perbaikan dan analisis paket |
| 18–23 | Bab 15–17 | Aturan deteksi dengan kasus normal, urutan kejadian, dan laporan insiden |
| 24–28 | Bab 18–20 | Analisis program tanpa perilaku berbahaya, percobaan pembaca masukan, dan simulasi meja audit identitas |
| 29–33 | Bab 21–24 | Pemeriksaan kebijakan layanan komputasi dari penyedia, komponen pendukung, informasi ancaman yang sudah dinilai, serta daftar risiko |
| 34–40 | Jalur Bab 25 | Satu proyek spesialisasi yang bisa diulang orang lain |
| 41–48 | Bab 26 | Proyek akhir, pemeriksaan pihak lain, perbaikan, dan uji ulang |

Istilah lain pada tabel dijelaskan di bab tujuan. Kamu belum perlu menguasai hasil akhir untuk memulai pra-bab.

Jika kamu punya 3 jam per minggu, rentangkan jadwal.
Jika sudah berpengalaman, lakukan uji awal melalui praktik bab. Lewati bacaan yang sudah dapat kamu jelaskan dan buktikan melalui hasilnya.
Riset mendalam memerlukan siklus proyek berikutnya setelah tahun pertama.

### Lima tingkat kemampuan

Pada Laundry Aman, pembaca perlu menjelaskan cara permintaan web membawa nota sebelum memperbaiki pencariannya.
**HTTP** adalah aturan pertukaran permintaan dan jawaban web; kamu mempelajarinya pada Bab 07.

Pencarian nota memakai **SQL**, bahasa untuk meminta atau mengubah data dalam basis data.
Contoh SQL dalam buku memakai data latihan, sehingga kamu dapat memeriksa hasil tanpa menyentuh data pelanggan nyata.

| Tingkat | Kemampuan yang diperiksa | Ujian praktis |
|---|---|---|
| 1: orientasi | Bisa memakai terminal dan membedakan file, proses, jaringan | Jelaskan kegagalan membuka localhost, yaitu komputer sendiri, dengan bukti |
| 2: fondasi | Memahami HTTP, izin, hash, dan kode sederhana | Perbaiki pencarian SQL latihan dan jelaskan hasilnya |
| 3: praktisi lab | Menemukan kelemahan, mengumpulkan bukti, memperbaiki | Kerjakan kasus baru dalam lab tanpa mengikuti panduan solusi |
| 4: spesialis | Menentukan dugaan yang diuji, batas metode, dan prioritas | Selesaikan proyek akhir dengan pemeriksaan teknis independen |
| 5: ahli yang terus berkembang | Menghasilkan riset atau pengulangan hasil baru dan keputusan yang bisa dipertanggungjawabkan | Rekan dapat mengulang hasil, menguji perbaikan, dan mempertanyakan kesimpulan |

Nilai setiap hasil dengan skala 0–3:

| Nilai | Bukti kemampuan |
|---|---|
| **0** | Belum dikerjakan |
| **1** | Mengikuti contoh |
| **2** | Mampu mengulang tanpa contoh dan menjelaskan |
| **3** | Mampu menerapkan pada variasi kasus dan menguji kegagalan |

Untuk melanjutkan fondasi, targetkan minimal 2 pada seluruh bukti bab.
Untuk menyebut diri menguasai spesialisasi, perlukan nilai 3 dari lebih dari satu proyek serta masukan orang lain.
Catat bantuan yang dipakai agar hasil latihan tetap bisa dinilai.

### Ketika terhambat

1. Catat tujuan, langkah terakhir yang berhasil, pesan kesalahan utuh, dan dugaanmu.
2. Coba satu perubahan, lalu ukur hasilnya.
3. Baca dokumentasi perintah melalui `--help`, `Get-Help`, atau `man` sesuai alatnya.
4. Setelah 30–45 menit, baca petunjuk secukupnya. Tulis bagian yang kamu lewatkan.
5. Ulangi latihan sehari kemudian tanpa petunjuk.

Jangan mengunggah log asli yang mengandung token atau data pelanggan ke forum maupun AI.
AI bisa membantu menjelaskan pesan kesalahan atau mengkritik laporan. Periksa jawabannya melalui dokumentasi dan hasil lab.
Minta pertanyaan atau petunjuk sebelum solusi lengkap. Catat ketergantungan bantuan dengan jujur.

### Portofolio yang dapat dinilai

**Portofolio** adalah kumpulan hasil yang memperlihatkan kemampuanmu, seperti laporan dan bukti perbaikan akses nota Laundry Aman.
Simpan batas izin, diagram, data sintetis, langkah pengulangan, hasil sebelum dan sesudah, serta keterbatasan.

Tulis ringkasan satu halaman untuk pemilik usaha. Pisahkan rincian teknis untuk pengembang.
Hormati aturan platform; sebagian pengelola meminta agar solusi tantangan tidak dipublikasikan.
Kamu boleh menjelaskan konsep dan lab buatan sendiri tanpa membagikan kode jawaban atau solusi tantangan aktif.

---

<a id="lampiran-2"></a>

## Peta roadmap ke tutorial

**Roadmap** adalah peta topik belajar, seperti daftar kemampuan yang ingin dipelajari untuk menjaga aplikasi Laundry Aman.
Acuan utama buku ini adalah [Cyber Security di roadmap.sh](https://roadmap.sh/cyber-security).

Indeks sumber yang diperiksa pada 6 November 2026 berisi **302 berkas konten** di direktori `roadmaps/cyber-security/content`.
Beberapa berkas membahas topik berulang. Jumlah berkas itu tidak menyatakan jumlah kemampuan yang otomatis dikuasai pembaca.
[Snapshot nama berkas](docs/ai/roadmap-inventory.json) mencatat commit `d922417cd1ef690e66c008a3c3612f683e8e433a`.
Snapshot adalah salinan daftar pada waktu pemeriksaan; isinya menjadi acuan historis, meskipun situs kemudian berubah.

### Enam tahap untuk mencari bab

Ikuti urutan bab. Gunakan tahap untuk melihat tujuan pekerjaan sebelum mencari topik tertentu pada tabel berikutnya.

| Tahap | Nama tahap | Bab |
|---|---|---|
| 1 | Mulai memakai alat | Pra-bab, 00–02 |
| 2 | Memahami cara sistem bekerja | 03–08 |
| 3 | Menjaga dan menguji akses | 09–14 |
| 4 | Membaca bukti dan menangani kejadian | 15–17 |
| 5 | Memeriksa program dan lingkungan | 18–22 |
| 6 | Mengambil keputusan dan membuktikan kemampuan | 23–26 |

### Arti label cakupan

- **Praktik** berarti ada tugas terarah dalam buku, misalnya memeriksa pemilik nota pada lab lokal.
- **Pengantar** berarti kamu memperoleh model dasar dan masih memerlukan pendalaman sebelum memakai metode pada kasus baru.
- **Jalur lanjut** berarti topik diarahkan ke latihan spesialisasi sesuai prasyaratnya.

Rujukan lanjut menandai nama topik yang belum mempunyai penjelasan atau praktik khusus dalam buku.
Keberadaan nama pada peta tidak berarti latihan alatnya sudah tersedia.
Jika alat diperlukan tetapi belum dijalankan, catat hasil NOT_RUN.

### Pemetaan topik dan batas latihannya

Kolom pertama mempertahankan nama topik dari roadmap sebagai label pencarian.
Gunakan bab tujuan untuk mempelajari arti dan batasnya; kamu tidak perlu menghafal daftar istilah ini sebelum mulai.

Buku tidak mengajarkan setiap produk satu per satu. Alat dapat berubah; perhatikan kemampuan dan hasil yang dilatih.
Kolom terakhir membedakan praktik langsung, pengantar, serta rujukan untuk pendalaman.

| Kelompok topik roadmap | Bab | Kedalaman dan hasil |
|---|---|---|
| Fundamental IT, hardware, GUI/CLI, file CRUD, troubleshooting | 01–02, 04–06 | Praktik file, proses, diagnosis error |
| Operating systems, Linux, Windows, macOS | 01, 04–05 | Praktik Linux/Windows; macOS jalur terminal alternatif |
| Networking, LAN/WAN, OSI, TCP/UDP, ports | 03, 07, 14 | Praktik membaca aliran komunikasi |
| IP, public/private, loopback, subnet mask, CIDR, gateway | 03 | Latihan subnet dan alamat lokal |
| DNS, DHCP, ARP, NAT, route, NTP | 03, 14 | Pengantar mekanisme alamat, diagnosis dan penanda waktu; NTP rujukan lanjut, tanpa praktik khusus |
| Routers, switches, VLAN, perimeter, DMZ, segmentation | 03, 14 | Diagram dan matriks aliran yang diizinkan |
| Wireless, WPA/WEP, WPS, Bluetooth, NFC | 14 | Audit konfigurasi Wi-Fi dan pengantar risiko radio; Bluetooth/NFC rujukan lanjut |
| HTTP/HTTPS, SSH, FTP/SFTP, RDP, VPN | 03, 07–08, 14 | Pengantar peran protokol dan batas kepercayaan; FTP/SFTP rujukan lanjut |
| Virtualization, host/guest, hypervisor, isolation | 01 | Rancangan lab dan checkpoint; produk hypervisor opsional |
| Python, Bash, PowerShell, C, JavaScript, Go | 05–07, 19, 25 | Python/shell praktik; C pengantar; bahasa lain jalur pilihan |
| CIA, defense in depth, permissions, risk, zero trust | 00, 09–11 | Tabel akses, skenario ancaman dan kontrol |
| Authentication/authorization, MFA, SSO, local auth | 09, 20 | Praktik cek objek dan audit identitas |
| LDAP/LDAPS, Kerberos, RADIUS, group policy | 20 | Pengantar LDAP, Kerberos, Group Policy, dan graf izin tabletop; LDAPS/RADIUS rujukan lanjut |
| Hashing, salting, keys, PKI, certificates, TLS | 08–09 | Eksperimen hash dan penjelasan rantai kepercayaan |
| Hardening, patching, backups, resiliency | 10–11 | Checklist berbukti dan latihan pemulihan |
| AV, EDR, firewall, IDS/IPS, DLP, NAC | 10, 14–15 | Pengantar fungsi, penempatan kontrol, dan celah deteksi; DLP/NAC rujukan lanjut |
| Social engineering, phishing, impersonation | 09–10, 16 | Analisis pesan buatan dan proses verifikasi identitas |
| Brute force, password spray, spoofing, MITM, replay | 09, 14–16, 20 | Pengantar pola login, bukti, dan mitigasi; spoofing/MITM/replay rujukan lanjut; tanpa kampanye nyata |
| Web attacks, SQL injection, XSS, CSRF, traversal | 07, 12–13 | Lab SQL lokal, kasus web dan latihan resmi berizin |
| Reconnaissance, port scanners, Nmap, curl | 07, 12 | Observasi localhost dan scope tertulis |
| Packet captures, Wireshark, tcpdump, NetFlow | 14–15 | Praktik paket lokal dengan alat opsional dan batas pengamatan; tcpdump/NetFlow rujukan lanjut |
| Exploit frameworks, privilege escalation, LOLBAS/GTFOBins | 18–20, 25 | Pengantar penyalahgunaan kepercayaan dan jalur CTF; framework, LOLBAS/GTFOBins rujukan lanjut; tanpa panduan produksi |
| Malware, sandboxing, reverse engineering, obfuscation | 18–19 | Analisis program benign; tidak menjalankan malware hidup |
| Buffer overflow, memory leaks, zero-day | 19, 25 | Praktik parser, pengantar memory leak, sanitizer opsional; zero-day rujukan riset |
| SIEM, SOAR, logs, false positive/negative | 15 | Triase data sintetis dan pengukuran kualitas aturan |
| Threat hunting, ATT&CK, kill chain, diamond model | 16, 23 | Praktik hipotesis dan batas atribusi; ATT&CK sebagai rujukan; kill chain/diamond model rujukan lanjut |
| Incident response dan runbooks | 16 | Latihan meja identifikasi sampai pemulihan |
| Forensics, memory/disk evidence, Autopsy/FTK | 17–18, 25 | Integritas salinan dan timeline; suite forensik pendalaman opsional |
| OSINT, threat intelligence, URL/hash reputation | 23 | Validasi sumber dan data sintetis tanpa profiling orang |
| Cloud vs on-prem, IaaS/PaaS/SaaS, AWS/Azure/GCP | 21 | Review offline dan pembagian tanggung jawab; AWS/Azure/GCP contoh produk, tanpa praktik akun vendor |
| IaC, serverless, storage, deployment | 21–22 | Pemeriksaan konfigurasi dan secret tanpa membuat resource berbiaya |
| NIST, CIS, ISO, CSF, RMF, compliance, stakeholders | 11, 24 | Praktik risiko, kontrol, bukti, dan komunikasi bisnis; pengantar kerangka; RMF rujukan lanjut |
| Blue/red/purple teams, rules of engagement | 00, 12, 26 | Capstone dengan temuan, deteksi, perbaikan, retest |
| CTF, Bandit, picoCTF, pwn.college, platform praktik | 01, 25 | Latihan lanjutan berdasarkan prasyarat, bukan lomba jumlah flag |
| Sertifikasi dasar/profesional | 25 | Pilihan setelah kemampuan terbukti; ujian tidak wajib |

### Topik tambahan untuk praktik modern

Buku juga menekankan pemeriksaan izin tiap objek pada API, yaitu cara program saling meminta data.
Pada Laundry Aman, server perlu memeriksa pemilik setiap nota yang diminta.

**Secure SDLC** berarti memasukkan keamanan sepanjang proses pengembangan perangkat lunak.
Bab 22 menghubungkan pemeriksaan kode dengan bukti sebelum rilis.

**Dependency** adalah komponen pendukung yang dipakai aplikasi. Pemeriksaannya membantu menilai komponen yang ikut membawa risiko.

**Supply chain** adalah rangkaian komponen dan proses pembentuk serta penyalur perangkat lunak.
Pemeriksaan komponen tadi perlu dikaitkan dengan proses ini.

**Fuzzing** menguji program dengan banyak variasi masukan untuk mencari perilaku yang salah.
Pendalaman ini membantu memeriksa batas pembaca data latihan.

**Pengujian regresi** memeriksa agar perubahan tidak mengembalikan masalah atau merusak fungsi yang sudah bekerja.
Untuk nota Laundry Aman, perbaikan harus menolak pembaca tanpa izin dan tetap mengizinkan pemiliknya.

**Reproducibility** berarti orang lain dapat mengulang hasil dengan langkah dan kondisi yang kamu catat.
Penekanan tambahan ini menghubungkan topik roadmap dengan pekerjaan yang bisa ditinjau pengembang maupun tim operasi.

### Batas panduan produk

Produk NAS/SAN, suite perkantoran, setiap platform virtualisasi, dan setiap sertifikasi dalam roadmap belum mempunyai panduan instalasi tersendiri.
Pelajari produk lingkungan kerjamu setelah memahami konsep akses, cadangan, jaringan, serta tanggung jawab operasional.
Batas panduan ini menjelaskan cakupan buku; topik yang belum dilatih tetap dapat penting bagi pekerjaanmu.

---

<a id="lampiran-3"></a>

## Kamus istilah

Cari istilah yang kamu temui, baca artinya, lalu buka tautan untuk melihat contoh penggunaannya.
Gunakan pencarian halaman jika kamu hanya ingat nama menu, tombol, atau sebagian istilah.

Kolom alias memuat nama lain serta label yang tercetak tebal pada materi.
Label membantu mencocokkan tulisan di layar dengan penjelasannya; kamu tidak perlu menghafal semua nama sekaligus.
Tautan mengarah ke bab atau panduan yang mengajarkan pemakaiannya.

Arti mengikuti konteks Laundry Aman. Untuk rincian produk dan kondisi lain, periksa dokumentasi yang dirujuk bab terkait.

| Istilah | Arti sehari-hari | Alias atau label pada materi | Belajar di |
|---|---|---|---|
| Access point | Perangkat titik akses yang menghubungkan perangkat lain melalui Wi-Fi. | Titik akses Wi-Fi | [Bab 03](materi/03-jaringan.md), [Bab 14](materi/14-jaringan.md) |
| ACL | Daftar aturan akses pada objek seperti file dan folder Windows. | Access control list | [Bab 05](materi/05-windows.md) |
| Active Directory | Layanan direktori Microsoft untuk lingkungan akun perusahaan; Bab 20 membahas layanan domain AD DS. | - | [Bab 20](materi/20-enterprise.md) |
| Active Directory Domain Services | Layanan Microsoft untuk mengelola identitas dan hubungan organisasi pada lingkungan domain. | AD DS | [Bab 20](materi/20-enterprise.md) |
| Address bar | Kotak alamat di bagian atas browser untuk menentukan halaman yang ingin kamu buka. | Bilah alamat | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Advisori | Pemberitahuan teknis tentang masalah, kondisi terdampak, dan tindakan yang disarankan. | Advisory | [Bab 23](materi/23-intelijen.md) |
| AI | Alat bantu yang dapat memberi penjelasan atau jawaban; hasilnya tetap perlu diperiksa melalui sumber dan percobaan. | - | [Bab 00](materi/00-orientasi.md) |
| Akuisisi | Proses memperoleh bukti digital dengan metode dan batas pengambilan yang dicatat. | - | [Bab 17](materi/17-forensik.md) |
| Akun lokal | Akun pengguna yang dikelola pada komputer setempat. | - | [Bab 05](materi/05-windows.md) |
| Alamat jaringan | Alamat penanda suatu blok jaringan, seperti 192.168.10.0 pada contoh /24. | - | [Bab 03](materi/03-jaringan.md) |
| Alamat lokal | Alamat berawalan file:/// yang menunjuk file pada komputer sendiri dalam contoh pra-bab. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Alamat privat IPv4 | Rentang alamat untuk jaringan lokal: 10.0.0.0/8, 172.16.0.0/12, dan 192.168.0.0/16. Jaringan berbeda dapat memakai rentang yang sama. | - | [Bab 03](materi/03-jaringan.md) |
| Alamat publik | Alamat untuk komunikasi melalui internet. | - | [Bab 03](materi/03-jaringan.md) |
| Alert | Peringatan yang muncul karena kejadian memenuhi aturan tertentu; hasilnya masih perlu diperiksa. | Peringatan | [Bab 15](materi/15-deteksi.md) |
| All files | Pilihan jenis penyimpanan agar editor memakai nama file yang kamu tentukan, seperti halo.py. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Analisis dinamis | Pemeriksaan perilaku program saat dijalankan dalam lingkungan yang dikendalikan. | Dynamic analysis | [Bab 18](materi/18-malware-reverse.md) |
| Analisis statis | Pemeriksaan file dan instruksi program tanpa menjalankan target. | Static analysis | [Bab 18](materi/18-malware-reverse.md) |
| Ancaman | Sumber, kejadian, atau tindakan yang dapat merugikan aset. | - | [Bab 00](materi/00-orientasi.md), [Bab 11](materi/11-threat-modeling.md) |
| Antarmuka jaringan | Tempat perangkat tersambung ke jaringan, misalnya melalui kabel atau Wi-Fi. | - | [Bab 03](materi/03-jaringan.md) |
| API | Kontrak komunikasi antarprogram, misalnya cara aplikasi meminta status nota. | Application programming interface | [Bab 07](materi/07-web.md), [Bab 13](materi/13-web-api.md) |
| Aplikasi | Program untuk mengerjakan tugas, seperti pengolah nota atau kalkulator. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Application | Nama log Windows untuk kejadian program aplikasi. | - | [Bab 05](materi/05-windows.md) |
| AppSec | Pekerjaan membantu pengembang membuat aplikasi yang aman. | Application security | [Bab 00](materi/00-orientasi.md) |
| ARN | Nama pengenal sumber daya pada AWS, misalnya pengenal bucket dan objek pada usulan kebijakan. | Amazon Resource Name | [Bab 21](materi/21-cloud.md) |
| ARP | Mekanisme pencarian alamat perangkat link lokal berdasarkan alamat IPv4 tetangganya. | - | [Bab 03](materi/03-jaringan.md) |
| ASCII | Pemetaan karakter ke angka; contoh parser memakai huruf ASCII yang masing-masing menempati satu byte. | - | [Bab 19](materi/19-memory-safety.md) |
| Aset | Sesuatu yang bernilai dan perlu dijaga, seperti nota pelanggan, akun, laptop, atau waktu operasional. | - | [Bab 00](materi/00-orientasi.md) |
| Assembly | Bentuk teks untuk membaca instruksi mesin prosesor. | - | [Bab 18](materi/18-malware-reverse.md) |
| Atomik | Sifat operasi yang berlaku sebagai satu kesatuan, seperti pembaruan status kupon yang harus menjaga aturan sekali pakai. | - | [Bab 13](materi/13-web-api.md) |
| ATT&CK | Kumpulan pengetahuan MITRE tentang perilaku penyerang untuk menyusun dan memeriksa dugaan, bukan menentukan identitas pelaku. | MITRE ATT&CK | [Bab 23](materi/23-intelijen.md) |
| Attack surface | Bagian sistem yang dapat dijangkau atau dipengaruhi penyerang. | - | [Bab 10](materi/10-hardening.md) |
| Authentication | Pemeriksaan untuk membuktikan identitas pengguna atau layanan yang meminta akses. | Autentikasi; Otentikasi | [Bab 08](materi/08-kriptografi.md), [Bab 09](materi/09-identitas.md) |
| Authorization | Penentuan tindakan yang boleh dilakukan suatu identitas, seperti hak membaca nota miliknya. | Otorisasi | [Bab 01](materi/01-lab.md), [Bab 09](materi/09-identitas.md) |
| Backup | Salinan data untuk pemulihan; keberhasilannya perlu diperiksa melalui percobaan memulihkan isi. | Cadangan | [Bab 10](materi/10-hardening.md) |
| Baseline | Keadaan awal yang disepakati sebagai pembanding pengaturan, akun, aplikasi, dan bukti. | - | [Bab 10](materi/10-hardening.md) |
| Batas input | Nilai atau ukuran di tepi aturan penerimaan data, seperti panjang nama maksimum pada parser. | Batas | [Bab 19](materi/19-memory-safety.md) |
| Batas kesimpulan | Hal yang belum dapat dipastikan dari bukti tersedia; hitungan log saja belum menentukan pelaku atau keberhasilan serangan. | Belum membuktikan serangan | [Panduan lab](labs/README.md) |
| Belum dikerjakan | Status bahwa latihan belum dijalankan; membaca hasil contoh saja belum menjadi bukti pelaksanaan. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Berkas baru | File tujuan pemulihan dengan nama berbeda agar bukti perubahan tidak tertimpa. | - | [Bab 26](materi/26-capstone.md) |
| Bermain dari browser | Jalur membuka simulator online dari HP atau komputer tanpa akun dan pemasangan program. | Dari HP atau browser komputer | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Bermain offline | Jalur komputer untuk membuka simulator dari folder hasil ekstraksi ZIP tanpa Python. | Alternatif: file offline di komputer setelah mengunduh | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Bind | Pengaturan alamat tempat server menerima koneksi; 0.0.0.0 biasanya mencakup semua antarmuka IPv4. | - | [Bab 03](materi/03-jaringan.md) |
| Bit | Satuan kecil untuk menyatakan data; delapan bit membentuk satu byte. | - | [Bab 02](materi/02-komputer.md) |
| Blue team | Tim yang membangun perlindungan, memeriksa peringatan, mendeteksi, dan menangani kejadian keamanan. | - | [Bab 00](materi/00-orientasi.md), [Bab 26](materi/26-capstone.md) |
| Body | Isi utama pesan permintaan atau jawaban, seperti teks nota yang dikirim. | - | [Bab 07](materi/07-web.md) |
| BOLA | Kelemahan pemeriksaan izin objek pada API sehingga pengguna dapat mengakses data di luar haknya. | - | [Bab 13](materi/13-web-api.md) |
| Bridged | Mode jaringan VM yang menempatkan guest pada jaringan fisik. Hindari untuk sistem latihan yang sengaja rentan. | - | [Bab 01](materi/01-lab.md) |
| Broadcast | Pengiriman ke seluruh perangkat dalam subnet IPv4; latihan memakai satu alamat khusus untuk tujuan ini. | - | [Bab 03](materi/03-jaringan.md) |
| Browser | Aplikasi pembuka halaman web atau file halaman lokal, seperti Firefox, Chrome, Edge, atau Safari. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Buat folder | Pilihan pengelola file untuk membuat tempat penyimpanan baru dengan nama yang kamu tentukan. | Baru → Folder; New → Folder | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Bucket | Wadah penyimpanan objek file pada layanan penyimpanan cloud. | - | [Bab 21](materi/21-cloud.md) |
| Buffer | Area memori berkapasitas tertentu untuk menampung data; akses di luar batas dapat merusak data atau menghentikan program. | - | [Bab 19](materi/19-memory-safety.md) |
| Buka dengan | Menu untuk memilih aplikasi pembuka file, misalnya browser untuk index.html. | Open with | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Buka terminal | Pilihan membuka sesi terminal pada folder yang dipilih; pastikan shell sesuai petunjuk. | Open in Terminal | [Bab 01](materi/01-lab.md) |
| Buku gabungan | Buku lengkap yang menyatukan sumber bab dan lampiran kursus. | Buku lengkap: Tutorial-Cybersecurity.md | [Halaman depan](README.md) |
| Business logic flaw | Kesalahan penerapan aturan bisnis, seperti kupon sekali pakai yang dapat dipakai berulang. | - | [Bab 13](materi/13-web-api.md) |
| Byte | Satuan data yang terdiri dari delapan bit. Ukuran file dalam byte dapat berbeda karena isi dan encoding. | - | [Bab 02](materi/02-komputer.md) |
| Bytecode | Instruksi bagi mesin virtual Python; bentuknya berbeda dari instruksi mesin prosesor. | - | [Bab 18](materi/18-malware-reverse.md) |
| Cache | Data sementara yang membantu akses berikutnya; pemakaiannya dapat menjelaskan sebagian RAM yang terlihat terpakai. | - | [Bab 02](materi/02-komputer.md) |
| Capstone | Proyek gabungan untuk membuktikan hubungan kemampuan dari beberapa bab melalui satu kasus utuh. | - | [Bab 26](materi/26-capstone.md) |
| Capture filter | Penyaring yang membatasi paket saat perekaman; paket yang terbuang tidak dapat dipulihkan lewat perubahan tampilan. | - | [Bab 14](materi/14-jaringan.md) |
| Certificate authority | Pihak yang menandatangani sertifikat pengikat identitas dan kunci publik menurut aturan validasinya. | CA | [Bab 08](materi/08-kriptografi.md) |
| Chain of custody | Catatan siapa menguasai bukti, kapan, untuk apa, dan bagaimana perpindahannya. | Serah terima bukti | [Bab 17](materi/17-forensik.md) |
| CIA | Pengingat tiga tujuan perlindungan: kerahasiaan, keutuhan dan ketepatan, serta ketersediaan. | CIA triad | [Bab 00](materi/00-orientasi.md) |
| CIDR | Cara menulis panjang bagian jaringan pada alamat, seperti /24 yang menandai 24 bit bagian jaringan. | Notasi CIDR | [Bab 03](materi/03-jaringan.md) |
| CLI | Antarmuka untuk memberi perintah lewat teks, seperti terminal dalam latihan Linux. | Command-line interface | [Bab 04](materi/04-linux.md) |
| Client | Program yang meminta layanan atau data, seperti browser yang meminta nota. | Klien | [Bab 07](materi/07-web.md) |
| Cloud | Kemampuan komputasi yang disediakan sebagai layanan oleh penyedia. | - | [Bab 21](materi/21-cloud.md) |
| Cloud dan identitas | Jalur pendalaman layanan cloud, hubungan identitas, serta pengujian izin yang benar-benar berlaku. | - | [Bab 25](materi/25-spesialisasi.md) |
| Cmdlet | Perintah PowerShell dengan fungsi tertentu, biasanya bernama kata kerja dan kata benda, seperti Get-Process. | - | [Bab 05](materi/05-windows.md) |
| Code coverage | Ukuran bagian kode yang dijalankan pengujian; ukuran baris dan cabang memberi informasi berbeda. | - | [Bab 19](materi/19-memory-safety.md) |
| Collision | Keadaan ketika dua masukan berbeda menghasilkan hash yang sama; percobaan dua file tidak membuktikan bahwa collision mustahil. | - | [Bab 08](materi/08-kriptografi.md) |
| Column | Kolom suatu tabel data, seperti ID atau status pesanan. | Kolom | [Bab 07](materi/07-web.md) |
| Commit | Potret perubahan file beserta pesan yang disimpan dalam riwayat Git. | - | [Bab 06](materi/06-pemrograman.md) |
| Compliance | Pemeriksaan kesesuaian terhadap kewajiban yang berlaku, seperti kontrak atau peraturan. | Kepatuhan | [Bab 24](materi/24-grc.md) |
| Constraint | Aturan yang basis data periksa terhadap data untuk menjaga syarat yang ditetapkan. | - | [Bab 13](materi/13-web-api.md) |
| Container | Proses dengan lingkungan aplikasi yang terpisah, pada umumnya berbagi kernel host; batasnya berbeda dari VM. | - | [Bab 21](materi/21-cloud.md) |
| Containment | Pembatasan dampak atau kerugian insiden, seperti mencabut sesi akun yang disalahgunakan. | - | [Bab 16](materi/16-respons-insiden.md) |
| Cookie | Data kecil yang browser simpan dan kirim menurut aturan nama situs, jalur, dan atribut pengirimannya. | - | [Bab 07](materi/07-web.md) |
| Coordinated vulnerability disclosure | Pelaporan kelemahan melalui kebijakan pemilik dengan bukti minimum, batas pengujian, dan koordinasi perbaikan serta publikasi. | - | [Bab 25](materi/25-spesialisasi.md) |
| Corpus | Kumpulan masukan awal untuk pengujian yang dapat disimpan dan diulang. | - | [Bab 19](materi/19-memory-safety.md) |
| Correlation ID | Pengenal yang membantu menghubungkan catatan dari permintaan yang sama. | - | [Bab 26](materi/26-capstone.md) |
| CPU | Bagian komputer yang mengerjakan instruksi, misalnya instruksi menghitung dan menyimpan pesanan. | Prosesor | [Bab 02](materi/02-komputer.md) |
| Crash triage | Pemilahan dan analisis laporan program gagal untuk menemukan penyebab dasarnya. | - | [Bab 19](materi/19-memory-safety.md) |
| CSRF | Situs lain memicu tindakan yang tidak dimaksud pengguna melalui kredensial yang browser kirim otomatis. | - | [Bab 13](materi/13-web-api.md) |
| CSS | Bahasa untuk mengatur tampilan halaman, seperti warna dan tata letak. | - | [Bab 07](materi/07-web.md) |
| CTF | Tantangan latihan dengan sasaran yang ditetapkan penyelenggara; target dan aturan platform tetap membatasi kegiatan. | Capture the flag | [Bab 25](materi/25-spesialisasi.md) |
| CVE | Pengenal catatan kerentanan publik; nomor tersebut bukan ukuran risiko dan belum membuktikan bahwa asetmu terdampak. | - | [Bab 11](materi/11-threat-modeling.md), [Bab 23](materi/23-intelijen.md) |
| CVSS | Kerangka penilaian keparahan teknis kerentanan; nilainya belum mencakup seluruh dampak pada usaha. | - | [Bab 11](materi/11-threat-modeling.md) |
| CWE | Pengelompokan jenis kelemahan, seperti kontrol akses yang keliru, bukan nomor satu kerentanan produk tertentu. | - | [Bab 23](materi/23-intelijen.md) |
| Daftar misi | Panel pemilih latihan dan mode belajar atau ujian pada simulator. | Pilih misi dan mode | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| DAST | Pemeriksaan perilaku keamanan aplikasi ketika aplikasi berjalan. | Dynamic Application Security Testing | [Bab 22](materi/22-secure-sdlc.md) |
| Data sintetis | Data buatan untuk percobaan, sehingga latihan tidak membutuhkan informasi pelanggan nyata. | Data buatan | [Bab 01](materi/01-lab.md) |
| Datagram | Satuan pesan yang dikirim melalui jaringan. | - | [Bab 03](materi/03-jaringan.md) |
| Deauthentication | Pemutusan autentikasi pada sambungan Wi-Fi; pengujiannya dapat mengganggu pengguna lain. | - | [Bab 14](materi/14-jaringan.md) |
| Decompiler | Alat yang mencoba membentuk kode tingkat tinggi dari instruksi mesin; hasilnya belum tentu sama dengan sumber asli. | - | [Bab 18](materi/18-malware-reverse.md) |
| Default gateway | Router tujuan bawaan untuk mengirim ke luar jaringan yang terhubung langsung. | Gateway | [Bab 03](materi/03-jaringan.md) |
| Dekripsi | Proses membuka kembali data terenkripsi memakai kunci yang sesuai. | - | [Bab 08](materi/08-kriptografi.md) |
| Detection engineering | Perancangan dan penilaian aturan deteksi, termasuk peringatan keliru serta kasus berbahaya yang terlewat. | - | [Bab 25](materi/25-spesialisasi.md) |
| DFIR | Pemeriksaan bukti digital dan penanganan kejadian keamanan. | Digital forensics and incident response | [Bab 00](materi/00-orientasi.md) |
| DHCP | Mekanisme pembagian konfigurasi jaringan, termasuk alamat, gateway, dan resolver DNS. | - | [Bab 03](materi/03-jaringan.md) |
| Dictionary | Kumpulan pasangan kunci dan nilai, seperti label yang menunjuk isi laci. | - | [Bab 06](materi/06-pemrograman.md) |
| Digest | Hasil ringkasan dari fungsi hash, seperti hasil SHA-256 pada nota latihan. | - | [Panduan lab](labs/README.md) |
| Directory service | Layanan penyimpanan identitas dan hubungan organisasi secara terpusat. | - | [Bab 20](materi/20-enterprise.md) |
| Direktori | Folder tempat file dan folder lain disusun. | Folder | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Direktori kerja | Folder tempat terminal sedang berada; lokasi relatif dihitung dari sini. | - | [Bab 01](materi/01-lab.md) |
| Disassembler | Alat yang menampilkan instruksi mesin dalam bentuk assembly yang dapat dibaca. | - | [Bab 18](materi/18-malware-reverse.md) |
| Display filter | Penyaring tampilan paket dari rekaman yang sudah ada; berbeda dari penyaring saat perekaman. | - | [Bab 14](materi/14-jaringan.md) |
| DMZ | Segmen terpisah untuk layanan yang perlu berhubungan dengan jaringan yang kurang tepercaya. | - | [Bab 14](materi/14-jaringan.md) |
| DNS | Sistem pencarian yang menerjemahkan nama domain menjadi informasi, misalnya alamat IP. | - | [Bab 03](materi/03-jaringan.md) |
| Dokumen | Isi pekerjaan yang disimpan, seperti nota atau catatan. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| DOM | Bentuk dokumen halaman yang dapat dibaca dan diubah program di browser. | - | [Bab 13](materi/13-web-api.md) |
| Domain | Nama tujuan pada web. Untuk kelompok akun perusahaan, lihat entri Domain perusahaan. | Nama domain | [Bab 00](materi/00-orientasi.md), [Bab 03](materi/03-jaringan.md), [Bab 20](materi/20-enterprise.md) |
| Domain controller | Server yang menjalankan layanan domain dalam lingkungan Active Directory Domain Services. | - | [Bab 20](materi/20-enterprise.md) |
| Domain perusahaan | Pengelompokan identitas dan pengelolaan pada lingkungan direktori perusahaan; tidak harus terbatas pada satu jaringan fisik. | Domain AD | [Bab 20](materi/20-enterprise.md) |
| Driver | Komponen perantara yang menyampaikan permintaan program kepada basis data pada contoh SQL. | - | [Panduan lab](labs/README.md) |
| Editor teks | Aplikasi untuk menulis dan menyunting teks biasa, seperti Notepad. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| EDR | Kemampuan pengamatan, deteksi, dan tindakan respons pada perangkat pengguna atau server; hasilnya perlu pemeriksaan manusia. | Endpoint detection and response | [Bab 10](materi/10-hardening.md) |
| Efek pernyataan | Bagian keputusan kebijakan yang menyatakan mengizinkan atau menolak suatu tindakan. | - | [Bab 21](materi/21-cloud.md) |
| Eksperimen | Percobaan terencana untuk menguji dugaan dengan masukan, keadaan awal, dan hasil yang dicatat. | - | [Bab 25](materi/25-spesialisasi.md) |
| Ekstensi | Bagian akhir nama file yang membantu memilih pembuka; mengganti namanya tidak mengubah isi menjadi aman. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Ekstrak ZIP | Mengeluarkan isi paket ZIP ke folder agar semua file pendukung dapat dipakai. | Extract All; Ekstrak Semua | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Elevasi hak | Peningkatan wewenang untuk operasi tertentu, seperti permintaan konfirmasi administrator pada Windows. | - | [Bab 05](materi/05-windows.md) |
| Encoding | Aturan representasi data agar dapat dikirim atau disimpan, misalnya mengubah teks menjadi byte. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md), [Bab 08](materi/08-kriptografi.md) |
| Endpoint | Titik tujuan permintaan pada API; identitas, izin, dan data masukan tetap perlu diperiksa. | - | [Bab 13](materi/13-web-api.md) |
| Enkripsi | Penyembunyian isi data menggunakan kunci agar pihak tanpa kunci yang sesuai sulit membacanya. Keamanan memerlukan pengelolaan dan penerapan yang benar. | - | [Bab 03](materi/03-jaringan.md), [Bab 08](materi/08-kriptografi.md) |
| Enkripsi simetris | Enkripsi yang memakai kunci rahasia sama untuk melindungi dan membuka kembali data. | - | [Bab 08](materi/08-kriptografi.md) |
| Eradication | Penghilangan penyebab dan komponen penyalahgunaan yang ditemukan, seperti memperbaiki jalur masuk serta menangani kredensial bocor. | - | [Bab 16](materi/16-respons-insiden.md) |
| Eskalasi | Penerusan masalah kepada penanggung jawab yang mempunyai kewenangan atau keahlian yang dibutuhkan. | - | [Bab 16](materi/16-respons-insiden.md) |
| Ethernet | Teknologi komunikasi jaringan lokal yang lazim memakai kabel. | - | [Bab 03](materi/03-jaringan.md) |
| Event | Satu kejadian yang dicatat, seperti satu login gagal. | Kejadian | [Bab 15](materi/15-deteksi.md) |
| Event log | Catatan kejadian Windows dari sumber tertentu, dengan waktu, pengenal, tingkat, dan rincian. | - | [Bab 05](materi/05-windows.md) |
| Evidence matrix | Hubungan pernyataan kontrol dengan bukti yang diperlukan untuk memeriksanya. | Matriks bukti | [Bab 24](materi/24-grc.md) |
| Evil twin | Titik akses Wi-Fi peniru yang menyamar sebagai jaringan sah. | - | [Bab 14](materi/14-jaringan.md) |
| Exploit | Cara memanfaatkan kelemahan untuk menimbulkan perilaku tertentu; keberhasilannya bergantung pada kondisi dan versi target. | - | [Bab 12](materi/12-pentest.md), [Bab 25](materi/25-spesialisasi.md) |
| False negative | Aktivitas berbahaya yang luput dari peringatan; penilaian memerlukan pembanding yang cukup tepercaya. | False negative (FN); FN | [Bab 15](materi/15-deteksi.md) |
| False positive | Aktivitas sah yang memicu peringatan; penilaian memerlukan pemeriksaan keadaan sebenarnya. | False positive (FP); FP | [Bab 15](materi/15-deteksi.md) |
| Field | Bagian bernama dalam data, seperti kolom waktu atau pengguna pada log. | - | [Bab 15](materi/15-deteksi.md) |
| File | Penyimpan data dengan nama, seperti nota.txt. | Berkas | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| File tersembunyi | File berawalan titik yang tidak muncul pada daftar Linux biasa; nama tersembunyi tidak memberi perlindungan akses. | - | [Bab 04](materi/04-linux.md) |
| Firewall | Pembatas komunikasi berdasarkan aturan yang ditetapkan. | - | [Bab 03](materi/03-jaringan.md), [Bab 10](materi/10-hardening.md), [Bab 14](materi/14-jaringan.md) |
| Firmware | Perangkat lunak pengendali perangkat, seperti program pada titik akses Wi-Fi. | - | [Bab 14](materi/14-jaringan.md) |
| Fixture | Data latihan tetap sebagai pembanding hasil pengujian; buat salinan untuk percobaan tambahan. | - | [Bab 15](materi/15-deteksi.md), [Bab 17](materi/17-forensik.md) |
| Fokus | Kontrol yang menerima ketikan atau tindakan keyboard pada saat itu. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Forensik | Pengambilan, pemeriksaan, dan penafsiran bukti digital dengan metode, keutuhan data, serta jejak penanganan yang tercatat. | Forensik digital | [Bab 17](materi/17-forensik.md) |
| Forest | Struktur yang dapat memuat beberapa domain dengan hubungan kepercayaan; izin terhadap data tetap perlu diperiksa. | - | [Bab 20](materi/20-enterprise.md) |
| Fungsi | Kumpulan langkah program yang dapat dipanggil dan diuji dengan masukan berbeda. | - | [Bab 06](materi/06-pemrograman.md) |
| Fuzzing | Pengujian program dengan banyak variasi masukan untuk mencari kegagalan, proses berlebihan, atau pelanggaran aturan. | - | [Bab 19](materi/19-memory-safety.md) |
| Git | Perangkat lunak pencatat versi perubahan file. | - | [Bab 06](materi/06-pemrograman.md) |
| Governance | Penetapan arah, kewenangan, dan tanggung jawab pengelolaan organisasi. | Tata kelola | [Bab 24](materi/24-grc.md) |
| Graf | Kumpulan titik dan hubungan, seperti peta akun yang menjadi anggota suatu grup. | - | [Bab 20](materi/20-enterprise.md) |
| GRC | Gabungan tata kelola, pengelolaan risiko, dan pemeriksaan kepatuhan terhadap kewajiban. | - | [Bab 24](materi/24-grc.md) |
| Group | Kelompok pengguna yang dapat berbagi aturan izin terhadap file atau folder. | Grup | [Bab 04](materi/04-linux.md) |
| Group Policy | Pengaturan untuk menerapkan kebijakan kepada pengguna atau komputer dalam lingkungan domain. | - | [Bab 20](materi/20-enterprise.md) |
| Guest | Sistem yang berjalan di dalam VM dan dapat mempunyai sambungan sesuai pengaturan. | - | [Bab 01](materi/01-lab.md) |
| GUI | Antarmuka grafis yang dipakai lewat jendela, menu, dan tombol. | Graphical user interface | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Hacker | Orang yang memahami sistem lalu menemukan cara mengubah perilakunya. Buku ini membahas pengujian berizin. | - | [Bab 00](materi/00-orientasi.md) |
| Handshake | Pertukaran awal untuk menyiapkan perlindungan sesi komunikasi, misalnya pada TLS. | - | [Bab 08](materi/08-kriptografi.md) |
| Hardening | Pengurangan peluang penyalahgunaan melalui konfigurasi sesuai kebutuhan serta pengurangan fitur atau hak yang tidak diperlukan. | - | [Bab 10](materi/10-hardening.md) |
| Harness | Program penghubung yang memberikan masukan ke fungsi yang akan diuji; bentuknya memengaruhi bagian program yang terjangkau. | - | [Bab 19](materi/19-memory-safety.md) |
| Hash | Ringkasan yang berulang sama untuk data dan algoritma sama; berguna memeriksa perubahan. Sumber pembanding tetap harus dipercaya. | - | [Bab 01](materi/01-lab.md), [Bab 08](materi/08-kriptografi.md) |
| Header | Keterangan tambahan pada pesan, seperti jenis konten yang dikirim. | - | [Bab 07](materi/07-web.md) |
| Hipotesis | Dugaan yang dapat diuji dan bisa diperkuat atau dibantah oleh hasil percobaan. | - | [Bab 02](materi/02-komputer.md), [Bab 25](materi/25-spesialisasi.md) |
| Home directory | Folder pribadi untuk pekerjaan pengguna Linux biasa. | Direktori home | [Bab 04](materi/04-linux.md) |
| Host | Perangkat pada jaringan. Dalam pembahasan VM, host adalah sistem utama yang menampung guest. | - | [Bab 01](materi/01-lab.md), [Bab 03](materi/03-jaringan.md) |
| Host-only | Mode jaringan yang menghubungkan guest dengan host dan guest lain pada jaringan tersebut. | - | [Bab 01](materi/01-lab.md) |
| HP | Telepon genggam; dapat dipakai untuk simulator, sedangkan lab Python buku ini memakai komputer. | - | [Panduan lab](labs/README.md) |
| HTML | Bahasa penyusun struktur dokumen halaman, seperti judul dan paragraf nota. | - | [Bab 07](materi/07-web.md) |
| HTTP | Aturan pertukaran permintaan dan jawaban web. | - | [Bab 03](materi/03-jaringan.md), [Bab 07](materi/07-web.md) |
| HTTP/3 | Versi HTTP yang memakai QUIC di atas UDP; HTTPS dengan HTTP/3 lazim memakai UDP 443. | - | [Bab 03](materi/03-jaringan.md) |
| HTTPS | HTTP dengan perlindungan TLS. Perlindungan koneksi tetap memerlukan pemeriksaan nama situs dan izin aplikasi. | - | [Bab 03](materi/03-jaringan.md), [Bab 08](materi/08-kriptografi.md) |
| Hypervisor | Perangkat lunak pengelola VM; dokumentasinya membantu memilih pengaturan sebelum target latihan dinyalakan. | - | [Bab 01](materi/01-lab.md) |
| IaaS | Model cloud dengan lebih banyak lapisan yang dikelola pelanggan, termasuk sistem operasi VM. | Infrastructure as a Service | [Bab 21](materi/21-cloud.md) |
| IAM | Pengelolaan identitas dan izin: siapa boleh melakukan tindakan apa pada sumber daya mana. | Identity and Access Management | [Bab 21](materi/21-cloud.md) |
| ICMP | Aturan pesan kendali jaringan yang antara lain dipakai ping untuk memeriksa respons; hasil ping tidak menguji seluruh aplikasi. | - | [Bab 03](materi/03-jaringan.md) |
| ICS | Sistem kendali industri yang mengatur proses atau perangkat fisik; latihan memerlukan lingkungan yang memang disiapkan untuk pendidikan. | Industrial control systems | [Bab 25](materi/25-spesialisasi.md) |
| Identification | Pengenalan masalah dan penilaian cakupannya berdasarkan bukti dalam proses respons insiden. | - | [Bab 16](materi/16-respons-insiden.md) |
| Identitas terverifikasi | Identitas yang sudah ditentukan server setelah pemeriksaan login; aplikasi tidak boleh menerimanya begitu saja dari pilihan pengguna. | Sudah diverifikasi server | [Panduan lab](labs/README.md) |
| IDOR | Akses objek lewat pengenal tanpa pemeriksaan hak yang sesuai, seperti mengganti nomor nota untuk membaca milik orang lain. | - | [Bab 13](materi/13-web-api.md) |
| IDOR / BOLA | Penunjuk dua istilah kelemahan akses objek. Lihat IDOR dan BOLA untuk arti masing-masing. | IDOR/BOLA | [Bab 13](materi/13-web-api.md) |
| IDS | Kemampuan memberi peringatan terhadap aktivitas mencurigakan. | - | [Bab 10](materi/10-hardening.md) |
| Ikuti aliran TCP | Menu Wireshark untuk membaca pesan satu percakapan TCP dari rekaman paket. | Follow → TCP Stream | [Bab 14](materi/14-jaringan.md) |
| Image disk | Salinan representasi disk untuk pemeriksaan; cakupannya berbeda dari sekadar menyalin folder. | - | [Bab 17](materi/17-forensik.md) |
| Incident | Kejadian yang sudah dinilai memerlukan penanganan keamanan. Setiap peringatan masih perlu dinilai sebelum disebut insiden. | Insiden | [Bab 15](materi/15-deteksi.md) |
| Incident response | Proses persiapan, pengenalan, pembatasan dampak, penghilangan penyebab, pemulihan, dan pembelajaran dari kejadian keamanan. | Respons insiden | [Bab 16](materi/16-respons-insiden.md) |
| Indikator kompromi | Petunjuk teknis seperti hash atau alamat yang terkait aktivitas tertentu; petunjuk perlu dinilai bersama waktu dan konteks. | IOC; Indicator of compromise | [Bab 18](materi/18-malware-reverse.md), [Bab 23](materi/23-intelijen.md) |
| Infrastructure as Code | Rancangan infrastruktur dalam file kode agar perubahan dapat ditinjau dan diulang. | IaC | [Bab 21](materi/21-cloud.md) |
| Input | Data atau perintah yang diberikan kepada program. | Masukan | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Instance | Lingkungan latihan khusus yang penyelenggara lab sediakan untuk percobaanmu. | - | [Bab 13](materi/13-web-api.md) |
| Integer | Nilai bilangan bulat, seperti jumlah pesanan. | - | [Bab 06](materi/06-pemrograman.md) |
| Integer overflow | Hasil perhitungan melampaui rentang tipe bilangan; perilakunya bergantung pada tipe dan aturan bahasa. | - | [Bab 19](materi/19-memory-safety.md) |
| Integritas | Keutuhan dan ketepatan data, termasuk perlindungan dari perubahan tanpa izin. | Integrity | [Bab 00](materi/00-orientasi.md), [Bab 08](materi/08-kriptografi.md) |
| Integritas paket | Pemeriksaan hash paket terhadap sumber pembanding untuk mengetahui perubahan file selama pengiriman. | - | [Bab 22](materi/22-secure-sdlc.md) |
| Internal network | Mode jaringan yang menghubungkan guest pada jaringan virtual yang sama. | - | [Bab 01](materi/01-lab.md) |
| Internet | Jaringan yang menghubungkan banyak perangkat. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Invariant | Aturan yang harus tetap benar, seperti server memeriksa cabang sebelum menghasilkan ekspor. | - | [Bab 22](materi/22-secure-sdlc.md) |
| IP | Alamat komunikasi jaringan yang dapat berubah; satu perangkat bisa mempunyai beberapa alamat. Alamat ini tidak membuktikan identitas manusia. | IP address; Alamat IP | [Bab 03](materi/03-jaringan.md) |
| IPS | Kemampuan memblokir aktivitas dalam jalur lalu lintas berdasarkan aturan atau analisis. | - | [Bab 10](materi/10-hardening.md) |
| IPv4 | Bentuk alamat jaringan dengan empat angka, masing-masing dari 0 sampai 255, seperti 192.168.10.20. | - | [Bab 03](materi/03-jaringan.md) |
| IPv6 | Bentuk alamat jaringan sepanjang 128 bit; contoh alamat loopback-nya ::1. | - | [Bab 03](materi/03-jaringan.md) |
| Izin direktori | Aturan akses folder yang membedakan membaca daftar nama, mengubah entri, dan melewati folder untuk mengakses isinya. | - | [Bab 04](materi/04-linux.md) |
| Izin oktal | Penulisan izin Linux memakai angka 0 sampai 7; angka 4, 2, dan 1 mewakili baca, tulis, dan eksekusi. | - | [Bab 04](materi/04-linux.md) |
| Jalankan perintah | Tombol pengirim perintah pada simulator; perintah hanya mengolah data latihan di halaman. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Jalur kanonis | Lokasi acuan file setelah bagian jalurnya diselesaikan, termasuk perpindahan ke folder induk. Tetap periksa lokasi dan hak pengguna. | - | [Bab 13](materi/13-web-api.md) |
| Jaringan | Hubungan antarperangkat agar dapat bertukar data, seperti laptop kasir dan server aplikasi. | - | [Bab 03](materi/03-jaringan.md) |
| JavaScript | Bahasa untuk menjalankan logika halaman pada browser pengguna dalam latihan web. | - | [Bab 07](materi/07-web.md) |
| JSON | Format teks untuk data terstruktur, dengan nama dan nilai di dalam objek. | - | [Bab 13](materi/13-web-api.md), [Bab 15](materi/15-deteksi.md) |
| JSONL | Format yang menyimpan satu objek JSON pada setiap baris. | - | [Bab 15](materi/15-deteksi.md) |
| Jump server | Titik administrasi terpusat dengan akses yang dikendalikan. | - | [Bab 14](materi/14-jaringan.md) |
| Kasus baru | Latihan menerapkan pemahaman pada data atau keadaan berbeda dari contoh yang diikuti. | Pindah kasus; Uji pindah kasus | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Kasus diagnosis | Latihan memilih pemeriksaan awal berdasarkan gejala, seperti membedakan 404 dari kegagalan tersambung. | - | [Bab 07](materi/07-web.md) |
| Kasus uji negatif | Percobaan yang hasilnya seharusnya ditolak atau dibatasi, seperti akses nota pengguna lain. | Uji negatif | [Bab 13](materi/13-web-api.md) |
| KDC | Pusat penerbit tiket Kerberos. Dalam lingkungan AD DS, pusat ini berada pada server pengendali domain. | Key Distribution Center | [Bab 20](materi/20-enterprise.md) |
| Keanggotaan | Hubungan akun sebagai anggota grup yang dapat mewariskan hak, termasuk lewat grup di dalam grup. | - | [Bab 20](materi/20-enterprise.md) |
| Kerahasiaan | Perlindungan agar pihak yang tidak berhak tidak membaca data. | Confidentiality | [Bab 00](materi/00-orientasi.md), [Bab 08](materi/08-kriptografi.md) |
| Kerberos | Cara memeriksa identitas memakai tiket digital yang diterbitkan pihak tepercaya. | - | [Bab 20](materi/20-enterprise.md) |
| Kerentanan | Kelemahan yang memungkinkan kerugian, seperti izin baca nota yang terlalu luas. | - | [Bab 00](materi/00-orientasi.md), [Bab 11](materi/11-threat-modeling.md) |
| Kernel | Bagian inti sistem operasi yang mengelola memori, proses, dan perangkat. | - | [Bab 02](materi/02-komputer.md) |
| KEV | Katalog CISA untuk kerentanan yang diketahui telah dieksploitasi; ketiadaan dari katalog tidak membuktikan keamanan. | - | [Bab 23](materi/23-intelijen.md) |
| KiB | Satuan ukuran berbasis kelipatan 1.024; satu KiB berisi 1.024 byte. | - | [Bab 02](materi/02-komputer.md) |
| KiB dan MiB | Penunjuk satuan ukuran berbasis kelipatan 1.024. Lihat KiB dan MiB. | - | [Bab 02](materi/02-komputer.md) |
| Kilobyte | Satuan ukuran yang pada produk dapat memakai kelipatan 1.000 byte. | - | [Bab 02](materi/02-komputer.md) |
| Kilobyte dan megabyte | Penunjuk satuan ukuran yang pada produk dapat memakai kelipatan 1.000. Lihat Kilobyte dan Megabyte. | - | [Bab 02](materi/02-komputer.md) |
| Kluster | Sekumpulan komputer yang dikelola untuk menjalankan aplikasi bersama, seperti pada Kubernetes. | Cluster | [Bab 21](materi/21-cloud.md) |
| KMS | Layanan pengelola kunci enkripsi data. | Key Management Service | [Bab 21](materi/21-cloud.md) |
| Kompromi | Keadaan ketika pihak tanpa hak berhasil menguasai atau mengakses sesuatu; kesimpulan ini memerlukan bukti. | - | [Bab 23](materi/23-intelijen.md) |
| Kondisi | Aturan yang memilih tindakan program berdasarkan syarat. | - | [Bab 06](materi/06-pemrograman.md) |
| Kontrol | Langkah pengurang risiko, seperti pemeriksaan pemilik nota. Dalam audit akun, juga berarti hak mengubah grup atau akun lain. | - | [Bab 00](materi/00-orientasi.md), [Bab 20](materi/20-enterprise.md) |
| Korelasi | Penghubungan kejadian yang berkaitan, misalnya login dengan aktivitas akun sesudahnya. | - | [Bab 15](materi/15-deteksi.md) |
| Kotak perintah | Tempat mengetik perintah virtual pada halaman simulator, terpisah dari bilah alamat browser. | Ketik perintah di sini | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Kriptografi asimetris | Pemakaian pasangan kunci publik dan privat, dengan operasi yang mengikuti rancangan skema yang dipilih. | - | [Bab 08](materi/08-kriptografi.md) |
| Kubernetes | Pengelola container pada sekumpulan komputer; pengelompokan saja belum menjamin seluruh isolasi keamanan. | - | [Bab 21](materi/21-cloud.md) |
| Kunci dan nilai | Pasangan data yang menghubungkan suatu nama pencarian dengan isinya, seperti label laci dan catatan di dalamnya. | - | [Bab 06](materi/06-pemrograman.md) |
| Kunci privat | Kunci yang harus dijaga rahasianya dalam pasangan kunci kriptografi. | - | [Bab 08](materi/08-kriptografi.md) |
| Kunci publik | Kunci dari pasangan kriptografi yang boleh dibagikan. | - | [Bab 08](materi/08-kriptografi.md) |
| Kunci versi | Penetapan versi komponen tambahan; hasil build identik juga memerlukan sumber, lingkungan, dan instruksi yang sesuai. | - | [Bab 22](materi/22-secure-sdlc.md) |
| Kursor | Tanda posisi pengetikan, seperti tempat karakter berikutnya akan ditulis. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Lab | Lingkungan latihan dengan target dan data yang sengaja disiapkan serta diizinkan. | - | [Bab 00](materi/00-orientasi.md) |
| LAN | Jaringan lokal, seperti jaringan dalam toko. | - | [Bab 03](materi/03-jaringan.md) |
| Latihan dengan sebagian petunjuk | Latihan dengan target atau bantuan terbatas; pelajar menentukan sendiri sebagian langkah. | Sebagian petunjuk; Kurangi bantuan | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Latihan mandiri | Latihan tanpa urutan langkah rinci untuk memeriksa pemahaman yang sudah dipelajari. | Tanpa petunjuk langkah | [Bab 03](materi/03-jaringan.md) |
| Latihan terbimbing | Latihan dengan petunjuk yang membantu pelajar melakukan langkah dan menjelaskan hasil. | Terbimbing; Dengan petunjuk | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| LDAP | Aturan komunikasi untuk membaca dan mencari informasi pada direktori identitas organisasi sesuai izin. | - | [Bab 20](materi/20-enterprise.md) |
| Least privilege | Prinsip memberi hak secukupnya untuk tugas, lalu meninjau kembali saat kebutuhan berubah. | Hak minimal | [Bab 04](materi/04-linux.md), [Bab 09](materi/09-identitas.md) |
| Lessons learned | Pelajaran dari penanganan kejadian untuk memperbaiki persiapan dan tindakan berikutnya. | - | [Bab 16](materi/16-respons-insiden.md) |
| Linux | Sistem operasi yang dipakai untuk latihan terminal dan pengelolaan file. | - | [Bab 01](materi/01-lab.md), [Bab 04](materi/04-linux.md) |
| Linux/macOS | Label jalur perintah yang sama untuk Linux atau macOS pada langkah tertentu. | - | [Bab 01](materi/01-lab.md) |
| Linux/macOS dengan Bash | Label jalur perintah yang memakai shell Bash pada Linux atau macOS. | - | [Bab 02](materi/02-komputer.md) |
| List | Kumpulan nilai berurutan, seperti daftar status pesanan. | - | [Bab 06](materi/06-pemrograman.md) |
| Localhost | Nama untuk komputer sendiri; biasanya menunjuk 127.0.0.1 atau ::1. | - | [Bab 03](materi/03-jaringan.md), [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Log | Catatan kejadian yang dapat dibaca kembali, seperti catatan login atau penolakan akses. | - | [Bab 15](materi/15-deteksi.md) |
| Loop | Pengulangan langkah program, misalnya memeriksa satu per satu status pesanan. | - | [Bab 06](materi/06-pemrograman.md) |
| Loopback | Jalur komunikasi yang kembali ke perangkat sendiri, seperti alamat 127.0.0.1 pada lab lokal. | Alamat layanan sendiri | [Bab 03](materi/03-jaringan.md) |
| MAC address | Alamat antarmuka pada komunikasi link lokal, seperti Ethernet atau Wi-Fi. Alamat ini dapat diacak atau dipalsukan. | - | [Bab 03](materi/03-jaringan.md) |
| macOS | Sistem operasi komputer Mac; buku memisahkan perintahnya bila berbeda dari Linux. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Malware | Perangkat lunak untuk tindakan merugikan tanpa izin pemilik sistem; satu program dapat mempunyai beberapa perilaku. | - | [Bab 18](materi/18-malware-reverse.md) |
| Markdown | Format teks yang memakai tanda sederhana untuk judul dan daftar, dengan ekstensi .md. | - | [Bab 00](materi/00-orientasi.md) |
| Masa aktif sesi | Rentang berlakunya sesi login sebelum kedaluwarsa. | - | [Bab 07](materi/07-web.md) |
| Masa aktif tiket | Rentang waktu berlakunya tiket sebelum klien perlu meminta tiket baru. | - | [Bab 20](materi/20-enterprise.md) |
| Mask | Penanda pemisahan bagian jaringan dan perangkat pada alamat, seperti 255.255.255.0 untuk contoh /24. | - | [Bab 03](materi/03-jaringan.md) |
| Mass assignment | Penerimaan properti masukan yang seharusnya tidak boleh diubah pengguna, seperti peran administrator. | - | [Bab 13](materi/13-web-api.md) |
| Megabyte | Satuan ukuran yang pada produk dapat memakai kelipatan 1.000 kilobyte. | - | [Bab 02](materi/02-komputer.md) |
| Memory safety | Perlindungan agar akses memori mengikuti batas dan masa hidup yang benar. | - | [Bab 19](materi/19-memory-safety.md) |
| Mesin virtual Python | Program pelaksana bytecode Python, berbeda dari VM sistem operasi. | - | [Bab 18](materi/18-malware-reverse.md) |
| Metadata | Keterangan tentang file, seperti ukuran dan waktu perubahan; keterangan ini dapat berubah tanpa perubahan isi. | - | [Bab 02](materi/02-komputer.md), [Bab 17](materi/17-forensik.md) |
| Method | Jenis tindakan yang diminta dalam pesan HTTP, seperti GET untuk meminta sumber daya. | - | [Bab 07](materi/07-web.md) |
| MFA | Penggabungan beberapa kategori bukti identitas: yang diketahui, dimiliki, atau melekat pada pengguna. Dua password tetap satu kategori. | Multi-factor authentication | [Bab 09](materi/09-identitas.md) |
| MiB | Satuan ukuran berbasis kelipatan 1.024; satu MiB berisi 1.024 KiB. | - | [Bab 02](materi/02-komputer.md) |
| Misi pertama | Latihan awal simulator untuk menemukan catatan toko melalui perintah virtual. | Temukan catatan toko | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Multi-tenancy | Pemakaian sumber daya layanan bersama oleh beberapa pelanggan dengan pemisahan sesuai rancangan. | - | [Bab 21](materi/21-cloud.md) |
| Mutation fuzzing | Pengujian dengan mengubah sedikit bagian dari contoh masukan yang valid. | - | [Bab 19](materi/19-memory-safety.md) |
| Namespace | Pengelompokan sumber daya pada Kubernetes; pengelompokan ini tidak otomatis menyediakan seluruh isolasi. | - | [Bab 21](materi/21-cloud.md) |
| NAT | Penerjemahan informasi alamat paket yang sering membantu berbagi alamat publik. Pada VM, akses keluar lewat host tidak menjamin isolasi; kebijakan firewall tetap diperlukan. | - | [Bab 01](materi/01-lab.md), [Bab 03](materi/03-jaringan.md) |
| Neighbor Discovery | Mekanisme IPv6 untuk menemukan tetangga pada sambungan lokal; IPv6 memakainya sebagai pengganti ARP. | - | [Bab 03](materi/03-jaringan.md) |
| NetworkPolicy | Aturan komunikasi jaringan untuk Pod yang memerlukan dukungan sistem jaringan kluster. | - | [Bab 21](materi/21-cloud.md) |
| NIST CSF 2.0 | Kerangka hasil keamanan untuk meninjau cakupan pengelolaan risiko sesuai kebutuhan organisasi. | CSF 2.0 | [Bab 16](materi/16-respons-insiden.md), [Bab 24](materi/24-grc.md) |
| Nmap | Alat pemeriksa keadaan port dari titik pengujian; port terbuka saja belum membuktikan kelemahan. | - | [Bab 12](materi/12-pentest.md) |
| OAuth | Cara mendelegasikan akses kepada aplikasi. Pembuktian identitas memerlukan lapisan yang sesuai, seperti OpenID Connect. | - | [Bab 09](materi/09-identitas.md) |
| Obfuscation | Pengubahan tampilan program agar logikanya lebih sulit diikuti. | - | [Bab 18](materi/18-malware-reverse.md) |
| Objek | Sesuatu yang diproses atau diberi aturan akses, misalnya nota. Pada PowerShell, data dengan properti bernama. | - | [Bab 05](materi/05-windows.md), [Bab 09](materi/09-identitas.md) |
| Objek direktori | Rekaman identitas pengguna, grup, atau komputer pada AD DS. | - | [Bab 20](materi/20-enterprise.md) |
| Oktal | Sistem angka berbasis delapan yang dipakai untuk menuliskan izin Linux. | - | [Bab 04](materi/04-linux.md) |
| OpenID Connect | Lapisan identitas di atas OAuth untuk membantu aplikasi memeriksa siapa pengguna. | OIDC | [Bab 09](materi/09-identitas.md) |
| Organizational Unit | Wadah pengelompokan objek untuk administrasi direktori; wadah ini tidak menggantikan grup izin file. | OU | [Bab 20](materi/20-enterprise.md) |
| Origin | Asal web berdasarkan skema, host, dan port. Aplikasi memakainya dalam pemeriksaan asal permintaan. | - | [Bab 13](materi/13-web-api.md) |
| OSI | Model tujuh lapisan untuk memisahkan pertanyaan pemeriksaan jaringan; bukan bukti keamanan suatu produk. | - | [Bab 03](materi/03-jaringan.md) |
| OSINT | Penggunaan sumber terbuka untuk menjawab pertanyaan tertentu tanpa perlu mengumpulkan data pribadi atau menguji target. | Open Source Intelligence | [Bab 23](materi/23-intelijen.md) |
| OT | Teknologi operasional yang mengatur atau memantau proses fisik, misalnya mesin pada lingkungan industri. | Operational technology | [Bab 25](materi/25-spesialisasi.md) |
| OT/ICS | Penunjuk teknologi operasional dan sistem kendali industri. Kegagalan pada sistem fisik dapat memengaruhi keselamatan manusia. | - | [Bab 25](materi/25-spesialisasi.md) |
| Otentikasi bersama | Keadaan ketika klien dan server saling membuktikan identitas. | Mutual authentication | [Bab 20](materi/20-enterprise.md) |
| Others | Pengguna lain di luar pemilik file dan kelompok yang ditetapkan dalam izin Linux. | - | [Bab 04](materi/04-linux.md) |
| Otomasi | Pelaksanaan tugas berulang melalui program. | - | [Bab 06](materi/06-pemrograman.md) |
| Output | Jawaban atau hasil yang ditampilkan program setelah menerima masukan. | Hasil | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Owner | Pengguna pemilik file atau direktori dalam pembahasan izin Linux. | - | [Bab 04](materi/04-linux.md) |
| PaaS | Model cloud yang memindahkan sebagian pengelolaan platform kepada penyedia, sementara pelanggan berfokus pada aplikasinya. | Platform as a Service | [Bab 21](materi/21-cloud.md) |
| Packet capture | Rekaman paket yang terlihat pada titik pengamatan; lokasi, filter, enkripsi, dan kehilangan paket membatasi kesimpulan. | - | [Bab 14](materi/14-jaringan.md) |
| Packing | Pembungkusan kode sehingga sebagian isi baru terlihat setelah proses pembukaan. | - | [Bab 18](materi/18-malware-reverse.md) |
| Paket | Bagian data yang dikirim melalui jaringan. | - | [Bab 03](materi/03-jaringan.md) |
| Panel konsep misi | Bagian simulator yang menjelaskan istilah dan konsep sebelum atau saat latihan. | Pahami istilah dan konsep misi | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Parameter | Nama penerima masukan dalam definisi fungsi. Pada query, nilai yang diberikan terpisah dari instruksinya. | - | [Bab 06](materi/06-pemrograman.md), [Bab 13](materi/13-web-api.md) |
| Parameterisasi | Pengiriman nilai masukan terpisah dari instruksi query agar masukan diperlakukan sebagai data. | - | [Bab 13](materi/13-web-api.md) |
| Pasang program | Pilihan untuk menambahkan program, seperti memasang Python install manager pada Windows. | Install | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Pass-the-hash | Penyalahgunaan hash autentikasi untuk bertindak sebagai akun tanpa mengetahui password aslinya. | - | [Bab 20](materi/20-enterprise.md) |
| Passkey | Cara masuk memakai pasangan kunci yang terikat pada situs yang sesuai; pemulihan akun tetap perlu dirancang. | - | [Bab 09](materi/09-identitas.md) |
| Password spraying | Pola mencoba sedikit tebakan password pada banyak akun; log kegagalan saja belum membuktikan teknik tersebut. | - | [Bab 15](materi/15-deteksi.md), [Bab 20](materi/20-enterprise.md) |
| Patch | Perubahan perangkat lunak untuk memperbaiki bug atau masalah keamanan. | - | [Bab 10](materi/10-hardening.md) |
| Patching | Proses memperbaiki kelemahan atau bug melalui pembaruan, disertai pemeriksaan fungsi dan jalan pemulihan. | - | [Bab 10](materi/10-hardening.md) |
| Path | Lokasi file atau jalur tujuan permintaan; perhatikan konteks komputer dan URL yang sedang dibahas. | - | [Bab 01](materi/01-lab.md), [Bab 07](materi/07-web.md) |
| Path absolut | Lokasi lengkap dari akar sistem file, seperti C:\lab\nota.txt atau /home/pelajar/lab/nota.txt. | - | [Bab 02](materi/02-komputer.md) |
| Path relatif | Lokasi yang dihitung dari direktori kerja, seperti catatan.txt atau ../catatan.txt. | - | [Bab 01](materi/01-lab.md), [Bab 02](materi/02-komputer.md) |
| Path traversal | Masukan nama file mengarah keluar direktori yang diizinkan sehingga dapat membuka file di luar hak pengguna. | - | [Bab 13](materi/13-web-api.md) |
| Payload | Masukan uji yang dirancang untuk memicu perilaku tertentu pada konteks pengujian. | - | [Bab 13](materi/13-web-api.md) |
| Pemeriksaan setelah menjalankan | Percobaan lanjutan untuk menguji jalur penolakan dan pengaruh perubahan pada program contoh. | Sesudah menjalankan | [Bab 18](materi/18-malware-reverse.md) |
| Pencabutan sesi | Pembatalan keadaan login oleh aplikasi agar pengenal sesi lama tidak lagi memberikan akses. | - | [Bab 07](materi/07-web.md), [Bab 09](materi/09-identitas.md) |
| Pencuri informasi | Malware yang mencari dan mengambil data rahasia, seperti password. | - | [Bab 18](materi/18-malware-reverse.md) |
| Penetration testing | Pengujian terencana untuk membuktikan dampak kelemahan dalam ruang lingkup yang disepakati. | - | [Bab 12](materi/12-pentest.md) |
| Pengamatan saat berjalan | Perbandingan hasil aktual dengan prediksi serta pembacaan jalur instruksi selama program diuji. | Saat menjalankan | [Bab 18](materi/18-malware-reverse.md) |
| Pengelola file | Aplikasi penampil file dan folder, seperti File Explorer atau Finder. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Penggunaan | Dalam peta izin perusahaan, hubungan akun layanan yang menjalankan aplikasi dengan akses tertentu. | - | [Bab 20](materi/20-enterprise.md) |
| Pengujian konkurensi | Pengujian perilaku ketika beberapa pekerjaan berlangsung bersamaan. | - | [Bab 13](materi/13-web-api.md) |
| Pentester | Penguji kelemahan dalam target dan tindakan yang sudah disepakati pemilik. | - | [Bab 00](materi/00-orientasi.md) |
| Penyalahgunaan tiket | Pemakaian tiket autentikasi di luar hak atau tujuan yang sah. | - | [Bab 20](materi/20-enterprise.md) |
| Penyedia cloud | Perusahaan pengelola layanan dan infrastruktur komputasi cloud. | - | [Bab 21](materi/21-cloud.md) |
| Perintah interaktif | Perintah yang kamu ketik langsung di terminal, satu demi satu. | - | [Bab 05](materi/05-windows.md) |
| Permission | Hak melakukan tindakan tertentu pada objek, seperti membaca file. | Hak akses; Hak akses file | [Bab 04](materi/04-linux.md), [Bab 05](materi/05-windows.md) |
| Phishing | Tipuan agar orang menyerahkan bukti login atau menjalankan tindakan berbahaya melalui pesan yang menyesatkan. | - | [Bab 09](materi/09-identitas.md) |
| PID | Nomor identitas proses yang dapat berbeda ketika program dijalankan ulang. | - | [Bab 02](materi/02-komputer.md) |
| Pilihan VM | Bagian persiapan dengan sistem resmi, pengaturan berbagi, snapshot, dan rancangan jaringan untuk lingkungan VM. | Jika memilih VM | [Bab 01](materi/01-lab.md) |
| Pindah | Mengubah lokasi file, seperti memindahkan nota ke folder lain. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Pipe | Penyaluran hasil perintah ke perintah berikutnya melalui tanda pipa. | Pipeline | [Bab 02](materi/02-komputer.md), [Bab 05](materi/05-windows.md) |
| Pipeline build | Alur pengujian dan pembangunan paket kode; isolasi serta asal hasilnya perlu dirancang. | - | [Bab 22](materi/22-secure-sdlc.md) |
| PKI | Sistem pengelolaan kepercayaan, sertifikat, serta kunci publik untuk memeriksa identitas dan komunikasi. | Public key infrastructure | [Bab 08](materi/08-kriptografi.md) |
| Placeholder | Penanda tempat nilai parameter dipakai, seperti tanda tanya pada query lab SQL. | - | [Bab 13](materi/13-web-api.md), [Panduan lab](labs/README.md) |
| PoC | Demonstrasi terbatas untuk membuktikan klaim, dengan reproduksi dan data minimum sesuai izin. | Proof of concept | [Bab 23](materi/23-intelijen.md), [Bab 25](materi/25-spesialisasi.md) |
| Pod | Unit aplikasi Kubernetes yang menjadi sasaran pengaturan keamanan dan jaringan. | - | [Bab 21](materi/21-cloud.md) |
| Pod Security Standards | Aturan keamanan untuk unit aplikasi Kubernetes yang disebut Pod. | - | [Bab 21](materi/21-cloud.md) |
| Pohon domain | Susunan domain yang berbagi struktur penamaan DNS yang sama di dalam forest. | - | [Bab 20](materi/20-enterprise.md) |
| Pointer | Nilai yang menyimpan alamat memori, seperti catatan lokasi penyimpanan data program. | - | [Bab 19](materi/19-memory-safety.md) |
| Port | Nomor titik komunikasi TCP atau UDP tempat layanan bertukar data; nomor saja tidak memastikan jenis layanan. | - | [Bab 03](materi/03-jaringan.md) |
| PowerShell | Shell yang mengolah perintah dan objek bernama; label Windows PowerShell menunjuk jalur Windows dalam buku. | Windows PowerShell | [Bab 01](materi/01-lab.md), [Bab 05](materi/05-windows.md) |
| Pra-bab | Bagian persiapan untuk mengenali file, tempat mengetik, dan percobaan pertama sebelum Bab 00. | Belum paham IT sama sekali? Mulai dari pra-bab: mulai dari nol | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Precision | Bagian peringatan yang benar: TP dibagi (TP+FP). Hasil berlaku pada data pengujian yang digunakan. | - | [Bab 15](materi/15-deteksi.md) |
| Prediksi | Perkiraan hasil dan operasi yang ditulis sebelum percobaan untuk dibandingkan dengan pengamatan. | Sebelum menjalankan | [Bab 18](materi/18-malware-reverse.md) |
| Prefix | Bagian jaringan pada alamat; panjangnya ditulis melalui angka CIDR seperti /24. | - | [Bab 03](materi/03-jaringan.md) |
| Preparation | Persiapan orang, alat, dan prosedur sebelum kejadian keamanan. | - | [Bab 16](materi/16-respons-insiden.md) |
| Prinsipal | Pengguna, akun, atau layanan yang meminta izin melakukan tindakan. | - | [Bab 21](materi/21-cloud.md) |
| Prompt | Penanda bahwa shell siap menerima perintah; sering menunjukkan lokasi kerja dan tidak perlu diketik ulang. | Jangan ketik ulang prompt | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Properti | Bagian bernama pada objek, seperti nama proses atau ID. | - | [Bab 05](materi/05-windows.md) |
| Proses | Program yang sedang berjalan, dengan identitas, hak akses, serta sumber dayanya. | - | [Bab 02](materi/02-komputer.md) |
| Protokol | Aturan pertukaran data antarprogram atau perangkat. | - | [Bab 03](materi/03-jaringan.md) |
| Provenance | Catatan sumber dan proses pembangunan asal suatu berkas hasil, untuk membantu penelusuran. | - | [Bab 22](materi/22-secure-sdlc.md) |
| Proxy | Perantara permintaan yang dapat membantu memeriksa komunikasi browser dalam lab yang diizinkan. | - | [Bab 13](materi/13-web-api.md) |
| Purple teaming | Kerja sama penguji dan pelindung untuk membandingkan tindakan pengujian dengan bukti deteksi, lalu memperbaiki kekurangan. | - | [Bab 26](materi/26-capstone.md) |
| Python install manager | Program pemasang dan pengelola Python pada Windows yang dapat mengambil program penjalannya saat pertama digunakan. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Query | Permintaan kepada basis data, seperti pencarian status nota. | - | [Bab 07](materi/07-web.md), [Bab 13](materi/13-web-api.md) |
| QUIC | Protokol komunikasi di atas UDP yang dipakai HTTP/3. | - | [Bab 03](materi/03-jaringan.md) |
| Race condition | Keadaan ketika hasil bergantung pada urutan pelaksanaan operasi yang waktunya berdekatan. | - | [Bab 13](materi/13-web-api.md) |
| RAM | Memori sementara untuk keadaan kerja program; kapasitas penyimpanan besar tidak menggantikan RAM yang kurang. | - | [Bab 02](materi/02-komputer.md) |
| Rancangan aman | Keputusan awal pembuatan program yang membatasi hak akses dan menyediakan cara memeriksa perlindungannya. | - | [Bab 22](materi/22-secure-sdlc.md) |
| Ransomware | Malware yang mengunci atau mengenkripsi data untuk memeras tebusan. | - | [Bab 18](materi/18-malware-reverse.md) |
| RBAC | Pemberian hak akses berdasarkan peran, seperti kasir, manajer, atau akun layanan. | - | [Bab 09](materi/09-identitas.md), [Bab 21](materi/21-cloud.md) |
| RDP | Protokol akses desktop jarak jauh; lazim memakai TCP atau UDP pada port 3389. | - | [Bab 03](materi/03-jaringan.md) |
| Recall | Bagian kejadian berbahaya yang tertangkap: TP dibagi (TP+FN). Hasil berlaku pada data pengujian yang digunakan. | - | [Bab 15](materi/15-deteksi.md) |
| Reconnaissance | Pengenalan target dan konteks; kegiatan pasif membaca informasi tersedia, sedangkan kegiatan aktif mengirim permintaan. | - | [Bab 12](materi/12-pentest.md) |
| Recovery | Pemulihan layanan dengan pemeriksaan keamanan dan fungsi sebelum kegiatan dibuka kembali. | - | [Bab 16](materi/16-respons-insiden.md) |
| Red team | Tim yang menguji pencapaian suatu tujuan dalam cakupan yang disetujui. | - | [Bab 26](materi/26-capstone.md) |
| Registry | Penyimpan banyak konfigurasi Windows dan aplikasi. | - | [Bab 05](materi/05-windows.md) |
| Registry key | Penampung nilai konfigurasi di Registry Windows. | - | [Bab 05](materi/05-windows.md) |
| Regression test | Pengujian agar perubahan tidak mengembalikan bug atau merusak perilaku lain. | Kasus regresi; Uji regresi | [Bab 13](materi/13-web-api.md), [Bab 22](materi/22-secure-sdlc.md) |
| Replikasi direktori | Penyelarasan data akun di antara server pengendali domain. | - | [Bab 20](materi/20-enterprise.md) |
| Repository | Folder kerja beserta riwayat Git yang mencatat perubahan file. | Repositori | [Bab 06](materi/06-pemrograman.md) |
| Request | Pesan permintaan kepada layanan, misalnya permintaan membaca nota. | Permintaan | [Bab 03](materi/03-jaringan.md), [Bab 07](materi/07-web.md) |
| Residual risk | Risiko yang masih tersisa setelah kontrol diterapkan. | Risiko tersisa | [Bab 24](materi/24-grc.md) |
| Resolver DNS | Layanan yang menerima pertanyaan nama dari komputer dan membantu mencari jawabannya. | - | [Bab 03](materi/03-jaringan.md) |
| Response | Pesan jawaban server terhadap suatu permintaan. | Respons; Jawaban | [Bab 07](materi/07-web.md) |
| Response body | Isi utama jawaban server, seperti teks nota yang diminta. | - | [Bab 07](materi/07-web.md) |
| Response header | Keterangan pada jawaban server, seperti jenis dan ukuran data. | - | [Bab 07](materi/07-web.md) |
| Restore | Pemulihan data dari cadangan dengan pemeriksaan isi dan waktu yang dibutuhkan. | Pemulihan data | [Bab 10](materi/10-hardening.md) |
| Retest | Pengujian ulang temuan setelah perbaikan untuk melihat apakah masalah masih ada. | Uji ulang | [Bab 12](materi/12-pentest.md) |
| Reverse engineering | Penyimpulan cara kerja program dari bentuk atau artefak yang tersedia, termasuk saat sumber aslinya tidak ada. | - | [Bab 18](materi/18-malware-reverse.md) |
| Review sejawat | Pemeriksaan hasil oleh rekan yang dapat menilai dan mencoba ulang pekerjaanmu. | - | [Bab 25](materi/25-spesialisasi.md) |
| Risiko | Kemungkinan dan dampak skenario merugikan dalam konteks aset serta kegiatan yang sedang diperiksa. | - | [Bab 00](materi/00-orientasi.md), [Bab 11](materi/11-threat-modeling.md) |
| Risk management | Pengelolaan ketidakpastian yang dapat merugikan tujuan organisasi. | Pengelolaan risiko | [Bab 24](materi/24-grc.md) |
| Risk owner | Orang yang berwenang menentukan respons terhadap risiko; analis menyediakan bukti dan pilihan. | Pemilik risiko | [Bab 24](materi/24-grc.md) |
| Risk register | Daftar risiko beserta bukti, pemilik, tindakan, dan ukuran penyelesaiannya. | Register risiko | [Bab 24](materi/24-grc.md) |
| Root | Akun Linux dengan kewenangan luas; beberapa pembatas sistem tetap dapat berlaku. | - | [Bab 04](materi/04-linux.md) |
| Root directory | Direktori pangkal sistem file Linux, yaitu /. | - | [Bab 04](materi/04-linux.md) |
| Root-cause analysis | Penjelasan penyebab dasar hasil yang diamati, bukan hanya gejala yang terlihat. | - | [Bab 25](materi/25-spesialisasi.md) |
| Router | Perangkat yang meneruskan paket antarjaringan. | - | [Bab 03](materi/03-jaringan.md) |
| Row | Satu rekaman pada tabel data, seperti satu pesanan pelanggan. | Baris data | [Bab 07](materi/07-web.md) |
| RPO | Target batas kehilangan data berdasarkan rentang waktu, seperti paling banyak satu jam transaksi. | Recovery point objective | [Bab 10](materi/10-hardening.md), [Bab 24](materi/24-grc.md) |
| RTO | Target waktu pemulihan agar layanan kembali beroperasi. | Recovery time objective | [Bab 10](materi/10-hardening.md), [Bab 24](materi/24-grc.md) |
| Rules of engagement | Kesepakatan pelaksanaan pengujian: pemberi izin, target, teknik, waktu, batas laju, kontak darurat, penanganan data, dan kondisi berhenti. | RoE | [Bab 12](materi/12-pentest.md) |
| Runbook | Panduan petugas yang memuat pemicu, prasyarat, keputusan, tindakan, bukti, dan eskalasi. | - | [Bab 16](materi/16-respons-insiden.md) |
| SaaS | Model cloud berupa aplikasi siap pakai; pengguna tetap mengatur akses dan data sesuai tanggung jawabnya. | Software as a Service | [Bab 21](materi/21-cloud.md) |
| Salin | Membuat salinan file sambil mempertahankan sumbernya. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Salinan bukti | Salinan yang dijaga sebagai acuan, dengan asal, waktu, alat, dan cara pengambilan yang dicatat. | - | [Bab 17](materi/17-forensik.md) |
| Salinan kerja | Salinan untuk analisis agar sumber dan salinan bukti tetap terjaga. | - | [Bab 17](materi/17-forensik.md) |
| Salt | Nilai unik untuk setiap penyimpanan password, disimpan bersama hasil hash. Nilai ini bukan rahasia. | - | [Bab 08](materi/08-kriptografi.md) |
| Sanitizer | Pemeriksaan tambahan saat program dibangun untuk membantu menemukan kesalahan, misalnya akses di luar batas memori. | - | [Bab 19](materi/19-memory-safety.md) |
| SAST | Pemeriksaan pola risiko keamanan pada kode atau hasil program tanpa menjalankan aplikasi sasaran. | Static Application Security Testing | [Bab 22](materi/22-secure-sdlc.md) |
| SBOM | Daftar komponen perangkat lunak untuk membantu inventaris dan penelusuran; kelengkapannya bergantung pada proses penyusunan. | Software Bill of Materials | [Bab 22](materi/22-secure-sdlc.md) |
| SCA | Pemeriksaan komponen pihak ketiga dan kerentanan yang diketahui pada komponen tersebut. | Software Composition Analysis | [Bab 22](materi/22-secure-sdlc.md) |
| Scheduled task | Tugas Windows yang berjalan berdasarkan jadwal atau pemicu tertentu. | - | [Bab 05](materi/05-windows.md) |
| Scope | Batas target, teknik, waktu, dan data yang diizinkan dalam pengujian. | Ruang lingkup | [Bab 00](materi/00-orientasi.md), [Bab 12](materi/12-pentest.md) |
| SDLC | Pekerjaan sejak kebutuhan perangkat lunak hingga pemeliharaan, termasuk desain, implementasi, pengujian, rilis, dan penanganan temuan. | Software Development Life Cycle | [Bab 22](materi/22-secure-sdlc.md) |
| Security | Nama log Windows untuk kejadian audit keamanan, seperti login pengguna. | - | [Bab 05](materi/05-windows.md) |
| Security engineering dan arsitektur | Jalur perancangan perlindungan sistem yang menghubungkan ancaman, operasi, risiko, dan bukti pengurangan risiko. | - | [Bab 25](materi/25-spesialisasi.md) |
| Security requirement | Syarat keamanan fitur yang mempunyai cara pemeriksaan jelas, seperti pembatasan ekspor berdasarkan cabang. | - | [Bab 22](materi/22-secure-sdlc.md) |
| Security researcher | Peneliti yang menyelidiki akar masalah keamanan yang belum dipahami dan menghasilkan bukti yang dapat diperiksa. | - | [Bab 00](materi/00-orientasi.md), [Bab 25](materi/25-spesialisasi.md) |
| Seed | Nilai awal pembangkit acak yang membantu mengulang urutan percobaan; catat juga versi alat dan lingkungannya. | - | [Bab 19](materi/19-memory-safety.md) |
| Segmentasi | Pemisahan kelompok perangkat beserta pengaturan komunikasi antarkelompok, seperti jaringan tamu dan kasir. | - | [Bab 14](materi/14-jaringan.md) |
| Sertifikat digital | Catatan bertanda tangan yang mengikat identitas, seperti nama domain, dengan kunci publik. | Certificate | [Bab 08](materi/08-kriptografi.md) |
| Sertifikat intersepsi | Sertifikat yang memungkinkan alat memeriksa isi HTTPS ketika browser mempercayainya; gunakan hanya dengan pemahaman dampaknya. | - | [Bab 13](materi/13-web-api.md) |
| Server | Program atau perangkat yang melayani permintaan dan mengirim jawaban. | - | [Bab 03](materi/03-jaringan.md), [Bab 07](materi/07-web.md) |
| Server web | Layanan penerima permintaan halaman atau file melalui HTTP. | - | [Bab 02](materi/02-komputer.md), [Bab 07](materi/07-web.md) |
| Serverless | Model yang mengurangi pengelolaan server langsung; fungsi tetap mempunyai identitas, masukan, komponen tambahan, dan akses jaringan. | - | [Bab 21](materi/21-cloud.md) |
| Service | Program yang melayani fungsi tertentu, sering di latar belakang, seperti pencetakan atau server web. | Layanan | [Bab 02](materi/02-komputer.md), [Bab 05](materi/05-windows.md) |
| Service account | Identitas untuk pekerjaan aplikasi atau layanan; haknya tetap perlu dibatasi sesuai tugas. | - | [Bab 20](materi/20-enterprise.md), [Bab 21](materi/21-cloud.md) |
| Service status | Keadaan layanan Windows, seperti sedang berjalan atau berhenti. | - | [Bab 05](materi/05-windows.md) |
| Sesi kedua, membuat eksperimen | Tahap riset untuk menyiapkan masukan normal dan batas, mencatat lingkungan, serta menyimpan bahan pengulangan. | - | [Bab 25](materi/25-spesialisasi.md) |
| Sesi keempat, memperbaiki dan meninjau | Tahap riset untuk memperbaiki penyebab, mengulang pengujian, dan meminta rekan memeriksa hasil. | - | [Bab 25](materi/25-spesialisasi.md) |
| Sesi ketiga, menjelaskan | Tahap riset untuk memperkecil contoh pemicu dan menghubungkan hasil dengan cabang kode atau asumsi. | - | [Bab 25](materi/25-spesialisasi.md) |
| Sesi pertama, memahami | Tahap riset untuk membaca sumber, menggambar aliran, dan menulis asumsi yang perlu diuji. | - | [Bab 25](materi/25-spesialisasi.md) |
| Session | Hubungan login yang berlanjut setelah pemeriksaan identitas, biasanya melalui pengenal yang browser kirim kembali. | Sesi | [Bab 07](materi/07-web.md), [Bab 09](materi/09-identitas.md) |
| Shared clipboard | Fasilitas salin-tempel antara host dan guest; matikan saat eksperimen sesuai petunjuk lab. | - | [Bab 01](materi/01-lab.md) |
| Shared folder | Folder yang dibagikan antara host dan guest; matikan pembagian saat eksperimen sesuai petunjuk lab. | - | [Bab 01](materi/01-lab.md) |
| Shared responsibility | Pembagian tanggung jawab penyedia dan pelanggan yang berbeda menurut layanan cloud yang dipilih. | - | [Bab 21](materi/21-cloud.md) |
| Shell | Program penafsir perintah, seperti PowerShell atau Bash. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md), [Bab 01](materi/01-lab.md) |
| SID | Pengenal internal untuk akun atau grup pada Windows. | Security identifier | [Bab 05](materi/05-windows.md) |
| SIEM | Sistem pengumpulan log serta dukungan pencarian dan penghubungan kejadian dari beberapa sumber. | - | [Bab 15](materi/15-deteksi.md) |
| Simpan | Menulis pekerjaan ke file agar dapat dibuka kembali. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Simpan sebagai | Menu untuk memilih nama, lokasi, dan jenis file ketika menyimpan pekerjaan. | File → Save As; Simpan Sebagai | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Simulator | Model latihan di halaman yang menjalankan perintah virtual pada data buatan. | Mainkan simulasi Laundry Aman di HP atau komputer | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Sintaks | Aturan penulisan kode dalam suatu bahasa pemrograman. | - | [Bab 06](materi/06-pemrograman.md) |
| Sistem operasi | Pengelola sumber daya komputer dan akses perangkat, seperti Windows atau Linux. | - | [Bab 02](materi/02-komputer.md) |
| Skala ordinal | Angka penanda urutan tingkat; perkalian skala latihan belum menghitung kerugian secara presisi. | - | [Bab 24](materi/24-grc.md) |
| Skema | Bagian URL yang menyebut aturan komunikasi, seperti HTTP atau HTTPS. | - | [Bab 07](materi/07-web.md) |
| Snapshot | Rekaman keadaan VM untuk kembali ke kondisi sebelumnya; bukan pengganti cadangan terpisah. | - | [Bab 01](materi/01-lab.md) |
| SOAR | Dukungan pengaturan alur dan tindakan respons otomatis, dengan batas serta persetujuan yang sesuai. | - | [Bab 15](materi/15-deteksi.md) |
| SOC | Tim atau fungsi yang memantau, menilai, dan merespons aktivitas keamanan. | Security operations center | [Bab 15](materi/15-deteksi.md) |
| Spesialisasi | Pendalaman satu bidang sambil mempertahankan bekal bidang lain yang dibutuhkan. | - | [Bab 25](materi/25-spesialisasi.md) |
| SPN | Pengenal unik suatu layanan jaringan dalam penggunaan Kerberos. | Service Principal Name | [Bab 20](materi/20-enterprise.md) |
| SQL | Bahasa untuk meminta atau mengubah data dalam basis data. | - | [Bab 01](materi/01-lab.md), [Bab 07](materi/07-web.md) |
| SQL injection | Masukan mengubah struktur instruksi SQL karena aplikasi menyusun query secara tidak aman. | - | [Bab 13](materi/13-web-api.md) |
| SSD | Salah satu jenis perangkat penyimpanan data. | - | [Bab 02](materi/02-komputer.md) |
| SSH | Protokol akses shell terenkripsi, lazim memakai TCP pada port 22. | - | [Bab 03](materi/03-jaringan.md), [Bab 04](materi/04-linux.md) |
| SSO | Cara masuk ke beberapa aplikasi melalui penyedia identitas bersama. | Single sign-on | [Bab 09](materi/09-identitas.md) |
| SSRF | Server mengirim permintaan ke tujuan yang dipengaruhi masukan pengguna tanpa pembatasan yang sesuai. | - | [Bab 13](materi/13-web-api.md) |
| Standard library | Modul bawaan Python yang dapat dipakai tanpa memasang paket tambahan untuk lab inti. | - | [Panduan lab](labs/README.md) |
| Stateless | Sifat protokol yang memperlakukan tiap permintaan secara terpisah tanpa ingatan bawaan tentang login. | - | [Bab 07](materi/07-web.md) |
| Status code | Kode angka tiga digit pada jawaban HTTP yang menyatakan hasil pemrosesan permintaan. | - | [Bab 07](materi/07-web.md) |
| Storage | Penyimpanan data yang perlu bertahan setelah komputer mati, seperti SSD. | - | [Bab 02](materi/02-komputer.md) |
| STRIDE | Pengingat enam jenis ancaman untuk memeriksa komponen dan aliran data. Meliputi pemalsuan identitas, perubahan, penyangkalan tindakan, kebocoran, gangguan layanan, dan kenaikan hak. | - | [Bab 11](materi/11-threat-modeling.md) |
| String | Nilai teks dalam program, seperti nama pelanggan. | - | [Bab 06](materi/06-pemrograman.md) |
| Subnet | Pembagian ruang alamat jaringan menjadi bagian lebih kecil. | - | [Bab 03](materi/03-jaringan.md) |
| Sumber asli | Data tempat bukti diambil; asal dan cara memperolehnya perlu dicatat. | - | [Bab 17](materi/17-forensik.md) |
| Sumber primer | Informasi dari pihak yang mengamati atau memelihara objek terkait, seperti advisori vendor yang memelihara produk. | - | [Bab 23](materi/23-intelijen.md) |
| Supply chain | Rangkaian kode, komponen tambahan, pembuat paket, proses pembangunan, dan distribusi perangkat lunak. | Supply chain perangkat lunak | [Bab 22](materi/22-secure-sdlc.md) |
| Switch | Perangkat penghubung dalam jaringan lokal, seperti penghubung laptop dan printer. | - | [Bab 03](materi/03-jaringan.md) |
| System | Nama log Windows untuk kejadian sistem operasi dan perangkat keras. | - | [Bab 05](materi/05-windows.md) |
| Table | Tabel penyimpanan data dengan baris dan kolom, seperti lembar daftar pesanan. | Tabel data | [Bab 07](materi/07-web.md) |
| Tabletop | Simulasi meja dengan membaca kejadian dan mencatat keputusan tanpa menyerang atau mematikan sistem. | - | [Bab 16](materi/16-respons-insiden.md) |
| Tampilkan ekstensi | Pilihan pengelola file untuk memperlihatkan bagian akhir nama, agar perbedaan halo.py dan halo.py.txt terlihat. | File name extensions; View → Show → File name extensions | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Tanda tangan digital | Mekanisme pasangan kunci untuk memeriksa asal pesan serta perubahan isinya. | - | [Bab 08](materi/08-kriptografi.md) |
| TCP | Pengiriman aliran byte yang berurutan dengan pengiriman ulang saat diperlukan. | - | [Bab 03](materi/03-jaringan.md) |
| Teks biasa | Format teks tanpa hiasan dokumen untuk contoh kode, seperti pilihan Plain Text pada TextEdit. | Format → Make Plain Text | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Telemetri | Data pengamatan sistem yang membantu memeriksa perilaku dan menilai deteksi. | - | [Bab 25](materi/25-spesialisasi.md) |
| Tenant | Batas organisasi atau kelompok pengguna dalam suatu layanan bersama. | - | [Bab 25](materi/25-spesialisasi.md) |
| Terminal | Jendela untuk memberi perintah teks dan membaca hasilnya. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| Terminal server | Jendela terminal yang menjalankan layanan; biarkan aktif selama browser masih memakai server latihan. | - | [Bab 07](materi/07-web.md) |
| TGT | Tiket untuk meminta tiket layanan pada Kerberos setelah pembuktian identitas, tanpa menyerahkan ulang password ke setiap layanan. | Ticket Granting Ticket | [Bab 20](materi/20-enterprise.md) |
| Threat hunting | Pencarian terarah berdasarkan dugaan yang dapat diuji, termasuk ketika belum ada peringatan. | - | [Bab 16](materi/16-respons-insiden.md) |
| Threat intelligence | Penghubungan informasi ancaman dengan aset serta keputusan yang perlu diambil. | - | [Bab 23](materi/23-intelijen.md) |
| Threat model | Gambaran aset, aliran data, batas kepercayaan, skenario ancaman, dan kontrol yang direncanakan. | - | [Bab 11](materi/11-threat-modeling.md) |
| Threat modeling | Pemeriksaan rancangan untuk menemukan cara sistem dapat disalahgunakan dan menentukan perlindungan yang dibutuhkan. | - | [Bab 11](materi/11-threat-modeling.md) |
| Tiket perbaikan | Catatan perubahan yang diminta, penanggung jawab, tenggat, cara pengujian, dan risiko yang masih tersisa. | - | [Bab 11](materi/11-threat-modeling.md) |
| Timeline | Urutan kejadian menurut waktu dengan rujukan sumber, agar hubungan bukti dapat diperiksa. | Kronologi | [Bab 16](materi/16-respons-insiden.md), [Bab 17](materi/17-forensik.md) |
| Timestamp | Penanda waktu pada data; periksa jenis waktunya, zona waktu, ketepatan jam, dan kemungkinan keterlambatan catatan. | - | [Bab 17](materi/17-forensik.md) |
| Tingkat keyakinan | Penilaian seberapa kuat bukti mendukung suatu klaim, dengan alasan yang bisa diperiksa. | - | [Bab 23](materi/23-intelijen.md) |
| Tipe data | Kategori nilai dalam program, seperti teks, bilangan bulat, atau daftar. | - | [Bab 06](materi/06-pemrograman.md) |
| TLS | Protokol pelindung komunikasi antara dua ujung yang terhubung, dipakai oleh HTTPS. | - | [Bab 03](materi/03-jaringan.md), [Bab 08](materi/08-kriptografi.md) |
| Token anti-CSRF | Nilai pemeriksaan pada aplikasi untuk membantu melindungi permintaan dari pemicu lintas situs. | - | [Bab 13](materi/13-web-api.md) |
| Token sesi | Pengenal keadaan login yang perlu dijaga rahasianya karena dapat memberikan akses kepada pemegangnya. | - | [Bab 00](materi/00-orientasi.md), [Bab 09](materi/09-identitas.md) |
| Traceback | Laporan baris kesalahan ketika program Python berhenti karena kesalahan. | - | [Bab 06](materi/06-pemrograman.md) |
| Traffic Light Protocol | Aturan penandaan batas berbagi informasi dan penerima yang sesuai. | TLP | [Bab 23](materi/23-intelijen.md) |
| Transaksi basis data | Pengelompokan operasi data menjadi satu kesatuan kerja. | - | [Bab 13](materi/13-web-api.md) |
| Triage | Pemeriksaan awal untuk menentukan prioritas dan langkah berikutnya. | Triase | [Bab 15](materi/15-deteksi.md) |
| Trigger | Pemicu yang memulai tugas terjadwal, seperti waktu atau kejadian tertentu. | - | [Bab 05](materi/05-windows.md) |
| Troubleshooting | Pencarian sumber masalah secara bertahap dengan dugaan, perubahan kecil, dan pembacaan hasil. | - | [Bab 02](materi/02-komputer.md) |
| True negative | Aktivitas sah yang tidak memicu peringatan pada data pengujian. | True negative (TN); TN | [Bab 15](materi/15-deteksi.md) |
| True positive | Peringatan yang sesuai dengan kejadian berbahaya pada data pengujian. | True positive (TP); TP | [Bab 15](materi/15-deteksi.md) |
| Trust boundary | Batas antara pihak atau komponen dengan tingkat kepercayaan berbeda, seperti browser pelanggan dan server. | Batas kepercayaan | [Bab 11](materi/11-threat-modeling.md) |
| TTP | Tujuan, cara, dan rincian pola tindakan pelaku yang membantu menyusun dugaan deteksi. | Tactics, techniques, and procedures | [Bab 23](materi/23-intelijen.md) |
| Tuple | Kumpulan nilai Python; pada lab SQL, koma membentuk tuple berisi satu nilai parameter. | - | [Panduan lab](labs/README.md) |
| UAC | Pembatas aktivitas biasa dan operasi Windows yang membutuhkan hak lebih tinggi; dapat meminta konfirmasi atau identitas administrator. | User Account Control | [Bab 05](materi/05-windows.md) |
| Ubuntu | Salah satu pilihan sistem Linux untuk jalur WSL dalam buku. | - | [Bab 01](materi/01-lab.md) |
| UDP | Pengiriman pesan tanpa jaminan bawaan pengurutan dan pengiriman ulang seperti TCP; aplikasi dapat menambahkannya. | - | [Bab 03](materi/03-jaringan.md) |
| Unduh ZIP | Pilihan GitHub untuk mengambil paket berkas tutorial sebelum mengekstraknya di komputer. | Code → Download ZIP | [Halaman depan](README.md) |
| URL | Alamat lengkap penunjuk lokasi sumber daya pada web. | - | [Bab 07](materi/07-web.md) |
| Use-after-free | Pemakaian alamat memori setelah tempat penyimpanannya dilepaskan sehingga pemakaian semula tidak lagi sah. | - | [Bab 19](materi/19-memory-safety.md) |
| UUID | Pengenal 128 bit untuk membedakan objek. Jenis UUID menentukan cara pembuatannya; hak akses tetap perlu diperiksa. | Universally Unique Identifier | [Bab 09](materi/09-identitas.md) |
| Validasi domain | Pemeriksaan oleh penerbit sertifikat atas kendali pemohon terhadap nama domain. | - | [Bab 08](materi/08-kriptografi.md) |
| Variabel | Nama yang mewakili suatu nilai dalam program. | - | [Bab 06](materi/06-pemrograman.md) |
| Variabel shell | Nama untuk nilai yang dipakai dalam perintah shell; aturannya dapat berbeda antarshell. | - | [Bab 01](materi/01-lab.md) |
| Virtual | Dalam simulator, berarti berada dalam model latihan. VM tetap menjalankan operasi nyata sesuai pengaturan lingkungannya. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md), [Bab 01](materi/01-lab.md) |
| Virtual machine | Komputer buatan yang berjalan di dalam komputer fisik dan memakai sumber daya host. Untuk penjalan bytecode Python, lihat Mesin virtual Python. | VM | [Bab 01](materi/01-lab.md) |
| VLAN | Pembagian jaringan lokal secara logis pada lapisan link; pembatasan antarkelompok tetap membutuhkan aturan komunikasi. | - | [Bab 14](materi/14-jaringan.md) |
| Volatile data | Data yang mudah hilang ketika keadaan perangkat berubah, seperti memori dan koneksi aktif. | - | [Bab 17](materi/17-forensik.md) |
| VPN | Kanal komunikasi terlindungi menuju jaringan atau layanan; akses di dalamnya tetap perlu dibatasi. | - | [Bab 03](materi/03-jaringan.md), [Bab 14](materi/14-jaringan.md) |
| Vulnerability management | Pengelolaan aset dan kelemahan dari penemuan, pemeriksaan temuan, prioritas perbaikan, hingga pengujian ulang. | - | [Bab 11](materi/11-threat-modeling.md) |
| Vulnerability research | Penyelidikan kelemahan untuk menjelaskan akar masalah dan membuat reproduksi minimum yang dapat diperiksa. | - | [Bab 25](materi/25-spesialisasi.md) |
| Walkthrough | Petunjuk langkah penyelesaian latihan; tutup saat menguji kemampuan mengulang sendiri. | - | [Bab 25](materi/25-spesialisasi.md) |
| WAN | Jaringan yang menghubungkan area lebih luas daripada jaringan lokal toko. | - | [Bab 03](materi/03-jaringan.md) |
| Web/API dan application security | Jalur pendalaman keamanan aplikasi, termasuk izin objek, aturan bisnis, pengolahan masukan, serta bukti perbaikan. | - | [Bab 25](materi/25-spesialisasi.md) |
| Website | Kumpulan halaman yang dibuka melalui alamatnya. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |
| WEP | Protokol Wi-Fi lama yang sudah tidak layak untuk melindungi jaringan. | - | [Bab 14](materi/14-jaringan.md) |
| Windows | Sistem operasi komputer yang dipakai pada jalur PowerShell dalam buku. | - | [Bab 01](materi/01-lab.md) |
| Windows Subsystem for Linux | Lingkungan untuk memakai Linux pada Windows; folder Windows dapat diakses sehingga tidak cocok diasumsikan sebagai isolasi malware. | WSL; Opsi Windows: Ubuntu melalui WSL; Persiapan Linux pada Windows | [Bab 01](materi/01-lab.md) |
| Worm | Malware yang menggandakan diri dan menyebar antarkomputer melalui jaringan secara mandiri. | - | [Bab 18](materi/18-malware-reverse.md) |
| WPA3 | Protokol keamanan Wi-Fi yang lebih baru; konfigurasi dan dukungan perangkat tetap perlu diperiksa. | - | [Bab 14](materi/14-jaringan.md) |
| WPS | Jalur pengaturan cepat pada titik akses Wi-Fi; nilai kebutuhan dan nonaktifkan jika tidak diperlukan. | - | [Bab 14](materi/14-jaringan.md) |
| Write blocker | Alat untuk mencegah penulisan ke media bukti saat pengambilan data. | - | [Bab 17](materi/17-forensik.md) |
| XSS | Masukan tidak tepercaya dijalankan browser sebagai kode dalam konteks halaman yang dibuka pengguna. | - | [Bab 13](materi/13-web-api.md) |
| ZIP | Paket file yang perlu diekstrak sebelum latihan agar berkas pendukung dapat ditemukan. | - | [Pra-bab](materi/pra-00-mulai-dari-nol.md) |

---

<a id="lampiran-4"></a>

## Template bukti belajar

Salin template yang kamu butuhkan ke folder `hasil-belajar/`. Folder tersebut diabaikan Git secara default.
Pilih dan samarkan bukti sebelum memublikasikannya. Pakai data buatan Laundry Aman untuk contoh latihan.

### Catatan eksperimen

Isi satu catatan untuk satu pertanyaan. Pisahkan prediksi sebelum percobaan dari hasil yang benar-benar kamu lihat.
Misalnya, tulis pertanyaan “Apakah Bob ditolak saat membaca nota Alice?” lalu catat hasil program setelah dijalankan.

```text
Judul dan tanggal:
Pertanyaan yang ingin dijawab:
Lingkungan (OS, versi alat, data buatan):
Prasyarat:
Prediksi sebelum menjalankan:
Langkah dan perintah:
Output yang diamati:
Penjelasan hasil:
Hipotesis alternatif:
Kesalahan dan cara memperbaiki:
Langkah berikutnya:
Sumber:
Status: PASS / FAIL / NOT_RUN
```

Pakai PASS bila hasil memenuhi harapan, FAIL bila tidak sesuai, dan NOT_RUN bila belum dijalankan.
Sertakan bukti hasilnya. Untuk NOT_RUN, tulis alasan pada penjelasan hasil.

### Scope dan rules of engagement

**Scope** berarti batas pekerjaan yang diizinkan, seperti hanya menguji aplikasi lab pada laptopmu.

**Rules of engagement** berarti kesepakatan cara melakukan pengujian dalam batas tersebut.
Isi pemberi izin, target, larangan, dan kondisi berhenti sebelum mencoba perintah.

```text
Pemilik pemberi izin dan bukti izin:
Tujuan:
Target yang diizinkan (alamat, aplikasi, akun test):
Target di luar scope:
Waktu pengujian dan zona waktu:
Teknik yang diizinkan:
Batas laju dan tindakan yang dilarang:
Data dummy yang boleh dibaca/diubah:
Kondisi berhenti:
Kontak bila ada gangguan:
Penyimpanan bukti, masa retensi, dan penghapusan:
Pemulihan/cleanup:
Penyerahan laporan dan jadwal retest:
```

Contoh scope lab: hanya `127.0.0.1:8000`, file dummy di direktori lab, selama satu sesi 30 menit.
Data dummy berarti data buatan untuk latihan.
Pemilik laptop menyetujui pembacaan file buatan dan koneksi manual; pemindaian jaringan lokal tidak diizinkan.

Berhenti jika layanan lain terganggu atau muncul data pribadi.
Alamat privat kantor tidak otomatis masuk scope karena dapat dijangkau.

### Laporan temuan

Isi langkah minimum yang memungkinkan orang lain mengulang temuan. Pisahkan dampak terbukti dari dugaan yang masih memerlukan bukti.

```text
ID dan judul:
Ringkasan satu kalimat:
Target/versi dan batas scope:
Prasyarat (peran, kondisi, konfigurasi):
Langkah reproduksi minimum:
Hasil yang semestinya:
Hasil yang diamati:
Bukti tersamarkan:
Dampak yang terbukti:
Dampak yang masih hipotesis:
Prioritas dan alasan bisnis:
Akar masalah:
Rekomendasi:
Pemilik perbaikan dan target tanggal:
Hasil retest, tanggal, dan regresi:
Keterbatasan pengujian:
```

Contoh: **LA-001: Bob bisa membaca nota Alice.** Pada fungsi lab tanpa pemeriksaan pemilik, Bob meminta nota 101 dan menerima status milik Alice.
Dampak terbukti adalah kebocoran satu nota buatan.

Perbaikan: verifikasi identitas dari sesi server, lalu periksa kepemilikan objek.
Uji ulang harus menunjukkan Bob ditolak dan Alice tetap berhasil.
Jangan menulis “seluruh database bocor” jika bukti hanya menunjukkan satu objek.

### Timeline insiden

**Timeline** berarti urutan kejadian menurut waktu, seperti menyusun kembali aktivitas Laundry Aman dari log.
Isi fakta sesuai sumber, lalu tempatkan dugaan pada kolom Hipotesis. Keyakinan menyatakan seberapa kuat dukungan buktinya.

Contoh berikut mempertahankan dua kejadian login. Keterangan perangkat pada kolom bukti tambahan belum tersedia; tulis kebutuhan itu sebagai pertanyaan lanjutan.

| Waktu UTC | Sumber | Fakta yang diamati | Hipotesis | Bukti tambahan | Keyakinan |
|---|---|---|---|---|---|
| 08:02:00 | Log login sintetis | Login Alice gagal dari 198.51.100.8 | Aktivitas otomatis atau pengguna sah | Device, MFA, konteks user | Rendah |
| 08:02:30 | Log yang sama | Operator berhasil dari alamat tersebut | Akun mungkin perlu diperiksa | Tindakan setelah login | Rendah |

Gunakan [Bab 15](materi/15-deteksi.md) untuk membaca log dan [Bab 16](materi/16-respons-insiden.md) untuk membedakan fakta dari dugaan.

### Serah terima bukti

Isi sumber dan setiap perpindahan bukti agar penerima dapat mengikuti asalnya.
Misalnya, catat penyalinan log buatan menjadi salinan kerja, waktu penyalinan, petugas, lokasi, serta hash yang dibandingkan.
[Bab 17](materi/17-forensik.md) menjelaskan cara menjaga salinan tersebut.

```text
ID barang/file:
Deskripsi dan sumber:
Petugas dan waktu UTC:
Metode akuisisi dan batasnya:
Hash SHA-256 sebelum/sesudah penyalinan:
Lokasi asli (akses terbatas):
Lokasi salinan kerja:
Riwayat penyerahan (dari, kepada, waktu, tujuan):
Perubahan yang dilakukan pada salinan kerja:
```

### Register risiko

**Register risiko** adalah daftar risiko beserta penanganannya, seperti daftar kemungkinan kebocoran nota dan orang yang memperbaikinya.
Isi alasan penilaian serta tindakan berikutnya. Gunakan contoh R-01 sebagai pola, lalu ganti dengan kasus latihanmu.

| Risiko | Aset | Skenario | Kontrol saat ini | Dampak | Kemungkinan dan alasan | Tindakan | Pemilik | Tenggat | Risiko tersisa |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Nota pelanggan | Kasir membaca nota lintas cabang | Login tanpa pembatasan cabang | Privasi dan komplain | Sedang; akses objek belum diuji | Tambah cek cabang dan test negatif | Tim aplikasi | Tanggal rencana | Evaluasi setelah retest |

Gunakan tanggal nyata saat mengerjakan. Nilai risiko di template adalah contoh pendidikan, bukan penilaian untuk perusahaan tertentu.
[Bab 24](materi/24-grc.md) menjelaskan penilaian risiko dan bukti pendukungnya.

---

<a id="lampiran-5"></a>

## Referensi dan latihan lanjutan

Peta pembelajaran mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security)
dan [direktori konten upstream](https://github.com/nilbuild/developer-roadmap/tree/d922417cd1ef690e66c008a3c3612f683e8e433a/roadmaps/cyber-security/content).
Gaya penyajian mengikuti [tutorial AI Engineer pengguna](https://github.com/kvnlhm/tutorial-ai-engineer).

Penulis menyusun penjelasan, data, latihan, dan kode untuk kasus Laundry Aman.
Proyek ini tidak berafiliasi dengan pengelola sumber tersebut dan tidak memberikan sertifikasi dari mereka.

### Pilih sumber menurut tahap

Gunakan nomor tahap pada tabel sumber untuk menemukan bacaan yang sesuai bekalmu.
Untuk tahap 1, mulai dari [pra-bab](materi/pra-00-mulai-dari-nol.md) dan persiapan alat pada Bab 00–02.
Kamu belum memerlukan platform latihan tambahan untuk membuka file dan menyiapkan folder.

| Tahap | Nama tahap | Bab |
|---|---|---|
| 1 | Mulai memakai alat | Pra-bab, 00–02 |
| 2 | Memahami cara sistem bekerja | 03–08 |
| 3 | Menjaga dan menguji akses | 09–14 |
| 4 | Membaca bukti dan menangani kejadian | 15–17 |
| 5 | Memeriksa program dan lingkungan | 18–22 |
| 6 | Mengambil keputusan dan membuktikan kemampuan | 23–26 |

### Pilihan latihan tanpa biaya layanan

Rekomendasi awal setelah Bab 04 adalah Bandit untuk mengulang terminal dan file.
Mulai dengan satu sumber sesuai tahap. Selesaikan beberapa latihan dan jelaskan hasilnya sebelum pindah topik.

| Tahap | Sumber | Gunakan untuk | Prasyarat dan batas |
|---|---|---|---|
| 2 | **Rekomendasi awal: [OverTheWire Bandit](https://overthewire.org/wargames/bandit/)** | Mengulang dasar terminal dan file | SSH dan dasar Bab 04; baca aturan server |
| 3 | [PortSwigger Web Security Academy](https://portswigger.net/web-security) | Web dan API melalui lab interaktif gratis | Pahami HTTP; pakai lingkungan lab yang disediakan, fitur Pro tidak wajib untuk jalur dasar |
| 5–6 | [pwn.college](https://pwn.college/) | Fondasi sistem dan pendalaman keamanan | Ikuti urutan materi; hormati permintaan pengelola agar solusi tantangan tidak dipublikasikan |

SSH menyediakan akses terminal terenkripsi; Bab 04 menjelaskan pemakaiannya untuk Bandit.
HTTP mengatur pertukaran permintaan dan jawaban web; ulangi Bab 07 sebelum memakai Academy.

Layanan di luar daftar mungkin mempunyai bagian gratis dan berbayar. Periksa syarat terbaru sebelum memakainya.
Tutorial tidak meminta pembelian, top-up, uji coba berkartu kredit, atau penerapan layanan cloud.
Pakai hanya target latihan yang diizinkan pengelola.

### Dokumentasi untuk memeriksa penjelasan

Pilih sumber sesuai pertanyaanmu. Misalnya, cocokkan cara aplikasi Laundry Aman memeriksa pemilik nota dengan panduan otorisasi dari bab terkait.
Tabel ini mengelompokkan dokumentasi menurut tahap pemakaian utamanya; kamu dapat membacanya kembali pada tahap lain.

| Tahap | Sumber primer | Kegunaan |
|---|---|---|
| 2, 5 | [Python docs](https://docs.python.org/3/) | Perilaku pustaka dan contoh kode lokal |
| 2–3 | [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Permintaan, jawaban, bagian pesan, cookie, dan browser |
| 3 | [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Metode pengujian web; gunakan versi rilis untuk acuan stabil |
| 3, 5 | [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | Pola perbaikan yang khusus untuk pengembang |
| 3 | [Nmap reference](https://nmap.org/book/man.html) | Makna opsi dan status port |
| 3–4 | [Wireshark User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Perekaman, penyaringan, dan pembacaan paket |
| 4, 6 | [NIST CSF](https://www.nist.gov/cyberframework) | Menghubungkan kontrol keamanan dengan pengelolaan risiko |
| 4, 6 | [MITRE ATT&CK](https://attack.mitre.org/) | Bahasa bersama untuk membahas perilaku yang diamati |
| 6 | [FIRST CVSS](https://www.first.org/cvss/) | Penjelasan penilaian keparahan teknis |

**CVSS** adalah kerangka penilaian keparahan teknis kerentanan. Skornya memerlukan konteks untuk menentukan prioritas perbaikan Laundry Aman.
Setiap bab memuat sumber yang lebih dekat dengan pembahasannya.

Saat sumber berubah, simpan tanggal akses, versi alat, dan hasil percobaan.
Jangan mengambil angka CVSS, status “gratis”, atau nama versi dari ingatan tanpa memeriksanya.

### Cara membaca sumber berbahasa Inggris

1. Ambil satu paragraf dan tandai istilah yang menentukan perilaku.
2. Cari contoh minimum, lalu jalankan di lab.
3. Jelaskan ulang hasilnya dalam bahasa Indonesia.
4. Simpan istilah asli agar kamu dapat mencari dokumentasi berikutnya.

Kenali kata berikut saat membaca sumber:

- `MUST`: persyaratan yang wajib dipenuhi dalam konteks dokumen.
- `SHOULD`: anjuran yang perlu dipertimbangkan sesuai ketentuan dokumen.
- `default`: perilaku atau nilai bawaan.
- `deprecated`: fitur yang tidak lagi dianjurkan untuk dipakai.
- `unsupported`: hal yang tidak didukung dalam konteks tersebut.

Jika terjemahan terasa kabur, cocokkan dengan hasil program dan konteks sumber.

### Batas penggunaan referensi

Roadmap membantu memilih urutan topik. Untuk membuktikan keamanan kontrol, kamu memerlukan pemeriksaan yang sesuai.
Dokumentasi menjelaskan rancangan atau perilaku yang didukung; lab memeriksa kasus konkret.
Sertakan keduanya dalam laporan dan sebutkan kondisi yang belum diuji.

Jangan mengunggah file rahasia ke lingkungan analisis atau layanan reputasi publik hanya karena alatnya tercantum dalam roadmap.

---

<a id="lampiran-6"></a>

## Panduan pendamping dan pemeriksaan kemampuan

Gunakan panduan ini saat kamu menjadi teman belajar, pengajar, atau pembaca yang memeriksa diri sendiri.
Tujuannya menemukan bagian yang belum dipahami dan menentukan latihan berikutnya.
Buku dan simulator belum membuktikan bahwa pelajar awam tertentu sudah diuji atau bahwa semua pembaca akan mencapai hasil sama.

Pilih tugas sesuai enam tahap pada [jadwal belajar](lampiran/jadwal-belajar.md).
Misalnya, menemukan folder termasuk “Mulai memakai alat”, sedangkan membedakan fakta log dari dugaan termasuk “Membaca bukti dan menangani kejadian”.

### Mulai dengan pengamatan

Minta pelajar membuka folder tutorial, menemukan satu file, lalu menjelaskan apa yang akan terjadi sebelum membukanya.
Biarkan ia memakai mouse sendiri. Jangan mengambil alih untuk menyelesaikan tugasnya.

Catat bagian yang membuatnya berhenti: istilah, lokasi tombol, kesalahan ketik, atau konsep.
Jika ia belum bisa membuka folder, mulai dari [pra-bab](materi/pra-00-mulai-dari-nol.md).
Berikan latihan folder dahulu sebelum tugas jaringan yang membutuhkan kemampuan itu.

Gunakan pertanyaan awal berikut:

- “Tunjukkan tempat kamu akan mengetik alamat website.”
- “Apa bedanya file ini dengan foldernya?”
- “Bagaimana kita tahu catatan sudah tersimpan?”

Nilai berdasarkan peragaan dan alasan. Hafalan nama aplikasi belum menunjukkan bahwa pelajar dapat memakainya.

### Satu sesi 15–25 menit

1. Pilih satu hasil kecil: menemukan lokasi file, menolak akses ke nota orang lain, atau membedakan bukti log dari dugaan.
2. Tunjukkan satu contoh lengkap. Ucapkan alasan keputusan, misalnya “Saya memeriksa siapa pemilik nota sebelum menyetujui akses.”
3. Minta pelajar mengerjakan contoh serupa dengan sebagian petunjuk dihilangkan. Beri waktu berpikir; jangan menyebut jawaban setiap kali ia berhenti.
4. Ubah data atau konteks. Minta prediksi sebelum ia menjalankan tindakan.
5. Tutup dengan penjelasan singkat dari pelajar: hasil, bukti, dan keterbatasan.

Jika satu sesi habis untuk menemukan folder, catat capaian itu sebagai hasil yang sah.
Pilih tugas berikutnya berdasarkan hambatan yang kamu amati.
Kurangi jumlah konsep baru jika pelajar sudah sulit mengingat instruksi pertama.

### Tangga bantuan

Mulai dari bantuan paling sedikit. Tambah bantuan hanya ketika pelajar masih terhenti.

1. Ajukan pertanyaan pemeriksaan: “Apa hasil yang kamu harapkan?”
2. Minta pelajar menunjukkan data yang berkaitan.
3. Berikan nama konsep atau bagian materi yang perlu dibaca.
4. Berikan satu langkah contoh jika bantuan sebelumnya belum cukup.

Catat tingkat bantuan tertinggi yang diperlukan.
Bantuan adalah data untuk memilih latihan ulang; pelajar tidak perlu menyembunyikannya sebagai kesalahan.

Setelah berhasil, minta pelajar membaca ulang hasil.
Contohnya, firewall adalah penyaring koneksi. Aturan yang memblokir semua koneksi mungkin menutup akses terlarang sekaligus menghentikan pekerjaan kasir Laundry Aman.

Pelajar perlu menguji bahwa akses sah tetap berfungsi.
Tanyakan “Apa yang masih harus bisa bekerja?” agar ia menghubungkan keamanan dengan kebutuhan usaha.

### Rubrik yang memisahkan jenis kemampuan

**Rubrik** adalah panduan penilaian berdasarkan bukti, seperti membedakan akses nota yang berhasil dengan bantuan dari keberhasilan tanpa petunjuk.
Gunakan satu baris yang paling sesuai hasil pengamatan. Catat jenis tugas dan bantuan agar statusnya punya konteks.

| Status | Bukti minimum | Langkah berikutnya |
|---|---|---|
| Belum mencoba | Belum ada tindakan atau hasil | Siapkan lingkungan dan satu contoh |
| Terbimbing | Berhasil dengan langkah atau petunjuk, lalu menjelaskan sebagian alasan | Ulangi dengan bantuan berkurang |
| Mandiri pada kasus sama | Berhasil tanpa langkah rinci, dapat menjelaskan alasan dan membaca pesan kesalahan | Uji kasus yang berbeda |
| Transfer ke kasus baru | Memilih tindakan pada data berbeda, menguji akses sah serta terlarang, dan membatasi kesimpulan | Ulangi setelah jeda dan minta pemeriksaan |
| Perlu penguatan | Pernah berhasil tetapi gagal menjelaskan atau mengulang | Kembali ke prasyarat yang belum stabil |

Transfer pada tabel berarti menerapkan kemampuan pada kasus berbeda.
Misalnya, pelajar tetap memeriksa pemilik nota ketika nama pelanggan dan nomor notanya berubah.

Skor simulator berasal dari aturan dan cakupan kasus dalam aplikasi. Jangan menafsirkannya sebagai persentase kemampuan profesional.
Menyelesaikan semua misi dengan petunjuk berbeda dari menyelesaikan kasus baru tanpa bantuan.
Catat kedua hasil secara terpisah, termasuk pertanyaan yang belum dapat dinilai aplikasi.

### Pemeriksaan setelah 48 jam dan 7 hari

Jadwal ini adalah rancangan latihan ulang, bukan ambang ilmiah yang berlaku bagi semua orang.
Sesuaikan dengan waktu serta kebutuhan pelajar.

Pada pemeriksaan 48 jam, gunakan tugas mirip dengan mengganti nama file atau pemilik nota.
Pada pemeriksaan 7 hari, gabungkan dua kemampuan.
Misalnya, minta pelajar membaca log lalu menentukan bukti tambahan sebelum mengambil tindakan.

Jangan memberi nilai nol karena pelajar mencari sintaks, yaitu bentuk penulisan perintah, dalam dokumentasi.
Pekerjaan nyata juga memakai dokumentasi. Bedakan mencari bentuk perintah dari menyalin seluruh keputusan pada solusi.
Minta pelajar menjelaskan maksud perintah dan prediksi hasil sebelum menjalankannya.

Salin tabel pencatatan berikut. Isi hasil berdasarkan pengamatan, bukan hasil yang kamu harapkan.

| Tanggal | Tugas | Bantuan | Hasil teramati | Penjelasan pelajar | Ulangan berikutnya |
|---|---|---|---|---|---|
| Isi saat latihan | Membaca nota milik sendiri dan menolak nota orang lain | Hint konsep | Isi berdasarkan hasil | Alasan pemeriksaan pemilik | Kasus dua pelanggan baru |

Hint pada contoh tabel berarti petunjuk. Catat apakah kamu hanya menyebut konsep atau juga memberi langkah rinci.

### Kasus penilaian yang dapat diubah

Gunakan data buatan Laundry Aman. Ubah satu kebutuhan, lalu perhatikan apakah pelajar tetap dapat memilih tindakan dan menjelaskan hasilnya.

| Bidang | Variasi tugas | Yang diperiksa |
|---|---|---|
| File | Ubah nama folder | Pelajar menemukan sumber dan salinan |
| Pesan penipuan | Berikan pesan mendesak yang sah dan pesan sopan dengan tujuan tautan berbeda dari organisasi pengirim | Pelajar memakai bukti; kata “mendesak” saja tidak membuktikan penipuan |
| Izin akses | Tukar nama dan ID nota | Pelajar tetap memeriksa izin |
| Jaringan | Tambahkan kebutuhan printer hanya untuk kasir | Pelajar menyesuaikan pembatasan akses |
| Log | Tambahkan kegagalan login yang diikuti keberhasilan normal | Pelajar menyebut informasi yang masih kurang |
| Pemulihan | Sediakan cadangan terbaru yang rusak dan cadangan lebih lama yang utuh | Pelajar menjelaskan kehilangan data yang mungkin terjadi |

Seluruh perubahan memakai data fiktif.
Jangan mengirim email penipuan ke orang sungguhan sebagai “ujian”, meminta password pribadi, atau menguji jaringan tetangga.
Kamu dapat memeriksa penalaran melalui kartu kasus dan aplikasi lokal.

### Uji kegunaan pada pelajar nyata

Minta persetujuan pelajar sebelum mencatat atau merekam sesi.
Gunakan alias serta catatan tugas; kamu tidak perlu mengumpulkan data pribadi.
Jelaskan bahwa ia boleh berhenti dan tujuan pengamatan adalah memperbaiki materi.

Berikan tiga tugas kecil tanpa petunjuk tambahan dari pendamping:

1. Buka simulator.
2. Selesaikan satu contoh dengan bantuan yang tersedia dalam aplikasi.
3. Cari bab rujukannya.

Catat apakah ia selesai, titik berhenti, pesan kesalahan, serta penjelasannya.
Setelah selesai, tanyakan kata yang belum dipahami dan tindakan yang paling membingungkan.

Perbaiki satu hambatan, lalu coba kembali dengan orang lain atau tugas setara.
Laporan harus menyebut jumlah peserta, pengalaman awal, tugas, dan bantuan yang diberikan.

Jangan menyatakan “terbukti mudah bagi semua awam” berdasarkan satu sesi atau test kode yang lulus.
Test otomatis membuktikan perilaku perangkat lunak pada kasus uji. Pengamatan pelajar menilai apakah petunjuknya bisa diikuti.

### Syarat naik tahap

Pelajar siap berpindah dari simulator ke lab lokal jika dapat melakukan empat hal berikut:

- Menjelaskan tujuan dan batas simulasi.
- Menjalankan contoh lokal yang dirujuk.
- Membaca hasilnya.
- Menulis bukti tanpa data pribadi.

Ia siap memasuki spesialisasi ketika mampu mengerjakan kasus baru, menguji perbaikannya, dan menerima koreksi laporan.

Jika hasil belum memenuhi syarat, pilih satu prasyarat untuk diulang.
Kesalahan membaca direktori kerja memerlukan latihan memilih folder tempat menjalankan perintah.
Menganggap semua login gagal sebagai serangan memerlukan latihan membedakan fakta dari dugaan.
Menambah alat baru belum tentu menyelesaikan hambatan tersebut.
