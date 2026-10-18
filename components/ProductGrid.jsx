import ProductCard from "./ProductCard";

export default function ProductGrid({ watches, onAddToCart }) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-8">Featured Timepieces</h2>
            {watches.length === 0 ? (
                <p className="text-slate-400 text-center py-10">No watches found. Add some from the CMS panel!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {watches.map((watch) => (
                        <ProductCard key={watch.id} watch={watch} onAddToCart={onAddToCart} />
                    ))}
                </div>
            )}
        </div>
    );
}