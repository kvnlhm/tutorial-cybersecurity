# Pra-bab: Mulai di sini jika kamu belum mengenal komputer

Tahap 1 dari 6: Mulai memakai alat

## Tujuan dan prasyarat

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

## Konsep

Kasir Laundry Aman menulis catatan, menyimpannya, lalu membukanya lagi besok.
Ia perlu tahu tempat catatan disimpan dan tempat mengetik permintaan.
Kita akan mengikuti pekerjaan kecil itu sebelum memakai perintah.
Kamu juga akan membedakan percobaan di halaman latihan dari tindakan pada komputer sendiri.

### Menyimpan catatan di meja kasir

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

### Membuat salinan sebelum mencoba

Kasir ingin mencoba mengubah catatan tanpa kehilangan sumbernya.
**Simpan** berarti menulis pekerjaan ke file, seperti memasukkan nota yang sudah ditulis ke map.

**Salin** membuat salinan sambil mempertahankan sumber, seperti menggandakan nota.
Untuk latihan awal, gunakan salinan agar perubahan bisa dibandingkan dengan sumber.

**Pindah** mengubah lokasi file, seperti memindahkan nota ke laci lain.
Periksa lokasi sebelum dan sesudah agar file tetap mudah ditemukan.

### Membuka halaman dan membaca alamat

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

#### Cukup kenali dulu

- **Alamat lokal**: awalan `file:///` menunjuk file pada komputer sendiri.
- **Alamat layanan sendiri**: `http://127.0.0.1:8000/` pada latihan nanti menunjuk layanan di komputer sendiri.
- **HTTPS**: awalan `https://` menjelaskan jenis koneksi; pengelola situsnya tetap perlu diperiksa sebelum dipercaya.

### Memilih tempat mengetik

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

### Mencoba perintah virtual lebih dahulu

Kasir berlatih pada **simulator**, model latihan di halaman dengan data buatan yang sudah disediakan.
Perintahnya hanya bekerja pada data itu.

Kasir membuka nota **virtual**, yaitu nota dalam model latihan.
Ia membaca data buatan dan tidak mengakses data pelanggan nyata.

PowerShell yang dibuka dari menu Windows adalah program nyata yang bisa membaca atau mengubah file sesuai perintah.
Keberhasilan di simulator belum membuktikan bahwa kamu sudah memakai shell Linux nyata.
Nanti kamu akan memindahkan pemahaman ke file lokal dan kasus baru dengan batas izin yang jelas.

### Ringkasan

- File menyimpan isi; folder membantu menyusun dan menemukan file.
- Menyalin mempertahankan sumber agar perubahan bisa dibandingkan.
- Editor, bilah alamat, dan terminal menerima jenis isian yang berbeda.
- Simulator menjalankan perintah virtual pada data latihan; terminal sistem dapat memengaruhi file komputer.

### Cek pemahaman

1. Di mana kamu mengetik alamat website dan di mana kamu menulis isi catatan?
2. Mengapa salinan lebih cocok untuk percobaan awal daripada dokumen penting?
3. Apa perbedaan perintah yang kamu ketik dan hasil yang muncul?
4. Mengapa perintah simulator perlu dibedakan dari PowerShell nyata?

## Praktik

### Sesi 1: hasil pertama dalam kira-kira lima menit

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

### Sesi 2: buat catatan yang dapat ditemukan kembali

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

### Sesi 3: kenali tombol dan baca satu baris perintah

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

### Sesi 4: buka terminal nyata tanpa mengubah pengaturan

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

Langkah WSL opsional ada di [Bab 01](01-lab.md). Kerjakan setelah latihan dasar ini terasa jelas.
Kamu boleh memakai simulator lebih dahulu.

### Sesi 5: siapkan Python ketika akan masuk lab kode

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

### Sesi 6: simpan kode lalu jalankan

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

## Hasil yang diharapkan

Kamu bisa membuka simulator, menemukan kembali catatan, dan memilih tempat mengetik yang benar.
Jika Python siap, `halo.py` menampilkan pesan baru setelah isi diedit dan disimpan.
Jika Python belum tersedia, tandai bagian kode **belum dikerjakan**. Membaca hasil contoh belum berarti menjalankannya.

## Jika macet

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

## Latihan

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

## Bukti kelulusan

- [ ] Saya dapat membuka folder utama dan membedakannya dari ZIP unduhan.
- [ ] Saya dapat membuka simulator melalui browser dan membaca hasil satu tindakan.
- [ ] Saya dapat membuat, menyimpan, menutup, dan membuka kembali file catatan.
- [ ] Saya dapat membedakan input, output, prompt, serta tempat mengetik.
- [ ] Saya dapat membuat salinan dan memeriksa bahwa sumber tetap utuh.
- [ ] Saya mencatat bagian yang masih membutuhkan bantuan atau belum dikerjakan.

### Lanjut belajar

Lanjut ke [Bab 00](00-orientasi.md) setelah lima kemampuan pertama bisa diperagakan.
Latihan Python boleh diselesaikan bersama [Bab 01](01-lab.md).
Ulangi kasus baru setelah 48 jam tanpa melihat langkah.
Jika masih membutuhkan bantuan, beri label “terbimbing” dan ulangi bagian terkait.
Daftar ini mengukur persiapan belajar, bukan penguasaan seluruh keamanan siber.

## Referensi

- [Microsoft: ekstensi nama file](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).
- [Microsoft: mulai menggunakan PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started).
- [Python: penggunaan di Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan di macOS](https://docs.python.org/3/using/mac.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [Panduan pendamping dan pemeriksaan kemampuan](../lampiran/panduan-pendamping.md).
