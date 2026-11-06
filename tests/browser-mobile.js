async (page) => {
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const context = await page.context().browser().newContext({
    viewport: {width: 360, height: 800}, isMobile: true, hasTouch: true, deviceScaleFactor: 2
  });
  const tab = await context.newPage();
  const errors = [];
  tab.on('pageerror', error => errors.push(error.message));
  const target = page.url();
  try {
    await tab.goto(target);
    await tab.locator('#command').waitFor();
    const hosted = new URL(tab.url()).hostname === 'kvnlhm.github.io';
    assert(await tab.locator('#mission-navigation').evaluate(el => !el.open), 'Menu ponsel dimulai tertutup');
    await tab.locator('#help-open').tap();
    assert(await tab.locator('#help-dialog').isVisible(), 'Petunjuk dapat dibuka dengan sentuhan');
    await tab.locator('#help-dialog button').tap();
    for (const value of ['pwd', 'ls', 'cd catatan', 'cat jadwal.txt']) {
      await tab.locator('#command').fill(value);
      await tab.locator('#terminal-form button').tap();
    }
    assert(await tab.locator('.completion').count() === 1, 'Terminal selesai lewat tombol sentuh');
    await tab.locator('#reflection').fill('Saya menemukan jadwal melalui lokasi dan daftar folder.');
    await tab.locator('#next').tap();
    for (const [id, classification, reason] of [['diskon', 'phishing', 'secret-domain'], ['jadwal', 'legit', 'confirmed']]) {
      await tab.locator('#inspect-' + id).tap();
      await tab.locator('#classification-' + id).selectOption(classification);
      await tab.locator('#reason-' + id).selectOption(reason);
      await tab.locator(`form[data-message="${id}"] button`).tap();
    }
    assert(await tab.locator('.completion').count() === 1, 'Pesan dan alasan selesai lewat form ponsel');
    await tab.locator('#mission-navigation summary').tap();
    await tab.locator('input[name="mode"][value="exam"]').tap();
    await tab.locator('[data-mission="terminal"]').tap();
    assert(await tab.locator('#hint').count() === 0, 'Mode ujian ponsel tanpa petunjuk');
    for (const value of ['pwd', 'ls', 'cd ../serah-terima', 'cat tutup.txt']) {
      await tab.locator('#command').fill(value);
      await tab.locator('#terminal-form button').tap();
    }
    assert(await tab.locator('.completion').count() === 1, 'Kasus ujian terminal selesai di ponsel');
    await tab.reload();
    assert(await tab.locator('.completion').count() === 1, 'Progres ponsel bertahan setelah reload');
    for (const width of [320, 360, 390, 768]) {
      await tab.setViewportSize({width, height: 844});
      assert(await tab.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Halaman tidak meluber pada ' + width);
    }
    await tab.setViewportSize({width: 390, height: 844});
    await tab.locator('#command').blur();
    await tab.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
    await tab.screenshot({path: 'artifacts/published-mobile.png', fullPage: true});
    await tab.setViewportSize({width: 844, height: 390});
    assert(await tab.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Orientasi mendatar tidak meluber');
    const href = await tab.locator('.next-step a').getAttribute('href');
    if (hosted) {
      assert(href.startsWith('https://github.com/kvnlhm/tutorial-cybersecurity/blob/main/materi/'), 'Bab online menuju dokumen GitHub');
      const navigation = tab.waitForNavigation({waitUntil: 'domcontentloaded'});
      await tab.locator('.next-step a').tap();
      const response = await navigation;
      assert(response && response.ok(), 'Bab GitHub dapat dibuka dari HP');
      await tab.goBack();
      await tab.locator('.completion').waitFor();
    } else {
      assert(href.startsWith('../materi/'), 'Bab lokal mempertahankan tautan relatif');
    }
    assert(errors.length === 0, 'Tidak ada JavaScript error: ' + errors.join('; '));
    return {status: 'PASS',hosted,checks: ['touch controls', 'terminal guided/exam', 'phishing form', 'reload progress', '320/360/390/768 widths', 'landscape', 'reading link', 'console']};
  } finally {
    await context.close();
  }
}
