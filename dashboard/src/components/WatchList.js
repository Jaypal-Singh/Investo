import React, { useState, useContext, useEffect } from "react";
import styles from "./WatchList.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import TopBar from "./TopBar.js"
const WatchList = ({ sidebar }) => {
  const [searchStock, setSearchStock] = useState("");
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchAllStocks();
  }, []);

  const fetchAllStocks = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/allLists`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setListData(res.data);
      });
  };

  

  const handleSearchChange = (e) => {
    setSearchStock(e.target.value);
    const value = e.target.value;
    const token = localStorage.getItem("token");
    if (!value.trim()) {
      fetchAllStocks();
      return;
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/getStock`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { name: value },
      })
      .then((res) => {
        if (!res.data || res.data.length === 0 || res.data.message === "stock not found") {
          setListData([]);
        } else if (Array.isArray(res.data)) {
          setListData(res.data);
        } else {
          setListData([res.data]);
        }
      })
      .catch((err) => {
        setListData([]);
      });
  };

  return (
    <div className={sidebar ? styles.sidebarWatchlistContainer : styles.watchlistContainer}>
      <TopBar></TopBar>
      <form className={styles.searchContainer}>
        <button type="submit" className={styles.searchbtn}>
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
        </button>
        <input
          type="text"
          name="search"
          id="search"
          value={searchStock}
          onChange={handleSearchChange}
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className={styles.search}
        />
        <span className={styles.count}>{listData.length} / 50</span>
      </form>

      <ul className={styles.list}>
        {listData.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className={styles.item}>
        <p className={stock.isDown ? styles.itemDown : styles.itemUp}>
          {stock.name}
        </p>
        <div className={styles.itemInfo}>
          <span className={styles.percent}>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className={styles.arrowDown} />
          ) : (
            <KeyboardArrowUp className={styles.arrowUp} />
          )}
          <span className={styles.price}>{stock.price}</span>
        </div>
        {showWatchlistActions && (
          <WatchListAction
            uid={stock.name}
            stockPrice={stock.price}
            stockQty={0}
          />
        )}
      </div>
    </li>
  );
};

const WatchListAction = ({ uid, stockPrice }) => {
  const generalContext = useContext(GeneralContext);
  const [holdings, setHoldings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allHoldings`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHoldings(res.data);
      });
  }, []); // <-- Add dependency array

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, stockPrice);
  };
  const handleSellClick = () => {
    const stockMatching = holdings.find((held) => held.name === uid);
    if (!stockMatching) {
      alert("You don't own this stock!");
      return;
    } else {
      generalContext.openSellWindow(uid, stockPrice, stockMatching.qty);
    }
  };
  return (
    <span className={styles.action}>
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.buybtn} onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.sellbtn} onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Market Dept (D)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className={styles.Deptbtn}>Depth</button>
        </Tooltip>
        <Tooltip title="Chart (c)" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.chartbtn}>
            <i className="fa-solid fa-chart-line"></i>
          </button>
        </Tooltip>
        <Tooltip
          title="Delete (del)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className={styles.deletebtn}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.morebtn}>
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
