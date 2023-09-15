import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="container footer-box">
        <div class="row">
          <div class="col-md-4 logo-box">
            <a href="#main-screen">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/923/original/logo.png?1686855841"
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <div class="col-md-4 text-center footer-buttons-box">
            <div className="footer-btn-one">
              <a
                href="#form-section"
                title="Booking Button"
                className="button-one-footer"
              >
                Book an appointment
              </a>
            </div>
            <div className="footer-btn-two">
              <a
                href="#form-section"
                title="Booking Button"
                className="button-two-footer"
              >
                Ask for a callback
              </a>
            </div>
          </div>
          <div class="col-md-4 text-center footer-menu-box">
            <ul>
              <li>
                <a
                  className="footer-menu"
                  href="#about-us-section"
                  title="About Us"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="footer-menu"
                  href="#services-section"
                  title="Services & Prices"
                >
                  Services & Prices
                </a>
              </li>
              <li>
                <a
                  className="footer-menu"
                  href="#gallery-section"
                  title="Photo Gallery"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  className="footer-menu"
                  href="#reviews-section"
                  title="Reviews"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center built-by">
        This landing page was{" "}
        <a
          href="https://www.behance.net/gallery/180087673/BarberShop-Landing-Page-UIUX-Design"
          className="design-link"
          target="_blank"
          rel="noreferrer"
        >
          designed
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/Taniatos"
          className="github-link"
          target="_blank"
          rel="noreferrer"
        >
          built
        </a>{" "}
        by Tetiana Korchynska
      </p>
    </footer>
  );
}
