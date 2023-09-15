import React from "react";
import "./../../App.css";
import MainScreen from "../MainScreen/MainScreen";
import AboutUs from "../AboutUs/AboutUs";
import WhyUs from "../WhyUs/WhyUs";
import Services from "../Services/Services";
import Form from "../Form/Form";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";

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
