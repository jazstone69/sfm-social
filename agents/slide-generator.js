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
`<h1>I typed <span class="gold">"cool knight"</span> into an AI video tool.</h1><p>Here's what I got. 👇</p>`,
`<div class="big">🫤</div><h1>Meet <span class="gold">Sir Mid-a-lot.</span></h1><p>Generic armor. Standing there. Zero story. The AI did exactly what I asked… which was nothing.</p>`,
`<h2>So I opened <span class="gold">Prompt Studio.</span></h2><p>It asked me the questions I forgot to answer:</p>
<div class="box"><div class="row"><span class="lab">Who is he?</span><span class="val">Last guardian of a fortress</span></div><div class="row"><span class="lab">Where?</span><span class="val">Flooded desert ruins</span></div><div class="row"><span class="lab">When?</span><span class="val">Golden hour</span></div><div class="row"><span class="lab">Camera?</span><span class="val">Slow dolly-in, low angle</span></div></div>`,
`<h2>Then it wrote the prompt <span class="gold">for me</span> ✅</h2>
<div class="box mono">A weary knight in dented bronze armor, last guardian of a flooded desert fortress, golden hour light, wind tugging a torn red cape, slow dolly-in from a low angle, cinematic, 35mm film look.</div><p>Same idea. <b class="gold">Ten times the story.</b></p>`,
`<h1>Prompt Studio is <span class="gold">free.</span></h1><p>Want characters, backstories, and whole worlds? <b>Prompt Studio Pro is $19.</b></p><div class="box" style="text-align:center;font-weight:800">stonefamiliamedia.com/prompt-studio</div><p>Save this for your next AI video. 🔖</p>`];
const jha = [
`<h1>Your crew needs a JHA before the job starts.</h1><p>You've got a phone, cold coffee, and <b class="gold">zero bars.</b> 📵</p>`,
`<h2>Most JHA tools want:</h2><div class="list">❌ An account<br>❌ A monthly bill<br>❌ Wi-Fi on a job site 🙃</div>`,
`<h2>This one <span class="gold">doesn't.</span></h2><div class="list">✅ Works offline in your browser<br>✅ Rates each step Low → Critical<br>✅ PPE picker<br>✅ Signatures + PDF export<br>✅ Data stays on your device</div>`,
`<h2>Fill it in before the coffee's cold ☕</h2><div class="box"><div class="row"><span class="lab">Job step</span><span class="val">Cut rebar</span></div><div class="row"><span class="lab">Hazard</span><span class="val">Flying debris</span></div><div class="row"><span class="lab">Risk</span><span class="pill" style="background:#e8743b;color:#fff">HIGH</span></div><div class="row"><span class="lab">PPE</span><span class="val">Glasses, gloves</span></div><div class="row"><span class="lab">Signed</span><span class="val">✍️ 3 of 3 crew</span></div></div>`,
`<h1><span class="gold">$9.99 once.</span> No monthly bill.</h1><p>Built by a 9-year Army veteran with 17 years in IT. Planning keeps people safe.</p><div class="box" style="text-align:center;font-weight:800;font-size:36px">stonefamiliamedia.com/safety-form</div>`];
(async()=>{
  const out=process.argv[2]||'/mnt/project-files/agents/posts-week-nov-2'; fs.mkdirSync(out,{recursive:true});
  const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1080,height:1350}});
  for (const [name,set] of [['prompt-studio',prompt],['safety-form',jha]]) {
    for (let i=0;i<set.length;i++){
      await pg.setContent(`<html><head><style>${css}</style></head><body>${deco}<div class="n">${i+1}/${set.length}</div><div class="wrap">${set[i]}</div>${foot}</body></html>`);
      await pg.waitForTimeout(150);
      await pg.screenshot({path:`${out}/${name}-${i+1}.png`});
    }
  }
  await b.close(); console.log('done');
})();
