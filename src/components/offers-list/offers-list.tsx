import OfferCard from '@/components/offer-card/offer-card';
import { OfferPreview } from '@/types/offer';

type OffersListProps = {
  offers: OfferPreview[];
  onOfferHover?: (offerId: string | null) => void;
};

function OffersList({ offers, onOfferHover }: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType="cities"
          onMouseEnter={() => onOfferHover?.(offer.id)}
          onMouseLeave={() => onOfferHover?.(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
