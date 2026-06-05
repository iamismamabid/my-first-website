"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- CSS INJECTION FOR ANIMATIONS & HOVER EFFECTS ---
const GlobalStyles = () => (
  <style>{`
    .fade-up-hidden { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
    .fade-up-visible { opacity: 1; transform: translateY(0); }
    .glass-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .glass-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.3); }
    .filter-btn { transition: all 0.2s ease; }
    .filter-btn:hover { background: rgba(255, 255, 255, 0.1); }
    .filter-btn.active { background: #fafafa; color: #000; }
    .nav-btn { transition: all 0.3s ease; }
    .nav-btn:hover { background: #fafafa; color: #000 !important; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    .cursor { animation: blink 1s step-end infinite; color: #8b5cf6; }
  `}</style>
);

// --- SCROLL REVEAL COMPONENT ---
const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={isVisible ? 'fade-up-visible' : 'fade-up-hidden'}>
      {children}
    </div>
  );
};

export default function ProfessionalHome() {
  const [apiStatus, setApiStatus] = useState('Initializing connection...');
  const [isApiOnline, setIsApiOnline] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Typewriter State
  const [typewriterText, setTypewriterText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["intelligent SaaS.", "AI pipelines.", "scalable systems."];

  // API Health Check
  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => {
        if (res.ok) { setApiStatus('System Operational'); setIsApiOnline(true); } 
        else throw new Error('Network error');
      })
      .catch(() => { setApiStatus('Offline / Local Mode'); setIsApiOnline(false); });
  }, []);

  // Typewriter Effect Logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end of word
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypewriterText(currentWord.substring(0, typewriterText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, wordIndex]);

  // Data Objects
  const projects = [
    { id: 1, title: 'IsmamStudio.ai', category: 'AI SaaS', tech: 'Next.js 15, Prisma, AI SDK', desc: 'Automated digital publishing and workflow automation platform.' },
    { id: 2, title: 'WordSearchStudio', category: 'Full Stack', tech: 'React, Node.js, MongoDB', desc: 'Complex algorithmic puzzle generator with global state management.' },
    { id: 3, title: 'AI Book Generator', category: 'AI SaaS', tech: 'TypeScript, OpenAI API', desc: 'End-to-end pipeline for generating structured literary content.' },
    { id: 4, title: 'System Logger', category: 'Dev Tools', tech: 'Go, Docker', desc: 'High-performance microservice for distributed logging.' },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ 
      minHeight: '100vh', backgroundColor: '#030303', 
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(28, 28, 36, 1) 0%, rgba(3, 3, 3, 1) 70%)',
      color: '#fafafa', fontFamily: '"Inter", system-ui, -apple-system, sans-serif', overflowX: 'hidden'
    }}>
      <GlobalStyles />
      
      {/* Navbar */}
      <div style={{ padding: '2rem 5%', position: 'sticky', top: 0, zIndex: 50 }}>
        <nav style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto',
          padding: '1rem 2rem', backgroundColor: 'rgba(15, 15, 15, 0.4)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontWeight: '800', letterSpacing: '-0.05em', fontSize: '1.25rem' }}>
            IA<span style={{ color: '#8b5cf6' }}>.</span>
          </div>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ 
              width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isApiOnline ? '#10b981' : '#52525b',
              boxShadow: isApiOnline ? '0 0 12px rgba(16, 185, 129, 0.6)' : 'none', transition: 'all 0.3s ease'
            }}></span>
            {apiStatus}
          </div>
        </nav>
      </div>

      <main style={{ padding: '4rem 5% 8rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HERO SECTION */}
        <ScrollReveal>
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', 
            backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '999px', fontSize: '0.875rem', color: '#d4d4d8', marginBottom: '2.5rem'
          }}>
            <span style={{ color: '#8b5cf6', fontSize: '1rem' }}>✧</span> 
            <span>Developing IsmamStudio.ai</span>
            <span style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255,255,255,0.2)' }}></span>
            <span>Available for MS/MSc Opportunities</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-0.05em', margin: '0 0 2rem 0' }}>
            Software Engineer.<br />
            <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #71717a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              System Architect.
            </span>
          </h1>

          <div style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: '600', marginBottom: '1.5rem', color: '#e4e4e7', minHeight: '40px' }}>
            I build <span style={{ color: '#8b5cf6' }}>{typewriterText}</span><span className="cursor">|</span>
          </div>

          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.35rem)', color: '#a1a1aa', maxWidth: '800px', lineHeight: '1.6', marginBottom: '4rem' }}>
            Specializing in Next.js 15, TypeScript, and Prisma, I architect robust data pipelines and AI-driven Micro-SaaS platforms designed for high-performance automation.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="/Ismam_Abid_Resume.pdf" className="nav-btn" style={{ padding: '1.25rem 3rem', backgroundColor: '#ffffff', color: '#000000', borderRadius: '12px', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              Download Resume <span>↓</span>
            </a>
            <a href="mailto:ismamabidone@gmail.com" style={{ padding: '1.25rem 3rem', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fafafa', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', fontWeight: '600', textDecoration: 'none' }}>
              Initiate Contact
            </a>
          </div>
        </ScrollReveal>

        {/* BENTO BOX EXPERTISE */}
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '8rem' }}>
            <div className="glass-card" style={{ padding: '3rem 2rem', backgroundColor: 'rgba(20, 20, 22, 0.5)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>⚙️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Advanced Tech Stack</h3>
              <p style={{ color: '#a1a1aa', lineHeight: '1.7' }}>Building robust, type-safe applications with Next.js 15 and TypeScript. Designing complex schemas using Prisma and MongoDB.</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem 2rem', backgroundColor: 'rgba(20, 20, 22, 0.5)', borderRadius: '24px', border: '1px solid rgba(139, 92, 246, 0.2)', backgroundImage: 'linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, transparent 100%)' }}>
               <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>🧠</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Generative AI Integration</h3>
              <p style={{ color: '#a1a1aa', lineHeight: '1.7' }}>Leveraging the AI SDK and LLMs to automate workflows. Building intelligent features for SaaS specifically targeting digital publishing.</p>
            </div>
          </div>
        </ScrollReveal>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '6rem 0' }} />

        {/* PROJECTS SECTION */}
        <ScrollReveal>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>Featured Works</h2>
          
          {/* Project Filters */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['All', 'AI SaaS', 'Full Stack', 'Dev Tools'].map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                style={{ 
                  padding: '0.5rem 1.5rem', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.2)', 
                  background: activeFilter === filter ? '#fafafa' : 'transparent', 
                  color: activeFilter === filter ? '#000' : '#fafafa', cursor: 'pointer', fontWeight: '600'
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map(project => (
              <div key={project.id} className="glass-card" style={{ padding: '2rem', backgroundColor: 'rgba(20, 20, 22, 0.5)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.75rem', color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>{project.category}</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0.5rem 0 1rem 0' }}>{project.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.desc}</p>
                <div style={{ fontSize: '0.85rem', color: '#d4d4d8', padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                  🛠 {project.tech}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '6rem 0' }} />

        {/* SKILLS SECTION */}
        <ScrollReveal>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem' }}>Technical Arsenal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '1.5rem' }}>Frontend & Frameworks</h3>
              {[ { name: 'Next.js 15', val: '90%' }, { name: 'React / TypeScript', val: '95%' }, { name: 'Tailwind CSS', val: '85%' } ].map(skill => (
                <div key={skill.name} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span>{skill.name}</span><span style={{ color: '#a1a1aa' }}>{skill.val}</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: skill.val, height: '100%', backgroundColor: '#8b5cf6', borderRadius: '99px', transition: 'width 1.5s ease-out' }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '1.5rem' }}>Backend & Database</h3>
              {[ { name: 'Node.js / Express', val: '85%' }, { name: 'Prisma ORM', val: '90%' }, { name: 'MongoDB / PostgreSQL', val: '80%' } ].map(skill => (
                <div key={skill.name} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span>{skill.name}</span><span style={{ color: '#a1a1aa' }}>{skill.val}</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: skill.val, height: '100%', backgroundColor: '#10b981', borderRadius: '99px', transition: 'width 1.5s ease-out' }}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

      </main>
    </div>
  );
}
