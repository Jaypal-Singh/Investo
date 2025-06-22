import React , { useEffect, useState } from "react";
import styles from "./Summery.module.css";
import Button from "@mui/material/Button";
import axios from "axios";
import Menu from "./Menu";


const Summary = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
  const token = localStorage.getItem("token");

  axios.get(`${process.env.REACT_APP_API_URL}/user-summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching summary:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.status);
      }
    });
}, []);


  if (!userData) return <div>Loading user summary...</div>;

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h2>{userData.name}</h2>
        <hr className={styles.divider} />
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <i className="fa-solid fa-chart-simple"></i>
            <h4>Equity</h4>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.left}>
              <h1>0</h1>
              <p>Margin available</p>
            </div>
            <div className={styles.dividerVertical} />
            <div className={styles.right}>
              <p>Margin used: 0</p>
              <p>Opening balance: 0</p>
              <a href="#">View statement</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <i className="fa-solid fa-droplet"></i>
            <h4>Commodity</h4>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.left}>
              <h1>0</h1>
              <p>Margin available</p>
            </div>
            <div className={styles.dividerVertical} />
            <div className={styles.right}>
              <p>Margin used: 0</p>
              <p>Opening balance: 0</p>
              <a href="#">View statement</a>
            </div>
          </div>
        </div>
        <div className={styles.investmentKit}>
          <i class="fa-solid fa-briefcase"></i>
          <p className="text-muted fs-6">
            You don't have any stocks in your DEMAT yet. Get started <br></br>
            with absolutely free equity investments.
          </p>
          <Button className="mt-5" variant="contained">
            Contained
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Summary;
