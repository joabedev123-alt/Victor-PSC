import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { List, X, WhatsappLogo, InstagramLogo, Heart } from 'phosphor-react';
import { AnimatePresence, motion } from 'framer-motion';

// Component placeholders (to be expanded in separate files)
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Psicoterapia from './pages/Psicoterapia';
import Sexologia from './pages/Sexologia';
import Contato from './pages/Contato';
// import Demandas from './pages/Demandas';
// import ComoFunciona from './pages/ComoFunciona';
// import Depoimentos from './pages/Depoimentos';
// import Faq from './pages/Faq';
// import Blog from './pages/Blog';
// import Contato from './pages/Contato';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo01.png" alt="Dr. Victor Morais Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain', transform: 'scale(7.5)', transformOrigin: 'left center' }} />
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/sobre" className="nav-link">Sobre</Link>
          <Link to="/psicoterapia" className="nav-link">Psicoterapia</Link>
          <Link to="/sexologia" className="nav-link">Sexologia Clínica</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <List />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, width: '100%', background: '#fff', 
              padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid #eee'
            }}
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
            <Link to="/psicoterapia" onClick={() => setMobileMenuOpen(false)}>Psicoterapia</Link>
            <Link to="/sexologia" onClick={() => setMobileMenuOpen(false)}>Sexologia Clínica</Link>
            <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer style={{ backgroundColor: '#2B2B2B', color: '#fff', padding: '2rem 0 1rem 0', marginTop: 'auto' }}>
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
      
      {/* Logo */}
      <div style={{ flex: '1 1 250px', display: 'flex', justifyContent: 'center' }}>
        <img src="/logo 02.png" alt="Dr. Victor Morais Logo" style={{ height: '220px', width: 'auto', objectFit: 'contain' }} />
      </div>
      
      {/* Informações */}
      <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>
        <p style={{ margin: 0, fontWeight: 600, color: '#CFAF8B', fontSize: '1.1rem' }}>CRP 04/80003</p>
        <p style={{ margin: 0 }}>Psicoterapia Psicanalítica e Sexologia Clínica.</p>
        <p style={{ margin: 0 }}>Belo Horizonte • MG</p>
        <p style={{ margin: 0 }}>Atendimento Online para todo Brasil e brasileiros no exterior.</p>
      </div>

      {/* Contato */}
      <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ margin: 0, fontFamily: 'var(--font-title)', fontSize: '1.2rem', color: '#fff' }}>Contato</h4>
        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <WhatsappLogo size={22} weight="fill" color="#CFAF8B" /> (31) 98600-7610
        </p>
        <a href="https://www.instagram.com/psi.victormorais?igsh=MTJlenk2enE0MTNvYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <InstagramLogo size={22} weight="fill" color="#CFAF8B" /> @psi.victormorais
        </a>
      </div>

    </div>
    
    <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '1rem', textAlign: 'center', fontSize: '0.85rem', opacity: 0.8 }}>
      <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
        Produzida com <Heart weight="fill" color="#ffffff" size={14} /> por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#fff', letterSpacing: '0.05em' }}>CAMALY</a>
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main style={{ flex: 1, paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/psicoterapia" element={<Psicoterapia />} />
            <Route path="/sexologia" element={<Sexologia />} />
            <Route path="/contato" element={<Contato />} />
            {/* Fallback routes for now */}
            <Route path="*" element={<div className="container section text-center"><h1>Página em Construção</h1></div>} />
          </Routes>
        </main>

        <Footer />

        <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
