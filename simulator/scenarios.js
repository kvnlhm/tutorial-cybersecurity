(function (root, factory) {
  const scenarios = factory();
  if (typeof module === 'object' && module.exports) module.exports = scenarios;
  else root.LaundryScenarios = scenarios;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return [
    {
      id: 'terminal', kind: 'terminal', title: 'Temukan catatan toko',
      brief: 'Kamu membantu kasir menemukan catatan kerja. Jelajahi folder virtual, lalu baca file yang diminta.',
      concept: 'Folder mengelompokkan file. Terminal virtual menerima perintah teks. Arti nama file bergantung pada lokasi kamu sekarang.',
      objective: 'Periksa lokasi dengan pwd, lihat isi dengan ls, lalu baca file tugas menggunakan cat.',
      chapter: '../materi/04-linux.md',
      hints: ['pwd menunjukkan folder kamu sekarang; ls memperlihatkan isinya.', 'cd diikuti nama folder memindahkan lokasi. cat diikuti nama file membaca isinya.', 'Dari /laundry: ketik pwd, ls, cd catatan, lalu cat jadwal.txt. Untuk kembali satu folder, gunakan cd .. (dua titik).'],
      guided: {
        label: 'Shift pagi', startPath: '/laundry', folders: ['/laundry', '/laundry/catatan', '/laundry/nota'],
        files: { '/laundry/petunjuk.txt': 'Catatan serah terima berada di folder catatan.', '/laundry/catatan/jadwal.txt': 'Pukul 09.00: periksa cadangan sebelum toko buka.', '/laundry/nota/LA-101.txt': 'Nota buatan: 3 kg, selesai.' },
        targetPath: '/laundry/catatan/jadwal.txt', task: 'Baca /laundry/catatan/jadwal.txt. Gunakan pwd dan ls untuk memahami lokasinya.'
      },
      exam: {
        label: 'Shift sore, lokasi berbeda', startPath: '/laundry/nota', folders: ['/laundry', '/laundry/nota', '/laundry/serah-terima'],
        files: { '/laundry/nota/LA-208.txt': 'Nota buatan: menunggu pengambilan.', '/laundry/serah-terima/tutup.txt': 'Pukul 18.00: cocokkan transaksi dan periksa cadangan.', '/laundry/baca.txt': 'File penutupan ada di folder serah-terima.' },
        targetPath: '/laundry/serah-terima/tutup.txt', task: 'Kamu mulai di folder nota. Temukan dan baca /laundry/serah-terima/tutup.txt setelah memeriksa lokasi serta isi folder.'
      }
    },
    {
      id: 'phishing', kind: 'phishing', title: 'Periksa kotak masuk',
      brief: 'Dua pesan masuk ke kasir. Periksa rincian pengirim dan tujuan tautan sebelum menentukan tindakan.',
      concept: 'Phishing adalah pesan penipuan yang menyamar sebagai pihak resmi. Nama tampilan dan kata mendesak belum membuktikan keaslian pesan. Cocokkan permintaan, alamat, dan konteks dengan catatan yang dipercaya.',
      objective: 'Buka rincian kedua pesan, lalu pilih keputusan untuk masing-masing beserta alasan berdasarkan bukti.',
      chapter: '../materi/09-identitas.md',
      hints: ['Buka rincian setiap pesan. Perhatikan alamat lengkap, bukan nama tampilannya.', 'Domain tautan berbeda dari domain yang terdaftar, ditambah permintaan kode rahasia, merupakan alasan menghentikan proses.', 'OTP adalah kode rahasia sekali pakai, misalnya kode login. Pesan diskon meminta OTP lewat domain tiruan. Pesan jadwal cocok dengan catatan internal dan tidak meminta rahasia.'],
      guided: {
        label: 'Pesan untuk kasir', trustedDomains: ['laundry.example'],
        messages: [
          { id: 'diskon', subject: 'Aktifkan diskon sebelum 10.00', from: 'Dukungan Laundry <bantuan@laundry-diskon.example>', to: 'kasir@laundry.example', url: 'https://laundry-verifikasi.example/otp', body: 'Kirim kode OTP agar diskon pelanggan tetap aktif. Bila terlambat, akun dikunci.', classification: 'phishing', reason: 'secret-domain', explanation: 'Pesan meminta OTP pada domain yang tidak tercatat. Hentikan proses dan pastikan lewat kontak resmi yang sudah dikenal.' },
          { id: 'jadwal', subject: 'Jadwal pengambilan sore', from: 'Koordinator <jadwal@laundry.example>', to: 'kasir@laundry.example', url: 'https://laundry.example/jadwal', body: 'Jadwal sesuai serah terima pagi. Tidak perlu memasukkan password atau kode. Kamu telah mengonfirmasinya melalui nomor koordinator pada buku kontak toko.', classification: 'legit', reason: 'confirmed', explanation: 'Dalam skenario ini, rincian cocok dan konfirmasi terpisah sudah dilakukan. Domain yang cocok saja belum cukup untuk membuktikan semua pesan aman.' }
        ],
        reasons: [{ id: 'secret-domain', label: 'Meminta kode rahasia melalui domain yang tidak dikenal' }, { id: 'confirmed', label: 'Konteks cocok dan sudah dikonfirmasi melalui kontak terpisah' }, { id: 'urgent', label: 'Ada batas waktu, jadi pasti penipuan' }, { id: 'logo', label: 'Nama pengirim terlihat resmi' }]
      },
      exam: {
        label: 'Lampiran vendor', trustedDomains: ['laundry.example', 'vendor.example'],
        messages: [
          { id: 'invoice', subject: 'Tagihan mesin cuci', from: 'Vendor <tagihan@vendor.example>', to: 'kasir@laundry.example', url: 'https://vendor.example/unduh', body: 'Jalankan invoice.exe lalu matikan antivirus jika diblokir. Petugas vendor yang dihubungi lewat nomor kontrak menyatakan mereka tidak mengirim program.', classification: 'phishing', reason: 'unsafe-file', explanation: 'Domain tampak cocok, tetapi file program dan permintaan mematikan perlindungan bertentangan dengan konfirmasi vendor. Akun pengirim bisa disalahgunakan.' },
          { id: 'air', subject: 'Mendesak: gangguan pasokan air', from: 'Manajer <operasi@laundry.example>', to: 'kasir@laundry.example', url: 'Tidak ada tautan', body: 'Tunda penerimaan cucian sampai pukul 13.00. Manajer mengonfirmasi lewat panggilan ke nomor yang sudah ada pada buku kontak toko. Tidak ada permintaan kode atau pembayaran.', classification: 'legit', reason: 'confirmed', explanation: 'Kata mendesak dapat muncul pada kebutuhan kerja yang sah. Konfirmasi melalui kontak yang sudah dipercaya mendukung keputusan pada kasus ini.' }
        ],
        reasons: [{ id: 'confirmed', label: 'Permintaan kerja telah dikonfirmasi melalui kontak terpisah' }, { id: 'unsafe-file', label: 'Meminta menjalankan program dan mematikan perlindungan; vendor membantah' }, { id: 'domain-only', label: 'Domain cocok, jadi isi pesan pasti aman' }, { id: 'urgent', label: 'Judul mendesak selalu berarti penipuan' }]
      }
    },
    {
      id: 'network', kind: 'network', title: 'Atur jalur jaringan',
      brief: 'Toko membutuhkan koneksi kerja, tetapi jaringan pelanggan harus dipisahkan. Pilih jalur yang boleh lewat lalu uji dampaknya.',
      concept: 'Firewall adalah penyaring koneksi berdasarkan aturan. Aturan terlalu longgar membuka akses; aturan terlalu ketat dapat memutus pekerjaan sah.',
      objective: 'Atur empat jalur sesuai kebutuhan skenario dan jalankan pengujian hingga akses sah bekerja serta akses terlarang terblokir.',
      chapter: '../materi/14-jaringan.md',
      hints: ['Baca kebutuhan tiap jalur. Memblokir semuanya juga dapat mengganggu toko.', 'Pelanggan perlu internet, tetapi tidak perlu membuka aplikasi kasir.', 'Pada shift biasa: izinkan tamu ke internet, kasir ke aplikasi, aplikasi ke database. Tolak tamu ke kasir.'],
      guided: {
        label: 'Operasional harian', policy: 'Pelanggan hanya boleh ke internet. Kasir perlu aplikasi. Aplikasi perlu database transaksi.',
        flows: [
          { id: 'guest-web', from: 'Wi-Fi tamu', to: 'Internet', service: 'HTTPS', purpose: 'Pelanggan memakai internet tanpa memasuki jaringan toko.', expected: true },
          { id: 'guest-pos', from: 'Wi-Fi tamu', to: 'Kasir', service: 'Administrasi', purpose: 'Pelanggan tidak mempunyai tugas administrasi kasir.', expected: false },
          { id: 'pos-app', from: 'Kasir', to: 'Aplikasi toko', service: 'HTTPS', purpose: 'Kasir harus menerima pesanan.', expected: true },
          { id: 'app-db', from: 'Aplikasi toko', to: 'Database', service: 'Transaksi', purpose: 'Aplikasi harus menyimpan pesanan.', expected: true }
        ]
      },
      exam: {
        label: 'Akun vendor selesai kontrak', policy: 'Kontrak vendor sudah berakhir. Cabang tetap memerlukan aplikasi; server cadangan membutuhkan penyimpanan khusus. Wi-Fi tamu tidak boleh masuk ke penyimpanan.',
        flows: [
          { id: 'vendor-admin', from: 'Vendor lama', to: 'Administrasi server', service: 'Remote admin', purpose: 'Tidak ada pekerjaan yang masih disetujui.', expected: false },
          { id: 'branch-app', from: 'Kasir cabang', to: 'Aplikasi toko', service: 'HTTPS', purpose: 'Cabang tetap melayani pelanggan.', expected: true },
          { id: 'backup-store', from: 'Server cadangan', to: 'Penyimpanan cadangan', service: 'Cadangan', purpose: 'Cadangan terjadwal harus tetap berjalan.', expected: true },
          { id: 'guest-store', from: 'Wi-Fi tamu', to: 'Penyimpanan cadangan', service: 'Baca file', purpose: 'Cadangan mengandung data internal toko.', expected: false }
        ]
      }
    },
    {
      id: 'access', kind: 'access', title: 'Lindungi nota pelanggan',
      brief: 'Sebuah fitur membaca nota belum mengecek pemilik. Amati kebocoran pada data buatan, pasang pemeriksaan, lalu lakukan uji ulang.',
      concept: 'Login membuktikan siapa penggunanya. Otorisasi adalah pemeriksaan apa yang boleh dilakukan pengguna itu. Mengetahui nomor nota tidak memberi hak membaca.',
      objective: 'Buktikan satu akses lintas pemilik saat kontrol mati. Aktifkan kontrol, lalu uji pemilik, pengguna lain, dan pengguna tanpa login.',
      chapter: '../materi/09-identitas.md',
      hints: ['Saat kontrol mati, gunakan akun Alice untuk meminta nota milik Bob. Lihat data yang kembali.', 'Aktifkan pemeriksaan pemilik. Ulangi permintaan lintas pemilik: harus ditolak.', 'Lengkapi bukti dengan permintaan pemilik yang sah dan pengguna tanpa login. Kontrol harus tetap aktif saat selesai.'],
      guided: {
        label: 'Nota dua pelanggan', actorTrust: 'Pilihan Alice dan Bob mewakili pengguna yang sudah login ke server simulasi. Pilihan Tanpa login mewakili pengunjung tanpa akun aktif.',
        users: [{ id: 'alice', label: 'Alice' }, { id: 'bob', label: 'Bob' }, { id: 'anonymous', label: 'Tanpa login' }],
        orders: [{ id: 'LA-101', owner: 'alice', status: 'Siap diambil' }, { id: 'LA-102', owner: 'bob', status: 'Sedang dicuci' }]
      },
      exam: {
        label: 'Nomor acak tetap perlu izin', actorTrust: 'Pilihan Rani dan Dedi mewakili pengguna yang sudah login ke server simulasi. Pilihan Tanpa login mewakili pengunjung tanpa akun aktif. Nomor nota yang sulit ditebak tidak menggantikan pemeriksaan pemilik.',
        users: [{ id: 'rani', label: 'Rani' }, { id: 'dedi', label: 'Dedi' }, { id: 'anonymous', label: 'Tanpa login' }],
        orders: [{ id: 'N-8Q2', owner: 'dedi', status: 'Menunggu setrika' }, { id: 'N-4Z7', owner: 'rani', status: 'Siap diambil' }]
      }
    },
    {
      id: 'query', kind: 'query', title: 'Pisahkan data dari SQL',
      brief: 'Pencarian nota menerima nama pelanggan. Bandingkan dua cara menyusun query dan periksa efeknya pada tiga masukan.',
      concept: 'Query adalah permintaan data ke database, tempat aplikasi menyimpan data. SQL adalah bahasa untuk meminta atau mengubah data tersebut. Parameter adalah nilai yang dikirim terpisah dari instruksi SQL. Placeholder, misalnya tanda ?, menandai tempat parameter. Apostrof adalah tanda petik tunggal pada nama seperti O’Neil.',
      objective: 'Lihat kebocoran pada query gabungan. Ganti ke parameter, lalu uji nama biasa, nama berapostrof, dan masukan uji.',
      chapter: '../materi/13-web-api.md',
      hints: ['Gunakan query gabungan lalu jalankan kasus masukan uji. Perhatikan jumlah nota yang kembali.', 'Pilih query berparameter. Tanda ? menyediakan tempat untuk nilai.', 'Jalankan ketiga kasus dalam mode parameter. Nama normal dan O’Neil harus ditemukan; teks uji tidak cocok dengan nama pelanggan.'],
      guided: {
        label: 'Pencarian pelanggan', notice: 'Ini model perilaku SQL untuk tiga masukan yang disediakan, bukan mesin SQL. Coba database SQLite sungguhan melalui labs/sql_demo.py setelah bab terkait.',
        cases: [{ id: 'normal', label: 'Nama biasa', value: 'Alice' }, { id: 'apostrophe', label: 'Nama dengan apostrof', value: "O'Neil" }, { id: 'attack', label: 'Masukan uji', value: "' OR 1=1 --" }],
        customers: [{ name: 'Alice', order: 'LA-101', status: 'Siap' }, { name: "O'Neil", order: 'LA-103', status: 'Dicuci' }], injectionValue: "' OR 1=1 --"
      },
      exam: {
        label: 'Nama sah dari pelanggan baru', notice: 'Model SQL terbatas pada tiga kasus. Parameter memisahkan nilai dari instruksi SQL. Aplikasi tetap perlu memeriksa siapa yang boleh membaca setiap nota.',
        cases: [{ id: 'normal', label: 'Pencarian pelanggan', value: 'Rani' }, { id: 'apostrophe', label: 'Pelanggan baru', value: "D'Angelo" }, { id: 'attack', label: 'Masukan pemeriksaan', value: "' OR 1=1 --" }],
        customers: [{ name: "D'Angelo", order: 'N-31', status: 'Dikirim' }, { name: 'Rani', order: 'N-42', status: 'Siap' }], injectionValue: "' OR 1=1 --"
      }
    },
    {
      id: 'incident', kind: 'incident', title: 'Selidiki peringatan login',
      brief: 'Alarm masuk, tetapi dugaan belum tentu fakta. Baca bukti yang relevan dan pilih tindakan awal yang sebanding.',
      concept: 'Log adalah catatan kejadian pada sistem. Catatan ini belum menjelaskan niat pelaku. Kesimpulan harus mempertimbangkan bukti pendukung, bukti pembantah, dan informasi yang masih hilang.',
      objective: 'Periksa seluruh kartu bukti, lalu pilih kesimpulan dan tindakan awal yang cocok dengan kasus.',
      chapter: '../materi/16-respons-insiden.md',
      hints: ['Buka bukti login dan catatan perangkat. Satu alamat IP belum membuktikan siapa pelakunya.', 'Ada kegagalan sebelum login sukses, tetapi perangkat dan konfirmasi pemilik belum lengkap.', 'Pilih kesimpulan bahwa pengambilalihan akses belum terbukti, lalu simpan log dan pastikan pemilik lewat kontak terpisah. Jangan menghapus log.'],
      guided: {
        label: 'Alarm dengan informasi terbatas',
        events: [{ id: 'gagal', time: '09:01 UTC', source: 'Auth', text: 'Akun operator gagal login dua kali dari 192.0.2.25.' }, { id: 'sukses', time: '09:02 UTC', source: 'Auth', text: 'Akun operator berhasil login dari alamat yang sama.' }, { id: 'konteks', time: '09:03 UTC', source: 'Tiket pemeriksaan', text: 'Belum ada catatan perangkat atau konfirmasi pemilik. IP ini juga dipakai beberapa perangkat melalui NAT.' }],
        requiredEvidence: ['gagal', 'sukses', 'konteks'],
        conclusions: [{ id: 'unknown', label: 'Aktivitas perlu diperiksa; pengambilalihan akses belum terbukti' }, { id: 'certain-attack', label: 'Dua login gagal membuktikan akun diretas' }, { id: 'certain-safe', label: 'Login berhasil membuktikan semuanya aman' }],
        containments: [{ id: 'verify', label: 'Simpan log, periksa sesi, dan konfirmasi pemilik lewat kontak terpisah' }, { id: 'erase', label: 'Hapus log agar alarm berhenti' }, { id: 'shutdown', label: 'Matikan seluruh toko tanpa memeriksa dampak' }],
        answer: { conclusion: 'unknown', containment: 'verify' }, explanation: 'Dua kegagalan diikuti sukses mempunyai beberapa penjelasan. Simpan bukti dan cari konteks sebelum menyatakan pengambilalihan akses.'
      },
      exam: {
        label: 'Bukti akses tanpa izin',
        events: [{ id: 'login', time: '14:01 UTC', source: 'Auth', text: 'Akun vendor.lama login. Kontraknya berakhir kemarin dan pemilik aplikasi memastikan akses seharusnya dicabut.' }, { id: 'export', time: '14:02 UTC', source: 'Aplikasi', text: 'Pengguna dalam sesi login yang sama berhasil mengunduh transaksi buatan. Jawaban aplikasi memperlihatkan isi transaksi tersebut.' }, { id: 'owner', time: '14:04 UTC', source: 'Konfirmasi terpisah', text: 'Pemilik toko mengonfirmasi tidak ada pekerjaan vendor yang disetujui hari ini.' }],
        requiredEvidence: ['login', 'export', 'owner'],
        conclusions: [{ id: 'unknown', label: 'Tidak ada bukti apa pun; abaikan sampai ada serangan lain' }, { id: 'unauthorized', label: 'Akses tanpa izin terbukti; identitas manusia pelaku belum diketahui' }, { id: 'named-attacker', label: 'IP saja membuktikan vendor tertentu adalah pelakunya' }],
        containments: [{ id: 'revoke', label: 'Simpan bukti, cabut sesi dan akses vendor sesuai izin pemilik, lalu tinjau ekspor' }, { id: 'erase', label: 'Hapus semua bukti ekspor' }, { id: 'wait', label: 'Biarkan sesi aktif tanpa tindakan' }],
        answer: { conclusion: 'unauthorized', containment: 'revoke' }, explanation: 'Status kontrak, bukti respons ekspor, dan konfirmasi pemilik mendukung adanya akses tanpa izin. Penyebab dan identitas pelaku masih perlu diperiksa.'
      }
    },
    {
      id: 'backup', kind: 'backup', title: 'Pulihkan transaksi',
      brief: 'File transaksi berubah saat terjadi gangguan. Pilih cadangan yang memenuhi kebutuhan lalu periksa hasil pemulihannya.',
      concept: 'Cadangan (backup) adalah salinan data untuk dipulihkan bila data asli rusak. Cadangan baru berguna setelah hasil pemulihannya diuji. Cadangan paling baru bisa ikut rusak; cadangan terlalu lama bisa kehilangan transaksi.',
      objective: 'Pilih cadangan yang utuh dan memuat transaksi yang dibutuhkan. Pulihkan ke salinan kerja, lalu periksa isinya.',
      chapter: '../materi/10-hardening.md',
      hints: ['Bandingkan waktu cadangan dengan waktu gangguan dan daftar transaksi yang perlu dipulihkan.', 'Cadangan sesudah gangguan memiliki isi rusak. Cadangan pagi belum memuat transaksi terakhir.', 'Pilih cadangan 09.55 yang sudah diperiksa, lalu tekan Periksa isi hasil pemulihan setelah memulihkan.'],
      guided: {
        label: 'Gangguan pukul 10.00', incidentTime: '10:00', requiredText: 'LA-101:21000\nLA-102:35000', workingText: 'DATA RUSAK',
        backups: [{ id: 'pagi', label: 'Cadangan pagi', time: '08:00', text: 'LA-101:21000', verified: true }, { id: 'sebelum', label: 'Cadangan sebelum gangguan', time: '09:55', text: 'LA-101:21000\nLA-102:35000', verified: true }, { id: 'terbaru', label: 'Cadangan terbaru', time: '10:05', text: 'DATA RUSAK', verified: false }]
      },
      exam: {
        label: 'Kesalahan sinkronisasi pukul 16.00', incidentTime: '16:00', requiredText: 'N-31:14000\nN-42:28000\nN-43:7000', workingText: 'N-31:14000',
        backups: [{ id: 'replica', label: 'Replika setelah gangguan', time: '16:02', text: 'N-31:14000', verified: false }, { id: 'offline', label: 'Cadangan terpisah', time: '15:58', text: 'N-31:14000\nN-42:28000\nN-43:7000', verified: true }, { id: 'siang', label: 'Cadangan siang', time: '12:00', text: 'N-31:14000\nN-42:28000', verified: true }]
      }
    },
    {
      id: 'capstone', kind: 'capstone', title: 'Tangani satu kasus utuh',
      brief: 'Gabungkan pemeriksaan izin, bukti, dan pemulihan. Setiap keputusan harus membantu kebutuhan bisnis yang dinyatakan.',
      concept: 'Pekerjaan keamanan menghubungkan penyebab, dampak, perbaikan, dan uji ulang. Hasil pada satu kasus tidak menjamin penguasaan seluruh cybersecurity.',
      objective: 'Tentukan empat keputusan berdasarkan paket bukti. Periksa hasilnya dan perbaiki keputusan yang belum sesuai.',
      chapter: '../materi/26-capstone.md',
      hints: ['Cari keputusan yang memeriksa izin di server dan mempertahankan bukti.', 'Perbaikan harus tetap mengizinkan pemilik membaca notanya. Uji ulang memerlukan akses sah dan akses terlarang.', 'Pilih pemeriksaan pemilik, bukti minimum, uji ulang lintas pengguna, dan pemulihan ke file baru yang diperiksa.'],
      guided: {
        label: 'Nota tertukar antar pelanggan', brief: 'Alice memperoleh nota Bob. Program tidak mengecek pemilik. File transaksi yang masih utuh tersedia pada cadangan pukul 11.55 yang sudah diperiksa; gangguan terjadi pukul 12.00.',
        evidence: ['Permintaan Alice untuk LA-102 mengembalikan data buatan milik Bob.', 'Fungsi baca nota mengambil nomor lalu langsung mengembalikan isinya.', 'Cadangan 11.55 memuat dua transaksi yang dibutuhkan dan sudah diperiksa.'],
        decisions: [
          { id: 'fix', label: 'Perbaikan utama', options: [{ id: 'owner', label: 'Periksa pemilik nota di server berdasarkan sesi yang sah' }, { id: 'hide', label: 'Sembunyikan tombol lihat nota' }, { id: 'random', label: 'Ganti nomor dengan ID acak saja' }], correct: 'owner', explanation: 'Tampilan dan nomor sulit ditebak tidak menggantikan pemeriksaan hak akses objek di server.' },
          { id: 'evidence', label: 'Pengumpulan bukti', options: [{ id: 'minimum', label: 'Simpan reproduksi dengan dua nota buatan dan konteks permintaan' }, { id: 'all', label: 'Unduh seluruh data pelanggan agar laporan terlihat lengkap' }, { id: 'erase', label: 'Hapus log permintaan yang bermasalah' }], correct: 'minimum', explanation: 'Bukti minimum yang dapat diulang cukup untuk menjelaskan masalah sekaligus membatasi paparan data.' },
          { id: 'retest', label: 'Pengujian perbaikan', options: [{ id: 'both', label: 'Pemilik berhasil; pengguna lain dan pengguna tanpa login ditolak' }, { id: 'homepage', label: 'Halaman utama bisa dibuka' }, { id: 'deny-all', label: 'Semua pengguna ditolak' }], correct: 'both', explanation: 'Kontrol perlu melindungi data sambil mempertahankan fungsi yang sah.' },
          { id: 'restore', label: 'Pemulihan transaksi', options: [{ id: 'verified-copy', label: 'Pulihkan cadangan 11.55 ke file baru lalu cocokkan isinya' }, { id: 'overwrite', label: 'Timpa semua bukti tanpa memeriksa cadangan' }, { id: 'name-only', label: 'Anggap sukses karena nama file cadangan terlihat benar' }], correct: 'verified-copy', explanation: 'Pemulihan harus diuji dengan isi yang diharapkan, bukan sekadar keberadaan file.' }
        ]
      },
      exam: {
        label: 'Cabang baru dan vendor lama', brief: 'Supervisor cabang A boleh membaca A, tetapi tidak cabang B. Akun vendor kontrak berakhir mengekspor data B. Konfirmasi pemilik dan isi respons membuktikan ekspor tanpa izin. Cadangan terbaru ikut kehilangan baris; cadangan terpisah masih utuh.',
        evidence: ['Supervisor A berhasil membuka transaksi cabang B karena server hanya memeriksa nama peran supervisor.', 'Vendor lama tidak lagi mempunyai tugas yang disetujui. Sesi aktif masih dapat mengekspor transaksi.', 'Replika terbaru hanya berisi satu transaksi. Cadangan terpisah yang sudah diperiksa memuat ketiga transaksi yang dibutuhkan.'],
        decisions: [
          { id: 'fix', label: 'Perbaikan aturan supervisor', options: [{ id: 'global', label: 'Izinkan seluruh supervisor melihat semua cabang' }, { id: 'branch', label: 'Periksa peran dan cabang yang dikelola di server' }, { id: 'hide', label: 'Hapus tautan cabang B dari menu saja' }], correct: 'branch', explanation: 'Nama peran belum menentukan cabang yang boleh diakses. Server perlu memeriksa kedua batas tersebut.' },
          { id: 'contain', label: 'Tindakan pada vendor lama', options: [{ id: 'revoke', label: 'Simpan bukti dan cabut sesi serta hak vendor dengan izin pemilik' }, { id: 'wait', label: 'Biarkan karena password vendor benar' }, { id: 'erase', label: 'Hapus log agar vendor tidak terlihat' }], correct: 'revoke', explanation: 'Autentikasi yang berhasil tidak membuat kontrak lama kembali berlaku. Pertahankan bukti saat membatasi akses.' },
          { id: 'claim', label: 'Kesimpulan laporan', options: [{ id: 'ip-person', label: 'IP membuktikan nama manusia yang melakukan ekspor' }, { id: 'supported', label: 'Ekspor tanpa izin terbukti; identitas pelaku masih perlu diperiksa' }, { id: 'none', label: 'Tidak ada masalah karena respons HTTP berhasil' }], correct: 'supported', explanation: 'Klaim akses tanpa izin memiliki bukti. Identitas manusia pelaku memerlukan penyelidikan tambahan.' },
          { id: 'restore', label: 'Pemulihan', options: [{ id: 'latest', label: 'Pilih replika terbaru walaupun baris hilang' }, { id: 'separate', label: 'Pulihkan cadangan terpisah dan cocokkan ketiga transaksi' }, { id: 'skip', label: 'Tidak perlu memeriksa hasil pemulihan' }], correct: 'separate', explanation: 'Pilih sumber yang memenuhi kebutuhan data, lalu periksa hasilnya; usia terbaru saja bukan ukuran keutuhan.' }
        ]
      }
    }
  ];
});
