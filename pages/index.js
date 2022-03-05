import React from "react";
import About from "../components/home/About.jsx";
import Footer from "../components/home/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import PoweredBy from "../components/home/PoweredBy.jsx";
import Navbar from "../components/Navbar.jsx";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PoweredBy />
      <Footer />
    </>
  );
}

export default index;
