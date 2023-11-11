import React, { useEffect } from 'react'
import styles from '@/styles/userPage.module.css'
import { axiosClient } from '@/libraries/axiosClient'

export default function UserDetail({ userName, userEmail, userAddress, isShow = true }) {

    return (
        <div className={isShow ? 'd-block' : 'd-none'}>
            <h2 className='mb-4 mt-3'>Thông tin tài khoản:</h2>

            <div className="userDetail_container ms-3">
                <div className='userDetail_item mb-3 d-flex '>
                    <div style={{ minWidth: '100px' }}>
                        <em>Họ và tên: </em>
                    </div>

                    <div>
                        <b>{userName}</b>
                    </div>
                </div>

                <div className='userDetail_item mb-3 d-flex'>
                    <div style={{ minWidth: '100px' }}>
                        <em>Email: </em>
                    </div>

                    <div>
                        <b>{userEmail}</b>
                    </div>
                </div>

                <div className='userDetail_item mb-3 d-flex'>
                    <div style={{ minWidth: '100px' }}>
                        <em>Địa chỉ: </em>
                    </div>

                    <div>
                        <b>{userAddress}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
