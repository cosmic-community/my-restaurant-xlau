import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-ink text-cream sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🍽️</span>
            <span className="font-display text-2xl font-bold">My Restaurant</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
            <Link href="/menu" className="hover:text-brand-300 transition-colors">Menu</Link>
            <Link href="/locations" className="hover:text-brand-300 transition-colors">Locations</Link>
            <Link href="/reviews" className="hover:text-brand-300 transition-colors">Reviews</Link>
          </nav>
          <Link
            href="/locations"
            className="hidden md:inline-block bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
          >
            Reserve
          </Link>
        </div>
        <nav className="md:hidden flex items-center justify-around pb-3 border-t border-brand-900 pt-3">
          <Link href="/menu" className="text-sm hover:text-brand-300">Menu</Link>
          <Link href="/locations" className="text-sm hover:text-brand-300">Locations</Link>
          <Link href="/reviews" className="text-sm hover:text-brand-300">Reviews</Link>
        </nav>
      </div>
    </header>
  );
}