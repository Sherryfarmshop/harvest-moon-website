'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const linkClass = "text-[#292929] text-[11px] font-bold tracking-[0.2em] uppercase font-source hover:text-[#8B2500] transition-colors";
  const mobileLinkClass = "block text-[#292929] text-sm font-bold uppercase tracking-wider font-source py-1";

  // Collections — add more here when ready
  const activeCollections = [
    { label: 'Seasonal Favorites', href: '#shop' },
    // Hidden until ready:
    // { label: 'Pasture-Raised Chicken', href: '#chicken' },
    // { label: 'Farmhouse Pantry', href: '#pantry' },
    // { label: 'Farmhouse Gifts', href: '#gifts' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            <a href="#home" className={linkClass}>Home</a>
            <a href="#gallery" className={linkClass}>Our Farm</a>

            {/* Shop Dropdown */}
            <div className="relative" ref={shopRef}>
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className={`${linkClass} flex items-center gap-1`}
              >
                Shop
                <svg className={`w-3 h-3 transition-transform ${shopOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {shopOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#E5D9C8] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  {activeCollections.map((col) => (
                    <a
                      key={col.href}
                      href={col.href}
                      onClick={() => setShopOpen(false)}
                      className="block px-5 py-2.5 font-source text-[11px] font-bold uppercase tracking-[0.15em] text-[#3D2B1F] hover:text-[#4A5D3A] hover:bg-[#F7F3ED] transition-colors"
                    >
                      {col.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className={linkClass}>Contact</a>
            <a href="#reserve" className="bg-[#4A5D3A] text-white text-[11px] font-semibold tracking-[0.15em] uppercase font-source px-5 py-2 hover:bg-[#3E4F31] transition-colors rounded-sm">Reserve My Chickens</a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 space-y-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>Home</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>Our Farm</a>

          {/* Mobile Shop dropdown */}
          <button
            onClick={() => setMobileShopOpen(!mobileShopOpen)}
            className="flex items-center justify-between w-full text-[#292929] text-sm font-bold uppercase tracking-wider font-source py-1"
          >
            Shop
            <svg className={`w-3 h-3 transition-transform ${mobileShopOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileShopOpen && (
            <div className="pl-4 space-y-2">
              {activeCollections.map((col) => (
                <a
                  key={col.href}
                  href={col.href}
                  onClick={() => { setMenuOpen(false); setMobileShopOpen(false); }}
                  className="block font-source text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5D3A] py-1"
                >
                  {col.label}
                </a>
              ))}
            </div>
          )}

          <a href="#contact" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>Contact</a>
          <a href="#reserve" onClick={() => setMenuOpen(false)} className="block bg-[#4A5D3A] text-white text-center py-2.5 text-sm uppercase tracking-wider font-source font-semibold mt-2 rounded-sm">Reserve My Chickens</a>
        </div>
      </div>
    </nav>
  );
}



