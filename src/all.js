import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { Cards } from "./components/blog/Cards";
import { Body } from "./Body";
import { Mainfooter } from "./components/footer/Mainfooter";
import { CarouselSection } from "./components/blog/CarouselSection";
import { Popular } from "./components/blog/Popular";
import { Footer } from "./components/footer/Footer";
import Hero from "./components/hero/hero";
export const All = () => {
  return (
    <div>
      {/* <Navbar/>
<Topnav/> */}
      <div style={{ backgroundColor: "#F3F6FA", height: "contain" }}>
        <Navbar />
        <Hero />
      </div>
      <Popular />
      <CarouselSection />
      <Cards />
      <Mainfooter />
    </div>
  );
};
