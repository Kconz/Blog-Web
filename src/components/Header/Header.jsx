import React from "react";
import { useState } from "react";
import "./Header.css";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  const { theme, toggleTheme } = props;
  const [menu, setMenu] = useState("menu");
  const updateMenu = () => {
    menu ? setMenu("menu active") : setMenu("menu");
  };
  const closeHamburger = () => {
    setMenu("menu");
  };
  return (
    <>
      <div className="container-navbar">
        <nav className="nav-bar">
          <Link to="/">
            <h1 className="logo">Kconz</h1>
          </Link>
          <div className={menu}>
            <h1 className="logo-small">Kconz</h1>
            <div className="close" onClick={closeHamburger}>
              <p>&times;</p>
            </div>
            <p className="sub-menu">
              <Link to="/">Home</Link>
            </p>
            <p className="sub-menu">
              <Link to="/blogs">Blogs</Link>
            </p>
            <p className="sub-menu">
              <Link to="/about">About</Link>
            </p>
            {theme === "dark-theme" ? (
              <FaCloudSun
                size="2rem"
                style={{ cursor: "pointer" }}
                onClick={toggleTheme}
              />
            ) : (
              <FaCloudMoon
                size="2rem"
                style={{ cursor: "pointer" }}
                onClick={toggleTheme}
              />
            )}
          </div>
          <div className="burger" onClick={updateMenu}>
            <div />
            <div />
            <div />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
