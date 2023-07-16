import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import Home from '../components/Home/Index';
import Contact from '../components/Contact/Index';
import Project from '../components/Project/Index';
import Auteur from '../components/Auteur/Index';
import DirecteurArtistique from '../components/DirecteurArtistique/Index';
import Production from '../components/Production/Index';
const LazyBlog = React.lazy(()=>import('../components/Home/Index'));

const Root = () => {
  return (
    <Router>
        <Routes>
            <Route 
              path='/' 
              element={
                <React.Suspense fallback={<div>Chargement...</div>} >
                  <LazyBlog />
                </React.Suspense>
              } 
            
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project' element={<Project />} />
            <Route path='/auteur' element={<Auteur />} />
            <Route path='/directeurArtistique' element={<DirecteurArtistique />} />
            <Route path='/production' element={<Production/>} />
            <Route path='/producteurYourPainMe' element={<Production id='1'/>} />
            <Route path='/coProducteur' element={<Production id='2' />} />
            <Route path='/producteurExecutif' element={<Production id='3' />} />
            <Route path='/scenariste' element={<Auteur id='4' />} />
            <Route path='/realisateur' element={<Auteur id='5' />} />
            <Route path='/cinema' element={<DirecteurArtistique id='6' />} />
            <Route path='/theatre' element={<DirecteurArtistique id='7' />} />
            <Route path='/musique' element={<DirecteurArtistique id='8' />} />
        </Routes>
    </Router>
  )
}

export default Root
