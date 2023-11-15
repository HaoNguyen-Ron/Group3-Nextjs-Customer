import React, { useEffect, useState } from "react";
import fil from "@/styles/Filter.module.css";

function Filter(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    // Một số logic tải trang khác có thể ảnh hưởng đến activeItem
    setActiveItem(6); // Index của mục "Mới nhất"
  }, []);
  const items = [
    "Sản phẩm nổi bật",
    "Giá: Tăng dần",
    "Giá: Giảm dần",
    "Tên: A-Z",
    "Tên: Z-A",
    "Cũ nhất",
    "Mới nhất",
    "Bán chạy nhất",
  ];
  return (
    <>
      <div className="container">
        <div className={`${fil["collection-heading"]}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-sm-12 col-xs-12">
                <h1 className={`${fil["title"]}`}>Hàng có sẵn</h1>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className={`${fil["collection-sortbyfilter-container"]}`}>
                  <div className={`${fil["collection-sortby-filter"]}`}>
                    <div className={`${fil["collection-filterby"]}`}>
                      <div
                        className={`${fil["layered_filter_title"]} ${fil["boxstyle-mb"]}`}
                      >
                        <p className={`${fil["title_filter"]}`}>
                          <span className={`${fil["icon-filter"]}`}>
                            <i className="fa-solid fa-filter" />
                          </span>
                          <span className={`${fil["icon-close"]}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                          </span>
                          Phân loại
                        </p>
                      </div>
                    </div>
                    <div className={`${fil["collection-sortby"]}`}>
                      <div
                        className={`${fil["layered_filter_title"]} ${fil["boxstyle-mb"]}`}
                      >
                        <p className={`${fil["title_filter"]}`}>
                          <span className={`${fil["icon-filter"]}`}>
                            <i
                              className="fa fa-sort-alpha-asc"
                              aria-hidden="true"
                            />
                          </span>
                          <span className={`${fil["icon-close"]}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                          </span>
                          Sắp xếp
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`${fil["collection-sortby-option"]}`}>
                    <ul className={`${fil["sort-by"]}`}>
                      {items.map((item, index) => (
                        <li
                          className={`${fil["li"]} ${
                            activeItem === index ? fil["active"] : ""
                          }`}
                          onClick={() => handleItemClick(index)}
                          key={index}
                        >
                          <span
                            data-value={item.toLowerCase()}
                            data-filter={item}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-3`}>
          <div className={`container`}>
            <div className="row px-0 d-flex justify-content-around align-items-center">
              <div
                className={`${fil["collection-filterby"]} col-md-3 col-sm-12  col-xs-12`}
                // style={{ width: "100%" }}
              >
                <div
                  className={`${fil["layered_filter_title"]} ${fil["boxstyle-mb"]}`}
                >
                  <p className={`${fil["title_filter_af"]} mb-0`}>
                    <span className={`${fil["icon-filter"]} me-1 text-muted`}>
                      <i className="fa-solid fa-filter" />
                    </span>
                    PHÂN LOẠI
                  </p>
                </div>
              </div>
              {/* FilItem */}
              <div
                className={`${fil["filter_group-block"]} col-md-3 col-sm-12  col-xs-12`}
              >
                <div className={`${fil["filter_group-subtitle"]}`}>
                  <span>Thương Hiệu</span>
                  <span className={` ${fil["icon-control"]}`}>
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                  </span>
                </div>

                <FilItem
                  items={[
                    "Banpresto",
                    "MegaHouse",
                    "Phat Company",
                    "Broccoli",
                    "furyu",
                    "KADOKAWA",
                    "Chara-Ani, Toy Works",
                    "FREEing",
                    "Hobby Stock",
                    "Bandai",
                    "Good Smile Company",
                    "Aquamarine",
                    "Aniplex",
                    "Sega",
                    "Orange Rouge",
                    "Daiki kogyo",
                  ]}
                />
              </div>
              {/* FilItem */}
              <div
                className={`${fil["filter_group-block"]} col-md-3 col-sm-12  col-xs-12`}
              >
                <div className={`${fil["filter_group-subtitle"]}`}>
                  <span>Lọc Giá</span>
                  <span className={` ${fil["icon-control"]}`}>
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                  </span>
                </div>

                <FilItem
                  items={[
                    "Dưới 1.000.000₫",
                    "1.000.000₫ - 2.000.000₫",
                    "2.000.000₫ - 3.000.000₫",
                    "3.000.000₫ - 4.000.000₫",
                    "4.000.000₫",
                  ]}
                />
              </div>
              {/* FilItem */}
              <div
                className={`${fil["filter_group-block"]} col-md-3 col-sm-12  col-xs-12`}
              >
                <div className={`${fil["filter_group-subtitle"]}`}>
                  <span>Tỉ Lệ</span>
                  <span className={` ${fil["icon-control"]}`}>
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                  </span>
                </div>

                <FilItem
                  items={[
                    "1/12",
                    "1/10",
                    "1/8",
                    "1/7",
                    "1/6",
                    "1/5",
                    "1/4",
                    "1/3",
                    "non-scale",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;

const FilItem = ({ items }) => {
  return (
    <>
      <div className={`${fil["filter_group-content"]}`}>
        <ul className={`${fil["checkbox-list"]}`}>
          {items.map((label, index) => (
            <li className={`${fil["li"]}`} key={index}>
              <input
                type="checkbox"
                id={`data-brand-p-${index}`}
                defaultValue={label}
                name="brand-filter"
                data-vendor="(vendor:product contains)"
              />
              <label htmlFor={`data-brand-p-${index}`}>{label}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
