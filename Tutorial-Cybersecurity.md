# Tutorial Cybersecurity: dari Awam sampai Mahir

Panduan praktik berbahasa Indonesia dengan studi kasus **Laundry Aman**.
Anda belajar cara kerja komputer, menguji kelemahan di lingkungan berizin,
memperbaiki sistem, membaca bukti insiden, dan membangun kebiasaan riset.

Peta topik mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security).
Pola konsep–praktik–latihan mengikuti [tutorial AI Engineer](https://github.com/kvnlhm/tutorial-ai-engineer)
milik pengguna. Penjelasan, data, dan eksperimen disusun untuk buku ini.

**Mulai dari pra-bab jika belum paham IT.** Panduannya menjelaskan file, browser,
terminal, serta percobaan pertama tanpa instalasi. Buka [simulator Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/)
langsung di browser HP atau komputer. Pada HP, ketuk kotak perintah di dalam
halaman dan gunakan tombol **Jalankan perintah**. Delapan misi menawarkan petunjuk
bertahap, respons terhadap kesalahan, bukti tindakan, dan kasus ujian berbeda.
[Panduan simulasi](simulator/README.md) juga menjelaskan cara mengunduh untuk
bermain offline di komputer. Latihan Python, terminal sistem, dan VM berikutnya
memerlukan komputer.

Belum perlu Kali Linux atau laptop mahal. Jalur utama
menggunakan alat gratis dan data buatan; empat lab Python bekerja offline.
Setiap bab mencantumkan tujuan, prasyarat, praktik, hasil yang diharapkan,
cara mengatasi masalah, latihan, dan bukti kelulusan.

Keahlian tingkat lanjut tumbuh melalui latihan, review, dan pengalaman berizin.
Gunakan [jadwal dan rubrik](lampiran/jadwal-belajar.md) untuk menilai kemampuan,
bukan hanya jumlah halaman yang selesai dibaca. Bab spesialisasi memberi dasar
dan proyek lanjutan; satu buku tidak menggantikan pengalaman profesional.

Contoh perintah menyebut shell yang digunakan. Jika menjalankan file repo,
buka terminal di root folder tutorial. [Panduan lab](labs/README.md) menjelaskan
cara menjalankan dan membaca hasil. [Daftar verifikasi](docs/ai/task-log.md)
mencatat bagian yang sudah diuji dan yang masih membutuhkan lingkungan lain.

## Daftar isi

- [Pra-bab: Mulai di sini jika Anda belum mengenal IT](#mulai-dari-nol)
- [Bab 00: Mulai dari nol dan ukur kemampuan Anda](#bab-00)
- [Bab 01: Menyiapkan meja praktik yang aman](#bab-01)
- [Bab 02: Mengenali komputer dan mencari sumber masalah](#bab-02)
- [Bab 03: Memahami perjalanan data di jaringan](#bab-03)
- [Bab 04: Membaca dan mengelola Linux](#bab-04)
- [Bab 05: Memahami Windows dan PowerShell](#bab-05)
- [Bab 06: Menulis skrip kecil dan mencatat perubahan](#bab-06)
- [Bab 07: Melihat cara kerja website dari dekat](#bab-07)
- [Bab 08: Hash, enkripsi, TLS, dan penyimpanan password](#bab-08)
- [Bab 09: Identitas, login, dan hak akses](#bab-09)
- [Bab 10: Memperkuat perangkat dan menguji cadangan](#bab-10)
- [Bab 11: Memetakan ancaman dan menentukan prioritas](#bab-11)
- [Bab 12: Menguji keamanan dengan metode yang dapat dipertanggungjawabkan](#bab-12)
- [Bab 13: Menemukan dan memperbaiki kelemahan web dan API](#bab-13)
- [Bab 14: Membaca lalu lintas dan memisahkan jaringan](#bab-14)
- [Bab 15: Membaca log dan menyusun deteksi](#bab-15)
- [Bab 16: Menangani insiden dan berburu ancaman](#bab-16)
- [Bab 17: Menjaga bukti dan menyusun kronologi](#bab-17)
- [Bab 18: Memahami program dan perilaku malware](#bab-18)
- [Bab 19: Memory safety, debugging, dan fuzzing](#bab-19)
- [Bab 20: Identitas perusahaan, Active Directory, dan Kerberos](#bab-20)
- [Bab 21: Keamanan cloud, container, dan konfigurasi](#bab-21)
- [Bab 22: Membangun perangkat lunak yang bisa dipercaya](#bab-22)
- [Bab 23: OSINT dan intelijen ancaman yang dapat diperiksa](#bab-23)
- [Bab 24: Risiko, tata kelola, dan keputusan bisnis](#bab-24)
- [Bab 25: Menjadi spesialis dan melakukan riset mandiri](#bab-25)
- [Bab 26: Proyek akhir Laundry Aman](#bab-26)
- [Jadwal belajar dan penilaian](#lampiran-1)
- [Peta roadmap ke tutorial](#lampiran-2)
- [Kamus istilah](#lampiran-3)
- [Template bukti belajar](#lampiran-4)
- [Referensi dan latihan lanjutan](#lampiran-5)
- [Panduan pendamping dan pemeriksaan kemampuan](#lampiran-6)

---

<a id="mulai-dari-nol"></a>

## Pra-bab: Mulai di sini jika Anda belum mengenal IT

### Tujuan dan prasyarat

Anda boleh mulai tanpa mengetahui arti IP, kode, server, atau terminal. Target pertama adalah menemukan file, membuka simulator, dan menjelaskan hasil satu tindakan. Kita menggunakan **Laundry Aman**, toko rekaan yang mempunyai komputer kasir dan catatan pesanan. Data pelanggan dalam latihan juga rekaan.

Siapkan HP atau komputer yang dapat membuka browser. **Browser** adalah aplikasi untuk membuka halaman, misalnya Edge, Chrome, Firefox, atau Safari. Sesi pertama dan delapan misi simulator bisa dimulai dari HP tanpa memasang Python, Linux, atau alat keamanan. Untuk latihan file, terminal sistem, Python, dan VM pada tahap berikutnya, gunakan komputer serta keyboard. Anda dapat memulai simulasi sekarang dan melanjutkan praktik komputer saat perangkatnya tersedia.

Bagilah pra-bab menjadi beberapa sesi 15–25 menit. Anda tidak perlu menyelesaikan semuanya hari ini. Waktu tersebut merupakan saran pembagian kerja, bukan batas kecepatan. Jika belum dapat menemukan kembali file yang baru dibuat, ulangi bagian itu sebelum berpindah ke pemrograman.

Tidak ada penilaian “bodoh” ketika Anda menemui error. Error memberikan informasi tentang langkah yang belum sesuai. Catat tindakan dan hasilnya agar Anda dapat memperbaiki satu hal pada satu waktu.

### Konsep

#### Komputer, aplikasi, dan dokumen

Bayangkan meja kasir. Komputer adalah perangkat di meja. Aplikasi adalah alat kerja yang dibuka kasir, seperti kalkulator atau pengolah nota. Dokumen adalah isi pekerjaan yang disimpan. Menutup aplikasi tidak otomatis menghapus dokumennya; perubahan yang belum disimpan dapat hilang.

**File**, atau berkas, menyimpan data dengan suatu nama. `nota.txt` adalah contoh nama file. **Folder** menampung file dan folder lain. Dalam tutorial, kata **direktori** berarti folder. **Pengelola file** adalah aplikasi untuk melihatnya: File Explorer di Windows, Finder di macOS, atau pengelola file pada Linux.

Bagian akhir nama seperti `.txt`, `.html`, dan `.py` disebut **ekstensi**. `catatan.txt` berisi teks biasa, `index.html` merupakan dokumen halaman, sedangkan `contoh.py` lazim digunakan untuk kode Python. Ekstensi membantu memilih aplikasi pembuka. Nama file bukan bukti bahwa isinya aman; orang dapat memberi nama yang menyesatkan.

Anda akan menemui kata **simpan**, **salin**, dan **pindah**. Menyimpan menulis pekerjaan ke file. Menyalin membuat salinan sambil mempertahankan sumber. Memindah mengubah lokasi. Untuk latihan awal, gunakan salinan agar Anda dapat membandingkan sebelum dan sesudah.

#### Browser, internet, dan alamat

Internet adalah jaringan yang menghubungkan banyak perangkat. Website adalah kumpulan halaman yang bisa Anda buka melalui alamatnya. Browser merupakan aplikasinya. Browser juga dapat membuka file halaman dari komputer sendiri. Karena itu membuka browser tidak selalu berarti mengirim data ke internet.

**Address bar**, atau bilah alamat, berada di bagian atas jendela browser. Anda mengisinya dengan alamat seperti `https://docs.python.org/`. Kotak pencarian pada halaman membantu mencari informasi. Keduanya dapat terlihat mirip karena browser juga bisa mengubah teks biasa pada bilah alamat menjadi pencarian. Perhatikan hasilnya: halaman yang diinginkan atau daftar hasil pencarian.

Alamat yang diawali `file:///` menunjuk file lokal. `http://127.0.0.1:8000/` pada latihan nanti menunjuk layanan di komputer sendiri. `https://` menjelaskan jenis koneksi ke suatu alamat; awalan itu sendiri belum membuktikan bahwa pengelola situs dapat dipercaya. Bab berikutnya menjelaskan alasan teknisnya.

#### Tiga tempat mengetik yang berbeda

| Tempat | Anda mengetik apa? | Contoh |
|---|---|---|
| Editor teks | Isi yang ingin disimpan sebagai file | `Catatan latihan pertama` |
| Bilah alamat browser | Lokasi halaman yang ingin dibuka | `http://127.0.0.1:8000/nota.txt` |
| Terminal | Perintah untuk program atau shell | `Get-Location` |

**Terminal** adalah jendela untuk memberi perintah teks dan membaca hasilnya. **Shell** adalah program yang mengartikan perintah tersebut. PowerShell dan Bash merupakan dua shell yang berbeda. Menempelkan kode Python ke bilah alamat browser tidak akan menjalankan latihan Python sebagaimana dimaksud dalam buku.

Di simulator, terminal yang Anda lihat adalah **model latihan di halaman**. Perintahnya hanya bekerja pada data virtual yang disediakan simulator. Terminal PowerShell yang Anda buka dari menu Windows merupakan program nyata yang dapat membaca atau mengubah file sesuai perintah. Bedakan keduanya sebelum mencoba sesuatu.

### Praktik

#### Sesi 1: hasil pertama dalam kira-kira lima menit

Lima menit merupakan target kecil untuk percobaan awal, bukan batas waktu. Pilih salah satu cara membuka di bawah ini.

**Dari HP atau browser komputer:**

1. Buka [simulator Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/). Internet diperlukan untuk membuka versi online. Anda tidak perlu membuat akun atau mengunduh ZIP.
2. Halaman pertama menampilkan tugas **Temukan catatan toko**. Mode belajar sudah dipilih. Pada HP, **Pilih misi dan mode** membuka daftar latihan bila Anda membutuhkannya.
3. Ketuk kotak berlabel **Ketik perintah di sini**, isi `pwd`, lalu ketuk **Jalankan perintah**. Jangan mengetik `pwd` di bilah alamat browser.
4. Baca lokasi yang muncul pada kotak hasil. Jelaskan: “Saya meminta lokasi folder, simulator menunjukkan ….” Gunakan kalimat Anda sendiri.
5. Coba `ls` dengan cara yang sama. Jika belum mengerti hasilnya, buka **Pahami istilah dan konsep misi**, lalu gunakan petunjuk bertahap di bawah meja praktik.
6. Simpan tautan bermain sebagai bookmark atau favorit browser agar dapat dibuka lagi. Progres disimpan di browser ini; berpindah HP, komputer, atau browser tidak memindahkannya secara otomatis.

**Alternatif: file offline di komputer setelah mengunduh:**

1. Buka pengelola file. Pada Windows, tekan tombol bergambar Windows dan huruf `E` bersama-sama untuk membuka File Explorer. Anda juga dapat memilih ikonnya dari menu Start.
2. Temukan folder tutorial. Jika seseorang sudah menyiapkan proyek di komputer Anda, buka lokasi yang diberikan. Jangan mengetik contoh path milik penulis sebagai lokasi komputer Anda.
3. Jika baru mengunduh ZIP dari GitHub, temukan file tersebut di Downloads. Klik kanan, pilih **Extract All** atau **Ekstrak Semua**, lalu buka folder hasil ekstraksi. ZIP adalah paket file; kerjakan latihan dari folder hasil ekstraksi agar berkas pendukung dapat ditemukan.
4. Di folder tutorial, cari `README.md`, `materi`, `labs`, dan `simulator`. Ini tanda bahwa Anda berada di folder utama. Buka folder `simulator`.
5. Buka `index.html` dengan browser. Jika klik ganda membukanya di editor teks, klik kanan file tersebut, pilih **Open with** atau **Buka dengan**, lalu pilih browser.
6. Pilih mode belajar dan misi pertama. Baca tugas sebelum menekan tombol atau mengetik. Gunakan petunjuk yang tersedia jika Anda belum mengetahui langkahnya.
7. Lakukan satu tindakan, baca hasil di layar, lalu jelaskan: “Saya meminta …, simulator menunjukkan ….” Jangan menilai kemajuan hanya dari warna tombol atau skor.

Anda telah menyelesaikan hasil pertama jika berhasil membuka simulator dan dapat membedakan instruksi Anda dari jawaban simulator. Tidak perlu membuka semua misi sekaligus. Jika memakai unduhan, simpan nama folder atau lokasinya agar Anda dapat membukanya lagi besok. Sesi berikutnya berlatih memakai komputer; pembaca yang saat ini hanya memegang HP dapat melanjutkan misi simulator terlebih dahulu.

Simulator memakai kasus buatan. Membuka nota virtual di sana tidak berarti Anda mengakses data pelanggan nyata. Hasil misi menunjukkan kemampuan pada kasus latihan itu. Nanti Anda akan memindahkan konsep ke file lokal dan kasus baru dengan batas izin yang jelas.

#### Sesi 2: buat catatan yang dapat ditemukan kembali

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

#### Sesi 3: kenali tombol dan baca satu baris perintah

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

#### Sesi 4: buka terminal nyata tanpa mengubah pengaturan

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

#### Sesi 5: siapkan Python ketika akan masuk lab kode

Python adalah bahasa pemrograman sekaligus nama program yang menjalankan kode bahasa itu. Memasang Python menambah kemampuan menjalankan file `.py`; Anda tidak perlu mempelajari seluruh bahasanya sebelum mencoba contoh kecil.

Di PowerShell, jalankan `py --version`. Jika muncul Python 3.11 atau lebih baru, lanjutkan latihan buku. Jika `py` tidak ditemukan, coba `python --version`. Jika salah satunya bekerja, pakai perintah itu secara konsisten. Jangan memasang ulang hanya karena nama perintah berbeda.

Jika belum tersedia, buka [unduhan resmi Python](https://www.python.org/downloads/) dan pilih jalur Windows. Panduan saat ini menyediakan **Python install manager**. Unduh dari situs resmi, buka berkas pemasang, lalu pilih **Install**. Tutup dan buka kembali PowerShell. Jalankan `python --version`; install manager dapat mengunduh runtime pada pemakaian awal sehingga internet masih diperlukan. Setelah versi tampil, jalankan perintah singkat berikut. Jika perangkat organisasi menolak pemasangan, minta pengelola menyediakan Python dan lanjutkan simulator sambil menunggu. [Panduan resmi Windows](https://docs.python.org/3/using/windows.html).

```powershell
python -c "print('Saya berhasil menjalankan Python')"
```

Hasil yang diharapkan adalah `Saya berhasil menjalankan Python`. `-c` meminta Python menjalankan kode pendek di dalam kutip; `print` menampilkan teks. Perintah ini tidak membuat file baru. Di Linux/macOS, gunakan Python dari sumber resmi atau pengelola paket sistem dan periksa dengan `python3 --version`; langkah pemasangan bergantung sistemnya. Anda dapat meminta bantuan khusus sistem tersebut tanpa mengganti komputer.

#### Sesi 6: simpan kode lalu jalankan

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

### Hasil yang diharapkan

Anda mempunyai simulator yang dapat dibuka, catatan yang dapat ditemukan kembali, serta pemahaman tentang lokasi mengetik. Jika sudah menyiapkan Python, Anda juga mempunyai `halo.py` yang menampilkan pesan baru setelah diedit dan disimpan. Jika Python belum tersedia, catat bagian kode sebagai **belum dikerjakan**; jangan menandainya selesai hanya karena membaca output contoh.

### Jika macet

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

### Latihan

Kerjakan tiga tingkat ini. Beri tanda bantuan yang digunakan, termasuk membaca petunjuk atau bertanya kepada AI.

**Terbimbing:** buka kembali `catatan-pertama.txt` dengan mengikuti sesi 2. Jelaskan mengapa membuka ulang lebih kuat sebagai bukti daripada melihat tombol Save.

**Sebagian petunjuk:** buat `catatan-kedua.txt` berisi dua hal yang Anda pahami. Kali ini gunakan hanya nama target dan hasil yang diminta, tanpa mengikuti urutan klik. Tutup lalu buka ulang.

**Kasus baru:** buat folder `latihan-cabang-b` di dalam `hasil-belajar`. Simpan file `jadwal.txt` di dalamnya, salin menjadi `jadwal-uji.txt`, lalu ubah hanya salinan. Tunjukkan lokasi kedua file kepada pendamping atau jelaskan kepada rekaman suara pribadi. Jangan menghapus sumber untuk “merapikan”.

<details>
<summary>Buka pembahasan setelah mencoba</summary>

Membuka ulang menguji bahwa isi benar-benar tersimpan pada file yang dapat ditemukan. Pada kasus baru, sumber dan salinan berada di folder yang sama tetapi memiliki nama berbeda. Mengedit salinan tidak semestinya mengubah sumber. Jika keduanya berubah, periksa apakah Anda ternyata membuka file yang sama dua kali. Path relatif dari folder utama tutorial menuju sumber adalah `hasil-belajar/latihan-cabang-b/jadwal.txt`.

`Get-Location` masuk ke PowerShell, alamat website masuk ke bilah alamat browser, dan isi `print(...)` masuk ke file Python untuk pola latihan simpan-lalu-jalankan. Simulator mempunyai perintah virtual sendiri; keberhasilan di sana belum membuktikan bahwa Anda telah menjalankan shell Linux nyata.

</details>

### Bukti kelulusan

- [ ] Saya dapat membuka folder utama dan membedakannya dari ZIP unduhan.
- [ ] Saya dapat membuka simulator melalui browser dan membaca hasil satu tindakan.
- [ ] Saya dapat membuat, menyimpan, menutup, dan membuka kembali file catatan.
- [ ] Saya dapat membedakan input, output, prompt, serta tempat mengetik.
- [ ] Saya dapat membuat salinan dan memeriksa bahwa sumber tetap utuh.
- [ ] Saya mencatat bagian yang masih membutuhkan bantuan atau belum dikerjakan.

Anda boleh masuk Bab 00 setelah lima kemampuan pertama dapat diperagakan. Latihan Python boleh diselesaikan bersama Bab 01. Ulangi kasus baru setelah 48 jam tanpa melihat langkah; bila masih perlu bantuan, beri label “terbimbing” lalu ulangi bagian yang belum mantap. Tanda centang ini mengukur persiapan belajar, bukan penguasaan seluruh cybersecurity.

### Referensi

- [Microsoft: ekstensi nama file](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows).
- [Microsoft: mulai menggunakan PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started).
- [Python: penggunaan di Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan di macOS](https://docs.python.org/3/using/mac.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [Panduan pendamping dan pemeriksaan kemampuan](lampiran/panduan-pendamping.md).

---

<a id="bab-00"></a>

## Bab 00: Mulai dari nol dan ukur kemampuan Anda

### Tujuan dan prasyarat

Anda akan memahami pekerjaan cybersecurity, menentukan batas latihan, dan membuat catatan belajar. Jika membuka folder, menyimpan file, atau membedakan browser dengan terminal masih membingungkan, kerjakan [Pra-bab: mulai dari nol](materi/pra-00-mulai-dari-nol.md) dahulu. Pecah bab ini menjadi dua sesi 15–25 menit: sesi pertama mengenali kasus, sesi kedua membuat catatan serta menjelaskan keputusan. Anda boleh mengulang satu sesi sesuai kebutuhan.

Kata *hacker* dapat merujuk pada orang yang memahami sistem lalu menemukan cara mengubah perilakunya. Dalam buku ini, Anda belajar menguji sistem dengan izin, menjelaskan dampak, dan membantu pemilik memperbaikinya. Kemampuan tinggi tumbuh dari latihan, kegagalan yang dianalisis, dan pengalaman menghadapi sistem yang berbeda. Menyelesaikan buku memberi landasan serta jalur pendalaman; keahlian profesional perlu pembuktian di luar halaman buku.

### Konsep

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

### Praktik

#### 1. Buat kontrak belajar

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

#### 2. Kenali perbedaan kejadian

Tulis tujuan CIA yang terdampak untuk empat kasus:

1. Pelanggan A bisa membaca alamat pelanggan B.
2. Kasir salah memasukkan harga dari Rp30.000 menjadi Rp3.000.
3. Laptop rusak dan cadangan terakhir belum pernah diuji.
4. Pemilik memakai satu password yang sama untuk email dan aplikasi toko.

Kasus pertama terutama menyangkut kerahasiaan. Kasus kedua menyangkut integritas, walaupun belum tentu melibatkan penyerang. Kasus ketiga mengancam ketersediaan. Kasus keempat merupakan kelemahan pengelolaan identitas yang dapat memengaruhi ketiganya. Anda belajar membedakan bukti kejadian dari kemungkinan dampak.

#### 3. Buat jurnal eksperimen

Untuk setiap latihan, catat tujuan, dugaan awal, langkah, hasil, penjelasan, dan perbaikan. Sertakan perintah yang relevan. Jangan memasukkan password, token sesi, atau data pribadi ke jurnal yang akan diunggah. Jika Anda memakai AI, minta penjelasan error dan periksa jawabannya melalui dokumentasi serta percobaan. Salinan jawaban tanpa pemahaman belum menjadi bukti kemampuan.

### Hasil yang diharapkan

Anda mempunyai kontrak belajar dan empat analisis singkat. Anda bisa menjelaskan apa yang boleh diuji sebelum membicarakan alat. Setelah sebuah latihan, Anda mampu menceritakan perubahan yang terjadi dan bukti yang mendukung penjelasan Anda.

### Jika macet

Mulai dengan masalah sehari-hari: akun terkunci, file hilang, atau transaksi salah. Hubungkan setiap masalah dengan aset dan dampaknya. Anda belum perlu menghafal nama alat atau singkatan sertifikasi. Jika sebuah latihan menyebut perangkat yang belum Anda punya, kerjakan bagian konsep dan data sintetis lebih dahulu.

### Latihan

Pilih satu aset Laundry Aman. Buat dua skenario kegagalan, satu tindakan pencegahan, dan cara memeriksa bahwa pencegahan itu bekerja. Contoh: cadangkan file pesanan lalu pulihkan salinannya ke folder berbeda. Menulis “sudah punya backup” tanpa percobaan pemulihan belum membuktikan kesiapan.

### Bukti kelulusan

Anda lulus bab ini jika bisa membedakan aset, ancaman, kelemahan, dan risiko dengan contoh Anda sendiri; menyebutkan target latihan yang diizinkan; serta menyimpan jurnal tanpa informasi rahasia. Minta teman membaca satu analisis Anda. Jika ia mengerti dampaknya tanpa belajar komputer dahulu, penjelasan Anda sudah berguna.

**Uji pindah kasus:** toko menambah printer yang mencetak nota. Tulis satu kemungkinan masalah dan akibatnya tanpa memakai contoh website di atas. Bila Anda hanya mengganti kata “website” menjadi “printer” tetapi belum bisa menerangkan akibatnya, kembali ke hubungan aset dan dampak. Penilaian ini memeriksa pemahaman pada situasi baru, bukan kecepatan menghafal istilah.

<details>
<summary>Contoh pembahasan printer setelah Anda mencoba</summary>

Printer berhenti bekerja ketika toko buka mengganggu ketersediaan proses cetak. Orang yang mengambil nota pelanggan lain dapat membocorkan informasi pada kertas. Salah satu pencegahan untuk kasus kedua adalah menempatkan printer di area petugas dan memberikan nota kepada penerima yang tepat. Untuk menguji prosesnya, gunakan nota dummy dan periksa kepada siapa petugas menyerahkannya. Kontrol yang cocok bergantung pada masalah yang Anda pilih.

</details>

### Referensi

- [Roadmap Cyber Security](https://roadmap.sh/cyber-security): peta kelompok kompetensi yang menjadi acuan urutan buku.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): kerangka untuk mengelola risiko keamanan organisasi.

---

<a id="bab-01"></a>

## Bab 01: Menyiapkan meja praktik yang aman

### Tujuan dan prasyarat

Anda akan menyiapkan folder kerja, memastikan Python tersedia, dan memahami pilihan lab. Selesaikan Bab 00 dahulu. Untuk bagian awal, laptop yang mampu menjalankan browser, editor teks, dan Python sudah cukup. Mesin virtual menjadi pilihan lanjutan; Anda tidak perlu membeli perangkat untuk memulai.

### Konsep

**Terminal** adalah tempat mengetik perintah. **Shell** menerjemahkan perintah itu. Windows biasanya memakai PowerShell, Linux sering memakai Bash, sedangkan macOS umumnya memakai zsh. Perintahnya kadang mirip tetapi aturan kutip, variabel, dan path dapat berbeda. Perhatikan label pada blok kode.

**Direktori kerja** adalah folder tempat terminal sedang berada. Perintah dengan path relatif dihitung dari sana. `catatan.txt` berarti file di folder sekarang; `../catatan.txt` berarti naik satu folder dahulu. Inilah penyebab umum error “file tidak ditemukan”.

Ada tiga tingkat lab:

| Tingkat | Kebutuhan | Dipakai untuk |
|---|---|---|
| Lokal ringan | Python dan editor | Mengolah data sintetis, hash, SQL, otorisasi |
| Lab melalui browser | Internet dan akun bila diminta | Tantangan yang targetnya disediakan pengelola |
| Mesin virtual | RAM dan ruang disk tambahan | Belajar Linux, konfigurasi jaringan, pengujian sistem |

**Virtual machine**, disingkat VM, adalah komputer buatan yang berjalan di dalam komputer fisik. Sistem utama disebut *host*, sistem di VM disebut *guest*. **Snapshot** merekam keadaan VM agar Anda dapat kembali ke kondisi sebelumnya. Snapshot di disk yang sama bukan pengganti cadangan terpisah.

Untuk VM latihan, bedakan mode jaringan. **NAT** biasanya memberi guest akses keluar melalui host; ini tidak membuat guest terisolasi dari semua tujuan. **Host-only** menghubungkan guest dengan host dan guest lain pada jaringan tersebut. **Internal network** menghubungkan guest yang berada di jaringan virtual yang sama. **Bridged** menempatkan guest pada jaringan fisik; hindari mode ini untuk sistem latihan yang sengaja rentan. Periksa dokumentasi hypervisor yang Anda pilih sebelum menyalakan target.

### Praktik

#### 1. Buka folder tutorial

Jika mengunduh ZIP dari GitHub, ekstrak dahulu. Buka folder yang berisi `README.md`. Anda tidak wajib memasang editor khusus untuk membuka terminal. Pada Windows, buka Start, ketik `PowerShell`, lalu buka sebagai pengguna biasa. Ikuti langkah `Set-Location` pada [pra-bab](materi/pra-00-mulai-dari-nol.md) untuk memilih folder tutorial. Jika menu klik kanan folder menyediakan **Open in Terminal**, Anda dapat menggunakannya; pastikan sesi yang terbuka memakai PowerShell. Periksa lokasi dan isi:

```powershell
Get-Location
Get-ChildItem
```

Di Linux atau macOS:

```bash
pwd
ls
```

Jangan mengetik tanda seperti `PS C:\...>` atau `$` yang tampil di awal baris terminal; itu penanda kesiapan shell. Buku hanya menampilkan perintah yang perlu diketik.

#### 2. Periksa Python

Windows PowerShell:

```powershell
py --version
py -c "print('Lab Laundry Aman siap')"
```

Linux atau macOS:

```bash
python3 --version
python3 -c "print('Lab Laundry Aman siap')"
```

Jika belum tersedia, ambil Python dari [python.org](https://www.python.org/downloads/) atau pengelola paket resmi distribusi Linux. Ikuti petunjuk pemasangan untuk sistem Anda, lalu buka terminal baru dan ulangi pemeriksaan. Gunakan Python 3.11 atau lebih baru. Contoh buku memakai standard library, yaitu modul bawaan. Anda tidak perlu memasang paket dari internet untuk lab inti.

Di Windows, jika `py` tidak tersedia tetapi `python --version` menunjukkan Python 3, gunakan `python` sebagai pengganti `py`. Di Linux/macOS, gunakan `python3`. Jangan menebak interpreter berdasarkan nama file saja.

#### 3. Buat tempat menyimpan hasil

Windows PowerShell, dari folder tutorial:

```powershell
New-Item -ItemType Directory -Path hasil-belajar -Force
Set-Content -Path hasil-belajar/cek-lab.txt -Value 'Lab Laundry Aman siap'
Get-Content hasil-belajar/cek-lab.txt
```

Linux/macOS:

```bash
mkdir -p hasil-belajar
printf '%s\n' 'Lab Laundry Aman siap' > hasil-belajar/cek-lab.txt
cat hasil-belajar/cek-lab.txt
```

`New-Item` atau `mkdir` membuat folder. Perintah kedua menulis file dan mengganti isinya jika nama itu sudah ada. Perintah ketiga membaca isi. Gunakan nama baru saat Anda belum yakin apakah sebuah file perlu dipertahankan.

#### 4. Tentukan jalur Linux

Untuk Bab 04, Anda perlu terminal Linux. Anda dapat memakai mesin Linux yang sudah dimiliki, VM pribadi, atau lingkungan belajar resmi yang menyediakan shell. Windows Subsystem for Linux membantu belajar perintah Linux, tetapi jangan memperlakukannya sebagai tempat menjalankan malware. Folder Windows dapat diakses dari WSL dan berbagi perangkat dengan sistem utama.

**Opsi Windows: Ubuntu melalui WSL.** Pada Windows 11 atau Windows 10 versi 2004/build 19041 ke atas, pemasangan resmi dapat dilakukan melalui langkah berikut. Pemasangan ini opsional dan mengubah komponen Windows; lakukan hanya di perangkat yang Anda kelola.

1. Simpan pekerjaan, buka PowerShell sebagai administrator, lalu jalankan `wsl --install`.
2. Restart komputer jika diminta. Buka Ubuntu dari menu Start dan tunggu penyiapan selesai.
3. Buat nama pengguna Linux dan password baru. Password tidak terlihat saat diketik; itu perilaku normal.
4. Di terminal Ubuntu, jalankan `pwd` lalu `whoami`. Gunakan terminal ini untuk perintah Bash Bab 04.
5. Di PowerShell, `wsl --list --verbose` menampilkan distribusi yang terpasang. `exit` menutup sesi shell Linux.

Jika WSL sudah ada tetapi Ubuntu belum terpasang, ikuti pilihan distribusi pada [panduan instalasi Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install). Bila perangkat organisasi membatasi pemasangan, gunakan lab yang disetujui pengelolanya.

Jika memilih VM, gunakan image resmi, matikan shared clipboard serta shared folder saat bereksperimen, dan buat snapshot kondisi awal. Uji jaringan pada diagram sebelum memasang aplikasi rentan. Buku tidak membutuhkan Docker, akun cloud berbayar, ataupun kartu kredit.

### Hasil yang diharapkan

Terminal menampilkan versi Python 3 dan kalimat `Lab Laundry Aman siap`. File `hasil-belajar/cek-lab.txt` muncul di folder yang Anda maksud. Anda mengetahui shell yang sedang dipakai dan pilihan lingkungan Linux untuk bab selanjutnya.

Selesaikan satu jalur dahulu. Untuk tiga langkah pertama, pengguna Windows cukup memakai PowerShell dan Python. Persiapan Linux pada langkah 4 menjadi kebutuhan ketika masuk Bab 04; jangan menunda latihan file hanya karena VM atau WSL belum tersedia. Simulator dapat membantu mengenali perintah virtual sambil Anda menyiapkan lingkungan yang sesuai.

### Jika macet

`Command not found` atau “not recognized” berarti shell belum menemukan program. Periksa pemasangan dan buka terminal baru. `Permission denied` saat menulis biasanya berarti Anda berada di folder yang tidak dapat ditulis; pindah ke folder proyek milik Anda. Jangan menyelesaikan semua error dengan menjalankan terminal sebagai administrator.

Ekstensi file tersembunyi dapat membuat `contoh.py` tersimpan sebagai `contoh.py.txt`. Aktifkan tampilan ekstensi di pengelola file. Jika laptop lambat, tutup VM dan lanjutkan lab Python lokal; bagian awal tidak membutuhkan VM aktif.

### Latihan

Buka terminal baru, masuk kembali ke folder tutorial, lalu baca file tadi tanpa melihat panduan. Tulis perbedaan host, guest, NAT, dan internal network dalam catatan. Gambarkan koneksi mana yang Anda inginkan dan mana yang perlu dicegah saat memakai VM rentan.

### Bukti kelulusan

Simpan versi Python, nama shell, lokasi folder, serta hasil pembacaan file. Anda lulus jika dapat menjelaskan mengapa direktori kerja memengaruhi perintah dan memilih lab yang sesuai kemampuan perangkat Anda.

### Referensi

- [Python: penggunaan pada Windows](https://docs.python.org/3/using/windows.html).
- [Python: penggunaan pada Unix](https://docs.python.org/3/using/unix.html).
- [VirtualBox: jaringan virtual](https://www.virtualbox.org/manual/ch06.html).
- [Microsoft: memasang WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

---

<a id="bab-02"></a>

## Bab 02: Mengenali komputer dan mencari sumber masalah

### Tujuan dan prasyarat

Anda akan membedakan perangkat keras, sistem operasi, proses, file, dan layanan. Gunakan komputer milik Anda dan folder lab dari Bab 01. Latihan ini membaca informasi serta membuat file kecil; Anda tidak perlu mengubah pengaturan sistem.

### Konsep

Di Laundry Aman, kasir menyimpan pesanan lalu mencetak nota. Di balik satu klik, prosesor menjalankan instruksi, memori menyimpan data yang sedang dipakai, dan disk menyimpan file. **CPU** mengerjakan instruksi. **RAM** menyimpan keadaan kerja sementara. **Storage** seperti SSD menyimpan data yang perlu bertahan setelah komputer mati. Kapasitas disk besar tidak menggantikan RAM yang kurang.

**Sistem operasi**, misalnya Windows atau Linux, mengatur sumber daya dan akses perangkat. **Kernel** adalah bagian inti yang mengelola hal seperti memori, proses, dan perangkat. **Aplikasi** berjalan di atasnya. **Proses** adalah program yang sedang berjalan, lengkap dengan identitas dan sumber dayanya. **PID** merupakan nomor identitas proses; nomor ini bisa berbeda setelah program dijalankan ulang.

**Service** atau layanan adalah program latar belakang, misalnya pencetakan atau server web. File program dan proses bukan hal yang sama. Anda dapat memiliki file aplikasi tanpa menjalankannya. Sebaliknya, satu aplikasi dapat membuat banyak proses.

Sistem file mengatur nama, folder, isi, dan metadata. Metadata mencakup ukuran serta waktu perubahan. **Path absolut** menyebut lokasi dari akar, misalnya `C:\lab\nota.txt` atau `/home/pelajar/lab/nota.txt`. **Path relatif** seperti `nota.txt` bergantung pada direktori kerja. **Ekstensi** memberi petunjuk jenis file; mengganti `.exe` menjadi `.txt` tidak mengubah isi program menjadi dokumen aman.

Byte adalah satuan data. Satu byte terdiri dari delapan bit. Kilobyte dan megabyte pada produk dapat memakai kelipatan 1.000; KiB dan MiB memakai kelipatan 1.024. Untuk troubleshooting, catat satuannya. Ukuran unduhan 100 MB berbeda dari kecepatan koneksi 100 megabit per detik.

### Praktik

#### 1. Amati proses tanpa menghentikannya

Windows PowerShell:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
```

Di Linux:

```bash
ps -eo pid,comm | head -n 6
```

Perintah Windows mengambil daftar proses lalu memilih lima baris beserta nama dan ID. Tanda `|`, disebut *pipe*, meneruskan hasil ke perintah berikutnya. Perintah Linux menampilkan kolom PID dan nama; enam baris mencakup satu baris judul. Jangan mengharapkan nomor PID atau nama proses yang sama dengan komputer lain.

Buka aplikasi editor lalu jalankan perintah lagi. Daftar lima proses pertama belum tentu memuat editor itu, sehingga Anda boleh memeriksa melalui Task Manager di Windows atau monitor sistem Linux. Tujuan Anda menghubungkan aplikasi yang terlihat dengan proses yang bekerja.

#### 2. Buat file dan periksa ukurannya

Dari folder tutorial, jalankan Windows PowerShell:

```powershell
Set-Content hasil-belajar/nota.txt 'Pesanan L001: 3 kilogram'
Get-Item hasil-belajar/nota.txt | Select-Object Name, Length
Copy-Item hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

Linux/macOS:

```bash
printf '%s\n' 'Pesanan L001: 3 kilogram' > hasil-belajar/nota.txt
wc -c hasil-belajar/nota.txt
cp hasil-belajar/nota.txt hasil-belajar/nota-salinan.txt
```

`Length` dan `wc -c` mengukur byte. Besarnya dapat berbeda antarperintah penulisan karena encoding dan akhir baris. Windows PowerShell versi lama juga punya pilihan encoding bawaan yang berbeda. Anda tidak perlu memaksa angkanya sama; catat bagaimana Anda membuat file tersebut.

#### 3. Latih troubleshooting bertahap

Ketik perintah pembacaan dengan nama file yang salah. Pada PowerShell gunakan `Get-Content hasil-belajar/nota-tidak-ada.txt`; pada Bash gunakan `cat hasil-belajar/nota-tidak-ada.txt`. File itu memang belum dibuat, sehingga kegagalan pada langkah ini merupakan hasil yang diharapkan. Baca pesan error. Lalu periksa lokasi, daftar file, dan ejaannya. Ganti hanya nama `nota-tidak-ada.txt` menjadi `nota.txt`, kemudian jalankan lagi. Berhasil membaca nota sesudah perubahan tersebut memberi bukti bahwa penyebab latihan ini adalah nama file, bukan kebutuhan izin administrator.

Gunakan urutan ini untuk masalah yang lebih besar:

1. Tulis perilaku yang diharapkan dan yang terlihat.
2. Catat kapan mulai terjadi dan perubahan terakhir.
3. Buat satu dugaan yang dapat diuji.
4. Uji dengan perubahan paling kecil.
5. Simpan hasil, termasuk dugaan yang ternyata salah.

Untuk kasus “website kasir tidak terbuka”, pisahkan pertanyaan: apakah proses server berjalan, apakah port terbuka, apakah nama domain terjawab, dan apakah aplikasinya mengembalikan error? Mengganti banyak pengaturan sekaligus menghapus petunjuk penyebabnya.

### Hasil yang diharapkan

Anda melihat proses aktif, membuat dua file nota, dan memulihkan error nama file. Catatan Anda memuat satu hipotesis serta bukti bahwa hipotesis itu benar atau salah. Tidak ada layanan sistem yang dihentikan.

### Jika macet

Daftar proses yang panjang bukan tanda komputer disusupi. Sistem modern menjalankan banyak layanan. Angka RAM terpakai juga perlu konteks karena sistem dapat memakai memori kosong untuk cache. Jika pembacaan file gagal, periksa path dahulu sebelum mengubah izin.

### Latihan

Tuliskan perbedaan “file hilang”, “file ada tetapi akses ditolak”, dan “file terbuka tetapi isinya salah”. Untuk masing-masing, tentukan satu pemeriksaan awal. Tambahkan langkah pemulihan nota dari salinan ke nama baru dan baca hasilnya.

### Bukti kelulusan

Anda dapat menjelaskan CPU, RAM, storage, proses, dan service memakai contoh aktivitas kasir. Sertakan jurnal error nama file dan pemulihannya. Ini menjadi kebiasaan untuk bab keamanan: reproduksi, kumpulkan bukti, lalu perbaiki.

### Referensi

- [Microsoft: Get-Process](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process).
- [Ubuntu: pengantar command line](https://ubuntu.com/tutorials/command-line-for-beginners).

---

<a id="bab-03"></a>

## Bab 03: Memahami perjalanan data di jaringan

### Tujuan dan prasyarat

Anda akan membaca alamat IP, menghitung subnet kecil, serta membedakan DNS, TCP, UDP, dan port. Selesaikan Bab 02. Latihan hitung dapat dilakukan tanpa internet. Perintah pengamatan hanya membaca konfigurasi komputer sendiri atau memeriksa loopback.

### Konsep

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

### Praktik

#### 1. Hitung subnet di kertas

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

#### 2. Baca konfigurasi tanpa mengubahnya

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

#### 3. Gambarkan jalur satu request

Gambar empat kotak: laptop kasir, switch/router toko, resolver DNS, dan server aplikasi. Tulis kapan kasir membutuhkan DNS dan gateway. Tambahkan perangkat Wi-Fi pelanggan pada bagian terpisah. Diagram ini baru rancangan; belum membuktikan bahwa pemisahan jaringan telah diterapkan.

### Hasil yang diharapkan

Perhitungan `/25` cocok dengan Python. Anda dapat menunjuk alamat lokal, gateway bila ada, dan alasan loopback tidak membutuhkan perjalanan ke internet. Balasan ping lokal biasanya cepat, tetapi waktunya tidak perlu sama antarperangkat.

### Jika macet

`ip` tidak tersedia secara bawaan di macOS; gunakan kelompok perintah macOS. Perangkat offline mungkin tidak memiliki default gateway. Alamat privat pada diagram adalah contoh, sehingga jangan menyalinnya sebagai konfigurasi komputer Anda. Jika ada dua gateway karena VPN, catat situasinya tanpa menghapus rute.

### Latihan

**Dengan petunjuk:** untuk `192.168.10.64/26`, hitung sisa bit `32−26`, lalu ukuran blok. Blok dimulai `.64`. Tentukan alamat terakhir dengan menambahkan ukuran blok dikurangi satu. Setelah itu tulis rentang host dan jumlahnya.

**Tanpa petunjuk langkah:** ulangi untuk `192.168.10.128/26`. Sebelum membuka pembahasan, tulis alasan mengapa hasil Anda berbeda dari latihan sebelumnya. Jelaskan juga mengapa pelanggan Wi-Fi tidak boleh otomatis memperoleh akses ke administrasi kasir.

<details>
<summary>Pembahasan dua kasus /26</summary>

Enam bit tersisa memberi 64 alamat. Mask adalah `255.255.255.192`. Untuk blok `.64`, broadcast adalah `.64 + 63 = .127`, host `.65–.126`, dengan 62 alamat host. Blok `.128` mempunyai broadcast `.191`, host `.129–.190`, dan jumlah host yang sama. Prefix sama berarti ukuran blok sama; alamat awal menentukan letak blok. Ini latihan subnet biasa, sehingga aturan dua alamat khusus digunakan di sini, bukan diterapkan tanpa pengecualian pada seluruh prefix.

</details>

### Bukti kelulusan

Simpan diagram jaringan dan dua perhitungan subnet. Anda lulus jika dapat membedakan IP, nama domain, port, gateway, dan MAC address; menjelaskan bahwa enkripsi tidak otomatis memperbaiki izin akses; serta membedakan uji ping dari uji layanan.

### Referensi

- [RFC 1918: rentang IPv4 privat](https://www.rfc-editor.org/rfc/rfc1918).
- [Python ipaddress](https://docs.python.org/3/library/ipaddress.html).
- [MDN: gambaran HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

---

<a id="bab-04"></a>

## Bab 04: Membaca dan mengelola Linux

### Tujuan dan prasyarat

Anda akan menavigasi folder, mencari teks, memahami izin file, dan mengamati proses Linux. Gunakan terminal Linux dari Bab 01. Perintah berikut ditujukan untuk Bash pada Linux; jangan menempelkannya ke PowerShell. Jika belum punya Linux, baca konsep lalu gunakan lingkungan latihan resmi seperti OverTheWire Bandit untuk berlatih sesuai aturannya.

### Konsep

Linux banyak digunakan pada server. Anda perlu memahami operasi sehari-hari sebelum menguji keamanannya. `/` adalah akar sistem file. Folder `/home` biasanya berisi ruang pengguna, `/etc` menyimpan banyak konfigurasi, dan `/var/log` menyimpan banyak log. Susunannya dapat berbeda antarlingkungan.

Linux membedakan huruf besar dan kecil pada sistem file yang lazim dipakai: `Nota.txt` dan `nota.txt` dapat menjadi dua file. Nama yang diawali titik seperti `.config` biasanya tersembunyi dari daftar biasa. `ls -a` menampilkannya. File tersembunyi tetap tunduk pada izin; tanda titik bukan perlindungan kerahasiaan.

Izin dasar dibagi menjadi **owner**, **group**, dan **others**. Untuk file, `r` berarti membaca, `w` menulis, dan `x` mengeksekusi. Untuk direktori, `r` membantu melihat daftar nama, `w` mengubah entri, dan `x` melewati direktori untuk mengakses isinya. Menghapus file terutama terkait izin direktori induk, sehingga pemahaman izin file saja belum cukup.

Angka `4`, `2`, dan `1` mewakili read, write, dan execute. `chmod 600 catatan.txt` memberi owner `4+2`, group `0`, others `0`. Hasilnya `rw-------`. `chmod 644` memberi owner baca/tulis dan pihak lain baca. Pengaturan yang tepat bergantung fungsi data; memberi `777` ke seluruh folder untuk menghilangkan error akan membuka akses yang tidak diperlukan.

Pengguna **root** mempunyai kewenangan luas. `sudo` dapat menjalankan perintah dengan identitas lain sesuai kebijakan. Jangan menambahkan `sudo` pada perintah yang belum Anda pahami. Untuk folder latihan milik sendiri, operasi dasar di bab ini tidak memerlukannya.

### Praktik

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

`~` menunjuk home pengguna saat ini. `mkdir -p` membuat direktori jika belum ada, `cd` memindahkan direktori kerja, dan `pwd` menunjukkan lokasinya. `printf` menulis tiga baris melalui `>` ke file. Redirection `>` menimpa isi lama, sedangkan `>>` menambahkan isi ke bagian akhir. Periksa nama sebelum menulis.

Jalankan satu baris dahulu, baca hasilnya, lalu lanjutkan. Perintah yang berhasil tidak selalu mencetak pesan: `cd` biasanya mengubah lokasi tanpa menulis “berhasil”. Gunakan `pwd` untuk memeriksanya. Untuk membuat salinan sebelum percobaan, jalankan `cp pesanan.txt pesanan-salinan.txt`, lalu `cat pesanan-salinan.txt`. Nama kedua adalah tujuan; gunakan nama baru bila salinan dengan nama itu sudah ada.

#### 2. Cari dan hitung

```bash
grep -n 'selesai' pesanan.txt
wc -l pesanan.txt
head -n 2 pesanan.txt
tail -n 1 pesanan.txt
```

`grep -n` mencari baris yang mengandung teks lalu menampilkan nomor baris. `wc -l` menghitung karakter akhir baris, sehingga cocok untuk file latihan yang tiap barisnya diakhiri newline. `head` membaca awal dan `tail` membaca akhir. Pada file ini, status selesai ada di baris 1 dan 3, jumlah baris 3, serta baris terakhir `L003 selesai`.

Untuk pola yang dapat mengandung karakter bermakna khusus, pertimbangkan `grep -F` agar mencarinya sebagai teks literal. Perbedaan antara teks biasa dan pola pencarian akan penting saat membaca log.

#### 3. Periksa izin lalu ubah file sendiri

```bash
chmod 600 pesanan.txt
ls -l pesanan.txt
id
```

Awal kolom izin file akan menyerupai `-rw-------`. Tanda pertama `-` menandakan file biasa. `id` menunjukkan identitas serta grup Anda. Owner masih dapat membaca file. Percobaan ini tidak membuktikan pembatasan terhadap pengguna lain karena Anda belum menjalankannya sebagai identitas lain; catat batas bukti tersebut.

#### 4. Amati proses dan dokumentasi

```bash
ps -u "$USER" -o pid,comm
man chmod
```

Perintah pertama meminta proses milik pengguna saat ini. `$USER` adalah variabel shell; tanda kutip menjaga nilainya tetap satu argumen. `man chmod` membuka manual, dan tombol `q` keluar. Pada instalasi minimal, paket manual mungkin belum tersedia. Anda dapat membaca dokumentasi resmi dari browser.

Layanan pada banyak distribusi dikelola oleh systemd. Jika lingkungan Anda memakai systemd, `systemctl --type=service --state=running` menampilkan layanan berjalan. WSL, container, atau lingkungan pendidikan dapat memakai pengaturan berbeda. Error “not booted with systemd” menjelaskan lingkungan, bukan otomatis masalah keamanan.

### Hasil yang diharapkan

Anda memiliki file tiga baris dan dapat menjelaskan output pencarian serta izin `600`. Anda mengetahui folder kerja dan tidak mengubah file konfigurasi sistem. Simpan salinan perintah serta hasil yang relevan di jurnal.

### Jika macet

`No such file or directory` biasanya meminta pemeriksaan nama dan direktori. `Permission denied` pada file latihan bisa berarti owner berbeda atau folder induk membatasi akses. Gunakan `pwd`, `ls -ld .`, dan `ls -l pesanan.txt` untuk memeriksa sebelum mengubah izin. Jangan menjalankan perintah rekursif pada `/` atau home hanya untuk memperbaiki satu file.

### Latihan

Tambahkan `L004 diproses` menggunakan `>>`, lalu hitung kembali. Prediksi hasil sebelum menjalankan. Jelaskan arti izin `640` dan alasan folder yang dapat dibaca belum tentu dapat dilewati. Sebagai pendalaman, selesaikan beberapa level awal Bandit dan simpan penjelasan konsep tanpa memublikasikan password tantangan.

<details>
<summary>Petunjuk dan pembahasan setelah mencoba</summary>

Gunakan `printf '%s\n' 'L004 diproses' >> pesanan.txt`. Jumlah baris menjadi empat jika langkah tambahan hanya dijalankan sekali; menjalankannya lagi menambah baris kelima. Izin `640` memberi owner baca/tulis, group baca, dan others tanpa izin. Pada direktori, izin `x` diperlukan untuk melewati direktori sehingga mengetahui nama di dalamnya belum berarti boleh mengakses isi file. Jika hasil jumlah baris berbeda, baca isi terlebih dahulu sebelum menganggap alatnya salah.

</details>

### Bukti kelulusan

Anda lulus jika dapat membuat, membaca, mencari, dan menyalin file tanpa GUI; menerangkan `600`, `640`, dan `644`; serta mengetahui kapan perlu membaca manual. Kecepatan mengetik tidak menjadi syarat.

### Referensi

- [GNU Coreutils: izin file](https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html).
- [Ubuntu: command line untuk pemula](https://ubuntu.com/tutorials/command-line-for-beginners).
- [OverTheWire Bandit](https://overthewire.org/wargames/bandit/).

---

<a id="bab-05"></a>

## Bab 05: Memahami Windows dan PowerShell

### Tujuan dan prasyarat

Anda akan membaca objek PowerShell, mengamati proses dan layanan, serta mengenali event log. Gunakan Windows milik Anda. Pembaca Linux/macOS dapat mengerjakan latihan log sintetis dengan Python pada bab deteksi, lalu kembali ke sini ketika memiliki lingkungan Windows berizin.

### Konsep

PowerShell mempunyai perintah yang disebut **cmdlet**, biasanya memakai pola kata kerja dan kata benda seperti `Get-Process`. Hasilnya sering berupa **objek** dengan properti, bukan sekadar teks. `ProcessName` dan `Id` adalah properti proses. Dengan begitu Anda bisa menyaring berdasarkan nilai tanpa menebak letak kolom.

**Registry** menyimpan banyak konfigurasi Windows dan aplikasi. **Service** menjalankan fungsi latar belakang. **Scheduled task** menjalankan tugas berdasarkan jadwal atau pemicu. Ketiganya memiliki kegunaan sah dan juga dapat menjadi tempat munculnya perubahan yang perlu diperiksa. Sebuah entri yang asing belum cukup untuk menyebutnya berbahaya.

Windows memakai identitas seperti akun lokal dan akun organisasi. **SID**, atau security identifier, adalah identitas internal sebuah akun atau grup. **ACL**, access control list, berisi aturan akses pada objek seperti file. Izin dapat diwariskan dari folder induk. **UAC** memberi pembatas antara aktivitas sehari-hari dan operasi yang membutuhkan elevasi; tetap periksa asal program sebelum menyetujui permintaannya.

**Event log** mencatat kejadian dari sumber tertentu. Satu event punya waktu, provider, ID, level, dan detail. Nomor event perlu dibaca bersama providernya. Tidak semua kejadian tercatat: konfigurasi audit, kapasitas penyimpanan, dan masa retensi memengaruhi bukti yang tersedia.

### Praktik

#### 1. Belajar memeriksa properti

Jalankan di PowerShell biasa:

```powershell
Get-Process | Select-Object -First 5 ProcessName, Id
Get-Service | Select-Object -First 5 Name, Status
Get-Help Get-Process
```

`Select-Object` memilih properti dan membatasi jumlah objek. `Get-Help` meminta bantuan lokal; isi bantuan mungkin ringkas jika berkas bantuan lengkap belum tersedia. Anda dapat membaca halaman Microsoft Learn tanpa mengubah pengaturan komputer.

#### 2. Saring data sintetis

Ketik blok berikut di PowerShell. Semua nama dan kejadian merupakan rekaan:

```powershell
$kejadianLab = @(
    [pscustomobject]@{User='kasir-demo'; Result='gagal'},
    [pscustomobject]@{User='kasir-demo'; Result='berhasil'},
    [pscustomobject]@{User='pemilik-demo'; Result='gagal'}
)
$kejadianLab | Where-Object Result -eq 'gagal'
$kejadianLab | Group-Object Result | Select-Object Name, Count
```

`@(...)` membuat kumpulan objek. `[pscustomobject]` memberi properti bernama. `Where-Object` memilih yang memenuhi syarat; `-eq` berarti sama dengan. `Group-Object` mengelompokkan nilai yang sama. Anda akan menemukan dua kejadian gagal dan satu berhasil. Variabel ini hidup di sesi terminal; membuka terminal baru tidak otomatis memulihkannya.

#### 3. Baca log sistem dengan batas kecil

```powershell
Get-WinEvent -LogName System -MaxEvents 5 |
    Select-Object TimeCreated, Id, ProviderName, LevelDisplayName
```

Perintah ini membaca lima event terbaru pada log System tanpa mengubahnya. Angka dan sumbernya berbeda antarperangkat. Pilih satu event, lalu baca penjelasan providernya di dokumentasi Microsoft. Jangan memublikasikan pesan lengkap sebelum memeriksa apakah ada nama mesin, akun, atau path pribadi.

Log Security dapat memerlukan hak lebih tinggi dan kebijakan audit tertentu. Anda tidak perlu mengubah audit atau meminta hak administrator untuk menyelesaikan bab ini. Gunakan event sintetis bila perangkat kerja membatasi pembacaan log. Event login gagal seperti 4625 menjadi berguna setelah Anda memahami konteks audit dan jenis logon; ketiadaannya tidak membuktikan bahwa tidak ada percobaan akses.

#### 4. Baca izin file latihan

Dari folder tutorial:

```powershell
Get-Acl hasil-belajar/cek-lab.txt | Format-List
```

Cari owner dan entri akses. Hasil ini mengamati aturan yang ada; Anda belum mengubahnya. `Format-List` membantu tampilan manusia, sehingga letakkan perintah pemformatan di akhir alur. Untuk analisis lanjutan, pertahankan objek mentah sampai operasi penyaringan selesai.

### Hasil yang diharapkan

Anda bisa memilih properti, menyaring dua kejadian gagal, dan membaca metadata event atau memakai pengganti sintetis. Anda dapat menjelaskan bahwa izin file berbeda dari status program sedang berjalan.

### Jika macet

`Get-WinEvent` bergantung pada Windows; PowerShell di Linux tidak menyediakan akses ke log Windows lokal. `Access is denied` meminta pemeriksaan hak dan kebijakan perangkat, bukan penonaktifan perlindungan. Jika PowerShell menolak skrip, contoh interaktif bab ini dapat diketik langsung; Anda tidak perlu mengubah execution policy global.

### Latihan

Tambahkan dua objek: satu kegagalan milik `kasir-demo` dan satu keberhasilan milik `pemilik-demo`. Prediksi jumlah per hasil, lalu periksa. Jelaskan mengapa tiga login gagal belum cukup untuk menyimpulkan akun sudah diambil alih. Sebutkan bukti tambahan yang ingin Anda lihat.

<details>
<summary>Petunjuk penambahan dan pembahasan</summary>

Edit blok pembentukan `$kejadianLab`, tambahkan dua objek sebelum penutup `)`, dan beri koma pemisah antarobjek. Jalankan kembali blok tersebut agar variabel memuat data baru, lalu ulangi dua perintah penyaringan. Hasil akhir seharusnya tiga gagal dan dua berhasil. Mengedit teks di editor tanpa menjalankan ulang pembentukan variabel tidak mengubah isi variabel pada sesi PowerShell yang sudah berjalan. Jumlah gagal tidak menunjukkan apakah password akhirnya ditebak; Anda perlu konteks waktu, asal, hasil login berikutnya, dan aktivitas akun.

</details>

### Bukti kelulusan

Simpan query data sintetis dan hasil hitungnya. Anda lulus jika mengerti objek, properti, filter, serta batas informasi dari event log. Untuk event asli, cukup catat ID, provider, dan penjelasan umum tanpa data pribadi.

### Referensi

- [Microsoft: Get-WinEvent](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent).
- [Microsoft: Where-Object](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/where-object).
- [Microsoft: Get-Acl](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-acl).

---

<a id="bab-06"></a>

## Bab 06: Menulis skrip kecil dan mencatat perubahan

### Tujuan dan prasyarat

Anda akan menulis Python untuk menghitung kejadian sintetis, mengenali Bash, dan menyimpan perubahan dengan Git. Selesaikan latihan folder dan terminal sebelumnya. Anda belum perlu hafal sintaks; baca setiap baris dan ubah satu hal untuk melihat pengaruhnya.

### Konsep

Pemrograman membantu mengulang pekerjaan dengan aturan yang konsisten. Di Laundry Aman, petugas dapat membaca sepuluh baris log secara manual. Untuk ribuan baris, skrip dapat menghitung dan memilih data yang perlu diperiksa manusia.

**Variabel** memberi nama pada nilai. **String** menyimpan teks, **integer** menyimpan bilangan bulat, dan **list** menyimpan urutan nilai. **Dictionary** menghubungkan kunci dengan nilai, mirip label pada laci. **Loop** mengulangi langkah. **Kondisi** memilih tindakan berdasarkan syarat. **Fungsi** mengemas pekerjaan agar dapat dipanggil dan diuji dengan masukan berbeda.

Python cocok untuk pengolahan data dan otomasi. Bash membantu merangkai perintah Linux. PowerShell mengolah objek Windows. JavaScript penting untuk memahami browser, SQL untuk basis data, dan C membantu memahami memori pada materi lanjutan. Mulai dengan satu bahasa sampai Anda mampu membaca error dan menguji hasil.

**Git** mencatat versi file. Sebuah **commit** menyimpan potret perubahan beserta pesan. **Repository** adalah folder kerja beserta riwayat Git-nya. Git dapat dipakai tanpa GitHub dan tanpa internet. GitHub adalah salah satu layanan untuk berbagi repository. File yang masuk riwayat dapat tetap tersedia dalam commit lama setelah Anda menghapus versi terbarunya, jadi cegah rahasia masuk sejak awal.

### Praktik

#### 1. Buat program pertama

Di editor, simpan file `hasil-belajar/hitung_login.py` dengan isi:

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

Dari folder tutorial, Windows PowerShell:

```powershell
py hasil-belajar/hitung_login.py
```

Linux/macOS:

```bash
python3 hasil-belajar/hitung_login.py
```

`def` mendefinisikan fungsi. `jumlah = 0` menyiapkan penghitung. `for` memeriksa setiap elemen, `if` menguji kesamaan, dan `+= 1` menambah satu. `return` mengembalikan nilai. Indentasi merupakan bagian sintaks Python; gunakan empat spasi untuk satu tingkat. `assert` memeriksa dugaan hasil dan menghentikan program jika tidak cocok. Assert berguna di latihan, tetapi jangan menjadikannya satu-satunya pemeriksaan keamanan aplikasi karena mode optimasi Python dapat menonaktifkannya.

**Ikuti perubahan nilainya di kertas.** Fungsi belum menghitung saat baris `def` dibaca; Python menyiapkan definisinya. Pemanggilan `hitung_gagal(kejadian)` memberikan list ke nama `hasil_login`, lalu Python menjalankan isi fungsi. Tabel berikut menunjukkan satu putaran untuk setiap anggota list:

| Elemen yang sedang dibaca | Nilai `jumlah` sebelumnya | Apakah sama dengan `gagal`? | Nilai setelah langkah |
|---|---:|---|---:|
| `berhasil` | 0 | Tidak | 0 |
| `gagal` | 0 | Ya | 1 |
| `gagal` | 1 | Ya | 2 |
| `berhasil` | 2 | Tidak | 2 |
| `gagal` | 2 | Ya | 3 |

`=` memberi nilai, sedangkan `==` membandingkan dua nilai. Kedua tanda itu melakukan pekerjaan berbeda. Pada list kosong, loop tidak melakukan putaran sehingga fungsi mengembalikan nol. Cocokkan penjelasan tersebut dengan pengujian pertama sebelum mengubah kode.

Keluaran yang diharapkan adalah `Login gagal: 3`. Program tidak mencetak hasil assert yang lulus. Ubah satu elemen dari `gagal` menjadi `berhasil`; prediksi angka sebelum menjalankan kembali.

#### 2. Bedakan data valid dan data asing

Tambahkan teks `GAGAL` dengan huruf besar ke list. Hitungan tidak naik karena fungsi mencari teks `gagal` persis. Ini keputusan definisi data. Pada sistem nyata, Anda perlu memutuskan apakah nilai berbeda itu dianggap sah, perlu normalisasi, atau merupakan kesalahan format. Jangan mengubah semua input tanpa memahami kontraknya.

Tambahkan pengujian `assert hitung_gagal(["GAGAL"]) == 0`. Hasil ini mendokumentasikan perilaku sekarang. Jika aturan bisnis berubah agar keduanya sama, tulis harapan baru dahulu, lihat kegagalannya, lalu ubah fungsi dan jalankan seluruh pemeriksaan lagi.

#### 3. Kenali skrip shell kecil

Di Linux Bash, jalankan:

```bash
for status in berhasil gagal gagal; do
  printf 'Hasil latihan: %s\n' "$status"
done
```

Loop menjalankan `printf` tiga kali. Kutip `"$status"` menjaga nilai sebagai satu argumen. Untuk input tak tepercaya, hindari menyusunnya menjadi perintah shell. Dalam Python, gunakan API langsung bila tersedia, bukan menggabungkan teks masukan ke `os.system`.

#### 4. Simpan riwayat lokal jika Git tersedia

Periksa `git --version`. Jika belum tersedia, Anda boleh melanjutkan bab tanpa Git lalu memasangnya dari sumber resmi saat diperlukan. Buat folder latihan terpisah melalui pengelola file, misalnya `git-latihan-laundry`, lalu buka terminal di dalamnya. Jangan menjalankan `git init` di home atau di repository lain.

```text
git init
git status
```

Buat `catatan.md` menggunakan editor dan tulis satu pelajaran. Kemudian:

```text
git add catatan.md
git diff --cached
git -c user.name="Pelajar Lab" -c user.email="pelajar@example.invalid" commit -m "Catat latihan pertama"
git log --oneline
```

`git add` menyiapkan file untuk commit. `git diff --cached` memperlihatkan isi yang akan disimpan. Dua opsi `-c` menyediakan identitas dummy khusus perintah ini tanpa mengubah konfigurasi global. Alamat `.invalid` memang dipakai sebagai contoh, bukan alamat pengiriman. Jangan menjalankan push; latihan ini selesai secara lokal.

### Hasil yang diharapkan

Program menghitung tiga kegagalan, pengujian contoh lulus, dan perubahan data mengubah keluaran sesuai prediksi. Jika mengerjakan bagian Git, Anda memiliki satu commit lokal dengan file yang sudah diperiksa isinya.

### Jika macet

`SyntaxError` meminta pemeriksaan tanda baca dan struktur; `IndentationError` meminta pemeriksaan spasi. `NameError` biasanya berarti nama variabel belum tersedia atau salah eja. Bacalah baris terakhir traceback, kemudian nomor baris yang ditunjuk. Perbaiki satu kesalahan dan jalankan ulang.

### Latihan

Buat fungsi `hitung_berhasil` dan uji list kosong, satu keberhasilan, serta campuran hasil. Tulis juga alasan hitungan gagal total tidak bisa menentukan apakah ada serangan: Anda masih memerlukan waktu kejadian, sumber, pola, dan konteks penggunaan.

**Kurangi bantuan:** salin fungsi pertama dengan nama `hitung_berhasil`, lalu tentukan sendiri bagian kondisi yang perlu berubah. **Pindah kasus:** Laundry Aman mempunyai status `dicuci`, `selesai`, `selesai`, dan `diantar`. Tulis fungsi penghitung status selesai tanpa membuka solusi, lalu uji list kosong dan list tanpa status selesai.

<details>
<summary>Pembahasan penelusuran dan pindah kasus</summary>

Untuk `hitung_berhasil`, bandingkan tiap elemen dengan string `berhasil`; pola loop dan penghitung tetap sama. Pada kasus status laundry, dua elemen cocok dengan `selesai`, sehingga hasilnya dua. List kosong dan list tanpa kecocokan sama-sama menghasilkan nol. Mengganti judul output saja tidak mengubah aturan hitung; kondisi di dalam fungsi yang menentukan kecocokan. Jika Anda menulis nama fungsi baru tetapi masih memanggil fungsi lama, perubahan hasil belum menguji fungsi baru tersebut.

</details>

### Bukti kelulusan

Anda dapat menerangkan fungsi tanpa membaca komentar, membuat satu pengujian yang gagal karena bug sengaja, lalu memperbaikinya. Simpan versi sebelum dan sesudah melalui Git atau salinan file yang diberi nama jelas.

### Referensi

- [Tutorial resmi Python](https://docs.python.org/3/tutorial/).
- [Git init](https://git-scm.com/docs/git-init) dan [Git diff](https://git-scm.com/docs/git-diff).
- [GNU Bash manual](https://www.gnu.org/software/bash/manual/bash.html).

---

<a id="bab-07"></a>

## Bab 07: Melihat cara kerja website dari dekat

### Tujuan dan prasyarat

Anda akan menjalankan server file di loopback, membaca request dan response HTTP, serta memahami peran browser dan basis data. Selesaikan Bab 03 dan 06. Latihan hanya menyajikan folder berisi data dummy. Server bawaan Python cocok untuk demonstrasi lokal ini, bukan layanan produksi.

### Konsep

Browser bertindak sebagai **client** yang meminta sesuatu. **Server** menerima request dan mengirim response. URL `http://127.0.0.1:8000/nota.txt` terdiri dari skema `http`, host `127.0.0.1`, port `8000`, dan path `/nota.txt`. Port dapat dihilangkan jika memakai port bawaan skemanya.

Request punya **method**, tujuan, header, dan kadang body. `GET` biasanya meminta representasi sumber daya. `POST` lazim dipakai untuk mengirim data atau memulai tindakan. Header berisi metadata, misalnya jenis konten. Body membawa isi pesan. Response punya status, header, dan body. `200` menunjukkan permintaan berhasil dalam konteks operasi itu; `404` berarti sumber daya tidak ditemukan; `500` menyatakan kegagalan di sisi server. Kode `200` saja tidak menjamin logika bisnis benar.

HTTP tidak otomatis mengingat identitas pengguna di setiap request. Aplikasi dapat memakai **cookie**, yaitu data yang browser simpan dan kirim sesuai aturan domain, path, dan atributnya. **Session** biasanya menghubungkan pengenal tertentu dengan keadaan login. Cookie sesi perlu diperlakukan sebagai rahasia. Cookie tidak sama dengan password, tetapi penguasaannya dapat memberi akses sampai sesi berakhir atau dicabut.

**HTML** menyusun dokumen, **CSS** mengatur tampilan, dan **JavaScript** menjalankan logika di browser. Pengguna menguasai browser miliknya, sehingga server tidak boleh mempercayai pembatasan yang hanya berada di tampilan. Tombol admin yang disembunyikan tetap memerlukan pemeriksaan izin di server.

Basis data menyimpan informasi terstruktur. Dalam model relasional, **table** seperti lembar data, **row** seperti satu pesanan, dan **column** seperti ID atau status. **SQL** adalah bahasa untuk meminta atau mengubah data tersebut. **API** menyediakan cara terstruktur bagi program untuk berkomunikasi. API pesanan tetap membutuhkan pemeriksaan identitas dan hak akses, sama seperti halaman web.

### Praktik

#### 1. Buat folder khusus yang akan disajikan

Di folder tutorial, buat folder `hasil-belajar/web-lab` melalui pengelola file. Buat file `nota.txt` di dalamnya, berisi:

```text
Laundry Aman
Pesanan demo L001
Status: siap diambil
```

Folder ini hanya boleh berisi materi dummy. Jangan menyajikan home, folder kerja kantor, atau folder yang mengandung secret. Python dapat menampilkan daftar folder bila halaman index tidak tersedia.

#### 2. Nyalakan server lokal

Windows PowerShell, dari folder tutorial:

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

Linux/macOS:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-lab
```

`-m` menjalankan modul bawaan. `8000` memilih port, `--bind` membatasi alamat dengar, dan `--directory` menentukan folder. Terminal tetap sibuk karena proses melayani request. Biarkan terminal ini terbuka, lalu buka `http://127.0.0.1:8000/nota.txt` di browser.

Anda kini memakai dua jendela: **terminal server** untuk menjalankan layanan dan **browser** untuk meminta file. Klik bilah alamat browser, ketik URL lengkap, lalu tekan Enter. Jangan mengetik URL sebagai perintah PowerShell dan jangan menutup terminal server karena terlihat “diam”. Setelah browser meminta nota, terminal dapat mencetak catatan permintaan. Hal itu membantu menghubungkan tindakan pada browser dengan proses server.

#### 3. Periksa request di browser

Buka Developer Tools melalui menu browser atau F12, pilih tab Network, lalu muat ulang halaman. Pilih request `nota.txt`. Cari method, URL, status, response headers, serta isi response. Browser mungkin meminta favicon; request tambahan itu tidak berasal dari isi nota.

**Langkah observasi kecil:** buka tab Network terlebih dahulu, baru tekan tombol muat ulang halaman. Jika daftar kosong, permintaan mungkin sudah terjadi sebelum pencatatan dimulai. Pilih baris yang namanya `nota.txt`; catat `200` sebagai status dan teks nota sebagai isi. Anda tidak perlu memahami seluruh kolom. Selanjutnya ubah hanya bagian nama file pada URL agar perbandingannya jelas.

Kemudian buka `http://127.0.0.1:8000/tidak-ada.txt`. Server mengembalikan `404`. Bandingkan kedua request. Anda sudah mempunyai satu kasus berhasil dan satu gagal yang bisa diulang tanpa menghubungi sistem orang lain.

Jika curl tersedia, buka terminal kedua. Windows PowerShell:

```powershell
curl.exe -i http://127.0.0.1:8000/nota.txt
```

Linux/macOS:

```bash
curl -i http://127.0.0.1:8000/nota.txt
```

`-i` menyertakan response headers bersama body. Windows memakai `curl.exe` agar tidak tertukar dengan alias pada versi PowerShell tertentu. Hasilnya akan menyebut status HTTP dan teks nota. Versi HTTP pada response dapat berbeda dari website lain; yang diamati adalah server sederhana pada mesin Anda.

#### 4. Baca contoh query

Bayangkan tabel pesanan mempunyai kolom `id`, `owner`, dan `status`. Query berikut berarti meminta status pesanan bernomor L001:

```sql
SELECT status FROM pesanan WHERE id = 'L001';
```

Query tersebut belum memeriksa siapa yang meminta. Jika aplikasi memanggilnya untuk pengguna mana pun, pelanggan lain mungkin memperoleh data yang bukan haknya. Bab otorisasi dan web security akan memisahkan dua masalah: keamanan penyusunan query serta pemeriksaan hak atas objek.

#### 5. Hentikan server

Kembali ke terminal server dan tekan Ctrl+C. Muat ulang halaman dengan cache browser dinonaktifkan melalui Developer Tools. Koneksi baru seharusnya gagal karena tidak ada server yang melayani port tersebut. Jangan meninggalkan proses latihan berjalan tanpa tujuan.

### Hasil yang diharapkan

Anda mengamati response sukses dan `404`, membaca header serta body, lalu menghentikan server. Catatan Anda menerangkan peran setiap bagian URL dan alasan folder server dibatasi.

### Jika macet

`Address already in use` berarti port sedang dipakai; pilih 8001 dan ubah URL sesuai port baru. `Connection refused` biasanya meminta pemeriksaan proses dan port. Pastikan Anda membuka `http`, bukan `https`, pada server contoh ini. Jangan menghilangkan `--bind 127.0.0.1` atau menonaktifkan firewall sebagai jalan pintas.

### Latihan

Tambahkan file dummy kedua, minta melalui browser, lalu bandingkan path dan ukuran response. Jelaskan bagian mana yang akan berubah jika server memerlukan login. Sebutkan mengapa status `404` dan tampilan tombol yang tersembunyi belum cukup untuk membuktikan perlindungan data.

**Kasus diagnosis:** satu teman mendapat `404`, sementara teman lain mendapat pesan gagal tersambung. Tentukan pemeriksaan pertama untuk masing-masing tanpa mengubah firewall atau memasang ulang Python.

<details>
<summary>Pembahasan dua kegagalan yang berbeda</summary>

`404` berarti Anda mendapat jawaban HTTP dari server; periksa nama/path file dan folder yang disajikan. Gagal tersambung berarti browser belum memperoleh jawaban HTTP tersebut; periksa apakah server masih berjalan serta alamat dan portnya cocok. Ini pemeriksaan awal, bukan kesimpulan universal tentang seluruh penyebab. Mengganti banyak pengaturan sekaligus akan menyulitkan penentuan langkah yang memperbaiki masalah.

</details>

### Bukti kelulusan

Simpan tabel dua request berisi method, path, status, dan tujuan percobaan. Anda lulus jika dapat menjelaskan aliran browser ke server ke data, serta menunjukkan server sudah berhenti setelah latihan.

### Referensi

- [Python http.server](https://docs.python.org/3/library/http.server.html): opsi bind, folder, dan batas penggunaan.
- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
- [MDN: HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

---

<a id="bab-08"></a>

## Bab 08: Hash, enkripsi, TLS, dan penyimpanan password

### Tujuan dan prasyarat

Anda akan membedakan encoding, hashing, enkripsi, serta tanda tangan digital. Anda juga akan menguji perubahan hash dengan data buatan sendiri. Selesaikan Bab 06 dan 07. Tidak perlu matematika tingkat lanjut untuk mengikuti praktik ini.

### Konsep

Laundry Aman mengirim nota melalui internet dan menyimpan data pelanggan. Kebutuhannya berbeda: menjaga isi pesan agar tidak terbaca pihak lain, mengetahui apakah file berubah, serta memastikan pesan berasal dari pihak yang diharapkan. Satu alat tidak otomatis memenuhi seluruh kebutuhan itu.

| Istilah | Fungsi | Contoh pemakaian |
|---|---|---|
| Encoding | Mengubah bentuk representasi agar cocok dikirim atau disimpan | Base64 untuk merepresentasikan byte sebagai teks |
| Hash | Menghasilkan ringkasan berukuran tetap untuk algoritma tertentu | Memeriksa perubahan file dengan SHA-256 |
| Enkripsi | Menyembunyikan isi dengan kunci | Melindungi data saat disimpan atau dikirim |
| Tanda tangan digital | Memverifikasi asal pesan dan perubahan dengan pasangan kunci | Memeriksa pembaruan perangkat lunak |

Base64 dapat dikembalikan tanpa rahasia sehingga tidak melindungi password. Hash dirancang sebagai fungsi satu arah, tetapi penyerang dapat menebak masukan yang mudah lalu membandingkan hash-nya. Karena itu hash password pendek tetap dapat ditebak. Hash file juga tidak membuktikan asal file bila penyerang dapat mengganti file dan nilai hash pembanding sekaligus.

**Enkripsi simetris** memakai kunci rahasia yang sama untuk enkripsi dan dekripsi. **Kriptografi asimetris** memakai pasangan kunci publik dan privat, dengan operasi yang bergantung pada skema yang dipilih. Kunci publik boleh dibagikan; kunci privat harus dilindungi. Jangan menyederhanakan tanda tangan sebagai “enkripsi dengan kunci privat”; protokol tanda tangan memiliki rancangan dan pemeriksaan tersendiri.

**TLS** melindungi komunikasi antara endpoint. Pada koneksi HTTPS, browser memeriksa sertifikat server, lalu pihak-pihak melakukan handshake untuk menyiapkan perlindungan sesi. **Certificate authority**, atau CA, menandatangani sertifikat yang mengikat identitas seperti nama domain dengan kunci publik menurut aturan validasinya. **PKI** mencakup sistem pengelolaan kepercayaan dan sertifikat tersebut.

HTTPS membantu kerahasiaan serta integritas selama transmisi, tetapi halaman penipu juga bisa memiliki sertifikat valid untuk domain miliknya. Periksa nama domain yang Anda tuju. TLS juga tidak mencegah server yang sah menyimpan password dengan cara keliru.

Untuk password, gunakan fungsi khusus yang sengaja membutuhkan biaya komputasi dan memori, seperti Argon2id melalui library yang terawat. **Salt** adalah nilai unik per password yang disimpan bersama hasil hash; tujuannya bukan menjadi rahasia. Parameter biaya perlu disesuaikan dan diperbarui mengikuti panduan resmi. Buku ini tidak membangun sistem autentikasi produksi atau menyuruh Anda menciptakan algoritma kriptografi sendiri.

### Praktik

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

Windows PowerShell:

```powershell
py hasil-belajar/cek_hash.py
```

Linux/macOS:

```bash
python3 hasil-belajar/cek_hash.py
```

Awalan `b` membuat literal byte. Fungsi hash bekerja pada byte, bukan pada makna kalimat. `hexdigest()` menampilkan hasil sebagai karakter heksadesimal. SHA-256 menghasilkan 256 bit, yang dalam bentuk ini menjadi 64 karakter. Untuk dua contoh nota tersebut, hasil perbandingannya `False`.

Perubahan spasi, encoding, atau akhir baris juga mengubah byte. Dua dokumen yang terlihat sama dapat mempunyai hash berbeda. Saat memeriksa file unduhan, bandingkan hash dari file yang tepat dan sumber pembanding yang dipercaya.

#### 2. Uji dugaan tentang hash

Ganti `nota_ubah` agar sama persis dengan `nota_awal`. Perbandingan sekarang `True`, dan assert terakhir gagal. Kegagalan itu sesuai perubahan eksperimen; baca baris yang ditunjuk. Kembalikan isi yang berbeda setelah selesai.

Satu percobaan ini membuktikan perilaku pada dua masukan. Ia tidak membuktikan secara matematis bahwa algoritma bebas collision. **Collision** terjadi ketika dua masukan berbeda menghasilkan hash yang sama; ruang keluaran terbatas berarti collision ada secara teori. Algoritma kriptografis yang baik membuat pencariannya tidak praktis menurut analisis dan kemampuan yang diketahui.

#### 3. Amati sertifikat situs dokumentasi

Buka situs dokumentasi resmi melalui HTTPS, misalnya `https://docs.python.org/`. Gunakan informasi koneksi pada browser untuk melihat sertifikat. Catat nama domain, penerbit, dan masa berlaku tanpa menyalin informasi akun. Letak menu berbeda antarbrowser. Jangan melanjutkan melewati peringatan sertifikat untuk menyelesaikan latihan; periksa jam sistem serta domain yang diketik.

### Hasil yang diharapkan

Anda mendapat dua hash berbeda sepanjang 64 karakter dan dapat mengubah eksperimen hingga assert gagal dengan alasan yang dipahami. Anda juga dapat membaca identitas domain dari sertifikat atau mencatat bagian sertifikat sebagai belum dikerjakan jika sedang offline.

### Jika macet

Error “strings must be encoded before hashing” berarti Anda memberi teks ketika fungsi memerlukan byte. Untuk variabel teks, gunakan `.encode('utf-8')`. Hash file berbeda antarmesin dapat berasal dari akhir baris, bukan kerusakan alat. Jangan menghapus pemeriksaan sertifikat atau memakai algoritma lama untuk menyembunyikan error.

### Latihan

Terangkan pilihan untuk tiga kebutuhan: mendeteksi perubahan nota, merahasiakan isi backup, dan memeriksa asal pembaruan aplikasi. Jawaban harus mencakup pengelolaan kunci atau sumber hash yang dipercaya, bukan hanya nama algoritma. Jelaskan juga alasan password membutuhkan perlakuan berbeda dari hash file.

### Bukti kelulusan

Anda lulus jika dapat membedakan empat konsep pada tabel, menjelaskan batas hash tanpa sumber pembanding tepercaya, serta menyebutkan fungsi salt. Simpan kode eksperimen dan hasil yang membuktikan perubahan satu byte dapat mengubah hash contoh.

### Referensi

- [Python hashlib](https://docs.python.org/3/library/hashlib.html).
- [OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [MDN: Transport Layer Security](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security).

---

<a id="bab-09"></a>

## Bab 09: Identitas, login, dan hak akses

### Tujuan dan prasyarat

Setelah memahami HTTP dan hash di Bab 07–08, Anda akan memisahkan identitas, sesi login, dan izin tindakan. Target praktik: menyusun aturan akses Laundry Aman lalu menemukan keputusan yang keliru. Sediakan 2–3 sesi belajar dan folder catatan pribadi.

### Konsep

Petugas laundry menerima kartu pelanggan dan memeriksa nomor pesanan sebelum menyerahkan pakaian. Aplikasi memerlukan pemeriksaan serupa. **Authentication**, atau autentikasi, membuktikan siapa pengguna. **Authorization**, atau otorisasi, menentukan tindakan yang boleh ia lakukan. Alice yang berhasil login tetap tidak berhak melihat pesanan Bob.

**Session** adalah hubungan login yang berlanjut setelah pemeriksaan identitas. Server biasanya memberi browser sebuah pengenal sesi acak melalui cookie. Browser mengirim cookie itu pada permintaan berikutnya. Pengenal ini memiliki nilai seperti tiket masuk: orang yang mendapatkannya mungkin dapat memakai sesi tersebut. Karena itu aplikasi memerlukan HTTPS, masa berlaku, pencabutan sesi, dan rotasi pengenal setelah login atau perubahan hak akses.

Cookie mempunyai atribut dengan fungsi berbeda. `HttpOnly` membatasi pembacaan cookie lewat JavaScript; `Secure` membatasi pengiriman lewat HTTPS; `SameSite` membantu mengendalikan pengiriman lintas situs. Ketiganya tidak menggantikan pemeriksaan izin di server. Menyembunyikan tombol “Hapus pesanan” juga tidak membatasi permintaan yang seseorang buat tanpa tombol itu.

**MFA**, singkatan *multi-factor authentication*, menggabungkan faktor yang berbeda: sesuatu yang diketahui, dimiliki, atau melekat pada pengguna. Dua password masih berasal dari satu jenis faktor. Passkey menggunakan pasangan kunci dan mengikat autentikasi pada situs yang sesuai, sehingga membantu melawan phishing. Pemulihan akun tetap perlu dirancang: helpdesk yang memberi akses hanya berdasarkan nama pelanggan dapat merusak perlindungan login yang kuat.

**RBAC** memberi izin berdasarkan peran, misalnya kasir atau manajer. Aturan berbasis atribut juga memperhatikan cabang, pemilik pesanan, waktu, dan keadaan pesanan. Pegawai cabang A tidak otomatis boleh membaca seluruh pelanggan cabang B. Terapkan *least privilege*: berikan hak yang diperlukan untuk tugasnya, lalu tinjau kembali saat tugas berubah. OWASP menganjurkan penolakan akses secara bawaan dan pemeriksaan izin pada setiap permintaan. [Panduan otorisasi OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

OAuth memberi cara mendelegasikan akses; OpenID Connect menambahkan lapisan identitas di atas OAuth. SSO, *single sign-on*, membuat pengguna bisa masuk ke beberapa aplikasi melalui penyedia identitas. Anda cukup memahami pembagian peran ini dahulu. Implementasi protokol memerlukan library terawat dan pengujian khusus; menulis sistem login sendiri menjadi proyek lanjutan.

### Praktik

**1. Buat matriks akses.** Salin tabel berikut ke catatan. Data Alice, Bob, dan pesanan merupakan data latihan.

| Aktor | Objek | Tindakan | Keputusan yang benar |
|---|---|---|---|
| Alice | Pesanan Alice | Baca status | Izinkan |
| Alice | Pesanan Bob | Baca status | Tolak |
| Bob | Pesanan Alice | Ubah alamat | Tolak |
| Kasir cabang A | Pesanan cabang A | Tandai dibayar | Izinkan sesuai tugas |
| Kasir cabang A | Pengaturan pemilik | Tambah administrator | Tolak |
| Pengunjung belum login | Daftar seluruh pelanggan | Baca | Tolak |

**2. Ikuti alur satu permintaan.** Tulis urutan: browser mengirim permintaan, server memeriksa sesi, mengambil identitas dari sesi tepercaya, memeriksa hak terhadap objek, lalu membaca atau mengubah data. Jangan mengambil identitas pengguna dari parameter `user_id` yang bebas diganti pengunjung.

**3. Jalankan contoh lokal.** Dari folder utama tutorial, gunakan PowerShell:

```powershell
py labs/access_demo.py
```

Di Linux/macOS gunakan `python3 labs/access_demo.py`. Buka file contoh di editor. Temukan pemeriksaan `actor is None` dan perbandingan pemilik pesanan dengan `actor`. Parameter `actor` dalam contoh mewakili identitas yang sudah ditentukan server setelah login; aplikasi nyata tidak boleh mempercayai nilai ini dari browser. Tulis apa yang akan terjadi jika pemeriksaan pemilik dihapus, tanpa perlu menghapusnya. Program memakai data latihan di memori, sehingga tidak membutuhkan akun sungguhan.

**4. Uji desain pemulihan.** Bayangkan Alice kehilangan telepon. Tulis prosedur yang menyediakan jalur pemulihan, mencatat tindakan, dan mencabut sesi lama bila diperlukan. Jangan meminta pegawai mengirim kode pemulihan melalui chat umum. Pisahkan permintaan pengguna dari keputusan petugas yang berwenang.

### Hasil yang diharapkan

Anda punya matriks enam kasus dan diagram keputusan server. Contoh mengizinkan Alice membaca pesanan 101, menolak Bob membaca 101, dan menolak pengguna tanpa identitas. Anda dapat menjelaskan bahwa identitas yang benar belum tentu mempunyai izin terhadap objek tertentu.

### Jika macet

Jika program tidak ditemukan, pastikan terminal berada di folder yang berisi `labs`. Jika istilah sesi terasa abstrak, gunakan tiket penitipan barang sebagai analogi, lalu tulis kembali versi teknisnya. Saat aplikasi menolak permintaan, bedakan pengguna belum login dari pengguna yang sudah login tetapi tidak punya izin; aplikasi boleh menyamarkan keberadaan objek untuk mengurangi kebocoran informasi.

### Latihan

Tambahkan peran kurir yang hanya melihat alamat untuk pengiriman yang ditugaskan kepadanya. Buat empat kasus: tugas miliknya, tugas orang lain, tugas selesai, dan akun dinonaktifkan. Tentukan perilaku sesi saat pegawai keluar dari perusahaan. Jawab juga mengapa UUID yang sulit ditebak tetap membutuhkan otorisasi.

### Bukti kelulusan

Simpan matriks beserta keputusan dan alasan untuk sepuluh kasus. Anda lulus ketika dapat menjelaskan satu serangan akses lintas pelanggan, letak pemeriksaan yang memperbaikinya, dan satu cara menguji agar bug tidak muncul lagi.

### Referensi

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html): login dan pemulihan akun.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html): pemeriksaan izin.
- [PortSwigger: access control](https://portswigger.net/web-security/access-control): latihan resmi tentang akses objek.

---

<a id="bab-10"></a>

## Bab 10: Memperkuat perangkat dan menguji cadangan

### Tujuan dan prasyarat

Anda sudah mengenal akun, proses, layanan, dan jaringan. Bab ini mengajarkan **hardening**, yaitu mengurangi kesempatan sistem disalahgunakan melalui konfigurasi yang sesuai. Anda akan membuat baseline dan melakukan pemulihan file latihan. Sediakan 2–3 sesi; latihan file tidak memerlukan administrator.

### Konsep

Komputer kasir Laundry Aman mungkin dipakai membuka aplikasi penjualan, email, dan dokumen. Setiap aplikasi, akun, serta layanan menambah bagian yang perlu dirawat. **Attack surface** adalah bagian sistem yang bisa dijangkau atau dipengaruhi penyerang. Anda menguranginya dengan menghapus software yang tidak diperlukan, menutup akses yang tidak dipakai, dan membatasi hak pengguna.

**Baseline** merupakan keadaan awal yang disepakati: aplikasi apa yang boleh berjalan, siapa administrator, kapan pembaruan dipasang, dan bagaimana bukti dikumpulkan. Tanpa baseline, Anda sulit membedakan perubahan sah dengan masalah. Simpan versi baseline dan pemiliknya; “sudah aman” tidak memberi orang lain petunjuk untuk memeriksa ulang.

Patching memperbaiki kelemahan atau bug melalui pembaruan. Jadwal yang baik mencakup pemeriksaan kompatibilitas, pemasangan, verifikasi, dan jalan pemulihan jika aplikasi bisnis berhenti bekerja. Prioritas mengikuti paparan dan dampak. Server yang menerima permintaan internet memerlukan perhatian berbeda dari mesin latihan yang terputus dari jaringan.

Firewall membatasi komunikasi berdasarkan aturan. Antivirus membantu mengenali file atau perilaku berbahaya; EDR, *endpoint detection and response*, memberi visibilitas serta tindakan respons pada perangkat. IDS memberi peringatan terhadap aktivitas mencurigakan; IPS dapat memblokir aktivitas dalam jalur lalu lintas. Hasil alat tersebut memerlukan pemeriksaan manusia. Produk yang terpasang tetapi tidak mengirim log atau tidak diperbarui memberi perlindungan yang berbeda dari asumsi pemiliknya.

Backup menyimpan salinan untuk pemulihan. Snapshot VM berguna untuk kembali ke keadaan latihan, tetapi tidak menggantikan cadangan yang terpisah dari perangkat asal. Jika disk rusak, snapshot yang tersimpan pada disk itu juga terancam. Rencana backup perlu memikirkan salinan terpisah, pembatasan akses, enkripsi, dan pengujian restore. **RPO** menyatakan kehilangan data yang dapat diterima menurut waktu; **RTO** menyatakan target waktu pemulihan layanan. Laundry yang mencadangkan transaksi sekali sehari dapat kehilangan perubahan sejak cadangan terakhir.

### Praktik

**1. Buat inventaris fiktif.** Tulis tiga aset: komputer kasir, laptop pemilik, dan server latihan. Isi pemilik, fungsi, data yang disimpan, akses administrator, sumber pembaruan, dan cara backup. Tandai fakta yang belum Anda ketahui sebagai `UNKNOWN`.

**2. Tetapkan lima pemeriksaan baseline.** Untuk komputer kasir, pilih akun harian tanpa hak administrator, penguncian layar, software yang masih didukung, firewall aktif, dan backup yang pernah dipulihkan. Buat kolom keadaan saat ini, keadaan yang diinginkan, serta bukti. Periksa pengaturan melalui menu OS sendiri; jangan mengubah komputer kantor tanpa persetujuan pemilik.

**3. Simulasikan restore tanpa menghapus apa pun.** Dari folder tutorial, buka PowerShell dan jalankan:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/backup-demo
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: dicuci' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Destination hasil-belajar/backup-demo/pesanan.cadangan.txt
Set-Content -LiteralPath hasil-belajar/backup-demo/pesanan.txt -Value 'LA-001: data latihan berubah' -Encoding utf8
Copy-Item -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt -Destination hasil-belajar/backup-demo/pesanan.pulih.txt
Get-Content -LiteralPath hasil-belajar/backup-demo/pesanan.pulih.txt
Get-FileHash -LiteralPath hasil-belajar/backup-demo/pesanan.cadangan.txt,hasil-belajar/backup-demo/pesanan.pulih.txt -Algorithm SHA256
```

`New-Item` membuat folder, `Set-Content` menulis data latihan, dan `Copy-Item` membuat salinan. Pemulihan memakai nama baru agar file asal tetap tersedia. `Get-FileHash` menghitung sidik jari isi. Jika mengulang latihan, perintah menimpa file demo bernama sama; gunakan folder lain bila ingin mempertahankan percobaan sebelumnya.

Di Linux/macOS, lakukan urutan yang sama melalui pengelola file: buat file teks, duplikat sebagai cadangan, ubah file asal, lalu duplikat cadangan menjadi file pulih. Bandingkan isinya melalui editor. Jalur ini melatih pemulihan tanpa memerlukan perintah shell tambahan.

**4. Ukur hasil.** Catat waktu mulai dan selesai pemulihan. Nyatakan apakah Anda memenuhi target latihan RTO lima menit. Jika pesanan baru masuk setelah backup, tulis data mana yang hilang ketika kembali ke cadangan tersebut.

### Hasil yang diharapkan

File `pesanan.pulih.txt` berisi `LA-001: dicuci`. Hash file cadangan dan file pulih sama. File asal tetap berisi teks perubahan. Anda memahami bahwa latihan satu folder ini menguji proses restore, sementara cadangan sungguhan perlu tempat dan hak akses yang terpisah.

### Jika macet

Jika PowerShell melaporkan jalur tidak ada, jalankan perintah pembuatan folder lebih dahulu. Hash berbeda dapat menunjukkan perubahan isi, encoding, atau akhir baris; jangan mengedit salinan sebelum membandingkan. Jika backup produksi belum pernah diuji, tulis “restore belum diuji”, bukan “backup berhasil”.

### Latihan

Rancang pemulihan saat komputer kasir rusak pukul 16.00 dan backup terakhir pukul 12.00. Pesanan kertas tersedia selama gangguan. Tentukan urutan pemulihan, cara mencocokkan transaksi, dan siapa yang menyetujui layanan dibuka. Tambahkan kemungkinan akun backup ikut dicuri dan perbaiki rancangannya.

### Bukti kelulusan

Kumpulkan inventaris, baseline lima pemeriksaan, hash, catatan waktu restore, dan perkiraan kehilangan data. Anda harus bisa menjelaskan alasan setiap kontrol, dampaknya pada kasir, serta cara membatalkan perubahan jika aplikasi bermasalah.

### Referensi

- [CIS Controls v8](https://www.cisecurity.org/controls/v8): kerangka kontrol pertahanan yang dapat dinilai.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): pemeriksaan integritas file.

---

<a id="bab-11"></a>

## Bab 11: Memetakan ancaman dan menentukan prioritas

### Tujuan dan prasyarat

Anda sudah memahami jaringan, akses, dan hardening. Sekarang Anda akan menilai keamanan sebuah layanan sebelum memilih alat. Hasilnya berupa diagram aliran data dan daftar risiko Laundry Aman. Sediakan 2–4 sesi, kertas atau editor teks, serta catatan Bab 09–10.

### Konsep

**Aset** adalah sesuatu yang perlu dilindungi, seperti data pelanggan atau kemampuan menerima pesanan. **Ancaman** adalah kejadian atau pelaku yang dapat merugikan aset. **Kerentanan** adalah kelemahan yang memungkinkan kerugian. **Risiko** menggabungkan kemungkinan kejadian dan dampaknya dalam konteks tertentu. Password bersama merupakan kelemahan; mantan pegawai yang masih masuk adalah skenario ancaman; hilangnya catatan transaksi adalah salah satu dampaknya.

**Threat modeling** berarti memeriksa rancangan untuk menemukan cara sistem bisa disalahgunakan. Mulailah dengan fungsi bisnis: pelanggan melihat status cucian, kasir memperbarui pesanan, dan pemilik melihat laporan. Gambar tempat data masuk, berpindah, dan tersimpan. Tandai **trust boundary**, batas antara pihak atau komponen dengan tingkat kepercayaan berbeda. Browser pelanggan dan server memiliki batas kepercayaan; server harus memeriksa data dari browser.

STRIDE memberi enam pengingat: pemalsuan identitas (*spoofing*), perubahan tanpa izin (*tampering*), penyangkalan tindakan (*repudiation*), kebocoran informasi, gangguan layanan, dan kenaikan hak akses. Gunakan pengingat ini untuk mengajukan pertanyaan terhadap setiap aliran data. Anda tidak harus menghasilkan enam temuan pada setiap kotak. [OWASP Threat Modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) menjelaskan pendekatan pemodelan dan analisis ancaman.

**Vulnerability management** mencakup menemukan aset, mengidentifikasi kelemahan, memvalidasi temuan, memprioritaskan perbaikan, dan menguji ulang. Pemindai dapat membantu menemukan kandidat; Anda masih perlu memeriksa versi, konfigurasi, dan kondisi yang memungkinkan masalah terjadi. Port terbuka tidak otomatis berarti celah. Temuan tanpa bukti dapat membuang waktu pengembang.

CVE merupakan pengenal kerentanan publik. CVSS membantu menyatakan tingkat keparahan teknis; skor tersebut belum mencakup seluruh dampak pada usaha Anda. Sebuah layanan yang terekspos internet dan menyimpan transaksi dapat lebih mendesak daripada software bernilai CVSS lebih tinggi yang tidak terpasang. Catat ketidakpastian. Jangan memberi probabilitas seperti “93% akan diretas” tanpa metode dan data yang mendukungnya.

### Praktik

**1. Gambar aliran data.** Gunakan rancangan fiktif berikut:

```text
Pelanggan -> Browser -> HTTPS -> Aplikasi Laundry -> Database pesanan
Kasir    -> Browser -> HTTPS -> Aplikasi Laundry -> Log audit
Pemilik  -> Browser -> HTTPS -> Aplikasi Laundry -> Ekspor laporan
                                                -> Cadangan terpisah
```

Tulis data yang melewati tiap panah. Contohnya, permintaan status membawa pengenal pesanan dan sesi; jawaban seharusnya hanya membawa informasi yang boleh dibaca pengguna itu. Tandai batas internet ke aplikasi serta batas aplikasi ke database.

**2. Buat empat skenario.** Gunakan kalimat berstruktur: “Aktor melakukan tindakan melalui komponen sehingga aset mengalami dampak.” Contoh: “Pelanggan mengganti ID pesanan pada permintaan sehingga aplikasi mengirim alamat pelanggan lain.” Tambahkan akun pegawai lama yang belum dicabut, kegagalan backup, dan perubahan harga tanpa catatan audit.

**3. Beri penilaian yang dapat diperdebatkan.** Pakai skala latihan 1–3 untuk kemungkinan dan dampak, kemudian kalikan. Skala ini alat diskusi lokal, bukan perhitungan statistik.

| Skenario | Kemungkinan | Dampak | Nilai | Alasan awal |
|---|---:|---:|---:|---|
| Akses pesanan lintas pelanggan | 3 | 3 | 9 | Endpoint internet; belum ada pemeriksaan pemilik |
| Akun pegawai lama masih aktif | 2 | 3 | 6 | Proses keluar pegawai belum mempunyai pemilik |
| Cadangan gagal dipulihkan | 2 | 3 | 6 | Belum ada uji restore |
| Harga berubah tanpa jejak | 2 | 2 | 4 | Kasir berbagi akun |

Angka ini sengaja mengacu pada asumsi kasus latihan. Jika Anda menemukan pemeriksaan pemilik yang bekerja, nilai kemungkinan skenario pertama perlu ditinjau. Hindari mempertahankan skor hanya karena sudah tercantum dalam tabel.

**4. Buat tiket perbaikan.** Pilih skenario pertama. Isi pemilik tindakan, perubahan yang diminta, tanggal target latihan, cara pengujian, dan risiko yang tersisa. Kriteria selesai: Alice dapat membuka pesanannya sendiri dan ditolak saat meminta milik Bob; penolakan tercatat tanpa memuat data pribadi Bob.

**5. Lakukan verifikasi.** Jalankan ulang contoh akses Bab 09 dan cocokkan hasilnya dengan tiket. Bila perbaikan hanya menyembunyikan nomor pesanan pada layar, tiket belum memenuhi kriteria server. Tulis keputusan menerima risiko apabila sebuah kontrol belum dapat diterapkan, beserta pihak yang mempunyai wewenang.

### Hasil yang diharapkan

Anda mempunyai satu diagram, empat skenario dengan asumsi, serta satu tiket yang dapat diuji. Orang lain dapat membaca alasan prioritas tanpa harus percaya pada penilaian pribadi Anda.

### Jika macet

Jika diagram terlalu rumit, mulai dari satu tindakan pelanggan. Jika semua risiko mendapat nilai tertinggi, bedakan data apa yang terpapar, siapa yang dapat menjangkau komponen, dan kontrol yang sudah terbukti. Jika laporan scanner menyebut versi rentan, cari advisory vendor lalu periksa apakah kondisi pada advisory cocok dengan sistem latihan.

### Latihan

Tambahkan fitur unggah bukti pembayaran. Tulis sumber file, tempat penyimpanan, siapa yang membukanya, dan batas ukuran. Buat dua skenario penyalahgunaan serta kontrolnya. Jelaskan risiko tersisa setelah kontrol berjalan; satu kontrol jarang menyelesaikan seluruh persoalan bisnis.

### Bukti kelulusan

Minta pembaca lain memilih satu risiko dan menantang asumsi Anda. Revisi diagram atau penilaian berdasarkan bukti. Anda lulus jika mampu menghubungkan aset, ancaman, kontrol, dan pengujian dengan kalimat yang dapat dipahami pemilik laundry.

### Referensi

- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html): pemetaan ancaman.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): pengelolaan risiko dan hasil keamanan.

---

<a id="bab-12"></a>

## Bab 12: Menguji keamanan dengan metode yang dapat dipertanggungjawabkan

### Tujuan dan prasyarat

Anda sudah memahami layanan jaringan dan risiko. Bab ini memperkenalkan **penetration testing**, pengujian terencana untuk membuktikan dampak kelemahan dalam ruang lingkup yang disepakati. Anda akan menulis scope, memeriksa satu port localhost, dan membuat laporan. Sediakan 2–4 sesi. Nmap bersifat opsional; jalur HTTP dasar dapat dilakukan dengan Python dan browser.

### Konsep

Pentester mulai dari pertanyaan bisnis, misalnya “dapatkah pelanggan membaca nota pelanggan lain?” Ia mengumpulkan bukti secukupnya, menjelaskan penyebab, dan membantu pemilik sistem memeriksa perbaikan. **Reconnaissance** berarti mengenali target dan konteksnya. Recon pasif membaca informasi yang sudah tersedia; recon aktif mengirim permintaan ke sistem. Keduanya perlu memperhatikan scope dan penggunaan data.

**Rules of engagement**, disingkat RoE, merupakan aturan pelaksanaan: siapa memberi izin, aset mana yang termasuk, teknik yang boleh dipakai, waktu pengujian, batas kecepatan, kontak darurat, serta kondisi berhenti. Alamat IP privat tidak otomatis berarti Anda berhak mengujinya. Jaringan kantor, tetangga, dan layanan pihak ketiga tetap mempunyai pemilik.

Urutan kerja yang dapat Anda ulang adalah menyepakati scope, mengenali komponen, menyusun hipotesis, melakukan uji terbatas, mengonfirmasi dampak, melaporkan, lalu melakukan retest. Hipotesis menghubungkan observasi dengan kemungkinan masalah. “Port 8000 terbuka” merupakan observasi. “Server mungkin menyajikan file di folder yang salah” adalah hipotesis yang memerlukan pemeriksaan tambahan.

Nmap melihat keadaan port dari titik pengujian. `open` berarti ada layanan yang menerima koneksi; `closed` berarti host merespons tetapi tidak ada layanan yang menerima pada port itu; `filtered` berarti hambatan jaringan membuat Nmap tidak dapat menentukan keadaan secara pasti. Tidak satu pun dari tiga label itu sendiri membuktikan kerentanan. [Penjelasan status port Nmap](https://nmap.org/book/man-port-scanning-basics.html).

### Praktik

**1. Tulis RoE latihan.** Isi scope dengan `127.0.0.1`, port TCP `8000`, dan folder `hasil-belajar/web-demo`. Pemiliknya Anda sendiri. Teknik yang diizinkan: satu permintaan HTTP dan pemeriksaan koneksi port. Kondisi berhenti: Anda melihat data yang bukan data latihan, port dimiliki aplikasi lain, atau target berbeda dari loopback. Jangan menambahkan rentang jaringan rumah untuk memperluas percobaan.

**2. Buat layanan lokal.** Buka PowerShell dari folder tutorial:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/web-demo
Set-Content -LiteralPath hasil-belajar/web-demo/index.txt -Value 'Laundry Aman: server latihan' -Encoding utf8
py -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-demo
```

Server memakai folder demo yang hanya berisi data latihan. `--bind 127.0.0.1` membatasi pendengar ke loopback; `--directory` menentukan folder yang disajikan. Biarkan terminal ini terbuka. Python menjelaskan bahwa `http.server` ditujukan untuk penggunaan sederhana dan tidak direkomendasikan sebagai server produksi. [Dokumentasi Python](https://docs.python.org/3/library/http.server.html).

Linux/macOS: buat folder dan file tersebut melalui pengelola file, lalu jalankan `python3 -m http.server 8000 --bind 127.0.0.1 --directory hasil-belajar/web-demo` dari folder tutorial.

**3. Periksa aplikasi.** Buka `http://127.0.0.1:8000/index.txt` di browser. Alternatif Windows, dari terminal kedua:

```powershell
curl.exe -i http://127.0.0.1:8000/index.txt
```

`-i` menampilkan header bersama isi jawaban. Di Linux/macOS gunakan `curl` tanpa `.exe`. Catat status HTTP dan teks yang diterima. Jangan menyimpulkan aplikasi aman hanya karena memberi status 200; hasil ini membuktikan satu permintaan berhasil.

**4. Pemeriksaan Nmap opsional.** Jika Nmap sudah tersedia dari sumber resminya, jalankan dari terminal kedua:

```text
nmap -sT -Pn -p 8000 127.0.0.1
```

`-sT` menggunakan koneksi TCP, `-Pn` melewati langkah penemuan host, dan `-p 8000` membatasi pemeriksaan ke satu port. Latihan ini tidak membutuhkan pemindaian seluruh port atau fitur eksploitasi. Jika Nmap belum terpasang, selesaikan pemeriksaan browser dan tandai bagian ini `NOT_RUN`.

**5. Uji perubahan keadaan.** Hentikan server dengan `Ctrl+C` pada terminal pertama. Buka ulang alamat tadi; koneksi seharusnya gagal jika tidak ada proses lain pada port tersebut. Bila memakai Nmap, ulangi perintah yang sama dan bandingkan. Simpan waktu, perintah, dan hasil; hindari menulis hasil yang hanya Anda perkirakan.

**6. Buat laporan satu halaman.** Tuliskan tujuan, scope, metode, observasi, batas kesimpulan, dan langkah berikutnya. Dalam latihan ini, layanan HTTP lokal yang sengaja Anda jalankan merupakan hasil observasi, bukan temuan keamanan dengan severity tinggi. Laporan yang jujur boleh menyatakan belum ada kerentanan yang terbukti.

### Hasil yang diharapkan

Saat server aktif, browser menampilkan teks latihan dan HTTP berhasil. Setelah server berhenti, permintaan gagal. Nmap yang dijalankan dapat menunjukkan perubahan `open` ke `closed`; hasil dipengaruhi proses dan konfigurasi setempat. Anda punya RoE serta laporan yang memisahkan fakta dari dugaan.

### Jika macet

Pesan “address already in use” berarti port dipakai proses lain. Jangan mematikan proses yang belum dikenali. Pilih port latihan lain, misalnya 8765, lalu ubah scope, perintah, dan URL secara konsisten. Jika browser gagal saat server aktif, periksa alamat bind, nomor port, dan terminal server. Jangan menonaktifkan firewall seluruh perangkat untuk menyelesaikannya.

### Latihan

Tulis laporan kedua untuk akses lintas pelanggan pada contoh konseptual Bab 09. Sertakan langkah reproduksi dengan dua akun latihan, bukti minimum, dampak, perbaikan, dan retest. Jelaskan batas data yang diperlukan untuk membuktikan masalah tanpa mengunduh seluruh database.

### Bukti kelulusan

Anda dapat mengulang hasil, menjelaskan setiap opsi perintah, menunjukkan bahwa target sesuai scope, serta membedakan port terbuka dari kelemahan yang terbukti. Pembaca lain bisa memeriksa laporan tanpa menebak konfigurasi Anda.

### Referensi

- [Nmap: status port](https://nmap.org/book/man-port-scanning-basics.html) dan [teknik koneksi TCP](https://nmap.org/book/man-port-scanning-techniques.html).
- [Python http.server](https://docs.python.org/3/library/http.server.html): server latihan lokal.
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/): metode pengujian aplikasi web.

---

<a id="bab-13"></a>

## Bab 13: Menemukan dan memperbaiki kelemahan web dan API

### Tujuan dan prasyarat

Anda telah belajar HTTP, SQL, login, dan scope pengujian. Bab ini mempertemukan konsep tersebut dalam dua lab offline dan jalur latihan resmi. Sediakan 4–8 sesi. Fokus awal ialah memahami asal masalah dan perbaikannya; hafalan payload tidak cukup untuk menguji aplikasi baru.

### Konsep

Aplikasi Laundry Aman menerima masukan seperti nomor nota, alamat, dan nama file. Pengembang harus memutuskan bagian mana yang merupakan data, siapa yang boleh menggunakannya, dan komponen apa yang boleh menerima masukan tersebut. Kesalahan pada batas ini melahirkan beberapa keluarga kelemahan.

| Kelemahan | Penjelasan sederhana | Contoh pada laundry | Arah perbaikan |
|---|---|---|---|
| SQL injection | Aplikasi mencampur masukan dengan instruksi database | Pencarian pelanggan mengubah arti query | Parameterisasi query; pembatasan hak database |
| XSS | Browser menjalankan masukan pengguna sebagai kode | Catatan pesanan tampil sebagai HTML aktif | Encoding sesuai konteks; API DOM yang aman |
| CSRF | Situs lain memicu tindakan dengan sesi pengguna | Browser kasir mengirim perubahan alamat yang tidak ia maksud | Token anti-CSRF dan kontrol origin sesuai rancangan |
| IDOR/BOLA | Server tidak memeriksa hak terhadap objek | Alice mengganti nomor nota dan membaca milik Bob | Pemeriksaan pemilik/izin di server |
| SSRF | Server mengakses tujuan jaringan dari masukan yang tidak dibatasi | Fitur ambil gambar menghubungi layanan internal | Batasi tujuan/protokol dan akses jaringan keluar |
| Path traversal | Masukan nama file keluar dari direktori yang diizinkan | Fitur unduh membaca file di luar folder nota | Pemetaan ID ke file; pemeriksaan jalur kanonis |

**API**, *application programming interface*, adalah kontrak komunikasi program. Endpoint API tetap memerlukan autentikasi, otorisasi objek, validasi tipe dan ukuran data, serta pembatasan sumber daya. JSON tidak membuat endpoint kebal terhadap kelemahan. **Mass assignment** muncul ketika aplikasi menerima terlalu banyak properti: pelanggan yang boleh mengganti alamat mungkin ikut mengirim properti peran administrator. Pilih properti yang boleh diubah secara eksplisit.

**Business logic flaw** adalah kesalahan aturan bisnis, misalnya kupon sekali pakai dapat dipakai berulang karena aplikasi tidak memperbarui statusnya secara atomik. Dua permintaan yang datang berdekatan dapat memunculkan **race condition**, ketika hasil tergantung urutan eksekusi. Pendalaman topik ini memerlukan transaksi database, constraint, dan pengujian konkurensi.

### Praktik

**1. Bandingkan query rentan dan query berparameter.** Dari folder tutorial jalankan:

```powershell
py labs/sql_demo.py
```

Linux/macOS menggunakan `python3`. Contoh membuat database latihan di memori. Buka sumbernya di editor. Temukan pemakaian penggabungan string pada jalur rentan serta placeholder parameter pada jalur aman. Masukan latihan `' OR 1=1 --` dapat mengubah kondisi query yang digabung sebagai teks. Pada query berparameter, database memperlakukannya sebagai nilai yang dicari.

Catat tiga hasil: pencarian nama normal, masukan latihan pada query rentan, dan masukan yang sama pada query aman. Hasil aman berupa daftar kosong karena tidak ada pelanggan bernama persis seperti string latihan. Perlindungan yang Anda pelajari ialah pemisahan instruksi dan data. Menghapus karakter apostrof dapat merusak nama sah dan tidak menggantikan parameterisasi. [PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) menyediakan penjelasan serta latihan lanjutan.

**2. Periksa akses objek.** Jalankan `py labs/access_demo.py`. Bandingkan Alice membaca nota 101 dengan Bob membaca nota yang sama. Tulis kondisi izin dalam bahasa manusia, lalu tunjuk baris yang menerapkannya. Tambahkan kasus pengguna belum login dan nomor nota yang tidak ada pada daftar pengujian Anda.

**3. Lakukan review tanpa mengeksekusi masukan.** Bayangkan pengembang menulis fitur: “ambil parameter `filename`, sambungkan ke folder nota, lalu buka hasilnya.” Tulis dua masalah yang perlu diperiksa: apakah hasil jalur tetap berada dalam direktori yang diizinkan, dan apakah pengguna berhak membaca nota itu. Pemeriksaan jalur dan otorisasi menyelesaikan masalah yang berbeda.

**4. Lanjutkan ke lab web resmi.** Buka [Web Security Academy](https://portswigger.net/web-security), buat akun gratis bila dibutuhkan untuk menyimpan progres, lalu pilih topik SQL injection atau Access control dan lab tingkat Apprentice. Baca tujuan lab dan buka instance latihan dari tombol peluncurnya. Gunakan hanya domain instance yang diberikan. Browser cukup untuk beberapa lab awal; lab lain memakai Burp Suite Community Edition dengan browser bawaan.

Untuk satu lab, tulis: fungsi normal, parameter yang diuji, dugaan kelemahan, perubahan permintaan, hasil, dan perbaikan. Coba sendiri sebelum membuka solusi resmi. Setelah selesai, tutup lab dan tulis ulang penyebab masalah tanpa melihat walkthrough. Anda belum memahami lab jika hanya mengingat string yang membuat indikatornya berubah.

**5. Buat kasus regresi.** Untuk SQL, periksa nama biasa, nama dengan apostrof, masukan latihan, serta nilai kosong. Untuk otorisasi, periksa pemilik, pengguna lain, tanpa login, dan objek yang tidak ada. Sampaikan perilaku yang diharapkan pada pengembang sebelum menilai hasil test.

### Hasil yang diharapkan

Contoh SQL rentan mengembalikan baris Alice dan Bob ketika menerima masukan latihan; versi aman mengembalikan `[]`. Contoh akses mengizinkan pemilik dan menolak pengguna lain. Anda mempunyai satu laporan lab resmi atau catatan `NOT_RUN` bila belum mengerjakannya, beserta daftar kasus regresi.

### Jika macet

Jika payload tidak berpengaruh pada lab resmi, periksa konteksnya: query numerik dan query string memiliki bentuk berbeda. Kembali ke materi SQL sebelum mencoba rangkaian payload acak. Jika proxy tidak menangkap permintaan, gunakan browser bawaan alat dan cek scope. Jangan memasang sertifikat intersepsi pada browser harian tanpa memahami pengaruhnya; browser khusus latihan memisahkan aktivitas pribadi.

### Latihan

Pilih satu topik tambahan, misalnya XSS atau CSRF. Tulis perjalanan data dari masukan sampai tindakan browser. Untuk XSS, jelaskan mengapa encoding HTML tidak otomatis cocok untuk konteks JavaScript. Untuk CSRF, jelaskan kapan browser mengirim kredensial secara otomatis. Buat rancangan perbaikan dan minimal satu kasus uji negatif.

### Bukti kelulusan

Anda dapat menjelaskan empat keluarga kelemahan, mendemonstrasikan dua lab lokal, dan mengusulkan kontrol yang sesuai dengan penyebabnya. Tahap lanjutan menuntut lab yang belum pernah Anda baca solusinya serta laporan yang dapat direproduksi orang lain.

### Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security): latihan web gratis.
- [PortSwigger SQL injection](https://portswigger.net/web-security/sql-injection) dan [access control](https://portswigger.net/web-security/access-control).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/): daftar pemeriksaan untuk memperluas cakupan.

---

<a id="bab-14"></a>

## Bab 14: Membaca lalu lintas dan memisahkan jaringan

### Tujuan dan prasyarat

Bab 03 dan Bab 12 memberi dasar alamat, port, dan layanan. Sekarang Anda akan membaca percakapan jaringan sendiri dan merancang segmentasi Laundry Aman. Siapkan 3–5 sesi. Wireshark opsional untuk praktik paket; rancangan jaringan dapat dikerjakan tanpa memasang alat.

### Konsep

**Packet capture** adalah rekaman paket yang terlihat pada titik pengamatan. Wireshark membantu membaca alamat, protokol, waktu, dan sebagian isi. Rekaman tidak selalu melihat seluruh komunikasi: pemilihan interface, lokasi sensor, enkripsi, dan kehilangan paket memengaruhi kesimpulan. Traffic TLS biasanya menyembunyikan isi aplikasi, meski pengamat masih dapat melihat sebagian metadata. Capture tanpa paket HTTP tidak membuktikan bahwa pengguna tidak mengakses situs.

**Capture filter** membatasi paket yang direkam. **Display filter** memilih paket yang ditampilkan dari rekaman yang sudah ada. Jika Anda salah memilih capture filter, paket yang dibuang tidak bisa dimunculkan dengan mengganti display filter. Mulailah merekam traffic lokal yang sempit dan diketahui, kemudian gunakan display filter untuk membacanya.

**Segmentasi** memisahkan kelompok perangkat dan mengendalikan komunikasi antarkelompok. Laundry dapat memisahkan jaringan tamu, komputer kasir, dan perangkat seperti printer atau kamera. VLAN mengelompokkan jaringan pada lapisan tertentu, tetapi keamanan antarkelompok tetap memerlukan aturan routing dan firewall. Mengubah nama Wi-Fi saja tidak menjamin pemisahan.

DMZ adalah segmen untuk layanan yang perlu berhubungan dengan jaringan kurang tepercaya. Jump server menjadi titik administrasi yang terkontrol. VPN membuat kanal terlindungi menuju jaringan atau layanan, tetapi akun VPN tetap memerlukan pembatasan akses. “Sudah masuk VPN” tidak semestinya memberi izin membaca seluruh database.

Pada Wi-Fi, lindungi administrasi access point, perbarui firmware, dan pilih protokol keamanan yang masih didukung perangkat. WPA3 memberi peningkatan dibanding generasi lama, tetapi kualitas konfigurasi dan kompatibilitas tetap perlu diperiksa. WEP sudah tidak layak untuk melindungi jaringan. WPS memperkenalkan jalur pengaturan yang perlu dinilai atau dinonaktifkan jika tidak diperlukan. Pengujian deauthentication, evil twin, atau peniruan access point dapat mengganggu orang lain; bab ini memakai rancangan dan pengamatan milik sendiri.

### Praktik

**1. Gambarkan kebutuhan bisnis.** Buat tiga zona: `TAMU`, `KASIR`, dan `PERANGKAT`. Tambahkan internet dan antarmuka administrasi router. Buat tabel keputusan:

| Sumber | Tujuan | Keputusan rancangan | Alasan |
|---|---|---|---|
| Tamu | Internet | Izinkan sesuai kebijakan | Pengunjung memakai Wi-Fi |
| Tamu | Kasir | Tolak | Tidak perlu mengakses transaksi |
| Kasir | Printer | Izinkan layanan cetak yang diperlukan | Mencetak nota |
| Printer/kamera | Kasir | Tolak koneksi baru tanpa kebutuhan | Membatasi pergerakan dari perangkat |
| Akun admin pada perangkat khusus | Pengaturan router | Izinkan dengan autentikasi | Perawatan jaringan |

Tabel ini rancangan, bukan bukti bahwa router Anda menerapkannya. Tulis siapa yang mengelola aturan dan bagaimana memeriksa pengecualian.

**2. Siapkan traffic latihan.** Gunakan server loopback Bab 12 yang menyajikan `index.txt`. Jangan merekam interface kantor, Wi-Fi umum, atau komunikasi anggota keluarga. Buka Wireshark yang sudah terpasang dan pilih interface loopback; namanya bergantung OS. Pada Linux biasanya `lo`, macOS biasanya `lo0`, dan Windows menggunakan interface loopback yang tersedia melalui dukungan capture setempat.

**3. Mulai capture dan buat satu permintaan.** Buka alamat lokal `http://127.0.0.1:8000/index.txt`, lalu hentikan capture. Masukkan display filter berikut pada kotak filter Wireshark:

```text
tcp.port == 8000
```

Filter ini menampilkan paket dengan salah satu port TCP bernilai 8000. Pilih paket, buka bagian Internet Protocol dan Transmission Control Protocol, lalu catat alamat sumber, tujuan, dan port. Port sementara pada sisi browser boleh berbeda pada tiap percobaan. [Dokumentasi display filter Wireshark](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html).

**4. Ikuti satu percakapan.** Pilih paket aliran tersebut dan gunakan menu **Follow → TCP Stream** jika tersedia. Cari permintaan terhadap `index.txt` dan responsnya. Server latihan menggunakan HTTP tanpa TLS, sehingga teks latihan dapat terlihat. Tutup tampilan stream, bersihkan filter tambahan jika ingin melihat semua paket lagi, lalu simpan capture ke folder hasil belajar pribadi.

**5. Hubungkan observasi dengan pertahanan.** Tulis bahwa enkripsi melindungi isi selama perjalanan, sementara otorisasi membatasi siapa yang boleh menerima data dari server. HTTPS tidak memperbaiki aplikasi yang mengirim nota Bob kepada Alice. Untuk jaringan laundry, jelaskan di mana sensor perlu ditempatkan agar dapat melihat traffic antarsegmen.

### Hasil yang diharapkan

Anda memiliki matriks komunikasi dan, bila menjalankan Wireshark, satu capture traffic latihan. Anda dapat menunjukkan koneksi TCP serta permintaan HTTP yang Anda buat. Tidak perlu melihat DNS: alamat IP loopback tidak memerlukan pencarian nama untuk permintaan tersebut.

### Jika macet

Jika tidak ada paket, periksa interface dan pastikan Anda membuat permintaan setelah capture dimulai. Browser mungkin memakai cache; muat ulang atau gunakan `curl.exe` pada Windows. Jika Wireshark tidak mengenali HTTP di port latihan, lihat TCP Stream tanpa memaksakan kesimpulan. Hindari mengubah pengaturan driver atau firewall secara acak; tandai capture `NOT_RUN` jika dukungan setempat belum siap.

### Latihan

Tambahkan mesin pembayaran ke diagram. Tentukan layanan minimum yang dibutuhkan dan siapa yang boleh mengadministrasinya. Buat dua kasus pengujian negatif: tamu mencoba mencapai kasir dan kamera mencoba membuka koneksi baru ke kasir. Tulis hasil yang diharapkan tanpa menjalankan pengujian pada jaringan nyata.

### Bukti kelulusan

Anda dapat menjelaskan perbedaan capture dan display filter, membaca alamat serta port satu koneksi, dan menyusun aturan jaringan dari kebutuhan bisnis. Nyatakan batas pengamatan sehingga laporan tidak mengklaim melihat data yang sebenarnya terenkripsi atau tidak direkam.

### Referensi

- [Wireshark User's Guide: bekerja dengan paket](https://www.wireshark.org/docs/wsug_html_chunked/ChapterWork.html).
- [Wireshark: ekspresi display filter](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html).
- [Canadian Centre for Cyber Security: Wi-Fi security](https://www.cyber.gc.ca/en/guidance/wi-fi-security-itsp80002/): pemisahan jaringan, protokol Wi-Fi, dan pengaturan WPS.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework): hasil pengelolaan dan perlindungan keamanan.

---

<a id="bab-15"></a>

## Bab 15: Membaca log dan menyusun deteksi

### Tujuan dan prasyarat

Anda telah mengenal login, jaringan, dan program Python sederhana. Bab ini mengajarkan pekerjaan awal **SOC**, *security operations center*, yaitu tim yang memantau, menilai, dan merespons aktivitas keamanan. Anda akan membaca log sintetis sebelum memikirkan dashboard. Sediakan 3–5 sesi dan Python yang sudah dipakai pada bab sebelumnya.

### Konsep

**Log** adalah catatan kejadian. Aplikasi dapat mencatat login berhasil, login gagal, penolakan akses, atau perubahan hak pengguna. **Event** merupakan satu kejadian; **alert** merupakan peringatan karena kejadian memenuhi aturan tertentu; **incident** merupakan kejadian yang telah dinilai memerlukan penanganan keamanan. Login gagal satu kali dapat berasal dari salah ketik. Menganggap semua alert sebagai insiden membuat tim sibuk mengejar gangguan kecil.

SIEM, *security information and event management*, mengumpulkan log dan membantu pencarian serta korelasi. SOAR, *security orchestration, automation and response*, membantu menjalankan alur penanganan. Otomasi memerlukan kontrol: aturan yang langsung menonaktifkan seluruh akun karena beberapa login gagal dapat mengganggu usaha. Mulai dari peringatan yang bisa diperiksa, lalu tentukan tindakan yang aman untuk diotomatisasi.

Data yang berguna mencakup waktu beserta zona waktu, sumber, identitas, jenis kejadian, hasil, dan pengenal yang memungkinkan korelasi. Jangan menaruh password, token sesi lengkap, atau isi pribadi pelanggan di log. Tentukan masa simpan dan hak akses. Log dapat berisi data sensitif sekaligus menjadi sasaran perubahan oleh pelaku.

Empat istilah membantu menilai deteksi. **True positive** berarti peringatan yang cocok dengan kejadian berbahaya. **False positive** berarti aktivitas sah yang memicu peringatan. **False negative** berarti aktivitas berbahaya yang luput. **True negative** berarti aktivitas sah yang tidak memicu peringatan. Definisi ini memerlukan label pembanding yang cukup tepercaya; tanpa investigasi, Anda baru mempunyai kandidat.

**Precision** adalah TP dibagi TP+FP: berapa banyak peringatan yang benar. **Recall** adalah TP dibagi TP+FN: berapa banyak kejadian berbahaya yang tertangkap. Jika 8 dari 10 peringatan benar dan ada 4 serangan lain yang luput, precision adalah 80% dan recall sekitar 67%. Nilai tersebut hanya berlaku pada kumpulan pengujian yang Anda gunakan, bukan jaminan kemampuan di seluruh dunia.

### Praktik

**1. Baca data sebelum menjalankan alat.** Buka `labs/data/auth.jsonl`. JSONL berisi satu objek JSON pada tiap baris. Field `timestamp` menunjukkan waktu UTC, `user` merupakan identitas latihan, `source_ip` sumber sintetis, dan `event` jenis kejadian. Alamat pada data merupakan alamat dokumentasi; Anda tidak perlu menghubunginya.

**JSON** adalah format teks untuk menyimpan data terstruktur. Objek memakai kurung kurawal `{}`, berisi pasangan nama dan nilai dengan pemisah titik dua. Teks memakai kutip ganda; koma memisahkan pasangan. Contoh berikut mencatat satu kejadian. Pada JSONL, kejadian berikutnya berada pada baris baru, tanpa koma penghubung antarbaris:

```json
{"timestamp":"2026-01-01T08:00:00Z","user":"alice","source_ip":"192.0.2.10","event":"login_success"}
```

Hitung kejadian dengan tangan. Anda seharusnya menemukan tujuh baris: empat login gagal dan tiga login berhasil. Bob salah login dari `192.0.2.20` lalu berhasil. Sumber `198.51.100.8` gagal terhadap Alice, Bob, dan operator, lalu berhasil sebagai operator.

**2. Jalankan peringkas offline.** Dari folder tutorial:

```powershell
py labs/log_triage.py
```

Di Linux/macOS gunakan `python3 labs/log_triage.py`. Hasilnya:

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

Program menghitung kejadian; program tidak menilai siapa penyerangnya dan tidak melakukan korelasi waktu. Cocokkan hasil dengan hitungan manual. Perbedaan satu baris saja perlu diselidiki sebelum Anda mengandalkan angka dashboard.

**3. Tulis aturan deteksi dalam kalimat.** Contoh latihan: “Buat alert jika satu sumber mencatat setidaknya tiga login gagal pada tiga akun berbeda dalam lima menit.” Tentukan field yang dibutuhkan, cara menangani waktu, dan perilaku saat log terlambat. Peringkas yang tersedia belum menerapkan aturan ini; periksa dataset dengan tangan atau jadikan implementasinya tugas lanjutan.

**4. Lakukan triage.** Triage berarti penilaian awal untuk menentukan langkah berikutnya. Tanyakan apakah sumber itu milik alat pengujian sah, apakah operator mengenali aktivitasnya, dan apakah ada perubahan akun setelah login. Pola beberapa akun dengan sedikit tebakan per akun cocok untuk hipotesis password spraying. Log ini tidak mencatat password yang dicoba, sehingga belum membuktikan teknik tersebut.

**5. Buat kartu aturan.** Isi nama aturan, tujuan, log yang dibutuhkan, kondisi, kemungkinan false positive, langkah pemeriksaan, pemilik, serta tanggal review. Tambahkan satu contoh aktivitas sah yang memicu aturan, misalnya pelatihan pegawai dari satu jaringan bersama. Buat salinan data sebelum menambahkan kasus baru; jangan mengubah fixture asli jika Anda ingin test bawaan tetap konsisten.

### Hasil yang diharapkan

Hitungan manual sama dengan program. Anda memilih sumber dengan tiga kegagalan untuk pemeriksaan lebih lanjut dan tetap menulis alternatif penjelasan yang masuk akal. Anda mempunyai kartu aturan yang tidak mengklaim bahwa kegagalan login saja membuktikan kompromi.

### Jika macet

Pesan `JSON tidak valid` menunjukkan baris yang perlu diperiksa. JSON memerlukan tanda kutip ganda dan sintaks yang tepat. Program juga menolak field wajib yang kosong atau nama event yang tidak dikenal. Jangan menghapus baris bermasalah hanya agar angka terlihat rapi; simpan bukti dan perbaiki sumber atau parser secara terkontrol.

### Latihan

Hitung precision dan recall untuk TP=12, FP=8, FN=3. Jawaban: precision 60%, recall 80%. Tambahkan skenario lima kegagalan dari pegawai yang baru mengganti password. Tulis informasi tambahan yang membantu membedakannya dari serangan tanpa membaca password pegawai tersebut.

### Bukti kelulusan

Kumpulkan output, hitungan manual, kartu aturan, dan catatan triage. Anda lulus jika dapat menjelaskan satu false positive, satu potensi false negative, serta log tambahan yang diperlukan untuk memperkuat kesimpulan.

### Referensi

- [MITRE ATT&CK](https://attack.mitre.org/): pengetahuan perilaku penyerang untuk menyusun hipotesis deteksi.
- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): hubungan deteksi dan respons dengan pengelolaan risiko.

---

<a id="bab-16"></a>

## Bab 16: Menangani insiden dan berburu ancaman

### Tujuan dan prasyarat

Anda telah menyusun alert dan memahami batas log. Bab ini mengajarkan keputusan saat sesuatu benar-benar perlu ditangani. Praktik memakai simulasi meja, atau *tabletop*: Anda membaca kejadian dan mencatat keputusan tanpa menyerang atau mematikan sistem. Sediakan 3–5 sesi dan hasil Bab 15.

### Konsep

**Incident response** mengatur cara organisasi mempersiapkan diri, mengidentifikasi masalah, membatasi dampak, menghilangkan penyebab, dan memulihkan layanan. Tim juga belajar dari penanganan agar kejadian berikutnya lebih mudah dihadapi. Langkah-langkahnya dapat berulang: ketika menemukan akun tambahan yang terdampak, tim kembali menilai cakupan dan containment.

NIST SP 800-61 Rev. 3, terbit April 2025, menempatkan respons insiden dalam pengelolaan risiko berbasis CSF 2.0. Dokumen tersebut menggantikan Rev. 2. Gunakan preparation, identification, containment, eradication, recovery, dan lessons learned sebagai istilah kerja untuk latihan, sambil memahami bahwa organisasi menyesuaikan prosesnya dengan tata kelola dan kebutuhan bisnis. [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final).

**Containment** membatasi kerugian, misalnya mencabut sesi akun yang terkonfirmasi disalahgunakan. **Eradication** menghilangkan penyebab, misalnya memperbaiki bug dan mengganti kredensial yang bocor melalui prosedur resmi. **Recovery** mengembalikan layanan dengan verifikasi. Mengganti password tanpa mencabut sesi lama atau memahami jalur masuk dapat meninggalkan akses yang masih aktif.

**Runbook** adalah panduan tindakan yang dapat diikuti petugas: pemicu, prasyarat, keputusan, tindakan, bukti, dan eskalasi. Tentukan siapa boleh mengambil tindakan berdampak besar. Pemilik Laundry Aman mungkin memilih menahan fitur ekspor sementara agar transaksi kasir tetap berjalan. Keputusan itu harus dicatat bersama alasan dan waktu tinjau kembali.

**Threat hunting** adalah pencarian terarah berdasarkan hipotesis, termasuk ketika belum ada alert. Contoh: “Jika akun operator disalahgunakan, mungkin terdapat ekspor massal setelah login tidak biasa.” Anda memilih sumber data, rentang waktu, cara pencarian, serta bukti yang akan mendukung atau melemahkan hipotesis. Hunting tanpa pertanyaan mudah berubah menjadi pencarian tanpa akhir.

### Praktik

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

### Hasil yang diharapkan

Anda mempunyai timeline, daftar fakta dan hipotesis, keputusan containment, serta kriteria pemulihan. Semua tindakan dalam bab ini berupa simulasi. Anda dapat menjelaskan kenapa menutup seluruh usaha tidak menjadi keputusan otomatis untuk setiap alert.

### Jika macet

Jika bukti bertentangan, catat dua kemungkinan dan cari sumber pembanding; jangan memilih cerita yang paling dramatis. Jika waktu tidak cocok, periksa UTC, zona waktu lokal, dan sinkronisasi jam. Jika tidak mempunyai wewenang menjalankan tindakan, eskalasi kepada pemilik yang tercatat dalam runbook.

### Latihan

Buat runbook satu halaman untuk akun pegawai yang diduga bocor. Tambahkan titik berhenti bila alat menunjukkan akun pelanggan lain ikut terdampak. Tulis pemberitahuan internal tiga kalimat: kejadian yang diketahui, dampak yang sudah dipastikan, dan waktu pembaruan berikutnya. Hindari menyebut atribusi pelaku tanpa bukti.

### Bukti kelulusan

Orang lain dapat menjalankan tabletop dari runbook Anda dan memahami siapa mengambil keputusan. Anda lulus bila membedakan containment, eradication, dan recovery, mempertahankan bukti, serta menyatakan ketidakpastian tanpa menghentikan tindakan yang sudah beralasan.

### Referensi

- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): pedoman respons insiden terkini yang diperiksa untuk tutorial ini.
- [MITRE ATT&CK](https://attack.mitre.org/): sumber hipotesis perilaku, bukan alat penentuan identitas pelaku.

---

<a id="bab-17"></a>

## Bab 17: Menjaga bukti dan menyusun kronologi

### Tujuan dan prasyarat

Anda sudah mengenal hash, file, log, dan respons insiden. **Forensik digital** menggunakan metode yang dapat dijelaskan untuk memperoleh, memeriksa, dan menafsirkan bukti digital. Bab ini mengajarkan disiplin awal dengan file sintetis. Sediakan 3–5 sesi. Pemeriksaan disk atau perangkat nyata memerlukan kewenangan dan keahlian tambahan.

### Konsep

File log dapat berubah saat dibuka, dipindah, atau diproses oleh alat. Metadata juga dapat berubah tanpa perubahan isi. Karena itu analis membedakan sumber asli, salinan bukti, dan salinan kerja. Ia mencatat bagaimana memperoleh data, alat yang dipakai, waktu, serta langkah yang dilakukan. Hash membantu mendeteksi perubahan isi, tetapi tidak membuktikan bahwa isi tersebut benar sejak awal.

**Chain of custody** adalah catatan siapa menguasai bukti, kapan, untuk tujuan apa, dan bagaimana perpindahannya. Untuk latihan pribadi, tabel sederhana cukup. Pada pekerjaan nyata, organisasi memiliki prosedur penyimpanan dan akses yang lebih ketat. File dengan hash yang sama masih memerlukan konteks pengambilan dan asal yang dapat dipertanggungjawabkan.

**Volatile data** mudah hilang ketika keadaan perangkat berubah, contohnya memori dan koneksi yang sedang aktif. Disk lebih persisten, tetapi aktivitas OS tetap dapat menulis ke dalamnya. Akuisisi memori, pembuatan image disk, dan penggunaan write blocker memerlukan alat serta latihan khusus. Jangan menganggap menyalin folder sama dengan memperoleh seluruh bukti disk, termasuk data yang sudah dihapus.

**Timeline** mengurutkan kejadian dari beberapa sumber. Anda perlu memperhatikan zona waktu, ketepatan jam, jenis timestamp, dan kemungkinan log terlambat dikirim. Waktu pembuatan file, waktu perubahan isi, dan waktu server menerima event dapat berbeda. Dua kejadian berurutan belum membuktikan bahwa yang pertama menyebabkan yang kedua.

NIST SP 800-86 membahas pengumpulan, pemeriksaan, analisis, dan pelaporan forensik untuk respons insiden. Dokumen ini berasal dari 2006: gunakan untuk prinsip proses, lalu ikuti dokumentasi alat yang masih terawat untuk format OS modern. [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final).

### Praktik

**1. Buat berkas kasus.** Salin tabel berikut ke catatan:

| Field | Nilai latihan |
|---|---|
| ID kasus | LA-LAB-017 |
| Pertanyaan | Urutan aktivitas login apa yang tercatat? |
| Sumber | Fixture sintetis `labs/data/auth.jsonl` |
| Pengambil | Nama atau alias Anda untuk latihan |
| Waktu pengambilan | Isi waktu aktual beserta zona waktu |
| Cakupan | Satu file; bukan image perangkat |

**2. Buat salinan dan bandingkan hash.** Dari folder tutorial pada PowerShell:

```powershell
New-Item -ItemType Directory -Force hasil-belajar/forensik-demo
Copy-Item -LiteralPath labs/data/auth.jsonl -Destination hasil-belajar/forensik-demo/auth.bukti.jsonl
Copy-Item -LiteralPath hasil-belajar/forensik-demo/auth.bukti.jsonl -Destination hasil-belajar/forensik-demo/auth.kerja.jsonl
Get-FileHash -LiteralPath labs/data/auth.jsonl,hasil-belajar/forensik-demo/auth.bukti.jsonl,hasil-belajar/forensik-demo/auth.kerja.jsonl -Algorithm SHA256
```

Ketiga hash seharusnya sama. Simpan nilai hash beserta nama file dalam catatan kasus. Jangan mengedit fixture asli atau salinan bukti. Gunakan salinan kerja untuk analisis. Jika mengulang percobaan, pakai folder kasus baru agar bukti percobaan sebelumnya tidak tertimpa.

Di Linux/macOS, buat dua salinan melalui pengelola file. Untuk membandingkan isinya dengan Python dari folder tutorial, jalankan:

```bash
python3 -c "from pathlib import Path; import hashlib; print(hashlib.sha256(Path('labs/data/auth.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.bukti.jsonl').read_bytes()).hexdigest()); print(hashlib.sha256(Path('hasil-belajar/forensik-demo/auth.kerja.jsonl').read_bytes()).hexdigest())"
```

Baris tersebut membaca byte file dan menghitung SHA-256, tanpa mengubah isinya. Tiga nilai keluaran perlu sama.

**3. Analisis salinan kerja.** Jalankan `py labs/log_triage.py hasil-belajar/forensik-demo/auth.kerja.jsonl` pada Windows atau ganti `py` dengan `python3` pada Linux/macOS. Bandingkan hasil dengan Bab 15. Kemudian buka salinan kerja di editor dan susun tabel berisi waktu UTC, pengguna, sumber, kejadian, serta nomor baris asal.

**4. Pisahkan pengamatan dan kesimpulan.** Pengamatan: pada 08.02.00–08.02.20 UTC, satu sumber tercatat gagal pada tiga akun. Dugaan: terjadi percobaan terhadap beberapa akun. Batas: dataset kecil, tidak memuat password, informasi perangkat, atau aktivitas sebelum rentang tersebut. Anda boleh menilai kejadian mencurigakan sambil menjelaskan batas itu.

**5. Periksa integritas setelah analisis.** Hitung hash salinan bukti lagi dan cocokkan dengan nilai awal. Tambahkan catatan chain of custody: waktu, pelaksana, tindakan “membuat salinan kerja”, dan lokasi file. Jika menemukan perbedaan hash, hentikan klaim bahwa salinan masih identik dan selidiki perubahan yang terjadi.

### Hasil yang diharapkan

Anda memperoleh dua salinan identik, tabel kronologi yang merujuk nomor baris, dan catatan asal bukti. Hasil peringkas sama dengan fixture awal. Laporan menyatakan bahwa ini latihan analisis satu log sintetis; Anda belum melakukan akuisisi disk atau memori.

### Jika macet

Jika hash berbeda, periksa apakah editor mengubah akhir baris atau encoding. Salin ulang dari sumber latihan yang belum berubah ke folder kasus baru, lalu catat percobaan yang gagal. Jika waktu terlihat berbeda saat dibuka alat lain, periksa pengaturan zona waktu. Jangan mengubah timestamp sumber agar cocok dengan cerita yang Anda harapkan.

### Latihan

Tambahkan bukti tabletop dari Bab 16 ke timeline, tetapi beri sumber berbeda dari log autentikasi. Tulis dua pertanyaan yang belum dapat dijawab, misalnya apakah ekspor berhasil dikirim atau siapa yang memakai akun bersama. Rancang jenis bukti tambahan dan cara memperolehnya melalui pengelola berwenang.

### Bukti kelulusan

Kumpulkan catatan kasus, hash sebelum dan sesudah, chain of custody, timeline, serta kesimpulan dengan batasan. Pembaca lain harus dapat mengikuti asal setiap klaim. Pendalaman berikutnya dapat memakai image latihan publik dan alat forensik, setelah Anda memahami akuisisi, privasi, dan prosedur alatnya.

### Referensi

- [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final): proses forensik dalam respons insiden.
- [Microsoft Get-FileHash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.5): hash file dengan PowerShell.
- [Python hashlib](https://docs.python.org/3/library/hashlib.html): fungsi hash pada contoh lintas OS.

---

<a id="bab-18"></a>

## Bab 18: Memahami program dan perilaku malware

### Tujuan dan prasyarat

Anda akan membaca perilaku sebuah program, memisahkan bukti dari dugaan, dan menulis laporan analisis. Selesaikan dasar Python, proses sistem operasi, jaringan, dan forensik dahulu. Praktik wajib memakai program Python yang Anda tulis sendiri. Pendalaman biner memerlukan compiler serta debugger pada lab terpisah.

### Konsep

**Malware** adalah perangkat lunak yang pelakunya gunakan untuk tindakan merugikan tanpa izin pemilik sistem. Jenisnya menggambarkan perilaku: ransomware mengganggu akses data, pencuri informasi mengambil informasi, dan worm menyebar antarsistem. Satu program bisa memiliki beberapa perilaku. Nama keluarga dari sebuah antivirus belum menjelaskan seluruh dampaknya.

**Reverse engineering** berarti menyimpulkan cara kerja program dari bentuk yang tersedia. Anda mungkin mendapat berkas executable tanpa kode sumber. Seperti teknisi memeriksa mesin cuci, Anda mempelajari komponennya, mengikuti aliran kerja, lalu menguji dugaan.

Analisis statis memeriksa berkas tanpa menjalankannya: format, teks, fungsi, dan alur instruksi. Analisis dinamis mengamati program saat berjalan: proses anak, perubahan berkas, atau koneksi. Keduanya saling melengkapi. Teks `hapus_backup` di dalam berkas belum membuktikan bahwa fungsi tersebut pernah berjalan.

Dalam biner, **disassembler** menampilkan instruksi mesin dalam bentuk assembly. **Decompiler** mencoba membentuk kode tingkat tinggi dari instruksi itu. Nama variabel dan struktur sumber aslinya bisa hilang. Ghidra menyediakan kedua kemampuan tersebut; dokumentasi resminya menjadi titik awal saat Anda masuk ke analisis biner.

**Obfuscation** mengubah tampilan program agar pembaca sulit mengikuti logikanya. **Packing** membungkus kode sehingga sebagian isi baru tampak setelah proses pembukaan. Pengembang perangkat lunak sah juga bisa memakai teknik serupa. Anda memerlukan konteks dan perilaku untuk menilai sebuah sampel.

### Praktik

Laundry Aman menerima skrip penghitung biaya dari vendor fiktif. Anda harus menjelaskan apa yang dikerjakannya sebelum pemilik toko memakainya. Buat `hasil-belajar/bab18/`, lalu simpan kode berikut sebagai `analisis_aman.py` di folder itu:

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

Di PowerShell, dari folder proyek jalankan:

```powershell
py hasil-belajar/bab18/analisis_aman.py
```

Di Linux/macOS, ganti `py` dengan `python3`. Program ini menghitung biaya, menampilkan sidik hash dari byte contoh, dan mencetak bytecode Python. Bytecode merupakan instruksi bagi mesin virtual Python; bentuknya berbeda dari assembly CPU. Nama instruksi dapat berubah antarversi Python.

Lakukan tiga putaran pemeriksaan:

1. **Sebelum menjalankan:** tulis prediksi untuk `biaya(3)`, `biaya(3, True)`, dan `biaya(-1)`. Catat seluruh impor dan operasi. Tidak ada pemanggilan jaringan, penulisan berkas, atau proses anak dalam contoh ini.
2. **Saat menjalankan:** cocokkan hasil dengan prediksi. Cari perbandingan terhadap nol, percabangan `anggota`, perkalian, dan nilai kembali di keluaran `dis`. Anda cukup mengikuti alurnya tanpa menghafal nama opcode.
3. **Sesudah menjalankan:** tambahkan pemanggilan `biaya(-1)` dalam blok `try/except ValueError`. Buktikan jalur penolakan. Ubah tarif menjadi 8000 dan jelaskan dua hasil normal yang ikut berubah.

Buat tabel laporan:

| Pernyataan | Bukti | Batas kesimpulan |
|---|---|---|
| Program menghitung diskon 10% | Cabang `anggota`, hasil 18900 untuk 3 kg | Baru mencakup contoh input ini |
| Fungsi menolak berat negatif | Pengecualian `ValueError` | Tipe nonangka belum diperiksa |
| Skrip tidak membuka koneksi pada kode yang dibaca | Tidak ada API jaringan pada sumber | Tidak berlaku untuk file vendor lain |

Tambahkan pemeriksaan `biaya("3")`. Hasilnya menunjukkan fungsi belum memvalidasi tipe dengan pesan yang ramah pengguna. Ini temuan kualitas input, bukan bukti malware.

Untuk pendalaman, kompilasi program C sederhana milik sendiri, buka di Ghidra, temukan fungsi `main`, lalu cocokkan cabang hasil dekompilasi dengan sumber. Catat versi compiler dan opsi optimasinya karena keduanya memengaruhi hasil. Ikuti panduan instalasi resmi Ghidra ketika benar-benar mengambil jalur ini.

Analisis sampel malware hidup memerlukan rancangan lab, penanganan bukti, dan pendampingan tersendiri. Gunakan latihan benign serta tantangan pendidikan sampai Anda menguasai isolasi. Jangan mengunggah berkas perusahaan ke pemindai publik tanpa izin pemilik data.

### Hasil yang diharapkan

Anda memperoleh keluaran `Normal: 21000` dan `Anggota: 18900`, serta laporan yang menunjuk bukti untuk tiap kesimpulan. Nilai hash berulang sama untuk byte sampel yang sama. Anda dapat menjelaskan bahwa hash mengenali isi, bukan menentukan niat pembuat program.

### Jika macet

- `ModuleNotFoundError` pada `dis`: periksa apakah Anda memberi nama file sendiri `dis.py`. Nama tersebut bisa menutupi modul standar.
- Instruksi bytecode berbeda dari contoh orang lain: bandingkan versi Python dan ikuti alur percabangannya.
- Program berhenti pada input negatif: tangkap pengecualian untuk eksperimen, lalu catat bahwa penolakan itu perilaku yang diharapkan.

### Latihan

Tambahkan biaya antar untuk alamat di luar radius tertentu, memakai jarak angka fiktif. Tukar program dengan teman tanpa menjelaskan aturan harganya. Minta ia menyimpulkan aturan melalui sumber dan enam input uji. Setelah itu, bandingkan dugaan dengan aturan asli.

### Bukti kelulusan

Simpan kode, enam hasil uji, diagram percabangan, dan satu halaman laporan. Anda lulus jika pembaca lain dapat mengulang hasil, membedakan pengamatan dengan dugaan, dan menunjukkan satu keterbatasan analisis Anda.

### Referensi

- [Ghidra, repositori resmi dan panduan awal](https://github.com/NationalSecurityAgency/ghidra).
- [Dokumentasi Python: modul dis](https://docs.python.org/3/library/dis.html).
- [MITRE ATT&CK untuk bahasa perilaku ancaman](https://attack.mitre.org/).

---

<a id="bab-19"></a>

## Bab 19: Memory safety, debugging, dan fuzzing

### Tujuan dan prasyarat

Anda akan menemukan cacat pembacaan input dengan contoh kecil, menjelaskan akar penyebab, lalu merancang pengujian perbaikan. Pahami variabel, fungsi, byte, dan terminal. Jalur Python berjalan tanpa compiler. Jalur C memerlukan Clang di Linux atau VM lab yang sudah Anda siapkan; Anda boleh mencatatnya sebagai NOT_RUN sampai alat tersedia.

### Konsep

Memori seperti deretan loker bernomor. Program menyimpan data pada rentang alamat tertentu. **Buffer** adalah area penyimpanan dengan kapasitas tertentu. Program yang membaca atau menulis di luar batas dapat merusak data atau berhenti. Pada kondisi tertentu, penyerang bisa memanfaatkan kerusakan ini untuk mengubah perilaku program.

**Pointer** menyimpan alamat memori. **Use-after-free** terjadi ketika program memakai alamat setelah melepaskan penyimpanannya. **Integer overflow** dapat membuat perhitungan ukuran melampaui rentang tipe angka. Mengganti satu fungsi salin tidak menyelesaikan seluruh kelas masalah tersebut.

**Fuzzing** menguji program dengan banyak input yang berubah-ubah. Peneliti mencari crash, waktu proses berlebihan, atau pelanggaran aturan. **Corpus** adalah kumpulan input awal. **Harness** adalah program penghubung yang memberikan input kepada fungsi yang hendak diuji. Kualitas harness menentukan bagian program yang terjangkau.

**Sanitizer** menambahkan pemeriksaan ketika compiler membangun program. AddressSanitizer membantu menemukan sejumlah kesalahan memori. Sebuah crash memberi petunjuk bug; peneliti masih harus menentukan penyebab dan dampaknya. Program tanpa crash pada satu corpus juga belum membuktikan keamanan menyeluruh.

### Praktik

Laundry Aman menggunakan format label paket mainan: byte pertama menyatakan panjang nama, lalu byte berikutnya berisi nama ASCII. Contoh `b"\x03Ani"` menyatakan tiga karakter. Format ini sengaja kecil agar Anda bisa memeriksa tiap byte.

Buat folder `hasil-belajar/bab19/` melalui pengelola berkas, lalu simpan kode berikut sebagai `parser_lab.py` di dalamnya:

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

Jalankan dengan `py hasil-belajar/bab19/parser_lab.py` di PowerShell, atau `python3` di Linux/macOS. `Random(42)` membuat urutan eksperimen dapat diulang. `UnicodeDecodeError` merupakan turunan `ValueError`, sehingga input non-ASCII juga masuk jalur penolakan. Jangan menangkap seluruh `Exception`: itu bisa menyembunyikan bug pemrograman yang ingin Anda temukan.

Empat contoh awal harus menerima Ani dan menolak tiga input lainnya. Seribu input acak cenderung menghasilkan banyak penolakan karena formatnya ketat. Tambahkan corpus terarah: panjang 1, 16, 17; input kosong; satu byte header; karakter non-ASCII; dan satu byte tambahan setelah nama. Anda sedang menguji **batas**, tempat banyak asumsi program gagal.

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

Array menyediakan delapan byte, termasuk byte penutup string `\0`. Nama delapan karakter sudah terlalu panjang. Penyebabnya adalah menyalin input tanpa memeriksa kapasitas tujuan.

Untuk jalur C opsional, simpan kode sebagai `label.c` di folder lab, lalu pada Bash Linux dengan Clang yang tersedia:

```bash
clang -g -O1 -fsanitize=address -fno-omit-frame-pointer label.c -o label
./label Ani
./label ABCDEFGH
```

`-g` menyertakan informasi debug; `-fsanitize=address` memasang pemeriksaan memori. Kasus kedua seharusnya menghasilkan laporan akses di luar buffer. Teks dan alamat laporan bergantung pada compiler serta sistem. Jalankan hanya biner lab milik sendiri.

Perbaiki bagian salin dengan pemeriksaan panjang sebelum menulis:

```c
size_t panjang = strlen(argv[1]);
if (panjang >= sizeof nama) {
    fputs("nama terlalu panjang\n", stderr);
    return 1;
}
memcpy(nama, argv[1], panjang + 1);
```

Kompilasi kembali, lalu uji nama panjang 0, 1, 7, 8, dan 20. Program versi perbaikan harus menerima paling banyak tujuh karakter; input lebih panjang harus keluar dengan kode 1 tanpa laporan sanitizer. Contoh ini hanya menangani argumen string yang telah memiliki penutup sesuai kontrak `argv`, bukan format biner arbitrer.

### Hasil yang diharapkan

Anda memiliki corpus input batas, perbedaan hasil sebelum/sesudah perbaikan, dan uraian akar penyebab. Dalam jalur Python, total percobaan acak harus 1000 dan tidak ada `AssertionError`. Dalam jalur C, Anda dapat menunjuk kapasitas buffer, panjang data, dan kebutuhan satu byte penutup.

### Jika macet

- `clang: command not found`: lanjutkan latihan Python dan tandai C sebagai NOT_RUN. Gunakan panduan toolchain resmi saat menyiapkan compiler.
- Tidak ada laporan sanitizer: pastikan flag masuk saat kompilasi dan linking, jalankan biner hasil build terakhir, serta catat lingkungan.
- Semua input acak ditolak: tambah input valid terarah, lalu ubah satu byte dari input itu. Banyak penolakan tidak sama dengan cakupan kode yang baik.

### Latihan

Ubah aturan nama menjadi huruf dan satu spasi di tengah. Tulis dahulu contoh yang harus diterima dan ditolak. Bandingkan random fuzzing dengan mutasi corpus valid. Untuk pendalaman spesialis, pelajari libFuzzer, coverage, minimisasi input pemicu, dan deduplikasi crash pada program open-source yang mengizinkan riset.

### Bukti kelulusan

Serahkan parser, delapan kasus batas, seed eksperimen, hasil perbaikan, dan satu contoh bug yang belum diuji. Anda lulus jika orang lain dapat mengulang kegagalan dan memahami alasan perbaikan tanpa menjalankan serangan terhadap layanan lain.

### Referensi

- [Clang AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html).
- [LLVM libFuzzer](https://llvm.org/docs/LibFuzzer.html).
- [Python: random](https://docs.python.org/3/library/random.html).

---

<a id="bab-20"></a>

## Bab 20: Identitas perusahaan, Active Directory, dan Kerberos

### Tujuan dan prasyarat

Anda akan menelusuri hubungan akun, grup, mesin, dan hak akses. Pahami autentikasi, otorisasi, Windows, jaringan, serta least privilege. Latihan menggunakan tabel fiktif dan Python. Anda tidak membutuhkan Windows Server berbayar atau akses domain kantor.

### Konsep

Laundry Aman tumbuh menjadi beberapa cabang. Mengelola akun satu per satu di tiap komputer mulai merepotkan. **Directory service** menyimpan identitas dan hubungan organisasi secara terpusat. **Active Directory Domain Services**, disingkat AD DS, merupakan layanan Microsoft untuk kebutuhan tersebut. **Domain controller** adalah server yang menjalankan layanan domain.

Sebuah **domain** mengelompokkan identitas dan pengelolaan. **Forest** dapat memuat beberapa domain dengan hubungan kepercayaan. **Group Policy** membantu administrator menerapkan pengaturan ke pengguna atau komputer. **Organizational Unit**, atau OU, merupakan wadah pengelompokan administrasi. OU bukan pengganti grup izin file.

**LDAP** adalah protokol untuk mengakses informasi direktori. **Kerberos** membantu membuktikan identitas melalui tiket. Bayangkan loket yang memverifikasi identitas Anda, lalu memberi tiket yang memungkinkan Anda meminta tiket layanan tertentu. **KDC**, pusat penerbit tiket, berada pada domain controller dalam lingkungan AD DS. **TGT** dipakai untuk meminta tiket layanan; layanan kemudian memeriksa tiket yang sesuai. Penjelasan ini menyederhanakan pertukaran kriptografinya.

DNS membantu klien menemukan layanan domain. Sinkronisasi waktu membantu pemeriksaan masa berlaku tiket. Gangguan login karena DNS atau waktu tidak otomatis berarti serangan. Periksa konfigurasi dan log sebelum menyimpulkan penyebab.

Tiga hubungan izin perlu Anda bedakan:

- **Keanggotaan:** akun mewarisi hak dari grup, termasuk grup di dalam grup.
- **Kontrol:** akun dapat mengubah anggota grup atau mengatur ulang akun lain.
- **Penggunaan:** akun layanan menjalankan aplikasi dengan akses tertentu.

Izin tampak kecil dapat membentuk jalur menuju aset besar. Seorang operator yang boleh mengubah anggota grup administrator mungkin memperoleh pengaruh lebih luas daripada hak baca direktori biasa. Penilaian perlu mengikuti hubungan, bukan hanya nama jabatan.

### Praktik

Gunakan inventaris fiktif ini:

| Akun | Status | Grup langsung | Kebutuhan kerja |
|---|---|---|---|
| rani.kasir | aktif | Kasir | Membaca dan membuat transaksi cabangnya |
| bima.it | aktif | Helpdesk | Mengatur ulang akun kasir |
| vendor.lama | kontrak berakhir | OperatorBackup | Tidak ada |
| svc.laporan | aktif | AdminCabang | Membaca transaksi untuk laporan |

Hubungan grup: `OperatorBackup` masuk ke `AdminCabang`; `AdminCabang` memiliki hak mengubah konfigurasi server cabang. Ini rancangan buruk untuk latihan, bukan rekomendasi struktur organisasi.

Buat folder `hasil-belajar/bab20/` melalui pengelola berkas, lalu simpan kode berikut sebagai `audit_grup.py` di dalamnya:

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

Jalankan `py hasil-belajar/bab20/audit_grup.py` di PowerShell, atau gunakan `python3`. Anda membuat graf kecil: simpul adalah akun/grup, sedangkan panah berarti keanggotaan. `pernah` mencegah perulangan tak berujung jika data memuat siklus.

Tulis tiga temuan. Pertama, akun vendor yang kontraknya berakhir masih memiliki jalur menuju admin. Kedua, akun laporan memiliki hak berlebih dibanding kebutuhan baca. Ketiga, struktur grup backup mencampurkan tugas pemulihan dengan administrasi server. Menonaktifkan akun vendor menyelesaikan akses akun itu, tetapi belum memperbaiki rancangan grup.

Rancang perbaikan bertahap:

1. Minta pemilik layanan memastikan ketergantungan akun vendor, lalu cabut akses sesuai proses penghentian kontrak.
2. Buat peran laporan yang hanya dapat membaca data yang diperlukan. Uji pekerjaan laporan dengan peran itu pada lab.
3. Pisahkan tugas backup dari administrasi. Tentukan siapa yang menyetujui pemulihan dan siapa yang mengauditnya.
4. Jadwalkan tinjauan keanggotaan bersama pemilik aplikasi; simpan alasan tiap pengecualian.

Uji rancangan pada data Python dengan mengganti hubungan yang berlebih. Tambahkan uji positif: pekerjaan laporan tetap mendapat hak baca. Audit yang hanya mencabut izin dapat merusak layanan jika tidak memeriksa kebutuhan sah.

Pada lingkungan AD DS berizin, perluas latihan menjadi pemeriksaan kebijakan akun layanan, pembatasan administrator, protokol lama, serta log perubahan grup. Teknik seperti password spraying, pass-the-hash, dan penyalahgunaan tiket menjelaskan risiko identitas; pembelajaran operasionalnya perlu lab khusus dan cakupan tertulis. Materi ini melatih cara menemukan dan menutup jalur izin tanpa mencoba kredensial pihak lain.

### Hasil yang diharapkan

Program menunjukkan jalur dua lompatan dari `vendor.lama` menuju `AdminCabang`, jalur langsung untuk `svc.laporan`, dan `None` untuk `rani.kasir`. Anda menghasilkan peta akses sesudah perbaikan serta daftar pemilik keputusan. Hasil `None` hanya berlaku bagi hubungan yang dimasukkan, bukan seluruh izin suatu domain nyata.

### Jika macet

- Sulit membayangkan graf: gambar tiap nama pada kertas, lalu tambahkan panah ke grup induknya.
- Semua akun tampak berbahaya: bandingkan izin dengan kebutuhan kerja, status akun, dan sensitivitas aset.
- Login lab gagal: periksa waktu, DNS, konektivitas, dan pesan kesalahan sebelum mengubah kebijakan keamanan.

### Latihan

Tambahkan grup `Supervisor` yang boleh mengubah anggota `Kasir`. Bedakan hubungan kontrol tersebut dari keanggotaan biasa. Jelaskan mengapa algoritma di atas belum menghitung seluruh bentuk kontrol dan apa data tambahan yang dibutuhkan.

### Bukti kelulusan

Simpan inventaris, peta sebelum/sesudah, tiga temuan berbasis kebutuhan kerja, dan uji bahwa fungsi sah tetap berjalan. Anda lulus jika dapat menjelaskan tiket Kerberos dengan bahasa sendiri dan membedakan audit graf sederhana dari penilaian domain lengkap.

### Referensi

- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).
- [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview).

---

<a id="bab-21"></a>

## Bab 21: Keamanan cloud, container, dan konfigurasi

### Tujuan dan prasyarat

Anda akan menilai konfigurasi cloud tanpa membuka akun atau menyalakan sumber daya berbayar. Pahami jaringan, identitas, file, dan prinsip least privilege. Praktik dilakukan dengan membaca dokumen JSON serta diagram di komputer sendiri.

### Konsep

**Cloud** menyediakan kemampuan komputasi melalui layanan penyedia. Dalam **IaaS**, pelanggan mengelola lebih banyak lapisan, termasuk sistem operasi mesin virtual. **PaaS** memindahkan sebagian pengelolaan platform kepada penyedia. **SaaS** menyediakan aplikasi siap pakai. Pemilik akun tetap perlu mengatur akses, klasifikasi data, serta konfigurasi yang menjadi tanggung jawabnya.

Model **shared responsibility** membagi tanggung jawab antara penyedia dan pelanggan. Pembagiannya bergantung pada layanan. Memindahkan backup Laundry Aman ke cloud tidak menentukan siapa yang boleh mengunduh backup itu; administrator masih harus menetapkan izin.

**IAM**, Identity and Access Management, mengatur identitas dan izinnya. Sebuah kebijakan menjawab siapa boleh melakukan aksi apa pada sumber daya mana. Dalam AWS, **ARN** adalah nama pengenal sumber daya. Penyedia lain memiliki konsep setara dengan format berbeda. Kebijakan contoh di bab ini memakai AWS agar sintaksnya konkret, tetapi prinsipnya berlaku lintas penyedia.

**Container** mengemas aplikasi beserta lingkungan pengguna yang dibutuhkannya. Container pada umumnya berbagi kernel host, sehingga batasnya berbeda dari VM. Menjalankannya dengan hak istimewa atau memasang direktori host dapat memperluas dampak kesalahan. **Infrastructure as Code**, atau IaC, menyimpan rancangan infrastruktur sebagai kode agar tim bisa meninjau dan mengulang perubahan.

**Serverless** mengurangi pengelolaan server langsung, tetapi fungsi tetap mempunyai identitas, input, dependency, dan akses jaringan. Rahasia yang tertulis di kode fungsi tetap menjadi masalah meskipun penyedia mengurus servernya.

### Praktik

Pemilik Laundry Aman meminta aplikasi laporan membaca berkas dari awalan `laporan/` di sebuah bucket, yaitu wadah objek penyimpanan. Ia tidak memberi kebutuhan menghapus, menulis, atau membaca backup pelanggan. Berikut usulan kebijakan yang terlalu luas:

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

Tanda `*` pada aksi mencakup aksi S3 yang cocok dengan pola; tanda `*` pada sumber daya memperluas cakupan sumber daya dalam evaluasi kebijakan. Akses efektif masih bergantung pada kebijakan lain dan penolakan eksplisit. Jangan menganggap satu dokumen sudah mewakili seluruh keputusan izin.

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

Nama bucket di sini hanya contoh. Kebijakan membatasi pembacaan objek pada awalan yang diminta. `s3:ListBucket` merupakan izin berbeda pada ARN bucket; tambahkan hanya bila kebutuhan aplikasi memerlukannya dan batasi kondisinya. Kebijakan ini juga belum memberi izin KMS jika objek membutuhkan kunci KMS tertentu.

Buat matriks uji sebelum mempertimbangkan deployment:

| Permintaan | Keputusan yang diinginkan | Alasan |
|---|---|---|
| Membaca `laporan/november.csv` | Izinkan | Sesuai tugas |
| Membaca `backup/pelanggan.csv` | Tolak | Di luar awalan |
| Menghapus laporan | Tolak | Tidak ada kebutuhan hapus |
| Menulis laporan baru | Tolak | Aplikasi ini hanya pembaca |

Matriks ini adalah rancangan test, bukan hasil pemanggilan AWS. Tandai validasi cloud sebagai NOT_RUN. Saat kelak memakai lingkungan berizin, uji akses positif dan negatif melalui simulator atau lingkungan uji yang sesuai, lalu periksa keseluruhan kebijakan yang berlaku.

Lanjutkan dengan audit rancangan container fiktif:

```text
image: laundry-app:latest
user: root
privileged: true
host_mount: /:/host
secret: ditulis dalam berkas konfigurasi sumber
network: menerima koneksi dari semua alamat
```

Hubungkan tiap temuan dengan kemungkinan dampak. Tag bergerak menyulitkan mengetahui artefak yang dipasang. Hak root dan privileged memperluas kewenangan. Mount root host membuka akses ke data host sesuai izin yang berlaku. Secret di sumber dapat menyebar ke riwayat Git. Akses jaringan perlu mengikuti kebutuhan layanan.

Usulkan image dengan digest yang telah diverifikasi, pengguna non-root, penghapusan privilese yang tidak dibutuhkan, tanpa mount host, secret melalui mekanisme yang sesuai, dan pembatasan jaringan. Konfigurasi ini perlu uji aplikasi: beberapa program memerlukan direktori sementara yang tetap dapat ditulis. Read-only filesystem tanpa rancangan penyimpanan bisa membuat aplikasi gagal.

Untuk Kubernetes, pelajari Pod Security Standards, service account, RBAC, serta NetworkPolicy. Sebuah namespace membantu pengelolaan tetapi tidak otomatis menyediakan seluruh isolasi keamanan. Anda tidak perlu memasang cluster untuk menyelesaikan audit rancangan ini.

### Hasil yang diharapkan

Anda menghasilkan kebijakan lebih sempit, empat keputusan uji, serta enam temuan konfigurasi container. Untuk tiap temuan, Anda menjelaskan siapa yang terdampak dan uji apa yang membuktikan perbaikannya. Anda juga dapat membedakan review offline dari bukti akses efektif di cloud.

### Jika macet

- Sulit memahami ARN: pisahkan bagian layanan, nama bucket, dan awalan objek. Cocokkan dengan dokumentasi resmi layanan.
- Ingin memberi wildcard agar cepat berjalan: catat aksi yang gagal dan kebutuhan bisnisnya, lalu tambahkan izin yang diperlukan.
- Rancangan hardening memutus aplikasi: cari kebutuhan tulis, jaringan, atau identitas yang sah. Jangan mengembalikan seluruh hak istimewa sekaligus.

### Latihan

Rancang akses cabang A dan B sehingga masing-masing hanya membaca awalan miliknya. Tambahkan satu akun audit yang boleh membaca kedua laporan tanpa menghapusnya. Buat enam kasus uji lintas peran, termasuk akses ke backup yang harus ditolak.

### Bukti kelulusan

Simpan diagram aliran data, tabel tanggung jawab, kebijakan usulan, dan matriks izin. Anda lulus jika dapat menerangkan batas IAM, jaringan, enkripsi, serta backup sebagai kontrol yang memiliki tugas berbeda.

### Referensi

- [AWS IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).
- [AWS S3 policy language dan cakupan sumber daya](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html).
- [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/).

---

<a id="bab-22"></a>

## Bab 22: Membangun perangkat lunak yang bisa dipercaya

### Tujuan dan prasyarat

Anda akan mengubah temuan keamanan menjadi requirement, test, perubahan kode, serta bukti rilis. Pahami pemrograman, Git, otorisasi, dan kelemahan web. Latihan memakai rancangan fitur Laundry Aman serta lab lokal yang tersedia dalam repositori.

### Konsep

**SDLC**, Software Development Life Cycle, mencakup pekerjaan sejak kebutuhan aplikasi sampai pemeliharaannya. Tim memasukkan keamanan pada tahap desain, implementasi, pengujian, rilis, dan respons terhadap temuan. Menemukan bug setelah rilis tetap penting, tetapi keputusan awal sering menentukan berapa sulit memperbaikinya.

**Supply chain perangkat lunak** mencakup kode, dependency, pembuat paket, sistem build, dan jalur distribusi. Aplikasi aman dapat menerima risiko dari paket yang keliru, akun maintainer yang diambil alih, atau build yang berubah tanpa review. Mengetahui asal sebuah berkas membantu penyelidikan, tetapi asal tepercaya tidak membuktikan seluruh kodenya bebas cacat.

Beberapa istilah yang akan Anda temui:

| Istilah | Pertanyaan yang dibantu |
|---|---|
| SAST | Pola berisiko apa yang tampak pada kode? |
| DAST | Perilaku berisiko apa yang tampak ketika aplikasi berjalan? |
| SCA | Komponen pihak ketiga apa yang dipakai dan diketahui bermasalah? |
| SBOM | Apa daftar bahan penyusun perangkat lunak ini? |
| Provenance | Dari sumber dan proses build mana artefak berasal? |

Alat tersebut menjawab pertanyaan berbeda. Pemindai dependency tidak membuktikan otorisasi pesanan benar. Signature dapat membantu memverifikasi penerbit atau integritas sesuai mekanismenya, tetapi tidak menjamin bahwa kode yang ditandatangani aman.

### Praktik

Laundry Aman akan menambah fitur ekspor transaksi. Mulai dari kebutuhan: kasir boleh mengekspor transaksi cabangnya, supervisor boleh mengekspor cabang yang dikelolanya, dan pelanggan tidak mendapat fitur ekspor seluruh transaksi.

Ubah kebutuhan menjadi empat **invariant**, yaitu aturan yang harus tetap benar:

1. Server mengambil identitas peminta dari sesi yang telah diverifikasi.
2. Server memeriksa peran dan cabang sebelum menghasilkan ekspor.
3. Ekspor tidak memuat kolom yang tidak diperlukan untuk pekerjaan peminta.
4. Log mencatat siapa mengekspor apa dan kapan tanpa menyimpan seluruh isi data.

Jangan menerima `role=admin` dari body permintaan sebagai bukti peran. Nilai dari pengguna merupakan input; server perlu mencari hak yang sah dari sumber identitasnya.

Buat rancangan test berikut sebelum menulis fungsi:

| Kasus | Hasil |
|---|---|
| Kasir A meminta cabang A | Data yang diperbolehkan saja |
| Kasir A meminta cabang B | Penolakan tanpa data cabang B |
| Pelanggan meminta ekspor penuh | Penolakan |
| Kasir A mengirim parameter peran palsu | Hak tetap sebagai kasir A |
| Sesi sudah berakhir | Penolakan autentikasi |
| Ekspor sah selesai | Audit event tercatat tanpa isi pelanggan |

Gunakan `labs/access_demo.py` untuk mengulang konsep pemeriksaan pemilik objek. Jalankan dari folder proyek dengan `py labs/access_demo.py`, atau `python3` pada Linux/macOS. Baca sumber contoh, lalu jelaskan bagian mana yang dapat berkembang menjadi pemeriksaan cabang. Contoh lokal adalah model pembelajaran; penanganan sesi, penyimpanan, serta audit produksi memerlukan rancangan tambahan.

Selanjutnya, audit jalur rilis fiktif berikut:

```text
Developer mengubah kode
  -> dependency diambil tanpa versi terkunci
  -> test dijalankan
  -> paket dibangun di laptop pribadi
  -> paket diunggah dengan akun bersama
  -> server memasang berkas tanpa pencatatan hash
```

Tandai titik yang menyulitkan pengulangan dan pertanggungjawaban. Contoh: test hari ini mungkin memakai versi dependency berbeda; akun bersama mengaburkan pelaku; artefak build sulit ditautkan dengan commit yang diuji.

Rancang alur pengganti: review perubahan, dependency terkunci serta ditinjau, test otomatis, build pada lingkungan terkendali, identitas rilis terbatas, lalu pencatatan commit dan digest artefak. Sebelum memasang, verifikasi bukti asal yang disediakan proses build. Tentukan pula cara menarik rilis bermasalah dan memulihkan versi sebelumnya.

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

Jangan memasukkan secret ke commit, hasil test, atau screenshot. Jika secret benar-benar bocor, penghapusan teks dari commit terakhir tidak mencabut nilainya. Pemilik perlu melakukan pencabutan atau rotasi, meninjau pemakaian, dan membersihkan lokasi penyimpanan yang relevan.

Untuk aplikasi yang memakai model AI, perlakukan jawaban model dan dokumen yang diambilnya sebagai input tak tepercaya. Pemeriksaan izin serta pembatasan alat tetap berada pada kode aplikasi. Isi dokumen pelanggan tidak boleh mengubah hak pengguna atau kebijakan ekspor.

### Hasil yang diharapkan

Anda menghasilkan aturan fitur yang bisa diuji, matriks izin, serta diagram rilis dengan bukti sumber dan artefak. Temuan keamanan berubah menjadi kondisi kelulusan test yang jelas. Anda dapat menjelaskan siapa yang menangani temuan setelah produk dipakai.

### Jika macet

- Test hanya menguji akses yang diizinkan: tambahkan perpindahan pengguna, cabang, peran, dan sesi kedaluwarsa.
- Scanner memberi ratusan hasil: validasi keterjangkauan dan dampak sebelum memilih prioritas; simpan alasan penundaan.
- Versi terkunci dianggap aman selamanya: lakukan pembaruan terencana dan pantau advisori resmi komponen yang dipakai.

### Latihan

Tambahkan fitur hapus transaksi dengan pembatalan yang tercatat. Tentukan siapa yang boleh melakukan, batas umur transaksi, dan jejak audit. Susun test untuk menghindari penghapusan lintas cabang serta test bahwa kegagalan tidak meninggalkan data setengah berubah.

### Bukti kelulusan

Serahkan threat model kecil, test negatif dan positif, serta catatan rilis. Anda lulus jika reviewer dapat menautkan satu risiko ke requirement, perubahan, dan bukti test yang menutupnya.

### Referensi

- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf).
- [SLSA specification](https://slsa.dev/spec/v1.2/).
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).

---

<a id="bab-23"></a>

## Bab 23: OSINT dan intelijen ancaman yang dapat diperiksa

### Tujuan dan prasyarat

Anda akan menilai informasi ancaman, memisahkan fakta dari penafsiran, dan menentukan tindakan untuk Laundry Aman. Pahami log, kerentanan, serta sumber jaringan. Praktik menggunakan kartu kasus fiktif; Anda tidak perlu mencari data pribadi atau menghubungi infrastruktur mencurigakan.

### Konsep

**OSINT**, Open Source Intelligence, menggunakan sumber yang tersedia secara terbuka untuk menjawab pertanyaan tertentu. Membuka banyak situs belum menghasilkan intelijen yang berguna. Mulailah dari keputusan: apakah Laundry Aman perlu memprioritaskan pembaruan komponen tertentu, atau apakah sebuah alamat dalam log memerlukan penyelidikan?

**Threat intelligence** menghubungkan informasi ancaman dengan konteks aset dan keputusan. **IOC**, indicator of compromise, adalah petunjuk seperti hash atau domain yang berhubungan dengan aktivitas tertentu. **TTP**, tactics, techniques, and procedures, menjelaskan pola tindakan pelaku. IOC dapat berubah cepat; pola perilaku membantu merancang deteksi yang tidak bergantung pada satu alamat.

**CVE** memberi pengenal bagi kerentanan tertentu. **CWE** mengelompokkan jenis kelemahan, seperti kontrol akses yang keliru. Nomor CVE tidak berarti komponen Laundry Aman pasti terdampak. Anda perlu memeriksa produk, versi, konfigurasi, keterjangkauan, dan mitigasi yang berlaku.

Sumber primer berasal dari pihak yang mengamati atau memelihara objek terkait, misalnya advisori vendor. Dua artikel yang menyalin satu laporan bukan dua bukti independen. Simpan asal informasi agar pembaca dapat melacaknya.

### Praktik

Gunakan paket latihan berikut. Nama produk dan advisori seluruhnya fiktif.

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

Kerjakan enam langkah:

1. Tulis pertanyaan: “Apakah kita terdampak dan tindakan apa yang perlu dilakukan hari ini?”
2. Catat fakta: versi masuk rentang; fitur aktif; permintaan tercatat sebagai ditolak; aplikasi punya ketergantungan pada import.
3. Pisahkan dugaan: penolakan itu mungkin percobaan tak sah atau salah input pengguna. Belum ada bukti bahwa data terbaca.
4. Nilai sumber: A relevan terhadap mekanisme bug; B membuat klaim luas tanpa bukti; C menjelaskan keadaan aset milik sendiri.
5. Pilih tindakan: koordinasikan pembatasan import atau jalur pemakaiannya, amankan log, uji pembaruan, dan periksa aktivitas import di sekitar waktu kejadian.
6. Tetapkan pemilik, tenggat, serta kondisi penutupan: versi baru terpasang dan test fungsi import serta test penolakan path lulus.

Tulis ringkasan seperti ini:

> Inventaris menunjukkan versi dan fitur kita cocok dengan kondisi terdampak pada advisori latihan. Kita belum memiliki bukti kompromi. Tim aplikasi perlu menguji pembaruan malam ini. Sambil menunggu, pemilik toko menyetujui pembatasan import dan memeriksa kebutuhan kerja cabang. Tim investigasi menyimpan log serta menelusuri permintaan terkait.

Tambahkan **tingkat keyakinan** beserta alasannya. Anda dapat memakai tinggi untuk kecocokan versi karena inventaris dan advisori sepakat, serta rendah untuk dugaan kompromi karena hanya ada satu event penolakan. Hindari angka probabilitas yang tidak memiliki dasar pengukuran.

Untuk latihan sumber nyata, buka repositori resmi CISA KEV melalui tautan referensi. Pilih satu entri, lalu buka advisori vendor dari entri tersebut. Catat tanggal pemeriksaan, produk, kondisi terdampak, dan tindakan vendor. Tidak perlu mengunduh proof-of-concept atau menjalankan apa pun. KEV membantu mengenali kerentanan yang telah dieksploitasi, tetapi ketidakhadiran sebuah bug dari katalog tidak membuktikan bahwa bug itu aman.

Pemetaan ATT&CK membantu memberi nama perilaku. Kaitkan hanya perilaku yang memang didukung bukti. Jangan mengisi seluruh rantai serangan hanya karena satu teknik tampak mungkin. Pemetaan yang jujur dapat berisi “belum diketahui”.

### Hasil yang diharapkan

Anda menghasilkan catatan intelijen satu halaman dengan pertanyaan, fakta, dugaan, sumber, keyakinan, dan tindakan. Pembaca dapat membedakan “terdampak kerentanan” dari “terbukti mengalami kompromi”. Keduanya menuntut respons yang berhubungan tetapi tidak identik.

### Jika macet

- Ada banyak artikel serupa: telusuri tautan ke laporan asal dan hitung sumber independennya.
- Alamat IP masuk daftar reputasi buruk: periksa tanggal, layanan bersama, dan konteks log sebelum memblokir layanan penting.
- Analisis macet karena belum pasti: tulis data yang kurang dan tindakan sementara yang proporsional dengan dampaknya.

### Latihan

Ubah kasus sehingga versi aplikasi 2.5.0, tetapi inventaris terakhir berumur enam bulan. Tentukan kesimpulan yang masih boleh dibuat dan pemeriksaan pertama yang paling berguna. Buat juga catatan distribusi: siapa perlu tahu rincian teknis, siapa hanya membutuhkan keputusan bisnis.

### Bukti kelulusan

Serahkan satu brief kasus fiktif dan satu verifikasi advisori nyata tanpa pengujian target. Anda lulus jika semua klaim penting memiliki sumber atau label dugaan, serta rekomendasi mempertimbangkan aset Laundry Aman.

### Referensi

- [CISA KEV, mirror resmi data](https://github.com/cisagov/kev-data).
- [MITRE ATT&CK](https://attack.mitre.org/).
- [FIRST Traffic Light Protocol untuk batas berbagi informasi](https://www.first.org/tlp/).

---

<a id="bab-24"></a>

## Bab 24: Risiko, tata kelola, dan keputusan bisnis

### Tujuan dan prasyarat

Anda akan menerjemahkan temuan teknis menjadi keputusan yang bisa diambil pemilik Laundry Aman. Pahami aset, ancaman, kontrol, dan respons insiden. Praktik menggunakan angka ilustrasi dan tidak memberikan kesimpulan hukum atau sertifikasi kepatuhan.

### Konsep

**Governance** atau tata kelola menjelaskan siapa yang menetapkan arah dan bertanggung jawab. **Risk management** mengelola ketidakpastian yang dapat merugikan tujuan organisasi. **Compliance** memeriksa kesesuaian terhadap kewajiban yang berlaku, misalnya kontrak atau regulasi. Ketiganya sering disingkat **GRC**.

Pemilik laundry mungkin tidak membutuhkan penjelasan seluruh header HTTP. Ia perlu mengetahui data apa yang berisiko, apakah toko dapat tetap beroperasi, siapa yang memperbaiki, dan bagaimana memastikan perbaikannya berhasil. Detail teknis tetap tersedia untuk pelaksana.

Risiko menghubungkan aset, ancaman, kelemahan, dan dampak. Kalimat “server berisiko tinggi” terlalu kabur. Kalimat “akun vendor yang masih aktif dapat mengubah konfigurasi server cabang setelah kontraknya berakhir” memberi objek yang dapat ditindaklanjuti.

**Risk owner** mempunyai wewenang menentukan respons terhadap risiko. Analis menyediakan bukti dan pilihan; ia tidak menerima seluruh risiko bisnis atas nama pemilik. Respons dapat berupa mengurangi, menghindari, berbagi sebagian konsekuensi melalui perjanjian, atau menerima risiko dengan alasan serta masa tinjau. Pembelian asuransi juga tidak menggantikan kontrol teknis.

**Residual risk** adalah risiko yang tersisa setelah kontrol diterapkan. Backup mengurangi dampak kehilangan data jika pemulihan berhasil, tetapi belum mencegah kebocoran salinan data. Satu kontrol jarang menutup seluruh sisi masalah.

NIST CSF 2.0 menyediakan kerangka hasil keamanan melalui fungsi Govern, Identify, Protect, Detect, Respond, dan Recover. Gunakan sebagai cara memeriksa cakupan kerja, kemudian pilih tindakan yang sesuai ukuran organisasi. Menempelkan nama framework pada dokumen belum membuktikan pelaksanaannya.

### Praktik

Laundry Aman memiliki tiga masalah fiktif:

| ID | Fakta awal | Dampak yang masuk akal |
|---|---|---|
| R1 | Akun vendor lama masih aktif dan memiliki hak admin cabang | Perubahan konfigurasi tanpa kebutuhan sah |
| R2 | Backup berjalan harian, pemulihan belum pernah diuji | Toko mungkin gagal memulihkan transaksi saat dibutuhkan |
| R3 | API mengembalikan pesanan pelanggan lain pada uji lokal | Data transaksi dapat dibaca lintas pelanggan |

Buat **risk register**, daftar risiko dengan pemilik dan tindak lanjut. Untuk latihan, gunakan skala kemungkinan 1–3 dan dampak 1–3. Definisikan arti skala terlebih dahulu: kemungkinan 3 berarti jalur penyalahgunaan mudah dijangkau dalam konteks kasus; dampak 3 berarti mengganggu operasi utama atau membuka data pelanggan secara berarti. Skor perkalian hanya alat bantu urutan; angka ordinal ini bukan perhitungan kerugian yang presisi.

Isi tiap baris dengan: deskripsi, bukti, aset, pemilik, skor awal, tindakan, tenggat, ukuran keberhasilan, dan risiko sisa. Contoh R2:

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

Tentukan **RPO**, jumlah kehilangan data dalam rentang waktu yang masih diterima, dan **RTO**, waktu pemulihan yang ditargetkan. Jika pemilik menerima kehilangan paling banyak satu jam transaksi, backup harian saja tidak memenuhi rancangan RPO itu. Jika ia membutuhkan layanan kembali dalam dua jam, mengunduh backup selama enam jam akan bertentangan dengan target RTO.

Sekarang bandingkan dua rencana latihan. Rencana A: enam jam kerja untuk menguji restore dan memperbaiki prosedurnya. Rencana B: enam jam kerja untuk merapikan tampilan dashboard monitoring. Dengan fakta R2, Anda dapat menjelaskan manfaat A menggunakan kebutuhan pemulihan. Keputusan ini bisa berubah jika dashboard ternyata menyembunyikan peringatan penting; catat asumsi agar keputusan dapat ditinjau.

Susun **evidence matrix**, yaitu hubungan aturan dengan buktinya:

| Pernyataan kontrol | Bukti yang dicari | Bukti yang belum cukup |
|---|---|---|
| Akses vendor berakhir setelah kontrak | Persetujuan dan hasil pemeriksaan akun | Dokumen kebijakan saja |
| Backup dapat dipulihkan | Catatan restore beserta pemeriksaan isi | Status job backup hijau |
| Ekspor dibatasi per cabang | Test positif/negatif dan konfigurasi aktif | Screenshot tombol tersembunyi |

Untuk kewajiban hukum dan kontrak, catat yurisdiksi, jenis data, peran organisasi, serta pihak penanggung jawab. Periksa sumber resmi yang berlaku ketika menghadapi kasus nyata dan libatkan pemilik kewajiban. Jangan menyimpulkan tenggat pelaporan dari ingatan atau memakai satu aturan untuk seluruh negara.

### Hasil yang diharapkan

Anda memiliki tiga risiko yang dapat ditindaklanjuti, pemilik keputusan, dan bukti yang diperlukan untuk menutup tiap temuan. Laporan satu halaman untuk pemilik toko menjelaskan dampak dan pilihan. Lampiran teknis menjelaskan cara pemeriksaannya.

### Jika macet

- Semua risiko mendapat skor tertinggi: perbaiki definisi skala dan bandingkan keterjangkauan serta dampak pada proses utama.
- Pemilik menunda perbaikan: catat alasan, kontrol sementara, siapa menerima risiko, dan tanggal tinjau.
- Auditor meminta bukti: berikan artefak yang relevan dan disamarkan, tanpa mengirim data pelanggan yang tidak dibutuhkan.

### Latihan

Tulis memo maksimal 200 kata yang meminta waktu pemeliharaan untuk memperbaiki R3. Sertakan dampak penghentian sementara dan cara memeriksa keberhasilan. Minta teman yang tidak belajar keamanan menjelaskan kembali keputusan yang Anda minta.

### Bukti kelulusan

Serahkan risk register, dua target pemulihan, evidence matrix, dan memo bisnis. Anda lulus jika pembaca mengetahui tindakan, penanggung jawab, serta syarat keberhasilan tanpa perlu menebak istilah teknis.

### Referensi

- [NIST Cybersecurity Framework dan CSF 2.0](https://www.nist.gov/cyberframework).
- [NIST CSF Quick Start Guides](https://www.nist.gov/cyberframework/quick-start-guides).

---

<a id="bab-25"></a>

## Bab 25: Menjadi spesialis dan melakukan riset mandiri

### Tujuan dan prasyarat

Anda akan memilih bidang pendalaman, merancang latihan berulang, serta menghasilkan riset yang dapat diperiksa orang lain. Selesaikan fondasi dan proyek kecil bab sebelumnya. Anda boleh memilih spesialisasi sebelum menguasai seluruh alat, tetapi perlu mengetahui prasyarat yang masih lemah.

### Konsep

Keahlian tinggi tampak saat Anda menangani kasus yang belum pernah dilihat, menjelaskan keterbatasan, dan memperbaiki kesalahan dengan bukti. Menghafal jawaban lab membantu sedikit; menyusun hipotesis dan menguji penyebab membantu Anda menghadapi kasus baru.

Bidang keamanan terlalu luas untuk dikuasai dengan kedalaman yang sama oleh satu orang. Bangun fondasi lebar, lalu pilih satu bidang utama. Anda bisa bekerja sama dengan spesialis lain sambil memperluas kemampuan. Istilah “level dewa” dalam tujuan awal buku ini berarti arah menuju kemampuan tersebut, tanpa jaminan waktu atau gelar otomatis setelah selesai membaca.

| Jalur | Pendalaman | Bukti kemampuan |
|---|---|---|
| Web/API dan application security | Model otorisasi, logika bisnis, parser, race condition | Temuan yang direproduksi, patch, dan regression test |
| Detection engineering dan DFIR | Telemetri, timeline, hipotesis, evaluasi rule | Deteksi dengan ukuran salah alarm dan kasus terlewat |
| Reverse engineering dan vulnerability research | C, assembly, debugger, format berkas, fuzzing | Root-cause analysis dan reproduksi minimal |
| Cloud dan identitas | IAM, trust, jaringan, kebijakan, IaC | Audit izin dan test akses efektif |
| Security engineering dan arsitektur | Threat modeling, desain kontrol, operasi | Perubahan desain yang menurunkan risiko terukur |

Mobile, wireless, perangkat keras, dan OT/ICS dapat menjadi jalur lanjutan. Masing-masing membutuhkan lingkungan dan pengetahuan tambahan. Pada sistem fisik, kegagalan dapat memengaruhi keselamatan manusia; latihan perlu simulator atau lab pendidikan yang memang dirancang untuk itu.

### Praktik

Pilih satu pertanyaan riset sempit, misalnya: “Apakah parser label tetap menolak input tambahan setelah nama?” Pertanyaan yang dapat diuji lebih berguna daripada “pelajari semua fuzzing”.

Gunakan siklus berikut selama empat sesi:

1. **Sesi pertama, memahami:** baca sumber dan dokumentasi format. Gambar aliran input ke keputusan. Tuliskan kontrak fungsi dan tiga asumsi yang mungkin salah.
2. **Sesi kedua, membuat eksperimen:** tulis input normal serta input batas. Tetapkan seed atau simpan corpus agar orang lain bisa mengulang. Catat versi lingkungan.
3. **Sesi ketiga, menjelaskan:** pilih satu hasil mengejutkan. Kurangi input sampai bagian pemicunya terlihat. Hubungkan dengan satu cabang kode atau asumsi format.
4. **Sesi keempat, memperbaiki dan meninjau:** buat perubahan terkecil yang menutup penyebab. Ulangi test normal dan gagal. Minta orang lain mengikuti catatan tanpa petunjuk tambahan.

Contoh hasil riset kecil: parser menerima nama tiga huruf walaupun ada data tambahan setelahnya. Peneliti menemukan bahwa kode hanya mengambil `data[1:4]` dan tidak memeriksa panjang total. Perbaikan menambahkan pemeriksaan bahwa jumlah byte tepat sama dengan panjang yang dinyatakan. Regression test memakai input valid, input kurang, dan input berlebih. Ini sudah melatih pekerjaan riset meskipun belum menyangkut bug produk nyata.

Untuk web/API, gunakan lab PortSwigger lalu buat catatan konsep yang tidak menyalin solusi. Setelah menyelesaikan satu topik dengan bantuan, ulangi beberapa hari kemudian tanpa membuka walkthrough. Coba varian yang mengubah asumsi: peran lain, objek lain, metode lain, atau batas tenant. Uraikan mengapa kontrol seharusnya berada pada server.

Untuk sistem dan biner, pwn.college menyediakan jalur latihan bertahap. Ikuti aturan publikasi platform; simpan rincian solusi secara pribadi jika pengelola melarang penyebaran. Catatan publik dapat membahas konsep, kegagalan pemahaman, dan program contoh milik sendiri.

Bangun portofolio yang memuat dua jenis hasil. Pertama, hasil teknis: reproduksi, patch, data uji, atau rule deteksi. Kedua, komunikasi: ringkasan dampak dan langkah perbaikan untuk orang di luar spesialisasi. Samarkan identitas dan jangan menyertakan kredensial atau data pihak lain.

Jika menemukan kelemahan pada perangkat lunak nyata dalam lingkup izin, lakukan **coordinated vulnerability disclosure**. Periksa kebijakan pemilik, saluran laporan, batas pengujian, dan aturan publikasi sebelum bertindak. Laporkan dengan reproduksi minimal serta dampak yang terbukti. Hentikan pengumpulan saat bukti sudah cukup; temuan bukan izin untuk memperluas akses. Koordinasikan jadwal komunikasi dan perbaikan melalui saluran yang ditetapkan. Buku ini tidak memberi tenggat universal untuk semua vendor.

Gunakan empat tingkat bukti untuk menilai kemajuan:

| Tingkat | Kondisi yang dapat diperiksa |
|---|---|
| Mengikuti | Mengulang contoh dan menjelaskan tiap langkah |
| Menerapkan | Menyelesaikan varian tanpa petunjuk rinci |
| Menganalisis | Memilih hipotesis, mencari bukti pembantah, menjelaskan akar masalah |
| Menghasilkan | Membuat perbaikan atau pengetahuan baru yang direview pihak lain |

Sertifikasi dapat membantu kebutuhan kerja tertentu, tetapi tidak diwajibkan untuk jalur gratis buku ini. Periksa silabus, biaya, aturan pembaruan, dan relevansi pekerjaan saat kelak mempertimbangkannya. Jangan mengukur kemajuan hanya dari jumlah badge atau peringkat CTF.

### Hasil yang diharapkan

Anda memiliki satu fokus, daftar prasyarat, pertanyaan riset, eksperimen berulang, dan rencana review. Anda dapat menjelaskan satu hal yang sudah terbukti dan satu hal yang belum diketahui. Jam latihan menjadi informasi perencanaan, bukan bukti keahlian dengan sendirinya.

### Jika macet

- Berpindah alat setiap hari: pertahankan satu pertanyaan selama beberapa sesi sampai memperoleh hasil yang dapat diuji.
- Selalu membutuhkan walkthrough: tulis petunjuk singkat sendiri, tutup solusi, lalu ulangi dengan jeda.
- Bug sulit direproduksi: kecilkan input, catat versi serta kondisi awal, dan bedakan hasil deterministik dari efek waktu atau lingkungan.

### Latihan

Susun rencana 12 minggu untuk satu jalur: tiga proyek kecil, satu proyek gabungan, dan dua review sejawat. Tetapkan hasil per minggu, bukan jumlah video yang ditonton. Sisakan waktu untuk mengulang fondasi yang gagal saat praktik.

### Bukti kelulusan

Serahkan laporan riset yang dapat diulang, perbaikan atau eksperimen pembantah, serta catatan review. Anda siap mendalami jalur ini jika dapat memperbaiki laporan setelah orang lain menemukan kelemahannya.

### Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security).
- [pwn.college dan aturan pembelajarannya](https://pwn.college/).
- [CERT/CC: Vulnerability Disclosure Guidance](https://www.kb.cert.org/vuls/guidance/).

---

<a id="bab-26"></a>

## Bab 26: Proyek akhir Laundry Aman

### Tujuan dan prasyarat

Anda akan menjalankan satu siklus penilaian, perbaikan, deteksi, dan pemulihan pada kasus yang utuh. Selesaikan bab fondasi, web/API, log, respons insiden, dan risiko. Jalur inti berjalan lokal dengan Python serta berkas teks. Anggap seluruh akun, log, dan data di bab ini sebagai data sintetis.

### Konsep

**Capstone** adalah proyek gabungan untuk membuktikan bahwa Anda dapat menghubungkan kemampuan dari beberapa bab. Anda berganti peran sebagai penguji, pengembang, analis, dan pemilik risiko. Jika bekerja dengan teman, pisahkan peran agar hasil tidak bergantung pada pengetahuan satu orang.

**Red team** menguji apakah suatu tujuan pengujian dapat dicapai dalam cakupan yang disetujui. **Blue team** melindungi, mendeteksi, dan merespons. **Purple teaming** membantu kedua pihak membandingkan tindakan pengujian dengan bukti deteksi, lalu memperbaiki kekurangannya. Kasus lokal ini merupakan simulasi kecil, bukan pengganti operasi red team perusahaan.

Tujuan bisnis Laundry Aman adalah menjaga pelanggan dapat melihat pesanannya sendiri, melindungi transaksi pelanggan lain, dan memulihkan layanan jika file transaksi rusak. Pemilik toko ingin keputusan yang jelas tanpa menghentikan seluruh pekerjaan karena satu dugaan.

### Praktik

#### 1. Tetapkan cakupan dan bukti awal

Buat folder `hasil-belajar/capstone/` dan catatan `scope.md`. Isinya: pengujian hanya pada kode serta data bab ini, tanpa layanan publik, tanpa kredensial nyata, dan tanpa koneksi jaringan yang diperlukan. Kegiatan berhenti jika Anda menyadari sedang memakai data di luar paket latihan.

Buat empat artefak awal: diagram pengguna ke aplikasi ke data, daftar tiga aset, daftar peran, serta daftar bukti yang akan dikumpulkan. Asetnya adalah data pesanan, identitas pelanggan, dan salinan pemulihan. Anda boleh menggambar diagram di kertas lalu menulis ulang dalam teks.

#### 2. Reproduksi kesalahan akses pada program lokal

Simpan kode berikut sebagai `hasil-belajar/capstone/pesanan.py`:

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

Jalankan `py hasil-belajar/capstone/pesanan.py` dari folder proyek. Pada Linux/macOS, gunakan `python3`. Bandingkan empat pasangan hasil. Pada versi rentan, Ani dapat membaca pesanan Budi karena fungsi mengabaikan identitas peminta. Pada versi aman, hasilnya `None`.

Tulis temuan dengan judul yang menyebut perilaku: “Fungsi pembacaan pesanan tidak memeriksa pemilik”. Sertakan prasyarat, input minimal, hasil aktual, hasil yang diharapkan, dan dampak. Jelaskan bahwa mengganti nomor pesanan dengan ID acak belum memperbaiki pemeriksaan izin.

Identitas `pengguna` pada contoh berasal dari argumen yang dipercaya oleh test. Pada aplikasi nyata, server harus mengambil identitas dari sesi yang sah; pengguna tidak boleh memilih identitas sendiri melalui parameter permintaan. Implementasi contoh juga tidak mengurus konkurensi atau penyimpanan produksi.

#### 3. Tambahkan regression test

Simpan sebagai `hasil-belajar/capstone/test_pesanan.py`:

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

Jalankan `py -m unittest discover -s hasil-belajar/capstone -p "test_*.py" -v`. Empat test harus lulus. Sebagai pembuktian test negatif, sementara ubah baris import menjadi `from pesanan import baca_rentan as baca_aman`, lalu jalankan command test yang sama. Dua test penolakan harus gagal. Kembalikan import ke `from pesanan import baca_aman` dan ulangi. Simpan catatan perbedaan, bukan hanya screenshot hasil hijau.

#### 4. Selidiki rangkaian event sintetis

Salin tabel berikut ke laporan. Waktu menggunakan UTC dan semua clock latihan dianggap sinkron.

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

Alamat `192.0.2.25` adalah alamat dokumentasi, bukan target untuk dihubungi. Data aplikasi menunjukkan permintaan lintas pemilik sebelum perbaikan. Namun status 200 sendiri, tanpa konteks isi respons atau kode, tidak selalu membuktikan data sensitif kembali. Dalam paket ini Anda memiliki kode rentan dan reproduksi lokal sebagai bukti tambahan.

Dua login gagal sebelum sukses menuntut pemeriksaan. Pemilik akun mungkin salah mengetik, atau pihak lain mencoba masuk. Tabel ini belum membuktikan siapa yang berada di belakang alamat tersebut. Catat data tambahan yang diperlukan: konfirmasi pemilik, perangkat, metode MFA, dan aktivitas sesi.

Rancang deteksi untuk pembacaan pesanan lintas pemilik yang ditolak. Tentukan field minimal: waktu, actor, objek, pemilik atau hasil keputusan izin, status, serta correlation ID. Hindari mencatat seluruh isi pesanan. Uji rule pada event normal dan event penolakan. Jelaskan bahwa penolakan yang terdeteksi membuktikan kontrol bekerja pada request itu, bukan keberhasilan pencurian data.

#### 5. Latih pemulihan dan keputusan bisnis

Buat berkas teks berisi tiga transaksi sintetis, lalu buat salinannya sebagai backup di folder capstone. Catat jumlah baris dan SHA-256 kedua berkas. Ubah satu transaksi pada salinan kerja. Pulihkan ke **berkas baru**, jangan menimpa bukti perubahan. Periksa hash dan isi hasil pemulihan terhadap backup.

Tulis urutan respons: simpan bukti, batasi fitur terdampak sesuai keputusan pemilik, pasang perbaikan, uji akses sah dan terlarang, lalu pantau. Untuk anomali login admin, buat jalur investigasi terpisah sampai ada bukti yang menghubungkannya dengan masalah akses pesanan.

Pemilik toko memberi waktu pemeliharaan 30 menit dalam skenario. Ukur lama latihan pemulihan Anda, catat lingkungan, dan jelaskan bahwa hasil file kecil tidak memprediksi waktu pemulihan database produksi. Buat risk register untuk kelemahan izin, logging yang kurang, dan backup yang belum diuji secara berkala.

#### 6. Serahkan paket hasil

Paket akhir berisi `scope.md`, diagram, laporan temuan, kode perbaikan, hasil test, timeline, rancangan deteksi, bukti restore, serta memo bisnis maksimal 200 kata. Tambahkan `limitations.md` yang menyebut komponen yang belum diuji. Hindari menampilkan data nyata sebagai contoh portofolio.

### Hasil yang diharapkan

Anda dapat menunjukkan jalur dari kebutuhan bisnis ke bug, bukti, perbaikan, regression test, deteksi, dan pemulihan. Pembaca lain dapat menjalankan ulang kode tanpa menebak lokasi file atau versi alat. Kesimpulan tentang login admin tetap terbatas pada bukti yang tersedia.

### Jika macet

- `ModuleNotFoundError: pesanan`: simpan kedua file pada folder yang sama dan gunakan command discovery dengan `-s` seperti di atas.
- Test hijau tetapi akses lintas pengguna masih terbuka: pastikan test memanggil implementasi yang benar dan mencakup penolakan.
- Sulit menulis kesimpulan: pisahkan kolom fakta, dugaan, bukti tambahan, dan keputusan sementara.
- Hash restore berbeda: periksa encoding, akhir baris, serta apakah Anda menyalin byte atau mengetik ulang isi.

### Latihan

Tambahkan peran supervisor yang hanya boleh membaca pesanan cabang yang dikelolanya. Rancang sendiri empat test baru, termasuk supervisor cabang lain. Jangan memberi akses seluruh pesanan hanya karena nama perannya supervisor.

Untuk penilaian berpasangan, minta teman mengubah satu kebutuhan dan satu event log tanpa memberi tahu lokasi perubahannya. Anda harus menemukan dampaknya melalui review dan test, lalu memperbarui laporan. Ini menguji transfer pemahaman ke kasus baru.

### Bukti kelulusan

| Aspek | Bobot | Syarat bukti penuh |
|---|---:|---|
| Cakupan dan inventaris | 10 | Aset, izin, batas, dan kondisi berhenti jelas |
| Reproduksi serta akar masalah | 20 | Temuan dapat diulang dengan data minimum |
| Perbaikan dan test | 25 | Akses sah tetap bekerja, akses terlarang ditolak |
| Analisis log dan deteksi | 20 | Timeline benar, dugaan dipisahkan, false positive dibahas |
| Pemulihan dan komunikasi | 15 | Restore diperiksa dan keputusan bisnis jelas |
| Pengulangan oleh reviewer | 10 | Reviewer mengulang tanpa bantuan lisan |

Target kelulusan latihan adalah 80/100 dengan syarat wajib: tetap dalam cakupan, tidak membocorkan secret, dan tidak menyebut dugaan sebagai fakta. Skor tinggi pada laporan tidak menutupi kegagalan syarat wajib. Kelulusan menunjukkan kemampuan pada kasus ini; bab spesialisasi memberi jalur untuk memperluasnya.

<details>
<summary>Petunjuk review setelah Anda mencoba sendiri</summary>

Temuan utama adalah otorisasi objek yang hilang. Perbaikan memeriksa pemilik di server dan mengurangi field respons. Test harus menolak pengguna lain serta identitas kosong. Timeline mendukung perbedaan perilaku sebelum/sesudah perbaikan. Login admin perlu investigasi tambahan; jangan menyebutnya pengambilalihan akun. Restore yang baik memeriksa isi dan integritas, lalu menjelaskan batas ukuran latihan. Nilai lebih diberikan untuk uji negatif baru dan alasan keputusan, bukan jumlah alat yang digunakan.

</details>

### Referensi

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework).
- [Python unittest](https://docs.python.org/3/library/unittest.html).

---

<a id="lampiran-1"></a>

## Jadwal belajar dan penilaian

Gunakan capaian sebagai syarat naik tingkat. Estimasi berikut merupakan rancangan
belajar, bukan jaminan durasi. Sesi 60 menit dapat dibagi menjadi 15 menit membaca,
35 menit praktik, dan 10 menit menulis hasil. Sisihkan satu sesi per minggu untuk
mengulang tanpa petunjuk. Jika istilah dasar belum jelas, perlambat sebelum
menambah alat.

### Rencana 48 minggu dengan 6–10 jam per minggu

| Minggu | Materi | Bukti sebelum lanjut |
|---|---|---|
| 1–2 | Bab 00–02 | Inventaris laptop, folder lab, scope, dan catatan error pertama |
| 3–5 | Bab 03–05 | Diagram jaringan, subnet sederhana, hak file, dan pencarian log |
| 6–8 | Bab 06–08 | Program kecil, penjelasan HTTP, dan eksperimen hash |
| 9–12 | Bab 09–11 | Matriks akses, rencana hardening, restore data sintetis, threat model |
| 13–17 | Bab 12–14 | Laporan temuan web di lab beserta bukti perbaikan dan analisis paket |
| 18–23 | Bab 15–17 | Aturan deteksi dengan kasus normal, timeline, dan laporan insiden |
| 24–28 | Bab 18–20 | Analisis program benign, eksperimen parser, dan audit identitas tabletop |
| 29–33 | Bab 21–24 | Review kebijakan cloud, dependency, intelijen, serta register risiko |
| 34–40 | Jalur Bab 25 | Satu proyek spesialisasi yang bisa direproduksi orang lain |
| 41–48 | Bab 26 | Capstone, review pihak lain, perbaikan, dan uji ulang |

Jika hanya punya 3 jam per minggu, rentangkan jadwal. Jika berpengalaman, lakukan
uji awal dengan praktik bab lalu lewati bacaan yang sudah dapat Anda jelaskan.
Riset mendalam membutuhkan siklus proyek berikutnya setelah tahun pertama.

### Lima tingkat kemampuan

| Tingkat | Kemampuan yang diperiksa | Ujian praktis |
|---|---|---|
| 1: orientasi | Bisa memakai terminal dan membedakan file, proses, jaringan | Jelaskan kegagalan membuka localhost dengan bukti |
| 2: fondasi | Memahami HTTP, izin, hashing, dan kode sederhana | Perbaiki pencarian SQL toy dan jelaskan hasilnya |
| 3: praktisi lab | Menemukan kelemahan, mengumpulkan bukti, memperbaiki | Kerjakan kasus baru dalam lab tanpa mengikuti walkthrough |
| 4: spesialis | Menentukan hipotesis, batas metode, dan prioritas | Selesaikan capstone dengan review teknis independen |
| 5: ahli yang terus berkembang | Menghasilkan riset/reproduksi baru dan keputusan yang bisa dipertanggungjawabkan | Rekan dapat mengulang hasil, menguji patch, dan mempertanyakan kesimpulan |

Nilai setiap hasil dengan skala 0–3: **0** belum dikerjakan; **1** mengikuti
contoh; **2** mampu mengulang tanpa contoh dan menjelaskan; **3** mampu menerapkan
pada variasi kasus dan menguji kegagalan. Untuk melanjutkan fondasi, targetkan
minimal 2 pada seluruh bukti bab. Untuk menyebut diri menguasai spesialisasi,
butuhkan nilai 3 dari lebih dari satu proyek dan masukan orang lain.

### Ketika terhambat

Catat tujuan, langkah terakhir yang berhasil, pesan error utuh, dan dugaan Anda.
Coba satu perubahan lalu ukur hasilnya. Gunakan dokumentasi perintah (`--help`,
`Get-Help`, atau `man`). Setelah 30–45 menit, baca petunjuk secukupnya; tulis bagian
yang Anda lewatkan. Ulangi latihan sehari kemudian tanpa petunjuk. Jangan
mengunggah log asli yang mengandung token atau data pelanggan ke forum maupun AI.

AI bisa membantu menjelaskan pesan error atau mengkritik laporan. Periksa jawaban
ke dokumentasi dan hasil lab. Minta AI memberi pertanyaan atau hint sebelum
memberi solusi lengkap. Catat ketergantungan bantuan dengan jujur.

### Portofolio yang dapat dinilai

Simpan scope, diagram, data sintetis, langkah reproduksi, hasil sebelum/sesudah,
dan keterbatasan. Tulis ringkasan satu halaman untuk pemilik usaha dan lampiran
teknis untuk engineer. Hormati aturan platform; sebagian platform meminta agar
solusi tantangan tidak dipublikasikan. Portofolio boleh menjelaskan konsep dan
lab buatan sendiri tanpa membagikan flag atau jawaban challenge aktif.

---

<a id="lampiran-2"></a>

## Peta roadmap ke tutorial

Acuan utama: [Cyber Security di roadmap.sh](https://roadmap.sh/cyber-security).
Indeks upstream yang diperiksa pada 6 November 2026 berisi **302 berkas konten**
di direktori `roadmaps/cyber-security/content`; beberapa membahas topik yang
berulang. Nomor itu bukan jumlah kemampuan yang otomatis dikuasai pembaca.
[Snapshot nama berkas](docs/ai/roadmap-inventory.json) mencatat commit
`d922417cd1ef690e66c008a3c3612f683e8e433a`.

Tabel ini mengelompokkan tema roadmap. **Praktik** berarti ada tugas terarah dalam
buku; **pengantar** berarti pembaca memperoleh model dasar dan perlu pendalaman;
**jalur lanjut** menunjuk latihan spesialisasi. Buku tidak mengajarkan seluruh
produk yang disebut roadmap satu per satu. Alat dapat berganti; kemampuan yang
ingin dilatih tetap dijelaskan.

| Kelompok topik roadmap | Bab | Kedalaman dan hasil |
|---|---|---|
| Fundamental IT, hardware, GUI/CLI, file CRUD, troubleshooting | 01–02, 04–06 | Praktik file, proses, diagnosis error |
| Operating systems, Linux, Windows, macOS | 01, 04–05 | Praktik Linux/Windows; macOS jalur terminal alternatif |
| Networking, LAN/WAN, OSI, TCP/UDP, ports | 03, 07, 14 | Praktik membaca aliran komunikasi |
| IP, public/private, loopback, subnet mask, CIDR, gateway | 03 | Latihan subnet dan alamat lokal |
| DNS, DHCP, ARP, NAT, route, NTP | 03, 14 | Pengantar mekanisme, diagnosis dan timestamp |
| Routers, switches, VLAN, perimeter, DMZ, segmentation | 03, 14 | Diagram dan matriks aliran yang diizinkan |
| Wireless, WPA/WEP, WPS, Bluetooth, NFC | 14 | Audit konfigurasi dan pengantar risiko radio |
| HTTP/HTTPS, SSH, FTP/SFTP, RDP, VPN | 03, 07–08, 14 | Pengantar peran protokol dan trust boundary |
| Virtualization, host/guest, hypervisor, isolation | 01 | Rancangan lab dan checkpoint; produk hypervisor opsional |
| Python, Bash, PowerShell, C, JavaScript, Go | 05–07, 19, 25 | Python/shell praktik; C pengantar; bahasa lain jalur pilihan |
| CIA, defense in depth, permissions, risk, zero trust | 00, 09–11 | Tabel akses, skenario ancaman dan kontrol |
| Authentication/authorization, MFA, SSO, local auth | 09, 20 | Praktik cek objek dan audit identitas |
| LDAP/LDAPS, Kerberos, RADIUS, group policy | 20 | Pengantar enterprise dan latihan graf izin tabletop |
| Hashing, salting, keys, PKI, certificates, TLS | 08–09 | Eksperimen hash dan penjelasan rantai kepercayaan |
| Hardening, patching, backups, resiliency | 10–11 | Checklist berbukti dan latihan pemulihan |
| AV, EDR, firewall, IDS/IPS, DLP, NAC | 10, 14–15 | Perbedaan fungsi, penempatan kontrol dan gap deteksi |
| Social engineering, phishing, impersonation | 09–10, 16 | Analisis pesan buatan dan proses verifikasi identitas |
| Brute force, password spray, spoofing, MITM, replay | 09, 14–16, 20 | Mengenali mekanisme, bukti, dan mitigasi; bukan kampanye nyata |
| Web attacks, SQL injection, XSS, CSRF, traversal | 07, 12–13 | Lab SQL lokal, kasus web dan latihan resmi berizin |
| Reconnaissance, port scanners, Nmap, curl | 07, 12 | Observasi localhost dan scope tertulis |
| Packet captures, Wireshark, tcpdump, NetFlow | 14–15 | Membaca metadata dan batas visibility |
| Exploit frameworks, privilege escalation, LOLBAS/GTFOBins | 18–20, 25 | Konsep abuse of trust dan jalur CTF; tidak ada playbook produksi |
| Malware, sandboxing, reverse engineering, obfuscation | 18–19 | Analisis program benign; tidak menjalankan malware hidup |
| Buffer overflow, memory leaks, zero-day | 19, 25 | Eksperimen parser, sanitizer opsional dan metode riset |
| SIEM, SOAR, logs, false positive/negative | 15 | Triase data sintetis dan pengukuran kualitas aturan |
| Threat hunting, ATT&CK, kill chain, diamond model | 16, 23 | Hipotesis, bukti yang dibutuhkan, batas atribusi |
| Incident response dan runbooks | 16 | Latihan meja identifikasi sampai pemulihan |
| Forensics, memory/disk evidence, Autopsy/FTK | 17–18, 25 | Integritas salinan dan timeline; suite forensik pendalaman opsional |
| OSINT, threat intelligence, URL/hash reputation | 23 | Validasi sumber dan data sintetis tanpa profiling orang |
| Cloud vs on-prem, IaaS/PaaS/SaaS, AWS/Azure/GCP | 21 | Review offline dan pembagian tanggung jawab |
| IaC, serverless, storage, deployment | 21–22 | Pemeriksaan konfigurasi dan secret tanpa membuat resource berbiaya |
| NIST, CIS, ISO, CSF, RMF, compliance, stakeholders | 11, 24 | Risiko, kontrol, bukti, dan komunikasi bisnis |
| Blue/red/purple teams, rules of engagement | 00, 12, 26 | Capstone dengan temuan, deteksi, perbaikan, retest |
| CTF, Bandit, picoCTF, pwn.college, platform praktik | 01, 25 | Latihan lanjutan berdasarkan prasyarat, bukan lomba jumlah flag |
| Sertifikasi dasar/profesional | 25 | Pilihan setelah kemampuan terbukti; ujian tidak wajib |

### Topik tambahan untuk praktik modern

Keamanan API per objek, secure SDLC, dependency/supply chain, fuzzing,
pengujian regresi, dan reproducibility mendapat penekanan tersendiri. Tambahan
tersebut membantu menghubungkan pengetahuan roadmap dengan pekerjaan yang dapat
ditinjau oleh developer maupun tim operasi.

Produk NAS/SAN, suite perkantoran, setiap platform virtualisasi, dan setiap
sertifikasi dalam roadmap tidak mendapat panduan instalasi tersendiri. Pelajari
produk yang digunakan lingkungan kerja Anda setelah menguasai konsep akses,
backup, jaringan, serta tanggung jawab operasional. Ini batas cakupan buku,
bukan pernyataan bahwa topik tersebut tidak penting.

---

<a id="lampiran-3"></a>

## Kamus istilah

Baca arti singkatnya, lalu kembali ke contoh bab. Istilah yang berdekatan dapat
memiliki batas berbeda tergantung sistem; gunakan dokumentasi produk untuk detail.

| Istilah | Arti dan contoh |
|---|---|
| Aset | Sesuatu yang dilindungi: akun, nota, laptop, waktu operasional |
| Ancaman | Sumber atau kejadian yang bisa merugikan aset |
| Kerentanan | Kelemahan yang memungkinkan dampak, seperti izin baca terlalu luas |
| Risiko | Kemungkinan dan dampak skenario merugikan dalam konteks tertentu |
| Kontrol | Langkah yang mengurangi risiko, seperti pemeriksaan pemilik nota |
| CIA | Confidentiality, integrity, availability: kerahasiaan, keutuhan, ketersediaan |
| Scope | Batas target, teknik, waktu, dan data yang diizinkan dalam pekerjaan |
| RoE | Rules of engagement, kesepakatan pelaksanaan pengujian |
| Lab | Lingkungan latihan dengan target dan data yang sengaja disiapkan |
| CTF | Capture the flag, tantangan latihan dengan sasaran yang ditentukan penyelenggara |
| Terminal | Jendela untuk memberi dan membaca perintah teks |
| Shell | Program yang menafsirkan perintah, misalnya PowerShell atau Bash |
| CLI / GUI | Antarmuka perintah teks / antarmuka grafis |
| Direktori | Folder tempat file dan folder lain berada |
| Proses | Program yang sedang berjalan, memiliki identitas proses dan hak akses |
| Service | Program yang melayani fungsi tertentu, sering berjalan di latar belakang |
| Permission | Hak melakukan tindakan pada objek tertentu |
| Least privilege | Memberi hak secukupnya untuk tugas yang diperlukan |
| Hardening | Mengurangi peluang penyalahgunaan melalui konfigurasi dan pengurangan fitur |
| Patch | Perubahan software untuk memperbaiki bug atau masalah keamanan |
| IP | Alamat logis untuk komunikasi jaringan; bukan identitas seseorang |
| Port | Nomor endpoint transport TCP/UDP tempat aplikasi menerima komunikasi |
| Localhost | Nama yang menunjuk perangkat sendiri; sering 127.0.0.1 atau ::1 |
| Subnet / CIDR | Pembagian jaringan / penulisan panjang prefix seperti /24 |
| DNS | Sistem pemetaan nama ke informasi seperti alamat IP |
| DHCP | Mekanisme pemberian konfigurasi jaringan kepada klien |
| ARP | Pencarian alamat link untuk IPv4 pada jaringan lokal |
| NAT | Penerjemahan alamat; bukan pengganti kebijakan firewall |
| Firewall | Kontrol lalu lintas berdasarkan aturan |
| VLAN | Pembagian jaringan layer 2 secara logis |
| DMZ | Segmen terpisah untuk layanan dengan tingkat eksposur tertentu |
| TCP / UDP | Transport dengan aliran andal berurutan / datagram tanpa jaminan bawaan serupa |
| HTTP | Protokol permintaan dan respons untuk web |
| HTTPS / TLS | HTTP melalui TLS / protokol perlindungan komunikasi |
| Certificate / PKI | Pernyataan bertanda tangan tentang identitas dan kunci / sistem pengelola kepercayaan |
| Hash | Ringkasan deterministik dari data, berguna untuk memeriksa perubahan |
| Enkripsi | Mengubah data menggunakan kunci agar pihak yang tidak memiliki hak sulit membacanya |
| Salt | Nilai unik yang digunakan bersama password dalam proses password hashing |
| Authentication | Membuktikan siapa pengguna atau layanan yang mengakses |
| Authorization | Memutuskan tindakan yang boleh dilakukan identitas tersebut |
| Session | Konteks interaksi pengguna setelah login, biasanya diwakili identifier |
| Cookie | Data yang browser simpan dan kirim sesuai aturan domain/path dan atributnya |
| MFA | Penggunaan lebih dari satu kategori faktor autentikasi |
| SSO | Masuk melalui penyedia identitas untuk mengakses beberapa aplikasi |
| API | Kontrak interaksi antarprogram |
| SQL injection | Input mengubah struktur perintah SQL karena konstruksi query yang salah |
| XSS | Input tidak tepercaya berjalan sebagai kode dalam konteks halaman korban |
| CSRF | Browser pengguna melakukan tindakan tak diinginkan dengan kredensial yang terkirim otomatis |
| IDOR / BOLA | Objek dapat diakses tanpa pemeriksaan hak yang sesuai |
| SSRF | Server melakukan permintaan ke tujuan yang dipengaruhi input tak tepercaya |
| Threat model | Gambaran aset, aliran, batas kepercayaan, skenario ancaman, dan kontrol |
| Attack surface | Titik interaksi yang dapat dijangkau pihak dengan tingkat akses tertentu |
| Exploit | Cara memanfaatkan kelemahan; keberhasilan bergantung kondisi dan versi |
| PoC | Proof of concept, demonstrasi terbatas untuk membuktikan suatu klaim |
| CVE | Identifier untuk catatan kerentanan; bukan skor risiko |
| CVSS | Kerangka penilaian keparahan teknis kerentanan |
| IOC | Indicator of compromise, petunjuk yang perlu dinilai dalam konteks |
| TTP | Tactics, techniques, procedures: tujuan, cara, dan detail perilaku |
| SOC | Tim/fungsi yang memantau dan merespons kejadian keamanan |
| SIEM | Sistem pengumpulan dan analisis event dari beberapa sumber |
| SOAR | Dukungan orkestrasi/otomasi alur respons dengan batas dan persetujuan yang sesuai |
| EDR | Telemetri, deteksi, dan respons pada endpoint |
| IDS / IPS | Deteksi aktivitas mencurigakan / pencegahan inline berdasarkan aturan atau analisis |
| False positive | Sistem memberi alarm terhadap kasus yang ternyata bukan kondisi sasaran |
| False negative | Sistem melewatkan kasus yang sebenarnya memenuhi kondisi sasaran |
| Triage | Pemeriksaan awal untuk menetapkan prioritas dan langkah berikutnya |
| Containment | Membatasi dampak atau penyebaran insiden |
| Eradication | Menghilangkan penyebab dan komponen kompromi yang ditemukan |
| Recovery | Memulihkan layanan dengan verifikasi keamanan dan fungsi |
| Forensik | Pemeriksaan bukti digital dengan metode, integritas, serta jejak penanganan yang tercatat |
| Chain of custody | Catatan siapa menangani bukti, kapan, untuk apa, dan bagaimana |
| Reverse engineering | Memahami perilaku/struktur program dari artefaknya |
| Static / dynamic analysis | Analisis tanpa menjalankan target / melalui eksekusi terkontrol |
| Fuzzing | Menguji program dengan banyak variasi input untuk menemukan perilaku yang salah |
| Memory safety | Perlindungan agar akses memori mengikuti batas dan masa hidup yang benar |
| IAM | Pengelolaan identitas dan akses |
| Active Directory | Layanan direktori Microsoft untuk lingkungan domain |
| Kerberos | Protokol autentikasi berbasis tiket dan otoritas tepercaya |
| IaC | Infrastructure as code, definisi infrastruktur dalam berkas yang dapat ditinjau |
| Container | Proses terisolasi dengan lingkungan aplikasi; tetap berbagi kernel host |
| Supply chain | Rangkaian komponen dan proses yang membentuk/mendistribusikan software |
| SBOM | Daftar komponen software untuk membantu inventaris dan penelusuran |
| SAST / DAST | Analisis keamanan kode/artefak / pengujian aplikasi yang berjalan |
| GRC | Governance, risk, compliance: tata kelola, risiko, dan kepatuhan |
| RTO / RPO | Target waktu pemulihan / target batas kehilangan data berdasarkan waktu |
| Retest | Pengujian ulang temuan setelah perbaikan |
| Regression test | Uji agar perubahan tidak mengembalikan bug atau merusak perilaku lain |

---

<a id="lampiran-4"></a>

## Template bukti belajar

Salin template ke folder `hasil-belajar/`. Folder tersebut diabaikan Git secara
default; pilih dan samarkan bukti sebelum memublikasikannya.

### Catatan eksperimen

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

### Scope dan rules of engagement

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

Contoh scope lab: hanya `127.0.0.1:8000`, file dummy di direktori lab, selama
satu sesi 30 menit. Pemilik laptop menyetujui baca file dummy dan koneksi manual;
tidak ada scan LAN. Berhenti jika layanan lain terganggu atau muncul data pribadi.
Alamat privat kantor tidak otomatis masuk scope karena dapat dijangkau.

### Laporan temuan

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

Contoh ringkas: **LA-001: Bob bisa membaca nota Alice.** Pada fungsi lab tanpa
cek pemilik, Bob meminta nota 101 dan menerima status milik Alice. Dampak terbukti:
kebocoran satu nota dummy. Perbaikan: verifikasi identitas dari sesi server lalu
periksa kepemilikan objek. Retest: Bob ditolak, Alice tetap berhasil. Jangan
menulis “seluruh database bocor” jika bukti hanya menunjukkan satu objek.

### Timeline insiden

| Waktu UTC | Sumber | Fakta yang diamati | Hipotesis | Bukti tambahan | Keyakinan |
|---|---|---|---|---|---|
| 08:02:00 | Log login sintetis | Login Alice gagal dari 198.51.100.8 | Aktivitas otomatis atau pengguna sah | Device, MFA, konteks user | Rendah |
| 08:02:30 | Log yang sama | Operator berhasil dari alamat tersebut | Akun mungkin perlu diperiksa | Tindakan setelah login | Rendah |

### Serah terima bukti

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

| Risiko | Aset | Skenario | Kontrol saat ini | Dampak | Kemungkinan dan alasan | Tindakan | Pemilik | Tenggat | Risiko tersisa |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Nota pelanggan | Kasir membaca nota lintas cabang | Login tanpa pembatasan cabang | Privasi dan komplain | Sedang; akses objek belum diuji | Tambah cek cabang dan test negatif | Tim aplikasi | Tanggal rencana | Evaluasi setelah retest |

Gunakan tanggal nyata saat mengerjakan. Nilai risiko di template merupakan contoh
pendidikan, bukan asesmen untuk perusahaan tertentu.

---

<a id="lampiran-5"></a>

## Referensi dan latihan lanjutan

Peta pembelajaran mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security)
dan [direktori konten upstream](https://github.com/nilbuild/developer-roadmap/tree/d922417cd1ef690e66c008a3c3612f683e8e433a/roadmaps/cyber-security/content).
Gaya penyajian mengikuti [tutorial AI Engineer pengguna](https://github.com/kvnlhm/tutorial-ai-engineer).
Isi penjelasan, data, latihan, dan kode dalam proyek ini disusun untuk kasus
Laundry Aman. Tidak ada afiliasi atau sertifikasi dari pengelola sumber tersebut.

### Pilihan latihan tanpa biaya layanan

| Sumber | Gunakan untuk | Prasyarat dan batas |
|---|---|---|
| **Rekomendasi awal: [OverTheWire Bandit](https://overthewire.org/wargames/bandit/)** | Mengulang dasar terminal dan file | SSH dan dasar Bab 04; baca aturan server |
| [PortSwigger Web Security Academy](https://portswigger.net/web-security) | Web dan API melalui lab interaktif gratis | Pahami HTTP; pakai instance lab yang disediakan, fitur Pro tidak wajib untuk jalur dasar |
| [pwn.college](https://pwn.college/) | Fondasi sistem dan pendalaman keamanan | Ikuti urutan materi; hormati permintaan pengelola agar solusi challenge tidak dipublikasikan |

Mulai dengan satu sumber sesuai tahap. Selesaikan beberapa latihan, jelaskan
hasilnya, lalu pindah topik. Layanan di luar daftar ini mungkin memiliki bagian
gratis dan berbayar; periksa syarat terbaru. Tutorial tidak meminta pembelian,
top-up, uji coba berkartu kredit, atau deployment cloud.

### Dokumentasi untuk memeriksa penjelasan

| Sumber primer | Kegunaan |
|---|---|
| [Python docs](https://docs.python.org/3/) | Perilaku library dan contoh kode lokal |
| [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Request, response, header, cookie, dan browser |
| [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Metode pengujian web; gunakan versi rilis untuk acuan stabil |
| [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | Pola perbaikan yang spesifik untuk developer |
| [Nmap reference](https://nmap.org/book/man.html) | Makna opsi dan status port |
| [Wireshark User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Capture, filter, dan pembacaan paket |
| [NIST CSF](https://www.nist.gov/cyberframework) | Menghubungkan kontrol keamanan dengan pengelolaan risiko |
| [MITRE ATT&CK](https://attack.mitre.org/) | Bahasa bersama untuk membahas perilaku yang diamati |
| [FIRST CVSS](https://www.first.org/cvss/) | Penjelasan penilaian keparahan teknis |

Setiap bab memuat sumber yang lebih dekat dengan pembahasannya. Ketika sumber
berubah, simpan tanggal akses, versi alat, dan hasil percobaan. Jangan memakai
angka CVSS, status “gratis”, atau nama versi dari ingatan tanpa memeriksanya.

### Cara membaca sumber berbahasa Inggris

Ambil satu paragraf dan tandai istilah yang menentukan perilaku, seperti
`MUST`, `SHOULD`, `default`, `deprecated`, atau `unsupported`. Cari contoh
minimum, jalankan di lab, lalu jelaskan ulang dalam bahasa Indonesia. Simpan
istilah aslinya di catatan agar Anda bisa mencari dokumentasi berikutnya. Bila
terjemahan terasa kabur, cocokkan dengan output program dan konteks sumber.

### Batas penggunaan referensi

Roadmap membantu memilih urutan topik, bukan bukti bahwa suatu kontrol aman.
Dokumentasi menjelaskan rancangan atau perilaku yang didukung, sedangkan lab
memeriksa kasus konkret. Laporan yang baik menyertakan keduanya dan menyebut
kondisi yang belum diuji. Jangan mengunggah file rahasia ke sandbox atau layanan
reputasi publik hanya karena alat tersebut tersedia dalam roadmap.

---

<a id="lampiran-6"></a>

## Panduan pendamping dan pemeriksaan kemampuan

Gunakan panduan ini sebagai teman belajar, pengajar, atau pembaca yang memeriksa
dirinya sendiri. Tujuannya menemukan bagian yang belum dipahami dan menentukan
latihan berikutnya. Buku dan simulator belum menjadi bukti bahwa pengguna awam
tertentu telah diuji atau bahwa seluruh pembaca akan mencapai hasil yang sama.

### Mulai dengan pengamatan

Minta pelajar membuka folder tutorial, menemukan satu file, dan menjelaskan
apa yang akan terjadi sebelum membuka file. Jangan mengambil mouse untuk
menyelesaikan tugasnya. Catat bagian yang membuatnya berhenti: istilah, lokasi
kontrol, kesalahan ketik, atau konsep. Jika ia belum bisa membuka folder,
mulai dari pra-bab; jangan memberinya tugas jaringan sambil berharap dasar itu
akan terbentuk sendiri.

Pertanyaan awal yang berguna adalah “Tunjukkan tempat Anda akan mengetik alamat
website,” “Apa bedanya file ini dengan foldernya?”, dan “Bagaimana kita tahu
catatan sudah tersimpan?” Nilai berdasarkan peragaan dan alasan. Hafalan nama
aplikasi saja tidak menunjukkan bahwa pelajar dapat memakai aplikasi tersebut.

### Satu sesi 15–25 menit

1. Pilih satu hasil kecil: menemukan lokasi file, menolak akses ke nota orang
   lain, atau membedakan bukti log dari dugaan.
2. Tunjukkan satu contoh lengkap. Ucapkan alasan keputusan, misalnya “Saya
   memeriksa siapa pemilik nota sebelum menyetujui akses.”
3. Minta pelajar mengerjakan contoh serupa dengan sebagian petunjuk dihilangkan.
   Beri waktu berpikir; jangan menyebut jawaban setiap kali ia berhenti.
4. Ubah data atau konteks. Minta prediksi sebelum ia menjalankan tindakan.
5. Tutup dengan penjelasan singkat dari pelajar: hasil, bukti, dan keterbatasan.

Jika satu sesi habis untuk menemukan folder, simpan capaian itu sebagai hasil
yang sah. Pilih tugas berikutnya berdasarkan hambatan yang diamati. Kurangi
jumlah konsep baru bila pelajar sudah sulit mengingat instruksi pertama.

### Tangga bantuan

Mulai dengan pertanyaan yang mengarah ke pemeriksaan: “Apa hasil yang Anda
harapkan?” Lalu minta pelajar menunjukkan data yang relevan. Jika masih terhenti,
berikan nama konsep atau bagian materi. Sesudah itu barulah berikan satu langkah
contoh. Catat tingkat bantuan tertinggi yang diperlukan; bantuan merupakan data
untuk menentukan latihan ulang, bukan kesalahan yang perlu disembunyikan.

Minta pelajar membaca ulang hasil setelah berhasil. Contoh: aturan firewall yang
memblokir semua koneksi mungkin menutup akses terlarang, tetapi juga menghentikan
pekerjaan kasir. Pelajar perlu menguji bahwa akses sah tetap berfungsi. Pertanyaan
“Apa yang masih harus bisa bekerja?” menghubungkan keamanan dengan kebutuhan usaha.

### Rubrik yang memisahkan jenis kemampuan

| Status | Bukti minimum | Langkah berikutnya |
|---|---|---|
| Belum mencoba | Belum ada tindakan atau hasil | Siapkan lingkungan dan satu contoh |
| Terbimbing | Berhasil dengan langkah/hint, lalu menjelaskan sebagian alasan | Ulangi dengan bantuan berkurang |
| Mandiri pada kasus sama | Berhasil tanpa langkah rinci, dapat menjelaskan alasan dan membaca error | Uji kasus yang berbeda |
| Transfer ke kasus baru | Memilih tindakan pada data berbeda, menguji akses sah serta terlarang, dan membatasi kesimpulan | Ulangi setelah jeda dan minta review |
| Perlu penguatan | Pernah berhasil tetapi gagal menjelaskan atau mengulang | Kembali ke prasyarat yang belum stabil |

Skor simulator hanya berasal dari aturan dan cakupan kasus dalam aplikasi. Jangan
menafsirkannya sebagai persentase kemampuan profesional. Menyelesaikan semua misi
dengan hint berbeda dari menyelesaikan kasus baru tanpa bantuan. Catat kedua hasil
secara terpisah, termasuk pertanyaan yang belum dapat dinilai aplikasi.

### Pemeriksaan setelah 48 jam dan 7 hari

Jadwal ini adalah rancangan latihan ulang, bukan ambang ilmiah universal. Sesuaikan
dengan waktu dan kebutuhan pelajar. Pada pemeriksaan 48 jam, gunakan tugas yang
mirip dengan mengganti nama file atau pemilik nota. Pada pemeriksaan 7 hari,
gabungkan dua kemampuan, misalnya membaca log lalu menentukan bukti tambahan
yang dibutuhkan sebelum mengambil tindakan.

Jangan memberi nilai nol karena pelajar perlu mencari sintaks dalam dokumentasi.
Pekerjaan nyata juga memakai dokumentasi. Bedakan mencari bentuk perintah dengan
menyalin seluruh keputusan dari solusi. Mintalah ia menjelaskan maksud perintah
dan prediksi hasil sebelum menjalankannya.

| Tanggal | Tugas | Bantuan | Hasil teramati | Penjelasan pelajar | Ulangan berikutnya |
|---|---|---|---|---|---|
| Isi saat latihan | Membaca nota milik sendiri dan menolak nota orang lain | Hint konsep | Isi berdasarkan hasil | Alasan pemeriksaan pemilik | Kasus dua pelanggan baru |

### Kasus penilaian yang dapat diubah

Untuk file, ubah nama folder dan minta pelajar menemukan sumber serta salinan.
Untuk phishing, berikan pesan mendesak yang sah dan pesan sopan yang mempunyai
tujuan tautan berbeda dari organisasi pengirim. Pelajar harus memakai bukti,
bukan menganggap kata “mendesak” pasti membuktikan penipuan.

Untuk izin akses, tukar nama serta ID nota. Untuk jaringan, tambahkan kebutuhan
baru, misalnya printer hanya digunakan kasir. Untuk log, tambahkan kegagalan
login yang diikuti keberhasilan normal dan tanyakan informasi yang masih kurang.
Untuk pemulihan, sediakan backup terbaru yang rusak dan backup lebih lama yang
utuh. Minta pelajar menjelaskan kehilangan data yang mungkin terjadi.

Seluruh perubahan menggunakan data fiktif. Jangan mengirim email penipuan ke
orang sungguhan sebagai “ujian”, meminta password pribadi, atau menguji jaringan
tetangga. Anda dapat memeriksa penalaran melalui kartu kasus dan aplikasi lokal.

### Uji kegunaan pada pelajar nyata

Mintalah persetujuan pelajar sebelum mencatat atau merekam sesi. Cukup gunakan
alias dan catatan tugas; tidak perlu mengumpulkan data pribadi. Tulis bahwa ia
boleh berhenti dan bahwa tujuan pengamatan adalah memperbaiki materi.

Berikan tiga tugas kecil tanpa petunjuk tambahan: membuka simulator, menyelesaikan
satu contoh dengan bantuan yang tersedia, lalu mencari bab rujukannya. Catat
apakah ia selesai, titik berhenti, error, dan penjelasannya. Setelah selesai,
tanyakan kata yang belum dipahami dan tindakan yang paling membingungkan.

Perbaiki satu hambatan, lalu coba kembali dengan orang lain atau tugas setara.
Laporan harus menyebut jumlah peserta, pengalaman awal, tugas, dan bantuan yang
diberikan. Jangan menyatakan “terbukti mudah bagi semua awam” dari satu sesi atau
dari test kode yang lulus. Test otomatis membuktikan perilaku perangkat lunak
pada kasus uji; pengamatan pelajar menilai apakah petunjuknya bisa diikuti.

### Syarat naik tahap

Pelajar siap berpindah dari simulator ke lab lokal jika dapat menjelaskan tujuan
dan batas simulasi, menjalankan contoh lokal yang dirujuk, membaca hasil, serta
menulis bukti tanpa data pribadi. Ia siap memasuki spesialisasi ketika mampu
mengerjakan kasus baru, menguji perbaikannya, dan menerima koreksi laporan.

Bila hasil belum memenuhi syarat, tentukan satu prasyarat yang perlu diulang.
Contoh: salah membaca direktori kerja perlu latihan folder, sedangkan menilai
semua login gagal sebagai serangan perlu latihan fakta versus dugaan. Menambah
alat baru belum tentu menyelesaikan hambatan tersebut.
