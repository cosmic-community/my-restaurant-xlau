import { getMenuCategories, getMenuItems } from '@/lib/cosmic';
import CategorySection from '@/components/CategorySection';
import { MenuItem } from '@/types';

export const metadata = {
  title: 'Menu - My Restaurant',
  description: 'Explore our full menu of delicious dishes crafted with the finest ingredients.'
};

export default async function MenuPage() {
  const [categories, allItems] = await Promise.all([
    getMenuCategories(),
    getMenuItems()
  ]);

  // Group items by category
  const itemsByCategory: Record<string, MenuItem[]> = {};
  allItems.forEach((item) => {
    const catId = item.metadata?.category?.id;
    if (catId) {
      if (!itemsByCategory[catId]) {
        itemsByCategory[catId] = [];
      }
      itemsByCategory[catId].push(item);
    }
  });

  return (
    <div>
      <section className="bg-ink text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 font-medium tracking-widest uppercase text-sm mb-3">Our Selection</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Menu</h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Discover dishes crafted with passion and the finest seasonal ingredients.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.length === 0 ? (
            <p className="text-center text-gray-600">No menu categories available.</p>
          ) : (
            categories.map((category) => {
              const items = itemsByCategory[category.id];
              if (!items || items.length === 0) return null;
              return <CategorySection key={category.id} category={category} items={items} />;
            })
          )}
        </div>
      </section>
    </div>
  );
}