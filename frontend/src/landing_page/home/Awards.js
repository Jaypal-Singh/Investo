import React from "react";

function Awards() {
  return (
    <div className="container py-5 " >
      <div className="row align-items-center">
        {/* Image - Full width on mobile, half on desktop */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img 
            src="media/images/largestBroker.svg" 
            className="img-fluid" 
            alt="Largest Broker in India" 
          />
        </div>

        {/* Content - Full width on mobile, half on desktop */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Two-column list - Stacks on mobile */}
          <div className="row justify-content-center">
            <div className="col-6 col-sm-5">
              <ul className="text-md-start">
                <li className="mb-2">Futures and options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 col-sm-5">
              <ul className="">
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press logos - Centered with responsive width */}
          <div className="mt-5 text-center">
            <img 
              src="media/images/pressLogos.png" 
              className="img-fluid" 
              style={{ maxWidth: "80%" }} 
              alt="Press Coverage" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;