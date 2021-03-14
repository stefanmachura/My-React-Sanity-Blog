import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import { SocialIcon } from "react-social-icons";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuView, changeView] = useState(false);
  // TODO: use Context API for global theme toggle
  // const [lightMode, changeLightMode] = useState(true);

  const showMenu = () => {
    changeView(!menuView);
  };
  const hideMenu = () => {
    changeView(false);
  };
  // const toggleLightDark = () => {
  //   changeLightMode(!lightMode);
  //   console.log(lightMode);
  // };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <div className="logo">
        <Link className="nav-link" to="/" onClick={hideMenu}>
          stfnmchr
        </Link>
      </div>
      <ul className={menuView ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/about"
            activeClassName="current-page-link"
            onClick={hideMenu}
          >
            {t("navbar.about")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/articles/poznan"
            activeClassName="current-page-link"
            onClick={hideMenu}
          >
            Poznań
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/articles/raspberrypi"
            activeClassName="current-page-link"
            onClick={hideMenu}
          >
            raspberry pi
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/articles/python"
            activeClassName="current-page-link"
            onClick={hideMenu}
          >
            python
          </NavLink>
        </li>
        <li className="nav-item">
          <SocialIcon
            url="http://twitter.com/stfn"
            style={{ height: 25, width: 25 }}
          />
          &nbsp;
          <SocialIcon
            url="http://instagram.com/thestfn"
            style={{ height: 25, width: 25 }}
          />
          &nbsp;
          <SocialIcon
            url="https://www.youtube.com/channel/UCZbEQz4HezSFghZvtdmJMUg"
            style={{ height: 25, width: 25 }}
          />
          &nbsp;
          <SocialIcon
            url="https://www.github.com/stefanmachura"
            style={{ height: 25, width: 25 }}
          />
        </li>
        {/* <li className="nav-item">
          <i
            className={
              lightMode ? "clickable far fa-moon" : "clickable far fa-sun"
            }
            onClick={toggleLightDark}
          ></i>
        </li> */}
        <li className="nav-item">
          <button className="lg-button" onClick={() => changeLanguage("en")}>
            en
          </button>
          <button className="lg-button" onClick={() => changeLanguage("pl")}>
            pl
          </button>
        </li>
      </ul>
      <div className="burger" onClick={showMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}
