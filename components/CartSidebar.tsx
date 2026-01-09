'use client'

import React, { useState } from 'react';
import { X, Trash2, CreditCard, Plus, Minus, ShoppingBag, Book } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert(`Checkout: £${cartTotal.toFixed(2)}\n\nIn your real app, this would redirect to Stripe.`);
  };

  return (
    <div className="fixed inset-0 z-50" onClick={() => setIsCartOpen(false)}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div 
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center bg-gradient-to-r from-[#2e3973] to-[#3d4a8a] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="font-['Young_Serif'] text-xl">Your Cart</h3>
              <p className="text-xs text-blue-200">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-2 hover:bg-white/10 rounded-lg"
            type="button"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-500 mb-2 font-medium">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#f0614b] font-semibold hover:underline"
                type="button"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border">
                <div className="flex gap-4">
                  <div className={`${item.color || 'bg-blue-50'} w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <div className="w-12 h-16 bg-white shadow-md rounded-sm flex items-center justify-center">
                      <Book size={20} className="text-[#2e3973]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-[#2e3973] mb-1">{item.title}</h4>
                    {item.subtitle && <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>}
                    <p className="text-sm font-bold text-[#f0614b]">£{item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white"
                          type="button"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white"
                          type="button"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg ml-auto"
                        type="button"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {item.quantity > 1 && (
                  <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal ({item.quantity})</span>
                    <span className="font-semibold">£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-white space-y-4">
            <div className="flex justify-between font-bold text-xl text-[#2e3973]">
              <span>Total</span>
              <span>£{cartTotal.toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              type="button"
              className="w-full bg-gradient-to-r from-[#f0614b] to-[#ff7a5c] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all"
            >
              <CreditCard size={20} />
              Checkout with Stripe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartSidebar;