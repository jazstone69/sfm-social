const { chromium } = require('playwright');
const fs = require('fs');
const css = `
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1350px;background:#14213d;color:#f5efe0;font-family:Inter,sans-serif;position:relative;overflow:hidden}
.frame{position:absolute;inset:36px;border:3px solid #d4a73a;border-radius:28px}
.dia{position:absolute;color:#d4a73a;font-size:56px}
.wrap{position:absolute;inset:110px 100px 150px 100px;display:flex;flex-direction:column;justify-content:center;gap:40px}
h1{font-family:'Inter Display',Inter;font-weight:900;font-size:92px;line-height:1.02;letter-spacing:-1px}
h2{font-family:'Inter Display',Inter;font-weight:800;font-size:66px;line-height:1.08}
.gold{color:#e8bd4f}
p{font-size:42px;line-height:1.35;color:#e6dcc4}
.box{background:#f5efe0;color:#14213d;border-radius:22px;padding:40px 44px;font-size:40px;line-height:1.4}
.mono{font-family:'JetBrains Mono',monospace;font-size:34px}
.row{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #d8ccb0;padding:18px 0}
.row:last-child{border:none}
.lab{font-weight:600;color:#6b6250;font-size:32px}
.val{font-weight:800}
.pill{display:inline-block;padding:10px 26px;border-radius:999px;font-weight:800;font-size:32px}
.list{font-size:46px;line-height:1.6;font-weight:600}
.foot{position:absolute;left:0;right:0;white-space:nowrap;bottom:66px;text-align:center;font-size:22px;letter-spacing:4px;color:#d4a73a;font-weight:700}
.n{position:absolute;right:80px;top:70px;font-size:28px;color:#d4a73a;font-weight:700}
.big{font-size:150px;line-height:1}
`;
const deco = `<div class="frame"></div><div class="dia" style="left:70px;top:58px">✦</div><div class="dia" style="right:70px;bottom:110px">✦</div>`;
const foot = `<div class="foot">STONE FAMILIA MEDIA ✦ STORIES WORTH PASSING DOWN</div>`;
const prompt = [
`<div class="big">🌅</div><h1>My prompt said "make it <span class="gold">epic</span>."</h1><p>The AI gave me a beige sunset. The fix, swipe 👉</p>`,
`<h2>What went wrong?</h2><p>"Epic" means something different to everybody.</p><p>The AI <b class="gold">guessed.</b> And it guessed boring.</p>`,
`<h2>Fix: fill in the <span class="gold">blanks.</span></h2><div class="box"><div class="row"><span class="lab">Subject</span><span class="val">Who or what</span></div><div class="row"><span class="lab">Style</span><span class="val">Painting? Film? Anime?</span></div><div class="row"><span class="lab">Light</span><span class="val">Golden hour, storm</span></div><div class="row"><span class="lab">Camera</span><span class="val">Wide, close-up</span></div><div class="row"><span class="lab">Mood</span><span class="val">Hopeful, eerie</span></div></div>`,
`<h2>Same idea, <span class="gold">upgraded</span> ✅</h2><div class="box mono">Lone rider on a red mesa, cinematic film still, storm light breaking through clouds, wide shot, hopeful mood.</div><p>Now it's a movie poster, not a screensaver.</p>`,
`<h1>Prompt Studio helps you build prompts <span class="gold">piece by piece.</span></h1><p>Free to try. <b>Pro is $19.</b></p><div class="box" style="text-align:center;font-weight:800">stonefamiliamedia.com/prompt-studio</div><p>One word: what's your style? 👇</p>`];
const jha = [
`<h1>Up on a roof today? 🏠</h1><p>3 rules before anybody climbs. Swipe 👉</p>`,
`<h2>Falls are the #1 killer in construction.</h2><p>389 fatal falls out of 1,034 construction deaths in 2024 (OSHA, BLS data).</p><p>OSHA calls them <b class="gold">preventable.</b></p>`,
`<h2>The rules</h2><div class="list">📏 6 ft or higher at an open edge = fall protection<br>🪜 Ladder sticks out 3 ft above the roof<br>🦺 A harness for every worker who ties off</div>`,
`<h2>Put it in your JHA ☕</h2><div class="box"><div class="row"><span class="lab">Job step</span><span class="val">Sheathe roof</span></div><div class="row"><span class="lab">Hazard</span><span class="val">Fall from edge</span></div><div class="row"><span class="lab">Risk</span><span class="pill" style="background:#b3261e;color:#fff">CRITICAL</span></div><div class="row"><span class="lab">Control</span><span class="val">Anchor + harness</span></div><div class="row"><span class="lab">PPE</span><span class="val">Eye pro, boots</span></div></div>`,
`<h1><span class="gold">$9.99 once.</span> No monthly fee.</h1><p>Our Job Hazard Analysis form. Works offline, no sign-up. How high was your tallest roof? 👇</p><div class="box" style="text-align:center;font-weight:800;font-size:36px">stonefamiliamedia.com/safety-form</div>`];
(async()=>{
  const out=process.argv[2]||'/mnt/project-files/agents/posts-week-nov-2'; fs.mkdirSync(out,{recursive:true});
  const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1080,height:1350}});
  for (const [name,set] of [['prompt-epic',prompt],['roof-falls',jha]]) {
    for (let i=0;i<set.length;i++){
      await pg.setContent(`<html><head><style>${css}</style></head><body>${deco}<div class="n">${i+1}/${set.length}</div><div class="wrap">${set[i]}</div>${foot}</body></html>`);
      await pg.waitForTimeout(150);
      await pg.screenshot({path:`${out}/${name}-${i+1}.png`});
    }
  }
  await b.close(); console.log('done');
})();
