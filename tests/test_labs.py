import json
import unittest

from labs.sql_demo import search_orders
from labs.access_demo import get_order
from labs.crypto_demo import digest
from labs.log_triage import summarize


class SqlTests(unittest.TestCase):
    def test_regular_customer_only_own_rows(self):
        self.assertEqual(search_orders('Alice'), [(1, 'Alice', 'siap')])

    def test_injection_stays_literal_in_safe_query(self):
        self.assertEqual(search_orders("' OR 1=1 --"), [])

    def test_injection_exposes_toy_rows_in_unsafe_query(self):
        self.assertEqual(len(search_orders("' OR 1=1 --", safe=False) or []), 2)

    def test_apostrophe_is_valid_data(self):
        self.assertEqual(search_orders("O'Neil"), [])


class AccessTests(unittest.TestCase):
    def test_owner_gets_order(self):
        self.assertEqual(get_order('alice', 101), {'id': 101, 'owner': 'alice', 'status': 'siap'})

    def test_other_owner_denied(self):
        with self.assertRaises(PermissionError):
            get_order('bob', 101)

    def test_anonymous_denied(self):
        with self.assertRaises(PermissionError):
            get_order(None, 101)

    def test_missing_order_not_found(self):
        with self.assertRaises(LookupError):
            get_order('alice', 999)


class CryptoTests(unittest.TestCase):
    def test_known_sha256_value(self):
        self.assertEqual(digest(b'abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad')

    def test_changed_byte_changes_hash(self):
        self.assertNotEqual(digest(b'nota=10000'), digest(b'nota=90000'))


class LogTests(unittest.TestCase):
    def test_counts_failures_without_labeling_success_as_attack(self):
        rows = [json.dumps({'timestamp': '2026-01-01T10:00:00Z', 'user': 'alice', 'source_ip': '192.0.2.10', 'event': e})
                for e in ['login_failed', 'login_failed', 'login_success']]
        self.assertEqual(summarize(rows), {'total': 3, 'failed': 2, 'success': 1, 'failures_by_ip': {'192.0.2.10': 2}})

    def test_blank_lines_are_ignored(self):
        self.assertEqual(summarize(['', '  ']), {'total': 0, 'failed': 0, 'success': 0, 'failures_by_ip': {}})

    def test_malformed_line_reports_line_number(self):
        with self.assertRaisesRegex(ValueError, 'Baris 2'):
            summarize(['', '{bad json'])

    def test_unknown_event_rejected(self):
        with self.assertRaisesRegex(ValueError, 'event'):
            summarize([json.dumps({'timestamp': 'x', 'user': 'x', 'source_ip': '192.0.2.1', 'event': 'typo'})])

    def test_missing_source_rejected(self):
        with self.assertRaisesRegex(ValueError, 'source_ip'):
            summarize([json.dumps({'timestamp': 'x', 'user': 'x', 'event': 'login_failed'})])

    def test_non_object_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Baris 1'):
            summarize(['[]'])


if __name__ == '__main__':
    unittest.main()
