import React from "react";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.menuBar}>
        <Menu />
      </div>
      <div className={styles.dashboardArea}>
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
