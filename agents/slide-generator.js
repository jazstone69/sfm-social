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
`<div class="big">😵‍💫</div><h1>My AI knight had a <span class="gold">new face</span> in every clip.</h1><p>Same idea. Three different guys. 👇</p>`,
`<h2>What went wrong?</h2><p>I described him a little differently every time.</p><div class="list">Clip 1: "brave knight"<br>Clip 2: "tired knight, red cape"<br>Clip 3: "old soldier in armor"</div><p>The AI took that <b class="gold">personally.</b></p>`,
`<h2>The fix: write the character <span class="gold">once.</span></h2><p>Keep the same description word for word. Change only the scene.</p><div class="box"><div class="row"><span class="lab">Character</span><span class="val">Stays the same</span></div><div class="row"><span class="lab">Gear</span><span class="val">Stays the same</span></div><div class="row"><span class="lab">Scene + action</span><span class="val">Changes</span></div></div>`,
`<h2>Sir Mid-a-lot, <span class="gold">upgraded</span> ✅</h2><div class="box mono">Weary knight, dented bronze armor, torn red cape, chipped tooth, lucky coin.</div><div class="list" style="font-size:40px">Mon: guards the gate 🏰<br>Tue: finds a stranger 🧭<br>Wed: the storm hits ⛈️</div>`,
`<h1>Prompt Studio <span class="gold">Pro</span> builds characters, backstories, worlds &amp; gear.</h1><p><b>$19.</b> The free version is at the link too.</p><div class="box" style="text-align:center;font-weight:800">stonefamiliamedia.com/prompt-studio</div><p>What should we name him? 👇</p>`];
const jha = [
`<h1>Digging a trench today? 🕳️</h1><p>Read this <b class="gold">before</b> anybody hops in.</p>`,
`<h2>5 feet or deeper?</h2><p>OSHA says it needs a <b class="gold">protective system</b>: sloping, shoring, or a trench box.</p><p>20 feet or deeper? An engineer designs it.</p>`,
`<h2>4 feet or deeper?</h2><div class="list">🪜 A ladder or ramp within 25 ft of every worker<br>⛰️ Dirt piles + gear 2 ft back from the edge<br>👀 Inspected daily by a competent person</div>`,
`<h2>Put it in your JHA ☕</h2><div class="box"><div class="row"><span class="lab">Job step</span><span class="val">Dig 6 ft trench</span></div><div class="row"><span class="lab">Hazard</span><span class="val">Cave-in</span></div><div class="row"><span class="lab">Risk</span><span class="pill" style="background:#b3261e;color:#fff">CRITICAL</span></div><div class="row"><span class="lab">Control</span><span class="val">Trench box, ladder</span></div><div class="row"><span class="lab">PPE</span><span class="val">Hard hat</span></div></div>`,
`<h1><span class="gold">$9.99 once.</span> Works offline. No sign-up.</h1><p>Our Job Hazard Analysis form. What's the deepest trench you've worked in? 👇</p><div class="box" style="text-align:center;font-weight:800;font-size:36px">stonefamiliamedia.com/safety-form</div>`];
(async()=>{
  const out=process.argv[2]||'/mnt/project-files/agents/posts-week-nov-2'; fs.mkdirSync(out,{recursive:true});
  const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1080,height:1350}});
  for (const [name,set] of [['pro-characters',prompt],['trench-safety',jha]]) {
    for (let i=0;i<set.length;i++){
      await pg.setContent(`<html><head><style>${css}</style></head><body>${deco}<div class="n">${i+1}/${set.length}</div><div class="wrap">${set[i]}</div>${foot}</body></html>`);
      await pg.waitForTimeout(150);
      await pg.screenshot({path:`${out}/${name}-${i+1}.png`});
    }
  }
  await b.close(); console.log('done');
})();
