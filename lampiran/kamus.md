# Kamus istilah

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
