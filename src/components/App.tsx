import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Login from './login/login';
import FavoritesPage from '../pages/FavoritesPage';
import OfferPage from '../pages/OfferPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './Private-route';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage offersCount={offersCount} />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={false}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/offer/:id"
          element={<OfferPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
