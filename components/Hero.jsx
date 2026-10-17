import React from 'react';

export default function Hero() {
    return (
        <section className="relative px-6 py-20 md:py-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full mb-4">
                    LUXURY TIMEPIECES 2026
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                    Timeless Precision, <br />
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                        Crafted For Elegance.
                    </span>
                </h1>
                <p className="text-slate-400 text-base md:text-lg mb-8 max-w-lg">
                    Discover our hand-picked collection of premium mechanical and automatic luxury watches built with Swiss perfection.
                </p>
                <a
                    href="#collection"
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-amber-500/20"
                >
                    Explore Collection
                </a>
            </div>

            <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full filter blur-3xl"></div>
                <img
                    src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
                    alt="Hero Luxury Watch"
                    className="relative z-10 rounded-2xl border border-slate-800 shadow-2xl max-w-md w-full object-cover aspect-square"
                />
            </div>
        </section>
    );
}