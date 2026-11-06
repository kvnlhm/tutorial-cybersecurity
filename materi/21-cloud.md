# Bab 21: Keamanan cloud, container, dan konfigurasi

## Tujuan dan prasyarat

Anda akan menilai konfigurasi cloud tanpa membuka akun atau menyalakan sumber daya berbayar. Pahami jaringan, identitas, file, dan prinsip least privilege. Praktik dilakukan dengan membaca dokumen JSON serta diagram di komputer sendiri.

## Konsep

**Cloud** menyediakan kemampuan komputasi melalui layanan penyedia. Dalam **IaaS**, pelanggan mengelola lebih banyak lapisan, termasuk sistem operasi mesin virtual. **PaaS** memindahkan sebagian pengelolaan platform kepada penyedia. **SaaS** menyediakan aplikasi siap pakai. Pemilik akun tetap perlu mengatur akses, klasifikasi data, serta konfigurasi yang menjadi tanggung jawabnya.

Model **shared responsibility** membagi tanggung jawab antara penyedia dan pelanggan. Pembagiannya bergantung pada layanan. Memindahkan backup Laundry Aman ke cloud tidak menentukan siapa yang boleh mengunduh backup itu; administrator masih harus menetapkan izin.

**IAM**, Identity and Access Management, mengatur identitas dan izinnya. Sebuah kebijakan menjawab siapa boleh melakukan aksi apa pada sumber daya mana. Dalam AWS, **ARN** adalah nama pengenal sumber daya. Penyedia lain memiliki konsep setara dengan format berbeda. Kebijakan contoh di bab ini memakai AWS agar sintaksnya konkret, tetapi prinsipnya berlaku lintas penyedia.

**Container** mengemas aplikasi beserta lingkungan pengguna yang dibutuhkannya. Container pada umumnya berbagi kernel host, sehingga batasnya berbeda dari VM. Menjalankannya dengan hak istimewa atau memasang direktori host dapat memperluas dampak kesalahan. **Infrastructure as Code**, atau IaC, menyimpan rancangan infrastruktur sebagai kode agar tim bisa meninjau dan mengulang perubahan.

**Serverless** mengurangi pengelolaan server langsung, tetapi fungsi tetap mempunyai identitas, input, dependency, dan akses jaringan. Rahasia yang tertulis di kode fungsi tetap menjadi masalah meskipun penyedia mengurus servernya.

## Praktik

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

## Hasil yang diharapkan

Anda menghasilkan kebijakan lebih sempit, empat keputusan uji, serta enam temuan konfigurasi container. Untuk tiap temuan, Anda menjelaskan siapa yang terdampak dan uji apa yang membuktikan perbaikannya. Anda juga dapat membedakan review offline dari bukti akses efektif di cloud.

## Jika macet

- Sulit memahami ARN: pisahkan bagian layanan, nama bucket, dan awalan objek. Cocokkan dengan dokumentasi resmi layanan.
- Ingin memberi wildcard agar cepat berjalan: catat aksi yang gagal dan kebutuhan bisnisnya, lalu tambahkan izin yang diperlukan.
- Rancangan hardening memutus aplikasi: cari kebutuhan tulis, jaringan, atau identitas yang sah. Jangan mengembalikan seluruh hak istimewa sekaligus.

## Latihan

Rancang akses cabang A dan B sehingga masing-masing hanya membaca awalan miliknya. Tambahkan satu akun audit yang boleh membaca kedua laporan tanpa menghapusnya. Buat enam kasus uji lintas peran, termasuk akses ke backup yang harus ditolak.

## Bukti kelulusan

Simpan diagram aliran data, tabel tanggung jawab, kebijakan usulan, dan matriks izin. Anda lulus jika dapat menerangkan batas IAM, jaringan, enkripsi, serta backup sebagai kontrol yang memiliki tugas berbeda.

## Referensi

- [AWS IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).
- [AWS S3 policy language dan cakupan sumber daya](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html).
- [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/).
