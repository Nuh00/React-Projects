import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mx-auto  h-screen w-full  text-center flex flex-col gap-2 justify-center">
        <p className="text-mint-green font-extrabold">
          GROWING WITH DATA ANALYTICS{" "}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-sans font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold text-gray-500"
            strings={[" BTB", " BTC", " SASS"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="p-4 bg-mint-green w-[200px] mx-auto rounded-xl my-6  text-black hover:text-white transition-all ease-in-out  ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
