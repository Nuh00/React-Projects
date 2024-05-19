import React from "react";
import Herosection from "../components/Herosection";
import About from "../components/About";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import Discover from "../components/Discover";

function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Discover />
      <Services />
      <SignUp />
      <Footer />
    </>
  );
}

export default Home;
