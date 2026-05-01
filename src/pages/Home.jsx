export default function Home() {
  return (
    <div style={{ padding: '8rem 5%', color: '#ededed', maxWidth: '1000px', margin: '0 auto' }}>
      <span style={{ color: '#10b981', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
        System.out.println("Hello, World!");
      </span>
      
      <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: '1rem 0', fontWeight: '800', letterSpacing: '-0.03em' }}>
        Ismam Abid.
      </h1>
      
      <h2 style={{ color: '#a1a1aa', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.02em' }}>
        I engineer intelligent web systems.
      </h2>
      
      <p style={{ color: '#a1a1aa', marginTop: '2rem', maxWidth: '650px', lineHeight: '1.7', fontSize: '1.1rem' }}>
        Specializing in the MERN stack, Next.js, and TypeScript, I build highly scalable SaaS platforms, automated systems, and production-ready applications with a focus on deep AI integration.
      </p>

      {/* --- Action Buttons --- */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
        
        {/* The Download Button */}
        <a 
          href="/Ismam_Abid_Resume.pdf" 
          download="Ismam_Abid_Resume.pdf"
          style={{ 
            padding: '0.8rem 2rem', 
            backgroundColor: 'transparent', 
            color: '#10b981', 
            border: '1px solid #10b981', 
            borderRadius: '6px', 
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Download Resume ↓
        </a>

        {/* Email Contact Button */}
        <a 
          href="mailto:ismamabidone@gmail.com" 
          style={{ 
            padding: '0.8rem 2rem', 
            backgroundColor: '#141414', 
            color: '#ededed', 
            border: '1px solid #27272a', 
            borderRadius: '6px', 
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Get In Touch
        </a>

      </div>
    </div>
  );
}