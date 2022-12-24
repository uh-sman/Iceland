import React from "react";
import four from "../Assets/404.png";
export const Hero = () => {
  return (
    <div>
      <div>
        <img src={four} className="absolute left-[364px] top-[232px]" />
      </div>
      <div>
        <h1 className="font-semibold text-5xl absolute left-[151px] top-[141px]">
          Lost in Iceland?
        </h1>
      </div>
    </div>
  );
};