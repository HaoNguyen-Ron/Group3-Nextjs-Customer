import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className="d-grid">
      <div
        className={`d-none d-md-flex d-lg-flex justify-content-center align-item-center ${styles.footer_bg}`}
      >
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-3">
              <h3 className={styles.footer_title}>
                <span className={styles.color_3nime}>3NIME </span> Figure
              </h3>
              <p>
                <span className={styles.color_3nime}>3NIME </span>Figure shop
                tại Đà Nẵng chuyên bán các sản phẩm mô hình figure anime chính
                hãng Nhật Bản như gameprize, nendoroid, mô hình scale..
              </p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3">
              <p>
                <bold>Địa chỉ:</bold> Hòa xuân, Cẩm Lệ, Đà Nẵng
              </p>
              <p>
                <span className={styles.color_3nime}>3NIME </span> Figure chưa
                có không gian trưng bày, bạn vui lòng hẹn trước khi đến
              </p>
              <p>Điện thoại: +84 985655221</p>
              <p>Email: support@japanfigure.vn</p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3">
              <h3>Hỗ trợ khách hàng</h3>
              <ul>
                <li>
                  <a href="javascript:;">Tìm kiếm</a>
                </li>
                <li>
                  <a href="javascript:;">Giới thiệu</a>
                </li>
              </ul>
            </div>
            <div className="col col-12 col-md-6 col-lg-3">
              <h3>Chăm sóc khách hàng</h3>
              <div className="d-flex align-items-center gap-2">
                <div>
                  <i className="phone-bigsize fa-solid fa-phone"></i>
                </div>
                <div>
                  <div>0965 587 662</div>
                  <div>support@3nimefigure.vn</div>
                </div>
              </div>
              <h3>Follow Japan Figure</h3>

              <div className={`${styles.logo_icon} d-flex`}>
                <a href="javascript:;">
                  <i className="fa-solid fa-location-pin" />
                </a>
                <a href="javascript:;">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="javascript:;">
                  <i className="fa-brands fa-pinterest" />
                </a>
                <a href="javascript:;">
                  <i className="fa-brands fa-google-plus-g" />
                </a>
                <a href="javascript:;">
                  <i className="fa-brands fa-square-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bg_under}>
        <div className="container d-flex justify-content-center align-item-center">
          Copyright © 2023 Japan Figure. Powered by Haravan
        </div>
      </div>
    </footer>
  );
}

export default Footer;
