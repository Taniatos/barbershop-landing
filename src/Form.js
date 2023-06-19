import React from "react";
import "./App.css";
import "./Form.css";

export default function AboutUs() {
  return (
    <div className="Form-style">
      <section>
        <form className="form-box">
          <h3>Let's get in touch!</h3>
          <input
            type="text"
            value="Your name"
            className="name-submit"
            autocomplete="off"
          />
          <input
            type="text"
            value="Your phone number"
            className="phone-submit"
            autocomplete="off"
          />
          <input
            type="submit"
            value="Call me"
            className="call-button"
            id="call-button"
          />
        </form>
      </section>
    </div>
  );
}
