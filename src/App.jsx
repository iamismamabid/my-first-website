import { HashRouter, Routes, Route } from 'react-router-dom';

// Import your components and pages
// Make sure these paths match your actual folder structure!
import Navbar from './components/Navbar';
import ProfessionalHome from './pages/ProfessionalHome'; // or './ProfessionalHome'
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    /* If your GitHub repo is named "portfolio", you can add:
      <HashRouter basename="/portfolio"> 
    */
    <HashRouter>
      {/* This wrapper ensures the app takes up the full screen 
        and works perfectly with the global CSS theme variables 
      */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Global Navbar - stays fixed across all pages */}
        <Navbar />
        
        {/* Page Content area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<ProfessionalHome />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </HashRouter>
  );
}
