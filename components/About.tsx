'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#fdf8f3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Newspaper-style section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b-4 border-double border-[#2e3973] pb-4 mb-2"
        >
          <div className="flex items-center justify-between">
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-[#f0614b]">The Heart Behind the Club</p>
            <p className="font-['Poppins'] text-[10px] text-gray-400 uppercase tracking-widest hidden sm:block">Est. 2020 · Lagos, Nigeria</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b border-[#2e3973] pb-6 mb-8"
        >
          <h2 className="font-['Young_Serif'] text-5xl md:text-7xl text-[#2e3973] leading-[1.0] tracking-tight">
            Meet Queeneth.
          </h2>
          <p className="font-['Young_Serif'] text-xl text-gray-500 italic mt-2">
            A mother's prompting that became a global mission.
          </p>
        </motion.div>

        {/* ── NEWSPAPER COLUMN BODY ───────────────────────────── */}
        {/*
          Classic broadsheet layout:
          - 3 columns of text
          - Photo spans col 1–2 at mid-article, text wraps around it
          We achieve this with CSS float on the image inside a prose block.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* The article body — columns via CSS */}
          <div
            className="font-['Poppins'] text-[15px] text-gray-700 leading-[1.85]"
            style={{
              columnCount: 1,
            }}
          >
            {/* On large screens, the image floats left, text wraps. 
                We nest the image inside the prose flow */}
            <div className="lg:float-left lg:mr-8 lg:mb-2 lg:w-[340px] xl:w-[380px] mb-6 lg:mb-0">
              <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/queeneth.jpg"
                  alt="Queeneth — Founder of Creative Kids Bible Club"
                  fill
                  className="object-cover grayscale-[15%] border-4 border-white shadow-[6px_6px_0px_#2e3973]"
                />
              </div>
              {/* Caption block — newspaper style */}
              <div className="bg-[#2e3973] px-3 py-2 mt-0">
                <p className="font-['Poppins'] text-[10px] text-white/80 font-bold uppercase tracking-widest">
                  Queeneth · Founder &amp; Bible Educator · Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Body text — reads around the image */}
            <p className="mb-4">
              As a passionate mother, my deepest desire has always been to nurture my children in the way of God while raising them to be well-rounded individuals. Deuteronomy 6:6–9 has always rung in my heart: a command to commit ourselves wholeheartedly to God's Word and teach it diligently to our children — at home, on the road, and before we sleep.
            </p>

            <p className="mb-4">
              The true turning point for Creative Kids Bible Club came on my way back from church one Sunday. I had a strong prompting in my heart: <em>If Jesus returns today, many children will not be saved simply because they are ignorant. They do not know Him.</em>
            </p>

            <p className="mb-4">
              When I got home, I asked my own children about the second coming of Jesus — and they didn't know what it meant. That realisation shifted everything.
            </p>

            {/* Pull quote — floated right inside the prose, overlapping the text column */}
            <blockquote className="lg:float-right lg:w-72 xl:w-80 lg:ml-8 lg:mb-4 my-6 lg:my-2 border-l-4 border-[#f0614b] pl-5 py-1">
              <p className="font-['Young_Serif'] text-xl text-[#2e3973] italic leading-snug">
                "How can they believe in him if they have never heard? And how can anyone tell them without being sent?" — Romans 10:14
              </p>
              <p className="font-['Poppins'] text-xs text-gray-500 mt-3 font-semibold uppercase tracking-wider">Every parent has been sent to their children.</p>
            </blockquote>

            <p className="mb-4">
              My mission became clear: to help parents equip their children with biblical knowledge, principles, and life skills so they can build a personal relationship — a true <em>Koinonia</em> — with God, just like Daniel and Esther. We are here to create the resources that alleviate the struggle of parenting, empowering you to raise ambassadors for Christ.
            </p>

            <p className="mb-4">
              I began replacing passive listening with active creation. Instead of a lecture, we used scissors, glue, and crayons. We turned ancient parables into puzzles, characters into drawings, and lessons into living memories that children carry long after the page is closed.
            </p>

            <p className="mb-6 font-semibold text-[#2e3973]">
              Today, CKBC serves over 2,500 families across more than 40 countries — and we are just getting started.
            </p>

            {/* Clearfix for float */}
            <div className="clear-both" />
          </div>

          {/* Founder sign-off — below the article, newspaper byline style */}
          <div className="border-t-2 border-[#2e3973] pt-6 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-['Young_Serif'] text-3xl text-[#2e3973]">Queeneth Alobo</p>
              <p className="font-['Poppins'] text-xs font-bold uppercase tracking-[0.2em] text-[#f0614b] mt-0.5">Founder & Bible Educator · Creative Kids Bible Club</p>
            </div>

            {/* Inline stats — no cards, just text */}
            <div className="flex gap-8 sm:gap-10">
              {[
                { n: '40+', l: 'Countries' },
                { n: '2,500+', l: 'Families' },
                { n: '2020', l: 'Founded' },
              ].map(({ n, l }) => (
                <div key={l} className="text-right">
                  <p className="font-['Young_Serif'] text-2xl text-[#f0614b]">{n}</p>
                  <p className="font-['Poppins'] text-[10px] font-bold uppercase tracking-wider text-gray-500">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder quote — full-width callout, like a magazine pull feature */}
          <div className="mt-8 bg-[#2e3973] p-8">
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.3em] text-[#f0614b] mb-4">Founder's Vision</p>
            <p className="font-['Young_Serif'] text-xl md:text-2xl text-white italic leading-relaxed">
              "We are not just raising spiritual children; we are raising well-rounded individuals who are deeply rooted in the Word and excelling in every sector of life — from leadership to the arts to sports."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About