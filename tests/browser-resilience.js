async (page) => {
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};
  const results=[];
  const browser=page.context().browser();
  for(const mode of ['blocked','corrupt','file']) {
    const context=await browser.newContext();
    const tab=await context.newPage();
    try {
      if(mode==='blocked')await tab.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('Disabled','SecurityError');};});
      if(mode==='corrupt')await tab.addInitScript(()=>{localStorage.setItem('laundry-aman-training-v1','{broken');});
      const target=mode==='file'?'file:///C:/laragon/www/cybesecurity-sampai-jago/simulator/index.html':'http://127.0.0.1:8765/simulator/';
      await tab.goto(target);
      assert(await tab.locator('#command').isVisible(),mode+': app tetap bisa dibuka');
      if(mode==='blocked')assert((await tab.locator('#storage-status').innerText()).includes('tidak mengizinkan'), 'Pesan storage ditolak terlihat');
      if(mode==='corrupt')assert((await tab.locator('#storage-status').innerText()).includes('tidak dapat dibaca'), 'Pesan data rusak terlihat');
      for(const value of ['pwd','ls','cd catatan','cat jadwal.txt']){await tab.locator('#command').fill(value);await tab.locator('#command').press('Enter');}
      assert(await tab.locator('.completion').count()===1,mode+': tugas selesai');
      results.push(mode+': PASS');
    } finally {await context.close();}
  }
  await page.setViewportSize({width:390,height:844});await page.reload();
  assert(!await page.locator('#mission-navigation').getAttribute('open'),'Navigasi ringkas saat ponsel');
  for(const id of ['terminal','phishing','network','access','query','incident','backup','capstone']){
    await page.locator('#mission-navigation summary').click();await page.locator(`[data-mission="${id}"]`).click();
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+': tidak overflow pada390px');
  }
  await page.locator('#help-open').click();await page.keyboard.press('Escape');
  assert(await page.evaluate(()=>document.activeElement.id)==='help-open','Fokus kembali setelah dialog');
  await page.keyboard.press('Tab');
  assert(await page.evaluate(()=>document.activeElement.tagName!=='BODY'),'Navigasi keyboard bekerja');
  results.push('mobile390,8misi,Escape,Tab: PASS');
  await page.context().setOffline(true);
  try {await page.locator('#theme').click();assert(await page.locator('html').getAttribute('data-theme')==='dark','Interaksi offline tanpa request');results.push('interaksi offline: PASS');}
  finally {await page.context().setOffline(false);}
  await page.locator('#theme').click();
  return results;
}
