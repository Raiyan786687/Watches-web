"use client";

import Link from "next/link";

export default function Navbar({ cartCount, onOpenCart }) {
    return (
        <nav className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-extrabold tracking-wider text-amber-400">
                    👑 Royal Timepieces
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition">
                        Shop
                    </Link>
                    <Link href="/admin" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition">
                        CMS Panel
                    </Link>
                    <button
                        onClick={onOpenCart}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2"
                    >
                        🛒 Cart ({cartCount})
                    </button>
                </div>
            </div>
        </nav>
    );
}