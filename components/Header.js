import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-wider text-amber-500">
        TIME<span className="text-white">CRAFT</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
        <Link href="#home" className="hover:text-amber-400 transition">Home</Link>
        <Link href="#products" className="hover:text-amber-400 transition">Watches (Under 15K)</Link>
        <Link href="#about" className="hover:text-amber-400 transition">About</Link>
      </nav>
      <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition">
        Shop Now
      </button>
    </header>
  );
}