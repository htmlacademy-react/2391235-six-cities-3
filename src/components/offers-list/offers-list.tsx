import { useState } from 'react';

import OfferCard from '@/components/Offer-card/Offer-card';
import { OfferPreview } from '@/types/offer';

type OffersListProps = {
  offers: OfferPreview[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType="cities"
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
