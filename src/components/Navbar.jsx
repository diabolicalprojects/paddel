import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: id,
        autoKill: true
      },
      ease: "power4.inOut"
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out flex justify-center ${scrolled ? 'pt-4 px-4' : 'pt-6 px-6'}`}>
      <div className={`w-full max-w-6xl flex justify-between items-center transition-all duration-300 ease-out rounded-[0.5rem] ${
        scrolled 
          ? 'glass-panel px-6 py-3 shadow-2xl border border-[rgba(255,255,255,0.05)]' 
          : 'bg-transparent px-2 py-2'
      }`}>
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="X3 Padel Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Instalaciones', id: '#instalaciones' },
            { name: 'Academia', id: '#academia' },
            { name: 'Ligas', id: '#ligas' },
            { name: 'Membresías', id: '#planes' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.id} 
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-sm font-bold text-gray-300 hover:text-padel transition-colors uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={(e) => scrollToSection(e, '#planes')}
            className="bg-padel text-carbon px-6 py-2.5 font-black uppercase tracking-wider text-sm rounded-[0.25rem] hover:bg-white transition-colors"
          >
            Únete al Club
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 glass-panel rounded-[0.5rem] p-4 flex flex-col gap-4 md:hidden border border-[rgba(255,255,255,0.05)]">
          {[
            { name: 'Instalaciones', id: '#instalaciones' },
            { name: 'Academia', id: '#academia' },
            { name: 'Ligas', id: '#ligas' },
            { name: 'Membresías', id: '#planes' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.id} 
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-base font-bold text-white hover:text-padel transition-colors uppercase tracking-wider py-2"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={(e) => scrollToSection(e, '#planes')}
            className="bg-padel text-carbon px-5 py-4 font-black uppercase tracking-wider text-base rounded-[0.25rem] text-center mt-2"
          >
            Únete al Club
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
