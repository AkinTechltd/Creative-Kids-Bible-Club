'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resources', href: '#devotionals' },
    { label: 'Programs', href: '#programs' },
    { label: 'Free Downloads', href: '#free-resources' },
    { label: 'Community', href: '#community' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_2px_0_#2e3973]' : 'border-b-2 border-[#2e3973]'}`}>
      {/* Top ticker strip — editorial newspaper convention */}
      <div className="bg-[#2e3973] text-white text-[10px] font-['Poppins'] font-bold uppercase tracking-[0.2em] py-1.5 text-center">
        ✦ Raising a Supernatural Army Since 2020 &nbsp;·&nbsp; 2,500+ Families &nbsp;·&nbsp; 40+ Countries &nbsp;·&nbsp; Biblically Sound &nbsp;·&nbsp; Kingdom-Focused ✦
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <a href="#home" className="flex items-center">
            <Image
              src='/images/LOGO.png'
              alt='Creative Kids Bible Club'
              width={160}
              height={70}
              className="h-11 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav — underline hover, no bg pills */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Poppins'] text-sm text-gray-700 hover:text-[#f0614b] transition-colors font-semibold relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#f0614b] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins'] bg-[#f0614b] text-white px-5 py-2 text-sm font-bold hover:bg-[#2e3973] transition-colors flex items-center gap-1.5 border-2 border-[#f0614b] hover:border-[#2e3973]"
            >
              Get Resources <ExternalLink size={13} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#2e3973]"
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="border-t-2 border-[#2e3973] bg-[#fafaf9] px-4 py-4">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-['Poppins'] block py-3 text-[#2e3973] font-semibold text-sm hover:text-[#f0614b] transition-colors ${i < navLinks.length - 1 ? 'border-b border-gray-100' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins'] flex items-center justify-center gap-2 bg-[#f0614b] text-white px-4 py-3 font-bold text-sm"
              onClick={() => setIsOpen(false)}
            >
              Get Resources <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;