"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Watch = {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    description: string;
};

export default function AdminCMSPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passcode, setPasscode] = useState("");
    const [watches, setWatches] = useState<Watch[]>([]);

    // Form States
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("royal_watches_db");
        if (saved) {
            setWatches(JSON.parse(saved));
        }
    }, []);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Passcode strictly read from .env.local
        const validPasscode = process.env.NEXT_PUBLIC_ADMIN_PASSCODE;

        if (!validPasscode) {
            alert("Error: Admin passcode is not configured in .env.local file!");
            return;
        }

        if (passcode === validPasscode) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect Passcode! Please check your .env.local file.");
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setImagePreview(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddWatch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !price) return;

        const newWatch = {
            id: Date.now().toString(),
            name,
            brand: brand || "Exclusive Brand",
            price: Number(price),
            image: imagePreview || "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
            description: description || "Handcrafted luxury timepiece with premium finish."
        };

        const updated = [newWatch, ...watches];
        setWatches(updated);
        localStorage.setItem("royal_watches_db", JSON.stringify(updated));

        setName("");
        setBrand("");
        setPrice("");
        setImagePreview("");
        setDescription("");
        alert("Watch published live successfully!");
    };

    const handleDelete = (id: string) => {
        if (confirm("Delete this product?")) {
            const updated = watches.filter((w) => w.id !== id);
            setWatches(updated);
            localStorage.setItem("royal_watches_db", JSON.stringify(updated));
        }
    };

    // If not logged in, show Passcode Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 font-sans">
                <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl space-y-6 text-center">
                    <h2 className="text-2xl font-extrabold text-amber-400">🔒 Secure Admin Portal</h2>
                    <p className="text-xs text-slate-400">Enter passcode from your environment config (.env.local) to access store management.</p>
                    <input
                        type="password"
                        placeholder="Enter Passcode"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-center text-white text-lg tracking-widest outline-none focus:border-amber-400"
                        required
                    />
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition text-sm">
                        Login to CMS
                    </button>
                    <div className="pt-2">
                        <Link href="/" className="text-xs text-slate-400 hover:text-amber-400 underline">← Return to Storefront</Link>
                    </div>
                </form>
            </div>
        );
    }

    // Authenticated Admin Dashboard
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
            <header className="border-b border-slate-800 bg-slate-900 p-4 flex justify-between items-center px-8 sticky top-0 z-50">
                <h1 className="text-lg font-bold text-emerald-400">⚡ Client Live CMS Control Center</h1>
                <div className="flex items-center gap-4">
                    <Link href="/" target="_blank" className="bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-700 transition">
                        View Live Store ↗
                    </Link>
                    <button onClick={() => setIsAuthenticated(false)} className="text-xs text-rose-400 hover:underline">
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-10 flex-grow w-full space-y-8">
                <form onSubmit={handleAddWatch} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl">
                    <h2 className="text-lg font-bold text-amber-400">Add New Watch (Upload from Device)</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-slate-400">Watch Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Royal Master Gold"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-1 p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:border-amber-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-400">Brand / Tag</label>
                            <input
                                type="text"
                                placeholder="e.g. Rolex Edition"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full mt-1 p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:border-amber-400"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-400">Price (PKR)</label>
                            <input
                                type="number"
                                placeholder="e.g. 55000"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full mt-1 p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:border-amber-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-400">Select Image from Device</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full mt-1 p-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-slate-950 hover:file:bg-amber-400 cursor-pointer"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="text-xs text-slate-400">Description</label>
                            <input
                                type="text"
                                placeholder="Details about the watch..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full mt-1 p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:border-amber-400"
                            />
                        </div>
                    </div>

                    {imagePreview && (
                        <div className="mt-4">
                            <p className="text-xs text-emerald-400 mb-2 font-semibold">Preview:</p>
                            <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-xl border border-slate-800" />
                        </div>
                    )}

                    <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition text-sm mt-4">
                        + Publish Watch Live
                    </button>
                </form>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
                    <h3 className="text-lg font-bold text-amber-400 mb-4">Manage Inventory ({watches.length})</h3>
                    <div className="space-y-3">
                        {watches.map((w) => (
                            <div key={w.id} className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-4">
                                    <img src={w.image} alt={w.name} className="w-12 h-12 object-cover rounded-lg" />
                                    <div>
                                        <p className="font-bold text-white text-sm">{w.name}</p>
                                        <p className="text-xs text-amber-400">PKR {w.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(w.id)}
                                    className="bg-rose-600/20 text-rose-400 border border-rose-500/30 hover:bg-rose-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}