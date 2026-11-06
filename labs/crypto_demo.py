import hashlib


def digest(data):
    return hashlib.sha256(data).hexdigest()


if __name__ == '__main__':
    original = b'nota=10000'
    modified = b'nota=90000'
    print('Asli     :', digest(original))
    print('Diubah   :', digest(modified))
    print('Sama     :', digest(original) == digest(modified))
    print('Hash mendeteksi perubahan jika hash pembanding berasal dari sumber tepercaya.')
