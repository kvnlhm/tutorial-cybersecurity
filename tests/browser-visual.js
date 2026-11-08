async(page) => {
  await page.evaluate(()=>localStorage.removeItem('laundry-aman-training-v1'));
  await page.setViewportSize({width:1440,height:1000});await page.reload();
  const ratios=[];
  async function contrast(theme) {
    const values=await page.evaluate(()=>{
      const styles=getComputedStyle(document.documentElement);
      const l=hex=>{let c=hex.trim().replace('#','');if(c.length===3)c=[...c].map(x=>x+x).join('');const rgb=[0,2,4].map(i=>parseInt(c.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];};
      return [['--ink','--paper'],['--muted','--paper'],['--muted','--surface'],['--muted','--soft'],['--green','--paper'],['--on-green','--green'],['--danger','--soft'],['--terminal-ink','--terminal']].map(([a,b])=>{const x=l(styles.getPropertyValue(a)),y=l(styles.getPropertyValue(b));return {pair:a+'/'+b,ratio:(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};});
    });
    for(const item of values){if(!Number.isFinite(item.ratio)||item.ratio<4.5)throw Error(theme+' '+item.pair+' contrast '+item.ratio);ratios.push({theme,...item});}
  }
  await contrast('dark');await page.screenshot({path:'artifacts/desktop-dark.png',fullPage:true});
  await page.locator('#theme').click();await contrast('light');await page.screenshot({path:'artifacts/desktop-light.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.reload();await page.screenshot({path:'artifacts/mobile-light.png',fullPage:true});
  await page.locator('#theme').click();await page.screenshot({path:'artifacts/mobile-dark.png',fullPage:true});
  for(const width of [320,390,768,1440]){
    await page.setViewportSize({width,height:900});
    for(const id of ['terminal','phishing','network','access','query','incident','backup','capstone']){
      await page.locator('#mission-navigation').evaluate(el=>el.open=true);await page.locator(`[data-mission="${id}"]`).click();
      if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Overflow '+width+' '+id);
    }
  }
  await page.setViewportSize({width:1440,height:1000});await page.locator('[data-mission=terminal]').click();
  await page.evaluate(()=>scrollTo(0,0));
  return {status:'PASS',layouts:'8 missions at 320/390/768/1440',contrast:ratios};
}
