import { Review } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ReviewCard({ review }: { review: Review }) {
  const customerName = getMetafieldValue(review.metadata?.customer_name) || 'Anonymous';
  const reviewText = getMetafieldValue(review.metadata?.review_text);
  const reviewDate = getMetafieldValue(review.metadata?.review_date);
  const ratingValue = getMetafieldValue(review.metadata?.rating);
  const rating = parseInt(ratingValue, 10) || 0;
  const locationName = review.metadata?.location?.title;

  const formatDate = (date: string) => {
    if (!date) return '';
    try {
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return date;
    }
  };

  return (
    <article className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-xl ${i < rating ? 'text-brand-500' : 'text-gray-300'}`}>★</span>
        ))}
      </div>
      {reviewText && (
        <p className="text-gray-700 italic leading-relaxed mb-4">"{reviewText}"</p>
      )}
      <div className="border-t border-gray-100 pt-3">
        <p className="font-semibold text-ink">{customerName}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          {reviewDate && <span>{formatDate(reviewDate)}</span>}
          {locationName && (
            <>
              <span>•</span>
              <span>{locationName}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}