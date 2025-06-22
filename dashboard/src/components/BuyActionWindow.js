import React, { useState } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import axios from "axios";
import { useRef } from "react";
import Button from '@mui/material/Button';
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow/BuyActionWindow.css";

const BuyActionWindow = ({ uid, stockPrice }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [Price, setStockPrice] = useState(stockPrice);
  const nodeRef = useRef(null);

  const handleBuyClick = () => {
     const token = localStorage.getItem("token");
    axios.post(`${process.env.REACT_APP_API_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: Price,
      mode: "BUY",
    },
    {
    headers: {
      Authorization: `Bearer ${token}`  
    }
  }).then(response => console.log(response.data))
    .catch(error => console.error("Error:", error));

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-header">
      <div ref={nodeRef} className="container" id="buy-window">
        <div
          className="drag-header"
          style={{
            cursor: "move",
            padding: "10px",
            background: "#e0e0e0",
            fontWeight: "bold",
          }}
        >
          Buy Window
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
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={Price}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          <div className="btn-link">
            <Button  className="btn" variant="contained"><Link className= "btn-blue" onClick={handleBuyClick}>
              Buy
            </Link></Button>
             <Button  className="btn"  variant="contained"><Link to="" className= "btn-grey"  onClick={handleCancelClick}>
              Cancel
            </Link></Button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default BuyActionWindow;
