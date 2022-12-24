import React from "react";
import four from "../Assets/404.png";
import img from "../Assets/404 background 1.png";
export const Hero = () => {
  return (
    <div>
      <div className="container">
        <img
          src={four}
          className="absolute left-[363px] top-[146px] h-[221px] w-[323px]"
        />
      </div>
      <div className="container inset-3">
        <h1 className="font-semibold text-[40px] absolute left-[197px] top-[232px] tracking-tight">
          Lost in Iceland?
        </h1>
      </div>
      <div className="container">
        <img src={img} />
      </div>
    </div>
  );
};
