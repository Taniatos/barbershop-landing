import React from "react";
import "./App.css";
import "./WhyUs.css";
export default function WhyUs() {
  return (
    <div className="WhyUs-style">
      <h2>Why Us?</h2>
      <section>
        <div class="container text-center">
          <div class="row row-why-us">
            <div class="col-md col-why-us ">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/081/original/why-us-1.png?1686951023"
                alt="Barbershop Instruments"
                className="why-us-photo"
                title="Barbershop Photo"
              />
              <p className="whyUs-photo-description">
                We exclusively utilize top-notch equipment in our barbershop
              </p>
            </div>
            <div class="col-md col-why-us ">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/078/original/why-us-2.png?1686950491"
                alt="Working Process"
                className="why-us-photo"
                title="Barbershop Photo"
              />
              <p className="whyUs-photo-description">
                Our barbers consistently learn new skills and stay updated with
                the latest trends
              </p>
            </div>
          </div>
          <div class="row row-why-us">
            <div class="col-md col-why-us ">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/079/original/why-us-3.png?1686950529"
                alt="Subway"
                className="why-us-photo"
                title="Barbershop Photo"
              />
              <p className="whyUs-photo-description">
                ApolloCuts is conveniently located in close proximity to the
                subway
              </p>
            </div>
            <div class="col-md col-why-us ">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/080/original/why-us-4.png?1686950553"
                alt="Barbershop Instruments"
                className="why-us-photo"
                title="Barbershop Ambience"
              />
              <p className="whyUs-photo-description">
                Our unique ambiance is an unforgettable experience you'll
                cherish
              </p>
            </div>
          </div>
          <p className="spotify-line">
            Why don’t you dive into our atmosphere right now?<br/> Here’s the music
            we listen to in ApolloCuts. Enjoy!
          </p>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EIhOOrYEwxtia?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allowfullscreen=""
            title="Spotify"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
