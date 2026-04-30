import { getReviews } from '@/lib/cosmic';
import ReviewCard from '@/components/ReviewCard';
import { getMetafieldValue } from '@/lib/cosmic';

export const metadata = {
  title: 'Reviews - My Restaurant',
  description: 'Read what our guests have to say about their dining experiences.'
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  // Calculate average rating
  let avgRating = 0;
  if (reviews.length > 0) {
    const total = reviews.reduce((sum, r) => {
      const v = getMetafieldValue(r.metadata?.rating);
      return sum + (parseInt(v, 10) || 0);
    }, 0);
    avgRating = total / reviews.length;
  }

  return (
    <div>
      <section className="bg-ink text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Guest Reviews</h1>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-2 text-2xl">
              <span className="text-brand-400">★</span>
              <span className="font-bold">{avgRating.toFixed(1)}</span>
              <span className="text-cream/70 text-lg">/ 5.0</span>
              <span className="text-cream/70 text-lg ml-2">({reviews.length} reviews)</span>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-600">No reviews yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}