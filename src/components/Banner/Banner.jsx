import React from 'react';
import x from "@/components/Banner/Banner.module.css"
function Banner ({image, titles , caption, price}) {
    return (
        <div>
            <figure 
            className={`
            ${x["figure"]}
            ${x["snip1278"]}`}>
          <h4 className={`${x["H4"]}`}>{titles}</h4>
          <div className={`${x["image"]}`}>
            <img
              className={`${x["images"]}`}
              src={image}
              alt="sq-sample6"
            />
          </div>
          <div className={`${x["rating"]}`}>
            <i className="ion-ios-star" />
            <i className="ion-ios-star" />
            <i className="ion-ios-star" />
            <i className="ion-ios-star" />
            <i className="ion-ios-star-outline" />
          </div>
          <figcaption
          className={`${x["figcaption"]}`}>
            <p className={`${x["pi"]}`}>{caption}</p>
            <div className={`${x["price"]}`}>
            <s className={`${x["sa"]}`}>{price}</s>
            </div>
          </figcaption>
          <a href="#" className={`${x["add-to-cart"]}`}>
           Xem Thêm
          </a>
        </figure>
        </div>
    );
}

export default Banner;