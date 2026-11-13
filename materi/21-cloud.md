# Bab 21: Keamanan cloud, container, dan konfigurasi

Tahap 5 dari 6: Memeriksa program dan lingkungan

## Tujuan dan prasyarat

Kamu akan menilai konfigurasi cloud tanpa membuka akun atau menyalakan sumber daya berbayar.
Kemampuan ini membantumu mengaudit penyimpanan data cadangan dan layanan aplikasi Laundry Aman.

Bekal utamamu adalah [jaringan dari Bab 03](03-jaringan.md) serta [pengerasan akun dari Bab 09](09-identitas.md) dan [Bab 10](10-hardening.md).
Pahami juga [pembacaan format data JSON dari Bab 15](15-deteksi.md).
Pahami prinsip least privilege untuk membatasi wewenang seminimal mungkin.
Praktik dilakukan dengan membaca dokumen JSON serta rancangan konfigurasi di komputermu sendiri.
Tandai pengujian lingkungan cloud nyata sebagai `NOT_RUN` jika belum terhubung ke sistem berizin.

## Konsep

Laundry Aman mulai memindahkan data cadangan ke pusat data internet.
Komputasi jarak jauh memudahkan toko menambah kapasitas tanpa server fisik baru.
Meskipun penyedia mengurus infrastruktur, pemilik toko tetap bertanggung jawab atas izin datanya.
Kesalahan izin atau konfigurasi wadah dapat membuka data pelanggan.
Kita akan mempelajari tanggung jawab bersama, izin cloud, dan pengamanan container.

### Memahami model layanan dan tanggung jawab bersama

Layanan komputasi modern menyediakan infrastruktur siap pakai melalui internet.

Teknologi **cloud** menyediakan kemampuan komputasi melalui layanan penyedia.
Dalam **IaaS** (*Infrastructure as a Service*), pelanggan mengelola lebih banyak lapisan, termasuk sistem operasi mesin virtual.

Model **PaaS** (*Platform as a Service*) memindahkan sebagian pengelolaan platform kepada penyedia.
Model **SaaS** (*Software as a Service*) menyediakan aplikasi siap pakai bagi pengguna akhir.
Pemilik akun tetap perlu mengatur akses, klasifikasi data, serta konfigurasi yang menjadi tanggung jawabnya.

Model **shared responsibility** membagi tanggung jawab antara penyedia dan pelanggan.
Pembagiannya bergantung pada jenis layanan yang dipilih.

Penyedia menjaga keamanan fisik fasilitas, server keras, dan lapisan jaringan dasar.
Pelanggan bertanggung jawab mengelola akun, data, dan pengaturan izin.
Memindahkan backup Laundry Aman ke cloud tidak menentukan siapa yang boleh mengunduh backup itu; administrator masih harus menetapkan izin.

#### Cukup kenali dulu

- **Penyedia cloud**: perusahaan pengelola infrastruktur komputasi awan.
- **Bucket**: wadah penyimpanan objek file di lingkungan penyimpanan cloud.
- **Multi-tenancy**: pemakaian infrastruktur fisik yang sama oleh banyak pelanggan secara terisolasi.

### Mengatur hak akses dengan IAM dan ARN

Untuk membatasi siapa saja yang boleh mengakses data toko, kita menggunakan sistem identitas cloud.

Sistem **IAM**, singkatan dari *Identity and Access Management*, mengatur identitas dan izinnya.
Sebuah kebijakan menjawab siapa boleh melakukan aksi apa pada sumber daya mana.
Kebijakan izin ditulis dalam dokumen teks terstruktur berformat JSON, seperti yang kamu pelajari di Bab 15.

Dalam ekosistem AWS, kode **ARN** (*Amazon Resource Name*) adalah nama pengenal sumber daya.
Penyedia lain memiliki konsep setara dengan format berbeda.
Kebijakan contoh di bab ini memakai AWS agar sintaksnya konkret, tetapi prinsipnya berlaku lintas penyedia.
Hindari pemakaian tanda bintang tanpa batas pada penulisan kebijakan hak akses.

#### Cukup kenali dulu

- **Prinsipal**: pengguna, akun, atau layanan yang meminta izin melakukan tindakan.
- **Efek pernyataan**: penentuan izin, berupa mengizinkan (*Allow*) atau menolak (*Deny*).
- **KMS**: Key Management Service, layanan pengelola kunci enkripsi data.

### Mengisolasi aplikasi dengan container dan serverless

Aplikasi modern sering dikemas agar dapat dipindahkan dengan mudah antarsistem.

Teknologi **container** mengemas aplikasi beserta lingkungan pengguna yang dibutuhkannya.
Container pada umumnya berbagi kernel host, sehingga batasnya berbeda dari VM.
Menjalankannya dengan hak istimewa atau memasang direktori host dapat memperluas dampak kesalahan.

Praktik **Infrastructure as Code**, atau IaC, menyimpan rancangan infrastruktur sebagai kode agar tim bisa meninjau dan mengulang perubahan.
Arsitektur **Serverless** mengurangi pengelolaan server langsung, tetapi fungsi tetap mempunyai identitas, input, dependency, dan akses jaringan.
Rahasia yang tertulis di kode fungsi tetap menjadi masalah meskipun penyedia mengurus servernya.

<details>
<summary>Pendalaman opsional: audit kluster Kubernetes</summary>

Untuk Kubernetes, pelajari Pod Security Standards, service account, RBAC, serta NetworkPolicy.
Sebuah namespace membantu pengelolaan tetapi tidak otomatis menyediakan seluruh isolasi keamanan.
Kamu tidak perlu memasang cluster untuk menyelesaikan audit rancangan ini.

</details>

### Ringkasan

- Model shared responsibility membagi tanggung jawab; keamanan data dan izin tetap di tangan pelanggan.
- Kebijakan IAM berformat JSON mengatur aksi yang diizinkan pada sumber daya ARN tertentu.
- Container berbagi kernel sistem; hindari opsi privileged dan jangan pasang direktori root host.
- Infrastructure as Code mencatat konfigurasi sebagai kode yang dapat diaudit dan diulang.

### Cek pemahaman

1. Apa tanggung jawab pelanggan yang tidak pernah dipindahkan ke penyedia dalam model IaaS maupun SaaS?
2. Mengapa tanda bintang `*` pada resource dokumen IAM dianggap berisiko tinggi?
3. Mengapa sebuah container yang dibobol dapat berdampak lebih luas jika dijalankan dengan opsi privileged?

## Praktik

Pemilik Laundry Aman meminta aplikasi laporan membaca berkas dari awalan `laporan/` di sebuah bucket, yaitu wadah objek penyimpanan.
Ia tidak memberi kebutuhan menghapus, menulis, atau membaca backup pelanggan.

### 1. Periksa kebijakan yang terlalu luas

Berikut usulan kebijakan awal yang terlalu luas dan berbahaya:

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

Tanda `*` pada aksi mencakup aksi S3 yang cocok dengan pola; tanda `*` pada sumber daya memperluas cakupan sumber daya dalam evaluasi kebijakan.
Akses efektif masih bergantung pada kebijakan lain dan penolakan eksplisit.
Jangan menganggap satu dokumen sudah mewakili seluruh keputusan izin.

### 2. Tulis usulan perbaikan least privilege

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

Nama bucket di sini hanya contoh.
Kebijakan membatasi pembacaan objek pada awalan yang diminta.
Aksi `s3:ListBucket` adalah izin berbeda pada ARN bucket; tambahkan hanya bila kebutuhan aplikasi memerlukannya dan batasi kondisinya.
Kebijakan ini juga belum memberi izin KMS jika objek membutuhkan kunci KMS tertentu.

### 3. Buat matriks uji keputusan

Buat matriks uji sebelum mempertimbangkan deployment:

| Permintaan | Keputusan yang diinginkan | Alasan |
|---|---|---|
| Membaca `laporan/november.csv` | Izinkan | Sesuai tugas |
| Membaca `backup/pelanggan.csv` | Tolak | Di luar awalan |
| Menghapus laporan | Tolak | Tidak ada kebutuhan hapus |
| Menulis laporan baru | Tolak | Aplikasi ini hanya pembaca |

Matriks ini adalah rancangan test, bukan hasil pemanggilan AWS.
Tandai validasi cloud sebagai `NOT_RUN`.
Saat kelak memakai lingkungan berizin, uji akses positif dan negatif melalui simulator atau lingkungan uji yang sesuai, lalu periksa keseluruhan kebijakan yang berlaku.

### 4. Audit konfigurasi container

Lanjutkan dengan audit rancangan container fiktif berikut:

```text
image: laundry-app:latest
user: root
privileged: true
host_mount: /:/host
secret: ditulis dalam berkas konfigurasi sumber
network: menerima koneksi dari semua alamat
```

Hubungkan tiap temuan dengan kemungkinan dampak:
Tag bergerak menyulitkan mengetahui artefak yang dipasang.
Hak root dan privileged memperluas kewenangan.
Mount root host membuka akses ke data host sesuai izin yang berlaku.
Secret di sumber dapat menyebar ke riwayat Git.
Akses jaringan perlu mengikuti kebutuhan layanan.

Usulkan perbaikan konfigurasi:
Gunakan image dengan digest yang terverifikasi.
Terapkan pengguna non-root dan hapus privilese yang tidak diperlukan.
Hilangkan mount host dan kelola secret melalui mekanisme yang aman.
Batasi koneksi jaringan sesuai kebutuhan tugas.

Konfigurasi ini perlu uji aplikasi: beberapa program memerlukan direktori sementara yang tetap dapat ditulis.
Read-only filesystem tanpa rancangan penyimpanan bisa membuat aplikasi gagal.

Untuk Kubernetes, pelajari Pod Security Standards, service account, RBAC, serta NetworkPolicy.
Sebuah namespace membantu pengelolaan tetapi tidak otomatis menyediakan seluruh isolasi keamanan.
Kamu tidak perlu memasang cluster untuk menyelesaikan audit rancangan ini.

## Hasil yang diharapkan

Kamu menghasilkan kebijakan lebih sempit, empat keputusan uji, serta enam temuan konfigurasi container.
Untuk tiap temuan, kamu menjelaskan siapa yang terdampak dan uji apa yang membuktikan perbaikannya.
Kamu juga dapat membedakan review offline dari bukti akses efektif di cloud.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Sulit memahami format ARN | Pisahkan bagian layanan, nama bucket, dan awalan objek secara teratur |
| Tergoda memakai tanda `*` | Catat aksi yang gagal dan kebutuhan bisnisnya, lalu tambahkan izin spesifik |
| Hardening memutus aplikasi | Periksa kebutuhan izin tulis sementara dan jaringan tanpa membuka wewenang penuh |

## Latihan

Rancang akses cabang A dan B sehingga masing-masing hanya membaca awalan miliknya.
Tambahkan satu akun audit yang boleh membaca kedua laporan tanpa menghapusnya.
Buat enam kasus uji lintas peran, termasuk akses ke backup yang harus ditolak.

<details>
<summary>Pembahasan setelah mencoba: pembagian awalan bucket</summary>

Gunakan ARN terpisah untuk masing-masing cabang, misalnya `laporan/cabang-a/*` dan `laporan/cabang-b/*`.
Akun audit mendapat izin `s3:GetObject` dengan sumber daya mencakup kedua awalan tersebut.
Pastikan tidak ada pernyataan yang mengizinkan aksi `s3:DeleteObject` atau akses ke direktori cadangan `backup/*`.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan diagram aliran data, tabel tanggung jawab, usulan kebijakan JSON, dan matriks izin.
- [ ] Saya dapat membedakan batas IAM, kontrol jaringan, enkripsi, dan backup sebagai mekanisme terpisah.
- [ ] Saya dapat menjelaskan bahaya pemakaian hak root dan mount host pada rancangan container.
- [ ] Saya memahami alasan mengapa hasil audit konfigurasi luring ditandai `NOT_RUN` sebelum diuji pada cloud berizin.

### Lanjut belajar

Jika konsep least privilege dan akun perlu diperdalam lagi, buka kembali [Bab 10](10-hardening.md).
Untuk menyegarkan pemahaman pembacaan log JSON, baca kembali [Bab 15](15-deteksi.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 22: Secure SDLC](22-secure-sdlc.md) untuk mempelajari integrasi pengujian keamanan ke dalam alur pengembangan perangkat lunak.

## Referensi

- [AWS IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).
- [AWS S3 policy language dan cakupan sumber daya](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html).
- [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/).
