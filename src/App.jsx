// OLD (broken - files don't exist)
import ProfessionalHome from './pages/ProfessionalHome';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// NEW (use what you have)
import Home from './pages/Home';

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
  <Route path="/" element={<Home />} />
  <Route path="*" element={<Home />} /> {/* fallback */}
</Routes>
        </main>

      </div>
    </HashRouter>
  );
}
