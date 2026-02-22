import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, BookOpen } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
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
                ✨ Raising a Supernatural Army
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-['Young_Serif'] text-5xl md:text-6xl lg:text-7xl text-[#2e3973] leading-[1.1] tracking-tight"
              >
                Where faith <br />
                <span className="text-[#f0614b]">shapes futures.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-['Poppins'] text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Creative Kids Bible Club nurtures children ages 6–12 in God's Word through creative, hands-on learning — building the next generation of bold, Biblically-grounded world-changers.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#about"
                className="w-full sm:w-auto font-['Poppins'] bg-[#f0614b] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#f0614b]/25 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 97, 75, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Our Story <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#community"
                className="w-full sm:w-auto font-['Poppins'] bg-transparent text-[#2e3973] px-10 py-4 rounded-2xl font-bold text-lg border-2 border-[#2e3973]/10 flex items-center justify-center gap-2"
                whileHover={{ backgroundColor: "rgba(46, 57, 115, 0.05)", scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Join the Community
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap items-center gap-8 justify-center lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <p className="font-['Young_Serif'] text-3xl text-[#2e3973]">2,500+</p>
                <p className="font-['Poppins'] text-xs text-gray-500 font-bold uppercase tracking-wider">Families Worldwide</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="font-['Young_Serif'] text-3xl text-[#2e3973]">40+</p>
                <p className="font-['Poppins'] text-xs text-gray-500 font-bold uppercase tracking-wider">Countries Reached</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="font-['Young_Serif'] text-3xl text-[#2e3973]">Since 2020</p>
                <p className="font-['Poppins'] text-xs text-gray-500 font-bold uppercase tracking-wider">Growing Strong</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="lg:order-2 relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
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
                  alt='Creative Kids Bible Club child learning'
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Badge: Mission */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2e3973] rounded-full flex items-center justify-center text-white">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">Global Impact</p>
                    <p className="text-[#2e3973] font-bold">40+ Countries</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: Vision */}
              <motion.div
                className="absolute -top-6 -right-6 bg-[#f0614b] text-white p-4 rounded-2xl shadow-xl hidden sm:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-tight opacity-80">Ages 6–12</p>
                    <p className="font-bold">Bible-first</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          className="mt-20 py-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
            {['Biblically Sound', 'Parent-Guided', 'Globally Trusted', 'Child-Centered', 'Kingdom-Focused'].map((text, index) => (
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