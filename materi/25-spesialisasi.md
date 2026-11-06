# Bab 25: Menjadi spesialis dan melakukan riset mandiri

## Tujuan dan prasyarat

Anda akan memilih bidang pendalaman, merancang latihan berulang, serta menghasilkan riset yang dapat diperiksa orang lain. Selesaikan fondasi dan proyek kecil bab sebelumnya. Anda boleh memilih spesialisasi sebelum menguasai seluruh alat, tetapi perlu mengetahui prasyarat yang masih lemah.

## Konsep

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

## Praktik

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

## Hasil yang diharapkan

Anda memiliki satu fokus, daftar prasyarat, pertanyaan riset, eksperimen berulang, dan rencana review. Anda dapat menjelaskan satu hal yang sudah terbukti dan satu hal yang belum diketahui. Jam latihan menjadi informasi perencanaan, bukan bukti keahlian dengan sendirinya.

## Jika macet

- Berpindah alat setiap hari: pertahankan satu pertanyaan selama beberapa sesi sampai memperoleh hasil yang dapat diuji.
- Selalu membutuhkan walkthrough: tulis petunjuk singkat sendiri, tutup solusi, lalu ulangi dengan jeda.
- Bug sulit direproduksi: kecilkan input, catat versi serta kondisi awal, dan bedakan hasil deterministik dari efek waktu atau lingkungan.

## Latihan

Susun rencana 12 minggu untuk satu jalur: tiga proyek kecil, satu proyek gabungan, dan dua review sejawat. Tetapkan hasil per minggu, bukan jumlah video yang ditonton. Sisakan waktu untuk mengulang fondasi yang gagal saat praktik.

## Bukti kelulusan

Serahkan laporan riset yang dapat diulang, perbaikan atau eksperimen pembantah, serta catatan review. Anda siap mendalami jalur ini jika dapat memperbaiki laporan setelah orang lain menemukan kelemahannya.

## Referensi

- [PortSwigger Web Security Academy](https://portswigger.net/web-security).
- [pwn.college dan aturan pembelajarannya](https://pwn.college/).
- [CERT/CC: Vulnerability Disclosure Guidance](https://www.kb.cert.org/vuls/guidance/).
