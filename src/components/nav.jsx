import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Menu } from 'lucide-react';
import logo from '../assets/Green 9 with Blue NO Badge.webp';
import whiteLogo from '../assets/white_logo.png';

export default function AppNav({ activeDropdown, setActiveDropdown, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (setActiveDropdown) setActiveDropdown('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      if (setActiveDropdown) setActiveDropdown(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, setActiveDropdown]);

  const menuItems = [
    { label: 'Home',     href: '#',        isPage: 'home'     },
    { label: 'Services', href: '#',        isPage: 'services' },
    { label: 'About Us', href: '#',        isPage: 'about'    },
    { label: 'Contact',  href: '#',        isPage: 'contact'  },
    { label: 'Our Work', href: '#',        isPage: 'our-work' },
  ];

  return (
    <>
      {/* ──────────────────────────────────────────────────────────
          1. CLOSED NAVBAR (Full width across screen corners)
      ────────────────────────────────────────────────────────── */}
      <header className="w-full bg-white border-b border-slate-100/80 sticky top-0 z-40 transition-all duration-200">
        <div className="w-full px-6 sm:px-10 lg:px-16 py-4 sm:py-7 flex items-center justify-between">

          {/* Left: Brand Logo */}
          <a href="#" className="flex items-center group focus:outline-none" aria-label="Home">
            <img
              src={logo}
              alt="Number 9"
              className="h-10 sm:h-18 w-auto object-contain block transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Right: Schedule a Call (pill) + Custom Hamburger Icon */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="px-5 sm:px-7 py-2 sm:py-4.5 rounded-full border-3 border-slate-200  text-[14px] sm:text-[17px] font-semibold bg-white hover:border-slate-900 hover:text-black transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] whitespace-nowrap"
            >
              Schedule a Call
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-10 h-10 hover:opacity-75 transition-opacity focus:outline-none cursor-pointer"
            >
              <Menu className="w-6 h-6 text-slate-900" strokeWidth={1.8} />
            </button>
          </div>

        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────
          2. OPENED FULL-SCREEN MENU (Full width across screen corners)
      ────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] bg-[#0e7428] text-white flex flex-col justify-between transition-all duration-400 ease-in-out overflow-y-auto ${isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
          }`}
        style={{
          backgroundImage: 'linear-gradient(135deg, #0d6b24 0%, #0e7428 50%, #11842e 100%)',
        }}
      >
        {/* Top Header Row inside Overlay - Full width matching closed navbar */}
        <div className="w-full px-6 sm:px-10 lg:px-16 py-4 sm:py-7 flex items-center justify-between shrink-0">

          <div className="flex items-center">
            <img
              src={whiteLogo}
              alt="Number 9"
              className="h-9 sm:h-18 w-auto object-contain block brightness-0 invert"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center text-white hover:rotate-90 hover:scale-110 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            <X className="w-8 h-8 stroke-[2.5]" />
          </button>
        </div>

        {/* Content Container */}
        <div className="w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-10">
          <div className="w-full max-w-xl lg:max-w-2xl">

            <div className="w-full h-[1px] bg-white/40" />

            <nav className="flex flex-col">
              {menuItems.map((item, idx) => {
                const isHovered = hoveredIndex === idx;

                return (
                  <div key={item.label} className="w-full">
                    <a
                      href={item.isPage ? '#' : item.href}
                      onClick={(e) => {
                        if (item.isPage && onNavigate) {
                          e.preventDefault();
                          onNavigate(item.isPage);
                        }
                        setIsMenuOpen(false);
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      className={`block w-full py-2.5 sm:py-3 transition-all duration-150 text-[18px] sm:text-[22px] lg:text-[24px] tracking-tight ${isHovered
                          ? 'bg-white text-[#0e7428] font-bold px-4 -mx-0 shadow-sm'
                          : 'text-white font-bold px-1 hover:text-white/90'
                        }`}
                    >
                      {item.label}
                    </a>

                    <div className="w-full h-[1px] bg-white/40" />
                  </div>
                );
              })}
            </nav>

            <div className="pt-6 sm:pt-8">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-white text-slate-900 hover:text-black font-bold text-[16px] sm:text-[18px] py-3.5 px-6 sm:px-8 rounded-full flex items-center justify-between shadow-lg hover:bg-slate-100 hover:scale-[1.01] transition-all duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

          </div>
        </div>

        <div className="h-6 sm:h-10 shrink-0" />
      </div>
    </>
  );
}