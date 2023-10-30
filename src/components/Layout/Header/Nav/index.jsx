import React, { useState } from "react";

const TAB = {
  HISTORY: 1,
  APPROACH: 2,
  CULTURE: 3,
  METHOD: 4,
};

function index(props) {

  const [activeTab, setActiveTab] = useState(TAB.HISTORY);

  
  const onClickTab = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg mx-5">
        <div className="container-fluid">
          <a className="navbar-brand d-lg-none" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse nav_bar"
            id="navbarSupportedContent"
          >
            <ul className="navigation-menu navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-home">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav-sub active-colors">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  prodc
                </a>
                <ul className="nav-sub" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  brand
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link accessories" href="#">
                  accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  pages
                </a>
              </li>
              <TabLi
                title="HISTORY"
                value={TAB.HISTORY}
                activeTab={activeTab}
                onClick={onClickTab}
               />
               <TabLi
                title="APPROACH"
                value={TAB.APPROACH}
                activeTab={activeTab}
                onClick={onClickTab}
               />
               <TabLi
                title="CULTURE"
                value={TAB.CULTURE}
                activeTab={activeTab}
                onClick={onClickTab}
               />
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          /* Navbar */
          nav {
            display: flex;
            text-align: center;
            font-family: "Raleway", sans-serif;
            font-size: 1rem;
            & ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
          }

          .active-colors {
            color: rgb(221, 51, 193) !important;
            border-color: rgb(221, 51, 193) !important;
          }
          .navigation-menu {
            vertical-align: top;
            background: #0000;
            box-shadow: 1px -1px -1px 1px #000, -1px 1px -1px 1px #fff,
              0 0 6px 3px #fff;
            border-radius: 10px;
            & a {
              display: block;
              background: #fff;
              color: #665d5d;
              text-decoration: none;
              padding: 0.8em 1.8em;
              text-transform: uppercase;
              font-size: 80%;
              letter-spacing: 2px;
              text-shadow: 0 -1px 0 #000;
              position: relative;
            }
            & li {
              position: relative;
            }
          }
          .navigation-menu > li {
            float: left;
            border-bottom: 6px #aaac solid;
            margin-right: 1px;
            & > a {
              margin-bottom: 1px;
              box-shadow: inset 0 1.5em 0.33em -0.3em #fcf8f8;
            }
          }
          /* NavMenu */
          .navigation-menu > li:hover,
          .navigation-menu > li:hover > a {
            border-bottom-color: rgb(221, 51, 193);
            transition: all 1s ease-out;
          }

          .navigation-menu li:hover > a {
            color: rgb(221, 51, 193);
            transition: all 1s ease-out;
            animation: menuPop 0.2s linear;
          }

          .navigation-menu > li:first-child {
            border-radius: 4px 0 0 4px;
            & > a {
              border-radius: 4px 0 0 0;
            }
          }

          .navigation-menu > li:last-child {
            border-radius: 0 0 4px 0;
            margin-right: 0;
            & > a {
              border-radius: 0 4px 0 0;
            }
          }

          .navigation-menu li li a {
            margin-top: 1px;
          }

          .navigation-menu li a:first-child:nth-last-child(2):before {
            content: "";
            position: absolute;
            height: 0;
            width: 0;
            border: 5px solid transparent;
            top: 50%;
            right: -1px;
            transition: all 0.25s ease-out;
          }

          /* NavSubmenu */
          .navigation-menu ul {
            position: absolute;
            white-space: nowrap;
            border-bottom: 1px rgb(221, 51, 193) solid;
            z-index: 1;
            left: -99999em;
            transition: all 0.25s ease-out;
          }
          .navigation-menu > li:focus-within > ul {
            display: none;
            left: auto;
            padding-top: 5px;
            min-width: 100%;
          }
          .navigation-menu > li:hover > ul {
            display: block;
            left: auto;
            padding-top: 5px;
            min-width: 100%;
          }
          .navigation-menu > li li ul {
            border-left: 1px solid #fff;
            margin-left: 1px;
            transition: all 0.25s ease-out;
          }
          .navigation-menu > li li:hover > ul {
            left: 100%;
            top: -1px;
          }

          /* NavCaret */
          .navigation-menu
            > li.active-colors
            > a:first-child:nth-last-child(2):before {
            border-top-color: rgb(221, 51, 193);
          }
          .navigation-menu > li > a:first-child:nth-last-child(2):before {
            border-top-color: #aaa;
          }
          .navigation-menu > li:hover > a:first-child:nth-last-child(2):before {
            border: 5px solid transparent;
            margin-top: -5px;
            border-bottom-color: rgb(221, 51, 193);
          }
          .navigation-menu li li > a:first-child:nth-last-child(2):before {
            border-left-color: #aaa;
            margin-top: -5px;
          }
          .navigation-menu
            li
            li:hover
            > a:first-child:nth-last-child(2):before {
            border: 5px solid transparent;
            right: 10px;
            border-right-color: rgb(221, 51, 193);
          }

          @keyframes menuPop {
            0% {
              transform: translateY(3px) rotateY(30deg);
              opacity: 0.5;
            }
            100% {
              transform: translateY(0px) rotateY(0deg);
              opacity: 1;
            }
          }

          @keyframes shake {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(0.5deg);
            }
            50% {
              transform: rotate(0eg);
            }
            75% {
              transform: rotate(-0.5deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .nav-home {
            display: block;
          }
          /* reponsive */
          @media screen and (max-width: 991px) {
            .navigation-menu ul {
              display: block;
              position: absolute;
              white-space: nowrap;
              border-bottom: 1px rgb(221, 51, 193) solid;
              z-index: 1;
              left: -99999em;
              transition: all 0.25s ease-out;
            }
            .nav-home {
              display: none;
            }
            .navigation-menu > li:hover > ul {
              display: none;
            }
            .navigation-menu > li:focus-within > ul {
              display: block;
              left: auto;
              padding-top: 5px;
              min-width: 100%;
            }
          }

          @media screen and (max-width: 426px) {
          }
        `}
      </style>
    </>
  );
}

export default index;

const TabLi = ({ title, value, activeTab, onClick }) => {
  
  return (
    <>
      <li onClick={() => onClick(value)} className={`nav-item nav-home ${
            value === activeTab ? "active-colors" : ""
          }`}>
        <a className="nav-link" aria-current="page" href="#">
          {title}
        </a>
      </li>
      <style jsx>
        {`
          /* Navbar */
          nav {
            display: flex;
            text-align: center;
            font-family: "Raleway", sans-serif;
            font-size: 1rem;
            & ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
          }

          .active-colors {
            color: rgb(221, 51, 193) !important;
            border-color: rgb(221, 51, 193) !important;
          }
          .navigation-menu {
            vertical-align: top;
            background: #0000;
            box-shadow: 1px -1px -1px 1px #000, -1px 1px -1px 1px #fff,
              0 0 6px 3px #fff;
            border-radius: 10px;
            & a {
              display: block;
              background: #fff;
              color: #665d5d;
              text-decoration: none;
              padding: 0.8em 1.8em;
              text-transform: uppercase;
              font-size: 80%;
              letter-spacing: 2px;
              text-shadow: 0 -1px 0 #000;
              position: relative;
            }
            & li {
              position: relative;
            }
          }
          .navigation-menu > li {
            float: left;
            border-bottom: 6px #aaac solid;
            margin-right: 1px;
            & > a {
              margin-bottom: 1px;
              box-shadow: inset 0 1.5em 0.33em -0.3em #fcf8f8;
            }
          }
          /* NavMenu */
          .navigation-menu > li:hover,
          .navigation-menu > li:hover > a {
            border-bottom-color: rgb(221, 51, 193);
            transition: all 1s ease-out;
          }

          .navigation-menu li:hover > a {
            color: rgb(221, 51, 193);
            transition: all 1s ease-out;
            animation: menuPop 0.2s linear;
          }

          .navigation-menu > li:first-child {
            border-radius: 4px 0 0 4px;
            & > a {
              border-radius: 4px 0 0 0;
            }
          }

          .navigation-menu > li:last-child {
            border-radius: 0 0 4px 0;
            margin-right: 0;
            & > a {
              border-radius: 0 4px 0 0;
            }
          }

          .navigation-menu li li a {
            margin-top: 1px;
          }

          .navigation-menu li a:first-child:nth-last-child(2):before {
            content: "";
            position: absolute;
            height: 0;
            width: 0;
            border: 5px solid transparent;
            top: 50%;
            right: -1px;
            transition: all 0.25s ease-out;
          }

          /* NavSubmenu */
          .navigation-menu ul {
            position: absolute;
            white-space: nowrap;
            border-bottom: 1px rgb(221, 51, 193) solid;
            z-index: 1;
            left: -99999em;
            transition: all 0.25s ease-out;
          }
          .navigation-menu > li:focus-within > ul {
            display: none;
            left: auto;
            padding-top: 5px;
            min-width: 100%;
          }
          .navigation-menu > li:hover > ul {
            display: block;
            left: auto;
            padding-top: 5px;
            min-width: 100%;
          }
          .navigation-menu > li li ul {
            border-left: 1px solid #fff;
            margin-left: 1px;
            transition: all 0.25s ease-out;
          }
          .navigation-menu > li li:hover > ul {
            left: 100%;
            top: -1px;
          }

          /* NavCaret */
          .navigation-menu
            > li.active-colors
            > a:first-child:nth-last-child(2):before {
            border-top-color: rgb(221, 51, 193);
          }
          .navigation-menu > li > a:first-child:nth-last-child(2):before {
            border-top-color: #aaa;
          }
          .navigation-menu > li:hover > a:first-child:nth-last-child(2):before {
            border: 5px solid transparent;
            margin-top: -5px;
            border-bottom-color: rgb(221, 51, 193);
          }
          .navigation-menu li li > a:first-child:nth-last-child(2):before {
            border-left-color: #aaa;
            margin-top: -5px;
          }
          .navigation-menu
            li
            li:hover
            > a:first-child:nth-last-child(2):before {
            border: 5px solid transparent;
            right: 10px;
            border-right-color: rgb(221, 51, 193);
          }

          @keyframes menuPop {
            0% {
              transform: translateY(3px) rotateY(30deg);
              opacity: 0.5;
            }
            100% {
              transform: translateY(0px) rotateY(0deg);
              opacity: 1;
            }
          }

          @keyframes shake {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(0.5deg);
            }
            50% {
              transform: rotate(0eg);
            }
            75% {
              transform: rotate(-0.5deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .nav-home {
            display: block;
          }
          /* reponsive */
          @media screen and (max-width: 991px) {
            .navigation-menu ul {
              display: block;
              position: absolute;
              white-space: nowrap;
              border-bottom: 1px rgb(221, 51, 193) solid;
              z-index: 1;
              left: -99999em;
              transition: all 0.25s ease-out;
            }
            .nav-home {
              display: none;
            }
            .navigation-menu > li:hover > ul {
              display: none;
            }
            .navigation-menu > li:focus-within > ul {
              display: block;
              left: auto;
              padding-top: 5px;
              min-width: 100%;
            }
          }

          @media screen and (max-width: 426px) {
          }
        `}
      </style>
    </>
  );
};
