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

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="main-screen wrapper" id="main-screen">
        <MainScreen />
      </div>
      <div className="about-us-section wrapper" id="about-us-section">
        <AboutUs />
      </div>
      <div className="why-us-section wrapper" id="why-us-section">
        <WhyUs />
      </div>
      <div className="services-section wrapper" id="services-section">
        <Services />
      </div>
      <div className="form-section wrapper">
        <Form />
      </div>
      <div className="gallery-section wrapper" id="gallery-section">
        <Gallery />
      </div>
      <div className="reviews-section wrapper" id="reviews-section">
        <Reviews />
      </div>
      <div className="address-section wrapper" id="address-section">
        <Location />
      </div>
      <footer className="wrapper">Footer</footer>
    </div>
  );
}
