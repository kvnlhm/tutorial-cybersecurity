const { test } = require('node:test');
const assert = require('node:assert/strict');
const engine = require('../simulator/engine.js');
const missions = require('../simulator/scenarios.js');

function actions(id, list, mode = 'guided') {
  let state = engine.createSession(id, mode);
  for (const action of list) state = engine.act(state, action).state;
  return state;
}
const command = value => ({ type: 'command', value });
const request = (actor, orderId) => ({ type: 'request', actor, orderId });
const terminalActions = ['pwd', 'ls', 'cd catatan', 'cat jadwal.txt'].map(command);
const accessActions = [request('alice', 'LA-102'), { type: 'policy', enabled: true }, request('alice', 'LA-101'), request('alice', 'LA-102'), request('anonymous', 'LA-101')];
const queryActions = [{ type: 'query-test', caseId: 'attack' }, { type: 'query-mode', mode: 'parameter' }, ...['normal', 'apostrophe', 'attack'].map(caseId => ({ type: 'query-test', caseId }))];

test('catalog has eight distinct missions and distinct exam facts', () => {
  assert.equal(missions.length, 8);
  for (const mission of missions) {
    assert.notDeepEqual(mission.guided, mission.exam);
    assert.equal(mission.hints.length, 3);
  }
});

test('terminal completes only after location, listing and target file evidence', () => {
  assert.equal(actions('terminal', terminalActions).completed, true);
  assert.equal(actions('terminal', [command('cat /laundry/catatan/jadwal.txt')]).completed, false);
});

test('terminal normalizes parent paths in different exam start location', () => {
  const state = actions('terminal', ['pwd', 'ls', 'cd ../serah-terima', 'cat tutup.txt'].map(command), 'exam');
  assert.equal(state.completed, true);
  assert.equal(state.model.cwd, '/laundry/serah-terima');
});

test('terminal rejects shell execution and paths outside virtual root', () => {
  let state = engine.createSession('terminal');
  for (const value of ['ls; whoami', 'cat /etc/passwd', 'cd ../../', 'curl example.com', 'cat $(whoami)']) {
    const result = engine.act(state, command(value));
    assert.equal(result.feedback.ok, false);
    assert.equal(result.state.completed, false);
    assert.equal(result.state.model.cwd, '/laundry');
    state = result.state;
  }
});

test('terminal missing files do not count as read evidence', () => {
  const state = actions('terminal', ['pwd', 'ls', 'cat tidak-ada.txt'].map(command));
  assert.equal(state.completed, false);
  assert.equal(state.evidence.includes('target-read'), false);
});

test('phishing requires inspection and correct reasoning for both messages', () => {
  const state = actions('phishing', [
    { type: 'inspect', id: 'diskon' }, { type: 'classify', id: 'diskon', classification: 'phishing', reason: 'secret-domain' },
    { type: 'inspect', id: 'jadwal' }, { type: 'classify', id: 'jadwal', classification: 'legit', reason: 'confirmed' }
  ]);
  assert.equal(state.completed, true);
});

test('phishing cannot pass by classification alone before reading details', () => {
  const state = actions('phishing', [{ type: 'classify', id: 'diskon', classification: 'phishing', reason: 'secret-domain' }]);
  assert.equal(state.completed, false);
  assert.equal(Object.keys(state.model.answers).length, 0);
});

test('phishing changing a correct answer to wrong reason revokes completion', () => {
  let state = actions('phishing', [{ type: 'inspect', id: 'diskon' }, { type: 'inspect', id: 'jadwal' },
    { type: 'classify', id: 'diskon', classification: 'phishing', reason: 'secret-domain' },
    { type: 'classify', id: 'jadwal', classification: 'legit', reason: 'confirmed' }]);
  state = engine.act(state, { type: 'classify', id: 'diskon', classification: 'phishing', reason: 'logo' }).state;
  assert.equal(state.completed, false);
});

test('exam phishing requires unsafe-file evidence despite matching sender domain', () => {
  const state = actions('phishing', [{ type: 'inspect', id: 'invoice' }, { type: 'inspect', id: 'air' },
    { type: 'classify', id: 'invoice', classification: 'phishing', reason: 'unsafe-file' },
    { type: 'classify', id: 'air', classification: 'legit', reason: 'confirmed' }], 'exam');
  assert.equal(state.completed, true);
});

test('network preserves necessary work while denying guest administration', () => {
  const state = actions('network', [{ type: 'rule', id: 'guest-pos', allow: false }, { type: 'test' }]);
  assert.equal(state.completed, true);
  assert.equal(state.model.results.length, 4);
  assert.equal(state.model.results.every(row => row.passed), true);
});

test('network deny all fails legitimate traffic and edits invalidate stale test evidence', () => {
  let state = actions('network', ['guest-web', 'guest-pos', 'pos-app', 'app-db'].map(id => ({ type: 'rule', id, allow: false })).concat({ type: 'test' }));
  assert.equal(state.completed, false);
  assert.equal(state.model.results.filter(r => r.passed).length, 1);
  state = actions('network', [{ type: 'rule', id: 'guest-pos', allow: false }, { type: 'test' }]);
  state = engine.act(state, { type: 'rule', id: 'guest-pos', allow: true }).state;
  assert.equal(state.completed, false);
  assert.deepEqual(state.model.results, []);
});

test('network exam applies vendor termination and backup service policy', () => {
  const state = actions('network', [{ type: 'rule', id: 'branch-app', allow: true }, { type: 'rule', id: 'backup-store', allow: true }, { type: 'test' }], 'exam');
  assert.equal(state.completed, true);
});

test('access requires a reproduced leak and three safe retests', () => {
  const state = actions('access', accessActions);
  assert.equal(state.completed, true);
  assert.equal(state.model.lastResponse.allowed, false);
  assert.equal(state.model.lastResponse.data, null);
});

test('access denying everything or testing one path cannot complete', () => {
  const state = actions('access', [{ type: 'policy', enabled: true }, request('alice', 'LA-102')]);
  assert.equal(state.completed, false);
});

test('access turning protection off revokes safe retest evidence', () => {
  let state = actions('access', accessActions);
  state = engine.act(state, { type: 'policy', enabled: false }).state;
  assert.equal(state.completed, false);
  state = engine.act(state, { type: 'policy', enabled: true }).state;
  assert.equal(state.completed, false);
});

test('access does not grant requests for unknown identities or missing objects', () => {
  const initial = engine.createSession('access');
  for (const [actor, orderId] of [['mallory', 'LA-101'], ['alice', 'LA-999']]) {
    const result = engine.act(initial, request(actor, orderId));
    assert.equal(result.feedback.ok, false);
    assert.equal(result.state.evidence.length, 0);
  }
});

test('access exam distinguishes randomly named object ownership', () => {
  const state = actions('access', [request('rani', 'N-8Q2'), { type: 'policy', enabled: true }, request('rani', 'N-4Z7'), request('rani', 'N-8Q2'), request('anonymous', 'N-8Q2')], 'exam');
  assert.equal(state.completed, true);
});

test('query demonstrates leak and preserves apostrophe data with parameters', () => {
  const state = actions('query', queryActions);
  assert.equal(state.completed, true);
  assert.deepEqual(state.model.lastResult.rows, []);
  const apostrophe = engine.act(state, { type: 'query-test', caseId: 'apostrophe' }).state;
  assert.equal(apostrophe.model.lastResult.rows[0].name, "O'Neil");
});

test('query changing implementation invalidates all prior safe tests', () => {
  let state = actions('query', queryActions);
  state = engine.act(state, { type: 'query-mode', mode: 'concat' }).state;
  assert.equal(state.completed, false);
  state = engine.act(state, { type: 'query-mode', mode: 'parameter' }).state;
  assert.equal(state.completed, false);
});

test('query exam treats DAngelo apostrophe as a normal value', () => {
  const state = actions('query', queryActions, 'exam');
  assert.equal(state.completed, true);
  const result = engine.act(state, { type: 'query-test', caseId: 'apostrophe' });
  assert.equal(result.state.model.lastResult.rows[0].name, "D'Angelo");
});

test('incident cannot conclude before inspecting evidence', () => {
  const state = actions('incident', [{ type: 'submit', conclusion: 'unknown', containment: 'verify' }]);
  assert.equal(state.completed, false);
});

test('incident separates uncertainty from definite unauthorized access in exam', () => {
  const guided = actions('incident', ['gagal', 'sukses', 'konteks'].map(id => ({ type: 'inspect', id })).concat({ type: 'submit', conclusion: 'unknown', containment: 'verify' }));
  assert.equal(guided.completed, true);
  const exam = actions('incident', ['login', 'export', 'owner'].map(id => ({ type: 'inspect', id })).concat({ type: 'submit', conclusion: 'unauthorized', containment: 'revoke' }), 'exam');
  assert.equal(exam.completed, true);
});

test('incident destructive containment fails even with right conclusion', () => {
  const state = actions('incident', ['gagal', 'sukses', 'konteks'].map(id => ({ type: 'inspect', id })).concat({ type: 'submit', conclusion: 'unknown', containment: 'erase' }));
  assert.equal(state.completed, false);
});

test('backup requires a restore then verified content matching the business need', () => {
  assert.equal(actions('backup', [{ type: 'verify' }]).completed, false);
  assert.equal(actions('backup', [{ type: 'restore', id: 'sebelum' }]).completed, false);
  const state = actions('backup', [{ type: 'restore', id: 'sebelum' }, { type: 'verify' }]);
  assert.equal(state.completed, true);
  assert.equal(state.model.workingText, 'LA-101:21000\nLA-102:35000');
});

test('backup most recent corrupt and old incomplete backup both fail verification', () => {
  for (const id of ['pagi', 'terbaru']) assert.equal(actions('backup', [{ type: 'restore', id }, { type: 'verify' }]).completed, false);
});

test('backup changing restore after success revokes completed and verified state', () => {
  let state = actions('backup', [{ type: 'restore', id: 'sebelum' }, { type: 'verify' }]);
  state = engine.act(state, { type: 'restore', id: 'terbaru' }).state;
  assert.equal(state.completed, false);
  assert.equal(state.model.verified, false);
});

test('backup exam restores independent copy, not the latest replica', () => {
  const state = actions('backup', [{ type: 'restore', id: 'offline' }, { type: 'verify' }], 'exam');
  assert.equal(state.completed, true);
});

test('capstone requires all four decisions and a submitted review', () => {
  const list = Object.entries({ fix: 'owner', evidence: 'minimum', retest: 'both', restore: 'verified-copy' }).map(([id, value]) => ({ type: 'decision', id, value }));
  assert.equal(actions('capstone', list).completed, false);
  assert.equal(actions('capstone', list.concat({ type: 'submit' })).completed, true);
});

test('capstone exam transfers to branch authorization and unsupported attribution', () => {
  const state = actions('capstone', Object.entries({ fix: 'branch', contain: 'revoke', claim: 'supported', restore: 'separate' }).map(([id, value]) => ({ type: 'decision', id, value })).concat({ type: 'submit' }), 'exam');
  assert.equal(state.completed, true);
  const changed = engine.act(state, { type: 'decision', id: 'fix', value: 'global' }).state;
  assert.equal(changed.completed, false);
});

test('hints are sequential, capped and cannot complete a mission', () => {
  let state = engine.createSession('terminal');
  for (let i = 0; i < 5; i++) {
    const result = engine.hint(state);
    assert.ok(result.text.length > 0);
    assert.equal(result.state.completed, false);
    state = result.state;
  }
  assert.equal(state.hintsUsed, 3);
});

test('exam mode never records a hint as used or exposes guided hints', () => {
  const state = engine.createSession('terminal', 'exam');
  const result = engine.hint(state);
  assert.equal(result.state.hintsUsed, 0);
  assert.match(result.text, /ujian/i);
});

test('engine leaves incoming state untouched and rejects arbitrary completion action', () => {
  const initial = engine.createSession('terminal');
  const snapshot = JSON.stringify(initial);
  engine.act(initial, command('pwd'));
  engine.hint(initial);
  assert.equal(JSON.stringify(initial), snapshot);
  const result = engine.act(initial, { type: 'complete', completed: true });
  assert.equal(result.state.completed, false);
  assert.equal(result.feedback.ok, false);
});

test('unknown mission or mode is rejected instead of returning broken session', () => {
  assert.throws(() => engine.createSession('unknown'), /misi/i);
  assert.throws(() => engine.createSession('terminal', 'cheat'), /mode/i);
});

test('saved progress is rebuilt from actions and ignores forged model or completion', () => {
  assert.equal(typeof engine.restoreSession, 'function');
  const forged = { ...engine.createSession('terminal'), completed: true, evidence: ['target-read'], model: { cwd: '/private' } };
  const restored = engine.restoreSession(forged);
  assert.equal(restored.completed, false);
  assert.equal(restored.model.cwd, '/laundry');
  const real = actions('terminal', terminalActions);
  assert.equal(engine.restoreSession(JSON.parse(JSON.stringify(real))).completed, true);
});

test('saved progress rejects invalid records and clamps hint metadata', () => {
  assert.equal(typeof engine.restoreSession, 'function');
  assert.throws(() => engine.restoreSession(null), /progres/i);
  const exam = engine.createSession('terminal', 'exam');
  exam.hintsUsed = 999;
  assert.equal(engine.restoreSession(exam).hintsUsed, 0);
  const guided = engine.createSession('terminal');
  guided.hintsUsed = 999;
  assert.equal(engine.restoreSession(guided).hintsUsed, 3);
});
