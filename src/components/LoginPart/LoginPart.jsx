import Link from 'next/link'
import React from 'react'
import styles from './loginPart.module.css'

export default function LoginPart() {
    return (
        <>
            <div className={styles.media_pc}>
                <div className='d-flex'>
                    <i className="fa-regular fa-user fs-4 my-auto me-2"></i>
                    <div className='d-flex flex-column ms-2'>
                        <Link href='/register' style={{ color: 'var(--main-color)' }}>
                            <p> Register</p>
                        </Link>

                        <Link href='/login' style={{ color: 'var(--main-color)' }}>
                            <h5 >Login</h5>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.media_tablet}>
                <div className='d-flex' >
                    <Link href='/login'>
                        <i className="fa-regular fa-user fs-4 my-auto me-2" style={{ color: 'var(--main-color)' }}></i>
                    </Link>
                </div>
            </div>
        </>
    )
}
