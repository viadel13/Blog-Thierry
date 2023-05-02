import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/production.css";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";

const Production = () => {
  const [componentMount, setComponentMount] = useState(false);
  const [menuActive, setMenuActive] = useState("");
  const [activeLinkComponentMount, setActiveLinkComponentMount] =
    useState(false);
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
      <div className="container-production">
        <div className="container">
          <h1 className="text-center">Production</h1>
        </div>
        <div className="container">
          <ul class="nav nav-tabs justify-content-center mt-5">
            <li class="nav-item">
              <Link
                aria-current="page"
                to="#"
                className={`nav-link ${
                  activeLinkComponentMount ? "active" : null
                } ${menuActive === "producteurYourPainMe" ? "active" : null}`}
                onClick={() => addActive("producteurYourPainMe")}
              >
                Producteur - Your Pain Mine
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "coProducteur" ? "active" : null
                }`}
                onClick={() => addActive("coProducteur")}
              >
                Co-producteur
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="#"
                className={`nav-link ${
                  menuActive === "ProduteurExecutif" ? "active" : null
                }`}
                onClick={() => addActive("ProduteurExecutif")}
              >
                Produteur Executif
              </Link>
            </li>
          </ul>
          <div className="detailsProduction">
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Production;
