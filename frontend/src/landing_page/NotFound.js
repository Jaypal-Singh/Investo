import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 " style={{ marginBottom : "15%", position: "relative", right: "22%",}}>
        
      <h1 style={{ position: "absolute", right: "50%", fontSize: "30px" }}>
        404
      </h1>
      <div className="row " style={{ height : "50%" }}>
        <div
          className="mt-5 fs-5"
          style={{ position: "absolute", left: "45%", fontSize: "30px" }}
        >
          <h1 className="">
            Aalu couldn’t find <br /> that page
          </h1>
          <span>We couldn’t find the page you were looking </span>
          <br></br>
          <span>for. </span>
          <Link style={{ textDecoration: "none",}} to={"/"}>Visit Zerodha’s home </Link>
        </div>
      </div>
      
    </div>
  );
}

export default NotFound;
