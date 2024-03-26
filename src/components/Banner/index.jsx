import React from 'react'
import Link from 'next/link'

import styles from '@/styles/banner.module.css'

function Banner({ image, titles, caption, name }) {
  return (
    <div>
      <figure
        className={`
            ${styles['figure']}
            ${styles['snip1278']}`}
      >
        <h4 className={`${styles['H4']}`}>{titles}</h4>

        <div className={`${styles['image']}`}>
          <img className={`${styles['images']}`} src={image} alt='sq-sample6' />
        </div>

        <figcaption className={`${styles['figcaption']}`}>
          <p className='text-dark'>Bộ sưu tập</p>

          <p className={`${styles['name']}`}>{name}</p>

          <p className={` text-dark ${styles['pi']}`}>{caption}</p>

          <div className={`${styles['price']}`}>
            <Link href='/collections' className={`${styles['add-to-cart']}`}>
              Xem Thêm
              <i className='fa fa-angle-right' aria-hidden='true'></i>
            </Link>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Banner
