import Link from 'next/link';
import { Location } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function LocationCard({ location }: { location: Location }) {
  const name = getMetafieldValue(location.metadata?.name) || location.title;
  const address = getMetafieldValue(location.metadata?.address);
  const phone = getMetafieldValue(location.metadata?.phone);
  const image = location.metadata?.location_image;

  return (
    <Link href={`/locations/${location.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
        {image && (
          <div className="relative aspect-video overflow-hidden bg-brand-100">
            <img
              src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-ink group-hover:text-brand-600 transition-colors mb-2">
            📍 {name}
          </h3>
          {address && <p className="text-gray-600 text-sm mb-2 whitespace-pre-line">{address}</p>}
          {phone && <p className="text-brand-600 font-medium text-sm">{phone}</p>}
        </div>
      </article>
    </Link>
  );
}