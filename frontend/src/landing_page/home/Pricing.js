import React from 'react';
import "./pricing.css";  // Make sure this path is correct

function Pricing() {
    return ( 
        <div className="container my-5 py-5" >
            <div className="row align-items-center">
                {/* Left side */}
                <div className="mb-5 col-12 col-md-6">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className="mt-3">
                        <a href="#" className="pricing-link">
                            See pricing <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                {/* Right side */}
                <div className="pricing-block-div col-12 col-sm-12 col-md-6">
                    <div className="text-center pricing-block">
                        <img src="media/images/pricing0.svg" alt="Free account opening" />
                        <p>Free account<br />opening</p>
                    </div>
                    <div className="text-center pricing-block">
                        <img src="media/images/pricing0.svg" alt="Free equity delivery" />
                        <p>Free equity delivery<br />and direct mutual funds</p>
                    </div>
                    <div className="text-center pricing-block">
                        <img src="media/images/pricing20.svg" alt="Intraday and F&O" />
                        <p>Intraday and<br />F&amp;O</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;