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
import Devotionals from '@/components/Devotional';
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
    <div id="contact" className="bg-[#2e3973] pt-24 pb-12 text-white">
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
    </div>
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