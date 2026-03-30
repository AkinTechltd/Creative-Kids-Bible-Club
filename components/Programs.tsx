'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px bg-[#f0614b]" />
            <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.3em] text-[#f0614b]">Beyond the Books</p>
          </div>
          <h2 className="font-['Young_Serif'] text-4xl md:text-6xl text-[#2e3973] leading-tight">
            Our Global Initiatives.
          </h2>
        </motion.div>

        {/* Two programs — stacked poster style, not matching cards */}
        <div className="grid lg:grid-cols-2 gap-0 border-2 border-[#2e3973]">

          {/* ── THE WISDOM CHALLENGE ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="p-10 lg:border-r-2 border-b-2 lg:border-b-0 border-[#2e3973] bg-[#fdf8f3] flex flex-col"
          >
            {/* Poster-style event label */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="inline-block bg-[#f0614b] text-white font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 mb-4">
                  Every August
                </div>
                <h3 className="font-['Young_Serif'] text-4xl md:text-5xl text-[#2e3973] leading-none">
                  The Wisdom<br />Challenge.
                </h3>
              </div>
              {/* Large decorative letter */}
              <span className="font-['Young_Serif'] text-[8rem] leading-none text-[#2e3973]/5 select-none -mt-4">W</span>
            </div>

            <p className="font-['Poppins'] text-gray-700 leading-relaxed text-[15px] mb-8">
              Every August, we invite children worldwide to dive deep into the Book of Proverbs. We pair spiritual wisdom with practical life skills — money management, public speaking, decision-making — to raise well-rounded, relevant leaders for Christ.
            </p>

            {/* Skills — plain list, no tag pills */}
            <div className="mb-8 border-t border-gray-200 pt-6">
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-4">What children learn</p>
              <ul className="font-['Poppins'] text-sm text-[#2e3973] font-semibold grid grid-cols-2 gap-y-2">
                {['Book of Proverbs', 'Money Management', 'Public Speaking', 'Decision-Making', 'Leadership', 'Character Building'].map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#f0614b] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="#contact"
                className="font-['Poppins'] inline-flex items-center gap-3 font-bold text-sm text-[#2e3973] border-b-2 border-[#f0614b] pb-0.5 hover:text-[#f0614b] transition-colors group"
              >
                Get notified for the next challenge
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── THE WATCHTOWER ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="p-10 bg-[#2e3973] flex flex-col relative overflow-hidden"
          >
            {/* Large decorative letter — reversed */}
            <span className="absolute top-0 right-0 font-['Young_Serif'] text-[10rem] leading-none text-white/[0.04] select-none -mr-4 -mt-4">T</span>

            {/* Program label */}
            <div className="mb-8 relative z-10">
              <div className="inline-block bg-white text-[#2e3973] font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 mb-4">
                Weekly · Year-Round
              </div>
              <h3 className="font-['Young_Serif'] text-4xl md:text-5xl text-white leading-none">
                The<br />Watchtower.
              </h3>
            </div>

            <p className="font-['Poppins'] text-white/70 leading-relaxed text-[15px] mb-8 relative z-10">
              Our global prayer powerhouse. Join us as we stand in the gap, interceding weekly for children and families across the nations — praying them into the knowledge and love of Jesus Christ.
            </p>

            {/* Stats — typographic */}
            <div className="border-t border-white/10 pt-6 mb-8 grid grid-cols-3 gap-4 relative z-10">
              {[
                { n: '40+', l: 'Nations' },
                { n: 'Weekly', l: 'Intercession' },
                { n: 'Open', l: 'To All' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="font-['Young_Serif'] text-2xl text-[#f0614b] leading-none">{n}</p>
                  <p className="font-['Poppins'] text-[10px] font-bold uppercase tracking-wider text-white/40 mt-1">{l}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto relative z-10">
              <a
                href="#contact"
                className="font-['Poppins'] inline-flex items-center gap-3 bg-[#f0614b] text-white px-6 py-3.5 font-bold text-sm hover:bg-white hover:text-[#2e3973] transition-colors group border-2 border-[#f0614b] hover:border-white"
              >
                Join the Prayer Network
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote — full bleed typographic, no card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b-2 border-[#2e3973] pt-12 pb-6"
        >
          <p className="font-['Young_Serif'] text-2xl md:text-3xl text-[#2e3973] italic text-center leading-relaxed max-w-3xl mx-auto">
            "To cultivate a generation of children deeply rooted in God's Word, excelling in all areas of life, and boldly proclaiming Jesus on every platform."
          </p>
          <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.25em] text-[#f0614b] text-center mt-4">— CKBC Vision Statement</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Programs