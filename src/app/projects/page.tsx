import React, { useState } from 'react';

// 1. Define your color palettes
const themes = {
  dark: {
    bg: '#09090b',
    text: '#fafafa',
    muted: '#a1a1aa',
    border: '#27272a',
    cardBg: '#121214',
    btnBg: '#fafafa',
    btnText: '#09090b',
    badgeText: '#8b5cf6',
    badgeBg: 'rgba(139, 92, 246, 0.1)'
  },
  light: {
    bg: '#ffffff',
    text: '#09090b',
    muted: '#52525b',
    border: '#e4e4e7',
    cardBg: '#fafafa',
    btnBg: '#09090b',
    btnText: '#ffffff',
    badgeText: '#6d28d9', // Slightly darker purple for better contrast in light mode
    badgeBg: 'rgba(139, 92, 246, 0.15)'
  }
};

export default function Projects() {
  // 2. Initialize state (defaulting to dark mode)
  const [isDark, setIsDark] = useState(true);
  
  // 3. Select the active theme based on state
  const theme = isDark ? themes.dark : themes.light;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.bg, color: theme.text, fontFamily: 'Inter, system-ui, sans-serif', transition: 'all 0.3s ease' }}>
      
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', borderBottom: `1px solid ${theme.border}` }}>
        <a href="/" style={{ fontWeight: '800', letterSpacing: '-0.05em', fontSize: '1.5rem', color: theme.text, textDecoration: 'none' }}>
          IA.
        </a>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDark(!isDark)}
            style={{ 
              background: 'none', 
              border: `1px solid ${theme.border}`, 
              color: theme.text, 
              padding: '0.4rem 0.8rem', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <a href="/" style={{ fontSize: '0.875rem', color: theme.muted, textDecoration: 'none', transition: 'color 0.2s' }}>
            ← Back to Home
          </a>
        </div>
      </nav>

      <main style={{ padding: '6rem 5% 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', letterSpacing: '-0.04em', margin: '0 0 1rem 0' }}>
          Selected Works.
        </h1>
        <p style={{ fontSize: '1.25rem', color: theme.muted, maxWidth: '600px', marginBottom: '4rem' }}>
          A showcase of intelligent systems, AI integrations, and scalable web applications I've built.
        </p>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Project 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '12px', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>IsmamStudio.ai</h2>
                <span style={{ fontSize: '0.875rem', color: theme.badgeText, backgroundColor: theme.badgeBg, padding: '0.2rem 0.8rem', borderRadius: '999px' }}>
                  AI SaaS Platform
                </span>
              </div>
              <a href="#" style={{ padding: '0.5rem 1.5rem', backgroundColor: theme.btnBg, color: theme.btnText, borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
                View Live Deployment
              </a>
            </div>
            <p style={{ color: theme.muted, lineHeight: '1.6' }}>
              An AI-driven SaaS platform built with Next.js, Prisma, and MongoDB. Integrates advanced generative AI tools to automate workflows and enhance user experiences. Built with a focus on high availability and responsive UI.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
