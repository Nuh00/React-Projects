import React from "react";
import single from "../images/single.png";
import double from "../images/double.png";
import triple from "../images/triple.png";

function Cards() {
  return (
    <div className="w-full bg-white py-[5rem] md:py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 text-black gap-8 ">
        <div className="text-center flex flex-col gap-3 items-center justify-center shadow-xl rounded-lg p-4 h-[550px]">
          <img src={single} alt="" className="w-[100px] mx-auto" />
          <h2 className="text-l md:text-xl font-bold">Single User</h2>
          <h1 className="font-extrabold text-2xl md:text-4xl">$149</h1>
          <div className="w-full font-medium">
            <p className="py-2 border-b border-gray-500">500 GB Storage</p>
            <p className="py-2 border-b border-gray-500">2 Users Allowed</p>
            <p className="py-2 border-b border-gray-500">Send up to 3 GB</p>
          </div>
          <button className="bg-mint-green text-white p-4 rounded-xl mt-8 w-[200px]">
            Get Started
          </button>
        </div>
        <div className="text-center flex flex-col gap-3 items-center justify-center shadow-xl rounded-lg p-4 h-[600px]">
          <img src={double} alt="" className="w-[100px] mx-auto" />
          <h2 className="text-l md:text-xl font-bold">Partnership </h2>
          <h1 className="font-extrabold text-2xl md:text-4xl">$199</h1>
          <div className="w-full font-medium">
            <p className="py-2 border-b border-gray-500">1 TB Storage</p>
            <p className="py-2 border-b border-gray-500">3 Users Allowed</p>
            <p className="py-2 border-b border-gray-500">Send up to 10 GB</p>
          </div>
          <button className="bg-mint-green text-white p-4 rounded-xl mt-8 w-[200px]">
            Get Started
          </button>
        </div>
        <div className="text-center flex flex-col gap-3 items-center justify-center shadow-xl rounded-lg p-4 h-[550px]">
          <img src={triple} alt="" className="w-[100px] mx-auto" />
          <h2 className="text-l md:text-xl font-bold">Group Account</h2>
          <h1 className="font-extrabold text-2xl md:text-4xl">$299</h1>
          <div className="w-full font-medium">
            <p className="py-2 border-b border-gray-500">5 TB Storage</p>
            <p className="py-2 border-b border-gray-500">10 Users Allowed</p>
            <p className="py-2 border-b border-gray-500">Send up to 20 GB</p>
          </div>
          <button className="bg-mint-green text-white p-4 rounded-xl mt-8 w-[200px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
