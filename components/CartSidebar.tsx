'use client'

import React, { useState } from 'react';
import { X, Trash2, CreditCard, Plus, Minus, ShoppingBag, Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const items = cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      }));

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Checkout failed');
      if (data.url) window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Refined Overlay: Solid but translucent */}
      <div 
        className="absolute inset-0 bg-slate-900/60 transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />
      
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-xl animate-drawer">
        {/* Header: Focused on Cleanliness */}
        <div className="px-8 py-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-['Young_Serif'] text-[#2e3973]">Shopping Cart</h2>
            <p className="text-sm text-gray-500 uppercase tracking-wider">{cartCount} items</p>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-[#2e3973] transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        {/* Cart Items: Removing the "Card" background for a cleaner list view */}
        <div className="flex-1 overflow-y-auto px-8 py-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} className="text-gray-200" strokeWidth={1} />
              <p className="text-gray-500 font-medium">Your cart is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-[#2e3973] hover:text-[#f0614b] transition-colors"
              >
                Continue Browsing →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="py-6 flex gap-6">
                  {/* Item Image Placeholder */}
                  <div className="w-24 h-32 bg-slate-50 flex-shrink-0 flex items-center justify-center border border-gray-100">
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Preview</div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-[#2e3973] leading-tight">{item.title}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    {item.subtitle && <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>}
                    
                    <div className="mt-auto flex justify-between items-end">
                      {/* Quantity Controls: More minimalist */}
                      <div className="flex items-center border border-gray-200 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-bold w-10 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-bold text-[#2e3973]">£{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Modern and Solid */}
        {cart.length > 0 && (
          <div className="p-8 border-t bg-slate-50">
            {error && <div className="mb-4 text-xs text-red-500 bg-red-50 p-2 border border-red-100">{error}</div>}
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Estimated Total</span>
              <span className="text-2xl font-['Young_Serif'] text-[#2e3973]">£{cartTotal.toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-[#2e3973] text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#f0614b] transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>Checkout Securely</>
              )}
            </button>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <CreditCard size={12} />
              Powered by Stripe
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes drawer {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-drawer {
          animation: drawer 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default CartSidebar;