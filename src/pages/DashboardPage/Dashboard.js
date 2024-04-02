import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Dashboard.module.css';
import { Balance } from 'components/Balance/Balance';

const Dashboard = () => {
  return (
    <>
      {/* 3 parti mari si late */}
      {/* Header Main cu tranzactii Side cu Balance */}
      <Header />
      <div className={css.dashBox}>
        <div className={css.list}>
          <Navigation />
        </div>

        <div className={css.balanceBox}>
          <Balance />
        </div>
      </div>

      <div className={css.currencyBox}>
        <h1>Currency</h1>
      </div>
    </>
  );
};
export default Dashboard;
