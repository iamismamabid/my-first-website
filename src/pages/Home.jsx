<style>
*{margin:0;padding:0;box-sizing:border-box}
.pf{background:#030303;color:#fafafa;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;border-radius:12px}
.nav-wrap{padding:1rem 4%;position:sticky;top:0;z-index:50;background:rgba(3,3,3,0.85);backdrop-filter:blur(12px)}
.nav{display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:0 auto;padding:.6rem 1.25rem;background:rgba(15,15,15,0.5);border:1px solid rgba(255,255,255,0.06);border-radius:18px}
.logo{font-weight:800;letter-spacing:-.05em;font-size:1.1rem}.logo span{color:#8b5cf6}
.nav-links{display:flex;gap:1.5rem}
.nav-links a{color:#a1a1aa;text-decoration:none;font-size:.82rem;letter-spacing:.02em;cursor:pointer;transition:color .2s}
.nav-links a:hover{color:#fafafa}
.status{display:flex;align-items:center;gap:7px;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:#71717a}
.dot{width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 8px rgba(16,185,129,.5)}
section{padding:4rem 4%;max-width:1100px;margin:0 auto}
.pill{display:inline-flex;align-items:center;gap:8px;padding:.35rem 1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:999px;font-size:.78rem;color:#d4d4d8;margin-bottom:1.75rem}
.pill span.s{color:#8b5cf6}
.pill-div{width:1px;height:10px;background:rgba(255,255,255,0.2)}
.hero-h1{font-size:clamp(2.2rem,6vw,4rem);font-weight:800;line-height:1.05;letter-spacing:-.05em;margin-bottom:1.25rem}
.typed-wrap{display:inline-block;color:#8b5cf6;min-width:320px}
.cursor{display:inline-block;width:3px;height:.85em;background:#8b5cf6;margin-left:2px;animation:blink 1s step-end infinite;vertical-align:middle}
@keyframes blink{50%{opacity:0}}
.hero-sub{font-size:clamp(.9rem,1.4vw,1.05rem);color:#a1a1aa;max-width:600px;line-height:1.65;margin-bottom:2rem}
.btn-row{display:flex;gap:.9rem;flex-wrap:wrap;margin-bottom:3.5rem}
.btn-p{padding:.8rem 1.8rem;background:#fff;color:#000;border-radius:10px;font-weight:600;font-size:.88rem;text-decoration:none;display:inline-flex;align-items:center;gap:7px;cursor:pointer;border:none}
.btn-s{padding:.8rem 1.8rem;background:transparent;color:#fafafa;border:1px solid rgba(255,255,255,0.2);border-radius:10px;font-weight:600;font-size:.88rem;text-decoration:none;cursor:pointer}
.sec-label{font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:#8b5cf6;margin-bottom:.5rem}
.sec-h2{font-size:clamp(1.5rem,3vw,2.2rem);font-weight:800;letter-spacing:-.04em;margin-bottom:2rem}
.fade-up{opacity:0;transform:translateY(24px);transition:opacity .6s ease, transform .6s ease}
.fade-up.visible{opacity:1;transform:translateY(0)}
.filter-row{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.75rem}
.f-btn{padding:.4rem 1rem;border-radius:999px;border:1px solid rgba(255,255,255,0.12);background:transparent;color:#a1a1aa;font-size:.8rem;cursor:pointer;transition:all .2s}
.f-btn.active{background:#8b5cf6;border-color:#8b5cf6;color:#fff}
.proj-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem}
.proj-card{padding:1.5rem;background:rgba(20,20,22,0.6);border-radius:18px;border:1px solid rgba(255,255,255,0.06);transition:all .3s;cursor:pointer}
.proj-card:hover{border-color:rgba(139,92,246,.35);transform:translateY(-3px)}
.proj-card.hidden{display:none}
.proj-tag{display:inline-block;padding:.2rem .6rem;border-radius:6px;font-size:.7rem;font-weight:600;margin-bottom:1rem}
.tag-ai{background:rgba(139,92,246,.15);color:#a78bfa}
.tag-fs{background:rgba(16,185,129,.12);color:#34d399}
.tag-tools{background:rgba(251,146,60,.12);color:#fb923c}
.proj-title{font-size:1rem;font-weight:700;margin-bottom:.5rem;color:#fafafa}
.proj-desc{font-size:.85rem;color:#71717a;line-height:1.6;margin-bottom:1rem}
.proj-stack{display:flex;gap:.4rem;flex-wrap:wrap}
.stack-pill{padding:.15rem .55rem;background:rgba(255,255,255,.05);border-radius:5px;font-size:.7rem;color:#a1a1aa}
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem}
.skill-group h3{font-size:.85rem;font-weight:700;color:#8b5cf6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1.25rem}
.skill-item{margin-bottom:1rem}
.skill-label{display:flex;justify-content:space-between;font-size:.85rem;color:#d4d4d8;margin-bottom:.4rem}
.skill-pct{color:#8b5cf6;font-weight:600;font-size:.82rem}
.bar-bg{height:5px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden}
.bar-fill{height:100%;background:linear-gradient(90deg,#7c3aed,#a78bfa);border-radius:3px;width:0;transition:width 1.2s cubic-bezier(.4,0,.2,1)}
.timeline{position:relative;padding-left:2rem}
.timeline::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:1px;background:rgba(255,255,255,.07)}
.t-item{position:relative;margin-bottom:2.5rem;padding-left:.75rem}
.t-dot{position:absolute;left:-1.75rem;top:4px;width:14px;height:14px;border-radius:50%;background:#8b5cf6;border:2px solid #030303;box-shadow:0 0 12px rgba(139,92,246,.5)}
.t-period{font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:#8b5cf6;margin-bottom:.3rem}
.t-role{font-size:1rem;font-weight:700;color:#fafafa;margin-bottom:.2rem}
.t-org{font-size:.85rem;color:#a1a1aa;margin-bottom:.5rem}
.t-desc{font-size:.83rem;color:#71717a;line-height:1.6}
.blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem}
.blog-card{padding:1.5rem;background:rgba(20,20,22,0.6);border-radius:18px;border:1px solid rgba(255,255,255,.06);transition:border-color .3s}
.blog-card:hover{border-color:rgba(255,255,255,.15)}
.blog-cat{font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#8b5cf6;margin-bottom:.5rem}
.blog-title{font-size:.95rem;font-weight:700;color:#fafafa;margin-bottom:.5rem;line-height:1.4}
.blog-excerpt{font-size:.82rem;color:#71717a;line-height:1.6;margin-bottom:.9rem}
.blog-meta{font-size:.75rem;color:#52525b}
.footer{text-align:center;padding:2.5rem 4%;border-top:1px solid rgba(255,255,255,.05);font-size:.8rem;color:#3f3f46}
</style>

<div class="pf" id="pf">

<div class="nav-wrap">
  <nav class="nav">
    <div class="logo">IA<span>.</span></div>
    <div class="nav-links">
      <a onclick="scrollTo('projects')">Projects</a>
      <a onclick="scrollTo('skills')">Skills</a>
      <a onclick="scrollTo('edu')">Education</a>
      <a onclick="scrollTo('blog')">Blog</a>
    </div>
    <div class="status"><span class="dot"></span>System Operational</div>
  </nav>
</div>

<section id="hero" style="padding-top:3.5rem">
  <div class="pill"><span class="s">✧</span><span>Building IsmamStudio.ai</span><span class="pill-div"></span><span>Open to MS/MSc opportunities</span></div>
  <h1 class="hero-h1">
    I build<br>
    <span class="typed-wrap" id="typed"></span><span class="cursor" id="cur"></span>
  </h1>
  <p class="hero-sub">Specializing in Next.js 15, TypeScript, and Prisma — engineering AI-driven Micro-SaaS platforms and robust data pipelines for high-performance automation.</p>
  <div class="btn-row">
    <a href="/Ismam_Abid_Resume.pdf" class="btn-p" download>Download Resume <i class="ti ti-download" aria-hidden="true" style="font-size:16px"></i></a>
    <a href="mailto:ismamabidone@gmail.com" class="btn-s">Initiate Contact</a>
  </div>
</section>

<section id="projects" class="fade-up">
  <div class="sec-label">Selected Work</div>
  <div class="sec-h2">Projects</div>
  <div class="filter-row">
    <button class="f-btn active" onclick="filterProj('all',this)">All</button>
    <button class="f-btn" onclick="filterProj('ai',this)">AI / SaaS</button>
    <button class="f-btn" onclick="filterProj('fs',this)">Full Stack</button>
    <button class="f-btn" onclick="filterProj('tools',this)">Dev Tools</button>
  </div>
  <div class="proj-grid" id="proj-grid">
    <div class="proj-card" data-cat="ai">
      <span class="proj-tag tag-ai">AI / SaaS</span>
      <div class="proj-title">IsmamStudio.ai</div>
      <div class="proj-desc">AI-powered KDP book generator — automated content creation, cover design, and publishing pipeline for Amazon KDP Micro-SaaS.</div>
      <div class="proj-stack"><span class="stack-pill">Next.js 15</span><span class="stack-pill">TypeScript</span><span class="stack-pill">OpenAI</span><span class="stack-pill">Prisma</span></div>
    </div>
    <div class="proj-card" data-cat="ai">
      <span class="proj-tag tag-ai">AI / SaaS</span>
      <div class="proj-title">WordSearchStudio</div>
      <div class="proj-desc">Canvas-based word search puzzle generator with drag interaction, AI-assisted word seeding, and bulk export for KDP low-content books.</div>
      <div class="proj-stack"><span class="stack-pill">React</span><span class="stack-pill">Canvas API</span><span class="stack-pill">MongoDB</span><span class="stack-pill">Node.js</span></div>
    </div>
    <div class="proj-card" data-cat="fs">
      <span class="proj-tag tag-fs">Full Stack</span>
      <div class="proj-title">AI Book Generator</div>
      <div class="proj-desc">End-to-end LLM-powered book generation system with chapter structuring, Stripe billing, and automated PDF export for digital publishing.</div>
      <div class="proj-stack"><span class="stack-pill">Next.js</span><span class="stack-pill">Prisma</span><span class="stack-pill">Stripe</span><span class="stack-pill">MongoDB</span></div>
    </div>
    <div class="proj-card" data-cat="tools">
      <span class="proj-tag tag-tools">Dev Tools</span>
      <div class="proj-title">CSE 327 AI Solver</div>
      <div class="proj-desc">Interactive AI coursework toolkit — MiniMax/Alpha-Beta pruning visualizer, Bayesian network calculator, and STRIPS planning debugger.</div>
      <div class="proj-stack"><span class="stack-pill">Python</span><span class="stack-pill">React</span><span class="stack-pill">D3.js</span></div>
    </div>
  </div>
</section>

<section id="skills" class="fade-up" style="margin-top:1rem">
  <div class="sec-label">Technical Proficiency</div>
  <div class="sec-h2">Skills</div>
  <div class="skills-grid" id="skills-grid">
    <div class="skill-group">
      <h3>Frontend</h3>
      <div class="skill-item"><div class="skill-label"><span>Next.js / React</span><span class="skill-pct">90%</span></div><div class="bar-bg"><div class="bar-fill" data-w="90"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>TypeScript</span><span class="skill-pct">85%</span></div><div class="bar-bg"><div class="bar-fill" data-w="85"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Tailwind CSS</span><span class="skill-pct">88%</span></div><div class="bar-bg"><div class="bar-fill" data-w="88"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Canvas API</span><span class="skill-pct">75%</span></div><div class="bar-bg"><div class="bar-fill" data-w="75"></div></div></div>
    </div>
    <div class="skill-group">
      <h3>Backend & DB</h3>
      <div class="skill-item"><div class="skill-label"><span>Node.js / Express</span><span class="skill-pct">82%</span></div><div class="bar-bg"><div class="bar-fill" data-w="82"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Prisma ORM</span><span class="skill-pct">80%</span></div><div class="bar-bg"><div class="bar-fill" data-w="80"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>MongoDB / PostgreSQL</span><span class="skill-pct">78%</span></div><div class="bar-bg"><div class="bar-fill" data-w="78"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>REST / tRPC</span><span class="skill-pct">76%</span></div><div class="bar-bg"><div class="bar-fill" data-w="76"></div></div></div>
    </div>
    <div class="skill-group">
      <h3>AI & Automation</h3>
      <div class="skill-item"><div class="skill-label"><span>OpenAI / Vercel AI SDK</span><span class="skill-pct">83%</span></div><div class="bar-bg"><div class="bar-fill" data-w="83"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Prompt Engineering</span><span class="skill-pct">87%</span></div><div class="bar-bg"><div class="bar-fill" data-w="87"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>LangChain / RAG</span><span class="skill-pct">65%</span></div><div class="bar-bg"><div class="bar-fill" data-w="65"></div></div></div>
    </div>
    <div class="skill-group">
      <h3>CS Foundations</h3>
      <div class="skill-item"><div class="skill-label"><span>C / C++</span><span class="skill-pct">80%</span></div><div class="bar-bg"><div class="bar-fill" data-w="80"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Data Structures & Algo</span><span class="skill-pct">78%</span></div><div class="bar-bg"><div class="bar-fill" data-w="78"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>AI / ML Theory</span><span class="skill-pct">72%</span></div><div class="bar-bg"><div class="bar-fill" data-w="72"></div></div></div>
    </div>
  </div>
</section>

<section id="edu" class="fade-up" style="margin-top:1rem">
  <div class="sec-label">Background</div>
  <div class="sec-h2">Education & Experience</div>
  <div class="timeline">
    <div class="t-item">
      <div class="t-dot"></div>
      <div class="t-period">2022 – Present</div>
      <div class="t-role">B.Sc. in Computer Science & Engineering</div>
      <div class="t-org">North South University, Dhaka</div>
      <div class="t-desc">Coursework in AI (CSE 327), Algorithms, Databases, and Software Engineering. Active researcher with interest in NLP and intelligent systems.</div>
    </div>
    <div class="t-item">
      <div class="t-dot"></div>
      <div class="t-period">2024 – Present</div>
      <div class="t-role">Independent SaaS Developer</div>
      <div class="t-org">IsmamStudio.ai — Remote</div>
      <div class="t-desc">Building AI-powered KDP publishing tools — full-stack from schema design and LLM pipelines to Stripe billing and deployment on Vercel.</div>
    </div>
    <div class="t-item">
      <div class="t-dot"></div>
      <div class="t-period">2023</div>
      <div class="t-role">Full-Stack Development Bootcamp</div>
      <div class="t-org">Self-directed — The Odin Project / Full Stack Open</div>
      <div class="t-desc">Intensive 2,600hr roadmap covering React, Node.js, PostgreSQL, Next.js, and AWS. Targeted BookBolt-style SaaS as the capstone project.</div>
    </div>
  </div>
</section>

<section id="blog" class="fade-up" style="margin-top:1rem;padding-bottom:3rem">
  <div class="sec-label">Writing</div>
  <div class="sec-h2">Blog / Articles</div>
  <div class="blog-grid">
    <div class="blog-card">
      <div class="blog-cat">AI Engineering</div>
      <div class="blog-title">How I built an automated KDP book pipeline with GPT-4</div>
      <div class="blog-excerpt">From prompt chaining to structured output parsing — the full architecture of an LLM-powered publishing engine.</div>
      <div class="blog-meta">Coming soon &nbsp;·&nbsp; 8 min read</div>
    </div>
    <div class="blog-card">
      <div class="blog-cat">Next.js</div>
      <div class="blog-title">Fixing MongoDB Atlas connection timeouts in Prisma on Vercel</div>
      <div class="blog-excerpt">A deep-dive into PrismaClientInitializationError, connection pooling limits, and the serverless cold start problem.</div>
      <div class="blog-meta">Coming soon &nbsp;·&nbsp; 6 min read</div>
    </div>
    <div class="blog-card">
      <div class="blog-cat">Geopolitics</div>
      <div class="blog-title">Bangladesh's foreign policy balancing act — India, China & the new multipolar order</div>
      <div class="blog-excerpt">Analyzing Dhaka's strategic hedging between major powers and what small-state theory tells us about its options.</div>
      <div class="blog-meta">Coming soon &nbsp;·&nbsp; 12 min read</div>
    </div>
  </div>
</section>

<div class="footer">© 2025 Ismam Abid &nbsp;·&nbsp; ismamabidone@gmail.com &nbsp;·&nbsp; Built with Next.js</div>
</div>

<script>
const phrases = ["intelligent SaaS.","AI pipelines.","scalable systems.","Next.js apps.","the future."];
let pi=0,ci=0,del=false;
function type(){
  const el=document.getElementById('typed');
  if(!el)return;
  const cur=phrases[pi];
  if(!del){el.textContent=cur.slice(0,ci+1);ci++;if(ci===cur.length){del=true;setTimeout(type,1800);return;}}
  else{el.textContent=cur.slice(0,ci-1);ci--;if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(type,del?55:95);
}
setTimeout(type,600);

function scrollTo(id){
  const el=document.getElementById(id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}

function filterProj(cat,btn){
  document.querySelectorAll('.f-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(c=>{
    if(cat==='all'||c.dataset.cat===cat){c.classList.remove('hidden');}
    else{c.classList.add('hidden');}
  });
}

const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      if(e.target.id==='skills'||e.target.contains(document.getElementById('skills-grid'))){
        animateBars();
      }
    }
  });
},{threshold:0.12});
document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

let barsAnimated=false;
function animateBars(){
  if(barsAnimated)return;
  barsAnimated=true;
  document.querySelectorAll('.bar-fill').forEach((b,i)=>{
    setTimeout(()=>{b.style.width=b.dataset.w+'%';},i*80);
  });
}

const skillsEl=document.getElementById('skills');
const skillsOb=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)animateBars();});
},{threshold:0.2});
if(skillsEl)skillsOb.observe(skillsEl);
</script>
