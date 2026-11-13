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
Mengatur akun kasir secara terpisah di setiap toko mulai merepotkan.
Jaringan perusahaan membutuhkan pengelolaan identitas pengguna secara terpusat.
Hubungan grup bertingkat dapat memberi akses yang tidak sesuai tugas.
Kita akan mempelajari direktori perusahaan, tiket masuk, dan penelusuran izin akses.

### Mengelola identitas terpusat dengan Active Directory

Petugas Laundry Aman ingin mengelola akun cabang dari satu tempat agar pencabutan akses tidak terlewat.

Layanan **directory service** menyimpan identitas dan hubungan organisasi secara terpusat, seperti buku induk akun seluruh cabang.

Layanan **Active Directory Domain Services**, disingkat AD DS, adalah sistem dari Microsoft untuk memenuhi kebutuhan tersebut.

Server pengendali yang menjalankan layanan direktori ini disebut **domain controller**.

Struktur Active Directory disusun secara bertingkat untuk memudahkan pembagian wewenang:

Sebuah **domain** mengelompokkan identitas dan pengelolaannya, seperti satu bagian buku induk akun.
Domain tidak harus terbatas pada satu jaringan fisik.

Struktur **forest** dapat memuat beberapa domain dengan hubungan kepercayaan, seperti kumpulan buku induk yang saling mengenali akun.
Kepercayaan membantu pengenalan identitas; izin mengakses file tetap perlu diperiksa.

Pengaturan **Group Policy** membantu administrator menerapkan aturan ke pengguna atau komputer, seperti instruksi kerja bersama untuk cabang.

Wadah **Organizational Unit**, atau OU, mengelompokkan objek untuk administrasi, seperti map akun cabang yang dikelola petugas tertentu.
Wadah OU bukan pengganti grup izin file.

#### Cukup kenali dulu

- **Objek direktori**: rekaman data identitas pengguna, grup, atau komputer di dalam AD DS.
- **Pohon domain**: susunan domain yang berbagi struktur penamaan DNS yang sama di dalam forest.
- **Replikasi direktori**: proses penyelarasan data akun antarberbagai domain controller secara otomatis.

### Membuktikan identitas lewat tiket Kerberos

Laptop kasir Laundry Aman perlu mencari informasi akun, lalu membuktikan identitas saat membuka layanan.

Protokol **LDAP** adalah aturan komunikasi untuk membaca dan mencari informasi di dalam direktori.
Seperti petugas yang mencari nama di buku induk, klien meminta informasi yang diizinkan untuk dibaca.

Mekanisme **Kerberos** membantu membuktikan identitas pengguna melalui sistem tiket digital.
Bayangkan loket yang memeriksa identitas, lalu memberikan tiket untuk meminta tiket layanan tertentu.

Pusat penerbit tiket disebut **KDC** (*Key Distribution Center*), yang berada pada domain controller dalam lingkungan AD DS.

Saat berhasil login, pengguna menerima **TGT** (*Ticket Granting Ticket*), tiket untuk meminta tiket layanan tanpa menyerahkan ulang password ke tiap layanan.

Tiket TGT dipakai untuk meminta tiket layanan tertentu saat kasir membuka server aplikasi atau file bersama.
Server layanan memeriksa tiket untuk mengenali identitas, lalu tetap memeriksa izin tindakan yang diminta.
Penjelasan ini menyederhanakan proses pertukaran kunci kriptografi yang terjadi di baliknya.

Layanan DNS membantu klien menemukan layanan domain, termasuk domain controller.
Sinkronisasi waktu jam sangat penting untuk memeriksa masa berlaku tiket Kerberos.
Gangguan login karena DNS atau waktu tidak otomatis berarti serangan; periksa konfigurasi dan log sebelum menyimpulkan penyebab.

#### Cukup kenali dulu

- **SPN**: Service Principal Name, pengenal unik untuk suatu layanan jaringan pada Kerberos.
- **Masa aktif tiket**: batas waktu berlakunya tiket sebelum klien harus meminta tiket baru.
- **Otentikasi bersama**: situasi di mana klien dan server saling membuktikan identitas masing-masing.

### Menelusuri tiga jenis hubungan izin akses

Saat meninjau akses vendor Laundry Aman, bedakan tiga jenis hubungan berikut:

- **Keanggotaan:** akun mewarisi hak dari grup, termasuk grup di dalam grup lain secara bersarang.
- **Kontrol:** akun dapat mengubah anggota grup atau mengatur ulang akun lain.
- **Penggunaan:** akun layanan menjalankan aplikasi dengan akses tertentu pada komputer.

Izin tampak kecil dapat membentuk jalur menuju aset besar.
Seorang operator yang boleh mengubah anggota grup administrator mungkin memperoleh pengaruh lebih luas daripada hak baca direktori biasa.
Penilaian perlu mengikuti hubungan, bukan hanya nama jabatan akun semata.

Untuk mengikuti hubungan tadi, kita memakai **graf**, gambar titik dan penghubung, seperti peta jalur antarcabang.
Tiap titik atau simpul mewakili akun atau grup; panah berarti keanggotaan.
Dictionary Python memetakan tiap nama ke daftar grup induknya.

Skrip memakai antrean, daftar pekerjaan yang diperiksa dari urutan depan.
Set `pernah` menyimpan nama yang sudah diperiksa tanpa duplikasi, sehingga hubungan melingkar tidak membuat pemeriksaan berulang tanpa henti.

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

Pilih jalur sesuai perangkatmu. Buka terminal di folder utama tutorial, lalu jalankan perintah berikut:

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
Skrip ini hanya mencari jalur admin. Pemeriksaan hak baca memerlukan model izin tambahan atau lab berizin; simpan hasilnya secara terpisah.
Audit yang hanya mencabut izin dapat merusak layanan jika tidak memeriksa kebutuhan operasional secara menyeluruh.

### 4. Pendalaman lingkungan AD DS berizin

Pada lingkungan AD DS berizin, perluas latihan menjadi pemeriksaan kebijakan akun layanan, pembatasan administrator, protokol lama, serta log perubahan grup.
Teknik seperti password spraying, pass-the-hash, dan penyalahgunaan tiket menjelaskan risiko identitas; pembelajaran operasionalnya perlu lab khusus dan cakupan tertulis.
Materi ini melatih cara menemukan dan menutup jalur izin tanpa mencoba kredensial pihak lain.

<details>
<summary>Pendalaman opsional: istilah risiko identitas</summary>

- **Password spraying**: mencoba sedikit password pada banyak akun.
- **Pass-the-hash**: menyalahgunakan hash autentikasi untuk bertindak sebagai akun tanpa mengetahui password aslinya.
- **Penyalahgunaan tiket**: memakai tiket autentikasi di luar hak atau tujuan yang sah.

</details>

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
- [ ] Saya menyimpan hasil uji bahwa fungsi bisnis yang sah tetap berjalan setelah perbaikan izin.

### Lanjut belajar

Jika konsep izin Windows lokal perlu disegarkan kembali, buka [Bab 05](05-windows.md).
Untuk menyegarkan prinsip least privilege dan pemisahan akun, baca kembali [Bab 10](10-hardening.md).
Setelah bukti kelulusan siap, lanjutkan ke [Bab 21: Cloud](21-cloud.md) untuk mempelajari arsitektur identitas dan pembatasan izin di lingkungan cloud.

## Referensi

- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).
- [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview).
