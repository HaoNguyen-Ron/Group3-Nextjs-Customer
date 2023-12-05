import React from "react";

import styles from "@/styles/searchbar.module.css";

export default function SearchList({ searchList, index }) {
  return (
    <>
      <li
        className={`d-flex justify-content-between align-items-center ${styles["searchbar__input-li"]}`}
        key={searchList._id}
      >
        <a
          className={`d-flex justify-content-between align-items-center ${styles["searchbar__input-li-a"]}`}
          href={`productDetail/${searchList._id}`}>
          <div>
            <p>{searchList.name}</p>
            <p className={styles["searchbar__input-p"]}>{searchList.price}</p>
          </div>

          <div>
            <img
              src={searchList.description}
              alt=""
              className={styles["searchbar__input-img"]}
            />
          </div>
        </a>
      </li>
    </>
  );
}
