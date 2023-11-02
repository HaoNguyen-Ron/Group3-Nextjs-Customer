import React from 'react'
import styles from '@/styles/loginPart.module.css'

export default function LoginPartTablet() {
    return (
        <>
            <div className={` ${styles.media_tablet} d-flex justify-content-end`}>
                    <i className="fa-regular fa-user fs-4 my-auto me-2"></i>
            </div>
        </>
    )
}
