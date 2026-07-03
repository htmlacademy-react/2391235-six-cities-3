import OfferCard from '@/components/offer-card/offer-card';
import { OfferPreview } from '@/types/offer';

type NearPlacesListProps = {
  offers: OfferPreview[];
};

function NearPlacesList({ offers }: NearPlacesListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>

      <div className="near-places__list places__list">
        {offers.slice(0, 3).map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            cardType="near-places"
            onMouseEnter={() => undefined}
            onMouseLeave={() => undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlacesList;
