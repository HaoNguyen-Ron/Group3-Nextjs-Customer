import React from 'react'
import Logo from './Logo'
import SearchBar from './Searchbar'
import LoginPart from '../LoginPart'


export default function Header() {
    return (
        <>
            <header>
                <div className=' mx-5 row d-flex justify-content-center align-items-center align-self-center bg-primary'>
                    <div className='col col-lg-2'>
                        <Logo />
                    </div>

                    <div className='col col-lg-8 d-flex justify-content-center align-items-center'>
                        <SearchBar />
                    </div>

                    <div className='col col-lg-2'>
                        <LoginPart />
                    </div>
                </div>
            </header>
        </>
    )
}
