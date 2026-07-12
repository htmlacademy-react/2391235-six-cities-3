import OfferCard from '@/components/offer-card/offer-card';
import { OfferPreview } from '@/types/offer';
import clsx from 'clsx';

type CardType = 'cities' | 'near-places';

const listClasses: Record<CardType, string> = {
  cities: 'cities__places-list tabs__content',
  'near-places': 'near-places__list',
};

type OffersListProps = {
  offers: OfferPreview[];
  cardType?: CardType;
  onOfferHover?: (offerId: string | null) => void;
};

function OffersList({
  offers,
  cardType = 'cities',
  onOfferHover
}: OffersListProps): JSX.Element {

  return (
    <div className={clsx(listClasses[cardType], 'places__list')}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={() => onOfferHover?.(offer.id)}
          onMouseLeave={() => onOfferHover?.(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
