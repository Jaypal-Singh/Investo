import React from "react";
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className=" main-heading text-center mt-5" style={{ fontSize: "2em" }}>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row py-5 mt-5 justify-content-around border-top text-muted px-5" >
    
        <div className="col-12 col-md-6 mt-5" style={{width : "25em"}}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes
          </p>
        </div>
        <div className="col-6 mt-5" style={{width : "25em"}}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link to={"#"} style={{textDecoration : "none"}}>Rainmatter</Link>,our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <Link to={"#"} style={{textDecoration : "none"}}>blog</Link> or see what the media is saying about
            us or learn more about our business and product <Link to={"#"} style={{textDecoration : "none"}}>philoshopies</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
{
  /* <h1>hero</h1> */
}
export default Hero;
<h1>hero</h1>;
