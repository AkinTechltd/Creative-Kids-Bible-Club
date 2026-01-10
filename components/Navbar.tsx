'use client'
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 500);
    }
  }, [cartCount]);

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

          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="#home" 
              className="font-['Poppins'] px-4 py-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="font-['Poppins'] px-4 py-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all font-medium"
            >
              About Us
            </a>
            <a 
              href="#devotionals" 
              className="font-['Poppins'] px-4 py-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all font-medium"
            >
              Devotionals
            </a>
            <a 
              href="#community" 
              className="font-['Poppins'] px-4 py-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all font-medium"
            >
              Community
            </a>
            <a 
              href="#contact" 
              className="font-['Poppins'] px-4 py-2 text-gray-700 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 text-gray-600 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all ${
                cartBounce ? 'animate-bounce' : ''
              }`}
              type="button"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-br from-[#f0614b] to-[#ff7a5c] text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold px-1.5 shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <a 
              href="#devotionals"
              className="font-['Poppins'] bg-[#2e3973] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#2e3973]/90 transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 text-gray-600 hover:text-[#2e3973] hover:bg-slate-50 rounded-lg transition-all ${
                cartBounce ? 'animate-bounce' : ''
              }`}
              type="button"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-br from-[#f0614b] to-[#ff7a5c] text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold px-1.5 shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
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

      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-slate-50 border-t">
          <a 
            href="#home" 
            className="font-['Poppins'] block px-4 py-3 text-gray-700 hover:text-[#2e3973] hover:bg-white rounded-lg transition-all font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="font-['Poppins'] block px-4 py-3 text-gray-700 hover:text-[#2e3973] hover:bg-white rounded-lg transition-all font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#devotionals" 
            className="font-['Poppins'] block px-4 py-3 text-gray-700 hover:text-[#2e3973] hover:bg-white rounded-lg transition-all font-medium"
            onClick={() => setIsOpen(false)}
          >
            Devotionals
          </a>
          <a 
            href="#community" 
            className="font-['Poppins'] block px-4 py-3 text-gray-700 hover:text-[#2e3973] hover:bg-white rounded-lg transition-all font-medium"
            onClick={() => setIsOpen(false)}
          >
            Community
          </a>
          <a 
            href="#contact" 
            className="font-['Poppins'] block px-4 py-3 text-gray-700 hover:text-[#2e3973] hover:bg-white rounded-lg transition-all font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="pt-3">
            <a 
              href="#devotionals"
              className="font-['Poppins'] block text-center bg-[#2e3973] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#2e3973]/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;