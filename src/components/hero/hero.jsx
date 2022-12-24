import React, { useState } from "react";
import { buttonlist } from "../utils/data";
import { NavLink } from "react-router-dom";
import "./hero.css";
import { Calender } from "./calender";
import heroImage from "../assets/Grouplight.png";
const Hero = () => {
  const [active, setActive] = useState(false);

  // const btnContainer = document.getElementById("mybutton");
  // const btns = btnContainer.getElementsByClassName("btn");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     let current = document.getElementsByClassName("active");
  //     if (current.length > 0) {
  //       current[0].className = current[0].className.replace("active", "");
  //     }
  //     this.className += "active";
  //   });
  // }

  return (
    <div>
      <div>
        <hero className="hero-container">
          <div className="iceland">
            <div id="mybutton" className="button-content">
              <header className="header-class">
                <h1 className="adventure-text">
                  <span>Your adventure</span>
                  <span className="adventure-colored"> in Iceland</span>
                </h1>
              </header>
              <ul className="button-list">
                <NavLink className="btn ">
                  <a>TOURS</a>
                </NavLink>
                <NavLink className="btn">
                  <a>RENT CAR</a>
                </NavLink>
                <NavLink className="btn ">
                  <a>WIFI RENTAL</a>
                </NavLink>
              </ul>
              <div className="drop-menu">
                <div className="small-background">
                  <div className="submenu-container">
                    <ul className="submenu-items">
                      <div className="first-list">
                        <li className="btn-dropdown">ARRIVAL</li>
                        <li className="btn-dropdown">DEPARTURE</li>
                      </div>

                      <div className="first-list">
                        <li
                          className="btn-dropdown"
                          onClick={(e) => setActive(!active)}
                        >
                          PASSENGERS
                        </li>
                        <li className="btn-dropdown">CATEGORY</li>
                      </div>
                      <div>{active ? <Calender /> : <div></div>}</div>

                      <div className="search-button">
                        <li className="search-btn">SEARCH</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img src={heroImage} />
          </div>
        </hero>
      </div>
    </div>
  );
};

export default Hero;

// {
//   buttonlist &&
//     buttonlist.map(({ title, id }) => {
//       return (
//         <ul key={id} className="button-list">
//           <li className="btn active">{title}</li>
//         </ul>
//       );
//     });
// }
