/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarArch = ({ lr, nr, theme }) => {
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
  </button>;

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
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
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/"
                onClick={handleMobileDropdown}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="about4"
                onClick={handleMobileDropdown}
              >
                Espectáculo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/cursos"
                onClick={handleMobileDropdown}
              >
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/"
                onClick={handleMobileDropdown}
              >
                Noticias
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/"
                onClick={handleMobileDropdown}
              >
                Eventos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/"
                onClick={handleMobileDropdown}
              >
                Convenios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/"
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

export default NavbarArch;
