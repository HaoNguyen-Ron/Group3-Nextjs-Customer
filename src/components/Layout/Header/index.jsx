import React from "react";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import LoginPart from "../../LoginPart/LoginPart";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className=" mx-5 row d-flex justify-content-center align-items-center align-self-center ">
            <div className="col col-lg-2">
              <Logo />
            </div>

            <div className="col col-lg-8 d-flex justify-content-center align-items-center">
              <SearchBar />
            </div>

            <div className="col col-lg-2">
              <LoginPart />
            </div>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
}
