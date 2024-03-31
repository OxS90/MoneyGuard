import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CustomButton.module.css';

const CustomButton = ({ isNavLink, customStyles, ...props }) => {
  const CustomComponent = isNavLink ? NavLink : 'button';
  const className = isNavLink ? styles.customNavLinkBtn : styles.customButton;

  return (
    <CustomComponent
      {...props}
      className={`${styles.customButtonBase} ${className}`}
    />
  );
};

export default CustomButton;
