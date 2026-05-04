import { useEffect, useState } from 'react';

export default function ProfessionalHome() {
  const [apiStatus, setApiStatus] = useState('Checking systems...');
  const [isApiOnline, setIsApiOnline] = useState(false);

  useEffect(() => {
    // Dynamic health check that updates the UI indicator
    fetch('http://localhost:5000/api/health')
      .then(response => {
        if (response.ok) {
          setApiStatus('All systems operational');
          setIsApiOnline(true);
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(() => {
        setApiStatus('Backend disconnected');
        setIsApiOnline(false);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Navigation / Top Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', borderBottom: '1px solid #27272a' }}>
        <div style={{ fontWeight: '800', letterSpacing: '-0.05em', fontSize: '1.5rem' }}>
          IA.
        </div>
        
        {/* Live System Status Indicator */}
        <div style={{ fontSize: '0.875rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#18181b', padding: '0.4rem 1rem', borderRadius: '999px', border: '1px solid #27272a' }}>
          <span style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            backgroundColor: isApiOnline ? '#10b981' : '#ef4444',
            boxShadow: isApiOnline ? '0 0 8px rgba(16, 185, 129, 0.4)' : 'none'
          }}></span>
          {apiStatus}
        </div>
      </nav>

      {/* Main Hero Section */}
      <main style={{ padding: '6rem 5% 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Context Pill */}
        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '999px', fontSize: '0.875rem', color: '#e4e4e7', marginBottom: '2rem' }}>
          <span style={{ color: '#8b5cf6', marginRight: '0.5rem' }}>✦</span> 
          Available for new opportunities
        </div>

        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.04em', margin: '0 0 1.5rem 0' }}>
          Software Engineer.<br />
          <span style={{ color: '#52525b' }}>System Architect.</span>
        </h1>

        <p style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '750px', lineHeight: '1.6', marginBottom: '3rem' }}>
          I engineer intelligent, highly scalable web systems. Currently finalizing my Computer Science & Engineering degree and actively developing AI-driven SaaS platforms like IsmamStudio.ai using the modern web stack.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="/Ismam_Abid_Resume.pdf" 
            download="Ismam_Abid_Resume.pdf" 
            style={{ padding: '1rem 2.5rem', backgroundColor: '#fafafa', color: '#09090b', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            View Resume
          </a>
          <a 
            href="mailto:ismamabidone@gmail.com" 
            style={{ padding: '1rem 2.5rem', backgroundColor: '#09090b', color: '#fafafa', border: '1px solid #27272a', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s' }}
          >
            Contact Me
          </a>
        </div>

        {/* Expertise Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '6rem' }}>
          
          {/* Card 1 */}
          <div style={{ padding: '2rem', backgroundColor: '#121214', borderRadius: '12px', border: '1px solid #27272a' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#fafafa' }}>Modern Tech Stack</h3>
            <p style={{ color: '#a1a1aa', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Building robust, type-safe applications with React, Next.js, and TypeScript. Experienced in designing complex database schemas using Prisma and MongoDB.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ padding: '2rem', backgroundColor: '#121214', borderRadius: '12px', border: '1px solid #27272a' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#fafafa' }}>AI Integration</h3>
            <p style={{ color: '#a1a1aa', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Leveraging advanced generative AI tools and prompt engineering to automate workflows, build intelligent SaaS features, and enhance user experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ padding: '2rem', backgroundColor: '#121214', borderRadius: '12px', border: '1px solid #27272a' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#fafafa' }}>Production Ready</h3>
            <p style={{ color: '#a1a1aa', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Focused on delivering performant, SEO-optimized, and highly available architectures capable of handling real-world user traffic and data operations.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
