import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { axiosClient } from '@/libraries/axiosClient'

import UserDetail from '@/components/UserProfile/UserDetail'
import UserHistory from '@/components/UserProfile/UserHistory'
import UserPassword from '@/components/UserProfile/UserPassword'
import verifyLoggin from '@/components/HOC/verifyLoggin'

import styles from '@/styles/userPage.module.css'

function UserProfilePage() {
  const [activeTab, setActiveTab] = useState('detail');
  const [user, setUser] = useState([]);
  const router = useRouter();

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  const getUserDetail = useCallback(async () => {
    try {
      const res = await axiosClient.get('/auth/profile');
      
      if (res.status === 200 && router.isReady === true) {
        const data = res.data.payload;
        setUser(data);
      }
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  }, [router.isReady]);

  useEffect(() => {
    const token = window.localStorage.getItem('TOKEN');
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
      getUserDetail();
    }
  }, [getUserDetail]);

  return (
    <div className='container mb-5' style={{ height: '100%', minHeight: '300px' }}>
      <h1 className={`text-center ${styles.user__title}`}>Tài khoản của bạn</h1>

      <div className='user-wrapper d-block d-lg-flex row'>
        <div className='user__nav me-3 col-12 col-lg-2'>
          <ul className='nav row '>
            <li className='nav-item col-12 col-sm-4 col-lg-12 text-center'>
              <button className={`btn ${styles.user__item}`} onClick={() => switchTab('detail')}>
                Thông tin tài khoản
              </button>
            </li>

            <li className='nav-item col-12 col-sm-4 col-lg-12 text-center'>
              <button className={`btn ${styles.user__item}`} onClick={() => switchTab('history')}>
                Lịch sử mua hàng
              </button>
            </li>

            <li className='nav-item col-12 col-sm-4 col-lg-12 text-center'>
              <button className={`btn  ${styles.user__item}`} onClick={() => switchTab('password')}>
                Bảo vệ tài khoản
              </button>
            </li>
          </ul>
        </div>

        <hr className='d-block d-lg-none my-3' />

        <div className='user__content px-5 col-12 col-lg-8'>
          {activeTab === 'detail' && <UserDetail user={user} />}
          {activeTab === 'history' && <UserHistory user={user} />}
          {activeTab === 'password' && <UserPassword user={user} />}
        </div>
      </div>
    </div>
  );
}

export default verifyLoggin(UserProfilePage);
