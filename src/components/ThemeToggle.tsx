'use client'; // This tells Next.js this component runs on the browser
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  // Load the initial theme safely after the component mounts on the browser
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-btn"
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        border: '1px solid var(--text-secondary)',
        background: 'transparent',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        fontWeight: 500
      }}
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
