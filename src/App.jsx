import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div style={{ textAlign: 'center', padding: '2rem' }}><h2>404 - Page Not Found</h2></div>} />
      </Routes>
    </div>
  );
}
