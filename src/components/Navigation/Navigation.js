import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
// import { SlChart, SlHome } from 'react-icons/sl';
import { selectIsLoggedIn } from '../../redux/authorisation/selectors';
import { SlChart, SlHome } from 'react-icons/sl';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

export const Navigation = () => {
  // const { user } = useAuth();
  // const { isLoggedIn } = useAuth();

  return (
    <div className={css.responsiveBox}>
      <section>
        <nav className={css.linksBox}>
          <NavLink to="/" exact="true" className={css.link}>
            <h3>
              <span className={css.iconMargin}>
                <SlHome />
              </span>
              <p className={css.nameHidden}>Home</p>
            </h3>
          </NavLink>

          {selectIsLoggedIn && (
            <NavLink to="/statistics" exact="true" className={css.link}>
              <h3>
                <span className={css.iconMargin}>
                  <SlChart />
                </span>
                <p className={css.nameHidden}>Statistics</p>
              </h3>
            </NavLink>
          )}
          {selectIsLoggedIn && (
            <NavLink to="/" exact="true" className={css.linkCurrency}>
              <h3>
                <span className={css.iconMargin}>
                  <RiMoneyDollarBoxLine />
                </span>
                <p className={css.nameHidden}>Currency</p>
              </h3>
            </NavLink>
          )}
        </nav>
      </section>
    </div>
  );
};
