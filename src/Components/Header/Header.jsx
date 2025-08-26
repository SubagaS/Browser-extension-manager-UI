import React, { useState } from 'react';
import styles from './styles.module.css';
import ThemeButton from '../Buttons/themeButtons/ThemeButtons';

function Header() {
  return (
    <header>
      <div className={styles.extensionHeader}>
        <img
          src="./assets/images/logo.svg"                     
          alt="logo"
          className={styles.logoIcon}
        />
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
