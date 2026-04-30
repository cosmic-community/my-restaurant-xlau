import { MenuCategory, MenuItem } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import MenuItemCard from '@/components/MenuItemCard';

interface Props {
  category: MenuCategory;
  items: MenuItem[];
}

export default function CategorySection({ category, items }: Props) {
  if (!items || items.length === 0) return null;

  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const description = getMetafieldValue(category.metadata?.description);

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-3">{name}</h2>
        {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        <div className="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}