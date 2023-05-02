import "../../assets/css/directeurArtistique.css";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import { Link } from "react-router-dom";
import Cinema from "./Cinema";
import datasMenu from "../../DatasMenu/Index";

const DirecteurArtistique = (props) => {

  const [componentMount, setComponentMount] = useState(false);
  const [menuActive, setMenuActive] = useState("");
  const [activeLinkComponentMount, setActiveLinkComponentMount] = useState(false);

  const menuSearch = datasMenu.find(i=>i.id === props.id)
  const showComposantMenu = menuSearch ? menuSearch.menu : <Cinema />

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
      <div className="container-directeurArtistique">
        <div className="container">
          <h1 className="text-center">Directeur Artistique</h1>
        </div>
        <div className="container">
          <ul className="nav nav-tabs justify-content-center mt-5">
            <li className="nav-item">
              <Link
                aria-current="page"
                to="/cinema"
                className={`nav-link ${
                  activeLinkComponentMount ? "active" : null
                } ${menuActive === "cinema" ? "active" : null}`}
                onClick={() => addActive("cinema")}
              >
                Cinema
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/theatre"
                className={`nav-link ${
                  menuActive === "theatre" ? "active" : null
                }`}
                onClick={() => addActive("theatre")}
              >
                Theatre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/musique"
                className={`nav-link ${
                  menuActive === "musique" ? "active" : null
                }`}
                onClick={() => addActive("musique")}
              >
                Musique
              </Link>
            </li>
        
          </ul>
          <div className="detailsDirecteurArtistique">
            {showComposantMenu}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DirecteurArtistique;
