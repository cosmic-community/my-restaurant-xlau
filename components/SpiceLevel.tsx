import { getMetafieldValue } from '@/lib/cosmic';

export default function SpiceLevel({ level }: { level?: unknown }) {
  const value = getMetafieldValue(level);
  if (!value) return null;

  const peppers: Record<string, number> = {
    'None': 0,
    'Mild': 1,
    'Medium': 2,
    'Hot': 3,
    'Extra Hot': 4
  };

  const count = peppers[value] ?? 0;
  if (count === 0) return null;

  return (
    <span className="flex items-center gap-0.5 text-sm" title={`Spice: ${value}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>🌶️</span>
      ))}
    </span>
  );
}