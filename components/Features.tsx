import React from 'react'
import { Book, Heart, Users, Star } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Book size={28} />,
      title: "Real Bible Learning",
      description: "Scripture that actually sticks—not just memorization, but understanding God's Word in ways kids can apply to their lives.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Heart size={28} />,
      title: "Hands-On Fun",
      description: "Coloring, crafts, puzzles, and games that make Bible stories come alive. Learning disguised as playtime!",
      color: "bg-red-50",
      iconColor: "text-[#f0614b]"
    },
    {
      icon: <Users size={28} />,
      title: "You've Got This",
      description: "Simple guides for parents and guardians—even if you've never led a devotional before. We make it easy.",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Star size={28} />,
      title: "All Year Long",
      description: "Three books covering spring, summer/fall, and winter. Your family's faith journey, one season at a time.",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      {/* Decorative Background Dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#2e3973 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Playful Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-['Poppins'] font-bold text-[#f0614b] text-xs uppercase tracking-[0.2em] mb-4 block">
            The Experience
          </span>
          <h2 className="font-['Young_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#2e3973] mb-6">
            Bible time made <span className="underline decoration-[#f0614b]/30 decoration-wavy underline-offset-8">simple.</span>
          </h2>
          <p className="font-['Poppins'] text-lg text-gray-600 leading-relaxed">
            Everything you need to make the Word of God the highlight of your child's day—no seminary degree required.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-[#2e3973]/5 transition-all duration-500 border border-gray-100 flex flex-col items-start hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`mb-6 p-4 rounded-2xl ${feature.color} ${feature.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              
              <h3 className="font-['Poppins'] text-xl font-bold text-[#2e3973] mb-3 leading-tight">
                {feature.title}
              </h3>
              
              <p className="font-['Poppins'] text-gray-500 text-[15px] leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle hover indicator */}
              <div className="mt-6 w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-[#f0614b] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Playful Floating Testimonial */}
        <div className="mt-24 flex justify-center">
          <div className="relative inline-block">
            {/* Speech Bubble Tail */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#2e3973] rotate-45" />
            
            <div className="relative bg-[#2e3973] text-white px-8 py-6 rounded-[2rem] shadow-xl text-center max-w-lg">
              <p className="font-['Poppins'] text-lg md:text-xl italic leading-relaxed mb-4">
                "Finally, devotionals our kids don't groan about!"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f0614b] flex items-center justify-center font-bold text-xs">SM</div>
                <span className="font-['Poppins'] font-bold text-sm tracking-wide opacity-80 italic">— Sarah M., mother of three</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;