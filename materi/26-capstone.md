# Bab 26: Proyek akhir Laundry Aman

Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan

## Tujuan dan prasyarat

Kamu akan menguji akses pesanan Laundry Aman, membandingkan perbaikan, menyelidiki log, lalu memulihkan file transaksi.
Hasil tiap sesi menjadi bagian paket akhir yang dapat diulang orang lain.

Siapkan [Python dan test dari Bab 06](06-pemrograman.md), serta [hash dari Bab 08](08-kriptografi.md).
Gunakan bekal [identitas Bab 09](09-identitas.md), [pemulihan Bab 10](10-hardening.md), [risiko Bab 11](11-threat-modeling.md), dan [cakupan Bab 12](12-pentest.md).
Ulangi [izin objek Bab 13](13-web-api.md), [log Bab 15](15-deteksi.md), [respons Bab 16](16-respons-insiden.md), serta [bukti Bab 17](17-forensik.md).
[Bab 24](24-grc.md) membantu menyusun keputusan bisnis.

Gunakan komputer dengan Python dan editor. Jalur inti berjalan lokal dengan berkas teks, tanpa layanan tambahan.
Anggap seluruh akun, log, dan data sebagai data sintetis.

## Konsep

Pelanggan Laundry Aman harus bisa membaca pesanannya sendiri, sementara transaksi pelanggan lain tetap terlindungi.
Toko juga perlu memulihkan layanan jika file transaksi rusak.
Kita akan mengikuti masalah dari kebutuhan bisnis, bukti kesalahan, dan perbaikan sampai pemeriksaan ulang.
Setelah membaca log, kita menyusun deteksi serta keputusan pemulihan tanpa menganggap setiap dugaan sudah terbukti.

### Gabungkan hasil tanpa melewati batas bukti

Pemilik toko meminta satu paket yang menjelaskan masalah, tindakan, dan hasil pemeriksaannya.
**Capstone** adalah proyek gabungan untuk membuktikan hubungan kemampuan dari beberapa bab.
Seperti menangani satu pesanan dari penerimaan sampai penyerahan, kamu mengikuti seluruh alur dengan bukti pada tiap bagian.

Kamu berganti peran sebagai penguji, pengembang, analis, dan pemilik risiko.
Jika bekerja dengan teman, pisahkan peran agar hasil tidak bergantung pada pengetahuan satu orang.
Pemilik membutuhkan keputusan jelas tanpa menghentikan seluruh pekerjaan karena satu dugaan.

### Bandingkan tindakan penguji dengan pengamatan petugas

Penguji Laundry Aman mencoba membaca pesanan orang lain dalam cakupan latihan.
**Red team** menguji apakah tujuan pengujian dapat dicapai dalam cakupan yang disetujui.
Bayangkan pemeriksa yang mendapat izin untuk mencoba melewati aturan pengambilan pakaian.

Petugas lain memeriksa penolakan dan catatan aplikasi.
**Blue team** melindungi, mendeteksi, dan merespons, seperti petugas yang menjaga aturan pengambilan serta menangani pelanggarannya.
Kasus lokal ini adalah simulasi kecil; hasilnya tidak menggantikan operasi red team perusahaan.

Kedua pihak lalu mencocokkan percobaan dengan bukti yang tercatat.
**Purple teaming** membantu mereka membandingkan tindakan pengujian dengan bukti deteksi, lalu memperbaiki kekurangannya.
Perbandingan petugas membantu menjelaskan tujuan kerja sama; kamu tetap perlu mencatat hasil percobaan dan deteksi secara terpisah.

### Susun sesi dari satu hasil ke hasil berikutnya

Pemilik Laundry Aman ingin bisa meninjau hasil tanpa menebak bagian yang sudah dikerjakan.
Pisahkan pekerjaan menjadi enam sesi dengan hasil berikut:

| Sesi | Peran latihan | Hasil yang disimpan |
|---|---|---|
| 1 | Pemilik dan penguji | Cakupan, diagram, aset, peran, daftar bukti |
| 2 | Penguji dan pengembang | Reproduksi akses serta penjelasan perbaikan |
| 3 | Pengembang dan pemeriksa | Test lulus, pembuktian test negatif, test lulus kembali |
| 4 | Analis | Timeline dan rancangan deteksi yang diperiksa |
| 5 | Petugas pemulihan dan pemilik | Bukti restore serta keputusan risiko |
| 6 | Pemeriksa lain | Paket yang dapat diulang tanpa bantuan lisan |

### Ringkasan

- Tetapkan cakupan sebelum mencoba akses.
- Periksa bahwa perbaikan menjaga akses sah dan menolak akses terlarang.
- Hubungkan log dengan kode serta reproduksi; batasi dugaan sesuai bukti.
- Periksa isi dan hash pemulihan sebelum melaporkan keberhasilan.
- Serahkan paket yang dapat diulang pemeriksa lain.

### Cek pemahaman

1. Mengapa perbaikan perlu diuji dengan pemilik pesanan dan pengguna lain?
2. Apa yang harus dibandingkan penguji dan analis saat bekerja bersama?
3. Mengapa dugaan login mencurigakan memerlukan bukti tambahan sebelum menjadi kesimpulan?

## Praktik

### 1. Tetapkan cakupan dan bukti awal

Buka folder utama tutorial di editor, lalu buat folder `hasil-belajar/capstone/` dan catatan `scope.md`.
Tulis bahwa pengujian hanya memakai kode serta data bab ini, tanpa layanan publik dan tanpa kredensial nyata.
Latihan tidak memerlukan koneksi jaringan. Berhenti jika kamu menyadari sedang memakai data di luar paket latihan.

Buat empat hasil awal:

1. Diagram pengguna ke aplikasi ke data.
2. Daftar tiga aset: data pesanan, identitas pelanggan, dan salinan pemulihan.
3. Daftar peran yang mengerjakan dan memeriksa hasil.
4. Daftar bukti yang akan dikumpulkan.

Kamu boleh menggambar diagram di kertas, lalu menulis ulang dalam teks.
Periksa apakah catatan menyebut batas izin dan kondisi berhenti sebelum melanjutkan.

### 2. Reproduksi kesalahan akses pada program lokal

Di editor, simpan kode berikut sebagai `hasil-belajar/capstone/pesanan.py`.
Blok ini adalah kode untuk disimpan, bukan perintah yang ditempel ke terminal.

```python
PESANAN = {
    "LA-101": {"pemilik": "ani", "status": "selesai", "total": 21000},
    "LA-102": {"pemilik": "budi", "status": "dicuci", "total": 35000},
}

def baca_rentan(pengguna, nomor):
    return PESANAN.get(nomor)

def baca_aman(pengguna, nomor):
    data = PESANAN.get(nomor)
    if data is None or data["pemilik"] != pengguna:
        return None
    return {"status": data["status"], "total": data["total"]}

if __name__ == "__main__":
    for pengguna, nomor in [
        ("ani", "LA-101"),
        ("ani", "LA-102"),
        ("budi", "LA-102"),
        ("budi", "LA-999"),
    ]:
        print(pengguna, nomor)
        print("sebelum:", baca_rentan(pengguna, nomor))
        print("sesudah:", baca_aman(pengguna, nomor))
```

Pilih jalur sesuai perangkatmu. Buka terminal pada folder utama tutorial.

**Windows PowerShell**

Jalankan `py hasil-belajar/capstone/pesanan.py`.

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Bandingkan empat pasangan hasil berikut:

| Pengguna dan pesanan | Sebelum | Sesudah |
|---|---|---|
| Ani, LA-101 | Seluruh data pesanan Ani | Status dan total pesanan Ani |
| Ani, LA-102 | Seluruh data pesanan Budi | `None` |
| Budi, LA-102 | Seluruh data pesanan Budi | Status dan total pesanan Budi |
| Budi, LA-999 | `None` | `None` |

Pada versi rentan, fungsi mengabaikan identitas peminta sehingga Ani dapat membaca pesanan Budi.
Pada versi aman, fungsi memeriksa pemilik dan hanya mengirim status serta total jika pengguna berhak.
Mengganti nomor pesanan dengan ID acak belum memperbaiki pemeriksaan izin.

Di catatan temuan, pakai judul “Fungsi pembacaan pesanan tidak memeriksa pemilik”.
Sertakan prasyarat, input minimal, hasil aktual, hasil yang diharapkan, dan dampak.
Periksa apakah orang lain dapat mengulang hasil dari catatan itu.

Identitas `pengguna` pada contoh berasal dari argumen yang dipercaya oleh test.
Pada aplikasi nyata, server harus mengambil identitas dari sesi yang sah.
Pengguna tidak boleh memilih identitas sendiri melalui parameter permintaan.
Contoh ini belum mengurus konkurensi atau penyimpanan produksi.

### 3. Tambahkan regression test

Di editor, simpan kode test berikut sebagai `hasil-belajar/capstone/test_pesanan.py`.
Letakkan bersama file program pada sesi sebelumnya.

```python
import unittest
from pesanan import baca_aman

class UjiPesanan(unittest.TestCase):
    def test_pemilik_boleh_membaca(self):
        self.assertEqual(baca_aman("ani", "LA-101")["total"], 21000)

    def test_pengguna_lain_ditolak(self):
        self.assertIsNone(baca_aman("ani", "LA-102"))

    def test_nomor_tidak_ada(self):
        self.assertIsNone(baca_aman("ani", "LA-999"))

    def test_tanpa_identitas_ditolak(self):
        self.assertIsNone(baca_aman(None, "LA-101"))

if __name__ == "__main__":
    unittest.main()
```

Dari folder utama tutorial, pilih jalur sesuai perangkatmu.

**Windows PowerShell**

Jalankan `py -m unittest discover -s hasil-belajar/capstone -p "test_*.py" -v`.

**Linux/macOS**

Pakai perintah yang sama dengan mengganti `py` menjadi `python3`.

Empat test harus lulus. Selanjutnya, buktikan bahwa test dapat mendeteksi implementasi rentan:

1. Di editor, sementara ubah baris import menjadi `from pesanan import baca_rentan as baca_aman`.
2. Jalankan perintah test yang sama. Dua test penolakan harus gagal.
3. Kembalikan import ke `from pesanan import baca_aman`, lalu ulangi perintah. Empat test harus lulus kembali.

Simpan catatan perbedaannya. Hasil hijau saja belum membuktikan test dapat mengenali kesalahan yang dimaksud.
Perubahan import ini hanya untuk pembuktian; kode akhir tetap memakai fungsi aman.

### 4. Selidiki rangkaian event sintetis

Di editor, salin tabel berikut ke laporan sebagai bahan **timeline**, yaitu urutan kejadian berdasarkan waktu.
Waktu menggunakan UTC dan semua jam latihan dianggap sinkron.

| Waktu | Sumber | Peristiwa |
|---|---|---|
| 09:00:00 | auth | ani login sukses, sesi S1 |
| 09:02:00 | app | S1 membaca LA-101, status 200 |
| 09:03:00 | app | S1 membaca LA-102, status 200 |
| 09:04:00 | auth | admin login gagal dari 192.0.2.25 |
| 09:04:30 | auth | admin login gagal dari 192.0.2.25 |
| 09:05:00 | auth | admin login sukses dari 192.0.2.25 |
| 09:06:00 | app | admin menjalankan laporan harian, status 200 |
| 09:10:00 | change | Perbaikan pemeriksaan pemilik dipasang pada lab |
| 09:12:00 | app | S1 membaca LA-102, status 403 |

Alamat `192.0.2.25` adalah alamat dokumentasi, bukan target untuk dihubungi.
Data aplikasi menunjukkan permintaan lintas pemilik sebelum perbaikan.
Status 200 sendiri, tanpa konteks isi respons atau kode, belum selalu membuktikan pengembalian data sensitif.
Dalam paket ini, kode rentan dan reproduksi lokal memberi bukti tambahan.

Dua login gagal sebelum sukses menuntut pemeriksaan.
Pemilik akun mungkin salah mengetik, atau pihak lain mencoba masuk.
Tabel belum membuktikan siapa yang berada di belakang alamat tersebut.
Catat kebutuhan bukti tambahan: konfirmasi pemilik, perangkat, metode MFA, dan aktivitas sesi.

Rancang deteksi untuk pembacaan pesanan lintas pemilik yang ditolak.
Catat waktu, actor atau pelaku tindakan, objek, pemilik atau hasil keputusan izin, serta status.

Tambahkan **correlation ID**, pengenal penghubung catatan dari permintaan yang sama, seperti nomor tiket untuk satu permintaan layanan.
Bedakan dari nomor pesanan: satu pesanan dapat dibaca melalui beberapa permintaan.

Hindari mencatat seluruh isi pesanan.
Tabel belum memuat semua field itu. Buat kasus normal dan penolakan sintetis dengan field yang diperlukan pada salinan data.
Tandai field tambahan sebagai data latihan, bukan fakta yang ditemukan pada log.

Uji rule atau aturan deteksi pada kejadian normal dan penolakan.
Untuk uji manual, tentukan apakah tiap kasus memicu aturan, lalu bandingkan dengan label hasil yang diharapkan.
Catat hasil masing-masing, termasuk kemungkinan salah alarm dari Bab 15.

Penolakan yang terdeteksi membuktikan kontrol bekerja pada permintaan itu; hasil tersebut belum membuktikan pencurian data berhasil.

Tabel adalah skenario log; program lokal sebelumnya mengembalikan nilai Python dan tidak menjalankan server HTTP.

### 5. Latih pemulihan dan keputusan bisnis

Di folder capstone, buat berkas teks berisi tiga transaksi sintetis, lalu buat salinannya sebagai backup.
Gunakan cara pemeriksaan hash dari Bab 08 atau Bab 10.
Kerjakan urutan berikut:

1. Catat jumlah baris dan SHA-256 kedua berkas.
2. Ubah satu transaksi pada salinan kerja.
3. Pulihkan ke **berkas baru**. Jangan menimpa bukti perubahan.
4. Periksa hash dan isi hasil pemulihan terhadap backup.

Simpan hasil pemeriksaan agar kamu bisa menunjukkan bahwa isi kembali sesuai backup.
Tulis urutan respons: simpan bukti, batasi fitur terdampak sesuai keputusan pemilik, pasang perbaikan, uji akses sah dan terlarang, lalu pantau.
Untuk anomali login admin, buat jalur investigasi terpisah sampai ada bukti yang menghubungkannya dengan masalah akses pesanan.

Pemilik toko memberi waktu pemeliharaan 30 menit dalam skenario.
Ukur lama latihan pemulihan dan catat lingkunganmu.
Jelaskan bahwa hasil file kecil tidak memprediksi waktu pemulihan database produksi.
Buat risk register dari Bab 24 untuk kelemahan izin, logging yang kurang, dan backup yang belum diuji secara berkala.

### 6. Serahkan paket hasil

Di folder capstone, kumpulkan hasil akhir berikut:

- `scope.md`, diagram, daftar aset, peran, dan bukti.
- Laporan temuan, kode perbaikan, dan hasil test.
- Timeline dan rancangan deteksi beserta hasil pemeriksaannya.
- Bukti restore, risk register, serta memo bisnis maksimal 200 kata.

Tambahkan `limitations.md` yang menyebut komponen yang belum diuji.
Tandai pemeriksaan yang belum dikerjakan `NOT_RUN` beserta alasannya.
Hindari menampilkan data nyata sebagai contoh portofolio.
Periksa apakah orang lain dapat menemukan file, perintah, versi alat, dan hasil yang harus dibandingkan.

## Hasil yang diharapkan

Kamu dapat menunjukkan jalur dari kebutuhan bisnis ke bug, bukti, perbaikan, regression test, deteksi, dan pemulihan.
Empat test implementasi aman lulus; saat memakai fungsi rentan, dua test penolakan gagal.
Setelah import dikembalikan, empat test lulus lagi.

Pembaca lain dapat menjalankan ulang kode tanpa menebak lokasi file atau versi alat.
Hash dan isi pemulihan sesuai backup.
Kesimpulan tentang login admin tetap terbatas pada bukti yang tersedia.

## Jika macet

- `ModuleNotFoundError: pesanan`: simpan kedua file pada folder yang sama dan gunakan command discovery dengan `-s` seperti di atas.
- Test hijau tetapi akses lintas pengguna masih terbuka: pastikan test memanggil implementasi yang benar dan mencakup penolakan.
- Sulit menulis kesimpulan: pisahkan kolom fakta, dugaan, bukti tambahan, dan keputusan sementara.
- Hash restore berbeda: periksa encoding, akhir baris, serta apakah kamu menyalin byte atau mengetik ulang isi.

## Latihan

Pada salinan pengembangan latihan, tambahkan peran supervisor yang hanya boleh membaca pesanan cabang yang dikelolanya.
Rancang sendiri empat test baru, termasuk supervisor cabang lain.
Jangan memberi akses seluruh pesanan hanya karena nama perannya supervisor.

Untuk penilaian berpasangan, minta teman mengubah satu kebutuhan dan satu kejadian log tanpa memberi tahu lokasi perubahannya.
Temukan dampaknya melalui review dan test, lalu perbarui laporan.
Latihan ini memeriksa apakah kamu dapat memakai pemahaman pada kasus baru.

## Bukti kelulusan

| Aspek | Bobot | Syarat bukti penuh |
|---|---:|---|
| Cakupan dan inventaris | 10 | Aset, izin, batas, dan kondisi berhenti jelas |
| Reproduksi serta akar masalah | 20 | Temuan dapat diulang dengan data minimum |
| Perbaikan dan test | 25 | Akses sah tetap bekerja, akses terlarang ditolak |
| Analisis log dan deteksi | 20 | Timeline benar, dugaan dipisahkan, false positive dibahas |
| Pemulihan dan komunikasi | 15 | Restore diperiksa dan keputusan bisnis jelas |
| Pengulangan oleh reviewer | 10 | Reviewer mengulang tanpa bantuan lisan |

Target kelulusan latihan adalah 80/100. Periksa juga tiga syarat wajib berikut:

- [ ] Saya tetap dalam cakupan pengujian.
- [ ] Saya tidak membocorkan secret, yaitu rahasia seperti kredensial.
- [ ] Saya tidak menyebut dugaan sebagai fakta.

Skor tinggi pada laporan tidak menutupi kegagalan syarat wajib.
Kelulusan menunjukkan kemampuan pada kasus ini; bab spesialisasi memberi jalur untuk memperluasnya.

<details>
<summary>Pembahasan setelah mencoba: petunjuk review proyek</summary>

Temuan utama adalah otorisasi objek yang hilang.
Perbaikan memeriksa pemilik di server dan mengurangi field respons.
Test harus menolak pengguna lain serta identitas kosong.

Timeline mendukung perbedaan perilaku sebelum/sesudah perbaikan.
Login admin perlu investigasi tambahan; jangan menyebutnya pengambilalihan akun.
Restore yang baik memeriksa isi dan integritas, lalu menjelaskan batas ukuran latihan.

Pemeriksa memberi nilai lebih untuk uji negatif baru dan alasan keputusan.
Jumlah alat yang digunakan belum menunjukkan kualitas bukti.

</details>

### Lanjut belajar

Kembali ke [Bab 25](25-spesialisasi.md) untuk memilih pendalaman berdasarkan bagian proyek yang ingin kamu kuasai.
Jika satu bagian belum dapat diulang, gunakan tautan prasyarat untuk mengulang kemampuan itu sebelum penilaian ulang.
Setelah lulus, lanjutkan rencana 12 minggu pada jalur pilihanmu dengan proyek baru dan review sejawat.

## Referensi

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework).
- [Python unittest](https://docs.python.org/3/library/unittest.html).
