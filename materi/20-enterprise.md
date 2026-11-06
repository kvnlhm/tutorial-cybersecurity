# Bab 20: Identitas perusahaan, Active Directory, dan Kerberos

## Tujuan dan prasyarat

Anda akan menelusuri hubungan akun, grup, mesin, dan hak akses. Pahami autentikasi, otorisasi, Windows, jaringan, serta least privilege. Latihan menggunakan tabel fiktif dan Python. Anda tidak membutuhkan Windows Server berbayar atau akses domain kantor.

## Konsep

Laundry Aman tumbuh menjadi beberapa cabang. Mengelola akun satu per satu di tiap komputer mulai merepotkan. **Directory service** menyimpan identitas dan hubungan organisasi secara terpusat. **Active Directory Domain Services**, disingkat AD DS, merupakan layanan Microsoft untuk kebutuhan tersebut. **Domain controller** adalah server yang menjalankan layanan domain.

Sebuah **domain** mengelompokkan identitas dan pengelolaan. **Forest** dapat memuat beberapa domain dengan hubungan kepercayaan. **Group Policy** membantu administrator menerapkan pengaturan ke pengguna atau komputer. **Organizational Unit**, atau OU, merupakan wadah pengelompokan administrasi. OU bukan pengganti grup izin file.

**LDAP** adalah protokol untuk mengakses informasi direktori. **Kerberos** membantu membuktikan identitas melalui tiket. Bayangkan loket yang memverifikasi identitas Anda, lalu memberi tiket yang memungkinkan Anda meminta tiket layanan tertentu. **KDC**, pusat penerbit tiket, berada pada domain controller dalam lingkungan AD DS. **TGT** dipakai untuk meminta tiket layanan; layanan kemudian memeriksa tiket yang sesuai. Penjelasan ini menyederhanakan pertukaran kriptografinya.

DNS membantu klien menemukan layanan domain. Sinkronisasi waktu membantu pemeriksaan masa berlaku tiket. Gangguan login karena DNS atau waktu tidak otomatis berarti serangan. Periksa konfigurasi dan log sebelum menyimpulkan penyebab.

Tiga hubungan izin perlu Anda bedakan:

- **Keanggotaan:** akun mewarisi hak dari grup, termasuk grup di dalam grup.
- **Kontrol:** akun dapat mengubah anggota grup atau mengatur ulang akun lain.
- **Penggunaan:** akun layanan menjalankan aplikasi dengan akses tertentu.

Izin tampak kecil dapat membentuk jalur menuju aset besar. Seorang operator yang boleh mengubah anggota grup administrator mungkin memperoleh pengaruh lebih luas daripada hak baca direktori biasa. Penilaian perlu mengikuti hubungan, bukan hanya nama jabatan.

## Praktik

Gunakan inventaris fiktif ini:

| Akun | Status | Grup langsung | Kebutuhan kerja |
|---|---|---|---|
| rani.kasir | aktif | Kasir | Membaca dan membuat transaksi cabangnya |
| bima.it | aktif | Helpdesk | Mengatur ulang akun kasir |
| vendor.lama | kontrak berakhir | OperatorBackup | Tidak ada |
| svc.laporan | aktif | AdminCabang | Membaca transaksi untuk laporan |

Hubungan grup: `OperatorBackup` masuk ke `AdminCabang`; `AdminCabang` memiliki hak mengubah konfigurasi server cabang. Ini rancangan buruk untuk latihan, bukan rekomendasi struktur organisasi.

Buat folder `hasil-belajar/bab20/` melalui pengelola berkas, lalu simpan kode berikut sebagai `audit_grup.py` di dalamnya:

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

Jalankan `py hasil-belajar/bab20/audit_grup.py` di PowerShell, atau gunakan `python3`. Anda membuat graf kecil: simpul adalah akun/grup, sedangkan panah berarti keanggotaan. `pernah` mencegah perulangan tak berujung jika data memuat siklus.

Tulis tiga temuan. Pertama, akun vendor yang kontraknya berakhir masih memiliki jalur menuju admin. Kedua, akun laporan memiliki hak berlebih dibanding kebutuhan baca. Ketiga, struktur grup backup mencampurkan tugas pemulihan dengan administrasi server. Menonaktifkan akun vendor menyelesaikan akses akun itu, tetapi belum memperbaiki rancangan grup.

Rancang perbaikan bertahap:

1. Minta pemilik layanan memastikan ketergantungan akun vendor, lalu cabut akses sesuai proses penghentian kontrak.
2. Buat peran laporan yang hanya dapat membaca data yang diperlukan. Uji pekerjaan laporan dengan peran itu pada lab.
3. Pisahkan tugas backup dari administrasi. Tentukan siapa yang menyetujui pemulihan dan siapa yang mengauditnya.
4. Jadwalkan tinjauan keanggotaan bersama pemilik aplikasi; simpan alasan tiap pengecualian.

Uji rancangan pada data Python dengan mengganti hubungan yang berlebih. Tambahkan uji positif: pekerjaan laporan tetap mendapat hak baca. Audit yang hanya mencabut izin dapat merusak layanan jika tidak memeriksa kebutuhan sah.

Pada lingkungan AD DS berizin, perluas latihan menjadi pemeriksaan kebijakan akun layanan, pembatasan administrator, protokol lama, serta log perubahan grup. Teknik seperti password spraying, pass-the-hash, dan penyalahgunaan tiket menjelaskan risiko identitas; pembelajaran operasionalnya perlu lab khusus dan cakupan tertulis. Materi ini melatih cara menemukan dan menutup jalur izin tanpa mencoba kredensial pihak lain.

## Hasil yang diharapkan

Program menunjukkan jalur dua lompatan dari `vendor.lama` menuju `AdminCabang`, jalur langsung untuk `svc.laporan`, dan `None` untuk `rani.kasir`. Anda menghasilkan peta akses sesudah perbaikan serta daftar pemilik keputusan. Hasil `None` hanya berlaku bagi hubungan yang dimasukkan, bukan seluruh izin suatu domain nyata.

## Jika macet

- Sulit membayangkan graf: gambar tiap nama pada kertas, lalu tambahkan panah ke grup induknya.
- Semua akun tampak berbahaya: bandingkan izin dengan kebutuhan kerja, status akun, dan sensitivitas aset.
- Login lab gagal: periksa waktu, DNS, konektivitas, dan pesan kesalahan sebelum mengubah kebijakan keamanan.

## Latihan

Tambahkan grup `Supervisor` yang boleh mengubah anggota `Kasir`. Bedakan hubungan kontrol tersebut dari keanggotaan biasa. Jelaskan mengapa algoritma di atas belum menghitung seluruh bentuk kontrol dan apa data tambahan yang dibutuhkan.

## Bukti kelulusan

Simpan inventaris, peta sebelum/sesudah, tiga temuan berbasis kebutuhan kerja, dan uji bahwa fungsi sah tetap berjalan. Anda lulus jika dapat menjelaskan tiket Kerberos dengan bahasa sendiri dan membedakan audit graf sederhana dari penilaian domain lengkap.

## Referensi

- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).
- [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview).
