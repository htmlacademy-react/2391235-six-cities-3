import Header from '@/components/header/header';
import { OfferPreview } from '@/types/offer';
import OfferCard from '@/components/offer-card/offer-card';
import Logo from '@/components/logo/logo';

type FavoritesPageProps = {
  offers: OfferPreview[];
};

const offersByCity = (offers: OfferPreview[]) =>
  offers.reduce<Record<string, OfferPreview[]>>((acc, offer) => {
    const cityName = offer.city.name;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);

    return acc;
  }, {});

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const groupedOffers = offersByCity(
    offers.filter((offer) => offer.isFavorite)
  );
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedOffers).map(([cityName, cityOffers]) => (
                <li className="favorites__locations-items" key={cityName}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#todo">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>

                  <div className="favorites__places">
                    {cityOffers.map((offer) => (
                      <OfferCard
                        key={offer.id}
                        offer={offer}
                        cardType="favorites"
                        onMouseEnter={() => undefined}
                        onMouseLeave={() => undefined}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </div>
  );
}

export default FavoritesPage;
