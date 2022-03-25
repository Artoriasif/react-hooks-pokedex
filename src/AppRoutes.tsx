import React from 'react';
import { RoutesProps } from 'react-router-dom';
import { Pokedex } from './pokedex/Pokedex';
import { PokemonDetails } from "./pokemon/PokemonDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const AppRoutes = () => {
return(
    <Router>
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
    </Router>

      )
}