import Link from 'next/link'
import React from 'react'

export default function LoginPart() {
    return (
        <div className='d-flex'>
            <i className="fa-regular fa-user fs-4 my-auto me-2"></i>
            <div className=''>
                <div>
                    <span >
                        Register
                    </span>
                </div>
                <Link href='/login'>
                    <div className='d-flex'>
                        <h5 >Login</h5>
                        <span><i className="fa-solid fa-chevron-down fs-4"></i></span>
                    </div>
                </Link>

            </div>

        </div>
    )
}
