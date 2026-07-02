import ReviewCard from '@/components/review-card/review-card';
import ReviewForm from '@/components/review-form/review-form';

function OfferReviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>

      <ul className="reviews__list">
        <ReviewCard />
      </ul>

      <ReviewForm />
    </section>
  );
}

export default OfferReviews;
