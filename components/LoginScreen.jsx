"use client";

import { useState } from "react";

export default function LoginScreen({ onLoginSuccess }) {
    const [passcode, setPasscode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passcode === "1234") {
            onLoginSuccess();
        } else {
            alert("Incorrect Passcode! Try 1234");
        }
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl space-y-6 text-center">
                <h2 className="text-2xl font-extrabold text-amber-400">Client Portal Login</h2>
                <p className="text-xs text-slate-400">Enter your passcode to manage store items and prices live.</p>

                <input
                    type="password"
                    placeholder="Enter Passcode (e.g. 1234)"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-center text-white text-lg tracking-widest focus:border-amber-400 outline-none"
                    required
                />

                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition text-sm">
                    Access Admin Dashboard
                </button>
            </form>
        </div>
    );
}