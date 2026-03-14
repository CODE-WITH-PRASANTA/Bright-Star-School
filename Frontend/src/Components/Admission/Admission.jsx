import React from "react";
import "./Admission.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

import child1 from "../../assets/child-1.webp";
import child2 from "../../assets/Child-2.webp";

const Admission = () => {
  return (
    <section className="admission-section">

      <div className="admission-container">

        {/* LEFT IMAGES */}

        <div className="admission-images">

          <img
            src={child1}
            alt="child"
            className="admission-img admission-img-top"
          />

          <img
            src={child2}
            alt="child"
            className="admission-img admission-img-bottom"
          />

        </div>


        {/* RIGHT CONTENT */}

        <div className="admission-content">

          <h2 className="admission-title">Apply For Admission</h2>

          <div className="admission-features">

            <div>
              <p><FaCheckCircle /> Assign practice exercises</p>
              <p><FaCheckCircle /> Track student progress</p>
            </div>

            <div>
              <p><FaCheckCircle /> Videos and articles</p>
              <p><FaCheckCircle /> Join millions of students</p>
            </div>

          </div>


          {/* FORM */}

          <form className="admission-form">

            <div className="admission-form-grid">

              <div className="admission-field">
                <label>Child's Name <span>(Required)</span></label>
                <input type="text" />
              </div>

              <div className="admission-field">
                <label>Child's DOB <span>(Required)</span></label>

                <div className="admission-date">
                  <input type="text" placeholder="dd-mm-yyyy"/>
                  <FiCalendar />
                </div>

              </div>

              <div className="admission-field">
                <label>Parent's Name <span>(Required)</span></label>
                <input type="text"/>
              </div>

              <div className="admission-field">
                <label>Parent's Designation <span>(Required)</span></label>
                <input type="text"/>
              </div>

              <div className="admission-field">
                <label>Email <span>(Required)</span></label>
                <input type="email"/>
              </div>

              <div className="admission-field">
                <label>Phone No</label>
                <input type="text"/>
              </div>

            </div>


            <div className="admission-bottom">

              <label className="admission-checkbox">
                <input type="checkbox" />
                Notify Your child weekly progress
              </label>

              <button className="admission-btn">
                Apply Now
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Admission;