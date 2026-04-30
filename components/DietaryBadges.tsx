export default function DietaryBadges({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return <div />;

  const colorMap: Record<string, string> = {
    'Vegetarian': 'bg-green-100 text-green-800',
    'Vegan': 'bg-emerald-100 text-emerald-800',
    'Gluten-Free': 'bg-amber-100 text-amber-800',
    'Dairy-Free': 'bg-blue-100 text-blue-800',
    'Nut-Free': 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`text-xs font-medium px-2 py-1 rounded-full ${colorMap[item] || 'bg-gray-100 text-gray-800'}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}