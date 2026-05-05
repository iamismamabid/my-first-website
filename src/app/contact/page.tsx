import React from 'react';

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Minimal Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', borderBottom: '1px solid #27272a' }}>
        <a href="/" style={{ fontWeight: '800', letterSpacing: '-0.05em', fontSize: '1.5rem', color: '#fafafa', textDecoration: 'none' }}>
          IA.
        </a>
        <a href="/" style={{ fontSize: '0.875rem', color: '#a1a1aa', textDecoration: 'none' }}>
          ← Back to Home
        </a>
      </nav>

      <main style={{ padding: '6rem 5% 4rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', letterSpacing: '-0.04em', margin: '0 0 1rem 0' }}>
          Let's Connect.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#a1a1aa', marginBottom: '3rem' }}>
          Currently exploring new opportunities. Reach out if you'd like to collaborate on a scalable web system or AI integration.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Contact Form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#e4e4e7' }}>Name</label>
              <input type="text" placeholder="John Doe" style={{ padding: '1rem', backgroundColor: '#121214', border: '1px solid #27272a', borderRadius: '8px', color: '#fafafa', outline: 'none' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#e4e4e7' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={{ padding: '1rem', backgroundColor: '#121214', border: '1px solid #27272a', borderRadius: '8px', color: '#fafafa', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#e4e4e7' }}>Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." style={{ padding: '1rem', backgroundColor: '#121214', border: '1px solid #27272a', borderRadius: '8px', color: '#fafafa', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <button type="button" style={{ padding: '1rem 2rem', backgroundColor: '#fafafa', color: '#09090b', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', border: 'none', marginTop: '1rem' }}>
              Send Message
            </button>
          </form>

          {/* Socials / Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: '#121214', border: '1px solid #27272a', borderRadius: '12px', height: 'fit-content' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Direct Email</h3>
              <a href="mailto:ismamabidone@gmail.com" style={{ color: '#a1a1aa', textDecoration: 'none' }}>ismamabidone@gmail.com</a>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Social Profiles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>↗ GitHub</a>
                <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>↗ LinkedIn</a>
                <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>↗ Twitter / X</a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
