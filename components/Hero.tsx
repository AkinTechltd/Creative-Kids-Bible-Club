import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const SELAR_URL = 'https://selar.com/m/CreativeKidsBibleclub';

const Hero = () => {
  return (
    <section className='bg-[#fdf8f3] overflow-hidden' id='home'>

      {/* ── MASTHEAD AREA ─────────────────────────────────── */}
      <div className='max-w-6xl mx-auto px-6 pt-12 pb-0'>

        {/* Large editorial headline above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          {/* Overline — like a magazine section label */}
          <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.35em] text-[#f0614b] mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#f0614b]" />
            Creative Kids Bible Club
            <span className="inline-block w-8 h-px bg-[#f0614b]" />
          </p>

          {/* Headline — big, bold, editorial — spans full width */}
          <h1 className="font-['Young_Serif'] text-[clamp(2.8rem,7vw,5.5rem)] text-[#2e3973] leading-[1.05] tracking-tight max-w-4xl">
            Raising &amp; Equipping
            <br />
            <span className="relative inline-block">
              a Supernatural Army.
              {/* Hand-drawn style underline via SVG */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 600 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 8 C80 3, 200 10, 320 6 C440 2, 520 9, 598 5"
                  stroke="#f0614b"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* ── TWO-COLUMN BELOW HEADLINE ──────────────────── */}
        <div className="grid lg:grid-cols-12 gap-0 border-t-2 border-[#2e3973]">

          {/* Left column — intro text + stats + CTAs */}
          <motion.div
            className="lg:col-span-4 py-8 pr-0 lg:pr-10 lg:border-r-2 lg:border-[#2e3973]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-['Poppins'] text-base text-gray-700 leading-relaxed mb-8">
              We partner with parents to cultivate a generation of children deeply rooted in God's Word — excelling in all areas of life, and boldly proclaiming Jesus on every platform.
            </p>

            {/* Stats — typographic, no cards */}
            <div className="mb-8 space-y-4 border-t border-gray-200 pt-6">
              {[
                { num: '2,500+', label: 'Families Worldwide' },
                { num: '40+', label: 'Countries Reached' },
                { num: '2020', label: 'Est. Lagos, Nigeria' },
              ].map(({ num, label }) => (
                <div key={label} className="flex items-baseline gap-3">
                  <span className="font-['Young_Serif'] text-3xl text-[#f0614b] leading-none">{num}</span>
                  <span className="font-['Poppins'] text-xs font-bold uppercase tracking-wider text-gray-500">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs — rectangular, direct */}
            <div className="flex flex-col gap-3">
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Poppins'] bg-[#f0614b] text-white px-6 py-3.5 font-bold text-sm flex items-center justify-between group border-2 border-[#f0614b] hover:bg-[#2e3973] hover:border-[#2e3973] transition-colors"
              >
                Shop Resources
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="font-['Poppins'] bg-transparent text-[#2e3973] px-6 py-3.5 font-bold text-sm flex items-center justify-between group border-2 border-[#2e3973] hover:bg-[#2e3973] hover:text-white transition-colors"
              >
                Join the Watchtower
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Centre column — the photo, full bleed */}
          <motion.div
            className="lg:col-span-5 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Slight warm paper tint over image */}
            <div className="relative h-[420px] lg:h-full min-h-[380px]">
              <Image
                src='/images/kid1.png'
                alt='Creative Kids Bible Club child learning'
                fill
                className="object-cover object-top"
                priority
              />
              {/* Ink-stamp label over image */}
              <div className="absolute bottom-5 left-5 bg-white border-2 border-[#2e3973] px-3 py-1.5">
                <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.2em] text-[#2e3973]">Ages 6 – 12 · Bible-First Learning</p>
              </div>
            </div>
          </motion.div>

          {/* Right column — pull quote + problem/solution text */}
          <motion.div
            className="lg:col-span-3 py-8 pl-0 lg:pl-8 lg:border-l-2 lg:border-[#2e3973] flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Pull quote */}
            <div>
              <p className="font-['Young_Serif'] text-4xl text-[#f0614b] leading-none mb-3">"</p>
              <p className="font-['Young_Serif'] text-lg text-[#2e3973] italic leading-snug">
                Family devotion doesn't have to be a battle of attention.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="font-['Poppins'] text-sm text-gray-600 leading-relaxed">
                Are you a parent who wants to teach your children God's Word but isn't sure how to break it down to their level? You are not alone. We make Scripture simple, practical, and relatable.
              </p>
            </div>

            {/* Trust tags — plain text list, not pills */}
            <div className="border-t border-gray-200 pt-6 mt-auto">
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">What we stand for</p>
              <ul className="font-['Poppins'] text-xs font-semibold text-[#2e3973] space-y-1.5">
                {['Biblically Sound', 'Parent-Guided', 'Globally Trusted', 'Child-Centered', 'Kingdom-Focused'].map(t => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f0614b] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero