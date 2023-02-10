import React from "react";
import BlogBanner from "../components/blogPage/blogBanner/BlogBanner";
import BlogContent from "../components/blogPage/blogContent/BlogContent";

const Blogs = () => {
  return (
    <>
      <BlogBanner />
      <div className="postsec">
        <div className="container">
          <div className="row">
            <BlogContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
