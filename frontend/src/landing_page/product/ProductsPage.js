import React from 'react';
import HeroPage from './HeroPage';
import LeftSection from './LeftSection';
import Rightsection from './RightSection';
import Universe from './Universe';

function ProductsPages() {
    return (
        <div style={{padding : "10em"}}>
             <HeroPage/>
             <div className="border-top"></div>
             <LeftSection
             imageURL = "media/images/kite.png"
             productName = "Kite"
             productDescription ="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
             tryDemo = "#"
             learnMore = "#"
             googlePlay ="#"
             appStore ="#"
             />
             <Rightsection
              imageURL = "media/images/console.png"
              productName = "Console"
              productDescription ="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
              learnMore = "#"
              
             />
             <LeftSection
             imageURL = "media/images/coin.png"
             productName = "Coin"
             productDescription ="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
             tryDemo = "#"
             learnMore = "#"
             googlePlay ="#"
             appStore ="#"
             />
             <Rightsection
              imageURL = "media/images/kiteconnect.png"
              productName = "Kite Connect API"
              productDescription ="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
              learnMore = "#"
             />
             <LeftSection
             imageURL = "media/images/varsity.png"
             productName = "Coin"
             productDescription ="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
             tryDemo = "#"
             learnMore = "#"
             googlePlay ="#"
             appStore ="#"
             />
             
             <Universe/>
        </div>
       


     );
}

export default ProductsPages;