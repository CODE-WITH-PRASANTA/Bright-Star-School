import React, { useEffect, useState } from "react";
import "./FloatingForm.css"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Floatingform = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Show popup on page load
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <div className="Floatingform">
      <div className="Floatingform-overlay" onClick={handleClose}></div>

      <div className="Floatingform-container">
        {/* Close Button */}
        <button className="Floatingform-close" onClick={handleClose}>
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="Floatingform-title">
         Bright star school
        </h2>

        <p className="Floatingform-subtitle">Admission & Enquiry Form</p>

        <p className="Floatingform-description">
          Give your child the best start in life. Fill in the form below and our
          team will reach out shortly.
        </p>

        {/* Form */}
        <form className="Floatingform-form">
          <input
            type="text"
            placeholder="Parent / Student Name"
            className="Floatingform-input"
          />
          <input
            type="text"
            placeholder="Address / City"
            className="Floatingform-input"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="Floatingform-input"
          />
          <textarea
            placeholder="Message"
            className="Floatingform-textarea"
          ></textarea>

          <button type="submit" className="Floatingform-submit">
            Submit Enquiry
          </button>
        </form>

        {/* Divider */}
        <div className="Floatingform-divider">OR</div>

        {/* Buttons */}
        <div className="Floatingform-actions">
          <button className="Floatingform-call">
            <FaPhoneAlt /> Call Us
          </button>
          <button className="Floatingform-whatsapp">
            <FaWhatsapp /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingform;