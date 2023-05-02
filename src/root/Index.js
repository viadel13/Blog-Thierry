import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Index';
import Contact from '../components/Contact/Index';
import Project from '../components/Project/Index';
import Auteur from '../components/Auteur/Index';
import DirecteurArtistique from '../components/DirecteurArtistique/Index';
import Production from '../components/Production/Index';

const Root = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project' element={<Project />} />
            <Route path='/auteur' element={<Auteur />} />
            <Route path='/directeurArtistique' element={<DirecteurArtistique />} />
            <Route path='/production' element={<Production />} />
        </Routes>
    </Router>
  )
}

export default Root
