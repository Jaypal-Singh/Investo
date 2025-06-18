import React from "react";
import "./Brockrage.css"
function Brockrage() {
  return (
    <div className="container ">
      <div className="row">
        <div className="text-center">
          <span className="fs-5 text-muted">
            Calculate your costs upfront{" "}
            <a className="text-decoration-none" href="#">
              using our brokerage calculator
            </a>
          </span>
        </div>
        <h3 className="text-muted">Charges explained</h3>

        <div className="col-12 col-md-6 text-muted mt-4 px-5">
          <p className="heading ">Securities/Commodities transaction tax</p >
          <p className="pera">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br></br><br></br>
            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we
            charge. Important to keep a tab.
          </p>

          <p className="heading">Transaction/Turnover Charges</p >
          <p className="pera">
            Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
            <br></br><br></br>
             BSE has revised transaction charges in XC, XD, XT, Z
            and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
            groups have been merged into a new group X w.e.f 01.12.2017) 
            <br></br><br></br>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per
            crore of gross turnover.
            <br></br><br></br>
            
            BSE has revised transaction charges for
            group A, B and other non exclusive scrips (non-exclusive scrips from
            group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat
            rate basis w.e.f. December 1, 2022. 
            <br></br><br></br>
            
            BSE has revised transaction
            charges in M, MT, TS and MS groups to ₹275 per crore of gross
            turnover.
          </p>

          <p className="heading">Call & trade</p >
          <p className="pera">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <p className="heading">Stamp charges</p >
          <p className="pera">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <p className="heading">NRI brokerage charges</p >
          <ul className="pera">
            <li className="pera">₹100 per order for futures and options.</li>
            <li className="pera">
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li className="pera">
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="pera">
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <p className="heading">Account with debit balance</p >
          <p className="pera">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <p className="heading">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p >
          <ul className="pera">
            <li className="pera">
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li className="pera">Options - ₹50 per crore + GST traded value (premium value).</li>
            <li className="pera">
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>

          <p className="heading">Margin Trading Facility (MTF)</p >
          <ul >
            <li className="pera">
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li className="pera">
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li className="pera">
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 text-muted mt-4">
          <p className="heading ">Securities/Commodities transaction tax</p >
          <p className="pera">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br></br><br></br>
            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we
            charge. Important to keep a tab.
          </p>

          <p className="heading">Transaction/Turnover Charges</p >
          <p className="pera">
            Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
            <br></br><br></br>
             BSE has revised transaction charges in XC, XD, XT, Z
            and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
            groups have been merged into a new group X w.e.f 01.12.2017) 
            <br></br><br></br>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per
            crore of gross turnover.
            <br></br><br></br>
            
            BSE has revised transaction charges for
            group A, B and other non exclusive scrips (non-exclusive scrips from
            group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat
            rate basis w.e.f. December 1, 2022. 
            <br></br><br></br>
            
            BSE has revised transaction
            charges in M, MT, TS and MS groups to ₹275 per crore of gross
            turnover.
          </p>

          <p className="heading">Call & trade</p >
          <p className="pera">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <p className="heading">Stamp charges</p >
          <p className="pera">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <p className="heading">NRI brokerage charges</p >
          <ul className="pera">
            <li className="pera">₹100 per order for futures and options.</li>
            <li className="pera">
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li className="pera">
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="pera">
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <p className="heading">Account with debit balance</p >
          <p className="pera">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <p className="heading">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p >
          <ul className="pera">
            <li className="pera">
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li className="pera">Options - ₹50 per crore + GST traded value (premium value).</li>
            <li className="pera">
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>

          <p className="heading">Margin Trading Facility (MTF)</p >
          <ul >
            <li className="pera">
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li className="pera">
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li className="pera">
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brockrage;
