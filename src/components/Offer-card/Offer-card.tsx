import { OfferPreview } from '@/types/offer';
import getRatingWidth from '@/utils/get-rating-width';
import getOfferType from '@/utils/get-offer-type';
import Badge from '@/components/Badge/Badge';
import Price from '@/components/Price/Price';
import clsx from 'clsx';

type CardType = 'cities' | 'favorites' | 'near-places';

type OfferCardProps = {
  offer: OfferPreview;
  cardType: CardType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const imageSizes: Record<CardType, { width: number; height: number }> = {
  cities: {
    width: 260,
    height: 200,
  },
  favorites: {
    width: 150,
    height: 110,
  },
  'near-places': {
    width: 260,
    height: 200,
  },
};

const cardClasses: Record<CardType, string> = {
  cities: 'cities__card',
  favorites: 'favorites__card',
  'near-places': 'near-places__card',
};

const imageWrapperClasses: Record<CardType, string> = {
  cities: 'cities__image-wrapper',
  favorites: 'favorites__image-wrapper',
  'near-places': 'near-places__image-wrapper',
};

const infoClasses: Record<CardType, string> = {
  cities: 'place-card__info',
  favorites: 'favorites__card-info',
  'near-places': 'place-card__info',
};

function OfferCard({
  offer,
  cardType,
  onMouseEnter,
  onMouseLeave,
}: OfferCardProps): JSX.Element {
  const imageSize = imageSizes[cardType];
  return (
    <article
      className={clsx(cardClasses[cardType], 'place-card')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && <Badge text="Premium" />}
      <div className={clsx(imageWrapperClasses[cardType], 'place-card__image-wrapper')}>
        <a href="#todo">
          <img className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </a>
      </div>
      <div className={clsx(infoClasses[cardType], 'place-card__info')}>
        <Price
          price={offer.price}
          isFavorite={offer.isFavorite}
        />
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#todo">{offer.title}</a>
        </h2>
        <p className="place-card__type">
          {getOfferType(offer.type)}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
