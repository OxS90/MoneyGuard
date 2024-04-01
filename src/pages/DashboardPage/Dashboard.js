import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';

import css from './Dashboard.module.css';
import Home from 'pages/HomePage/HomePage';

const Dashboard = () => {
  return (
    <>
      {/* 3 parti mari si late */}
      {/* Header Main cu tranzactii Side cu Balance */}
      <Header />
      <div className={css.list}>
        <Navigation />
        <Home />
      </div>
      {/* Currency */}
    </>
  );
};
export default Dashboard;
