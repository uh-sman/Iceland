import React from "react";
import four from "../Assets/404.png";
export const Hero = () => {
  return (
    <div>
      <div>
        <img
          src={four}
          className="absolute left-[363px] top-[146px] h-[221px] w-[323px]"
        />
      </div>
      <div>
        <h1 className="font-semibold text-5xl absolute left-[153px] top-[232px]">
          Lost in Iceland?
        </h1>
      </div>
    </div>
  );
};
