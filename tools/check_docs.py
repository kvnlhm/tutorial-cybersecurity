import re
import sys
from collections import Counter
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


def without_code(text):
    return re.sub(r'^```[^\n]*\n.*?^```[^\n]*$', '', text, flags=re.M | re.S)


def anchors(text):
    found = set(re.findall(r'<a\s+id="([^"]+)"', text))
    counts = Counter()
    for heading in re.findall(r'^#{1,6} (.+)$', without_code(text), flags=re.M):
        heading = re.sub(r'<[^>]+>', '', heading)
        slug = re.sub(r'[^\w\- ]', '', heading.lower()).replace(' ', '-')
        count = counts[slug]
        counts[slug] += 1
        found.add(slug + (f'-{count}' if count else ''))
    return found


def main():
    errors = []
    documents = sorted(p for p in ROOT.rglob('*.md') if not any(part.startswith('.') or part in ('artifacts', 'hasil-belajar') for part in p.relative_to(ROOT).parts))
    link_count = 0
    for path in documents:
        text = path.read_text(encoding='utf-8-sig')
        if len(re.findall(r'^```', text, flags=re.M)) % 2:
            errors.append(f'{path.relative_to(ROOT)}: code fence tidak berpasangan')
        for destination in re.findall(r'\[[^\]]*\]\(([^\s)]+)\)', without_code(text)):
            if urlsplit(destination).scheme:
                continue
            target, _, fragment = unquote(destination).partition('#')
            resolved = (path.parent / target).resolve() if target else path
            link_count += 1
            if not resolved.exists():
                errors.append(f'{path.relative_to(ROOT)}: file tidak ada: {destination}')
            elif fragment and resolved.suffix == '.md':
                if fragment not in anchors(resolved.read_text(encoding='utf-8-sig')):
                    errors.append(f'{path.relative_to(ROOT)}: anchor tidak ada: {destination}')
    chapters = sorted((ROOT / 'materi').glob('[0-9][0-9]-*.md'))
    if [p.name[:2] for p in chapters] != [f'{n:02}' for n in range(27)]:
        errors.append('Bab harus lengkap 00 sampai 26 tanpa duplikat')
    required = ['Tujuan dan prasyarat', 'Konsep', 'Praktik', 'Hasil yang diharapkan',
                'Jika macet', 'Latihan', 'Bukti kelulusan', 'Referensi']
    for path in chapters:
        text = path.read_text(encoding='utf-8-sig')
        for section in required:
            if not re.search(r'^## ' + re.escape(section) + r'\s*$', text, re.M):
                errors.append(f'{path.name}: bagian {section} belum ada')
    from build_book import book_text
    book = ROOT / 'Tutorial-Cybersecurity.md'
    if not book.exists() or book.read_text(encoding='utf-8') != book_text():
        errors.append('Buku tidak sinkron; jalankan py tools/build_book.py')
    if errors:
        print('\n'.join('FAIL: ' + error for error in errors))
        return 1
    print(f'PASS: {len(documents)} Markdown, {len(chapters)} bab, {link_count} tautan lokal; buku sinkron')
    return 0


if __name__ == '__main__':
    sys.exit(main())
