<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Services from "../services";
import Social from "../social";
=======
import React from 'react'
import Header from './Header'
import Footer from './Footer'
>>>>>>> daf20b709ccfce755f35312cbe7edfb0fc49dfd0

export default function Layout({ children }) {
  return (
    <div className="mx-5">
      <Header />

<<<<<<< HEAD
      <main className="position-relative" style={{ height: "2000px" }}>
        <Services />
        <Social />
      </main>
=======
      {children}
      
      <Footer />
>>>>>>> daf20b709ccfce755f35312cbe7edfb0fc49dfd0

      <Footer />
    </div>
  );
}
