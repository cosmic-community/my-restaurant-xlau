import Link from 'next/link';
import { getFeaturedMenuItems, getLocations, getReviews } from '@/lib/cosmic';
import MenuItemCard from '@/components/MenuItemCard';
import LocationCard from '@/components/LocationCard';
import ReviewCard from '@/components/ReviewCard';

export default async function HomePage() {
  const [featured, locations, reviews] = await Promise.all([
    getFeaturedMenuItems(),
    getLocations(),
    getReviews()
  ]);

  const recentReviews = reviews.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://imgix.cosmicjs.com/1baa49c0-4485-11f1-9f85-e7af420a77a5-autopilot-photo-1517248135467-4c7edcad34c4-1777547391054.jpeg?w=2000&h=1000&fit=crop&auto=format,compress')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-brand-300 font-medium tracking-widest uppercase text-sm mb-4">Welcome to</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">My Restaurant</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-cream/90">
            Authentic flavors, unforgettable moments. Crafted with passion, served with love.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors backdrop-blur-sm border border-white/20"
            >
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      {featured.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-brand-500 font-medium tracking-widest uppercase text-sm mb-2">Chef's Selection</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Featured Dishes</h2>
              <div className="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.slice(0, 6).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-block bg-ink hover:bg-brand-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Explore Full Menu →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Locations */}
      {locations.length > 0 && (
        <section className="py-16 md:py-24 bg-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-brand-500 font-medium tracking-widest uppercase text-sm mb-2">Find Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Our Locations</h2>
              <div className="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {recentReviews.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-brand-500 font-medium tracking-widest uppercase text-sm mb-2">Testimonials</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">What Guests Say</h2>
              <div className="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/reviews"
                className="inline-block text-brand-600 hover:text-brand-700 font-medium"
              >
                Read All Reviews →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}