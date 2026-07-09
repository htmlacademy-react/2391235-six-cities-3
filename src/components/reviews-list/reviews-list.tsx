import Review from '@/components/review/review';
import { Comment } from '@/types/offer';

type ReviewsListProps = {
  reviews: Comment[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    </section>
  );
}

export default ReviewsList;
