import React from "react";
import { Link } from "react-router-dom";
import image2 from "../images/svg-2.svg";

function Discover() {
  return (
    <>
      <div className="wrapper-light" id="discover">
        <div className="container">
          <div className="card-image">
            <img src={image2} alt="image1" />
          </div>
          <div className="cards-info">
            <h4>UNLIMITED ACCESS</h4>
            <div className="information">
              <h1>
                Login to your <br /> account at any <br /> time
              </h1>
              <p>
                We have you covered no matter where you are located. All you
                need is an internet connection and a phone or computer.
              </p>
              <Link to="./services">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
