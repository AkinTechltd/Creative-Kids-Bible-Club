import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any // Custom easing for smooth motion
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1
      }
    }
  }

  return (
    <section className='bg-[#fafaf9] overflow-hidden' id='home'>
      <div className='max-w-6xl mx-auto px-6 py-12 md:py-14'>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:order-1 space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0614b]/10 text-[#f0614b] text-sm font-bold tracking-wide uppercase"
              >
                ✨ Faith made fun
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="font-['Young_Serif'] text-5xl md:text-6xl lg:text-7xl text-[#2e3973] leading-[1.1] tracking-tight"
              >
                Bible study <br /> 
                <span className="text-[#f0614b]">kids actually love.</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="font-['Poppins'] text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Turn eye-rolls into excitement. Discover creative, no-prep activities designed for ages 6-12 that make God's Word stick.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button 
                className="w-full sm:w-auto font-['Poppins'] bg-[#f0614b] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#f0614b]/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 97, 75, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Try It Free
              </motion.button>
              <motion.button 
                className="w-full sm:w-auto font-['Poppins'] bg-transparent text-[#2e3973] px-10 py-4 rounded-2xl font-bold text-lg border-2 border-[#2e3973]/10"
                whileHover={{ backgroundColor: "rgba(46, 57, 115, 0.05)", scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                See How It Works
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex text-[#f0614b] tracking-[0.2em] font-bold">★★★★★</div>
              <p className="font-['Poppins'] text-gray-500 text-sm">
                Trusted by <span className="font-bold text-gray-800">2,500+ parents</span> worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="lg:order-2 relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            {/* Playful Background Shape */}
            <motion.div 
              className="absolute inset-0 bg-blue-100/50 rounded-[3rem] -z-10"
              initial={{ rotate: 0, scale: 1.05 }}
              animate={{ rotate: 3, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            
            <div className="relative group">
              <motion.div 
                className="relative overflow-hidden rounded-[2.5rem]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src='/images/kid1.png'
                  alt='Happy child'
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Badge: Just Print */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">No prep needed</p>
                    <p className="text-[#2e3973] font-bold">Just print & go!</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Simplified Trust Bar */}
        <motion.div 
          className="mt-20 py-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
            {['Kid-Tested', 'Parent-Approved', 'Biblically Sound', 'Instant Access'].map((text, index) => (
              <motion.span 
                key={text} 
                className="font-['Poppins'] font-bold text-gray-400 text-sm tracking-wider uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + (index * 0.1) }}
                whileHover={{ scale: 1.1, color: "#2e3973" }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero