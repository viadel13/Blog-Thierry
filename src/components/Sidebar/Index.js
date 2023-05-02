import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { BiMessageError, BiPhone } from "react-icons/bi";
import "../../assets/css/sidebar.css";
const Sidebar = () => {
  return (
    <div
      class="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          Thierry Fouomene
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body text-bg-dark">
        <ul className="navbar-nav ms-auto mb-2 pe-2 mb-lg-0 custom-ul-class">
          <li className="nav-item">
            <Link
              className="nav-link menu-navigation active menu-active"
              aria-current="page"
              to="/"
            >
             <span className="me-1 "><HiOutlineHome size={25} /></span> ACCUEIL
            </Link>
          </li>
          <li className="nav-item menu-active">
            <Link
              className="nav-link menu-active dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#portfolioDropdown"
              aria-expanded="false"
            >
              <span className="me-2"><FaProjectDiagram size={25} /></span>PORTFOLIO
            </Link>
            <ul className=" collapse list-unstyled " id="portfolioDropdown">
              <li>
                <Link className="dropdown-item ms-5" to="/project">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link className="dropdown-item ms-5" to="/production">
                  PRODUCTION
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item menu-active">
            <Link
              className="nav-link menu-active dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#actualitesDropdown"
              aria-expanded="false"
            >
              <span className="me-1 "><HiOutlineDocumentDuplicate size={25} /></span> ACTUALITES
            </Link>
            <ul className="collapse list-unstyled" id="actualitesDropdown">
              <li>
                <Link className="dropdown-item ms-5" to="/">
                  COMING SOON
                </Link>
              </li>
              <li>
                <Link className="dropdown-item ms-5" to="/">
                  TEXTES
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu-navigation menu-active" to="/auteur">
            <span className="me-1 "><MdPersonOutline size={25} /></span> AUTEURS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu-navigation menu-active" to="/directeurArtistique">
            <span className="me-1 "><AiOutlineForm size={25} /></span> DIRECTEUR ARTISTIQUE
            </Link>
          </li>
          <li className="nav-item menu-active">
            <Link
              className="nav-link menu-active dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#AproposDropdown"
              aria-expanded="false"
            >
              <span className="me-2 "><BiMessageError size={25} /></span>A PROPOS
            </Link>
            <ul className="collapse list-unstyled" id="AproposDropdown">
              <li>
                <Link className="dropdown-item ms-5 " to="/">
                  BIOGRAPHIE
                </Link>
              </li>
              <li>
                <Link className="dropdown-item ms-5" to="/">
                  ARCHIVES
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu-navigation menu-active" to="/contact">
            <span className="me-1 "><BiPhone size={25} /></span> CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
