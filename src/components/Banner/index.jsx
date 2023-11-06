import React from 'react';
import Banner from './Banner';
function Banners (props) {
    return (
        <div>
            <div className="container d-flex justify-content-space-between">
        <Banner/>
         <Banner/>
      </div>
        </div>
    );
}

export default Banners ;