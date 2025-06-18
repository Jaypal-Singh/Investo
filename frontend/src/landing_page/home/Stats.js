import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="container" >
      <div className="row mt-5 py-2  align-item-center justify-content-center">
        <div className="col-12 col-md-6 mt-4">
          <h2 className="heading ">Trust with confidence</h2>
          <h4 className="SubHeading">Customer-first always</h4>
          <p className="pera">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 &nbsp; lakh
            crores of equity investments and contribute to 15% &nbsp; of daily
            retail exchange volumes in India.
          </p>

          <h4 className="SubHeading">No spam or gimmicks</h4>
          <p className="pera">
            No gimmicks, spam, "gamification", or annoying push&nbsp;
            notifications. High quality apps that you use at your&nbsp; pace,
            the way you like. Our philosophies.
          </p>

          <h4 className="SubHeading">The Zerodha universe</h4>
          <p className="pera">
            Not just an app, but a whole ecosystem. Our investments&nbsp; in 30+
            fintech startups offer you tailored services &nbsp;specific to your
            needs.
          </p>

          <h4 className="SubHeading">Do better with money</h4>
          <p className="pera">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better &nbsp;with
            your money.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img
            src="media/images/ecosystem.png"
            className="img-fluid"
            style={{ width: "40em", maxHeight: "35rem" }}
          ></img>

          <p className="text-center">
            <a href="#">Explore our products</a>
            <a href="#">Try Kite demo</a>
          </p>
        </div>
        <div className="text-center mt-5 mb-5">
          <img src="media/images/pressLogos.png" className="img-fluid" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
