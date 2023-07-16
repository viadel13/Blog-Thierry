import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Contact from "../components/Contact/Index";
import Project from "../components/Project/Index";
import Auteur from "../components/Auteur/Index";
import DirecteurArtistique from "../components/DirecteurArtistique/Index";
import Production from "../components/Production/Index";
import Scenariste from "../components/Auteur/Scenariste";
import Realisateur from "../components/Auteur/Realisateur";
import ProducteurYourPainMine from "../components/Production/ProducteurYourPainMine";
import ProducteurExecutif from "../components/Production/ProducteurExecutif";
import CoProducteur from "../components/Production/CoProducteur";
import Cinema from "../components/DirecteurArtistique/Cinema";
import Theatre from "../components/DirecteurArtistique/Theatre";
import Musique from "../components/DirecteurArtistique/Musique";
const LazyBlog = React.lazy(() => import("../components/Home/Index"));

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Chargement...</div>}>
              <LazyBlog />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />

        <Route path="/auteur" element={<Auteur />}>
          <Route index element={<Scenariste />} />
          <Route path="scenariste" element={<Scenariste />} />
          <Route path="realisateur" element={<Realisateur />} />
        </Route>
        <Route path="/directeurArtistique" element={<DirecteurArtistique />}>
          <Route index element={<Cinema />} />
          <Route path="cinema" element={<Cinema />} />
          <Route path="theatre" element={<Theatre />} />
          <Route path="musique" element={<Musique />} />
        </Route>

        <Route path="/production" element={<Production />}>
          <Route index element={<ProducteurYourPainMine />} />
          <Route
            path="producteurYourPainMe"
            element={<ProducteurYourPainMine />}
          />
          <Route path="coProducteur" element={<CoProducteur />} />
          <Route path="producteurExecutif" element={<ProducteurExecutif />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
