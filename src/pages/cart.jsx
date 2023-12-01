import React, { useEffect, useState } from "react";

import Styles from "@/styles/cart.module.css";
import Link from "next/link";

function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");

    const parsedData = storedData ? JSON.parse(storedData) : [];

    setData(parsedData);
  }, []);

  const totalItemCount = data.reduce((total, item) => total + item.count, 0);
  const totalPrice = data.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const decrementCount = (productId) => {
    const updatedData = data.map((item) => {
      if (item._id === productId) {
        const newCount = item.count - 1;
        return newCount >= 1 ? { ...item, count: newCount } : item;
      }
      return item;
    });

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const incrementCount = (productId) => {
    const updatedData = data.map((item) =>
      item._id === productId ? { ...item, count: item.count + 1 } : item
    );

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const deleteProduct = (productId) => {
    const updatedData = data.filter((item) => item._id !== productId);

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const updateCount = (productId, newCount) => {
    // If newCount is not a number or is less than 1, set it to 1
    const countToUpdate = isNaN(newCount) || newCount < 1 ? 1 : newCount;

    const updatedData = data.map((item) =>
      item._id === productId ? { ...item, count: countToUpdate } : item
    );

    // Update state and local storage with the new data
    setData(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const handleGoToProductDetail = (productId) => {
        
    // Use window.location to navigate
    window.location.href = `/productDetail/${productId}`;
  };

  console.log("««««« data »»»»»", data);
  return (
    <div>
      <div className="container">
        <h1 className={`text-center ${Styles.description_cart}`}>
          Giỏ hàng của bạn
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-8">
            {data.length > 0 ? (
              <>
                <p className={`${Styles.title_number_cart}`}>
                  Bạn đang có <b> {totalItemCount} sản phẩm </b> trong giỏ hàng
                </p>
                {data.map((item) => (
                  <>
                    <div
                      key={item.id}
                      className={` ${Styles.title_number_border}`}
                    >
                      <div className={`d-flex row ${Styles.media_line_item}`}>
                        <div className={`col-2 ${Styles.media_left}`}>
                          <a
                            href={`/productDetail/${item._id}`}
                            className={`${Styles.media_left_a}`}>
                            <img
                              className={`${Styles.image_number_cart}`}
                              src={item.description}
                              alt={item.name}
                            />
                          </a>
                        </div>
                        <div className={`col-8 ${Styles.media_right}`}>
                          <a href={`/productDetail/${item._id}`} >{item.name}</a>
                          <div className="d-flex">
                            <input
                              type="button"
                              value="-"
                              onClick={() => decrementCount(item._id)}
                              className={` btn btn-light ${Styles.input_color}`}
                            />
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={item.count}
                              onChange={(e) =>
                                updateCount(
                                  item._id,
                                  parseInt(e.target.value, 10)
                                )
                              }
                              min="1"
                              className={`form-control ${Styles.input_quantity}`}
                            />
                            <input
                              type="button"
                              value="+"
                              onClick={() => incrementCount(item._id)}
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
                          <button
                            onClick={() => deleteProduct(item._id)}
                            className={`btn btn-light `}
                          >
                            <img src="//theme.hstatic.net/1000160337/1000885200/14/delete-cart.png?v=316" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <span>Thành Tiền:</span>
                        <span>${item.price * item.count.toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <p className={`${Styles.title_number_cart}`}>
                Giỏ hàng của bạn đang trống
              </p>
            )}
          </div>

          <div className="col-4">
            <div className={`${Styles.box_cart}`}>
              <h2
                className={`${Styles.border_bottom} ${Styles.description_cart}`}
              >
                Thông tin đơn hàng
              </h2>

              <div
                className={`d-flex justify-content-between ${Styles.border_bottom}`}
              >
                <span>
                  ${totalPrice}
                  <u>đ</u>
                </span>
              </div>

              <div className={`  ${Styles.box_title_cart}`}>
                <p className={`  ${Styles.title_cart}`}>
                  Phí vận chuyển sẽ được tính ở trang thanh toán.
                </p>

                <p className={`  ${Styles.title_cart}`}>
                  Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                </p>

                <Link className={`  ${Styles.checkout_btn}`} href="">
                  Thanh Toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
