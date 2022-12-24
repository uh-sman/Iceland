import React from "react";
import { FaTripadvisor, FaYoutube } from "react-icons/fa";
import { footer } from "../utils/data";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-div">
          {footer ? (
            footer.map(({ id, title, subtitle }) => {
              return (
                <div key={id} className="footer-list">
                  <ul className="footer-li">
                    <li>{title}</li>
                  </ul>
                  <ul className="contact-list">
                    <li>{subtitle}</li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div>data</div>
          )}
        </div>
        <div className="selects">
          <div className="">
            <select className="select">
              <option className="option">
                <a>ENGLISH</a>
              </option>
            </select>
          </div>
          <div className="">
            <select className="select">
              <option className="option">USD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
