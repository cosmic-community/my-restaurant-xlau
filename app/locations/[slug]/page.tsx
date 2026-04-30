// app/locations/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocation } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = await getLocation(slug);

  if (!location) notFound();

  const name = getMetafieldValue(location.metadata?.name) || location.title;
  const address = getMetafieldValue(location.metadata?.address);
  const phone = getMetafieldValue(location.metadata?.phone);
  const email = getMetafieldValue(location.metadata?.email);
  const hours = getMetafieldValue(location.metadata?.hours);
  const image = location.metadata?.location_image;
  const reservationUrl = getMetafieldValue(location.metadata?.reservation_url);

  return (
    <div>
      {image && (
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2000&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={1600}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white">{name}</h1>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/locations" className="text-brand-600 hover:text-brand-700 mb-6 inline-block">
          ← All Locations
        </Link>

        {!image && (
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">{name}</h1>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="font-display text-2xl font-bold text-ink mb-4">📍 Contact</h2>
            {address && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Address</p>
                <p className="text-gray-800 whitespace-pre-line">{address}</p>
              </div>
            )}
            {phone && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Phone</p>
                <a href={`tel:${phone}`} className="text-brand-600 hover:text-brand-700 font-medium">
                  {phone}
                </a>
              </div>
            )}
            {email && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-brand-600 hover:text-brand-700 font-medium">
                  {email}
                </a>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="font-display text-2xl font-bold text-ink mb-4">🕐 Hours</h2>
            {hours ? (
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">{hours}</p>
            ) : (
              <p className="text-gray-500">Hours not available.</p>
            )}
          </div>
        </div>

        {reservationUrl && (
          <div className="mt-10 text-center">
            <a
              href={reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-full font-medium text-lg transition-colors shadow-lg"
            >
              Make a Reservation →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}