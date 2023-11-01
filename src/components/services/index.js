import React from "react";
import dv from "@/styles/services.module.css";

function Services(props) {
  return (
    <div className={`${dv.services}`}>
      <div className="container d-flex justify-content-around align-items-center">
        <ServicesItem
          icon={<i className="fa-regular fa-share-from-square"></i>}
          info={{
            name: "Sản phẩm chính hãng",
            desc: "Nhập khẩu trực tiếp từ Nhật Bản",
            link_url: "Xem chi tiết",
          }}
        />
        <ServicesItem
          icon={<i className="fa-regular fa-credit-card"></i>}
          info={{
            name: "Thanh toán đơn giản",
            desc: "Chuyển khoản hoặc COD",
            link_url: "Xem chi tiết",
          }}
        />
        <ServicesItem
          icon={<i className="fa-solid fa-rocket"></i>}
          info={{
            name: "Giao hàng nhanh chóng",
            desc: "Miễn phí với đơn hàng>1000K",
            link_url: "Xem chi tiết",
          }}
        />
      </div>
    </div>
  );
}

export default Services;

const ServicesItem = ({ info, icon, onClick }) => {
  const { name, desc, link_url } = info;

  return (
    <>
      <div className={`col-md-4 text-center px-2 py-4 my-4 ${dv.borderEnd}`}>
        <div className={dv.services_icon}>{icon}</div>
        <div className="services-name">
          <h4>{name}</h4>
          <p className="txt-desc">{desc}</p>
          <a className={dv["txt-link"]}>{link_url}</a>
        </div>
      </div>
    </>
  );
};
