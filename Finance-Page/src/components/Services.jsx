import React from "react";
import image1 from "../images/svg-1.svg";
import image2 from "../images/svg-2.svg";
import image3 from "../images/svg-3.svg";
import image4 from "../images/svg-4.svg";
import image5 from "../images/svg-5.svg";
import image6 from "../images/svg-6.svg";
import "./services.css";

function Services() {
  return (
    <>
      <div className="wrapper-services" id="services">
        <div className="container-services">
          <div className="header-services">
            <h1>Our Services</h1>
          </div>
          <div className="all-cards">
            <div className="card">
              <div className="cards-image">
                <img src={image5} alt="image1" />
              </div>
              <div className="card-information">
                <h4>Reduce Expenses</h4>
                <p>
                  We help reduce your fees <br /> and increase your overall{" "}
                  <br />
                  revenue.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cards-image">
                <img src={image4} alt="image1" />
              </div>
              <div className="card-information">
                <h4>Reduce Expenses</h4>
                <p>
                  We help reduce your fees <br /> and increase your overall{" "}
                  <br />
                  revenue.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cards-image">
                <img src={image6} alt="image1" />
              </div>
              <div className="card-information">
                <h4>Reduce Expenses</h4>
                <p>
                  We help reduce your fees <br /> and increase your overall{" "}
                  <br />
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
