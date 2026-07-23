'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Farm', href: '#gallery' },
  { label: 'Shop (Opening 2027)', href: '#offerings' },
  { label: 'Farm Stand', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-soft-white/95 backdrop-blur shadow-md'
          : 'bg-soft-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Spacer for left */}
          <div className="w-8" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-text hover:text-barn-red transition-colors text-xs font-semibold tracking-[0.15em] uppercase font-source"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserve"
              className="bg-forest-green hover:bg-forest-green/90 text-cream px-5 py-2.5 text-xs font-source font-semibold uppercase tracking-[0.15em] transition-colors"
            >
              Reserve My Chickens
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-dark-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-soft-white/95 backdrop-blur border-t border-warm-brown/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-dark-text hover:text-barn-red transition-colors text-sm font-medium tracking-wide uppercase font-source py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setMenuOpen(false)}
            className="block bg-forest-green text-cream text-center px-5 py-2.5 font-source font-semibold text-sm uppercase tracking-wider mt-2"
          >
            Reserve My Chickens
          </a>
        </div>
      </div>
    </nav>
  );
}
