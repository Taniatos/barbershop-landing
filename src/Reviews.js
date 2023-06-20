import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faChevronRight,
    faChevronLeft,
  } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "./Reviews.css";
export default function Reviews() {
  return (
    <div className="Reviews-style">
      <h2>Reviews</h2>
      <section>
        <div className="container text-center">
          <div class="row">
            <div class="col-md">
              <FontAwesomeIcon icon={faChevronLeft} className="icon-left" />
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/086/477/original/review_1.png?1687276725"
                alt="Review"
                className="reviews-photo"
                title="Review"
              />
              <FontAwesomeIcon icon={faChevronRight} className="icon-right" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
