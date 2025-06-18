import React from "react";
import "./LeftSection.css";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-4">
      <div class="row py-5">
        <div class="col-12 col-md-6" style={{paddingLeft : "10%"}}>
          <div class="card-body">
            <img src={imageURL} className="img-fluid"></img>
          </div>
        </div>
        
        <div class="col-12 col-md-6 py-5" style={{paddingLeft : "10%"}}>
          <div class="card-body  ">
            <h2 class="card-title">{productName}</h2>
            <p class="card-text" className="mt-3 text-muted">{productDescription}</p>
            <div className="Links d-flex justify-content-space-around text-muted" >
              <a href={tryDemo}style={{textDecoration : "none"}}>
                Try Demo <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href={learnMore} style={{textDecoration : "none"}}>
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="Links d-flex justify-content-space-around text-muted mt-3">
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" className="img-fluid"></img>
              </a>
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" className="img-fluid"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
