import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Card() {
  const [data, setData] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    fetch('../../../data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterItems(data);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  function displayAll() {
    setFilterItems(data);
  }
  function displayActive() {
    const activeItems = data.filter((item) => item.isActive);
    setFilterItems(activeItems);
  }
  function displayInActive() {
    const inActiveItems = data.filter((item) => !item.isActive);
    setFilterItems(inActiveItems);
  }

  return (
    <>
      <div className={styles.filterContainer}>
        <button onClick={displayAll}>All</button>
        <button onClick={displayActive}>Active</button>
        <button onClick={displayInActive}>Inactive</button>
      </div>

      <div className={styles.mainCardContainer}>
        {filterItems.map((item, _) => (
          <div className={styles.cardContainer}>
            <div className={styles.infoContainer}>
              <img src={item.logo} alt="logo" />

              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button>Remove</button>
              <div className={styles.toggleContainer}>
                <label className={styles.switch} key={item.name}>
                  <input
                    type="checkbox"
                    name="toggle"
                    defaultChecked={item.isActive}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
