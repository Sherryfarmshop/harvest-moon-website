'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-14 gap-10">
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#3D2B1F] text-[11px] font-medium tracking-[0.2em] uppercase font-source hover:text-[#8B2500] transition-colors">Home</a>
            <a href="#farm" className="text-[#3D2B1F] text-[11px] font-medium tracking-[0.2em] uppercase font-source hover:text-[#8B2500] transition-colors">Our Farm</a>
            <a href="#shop" className="text-[#3D2B1F] text-[11px] font-medium tracking-[0.2em] uppercase font-source hover:text-[#8B2500] transition-colors">Shop (Opening 2027)</a>
            <a href="#farmstand" className="text-[#3D2B1F] text-[11px] font-medium tracking-[0.2em] uppercase font-source hover:text-[#8B2500] transition-colors">Farm Stand</a>
            <a href="#contact" className="text-[#3D2B1F] text-[11px] font-medium tracking-[0.2em] uppercase font-source hover:text-[#8B2500] transition-colors">Contact</a>
            <a href="#reserve" className="bg-[#4A5D3A] text-white text-[11px] font-semibold tracking-[0.15em] uppercase font-source px-5 py-2 hover:bg-[#3E4F31] transition-colors">Reserve My Chickens</a>
          </div>
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-[#3D2B1F] text-sm uppercase tracking-wider font-source py-1">Home</a>
          <a href="#farm" onClick={() => setMenuOpen(false)} className="block text-[#3D2B1F] text-sm uppercase tracking-wider font-source py-1">Our Farm</a>
          <a href="#shop" onClick={() => setMenuOpen(false)} className="block text-[#3D2B1F] text-sm uppercase tracking-wider font-source py-1">Shop (Opening 2027)</a>
          <a href="#farmstand" onClick={() => setMenuOpen(false)} className="block text-[#3D2B1F] text-sm uppercase tracking-wider font-source py-1">Farm Stand</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-[#3D2B1F] text-sm uppercase tracking-wider font-source py-1">Contact</a>
          <a href="#reserve" onClick={() => setMenuOpen(false)} className="block bg-[#4A5D3A] text-white text-center py-2.5 text-sm uppercase tracking-wider font-source font-semibold mt-2">Reserve My Chickens</a>
        </div>
      </div>
    </nav>
  );
}
