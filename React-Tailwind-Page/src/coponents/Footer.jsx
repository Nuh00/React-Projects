import React from "react";

function Footer() {
  return (
    <div className="max-w-[1240px] bg-[#0003000] py-16 px-4 mx-auto grid lg:grid-cols-3 ">
      <div>
        <h1 className="  text-3xl font-bold text-mint-green"> Flow. </h1>
        <p className="text-white py-4">
          We care about the protection of your data. Read our <br />
          <span>Privacy Policy</span>
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <i className="fab fa-facebook-f text-white p-2 bg-gray"></i>
          <i className="fab fa-twitter text-white p-2 bg-gray"></i>
          <i className="fab fa-instagram text-white p-2 bg-gray"></i>
          <i className="fab fa-github text-white p-2 bg-gray"></i>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between ">
        <div>
          <h1 className="text-gray-500 text-xl font-bold">Company</h1>
          <ul className="text-white py-4">
            <li className="py-2">Home</li>
            <li className="py-2">Company</li>
            <li className="py-2">Resources</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-gray-500 text-xl font-bold">Company</h1>
          <ul className="text-white py-4">
            <li className="py-2">Home</li>
            <li className="py-2">Company</li>
            <li className="py-2">Resources</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-gray-500 text-xl font-bold">Company</h1>
          <ul className="text-white py-4">
            <li className="py-2">Home</li>
            <li className="py-2">Company</li>
            <li className="py-2">Resources</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-gray-500 text-xl font-bold">Company</h1>
          <ul className="text-white py-4">
            <li className="py-2">Home</li>
            <li className="py-2">Company</li>
            <li className="py-2">Resources</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
