import React from "react";
import "./App.css";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="Gallery-style">
      <h2>Photo Gallery</h2>
      <section>
        <div class="container text-center">
          <div class="row">
            <div class="col-md">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/409/original/gallery-1.png?1687224579"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/412/original/gallery-2.png?1687225192"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
            <div class="col-md-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/413/original/gallery-3.png?1687225228"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
            <div class="col-md-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/414/original/gallery-4.png?1687225248"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/415/original/gallery-5.png?1687225355"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/416/original/gallery-6.png?1687225429"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
            <div class="col-md-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/417/original/gallery-7.png?1687225445"
                alt="Barbershop"
                className="gallery-photo"
                title="Barbershop Photo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
