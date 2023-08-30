/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <a className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to=""
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  handleMobileDropdown();
                }}
                offset={50}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                onClick={handleMobileDropdown}
                smooth="true"
                offset={50}
                duration={500}
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="productos"
                onClick={handleMobileDropdown}
                smooth="true"
                offset={50}
                duration={500}
              >
                Productos
              </Link>
            </li>
            {/*   <li className="nav-item">
              <Link
                className="nav-link"
                to="clientes"
                onClick={handleMobileDropdown}
                smooth="true"
                offset={50}
                duration={500}
              >
                Clientes
              </Link>
            </li> */}
            <li className="nav-item">
              <a
                href="https://wa.me/543516668134"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
