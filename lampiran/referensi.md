# Referensi dan latihan lanjutan

Peta pembelajaran mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security)
dan [direktori konten upstream](https://github.com/nilbuild/developer-roadmap/tree/d922417cd1ef690e66c008a3c3612f683e8e433a/roadmaps/cyber-security/content).
Gaya penyajian mengikuti [tutorial AI Engineer pengguna](https://github.com/kvnlhm/tutorial-ai-engineer).
Isi penjelasan, data, latihan, dan kode dalam proyek ini disusun untuk kasus
Laundry Aman. Tidak ada afiliasi atau sertifikasi dari pengelola sumber tersebut.

## Pilihan latihan tanpa biaya layanan

| Sumber | Gunakan untuk | Prasyarat dan batas |
|---|---|---|
| **Rekomendasi awal: [OverTheWire Bandit](https://overthewire.org/wargames/bandit/)** | Mengulang dasar terminal dan file | SSH dan dasar Bab 04; baca aturan server |
| [PortSwigger Web Security Academy](https://portswigger.net/web-security) | Web dan API melalui lab interaktif gratis | Pahami HTTP; pakai instance lab yang disediakan, fitur Pro tidak wajib untuk jalur dasar |
| [pwn.college](https://pwn.college/) | Fondasi sistem dan pendalaman keamanan | Ikuti urutan materi; hormati permintaan pengelola agar solusi challenge tidak dipublikasikan |

Mulai dengan satu sumber sesuai tahap. Selesaikan beberapa latihan, jelaskan
hasilnya, lalu pindah topik. Layanan di luar daftar ini mungkin memiliki bagian
gratis dan berbayar; periksa syarat terbaru. Tutorial tidak meminta pembelian,
top-up, uji coba berkartu kredit, atau deployment cloud.

## Dokumentasi untuk memeriksa penjelasan

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

## Cara membaca sumber berbahasa Inggris

Ambil satu paragraf dan tandai istilah yang menentukan perilaku, seperti
`MUST`, `SHOULD`, `default`, `deprecated`, atau `unsupported`. Cari contoh
minimum, jalankan di lab, lalu jelaskan ulang dalam bahasa Indonesia. Simpan
istilah aslinya di catatan agar Anda bisa mencari dokumentasi berikutnya. Bila
terjemahan terasa kabur, cocokkan dengan output program dan konteks sumber.

## Batas penggunaan referensi

Roadmap membantu memilih urutan topik, bukan bukti bahwa suatu kontrol aman.
Dokumentasi menjelaskan rancangan atau perilaku yang didukung, sedangkan lab
memeriksa kasus konkret. Laporan yang baik menyertakan keduanya dan menyebut
kondisi yang belum diuji. Jangan mengunggah file rahasia ke sandbox atau layanan
reputasi publik hanya karena alat tersebut tersedia dalam roadmap.
