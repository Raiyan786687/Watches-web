'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ watches, onQuickView, onAddToCart }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Luxury', 'Sports', 'Minimalist', 'Classic'];

    const filteredWatches = selectedCategory === 'All'
        ? watches
        : watches.filter(w => w.category === selectedCategory);

    return (
        <section id="collection" className="px-6 py-16 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Exclusive Watches</h2>
                    <p className="text-slate-400 text-sm">Filter by category and choose your ultimate statement timepiece.</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition ${selectedCategory === cat
                                    ? 'bg-amber-500 border-amber-500 text-slate-950'
                                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Watch Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWatches.map((watch) => (
                    <ProductCard
                        key={watch.id}
                        watch={watch}
                        onQuickView={onQuickView}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </section>
    );
}