import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PricingTable.css";

function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 770);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    equity: [
      [
        "Brokerage",
        "Zero Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "0.03% or Rs. 20/executed order whichever is lower",
        "Flat Rs. 20 per executed order",
      ],
      [
        "STT/CTT",
        "0.1% on buy & sell",
        "0.025% on sell side",
        "0.02% on sell side",
        <ul>
          <li>
            0.125% of the intrinsic value on options that are bought and
            exercised
          </li>
          <li>0.1% on sell side (on premium)</li>
        </ul>,
      ],
      [
        "Transaction charges",
        " NSE: 0.00297% BSE: 0.00375%",
        "NSE: 0.00297% BSE: 0.00375%",
        "NSE: 0.00173% BSE: 0 ",
        " NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      [
        "SEBI charges",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
      ],
      [
        "Stamp charges",
        "0.015% or ₹1500 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
    currency: [
      ["Brokerage", "₹20 flat", "₹20 flat"],
      ["STT/CTT", "0.01%", "₹20 flat"],
      ["Transaction Charges", "NSE: 0.0020%", "NSE: 0.0020%"],
    ],
    commodity: [
      ["Brokerage", "₹20 or 0.03%", "₹20 flat"],
      ["STT/CTT", "0.02%", "₹20 flat"],
      ["Transaction Charges", "NSE: 0.0015%", "NSE: 0.0015%"],
    ],
  };

  const headers = {
    equity: isMobile
      ? ["", "Equity Delivery", "Equity Intraday"]
      : ["", "Equity Delivery", "Equity Intraday", "F&O Futures", "F&O Options"],

    fno: ["", "F&O Futures", "F&O Options"],

    currency: ["", "Currency Futures", "Currency Options"],

    commodity: ["", "Commodity Futures", "Commodity Options"],
  };

  const equityData = data.equity.map((row) =>
    isMobile ? row.slice(0, 3) : row
  );

  const fnoData = data.equity.map((row) =>
    [row[0], ...row.slice(3, 5)]
  );

  const getTableData = () => {
    if (activeTab === "equity") return equityData;
    if (activeTab === "fno") return fnoData;
    return data[activeTab];
  };

  return (
    <div className="container py-5">
      <div className="nav d-flex">
        <button
          className={`head-btn ${activeTab === "equity" ? "active" : ""}`}
          onClick={() => setActiveTab("equity")}
        >
          <h2>Equity</h2>
        </button>
        {isMobile && (
          <button
            className={`head-btn ${activeTab === "fno" ? "active" : ""}`}
            onClick={() => setActiveTab("fno")}
          >
            <h2>F&O</h2>
          </button>
        )}
        <button
          className={`head-btn ${activeTab === "currency" ? "active" : ""}`}
          onClick={() => setActiveTab("currency")}
        >
          <h2>Currency</h2>
        </button>
        <button
          className={`head-btn ${activeTab === "commodity" ? "active" : ""}`}
          onClick={() => setActiveTab("commodity")}
        >
          <h2>Commodity</h2>
        </button>
      </div>

      <hr />

      <div className="table-container mt-4">
        <table className="table">
          <thead className="table-light table-head">
            <tr className="table-row">
              {headers[activeTab].map((head, index) => (
                <th key={index} className="table-header text-muted">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTableData().map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((rowData, colIdx) => (
                  <td key={colIdx} className="table-data">
                    {rowData}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PricingTable;
