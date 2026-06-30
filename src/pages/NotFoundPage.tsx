import Header from '@/components/header/header';

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

              <a href="/">
                Go to main page
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
