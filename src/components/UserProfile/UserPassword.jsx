import React from 'react'
import styles from '@/styles/userPage.module.css'


export default function UserPassword({isShow = true}) {
    return (
        <div className={isShow ? 'd-block' : 'd-none'}>
            <h2 className='mb-4 mt-3'>Bảo mật tài khoản :</h2>
            <div className="userDetail_container ms-3 d-flex flex-column g-2">
                <div className='userDetail_item'>
                    <button className={`btn ${styles.user__btn}`}>Đặt lại mật khẩu</button>
                </div>

                <div className='userDetail_item my-3'>
                    <button className={`btn ${styles.user__btn}`}>Đặt lại địa chỉ mới</button>
                </div>

            </div>
        </div>
    )
}
