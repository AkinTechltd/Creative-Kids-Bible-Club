'use client'

import React from 'react';
import { 
  Book, Check, 
  Plus, ShoppingBag
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  title: string;
  price: number;
  subtitle?: string;
  period?: string;
  image?: string;
  color?: string;
  accent?: string;
  features?: string[];
}

const Devotionals = () => {
  const { addToCart, showNotification } = useCart();

  const volumes: Product[] = [
    {
      id: 'vol-1',
      title: "Spring Season",
      subtitle: "Fresh Starts",
      period: "Jan - Apr",
      price: 19.99,
      color: "bg-blue-50",
      accent: "text-blue-600",
      features: ["12 weeks", "Habit tracker", "Print-ready"]
    },
    {
      id: 'vol-2',
      title: "Summer/Fall",
      subtitle: "Growing Strong",
      period: "May - Aug",
      price: 19.99,
      color: "bg-green-50",
      accent: "text-green-600",
      features: ["16 weeks", "Nature themes", "Great for trips"]
    },
    {
      id: 'vol-3',
      title: "Winter Season",
      subtitle: "Gathering In",
      period: "Sept - Dec",
      price: 19.99,
      color: "bg-orange-50",
      accent: "text-orange-600",
      features: ["16 weeks", "Advent specials", "Family activities"]
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {showNotification && (
          <div className="fixed top-24 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <Check size={20} />
            <span className="font-semibold">Added to cart!</span>
          </div>
        )}
        
        <div className="mb-16">
          <span className="text-[#f0614b] font-bold text-xs uppercase mb-3 block">The Curriculum</span>
          <h2 className="font-['Young_Serif'] text-5xl text-[#2e3973] mb-4">
            A full year of faith-filled wonder.
          </h2>
          <p className="text-gray-500 max-w-xl">
            Choose a season or grab the bundle for the complete experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {volumes.map((vol) => (
            <div key={vol.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className={`${vol.color} rounded-2xl aspect-square mb-6 flex items-center justify-center relative`}>
                <div className="w-32 h-44 bg-white shadow-2xl rounded-sm">
                  <div className="p-4">
                    <div className={`w-6 h-6 rounded-full ${vol.color} flex items-center justify-center`}>
                      <Book size={12} className={vol.accent} />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  {vol.period}
                </div>
              </div>

              <div className="px-4 pb-4">
                <h3 className="font-['Young_Serif'] text-2xl text-[#2e3973] mb-1">{vol.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{vol.subtitle}</p>
                
                <ul className="space-y-2 mb-8">
                  {vol.features?.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check size={14} className="text-green-500" /> {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => addToCart(vol)}
                  className="w-full flex items-center justify-center gap-2 bg-[#2e3973] text-white py-4 rounded-2xl font-bold hover:bg-[#f0614b] transition-all"
                >
                  <ShoppingBag size={18} />
                  Add to Cart — £{vol.price.toFixed(2)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle */}
        <div className="bg-[#2e3973] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0614b]/10 -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-block mb-4">
                Best Value
              </span>
              <h2 className="font-['Young_Serif'] text-4xl text-white mb-4">Complete Seasonal Bundle</h2>
              <p className="text-blue-100 text-lg mb-6">All 3 volumes, 44 weeks of content.</p>
              
              <div className="flex items-center gap-6">
                <div className="text-white">
                  <p className="text-blue-300 line-through text-sm">£59.97</p>
                  <p className="text-4xl font-black">£47.99</p>
                </div>
                <button 
                  onClick={() => addToCart({id: 'bundle', title: 'Complete Bundle', price: 47.99})}
                  className="bg-[#f0614b] hover:scale-105 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl"
                >
                  Grab the Bundle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devotionals;