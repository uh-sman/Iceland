import React from "react";
import { cards } from "../utils/data";
import "./carousel.css";
import rightArrow from "../assets/Group.png";
import arrow from "../assets/right-arrow.png";
export const CarouselSection = () => {
  return (
    <div className="carousel-container">
      <div>
        <div className="headerss">
          <h1 className="things-to-do">Things to do</h1>
          <a className="links">
            VIEW ALL <img src={arrow} />
          </a>
        </div>
        <div>
          <div className="background"></div>
          <div className="carousel-container">
            {cards ? (
              cards.map(({ id, image }) => {
                return (
                  <div key={id}>
                    <img src={image} />
                  </div>
                );
              })
            ) : (
              <h1>No slides available for now</h1>
            )}
          </div>
          <div className="right-arrow">
            <div className="arrow-container">
              <img src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
