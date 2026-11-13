(function () {
  'use strict';
  const missions = window.LaundryScenarios;
  const engine = window.LaundryEngine;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function updateReadingLinks() {
    if (location.hostname !== 'kvnlhm.github.io') return;
    document.querySelectorAll('a[href^="../"][href$=".md"]').forEach(link => {
      link.href = 'https://github.com/kvnlhm/tutorial-cybersecurity/blob/main/' + link.getAttribute('href').slice(3);
    });
  }
  const key = 'laundry-aman-training-v1';
  const view = { current: 'terminal', mode: 'guided', theme: 'dark', records: {} };
  let storageOK = true;
  let storageMessage = '';
  let lastFeedback = null;
  let states = {};
  const recordKey = () => view.current + ':' + view.mode;
  const currentMission = () => missions.find(m => m.id === view.current);
  const activeState = () => states[recordKey()] || (states[recordKey()] = engine.createSession(view.current, view.mode));
  const activeRecord = () => view.records[recordKey()] || (view.records[recordKey()] = { actions: [], hints: 0, reflection: '' });
  const options = (items, selected = '') => '<option value="">Pilih jawabanmu</option>' + items.map(o => `<option value="${escape(o.id)}" ${o.id === selected ? 'selected' : ''}>${escape(o.label)}</option>`).join('');
  const field = (id, label, items, selected = '') => `<div class="field"><label for="${id}">${escape(label)}</label><select id="${id}" required>${options(items, selected)}</select></div>`;
  const table = (head, rows) => `<table class="data-table"><thead><tr>${head.map(h => `<th scope="col">${escape(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(x => `<td>${escape(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const evidenceText = {'location-seen':'Lokasi folder virtual sudah diperiksa.','listing-seen':'Daftar isi folder sudah dibaca.','target-read':'Isi file tugas berhasil ditemukan dan dibaca.','network-tested':'Seluruh aliran sudah diuji dengan konfigurasi saat ini.','leak-observed':'Akses nota lintas pemilik terlihat saat kontrol belum aktif.','safe-owner':'Pemilik sah berhasil membaca notanya setelah perbaikan.','safe-other':'Pengguna lain ditolak setelah perbaikan.','safe-anonymous':'Permintaan tanpa login ditolak setelah perbaikan.','query-leak':'Masukan uji memperlihatkan kebocoran pada model query gabungan.','query-safe-normal':'Nama biasa berhasil diuji sebagai parameter.','query-safe-apostrophe':'Nama berapostrof berhasil diuji sebagai data sah.','query-safe-attack':'Masukan uji tetap menjadi data pada query berparameter.','restore-verified':'Isi salinan yang dipulihkan cocok dan sumber cadangan sudah diperiksa.'};
  function readableEvidence(state,scenario) {
    const items=state.evidence.map(tag=>evidenceText[tag]||tag);
    if(state.missionId==='phishing') for(const message of scenario.messages) {
      if(state.model.inspected.includes(message.id)) items.push('Rincian pesan diperiksa: '+message.subject);
      if(state.model.answers[message.id]) items.push('Keputusan untuk '+message.subject+': '+(state.model.answers[message.id].correct?'sesuai bukti.':'masih perlu diperbaiki.'));
    }
    if(state.missionId==='incident') for(const event of scenario.events) if(state.model.inspected.includes(event.id)) items.push(event.time+' · '+event.text);
    if(state.missionId==='capstone') for(const result of state.model.review) items.push(scenario.decisions.find(d=>d.id===result.id).label+': '+(result.correct?'sesuai.':'perlu diperbaiki.'));
    return items;
  }

  function save() {
    try { localStorage.setItem(key, JSON.stringify(view)); }
    catch (_) { storageOK = false; storageMessage = 'Browser tidak mengizinkan penyimpanan. Latihan tetap berjalan di tab ini; unduh catatan sebelum menutup.'; }
    const text = storageMessage || 'Progres disimpan di browser ini. Unduh catatan untuk salinan pribadi.';
    if($('#storage-status').textContent !== text) $('#storage-status').textContent = text;
    $('#storage-status').classList.toggle('warning', !storageOK || !!storageMessage);
  }

  function load() {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      if (raw.length > 2000000) throw new Error('Berkas progres terlalu besar');
      const loaded = JSON.parse(raw);
      if (!loaded || typeof loaded !== 'object' || !loaded.records || typeof loaded.records !== 'object') throw new Error('Format progres tidak dikenal');
      view.current = missions.some(m => m.id === loaded.current) ? loaded.current : 'terminal';
      view.mode = loaded.mode === 'exam' ? 'exam' : 'guided';
      view.theme = loaded.theme === 'light' ? 'light' : 'dark';
      let recovered = false;
      for (const mission of missions) for (const mode of ['guided', 'exam']) {
        const id = mission.id + ':' + mode;
        const record = loaded.records[id];
        if (!record) continue;
        try {
          if (!Array.isArray(record.actions) || record.actions.length > 1000 || !Number.isInteger(record.hints) || record.hints < 0 || record.hints > 3) throw new Error('Invalid record');
          let state = engine.createSession(mission.id, mode);
          for (const action of record.actions) {
            if (!action || typeof action !== 'object' || Array.isArray(action)) throw new Error('Invalid action');
            state = engine.act(state, action).state;
          }
          for (let h = 0; h < record.hints; h++) state = engine.hint(state).state;
          states[id] = state;
          view.records[id] = {actions: record.actions, hints: mode === 'exam' ? 0 : record.hints, reflection: typeof record.reflection === 'string' ? record.reflection.slice(0, 3000) : ''};
        } catch (_) { recovered = true; }
      }
      if (recovered) storageMessage = 'Ada data misi yang tidak valid. Misi tersebut dimulai ulang; progres yang valid tetap tersedia.';
    } catch (_) {
      storageMessage = 'Progres tersimpan tidak dapat dibaca. Latihan baru tersedia. Catatan yang sudah diunduh tetap dapat dibaca terpisah.';
    }
  }

  function terminal(state, scenario) {
    const transcript = state.history.filter(h => h.action && h.action.type === 'command').map(h => '$ ' + h.action.value + '\n' + (h.output ?? h.feedback.message)).join('\n\n');
    return `<p>${escape(scenario.task)}</p><div class="file-map"><strong>Peta berkas virtual</strong>${Object.keys(scenario.files).map(p => `<code>${escape(p)}</code>`).join('')}</div>
      <pre class="terminal" aria-label="Hasil terminal virtual">${escape(transcript || 'Terminal virtual siap. Ketik pwd untuk melihat lokasi, lalu tekan Enter.')}</pre>
      <form id="terminal-form"><div class="field"><label for="command">Ketik perintah di sini</label><div class="terminal-input"><div class="command-line"><span class="prompt" aria-hidden="true">$</span><input id="command" type="text" maxlength="200" autocomplete="off" spellcheck="false" placeholder="Contoh: pwd" required aria-describedby="command-help"><span class="cursor" aria-hidden="true"></span></div><button class="primary">Jalankan perintah</button></div><p id="command-help" class="small">Ini terminal virtual. Ketik pwd, ls, cd, cat, atau help, lalu tekan Enter. Tanda $ di depan kotak tidak perlu diketik. Perintah ini hanya mengolah berkas latihan, bukan berkas di komputer kamu.</p></div></form>
      ${view.mode === 'guided' ? '<div class="quick-commands" aria-label="Isi contoh perintah"><button data-command="pwd">Isi pwd</button><button data-command="ls">Isi ls</button><button data-command="help">Isi help</button></div>' : ''}`;
  }

  function phishing(state, scenario) {
    return `<p>Domain adalah nama alamat sebuah situs. Domain resmi dalam kasus ini: <strong>${scenario.trustedDomains.map(escape).join(', ')}</strong>. OTP adalah kode rahasia sekali pakai, misalnya kode login. Tautan pada pesan di bawah hanya teks, tidak bisa diklik.</p>` + scenario.messages.map(m => {
      const inspected = state.model.inspected.includes(m.id);
      const answer = state.model.answers[m.id];
      return `<section class="mail"><h3>${escape(m.subject)}</h3><button data-inspect="${escape(m.id)}" id="inspect-${escape(m.id)}">${inspected ? 'Periksa lagi' : 'Periksa pengirim dan tujuan'}</button>${inspected ? `<dl><dt>Pengirim</dt><dd>${escape(m.from)}</dd><dt>Penerima</dt><dd>${escape(m.to)}</dd><dt>Tujuan tautan</dt><dd><code>${escape(m.url)}</code></dd></dl><p class="mail-body">${escape(m.body)}</p><form class="phishing-form" data-message="${escape(m.id)}"><div class="row">${field('classification-'+m.id,'Keputusan untuk pesan ini',[{id:'phishing',label:'Mencurigakan, perlu dilaporkan'},{id:'legit',label:'Sesuai informasi resmi kasus'}], answer?.classification)}${field('reason-'+m.id,'Bukti yang mendasari keputusan',scenario.reasons,answer?.reason)}</div><button class="primary">Simpan keputusan pesan</button></form>` : '<p class="small">Buka rincian sebelum menyimpulkan. Phishing adalah pesan penipuan yang menyamar sebagai pihak resmi. Kata mendesak saja belum cukup membuktikan penipuan.</p>'}</section>`;
    }).join('');
  }

  function network(state, scenario) {
    return `<p>${escape(scenario.policy)}</p><p class="small">Firewall adalah penyaring koneksi. Database adalah tempat aplikasi menyimpan data. Aliran adalah arah komunikasi dari satu titik ke titik lain, misalnya kasir ke aplikasi. Centang hanya aliran yang dibutuhkan toko. Setelah mengubah aturan, uji ulang agar izin dan penolakan sama-sama terbukti.</p>` + scenario.flows.map(f => `<div class="flow-row"><div><strong>${escape(f.from)} → ${escape(f.to)}</strong><p>${escape(f.service)}</p><p class="small">${escape(f.purpose)}</p></div><label for="flow-${escape(f.id)}"><input id="flow-${escape(f.id)}" data-flow="${escape(f.id)}" type="checkbox" ${state.model.rules[f.id] ? 'checked' : ''}> Izinkan</label></div>`).join('') + `<div class="actions"><button class="primary" id="network-test">Uji seluruh aliran</button></div>${state.model.results.length ? `<div class="test-results"><h3>Hasil pengujian aliran</h3>${state.model.results.map(r => {const flow=scenario.flows.find(f=>f.id===r.id);return `<p><strong>${escape(flow.from)} → ${escape(flow.to)}</strong><br>${r.allowed?'Diizinkan':'Ditolak'} · ${r.passed?'Sesuai kebutuhan':'Belum sesuai kebutuhan'}</p>`;}).join('')}</div>` : ''}`;
  }

  function access(state, scenario) {
    return `<p>${escape(scenario.actorTrust)}</p>${table(['Nomor nota','Pemilik','Status'],scenario.orders.map(o=>[o.id,o.owner,o.status]))}<label class="choice-line" for="owner-policy"><input id="owner-policy" type="checkbox" ${state.model.policy ? 'checked' : ''}> Periksa pemilik sebelum membaca nota</label><p class="small">Mulai dengan mencoba nota milik orang lain. Lalu aktifkan kontrol dan periksa pemilik sah, orang lain, serta pengguna tanpa login.</p><form id="access-form"><div class="row">${field('actor','Pengguna yang mencoba membaca nota',scenario.users)}${field('order','Nota yang diminta',scenario.orders.map(o=>({id:o.id,label:o.id})))}</div><button class="primary">Kirim permintaan baca</button></form>${state.model.lastResponse ? `<pre class="response" aria-label="Jawaban permintaan">${escape(state.history.filter(h=>h.action.type==='request').at(-1)?.output || '')}</pre>` : ''}`;
  }

  function query(state, scenario) {
    return `<p>${escape(scenario.notice)}</p><p class="small">SQL adalah bahasa untuk meminta atau mengubah data di database. Query adalah permintaan data tersebut. Parameter mengirim nilai terpisah dari instruksi SQL. Apostrof adalah tanda petik tunggal pada nama seperti O’Neil. Coba SQL sungguhan melalui labs/sql_demo.py setelah membaca bab terkait.</p>${table(['Nama pelanggan','Nota','Status'],scenario.customers.map(c=>[c.name,c.order,c.status]))}<fieldset><legend>Cara aplikasi menyusun query</legend><label class="choice-line"><input type="radio" name="query-mode" value="concat" ${state.model.queryMode==='concat'?'checked':''}> Gabungkan masukan menjadi teks SQL</label><label class="choice-line"><input type="radio" name="query-mode" value="parameter" ${state.model.queryMode==='parameter'?'checked':''}> Kirim masukan sebagai parameter</label></fieldset><form id="query-form">${field('query-case','Masukan yang akan diuji',scenario.cases.map(c=>({id:c.id,label:c.label+' · '+c.value})))}<button class="primary">Jalankan uji pencarian</button></form>${state.model.lastResult ? `<pre class="response" aria-label="Hasil query simulasi">${escape(JSON.stringify(state.model.lastResult,null,2))}</pre>` : ''}`;
  }

  function incident(state, scenario) {
    return `<p>Log adalah catatan kejadian pada sistem. IP adalah alamat perangkat di jaringan. NAT memungkinkan beberapa perangkat memakai satu alamat IP bersama. Baca bukti sebelum memilih tindakan. Memeriksa satu kartu bukti menambahkannya ke catatan pengamatan kamu.</p>${scenario.events.map(event=>`<article class="event"><time>${escape(event.time)}</time> · ${escape(event.source)}<p>${escape(event.text)}</p><button id="event-${escape(event.id)}" data-inspect="${escape(event.id)}">${state.model.inspected.includes(event.id)?'Sudah diperiksa; baca lagi':'Tandai bukti diperiksa'}</button></article>`).join('')}<form id="incident-form">${field('conclusion','Kesimpulan yang didukung bukti',scenario.conclusions)}${field('containment','Tindakan pertama yang sebanding dengan bukti',scenario.containments)}<button class="primary">Kirim catatan pemeriksaan awal</button></form>`;
  }

  function backup(state, scenario) {
    return `<p>Waktu gangguan: <strong>${escape(scenario.incidentTime)}</strong>. Pilih cadangan yang memenuhi kebutuhan kasus, pulihkan, lalu periksa isinya.</p><p><strong>Data yang perlu dipulihkan:</strong> <code>${escape(scenario.requiredText)}</code></p>${table(['Cadangan','Waktu','Pemeriksaan isi'],scenario.backups.map(b=>[b.label,b.time,b.verified?'Sudah diperiksa':'Belum diperiksa']))}<form id="restore-form">${field('backup-id','Cadangan sumber',scenario.backups.map(b=>({id:b.id,label:b.label})),state.model.restoredId || '')}<button class="primary">Pulihkan ke salinan kerja virtual</button></form><div class="response"><strong>Isi salinan kerja saat ini</strong><pre>${escape(state.model.workingText)}</pre></div><div class="actions"><button id="verify-backup">Periksa isi hasil pemulihan</button></div><p class="small">Tidak menghapus berkas asli. Ini model salinan teks; pemulihan database produksi tetap memerlukan pengujian terpisah.</p>`;
  }

  function capstone(state, scenario) {
    return `<p>${escape(scenario.brief)}</p><h3>Bukti yang tersedia</h3><ul>${scenario.evidence.map(e=>`<li>${escape(e)}</li>`).join('')}</ul><form id="capstone-form">${scenario.decisions.map(d=>field('decision-'+d.id,d.label,d.options,state.model.decisions[d.id]||'')).join('')}<button class="primary">Uji rencana penanganan</button></form>${state.model.review.length?`<div class="test-results"><h3>Ulasan keputusan</h3>${state.model.review.map(r=>`<p><strong>${escape(scenario.decisions.find(d=>d.id===r.id).label)}: ${r.correct?'sesuai':'perlu diperbaiki'}</strong><br>${escape(r.explanation)}</p>`).join('')}</div>`:''}`;
  }

  function render(focusId) {
    const mission = currentMission();
    const state = activeState();
    const record = activeRecord();
    const scenario = engine.getScenario(state);
    document.documentElement.dataset.theme = view.theme;
    $('#theme').textContent = view.theme === 'dark' ? 'Tampilan terang' : 'Tampilan gelap';
    document.querySelectorAll('input[name="mode"]').forEach(input => { input.checked = input.value === view.mode; });
    const count = missions.filter(m => states[m.id+':'+view.mode]?.completed).length;
    $('#progress').value = count;
    $('#progress').max = missions.length;
    $('#progress-text').textContent = `${count} dari ${missions.length} misi selesai dalam mode ini`;
    $('#mode-description').textContent = view.mode === 'guided' ? 'Boleh salah. Gunakan petunjuk bila perlu, lalu jelaskan hasilnya.' : 'Data kasus berubah. Tanpa petunjuk; hasil tetap memberi umpan balik. Ini latihan mandiri, bukan sertifikasi.';
    $('#missions').innerHTML = missions.map((m,i)=>`<button class="mission-link" data-mission="${escape(m.id)}" ${m.id===view.current?'aria-current="step"':''}><span class="mission-number">${String(i+1).padStart(2,'0')}</span><span>${escape(m.title)}<small>${states[m.id+':'+view.mode]?.completed?'Selesai pada kasus ini':'Belum selesai'}</small></span></button>`).join('');
    const renderer = {terminal,phishing,network,access,query,incident,backup,capstone}[mission.kind];
    const hints = mission.hints.slice(0,record.hints);
    const evidence = readableEvidence(state,scenario);
    const feedback = lastFeedback || state.history.at(-1)?.feedback;
    $('#mission').innerHTML = `<header><p class="mission-meta">Misi ${missions.indexOf(mission)+1} / ${missions.length} · ${view.mode==='guided'?'Belajar':'Ujian kasus berbeda'} · ${escape(scenario.label)}</p><h1>${escape(mission.title)}</h1><p class="brief">${escape(mission.brief)}</p><div class="objective"><strong>Tugas kamu</strong><p>${escape(mission.objective)}</p></div><details class="concept"><summary>Pahami istilah dan konsep misi</summary><p>${escape(mission.concept)}</p></details></header>
      <section class="workbench" aria-label="Meja praktik"><div class="bench-title"><h2>Meja praktik</h2><span>Data buatan · bebas mencoba</span></div><div class="bench-content">${renderer(state,scenario)}</div></section>
      <section id="feedback" tabindex="-1" class="feedback ${feedback && !feedback.ok?'error':''}${feedback?'':' pending'}"><h2>${escape(feedback?.title || 'Mulai dengan satu tindakan')}</h2><p>${escape(feedback?.message || 'Baca tugas, lakukan percobaan, lalu lihat perubahan hasil. Belum ada tindakan yang dinilai.')}</p></section>
      <section class="support"><h2>Butuh arah?</h2>${view.mode==='guided'?`<p class="small">Petunjuk dicatat sebagai bantuan. Kamu masih perlu menjalankan tindakan sendiri.</p><button id="hint" ${record.hints>=mission.hints.length?'disabled':''}>${record.hints>=mission.hints.length?'Semua petunjuk sudah dibuka':'Buka petunjuk berikutnya ('+record.hints+'/'+mission.hints.length+')'}</button>${hints.length?`<ol class="hint-list">${hints.map(h=>`<li>${escape(h)}</li>`).join('')}</ol>`:''}`:'<p>Mode ujian tidak menyediakan petunjuk. Kamu bisa pindah ke mode belajar; progres kedua mode terpisah.</p>'}</section>
      <section class="evidence"><h2>Bukti tindakan kamu</h2>${evidence.length?`<ul>${evidence.map(e=>`<li>${escape(e)}</li>`).join('')}</ul>`:'<p class="empty">Belum ada bukti. Jalankan tindakan pada meja praktik untuk mulai mencatat hasil.</p>'}<p class="small">${state.attempts} tindakan · ${record.hints} petunjuk dibuka</p></section>
      <section class="reflection"><label for="reflection">Jelaskan dengan kata-katamu</label><p class="small" id="reflection-help">Apa yang kamu ubah, apa buktinya, dan apa yang belum bisa disimpulkan? Catatan ini bagian refleksi; isi tulisan tidak dinilai otomatis.</p><textarea id="reflection" maxlength="3000" aria-describedby="reflection-help" placeholder="Saya mengamati… Lalu saya mencoba… Hasilnya…">${escape(record.reflection)}</textarea></section>
      ${state.completed?`<section class="completion"><h2>Kasus ini selesai.</h2><p>${record.hints?'Kamu menyelesaikannya dengan bantuan. Ulangi melalui kasus ujian untuk memeriksa pemahaman.':'Kamu berhasil pada aturan kasus ini. Jelaskan alasannya dan lanjutkan praktik di bab terkait.'}</p></section>`:''}
      <div class="next-step"><a href="${escape(mission.chapter)}">Baca bab dan praktik lanjutannya</a><button id="reset-open">Ulangi misi ini</button>${state.completed?'<button id="next" class="primary">'+(missions.indexOf(mission)===missions.length-1?'Unduh ringkasan hasil':'Lanjut ke misi berikutnya')+'</button>':''}</div>`;
    updateReadingLinks();
    bindMission();
    if(focusId) document.getElementById(focusId)?.focus({preventScroll:true});
  }

  function send(action, focusId) {
    const formValues = [...$('#mission').querySelectorAll('select')].map(x=>[x.id,x.value]);
    const record = activeRecord();
    if(record.actions.length >= 1000) {
      lastFeedback={ok:false,title:'Catatan percobaan sudah penuh',message:'Unduh catatan, lalu ulangi misi ini untuk memulai sesi baru.'};
      render(); return;
    }
    try {
      const result = engine.act(activeState(), action);
      states[recordKey()] = result.state;
      record.actions.push(action);
      lastFeedback = result.feedback;
      save(); render(focusId || 'feedback');
      $('#announcer').textContent=result.feedback.title+'. '+result.feedback.message;
      for(const [id,value] of formValues) { const el=document.getElementById(id); if(el) el.value=value; }
    } catch (_) {
      lastFeedback={ok:false,title:'Tindakan belum bisa diproses',message:'Periksa pilihanmu dan coba lagi. Bila tetap gagal, unduh catatan lalu ulangi misi ini.'};
      render(focusId);
    }
  }

  function bindMission() {
    $('#terminal-form')?.addEventListener('submit', event=>{event.preventDefault();send({type:'command',value:$('#command').value.trim()},'command');});
    const syncCursor = () => { const input=$('#command'); input?.closest('.terminal-input')?.classList.toggle('typing', !!input && input.value.length>0); };
    $('#command')?.addEventListener('input', syncCursor);
    document.querySelectorAll('[data-command]').forEach(button=>button.addEventListener('click',()=>{$('#command').value=button.dataset.command;$('#command').focus();syncCursor();}));
    document.querySelectorAll('[data-inspect]').forEach(button=>button.addEventListener('click',()=>send({type:'inspect',id:button.dataset.inspect},button.id)));
    document.querySelectorAll('.phishing-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const id=form.dataset.message;send({type:'classify',id,classification:document.getElementById('classification-'+id).value,reason:document.getElementById('reason-'+id).value});}));
    document.querySelectorAll('[data-flow]').forEach(input=>input.addEventListener('change',()=>send({type:'rule',id:input.dataset.flow,allow:input.checked},input.id)));
    $('#network-test')?.addEventListener('click',()=>send({type:'test'},'network-test'));
    $('#owner-policy')?.addEventListener('change',event=>send({type:'policy',enabled:event.target.checked},'owner-policy'));
    $('#access-form')?.addEventListener('submit',event=>{event.preventDefault();send({type:'request',actor:$('#actor').value,orderId:$('#order').value},'actor');});
    document.querySelectorAll('[name="query-mode"]').forEach(input=>input.addEventListener('change',()=>send({type:'query-mode',mode:input.value})));
    $('#query-form')?.addEventListener('submit',event=>{event.preventDefault();send({type:'query-test',caseId:$('#query-case').value},'query-case');});
    $('#incident-form')?.addEventListener('submit',event=>{event.preventDefault();send({type:'submit',conclusion:$('#conclusion').value,containment:$('#containment').value},'conclusion');});
    $('#restore-form')?.addEventListener('submit',event=>{event.preventDefault();send({type:'restore',id:$('#backup-id').value},'backup-id');});
    $('#verify-backup')?.addEventListener('click',()=>send({type:'verify'},'verify-backup'));
    $('#capstone-form')?.addEventListener('submit',event=>{event.preventDefault();for(const decision of engine.getScenario(activeState()).decisions) send({type:'decision',id:decision.id,value:document.getElementById('decision-'+decision.id).value});send({type:'submit'});});
    $('#hint')?.addEventListener('click',()=>{
      const result=engine.hint(activeState());states[recordKey()]=result.state;activeRecord().hints=result.state.hintsUsed;lastFeedback={ok:true,title:'Petunjuk dibuka',message:result.text};save();render(activeRecord().hints>=currentMission().hints.length?'feedback':'hint');
      $('#announcer').textContent=result.text;
    });
    $('#reflection').addEventListener('input',event=>{activeRecord().reflection=event.target.value;save();});
    $('#reset-open').addEventListener('click',()=>$('#reset-dialog').showModal());
    $('#next')?.addEventListener('click',()=>{
      const index=missions.findIndex(m=>m.id===view.current);
      if(index<missions.length-1) selectMission(missions[index+1].id);
      else downloadReport();
    });
  }

  function selectMission(id) {
    view.current=id;lastFeedback=null;save();render();
    if(matchMedia('(max-width:700px)').matches) $('#mission-navigation').open=false;
    $('#workspace').focus({preventScroll:true});$('#workspace').scrollIntoView({block:'start'});
  }

  function downloadReport() {
    const report={title:'Catatan latihan Laundry Aman',createdAt:new Date().toISOString(),notice:'Data sintetis. Hasil kasus latihan, bukan sertifikasi atau ukuran penguasaan seluruh cybersecurity.',results:[]};
    for(const mission of missions) for(const mode of ['guided','exam']) {
      const id=mission.id+':'+mode;const state=states[id];if(!state)continue;
      report.results.push({mission:mission.title,mode,completed:state.completed,attempts:state.attempts,hintsUsed:state.hintsUsed,evidence:state.evidence,reflection:view.records[id]?.reflection||'',history:state.history});
    }
    const url=URL.createObjectURL(new Blob([JSON.stringify(report,null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download='catatan-laundry-aman.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    $('#storage-status').textContent='Catatan disiapkan sebagai catatan-laundry-aman.json. Periksa folder Unduhan browser kamu.';
  }

  function initialize() {
    if(!Array.isArray(missions)||!engine) throw new Error('Berkas simulator belum lengkap');
    load();render();save();
    if(matchMedia('(max-width:700px)').matches) $('#mission-navigation').open=false;
    $('#missions').addEventListener('click',event=>{const target=event.target.closest('[data-mission]');if(target)selectMission(target.dataset.mission);});
    document.querySelectorAll('[name="mode"]').forEach(input=>input.addEventListener('change',()=>{view.mode=input.value;lastFeedback=null;save();render();}));
    $('#theme').addEventListener('click',()=>{view.theme=view.theme==='dark'?'light':'dark';save();render();$('#theme').focus();});
    $('#export').addEventListener('click',downloadReport);
    $('#help-open').addEventListener('click',()=>$('#help-dialog').showModal());
    $('#reset-cancel').addEventListener('click',()=>$('#reset-dialog').close());
    $('#reset-confirm').addEventListener('click',()=>{delete states[recordKey()];delete view.records[recordKey()];lastFeedback=null;$('#reset-dialog').close();save();render();$('#workspace').focus();});
  }
  try { initialize(); }
  catch (_) { $('#mission').innerHTML='<div class="fatal"><h1>Latihan belum bisa dimuat</h1><p>Muat ulang halaman. Jika memakai unduhan, ekstrak seluruh folder simulator dan pastikan index.html, styles.css, scenarios.js, engine.js, dan app.js berada di folder yang sama.</p><a href="../README.md">Baca panduan membuka tutorial</a></div>'; updateReadingLinks(); }
})();
