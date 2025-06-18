import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className="heading-people text-center mt-5">People</h1>
      </div>

      <div className="row ceo align-items-center ">
        <div className="col-12 col-md-6 ceo-image-div">
          <div className="text-center ">
            <img
              src="./media/images/nithin-kamath.jpg"
              className="ceo-image img-fluid "
              alt="CEO"
            />
            <div className="ceo-name mt-3">
              <h4 className="fw-bold mb-1">Nithin Kamath</h4>
              <p className="text-muted">Founder, CEO</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 ceo-pera-div text-center text-md-start">
          <p className="ceo-pera">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="ceo-pera">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="ceo-pera">Playing basketball is his zen.</p>
          <p className="ceo-pera">Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>

      <TeamMember className="teamMembers" />
    </div>
  );
}

export default Team;
