export default function OrderModal({ isOpen, onClose, cart, currency }) {
    if (!isOpen) return null;

    const total = cart.reduce((acc, curr) => acc + curr.price, 0);

    const handleWhatsAppCheckout = () => {
        if (cart.length === 0) return;
        let text = `*New Order from Royal Timepieces*\n\n`;
        cart.forEach((item, index) => {
            text += `${index + 1}. ${item.name} - ${currency} ${item.price.toLocaleString()}\n`;
        });
        text += `\n*Total Amount:* ${currency} ${total.toLocaleString()}`;
        const url = `https://wa.me/923001234567?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold text-lg"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-amber-400 mb-6">Your Shopping Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-slate-400 text-center py-8">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                            {cart.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                                    <div>
                                        <p className="font-bold text-white text-sm">{item.name}</p>
                                        <p className="text-xs text-slate-400">{item.brand}</p>
                                    </div>
                                    <p className="font-bold text-amber-400 text-sm">{currency} {item.price.toLocaleString()}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-base font-bold">
                            <span>Total:</span>
                            <span className="text-amber-400">{currency} {total.toLocaleString()}</span>
                        </div>

                        <button
                            onClick={handleWhatsAppCheckout}
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition text-sm mt-4"
                        >
                            Confirm Order via WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}