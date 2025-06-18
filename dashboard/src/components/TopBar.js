import React from "react";
import styles from "./TopBar.module.css"; // Import CSS module properly

const TopBar = () => {
  return (
    <div className={styles.TopBarContainer}>
      <div className={styles.indexContainer}>
        <div className={styles.infty}>
          <p className={styles.index}>NIFTY 50</p>
          <p className={styles.indexPoints}>24008.00</p>
          <p className={styles.percentage}>-265.80 (-1.10%)</p>
        </div>
        <div className={styles.sensex}>
          <p className={styles.index}>SENSEX</p>
          <p className={styles.indexPoints}>79454.47</p>
          <p className={styles.percentage}>-880.34 (-1.10%)</p>
          </div>
      </div>
    </div>
  );
};

export default TopBar;
