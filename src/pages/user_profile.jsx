import React, { useState } from 'react'

import styles from '@/styles/userPage.module.css'
import UserDetail from '@/components/UserProfile/UserDetail'
import UserHistory from '@/components/UserProfile/UserHistory'
import UserPassword from '@/components/UserProfile/UserPassword'
import UserProfile from '@/components/UserProfile'

export default function UserProfilePage() {
    const [getDetail , setGetDetail] = useState(true)
    const [getHistory , setGetHistory] = useState(false)
    const [getPassword , setGetPassword] = useState(false)

    const onGetDetail = () => {
        setGetDetail(true)
        setGetHistory(false)
        setGetPassword(false)
    }

    const onGetHistory = () => {
        setGetDetail(false)
        setGetHistory(true)
        setGetPassword(false)
    }

    const onGetPassword = () => {
        setGetDetail(false)
        setGetHistory(false)
        setGetPassword(true)
    }

    return (
        <div className='container mb-5' style={{height:'300px'}}>
            <h1 className={`text-center ${styles.user__title}`}>Tài khoản của bạn</h1>

            <div className='user-wrapper d-flex'>
                <div className='user__nav flex-1 me-3'>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button className={`btn ${styles.user__item}`} onClick={onGetDetail}>Thông tin tài khoản</button>
                        </li>

                        <li className="nav-item">
                            <button className={`btn ${styles.user__item}`} onClick={onGetHistory}>Lịch sử mua hàng</button>
                        </li>

                        <li className="nav-item">
                            <button className={`btn  ${styles.user__item}`} onClick={onGetPassword}>Bảo vệ tài khoản</button>
                        </li>
                    </ul>
                </div>

                <div className="user__content flex-3 border-start border-2 px-5">
                    <UserDetail isShow={getDetail}/>

                    <UserHistory isShow={getHistory}  />

                    <UserPassword isShow={getPassword} />
                </div>
            </div>

        </div>
    )
}
