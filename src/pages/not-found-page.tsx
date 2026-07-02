import Header from '@/components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h1>404 Not Found</h1>
              <p>The page you are looking for does not exist.</p>

              <Link to={AppRoute.Main}>
                Go to main page
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
