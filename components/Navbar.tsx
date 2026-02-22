'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Resources', href: '#devotionals' },
    { label: 'Community', href: '#community' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md py-2' : 'shadow-sm py-3'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <Image
                src='/images/LOGO.png'
                alt='Creative Kids Bible Club'
                width={180}
                height={80}
                className="h-12 w-auto transition-all duration-300"
                priority
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Poppins'] px-4 py-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins'] bg-[#2e3973] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#2e3973]/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              Get Resources
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-slate-50 border-t">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Poppins'] block px-4 py-3 text-gray-700 hover:text-[#2e3973] hover:bg-white rounded-lg transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins'] flex items-center justify-center gap-2 bg-[#2e3973] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#2e3973]/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Resources <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;