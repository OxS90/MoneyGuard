import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Dashboard.module.css';
import { Balance } from 'components/Balance/Balance';
import { useMediaQuery } from 'react-responsive';

const Dashboard = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  return (
    <>
      {/* 3 parti mari si late */}
      {/* Header Main cu tranzactii Side cu Balance */}
      <div>
        <Desktop>
          <Header />
        </Desktop>
        <Tablet>
          <Header />
        </Tablet>
        <Mobile>
          <Header />
        </Mobile>
      </div>

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
