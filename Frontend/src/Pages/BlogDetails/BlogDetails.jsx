import React from "react";
import "./BlogDetails.css";

import BlogDetailsBD from "../../Components/BlogDetailsBD/BlogDetailsBD";
import BlogDetailsContent from "../../Components/BlogDetailsContent/BlogDetailsContent";
import BlogDetalisComment from "../../Components/BlogDetalisComment/BlogDetalisComment";
import Search from "../../Components/Search/Search";

const BlogDetails = () => {
  return (
    <div className="blogDetailsPage">
      <BlogDetailsBD />

      <section className="blogDetailsPage__contentArea">
        <div className="blogDetailsPage__container">
          <div className="blogDetailsPage__grid">
            <div className="blogDetailsPage__left">
              <BlogDetailsContent />
              <BlogDetalisComment />
            </div>

            <div className="blogDetailsPage__right">
              <Search />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;