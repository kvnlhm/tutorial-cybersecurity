# Peta roadmap ke tutorial

Acuan utama: [Cyber Security di roadmap.sh](https://roadmap.sh/cyber-security).
Indeks upstream yang diperiksa pada 6 November 2026 berisi **302 berkas konten**
di direktori `roadmaps/cyber-security/content`; beberapa membahas topik yang
berulang. Nomor itu bukan jumlah kemampuan yang otomatis dikuasai pembaca.
[Snapshot nama berkas](../docs/ai/roadmap-inventory.json) mencatat commit
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

## Topik tambahan untuk praktik modern

Keamanan API per objek, secure SDLC, dependency/supply chain, fuzzing,
pengujian regresi, dan reproducibility mendapat penekanan tersendiri. Tambahan
tersebut membantu menghubungkan pengetahuan roadmap dengan pekerjaan yang dapat
ditinjau oleh developer maupun tim operasi.

Produk NAS/SAN, suite perkantoran, setiap platform virtualisasi, dan setiap
sertifikasi dalam roadmap tidak mendapat panduan instalasi tersendiri. Pelajari
produk yang digunakan lingkungan kerja Anda setelah menguasai konsep akses,
backup, jaringan, serta tanggung jawab operasional. Ini batas cakupan buku,
bukan pernyataan bahwa topik tersebut tidak penting.
