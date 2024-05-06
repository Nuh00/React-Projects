import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Development from "./components/pages/Development";
import Design from "./components/pages/Design";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Contact from "./components/pages/Contact";
import Signup from "./components/pages/Signup";
import Product from "./components/pages/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/development" element={<Development />} />
        <Route path="/design" element={<Design />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
    </Router>
  );
}

export default App;
