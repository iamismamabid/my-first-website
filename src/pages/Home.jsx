<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ismam Abid | Software Engineer</title>
<style>
:root, [data-theme="dark"] {
  --bg-main: #030303; 
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --accent-color: #8b5cf6; 
  --accent-glow: rgba(139, 92, 246, 0.15);
  --surface-bg: rgba(20, 20, 22, 0.5);
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-highlight: rgba(139, 92, 246, 0.4);
  --bg-gradient-start: rgba(28, 28, 36, 1);
  --bg-gradient-end: rgba(3, 3, 3, 1);
}
 [data-theme="light"] {
  --bg-main: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent-color: #7c3aed; 
  --accent-glow: rgba(124, 58, 237, 0.15);
  --surface-bg: rgba(255, 255, 255, 0.6);
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-highlight: rgba(124, 58, 237, 0.4);
  --bg-gradient-start: rgba(243, 244, 246, 1);
  --bg-gradient-end: rgba(248, 250, 252, 1);
}
  /* =========================================
     BASE STYLES & LAYOUT
     ========================================= */
  *  { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background-color: var(--bg-main);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-image: radial-gradient(circle at 50% 0%, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 70%);
  background-attachment: fixed;
  transition: background-color 0.3s ease, color 0.3s ease;
  -webkit-font-smoothing: antialiased;
}

  .pf { overflow: hidden; }

  .pf { overflow: hidden; }

/* Navigation */
.nav-wrap { padding: 1rem 4%; position: sticky; top: 0; z-index: 50; }
.nav { display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; padding: 0.8rem 1.5rem; background: var(--surface-bg); border: 1px solid var(--border-subtle); border-radius: 18px; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 4px 30px rgba(0,0,0,0.1); transition: all 0.3s ease;}
.logo { font-weight: 800; letter-spacing: -.05em; font-size: 1.25rem; }
.logo span { color: var(--accent-color); }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: var(--text-secondary); text-decoration: none; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: color 0.2s; }
.nav-links a:hover { color: var(--text-primary); }
.status { display: flex; align-items: center; gap: 8px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); }
.dot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6); }

section { padding: 5rem 4%; max-width: 1100px; margin: 0 auto; }


  /* Hero Elements */
  .pill { display: inline-flex; align-items: center; gap: 12px; padding: 0.5rem 1.25rem; background: var(--surface-bg); border: 1px solid var(--border-subtle); border-radius: 999px; font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 2rem; box-shadow: inset 0 0 20px rgba(255,255,255,0.02); }
  .pill span.s { color: var(--accent-color); font-size: 1rem; }
  .pill-div { width: 1px; height: 12px; background: var(--border-subtle); }
  
  .hero-h1 { font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 800; line-height: 1.05; letter-spacing: -.05em; margin-bottom: 1.5rem; }
  .typed-wrap { display: inline-block; color: var(--accent-color); min-width: 320px; }
  .cursor { display: inline-block; width: 3px; height: 0.85em; background: var(--accent-color); margin-left: 4px; animation: blink 1s step-end infinite; vertical-align: middle; }
  @keyframes blink { 50% { opacity: 0; } }
  
  .hero-sub { font-size: clamp(1rem, 1.5vw, 1.25rem); color: var(--text-secondary); max-width: 700px; line-height: 1.6; margin-bottom: 3rem; }
  
  /* Buttons */
  .btn-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
  .btn-p { padding: 1rem 2rem; background: var(--text-primary); color: var(--bg-main); border-radius: 12px; font-weight: 600; font-size: 0.95rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: none; transition: transform 0.2s; }
  .btn-p:hover { transform: translateY(-2px); }
  .btn-s { padding: 1rem 2rem; background: transparent; color: var(--text-primary); border: 1px solid var(--border-subtle); border-radius: 12px; font-weight: 600; font-size: 0.95rem; text-decoration: none; cursor: pointer; transition: all 0.2s; }
  .btn-s:hover { border-color: var(--border-highlight); background: var(--surface-bg); }

  /* Sections */
  .sec-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-color); margin-bottom: 0.5rem; font-weight: 700;}
  .sec-h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -.04em; margin-bottom: 2.5rem; }
  
  .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }

  /* Project Filters */
  .filter-row { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
  .f-btn { padding: 0.5rem 1.25rem; border-radius: 999px; border: 1px solid var(--border-subtle); background: transparent; color: var(--text-secondary); font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
  .f-btn:hover { background: var(--surface-bg); }
  .f-btn.active { background: var(--text-primary); color: var(--bg-main); border-color: var(--text-primary); }

  /* Cards (Projects & Blog) */
  .proj-grid, .blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .proj-card, .blog-card { padding: 2rem; background: var(--surface-bg); border-radius: 20px; border: 1px solid var(--border-subtle); transition: all 0.3s ease; cursor: pointer; }
  .proj-card:hover, .blog-card:hover { border-color: var(--border-highlight); transform: translateY(-5px); box-shadow: 0 10px 30px -10px var(--accent-glow); }
  .proj-card.hidden { display: none; }
  
  .proj-tag { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 6px; font-size: 0.7rem; font-weight: 700; margin-bottom: 1.25rem; letter-spacing: 0.05em; text-transform: uppercase; }
  .tag-ai { background: var(--accent-glow); color: var(--accent-color); }
  .tag-fs { background: rgba(16, 185, 129, 0.1); color: #10b981; }
  .tag-tools { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
  
  .proj-title, .blog-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary); }
  .proj-desc, .blog-excerpt { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; }
  .proj-stack { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .stack-pill { padding: 0.25rem 0.6rem; background: rgba(128,128,128,0.1); border-radius: 6px; font-size: 0.75rem; color: var(--text-secondary); border: 1px solid var(--border-subtle); }

  /* Skills */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; }
  .skill-group h3 { font-size: 1rem; font-weight: 700; color: var(--accent-color); margin-bottom: 1.5rem; }
  .skill-item { margin-bottom: 1.25rem; }
  .skill-label { display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--text-primary); margin-bottom: 0.5rem; }
  .skill-pct { color: var(--text-secondary); font-weight: 500; font-size: 0.85rem; }
  .bar-bg { height: 6px; background: var(--border-subtle); border-radius: 99px; overflow: hidden; }
  .bar-fill { height: 100%; background: var(--accent-color); border-radius: 99px; width: 0; transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1); }

  /* Timeline */
  .timeline { position: relative; padding-left: 2.5rem; margin-top: 1rem; }
  .timeline::before { content: ''; position: absolute; left: 9px; top: 0; bottom: 0; width: 2px; background: var(--border-subtle); }
  .t-item { position: relative; margin-bottom: 3rem; }
  .t-dot { position: absolute; left: -2.5rem; top: 4px; width: 20px; height: 20px; border-radius: 50%; background: var(--bg-main); border: 3px solid var(--accent-color); box-shadow: 0 0 12px var(--accent-glow); }
  .t-period { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-color); margin-bottom: 0.5rem; font-weight: 600; }
  .t-role { font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem; }
  .t-org { font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem; }
  .t-desc { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; max-width: 600px; }

  /* Blog Extra */
  .blog-cat { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-color); margin-bottom: 0.75rem; font-weight: 700; }
  .blog-meta { font-size: 0.8rem; color: var(--text-secondary); padding-top: 1rem; border-top: 1px solid var(--border-subtle); }

  .footer { text-align: center; padding: 3rem 4%; border-top: 1px solid var(--border-subtle); font-size: 0.85rem; color: var(--text-secondary); margin-top: 2rem; }
  
  /* Theme Toggle Button */
  .theme-toggle { background: transparent; border: 1px solid var(--border-subtle); color: var(--text-primary); padding: 0.4rem 0.8rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
  .theme-toggle:hover { background: var(--surface-bg); border-color: var(--border-highlight); }
</style>
</head>
<body>

<div class="pf" id="pf">

<div class="nav-wrap">
  <nav class="nav">
    <div class="logo">IA<span>.</span></div>
    <div class="nav-links">
      <a onclick="scrollToSection('projects')">Projects</a>
      <a onclick="scrollToSection('skills')">Skills</a>
      <a onclick="scrollToSection('edu')">Education</a>
      <a onclick="scrollToSection('blog')">Blog</a>
    </div>
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <div class="status"><span class="dot"></span>System Operational</div>
      <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">🌙</button>
    </div>
  </nav>
</div>

<section id="hero">
  <div class="pill"><span class="s">✧</span><span>Building IsmamStudio.ai</span><span class="pill-div"></span><span>Open to MS/MSc opportunities</span></div>
  <h1 class="hero-h1">
    I build<br>
    <span class="typed-wrap" id="typed"></span><span class="cursor" id="cur"></span>
  </h1>
  <p class="hero-sub">Specializing in Next.js 15, TypeScript, and Prisma — engineering AI-driven Micro-SaaS platforms and robust data pipelines for high-performance automation.</p>
  <div class="btn-row">
    <a href="/Ismam_Abid_Resume.pdf" class="btn-p" download>Download Resume ↓</a>
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
      <div class="proj-stack"><span class="stack-pill">Next.js 15</span><span class="stack-pill">TypeScript</span><span class="stack-pill">OpenAI SDK</span><span class="stack-pill">Prisma</span></div>
    </div>
    <div class="proj-card" data-cat="ai">
      <span class="proj-tag tag-ai">AI / SaaS</span>
      <div class="proj-title">WordSearchStudio</div>
      <div class="proj-desc">Canvas-based word search puzzle genera
        tor with drag interaction, AI-assisted word seeding, and bulk export for KDP low-content books.</div>
      <div class="proj-stack"><span class="stack-pill">React</span><span class="stack-pill">Canvas API</span><span class="stack-pill">MongoDB</span><span class="stack-pill">Node.js</span></div>
    </div>
    <div class="proj-card" data-cat="fs">
      <span class="proj-tag tag-fs">Full Stack</span>
      <div class="proj-title">AI Book Generator</div>
      <div class="proj-desc">End-to-end LLM-powered book generation system with chapter structuring, Stripe billing, and automated PDF export for digital publishing.</div>
      <div class="proj-stack"><span class="stack-pill">Next.js</span><span class="stack-pill">Prisma</span><span class="stack-pill">Stripe</span><span class="stack-pill">PostgreSQL</span></div>
    </div>
    <div class="proj-card" data-cat="tools">
      <span class="proj-tag tag-tools">Dev Tools</span>
      <div class="proj-title">AI Algorithm Visualizer</div>
      <div class="proj-desc">Interactive AI coursework toolkit — MiniMax/Alpha-Beta pruning visualizer, Bayesian network calculator, and STRIPS planning debugger.</div>
      <div class="proj-stack"><span class="stack-pill">Python</span><span class="stack-pill">React</span><span class="stack-pill">D3.js</span></div>
    </div>
  </div>
</section>

<section id="skills" class="fade-up">
  <div class="sec-label">Technical Proficiency</div>
  <div class="sec-h2">Arsenal</div>
  <div class="skills-grid" id="skills-grid">
    <div class="skill-group">
      <h3>Frontend</h3>
      <div class="skill-item"><div class="skill-label"><span>Next.js / React</span><span class="skill-pct">90%</span></div><div class="bar-bg"><div class="bar-fill" data-w="90"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>TypeScript</span><span class="skill-pct">85%</span></div><div class="bar-bg"><div class="bar-fill" data-w="85"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Tailwind CSS</span><span class="skill-pct">88%</span></div><div class="bar-bg"><div class="bar-fill" data-w="88"></div></div></div>
    </div>
    <div class="skill-group">
      <h3>Backend & DB</h3>
      <div class="skill-item"><div class="skill-label"><span>Node.js / Express</span><span class="skill-pct">85%</span></div><div class="bar-bg"><div class="bar-fill" data-w="85"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Prisma ORM</span><span class="skill-pct">90%</span></div><div class="bar-bg"><div class="bar-fill" data-w="90"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>MongoDB / PostgreSQL</span><span class="skill-pct">80%</span></div><div class="bar-bg"><div class="bar-fill" data-w="80"></div></div></div>
    </div>
    <div class="skill-group">
      <h3>AI & Cloud</h3>
      <div class="skill-item"><div class="skill-label"><span>AI SDK / OpenAI API</span><span class="skill-pct">85%</span></div><div class="bar-bg"><div class="bar-fill" data-w="85"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Prompt Engineering</span><span class="skill-pct">88%</span></div><div class="bar-bg"><div class="bar-fill" data-w="88"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Vercel / Cloudflare</span><span class="skill-pct">75%</span></div><div class="bar-bg"><div class="bar-fill" data-w="75"></div></div></div>
    </div>
    <div class="skill-group">
      <h3>CS Foundations</h3>
      <div class="skill-item"><div class="skill-label"><span>C / C++</span><span class="skill-pct">80%</span></div><div class="bar-bg"><div class="bar-fill" data-w="80"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Data Structures & Algo</span><span class="skill-pct">78%</span></div><div class="bar-bg"><div class="bar-fill" data-w="78"></div></div></div>
      <div class="skill-item"><div class="skill-label"><span>Computer Graphics</span><span class="skill-pct">72%</span></div><div class="bar-bg"><div class="bar-fill" data-w="72"></div></div></div>
    </div>
  </div>
</section>

<section id="edu" class="fade-up">
  <div class="sec-label">Background</div>
  <div class="sec-h2">Education & Experience</div>
  <div class="timeline">
    <div class="t-item">
      <div class="t-dot"></div>
      <div class="t-period">2022 – Present (4th Year)</div>
      <div class="t-role">B.Sc. in Computer Science & Engineering</div>
      <div class="t-org">East Delta University, Chittagong</div>
      <div class="t-desc">Coursework in AI, Computer Graphics, Databases, and Software Engineering. Active researcher with an interest in intelligent systems.</div>
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
      <div class="t-period">Previous</div>
      <div class="t-role">Academic Tutor</div>
      <div class="t-org">Independent</div>
      <div class="t-desc">Provided private tutoring in English, Mathematics, and Physics for elementary to secondary students, refining communication and mentorship skills.</div>
    </div>
  </div>
</section>

<section id="blog" class="fade-up">
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
      <div class="blog-title">Fixing connection timeouts in Prisma on Vercel</div>
      <div class="blog-excerpt">A deep-dive into connection pooling limits, edge functions, and the serverless cold start problem.</div>
      <div class="blog-meta">Coming soon &nbsp;·&nbsp; 6 min read</div>
    </div>
  </div>
</section>

<div class="footer">
  © 2026 Ismam Abid &nbsp;·&nbsp; ismamabidone@gmail.com &nbsp;·&nbsp; Built with modern web standards
</div>

</div>

<script>
  // Global Theme Toggle Logic
  function toggleTheme() {
    const htmlEl = document.documentElement;
    const btn = document.getElementById('themeBtn');
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
      htmlEl.setAttribute('data-theme', 'light');
      btn.textContent = '☀️';
    } else {
      htmlEl.setAttribute('data-theme', 'dark');
      btn.textContent = '🌙';
    }
  }

  // Typewriter Effect
  const phrases = ["intelligent SaaS.", "AI pipelines.", "scalable systems.", "Next.js platforms."];
  let pi = 0, ci = 0, del = false;
  
  function type() {
    const el = document.getElementById('typed');
    if (!el) return;
    const cur = phrases[pi];
    
    if (!del) {
      el.textContent = cur.slice(0, ci + 1);
      ci++;
      if (ci === cur.length) {
        del = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = cur.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        del = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, del ? 40 : 90);
  }
  setTimeout(type, 600);

  // Smooth Scrolling
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      // Adjusted for fixed sticky navbar
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  // Project Filtering
  function filterProj(cat, btn) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.proj-card').forEach(c => {
      if (cat === 'all' || c.dataset.cat === cat) {
        c.classList.remove('hidden');
      } else {
        c.classList.add('hidden');
      }
    });
  }

  // Scroll Animations (Fade Up & Progress Bars)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

  let barsAnimated = false;
  function animateBars() {
    if (barsAnimated) return;
    barsAnimated = true;
    document.querySelectorAll('.bar-fill').forEach((b, i) => {
      setTimeout(() => { b.style.width = b.dataset.w + '%'; }, i * 100);
    });
  }

  const skillsEl = document.getElementById('skills');
  const skillsOb = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) animateBars();
    });
  }, { threshold: 0.3 });
  
  if (skillsEl) skillsOb.observe(skillsEl);
</script>
</body>
</html>
