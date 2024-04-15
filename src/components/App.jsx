import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/auth/authOperations.js';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from './Loader/Loader.jsx';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import { selectAuthIsLoading } from '../redux/auth/authSelectors.js';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const WelcomePage = lazy(() => import('../pages/WelcomePage.jsx'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const SigninPage = lazy(() => import('../pages/SigninPage.jsx'));
const SignupPage = lazy(() => import('../pages/SignupPage.jsx'));

const routes = [
  {
    path: '/welcome',
    element: (
      <RestrictedRoute>
        <WelcomePage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <RestrictedRoute>
        <SignupPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/signin',
    element: (
      <RestrictedRoute>
        <SigninPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to={<WelcomePage />} />,
  },
];

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};
export default App;
