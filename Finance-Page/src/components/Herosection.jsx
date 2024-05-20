import React from "react";
import "./herosection.css";
import video from "../videos/video.mp4";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div className="hero-container" id="hero">
      <video src={video} autoPlay loop muted />
      <h1>Virtual Banking - The New Era</h1>
      <p>
        Sign up for a new account today and receive $250 <br /> in credit
        towards you next payment
      </p>
      <div className="hero-btn">
        <Link to="/sign-up">
          <button className="btn-hero">
            Get Started <i className="fas fa-chevron-right default-arrow"></i>
            <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Herosection;
