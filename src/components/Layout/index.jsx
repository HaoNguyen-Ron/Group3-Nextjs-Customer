import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Services from "../services";
import Social from "../social";

export default function Layout({ children }) {
  return (
    <div className="mx-5">
      <Header />

      <main className="position-relative" style={{ height: "2000px" }}>
        <Services />
        <Social />
      </main>

      <Footer />
    </div>
  );
}
