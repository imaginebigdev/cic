import React, { useState } from "react";

const BlogGrid = ({ blogs }) => {
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {blogs.map((blogItem) => (
              <div className="col-lg-4" key={blogItem.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                    <img src={blogItem.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
