import React, { useEffect, useRef } from "react";
import soci from "@/styles/Social.module.css";
import Image from "next/image";

function Social(props) {
  // useEffect(() => {
  //   const btnBackToTop = document.querySelector(".btnBackToTop");
  //   const social = document.querySelector(".social");
  //   const addthisContact = document.querySelector(".addthisContact");

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY > 50) {
  //       social && social.classList.add("visible");
  //       btnBackToTop && btnBackToTop.classList.add("active");
  //       addthisContact && addthisContact.classList.add("active");
  //     } else {
  //       social && social.classList.remove("visible");
  //       btnBackToTop && btnBackToTop.classList.remove("active");
  //       addthisContact && addthisContact.classList.remove("active");
  //     }
  //   };

  //   document.addEventListener("scroll", handleScroll);

  //   btnBackToTop &&
  //     (btnBackToTop.onclick = () => {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //     });

  // useEffect(() => {
  //   const btnBackToTop = document.querySelector(".btnBackToTop");
  //   const social = document.querySelector(".social");
  //   const addthisContact = document.querySelector(".addthisContact");

  //   const handleScroll = () => {
  //     setTimeout(() => {
  //       const scrollY = window.scrollY;
  //       console.log("Scroll Y:", scrollY);

  //       // Kiểm tra xem các phần tử đã được tìm thấy chưa trước khi thao tác
  //       if (social && btnBackToTop && addthisContact) {
  //         if (scrollY > 50) {
  //           social.classList.add("visible");
  //           btnBackToTop.classList.add("active");
  //           addthisContact.classList.add("active");
  //         } else {
  //           social.classList.remove("visible");
  //           btnBackToTop.classList.remove("active");
  //           addthisContact.classList.remove("active");
  //         }
  //       }
  //     }, 0);
  //   };

  //   const handleBtnBackToTopClick = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };

  //   if (btnBackToTop) {
  //     btnBackToTop.addEventListener("click", handleBtnBackToTopClick);
  //   }

  //   document.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //     if (btnBackToTop) {
  //       btnBackToTop.removeEventListener("click", handleBtnBackToTopClick);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const btnBackToTop = document.querySelector(".btnBackToTop");
    const social = document.querySelector(".social");
    const addthisContact = document.querySelector(".addthisContact");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("Scroll Y:", scrollY);
      // Kiểm tra xem các phần tử đã được tìm thấy chưa trước khi thao tác
      if (social && btnBackToTop && addthisContact) {
        if (scrollY > 50) {
          social.classList.add("visible", "active");
          btnBackToTop.classList.add("active");
          addthisContact.classList.add("active");
        } else {
          social.classList.remove("visible", "active");
          btnBackToTop.classList.remove("active");
          addthisContact.classList.remove("active");
        }
      }
    };

    const handleBtnBackToTopClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (btnBackToTop) {
      btnBackToTop.addEventListener("click", handleBtnBackToTopClick);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      if (btnBackToTop) {
        btnBackToTop.removeEventListener("click", handleBtnBackToTopClick);
      }
    };
  }, []);

  return (
    <>
      <div className={soci["social"]}>
        <a
          href="https://www.facebook.com"
          className={soci["social_a"]}
          target="_blank"
        >
          <Image
            src="/assets/images/fb.png"
            alt="facebook"
            width={50}
            height={50}
          />
          Fanpage
        </a>

        <a href="#" className={soci["social_a"]} target="_blank">
          <Image
            src="/assets/images/mess.png"
            alt="Messenger"
            width={50}
            height={50}
          />
          Messenger
        </a>

        <a href="#" className={soci["social_a"]} target="_blank">
          <Image
            src="/assets/images/inta.png"
            alt="Instagram"
            width={50}
            height={50}
          />
          Instagram
        </a>

        <a href="#" className={soci["social_a"]} target="_blank">
          <Image
            src="/assets/images/zalo.png"
            alt="Zalo"
            width={50}
            height={50}
          />
          Zalo
        </a>

        <a href="#" className={soci["social_a"]} target="_blank">
          <Image
            src="/assets/images/telegram.png"
            alt="Telegram"
            width={50}
            height={50}
          />
          Telegram
        </a>
      </div>

      <div className={soci["addthisContact"]}>
        <ul className={soci["addThis_ul"]}>
          <li className={soci["addThis_li"]}>
            <a
              className={soci["addThis_a"]}
              href="#a"
              rel="nofollow"
              aria-label="phone"
            >
              <span className={soci["addThis_title"]}>
                Gọi ngay cho chúng tôi
              </span>
              <i className="fa-solid fa-phone"></i>
            </a>
          </li>
          <li className={soci["addThis_li"]}>
            <a
              className={soci["addThis_a"]}
              data-toggle="modal"
              href="#q"
              aria-label="email"
            >
              <span className={soci["addThis_title"]}>Liên hệ qua mail</span>
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className={soci["btnBackToTop"]}>
        <i class="fa-solid fa-arrow-up" style={{ color: "#fff" }}></i>
      </div>
    </>
  );
}

export default Social;
