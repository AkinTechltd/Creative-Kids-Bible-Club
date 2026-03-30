import React from 'react'

const pillars = [
  {
    number: '01',
    title: 'Biblical Foundation',
    body: 'Deep, age-appropriate scripture teaching that goes beyond memorisation — children learn to understand, apply, and own God\'s Word for themselves.',
    accent: '#f0614b',
  },
  {
    number: '02',
    title: 'Creative Learning',
    body: 'Coloring, crafts, puzzles and hands-on activities make Bible stories unforgettable. Faith is activated through imagination and play — not passive listening.',
    accent: '#2e3973',
  },
  {
    number: '03',
    title: 'Parent Partnership',
    body: 'We equip parents and guardians to lead devotions with confidence — even without a theology background. You\'ve been sent to your children. We help you show up ready.',
    accent: '#f0614b',
  },
  {
    number: '04',
    title: 'Global Community',
    body: 'A worldwide family of parents raising children to know God, spanning over 40 countries. You are never doing this alone.',
    accent: '#2e3973',
  },
]

const Features = () => {
  return (
    <section className="bg-[#2e3973] py-20 md:py-28 relative overflow-hidden">
      {/* Faint large number watermark — editorial texture */}
      <div className="absolute right-0 top-0 font-['Young_Serif'] text-[20rem] text-white/[0.03] leading-none select-none pointer-events-none translate-x-16 -translate-y-12">
        CKBC
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-10 h-px bg-[#f0614b]" />
          <p className="font-['Poppins'] text-[11px] font-black uppercase tracking-[0.3em] text-[#f0614b]">What We Do</p>
        </div>

        {/* Headline — two-col split */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 border-b border-white/10 pb-12">
          <h2 className="font-['Young_Serif'] text-4xl md:text-5xl text-white leading-tight">
            Four pillars of our mission.
          </h2>
          <div className="flex flex-col justify-end">
            <p className="font-['Poppins'] text-white/60 leading-relaxed text-[15px]">
              Everything at CKBC is designed to raise children who don't just know <em>about</em> God — they know Him personally, live boldly, and carry the Word into every room they enter.
            </p>
          </div>
        </div>

        {/* Pillars — horizontal newspaper rule layout, not icon cards */}
        <div className="grid md:grid-cols-2 gap-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`
                py-10 px-8
                ${i % 2 === 0 ? 'md:border-r border-white/10' : ''}
                ${i < 2 ? 'border-b border-white/10' : ''}
                group hover:bg-white/5 transition-colors duration-300
              `}
            >
              {/* Large number + rule */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="font-['Young_Serif'] text-5xl leading-none"
                  style={{ color: pillar.accent }}
                >
                  {pillar.number}
                </span>
                <span className="flex-grow h-px bg-white/10" />
              </div>

              <h3 className="font-['Young_Serif'] text-2xl text-white mb-3">
                {pillar.title}
              </h3>
              <p className="font-['Poppins'] text-white/60 text-[14px] leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Vision statement — typographic block quote */}
        <div className="mt-16 border-t border-white/10 pt-12 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-1">
            <p className="font-['Young_Serif'] text-7xl text-[#f0614b] leading-none">"</p>
          </div>
          <div className="lg:col-span-9">
            <p className="font-['Young_Serif'] text-2xl md:text-3xl text-white italic leading-snug">
              To cultivate a generation of children deeply rooted in God's Word, excelling in all areas of life, and boldly proclaiming Jesus on every platform.
            </p>
          </div>
          <div className="lg:col-span-2 lg:text-right">
            <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.2em] text-[#f0614b]">CKBC Vision</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;