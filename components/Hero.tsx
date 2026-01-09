import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-[#fafaf9] overflow-hidden' id='home'>
      <div className='max-w-6xl mx-auto px-6 py-12 md:py-'>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:order-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0614b]/10 text-[#f0614b] text-sm font-bold tracking-wide uppercase">
                ✨ Faith made fun
              </span>
              
              <h1 className="font-['Young_Serif'] text-5xl md:text-6xl lg:text-7xl text-[#2e3973] leading-[1.1] tracking-tight">
                Bible study <br /> 
                <span className="text-[#f0614b]">kids actually love.</span>
              </h1>
              
              <p className="font-['Poppins'] text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Turn eye-rolls into excitement. Discover creative, no-prep activities designed for ages 6-12 that make God's Word stick.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto font-['Poppins'] bg-[#f0614b] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-[#f0614b]/25">
                Try It Free
              </button>
              <button className="w-full sm:w-auto font-['Poppins'] bg-transparent text-[#2e3973] px-10 py-4 rounded-2xl font-bold text-lg border-2 border-[#2e3973]/10 hover:bg-[#2e3973]/5 transition-all">
                See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <div className="flex text-[#f0614b] tracking-[0.2em] font-bold">★★★★★</div>
              <p className="font-['Poppins'] text-gray-500 text-sm">
                Trusted by <span className="font-bold text-gray-800">2,500+ parents</span> worldwide
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:order-2 relative">
            {/* Playful Background Shape */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] rotate-3 transform scale-105 -z-10" />
            
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <Image
                  src='/images/kid1.png'
                  alt='Happy child'
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Badge 1: 365 Days */}
              {/* <div className="absolute -top-6 lg:-right-6 lg:animate-bounce-slow">
                <div className="bg-[#2e3973] text-white p-5 rounded-3xl shadow-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">365</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">Days</span>
                </div>
              </div> */}

              {/* Floating Badge 2: Just Print */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">No prep needed</p>
                    <p className="text-[#2e3973] font-bold">Just print & go!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Trust Bar */}
        <div className="mt-20 py-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['Kid-Tested', 'Parent-Approved', 'Biblically Sound', 'Instant Access'].map((text) => (
              <span key={text} className="font-['Poppins'] font-bold text-gray-400 text-sm tracking-wider uppercase">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero