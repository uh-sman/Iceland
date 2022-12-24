import React from "react";

export const Topnav = () => {
  return (
    <div className="container w-full py-[30px]">
      <nav className="absolute right-[100px]">
        <ul className="space-x-20 text-sm">
          <a href="">USD</a>
          <a href="">ENGLISH</a>
          <a href="">CART</a>
        </ul>
      </nav>
    </div>
  );
};
