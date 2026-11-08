# Desain simulator Laundry Aman

Mode: Operate + Read. Ruang kerja latihan untuk pemula, bukan layar monitoring
produksi. ENERGY1 / RHYTHM2 / MOTION1. Konten satu kasus menjadi fokus layar.

Arah visual: terminal. Permintaan pengguna 9 November 2026 menggantikan palet
kertas/buku kerja; kesan terminal datang dari warna, monospace, bingkai, dan
prompt — bukan dari glow, scanline, atau blur.

- Dua varian terminal lewat toggle `#theme`: gelap (konsol klasik) dan terang
  (terminal terang yang tetap terbaca). Gelap adalah bawaan sejak kunjungan
  pertama (permintaan pengguna); `data-theme="dark"` dipasang langsung pada
  `<html>` di index.html agar render pertama langsung gelap tanpa kedipan tema
  terang, dan pilihan pengguna tetap tersimpan setelah toggle. Simpulan test
  browser-visual.js: pasangan `--ink/--paper`, `--muted/--paper`, `--muted/--surface`,
  `--muted/--soft`, `--green/--paper`, `--on-green/--green`, `--danger/--soft`,
  `--terminal-ink/--terminal` wajib >= 4.5:1 pada kedua tema.
- Gelap: latar `#0e1712`, permukaan `#16221c`, teks `#e6f2e8`, sekunder
  `#a6bcb0`, aksi hijau terminal `#86dca8` dengan teks gelap `#0a1d13`.
  Terang: latar `#eff2ea`, permukaan `#f8faf4`, tinta `#1d2a23`, sekunder
  `#49594f`, aksi `#1c5a40` dengan teks terang. Layar terminal/keluaran tetap
  gelap di kedua tema (`--terminal` + `--terminal-ink`) seperti jendela konsol
  yang ditanam di halaman.
- Seluruh teks memakai monospace sistem: `ui-monospace, "Cascadia Mono",
  Consolas, "SF Mono", Menlo, monospace`. Tidak mengunduh font agar tetap
  offline dan berjalan di GitHub Pages.
- Judul bergaya prompt: meta misi berprefiks `$`, judul panel `h2` berprefiks
  `$ `, judul misi dan subjudul berprefiks `> `, wordmark berprefiks `$ `.
  Status bergaya log: panel umpan balik `[OK]` / `[GAGAL]` / `[INFO]`
  (kelas `error`/`pending`), bukti tindakan `[CATAT]` (netral, bukan penilaian),
  panel selesai `[OK]`, strip atas `[SIMULASI]`,
  status penyimpanan `[INFO]`/`[!]`.
- Panel seperti jendela TUI: meja praktik dengan bilah judul dan tag
  `[Data buatan · bebas mencoba]`, surat dan event sebagai kartu bingkai,
  waktu event dalam kurung `[14:02]`, peta berkas sebagai tree `├──`/`└──`,
  `details` dengan penanda `[+]`/`[-]`.
- Baris perintah terminal: prompt `$`, kursor blok berkedip (`.cursor`,
  disembunyikan saat pengguna mengetik dan diganti karet native), input tanpa
  bingkai di atas layar gelap. `prefers-reduced-motion` menghentikan kedip dan
  seluruh animasi/transisi.
- Body 16px, line-height 1.65; teks sekunder 0.78–0.9rem; tombol minimal 44px,
  radius 4px; fokus keyboard jelas (outline 3px); native label/form/fieldset,
  live region untuk hasil, aria-current untuk misi, reduced-motion dihormati.
- Navigasi misi tetap daftar bernomor; misi aktif ditandai blok hijau di sisi
  kiri. Pada ponsel navigasi dapat dilipat dan layout tanpa overflow
  horizontal pada 320/390/768/1440 px.
- Terminal adalah interpreter virtual yang bekerja, berlabel simulasi, tidak
  menjalankan shell perangkat. Pesan/email/log lain diberi penanda data
  latihan. Tidak ada leaderboard, timer menghukum, atau nilai palsu. Progres
  dihitung dari penyelesaian misi; bantuan tetap dicatat. Ujian tanpa
  petunjuk punya catatan terpisah dan tidak menjanjikan kompetensi
  profesional.

Signature interaction: pembaca mengubah satu kontrol lalu menjalankan uji,
melihat layanan sah tetap berjalan dan akses salah ditolak. Perubahan ini
menjadi bukti belajar yang bisa diekspor.
