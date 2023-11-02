import React from "react";
import Social from "@/components/social";
import abo from "@/styles/AboutUs.module.css";
import Image from "next/image";

function AboutUS(props) {
  return (
    <>
      <div>
        <div className={abo["about-head"]}>
          <div className="container">
            <div className="navbar navbar-expand-lg">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/" target="_self">
                    <span className={abo["about-head-span"]}>Trang chủ</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/aboutUs"
                    target="_self"
                  >
                    <span>Giới thiệu về Japan Figure</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 col-xs-12">
              <div className="my-4 text-muted">
                <h1>Giới thiệu về Japan Figure</h1>
              </div>
              <div className="contentAboutusDetail">
                <p className={`${abo.imageAbout} text-center`}>
                  <Image
                    src="/assets/images/banner-about.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="cover"
                  />
                </p>

                <p className="text-center">&nbsp;</p>

                <p className="text-justify">
                  <span style={{ color: "rgb(153, 51, 102)" }}>
                    <strong>► Figure là gì ?</strong>
                  </span>
                </p>

                <p className="text-justify">
                  <span style={{ color: "#000" }}>
                    Là mô hình, là tượng, là bất kỳ cách gọi nào liên quan đến
                    những tạo tác 3D cầm nắm được trên tay, mô phỏng lại nhân
                    vật trong bức vẽ, phim, truyện, game... Thông thường figure
                    mang hình dạng con người, đôi khi là động vật, thực vật,
                    quái vật, yêu tinh, thần thánh, thậm chí là sinh vật ngoài
                    tinh...nhân vật nào được điêu khắc thành 3D thì được gọi
                    chung là figure.
                  </span>
                </p>

                <p className="text-center">&nbsp;</p>

                <div className="text-center">
                  <iframe
                    width={640}
                    height={360}
                    src="https://www.youtube.com/embed/j6-p9L9b3WA?si=NiZ78XNOlx3y80_H"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>
                <p style={{ textAlign: "center" }}>
                  <em>Game Prize Figure và những điều cần biết</em>
                </p>

                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-1.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="cover"
                  />
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-12">aaaaaaaaaaa</div>
          </div>
        </div>
      </div>
      <Social />
    </>
  );
}

export default AboutUS;
