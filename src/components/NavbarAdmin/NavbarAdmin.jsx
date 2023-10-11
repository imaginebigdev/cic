/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { Button } from "react-bootstrap";
import blogApp from "../../fb";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(blogApp);
const NavbarAdmin = ({ lr, nr, theme }) => {
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
                <img
                  ref={lr}
                  src={appData.darkLogo}
                  alt="logo"
                  style={{ width: "100px" }}
                />
              ) : (
                <img
                  ref={lr}
                  src={appData.lightLogo}
                  alt="logo"
                  style={{ width: "100px" }}
                />
              )
            ) : (
              <img
                ref={lr}
                src={appData.lightLogo}
                alt="logo"
                style={{ width: "100px" }}
              />
            )}
          </a>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-link">
            <h4>Bienvenido Riky</h4>
          </li>
          <li className="nav-link">
            <Button variant="warning" onClick={() => signOut(auth)}>
              Cerrar sesion
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
