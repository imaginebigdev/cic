/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
      style={{ backgroundColor: "#fff" }}
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
            <li className="nav-item m-4">
              <i className="fas fa-home"></i>
              <Link
                className="nav-link"
                href="/"
                onClick={handleMobileDropdown}
                offset={50}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item m-4">
              <i className="fas fa-graduation-cap"></i>
              <Link
                className="nav-link"
                href="/Cursos"
                onClick={handleMobileDropdown}
              >
                Cursos
              </Link>
            </li>
            <li className="nav-item m-4">
              <i className="fas fa-newspaper"></i>
              <Link
                className="nav-link"
                href="/Noticias"
                onClick={handleMobileDropdown}
              >
                Noticias
              </Link>
            </li>
            <li className="nav-item m-4">
              <i className="fas fa-calendar-alt"></i>
              <Link
                className="nav-link"
                href="/Eventos"
                onClick={handleMobileDropdown}
              >
                Eventos
              </Link>
            </li>
            <li className="nav-item m-4">
              <i className="fas fa-handshake"></i>
              <Link
                className="nav-link"
                href="/Convenios"
                onClick={handleMobileDropdown}
              >
                Convenios
              </Link>
            </li>
            <li className="nav-item m-4">
              <i className="fas fa-envelope"></i>
              <Link
                className="nav-link"
                href="/Contactos"
                onClick={handleMobileDropdown}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
