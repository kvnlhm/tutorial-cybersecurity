# Bab 06: Menulis skrip kecil dan mencatat perubahan

## Tujuan dan prasyarat

Anda akan menulis Python untuk menghitung kejadian sintetis, mengenali Bash, dan menyimpan perubahan dengan Git. Selesaikan latihan folder dan terminal sebelumnya. Anda belum perlu hafal sintaks; baca setiap baris dan ubah satu hal untuk melihat pengaruhnya.

## Konsep

Pemrograman membantu mengulang pekerjaan dengan aturan yang konsisten. Di Laundry Aman, petugas dapat membaca sepuluh baris log secara manual. Untuk ribuan baris, skrip dapat menghitung dan memilih data yang perlu diperiksa manusia.

**Variabel** memberi nama pada nilai. **String** menyimpan teks, **integer** menyimpan bilangan bulat, dan **list** menyimpan urutan nilai. **Dictionary** menghubungkan kunci dengan nilai, mirip label pada laci. **Loop** mengulangi langkah. **Kondisi** memilih tindakan berdasarkan syarat. **Fungsi** mengemas pekerjaan agar dapat dipanggil dan diuji dengan masukan berbeda.

Python cocok untuk pengolahan data dan otomasi. Bash membantu merangkai perintah Linux. PowerShell mengolah objek Windows. JavaScript penting untuk memahami browser, SQL untuk basis data, dan C membantu memahami memori pada materi lanjutan. Mulai dengan satu bahasa sampai Anda mampu membaca error dan menguji hasil.

**Git** mencatat versi file. Sebuah **commit** menyimpan potret perubahan beserta pesan. **Repository** adalah folder kerja beserta riwayat Git-nya. Git dapat dipakai tanpa GitHub dan tanpa internet. GitHub adalah salah satu layanan untuk berbagi repository. File yang masuk riwayat dapat tetap tersedia dalam commit lama setelah Anda menghapus versi terbarunya, jadi cegah rahasia masuk sejak awal.

## Praktik

### 1. Buat program pertama

Di editor, simpan file `hasil-belajar/hitung_login.py` dengan isi:

```python
def hitung_gagal(hasil_login):
    jumlah = 0
    for hasil in hasil_login:
        if hasil == "gagal":
            jumlah += 1
    return jumlah


kejadian = ["berhasil", "gagal", "gagal", "berhasil", "gagal"]
print("Login gagal:", hitung_gagal(kejadian))
assert hitung_gagal([]) == 0
assert hitung_gagal(["berhasil"]) == 0
assert hitung_gagal(["gagal", "gagal"]) == 2
```

Dari folder tutorial, Windows PowerShell:

```powershell
py hasil-belajar/hitung_login.py
```

Linux/macOS:

```bash
python3 hasil-belajar/hitung_login.py
```

`def` mendefinisikan fungsi. `jumlah = 0` menyiapkan penghitung. `for` memeriksa setiap elemen, `if` menguji kesamaan, dan `+= 1` menambah satu. `return` mengembalikan nilai. Indentasi merupakan bagian sintaks Python; gunakan empat spasi untuk satu tingkat. `assert` memeriksa dugaan hasil dan menghentikan program jika tidak cocok. Assert berguna di latihan, tetapi jangan menjadikannya satu-satunya pemeriksaan keamanan aplikasi karena mode optimasi Python dapat menonaktifkannya.

**Ikuti perubahan nilainya di kertas.** Fungsi belum menghitung saat baris `def` dibaca; Python menyiapkan definisinya. Pemanggilan `hitung_gagal(kejadian)` memberikan list ke nama `hasil_login`, lalu Python menjalankan isi fungsi. Tabel berikut menunjukkan satu putaran untuk setiap anggota list:

| Elemen yang sedang dibaca | Nilai `jumlah` sebelumnya | Apakah sama dengan `gagal`? | Nilai setelah langkah |
|---|---:|---|---:|
| `berhasil` | 0 | Tidak | 0 |
| `gagal` | 0 | Ya | 1 |
| `gagal` | 1 | Ya | 2 |
| `berhasil` | 2 | Tidak | 2 |
| `gagal` | 2 | Ya | 3 |

`=` memberi nilai, sedangkan `==` membandingkan dua nilai. Kedua tanda itu melakukan pekerjaan berbeda. Pada list kosong, loop tidak melakukan putaran sehingga fungsi mengembalikan nol. Cocokkan penjelasan tersebut dengan pengujian pertama sebelum mengubah kode.

Keluaran yang diharapkan adalah `Login gagal: 3`. Program tidak mencetak hasil assert yang lulus. Ubah satu elemen dari `gagal` menjadi `berhasil`; prediksi angka sebelum menjalankan kembali.

### 2. Bedakan data valid dan data asing

Tambahkan teks `GAGAL` dengan huruf besar ke list. Hitungan tidak naik karena fungsi mencari teks `gagal` persis. Ini keputusan definisi data. Pada sistem nyata, Anda perlu memutuskan apakah nilai berbeda itu dianggap sah, perlu normalisasi, atau merupakan kesalahan format. Jangan mengubah semua input tanpa memahami kontraknya.

Tambahkan pengujian `assert hitung_gagal(["GAGAL"]) == 0`. Hasil ini mendokumentasikan perilaku sekarang. Jika aturan bisnis berubah agar keduanya sama, tulis harapan baru dahulu, lihat kegagalannya, lalu ubah fungsi dan jalankan seluruh pemeriksaan lagi.

### 3. Kenali skrip shell kecil

Di Linux Bash, jalankan:

```bash
for status in berhasil gagal gagal; do
  printf 'Hasil latihan: %s\n' "$status"
done
```

Loop menjalankan `printf` tiga kali. Kutip `"$status"` menjaga nilai sebagai satu argumen. Untuk input tak tepercaya, hindari menyusunnya menjadi perintah shell. Dalam Python, gunakan API langsung bila tersedia, bukan menggabungkan teks masukan ke `os.system`.

### 4. Simpan riwayat lokal jika Git tersedia

Periksa `git --version`. Jika belum tersedia, Anda boleh melanjutkan bab tanpa Git lalu memasangnya dari sumber resmi saat diperlukan. Buat folder latihan terpisah melalui pengelola file, misalnya `git-latihan-laundry`, lalu buka terminal di dalamnya. Jangan menjalankan `git init` di home atau di repository lain.

```text
git init
git status
```

Buat `catatan.md` menggunakan editor dan tulis satu pelajaran. Kemudian:

```text
git add catatan.md
git diff --cached
git -c user.name="Pelajar Lab" -c user.email="pelajar@example.invalid" commit -m "Catat latihan pertama"
git log --oneline
```

`git add` menyiapkan file untuk commit. `git diff --cached` memperlihatkan isi yang akan disimpan. Dua opsi `-c` menyediakan identitas dummy khusus perintah ini tanpa mengubah konfigurasi global. Alamat `.invalid` memang dipakai sebagai contoh, bukan alamat pengiriman. Jangan menjalankan push; latihan ini selesai secara lokal.

## Hasil yang diharapkan

Program menghitung tiga kegagalan, pengujian contoh lulus, dan perubahan data mengubah keluaran sesuai prediksi. Jika mengerjakan bagian Git, Anda memiliki satu commit lokal dengan file yang sudah diperiksa isinya.

## Jika macet

`SyntaxError` meminta pemeriksaan tanda baca dan struktur; `IndentationError` meminta pemeriksaan spasi. `NameError` biasanya berarti nama variabel belum tersedia atau salah eja. Bacalah baris terakhir traceback, kemudian nomor baris yang ditunjuk. Perbaiki satu kesalahan dan jalankan ulang.

## Latihan

Buat fungsi `hitung_berhasil` dan uji list kosong, satu keberhasilan, serta campuran hasil. Tulis juga alasan hitungan gagal total tidak bisa menentukan apakah ada serangan: Anda masih memerlukan waktu kejadian, sumber, pola, dan konteks penggunaan.

**Kurangi bantuan:** salin fungsi pertama dengan nama `hitung_berhasil`, lalu tentukan sendiri bagian kondisi yang perlu berubah. **Pindah kasus:** Laundry Aman mempunyai status `dicuci`, `selesai`, `selesai`, dan `diantar`. Tulis fungsi penghitung status selesai tanpa membuka solusi, lalu uji list kosong dan list tanpa status selesai.

<details>
<summary>Pembahasan penelusuran dan pindah kasus</summary>

Untuk `hitung_berhasil`, bandingkan tiap elemen dengan string `berhasil`; pola loop dan penghitung tetap sama. Pada kasus status laundry, dua elemen cocok dengan `selesai`, sehingga hasilnya dua. List kosong dan list tanpa kecocokan sama-sama menghasilkan nol. Mengganti judul output saja tidak mengubah aturan hitung; kondisi di dalam fungsi yang menentukan kecocokan. Jika Anda menulis nama fungsi baru tetapi masih memanggil fungsi lama, perubahan hasil belum menguji fungsi baru tersebut.

</details>

## Bukti kelulusan

Anda dapat menerangkan fungsi tanpa membaca komentar, membuat satu pengujian yang gagal karena bug sengaja, lalu memperbaikinya. Simpan versi sebelum dan sesudah melalui Git atau salinan file yang diberi nama jelas.

## Referensi

- [Tutorial resmi Python](https://docs.python.org/3/tutorial/).
- [Git init](https://git-scm.com/docs/git-init) dan [Git diff](https://git-scm.com/docs/git-diff).
- [GNU Bash manual](https://www.gnu.org/software/bash/manual/bash.html).
