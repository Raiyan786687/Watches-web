import React from 'react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-bold text-amber-400">
                            ⏱
                        </div>
                        <span className="text-lg font-extrabold tracking-wider text-amber-400">
                            CHRONO REALM
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Premium luxury watch store bringing timeless craftsmanship and elegance to your wrist.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-800 pb-2">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#collection" className="hover:text-amber-400 transition">Watch Collection</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition">Warranty & Services</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-800 pb-2">Contact Us</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-400">📍</span>
                            <span>Karachi, Pakistan</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-amber-400">📞</span>
                            <span>+92315 8926584</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-amber-400">✉️</span>
                            <span>support@chronorealm.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-800 pb-2">Stay Updated</h4>
                    <p className="text-slate-400 text-xs mb-3">Subscribe to receive exclusive watch drop alerts.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter email..."
                            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 w-full"
                        />
                        <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-2 text-xs rounded-lg transition">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
                <p>© {new Date().getFullYear()} Chrono Realm. All rights reserved.</p>
                <p className="mt-2 sm:mt-0">Designed for Next.js App Router</p>
            </div>
        </footer>
    );
}