import React from "react";
import "./../../App.css";
import "./Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
  
export default function Location() {
  return (
    <div className="Location-style">
      <section>
        <h3>Let's get in touch!</h3>
        <div className="container text-center location-box">
          <div class="row">
            <div class="col-md-6">
              <h3>Address in Kyiv:</h3>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="icon-location"
                  />
                  23 Khmelnytskoho str
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="icon-location"
                  />
                  214 Shevchenko Ave
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="icon-location"
                  />
                  58 Ohienko Str
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-hours">
              <h3 className="working-hours-header">Working hours:</h3>
              <ul>
                <li>Mon-Fri: 9:00 - 22:00</li>
                <li>Sat: 9:00 - 18:00</li>
                <li>Sun: day off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
