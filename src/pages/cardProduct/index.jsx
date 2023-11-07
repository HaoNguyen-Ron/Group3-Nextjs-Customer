import React, { useState } from "react";

import Styles from "@/styles/cardProduct.module.css";

export default function CardProduct() {
  return (
    <div className="box">
      <Card title="Protocal infomation" price="75990" />
    </div>
  );
}

const Card = ({ title, price }) => {
  const [count, setCount] = useState(1);
  const [showText, setShowText] = useState(false);

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
  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <>
      <div className="d-flex">
        <div className="caroshel col-lg-6">a</div>
        <div className="info col-lg-6">
          <h3>{title}</h3>
          <p>
            {price}
            <u>đ</u>
          </p>
          <div
            className={`d-flex justify-content-around align-items-center ${Styles.form_buy}`}
          >
            <div>
              <input
                type="button"
                value="-"
                onClick={decrement}
                className="qty-btn"
              />
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={count}
                onChange={handleChange}
                className="quantity-input"
              />
              <input
                type="button"
                value="+"
                onClick={increment}
                className="qty-btn"
              />
            </div>

            <div className={`btn bg-body-secondary ${Styles.box_mes}`}>
              <a
                className="d-flex justify-content-around align-items-center"
                href="https://www.messenger.com/login"
              >
                <img
                  width={45}
                  height={35}
                  src="//theme.hstatic.net/1000160337/1000885200/14/icon_chat_desktop.png?v=316"
                  alt="chat"
                />
                <span className={`${Styles.title_chat}`}>Chat Ngay</span>
              </a>
            </div>
            <button className={` ${Styles.btn_add_card}`}>
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className={`${Styles.product_deliverl}`}>
            <ul className={`${Styles.infoList_deliverly}`}>
              <li
                className={`d-flex align-items-center ${Styles.infoList_deliverly_item}`}
              >
                <span>
                  <img
                    className=" lazyloaded"
                    data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_1_ico.png?v=316"
                    src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_1_ico.png?v=316"
                    alt="Sản phẩm chính hãng từ Nhật Bản."
                  />
                </span>
                <div>
                  <i className="fa fa-check" />
                  <strong> Sản phẩm chính hãng từ Nhật Bản.</strong>
                  <br />
                  <i className="fa fa-check" />
                  <strong> Trước khi bạn đặt mua:</strong> vui lòng check lại
                  giá hiện tại với admin, vì khả năng giá đã thay đổi so với lần
                  cập nhật gần nhất, hoặc hết hàng, hết suất order. Do giới hạn
                  số lượng, figure Nhật sẽ hiếm dần theo thời gian, dẫn tới giá
                  tăng.
                </div>
              </li>

              <li
                className={`d-flex align-items-center ${Styles.infoList_deliverly_item}`}
              >
                <span>
                  <img
                    className=" lazyloaded"
                    data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_2_ico.png?v=316"
                    src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_2_ico.png?v=316"
                    alt="Với sản phẩm CÓ SẴN, bạn sẽ được giao ngay."
                  />
                </span>
                <div>
                  <i className="fa fa-check" />
                  <span> Với sản phẩm</span>
                  <strong> CÓ SẴN, bạn sẽ được giao ngay.</strong>
                  <br />
                  <i className="fa fa-check" />
                  <span> Với sản phẩm</span>
                  <strong> ĐẶT TRƯỚC, bạn cần cọc 50% giá trị sản phẩm.</strong>
                  <span>
                    {" "}
                    Hàng về VN khoảng 2-3 tuần sau khi phát hành. Lịch phát hành
                    dự kiến như thông tin chi tiết bên dưới.
                  </span>
                </div>
              </li>

              <li
                className={`d-flex align-items-center ${Styles.infoList_deliverly_item}`}
              >
                <span>
                  <img
                    className=" lazyloaded"
                    data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_3_ico.png?v=316"
                    src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_3_ico.png?v=316"
                    alt="Giao hàng tận nơi. Miễn phí ship với các đơn hàng >1000K .Vui lòng kiểm tra sản phẩm khi nhận bưu kiện"
                  />
                </span>
                <div>
                  <i className="fa fa-check" />
                  <span> Giao hàng tận nơi.</span>
                  <br />
                  <i className="fa fa-check" />
                  <span> Miễn phí ship với các đơn hàng {">"} 1000K </span>
                  <br />
                  <i className="fa fa-check" />
                  <span> Giao hàng tận nơi.</span>
                  <br />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className={`${Styles.Infomation_product}`} 
              onClick={() => setShowText(!showText)}>Thông tin sản phẩm
              {showText ? "Hide Text" : "Show Text"}
            </p>
            {showText && (
              <p>Đây là đoạn văn bản mà bạn muốn hiển thị hoặc ẩn đi.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
