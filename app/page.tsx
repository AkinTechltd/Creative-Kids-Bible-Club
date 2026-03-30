'use client'

import React from 'react';
import { ArrowRight, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Resources from '@/components/Devotional';
import Programs from '@/components/Programs';
import FreeResources from '@/components/FreeResources';
import Blog from '@/components/Blog';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const Community = () => {
  return (
    <section id="community" className="py-20 md:py-28 bg-[#fdf8f3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px bg-[#f0614b]" />
            <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.3em] text-[#f0614b]">The Community</p>
          </div>
          <h2 className="font-['Young_Serif'] text-4xl md:text-6xl text-[#2e3973] leading-tight">
            Faith is better together.
          </h2>
        </motion.div>

        {/* Two community options — side-by-side editorial panels */}
        <div className="grid lg:grid-cols-2 border-2 border-[#2e3973]">

          {/* Local sessions */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 lg:border-r-2 border-b-2 lg:border-b-0 border-[#2e3973] flex flex-col"
          >
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-6">In-Person · United Kingdom</p>
            <h3 className="font-['Young_Serif'] text-3xl md:text-4xl text-[#2e3973] leading-tight mb-4">
              Local Sessions
            </h3>
            <p className="font-['Poppins'] text-gray-600 leading-relaxed text-[15px] mb-8">
              Hands-on teaching led by Queeneth across the UK. Designed for deep bonding, real community, and the kind of learning that sticks. Perfect for families who want something tangible beyond a screen.
            </p>
            <div className="mt-auto border-t border-gray-200 pt-6">
              <a
                href="#contact"
                className="font-['Poppins'] inline-flex items-center gap-2 font-bold text-sm text-[#2e3973] border-b-2 border-[#f0614b] pb-px hover:text-[#f0614b] transition-colors group"
              >
                Enquire about events
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Global circle */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-[#2e3973] flex flex-col relative overflow-hidden"
          >
            {/* Watermark text */}
            <span className="absolute bottom-0 right-0 font-['Young_Serif'] text-[9rem] leading-none text-white/[0.04] select-none translate-y-4 translate-x-4">40+</span>

            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-6 relative z-10">Digital · 40+ Countries</p>
            <h3 className="font-['Young_Serif'] text-3xl md:text-4xl text-white leading-tight mb-4 relative z-10">
              The Global Circle
            </h3>
            <p className="font-['Poppins'] text-white/60 leading-relaxed text-[15px] mb-8 relative z-10">
              Can't make it in person? Our digital community is always open — parents encouraging each other, sharing wins, and getting direct access to Queeneth across more than 40 countries.
            </p>
            <div className="mt-auto border-t border-white/10 pt-6 relative z-10">
              <a
                href="#contact"
                className="font-['Poppins'] inline-flex items-center gap-3 bg-[#f0614b] text-white px-7 py-3.5 font-bold text-sm hover:bg-white hover:text-[#2e3973] transition-colors border-2 border-[#f0614b] hover:border-white group"
              >
                Join the Private Circle
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const distributors = [
  { region: 'United Kingdom', flag: '🇬🇧', note: '3 regional distributors' },
  { region: 'USA & Canada', flag: '🇺🇸', note: 'North American distributor' },
  { region: 'South Africa', flag: '🇿🇦', note: 'SA distributor' },
  { region: 'Nigeria', flag: '🇳🇬', note: 'Port Harcourt distributor' },
]

const Contact = () => {
  return (
    <div id="contact" className="bg-[#2e3973] pt-16 md:pt-24 pb-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section heading */}
        <div className="border-b border-white/20 pb-8 mb-12">
          <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-3">Get In Touch</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-['Young_Serif'] text-4xl md:text-6xl text-white leading-tight">
              Connect with us worldwide.
            </h2>
            <p className="font-['Poppins'] text-white/40 text-sm max-w-xs pb-1">
              Questions about programs, resources, or community? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 pb-16 border-b border-white/10">

          {/* Left: contact info + distributors */}
          <div className="space-y-8">
            {/* Direct email */}
            <div>
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3">Email us directly</p>
              <a
                href="mailto:info@creativekidsbibleclub.com"
                className="font-['Young_Serif'] text-xl text-white hover:text-[#f0614b] transition-colors flex items-center gap-3 group"
              >
                <Mail size={18} className="text-[#f0614b]" />
                info@creativekidsbibleclub.com
              </a>
            </div>

            {/* Store CTA */}
            <div>
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3">Get our devotionals</p>
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Poppins'] inline-flex items-center gap-2 bg-[#f0614b] text-white px-5 py-3 font-bold text-sm hover:bg-white hover:text-[#2e3973] transition-colors border-2 border-[#f0614b] hover:border-white"
              >
                Visit Our Store <ExternalLink size={14} />
              </a>
            </div>

            {/* Physical copies - distributor list */}
            <div>
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Physical copies — regional distributors</p>
              <div className="divide-y divide-white/10 border-t border-white/10">
                {distributors.map(d => (
                  <div key={d.region} className="py-3 flex items-center gap-4 group hover:bg-white/5 -mx-3 px-3 transition-colors">
                    <span className="text-lg">{d.flag}</span>
                    <div className="grow">
                      <p className="font-['Poppins'] font-bold text-sm text-white">{d.region}</p>
                      <p className="font-['Poppins'] text-xs text-white/40">{d.note}</p>
                    </div>
                    <a href="#contact" className="font-['Poppins'] text-xs font-bold text-[#f0614b] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Contact <ChevronRight size={11} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form — clean, no rounded excess */}
          <div>
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Send a message</p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f0614b] font-['Poppins'] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f0614b] font-['Poppins'] transition-colors"
                />
              </div>
              <select className="w-full  border border-white/10 px-4 py-3 text-white bg-[#f0614b] text-sm focus:outline-none focus:border-[#f0614b] font-['Poppins'] transition-colors appearance-none">
                <option value="">I'm enquiring about…</option>
                <option value="resources">Resources & Devotionals</option>
                <option value="watchtower">Joining the Watchtower</option>
                <option value="wisdom">The Wisdom Challenge</option>
                <option value="local">Local Sessions (UK)</option>
                <option value="distribution">Physical Copies / Distribution</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f0614b] font-['Poppins'] resize-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#f0614b] text-white py-4 font-['Poppins'] font-black text-sm hover:bg-white hover:text-[#2e3973] transition-colors border-2 border-[#f0614b] hover:border-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest font-['Poppins'] text-white/20 text-center">
          <p>© 2024 Creative Kids Bible Club · Founded by Queeneth Alobo</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
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
      <Programs />
      <FreeResources />
      <Blog />
      <Community />
      <Contact />
    </div>
  );
}