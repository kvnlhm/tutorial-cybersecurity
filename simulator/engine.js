(function (root, factory) {
  const data = typeof module === 'object' && module.exports ? require('./scenarios.js') : root.LaundryScenarios;
  const engine = factory(data);
  if (typeof module === 'object' && module.exports) module.exports = engine;
  else root.LaundryEngine = engine;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (scenarios) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  const has = (state, tag) => state.evidence.includes(tag);
  function add(state, tag) { if (!has(state, tag)) state.evidence.push(tag); }
  function remove(state, prefix) { state.evidence = state.evidence.filter(tag => !tag.startsWith(prefix)); }
  function missionFor(id) {
    const mission = scenarios.find(item => item.id === id);
    if (!mission) throw new Error('Misi tidak dikenal');
    return mission;
  }
  function createSession(missionId, mode = 'guided') {
    const mission = missionFor(missionId);
    if (!['guided', 'exam'].includes(mode)) throw new Error('Mode tidak dikenal');
    const scenario = mission[mode];
    const models = {
      terminal: { cwd: scenario.startPath }, phishing: { inspected: [], answers: {} },
      network: { rules: Object.fromEntries((scenario.flows || []).map(flow => [flow.id, mode === 'guided'])), results: [] },
      access: { policy: false, lastResponse: null }, query: { queryMode: 'concat', lastResult: null },
      incident: { inspected: [], conclusion: '', containment: '' },
      backup: { restoredId: null, workingText: scenario.workingText, verified: false }, capstone: { decisions: {}, review: [] }
    };
    return { missionId, mode, model: models[mission.kind], history: [], attempts: 0, hintsUsed: 0, completed: false, evidence: [] };
  }
  function getScenario(state) {
    if (!['guided', 'exam'].includes(state.mode)) throw new Error('Mode tidak dikenal');
    return clone(missionFor(state.missionId)[state.mode]);
  }
  function normalizedPath(cwd, input) {
    const parts = input.startsWith('/') ? [] : cwd.split('/').filter(Boolean);
    for (const segment of input.split('/')) {
      if (!segment || segment === '.') continue;
      if (segment === '..') {
        if (parts.length <= 1) return null;
        parts.pop();
      } else parts.push(segment);
    }
    const path = '/' + parts.join('/');
    return path === '/laundry' || path.startsWith('/laundry/') ? path : null;
  }
  function act(original, action) {
    const state = clone(original);
    const mission = missionFor(state.missionId);
    const scenario = getScenario(state);
    const model = state.model;
    const finish = (ok, title, message, output) => {
      const feedback = { ok, title, message };
      state.attempts += 1;
      const entry = { action: clone(action || {}), feedback };
      if (output !== undefined) entry.output = output;
      state.history.push(entry);
      return output === undefined ? { state, feedback } : { state, feedback, output };
    };
    const invalid = (message = 'Pilih tindakan yang tersedia untuk misi ini.') => finish(false, 'Tindakan belum sesuai', message);
    if (!action || typeof action !== 'object' || typeof action.type !== 'string') return invalid();

    if (mission.kind === 'terminal' && action.type === 'command') {
      const value = typeof action.value === 'string' ? action.value.trim() : '';
      if (!value || value.length > 160 || /[^a-zA-Z0-9._/\-\s]/.test(value)) return invalid('Terminal latihan menerima satu perintah pwd, ls, cd, cat, atau help. Tidak ada perintah sistem yang dijalankan.');
      const [command, argument, extra] = value.split(/\s+/);
      if (extra || !['pwd', 'ls', 'cd', 'cat', 'help'].includes(command)) return invalid('Gunakan help untuk melihat perintah yang didukung. Ini terminal virtual, bukan shell komputer Anda.');
      let output;
      if (command === 'help') {
        if (argument) return invalid('Ketik help tanpa tambahan.');
        output = 'pwd: lihat lokasi\nls: lihat isi folder\ncd nama-folder: pindah folder\ncd ..: naik satu folder\ncat nama-file: baca isi file';
      } else if (command === 'pwd') {
        if (argument) return invalid('Ketik pwd tanpa nama file.');
        output = model.cwd;
        add(state, 'location-seen');
      } else if (command === 'ls') {
        const path = argument ? normalizedPath(model.cwd, argument) : model.cwd;
        if (!path || !scenario.folders.includes(path)) return invalid('Folder tidak ditemukan dalam lab. Ketik ls untuk melihat pilihan di lokasi sekarang.');
        const prefix = path + '/';
        const directories = scenario.folders.filter(p => p.startsWith(prefix) && !p.slice(prefix.length).includes('/')).map(p => p.slice(prefix.length) + '/');
        const files = Object.keys(scenario.files).filter(p => p.startsWith(prefix) && !p.slice(prefix.length).includes('/')).map(p => p.slice(prefix.length));
        output = [...directories, ...files].sort().join('\n') || '(folder kosong)';
        add(state, 'listing-seen');
      } else {
        if (!argument) return invalid(command === 'cd' ? 'Tambahkan nama folder setelah cd.' : 'Tambahkan nama file setelah cat.');
        const path = normalizedPath(model.cwd, argument);
        if (!path) return invalid('Jalur itu berada di luar folder virtual /laundry. Komputer asli Anda tidak dibaca.');
        if (command === 'cd') {
          if (!scenario.folders.includes(path)) return invalid('Folder tidak ditemukan. Periksa ejaan menggunakan ls.');
          model.cwd = path;
          output = 'Lokasi sekarang: ' + path;
        } else {
          if (!Object.prototype.hasOwnProperty.call(scenario.files, path)) return invalid('File tidak ditemukan. Periksa lokasi dengan pwd dan isi folder dengan ls.');
          output = scenario.files[path];
          if (path === scenario.targetPath) add(state, 'target-read');
        }
      }
      state.completed = ['location-seen', 'listing-seen', 'target-read'].every(tag => has(state, tag));
      return finish(true, state.completed ? 'Catatan ditemukan' : 'Perintah berhasil', state.completed ? 'Anda memeriksa lokasi, melihat daftar isi, dan membaca file tugas. Ulangi pada kasus ujian yang memulai dari folder lain.' : 'Baca keluaran lalu tentukan langkah berikutnya. Perintah ini hanya mengubah lingkungan virtual.', output);
    }

    if (mission.kind === 'phishing') {
      const message = scenario.messages.find(item => item.id === action.id);
      if (!message) return invalid('Pilih salah satu pesan pada kotak masuk latihan.');
      if (action.type === 'inspect') {
        if (!model.inspected.includes(message.id)) model.inspected.push(message.id);
        return finish(true, 'Rincian pesan dibuka', 'Bandingkan pengirim, tujuan tautan, dan konteks dengan catatan toko. Jangan membuka tautan di luar simulasi.', `Dari: ${message.from}\nKe: ${message.to}\nTujuan: ${message.url}\n${message.body}`);
      }
      if (action.type === 'classify') {
        if (!model.inspected.includes(message.id)) return invalid('Buka rincian pesan ini sebelum mengambil keputusan.');
        if (!['phishing', 'legit'].includes(action.classification) || !scenario.reasons.some(reason => reason.id === action.reason)) return invalid('Pilih klasifikasi dan satu alasan dari pilihan yang tersedia.');
        const correct = message.classification === action.classification && message.reason === action.reason;
        model.answers[message.id] = { classification: action.classification, reason: action.reason, correct };
        state.completed = scenario.messages.every(item => model.answers[item.id] && model.answers[item.id].correct);
        return finish(correct, correct ? 'Keputusan didukung bukti' : 'Periksa lagi alasannya', correct ? message.explanation : 'Periksa rincian permintaan dan konfirmasi terpisah. Nama pengirim, logo, atau kata mendesak saja tidak cukup menentukan keaslian.');
      }
    }

    if (mission.kind === 'network') {
      if (action.type === 'rule') {
        if (!scenario.flows.some(flow => flow.id === action.id) || typeof action.allow !== 'boolean') return invalid('Pilih jalur yang ada dan keputusan izinkan atau tolak.');
        if (model.rules[action.id] !== action.allow) {
          model.rules[action.id] = action.allow;
          model.results = [];
          state.completed = false;
          remove(state, 'network-tested');
        }
        return finish(true, 'Aturan tersimpan di simulasi', 'Jalankan pengujian untuk mengetahui dampak konfigurasi yang sekarang.');
      }
      if (action.type === 'test') {
        model.results = scenario.flows.map(flow => ({ id: flow.id, allowed: model.rules[flow.id], expected: flow.expected, passed: model.rules[flow.id] === flow.expected }));
        state.completed = model.results.every(result => result.passed);
        if (state.completed) add(state, 'network-tested');
        const output = model.results.map((result, i) => `${scenario.flows[i].from} -> ${scenario.flows[i].to}: ${result.allowed ? 'diizinkan' : 'ditolak'}; ${result.passed ? 'sesuai kebutuhan' : 'belum sesuai kebutuhan'}`).join('\n');
        return finish(state.completed, state.completed ? 'Jalur sesuai kebutuhan' : 'Ada jalur yang perlu diperbaiki', state.completed ? 'Layanan sah tetap bekerja dan akses di luar kebutuhan terblokir pada model ini.' : 'Cocokkan baris yang belum sesuai dengan kebutuhan bisnis. Menutup semua jalur dapat menghambat pekerjaan.', output);
      }
    }

    if (mission.kind === 'access') {
      if (action.type === 'policy') {
        if (typeof action.enabled !== 'boolean') return invalid('Gunakan pilihan aktif atau nonaktif.');
        if (model.policy !== action.enabled) {
          model.policy = action.enabled;
          model.lastResponse = null;
          remove(state, 'safe-');
          state.completed = false;
        }
        return finish(true, model.policy ? 'Pemeriksaan pemilik aktif' : 'Pemeriksaan pemilik nonaktif', 'Uji akses pemilik, pengguna lain, dan tanpa login. Konfigurasi saja belum membuktikan kontrol bekerja.');
      }
      if (action.type === 'request') {
        const user = scenario.users.find(item => item.id === action.actor);
        const order = scenario.orders.find(item => item.id === action.orderId);
        if (!user || !order) return invalid('Pilih pengguna dan nomor nota yang tersedia pada skenario.');
        const anonymous = user.id === 'anonymous';
        const owner = order.owner === user.id;
        const allowed = model.policy ? !anonymous && owner : !anonymous;
        model.lastResponse = { actor: user.id, orderId: order.id, allowed, data: allowed ? clone(order) : null, reason: anonymous ? 'Identitas belum diverifikasi' : allowed ? (model.policy ? 'Identitas cocok dengan pemilik' : 'Fungsi belum memeriksa pemilik') : 'Pengguna bukan pemilik nota' };
        if (!model.policy && !owner && !anonymous && allowed) add(state, 'leak-observed');
        if (model.policy) add(state, anonymous ? 'safe-anonymous' : owner ? 'safe-owner' : 'safe-other');
        state.completed = model.policy && ['leak-observed', 'safe-owner', 'safe-other', 'safe-anonymous'].every(tag => has(state, tag));
        const output = allowed ? `200 DIIZINKAN\nNota ${order.id}\nPemilik: ${order.owner}\nStatus: ${order.status}` : `403 DITOLAK\n${model.lastResponse.reason}\nTidak ada isi nota yang dikembalikan.`;
        return finish(true, allowed && !owner ? 'Kebocoran terlihat pada data dummy' : allowed ? 'Akses pemilik berhasil' : 'Permintaan ditolak', allowed && !owner ? 'Pengguna membaca nota orang lain karena pemeriksaan pemilik belum aktif. Aktifkan kontrol lalu lakukan retest.' : 'Bandingkan hasil dengan hak yang semestinya. Identitas pada simulasi berasal dari sesi server.', output);
      }
    }

    if (mission.kind === 'query') {
      if (action.type === 'query-mode') {
        if (!['concat', 'parameter'].includes(action.mode)) return invalid('Pilih query gabungan atau query berparameter.');
        if (model.queryMode !== action.mode) {
          model.queryMode = action.mode;
          model.lastResult = null;
          remove(state, 'query-safe-');
          state.completed = false;
        }
        return finish(true, 'Cara query diperbarui', 'Ulangi ketiga kasus untuk menguji perilaku implementasi yang dipilih.');
      }
      if (action.type === 'query-test') {
        const sample = scenario.cases.find(item => item.id === action.caseId);
        if (!sample) return invalid('Pilih masukan uji yang tersedia.');
        const parameterized = model.queryMode === 'parameter';
        let rows = [];
        let error = '';
        if (!parameterized && sample.value === scenario.injectionValue) {
          rows = clone(scenario.customers);
          add(state, 'query-leak');
        } else if (!parameterized && sample.value.includes("'")) {
          error = 'Model menunjukkan kesalahan sintaks akibat apostrof pada nilai yang digabung sebagai SQL.';
        } else rows = clone(scenario.customers.filter(customer => customer.name === sample.value));
        const query = parameterized ? 'SELECT * FROM orders WHERE customer = ?' : `SELECT * FROM orders WHERE customer = '${sample.value}'`;
        model.lastResult = { caseId: sample.id, query, parameter: parameterized ? sample.value : null, rows, error };
        if (parameterized) add(state, 'query-safe-' + sample.id);
        state.completed = parameterized && has(state, 'query-leak') && scenario.cases.every(item => has(state, 'query-safe-' + item.id));
        const output = query + (parameterized ? '\nNilai terpisah: ' + JSON.stringify(sample.value) : '') + '\n' + (error || JSON.stringify(rows, null, 2));
        return finish(true, error ? 'Nama sah merusak query gabungan' : !parameterized && sample.id === 'attack' ? 'Dua nota terlihat' : 'Hasil pencarian tersedia', parameterized ? 'Nilai tetap menjadi data. Nama sah boleh memiliki apostrof; masukan uji tidak cocok dengan pelanggan.' : 'Model ini memperlihatkan masalah penggabungan instruksi dan data. Pilih parameter lalu uji kasus sah dan masukan uji.', output);
      }
    }

    if (mission.kind === 'incident') {
      if (action.type === 'inspect') {
        const event = scenario.events.find(item => item.id === action.id);
        if (!event) return invalid('Pilih kartu bukti pada kasus ini.');
        if (!model.inspected.includes(event.id)) model.inspected.push(event.id);
        return finish(true, 'Bukti dicatat', 'Pisahkan hal yang tertulis dalam bukti dari dugaan Anda.', `${event.time} | ${event.source}\n${event.text}`);
      }
      if (action.type === 'submit') {
        if (!scenario.requiredEvidence.every(id => model.inspected.includes(id))) return invalid('Periksa seluruh kartu bukti sebelum menyimpulkan.');
        if (!scenario.conclusions.some(item => item.id === action.conclusion) || !scenario.containments.some(item => item.id === action.containment)) return invalid('Pilih kesimpulan dan tindakan awal.');
        model.conclusion = action.conclusion;
        model.containment = action.containment;
        state.completed = action.conclusion === scenario.answer.conclusion && action.containment === scenario.answer.containment;
        return finish(state.completed, state.completed ? 'Kesimpulan sebanding dengan bukti' : 'Keputusan perlu ditinjau', state.completed ? scenario.explanation : 'Jangan menyimpulkan lebih dari bukti yang tersedia. Pertahankan log dan pilih tindakan yang melindungi aset tanpa menghapus bukti.');
      }
    }

    if (mission.kind === 'backup') {
      if (action.type === 'restore') {
        const backup = scenario.backups.find(item => item.id === action.id);
        if (!backup) return invalid('Pilih salah satu cadangan yang tersedia.');
        model.restoredId = backup.id;
        model.workingText = backup.text;
        model.verified = false;
        state.completed = false;
        remove(state, 'restore-verified');
        return finish(true, 'Salinan kerja dipulihkan', 'Cadangan asli tidak diubah. Sekarang verifikasi isi terhadap kebutuhan transaksi.', model.workingText);
      }
      if (action.type === 'verify') {
        if (!model.restoredId) return invalid('Pilih dan pulihkan satu cadangan sebelum memverifikasi.');
        const backup = scenario.backups.find(item => item.id === model.restoredId);
        const matches = model.workingText === scenario.requiredText;
        model.verified = matches && backup.verified;
        state.completed = model.verified;
        if (state.completed) add(state, 'restore-verified');
        return finish(state.completed, state.completed ? 'Transaksi pulih dan cocok' : 'Hasil belum memenuhi kebutuhan', state.completed ? 'Isi salinan kerja cocok dengan transaksi yang dibutuhkan dan sumber cadangan telah diverifikasi pada skenario.' : 'Bandingkan baris yang hilang atau rusak dengan daftar kebutuhan. Pilih cadangan lain dan uji ulang.', `Kecocokan isi: ${matches ? 'YA' : 'TIDAK'}\nSumber terverifikasi: ${backup.verified ? 'YA' : 'TIDAK'}`);
      }
    }

    if (mission.kind === 'capstone') {
      if (action.type === 'decision') {
        const decision = scenario.decisions.find(item => item.id === action.id);
        if (!decision || !decision.options.some(option => option.id === action.value)) return invalid('Pilih keputusan dari pilihan yang tersedia.');
        if (model.decisions[action.id] !== action.value) {
          model.decisions[action.id] = action.value;
          model.review = [];
          state.completed = false;
        }
        return finish(true, 'Keputusan dicatat', 'Lengkapi seluruh keputusan, lalu periksa paket penanganan kasus.');
      }
      if (action.type === 'submit') {
        if (!scenario.decisions.every(item => Object.prototype.hasOwnProperty.call(model.decisions, item.id))) return invalid('Lengkapi keempat keputusan sebelum mengirim penanganan kasus.');
        model.review = scenario.decisions.map(item => ({ id: item.id, correct: model.decisions[item.id] === item.correct, explanation: item.explanation }));
        state.completed = model.review.every(item => item.correct);
        const output = model.review.map((item, index) => `${scenario.decisions[index].label}: ${item.correct ? 'sesuai' : 'perlu diperbaiki'}. ${item.explanation}`).join('\n');
        return finish(state.completed, state.completed ? 'Kasus simulasi terselesaikan' : 'Tinjau keputusan yang belum sesuai', state.completed ? 'Anda menghubungkan kebutuhan, bukti, perbaikan, dan pemulihan pada kasus ini. Uji kemampuan pada variasi kasus dan praktik bab untuk memperluasnya.' : 'Baca alasan tiap keputusan. Perbaiki bagian yang masih bermasalah dan kirim ulang.', output);
      }
    }
    return invalid();
  }
  function hint(original) {
    const state = clone(original);
    const mission = missionFor(state.missionId);
    if (state.mode === 'exam') return { state, text: 'Mode ujian tidak menyediakan petunjuk. Kembali ke mode belajar untuk mengulang konsep.' };
    const index = Math.min(state.hintsUsed, mission.hints.length - 1);
    state.hintsUsed = Math.min(state.hintsUsed + 1, mission.hints.length);
    return { state, text: mission.hints[index] };
  }
  function restoreSession(record) {
    if (!record || typeof record !== 'object' || !Array.isArray(record.history) || record.history.length > 2000) throw new Error('Data progres tidak valid atau terlalu panjang');
    let state = createSession(record.missionId, record.mode);
    for (const entry of record.history) {
      if (!entry || typeof entry !== 'object' || !entry.action || typeof entry.action !== 'object') throw new Error('Riwayat progres tidak valid');
      state = act(state, entry.action).state;
    }
    state.hintsUsed = record.mode === 'guided' && Number.isInteger(record.hintsUsed) ? Math.max(0, Math.min(record.hintsUsed, 3)) : 0;
    return state;
  }
  return { createSession, getScenario, act, hint, restoreSession };
});
