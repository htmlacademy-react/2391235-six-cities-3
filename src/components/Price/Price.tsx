import BookmarkButton from '@/components/bookmark-button/bookmark-button';

type PriceProps = {
  price: number;
  isFavorite: boolean;
};

function Price({ price, isFavorite }: PriceProps): JSX.Element {
  return (
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">&euro;{price}</b>
        <span className="place-card__price-text">/&nbsp;night</span>
      </div>

      <BookmarkButton isFavorite={isFavorite} />
    </div>
  );
}

export default Price;
