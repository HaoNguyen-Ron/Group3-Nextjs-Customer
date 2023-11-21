import React, { useState } from "react";
import Styles from "@/styles/cart.module.css";

export default function CartItem({ quantity, price }) {
  const [count, setCount] = useState(1);

  // Hàm tăng giá trị lên 1
  function increment() {
    setCount(count + 1);
  }

  // Hàm giảm giá trị xuống 1
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    } else setCount(count);
  }
  const handleCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    setCount(newCount);
  };

  const calculateTotal = () => {
    return price * count;
  };
  return (
    <>
      {quantity === 0 ? (
        <p className={`${Styles.title_number_cart}`}>
          Giỏ hàng của bạn đang trống
        </p>
      ) : (
        <div className={` ${Styles.title_number_border}`}>
          <p className={`${Styles.title_number_cart}`}>
            Bạn đang có <b> {quantity} sản phẩm </b> trong giỏ hàng
          </p>
          <div className={`d-flex row ${Styles.media_line_item}`}>
            <div className={`col-2 ${Styles.media_left}`}>
              <a className={`${Styles.media_left_a}`} href="/">
                <img
                  className={`${Styles.image_number_cart}`}
                  src="//product.hstatic.net/1000160337/product/goddess_of_victory_nikke_emma_1__4__0e625ad282044f308e5b3a5f4fdf5bfd_medium.jpg"
                  alt="Goddess of Victory: Nikke Emma 1/7"
                />
              </a>
            </div>
            <div className={`col-8 ${Styles.media_right}`}>
              <a href="/">Goddess of Victory: Nikke Emma 1/7</a>
              <div className="d-flex">
                <input
                  type="button"
                  value="-"
                  onClick={decrement}
                  className={` btn btn-light ${Styles.input_color}`}
                />
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={count}
                  onChange={handleCountChange}
                  className={`form-control ${Styles.input_quantity}`}
                />
                <input
                  type="button"
                  value="+"
                  onClick={increment}
                  className={`btn btn-light ${Styles.input_color}`}
                />
              </div>
              <p>
                <b>
                  {price}
                  <u>đ</u>
                </b>
              </p>
            </div>
            <div className={`col-2`}>
              <a href="/cart/change?line=1&quantity=0" className="cart">
                <img src="//theme.hstatic.net/1000160337/1000885200/14/delete-cart.png?v=316" />
              </a>
            </div>
          </div>
          <div>
            <span>Thành Tiền:</span>
            <span>{calculateTotal()}</span>
          </div>
        </div>
      )}
    </>
  );
}
{/* <>
      {quantity === 0 ? (
        <p className={`${Styles.title_number_cart}`}>
          Giỏ hàng của bạn đang trống
        </p>
      ) : (
        <div>
          {quantity.map((item) => (
            <div key={item.id} className={` ${Styles.title_number_border}`}>
              <p className={`${Styles.title_number_cart}`}>
                Bạn đang có <b> {quantity} sản phẩm </b> trong giỏ hàng
              </p>
              <div className={`d-flex row ${Styles.media_line_item}`}>
                <div className={`col-2 ${Styles.media_left}`}>
                  <a className={`${Styles.media_left_a}`} href="/">
                    <img
                      className={`${Styles.image_number_cart}`}
                      src={item.image}
                      alt={item.name}
                    />
                  </a>
                </div>
                <div className={`col-8 ${Styles.media_right}`}>
                  <a href="/">{item.name}</a>
                  <div className="d-flex">
                    <input
                      type="button"
                      value="-"
                      onClick={decrement}
                      className={` btn btn-light ${Styles.input_color}`}
                    />
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={count}
                      onChange={handleCountChange}
                      className={`form-control ${Styles.input_quantity}`}
                    />
                    <input
                      type="button"
                      value="+"
                      onClick={increment}
                      className={`btn btn-light ${Styles.input_color}`}
                    />
                  </div>
                  <p>
                    <b>
                      {item.price}
                      <u>đ</u>
                    </b>
                  </p>
                </div>
                <div className={`col-2`}>
                  <a href="/cart/change?line=1&quantity=0" className="cart">
                    <img src="//theme.hstatic.net/1000160337/1000885200/14/delete-cart.png?v=316" />
                  </a>
                </div>
              </div>
              <div>
                <span>Thành Tiền:</span>
                <span>{calculateTotalPerProduct()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </> */}