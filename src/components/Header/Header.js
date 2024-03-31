import React from 'react';
// import { useState } from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/authorisation/operations';
// import Modal from '../Modal/Modal';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

const Header = () => {
  const { user } = useAuth();
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleLogout = async () => {
  //   try {
  //     await axios.delete('/api/auth/logout');
  //     dispatch(logOut());
  //     localStorage.removeItem('token');
  //     history.push('/login');
  //   } catch (error) {
  //     toast.error('Error logging out. Please try again.');
  //   }
  // };

  const handleExitClick = () => {
    // setIsModalOpen(true);
  };

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
        >
          <g
            id="&#208;&#187;&#208;&#190;&#208;&#179;&#208;&#190; Money Guard 2"
            clipPath="url(#clip0_34_6804)"
          >
            <g id="&#208;&#161;&#208;&#187;&#208;&#190;&#208;&#185;_x0020_1">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2328 3.50029C16.4298 3.04956 14.6269 2.1481 13.2747 0.795898C11.9225 2.1481 10.1196 3.04956 8.31665 3.50029C8.76738 7.55689 10.1196 10.2613 13.2747 12.5149C16.4298 10.2613 18.2328 7.55689 18.2328 3.50029Z"
                fill="#FFC727"
              />
              <path
                id="Vector_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4296 20.2824L3.80908 5.4082V12.6199L13.7252 23.8882L16.4296 20.2824Z"
                fill="#FBFBFB"
              />
              <path
                id="Vector_3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.782 18.9306L23.1908 12.6204V5.85938L14.6268 15.7755L17.782 18.9306Z"
                fill="#FBFBFB"
              />
              <path
                id="Vector_4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2327 21.1842V25.2408L23.1907 19.3813V15.3247L18.2327 21.1842Z"
                fill="#FBFBFB"
              />
              <path
                id="Vector_5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.76714 21.1842L3.80908 15.3247V19.3813L8.76714 25.2408V21.1842Z"
                fill="#FBFBFB"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_34_6804">
              <rect
                width="25.4605"
                height="25.4605"
                fill="white"
                transform="translate(0.769775)"
              />
            </clipPath>
          </defs>
        </svg>
        <span className={css.baseTypography}>Money Guard</span>
      </div>
      <ul className={css.box}>
        <nav className={css.list}>
          <NavLink to="/" className={css.userNameHeader}>
            {/* name */}
            {user.name}
          </NavLink>

          <NavLink
            className={css.exitBtn}
            type="button"
            onClick={handleExitClick}
          >
            <span>
              <svg
                width="2"
                height="30"
                viewBox="0 0 2 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V30" stroke="white" strokeOpacity="0.6" />
              </svg>
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"
                fill="white"
                fillOpacity="0.6"
              />
            </svg>
            <span className={css.exitBtn}>Exit</span>
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
