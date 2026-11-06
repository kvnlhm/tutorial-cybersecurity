def get_order(actor, order_id):
    if actor is None:
        raise PermissionError('Harus login')
    orders = {101: {'id': 101, 'owner': 'alice', 'status': 'siap'},
              102: {'id': 102, 'owner': 'bob', 'status': 'dicuci'}}
    if order_id not in orders:
        raise LookupError('Nota tidak ditemukan')
    order = orders[order_id]
    if order['owner'] != actor:
        raise PermissionError('Bukan pemilik nota')
    return order.copy()


if __name__ == '__main__':
    for actor, order_id in [('alice', 101), ('bob', 101), (None, 101)]:
        try:
            print(f'{actor!r} -> {order_id}: DIIZINKAN {get_order(actor, order_id)}')
        except PermissionError as error:
            print(f'{actor!r} -> {order_id}: DITOLAK ({error})')
