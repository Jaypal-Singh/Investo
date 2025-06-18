import React from 'react';

function OpenAccount() {
  return ( 
    <div className='container my-5 py-3'>
      <div className='row justify-content-center text-center'>
        <div className='col-12 col-md-8 col-lg-6'>
          <h1 className='mb-3'>Open a Zerodha account</h1>
          <p className='mb-4 lead'>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button 
            type="button" 
            className='btn btn-primary px-4 py-2'
            
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;