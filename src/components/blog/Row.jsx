import React from "react";
import { blog } from "../utils/data";
import { rental } from "../utils/data";
import "./row.css";
export const Row = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-container">
          {rental ? (
            rental.map(({ text, id, image, title, links }) => {
              return (
                <div key={id} className="card-content">
                  <div>
                    <img src={image} className="cars-image" />
                    <div className="card-items">
                      <h2 className="header-text">{title}</h2>
                      <p className="text">{text}</p>
                      <a className="link">{links}</a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No cars available at the moment</h1>
          )}
        </div>
      </div>
    </div>
  );
};
