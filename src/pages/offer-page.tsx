import Header from '@/components/header/header';
import OfferGallery from '@/components/offer-gallery/offer-gallery';
import OfferHost from '@/components/offer-host/offer-host';
import { OfferPreview } from '@/types/offer';
import ReviewsList from '@/components/reviews-list/reviews-list';
import comments from '@/mocks/comments';
import Map from '@/components/map/map';
import OffersList from '@/components/offers-list/offers-list';

type OfferPageProps = {
  offers: OfferPreview[];
};

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const nearOffers = offers.slice(0, 3);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
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
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">Apartment</li>
                <li className="offer__feature offer__feature--bedrooms">3 Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max 4 adults</li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">Wi-Fi</li>
                  <li className="offer__inside-item">Washing machine</li>
                  <li className="offer__inside-item">Towels</li>
                  <li className="offer__inside-item">Heating</li>
                  <li className="offer__inside-item">Coffee machine</li>
                  <li className="offer__inside-item">Baby seat</li>
                  <li className="offer__inside-item">Kitchen</li>
                  <li className="offer__inside-item">Dishwasher</li>
                  <li className="offer__inside-item">Cabel TV</li>
                  <li className="offer__inside-item">Fridge</li>
                </ul>
              </div>

              <OfferHost />
              <ReviewsList reviews={comments} />
            </div>
          </div>

          <Map
            offers={nearOffers}
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
