import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { user } = useAuth();
  // const { isLoggedIn } = useAuth();

  const menuItems = [
    {
      id: '1',
      name: 'Home',
      path: '/',
    },
    {
      id: '2',
      name: ' Statistics',
      path: ' /statistics',
    },
    {
      id: '3',
      name: 'Currency',
      path: '/currency',
    },
    // {
    //   id: '4',
    //   name: 'Currency',
    //   path: '/currency',
    // },
  ];

  return (
    <div className={css.sidebar}>
      <div className={css.sidebarBrandBox}></div>
      <ul className={css.sidebarUl}>
        {' '}
        {menuItems.map(item => (
          <li key={item.id} className={css.sidebarLi}>
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                [css.navLink, isActive ? css.navLinkActive : ''].join(' ')
              }
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
