import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <nav className={`navbar navbar-expand-lg  fixed-top ${navbarBackground ? 'navbar-scroll' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
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
          <ul className="navbar-nav ms-auto mb-2 pe-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active menu-active"
                aria-current="page"
                to="/"
              >
                HOME
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
                WORKS
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                PUBLICATIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                BIOGRAPHY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                COMMING SOON
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                ARCHIVES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
