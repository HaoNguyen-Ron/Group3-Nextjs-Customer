import React from 'react'
import Link from 'next/link'

import blog from '@/styles/blognew.module.css'

function BlogNew(props) {
  return (
    <div>
      <BlogItem
        image='/assets/images/payment-1.jpg'
        title='Bật mí cách mình đang kiếm tiền hiện giờ'
        title2='Bật mí cách mình đang kiếm tiền hiện giờ'
        title3='Bật mí cách mình đang kiếm tiền hiện giờ'
        title4='Bật mí cách mình đang kiếm tiền hiện giờ'
        date='12/02/1998'
      />
    </div>
  )
}

export default BlogNew

const BlogItem = ({ image, title, title2, title3, title4, date }) => {
  return (
    <>
      <div className={`${blog['item-article']} clearfix`}>
        <div className='post-image'>
          <Link href='/'>
            <img className=' lazyloaded' src={image} alt={title} />
          </Link>
        </div>

        <div className='post-content'>
          <h3>
            <Link href='/'>{title2}</Link>
          </h3>

          <p className='post-meta'>
            <span className='cate'>
              <Link href='/'>{title3}</Link>
            </span>

            <span className='author hidden'>
              <Link href='/'>{title4}</Link>
            </span>
            
            <span className='date'>{date}</span>
          </p>
        </div>
      </div>
    </>
  )
}
