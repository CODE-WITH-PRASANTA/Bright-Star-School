import React from "react";
import "./BlogDetailsBD.css";

import heroImg from "../../assets/breadcumb-bg.webp";

const BlogDetailsBD = () => {
  return (
    <section className="blogBD">

      <div
        className="blogBD-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1>Blog Details</h1>
      </div>

      {/* <div className="blogBD-breadcrumb">
        Home &nbsp; - &nbsp; Blog &nbsp; - &nbsp; Blog 
        Detalis -
        How to Keep Children Safe Online In Simple Steps
      </div> */}

    </section>
  );
};

export default BlogDetailsBD;