/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import blogApp from "../../fb";

const BlogGrid = ({ blogs }) => {
  const handleExpandClick = (itemId, url) => {
    window.location.href = `${url}`;
  };
  /* const [lista, setLista] = useState([]);

  useEffect(() => {
    const firestore = getFirestore(blogApp);
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "usuarios"));
        const docs = blogs;
        querySnapshot.forEach((doc) => {
          docs.push(...doc.data().noti);
        });

        setLista(docs.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]); */

  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {blogs?.map((blogItem, index) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                  style={{
                    border: "1px solid #003491ff",
                    borderRadius: "5px",
                    marginTop: "20px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
                    overflow: "hidden", // Para ocultar el contenido que se desborda en el zoom
                    transition: "transform 0.2s",
                    position: "relative", // Necesario para el botón "Leer más"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <img
                        src={blogItem.image}
                        alt=""
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <span className="date" style={{ fontSize: "15px" }}>
                              <i>{blogItem.date?.day}</i>/{blogItem.date?.month}
                              /{blogItem.date?.año}
                            </span>

                            <span>/</span>
                            {blogItem.tags?.map((tag, index) => (
                              <span
                                className="tag"
                                style={{
                                  color: "#1a3f95ff",
                                  fontSize: "15px",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h5>{blogItem.title}</h5>
                          <p
                            className="mt-10"
                            style={{
                              textAlign: "justify",
                              marginRight: "10px",
                            }}
                          >
                            {blogItem.shortText}
                          </p>
                          <div className="btn-more mt-30">
                            {blogItem.url && (
                              <button
                                onClick={() =>
                                  handleExpandClick(blogItem.id, blogItem.url)
                                }
                                style={{
                                  backgroundColor: "#003491ff",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "5px",
                                  padding: "10px 15px",
                                  transition:
                                    "background-color 0.3s, transform 0.2s",
                                  cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#1a3f95ff";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#003491ff";
                                }}
                              >
                                Leer más
                              </button>
                            )}
                          </div>
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

export default BlogGrid;
/* const BlogGrid = ({ blogs }) => {
  const handleExpandClick = (itemId, url) => {
    window.location.href = `${url}`;
  };
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {blogs.map((blogItem) => (
              <div className="col-lg-4" key={blogItem.id}>
                <div
                  className="item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    border: "1px solid #003491ff",
                    borderRadius: "5px",
                    marginTop: "20px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
                    overflow: "hidden", // Para ocultar el contenido que se desborda en el zoom
                    transition: "transform 0.2s",
                    position: "relative", // Necesario para el botón "Leer más"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="img">
                    <img src={blogItem.image} alt="" />
                  </div>
                  <div className="cont">
                    <div>
                      <div className="info">
                        <a className="date ml-3">
                          <span style={{ fontSize: "15px" }}>
                            <i>{blogItem.date.day}</i>/{blogItem.date.month}/
                            {blogItem.date.año}
                          </span>
                        </a>

                        <span>/</span>
                        {blogItem.tags.map((tag, index) => (
                          <a className="tag">
                            <span
                              style={{ color: "#1a3f95ff", fontSize: "15px" }}
                            >
                              {tag}
                            </span>
                          </a>
                        ))}
                      </div>
                      <h5 style={{ margin: "2px" }}>{blogItem.title}</h5>
                      <p style={{ textAlign: "justify", margin: "3px" }}>
                        {blogItem.shortText}
                      </p>
                      {blogItem.url && (
                        <button
                          onClick={() =>
                            handleExpandClick(blogItem.id, blogItem.url)
                          }
                          style={{
                            backgroundColor: "#003491ff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 15px",
                            transition: "background-color 0.3s, transform 0.2s",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#1a3f95ff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#003491ff";
                          }}
                        >
                          Leer más
                        </button>
                      )}
                    </div>
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
 */
