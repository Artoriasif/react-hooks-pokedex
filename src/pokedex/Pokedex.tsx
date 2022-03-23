import React, { useState } from 'react';

interface PokedexProps {
    
}

const pokemonsArray: string[] = ["Charmander", "Lucario", "Lugia", "Mil"]

export const Pokedex: React.FC<PokedexProps> = () => {

    const [pokemons, setPokemons] = useState<string[]>(pokemonsArray); //faz a leitura dos dados || modifica os dados
    const [selectedPokemon, setSelectedPokemon ] = useState<string | undefined>(undefined);

    return (
        <div>
            <h1>pokedex</h1>

            pokemons:
            {pokemons.map((pokemons) => <button onClick={() => setSelectedPokemon(pokemons)}>{pokemons}</button>)}

            <h2>Pokemon selecionado: {selectedPokemon || `Nenhum pokemon selecionado`}</h2>
        </div>
    );
};

