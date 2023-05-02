import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Index";
import "../../assets/css/project.css";
import Footer from "../Footer/Index";

const Project = () => {
  const [componentMount, setComponentMount] = useState(false);
  const [menuActive, setMenuActive] = useState("");
  const [activeLinkComponentMount, setActiveLinkComponentMount] = useState(false);
  const addActive = (val) => {
    setMenuActive(val);
  };
  useEffect(() => {
    setComponentMount(true);
    window.scrollTo(0, 0);

    return () => setComponentMount(false);
  }, []);

  useEffect(() => {
    if (menuActive === "") {
      setActiveLinkComponentMount(true);
    } else {
      setActiveLinkComponentMount(false);
    }
  }, [menuActive]);

  return (
    <>
      <Navbar componentMount={componentMount} />
      <div className="container-project">
        <div className="container">
          <h1 className="text-center">Nos Projects</h1>
        </div>
        <div className="container">
          <ul class="nav nav-tabs justify-content-center mt-5">
            <li class="nav-item">
              <Link
                aria-current="page"
                to="#"
                className={`nav-link ${
                  activeLinkComponentMount ? "active" : null
                } ${menuActive === "2023" ? "active" : null}`}
                onClick={() => addActive("2023")}
              >
                2023
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2022" ? "active" : null
                }`}
                onClick={() => addActive("2022")}
              >
                2022
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2021" ? "active" : null
                }`}
                onClick={() => addActive("2021")}
              >
                2021
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2020" ? "active" : null
                }`}
                onClick={() => addActive("2020")}
              >
                2020
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2019" ? "active" : null
                }`}
                onClick={() => addActive("2019")}
              >
                2019
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2018" ? "active" : null
                }`}
                onClick={() => addActive("2018")}
              >
                2018
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2017" ? "active" : null
                }`}
                onClick={() => addActive("2017")}
              >
                2017
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2016" ? "active" : null
                }`}
                onClick={() => addActive("2016")}
              >
                2016
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2015" ? "active" : null
                }`}
                onClick={() => addActive("2015")}
              >
                2015
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2014" ? "active" : null
                }`}
                onClick={() => addActive("2014")}
              >
                2014
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2013" ? "active" : null
                }`}
                onClick={() => addActive("2013")}
              >
                2013
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2012" ? "active" : null
                }`}
                onClick={() => addActive("2012")}
              >
                2012
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2011" ? "active" : null
                }`}
                onClick={() => addActive("2011")}
              >
                2011
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "2010" ? "active" : null
                }`}
                onClick={() => addActive("2010")}
              >
                2010
              </Link>
            </li>
          </ul>
          <div className="detailsAnneeProject">
            <div className="alert alert-secondary"  role="alert">
              Project {activeLinkComponentMount ? '2023' : `${menuActive}`}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
