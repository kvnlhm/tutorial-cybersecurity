import re
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


def book_text():
    chapters = sorted((ROOT / 'materi').glob('[0-9][0-9]-*.md'))
    if len(chapters) != 27:
        raise ValueError(f'Memerlukan 27 bab; ditemukan {len(chapters)}')
    appendices = [ROOT / 'lampiran' / name for name in (
        'jadwal-belajar.md', 'peta-roadmap.md', 'kamus.md', 'template.md', 'referensi.md', 'panduan-pendamping.md')]
    sources = [(ROOT / 'materi' / 'pra-00-mulai-dari-nol.md', 'mulai-dari-nol')]
    sources += [(p, f'bab-{i:02}') for i, p in enumerate(chapters)]
    sources += [(p, f'lampiran-{i+1}') for i, p in enumerate(appendices)]
    sections = []
    toc = []
    groups = {
        'mulai-dari-nol': (
            'Tahap 1 dari 6: Mulai memakai alat',
            'Membuka file, membatasi latihan, dan menyiapkan tempat kerja.'),
        'bab-03': (
            'Tahap 2 dari 6: Memahami cara sistem bekerja',
            'Mengikuti data, menjalankan perintah, membaca kode, dan mengenali perlindungan komunikasi.'),
        'bab-09': (
            'Tahap 3 dari 6: Menjaga dan menguji akses',
            'Menetapkan izin, mengurangi risiko, menguji aplikasi, dan memisahkan jaringan.'),
        'bab-15': (
            'Tahap 4 dari 6: Membaca bukti dan menangani kejadian',
            'Menilai log, memilih respons, dan menjaga bukti.'),
        'bab-18': (
            'Tahap 5 dari 6: Memeriksa program dan lingkungan',
            'Menyelidiki program, memori, identitas perusahaan, cloud, serta proses rilis.'),
        'bab-23': (
            'Tahap 6 dari 6: Mengambil keputusan dan membuktikan kemampuan',
            'Menilai sumber, menjelaskan risiko, memilih pendalaman, dan menyelesaikan proyek akhir.'),
        'lampiran-1': (
            'Lampiran pendamping',
            'Gunakan jadwal, peta, kamus, templat, referensi, dan panduan pendamping sesuai kebutuhanmu.'),
    }
    for source, anchor in sources:
        content = source.read_text(encoding='utf-8-sig')
        title = content.splitlines()[0].removeprefix('# ')
        if anchor in groups:
            heading, purpose = groups[anchor]
            toc.extend(['', f'### {heading}', '', purpose, ''])
        toc.append(f'- [{title}](#{anchor})')

        def link(match):
            label, destination = match.groups()
            if urlsplit(destination).scheme or destination.startswith('#'):
                return match.group(0)
            target, marker, fragment = destination.partition('#')
            relative = (source.parent / target).resolve().relative_to(ROOT).as_posix()
            return f'[{label}]({relative}{marker}{fragment})'

        lines = []
        fence = False
        for line in content.splitlines():
            if line.startswith('```'):
                fence = not fence
            if not fence:
                if line.startswith('#'):
                    line = '#' + line
                line = re.sub(r'\[([^\]]+)\]\(([^\s)]+)\)', link, line)
            lines.append(line)
        sections.append(f'<a id="{anchor}"></a>\n\n' + '\n'.join(lines))
    intro = '''# Tutorial Cybersecurity: dari Awam sampai Mahir

Belajar keamanan siber lewat pekerjaan di **Laundry Aman**: menyimpan nota, menjaga akses, memeriksa kesalahan, dan memulihkan data.
Kamu akan mengikuti cara kerja komputer, menguji kelemahan di lingkungan berizin, memperbaiki sistem, dan membaca bukti insiden.
Kamu juga akan membangun kebiasaan riset melalui pertanyaan, percobaan, dan pencatatan hasil.
Semua kasus memakai data buatan. Jalur utama memakai alat gratis, tanpa layanan berbayar.

## Pilih titik awal

1. Jika belum memahami komputer, mulai dari [pra-bab: mulai dari nol](#mulai-dari-nol).
   Kamu akan mengenal file, browser, tempat mengetik perintah, dan percobaan pertama tanpa instalasi.
2. Jika ingin mencoba satu tindakan dahulu, buka [simulator Laundry Aman](https://kvnlhm.github.io/tutorial-cybersecurity/).
   Kamu bisa bermain dari browser HP atau komputer.
3. Jika sudah punya bekal, cari tahap yang sesuai pada [daftar isi](#daftar-isi).
   Buktikan kemampuan melalui latihan bab sebelum melanjutkan.

## Coba satu misi

Browser adalah aplikasi pembuka halaman, seperti Chrome atau Safari.
Di halaman simulator, ikuti langkah berikut:

1. Pada HP, ketuk **Pilih misi dan mode** untuk membuka daftar latihan.
2. Ketuk kotak perintah di dalam halaman, lalu ketik tindakan latihan.
3. Tekan **Jalankan perintah** dan baca hasilnya.

Delapan misi menyediakan petunjuk bertahap, respons terhadap kesalahan, bukti tindakan, dan kasus ujian berbeda.
Kamu memakai model latihan di halaman. Untuk praktik Python, terminal sistem, dan mesin virtual berikutnya, gunakan komputer.
Terminal adalah jendela untuk memberi perintah teks dan membaca hasilnya; pra-bab menunjukkan cara membukanya.

Untuk bermain offline di komputer, [unduh ZIP tutorial](https://github.com/kvnlhm/tutorial-cybersecurity/archive/refs/heads/main.zip), lalu ekstrak dan buka folder simulator.
[Panduan simulasi](simulator/README.md) menjelaskan cara membuka berkas latihan dan menyimpan hasil.
Kamu belum memerlukan Kali Linux atau laptop mahal untuk mulai belajar.

## Lanjutkan belajar dan simpan bukti

Empat lab Python berjalan offline. [Panduan lab](labs/README.md) menjelaskan bekal, cara menjalankan, dan hasil yang perlu dibandingkan.
Contoh perintah menyebut shell, yaitu program pembaca perintah, yang digunakan.
Saat menjalankan file tutorial, buka terminal pada folder utama yang memuat README dan folder labs.

Setiap bab memuat tujuan, prasyarat, praktik, hasil yang diharapkan, cara mengatasi masalah, latihan, dan bukti kelulusan.
Gunakan [jadwal dan rubrik](lampiran/jadwal-belajar.md) untuk menilai kemampuan dari hasil yang dapat dijelaskan dan diulang.

Keahlian tingkat lanjut tumbuh melalui latihan, pemeriksaan rekan, dan pengalaman berizin.
Bab spesialisasi memberi dasar dan proyek lanjutan. Satu buku tidak menggantikan pengalaman profesional atau membuktikan penguasaan hanya dari jumlah halaman yang dibaca.
Uji hanya sistem sendiri, target lab, atau target dengan izin dan batas yang jelas.

### Asal dan acuan

Peta topik mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security).
Pola konsep, praktik, dan latihan mengikuti [tutorial AI Engineer](https://github.com/kvnlhm/tutorial-ai-engineer) milik pengguna.
Penulis menyusun penjelasan, data, dan eksperimen untuk buku ini.

### Untuk pemelihara

[Panduan pemeliharaan](docs/pemeliharaan.md) memuat langkah pemeriksaan dan pembangunan buku.
[Daftar verifikasi](docs/ai/task-log.md) mencatat bagian yang sudah diuji serta yang masih membutuhkan lingkungan lain.
Pembaca dapat belajar tanpa menjalankan langkah pemeliharaan.

## Daftar isi

'''
    return intro + '\n'.join(toc) + '\n\n---\n\n' + '\n\n---\n\n'.join(sections) + '\n'


if __name__ == '__main__':
    output = book_text()
    (ROOT / 'Tutorial-Cybersecurity.md').write_text(output, encoding='utf-8', newline='\n')
    print(f'PASS: buku dibuat, {len(output.split()):,} kata, {len(output.encode()):,} byte')
