import React from "react";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import { useEffect } from "react"
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import styles from "./Dashboard.module.css"
// import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  const name = params.get("name");

  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("loggedInUser", name);
  }
}, []);


  return (
   <div className={styles.dashboardContainer}>
       <GeneralContextProvider>
        <WatchList sidebar />
      </GeneralContextProvider>
      <div className={styles.content}>
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;