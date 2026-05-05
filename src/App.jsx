import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
// File: src/App.jsx (or src/App.js)

import { HashRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import ProfessionalHome from './ProfessionalHome';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    {/* 
      If your GitHub repo is named "my-website", change this line to:
      <HashRouter basename="/my-website">
    */}
    <HashRouter>
      <Routes>
        {/* The Route paths tell React which component to load for which URL */}
        <Route path="/" element={<ProfessionalHome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
export default function App() {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
