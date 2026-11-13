# Peta roadmap ke tutorial

**Roadmap** adalah peta topik belajar, seperti daftar kemampuan yang ingin dipelajari untuk menjaga aplikasi Laundry Aman.
Acuan utama buku ini adalah [Cyber Security di roadmap.sh](https://roadmap.sh/cyber-security).

Indeks sumber yang diperiksa pada 6 November 2026 berisi **302 berkas konten** di direktori `roadmaps/cyber-security/content`.
Beberapa berkas membahas topik berulang. Jumlah berkas itu tidak menyatakan jumlah kemampuan yang otomatis dikuasai pembaca.
[Snapshot nama berkas](../docs/ai/roadmap-inventory.json) mencatat commit `d922417cd1ef690e66c008a3c3612f683e8e433a`.
Snapshot adalah salinan daftar pada waktu pemeriksaan; isinya menjadi acuan historis, meskipun situs kemudian berubah.

## Enam tahap untuk mencari bab

Ikuti urutan bab. Gunakan tahap untuk melihat tujuan pekerjaan sebelum mencari topik tertentu pada tabel berikutnya.

| Tahap | Nama tahap | Bab |
|---|---|---|
| 1 | Mulai memakai alat | Pra-bab, 00–02 |
| 2 | Memahami cara sistem bekerja | 03–08 |
| 3 | Menjaga dan menguji akses | 09–14 |
| 4 | Membaca bukti dan menangani kejadian | 15–17 |
| 5 | Memeriksa program dan lingkungan | 18–22 |
| 6 | Mengambil keputusan dan membuktikan kemampuan | 23–26 |

## Arti label cakupan

- **Praktik** berarti ada tugas terarah dalam buku, misalnya memeriksa pemilik nota pada lab lokal.
- **Pengantar** berarti kamu memperoleh model dasar dan masih memerlukan pendalaman sebelum memakai metode pada kasus baru.
- **Jalur lanjut** berarti topik diarahkan ke latihan spesialisasi sesuai prasyaratnya.

Rujukan lanjut menandai nama topik yang belum mempunyai penjelasan atau praktik khusus dalam buku.
Keberadaan nama pada peta tidak berarti latihan alatnya sudah tersedia.
Jika alat diperlukan tetapi belum dijalankan, catat hasil NOT_RUN.

## Pemetaan topik dan batas latihannya

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

## Topik tambahan untuk praktik modern

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

## Batas panduan produk

Produk NAS/SAN, suite perkantoran, setiap platform virtualisasi, dan setiap sertifikasi dalam roadmap belum mempunyai panduan instalasi tersendiri.
Pelajari produk lingkungan kerjamu setelah memahami konsep akses, cadangan, jaringan, serta tanggung jawab operasional.
Batas panduan ini menjelaskan cakupan buku; topik yang belum dilatih tetap dapat penting bagi pekerjaanmu.
