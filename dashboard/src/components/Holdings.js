import React, { useState , useEffect} from "react";
import "./Order&Holdings.css";
import axios from "axios";
// import { holdings } from "../data/data";

const Holdings = () => {
   let totalInvest = 0;
   let totalCurrentalue = 0;
   const [allHoldings, setAllHoldings] = useState([]);
   const [totals, setTotals] = useState({
        investment: 0,
        currentValue: 0,
        profitLoss: 0,
        profitLossPercent: 0
    });
   
   useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error("No token found in localStorage");
    return;
  }

  axios.get("http://localhost:3002/allHoldings", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
    setAllHoldings(res.data);
    const allData = calculateData(res.data);
    setTotals(allData);
  })
  .catch((err) => {
    console.error("Axios error:", err);
  });
}, []);


   
   const calculateData = (holdings) =>{
      let totalInvest = 0;
      let totalCurrentValue = 0;
      holdings.forEach((stock) => {
          totalInvest += stock.avg * stock.qty;
          totalCurrentValue += stock.price * stock.qty;
      });

      const profitLoss = totalCurrentValue - totalInvest;
      const profitLossPercent = totalInvest > 0 ? (profitLoss / totalInvest) * 100 : 0;

      return {
        investment: totalInvest,
        currentValue: totalCurrentValue,
        profitLoss: profitLoss,
        profitLossPercent: profitLossPercent
      };
   };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table holdings-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty ?? 0}</td>
                <td>{typeof stock.avg === 'number' ? stock.avg.toFixed(2) : "0.00"}</td>
                <td>{typeof stock.price === 'number' ? stock.price.toFixed(2) : "0.00"}</td>
                <td>{typeof curValue === 'number' ? curValue.toFixed(2) : "0.00"}</td>
                <td className={profClass}>
                  {typeof stock.avg === 'number' && typeof stock.qty === 'number' && typeof curValue === 'number'
                    ? (curValue - stock.avg * stock.qty).toFixed(2)
                    : "0.00"}
                </td>
                <td className={profClass}>{stock.net ?? "--"}</td>
                <td className={dayClass}>{stock.day ?? "--"}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row holding-invest-info">
        <div className="col">
          <h5>
           {totals.investment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
             {totals.currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totals.profitLoss >= 0 ? "profit" : "loss"}>{totals.profitLoss.toFixed(2)} ({totals.profitLossPercent.toFixed(2)}%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;