import React from "react";
import "./App.css";
import MainScreen from "./MainScreen";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Form from "./Form";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Location from "./Location";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="main-screen" id="main-screen">
        <MainScreen />
      </div>
      <div className="about-us-section" id="about-us-section">
        <AboutUs />
      </div>
      <div className="why-us-section" id="why-us-section">
        <WhyUs />
      </div>
      <div className="services-section" id="services-section">
        <Services />
      </div>
      <div className="form-section" id="form-section">
        <Form />
      </div>
      <div className="gallery-section" id="gallery-section">
        <Gallery />
      </div>
      <div className="reviews-section" id="reviews-section">
        <Reviews />
      </div>
      <div className="address-section" id="address-section">
        <Location />
      </div>
      <div className="footer-section" id="footer-section">
        <Footer />
      </div>
    </div>
  );
}
