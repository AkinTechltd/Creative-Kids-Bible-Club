'use client'

import React from 'react';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const categories = [
  {
    label: 'Flagship Devotional',
    title: '"Time Out with Abba"',
    sub: '3-Part Annual Devotional',
    desc: 'Our "Big Boy." A 5-day-a-week journey covering January to December. Structured daily readings, reflection questions, and practical application guides for parents to lead with confidence.',
    badge: 'Spring · Summer · Winter',
    featured: true,
  },
  {
    label: 'The Holy Spirit Series',
    title: 'E-Books (4 Volumes)',
    sub: 'Digital only',
    desc: 'A beautifully crafted 4-part series helping children understand the Trinity and their helper, the Holy Spirit.',
    items: ['Do You Know the Holy Spirit?', 'Holy Spirit, My Helper', 'Dwelling in His Presence', 'The 7 Spirits of God'],
    featured: false,
  },
  {
    label: 'Family Bible Study Series',
    title: 'Story-Based Studies',
    sub: 'Children read on any device',
    desc: 'Engaging, vibrant study plans covering the great stories of Scripture — told in a way children truly own.',
    items: ['The Story of Jonah', 'The Story of Samson', 'The Story of Noah'],
    featured: false,
  },
  {
    label: 'Everyday Faith & Life Skills',
    title: 'Topical Guides',
    sub: 'Short, practical, powerful',
    desc: 'Practical guides for daily faith decisions, foundational scripture memory, and learning the different types of prayer.',
    items: ['Choices', 'ABC Scriptures', "Children's Prayer Guide"],
    featured: false,
  },
]

const Resources = () => {
  return (
    <section id="devotionals" className="py-20 md:py-28 bg-[#2e3973] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b border-white/20 pb-8 mb-12"
        >
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-3">Tools for a Supernatural Army</p>
              <h2 className="font-['Young_Serif'] text-4xl md:text-6xl text-white leading-tight">
                Our Resources.
              </h2>
            </div>
            <p className="font-['Poppins'] text-white/50 text-sm max-w-sm pb-1 leading-relaxed">
              Colorful, interactive, and simple-to-read resources designed for busy parents and curious children. All available now on our Selar store.
            </p>
          </div>
        </motion.div>

        {/* Featured product — full row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/20 mb-0 grid lg:grid-cols-12"
        >
          <div className="lg:col-span-8 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/20">
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-4">★ Flagship Devotional</p>
            <h3 className="font-['Young_Serif'] text-3xl md:text-4xl text-white mb-3 leading-tight">
              "Time Out with Abba"
            </h3>
            <p className="font-['Poppins'] text-white/60 text-[15px] leading-relaxed mb-6">
              Our "Big Boy." A 5-day-a-week journey covering January to December. Structured daily readings, reflection questions, and practical application guides — everything a parent needs to lead with confidence, no theology degree required.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-6">
                {['Spring Vol. 1', 'Summer Vol. 2', 'Winter Vol. 3'].map(v => (
                  <div key={v} className="text-center">
                    <div className="w-12 h-16 bg-white/10 border border-white/20 flex items-center justify-center mb-1">
                      <BookOpen size={18} className="text-white/50" />
                    </div>
                    <p className="font-['Poppins'] text-[9px] font-bold uppercase tracking-wider text-white/40">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">Available individually or as bundle</p>
              <p className="font-['Poppins'] text-white/50 text-sm leading-relaxed">Printable digital devotional · Instant access · Lifetime download</p>
            </div>
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins'] mt-6 inline-flex items-center justify-between gap-3 bg-[#f0614b] text-white px-6 py-4 font-bold text-sm hover:bg-white hover:text-[#2e3973] transition-colors group border-2 border-[#f0614b] hover:border-white"
            >
              Get the Bundle
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Other categories — three-column list */}
        <div className="grid md:grid-cols-3 border-l border-b border-white/20">
          {categories.slice(1).map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="border-t border-r border-white/20 p-7 flex flex-col hover:bg-white/5 transition-colors group"
            >
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] text-[#f0614b] mb-3">{cat.label}</p>
              <h3 className="font-['Young_Serif'] text-xl text-white mb-1 group-hover:text-[#f0614b] transition-colors">{cat.title}</h3>
              <p className="font-['Poppins'] text-[11px] text-white/30 font-semibold uppercase tracking-wider mb-4">{cat.sub}</p>
              <p className="font-['Poppins'] text-white/50 text-sm leading-relaxed mb-5">{cat.desc}</p>
              {cat.items && (
                <ul className="mt-auto space-y-1.5">
                  {cat.items.map(item => (
                    <li key={item} className="font-['Poppins'] text-xs text-white/60 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#f0614b] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Global CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-white/20 border-t-0 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-['Poppins'] text-white/50 text-sm">
            All resources available individually or as a complete annual bundle · Powered by Selar · Instant digital access
          </p>
          <a
            href={SELAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Poppins'] shrink-0 inline-flex items-center gap-2 text-white border-b border-white/30 pb-px text-sm font-bold hover:text-[#f0614b] hover:border-[#f0614b] transition-colors group"
          >
            Browse All Resources <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Shipping notice */}
        <p className="font-['Poppins'] text-[11px] text-white/30 font-semibold uppercase tracking-wider text-center mt-6">
          We ship globally · UK · USA &amp; Canada · South Africa · Nigeria (Port Harcourt)
        </p>

      </div>
    </section>
  );
};

export default Resources;