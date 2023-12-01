import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import CustomerEditForm from "../Form/EditFormCustomer";
import { axiosClient } from "@/libraries/axiosClient";

export default function UserPassword({ user, isShow = true }) {
    console.log('««««« user »»»»»', user);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };

  const getCustomerDetail = useCallback(async () => {
    try {
      setShow(true);
     
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={isShow ? "d-block" : "d-none"}>
      <h2 className="mb-4 mt-3">Bảo mật tài khoản :</h2>
      <div className="userDetail_container ms-3 d-flex flex-column g-2">
        {/* <div className="userDetail_item">
          <button
            onClick={() => getCustomerDetail(user.id)}
            className={`btn ${styles.user__btn}`}
          >
            Thay đổi thông tin người dùng
          </button>
        </div> */}

        <button
          className="btn"
          onClick={getCustomerDetail}
        >
          <i
            className="fa-solid fa-pen-to-square"
            style={{ minWidth: "20px" }}
          ></i>

          <span className="ms-2 fw-bold"> Thay đổi thông tin người dùng</span>
        </button>

        <Modal show={show} onHide={handleClose} size="lg">
          x
          <Modal.Header closeButton>
            <Modal.Title>Editing form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <CustomerEditForm userData={user} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
