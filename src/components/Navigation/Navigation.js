// Navigation.js
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/authorisation/selectors';
import { SlChart, SlHome } from 'react-icons/sl';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.responsiveBox}>
      <nav className={css.linksBox}>
        <NavLink to="/" exact className={css.link}>
          <span className={css.iconMargin}>
            <SlHome />
          </span>
          <p className={css.nameHidden}>Home</p>
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/statistics" exact className={css.link}>
            <span className={css.iconMargin}>
              <SlChart />
            </span>
            <p className={css.nameHidden}>Statistics</p>
          </NavLink>
        )}

        {/* Afișează link-ul pentru "Currency" cu icon-ul "RiMoneyDollarBoxLine" */}
        {isLoggedIn && (
          <NavLink to="/" exact className={css.linkCurrency}>
            <span className={css.iconMargin}>
              <RiMoneyDollarBoxLine />
            </span>
            <p className={css.nameHidden}>Currency</p>
          </NavLink>
        )}

        {/* Afișează icon-ul "Currency" doar pe dispozitivele mobile */}
        {isLoggedIn && (
          <NavLink to="/" exact className={css.linkCurrency}>
            <span className={css.iconMarginMobile}>
              <RiMoneyDollarBoxLine />
            </span>
            <p className={css.nameHidden}>Currency</p>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
