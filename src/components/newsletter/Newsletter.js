import React from "react";
import "./newsletter.css";
// import adventure from "../Assets/adventure-makes-things-meaningful_t20_Vo0aX3 1.png";
export const Newsletter = () => {
  return (
    <div className="">
      <div className="image">
        {/* <img
          
          src={adventure}
          className="image"
        /> */}
        <div className="news-letter">
          <div className="header-div">
            <h1 className="header">Join our newsletter</h1>
          </div>
          <div>
            <div className="subscribe-form">
              <input
                placeholder="EMAIL ADDRESS"
                type="email"
                className="search"
              />
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
