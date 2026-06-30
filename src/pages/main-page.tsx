import OffersList from '@/components/Offers-list/Offers-list';
import Header from '@/components/Header/Header';
import { OfferPreview } from '@/types/offer';
import SortingOptions from '@/components/Sorting-options/Sorting-options';
import CitiesList from '@/components/Cities-list/Cities-list';
import Map from '@/components/Map/Map';

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
