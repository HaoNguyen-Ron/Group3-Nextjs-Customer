import React from 'react';
import x from "@/components/Banner/Banner.module.css"
function Banner (props) {
    return (
        <div>
            <figure className={x["snip1278"]}>
          <h4>Light Top</h4>
          <div className={x["image"]}>
            <img
              src="https://theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=316"
              alt="sq-sample6"
            />
          </div>
          <div className={x["rating"]}>
            <i className="ion-ios-star" />
            <i className="ion-ios-star" />
            <i className="ion-ios-star" />
            <i className="ion-ios-star" />
            <i className="ion-ios-star-outline" />
          </div>
          <figcaption>
            <p>I'm just very selective about the reality I choose to accept.</p>
            <div className={x["price"]}>
              <s>$24.00</s>$19.00
            </div>
          </figcaption>
          <a href="#" className={x["add-to-cart"]}>
            Add to Cart
          </a>
        </figure>
        </div>
    );
}

export default Banner;