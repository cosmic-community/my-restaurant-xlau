import Link from 'next/link';
import { MenuItem } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import DietaryBadges from '@/components/DietaryBadges';
import SpiceLevel from '@/components/SpiceLevel';

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const name = getMetafieldValue(item.metadata?.name) || item.title;
  const description = getMetafieldValue(item.metadata?.description);
  const price = item.metadata?.price;
  const image = item.metadata?.featured_image;
  const isFeatured = item.metadata?.featured_item;

  return (
    <Link href={`/menu/${item.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
            <img
              src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {isFeatured && (
              <span className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand-600 transition-colors">
              {name}
            </h3>
            {price !== undefined && price !== null && (
              <span className="font-bold text-brand-600 whitespace-nowrap">
                ${Number(price).toFixed(2)}
              </span>
            )}
          </div>
          {description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{description}</p>
          )}
          <div className="flex items-center justify-between gap-2 mt-auto">
            <DietaryBadges items={item.metadata?.dietary_info} />
            <SpiceLevel level={item.metadata?.spice_level} />
          </div>
        </div>
      </article>
    </Link>
  );
}