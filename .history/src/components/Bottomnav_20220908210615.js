import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
export const Bottomnav = () => {
  return (
    <nav className="container w-full">
      <div className="py-[31px]">
        <div className="container">
          <h1 className="flex items-center">
            <FaLongArrowAltLeft />
            <a className=" cursor-pointer font-semibold text-md">GO BACK</a>
          </h1>
        </div>
        <div className="container">
          <div className="absolute right-[156px]">
            <ul className="space-x-[60px] text-sm font-semibold cursor-pointer">
              <a>BOOK YOUR TRIP</a>
              <a>RENT A CAR</a>
              <a>WIFI RENTAL</a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
