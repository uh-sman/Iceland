import React from "react";

export const Bottomnav = () => {
  return (
    <nav className="container w-full">
      <div className="py-[31px]">
        <div className="container">
          <h1>
            <a className="absolute left-[192px] cursor-pointer font-semibold text-md">
              GO BACK
            </a>
          </h1>
        </div>
        <div className="container">
          <div className="absolute right-[156px]">
            <ul className="space-x-[76px] text-sm font-semibold cursor-pointer">
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
