export default function ProductCard({ watch, onAddToCart }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition flex flex-col shadow-xl">
      <img src={watch.image} alt={watch.name} className="w-full h-64 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">{watch.brand}</span>
        <h3 className="text-lg font-bold text-white mb-2">{watch.name}</h3>
        <p className="text-xs text-slate-400 mb-6 flex-grow">{watch.description}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
          <span className="text-xl font-extrabold text-amber-400">PKR {watch.price.toLocaleString()}</span>
          <button
            onClick={() => onAddToCart(watch)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}