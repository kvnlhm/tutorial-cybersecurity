# Pra-bab: Mulai di sini jika Anda belum mengenal IT

## Tujuan dan prasyarat

Anda boleh mulai tanpa mengetahui arti IP, kode, server, atau terminal. Target pertama adalah menemukan file, membuka simulator, dan menjelaskan hasil satu tindakan. Kita menggunakan **Laundry Aman**, toko rekaan yang mempunyai komputer kasir dan catatan pesanan. Data pelanggan dalam latihan juga rekaan.

Siapkan laptop atau komputer yang dapat membuka browser. **Browser** adalah aplikasi untuk membuka halaman, misalnya Edge, Chrome, Firefox, atau Safari. Untuk sesi pertama, Anda belum perlu memasang Python, Linux, atau alat keamanan. Ponsel dapat membantu membaca materi dan mencoba bagian simulator yang sesuai layarnya; latihan file dan terminal nyata dalam buku lebih nyaman dikerjakan dengan komputer serta keyboard.

Bagilah pra-bab menjadi beberapa sesi 15–25 menit. Anda tidak perlu menyelesaikan semuanya hari ini. Waktu tersebut merupakan saran pembagian kerja, bukan batas kecepatan. Jika belum dapat menemukan kembali file yang baru dibuat, ulangi bagian itu sebelum berpindah ke pemrograman.

Tidak ada penilaian “bodoh” ketika Anda menemui error. Error memberikan informasi tentang langkah yang belum sesuai. Catat tindakan dan hasilnya agar Anda dapat memperbaiki satu hal pada satu waktu.

## Konsep

### Komputer, aplikasi, dan dokumen

Bayangkan meja kasir. Komputer adalah perangkat di meja. Aplikasi adalah alat kerja yang dibuka kasir, seperti kalkulator atau pengolah nota. Dokumen adalah isi pekerjaan yang disimpan. Menutup aplikasi tidak otomatis menghapus dokumennya; perubahan yang belum disimpan dapat hilang.

**File**, atau berkas, menyimpan data dengan suatu nama. `nota.txt` adalah contoh nama file. **Folder** menampung file dan folder lain. Dalam tutorial, kata **direktori** berarti folder. **Pengelola file** adalah aplikasi untuk melihatnya: File Explorer di Windows, Finder di macOS, atau pengelola file pada Linux.

Bagian akhir nama seperti `.txt`, `.html`, dan `.py` disebut **ekstensi**. `catatan.txt` berisi teks biasa, `index.html` merupakan dokumen halaman, sedangkan `contoh.py` lazim digunakan untuk kode Python. Ekstensi membantu memilih aplikasi pembuka. Nama file bukan bukti bahwa isinya aman; orang dapat memberi nama yang menyesatkan.

Anda akan menemui kata **simpan**, **salin**, dan **pindah**. Menyimpan menulis pekerjaan ke file. Menyalin membuat salinan sambil mempertahankan sumber. Memindah mengubah lokasi. Untuk latihan awal, gunakan salinan agar Anda dapat membandingkan sebelum dan sesudah.

### Browser, internet, dan alamat

Internet adalah jaringan yang menghubungkan banyak perangkat. Website adalah kumpulan halaman yang bisa Anda buka melalui alamatnya. Browser merupakan aplikasinya. Browser juga dapat membuka file halaman dari komputer sendiri. Karena itu membuka browser tidak selalu berarti mengirim data ke internet.

**Address bar**, atau bilah alamat, berada di bagian atas jendela browser. Anda mengisinya dengan alamat seperti `https://docs.python.org/`. Kotak pencarian pada halaman membantu mencari informasi. Keduanya dapat terlihat mirip karena browser juga bisa mengubah teks biasa pada bilah alamat menjadi pencarian. Perhatikan hasilnya: halaman yang diinginkan atau daftar hasil pencarian.

Alamat yang diawali `file:///` menunjuk file lokal. `http://127.0.0.1:8000/` pada latihan nanti menunjuk layanan di komputer sendiri. `https://` menjelaskan jenis koneksi ke suatu alamat; awalan itu sendiri belum membuktikan bahwa pengelola situs dapat dipercaya. Bab berikutnya menjelaskan alasan teknisnya.

### Tiga tempat mengetik yang berbeda

| Tempat | Anda mengetik apa? | Contoh |
|---|---|---|
| Editor teks | Isi yang ingin disimpan sebagai file | `Catatan latihan pertama` |
| Bilah alamat browser | Lokasi halaman yang ingin dibuka | `http://127.0.0.1:8000/nota.txt` |
| Terminal | Perintah untuk program atau shell | `Get-Location` |

**Terminal** adalah jendela untuk memberi perintah teks dan membaca hasilnya. **Shell** adalah program yang mengartikan perintah tersebut. PowerShell dan Bash merupakan dua shell yang berbeda. Menempelkan kode Python ke bilah alamat browser tidak akan menjalankan latihan Python sebagaimana dimaksud dalam buku.

Di simulator, terminal yang Anda lihat adalah **model latihan di halaman**. Perintahnya hanya bekerja pada data virtual yang disediakan simulator. Terminal PowerShell yang Anda buka dari menu Windows merupakan program nyata yang dapat membaca atau mengubah file sesuai perintah. Bedakan keduanya sebelum mencoba sesuatu.

## Praktik

### Sesi 1: hasil pertama dalam kira-kira lima menit

Lima menit merupakan target kecil untuk percobaan awal setelah folder tersedia. Menemukan folder atau mengunduhnya pertama kali dapat membutuhkan waktu tambahan.

1. Buka pengelola file. Pada Windows, tekan tombol bergambar Windows dan huruf `E` bersama-sama untuk membuka File Explorer. Anda juga dapat memilih ikonnya dari menu Start.
2. Temukan folder tutorial. Jika seseorang sudah menyiapkan proyek di komputer Anda, buka lokasi yang diberikan. Jangan mengetik contoh path milik penulis sebagai lokasi komputer Anda.
3. Jika baru mengunduh ZIP dari GitHub, temukan file tersebut di Downloads. Klik kanan, pilih **Extract All** atau **Ekstrak Semua**, lalu buka folder hasil ekstraksi. ZIP adalah paket file; kerjakan latihan dari folder hasil ekstraksi agar berkas pendukung dapat ditemukan.
4. Di folder tutorial, cari `README.md`, `materi`, `labs`, dan `simulator`. Ini tanda bahwa Anda berada di folder utama. Buka folder `simulator`.
5. Buka `index.html` dengan browser. Jika klik ganda membukanya di editor teks, klik kanan file tersebut, pilih **Open with** atau **Buka dengan**, lalu pilih browser.
6. Pilih mode belajar dan misi pertama. Baca tugas sebelum menekan tombol atau mengetik. Gunakan petunjuk yang tersedia jika Anda belum mengetahui langkahnya.
7. Lakukan satu tindakan, baca hasil di layar, lalu jelaskan: “Saya meminta …, simulator menunjukkan ….” Jangan menilai kemajuan hanya dari warna tombol atau skor.

Anda telah menyelesaikan hasil pertama jika berhasil membuka simulator dan dapat membedakan instruksi Anda dari jawaban simulator. Tidak perlu membuka semua misi sekaligus. Simpan nama folder atau lokasi dalam catatan agar Anda dapat membukanya lagi besok.

Simulator memakai kasus buatan. Membuka nota virtual di sana tidak berarti Anda mengakses data pelanggan nyata. Hasil misi menunjukkan kemampuan pada kasus latihan itu. Nanti Anda akan memindahkan konsep ke file lokal dan kasus baru dengan batas izin yang jelas.

### Sesi 2: buat catatan yang dapat ditemukan kembali

Tutup atau kecilkan browser, lalu kembali ke folder utama tutorial. Pada Windows, klik kanan area kosong, pilih **New → Folder** atau **Baru → Folder**, beri nama `hasil-belajar`, lalu tekan Enter. Jika folder itu sudah ada, buka folder yang sudah ada. Jangan membuat folder kedua dengan nama hampir sama.

Buka Notepad dari menu Start. Notepad adalah editor teks; Anda tidak perlu memakai Word untuk contoh kode. Ketik:

```text
Latihan pertama Laundry Aman
Saya membuka simulator dari folder tutorial.
Saya masih ingin memahami perbedaan file dan folder.
```

Pilih **File → Save As** atau **Simpan Sebagai**. Masuk ke folder `hasil-belajar`, beri nama `catatan-pertama.txt`, lalu simpan. Tutup Notepad, buka kembali file itu melalui pengelola file, dan baca isinya. Membuka ulang membuktikan bahwa Anda menyimpan ke tempat yang benar.

Untuk melihat ekstensi pada Windows 11, buka **View → Show → File name extensions** di File Explorer. Pada tampilan Windows lain, cari pilihan **File name extensions** di menu View. Panduan resmi Microsoft memuat letak menu yang dapat Anda cocokkan. [Microsoft: ekstensi nama file](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).

Sekarang salin catatan tadi. Pilih file dengan satu klik, tekan `Ctrl+C`, lalu `Ctrl+V` di folder yang sama. Sistem biasanya memberi nama salinan yang berbeda. Ubah namanya menjadi `catatan-salinan.txt`. Edit salinan dan tambahkan kalimat “Ini salinan untuk latihan.” Buka sumber untuk memastikan sumber belum ikut berubah. Cukup gunakan file latihan ini; jangan mencoba pada dokumen penting.

Pada macOS gunakan Finder untuk membuat folder dan menyalin file; pintasan salin/tempel umumnya memakai tombol Command. Bila memakai TextEdit untuk kode, pilih format teks biasa melalui **Format → Make Plain Text**. Di Linux, gunakan menu pengelola file dan editor teks yang tersedia. Tujuannya sama: satu file sumber, satu salinan, serta lokasi yang dapat Anda temukan lagi.

### Sesi 3: kenali tombol dan baca satu baris perintah

`Ctrl+C` berarti tahan Ctrl, tekan C, lalu lepaskan. Anda tidak perlu mengetik kata “Ctrl” atau tanda tambah. Di editor, pintasan ini menyalin teks yang dipilih. Di terminal yang sedang menjalankan program, pintasan tersebut lazim dipakai untuk meminta penghentian program. Konteks tempat Anda menekan tombol menentukan tindakannya.

| Tombol atau tindakan | Pemakaian awal |
|---|---|
| Enter | Mengirim perintah atau mengakhiri isian |
| Backspace | Menghapus karakter sebelum kursor |
| Tombol panah | Memindah posisi atau memilih riwayat, sesuai aplikasi |
| Tab | Berpindah fokus antar kontrol pada halaman; perilaku terminal berbeda |
| Ctrl+S | Menyimpan file pada banyak editor |
| Ctrl+L di browser | Memilih bilah alamat pada browser yang umum |

Kursor adalah tanda posisi pengetikan. Pastikan fokus berada di tempat yang benar sebelum mengetik. Jika mengetik tetapi tidak terlihat apa-apa pada kotak yang Anda maksud, klik kotak itu dahulu. Untuk pengguna keyboard, tekan Tab sampai bingkai fokus berada pada kontrol yang dibutuhkan.

Dalam buku, blok berlabel `powershell` berarti perintah PowerShell. `bash` berarti shell Bash, biasanya di Linux. Blok `python` berisi kode yang umumnya perlu disimpan ke file `.py`, lalu dijalankan melalui Python. Blok `text` sering menunjukkan data atau hasil, bukan perintah. Baca kalimat sebelum blok: apakah Anda diminta “simpan”, “jalankan”, atau “bandingkan hasil”.

### Sesi 4: buka terminal nyata tanpa mengubah pengaturan

Pada Windows, buka menu Start, ketik `PowerShell`, lalu pilih Windows PowerShell. Buka sebagai pengguna biasa. Jendela mungkin berada di dalam Windows Terminal; Windows Terminal merupakan aplikasi penampung sesi, sedangkan PowerShell adalah shell di dalamnya. [Microsoft: memulai PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started).

Anda akan melihat penanda seperti `PS C:\...>`. Penanda itu disebut **prompt**. Ia menunjukkan bahwa shell siap menerima perintah dan sering menyertakan lokasi saat ini. **Jangan ketik ulang prompt.** Ketik hanya:

```powershell
Get-Location
```

Tekan Enter. PowerShell menampilkan folder saat ini. Perintah tersebut membaca lokasi, tanpa memindahkan atau menghapus file. Untuk masuk ke folder tutorial, salin alamat folder dari bilah alamat File Explorer. Di PowerShell ketik `Set-Location -LiteralPath `, lalu masukkan alamat tersebut di dalam kutip tunggal. Bentuknya seperti ini; contoh alamat harus Anda ganti:

```powershell
Set-Location -LiteralPath 'C:\Belajar\Tutorial Cybersecurity'
Get-ChildItem
```

Kutip menjaga alamat yang mempunyai spasi sebagai satu nilai. `Set-Location` memilih folder kerja; `Get-ChildItem` membaca isinya. Jika nama folder Anda mengandung tanda petik tunggal, lebih mudah buka terminal dari menu konteks folder atau minta pendamping membantu pengutipan path. Jangan mengganti nama folder yang sedang dipakai aplikasi lain tanpa alasan.

Pastikan daftar memuat `README.md`, `materi`, dan `labs`. Jika tidak, Anda mungkin satu tingkat terlalu luar atau terlalu dalam. Kembali ke pengelola file, pilih folder yang benar, lalu ulangi. Anda belum perlu menghafal alamat absolut.

Pengguna Linux/macOS membuka aplikasi Terminal, memakai `pwd` untuk melihat lokasi, `cd` untuk berpindah, dan `ls` untuk melihat isi. Perintah Bash Bab 04 tetap memerlukan lingkungan Linux yang sesuai. Pada Windows, gunakan langkah WSL opsional di Bab 01 setelah latihan dasar ini terasa jelas; simulator bisa dipakai terlebih dahulu.

### Sesi 5: siapkan Python ketika akan masuk lab kode

Python adalah bahasa pemrograman sekaligus nama program yang menjalankan kode bahasa itu. Memasang Python menambah kemampuan menjalankan file `.py`; Anda tidak perlu mempelajari seluruh bahasanya sebelum mencoba contoh kecil.

Di PowerShell, jalankan `py --version`. Jika muncul Python 3.11 atau lebih baru, lanjutkan latihan buku. Jika `py` tidak ditemukan, coba `python --version`. Jika salah satunya bekerja, pakai perintah itu secara konsisten. Jangan memasang ulang hanya karena nama perintah berbeda.

Jika belum tersedia, buka [unduhan resmi Python](https://www.python.org/downloads/) dan pilih jalur Windows. Panduan saat ini menyediakan **Python install manager**. Unduh dari situs resmi, buka berkas pemasang, lalu pilih **Install**. Tutup dan buka kembali PowerShell. Jalankan `python --version`; install manager dapat mengunduh runtime pada pemakaian awal sehingga internet masih diperlukan. Setelah versi tampil, jalankan perintah singkat berikut. Jika perangkat organisasi menolak pemasangan, minta pengelola menyediakan Python dan lanjutkan simulator sambil menunggu. [Panduan resmi Windows](https://docs.python.org/3/using/windows.html).

```powershell
python -c "print('Saya berhasil menjalankan Python')"
```

Hasil yang diharapkan adalah `Saya berhasil menjalankan Python`. `-c` meminta Python menjalankan kode pendek di dalam kutip; `print` menampilkan teks. Perintah ini tidak membuat file baru. Di Linux/macOS, gunakan Python dari sumber resmi atau pengelola paket sistem dan periksa dengan `python3 --version`; langkah pemasangan bergantung sistemnya. Anda dapat meminta bantuan khusus sistem tersebut tanpa mengganti komputer.

### Sesi 6: simpan kode lalu jalankan

Di Notepad, buat file baru berisi satu baris berikut:

```python
print('Laundry Aman siap belajar')
```

Pilih Save As, masuk ke `hasil-belajar`, pilih jenis **All files** bila tersedia, dan simpan sebagai `halo.py` dengan encoding UTF-8. Pastikan namanya `halo.py`, bukan `halo.py.txt`. Pada editor lain, gunakan pilihan penyimpanan teks biasa. **Encoding** adalah aturan mengubah teks menjadi byte; pilih UTF-8 untuk contoh buku.

Buka PowerShell pada folder utama tutorial dan jalankan:

```powershell
py hasil-belajar/halo.py
```

Ganti `py` dengan `python` jika itu perintah yang bekerja di komputer Anda. Linux/macOS menggunakan `python3`. Anda meminta Python membuka file pada lokasi yang disebutkan. Anda tidak mengetik isi `print(...)` pada baris PowerShell untuk percobaan ini.

Sekarang ubah teks di file menjadi `Saya bisa membuka file saya sendiri`, simpan, lalu ulangi perintah. Jika hasil lama masih muncul, periksa apakah perubahan tersimpan dan apakah Anda mengedit file yang sama dengan yang dijalankan. Inilah satu latihan awal debugging: mencocokkan niat, file, perintah, dan hasil.

## Hasil yang diharapkan

Anda mempunyai simulator yang dapat dibuka, catatan yang dapat ditemukan kembali, serta pemahaman tentang lokasi mengetik. Jika sudah menyiapkan Python, Anda juga mempunyai `halo.py` yang menampilkan pesan baru setelah diedit dan disimpan. Jika Python belum tersedia, catat bagian kode sebagai **belum dikerjakan**; jangan menandainya selesai hanya karena membaca output contoh.

## Jika macet

| Yang terlihat | Periksa satu hal ini dahulu |
|---|---|
| Simulator terbuka sebagai kumpulan kode | Pilih Open with lalu browser untuk `index.html` |
| Tampilan simulator tidak utuh | Ekstrak seluruh ZIP; pertahankan berkas pendamping dalam folder yang sama |
| Perintah muncul di hasil pencarian internet | Anda mengetik di browser; buka terminal yang diminta |
| `not recognized` atau `command not found` | Program/perintah belum ditemukan; periksa ejaan, shell, dan pemasangannya |
| `can't open file` atau file tidak ditemukan | Lihat folder saat ini dan nama lengkap file, termasuk ekstensinya |
| `halo.py.txt` | Aktifkan tampilan ekstensi, lalu simpan sebagai file `.py` |
| Teks lama muncul setelah mengedit | Simpan perubahan; cocokkan path file yang diedit dengan perintah |
| `SyntaxError` | Cocokkan kutip lurus, tanda kurung, dan nomor baris; salin pesan error ke jurnal |
| `>>>` muncul sebagai prompt | Anda berada di Python interaktif; ketik `exit()` untuk kembali ke shell |
| Terminal menunggu dan belum muncul prompt | Program mungkin masih berjalan; baca petunjuk sebelum menutupnya |
| Kemajuan simulator tidak muncul di browser lain | Penyimpanan lokal dapat berbeda menurut browser/lokasi; gunakan ekspor jika tersedia dan catat hasil sendiri |

Minta bantuan dengan kalimat: “Saya sedang mencoba … pada Windows/Linux/macOS. Saya mengetik … di …, berharap …, tetapi mendapat ….” Sertakan pesan error yang sudah diperiksa agar tidak memuat rahasia. Jangan hanya mengirim “tidak bisa”; pendamping perlu tahu tindakan yang ingin Anda lakukan.

## Latihan

Kerjakan tiga tingkat ini. Beri tanda bantuan yang digunakan, termasuk membaca petunjuk atau bertanya kepada AI.

**Terbimbing:** buka kembali `catatan-pertama.txt` dengan mengikuti sesi 2. Jelaskan mengapa membuka ulang lebih kuat sebagai bukti daripada melihat tombol Save.

**Sebagian petunjuk:** buat `catatan-kedua.txt` berisi dua hal yang Anda pahami. Kali ini gunakan hanya nama target dan hasil yang diminta, tanpa mengikuti urutan klik. Tutup lalu buka ulang.

**Kasus baru:** buat folder `latihan-cabang-b` di dalam `hasil-belajar`. Simpan file `jadwal.txt` di dalamnya, salin menjadi `jadwal-uji.txt`, lalu ubah hanya salinan. Tunjukkan lokasi kedua file kepada pendamping atau jelaskan kepada rekaman suara pribadi. Jangan menghapus sumber untuk “merapikan”.

<details>
<summary>Buka pembahasan setelah mencoba</summary>

Membuka ulang menguji bahwa isi benar-benar tersimpan pada file yang dapat ditemukan. Pada kasus baru, sumber dan salinan berada di folder yang sama tetapi memiliki nama berbeda. Mengedit salinan tidak semestinya mengubah sumber. Jika keduanya berubah, periksa apakah Anda ternyata membuka file yang sama dua kali. Path relatif dari folder utama tutorial menuju sumber adalah `hasil-belajar/latihan-cabang-b/jadwal.txt`.

`Get-Location` masuk ke PowerShell, alamat website masuk ke bilah alamat browser, dan isi `print(...)` masuk ke file Python untuk pola latihan simpan-lalu-jalankan. Simulator mempunyai perintah virtual sendiri; keberhasilan di sana belum membuktikan bahwa Anda telah menjalankan shell Linux nyata.

</details>

## Bukti kelulusan

- [ ] Saya dapat membuka folder utama dan membedakannya dari ZIP unduhan.
- [ ] Saya dapat membuka simulator melalui browser dan membaca hasil satu tindakan.
- [ ] Saya dapat membuat, menyimpan, menutup, dan membuka kembali file catatan.
- [ ] Saya dapat membedakan input, output, prompt, serta tempat mengetik.
- [ ] Saya dapat membuat salinan dan memeriksa bahwa sumber tetap utuh.
- [ ] Saya mencatat bagian yang masih membutuhkan bantuan atau belum dikerjakan.

Anda boleh masuk Bab 00 setelah lima kemampuan pertama dapat diperagakan. Latihan Python boleh diselesaikan bersama Bab 01. Ulangi kasus baru setelah 48 jam tanpa melihat langkah; bila masih perlu bantuan, beri label “terbimbing” lalu ulangi bagian yang belum mantap. Tanda centang ini mengukur persiapan belajar, bukan penguasaan seluruh cybersecurity.

## Referensi

- [Microsoft: ekstensi nama file](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).
- [Microsoft: mulai menggunakan PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started).
- [Python: penggunaan di Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan di macOS](https://docs.python.org/3/using/mac.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [Panduan pendamping dan pemeriksaan kemampuan](../lampiran/panduan-pendamping.md).
