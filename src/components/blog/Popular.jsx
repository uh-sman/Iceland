import React from "react";
import "./row.css";
import arrow from "../assets/right-arrow.png";
import Tours from "./Tours";
export const Popular = () => {
  return (
    <div>
      <div>
        <div className="headers">
          <h1 className="blog">Popular Tours</h1>
          <a className="link">
            VIEW ALL <img src={arrow} />
          </a>
        </div>
        <cards>
          <Tours />
        </cards>
      </div>
    </div>
  );
};
