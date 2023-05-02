import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/production.css";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import datasMenu from "../../DatasMenu/Index";
import ProducteurYourPainMine from "./ProducteurYourPainMine";


const Production = (props) => {

  const [componentMount, setComponentMount] = useState(false);
  const [menuActive, setMenuActive] = useState("");
  const [activeLinkComponentMount, setActiveLinkComponentMount] =
    useState(false);
    
  const menuSearch = datasMenu.find(i=>i.id === props.id)
  const showComposantMenu = menuSearch ? menuSearch.menu : <ProducteurYourPainMine />

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
          <ul className="nav nav-tabs justify-content-center mt-5">
            <li className="nav-item">
              <Link
                aria-current="page"
                to="/producteurYourPainMe"
                className={`nav-link ${
                  activeLinkComponentMount ? "active" : null
                } ${menuActive === "producteurYourPainMe" ? "active" : null}`}
                onClick={() => addActive("producteurYourPainMe")}
              >
                Producteur - Your Pain Mine
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/coProducteur"
                className={`nav-link ${
                  menuActive === "coProducteur" ? "active" : null
                }`}
                onClick={() => addActive("coProducteur")}
              >
                Co-producteur
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/producteurExecutif"
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
                {showComposantMenu}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Production;
