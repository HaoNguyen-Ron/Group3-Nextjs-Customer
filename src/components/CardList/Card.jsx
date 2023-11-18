import React, {useState} from "react";
import x from "@/components/CardList/Card.module.css";
function Card({ price, name, image , Id }) {
 
    const [cart, setCart] = useState([]);
  
    const addToCart = () => {
      const item = { Id, name, price ,image };
      setCart([...cart, item]);
      console.log('Sản phẩm đã được thêm vào giỏ hàng.');
      // Gửi yêu cầu đến API để lưu thông tin giỏ hàng
      // Ví dụ: callAPI('/cart', { method: 'POST', body: item });
    };

  return (
    <div>
      <div className="owl-stage-outer">
        <div className="owl-stage">
          <div className="owl-item active" style={{ width: "100%" }}>
            <div className="row-product">
              <div className={`${x["product-small"]} ${x["product-loop"]}`}>
                <div
                  className={`product-resize fixheight ${x["product-inner"]}`}
                  style={{ height: 305 }}
                >
                  <div className={` ${x["proloop-image"]}`}>
                    <div
                      className={`image-resize ${x["proloop--image"]}`}
                      style={{ height: 240 }}
                    >
                      <div className={` ${x["product--image__inner"]}`}>
                        <div
                          className={` ${x["prod-img"]}  ${x["first-image"]}`}
                        >
                          <picture className={`${x["picture"]}`}>
                            <img
                              className={` img-loop ${x["lazyloaded"]}`}
                              src={image}
                              alt=""
                            />
                          </picture>
                        </div>
                        <div
                          className={`hovered-img hidden-xs hidden-sm ${x["prod-img"]}  ${x["second-image"]} `}
                        >
                          <picture className={`${x["picture"]}`}>
                            <img
                              className={` img-loop  ${x["lazyloaded"]}`}
                              alt=""
                              src={image}
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${x["proloop-detail"]}`}>
                    <h3 className={`${x["quickview-product"]}`}>
                      <a href="" className={`${x["quickview-product"]}`}>
                        {name}
                      </a>
                    </h3>
                    <p className={`${x["proloop--price"]}`}>
                      <span className={`${x["price"]}`}>{price}</span>
                    </p>
                  </div>
                  <div className={`${x["proloop-actions"]}`}>
                    <div className={`${x["proloop-actions__inner"]}`}>
                      <div
                        className={`d-flex justify-content-center ${x["actions-primary"]}`}
                      >
                        <button
                         onClick={addToCart}
                          type="button"
                          className={`${x["btn_add_card"]}`}
                          style={{ border: "none" }}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                      </div>
                      <div className={`${x["actions-secondary"]}`}>
                        <button
                          type="button"
                          className={` ${x["button"]}  ${x["btn-proloop-checkout"]} `}
                        >
                          <i className="fa-solid fa-bag-shopping"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
