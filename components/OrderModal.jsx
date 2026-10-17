'use client';

import React from 'react';

export default function OrderModal({ watch, onClose, onOrderWhatsApp }) {
    if (!watch) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
                >
                    ✕
                </button>
                <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-56 object-cover rounded-xl mb-4 border border-slate-800"
                />
                <span className="text-amber-400 text-xs font-semibold">{watch.brand}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{watch.name}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{watch.description}</p>
                <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-white">${watch.price}</span>
                    <span className="text-amber-400 font-bold">★ {watch.rating} / 5.0</span>
                </div>
                <button
                    onClick={() => {
                        onOrderWhatsApp(watch.name, watch.price);
                        onClose();
                    }}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                    Order Now via WhatsApp
                </button>
            </div>
        </div>
    );
}