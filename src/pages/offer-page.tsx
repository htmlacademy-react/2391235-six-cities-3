import Header from '@/components/header/header';
import OfferGallery from '@/components/offer-gallery/offer-gallery';
import OfferHost from '@/components/offer-host/offer-host';
import { OfferPreview } from '@/types/offer';
import ReviewsList from '@/components/reviews-list/reviews-list';
import comments from '@/mocks/comments';
import Map from '@/components/map/map';
import OffersList from '@/components/offers-list/offers-list';
import offersMock from '@/mocks/offers';
import getRatingWidth from '@/utils/get-rating-width';

type OfferPageProps = {
  offers: OfferPreview[];
};

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const selectedOffer = offersMock[0];
  const nearOffers = offers.slice(1, 4);
  const mapOffers = [selectedOffer, ...nearOffers];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={selectedOffer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingWidth(selectedOffer.rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>

                <span className="offer__rating-value rating__value">
                  {selectedOffer.rating}
                </span>
              </div>

              <ul className="offer__features">
                <li className={`offer__feature offer__feature--${selectedOffer.type}`}>
                  {selectedOffer.type}
                </li>

                <li className="offer__feature offer__feature--bedrooms">
                  {selectedOffer.bedrooms} Bedrooms
                </li>

                <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">
                  &euro;{selectedOffer.price}
                </b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>

                <ul className="offer__inside-list">
                  {selectedOffer.goods.map((good) => (
                    <li
                      key={good}
                      className="offer__inside-item"
                    >
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <OfferHost
                host={selectedOffer.host}
                description={selectedOffer.description}
              />
              <ReviewsList reviews={comments} />
            </div>
          </div>

          <Map
            offers={mapOffers}
            activeOfferId={selectedOffer.id}
            className="offer__map map"
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>

            <OffersList
              offers={nearOffers}
              cardType="near-places"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
