import React from "react";

export const Bottomnav = () => {
  return (
    <nav className="container w-full">
      <div>
        <div className="container">
          <h1>
            <a className="absolute left-[192px] cursor-pointer">GO BACK</a>
          </h1>
        </div>
        <div className="container">
          <div className="absolute right-[40px]">
            <ul className="">
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
