import { React, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Layout } from './Layout';
// import { PrivateRoute } from '../Routes/PrivateRoute';
// import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { refreshUser } from '../redux/authorisation/operations';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import Dashboard from 'pages/DashboardPage/Dashboard';
import MediaQuery from 'react-responsive';

// const HomePage = lazy(() => import('../pages/HomePage/Home'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
// const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
// const DashboardPage = lazy(() => import('../pages/DashboardPage/Dashboard'));
// const StatiscticsPage = lazy(() =>
//   import('../pages/StatisticsPage/Statistics')
// );
// const CurrencyPage = lazy(() => import('../pages/CurrencyPage/Currency'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <MediaQuery minWidth={1224}>
        <Dashboard />
        <MediaQuery minWidth={1824}>
          <Dashboard />
        </MediaQuery>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {/* You can also use a function (render prop) as a child */}
        {matches => (matches ? <Dashboard /> : <Dashboard />)}
      </MediaQuery>
    </>
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <RestrictedRoute redirectTo="/home" component={<RegisterPage />} />
    //     }
    //   />
    //   <Route
    //     path="login"
    //     element={
    //       <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
    //     }
    //   />
    //   <Route
    //     path="register"
    //     element={
    //       <RestrictedRoute redirectTo="/home" component={<RegisterPage />} />
    //     }
    //   />

    //   <Route element={<DashboardPage />}>
    //     <Route
    //       path="/home"
    //       element={
    //         <PrivateRoute>
    //           <HomePage />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route
    //       path="/statistics"
    //       element={
    //         <PrivateRoute>
    //           <StatiscticsPage />
    //         </PrivateRoute>
    //       }
    //     />

    //     <Route
    //       path="/currency"
    //       element={

    //           <PrivateRoute>
    //             <CurrencyPage />
    //           </PrivateRoute>

    //       }
    //     />
    //   </Route>

    //   <Route
    //     path="*"
    //     element={
    //       <h1 style={{ paddingTop: '300px', textAlign: 'center' }}>
    //         Oh, something went wrong.
    //       </h1>
    //     }
    //   />
    // </Routes>
  );
};

export default App;
