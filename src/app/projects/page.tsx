import React, { useEffect, useState } from 'react';

export default function Projects() {
  // Global theme toggle logic
  const [theme, setTheme] = useState('dark');

  // Check the current global theme on load
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);
  }, []);

  // Function to switch themes globally across the entire app
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    // Background color is handled globally by your CSS body tag now, so we leave it transparent here
    <div style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
      
      {/* ⚠️ NOTE: If you are already using a global <Navbar /> in your App.jsx, 
          you can safely delete this <nav> section to avoid having two navbars! */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', borderBottom: '1px solid var(--border-subtle)' }}>
        <a href="/" style={{ fontWeight: '800', letterSpacing: '-0.05em', fontSize: '1.5rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
          IA.
        </a>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {/* Global Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'transparent', 
              border: '1px solid var(--border-subtle)', 
              color: 'var(--text-primary)', 
              padding: '0.4rem 0.8rem', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'all 0.2s'
            }}
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>

          <a href="/#/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
            ← Back to Home
          </a>
        </div>
      </nav>

      <main style={{ padding: '6rem 5% 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', letterSpacing: '-0.04em', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
          Selected Works.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '4rem' }}>
          A showcase of intelligent systems, AI integrations, and scalable web applications I've built.
        </p>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Project 1 */}
          {/* Notice I added your 'glass-card' class here for the hover effect! */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-subtle)', borderRadius: '12px', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>IsmamStudio.ai</h2>
                <span style={{ fontSize: '0.875rem', color: 'var(--accent-color)', backgroundColor: 'var(--accent-glow)', padding: '0.2rem 0.8rem', borderRadius: '999px' }}>
                  AI SaaS Platform
                </span>
              </div>
              <a href="#" style={{ padding: '0.5rem 1.5rem', backgroundColor: 'var(--text-primary)', color: 'var(--bg-main)', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
                View Live Deployment
              </a>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              An AI-driven SaaS platform built with Next.js, Prisma, and MongoDB. Integrates advanced generative AI tools to automate workflows and enhance user experiences. Built with a focus on high availability and responsive UI.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
