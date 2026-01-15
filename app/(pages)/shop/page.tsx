'use client'

import React, { useEffect, useState } from 'react';
import { Check, ShoppingBag, ArrowRight, Star, BookOpen, Loader2, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  title: string;
  price: number;
  subtitle?: string;
  period?: string;
  image?: string;
  color?: string;
  features?: string[];
}

interface BundleInfo {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  bookCount: number;
  features?: string[];
}

const ShopPage = () => {
  const { addToCart, showNotification } = useCart();
  const [volumes, setVolumes] = useState<Product[]>([]);
  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('/api/devotionals');
        
        if (!response.ok) {
          throw new Error('Failed to fetch devotionals');
        }
        
        const data = await response.json();
        setVolumes(data.books);
        setBundleInfo(data.bundle);
      } catch (err) {
        console.error('Error loading devotionals:', err);
        setError('Unable to load devotionals. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-[#f0614b] animate-spin mb-4" />
            <p className="text-slate-500 text-lg">Loading our collection...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-500 text-lg mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#f0614b] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#d94e3a] transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-50 bg-[#2e3973] text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[300px]"
          >
            <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
              <Check size={14} className="text-[#2e3973]" strokeWidth={4} />
            </div>
            <span className="font-bold tracking-tight">Added to your collection</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#f8fafc] to-white py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link 
            href="/#devotionals"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#2e3973] mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[#f0614b] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Our Complete Collection
            </span>
            <h1 className="font-['Young_Serif'] text-5xl md:text-7xl text-[#2e3973] mb-6">
              The Full <span className="italic text-[#f0614b]">Shop</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed">
              Browse all our devotional books and find the perfect companion for your family's faith journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bundle Highlight */}
      {bundleInfo && (
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-[#2e3973] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 overflow-hidden w-48 h-48">
                <div className="bg-[#f0614b] text-white text-[10px] font-bold uppercase tracking-widest py-2 w-64 text-center absolute top-10 -right-16 rotate-45 shadow-lg">
                  Save {Math.round((1 - bundleInfo.price / bundleInfo.originalPrice) * 100)}%
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f0614b" color="#f0614b" />)}
                    <span className="text-white/60 text-xs font-bold ml-2 uppercase tracking-tighter">
                      Best Value
                    </span>
                  </div>
                  
                  <h2 className="font-['Young_Serif'] text-4xl md:text-5xl text-white mb-6 leading-tight">
                    {bundleInfo.title}
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {bundleInfo.features?.map((item) => (
                       <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                          <div className="p-1 bg-white/10 rounded-full">
                            <Check size={12} className="text-green-400" />
                          </div>
                          {item}
                       </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                    <div>
                      <p className="text-white/40 line-through text-sm font-bold">
                        £{bundleInfo.originalPrice.toFixed(2)}
                      </p>
                      <p className="text-5xl font-['Young_Serif'] text-white">
                        £{bundleInfo.price.toFixed(2)}
                      </p>
                    </div>
                    <button 
                      onClick={() => addToCart(bundleInfo)}
                      className="bg-[#f0614b] text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#2e3973] transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
                    >
                      Add Complete Bundle
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center relative">
                   <div className="relative w-full h-[400px]">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-80 bg-[#e8f0fe] rounded-2xl rotate-[-6deg] shadow-2xl border-4 border-white/10" />
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 w-64 h-80 bg-[#e9f7ef] rounded-2xl rotate-[2deg] shadow-2xl border-4 border-white/10" />
                     <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-80 bg-white rounded-2xl rotate-[-2deg] shadow-2xl border-4 border-[#2e3973]/20 flex items-center justify-center">
                        <div className="text-center p-6">
                           <span className="block text-4xl mb-2">🎨</span>
                           <p className="font-['Young_Serif'] text-[#2e3973] text-xl">
                             {bundleInfo.bookCount} Books
                           </p>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* All Books Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Young_Serif'] text-4xl text-[#2e3973] mb-4">
              Individual Books
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Each devotional can also be purchased separately
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {volumes.map((vol, idx) => (
              <motion.div 
                key={vol.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className={`${vol.color} m-4 rounded-2xl aspect-[4/5] relative overflow-hidden flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-500`}>
                  {vol.image ? (
                    <Image 
                      src={vol.image} 
                      alt={vol.title} 
                      width={240}
                      height={320}
                      className="object-contain drop-shadow-2xl group-hover:rotate-2 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-40 h-56 bg-white/40 backdrop-blur-md rounded-lg shadow-inner flex items-center justify-center">
                       <BookOpen size={40} className="text-slate-400" />
                    </div>
                  )}
                  {vol.period && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#2e3973] uppercase tracking-widest shadow-sm">
                      {vol.period}
                    </div>
                  )}
                </div>

                <div className="p-8 pt-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-['Young_Serif'] text-2xl text-[#2e3973]">{vol.title}</h3>
                    <span className="text-xl font-bold text-[#2e3973]">£{vol.price.toFixed(2)}</span>
                  </div>
                  {vol.subtitle && (
                    <p className="text-[#f0614b] text-sm font-bold mb-6 uppercase tracking-tight">
                      {vol.subtitle}
                    </p>
                  )}
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {vol.features?.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f0614b]" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => addToCart(vol)}
                    className="w-full bg-[#f0614b]/5 text-[#f0614b] py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#f0614b] group-hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;