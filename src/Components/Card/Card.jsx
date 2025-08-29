import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import data from '../../data.json';

function Card() {
  const [allItems, setAllItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    setAllItems(data);
    setFilterItems(data);
  }, []);

  function displayAll() {
    setFilterItems(allItems);
  }
  function displayActive() {
    const activeItems = allItems.filter((item) => item.isActive);
    setFilterItems(activeItems);
  }
  function displayInActive() {
    const inActiveItems = allItems.filter((item) => !item.isActive);
    setFilterItems(inActiveItems);
  }

  function handleToggle(index) {
    const updatedItems = allItems.map((item, i) =>
      i == index ? { ...item, isActive: !item.isActive } : item
    );
    setAllItems(updatedItems);
    setFilterItems(updatedItems);
  }

  function removeCard(index) {
    const updatedCards = allItems.filter((_, i) => i !== index);
    setAllItems(updatedCards);
    setFilterItems(updatedCards);
    console.log(updatedCards);
  }

  return (
    <>
      <div className={styles.filter}>
        <h2>Extension List</h2>
        <div className={styles.filterContainer}>
          <button onClick={displayAll}>All</button>
          <button onClick={displayActive}>Active</button>
          <button onClick={displayInActive}>Inactive</button>
        </div>
      </div>

      <div className={styles.mainCardContainer}>
        {filterItems.map((item, index) => (
          <div className={styles.cardContainer} key={item.name}>
            <div className={styles.infoContainer}>
              <img src={item.logo} alt="logo" />

              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={() => removeCard(index)}>Remove</button>
              <div className={styles.toggleContainer}>
                <label className={styles.switch} key={item.name}>
                  <input
                    type="checkbox"
                    defaultChecked={item.isActive}
                    onChange={() => handleToggle(index)}
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
