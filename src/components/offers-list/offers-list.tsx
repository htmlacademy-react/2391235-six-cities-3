import { useState } from 'react';

import OfferCard from '@/components/offer-card/offer-card';
import { OfferPreview } from '@/types/offer-preview';

type OffersListProps = {
  offers: OfferPreview[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  // TODO: activeOfferId will be used in Map component.

  return (
    <div className="cities__places-list places__list tabs__content"
      data-active-offer-id={activeOfferId ?? undefined}
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
