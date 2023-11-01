import React from 'react'
import Logo from './Logo/Logo'
import SearchBar from './Searchbar/Searchbar'
import LoginPart from '../../LoginPart/LoginPart'
import Nav from './Nav'


export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className='d-flex justify-content-center align-items-center align-self-center row'>
                        <div className='col-sm-12 col-md-12 col-lg-2'>
                            <Logo />
                        </div>

                        <div className='col-sm-12 col-md-10 col-lg-8 d-flex justify-content-center align-items-center'>
                            <SearchBar />
                        </div>

                        <div className='col-sm-12 col-md-2 col-lg-2'>
                            <LoginPart />
                        </div>
                    </div>
                    <Nav />
                </div>
            </header>
        </>
    )
}
