import React from "react";

import Styles from "@/styles/cart.module.css";
import Link from "next/link";
import CartItem from "@/components/CartItem";

function Cart(props) {
  
  return (
    <div>
      <div className="container">
        <h1 className={`text-center ${Styles.description_cart}`}>Giỏ hàng của bạn</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-8"><CartItem /></div>

          <div className="col-4">
            <div className={`${Styles.box_cart}`}>
              <h2 className={`${Styles.border_bottom} ${Styles.description_cart}`}>Thông tin đơn hàng</h2>

              <div
                className={`d-flex justify-content-between ${Styles.border_bottom}`}
              >
                <p>Tổng tiền:</p>
                <span>
                  0<u>đ</u>
                </span>
              </div>

              <div className={`  ${Styles.box_title_cart}`}>
                <p className={`  ${Styles.title_cart}`}>
                  Phí vận chuyển sẽ được tính ở trang thanh toán.
                </p>

                <p className={`  ${Styles.title_cart}`}>
                  Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                </p>
                
                <Link
                className={`  ${Styles.checkout_btn}`}
                    href=""
                >
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
