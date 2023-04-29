import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../assets/css/navbar.css";
import Sidebar from "../Sidebar/Index";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== navbarBackground) {
        setNavbarBackground(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [navbarBackground]);

  return (
    <>
    <Sidebar />
      <nav
        className={`navbar navbar-expand-lg  fixed-top ${
          navbarBackground ? "navbar-scroll" : ""
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand titre" to="/">
            Thierry Fouomene
          </Link>
          <button
            className="navbar-toggler"
            id="navbar-respon-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 pe-2 mb-lg-0 custom-ul-class">
              <li className="nav-item">
                <Link
                  className="nav-link menu-navigation active menu-active"
                  aria-current="page"
                  to="/"
                >
                  ACCUEIL
                </Link>
              </li>
              <li className="nav-item menu-active dropdown">
                <Link
                  className="nav-link menu-active dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PORTFOLIO
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      PRODUCTION
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-active dropdown">
                <Link
                  className="nav-link menu-active dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACTUALITES
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      COMING SOON
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      TEXTES
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu-navigation menu-active" to="/">
                  AUTEUR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu-navigation menu-active" to="/">
                  DIRECTEUR ARTISTIQUE
                </Link>
              </li>

              <li className="nav-item menu-active dropdown">
                <Link
                  className="nav-link menu-active dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  A PROPOS
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      BIOGRAPHIE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      ARCHIVES
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link menu-navigation menu-active"
                  id="s"
                  to="/"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
