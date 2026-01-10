'use client'

import React from 'react'
import { Sparkles, MapPin, Calendar, Globe, Heart, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-[#f0614b]/10 text-[#f0614b] text-sm font-bold uppercase tracking-widest rounded-full mb-4">
                The Heart Behind the Club
              </span>
              <h2 className="font-['Young_Serif'] text-5xl md:text-6xl text-[#2e3973] leading-tight">
                Meet Queeneth
              </h2>
            </div>
            <div className="hidden md:block pb-2">
               <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-1 bg-[#2e3973]/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="w-full h-full bg-[#f0614b]" 
                      />
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Visual Side: Layered Image & Floating Stats */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/images/queeneth.jpg" 
                  alt="Queeneth - Founder of Creative Kids Bible Club" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat 1: Global Reach */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -left-6 bottom-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100 hidden md:flex"
              >
                <div className="w-12 h-12 bg-[#2e3973] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#2e3973]/20">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2e3973]">40+</p>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-tight">Countries reached</p>
                </div>
              </motion.div>

              {/* Floating Stat 2: Experience */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-6 -top-6 bg-[#f0614b] p-4 rounded-xl shadow-xl flex items-center gap-4 text-white hidden md:flex"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart size={20} fill="white" />
                </div>
                <div>
                  <p className="text-xl font-bold italic leading-none">Since 2020</p>
                  <p className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Spreading the Word</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f0614b]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#2e3973]/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="prose prose-lg prose-slate"
            >
              <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-6">
                I watched too many family devotions turn into <span className="text-[#f0614b] italic underline decoration-wavy decoration-[#f0614b]/30">battles of attention</span>. 
              </p>
              
              <div className="space-y-6 text-slate-600">
                <p>
                  Kids squirming, eyes wandering, and parents feeling the weight of frustration. In 2020, I realized that children weren’t disinterested in the Bible—they were simply disconnected from the way it was being taught.
                </p>
                
                <div className="bg-white p-8 rounded-2xl border-l-8 border-[#2e3973] shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Sparkles size={80} className="text-[#2e3973]" />
                  </div>
                  <p className="text-xl font-['Young_Serif'] text-[#2e3973] italic relative z-10">
                    "Kids aren't bored with the Bible. They're bored with boring presentations of it. Give them something to do with their hands, and their hearts follow."
                  </p>
                </div>

                <p>
                  I began replacing passive listening with active creation. Instead of a lecture, we used scissors, glue, and crayons. We turned ancient parables into puzzles, characters into drawings, and lessons into living memories. 
                </p>

                <p className="font-semibold text-[#2e3973] flex items-center gap-2">
                  <BookOpen size={20} className="text-[#f0614b]" />
                  Today, we’re making devotion time the best part of a child's day.
                </p>
              </div>
            </motion.div>

            {/* Signature Area */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-8 border-t border-slate-200 flex items-center justify-between"
            >
              <div>
                <p className="text-3xl font-['Young_Serif'] text-[#2e3973]">Queeneth</p>
                <p className="text-sm font-bold text-[#f0614b] uppercase tracking-tighter">Founder & Bible Educator</p>
              </div>
              <div className="flex flex-col items-end text-right">
                <div className="flex items-center gap-1 text-slate-400 mb-1">
                  <MapPin size={14} />
                  <span className="text-xs font-medium">Lagos, Nigeria</span>
                </div>
                <div className="text-[10px] text-slate-400 max-w-[140px]">
                  Global Ministry Serving Families Worldwide
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About