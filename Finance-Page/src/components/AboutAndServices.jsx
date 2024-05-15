import React from "react";
import "./aboutAndservices.css";
import { Link } from "react-router-dom";
import image1 from "../images/svg-1.svg";
import image2 from "../images/svg-2.svg";
import image3 from "../images/svg-3.svg";
import image4 from "../images/svg-4.svg";

function AboutAndServices() {
  return (
    <div className="two-column-container">
      <div className="text-column">
        <h3>Premium</h3>
        <h2>Unlimited Transactions with zero fees</h2>
        <p>
          Get access to our exclusive app that allows you <br />
          to send unlimited transactions without getting <br />
          charged any fees.
        </p>
        <div className="card-button">
            <Link to="/services" className="btn">
                Learn More
            </Link>
        </div>
      </div>
      <div className="two-image-colum">
        <img src={image1} alt="phone" />
      </div>
    </div>
  );
}

export default AboutAndServices;
