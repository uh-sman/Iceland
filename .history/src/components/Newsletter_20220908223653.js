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
        <div>
          <h1>Join our newsletter</h1>
        </div>
      </div>
    </div>
  );
};
