# Desain simulator Laundry Aman

Mode: Operate + Read. Ruang kerja latihan untuk pemula, bukan layar monitoring
produksi. ENERGY1 / RHYTHM2 / MOTION1. Konten satu kasus menjadi fokus layar.

- Latar kertas hangat `#f6f3eb`, permukaan `#ffffff`, tinta `#172c28`, teks
  sekunder `#4e625c`, aksi utama hijau `#245c49`, aksen kuning hangat `#e8bd67`.
  Kertas dan nomor urut mengacu pada buku kerja Laundry Aman.
- Mode gelap memakai latar `#172421`, permukaan `#20332c`, teks `#f3f5ed`, teks
  sekunder `#bfd1c7`, aksi `#a5dbc0` dengan teks gelap. Toggle manual berfungsi.
- Judul Georgia agar berkesan buku praktik; teks Segoe UI/system sans yang mudah
  dibaca pada perangkat pembaca. Tidak mengunduh font untuk jalur offline.
- Body16px, line-height1.65; label14px; judul32–40px. Kode memakai monospace
  hanya karena alignment perintah/data. Ukuran relatif dan zoom didukung.
- Navigasi misi berupa daftar bernomor agar urutan belajar jelas; pada ponsel
  dapat dilipat. Brief di atas meja praktik, petunjuk dan bukti di bawahnya.
- Tombol radius6px, panel radius10px; pembatas1px; tidak ada glow/blur/gradient.
  Aksen dipakai untuk perhatian pada status bantuan, bukan dekorasi.
- Ruang8/12/16/24/32px membedakan label, kelompok kontrol, serta pergantian tugas.
- Tombol minimal44px, focus outline jelas, native label/form/fieldset,
  live region untuk hasil, aria-current untuk misi, reduced-motion dihormati.
- Terminal adalah interpreter virtual yang bekerja, berlabel simulasi, tidak
  menjalankan shell perangkat. Pesan/email/log lain diberi penanda data latihan.
- Tidak ada leaderboard, timer menghukum, atau nilai palsu. Progres dihitung dari
  penyelesaian misi; bantuan tetap dicatat. Ujian tanpa petunjuk punya catatan
  terpisah dan tidak menjanjikan kompetensi profesional.

Signature interaction: pembaca mengubah satu kontrol lalu menjalankan uji,
melihat layanan sah tetap berjalan dan akses salah ditolak. Perubahan ini
menjadi bukti belajar yang bisa diekspor.
