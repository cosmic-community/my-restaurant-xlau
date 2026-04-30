import { getLocations } from '@/lib/cosmic';
import LocationCard from '@/components/LocationCard';

export const metadata = {
  title: 'Locations - My Restaurant',
  description: 'Find a My Restaurant near you. View hours, contact info, and make reservations.'
};

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div>
      <section className="bg-ink text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 font-medium tracking-widest uppercase text-sm mb-3">Visit Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Locations</h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Find your nearest My Restaurant and book your table today.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {locations.length === 0 ? (
            <p className="text-center text-gray-600">No locations available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}