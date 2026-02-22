'use client'

import React from 'react';
import { ArrowRight, BookOpen, ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const volumes = [
  {
    id: 'vol-1',
    title: 'Volume 1',
    subtitle: 'Spring & New Beginnings',
    period: 'Spring',
    color: 'bg-emerald-50',
    image: null,
    emoji: '🌱',
  },
  {
    id: 'vol-2',
    title: 'Volume 2',
    subtitle: 'Summer & Adventure',
    period: 'Summer/Fall',
    color: 'bg-amber-50',
    image: null,
    emoji: '☀️',
  },
  {
    id: 'vol-3',
    title: 'Volume 3',
    subtitle: 'Winter & Wonder',
    period: 'Winter',
    color: 'bg-blue-50',
    image: null,
    emoji: '❄️',
  },
];

const Resources = () => {
  return (
    <section id="devotionals" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f0614b] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Our Resources</span>
            <h2 className="font-['Young_Serif'] text-4xl md:text-6xl text-[#2e3973] mb-6">
              A Year of <span className="italic text-[#f0614b]">Wonder</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our devotional books are thoughtfully designed to transform weekly lessons into daily family adventures — high-quality, printable, and deeply engaging. Available now on our store.
            </p>
          </motion.div>
        </div>

        {/* Book Previews */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {volumes.map((vol, idx) => (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
            >
              <div className={`${vol.color} aspect-4/3 relative flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-500 m-4 rounded-2xl`}>
                {vol.image ? (
                  <Image
                    src={vol.image}
                    alt={vol.title}
                    width={240}
                    height={180}
                    className="object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-2">{vol.emoji}</div>
                    <p className="font-['Young_Serif'] text-[#2e3973] text-xl">{vol.title}</p>
                  </div>
                )}
                {vol.period && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#2e3973] uppercase tracking-widest shadow-sm">
                    {vol.period}
                  </div>
                )}
              </div>

              <div className="p-6 pt-2 flex flex-col grow">
                <h3 className="font-['Young_Serif'] text-2xl text-[#2e3973] mb-1">{vol.title}</h3>
                <p className="text-[#f0614b] text-sm font-bold mb-4 uppercase tracking-tight">{vol.subtitle}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <BookOpen size={14} />
                    <span>Printable digital devotional</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Selar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-slate-500 mb-6 font-['Poppins']">All volumes available individually or as a complete bundle</p>
          <a
            href={SELAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2e3973] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#1e2555] transition-all transform hover:scale-105 shadow-xl font-['Poppins']"
          >
            Browse All Resources
            <ExternalLink size={20} />
          </a>
          <p className="mt-4 text-xs text-slate-400 font-['Poppins'] uppercase tracking-wider">Powered by Selar · Instant digital access</p>
        </motion.div>

        {/* Bundle Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#2e3973] rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 overflow-hidden w-48 h-48">
            <div className="bg-[#f0614b] text-white text-[10px] font-bold uppercase tracking-widest py-2 w-64 text-center absolute top-10 -right-16 rotate-45 shadow-lg">
              Best Value
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#f0614b" color="#f0614b" />)}
                <span className="text-white/60 text-xs font-bold ml-2 uppercase tracking-tighter">Trusted by 2,000+ Families</span>
              </div>

              <h3 className="font-['Young_Serif'] text-4xl md:text-5xl text-white mb-4 leading-tight">
                The Complete <br />Annual Collection
              </h3>
              <p className="text-blue-100/70 font-['Poppins'] mb-8 leading-relaxed">
                All three volumes in one bundle — 44 weeks of lessons, holiday specials, printable activities, and lifetime access. Everything your family needs for a year of faith-filled learning.
              </p>

              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f0614b] text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#2e3973] transition-all transform hover:scale-105 shadow-xl font-['Poppins']"
              >
                Get the Bundle
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="hidden lg:flex justify-center relative">
              <div className="relative w-full h-64">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-60 bg-emerald-100 rounded-2xl rotate-6 shadow-2xl border-4 border-white/10" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-60 bg-amber-100 rounded-2xl rotate-2 shadow-2xl border-4 border-white/10" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-60 bg-white rounded-2xl -rotate-2 shadow-2xl border-4 border-[#2e3973]/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="block text-4xl mb-2">📚</span>
                    <p className="font-['Young_Serif'] text-[#2e3973] text-lg">Full Collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;