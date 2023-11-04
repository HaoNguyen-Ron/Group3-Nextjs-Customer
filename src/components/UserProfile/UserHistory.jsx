import React from 'react'
import styles from '@/styles/userPage.module.css'

export default function UserHistory({isShow = true}) {
  return (
    <div className={isShow ? 'd-block' : 'd-none'}>
        <h2 className='mb-4 mt-3'>Lịch sử mua hàng :</h2>
            <div className="userDetail_container ms-3">
                <div className='userDetail_item'>
                    <em>Đơn hàng: </em>
                    <span>Đơn hàng A</span>
                </div>

                <div className='userDetail_item mt-2'>
                    <em>Ngày mua: </em>
                    <span>1/1/2000</span>
                </div>

                <div className='userDetail_item mt-2'>
                    <em>Trạng thái: </em>
                    <span>Hoàn thành</span>

                </div>
            </div>
    </div>
  )
}
