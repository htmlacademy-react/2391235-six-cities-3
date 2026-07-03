import OffersList from '@/components/offers-list/offers-list';
import Header from '@/components/header/header';
import { OfferPreview } from '@/types/offer';
import SortingOptions from '@/components/sorting-options/sorting-options';
import CitiesList from '@/components/cities-list/cities-list';
import Map from '@/components/map/map';

type MainPageProps = {
  offers: OfferPreview[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>

              <SortingOptions />

              <OffersList offers={offers} />
            </section>

            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
