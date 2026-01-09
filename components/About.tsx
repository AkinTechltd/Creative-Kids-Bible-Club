import React from 'react'
import { ChevronRight, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#f0614b]/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Side: The "Personal Portfolio" Look */}
          <div className="w-full lg:w-[45%]">
            <div className="relative">
              {/* Decorative "Paper" Backgrounds */}
              <div className="absolute inset-0 bg-[#2e3973] rounded-[2.5rem] rotate-3 translate-x-2 translate-y-2 opacity-5" />
              <div className="absolute inset-0 bg-[#f0614b] rounded-[2.5rem] -rotate-2 opacity-10" />
              
              {/* Main Image Container */}
              <div className="relative bg-white p-5 rounded-[2.5rem] shadow-xl border border-gray-100">
                <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden relative group">
                  <Image src="/images/queeneth.jpg" alt="Queeneth" width={400} height={500} className="w-full h-full object-cover" />
                  
                  {/* Floating Stat Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50">
                    <p className="text-[#2e3973] font-bold text-xl leading-none">40+</p>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">Countries</p>
                  </div>
                </div>

                {/* Hand-drawn style Caption */}
                <div className="pt-6 pb-2 text-center">
                  <p className="font-['Young_Serif'] text-[#2e3973] text-xl italic opacity-80">
                    "Making the Bible the best part of the day"
                  </p>
                </div>
              </div>

              {/* Est. Badge - Tactile Design */}
              <div className="absolute -bottom-6 -left-6 bg-[#f0614b] text-white p-6 rounded-full shadow-2xl shadow-[#f0614b]/30 flex items-center justify-center transform hover:scale-110 transition-transform cursor-default">
                <div>
                  <p className="text-[10px] uppercase font-black opacity-80 tracking-widest text-center">Since</p>
                  <p className="text-xl font-black">2020</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Side: The Narrative */}
          <div className="w-full lg:w-[55%] space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#f0614b]">
                <Sparkles size={18} />
                <span className="font-['Poppins'] font-bold text-sm uppercase tracking-widest">Our Story</span>
              </div>
              
              <h2 className="font-['Young_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#2e3973] leading-tight">
                Hi, I'm <span className="text-[#f0614b] relative inline-block">
                  Queeneth
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-['Poppins'] text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                I started Creative Kids Bible Club because I was tired of seeing kids zone out during family devotions. You know the look—<span className="bg-yellow-100 px-1 rounded">the glazed eyes, the fidgeting</span>, and the "are we done yet?"
              </p>
              
              <p className="font-['Poppins'] text-lg text-gray-600 leading-relaxed">
                Here's what I learned: <strong className="text-[#2e3973]">Kids aren't bored with the Bible.</strong> They're bored with boring presentations of the Bible. Give them crayons, puzzles, and stories they can touch—suddenly, they can't get enough.
              </p>

              <div className="bg-[#2e3973]/5 p-8 rounded-[2rem] border-l-4 border-[#2e3973]">
                <p className="font-['Poppins'] text-gray-700 italic leading-relaxed">
                  "We take God's Word and wrap it in creativity, color, and fun. It's about building a foundation that lasts a lifetime."
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
              {/* Added a secondary "Human" touch: A signature-style name */}
              <p className="font-['Young_Serif'] text-[#2e3973] text-2xl opacity-40 select-none">
                Queeneth x
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About