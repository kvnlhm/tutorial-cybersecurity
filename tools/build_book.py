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
    for source, anchor in sources:
        content = source.read_text(encoding='utf-8-sig')
        title = content.splitlines()[0].removeprefix('# ')
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

Panduan praktik berbahasa Indonesia dengan studi kasus **Laundry Aman**.
Anda belajar cara kerja komputer, menguji kelemahan di lingkungan berizin,
memperbaiki sistem, membaca bukti insiden, dan membangun kebiasaan riset.

Peta topik mengacu pada [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security).
Pola konsep–praktik–latihan mengikuti [tutorial AI Engineer](https://github.com/kvnlhm/tutorial-ai-engineer)
milik pengguna. Penjelasan, data, dan eksperimen disusun untuk buku ini.

**Mulai dari pra-bab jika belum paham IT.** Panduannya menjelaskan file, browser,
terminal, serta percobaan pertama tanpa instalasi. Buka [simulator Laundry Aman](simulator/index.html)
di browser setelah mengekstrak seluruh folder. Delapan misi menawarkan petunjuk
bertahap, respons terhadap kesalahan, bukti tindakan, dan kasus ujian berbeda.
[Panduan simulasi](simulator/README.md) menjelaskan cara bermain dan batas model.

Belum perlu Kali Linux atau laptop mahal. Jalur utama
menggunakan alat gratis dan data buatan; empat lab Python bekerja offline.
Setiap bab mencantumkan tujuan, prasyarat, praktik, hasil yang diharapkan,
cara mengatasi masalah, latihan, dan bukti kelulusan.

Keahlian tingkat lanjut tumbuh melalui latihan, review, dan pengalaman berizin.
Gunakan [jadwal dan rubrik](lampiran/jadwal-belajar.md) untuk menilai kemampuan,
bukan hanya jumlah halaman yang selesai dibaca. Bab spesialisasi memberi dasar
dan proyek lanjutan; satu buku tidak menggantikan pengalaman profesional.

Contoh perintah menyebut shell yang digunakan. Jika menjalankan file repo,
buka terminal di root folder tutorial. [Panduan lab](labs/README.md) menjelaskan
cara menjalankan dan membaca hasil. [Daftar verifikasi](docs/ai/task-log.md)
mencatat bagian yang sudah diuji dan yang masih membutuhkan lingkungan lain.

## Daftar isi

'''
    return intro + '\n'.join(toc) + '\n\n---\n\n' + '\n\n---\n\n'.join(sections) + '\n'


if __name__ == '__main__':
    output = book_text()
    (ROOT / 'Tutorial-Cybersecurity.md').write_text(output, encoding='utf-8', newline='\n')
    print(f'PASS: buku dibuat, {len(output.split()):,} kata, {len(output.encode()):,} byte')
