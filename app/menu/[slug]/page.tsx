// app/menu/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMenuItem } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';
import DietaryBadges from '@/components/DietaryBadges';
import SpiceLevel from '@/components/SpiceLevel';

export default async function MenuItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getMenuItem(slug);

  if (!item) notFound();

  const name = getMetafieldValue(item.metadata?.name) || item.title;
  const description = getMetafieldValue(item.metadata?.description);
  const price = item.metadata?.price;
  const image = item.metadata?.featured_image;
  const category = item.metadata?.category;
  const isFeatured = item.metadata?.featured_item;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/menu" className="text-brand-600 hover:text-brand-700 mb-6 inline-block">
        ← Back to Menu
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {image && (
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
              alt={name}
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div>
          {isFeatured && (
            <span className="inline-block bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              ⭐ Featured Item
            </span>
          )}
          {category && (
            <p className="text-brand-600 font-medium uppercase tracking-wide text-sm mb-2">
              {category.title}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">{name}</h1>
          {price !== undefined && price !== null && (
            <p className="text-3xl font-bold text-brand-600 mb-6">${Number(price).toFixed(2)}</p>
          )}
          {description && (
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <DietaryBadges items={item.metadata?.dietary_info} />
            <SpiceLevel level={item.metadata?.spice_level} />
          </div>

          <Link
            href="/locations"
            className="inline-block bg-ink hover:bg-brand-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </div>
  );
}