# Bab 15: Membaca log dan menyusun deteksi

## Tujuan dan prasyarat

Anda telah mengenal login, jaringan, dan program Python sederhana. Bab ini mengajarkan pekerjaan awal **SOC**, *security operations center*, yaitu tim yang memantau, menilai, dan merespons aktivitas keamanan. Anda akan membaca log sintetis sebelum memikirkan dashboard. Sediakan 3–5 sesi dan Python yang sudah dipakai pada bab sebelumnya.

## Konsep

**Log** adalah catatan kejadian. Aplikasi dapat mencatat login berhasil, login gagal, penolakan akses, atau perubahan hak pengguna. **Event** merupakan satu kejadian; **alert** merupakan peringatan karena kejadian memenuhi aturan tertentu; **incident** merupakan kejadian yang telah dinilai memerlukan penanganan keamanan. Login gagal satu kali dapat berasal dari salah ketik. Menganggap semua alert sebagai insiden membuat tim sibuk mengejar gangguan kecil.

SIEM, *security information and event management*, mengumpulkan log dan membantu pencarian serta korelasi. SOAR, *security orchestration, automation and response*, membantu menjalankan alur penanganan. Otomasi memerlukan kontrol: aturan yang langsung menonaktifkan seluruh akun karena beberapa login gagal dapat mengganggu usaha. Mulai dari peringatan yang bisa diperiksa, lalu tentukan tindakan yang aman untuk diotomatisasi.

Data yang berguna mencakup waktu beserta zona waktu, sumber, identitas, jenis kejadian, hasil, dan pengenal yang memungkinkan korelasi. Jangan menaruh password, token sesi lengkap, atau isi pribadi pelanggan di log. Tentukan masa simpan dan hak akses. Log dapat berisi data sensitif sekaligus menjadi sasaran perubahan oleh pelaku.

Empat istilah membantu menilai deteksi. **True positive** berarti peringatan yang cocok dengan kejadian berbahaya. **False positive** berarti aktivitas sah yang memicu peringatan. **False negative** berarti aktivitas berbahaya yang luput. **True negative** berarti aktivitas sah yang tidak memicu peringatan. Definisi ini memerlukan label pembanding yang cukup tepercaya; tanpa investigasi, Anda baru mempunyai kandidat.

**Precision** adalah TP dibagi TP+FP: berapa banyak peringatan yang benar. **Recall** adalah TP dibagi TP+FN: berapa banyak kejadian berbahaya yang tertangkap. Jika 8 dari 10 peringatan benar dan ada 4 serangan lain yang luput, precision adalah 80% dan recall sekitar 67%. Nilai tersebut hanya berlaku pada kumpulan pengujian yang Anda gunakan, bukan jaminan kemampuan di seluruh dunia.

## Praktik

**1. Baca data sebelum menjalankan alat.** Buka `labs/data/auth.jsonl`. JSONL berisi satu objek JSON pada tiap baris. Field `timestamp` menunjukkan waktu UTC, `user` merupakan identitas latihan, `source_ip` sumber sintetis, dan `event` jenis kejadian. Alamat pada data merupakan alamat dokumentasi; Anda tidak perlu menghubunginya.

**JSON** adalah format teks untuk menyimpan data terstruktur. Objek memakai kurung kurawal `{}`, berisi pasangan nama dan nilai dengan pemisah titik dua. Teks memakai kutip ganda; koma memisahkan pasangan. Contoh berikut mencatat satu kejadian. Pada JSONL, kejadian berikutnya berada pada baris baru, tanpa koma penghubung antarbaris:

```json
{"timestamp":"2026-01-01T08:00:00Z","user":"alice","source_ip":"192.0.2.10","event":"login_success"}
```

Hitung kejadian dengan tangan. Anda seharusnya menemukan tujuh baris: empat login gagal dan tiga login berhasil. Bob salah login dari `192.0.2.20` lalu berhasil. Sumber `198.51.100.8` gagal terhadap Alice, Bob, dan operator, lalu berhasil sebagai operator.

**2. Jalankan peringkas offline.** Dari folder tutorial:

```powershell
py labs/log_triage.py
```

Di Linux/macOS gunakan `python3 labs/log_triage.py`. Hasilnya:

```json
{
  "total": 7,
  "failed": 4,
  "success": 3,
  "failures_by_ip": {
    "192.0.2.20": 1,
    "198.51.100.8": 3
  }
}
```

Program menghitung kejadian; program tidak menilai siapa penyerangnya dan tidak melakukan korelasi waktu. Cocokkan hasil dengan hitungan manual. Perbedaan satu baris saja perlu diselidiki sebelum Anda mengandalkan angka dashboard.

**3. Tulis aturan deteksi dalam kalimat.** Contoh latihan: “Buat alert jika satu sumber mencatat setidaknya tiga login gagal pada tiga akun berbeda dalam lima menit.” Tentukan field yang dibutuhkan, cara menangani waktu, dan perilaku saat log terlambat. Peringkas yang tersedia belum menerapkan aturan ini; periksa dataset dengan tangan atau jadikan implementasinya tugas lanjutan.

**4. Lakukan triage.** Triage berarti penilaian awal untuk menentukan langkah berikutnya. Tanyakan apakah sumber itu milik alat pengujian sah, apakah operator mengenali aktivitasnya, dan apakah ada perubahan akun setelah login. Pola beberapa akun dengan sedikit tebakan per akun cocok untuk hipotesis password spraying. Log ini tidak mencatat password yang dicoba, sehingga belum membuktikan teknik tersebut.

**5. Buat kartu aturan.** Isi nama aturan, tujuan, log yang dibutuhkan, kondisi, kemungkinan false positive, langkah pemeriksaan, pemilik, serta tanggal review. Tambahkan satu contoh aktivitas sah yang memicu aturan, misalnya pelatihan pegawai dari satu jaringan bersama. Buat salinan data sebelum menambahkan kasus baru; jangan mengubah fixture asli jika Anda ingin test bawaan tetap konsisten.

## Hasil yang diharapkan

Hitungan manual sama dengan program. Anda memilih sumber dengan tiga kegagalan untuk pemeriksaan lebih lanjut dan tetap menulis alternatif penjelasan yang masuk akal. Anda mempunyai kartu aturan yang tidak mengklaim bahwa kegagalan login saja membuktikan kompromi.

## Jika macet

Pesan `JSON tidak valid` menunjukkan baris yang perlu diperiksa. JSON memerlukan tanda kutip ganda dan sintaks yang tepat. Program juga menolak field wajib yang kosong atau nama event yang tidak dikenal. Jangan menghapus baris bermasalah hanya agar angka terlihat rapi; simpan bukti dan perbaiki sumber atau parser secara terkontrol.

## Latihan

Hitung precision dan recall untuk TP=12, FP=8, FN=3. Jawaban: precision 60%, recall 80%. Tambahkan skenario lima kegagalan dari pegawai yang baru mengganti password. Tulis informasi tambahan yang membantu membedakannya dari serangan tanpa membaca password pegawai tersebut.

## Bukti kelulusan

Kumpulkan output, hitungan manual, kartu aturan, dan catatan triage. Anda lulus jika dapat menjelaskan satu false positive, satu potensi false negative, serta log tambahan yang diperlukan untuk memperkuat kesimpulan.

## Referensi

- [MITRE ATT&CK](https://attack.mitre.org/): pengetahuan perilaku penyerang untuk menyusun hipotesis deteksi.
- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final): hubungan deteksi dan respons dengan pengelolaan risiko.
