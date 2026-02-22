import React from 'react'
import { Book, Heart, Users, Star, Globe, Lightbulb } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Book size={28} />,
      title: "Biblical Foundation",
      description: "Deep, age-appropriate scripture teaching that goes beyond memorization — children learn to understand, apply, and own God's Word.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Creative Learning",
      description: "Coloring, crafts, puzzles, and hands-on activities that make Bible stories unforgettable. Faith activated through imagination.",
      color: "bg-red-50",
      iconColor: "text-[#f0614b]"
    },
    {
      icon: <Users size={28} />,
      title: "Parent Partnership",
      description: "We equip parents and guardians to lead devotions with confidence — even without a theology background. You've got this.",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Globe size={28} />,
      title: "Global Community",
      description: "A worldwide family of parents raising children to know God, spanning over 40 countries across every continent.",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(#2e3973 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-['Poppins'] font-bold text-[#f0614b] text-xs uppercase tracking-[0.2em] mb-4 block">
            What We Do
          </span>
          <h2 className="font-['Young_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#2e3973] mb-6">
            Four pillars of <span className="underline decoration-[#f0614b]/30 decoration-wavy underline-offset-8">our mission.</span>
          </h2>
          <p className="font-['Poppins'] text-lg text-gray-600 leading-relaxed">
            Everything we do at CKBC is designed to raise children who don't just know about God — they know Him personally and boldly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-4xl hover:shadow-2xl hover:shadow-[#2e3973]/5 transition-all duration-500 border border-gray-100 flex flex-col items-start hover:-translate-y-2"
            >
              <div className={`mb-6 p-4 rounded-2xl ${feature.color} ${feature.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>

              <h3 className="font-['Poppins'] text-xl font-bold text-[#2e3973] mb-3 leading-tight">
                {feature.title}
              </h3>

              <p className="font-['Poppins'] text-gray-500 text-[15px] leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-[#f0614b] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-24 flex justify-center">
          <div className="relative inline-block">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#2e3973] rotate-45" />
            <div className="relative bg-[#2e3973] text-white px-8 py-6 rounded-4xl shadow-xl text-center max-w-2xl">
              <p className="font-['Poppins'] text-lg md:text-xl italic leading-relaxed mb-4">
                "To cultivate a generation of children deeply rooted in God's Word, excelling in all areas of life, and boldly proclaiming Jesus on every platform."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f0614b] flex items-center justify-center font-bold text-xs">Q</div>
                <span className="font-['Poppins'] font-bold text-sm tracking-wide opacity-80 italic">— CKBC Vision Statement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;