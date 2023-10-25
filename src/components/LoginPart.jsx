import React from 'react'

export default function LoginPart() {
    return (
        <div className='d-flex'>
            <i className="fa-regular fa-user fs-4 my-auto me-2"></i>
            <div className=''>
                <div>
                    <span>
                        Login
                    </span>
                    <span >
                        Register
                    </span>
                </div>
                <div className='d-flex'>
                    <h5 >My account</h5>
                    <span><i className="fa-solid fa-chevron-down fs-4"></i></span>
                </div>

            </div>

        </div>
    )
}
