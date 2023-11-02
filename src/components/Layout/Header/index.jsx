import React from 'react'
import Logo from './Logo/Logo'
import SearchBar from './Searchbar/Searchbar'
import Nav from './Nav'
import NavTablet from './NavTablet'

import styles from '@/styles/header.module.css'

import LoginPartPc from '@/components/LoginPart/LoginPartPc'
import LoginPartTablet from '@/components/LoginPart/LoginPartTablet'



export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className={`d-flex justify-content-center align-items-center align-self-center row styles.headerContainer`}>
                        <div className={`col-xs-12 col-sm-2 col-md-1 col-lg-2 ${styles.media_tablet}`}>
                            <NavTablet />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-8 col-lg-2'>
                            <Logo />
                        </div>

                        <div className={`col-xs-12 col-sm-1 col-md-2 col-lg-2 ${styles.media_tablet}`}>
                            <LoginPartTablet />
                        </div>

                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8 d-flex justify-content-center align-items-center'>
                            <SearchBar />
                        </div>

                        <div className={`col-sm-12 col-md-2 col-lg-2`}>
                            <LoginPartPc />
                        </div>
                        <div className={`col-lg-12 d-none d-md-none d-lg-block `}>
                            <Nav />
                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    )
}
