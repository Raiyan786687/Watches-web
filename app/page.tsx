"use client";

import React, { useState, useEffect } from "react";

const defaultWatches = [
  {
    id: "1",
    name: "Zeven Royal Chrono",
    brand: "Zeven Signature",
    price: 45000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Automatic movement with genuine leather strap and sapphire crystal glass."
  },
  {
    id: "2",
    name: "Zeven Onyx Skeleton",
    brand: "Zeven Masterpiece",
    price: 68000,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description: "Transparent mechanical skeleton face with sleek black stainless steel finish."
  },
  {
    id: "3",
    name: "Zeven Diver Professional",
    brand: "Zeven Sport",
    price: 32000,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    description: "200m water resistance, rotating bezel, luminous markers for low light."
  }
];

export default function StorefrontPage() {
  const [watches, setWatches] = useState(defaultWatches);
  const [cart, setCart] = useState<typeof defaultWatches>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchWatches = () => {
      const saved = localStorage.getItem("royal_watches_new");
      if (saved) {
        setWatches(JSON.parse(saved));
      }
    };

    fetchWatches();
    window.addEventListener("focus", fetchWatches);
    return () => window.removeEventListener("focus", fetchWatches);
  }, []);

  const addToCart = (watch: (typeof defaultWatches)[number]) => {
    setCart([...cart, watch]);
    alert(`${watch.name} added to cart!`);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const total = cart.reduce((acc, curr) => acc + curr.price, 0);

    let text = `*New Order - ZEVEN WATCHES*\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. ${item.name} (${item.brand}) - PKR ${item.price.toLocaleString()}\n`;
    });
    text += `\n*Total Amount:* PKR ${total.toLocaleString()}`;

    // Apna number yahan add karein (Country code ke sath, bina + ya spaces ke)
    const whatsappNumber = "923492584693"; // Replace with your WhatsApp number

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold tracking-wider text-amber-400 flex items-center gap-2">
            <span>⚡</span> ZEVEN WATCHES
          </h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-sm font-bold transition shadow-lg"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Hero Section with Watermark Background Logo */}
      <section className="relative text-center py-28 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
          <img
            src="/logo.png"
            alt="ZEVEN WATCHES Logo Background"
            className="w-80 h-80 md:w-96 md:h-96 object-contain rounded-full filter brightness-125 drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
          />
        </div>

        <div className="relative max-w-3xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-2 shadow-inner">
            <span className="text-amber-400 font-extrabold tracking-widest text-sm">ZEVEN WATCHES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Timeless Elegance & Precision
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
            Explore the exclusive luxury collection crafted for those who value every second.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-amber-400 mb-8 border-l-4 border-amber-500 pl-3">
          Featured Timepieces
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div key={watch.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition flex flex-col shadow-xl group">
              <div className="relative overflow-hidden h-64">
                <img src={watch.image} alt={watch.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">{watch.brand}</span>
                <h4 className="text-lg font-bold text-white mb-2">{watch.name}</h4>
                <p className="text-xs text-slate-400 mb-6 flex-grow">{watch.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  <span className="text-xl font-extrabold text-amber-400">PKR {watch.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(watch)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-sm font-bold transition shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative">
            <button onClick={() => setIsCartOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold text-lg">✕</button>
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Your Shopping Cart</h2>
            {cart.length === 0 ? (
              <p className="text-slate-400 text-center py-8">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div>
                        <p className="font-bold text-white text-sm">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.brand}</p>
                      </div>
                      <p className="font-bold text-amber-400 text-sm">PKR {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-base font-bold">
                  <span>Total:</span>
                  <span className="text-amber-400">PKR {cart.reduce((a, b) => a + b.price, 0).toLocaleString()}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition text-sm mt-4 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>💬</span> Send Direct Order to WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 text-slate-400 text-xs py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-amber-400 font-bold text-sm tracking-wider">ZEVEN WATCHES</h4>
            <p className="text-slate-400">Defining luxury and precision timekeeping in Pakistan.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm">Contact & Support</h4>
            <p>📞 Phone / WhatsApp: +92 3492584693</p>
            <p>✉️ Email: raiyan786687@gmail.com</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm">Location</h4>
            <p>📍Karachi, Pakistan</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 ZEVEN WATCHES. All rights reserved. Developed by Rayyan Agentic Developer.
        </div>
      </footer>
    </div>
  );
}