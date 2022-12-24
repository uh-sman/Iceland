import React from "react";
import adventure from "../Assets/adventure-makes-things-meaningful_t20_Vo0aX3 1.png";
export const Newsletter = () => {
  return (
    <div>
      <div className="container">
        <img
          // w-[1440px]
          src={adventure}
          className="absolute h-[714px] left-[3px]
          top-[772px]"
        />
        <div className="container">
          <h1 className="text-[45px] font-[600px] absolute top-[990px] left-[560px] text-white">
            Join our newsletter
          </h1>
        </div>
        <div className="container w-full">
          <div className="absolute top-[1110px] w-[499px] h-[57px] left-[502px] box-border">
            <input
              placeholder="EMAIL ADDRESS"
              type="email"
              className="search"
            />
            <button className="button text-white">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
