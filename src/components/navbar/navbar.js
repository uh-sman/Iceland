import React from "react";
import "./navbar.css";
import down from "../assets/down-arrow 3.png";
import search from "../assets/Vector-man.png";
import user from "../assets/user-acct.png";
import menu from "../assets/Menu.png";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-nav">
          <main className="top-nav-content">
            <ul className="top-nav-list">
              <li className="navs">
                USD <img src={down} />
              </li>
              <li className="navs">
                ENGLISH <img src={down} />
              </li>
              <li>CART</li>
            </ul>
          </main>
          <subnav className="bottom-nav-content">
            <ul className="bottom-nav-list">
              <li className="nav">Book your trip</li>
              <li className="nav">Rent a car</li>
              <li className="nav">Wifi rental</li>
            </ul>
          </subnav>
        </div>
        <div className="menu-main">
          <div>
            <h1 className="menu-text">In Iceland</h1>
          </div>
          <div>
            <ul className="menus">
              <li>
                <img src={user} />
              </li>
              <li>
                <img src={search} />
              </li>
              <li>
                <img src={menu} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
