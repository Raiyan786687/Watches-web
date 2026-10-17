'use client';

import React from 'react';

export default function Navbar({ totalCartItems, onOpenCart, onOpenLogin }) {
    return (
        <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-bold text-amber-400">
                        ⏱
                    </div>
                    <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                        CHRONO REALM
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <a href="#collection" className="hover:text-amber-400 transition">Collection</a>
                    <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={onOpenLogin}
                        className="bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition"
                    >
                        Sign In
                    </button>

                    <button
                        onClick={onOpenCart}
                        className="relative bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 transition text-xs"
                    >
                        <span>🛒 Cart</span>
                        {totalCartItems > 0 && (
                            <span className="bg-amber-500 text-slate-950 font-bold text-xs px-2 py-0.5 rounded-full">
                                {totalCartItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}