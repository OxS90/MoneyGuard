import React from 'react';
// import { useState } from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorisation/operations';
// import Modal from '../Modal/Modal';
import exit from '../../assets/icons/exit.svg';

const Header = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleExitClick = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className={css.header}>
      <div className={css.boxModelLogo}>
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <span className={css.baseTypography}>Money Guard</span>
      </div>
      <ul className={css.box}>
        <nav className={css.list}>
          <NavLink to="/" className={css.userNameHeader}>
            {user.username}
          </NavLink>
          <NavLink to="/login" className={css.exitBtn} onClick={handleLogout}>
            <img src={exit} alt="exit" width="18px" height="18px" />
          </NavLink>
        </nav>
      </ul>
      {/* {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>Are you sure you want to log out?</p>
          <button onClick={handleLogout}>Log out</button>
          <button type="button" onClick={() => dispatch(logOut())}>
            Exit
          </button>
        </Modal>
      )} */}
    </div>
  );
};

export default Header;
