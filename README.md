# Tutorial Cybersecurity: dari Awam sampai Mahir

Belajar keamanan siber lewat pekerjaan di Laundry Aman: menyimpan nota, menjaga akses pelanggan, memeriksa kesalahan, dan memulihkan data.
Semua kasus memakai data buatan. Jalur utama gratis, tanpa layanan berbayar atau kartu kredit.

## Pilih titik awal

**Belum paham IT sama sekali? Mulai dari [pra-bab: mulai dari nol](materi/pra-00-mulai-dari-nol.md).**
Kamu akan belajar menemukan file, memilih tempat mengetik, dan membaca hasil percobaan pertama.

| Kondisimu | Mulai dari |
|---|---|
| Belum mengenal komputer/IT | [Pra-bab](materi/pra-00-mulai-dari-nol.md), lalu [simulasi pertama](https://kvnlhm.github.io/tutorial-cybersecurity/) |
| Bisa membuka file, belum memakai terminal | [Bab 00: orientasi](materi/00-orientasi.md), lalu Bab 01–08 berurutan |
| Sudah memahami jaringan dan pemrograman | Buktikan latihan Bab 03–08, lalu masuk Bab 09 |
| Ingin praktik tanpa memasang banyak alat | [Panduan empat lab offline](labs/README.md) |
| Ingin menguji keamanan aplikasi | Fondasi, Bab 09–14, 22, lalu jalur Bab 25 |
| Ingin memantau dan menangani kejadian keamanan | Fondasi, Bab 10–11, 14–18, 23–26 |
| Ingin riset tingkat lanjut | Bab 18–22 dan jalur Bab 25 setelah menguasai fondasi |

## Coba satu misi dari HP atau komputer

**[Mainkan simulasi Laundry Aman di HP atau komputer](https://kvnlhm.github.io/tutorial-cybersecurity/).**
Gunakan browser, yaitu aplikasi pembuka halaman seperti Chrome atau Safari.
Akun dan pemasangan program tidak diperlukan untuk bermain.

1. Buka tautan bermain di atas.
2. Pada HP, ketuk **Pilih misi dan mode** untuk membuka daftar latihan.
3. Ketik pada kotak di dalam halaman, lalu ketuk **Jalankan perintah**.
4. Baca hasil tindakan sebelum mencoba langkah berikutnya.

Kamu memakai model latihan di halaman. Praktik file, terminal sistem, dan Python selanjutnya memerlukan komputer.
Terminal adalah jendela untuk memberi perintah teks dan membaca hasilnya; pra-bab menunjukkan cara membukanya.

### Bermain offline di komputer

1. [Unduh ZIP](https://github.com/kvnlhm/tutorial-cybersecurity/archive/refs/heads/main.zip), yaitu paket berkas tutorial.
2. Ekstrak ZIP dan buka folder `simulator`.
3. Klik dua kali `index.html` untuk membukanya di browser.

Python tidak diperlukan untuk simulasi.
[Berkas simulator lokal](simulator/index.html) menampilkan kode jika dibuka di GitHub; gunakan tautan bermain untuk menjalankannya.
[Panduan bermain](simulator/README.md) menjelaskan langkah dan cara menyimpan hasil.

## Ikuti enam tahap belajar

**Buku lengkap: [Tutorial-Cybersecurity.md](Tutorial-Cybersecurity.md).**
Kursus memuat pra-bab, 27 bab, delapan misi interaktif dengan kasus ujian berbeda, empat lab Python offline, dan latihan tiap bab.
Ada pula proyek akhir, kamus istilah, serta template laporan.

| Tahap | Tujuan | Bab |
|---|---|---|
| 1. Mulai memakai alat | Menemukan file, membatasi latihan, dan menyiapkan tempat kerja | Pra-bab, 00–02 |
| 2. Memahami cara sistem bekerja | Mengikuti data, membaca kode, dan mengenali perlindungan komunikasi | 03–08 |
| 3. Menjaga dan menguji akses | Menetapkan izin, mengurangi risiko, serta menguji aplikasi dan jaringan | 09–14 |
| 4. Membaca bukti dan menangani kejadian | Menilai catatan kejadian, memilih respons, dan menjaga bukti | 15–17 |
| 5. Memeriksa program dan lingkungan | Menyelidiki program, identitas perusahaan, cloud, dan proses rilis | 18–22 |
| 6. Mengambil keputusan dan membuktikan kemampuan | Menilai sumber, menjelaskan risiko, memilih pendalaman, dan menyelesaikan proyek akhir | 23–26 |

Mulai dari mengenal terminal, lalu lanjut ke pengujian aplikasi, penyelidikan kejadian, dan riset keamanan.
Gunakan bukti kelulusan bab untuk menentukan kapan siap lanjut.

<details>
<summary>Pendalaman opsional: nama jalur pekerjaan</summary>

Saat memilih jalur, kamu akan menemui nama pekerjaan berikut:

- **Pentester**: menguji kelemahan dalam ruang lingkup yang disepakati.
- **AppSec**: membantu pengembang membuat aplikasi aman.
- **SOC**: tim pemantau dan pemeriksa aktivitas keamanan.
- **Incident response**: penanganan kejadian keamanan, dari pembatasan dampak sampai pemulihan.
- **Forensik**: pemeriksaan bukti digital dengan metode yang dapat dijelaskan.

Jalur pengujian di tabel mencakup pentester/AppSec. Jalur pemantauan mencakup SOC, incident response, atau forensik.

</details>

## Sesudah simulasi: jalankan lab Python pertama

Gunakan komputer untuk bagian ini.
Jika membaca di GitHub, pilih **Code → Download ZIP**, lalu ekstrak.
Buka terminal di folder yang memuat README ini.

Python adalah bahasa pemrograman sekaligus program penjalan kodenya.
Pasang versi 3.11 atau lebih baru dari [python.org](https://www.python.org/downloads/) jika belum tersedia.
Pilih jalur sesuai perangkatmu.

**Windows PowerShell**

```powershell
py --version
py labs/sql_demo.py
```

**Linux/macOS**

```bash
python3 --version
python3 labs/sql_demo.py
```

Program memperlihatkan kebocoran data buatan akibat penyusunan permintaan data yang rentan.
**Query** berarti permintaan kepada basis data. Contoh membandingkan query rentan dengan query berparameter, yang memisahkan instruksi dari nilai masukan.
Lab ini berjalan tanpa koneksi jaringan atau database produksi.

Lanjutkan ke [panduan lab](labs/README.md) untuk membaca hasilnya.
Jika membuka terminal masih sulit, kembali ke pra-bab sebelum menjalankan lab.

## Ukur kemajuan dari hasil yang bisa dijelaskan

“Level dewa” berarti arah menuju kemampuan mandiri yang dapat diperiksa.
Kamu menjelaskan akar masalah, membuat reproduksi di lab, memperbaiki, menguji ulang, dan menulis bukti yang bisa diikuti orang lain.

Keahlian profesional memerlukan latihan berulang, ulasan rekan, dan pengalaman sistem nyata dengan izin.
Selesai membaca tidak otomatis menjadikan seseorang ahli. Kursus tidak menjamin penguasaan 100% seluruh bidang cybersecurity.

Periksa apakah kamu mampu menjalankan, menjelaskan, mengulang tanpa petunjuk, dan menerapkan pada kasus baru.
Simulator memisahkan progres belajar dan ujian.
Penilaian otomatis memeriksa aturan skenario; kemampuan manusia yang lebih luas tetap membutuhkan pemeriksaan lain.
Materi belum menjalani studi usability, yaitu pengamatan kemudahan penggunaan, dengan peserta awam.

## Pendamping belajar

- [Jadwal dan cara mengukur kemajuan](lampiran/jadwal-belajar.md)
- [Panduan pendamping dan pemeriksaan retensi](lampiran/panduan-pendamping.md)
- [Pemetaan roadmap dan kedalaman materi](lampiran/peta-roadmap.md)
- [Kamus istilah](lampiran/kamus.md)
- [Template catatan, scope, temuan, dan insiden](lampiran/template.md)
- [Sumber utama dan pilihan latihan gratis](lampiran/referensi.md)

Uji sistem sendiri, target lab, atau target dengan izin tertulis dan batas jelas.
Simpan bukti yang sudah disamarkan. Jangan memakai data pelanggan sungguhan dalam latihan atau mengunggah credential, yaitu rahasia akses, ke GitHub.

## Asal dan acuan kursus

Pola konsep, praktik, hasil, dan latihan mengikuti [tutorial AI Engineer](https://github.com/kvnlhm/tutorial-ai-engineer) milik pengguna.
Peta topik merujuk [roadmap.sh/cyber-security](https://roadmap.sh/cyber-security).
Rujukan diperiksa pada 6 November 2026; nama menu dan ketersediaan platform dapat berubah.

## Memelihara tutorial

[Panduan pemeliharaan](docs/pemeliharaan.md) memuat perintah pemeriksaan, pembangunan buku, dan publikasi untuk pemelihara.
[Catatan verifikasi](docs/ai/task-log.md) membedakan contoh yang dijalankan dari latihan VM/platform luar yang belum diuji pada lingkungan penulis.
[Panduan QA](docs/ai/simulator-qa.md) menjelaskan pemeriksaan simulator.
Pembaca dapat bermain dan belajar tanpa menjalankan langkah pemeliharaan.
