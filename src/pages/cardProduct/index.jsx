import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

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

  // Hàm tăng giá trị lên 1
  function increment() {
    setCount(count + 1);
  }

  // Hàm giảm giá trị xuống 1
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
    else setCount(count);
  }
  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <>
      <div className="d-flex">
        <div className="caroshel">a</div>
        <div className="info">
          <h3>{title}</h3>
          <p>
            {price}
            <u>đ</u>
          </p>
          <div className="d-flex justify-content-around align-items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};
