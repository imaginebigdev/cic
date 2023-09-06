/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {blogs.map((blogItem, index) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                  style={{
                    backgroundColor: "#1a3f95ff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div
                        className="img md-mb50 mt-15"
                        style={{ overflow: "hidden" }}
                      >
                        <img src={blogItem.image} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <i
                              className="fas fa-clock"
                              style={{ margin: "4px", color: "#fff" }}
                            ></i>

                            <span>
                              <i>{blogItem.date.day}</i>/{blogItem.date.month}
                            </span>

                            <span>/</span>
                            {blogItem.tags.map((tag, index) => (
                              <span
                                className="tag"
                                style={{ color: "#08b8fc" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h5 style={{ color: "#fff" }}>{blogItem.title}</h5>
                          <p className="mt-10" style={{ color: "#fff" }}>
                            {blogItem.content}
                            {blogItem.ul && (
                              <ul>
                                {blogItem.ul.map((e, inde) => (
                                  <li key={inde}> {e}</li>
                                ))}
                              </ul>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
