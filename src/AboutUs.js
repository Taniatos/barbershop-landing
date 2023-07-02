import React from "react";
import "./App.css";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="AboutUs-style">
      <h2>About Us</h2>
      <section>
        <div class="container text-center description-grid">
          <div class="row row-about-us">
            <div class="col-md col-about-us">
              <p className="about-paragraph">
                Welcome to ApolloCuts, Kyiv's premier barbershop, where modern
                style meets exceptional grooming services. Our highly skilled
                team of barbers is dedicated to providing tailored haircuts,
                precise shaves, and grooming services that reflect your
                individuality, using only the finest quality products and
                cutting-edge techniques.
              </p>
            </div>
            <div class="col-md col-about-us">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/027/original/about-us-1.png?1686926000"
                alt="Barbershop Instruments"
                className="about-us-photo about-us-photo-one"
                title="Barbershop Photo"
              />
            </div>
          </div>
          <div class="row row-about-us">
            <div class="col-md col-about-us">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/029/original/about-us-2.png?1686926178"
                alt="Barbershop Interior"
                className="about-us-photo about-us-photo-two"
                title="Barbershop Photo"
              />
            </div>
            <div class="col-md col-about-us">
              <p className="about-paragraph about-paragraph-two">
                Located in the heart of Kyiv, ApolloCuts is a sanctuary where
                men can discover a perfect blend of tradition, innovation, and
                sophistication. With a strong commitment to exceptional service
                and attention to detail, we strive to exceed your expectations
                and ensure that every visit to our barbershop is an exceptional
                experience.
              </p>
            </div>
          </div>
        </div>
        <div class="container text-center advantages-grid">
          <div class="row row-about-us">
            <div class="col-md advantage-box">
              <p className="advantage-numbers">7</p>
              <p className="advantage-text">years of experience</p>
            </div>
            <div class="col-md advantage-box">
              <p className="advantage-numbers">23</p>
              <p className="advantage-text">professional barbers</p>
            </div>
            <div class="col-md advantage-box">
              <p className="advantage-numbers">
                15<span className="small-k">k+</span>
              </p>
              <p className="advantage-text">of highly satisfied clients</p>
            </div>
            <div class="col-md advantage-box">
              <p className="advantage-numbers">3</p>
              <p className="advantage-text">convenient locations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
