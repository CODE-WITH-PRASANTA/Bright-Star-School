import React from "react";
import "./BlogDetailsContent.css";

import img1 from "../../assets/blog-single-1.webp";
import img2 from "../../assets/blog-s-d-1.webp";
import img3 from "../../assets/blog-s-d-2.webp";
import img4 from "../../assets/blog-s-d-3.webp";
import img5 from "../../assets/blog-s-d-4.webp";
import author from "../../assets/C-1.webp";

import {
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

const BlogDetailsContent = () => {
  return (
    <section className="blogContent">
      <div className="blogContainer">
        {/* TOP IMAGE */}

        <div className="blogTopImg imgWrap">
          <img src={img1} alt="" />
        </div>

        {/* META */}

        <div className="blogMeta">
          <span>
            <FaCalendarAlt /> 26. September 2023
          </span>
          <span>
            <FaCommentDots /> 0 Comments
          </span>
        </div>

        {/* TITLE */}

        <h1 className="blogTitle">
          How To Keep Children Safe Online In Simple Steps
        </h1>

        {/* TEXT */}

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore.
        </p>

        {/* LIST + IMAGE */}

        <div className="blogFlex">
          <div className="blogList">
            <div>
              <FaCheck /> Comprehensive reporting on individual achievement
            </div>
            <div>
              <FaCheck /> Educational field trips and school presentations
            </div>
            <div>
              <FaCheck /> Individual attention in a small-class setting
            </div>
            <div>
              <FaCheck /> Learning program with after-school care
            </div>
            <div>
              <FaCheck /> Educational field trips and school presentations
            </div>
          </div>

          <div className="blogSideImg imgWrap">
            <img src={img2} alt="" />
          </div>
        </div>

        {/* BIG IMAGE */}

        <div className="blogBigImg imgWrap">
          <img src={img3} alt="" />
        </div>

        {/* TWO IMAGES */}

        <div className="blogGrid">
          <div className="imgHover imgWrap">
            <img src={img4} alt="" />
          </div>

          <div className="imgHover imgWrap">
            <img src={img5} alt="" />
          </div>
        </div>

        {/* TAG + SHARE */}

        <div className="blogTags">
          <div className="tags">
            <span>Tags:</span>
            <button>Classes</button>
            <button>kindergarten</button>
            <button>Pre-School</button>
          </div>

          <div className="share">
            <span>Share:</span>

            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaPinterestP />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* AUTHOR */}

        <div className="blogAuthor">
          <img src={author} alt="" />

          <div>
            <h3>Wp-kiddino</h3>
            <p>
              Monotonectally procrastinate transparent architectures before
              robust opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
