'use client';

import { Instagram, Facebook, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fdf8f3] border-t-4 border-double border-[#2e3973] pt-12 pb-8 text-[#2e3973]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section: brand + columns */}
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b-2 border-[#2e3973]/10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src='/images/LOGO.png'
              alt='Creative Kids Bible Club Logo'
              width={150}
              height={75}
              className="mb-4"
            />
            <p className="font-['Poppins'] text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              Partnering with parents to raise a generation of children deeply rooted in God's Word, excelling in all areas of life, and boldly proclaiming Jesus.
            </p>
            {/* Social icons — flat, no pill backgrounds */}
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#f0614b] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#f0614b] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] text-[#2e3973] mb-4">Navigate</p>
            <ul className="font-['Poppins'] text-sm text-gray-500 space-y-2">
              {['Home#home', 'About Us#about', 'Resources#devotionals', 'Programs#programs', 'Free Downloads#free-resources', 'Blog#blog', 'Community#community', 'Contact#contact'].map(item => {
                const [label, href] = item.split('#');
                return (
                  <li key={label}>
                    <a href={`#${href}`} className="hover:text-[#f0614b] transition-colors">{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Programs + Shop */}
          <div>
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] text-[#2e3973] mb-4">Programs</p>
            <ul className="font-['Poppins'] text-sm text-gray-500 space-y-2 mb-8">
              {[
                ['The Wisdom Challenge', '#programs'],
                ['The Watchtower', '#programs'],
                ['The Global Circle', '#community'],
                ['Local Sessions (UK)', '#community'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-[#f0614b] transition-colors">{label}</a>
                </li>
              ))}
            </ul>

            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] text-[#2e3973] mb-3">Shop</p>
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins'] inline-flex items-center gap-2 bg-[#f0614b] text-white px-4 py-2.5 font-bold text-xs hover:bg-[#2e3973] transition-colors border-2 border-[#f0614b] hover:border-[#2e3973] group"
            >
              Get Resources <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-['Poppins'] font-bold uppercase tracking-[0.2em] text-gray-400">
          <p>© {currentYear} Creative Kids Bible Club · Founded by Queeneth Alobo</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#f0614b] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#f0614b] transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}