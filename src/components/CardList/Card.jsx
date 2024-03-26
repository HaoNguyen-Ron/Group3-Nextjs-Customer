import React from 'react'
import styles from '@/styles/card.module.css'

function Card({ products, handleAddToCart, id }) {
  const formattedPrice = (price) => {
    return price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    })
  }

  return (
    <div>
      <div className='owl-stage-outer'>
        <div className='owl-stage'>
          <div className='owl-item active' style={{ width: '100%' }}>
            <div className='row-product'>
              <div className={`${styles['product-small']} ${styles['product-loop']}`}>
                <div className={`product-resize fixheight ${styles['product-inner']}`} style={{ height: 305 }}>
                  <div className={` ${styles['proloop-image']}`}>
                    <div className={`image-resize ${styles['proloop--image']}`} style={{ height: 240 }}>
                      <div className={` ${styles['product--image__inner']}`}>
                        <div
                          className={`hovered-img hidden-xs hidden-sm ${styles['prod-img']}  ${styles['second-image']} `}
                        >
                          <picture className={`${styles['picture']}`}>
                            <img className={` img-loop  ${styles['lazyloaded']}`} alt='' src={products.description} />

                            {products.discount === 0 ? (
                              <></>
                            ) : (
                              <span className={`${styles['sale-span']}`}>-{products.discount}%</span>
                            )}
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles['proloop-detail']}`}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h3 className={`${styles['quickview-product']}`}>
                        <a href={id} className={`${styles['quickview-product']}`}>
                          {products.name}
                        </a>
                      </h3>
                      <button
                        onClick={() => handleAddToCart(products)}
                        className={` d-block d-md-block d-lg-none ${styles['btn_add_card-mini']}`}
                      >
                        <i className='fa-solid fa-cart-shopping'></i>
                      </button>
                    </div>
                    <p className={`justify-content-between ${styles['proloop--price']}`}>
                      {products.discount === 0 ? (
                        <></>
                      ) : (
                        <span className={`${styles['price']}`}>{formattedPrice(products.price)}</span>
                      )}
                      <span className={`${styles['price-discount']}`}>
                        {formattedPrice(products.price - (products.price * products.discount) / 100)}
                      </span>
                    </p>
                  </div>

                  <div className={`${styles['proloop-actions']}`}>
                    <div className={`${styles['proloop-actions__inner']}`}>
                      <div className={`d-flex justify-content-center ${styles['actions-primary']}`}>
                        <button
                          onClick={() => handleAddToCart(products)}
                          type='button'
                          className={`${styles['btn_add_card']}`}
                          style={{ border: 'none' }}
                        >
                          <i className='fa-solid fa-cart-shopping'></i>
                        </button>
                      </div>
                      <div className={`${styles['actions-secondary']}`}>
                        <button type='button' className={` ${styles['button']}  ${styles['btn-proloop-checkout']} `}>
                          <i className='fa-solid fa-bag-shopping'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
