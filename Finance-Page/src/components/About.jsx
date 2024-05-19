import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/svg-1.svg";
import image2 from "../images/svg-2.svg";
import image3 from "../images/svg-3.svg";
import image4 from "../images/svg-4.svg";

function About() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="cards-info">
            <h4>PREMIUM BANK</h4>
            <div className="information">
              <h1>
                Unlimited <br /> Transactions with <br /> zero fees
              </h1>
              <p>
                Get access to our exclusive app that allows you to send
                unlimited transactions without getting charged any fees.
              </p>
              <button>
                <Link to="/services">Learn More</Link>
              </button>
            </div>
          </div>
          <div className="card-image">
            <img src={image1} alt="image1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
