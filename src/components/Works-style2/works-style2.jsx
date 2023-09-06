/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import initIsotope from "../../common/initIsotope";
import data from "../../data/blog2.json";
import Modal from "./modal";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  const [modalShown, toggleModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <Modal
        shown={modalShown}
        className="modal fade"
        close={() => {
          toggleModal(false);
          setSelectedImage(null); // Limpiar la imagen seleccionada al cerrar el modal
        }}
        selectedImage={selectedImage} // Pasa la imagen seleccionada al modal
      />
      <section
        className={`${
          grid ? (grid === 3 ? "three-column" : null) : null
        } portfolio section-padding pb-70`}
      >
        <div className={"container"}>
          <div className="row">
            {!hideFilter && (
              <div
                className={`filtering ${
                  filterPosition === "center"
                    ? "text-center"
                    : filterPosition === "left"
                    ? "text-left"
                    : "text-right"
                } col-12`}
              >
                <div className="filter">
                  <span data-filter="*" className="active">
                    All
                  </span>
                </div>
              </div>
            )}

            <div className="gallery full-width">
              {data?.map((c) => (
                <div
                  key={c.id}
                  className={`${
                    grid === 3
                      ? "col-lg-4 col-md-6"
                      : grid === 2
                      ? "col-md-6"
                      : "col-12"
                  } items graphic`}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <img
                      src={c.image}
                      style={{
                        width: "360px",
                        height: "450px",
                        cursor: "pointer",
                        border: "1px solid",
                        borderColor: "#003491ff",
                      }}
                      alt="image"
                      onClick={() => {
                        toggleModal(true); // Mostrar el modal al hacer clic en la imagen
                        setSelectedImage(c.image); // Establecer la imagen seleccionada
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksStyle2;
