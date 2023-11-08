import React, { useEffect, useState } from 'react'

import styles from '@/styles/userPage.module.css'
import UserDetail from '@/components/UserProfile/UserDetail'
import UserHistory from '@/components/UserProfile/UserHistory'
import UserPassword from '@/components/UserProfile/UserPassword'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function UserProfilePage() {
    const [getDetail, setGetDetail] = useState(true)
    const [getHistory, setGetHistory] = useState(false)
    const [getPassword, setGetPassword] = useState(false)

    const [isLogged, setIsLogged] = useState(false)

    const redirect = useRouter()

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


    useEffect(() => {
        const token = window.localStorage.getItem("TOKEN");
        if (token) {
            setIsLogged(true)
        }
    }, []);

    return (
        <>
            {isLogged ? (
                <div className='container mb-5' style={{ height: '300px' }}>
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
                            <UserDetail isShow={getDetail} />

                            <UserHistory isShow={getHistory} />

                            <UserPassword isShow={getPassword} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container mb-5' style={{ height: '300px' }}>
                    <div className='d-flex justify-content-center flex-column'>
                        <h1 className={`text-center ${styles.user__title}`}>Tài khoản của bạn</h1>

                        <h1 className='text-center mt-3'>Oops !!!</h1>

                        <p className='text-center mt-2'>Bạn cần đăng nhập để biết thông tin chi tiết tài khoản nha !</p>

                        <div className='d-flex justify-content-center'>
                            <div className='me-3'>
                                <button className={`btn ${styles.user__btn}`}>
                                    <Link className={styles.user__link} href={'/login'}>Đăng nhập</Link>
                                </button>
                            </div>

                            <div>
                                <button className={`btn ${styles.user__btn}`}>
                                    <Link className={styles.user__link} href={'/register'}>Đăng ký</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
