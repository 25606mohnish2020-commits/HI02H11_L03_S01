const {chromium}=require('C:/Users/Siddharth Sharma/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true,args:['--autoplay-policy=no-user-gesture-required']});
 const page=await browser.newPage({viewport:{width:1600,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8769/HI02H11_L03_S01_poem.html?dev=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>typeof mountSlide==='function');
 await page.evaluate(()=>{
  document.querySelector('#startGate')?.classList.add('hidden');document.body.classList.remove('is-start');document.body.classList.add('loaded');document.querySelector('#bootLoader')?.remove();
  stopAudio();oceanSay=(key,done)=>{if(done)setTimeout(done,5)};
  mountSlide(CARD.slides.findIndex(s=>s.type==='SUBMARINE_FILL'));
 });
 await page.waitForFunction(()=>document.querySelectorAll('.subg-opt').length===2&&!state.locked,{},{timeout:20000});
 await page.screenshot({path:__dirname+'/submarine-review.png'});
 console.log('initial',await page.evaluate(()=>({locked:state.locked,rows:[...document.querySelectorAll('.subg-sentence-row')].map(r=>({text:r.textContent,w:r.clientWidth,scroll:r.scrollWidth})),errors:[]})));
 async function drag(form,target){
  const tile=page.locator('.subg-opt:not(.gone)').filter({hasText:await page.evaluate(f=>[...document.querySelectorAll('.subg-opt')].find(t=>t.__form===f).dataset.word,form)}).first();
  const a=await tile.boundingBox();
  const b=await page.evaluate(f=>{const r=[...document.querySelectorAll('.subg-win.dd-zone')].find(w=>w.__form===f).getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height}},target);
  await page.mouse.move(a.x+a.width/2,a.y+a.height/2);await page.mouse.down();
  await page.mouse.move(b.x+b.width/2,b.y+b.height/2,{steps:15});await page.mouse.up();await page.waitForTimeout(800);
 }
 await drag('one','many');
 assert.equal(await page.locator('.context-hint,.subg-ghost').count(),0);
 await drag('one','many');
 assert.ok(await page.locator('.context-hint').count()>0);
 assert.equal(await page.locator('.subg-sentence-row:has(.context-hint)').count(),1);
 await drag('many','one');
 assert.equal(await page.locator('.context-hint,.subg-ghost').count(),0);
 await drag('one','many');
 assert.equal(await page.locator('.subg-ghost').count(),1);
 assert.equal(await page.locator('.subg-ghost').getAttribute('data-form'),'many');
 await page.waitForTimeout(850);
 await page.screenshot({path:__dirname+'/ghost-review.png'});
 await drag('many','many');
 assert.equal(await page.locator('.subg-win.filled').count(),1);
 assert.equal(await page.locator('.subg-win.dd-zone').count(),1);
 assert.equal(await page.locator('.subg-ghost').count(),0);
 await page.waitForTimeout(7200);
 assert.equal(await page.locator('.completed.idle-hint,.completed.hint-target').count(),0);
 await drag('one','one');
 await page.waitForTimeout(2200);
 assert.equal(await page.locator('.subg-win.dd-zone').count(),2);
 assert.equal(await page.locator('.subg-sentence-row.completed').count(),0);
 for(let pair=0;pair<5;pair++){
  await page.waitForFunction(()=>!state.locked&&document.querySelectorAll('.subg-win.dd-zone').length===2);
  if(pair===1){await page.setViewportSize({width:1024,height:768});await page.screenshot({path:__dirname+'/tablet-review.png'});}
  assert.ok(await page.evaluate(()=>[...document.querySelectorAll('.subg-sentence-row')].every(r=>r.scrollWidth<=r.clientWidth+1)));
  await drag('one','one');await drag('many','many');await page.waitForTimeout(2400);
 }
 await page.waitForTimeout(5000);
 console.log('completed submarine',await page.evaluate(()=>({index:state.idx,progress:document.querySelector('.subg-progress')?.getAttribute('aria-valuenow')})));
 await page.setViewportSize({width:1600,height:900});
 const slides=await page.evaluate(()=>CARD.slides.map((s,i)=>({i,type:s.type})));
 for(const slide of slides){
  await page.evaluate(i=>{stopAudio();mountSlide(i)},slide.i);await page.waitForTimeout(350);
  assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.offsetWidth&&i.complete&&i.currentSrc&&!i.naturalWidth).length),0,'broken image: '+slide.type);
 }
 await page.evaluate(()=>{stopAudio();mountSlide(CARD.slides.findIndex(s=>s.type==='PICK_VACHAN_WORD'))});
 await page.waitForTimeout(1500);
 await page.evaluate(()=>{const t=[...document.querySelectorAll('.pvw-opt')].find(e=>e.textContent==='मछलियाँ');_placeNudge(t,document.querySelector('#nudgeHand'));document.querySelector('#nudgeHand').classList.add('show')});
 await page.screenshot({path:__dirname+'/practice-hand-review.png'});
 const overlap=await page.evaluate(()=>{const a=[...document.querySelectorAll('.pvw-opt')].find(e=>e.textContent==='मछलियाँ').getBoundingClientRect(),b=document.querySelector('#nudgeHand').getBoundingClientRect();return a.bottom-b.top});
 assert.ok(overlap>0,'hand overlaps target edge');
 console.log('PASS sentence-specific attempts, contextual clue, correct ghost, solved lock, all 12 answers, 18 screen smoke checks, hand overlap',overlap,errors);
 assert.deepEqual(errors,[]);
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
