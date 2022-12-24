import React from "react";
import { blog } from "../utils/data";
import { rental } from "../utils/data";
import "./row.css";
export const Blog = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-container">
          {blog ? (
            blog.map(({ text, id, image, title, links }) => {
              return (
                <div key={id} className="card-content">
                  <div>
                    <img src={image} className="blog-image" />
                    <div className="blog-items">
                      <h2 className="header-text">{title}</h2>
                      <p className="text">{text}</p>
                      <a className="blog-link">{links}</a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No cars available at the moment</h1>
          )}
        </div>
      </div>
    </div>
  );
};
