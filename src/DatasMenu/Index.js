import ProducteurYourPainMine from "../components/Production/ProducteurYourPainMine";
import CoProducteur from "../components/Production/CoProducteur";
import ProducteurExecutif from "../components/Production/ProducteurExecutif";
import Scenariste from '../components/Auteur/Scenariste'
import Realisateur from '../components/Auteur/Realisateur'
import Cinema from "../components/DirecteurArtistique/Cinema";
import Theatre from "../components/DirecteurArtistique/Theatre";
import Musique from "../components/DirecteurArtistique/Musique";

const datasMenu = [
    {
      id : '1',
      menu : <ProducteurYourPainMine />
    },
    {
      id : '2',
      menu : <CoProducteur />
    },
    {
      id : '3',
      menu : <ProducteurExecutif />
    },
    {
      id : '4',
      menu : <Scenariste />
    },
    {
      id : '5',
      menu : <Realisateur />
    },
    {
      id : '6',
      menu : <Cinema />
    },
    {
      id : '7',
      menu : <Theatre />
    },
    {
      id : '8',
      menu : <Musique />
    }
]

export default datasMenu;