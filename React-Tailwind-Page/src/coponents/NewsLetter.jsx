import React from "react";

function NewsLetter() {
  return (
    <div className="w-full bg-[#000300] py-24 px-4 text-white ">
      <div className="max-w-[1240px] mx-auto  flex flex-col justify-between items-center text-center  md:flex-row md:text-start ">
        <div className="p-4">
          <h1 className="sm:text-2xl text-xl font-extrabold md:text-3xl mb-1">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="">Sign up for our newsletter to stay up to date.</p>
        </div>

        <div className="p-4 w-[500px] md:flex md:flex-col md:items-start flex flex-col items-center  ">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-md px-3 py-2 text-center"
            />
            <button className="w-[150px] bg-mint-green rounded-md text-black hover:text-white ease-in-out duration-500 ">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our <br />
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
