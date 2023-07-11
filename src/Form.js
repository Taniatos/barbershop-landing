import React, { useState } from "react";
import "./App.css";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function validateName() {
    const nameRegex = /^[A-Za-z ]{2,20}$/;
    if (!nameRegex.test(name.trim())) {
      setNameError("Please enter a valid name");
      return false;
    }
    setNameError("");
    return true;
  }

  function validatePhone() {
    const phoneRegex = /^\d{5,14}$/;
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError("Please enter a valid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);

    if (validateName() && validatePhone()) {
      // Show the pop-up window
      const popup = document.createElement("div");
      popup.className = "popup";

      const popupContent = document.createElement("div");
      popupContent.className = "popup-content";
      popupContent.innerText = `Thanks for your query! 
        We'll call you within 15 minutes`;

      popup.appendChild(popupContent);
      document.body.appendChild(popup);

      // Remove the pop-up after 2,5 seconds
      setTimeout(function () {
        document.body.removeChild(popup);
      }, 2500);
    }
  }

  return (
    <div className="Form-style">
      <section>
        <form
          className="form-box"
          onSubmit={handleSubmit}
          method="POST"
          data-netlify="true"
        >
          <h3>Let's get in touch!</h3>
          <input
            type="text"
            placeholder="Your name"
            className={`name-submit ${
              nameError && (formSubmitted || name !== "") ? "invalid" : ""
            }`}
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />
          {nameError && (formSubmitted || name !== "") && (
            <div className="error-message">{nameError}</div>
          )}
          <input
            type="tel"
            placeholder="Your phone number"
            className={`phone-submit ${
              phoneError && (formSubmitted || phone !== "") ? "invalid" : ""
            }`}
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
          />
          {phoneError && (formSubmitted || phone !== "") && (
            <div className="error-message">{phoneError}</div>
          )}
          <input
            type="submit"
            value="Call me"
            className="call-button"
            id="call-button"
            disabled={nameError || phoneError}
          />
        </form>
      </section>
    </div>
  );
}
