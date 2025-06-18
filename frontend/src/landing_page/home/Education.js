import React from "react";

function Education() {
  return (
    <div className="container my-5" >
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src="media/images/education.svg" className="img-fluid" style={{ width: "75%" }}></img>
        </div>
        <div className="col-12 col-md-6 text-md-start">
          <h1>Free and open market education</h1>
          <div className="mb-5">
            <p className="mb-5">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-5">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              TrandingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
