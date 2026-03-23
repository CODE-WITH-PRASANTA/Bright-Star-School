import React, { useEffect, useState } from "react";
import "./FloatingForm.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import API from "../../api/axios"; // ✅ ADDED

const Floatingform = () => {
  const [showForm, setShowForm] = useState(false);

  // ✅ FORM STATE ADDED
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
  };

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    if (placeholder.includes("Name")) {
      setFormData((prev) => ({ ...prev, name: value }));
    } else if (placeholder.includes("Address")) {
      setFormData((prev) => ({ ...prev, address: value }));
    } else if (placeholder.includes("Phone")) {
      setFormData((prev) => ({ ...prev, phone: value }));
    } else {
      setFormData((prev) => ({ ...prev, message: value }));
    }
  };

  // ✅ SUBMIT API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/enquiries", formData);

      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        address: "",
        phone: "",
        message: "",
      });

      setShowForm(false);
    } catch (error) {
      console.error("SUBMIT ERROR:", error);
      alert("Something went wrong!");
    }
  };

  if (!showForm) return null;

  return (
    <div className="Floatingform">
      <div className="Floatingform-overlay" onClick={handleClose}></div>

      <div className="Floatingform-container">
        <button className="Floatingform-close" onClick={handleClose}>
          <IoClose />
        </button>

        <h2 className="Floatingform-title">
          Bright star school
        </h2>

        <p className="Floatingform-subtitle">Admission & Enquiry Form</p>

        <p className="Floatingform-description">
          Give your child the best start in life. Fill in the form below and our
          team will reach out shortly.
        </p>

        {/* ✅ FORM CONNECTED */}
        <form className="Floatingform-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Parent / Student Name"
            className="Floatingform-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address / City"
            className="Floatingform-input"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="Floatingform-input"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            className="Floatingform-textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="Floatingform-submit">
            Submit Enquiry
          </button>
        </form>

        <div className="Floatingform-divider">OR</div>

        {/* ✅ CALL + WHATSAPP CONNECTED */}
        <div className="Floatingform-actions">
          <button
            className="Floatingform-call"
            onClick={() => (window.location.href = "tel:9876543210")}
          >
            <FaPhoneAlt /> Call Us
          </button>

          <button
            className="Floatingform-whatsapp"
            onClick={() =>
              window.open(
                `https://wa.me/919876543210?text=Hello, I want admission details`,
                "_blank"
              )
            }
          >
            <FaWhatsapp /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingform;