import React from 'react'
import styles from '@/styles/userPage.module.css'

export default function UserDetail({isShow = true}) {
    return (
        <div className={isShow ? 'd-block' : 'd-none'}>
            <h2 className='mb-4 mt-3'>Thông tin tài khoản</h2>
            <div className="userDetail_container ms-3">
                <div className='userDetail_item mb-3'>
                    <em>Họ và tên: </em>
                    <span>Nguyen Van A</span>
                </div>

                <div className='userDetail_item mb-3'>
                    <em>Email: </em>
                    <span>123@gmail.com</span>
                </div>

                <div className='userDetail_item mb-3'>
                    <em>Địa chỉ: </em>
                    <span>Da Nang</span>
                </div>
            </div>
        </div>
    )
}
