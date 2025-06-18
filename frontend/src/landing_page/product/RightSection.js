import React from 'react';

function Rightsection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image - Mobile (Top), Desktop (Right) */}
        <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>

        {/* Text - Mobile (Bottom), Desktop (Left) */}
        <div className="col-md-6 order-2 order-md-1 pe-md-5 px-5">
          <h2 className="mb-3">{productName}</h2>
          <p className="mb-4 text-muted">{productDescription}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn More <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rightsection;