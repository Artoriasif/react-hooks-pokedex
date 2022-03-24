import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PokedexProps {
    
}

interface PokemonListInterface{
    name: string;
    url: string;
}



export const Pokedex: React.FC<PokedexProps> = () => {

    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]); //faz a leitura dos dados || modifica os dados
    const [selectedPokemon, setSelectedPokemon ] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails ] = useState<any| undefined>(undefined);

    useEffect(() => {
       axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => setPokemons(response.data.results)) 


    }, []);

    useEffect(() => {
        if(!selectedPokemon) return;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`).then((response) => setSelectedPokemonDetails(response.data)) 
        
        
        
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

