import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Services from '../services'

export default function Layout({ children }) {
  return (
    <div>
      <Header />

      {children}
      <Services />
      <Footer />

    </div>
  )
}
