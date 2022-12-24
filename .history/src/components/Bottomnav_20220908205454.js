import React from "react";

export const Bottomnav = () => {
  return (
    <nav className="container w-full">
      <div className="py-[116px]">
        <div className="container">
          <h1>
            <a className="absolute left-[192px] cursor-pointer">GO BACK</a>
          </h1>
        </div>
        <div className="container">
          <div className="absolute right-[156px]">
            <ul className="space-x-[20px] text-sm">
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
