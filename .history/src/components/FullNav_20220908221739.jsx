import React from "react";
import { Bottomnav } from "./Bottomnav";
import { Hero } from "./Hero";
import { Newsletter } from "./Newsletter";
import { Topnav } from "./Topnav";

export const FullNav = () => {
  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Hero />
      <div className="h-[51px]">
        <Newsletter />
      </div>
    </div>
  );
};
