'use client';

import React from 'react';

export default function LoginScreen({ onClose, onLoginSuccess }) {
    const handleSocialLogin = (provider) => {
        // Simulate social login account selection
        const mockUser = {
            name: `Rayyan (${provider} User)`,
            email: `user@${provider.toLowerCase()}.com`,
            provider: provider
        };
        onLoginSuccess(mockUser);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold text-lg">✕</button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Welcome to Chrono Realm</h3>
                    <p className="text-slate-400 text-xs">Choose your preferred provider to sign in instantly.</p>
                </div>

                <div className="space-y-3">
                    {/* Google Sign In */}
                    <button
                        onClick={() => handleSocialLogin('Google')}
                        className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white font-medium py-3 px-4 rounded-xl text-sm transition flex items-center justify-center gap-3"
                    >
                        <span className="text-red-400 font-bold">G</span> Sign in with Google
                    </button>

                    {/* Facebook Sign In */}
                    <button
                        onClick={() => handleSocialLogin('Facebook')}
                        className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white font-medium py-3 px-4 rounded-xl text-sm transition flex items-center justify-center gap-3"
                    >
                        <span className="text-blue-500 font-bold">f</span> Sign in with Facebook
                    </button>

                    {/* LinkedIn Sign In */}
                    <button
                        onClick={() => handleSocialLogin('LinkedIn')}
                        className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white font-medium py-3 px-4 rounded-xl text-sm transition flex items-center justify-center gap-3"
                    >
                        <span className="text-sky-400 font-bold">in</span> Sign in with LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
}