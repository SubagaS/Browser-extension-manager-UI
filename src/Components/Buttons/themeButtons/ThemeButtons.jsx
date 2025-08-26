import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function ThemeButton() {
  const [showTheme, setShowTheme] = useState(true);

  useEffect(() => {
    if (showTheme) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [showTheme]);

  function toggleTheme() {
    setShowTheme((s) => !s);
  }
  return (
    <>
      {showTheme ? (
        <button type="button" className={styles.moonIcon} onClick={toggleTheme}>
          <img src="./assets/images/icon-moon.svg" alt="moon-icon" />
        </button>
      ) : (
        <button type="button" className={styles.sunIcon} onClick={toggleTheme}>
          <img src="./assets/images/icon-sun.svg" alt="sun-icon" />
        </button>
      )}
    </>
  );
}
export default ThemeButton;
