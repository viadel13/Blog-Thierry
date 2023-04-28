import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-scroll navbar-expand-lg d-none">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">
          Fouemene Thierry
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 pe-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
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
              <Link className="nav-link" to="/">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                PUBLICATIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                BIOGRAPHY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                COMMING SOON
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
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
