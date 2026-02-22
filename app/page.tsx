'use client'

// Main App page - organization focused, no ecommerce

import React from 'react';
import { 
  ChevronRight, Heart, Users, Mail, ExternalLink
} from 'lucide-react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Resources from '@/components/Devotional';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const Community = () => {
  return (
    <section id="community" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-['Poppins'] font-bold text-[#f0614b] text-xs uppercase tracking-[0.2em] mb-4 block">
            The Community
          </span>
          <h2 className="font-['Young_Serif'] text-4xl md:text-5xl text-[#2e3973] mb-6">
            Faith is better <span className="text-[#f0614b]">together.</span>
          </h2>
          <p className="font-['Poppins'] text-gray-500 max-w-2xl mx-auto text-lg">
            Join thousands of parents sharing tips, celebrating wins, and getting direct access to Queeneth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#f0614b]/5 p-12 rounded-[3rem] border-2 border-dashed border-[#f0614b]/20 text-center">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8">
              <Users className="text-[#f0614b]" size={32} />
            </div>
            <h3 className="font-['Young_Serif'] text-3xl text-[#2e3973] mb-4">Local Sessions</h3>
            <p className="font-['Poppins'] text-gray-600 mb-8">Hands-on teaching led by Queeneth in the UK. Perfect for deep bonding and real community.</p>
            <a
              href="#contact"
              className="font-['Poppins'] font-bold text-[#f0614b] flex items-center gap-2 mx-auto hover:gap-4 transition-all justify-center"
            >
              Enquire about events <ChevronRight size={20} />
            </a>
          </div>

          <div className="bg-[#2e3973] p-12 rounded-[3rem] text-center text-white relative">
            <div className="absolute top-4 right-4 animate-pulse">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="font-['Young_Serif'] text-3xl mb-4">The Global Circle</h3>
            <p className="font-['Poppins'] text-blue-100/80 mb-8">Can't make it in person? Our digital community is always open — parents encouraging each other across 40+ countries.</p>
            <button className="bg-white text-[#2e3973] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all font-['Poppins']">
              Join the Private Circle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="bg-[#2e3973] pt-16 md:pt-24 pb-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pb-16 md:pb-20 border-b border-white/10">

          {/* Left: Info */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-['Young_Serif'] text-3xl sm:text-4xl md:text-5xl leading-tight">
              We're just an <br />
              <span className="text-[#f0614b]">email away.</span>
            </h2>
            <p className="font-['Poppins'] text-blue-100/60 text-sm sm:text-base max-w-sm">
              Questions about our programs, resources, or community? We'd love to hear from you.
            </p>

            {/* Email — truncates gracefully on small screens */}
            <div>
              <a
                href="mailto:info@creativekidsbibleclub.com"
                className="flex items-center gap-3 group w-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#f0614b] transition-all">
                  <Mail size={18} />
                </div>
                <span className="font-bold text-sm sm:text-base break-all leading-snug">
                  info@creativekidsbibleclub.com
                </span>
              </a>
            </div>

            {/* Selar CTA */}
            <div className="pt-2">
              <p className="text-blue-100/60 font-['Poppins'] text-xs mb-3 uppercase tracking-wider font-bold">
                Get our devotionals
              </p>
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f0614b] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-[#2e3973] transition-all font-['Poppins']"
              >
                Visit Our Store <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="bg-white rounded-2xl sm:rounded-4xl p-6 sm:p-8 md:p-10 space-y-4 w-full">
            {/* Stack inputs on mobile, side-by-side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 sm:p-4 text-[#2e3973] text-sm focus:outline-none focus:ring-2 focus:ring-[#f0614b] font-['Poppins']"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 sm:p-4 text-[#2e3973] text-sm focus:outline-none focus:ring-2 focus:ring-[#f0614b] font-['Poppins']"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              rows={4}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 sm:p-4 text-[#2e3973] text-sm focus:outline-none focus:ring-2 focus:ring-[#f0614b] font-['Poppins'] resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#f0614b] text-white py-4 rounded-xl font-black text-base shadow-lg shadow-orange-900/20 hover:scale-[1.02] transition-all font-['Poppins']"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer bar */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40 text-xs font-bold uppercase tracking-widest font-['Poppins'] text-center">
          <p>© 2024 Creative Kids Bible Club</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="selection:bg-[#f0614b] selection:text-white">
      <Hero />
      <Features />
      <About />
      <Resources />
      <Community />
      <Contact />
    </div>
  );
}