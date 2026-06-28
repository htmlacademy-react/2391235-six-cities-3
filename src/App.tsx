import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PrivateRoute from '@/components/private-route/private-route';
import FavoritesPage from '@/pages/FavoritesPage';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import OfferPage from '@/pages/OfferPage';
import { OfferPreview } from '@/types/offer-preview';

type AppProps = {
  offers: OfferPreview[];
};

function App({ offers }: AppProps): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage offers={offers} />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/favorites',
      element: (
        <PrivateRoute isAuthorized={false}>
          <FavoritesPage />
        </PrivateRoute>
      ),
    },
    {
      path: '/offer/:id',
      element: <OfferPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
