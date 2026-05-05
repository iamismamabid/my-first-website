import React from 'react';

export default function Projects() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Minimal Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', borderBottom: '1px solid #27272a' }}>
        <a href="/" style={{ fontWeight: '800', letterSpacing: '-0.05em', fontSize: '1.5rem', color: '#fafafa', textDecoration: 'none' }}>
          IA.
        </a>
        <a href="/" style={{ fontSize: '0.875rem', color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s' }}>
          ← Back to Home
        </a>
      </nav>

      <main style={{ padding: '6rem 5% 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', letterSpacing: '-0.04em', margin: '0 0 1rem 0' }}>
          Selected Works.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '600px', marginBottom: '4rem' }}>
          A showcase of intelligent systems, AI integrations, and scalable web applications I've built.
        </p>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Project 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', backgroundColor: '#121214', border: '1px solid #27272a', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>IsmamStudio.ai</h2>
                <span style={{ fontSize: '0.875rem', color: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.1)', padding: '0.2rem 0.8rem', borderRadius: '999px' }}>AI SaaS Platform</span>
              </div>
              <a href="#" style={{ padding: '0.5rem 1.5rem', backgroundColor: '#fafafa', color: '#09090b', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>View Live Deployment</a>
            </div>
            <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>
              An AI-driven SaaS platform built with Next.js, Prisma, and MongoDB. Integrates advanced generative AI tools to automate workflows and enhance user experiences. Built with a focus on high availability and responsive UI.
            </p>
          </div>

          {/* Add more project cards here as needed */}

        </div>
      </main>
    </div>
  );
}
