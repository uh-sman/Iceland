import React from "react";
import four from "../Assets/404.png";
export const Hero = () => {
  return (
    <div>
      <div className="container">
        <img
          src={four}
          className="absolute left-[363px] top-[146px] h-[221px] "
        />
      </div>
      <div className="container">
        <h1 className="font-semibold text-5xl absolute left-[197px] top-[232px] tracking-tight">
          Lost in Iceland?
        </h1>
      </div>
    </div>
  );
};
