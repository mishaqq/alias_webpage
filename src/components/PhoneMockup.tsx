import React from "react";
import Screenshot from "/assets/screenshot.png";
export function PhoneMockup() {
  return (
    <div className="flex-1 relative">
      <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-[14px] border-gray-800 shadow-2xl transform rotate-12">
        <img
          src={Screenshot}
          alt="Game Screenshot"
          className="h-full w-full object-cover rounded-[2rem]"
        />
      </div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2a549a] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#2a549a] rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
}
