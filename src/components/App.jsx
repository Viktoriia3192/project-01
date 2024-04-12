import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/auth/authOperations.js';
import Loader from './Loader/Loader.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import {
  selectAuthIsLoading,
  selectAuthIsSignedIn,
} from '../redux/auth/authSelectors.js';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const WelcomePage = lazy(() => import('../pages/WelcomePage.jsx'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const SignInPage = lazy(() => import('../pages/SignInPage.jsx'));
const SignUpPage = lazy(() => import('../Pages/SignUpPage.jsx'));

const routes = [
  {
    path: '/signup',
    element: (
      <RestrictedRoute>
        <SignUpPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/signin',
    element: (
      <RestrictedRoute>
        <SignInPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to={<HomePage />} />,
  },
];

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const isSignedIn = useSelector(selectAuthIsSignedIn);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          path="/"
          element={
            !isSignedIn ? (
              <RestrictedRoute>
                <WelcomePage />
              </RestrictedRoute>
            ) : (
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            )
          }
        />
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
