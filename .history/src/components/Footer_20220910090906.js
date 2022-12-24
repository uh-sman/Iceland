import React from "react";
import { FaTripadvisor, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="text-[#5B6780] font-[500px] text-[15px]">
      <div className="absolute w-[1440px] h-[408px] left-[3px] top-[1717px] you">
        <div>
          <ul className="flex gap-[62px] left-[150px] absolute">
            <li>About us</li>
            <li>Cancellation policy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </div>
      <div className="absolute w-[1440px] h-[408px] left-[3px] top-[1717px] you">
        <div>
          <ul className="flex space-x-[80px] top-[60px] left-[150px] absolute">
            <li>Contact Us</li>
            <li className="">Sustainability</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
      <div className="absolute w-[1440px] h-[408px] left-[3px] top-[1717px] you">
        <div>
          <ul className="flex space-x-[80px] top-[275px] left-[150px] absolute">
            <li>info@iceland.is</li>
            <li>+354 440 4000</li>
            <li>Kalkofnsvegur 2, 101 Reykjavík</li>
          </ul>
        </div>
      </div>
      <div className="absolute left-[1038px] top-[1620px] box-border">
        <select className="px-[85px] py-3">
          <option>ENGLISH</option>
        </select>
      </div>
      <div className="absolute left-[1038px] top-[1689px] box-border">
        <select className="px-[100px] py-3">
          <option>USD</option>
        </select>
      </div>
    </div>
  );
};
