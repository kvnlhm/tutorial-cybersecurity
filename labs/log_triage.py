import argparse
import json
from collections import Counter
from pathlib import Path


def summarize(lines):
    total = failed = success = 0
    failures = Counter()
    for number, line in enumerate(lines, 1):
        if not line.strip():
            continue
        try:
            row = json.loads(line)
        except json.JSONDecodeError as error:
            raise ValueError(f'Baris {number}: JSON tidak valid') from error
        if not isinstance(row, dict):
            raise ValueError(f'Baris {number}: harus berupa objek JSON')
        for field in ('timestamp', 'user', 'source_ip', 'event'):
            if not isinstance(row.get(field), str) or not row[field].strip():
                raise ValueError(f'Baris {number}: {field} wajib berupa teks yang berisi nilai')
        if row['event'] not in ('login_failed', 'login_success'):
            raise ValueError(f'Baris {number}: event tidak dikenal')
        total += 1
        if row['event'] == 'login_failed':
            failed += 1
            failures[row['source_ip']] += 1
        else:
            success += 1
    return {'total': total, 'failed': failed, 'success': success,
            'failures_by_ip': dict(sorted(failures.items()))}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Ringkas log login sintetis; bukan penentu insiden.')
    parser.add_argument('file', nargs='?', type=Path,
                        default=Path(__file__).parent / 'data' / 'auth.jsonl')
    args = parser.parse_args()
    try:
        with args.file.open(encoding='utf-8') as source:
            print(json.dumps(summarize(source), indent=2))
    except (OSError, ValueError) as error:
        parser.exit(1, f'Gagal: {error}\n')
