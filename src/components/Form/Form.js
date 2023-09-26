import React, { useState, useRef, useEffect } from "react";
import "./../../App.css";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const validateName = () => {
    const nameRegex = /^[A-Za-z ]{2,20}$/;
    if (!nameRegex.test(name.trim())) {
      setNameError("Please enter a valid name");
      return false;
    }
    setNameError("");
    return true;
  };

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
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();

    if (isNameValid && isPhoneValid) {
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 5000);
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

        {showModal && (
          <div className="popup">
            <div ref={modalRef} className="popup-content">
              Thanks for your query! We'll call you within 15 minutes.
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
