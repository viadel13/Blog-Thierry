import "../../assets/css/auteur.css";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Index";
import { Link } from "react-router-dom";
import Footer from "../Footer/Index";
import datasMenu from "../../DatasMenu/Index";
import Scenariste from "./Scenariste";

const Auteur = (props) => {
  const [componentMount, setComponentMount] = useState(false);
  const [menuActive, setMenuActive] = useState("");
  const [activeLinkComponentMount, setActiveLinkComponentMount] = useState(false);

      
  const menuSearch = datasMenu.find(i=>i.id === props.id)
  const showComposantMenu = menuSearch ? menuSearch.menu : <Scenariste />

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
      <div className="container-auteur">
        <div className="container">
          <h1 className="text-center">Auteurs</h1>
        </div>
        <div className="container">
          <ul className="nav nav-tabs justify-content-center mt-5">
            <li className="nav-item">
              <Link
                aria-current="page"
                to="/scenariste"
                className={`nav-link ${
                  activeLinkComponentMount ? "active" : null
                } ${menuActive === "scenariste" ? "active" : null}`}
                onClick={() => addActive("scenariste")}
              >
                Scenariste
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/realisateur"
                className={`nav-link ${
                  menuActive === "realisateur" ? "active" : null
                }`}
                onClick={() => addActive("realisateur")}
              >
                Realisateur
              </Link>
            </li>
        
          </ul>
          <div className="detailsAuteur">
            {showComposantMenu}       
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Auteur;
