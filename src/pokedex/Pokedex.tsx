import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListPokemons, PokemonListInterface } from '../pokemon/services/ListPokemons';
import {GetPokemonsDetails} from '../pokemon/services/GetPokemonsDetails';
import { PokemonDetail } from '../pokemon/services/interfaces/PokemonDetail';
interface PokedexProps {
    
}




export const Pokedex: React.FC<PokedexProps> = () => {

    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]); //faz a leitura dos dados || modifica os dados
    const [selectedPokemon, setSelectedPokemon ] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails ] = useState<PokemonDetail| undefined>(undefined);

    useEffect(() => {
       ListPokemons().then((response) => setPokemons(response.results)) 


    }, []);

    useEffect(() => {
        if(!selectedPokemon) return;
        GetPokemonsDetails(selectedPokemon.name).then((response) => setSelectedPokemonDetails(response)) 
        
        
        
    }, [selectedPokemon]);

    return (
        <div>
            <h1>pokedex</h1>

            pokemons:
            {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

            <h2>Pokemon selecionado: {selectedPokemon?.name || `Nenhum pokemon selecionado`}</h2>
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </div>
    );
};

