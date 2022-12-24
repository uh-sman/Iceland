import React from "react";
import { Bottomnav } from "./Bottomnav";
import { Hero } from "./Hero";
import { Topnav } from "./Topnav";

export const FullNav = () => {
  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Hero />
    </div>
  );
};
