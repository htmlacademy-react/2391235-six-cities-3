import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: ReactElement;
};

function PrivateRoute({ isAuthorized, children }: PrivateRouteProps): JSX.Element {
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
