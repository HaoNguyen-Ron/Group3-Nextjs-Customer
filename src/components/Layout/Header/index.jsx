import React from 'react'
import Logo from './Logo/Logo'
import SearchBar from './Searchbar/Searchbar'
import Nav from './Nav'

import styles from '@/styles/header.module.css'

import LoginPartPc from '@/components/LoginPart/LoginPartPc'
import LoginPartTablet from '@/components/LoginPart/LoginPartTablet'


export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className={`d-flex justify-content-center align-items-center align-self-center row styles.headerContainer`}>
                        <div className='col-xs-12 col-sm-10 col-md-8 col-lg-2'>
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
                    </div>
                    <Nav />
                </div>
            </header>
        </>
    )
}
