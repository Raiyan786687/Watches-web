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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Yahan apna WhatsApp number likhein (Country code ke sath, maslan: 923001234567)
  const ADMIN_WHATSAPP_NUMBER = "923001234567";

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

  // Direct WhatsApp Notification / Order Sender Function
  const handleWhatsAppOrder = (watchName: string, price: number) => {
    const text = `🚨 *New Watch Order Received!*\n\n⏱ *Product:* ${watchName}\n💰 *Price:* $${price}\n👤 *Customer:* ${currentUser ? currentUser.name : 'Guest User'}\n\nPlease confirm my order!`;
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      <Navbar
        totalCartItems={totalCartItems}
        onOpenCart={() => { }}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {currentUser && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-2 px-6 text-center text-xs text-amber-300">
          Welcome back, <span className="font-bold">{currentUser.name}</span>! (Signed in via {currentUser.provider})
        </div>
      )}

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

      {isLoginOpen && (
        <LoginScreen
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={(user: { name: string; provider: string }) => setCurrentUser(user)}
        />
      )}

      <Footer />
    </div>
  );
}