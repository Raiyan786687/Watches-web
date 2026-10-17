'use client';

import React, { useState } from 'react';
import { WATCHES } from '@/data/watches';

type Watch = (typeof WATCHES)[number];
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import OrderModal from '@/components/OrderModal';
import LoginScreen from '@/components/LoginScreen';
import Footer from '@/components/Footer';

interface CartItem {
  watch: Watch;
  qty: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  // By default isko true rakha hai taake web khulne par sab se pehle login modal aaye
  const [currentUser, setCurrentUser] = useState<any>(null);

  const ADMIN_WHATSAPP_NUMBER = "923001234567"; // Apna number yahan likh dena

  const addToCart = (watch: Watch) => {
    setCart(prev => {
      const existing = prev.find(item => item.watch.id === watch.id);
      if (existing) {
        return prev.map(item => item.watch.id === watch.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { watch, qty: 1 }];
    });
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleWhatsAppOrder = (watchName: string, price: number) => {
    const text = `🚨 *New Watch Order Received!*\n\n⏱ *Product:* ${watchName}\n💰 *Price:* $${price}\n👤 *Customer:* ${currentUser ? currentUser.name : 'Guest User'}\n\nPlease confirm my order!`;
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">

      {/* Agar user logged in nahi hai, toh sab se pehle LoginScreen dikhaye ga aur baaki website hide rakhega */}
      {!currentUser ? (
        <LoginScreen
          onClose={() => { }} // User tab tak close nahi kar sakta jab tak login na kare
          onLoginSuccess={(user: { name: string; provider: string }) => setCurrentUser(user)}
        />
      ) : (
        <>
          <Navbar
            totalCartItems={totalCartItems}
            onOpenCart={() => { }}
            onOpenLogin={() => setCurrentUser(null)} // Logout button ke taur par kaam karega
          />

          <div className="bg-amber-500/10 border-b border-amber-500/20 py-2 px-6 text-center text-xs text-amber-300 flex justify-between items-center max-w-7xl mx-auto w-full">
            <span>Welcome back, <span className="font-bold">{currentUser.name}</span>! (Signed in via {currentUser.provider})</span>
            <button
              onClick={() => setCurrentUser(null)}
              className="text-red-400 hover:underline text-xs font-semibold"
            >
              Sign Out
            </button>
          </div>

          <Hero />

          <ProductGrid
            watches={WATCHES}
            onQuickView={(w: Watch) => setSelectedWatch(w)}
            onAddToCart={addToCart}
          />

          {selectedWatch && (
            <OrderModal
              watch={selectedWatch}
              onClose={() => setSelectedWatch(null)}
              onOrderWhatsApp={handleWhatsAppOrder}
            />
          )}

          <Footer />
        </>
      )}

    </div>
  );
}