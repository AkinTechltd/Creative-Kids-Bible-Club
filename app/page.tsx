'use client'

import React, { useState } from 'react';
import { 
  Book, Heart, Users, Star, Send, Instagram, Facebook, 
  Mail, Phone, MapPin, ChevronRight, Check, ShoppingBag, 
  Plus, Minus, X, CreditCard 
} from 'lucide-react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import CartSidebar from '@/components/CartSidebar';

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
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const volumes = [
    {
      id: 'vol-1',
      title: "Spring Season",
      subtitle: "Fresh Starts",
      period: "Jan - Apr",
      price: 19.99,
      image: '/images/spring-book.png',
      color: "bg-blue-50",
      accent: "text-blue-600",
      features: ["12 weeks of beginnings", "Habit tracker included", "Print-at-home ready"]
    },
    {
      id: 'vol-2',
      title: "Summer/Fall",
      subtitle: "Growing Strong",
      period: "May - Aug",
      price: 19.99,
      image: '/images/summer-book.png',
      color: "bg-green-50",
      accent: "text-green-600",
      features: ["16 weeks of depth", "Nature-themed lessons", "Great for vacations"]
    },
    {
      id: 'vol-3',
      title: "Winter Season",
      subtitle: "Gathering In",
      period: "Sept - Dec",
      price: 19.99,
      image: '/images/winter-book.png',
      color: "bg-orange-50",
      accent: "text-orange-600",
      features: ["16 weeks of reflection", "Advent & Christmas specials", "Celebration ideas"]
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="devotionals" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#f0614b] font-bold tracking-[0.2em] text-xs uppercase block mb-3">The Curriculum</span>
            <h2 className="font-['Young_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#2e3973]">
              A full year of <br /> faith-filled wonder.
            </h2>
          </div>
          <p className="font-['Poppins'] text-gray-500 max-w-sm">
            Choose a season to start your journey, or grab the bundle for the ultimate family experience.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {volumes.map((vol) => (
            <div key={vol.id} className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className={`${vol.color} rounded-[2rem] aspect-square mb-6 relative overflow-hidden flex items-center justify-center`}>
                {/* Book Placeholder/Image */}
                <div className="w-32 h-44 bg-white shadow-2xl rounded-sm transform group-hover:rotate-6 transition-transform duration-500 flex flex-col p-4 border-l-8 border-gray-100">
                   <div className={`w-6 h-6 rounded-full ${vol.color} flex items-center justify-center`}>
                      <Book size={12} className={vol.accent} />
                   </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2e3973]">
                  {vol.period}
                </div>
              </div>

              <div className="px-4 pb-4">
                <h3 className="font-['Young_Serif'] text-2xl text-[#2e3973] mb-1">{vol.title}</h3>
                <p className="font-['Poppins'] text-sm text-gray-500 mb-4">{vol.subtitle}</p>
                
                <ul className="space-y-2 mb-8">
                  {vol.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-['Poppins'] text-gray-600">
                      <Check size={14} className="text-green-500" /> {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => addToCart(vol)}
                  className="w-full flex items-center justify-center gap-2 bg-[#2e3973] text-white py-4 rounded-2xl font-bold hover:bg-[#f0614b] transition-all group"
                >
                  <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                  Add to Cart — £{vol.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* The Bundle Card - Highly Visual */}
        <div className="relative bg-[#2e3973] rounded-[3rem] p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0614b]/10 -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Best Seller & Value
              </span>
              <h2 className="font-['Young_Serif'] text-4xl md:text-5xl text-white">The Complete <br /> Seasonal Bundle</h2>
              <p className="font-['Poppins'] text-blue-100 text-lg max-w-md">
                Get all 3 volumes, 44 weeks of content, and free digital updates forever.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <div className="text-white">
                  <p className="text-blue-300 line-through text-sm">£59.97</p>
                  <p className="text-4xl font-black">£47.99</p>
                </div>
                <button 
                  onClick={() => addToCart({id: 'bundle', title: 'Seasonal Bundle', price: 47.99})}
                  className="bg-[#f0614b] hover:scale-105 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-900/40"
                >
                  Grab the Bundle
                </button>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-2 opacity-80 rotate-3">
               {[1,2,3].map(i => (
                 <div key={i} className="bg-white/10 aspect-[3/4] rounded-xl border border-white/20" />
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide-over Cart (Stripe-ready) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 translate-x-0">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="font-['Young_Serif'] text-2xl text-[#2e3973]">Your Cart</h3>
              <button onClick={() => setIsCartOpen(false)}><X /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center py-20 text-gray-400">Your bag is empty!</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                    <div>
                      <p className="font-bold text-[#2e3973]">{item.title}</p>
                      <p className="text-sm text-gray-500">£{item.price}</p>
                    </div>
                    <button className="text-red-400 hover:text-red-600"><Minus size={16} /></button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t bg-gray-50 space-y-4">
              <div className="flex justify-between font-bold text-xl text-[#2e3973]">
                <span>Total</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#f0614b] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#d0503b] transition-all">
                <CreditCard />
                Checkout with Stripe
              </button>
              <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">Secure SSL Checkout</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Community Section - Focused on "Safe Haven"
const Community = () => {
  return (
    <section id="community" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-['Young_Serif'] text-4xl md:text-5xl text-[#2e3973] mb-6">Faith is better <span className="text-[#f0614b]">together.</span></h2>
          <p className="font-['Poppins'] text-gray-500 max-w-2xl mx-auto text-lg">
            Join thousands of parents sharing tips, celebrate wins, and get direct access to Queeneth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-[#f0614b]/5 p-12 rounded-[3rem] border-2 border-dashed border-[#f0614b]/20 text-center">
              <div className="w-20 h-20 bg-white rounded-[2rem] shadow-lg flex items-center justify-center mx-auto mb-8">
                <Users className="text-[#f0614b]" size={32} />
              </div>
              <h3 className="font-['Young_Serif'] text-3xl text-[#2e3973] mb-4">Local Sessions</h3>
              <p className="font-['Poppins'] text-gray-600 mb-8">Hands-on teaching led by Queeneth in the UK. Perfect for deep bonding.</p>
              <button className="font-['Poppins'] font-bold text-[#f0614b] flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                Find local events <ChevronRight size={20} />
              </button>
           </div>

           <div className="bg-[#2e3973] p-12 rounded-[3rem] text-center text-white relative">
              <div className="absolute top-4 right-4 animate-pulse">
                 <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-['Young_Serif'] text-3xl mb-4">The Global App</h3>
              <p className="font-['Poppins'] text-blue-100/80 mb-8">Can't make it in person? Our digital space is always open for questions.</p>
              <button className="bg-white text-[#2e3973] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
                Join the Private Circle
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#2e3973] pt-24 pb-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 pb-20 border-b border-white/10">
          <div className="space-y-8">
            <h2 className="font-['Young_Serif'] text-4xl md:text-5xl">We're just an <br /> <span className="text-[#f0614b]">email away.</span></h2>
            <p className="font-['Poppins'] text-blue-100/60 max-w-sm">
              Not sure which book is right for your child's age? We'd love to help you choose.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@ckbc.com" className="flex items-center gap-4 text-xl font-bold group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#f0614b] transition-all">
                  <Mail size={20} />
                </div>
                info@creativekidsbibleclub.com
              </a>
            </div>
          </div>

          <form className="bg-white rounded-[2.5rem] p-8 md:p-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-[#2e3973] focus:ring-2 focus:ring-[#f0614b]" />
              <input type="email" placeholder="Email" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-[#2e3973] focus:ring-2 focus:ring-[#f0614b]" />
            </div>
            <textarea placeholder="How can we help?" rows={4} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-[#2e3973] focus:ring-2 focus:ring-[#f0614b]"></textarea>
            <button className="w-full bg-[#f0614b] py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-900/20 hover:scale-[1.02] transition-all">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-xs font-bold uppercase tracking-widest">
           <p>© 2024 Creative Kids Bible Club</p>
           <div className="flex gap-8">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Shipping</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-[#f0614b] selection:text-white">
      <Hero />
      <Features />
      <About />
      <Devotionals />
      <Community />
      <Contact />
      <CartSidebar />
    </div>
  );
}