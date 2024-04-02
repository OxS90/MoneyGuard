import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import css from './Dashboard.module.css';
import Balance from 'components/Balance/Balance';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className={css.dashBox}>
        <div className={css.sideSegment}>
          <Navigation />
          <Balance />
        </div>
        <div className={css.contentSegment}>
          <div className={css.currencyBox}>
            <h1>Currency</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
