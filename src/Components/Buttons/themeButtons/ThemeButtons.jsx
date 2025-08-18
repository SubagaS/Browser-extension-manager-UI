import React, { useState } from 'react';
import styles from './styles.module.css';

function ThemeButton() {
  return (
    <>
      <button type="button" className={styles.moonIcon}>
        <img src="./assets/images/icon-moon.svg" alt="moon-icon" />
      </button>

      <button type="button" className={(styles.sunIcon, styles.hidden)}>
        <img src="./assets/images/icon-sun.svg" alt="sun-icon" />
      </button>
    </>
  );
}
export default ThemeButton;
