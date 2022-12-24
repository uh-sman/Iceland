import React from "react";
import { Row } from "./Row";
import { Blog } from "./Blog";
import "./row.css";
import arrow from "../assets/right-arrow.png";
// const slideLeft = () => {
//   var slider = document.getElementById("slider" + rowId);
//   slider.scrollLeft = slider.scrollLeft - 500;
// };
// const slideRight = () => {
//   var slider = document.getElementById("slider" + rowId);
//   slider.scrollLeft = slider.scrollLeft + 500;
// };
export const Cards = () => {
  return (
    <div>
      <div>
        <div className="ROW">
          <div className="rectangle"></div>
          <div className="headers">
            <h1 className="rental">Rental cars</h1>
          </div>
          <Row title={"rentals"} />
        </div>
        <div className="ROW">
          <div className="rectangle"></div>
          <div className="headers">
            <h1 className="blog">Our blog</h1>
            <a className="link">
              VIEW ALL <img src={arrow} />
            </a>
          </div>

          <Blog />
        </div>

        {/* <Row title={"our blog"} /> */}
      </div>
    </div>
  );
};
