import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
function SupportPage() {
    return ( 
        <div style={{padding : "2em"}}>
            <Hero/>
            <CreateTicket/>
        </div >
     );
}

export default SupportPage;