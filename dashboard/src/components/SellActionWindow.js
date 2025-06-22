import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import axios from "axios";
import Button from '@mui/material/Button';
import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid, stockPrice, stockQty }) => {
  const [stockQuantity, setStockQuantity] = useState(stockQty);
  const nodeRef = useRef(null);
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${REACT_APP_API_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      closeSellWindow();
      // Optionally trigger a refresh of holdings/positions here
    } catch (err) {
      alert("Sell failed!");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-header">
      <div ref={nodeRef} className="container" id="buy-window">
        <div className="drag-header">
          Sell Window
        </div>

        <div className="sellingInfo">
            <p>Qty held : {stockQty}</p>
            <p>Current Price :  {stockPrice}</p>
        </div>

        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <div className="btn-link">
            <Button
              className="btn"
              variant="contained"
              color="error"
              onClick={handleSellClick}
            >
              Sell
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default SellActionWindow;
