import React from "react";
import adventure from "../Assets/adventure-makes-things-meaningful_t20_Vo0aX3 1.png";
export const Newsletter = () => {
  return (
    <div>
      <div className="container">
        <img
          src={adventure}
          className="absolute w-[1440px] h-[714px] left-[3px]
          top-[772px]"
        />
        <div className="container">
          <h1 className="text-[45px] font-[600px] absolute top-[990px] left-[560px] text-white">
            Join our newsletter
          </h1>
        </div>
        <div>
          <div className="absolute top-[1100px]">
            <input placeholder="EMAIL ADDRESS" type="email" />
            <button className="custom">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
