'use client';

import React, { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Assalam-o-Alaikum! Welcome to Chrono Realm. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "Thanks for your inquiry! Our support team will assist you shortly, or you can order directly via WhatsApp.", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold p-4 rounded-full shadow-2xl transition flex items-center justify-center text-xl"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 h-96 flex flex-col justify-between shadow-2xl">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950 rounded-t-2xl">
            <span className="font-bold text-amber-400 text-sm">Chrono AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto flex-1 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <span className={`p-3 rounded-xl max-w-[80%] ${m.sender === 'user' ? 'bg-amber-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-200'}`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="bg-slate-950 border border-slate-800 text-xs text-white rounded-lg px-3 py-2 flex-1 focus:outline-none focus:border-amber-500"
            />
            <button onClick={handleSend} className="bg-amber-500 text-slate-950 font-bold px-3 py-2 text-xs rounded-lg">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}