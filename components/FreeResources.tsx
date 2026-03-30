'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    label: 'A',
    title: 'Monthly Worksheets',
    body: 'Printable activities that reinforce the weekly Bible lessons — beautifully designed, ready to print, and built to keep little hands and minds engaged.',
    detail: 'New sheets every month · Printable PDF',
  },
  {
    label: 'B',
    title: 'Interactive Quizzes',
    body: 'Fun, engaging knowledge checks for the whole family. Turn Bible time into a game — make learning feel less like a lesson and more like an adventure.',
    detail: 'Family-friendly · Covers all ages 6–12',
  },
  {
    label: 'C',
    title: 'Weekly Character Studies',
    body: 'Simple guides to building Christ-like character at home. Tied directly to our monthly Club themes so everything connects.',
    detail: 'Aligned to monthly themes · Short daily reads',
  },
]

const FreeResources = () => {
  return (
    <section id="free-resources" className="py-20 md:py-28 bg-[#fafaf9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px bg-[#f0614b]" />
            <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.3em] text-[#f0614b]">Free Downloads & Activities</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 border-b-2 border-[#2e3973] pb-8">
            <h2 className="font-['Young_Serif'] text-4xl md:text-6xl text-[#2e3973] leading-tight">
              The Resource Library.
            </h2>
            <div className="flex flex-col justify-end">
              <p className="font-['Poppins'] text-gray-600 leading-relaxed text-[15px]">
                We believe every child should have access to the Word of God. Download our free monthly materials — designed to align with our weekly Club themes and bring scripture to life at home.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resource list — horizontal ruled rows, like a school handout */}
        <div className="divide-y-2 divide-[#2e3973]/10 border-y-2 border-[#2e3973]/10 mb-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-6 py-8 group hover:bg-[#f0614b]/[0.03] transition-colors"
            >
              {/* Large letter — schoolbook index */}
              <div className="lg:col-span-1 flex items-start">
                <span className="font-['Young_Serif'] text-6xl text-[#2e3973]/10 leading-none group-hover:text-[#f0614b]/20 transition-colors select-none">
                  {item.label}
                </span>
              </div>

              {/* Title + body */}
              <div className="lg:col-span-7">
                <h3 className="font-['Young_Serif'] text-2xl md:text-3xl text-[#2e3973] mb-2 group-hover:text-[#f0614b] transition-colors">
                  {item.title}
                </h3>
                <p className="font-['Poppins'] text-gray-600 text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>

              {/* Detail + CTA */}
              <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-4">
                <p className="font-['Poppins'] text-[11px] font-bold uppercase tracking-wider text-gray-400 lg:text-right">
                  {item.detail}
                </p>
                <a
                  href="#contact"
                  className="font-['Poppins'] inline-flex items-center gap-2 text-sm font-bold text-[#f0614b] border-b border-[#f0614b] pb-px hover:text-[#2e3973] hover:border-[#2e3973] transition-colors group/link"
                >
                  Download Free
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — flat, typographic, not a gradient card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2e3973] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-2">100% Free · No Sign-Up Required</p>
            <h3 className="font-['Young_Serif'] text-3xl md:text-4xl text-white leading-tight">
              Access the full library.
            </h3>
            <p className="font-['Poppins'] text-white/50 text-sm mt-2 max-w-md">
              Every worksheet, quiz, and character study — free for any family, anywhere in the world.
            </p>
          </div>
          <a
            href="#contact"
            className="font-['Poppins'] shrink-0 inline-flex items-center gap-3 bg-[#f0614b] text-white px-8 py-4 font-bold text-sm hover:bg-white hover:text-[#2e3973] transition-colors border-2 border-[#f0614b] hover:border-white group"
          >
            Access the Resource Library
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default FreeResources