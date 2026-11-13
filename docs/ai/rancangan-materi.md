# Rancangan penyederhanaan materi (November 2026)

## Tujuan dan batas pekerjaan

Kita akan menyederhanakan penjelasan tanpa mengurangi isi teknis kursus.
[Panduan gaya](../panduan-gaya.md) menjadi pegangan penulis dan pemeriksa.
Bab [03](../../materi/03-jaringan.md) dan [13](../../materi/13-web-api.md) akan menjadi contoh penerapannya.

Rencana ini mencakup pra-bab, 27 bab, enam lampiran, halaman depan, intro buku, dan penyelarasan teks simulator.
Pekerjaan fondasi hanya mengubah panduan, rancangan, tambahan arsitektur, dan dua bab contoh.
Penulis berikutnya akan mengerjakan file lain setelah coordinator membagi tugas.

Kita akan mempertahankan Markdown, Python standard library, dan simulator statis.
Perubahan ini tidak membutuhkan database, kontrak API baru, akun, dependency, atau layanan berbayar.
Kita akan menjaga fungsi simulator serta perintah contoh yang sudah ada.

## Diagnosis dari pembacaan sumber

Kutipan berikut berasal dari versi `7996351`, sebelum dua bab contoh ditulis ulang.
Pembacaan mencakup README, pra-bab, Bab 00–26, seluruh lampiran, panduan lab, PRODUCT, pembangun buku, pemeriksa dokumen, dan arsitektur.
Ini pemeriksaan penulis dari sudut pandang Bu Rina dan Dimas; belum ada sesi uji peserta manusia.

| Pola | Bukti kutipan dan lokasi | Perubahan yang direncanakan |
|---|---|---|
| Istilah bertumpuk | Bab 03, satu paragraf: “**DHCP** dapat membagikan konfigurasi alamat, gateway, dan resolver DNS.” Lalu: “IPv6 menggunakan mekanisme Neighbor Discovery, bukan ARP.” | Jelaskan fungsi satu per satu setelah contoh perjalanan nota |
| Kasus khusus menyela dasar | Bab 03: “Aturan pengurangan dua tidak berlaku seragam pada `/31` dan `/32` yang punya kegunaan khusus.” | Simpan pengecualian dalam Pendalaman opsional, tetap dekat aturan subnet |
| Bentuk data berganti terlalu cepat | Bab 06: “**Dictionary** menghubungkan kunci dengan nilai, mirip label pada laci. **Loop** mengulangi langkah.” | Pisahkan definisi dan tunjuk pemakaian sebelum menambah konsep |
| Pilihan sistem bercampur | Bab 02: “Pada PowerShell gunakan `Get-Content hasil-belajar/nota-tidak-ada.txt`; pada Bash gunakan `cat hasil-belajar/nota-tidak-ada.txt`.” | Pisahkan label perangkat; satu jalur yang diikuti pembaca |
| Kalimat kaku | Pra-bab: “Menempelkan kode Python ke bilah alamat browser tidak akan menjalankan latihan Python sebagaimana dimaksud dalam buku.” | Sebut tempat mengetik yang benar, pertahankan perbedaan browser dan terminal |
| Penyangkalan berulang | Pra-bab: “Lima menit merupakan target kecil untuk percobaan awal, bukan batas waktu.” | Sebut saran waktu dan izin mengulang dalam kalimat langsung |
| Sapaan berubah | README: “Kondisimu”; Bab 00: “Anda akan memahami pekerjaan cybersecurity” | Pakai “kamu”, kecuali kutipan dan teks yang wajib persis |
| Kebutuhan pembaca dan pemelihara bercampur | README: “Setelah mengubah berkas, jalankan pemeriksaan di atas lalu push ke `main`.” | Pindahkan prosedur pemeliharaan ke dokumen tersendiri |
| Tabel menggantikan pengajaran | Bab 13: “Encoding sesuai konteks; API DOM yang aman” pada baris XSS | Uraikan konteks dan perbaikannya sebelum tabel ringkas |
| Bekal lanjutan tersirat | Bab 13: “Pendalaman topik ini memerlukan transaksi database, constraint, dan pengujian konkurensi.” | Definisikan bekal ini dan pisahkan dari dua lab inti |
| Peta memberi kesan cakupan lebih luas | Lampiran roadmap: “DNS, DHCP, ARP, NAT, route, NTP”; Bab 03 tidak menjelaskan NTP | Bedakan topik yang benar-benar dijelaskan dari rujukan pendalaman |

Kita akan mempertahankan bagian yang sudah membantu pembaca.
Pra-bab membedakan tempat mengetik, Bab 06 menelusuri nilai dengan tabel, dan Bab 15 membandingkan hitungan manual dengan program.
Kotak pembahasan latihan serta pola bantuan yang berkurang juga akan tetap dipakai.

## Susunan tahap belajar

Urutan baca tetap mengikuti nomor. Nama tahap membantu memilih tujuan dan melihat kemajuan, tanpa mengganti nama atau nomor file.

| Tahap | Tujuan | Daftar bab |
|---|---|---|
| Mulai memakai alat | Membuka file, membatasi latihan, dan menyiapkan tempat kerja | Pra-bab, 00–02 |
| Memahami cara sistem bekerja | Mengikuti data, menjalankan perintah, membaca kode, dan mengenali perlindungan komunikasi | 03–08 |
| Menjaga dan menguji akses | Menetapkan izin, mengurangi risiko, menguji aplikasi, dan memisahkan jaringan | 09–14 |
| Membaca bukti dan menangani kejadian | Menilai log, memilih respons, dan menjaga bukti | 15–17 |
| Memeriksa program dan lingkungan | Menyelidiki program, memori, identitas perusahaan, cloud, serta proses rilis | 18–22 |
| Mengambil keputusan dan membuktikan kemampuan | Menilai sumber, menjelaskan risiko, memilih pendalaman, dan menyelesaikan proyek akhir | 23–26 |

Kita akan menampilkan tujuan tahap sebelum daftar bab pada README dan buku gabungan.
Jalur spesialisasi akan tetap tersedia setelah pembaca membuktikan bekal yang dibutuhkannya.
Jadwal minggu menjadi saran pembagian sesi; bukti kelulusan menentukan kesiapan lanjut.

## Alur Konsep dan prioritas istilah

Setiap bab akan mendapat paragraf posisi setelah judul: “Tahap N dari 6: Nama tahap”.
Pembangun buku mengambil judul dari baris pertama dan mempertahankan paragraf biasa, sehingga penambahan ini tidak memerlukan perubahan pembangun.

Konsep akan dibuka dengan tiga sampai enam kalimat yang menceritakan seluruh perjalanan bab memakai kata sehari-hari.
Setiap subbagian penjelasan akan berangkat dari kejadian toko, lalu memberi nama pada hal yang baru diamati.
Penulis akan menyambung paragraf dengan kebutuhan atau akibat, serta memberi contoh setelah paling banyak tiga paragraf definisi.

Istilah inti akan mengikuti cerita karena dipakai dalam Praktik, Latihan, atau Bukti kelulusan.
Untuk istilah inti yang abstrak, penulis akan memakai satu perbandingan sehari-hari dan menjelaskan batasnya bila diperlukan.
Istilah pelengkap akan tetap tersedia setelah cerita dalam daftar “Cukup kenali dulu”, atau Pendalaman opsional untuk rincian ahli.
Larangan keamanan akan tetap terlihat tanpa membuka kotak.

Bab 03 akan mengikuti nota dari sambungan toko, alamat tujuan, pembagian alamat, pencarian nama, hingga layanan penerima.
Penjelasan mask dan alamat jaringan akan memakai blok contoh agar pembaca bisa menunjuk bagian yang dimaksud.
Bab 13 akan mengikuti perjalanan masukan, dengan perbandingan formulir untuk token anti-CSRF dan tujuan akhir ruangan untuk jalur kanonis.

| Kelompok Bab 03 | Istilah inti untuk praktik dan penilaian | Istilah pelengkap setelah cerita |
|---|---|---|
| Sambungan toko | Jaringan, server, switch, router | LAN, WAN, paket, titik akses Wi-Fi |
| Alamat dan sambungan | IP address, IPv4, loopback, antarmuka jaringan | IPv6, localhost, bind, Ethernet |
| Pembagian alamat | Subnet, CIDR, prefix, host, alamat jaringan, broadcast, mask | Alamat privat, alamat publik, firewall, NAT |
| Pencarian dan pengiriman lokal | Nama domain, DNS, resolver DNS, default gateway, MAC address | DHCP, ARP |
| Layanan dan perlindungan | Port, ICMP, enkripsi | Protokol, TCP, datagram, UDP, HTTP, TLS, HTTPS |
| Membaca hasil dan menggambar | VPN, request; bekal VM dari Bab 01 | Rincian opsional: Neighbor Discovery, QUIC, HTTP/3, SSH, RDP, model OSI dan tujuh lapisannya |

Daftar pelengkap dan rincian opsional tetap termasuk isi bab yang harus dipertahankan.
Pembagian prioritas ini akan membantu pembaca mengerjakan tugas tanpa menghafal seluruh nama pada pertemuan pertama.

## Rantai prasyarat yang sebenarnya

Panah berarti kemampuan bab kiri dipakai di bab kanan. Tabel mencatat bekal minimum, selain jalur baca berurutan.
Penulis akan menautkan bab sumber dan menyebut kemampuan yang perlu diulang.

| Bab tujuan | Bekal yang dipakai |
|---|---|
| Pra-bab → 00 → 01 → 02 | File dan tempat mengetik → batas izin → folder/Python → proses dan ukuran file |
| 03 | 01–02: terminal, Python, perangkat, byte dan bit |
| 04 | 01–02: Linux tersedia, lokasi file, proses |
| 05 | 01–02: PowerShell, file `cek-lab.txt`, proses; Windows berizin |
| 06 | 01–02: editor, Python, folder; 04 untuk Bash opsional |
| 07 | 03 dan 06: loopback, port, terminal, menjalankan Python |
| 08 | 02, 06–07: byte, Python, browser dan HTTPS |
| 09 | 07–08: permintaan HTTP, cookie, hash dan HTTPS |
| 10 | 02–05, 08–09: file/proses, izin, jaringan, hash, akun |
| 11 | 00, 07, 09–10: aset/risiko, aliran data, akses dan cadangan |
| 12 | 03, 07, 11: port, server lokal, hipotesis dan ruang lingkup |
| 13 | 06–09 dan 12: membaca Python, HTTP/SQL, encoding, izin, batas pengujian |
| 14 | 03, 07–09, 12: alamat, HTTP/TLS, akses, server loopback |
| 15 | 03, 05–06, 09: alamat, log/properti, hitungan Python, login |
| 16 | 10 dan 15: pemulihan, bukti log, penilaian peringatan |
| 17 | 02, 08, 15–16: file, hash, log dan penanganan insiden |
| 18 | 02–03, 06, 08, 17: proses, jaringan, Python, hash dan bukti |
| 19 | 01–02, 06, 18: lingkungan lab, byte, fungsi, alur program; C perlu bekal tambahan |
| 20 | 03, 05–06, 09–10: DNS, Windows, Python, izin dan pembatasan hak |
| 21 | 01–03, 09–10, 15: VM/kernel, jaringan, izin, konfigurasi dan JSON |
| 22 | 06, 08–09, 11, 13: Git/kode, hash, izin, ancaman dan kelemahan web |
| 23 | 11, 13, 15–16: kerentanan, jalur file, log dan penilaian kejadian |
| 24 | 10–11, 16, 20: pemulihan, risiko, respons dan contoh akun vendor |
| 25 | 12–24 sesuai jalur: laporan yang dapat diulang dan bekal topik pilihan |
| 26 | 06, 08–13, 15–17, 24: kode/test, izin, risiko, bukti, respons dan pemulihan |

Kita akan mengatasi pemakaian pengetahuan yang datang terlambat tanpa memindahkan file:

- Bab 01 memakai NAT dan mode jaringan sebelum Bab 03. Beri pengantar satu fungsi per paragraf di Bab 01.
- Bab 02 memakai port dan domain untuk diagnosis sebelum Bab 03. Tandai contoh sebagai gambaran awal dan beri tautan balik nanti.
- Bab 03 menuntut perbedaan enkripsi dan izin sebelum Bab 08–09. Beri arti singkat sebelum syarat kelulusan, lalu tunjuk pendalamannya.
- Bab 04 menawarkan Bandit yang memerlukan SSH. Jelaskan SSH dan cara masuk sebelum menjadikannya tugas mandiri; tabel port Bab 03 belum cukup.
- Bab 09 menanyakan UUID tanpa definisi sebelumnya. Jelaskan pengenal acak sebelum pertanyaan latihan.
- Bab 13 memakai DOM, origin, jalur kanonis, transaksi, constraint, dan konkurensi tanpa pelajaran sebelumnya yang cukup. Tambahkan jembatan definisi.
- Bab 18 menawarkan kompilasi C sebelum contoh C Bab 19. Nyatakan bekal tambahan pada jalur biner dan rujuk Bab 19.
- Bab 19 memakai set, generator, metode byte, dan penanganan pengecualian yang belum diajarkan lengkap di Bab 06. Telusuri kode sebelum meminta modifikasi.
- Bab 20 memakai dictionary, set, antrean, dan penelusuran graf; Bab 06 baru menyebut dictionary. Gambar panah lalu telusuri satu putaran kode.
- Bab 21 memerlukan JSON yang baru dijelaskan di Bab 15, bukan pada pengantar pemrograman. Tambahkan rujukan eksplisit.

## Rencana halaman depan dan buku gabungan

README akan membuka dengan tujuan kecil: pilih titik awal, buka simulator, lalu lanjut ke bab sesuai bekal.
Setelah itu tampilkan tahap belajar, kebutuhan HP/komputer, bukti kemajuan, serta tautan pendamping.
Pertahankan tautan bermain, ZIP, buku lengkap, seluruh jalur pembaca, batas izin, dan penjelasan data buatan.

Pindahkan bagian “Memelihara tutorial” ke `docs/pemeliharaan.md`.
Dokumen itu akan memuat pembangunan buku, pemeriksaan, QA browser, sumber publikasi Pages, dan batas bukti verifikasi.
README cukup menautkannya pada bagian akhir. Simpan asal proyek dan acuan roadmap setelah jalur pembaca.

Pada `tools/build_book.py`, penulis integrasi akan mengganti intro agar memakai “kamu” dan mengikuti urutan README.
Ia akan memisahkan langkah pembaca dari tautan verifikasi pemelihara.
Daftar isi akan mendapat kelompok tahap, dengan semua judul bab dan lampiran tetap tampil.
Pertahankan anchor `mulai-dari-nol`, `bab-00` sampai `bab-26`, dan `lampiran-1` sampai `lampiran-6`.

Pembangun saat ini mengubah judul menjadi satu tingkat lebih dalam dan memperbaiki tautan relatif.
Penulis integrasi akan memeriksa navigasi baru dalam sumber serta hasil gabungan agar keduanya tetap hidup.
Ia baru akan membangun ulang buku setelah seluruh sumber selesai. Pekerjaan fondasi ini tidak menjalankan pembangun buku.

## Rencana tiap lampiran

| File tetap | Pekerjaan penulis |
|---|---|
| `lampiran/jadwal-belajar.md` | Tambahkan pra-bab, pakai nama tahap yang sama, pisahkan waktu saran dari bukti kemajuan; pertahankan rubrik 0–3 dan lima tingkat |
| `lampiran/peta-roadmap.md` | Pertahankan snapshot, tanggal, seluruh topik dan batas cakupan; tandai mana pengantar, latihan langsung, atau rujukan lanjut |
| `lampiran/kamus.md` | Selaraskan arti dan sapaan, pecah istilah gabungan yang menyulitkan pencarian, tambahkan istilah yang benar-benar dipakai |
| `lampiran/template.md` | Pertahankan semua kolom dan blok; beri satu petunjuk pengisian per bagian serta contoh kecil dengan data buatan |
| `lampiran/referensi.md` | Kelompokkan menurut tahap; pertahankan sumber primer, batas izin, aturan publikasi solusi, serta pilihan gratis |
| `lampiran/panduan-pendamping.md` | Pakai “kamu” pada penjelasan dan pertanyaan contoh; pertahankan retensi 48 jam/7 hari, tingkat bantuan, persetujuan pengamatan, dan batas klaim |

### Usulan istilah untuk kamus

Penulis kamus akan menambahkan entri berikut dari dua bab contoh, atau menempatkannya sebagai alias pada entri yang sesuai.
Daftar ini berisi nama untuk pencarian; penulis tetap perlu memberi arti dan contoh seperti pada bab.

| Kelompok | Entri atau alias yang belum tersedia sebagai judul entri |
|---|---|
| Perangkat jaringan | Jaringan, server, LAN, WAN, switch, paket, router, titik akses Wi-Fi, antarmuka jaringan, Ethernet |
| Alamat | IPv4, IPv6, loopback, bind, prefix, host, alamat jaringan, broadcast, mask, alamat privat, alamat publik |
| Mencari dan mengirim | Default gateway, nama domain, resolver DNS, MAC address, Neighbor Discovery, datagram, protokol, QUIC, SSH, RDP, OSI, VPN, ICMP |
| Web dan data | Endpoint, JSON, query, parameterisasi, placeholder, DOM, token anti-CSRF, origin, path traversal, jalur kanonis, mass assignment, instance |
| Aturan bisnis | Business logic flaw, atomik, race condition, transaksi basis data, constraint, pengujian konkurensi |
| Pengujian | Payload, proxy, sertifikat intersepsi, kasus uji negatif |

Satukan alias request dengan permintaan pada entri HTTP, serta kasus regresi dengan regression test yang sudah ada.
Untuk bab lain, prioritaskan UUID pada Bab 09 dan TP/FP/FN pada Bab 15.
Setiap penulis akan menyerahkan tambahan istilah dari paketnya sebelum penulis kamus menggabungkan daftar akhir.

Penulis panduan lab akan mempertahankan empat lab dan seluruh hasilnya.
Ia akan memisahkan jalur perangkat, menjelaskan istilah sebelum membaca sumber, serta menautkan bab yang mengajarkan bekalnya.

## Perpindahan antarbab

Setiap Tujuan dan prasyarat akan menyebut kemampuan yang dibutuhkan beserta tautan sumbernya.
Setiap Bukti kelulusan akan ditutup subbagian Lanjut belajar: bab sebelumnya, bantuan bila belum siap, dan bab berikutnya.
Pembaca akan mengulang kemampuan yang belum stabil sebelum menambah alat.

Pada akhir Bab 08, kita akan menjelaskan perpindahan dari fondasi ke penerapan keamanan.
Pada Bab 17 dan 22, kita akan menjelaskan pilihan pendalaman berikutnya tanpa menganggap pembaca sudah menjadi spesialis.
Tautan simulator akan tetap menuju bab yang sama; penulis teks akan menyebut bahwa model virtual berbeda dari praktik OS nyata.

## Catatan untuk penulis tiap bab

| Bab | Masalah khusus yang akan ditangani |
|---|---|
| Pra-bab | Pecah sesi panjang; pisahkan HP, Windows, macOS, Linux; pertahankan perbedaan input, prompt, output |
| 00 | Pisahkan CIA, aset/risiko, dan jenis pekerjaan; pertahankan kontrak izin dan kasus printer |
| 01 | Jelaskan host/guest sebelum mode jaringan; pisahkan WSL opsional dari latihan file wajib |
| 02 | Pisahkan CPU/RAM/storage dan proses/PID; rujuk pengantar jaringan untuk diagnosis website |
| 03 | Pisahkan layanan alamat, hitungan subnet, dan protokol; pindahkan kasus khusus ke kotak opsional |
| 04 | Jelaskan izin direktori terpisah dari izin file; pertahankan risiko penimpaan dan larangan `777` serampangan |
| 05 | Pecah objek/properti, registry/service/task, dan SID/ACL/UAC; pertahankan jalur sintetis saat log dibatasi |
| 06 | Ajarkan tipe satu per satu; pertahankan tabel penelusuran, assert, dan peringatan Git lokal |
| 07 | Pisahkan bagian URL, pesan HTTP, cookie, dan basis data; pertahankan dua jendela serta penghentian server |
| 08 | Uraikan fungsi sebelum tabel; pertahankan batas hash, salt, sertifikat, dan larangan membuat kriptografi sendiri |
| 09 | Jelaskan atribut cookie satu per satu; pisahkan OAuth/OIDC/SSO sebagai pendalaman; definisikan UUID |
| 10 | Pisahkan alat pertahanan, baseline, dan cadangan; pertahankan hasil hash, target RTO, serta nama file pemulihan baru |
| 11 | Telusuri satu aliran sebelum STRIDE; pertahankan asumsi skor, empat skenario, dan uji tiket perbaikan |
| 12 | Pisahkan izin, pengamatan HTTP, dan Nmap opsional; pertahankan batas target satu port loopback |
| 13 | Ganti tabel enam kelemahan dengan uraian; bedakan dua lab lokal, lab resmi, dan bekal logika bisnis |
| 14 | Bedakan filter sebelum capture; pisahkan rancangan segmentasi dari bukti penerapan; jelaskan singkatan Wi-Fi |
| 15 | Ajarkan event/alert/incident bertahap; tulis kepanjangan TP/FP/FN sebelum rumus; pertahankan batas peringkas |
| 16 | Beri arti istilah respons sebelum urutan proses; pisahkan bukti tambahan tabletop dari hasil program |
| 17 | Bedakan sumber, salinan bukti, salinan kerja; pertahankan hash, chain of custody, dan batas akuisisi |
| 18 | Bedakan bytecode Python dari assembly; nyatakan prasyarat biner dan larangan mengunggah sampel perusahaan |
| 19 | Telusuri parser per pemeriksaan; jelaskan notasi byte dan penutup string; pisahkan C opsional dari Python |
| 20 | Pecah domain/forest/OU dan tiket; telusuri graf keanggotaan sebelum membahas hubungan kontrol |
| 21 | Jelaskan JSON, kebijakan, dan ARN sebelum wildcard; pisahkan audit container serta Kubernetes opsional |
| 22 | Jelaskan alat SAST/DAST/SCA/SBOM satu per satu; pertahankan enam test ekspor, bukti rilis, dan input AI tak tepercaya |
| 23 | Pisahkan IOC/TTP dan CVE/CWE; pertahankan tiga sumber fiktif, keyakinan, dan verifikasi advisori nyata tanpa pengujian target |
| 24 | Ajarkan tata kelola, risiko, kepatuhan terpisah; pertahankan skala ordinal, tiga risiko, matriks bukti, dan batas hukum |
| 25 | Tautkan bekal setiap jalur; pertahankan empat sesi riset, etika disclosure, rencana 12 minggu, dan review sejawat |
| 26 | Pecah peran dan hasil per sesi; pertahankan seluruh kode/test, sembilan event, rubrik, dan tiga syarat wajib kelulusan |

### Klaim yang perlu dibedakan dari kesalahan fakta

Kasus `/31` memang memerlukan pengecualian dari aturan pengurangan dua.
Kita akan mempertahankannya sebagai rincian opsional, sesuai [RFC 3021](https://www.rfc-editor.org/rfc/rfc3021).

Perbaikan XSS perlu mengikuti konteks tempat data dipakai.
Kita akan mempertahankan perbedaan HTML dan JavaScript, sesuai [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

Belum ditemukan kesalahan fakta pasti pada dua bab contoh.
Tabel CSRF lama menyebut sesi pengguna, tetapi belum menjelaskan pengiriman kredensial otomatis hingga bagian Latihan.
Penulis akan menjelaskan hubungan itu lebih awal tanpa mengganti kontrol yang disebut sumber lama.

Pemetaan roadmap perlu diperiksa sebagai klaim cakupan.
Misalnya NTP, Bluetooth/NFC, dan RADIUS muncul dalam tabel, tetapi bab tujuan belum menjelaskannya secara khusus.
Penulis akan memperjelas label cakupan dan melaporkan kekurangan; ia tidak boleh menghapus topik atau mengarang bahwa latihan sudah tersedia.

Menu instalasi Python/WSL, versi pedoman, serta syarat platform dapat berubah.
Penulis terkait akan memeriksa sumber resmi saat menyunting bagian itu. Pembacaan fondasi ini belum memverifikasi seluruh tautan eksternal atau versi alat.

## Penyelarasan teks simulator

Penulis simulator akan memeriksa teks terlihat pada `simulator/index.html`, `app.js`, `scenarios.js`, `engine.js`, dan panduan simulator.
Ia akan mempertahankan pengenal internal, sintaks perintah virtual, aturan penilaian, dan format data.

| Teks atau istilah | Penyelarasan yang direncanakan |
|---|---|
| “Tugas Anda”, “Bukti tindakan Anda”, “Pilih jawaban Anda” | Gunakan “Tugas kamu”, “Bukti tindakan kamu”, “Pilih jawabanmu” |
| “Anda telah mengonfirmasinya” pada pesan kasus | Gunakan sapaan yang sama tanpa mengubah bukti konfirmasi dalam cerita |
| Input / output / request / response | Pakai masukan / hasil / permintaan / jawaban dalam penjelasan; pertahankan nama field teknis |
| Hint, guided, exam | Teks pembaca memakai petunjuk, belajar, ujian kasus berbeda; pertahankan nilai internal |
| Terminal, shell, prompt | Tegaskan terminal virtual dan tempat mengetik; jelaskan penanda kesiapan tanpa menyuruh menyalinnya |
| Query, parameter, SQL injection | Jelaskan permintaan data dan pemisahan instruksi/data sebelum tindakan misi |
| Aktor, sesi, objek, otorisasi | Beri contoh pengguna yang sudah login, nota, serta pemeriksaan pemilik |
| Firewall, aliran, database | Jelaskan penyaring koneksi, arah komunikasi, dan penyimpanan data pada misi jaringan |
| Phishing, OTP, domain | Jelaskan pesan penipuan, kode sekali pakai, dan nama situs sebelum menilai pesan |
| Triage, kompromi, bukti | Pakai pemeriksaan awal dan pengambilalihan akses dengan batas kesimpulan yang sama seperti Bab 15–16 |
| Backup, restore, verifikasi, retest | Perkenalkan cadangan, pemulihan, pemeriksaan hasil, serta uji ulang dengan contoh |
| “Selesai” dan progres | Pertahankan keterangan bantuan, pemisahan belajar/ujian, batas skor, serta penyimpanan lokal |

## Risiko dan pemeriksaan

| Risiko | Pemeriksaan yang akan menangkapnya |
|---|---|
| Fakta hilang saat memecah paragraf | Bandingkan setiap bagian dengan sumber lama; petakan fakta, hasil, keamanan, latihan, dan syarat lulus |
| Perintah berubah saat dipindahkan | Bandingkan blok kode dan semua perintah sebaris secara persis dengan sumber lama |
| Prasyarat tersembunyi tetap ada | Baca sebagai Bu Rina/Dimas; cocokkan setiap istilah baru dengan bab prasyarat atau definisi setempat |
| Kotak opsional menyembunyikan bekal wajib | Kerjakan alur utama dengan kotak tertutup; syarat latihan harus tetap bisa dijelaskan |
| Paragraf kembali padat | Jalankan daftar periksa panduan; periksa panjang kalimat, paragraf, dan istilah per paragraf |
| Kalimat pendek berubah menjadi deretan kamus | Periksa gambaran awal, kejadian toko, sambungan sebab-akibat, batas tiga paragraf definisi, dan prioritas istilah |
| Perbandingan menyesatkan | Cocokkan perbandingan dengan mekanisme teknis; pastikan pembaca tahu batasnya |
| Baris tahap mengganggu judul buku | Pastikan judul tetap baris pertama, tahap berupa paragraf, dan daftar isi tetap memakai judul sumber |
| Tautan sumber atau gabungan rusak | Jalankan `py tools/check_docs.py`; setelah integrasi, bangun buku lalu periksa lagi |
| Hasil contoh berubah atau keliru | Jalankan contoh lokal dan test yang relevan; tandai alat/platform yang belum dicoba `NOT_RUN` |
| Klaim mudah dipahami tanpa peserta | Bedakan review penulis dari uji peserta; coordinator akan menjadwalkan pengamatan sesuai lampiran pendamping |
| Penyelarasan simulator mengubah fungsi | Pada pekerjaan simulator nanti, jalankan test engine dan QA browser sesuai panduan repo |
| Konflik kerja beberapa penulis | Tetapkan pemilik file, pakai panduan yang sama, dan minta pemeriksa meninjau silang per paket |

## Pembagian kerja per penulis

Setiap paket akan menerima panduan, dua contoh, daftar prasyarat, dan versi sumber pembanding.
Setiap penulis akan menyerahkan file, inventaris isi yang dipertahankan, hasil daftar periksa, jumlah kata lama/baru, serta ketidakpastian.
Ia akan melaporkan fakta meragukan tanpa membetulkan diam-diam.

| Unit kerja | File milik penulis | Hasil dan pemeriksaan sebelum serah terima |
|---|---|---|
| Fondasi editorial | Dua panduan ini, tambahan arsitektur, Bab 03 dan 13 | Contoh siap ditiru; perbandingan isi dan pemeriksaan dokumen |
| Pintu masuk | README, pra-bab, Bab 00–02, `docs/pemeliharaan.md` | Jalur pertama Bu Rina jelas; perintah dan izin tetap |
| Perangkat dan kode | Bab 04–08 | Pilihan OS terpisah; contoh output cocok; seluruh kode tetap |
| Akses dan pengujian | Bab 09–12, 14 | Rantai izin, risiko, pengujian, jaringan utuh; cocok dengan contoh Bab 13 |
| Bukti dan respons | Bab 15–17 | Log, tabletop, dan salinan bukti terhubung; batas kesimpulan tetap |
| Program dan lingkungan | Bab 18–22 | Bekal kode dijelaskan; jalur opsional jelas; seluruh contoh dan batas lab tetap |
| Keputusan dan proyek | Bab 23–26 | Riset, risiko, serta rubrik capstone tetap terhubung |
| Pendamping | Enam lampiran dan `labs/README.md` | Istilah, tahap, rubrik, sumber dan hasil lab selaras |
| Simulator | Teks terlihat dan `simulator/README.md` | Sapaan/istilah selaras; fungsi sama; test serta QA sesuai repo |
| Integrasi | `tools/build_book.py` dan buku gabungan | Intro/daftar isi selaras; anchor tetap; buku dibangun setelah paket sumber selesai |

Penulis integrasi akan menunggu semua paket sumber sebelum menggabungkan buku.
Pemeriksa akan meninjau satu paket milik penulis lain memakai daftar periksa yang sama.
Coordinator akan mencatat log, laporan, dan vault; pekerjaan fondasi tidak menyuntingnya.
