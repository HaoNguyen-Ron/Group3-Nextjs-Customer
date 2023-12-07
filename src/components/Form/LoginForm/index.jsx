import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";

import InputGroup from "./InputGroup";

import styles from "@/styles/form.module.css";
import { useRouter } from "next/router";
import { axiosClient } from "@/libraries/axiosClient";
import { Box, Modal, Typography } from "@mui/material";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const redirect = useRouter();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid var(--main-color)",
    boxShadow: 24,
    p: 4,
    borderRadius: "16px",
  };

  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng điền email"),

      password: Yup.string()
        .min(6, "Mật khẩu ít nhất 6 kí tự")
        .max(12, "Mật khẩu chỉ tối đa 12 kí tự")
        .required("Vui lòng điền mật khẩu"),
    }),

    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axiosClient.post("/auth/login", values);

        if (res.status === 200) {
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("REFRESH-TOKEN", res.data.refreshToken);
          if (
            res.data.token ||
            (res.data.token && redirect.pathname === "/login")
          ) {
            redirect.reload();
          }
        }
      } catch (error) {
        setOpen(true);
        console.log("««««« error »»»»»", error);
      } finally {
        setLoading(false);
      }
    },
  });
  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault(); // Prevent default behavior (e.g., form submission)
      validation.handleSubmit();
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("TOKEN");

    if (token || (token && redirect.pathname === "/login")) {
      redirect.push("/");
    }
    document.addEventListener("keydown", handleEnterKey);
    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [redirect]);

  const handleClose = () => setOpen(false);

  return (
    <div className={`px-5 mx-auto my-5 ${styles.formContainer} `}>
      <h1 className="mb-4" style={{ color: "#EE2D7A" }}>
        Đăng nhập
      </h1>

      <div className="d-flex flex-column">
        <div className="mb-4">
          <InputGroup
            label="Email"
            name="email"
            validation={validation}
            placeholder="Nhập email ở đây"
          />
        </div>

        <div className={`${styles["input-group-wrapper"]}`}>
          <InputGroup
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handlePasswordChange}
            validation={validation}
            placeholder="Nhập mật khẩu ở đây"
          />
          <span
            className={`${styles["toggle-password"]}`}
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <i className="fa-regular fa-eye" />
            ) : (
              <i className="fa-regular fa-eye-slash" />
            )}
          </span>
        </div>

        <div className="mx-auto my-3">
          <button
            type="submit"
            onClick={validation.handleSubmit}
            className={`btn btn-lg border border-0 text-white px-5 ${styles.modal__btn}`}
            disabled={loading}
            onKeyDown={handleEnterKey}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex flex-column">
            <Typography
              className={styles.form__item}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Tình trạng đăng nhập
            </Typography>
            <hr />
            <Typography id="modal-modal-description">
              Mật khẩu hoặc email sai rồi, bạn vui lòng nhập lại !
            </Typography>

            <div className="mt-3">
              <button
                className={`btn ${styles.modal__btn}`}
                onClick={handleClose}
              >
                Quay lại
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <div className="d-flex justify-content-between mt-3 flex-column flex-md-row">
        <div className="registerLink">
          <p>Bạn là người lần đầu đến ?</p>
          <Link href="/register">
            <em className={styles.form__item}>
              Bấm vào đây để lập tài khoản nè !
            </em>
          </Link>
        </div>

        <div className="ResetPassLink mt-4 mt-md-0">
          <p>Quên mật khẩu ?</p>
          <Link href="/register">
            <em className={styles.form__item}>Tìm lại mật khẩu</em>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
