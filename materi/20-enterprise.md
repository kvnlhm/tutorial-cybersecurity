# Bab 20: Identitas perusahaan, Active Directory, dan Kerberos

Tahap 5 dari 6: Memeriksa program dan lingkungan

## Tujuan dan prasyarat

Kamu akan menelusuri hubungan akun, grup, mesin, dan hak akses pada jaringan perusahaan.
Pengetahuan ini membantumu melindungi data cabang Laundry Aman dari eskalasi izin yang tidak sah.

Bekal utamamu adalah [DNS dari Bab 03](03-jaringan.md) serta [identitas Windows dari Bab 05](05-windows.md).
Pahami juga [dasar Python dari Bab 06](06-pemrograman.md), serta [otorisasi dari Bab 09](09-identitas.md) dan [Bab 10](10-hardening.md).
Latihan menggunakan tabel inventaris fiktif dan pemodelan Python.
Kamu tidak membutuhkan Windows Server berbayar atau akses domain kantor nyata.

## Konsep

Laundry Aman kini mengelola belasan cabang toko di berbagai kota.
Mengatur akun kasir secara terpisah di setiap toko menjadi sangat merepotkan.
Jaringan perusahaan membutuhkan pengelolaan identitas pengguna secara terpusat.
Hubungan grup bertingkat sering membuka jalur akses rahasia tanpa disadari.
Kita akan mempelajari direktori perusahaan, tiket masuk, dan penelusuran izin akses.

### Mengelola identitas terpusat dengan Active Directory

Mengelola akun satu per satu di setiap komputer cabang memicu ketidakteraturan izin akses.

Layanan **directory service** menyimpan identitas dan hubungan organisasi secara terpusat dalam satu basis data.
Layanan **Active Directory Domain Services**, disingkat AD DS, adalah sistem dari Microsoft untuk memenuhi kebutuhan tersebut.
Server pengendali yang menjalankan layanan direktori ini disebut **domain controller**.

Struktur Active Directory disusun secara bertingkat untuk memudahkan pembagian wewenang:

Sebuah **domain** mengelompokkan identitas dan batas administrasi dalam satu jaringan organisasi.
Struktur **forest** dapat memuat beberapa domain dengan hubungan kepercayaan timbal balik.
Pengaturan **Group Policy** membantu administrator menerapkan aturan keamanan ke pengguna atau komputer secara massal.
Wadah **Organizational Unit**, atau OU, dipakai untuk mengelompokkan akun demi kemudahan delegasi tugas.
Wadah OU bukan pengganti grup izin file NTFS.

#### Cukup kenali dulu

- **Objek direktori**: rekaman data identitas pengguna, grup, atau komputer di dalam AD DS.
- **Pohon domain**: susunan domain yang berbagi struktur penamaan DNS yang sama di dalam forest.
- **Replikasi direktori**: proses penyelarasan data akun antarberbagai domain controller secara otomatis.

### Membuktikan identitas lewat tiket Kerberos

Klien jaringan membutuhkan protokol komunikasi untuk mencari informasi dan membuktikan izinnya.

Protokol **LDAP** adalah aturan komunikasi untuk membaca dan mencari informasi di dalam direktori.
Sementara itu, mekanisme **Kerberos** membantu membuktikan identitas pengguna melalui sistem tiket digital.
Bayangkan loket bioskop: petugas memverifikasi tiket masukmu, lalu memberimu gelang pengenal untuk memasuki ruangan teater tertentu.

Pusat penerbit tiket disebut **KDC** (*Key Distribution Center*), yang berada pada domain controller dalam lingkungan AD DS.
Saat berhasil login, pengguna menerima tiket **TGT** (*Ticket Granting Ticket*).

Tiket TGT dipakai untuk meminta tiket layanan tertentu saat kasir membuka server aplikasi atau file bersama.
Server layanan kemudian memeriksa tiket yang sesuai sebelum mengizinkan akses.
Penjelasan ini menyederhanakan proses pertukaran kunci kriptografi yang terjadi di baliknya.

Layanan DNS membantu klien menemukan domain controller terdekat di jaringan.
Sinkronisasi waktu jam sangat penting untuk memeriksa masa berlaku tiket Kerberos.
Gangguan login karena DNS atau waktu tidak otomatis berarti serangan; periksa konfigurasi dan log sebelum menyimpulkan penyebab.

#### Cukup kenali dulu

- **SPN**: Service Principal Name, pengenal unik untuk suatu layanan jaringan pada Kerberos.
- **Masa aktif tiket**: batas waktu berlakunya tiket sebelum klien harus meminta tiket baru.
- **Otentikasi bersama**: situasi di mana klien dan server saling membuktikan identitas masing-masing.

### Menelusuri tiga jenis hubungan izin akses

Dalam meninjau keamanan jaringan perusahaan, ada tiga hubungan izin yang perlu kamu bedakan:

- **Keanggotaan:** akun mewarisi hak dari grup, termasuk grup di dalam grup lain secara bersarang.
- **Kontrol:** akun dapat mengubah anggota grup atau mengatur ulang akun lain.
- **Penggunaan:** akun layanan menjalankan aplikasi dengan akses tertentu pada komputer.

Izin tampak kecil dapat membentuk jalur menuju aset besar.
Seorang operator yang boleh mengubah anggota grup administrator mungkin memperoleh pengaruh lebih luas daripada hak baca direktori biasa.
Penilaian perlu mengikuti hubungan, bukan hanya nama jabatan akun semata.

<details>
<summary>Pendalaman opsional: struktur graf dan pencarian antrean</summary>

Di Bab 06, kita mempelajari struktur dictionary untuk menyimpan pasangan nilai.
Di bab ini, dictionary memetakan nama akun ke daftar grup induknya sebagai representasi graf.
Antrean memeriksa jalur langkah demi langkah, sementara set `pernah` mencatat simpul yang sudah dikunjungi agar tidak terjadi perulangan tanpa henti.

</details>

### Ringkasan

- Active Directory menyatukan pengelolaan identitas dan kebijakan komputer perusahaan secara terpusat.
- Kerberos membuktikan identitas melalui tiket TGT dan tiket layanan yang diterbitkan oleh KDC.
- Hubungan izin terbagi menjadi keanggotaan, kontrol, dan penggunaan akun layanan.
- Celah eskalasi hak sering muncul dari rantai keanggotaan grup yang bertingkat.

### Cek pemahaman

1. Apa perbedaan peran antara tiket TGT dan tiket layanan pada Kerberos?
2. Mengapa akun yang hanya punya hak mengubah anggota grup admin bisa sama berbahayanya dengan akun admin itu sendiri?
3. Mengapa sinkronisasi jam sangat penting untuk kelancaran login Kerberos?

## Praktik

Kamu akan mengaudit data keanggotaan grup fiktif menggunakan pemodelan graf di Python.

Gunakan inventaris fiktif ini:

| Akun | Status | Grup langsung | Kebutuhan kerja |
|---|---|---|---|
| rani.kasir | aktif | Kasir | Membaca dan membuat transaksi cabangnya |
| bima.it | aktif | Helpdesk | Mengatur ulang akun kasir |
| vendor.lama | kontrak berakhir | OperatorBackup | Tidak ada |
| svc.laporan | aktif | AdminCabang | Membaca transaksi untuk laporan |

Hubungan grup: `OperatorBackup` masuk ke `AdminCabang`; `AdminCabang` memiliki hak mengubah konfigurasi server cabang.
Ini rancangan buruk untuk latihan, bukan rekomendasi struktur organisasi.

### 1. Buat dan jalankan skrip audit graf

Buat folder `hasil-belajar/bab20/` melalui pengelola berkas.
Simpan kode berikut sebagai `audit_grup.py` di dalamnya:

```python
anggota = {
    "vendor.lama": ["OperatorBackup"],
    "OperatorBackup": ["AdminCabang"],
    "svc.laporan": ["AdminCabang"],
    "rani.kasir": ["Kasir"],
}

def jalur_ke_admin(awal):
    antrean = [(awal, [awal])]
    pernah = set()
    while antrean:
        simpul, jalur = antrean.pop(0)
        if simpul == "AdminCabang":
            return jalur
        if simpul in pernah:
            continue
        pernah.add(simpul)
        for induk in anggota.get(simpul, []):
            antrean.append((induk, jalur + [induk]))
    return None

for akun in ("vendor.lama", "svc.laporan", "rani.kasir"):
    print(akun, jalur_ke_admin(akun))
```

Jalankan perintah berikut:

**Windows PowerShell**

```powershell
py hasil-belajar/bab20/audit_grup.py
```

**Linux/macOS**

Ganti `py` dengan `python3` pada perintah di atas.

Kamu membuat graf kecil: simpul adalah akun atau grup, sedangkan panah berarti keanggotaan.
Variabel set `pernah` mencegah perulangan tak berujung jika data memuat siklus hubungan tertutup.

### 2. Identifikasi tiga temuan keamanan

Tulis tiga temuan penting berdasarkan hasil analisis:
Pertama, akun vendor yang kontraknya berakhir masih memiliki jalur menuju admin melalui `OperatorBackup`.
Kedua, akun laporan memiliki hak berlebih dibanding kebutuhan kerja membaca transaksi.
Ketiga, struktur grup backup mencampurkan tugas pemulihan dengan administrasi server penuh.
Menonaktifkan akun vendor menyelesaikan akses akun itu, tetapi belum memperbaiki rancangan grup yang salah.

### 3. Rancang perbaikan bertahap

Rancang perbaikan bertahap untuk menata ulang struktur izin:

1. Minta pemilik layanan memastikan ketergantungan akun vendor, lalu cabut akses sesuai proses penghentian kontrak.
2. Buat peran laporan yang hanya dapat membaca data yang diperlukan. Uji pekerjaan laporan dengan peran itu pada lab.
3. Pisahkan tugas backup dari administrasi. Tentukan siapa yang menyetujui pemulihan dan siapa yang mengauditnya.
4. Jadwalkan tinjauan keanggotaan bersama pemilik aplikasi; simpan alasan tiap pengecualian.

Uji rancangan pada data Python dengan mengganti hubungan yang berlebih.
Tambahkan uji positif: pekerjaan laporan tetap mendapat hak baca yang sah.
Audit yang hanya mencabut izin dapat merusak layanan jika tidak memeriksa kebutuhan operasional secara menyeluruh.

### 4. Pendalaman lingkungan AD DS berizin

Pada lingkungan AD DS berizin, perluas latihan menjadi pemeriksaan kebijakan akun layanan, pembatasan administrator, protokol lama, serta log perubahan grup.
Teknik seperti password spraying, pass-the-hash, dan penyalahgunaan tiket menjelaskan risiko identitas; pembelajaran operasionalnya perlu lab khusus dan cakupan tertulis.
Materi ini melatih cara menemukan dan menutup jalur izin tanpa mencoba kredensial pihak lain.

## Hasil yang diharapkan

Program menunjukkan jalur dua lompatan dari `vendor.lama` menuju `AdminCabang`, jalur langsung untuk `svc.laporan`, dan `None` untuk `rani.kasir`.
Kamu menghasilkan peta akses sesudah perbaikan serta daftar pemilik keputusan.
Hasil `None` hanya berlaku bagi hubungan yang dimasukkan, bukan seluruh izin suatu domain nyata.

## Jika macet

| Yang terlihat | Pemeriksaan atau langkah aman |
|---|---|
| Sulit membayangkan hubungan graf | Gambar tiap nama pada kertas, lalu tarik panah ke grup induknya |
| Semua akun tampak berbahaya | Bandingkan izin dengan kebutuhan kerja nyata, status akun, dan sensitivitas aset |
| Percobaan login lab gagal | Periksa kesesuaian waktu jam, DNS, konektivitas, dan pesan error sebelum mengubah kebijakan |

## Latihan

Tambahkan grup `Supervisor` yang boleh mengubah anggota `Kasir`.
Bedakan hubungan kontrol tersebut dari keanggotaan biasa.
Jelaskan mengapa algoritma di atas belum menghitung seluruh bentuk kontrol dan apa data tambahan yang dibutuhkan.

<details>
<summary>Pembahasan setelah mencoba: hubungan kontrol versus keanggotaan</summary>

Hubungan keanggotaan berarti akun mewarisi hak yang dimiliki oleh grup.
Hubungan kontrol berarti akun memiliki izin mengubah struktur keanggotaan grup lain.
Untuk memodelkan hubungan kontrol, kamu memerlukan struktur data relasi tambahan yang mencatat hak manajemen selain hak warisan.

</details>

## Bukti kelulusan

- [ ] Saya menyimpan data inventaris, peta akses sebelum dan sesudah perbaikan, serta tiga temuan risiko.
- [ ] Saya dapat menjelaskan cara kerja tiket Kerberos menggunakan bahasa sendiri.
- [ ] Saya dapat membedakan hasil audit graf sederhana dari penilaian domain Active Directory lengkap.
- [ ] Saya memastikan fungsi bisnis yang sah tetap berjalan setelah perbaikan izin diterapkan.

### Lanjut belajar

Jika konsep izin Windows lokal perlu disegarkan kembali, buka [Bab 05](05-windows.md).
Untuk menyegarkan prinsip least privilege dan pemisahan akun, baca kembali [Bab 10](10-hardening.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 21: Cloud](21-cloud.md) untuk mempelajari arsitektur identitas dan pembatasan izin di lingkungan cloud.

## Referensi

- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).
- [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview).
