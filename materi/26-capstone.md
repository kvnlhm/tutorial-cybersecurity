# Bab 26: Proyek akhir Laundry Aman

## Tujuan dan prasyarat

Anda akan menjalankan satu siklus penilaian, perbaikan, deteksi, dan pemulihan pada kasus yang utuh. Selesaikan bab fondasi, web/API, log, respons insiden, dan risiko. Jalur inti berjalan lokal dengan Python serta berkas teks. Anggap seluruh akun, log, dan data di bab ini sebagai data sintetis.

## Konsep

**Capstone** adalah proyek gabungan untuk membuktikan bahwa Anda dapat menghubungkan kemampuan dari beberapa bab. Anda berganti peran sebagai penguji, pengembang, analis, dan pemilik risiko. Jika bekerja dengan teman, pisahkan peran agar hasil tidak bergantung pada pengetahuan satu orang.

**Red team** menguji apakah suatu tujuan pengujian dapat dicapai dalam cakupan yang disetujui. **Blue team** melindungi, mendeteksi, dan merespons. **Purple teaming** membantu kedua pihak membandingkan tindakan pengujian dengan bukti deteksi, lalu memperbaiki kekurangannya. Kasus lokal ini merupakan simulasi kecil, bukan pengganti operasi red team perusahaan.

Tujuan bisnis Laundry Aman adalah menjaga pelanggan dapat melihat pesanannya sendiri, melindungi transaksi pelanggan lain, dan memulihkan layanan jika file transaksi rusak. Pemilik toko ingin keputusan yang jelas tanpa menghentikan seluruh pekerjaan karena satu dugaan.

## Praktik

### 1. Tetapkan cakupan dan bukti awal

Buat folder `hasil-belajar/capstone/` dan catatan `scope.md`. Isinya: pengujian hanya pada kode serta data bab ini, tanpa layanan publik, tanpa kredensial nyata, dan tanpa koneksi jaringan yang diperlukan. Kegiatan berhenti jika Anda menyadari sedang memakai data di luar paket latihan.

Buat empat artefak awal: diagram pengguna ke aplikasi ke data, daftar tiga aset, daftar peran, serta daftar bukti yang akan dikumpulkan. Asetnya adalah data pesanan, identitas pelanggan, dan salinan pemulihan. Anda boleh menggambar diagram di kertas lalu menulis ulang dalam teks.

### 2. Reproduksi kesalahan akses pada program lokal

Simpan kode berikut sebagai `hasil-belajar/capstone/pesanan.py`:

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

Jalankan `py hasil-belajar/capstone/pesanan.py` dari folder proyek. Pada Linux/macOS, gunakan `python3`. Bandingkan empat pasangan hasil. Pada versi rentan, Ani dapat membaca pesanan Budi karena fungsi mengabaikan identitas peminta. Pada versi aman, hasilnya `None`.

Tulis temuan dengan judul yang menyebut perilaku: “Fungsi pembacaan pesanan tidak memeriksa pemilik”. Sertakan prasyarat, input minimal, hasil aktual, hasil yang diharapkan, dan dampak. Jelaskan bahwa mengganti nomor pesanan dengan ID acak belum memperbaiki pemeriksaan izin.

Identitas `pengguna` pada contoh berasal dari argumen yang dipercaya oleh test. Pada aplikasi nyata, server harus mengambil identitas dari sesi yang sah; pengguna tidak boleh memilih identitas sendiri melalui parameter permintaan. Implementasi contoh juga tidak mengurus konkurensi atau penyimpanan produksi.

### 3. Tambahkan regression test

Simpan sebagai `hasil-belajar/capstone/test_pesanan.py`:

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

Jalankan `py -m unittest discover -s hasil-belajar/capstone -p "test_*.py" -v`. Empat test harus lulus. Sebagai pembuktian test negatif, sementara ubah baris import menjadi `from pesanan import baca_rentan as baca_aman`, lalu jalankan command test yang sama. Dua test penolakan harus gagal. Kembalikan import ke `from pesanan import baca_aman` dan ulangi. Simpan catatan perbedaan, bukan hanya screenshot hasil hijau.

### 4. Selidiki rangkaian event sintetis

Salin tabel berikut ke laporan. Waktu menggunakan UTC dan semua clock latihan dianggap sinkron.

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

Alamat `192.0.2.25` adalah alamat dokumentasi, bukan target untuk dihubungi. Data aplikasi menunjukkan permintaan lintas pemilik sebelum perbaikan. Namun status 200 sendiri, tanpa konteks isi respons atau kode, tidak selalu membuktikan data sensitif kembali. Dalam paket ini Anda memiliki kode rentan dan reproduksi lokal sebagai bukti tambahan.

Dua login gagal sebelum sukses menuntut pemeriksaan. Pemilik akun mungkin salah mengetik, atau pihak lain mencoba masuk. Tabel ini belum membuktikan siapa yang berada di belakang alamat tersebut. Catat data tambahan yang diperlukan: konfirmasi pemilik, perangkat, metode MFA, dan aktivitas sesi.

Rancang deteksi untuk pembacaan pesanan lintas pemilik yang ditolak. Tentukan field minimal: waktu, actor, objek, pemilik atau hasil keputusan izin, status, serta correlation ID. Hindari mencatat seluruh isi pesanan. Uji rule pada event normal dan event penolakan. Jelaskan bahwa penolakan yang terdeteksi membuktikan kontrol bekerja pada request itu, bukan keberhasilan pencurian data.

### 5. Latih pemulihan dan keputusan bisnis

Buat berkas teks berisi tiga transaksi sintetis, lalu buat salinannya sebagai backup di folder capstone. Catat jumlah baris dan SHA-256 kedua berkas. Ubah satu transaksi pada salinan kerja. Pulihkan ke **berkas baru**, jangan menimpa bukti perubahan. Periksa hash dan isi hasil pemulihan terhadap backup.

Tulis urutan respons: simpan bukti, batasi fitur terdampak sesuai keputusan pemilik, pasang perbaikan, uji akses sah dan terlarang, lalu pantau. Untuk anomali login admin, buat jalur investigasi terpisah sampai ada bukti yang menghubungkannya dengan masalah akses pesanan.

Pemilik toko memberi waktu pemeliharaan 30 menit dalam skenario. Ukur lama latihan pemulihan Anda, catat lingkungan, dan jelaskan bahwa hasil file kecil tidak memprediksi waktu pemulihan database produksi. Buat risk register untuk kelemahan izin, logging yang kurang, dan backup yang belum diuji secara berkala.

### 6. Serahkan paket hasil

Paket akhir berisi `scope.md`, diagram, laporan temuan, kode perbaikan, hasil test, timeline, rancangan deteksi, bukti restore, serta memo bisnis maksimal 200 kata. Tambahkan `limitations.md` yang menyebut komponen yang belum diuji. Hindari menampilkan data nyata sebagai contoh portofolio.

## Hasil yang diharapkan

Anda dapat menunjukkan jalur dari kebutuhan bisnis ke bug, bukti, perbaikan, regression test, deteksi, dan pemulihan. Pembaca lain dapat menjalankan ulang kode tanpa menebak lokasi file atau versi alat. Kesimpulan tentang login admin tetap terbatas pada bukti yang tersedia.

## Jika macet

- `ModuleNotFoundError: pesanan`: simpan kedua file pada folder yang sama dan gunakan command discovery dengan `-s` seperti di atas.
- Test hijau tetapi akses lintas pengguna masih terbuka: pastikan test memanggil implementasi yang benar dan mencakup penolakan.
- Sulit menulis kesimpulan: pisahkan kolom fakta, dugaan, bukti tambahan, dan keputusan sementara.
- Hash restore berbeda: periksa encoding, akhir baris, serta apakah Anda menyalin byte atau mengetik ulang isi.

## Latihan

Tambahkan peran supervisor yang hanya boleh membaca pesanan cabang yang dikelolanya. Rancang sendiri empat test baru, termasuk supervisor cabang lain. Jangan memberi akses seluruh pesanan hanya karena nama perannya supervisor.

Untuk penilaian berpasangan, minta teman mengubah satu kebutuhan dan satu event log tanpa memberi tahu lokasi perubahannya. Anda harus menemukan dampaknya melalui review dan test, lalu memperbarui laporan. Ini menguji transfer pemahaman ke kasus baru.

## Bukti kelulusan

| Aspek | Bobot | Syarat bukti penuh |
|---|---:|---|
| Cakupan dan inventaris | 10 | Aset, izin, batas, dan kondisi berhenti jelas |
| Reproduksi serta akar masalah | 20 | Temuan dapat diulang dengan data minimum |
| Perbaikan dan test | 25 | Akses sah tetap bekerja, akses terlarang ditolak |
| Analisis log dan deteksi | 20 | Timeline benar, dugaan dipisahkan, false positive dibahas |
| Pemulihan dan komunikasi | 15 | Restore diperiksa dan keputusan bisnis jelas |
| Pengulangan oleh reviewer | 10 | Reviewer mengulang tanpa bantuan lisan |

Target kelulusan latihan adalah 80/100 dengan syarat wajib: tetap dalam cakupan, tidak membocorkan secret, dan tidak menyebut dugaan sebagai fakta. Skor tinggi pada laporan tidak menutupi kegagalan syarat wajib. Kelulusan menunjukkan kemampuan pada kasus ini; bab spesialisasi memberi jalur untuk memperluasnya.

<details>
<summary>Petunjuk review setelah Anda mencoba sendiri</summary>

Temuan utama adalah otorisasi objek yang hilang. Perbaikan memeriksa pemilik di server dan mengurangi field respons. Test harus menolak pengguna lain serta identitas kosong. Timeline mendukung perbedaan perilaku sebelum/sesudah perbaikan. Login admin perlu investigasi tambahan; jangan menyebutnya pengambilalihan akun. Restore yang baik memeriksa isi dan integritas, lalu menjelaskan batas ukuran latihan. Nilai lebih diberikan untuk uji negatif baru dan alasan keputusan, bukan jumlah alat yang digunakan.

</details>

## Referensi

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework).
- [Python unittest](https://docs.python.org/3/library/unittest.html).
