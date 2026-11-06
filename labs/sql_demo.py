import sqlite3
from contextlib import closing


def search_orders(customer, *, safe=True):
    with closing(sqlite3.connect(':memory:')) as db:
        db.execute('CREATE TABLE orders (id INTEGER, customer TEXT, status TEXT)')
        db.executemany('INSERT INTO orders VALUES (?, ?, ?)',
                       [(1, 'Alice', 'siap'), (2, 'Bob', 'dicuci')])
        if safe:
            return db.execute('SELECT * FROM orders WHERE customer = ?', (customer,)).fetchall()
        return db.execute(f"SELECT * FROM orders WHERE customer = '{customer}'").fetchall()


if __name__ == '__main__':
    print('Data normal:', search_orders('Alice'))
    print('Input uji:', repr("' OR 1=1 --"))
    print('Query rentan:', search_orders("' OR 1=1 --", safe=False))
    print('Query berparameter:', search_orders("' OR 1=1 --"))
