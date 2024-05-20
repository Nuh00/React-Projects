import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import image1 from "../images/svg-1.svg";
import image2 from "../images/svg-2.svg";
import image3 from "../images/svg-3.svg";
import image4 from "../images/svg-4.svg";
import image5 from "../images/svg-5.svg";
import image6 from "../images/svg-6.svg";

function SignUp() {
  return (
    <>
      <div className="wrapper-light" id="signUp">
        <div className="container">
          <div className="cards-info">
            <h4>JOIN OUR TEAM</h4>
            <div className="information">
              <h1>
                Creating an <br /> account is <br /> extremely easy
              </h1>
              <p>
                Get access to our exclusive app that allows you to send
                unlimited transactions without getting charged any fees.
              </p>
              <Link to="./services">
                <button className="signUp-button">Start Now</button>
              </Link>
            </div>
          </div>
          <div className="card-image">
            <img src={image3} alt="image1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
