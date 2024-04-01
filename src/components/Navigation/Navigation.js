import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
// import { SlChart, SlHome } from 'react-icons/sl';
import { selectIsLoggedIn } from '../../redux/authorisation/selectors';
import { SlChart, SlHome } from 'react-icons/sl';
import { Balance } from '../Balance/Balance';

export const Navigation = () => {
  // const { user } = useAuth();
  // const { isLoggedIn } = useAuth();

  return (
    <div className={css.sidebar}>
      <nav className={css.columLinks}>
        <NavLink to="/" exact="true" className={css.link}>
          <h3>
            <span className={css.iconMargin}>
              <SlHome />
            </span>
            Home
          </h3>
        </NavLink>

        {selectIsLoggedIn && (
          <NavLink to="/statistics" exact="true" className={css.link}>
            <h3>
              <span className={css.iconMargin}>
                <SlChart />
              </span>
              Statistics
            </h3>
          </NavLink>
        )}
      </nav>
      <div>
        <Balance />
      </div>
    </div>
  );
};
