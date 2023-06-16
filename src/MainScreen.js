import React from "react";
import "./App.css";
import "./MainPage.css";

export default function MainScreen() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a
            className="nav-link"
            aria-current="page"
            href="#main-screen"
            title="Home"
          >
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/923/original/logo.png?1686855841"
              alt="logo"
              className="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav all-options">
              <a
                className="nav-link menu-style"
                aria-current="page"
                href="#about-us-section"
                title="About Us"
              >
                About us
              </a>
              <a
                className="nav-link menu-style"
                href="#why-us-section"
                title="Why us?"
              >
                Why us?
              </a>
              <a
                className="nav-link menu-style"
                href="#services-section"
                title="Services & Prices"
              >
                Services & Prices
              </a>
              <a
                className="nav-link menu-style"
                href="#gallery-section"
                title="Photo Gallery"
              >
                Gallery
              </a>
              <a
                className="nav-link menu-style"
                href="#reviews-section"
                title="Reviews"
              >
                Reviews
              </a>
              <a
                className="nav-link menu-style"
                href="#address-section"
                title="Location and working Hours"
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="home">
        <h1>ApolloCuts</h1>
        <p>
          Unleash and elevate your divine style with our modern grooming
          techniques. Join us on a stylish journey to discover your inner deity!
        </p>
        <button>Book an appointment</button>
      </section>
    </div>
  );
}
