import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "./Reviews.css";

const images = [
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/729/original/review_1.png?1687473311",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/730/original/review_2.png?1687478003",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/731/original/review_3.png?1687478041",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/732/original/review_4.png?1687478056",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/733/original/review_5.png?1687478100",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/734/original/review_6.png?1687478118",
];

export default function Reviews() {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNextImage() {
    setCurrentImage(function (prevImage) {
      return (prevImage + 1) % images.length;
    });
  }

  function handlePrevImage() {
    setCurrentImage(function (prevImage) {
      return prevImage === 0 ? images.length - 1 : prevImage - 1;
    });
  }

  return (
    <div className="Reviews-style">
      <h2>Reviews</h2>
      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-md">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="icon-left"
                onClick={handlePrevImage}
              />
              <img
                src={images[currentImage]}
                alt="Review"
                className="reviews-photo"
                title="Review"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="icon-right"
                onClick={handleNextImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
