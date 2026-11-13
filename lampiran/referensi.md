# Referensi dan latihan lanjutan

Peta pembelajaran mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security)
dan [direktori konten upstream](https://github.com/nilbuild/developer-roadmap/tree/d922417cd1ef690e66c008a3c3612f683e8e433a/roadmaps/cyber-security/content).
Gaya penyajian mengikuti [tutorial AI Engineer pengguna](https://github.com/kvnlhm/tutorial-ai-engineer).

Penulis menyusun penjelasan, data, latihan, dan kode untuk kasus Laundry Aman.
Proyek ini tidak berafiliasi dengan pengelola sumber tersebut dan tidak memberikan sertifikasi dari mereka.

## Pilih sumber menurut tahap

Gunakan nomor tahap pada tabel sumber untuk menemukan bacaan yang sesuai bekalmu.
Untuk tahap 1, mulai dari [pra-bab](../materi/pra-00-mulai-dari-nol.md) dan persiapan alat pada Bab 00–02.
Kamu belum memerlukan platform latihan tambahan untuk membuka file dan menyiapkan folder.

| Tahap | Nama tahap | Bab |
|---|---|---|
| 1 | Mulai memakai alat | Pra-bab, 00–02 |
| 2 | Memahami cara sistem bekerja | 03–08 |
| 3 | Menjaga dan menguji akses | 09–14 |
| 4 | Membaca bukti dan menangani kejadian | 15–17 |
| 5 | Memeriksa program dan lingkungan | 18–22 |
| 6 | Mengambil keputusan dan membuktikan kemampuan | 23–26 |

## Pilihan latihan tanpa biaya layanan

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

## Dokumentasi untuk memeriksa penjelasan

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

## Cara membaca sumber berbahasa Inggris

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

## Batas penggunaan referensi

Roadmap membantu memilih urutan topik. Untuk membuktikan keamanan kontrol, kamu memerlukan pemeriksaan yang sesuai.
Dokumentasi menjelaskan rancangan atau perilaku yang didukung; lab memeriksa kasus konkret.
Sertakan keduanya dalam laporan dan sebutkan kondisi yang belum diuji.

Jangan mengunggah file rahasia ke lingkungan analisis atau layanan reputasi publik hanya karena alatnya tercantum dalam roadmap.
