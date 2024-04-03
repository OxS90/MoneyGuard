import React from 'react';
// import { useState } from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorisation/operations';
// import Modal from '../Modal/Modal';
import logo from '../../assets/logo.svg';
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
        <img
          src={logo}
          alt="Logo MoneyGuard"
          width="36px"
          height="36px"
          draggable="false"
        />
        <span className={css.baseTypography}>Money Guard</span>
      </div>
      <ul className={css.box}>
        <nav className={css.list}>
          <NavLink to="/" className={css.userNameHeader}>
            {user.username}
          </NavLink>

          <NavLink
            className={css.exitBtn}
            type="button"
            // onClick={handleExitClick}
          >
            <NavLink
              to="/login"
              className={css.exitBtn}
              onClick={() => {
                dispatch(logOut());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_34_6467)">
                  <path
                    d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_6467">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
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
