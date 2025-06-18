import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row text-center py-5">
        <h1>Charges</h1>
        <p className="text-muted fs-5">List of all charges and taxes</p>
      </div>

      <div className="row">
        <div className=" col-12 col-md-4 text-center">
          <img src="media/images/pricing0.svg" alt="Free account opening"className="img-fluid" style={{width:"16em"}} />
          <h2>Free equity delivery</h2>
          <p className="mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <img src="media/images/pricing0.svg" alt="Free equity delivery"className="img-fluid"style={{width:"16em"}} />
          <h2>Intraday and F&O trades</h2>
          <p className="mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 text-center">
          <img src="media/images/pricing20.svg" alt="Intraday and F&O" className="img-fluid" style={{width:"16em"}}/>
          <h2>Free direct MF</h2>
          <p className="mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
