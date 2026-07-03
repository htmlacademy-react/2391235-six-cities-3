import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from '@/components/private-route/private-route';
import FavoritesPage from '@/pages/favorites-page';
import LoginPage from '@/pages/login-page';
import MainPage from '@/pages/main-page';
import NotFoundPage from '@/pages/not-found-page';
import OfferPage from '@/pages/offer-page';
import { OfferPreview } from '@/types/offer';
import { AppRoute } from '@/const';

type AppProps = {
  offers: OfferPreview[];
};

function App({ offers }: AppProps): JSX.Element {
  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage offers={offers} />,
    },
    {
      path: AppRoute.Login,
      element: <LoginPage />,
    },
    {
      path: AppRoute.Favorites,
      element: (
        <PrivateRoute isAuthorized={false}>
          <FavoritesPage offers={offers} />
        </PrivateRoute>
      ),
    },
    {
      path: AppRoute.Offer,
      element: <OfferPage offers={offers} />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
