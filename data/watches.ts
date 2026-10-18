export interface Watch {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    description: string;
}

export const initialWatches: Watch[] = [
    {
        id: "1",
        name: "Royal Chronograph Gold",
        brand: "Rolex Style",
        price: 45000,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        description: "Automatic movement with genuine leather strap and sapphire crystal glass."
    },
    {
        id: "2",
        name: "Obsidian Onyx Skeleton",
        brand: "Patek Style",
        price: 68000,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
        description: "Transparent mechanical skeleton face with sleek black stainless steel finish."
    },
    {
        id: "3",
        name: "Silver Diver Professional",
        brand: "Omega Style",
        price: 32000,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
        description: "200m water resistance, rotating bezel, luminous markers for low light."
    }
];