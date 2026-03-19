import React, { useState } from "react";
import "./BlogDetalisComment.css";

const BlogDetalisComment = () => {

  const [form, setForm] = useState({
    comment: "",
    name: "",
    email: "",
    save: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Comment Submitted ✅");

    setForm({
      comment: "",
      name: "",
      email: "",
      save: false,
    });
  };

  return (
    <section className="BDC">

      <div className="BDC-container">

        <h2 className="BDC-title">Leave A Comment</h2>

        <p className="BDC-sub">
          Your email address will not be published. Required fields are marked *
        </p>


        <form onSubmit={handleSubmit} className="BDC-form">

          {/* comment */}

          <textarea
            name="comment"
            placeholder="Write Your Comment *"
            value={form.comment}
            onChange={handleChange}
            required
            className="BDC-textarea"
          />


          {/* inputs */}

          <div className="BDC-row">

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name *"
              value={form.name}
              onChange={handleChange}
              required
              className="BDC-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter E-mail Address *"
              value={form.email}
              onChange={handleChange}
              required
              className="BDC-input"
            />

          </div>


          {/* checkbox */}

          <label className="BDC-check">

            <input
              type="checkbox"
              name="save"
              checked={form.save}
              onChange={handleChange}
            />

            Save my name, email, and website in this browser for the next time I comment.

          </label>


          {/* button */}

          <button type="submit" className="BDC-btn">
            Post Comment
          </button>

        </form>

      </div>

    </section>
  );
};

export default BlogDetalisComment;