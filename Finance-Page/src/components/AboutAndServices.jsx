import React from "react";
import "./aboutAndservices.css";
import { Link } from "react-router-dom";
import image1 from "../images/svg-1.svg";
import image2 from "../images/svg-2.svg";
import image3 from "../images/svg-3.svg";
import image4 from "../images/svg-4.svg";

function AboutAndServices() {
  return (
    <>
      <div className="wrapper">
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
      </div>
      <div className="wrapper light">
        <div className="two-column-container light">
          <div className="two-image-colum">
            <img src={image2} alt="phone" />
          </div>
          <div className="text-column">
            <h3>Unlimited Access</h3>
            <h2>Access your account anytime, anywhere</h2>
            <p>
              We have you covered no matter where you are. <br />
              All you need is an internet connection and a <br />
              phone or computer.
            </p>
            <div className="card-button">
              <Link to="/services" className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="three-column-container">
          <div className="card">
            <img src={image3} alt="phone" />
            <h3>Secure</h3>
            <p>
              We value your security and privacy. <br />
              Our app is encrypted to ensure that your <br />
              information is safe.
            </p>
          </div>
          <div className="card">
            <img src={image4} alt="phone" />
            <h3>Easy to Use</h3>
            <p>
              Our app is user-friendly and easy to navigate. <br />
              You can easily access your account and <br />
              send transactions in seconds.
            </p>
          </div>
          <div className="card">
            <img src={image1} alt="phone" />
            <h3>Fast</h3>
            <p>
              Send transactions in seconds. <br />
              No more waiting for your transactions to <br />
              process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutAndServices;
