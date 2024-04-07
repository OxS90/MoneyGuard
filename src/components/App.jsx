import { React, useEffect } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { refreshUser } from '../redux/authorisation/operations';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import NotFoundPage from 'pages/NotFoundPage';
import { SpinnerLoader } from './Spinner/Spinner';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from '../styles/globalStyles';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = lazy(() => import('../pages/HomePage/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const DashboardPage = lazy(() => import('../pages/DashboardPage/Dashboard'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/Statistics'));
const CurrencyPage = lazy(() => import('../pages/CurrencyPage/Currency'));
const { Navigate } = require('react-router-dom');

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  useEffect(() => {
    if (!isLoggedIn && token) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, token]);

  return (
    <>
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<RegisterPage />}
              />
            }
          />
          <Route element={<DashboardPage />}>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute>
                  <StatisticsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/currency"
              element={
                isMobile ? (
                  <PrivateRoute>
                    <CurrencyPage />
                  </PrivateRoute>
                ) : (
                  <Navigate to={'/home'} />
                )
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
