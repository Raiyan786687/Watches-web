export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-900 py-8 text-center text-xs text-slate-500 mt-auto">
            <p>© {new Date().getFullYear()} Royal Timepieces. All rights reserved.</p>
            <p className="mt-1 text-amber-400/80">Developed for Client with Full Dynamic Control</p>
        </footer>
    );
}