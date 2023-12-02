import { useFormik } from "formik";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as yup from "yup";

import verifyLoggin from "@/components/HOC/verifyLoggin";
import OrderProductList from "@/components/orderProductList";
import { axiosClient } from "@/libraries/axiosClient";
import styles from "@/styles/userPage.module.css";
import Style from "@/styles/Order.module.css";
import OrderCustomer from "@/components/OrderCustomer";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import CustomerEditForm from "@/components/Form/EditFormCustomer";
import PaymentMethod from "@/components/OrderCustomer/paymentMethod";

function order() {
  const [listProduct, setListProduct] = useState([]);
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    setShow(false);
  };

  const currentDate = new Date(Date.now());

  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = year + "-" + month + "-" + day;

  

  const getCustomerDetail = useCallback(async () => {
    try {
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  }, []);


  const validation = useFormik({
    initialValues: {
      customerId: userData._id,
      employeeId: "",
      paymentType: "",
      status: "WAITING",
      createdDate: formattedDate,
      orderDetails: listProduct.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
        price: product.price,
        discount: product.discount,
      })),
      isDeleted: false,
    },

    validationSchema: yup.object({
      customerId: yup.string(),
      paymentType: yup
        .string()
        .required("Vui lòng chọn phương thức thanh toán")
        .oneOf(["CASH", "CREDIT_CARD"], "Phương thức thanh toán không hợp lệ"),
    }),

    onSubmit: async (values) => {
      try {
        // Include orderDetails in the values to be sent to the server
        const payload = { ...values, orderDetails: values.orderDetails };

        // Perform your submission logic here
        const response = await axiosClient.post("/orders/", payload);

        console.log("Submitted values:", response.data);
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
  });

  const isValid = useMemo(() => {
    if (validation.errors.paymentType && validation.touched.paymentType) {
      return false;
    }

    return true;
  }, [validation.errors, validation.touched]);


    useEffect(() => {

    const getUserDetail = async () => {
      try {
        const res = await axiosClient.get("/auth/profile");
        console.log("««««« res »»»»»", res);
        if (res.status === 200 && router.isReady === true) {
          const data = res.data.payload;
          setUserData(data);
        }
      } catch (error) {
        console.log("««««« error »»»»»", error);
      }
    };

    const token = window.localStorage.getItem("TOKEN");
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
      getUserDetail();
    } 

    const storedData = localStorage.getItem("cart");

    const parsedData = storedData ? JSON.parse(storedData) : [];

    setListProduct(parsedData);
  },[]);
  return (
    <div className="container">
      <div className={`d-flex row ${Style.order_container}`}>
        <div className="col-6">
          <a href="/">
            <h1>3nime Figure</h1>
          </a>
          <div>
            <a href="./cart">
              <span>Giỏ hàng </span>
            </a>
            <span> $ </span>
            <span>Thông tin giao hàng</span>
          </div>
          <p>Thông tin giao hàng</p>
          <div>
            <label htmlFor="Mã khách hàng">Mã khách hàng:</label>
            <input type="text" value={userData._id} disabled />
          </div>

          <p>aaa: {userData.fullName}</p>
          <p>{userData.phoneNumber}</p>
          <p>{userData.address}</p>

          <div className="userDetail_container ms-3 d-flex flex-column g-2">
            <div className="userDetail_item">
              <button
                onClick={getCustomerDetail}
                className={`btn ${styles.user__btn}`}
              >
                Thay đổi thông tin giao hàng
              </button>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Editing form</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <CustomerEditForm userData={userData} />
              </Modal.Body>
            </Modal>
          </div>
          <div>
            <p>
              <b>Phương thức vận chuyển</b>
            </p>
            <>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Nhận hàng trực tiếp tại Japan Figure
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Giao hàng tận nơi
                </label>
              </div>
            </>
          </div>
          <div>
            <div>
              <b>Phương thức thanh toán</b>
              <select
                name="paymentType"
                onChange={validation.handleChange}
                className={` ${isValid ? "" : "is-invalid"}`}
                value={validation.values.paymentType}
              >
                <option defaultValue></option>
                <option value="CASH">tiền mặt</option>
                <option value="CREDIT_CARD">thẻ</option>
              </select>

              {!isValid && (
                <div style={{ color: "#ee2d7a" }}>
                  {validation.errors.paymentType}
                </div>
              )}
            </div>
          </div>
          <div>
            <a href="./cart">
              <span>Giỏ hàng </span>
            </a>
            <button
              className="btn btn-dark"
              type="submit"
              onClick={validation.handleSubmit}
            >
              Hoàn tất đơn hàng
            </button>
          </div>
        </div>
        <div className={`col-6 ${Style.product_list_color}`}>
          <OrderProductList listProduct={listProduct} />
        </div>
      </div>
    </div>
  );
}

export default verifyLoggin(order);
