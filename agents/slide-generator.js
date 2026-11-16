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
`<div class="big">🔁</div><h1>Write it once. Swap <span class="gold">one word.</span></h1><p>Get 4 totally different styles. Save this 👉</p>`,
`<h2>The template</h2><div class="box mono">[Subject] in [STYLE], [light], [camera], [mood].</div><p>Keep everything the same. Change <b class="gold">only the style.</b></p>`,
`<h2>4 swaps to try</h2><div class="list">🧱 Claymation, visible thumbprints<br>🎨 Watercolor storybook<br>🎞️ Gritty 1970s film still<br>☕ Cozy lo-fi loop, rain on glass</div>`,
`<h2>Same cowboy, <span class="gold">4 movies</span> 🤠</h2><div class="box mono">Old cowboy and his mule at a campfire, in claymation with visible thumbprints, warm firelight, wide shot, peaceful mood.</div><p>Swap "claymation" and run it again.</p>`,
`<h1>Prompt Studio helps you build prompts <span class="gold">piece by piece.</span></h1><p>Free to try. <b>Pro is $19.</b></p><div class="box" style="text-align:center;font-weight:800">stonefamiliamedia.com/prompt-studio</div><p>One word: which style wins? 👇</p>`];
const jha = [
`<h1>Cold job today? 🥶</h1><p>It doesn't have to freeze to hurt you. Swipe 👉</p>`,
`<h2>Wet feet + 60°F = <span class="gold">trench foot.</span></h2><p>Wet feet lose heat 25x faster than dry feet (OSHA).</p><p>Pack spare dry socks.</p>`,
`<h2>Hypothermia can hit <span class="gold">above 40°F.</span></h2><p>Rain, sweat or cold water does it.</p><div class="list">🥶 Shivering = early sign<br>😵 Confused, slurred speech = call 911</div>`,
`<h2>Put it in your JHA ☕</h2><div class="box"><div class="row"><span class="lab">Job step</span><span class="val">Work in wet trench</span></div><div class="row"><span class="lab">Hazard</span><span class="val">Cold stress</span></div><div class="row"><span class="lab">Risk</span><span class="pill" style="background:#d4a73a;color:#14213d">HIGH</span></div><div class="row"><span class="lab">Control</span><span class="val">Warm breaks, buddy</span></div><div class="row"><span class="lab">PPE</span><span class="val">Waterproof boots</span></div></div>`,
`<h1><span class="gold">$9.99 once.</span> No monthly fee.</h1><p>Our Job Hazard Analysis form. Works offline, no sign-up. Coldest job you ever worked? 👇</p><div class="box" style="text-align:center;font-weight:800;font-size:36px">stonefamiliamedia.com/safety-form</div>`];
(async()=>{
  const out=process.argv[2]||'/mnt/project-files/agents/posts-week-nov-2'; fs.mkdirSync(out,{recursive:true});
  const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1080,height:1350}});
  for (const [name,set] of [['style-swap',prompt],['cold-stress',jha]]) {
    for (let i=0;i<set.length;i++){
      await pg.setContent(`<html><head><style>${css}</style></head><body>${deco}<div class="n">${i+1}/${set.length}</div><div class="wrap">${set[i]}</div>${foot}</body></html>`);
      await pg.waitForTimeout(150);
      await pg.screenshot({path:`${out}/${name}-${i+1}.png`});
    }
  }
  await b.close(); console.log('done');
})();
