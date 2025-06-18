import React from 'react';
import { Link } from 'react-router-dom';

function HeroPage() {
  return (
    <div className="container py-5 border-top">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <h1 className="mb-3">Zerodha Products</h1>
          <p className="text-muted " style={{fontSize : "16px"}}>
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-muted ">
            Check out our{' '}
            <Link to="#" style={{ textDecoration: 'none', color: '#007bff', fontSize:"15px" }}>
              investment offerings →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
