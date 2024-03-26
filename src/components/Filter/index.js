import React, { useEffect, useState } from 'react'
import styles from '@/styles/filter.module.css'

function Filter(props) {
  const {
    onCheckboxChangePrice,
    onCheckboxChangeSupplier,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByNameAzAsc,
    sortByNameZaDesc,
    onSortOptionChange,
    itemPrice,
    itemName,
    itemSuplier
  } = props
  const [activeItem, setActiveItem] = useState(null)
  const handleItemClick = (index) => {
    setActiveItem(index)
    // Kích hoạt sắp xếp tương ứng
    switch (index) {
      case 0:
        sortByPriceAscending()
        break
      case 1:
        sortByPriceDescending()
        break
      case 2:
        sortByNameAzAsc()
        break
      case 3:
        sortByNameZaDesc()
        break
      default:
        break
    }
  }
  useEffect(() => {
    const defaultSortOption = itemName[activeItem]

    onSortOptionChange?.(defaultSortOption)
  }, [activeItem])

  return (
    <>
      <div className='container'>
        <div className={`${styles['collection-heading']}`}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-9 col-sm-12 col-xs-12'>
                <h1 className={`${styles['title']}`}>Hàng có sẵn</h1>
              </div>
              <div className='col-md-3 col-sm-12 col-xs-12'>
                <div className={`${styles['collection-sortbyfilter-container']}`}>
                  <div className={`${styles['collection-sortby-filter']}`}>
                    <div className={`${styles['collection-filterby']}`}>
                      <div className={`${styles['layered_filter_title']} ${styles['boxstyle-mb']}`}>
                        <p className={`${styles['title_filter']}`}>
                          <span className={`${styles['icon-filter']}`}>
                            <i className='fa-solid fa-filter' />
                          </span>

                          <span className={`${styles['icon-close']}`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
                              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
                            </svg>
                          </span>

                          Phân loại
                        </p>
                      </div>
                    </div>

                    <div className={`${styles['collection-sortby']}`}>
                      <div className={`${styles['layered_filter_title']} ${styles['boxstyle-mb']}`}>
                        <p className={`${styles['title_filter']}`}>
                          <span className={`${styles['icon-filter']}`}>
                            <i className='fa fa-sort-alpha-asc' aria-hidden='true' />
                          </span>

                          <span className={`${styles['icon-close']}`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
                              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
                            </svg>
                          </span>

                          Sắp xếp
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles['collection-sortby-option']}`}>
                    <ul className={`${styles['sort-by']}`}>
                      {itemName.map((item, index) => (
                        <li
                          className={`${styles['li']} ${activeItem === index ? styles['active'] : ''}`}
                          onClick={() => handleItemClick(index)}
                          key={index}
                        >
                          {item}
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
            <div className='row px-0 d-flex justify-content-around align-items-center'>
              <div className={`${styles['collection-filterby']} col-md-3 col-sm-12  col-xs-12`}>
                <div className={`${styles['layered_filter_title']} ${styles['boxstyle-mb']}`}>
                  <p className={`${styles['title_filter_af']} mb-0`}>
                    <span className={`${styles['icon-filter']} me-1 text-muted`}>
                      <i className='fa-solid fa-filter' />
                    </span>

                    PHÂN LOẠI
                  </p>
                </div>
              </div>

              {/* FilItem */}
              <div className={`${styles['filter_group-block']} col-md-3 col-sm-12  col-xs-12`}>
                <div className={`${styles['filter_group-subtitle']}`}>
                  <span>Thương Hiệu</span>
                  <span className={` ${styles['icon-control']}`}>
                    <i className='fa fa-chevron-down' aria-hidden='true' />
                  </span>
                </div>

                <FilItem onCheckboxChange={onCheckboxChangeSupplier} items={itemSuplier} />
              </div>

              {/* FilItem */}
              <div className={`${styles['filter_group-block']} col-md-3 col-sm-12  col-xs-12`}>
                <div className={`${styles['filter_group-subtitle']}`}>
                  <span>Lọc Giá</span>
                  <span className={` ${styles['icon-control']}`}>
                    <i className='fa fa-chevron-down' aria-hidden='true' />
                  </span>
                </div>

                <FilItem onCheckboxChange={onCheckboxChangePrice} items={itemPrice} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter

// FilterItem component
const FilItem = ({ items, onCheckboxChange }) => {
  const handleCheckboxChangePrice = (label) => {
    if (onCheckboxChange) {
      onCheckboxChange(label)
    }
  }

  return (
    <>
      <div className={`${styles['filter_group-content']}`}>
        <ul className={`${styles['checkbox-list']}`}>
          {items &&
            items.map((label, index) => (
              <li className={`${styles['li']}`} key={index}>
                <input
                  type='checkbox'
                  value={label}
                  id={`data-brand-p-${label}`}
                  name='brand-filter'
                  data-vendor='(vendor:product contains)'
                  onChange={() => handleCheckboxChangePrice(label)}
                />
                <label htmlFor={`data-brand-p-${index}`}>{label}</label>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
