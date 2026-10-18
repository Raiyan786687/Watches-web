"use client";

import React, { useState, useEffect } from "react";

const defaultWatches = [
  {
    id: "1",
    name: "Royal Chronograph Gold",
    brand: "Rolex Style",
    price: 45000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Automatic movement with genuine leather strap and sapphire crystal glass."
  }
];

export default function StorefrontPage() {
  const [watches, setWatches] = useState(defaultWatches);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("zeven_watches_db");
    if (saved) {
      setWatches(JSON.parse(saved));
    }
  }, []);

  const addToCart = (watch) => {
    setCart([...cart, watch]);
    alert(`${watch.name} added to cart!`);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    let text = `*New Order from Royal Timepieces*\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. ${item.name} - PKR ${item.price.toLocaleString()}\n`;
    });
    text += `\n*Total Amount:* PKR ${total.toLocaleString()}`;
    window.open(`https://wa.me/923492584693?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Clean Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold tracking-wider text-amber-400">
            👑 ZevenWatches
          </h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-sm font-bold transition"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Elegance Built For Precision</h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm">
          Discover luxury wristwear crafted with timeless perfection.
        </p>
      </section>

      {/* Products Grid */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-amber-400 mb-8">Featured Timepieces</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div key={watch.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition flex flex-col shadow-xl">
              <img src={watch.image} alt={watch.name} className="w-full h-64 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">{watch.brand}</span>
                <h4 className="text-lg font-bold text-white mb-2">{watch.name}</h4>
                <p className="text-xs text-slate-400 mb-6 flex-grow">{watch.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  <span className="text-xl font-extrabold text-amber-400">PKR {watch.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(watch)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-sm font-bold transition"
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
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition text-sm mt-4"
                >
                  Confirm Order via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="border-t border-slate-800 bg-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Royal Timepieces. All rights reserved.
      </footer>
    </div>
  );
}