import React, { useState } from "react";

function NavButton(props) {
  const { href, label } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseOver = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <a
      href={href}
      className="btn"
      style={{
        transition: "background-color 0.3s ease, color 0.3s ease",
        margin: "5px",
        backgroundColor: isHovered ? "#003491ff" : "transparent",
        color: isHovered ? "white" : "",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {label == "Inicio" ? (
        <i
          className="fas fa-home"
          style={{
            margin: "2px",
          }}
        ></i>
      ) : label == "Cursos" ? (
        <i className="fas fa-graduation-cap" style={{ margin: "2px" }}></i>
      ) : label == "Noticias" ? (
        <i className="fas fa-newspaper" style={{ margin: "2px" }}></i>
      ) : label == "Eventos" ? (
        <i className="fas fa-calendar-alt" style={{ margin: "2px" }}></i>
      ) : label == "Convenios" ? (
        <i className="fas fa-handshake" style={{ margin: "2px" }}></i>
      ) : (
        <i className="fas fa-envelope" style={{ margin: "2px" }}></i>
      )}

      {label}
    </a>
  );
}

export default NavButton;
