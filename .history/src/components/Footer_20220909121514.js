import React from "react";

export const Footer = () => {
  return (
    <div>
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
          <ul className="flex gap-[62px] top-[18px] left-[150px] absolute">
            <li>Contact Us</li>
            <li>Sustainability</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
