import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import  styles from "./Orders.module.css";
import "./Order&Holdings.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3002/allOrders", {
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).then((res)=>{
      setOrders(res.data);
    })
  },[]);

  return (
    <>
      <h3 className="title">Orders</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {orders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty ?? 0}</td>
                <td>{typeof stock.price === 'number' ? stock.price.toFixed(2) : "0.00"}</td>
                <td className="dayClass">{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
