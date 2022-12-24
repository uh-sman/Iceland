import React from "react";
import four from "../Assets/404.png";
export const Hero = () => {
  return (
    <div>
      <div>
        <img src={four} className="absolute left-[364px] top-[146px]" />
      </div>
      <div>
        <h1>Lost in Iceland?</h1>
      </div>
    </div>
  );
};
