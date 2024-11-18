import React from "react";
import Screenshot from "/assets/iphone16.png";

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className="relative w-5/6 h-5/6 lg:w-2/6 lg:h-2/6">
      <img src={Screenshot} alt="Game Screenshot" className="relative z-10" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2a549a] rounded-full filter blur-3xl opacity-30  z-0"></div>
      <div className="absolute bottom-10  right-20 rotate-12 w-80 h-24 bg-[#2a549a] rounded-full filter blur-3xl opacity-100  z-0"></div>
    </div>
  );
}
