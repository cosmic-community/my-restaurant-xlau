import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-ink mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">This dish wasn't on our menu.</p>
        <Link
          href="/"
          className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}