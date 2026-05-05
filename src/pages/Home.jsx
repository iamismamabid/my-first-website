import { useEffect, useState } from 'react';

export default function ProfessionalHome() {
  const [apiStatus, setApiStatus] = useState('Checking systems...');
  const [isApiOnline, setIsApiOnline] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Dynamic health check
    fetch('http://localhost:5000/api/health')
      .then(response => {
        if (response.ok) {
          setApiStatus('System Operational');
          setIsApiOnline(true);
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(() => {
        setApiStatus('Backend Disconnected');
        setIsApiOnline(false);
      });
  }, []);

  // Self-contained CSS for dynamic hovers and theme variables
  const styles = `
    :root {
      --bg-color: ${isDarkMode ? '#050505' : '#ffffff'};
      --text-main: ${isDarkMode ? '#ffffff' : '#000000'};
      --text-muted: ${isDarkMode ? '#888888' : '#666666'};
      --border-color: ${isDarkMode ? '#222222' : '#eaeaea'};
      --card-bg: ${isDarkMode ? '#0a0a0a' : '#fafafa'};
      --btn-primary-bg: ${isDarkMode ? '#ffffff' : '#000000'};
      --btn-primary-text: ${isDarkMode ? '#000000' : '#ffffff'};
      --btn-secondary-bg: transparent;
      --btn-secondary-text: ${isDarkMode ? '#ffffff' : '#000000'};
    }

    body {
      margin: 0;
      background-color: var(--bg-color);
      transition: background-color 0.4s ease;
    }

    .container {
      min-height: 100vh;
      color: var(--text-main);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      transition: color 0.4s ease;
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 5%;
      border-bottom: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      font-weight: 800;
      letter-spacing: -0.05em;
      font-size: 1.5rem;
    }

    .status-pill {
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--card-bg);
      padding: 0.5rem 1rem;
      border-radius: 999px;
      border: 1px solid var(--border-color);
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${isApiOnline ? '#000000' : '#ff3333'};
      /* Use green for online in dark mode, black in light mode to fit the theme */
      ${isDarkMode && isApiOnline ? 'background-color: #10b981;' : ''}
      box-shadow: ${isApiOnline && isDarkMode ? '0 0 8px rgba(16, 185, 129, 0.5)' : 'none'};
      animation: ${isApiOnline ? 'pulse 2s infinite' : 'none'};
    }

    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    .hero {
      padding: 8rem 5% 4rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: clamp(3rem, 8vw, 5.5rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin: 0 0 1.5rem 0;
    }

    .hero-subtitle {
      color: var(--text-muted);
      display: block;
    }

    .hero p {
      font-size: clamp(1.1rem, 2vw, 1.25rem);
      color: var(--text-muted);
      max-width: 650px;
      line-height: 1.7;
      margin-bottom: 3rem;
      font-weight: 400;
    }

    .btn-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 0.875rem 2rem;
      border-radius: 6px;
      font-weight: 500;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-primary {
      background-color: var(--btn-primary-bg);
      color: var(--btn-primary-text);
      border: 1px solid var(--btn-primary-bg);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .btn-secondary {
      background-color: var(--btn-secondary-bg);
      color: var(--btn-secondary-text);
      border: 1px solid var(--border-color);
    }

    .btn-secondary:hover {
      background-color: var(--border-color);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 6rem;
    }

    .card {
      padding: 2rem;
      background-color: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .card:hover {
      border-color: var(--text-muted);
      transform: translateY(-4px);
    }

    .card h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      letter-spacing: -0.02em;
    }

    .card p {
      color: var(--text-muted);
      line-height: 1.6;
      font-size: 0.95rem;
      margin: 0;
    }

    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-main);
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0.5rem;
      margin-right: 1rem;
      transition: transform 0.2s;
    }
    
    .theme-toggle:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        
        {/* Navigation */}
        <nav className="nav-bar">
          <div className="logo">IA.</div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              className="theme-toggle" 
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            <div className="status-pill">
              <span className="status-dot"></span>
              {apiStatus}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="hero">
          
          {/* Minimalist Context Tag */}
          <div style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '1px', backgroundColor: 'var(--text-muted)' }}></span>
            Available for new opportunities
          </div>

          <h1>
            Software Engineer.<br />
            <span className="hero-subtitle">System Architect.</span>
          </h1>

          <p>
            I engineer intelligent, highly scalable web systems. Currently finalizing my Computer Science & Engineering degree and actively developing AI-driven SaaS platforms like IsmamStudio.ai using the modern web stack.
          </p>

          {/* Action Buttons */}
          <div className="btn-group">
            <a href="/Ismam_Abid_Resume.pdf" download="Ismam_Abid_Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
            <a href="mailto:ismamabidone@gmail.com" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>

          {/* Expertise Grid */}
          <div className="grid">
            <div className="card">
              <h3>Modern Tech Stack</h3>
              <p>Building robust, type-safe applications with React, Next.js, and TypeScript. Experienced in designing complex database schemas using Prisma and MongoDB.</p>
            </div>

            <div className="card">
              <h3>AI Integration</h3>
              <p>Leveraging advanced generative AI tools and prompt engineering to automate workflows, build intelligent SaaS features, and enhance user experiences.</p>
            </div>

            <div className="card">
              <h3>Production Ready</h3>
              <p>Focused on delivering performant, SEO-optimized, and highly available architectures capable of handling real-world user traffic and data operations.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
