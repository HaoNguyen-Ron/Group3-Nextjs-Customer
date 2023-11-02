import Link from 'next/link'
import React from 'react'
import styles from '@/styles/loginPart.module.css'

export default function LoginPartPc() {
    return (
        <>
            <div className={styles.media_pc}>
                <div className='d-flex'>
                    <i className="fa-regular fa-user my-auto me-2" style={{ fontSize: '30px' }}></i>
                    <div className='d-flex flex-column ms-2'>
                        <div className={styles.loginPart}>
                            <Link href='/register'>
                                <p className={styles.loginPart__item}> Register</p>
                            </Link>
                        </div>
                        
                        <div className={styles.loginPart}>
                            <div>
                                <Link href='/login'>
                                    <h5 className={styles.loginPart__item}>Login</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
