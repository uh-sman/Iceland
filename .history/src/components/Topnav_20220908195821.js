import React from "react";

export const Topnav = () => {
  return (
    <div className="container w-full py-[70px]">
      <nav className="absolute right-[80px]">
        <ul className="space-x-20">
          <a href="">USD</a>
          <a href="">ENGLISH</a>
          <a href="">CART</a>
        </ul>
      </nav>
    </div>
  );
};
