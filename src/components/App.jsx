import { React, Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { refreshUser } from '../redux/authorisation/operations';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
// import { ToastContainer } from 'react-toastify';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const DashboardPage = lazy(() => import('../pages/DashboardPage/Dashboard'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/Statistics'));
// const CurrencyPage = lazy(() => import('../pages/CurrencyPage/Currency'));

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();
  // const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  useEffect(() => {
    if (!isLoggedIn && token) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, token]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
            {/* {isMobile ? (
            <Route
              path="/currency"
              element={<PrivateRoute><CurrencyPage /></PrivateRoute>}
            />
          ) : (
            <Navigate to="/home" />
          )} */}
          </Route>
          <Route
            path="*"
            element={
              <h1 style={{ paddingTop: '300px', textAlign: 'center' }}>
                Oh, something went wrong.
              </h1>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
