'use client';

import React from 'react';

export default function ProductCard({ watch, onQuickView, onAddToCart }) {
  return (
    <div className="bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition group hover:-translate-y-1">
      <div>
        <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-950 aspect-square">
          <img
            src={watch.image}
            alt={watch.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <span className="absolute top-3 left-3 bg-slate-950/80 border border-slate-800 text-amber-400 text-xs px-2.5 py-1 rounded-md font-medium backdrop-blur-sm">
            {watch.category}
          </span>
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
            {watch.name}
          </h3>
          <span className="text-amber-400 font-bold text-sm">★ {watch.rating}</span>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
          {watch.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-black text-white">${watch.price}</span>
          <span className="text-xs text-slate-500 font-mono">Brand: {watch.brand}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onQuickView(watch)}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 rounded-lg transition"
          >
            Quick View
          </button>
          <button
            onClick={() => onAddToCart(watch)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-2.5 rounded-lg transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}