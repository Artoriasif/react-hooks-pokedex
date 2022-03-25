import React from 'react';
import styled from "styled-components";
import { PokemonListInterface } from '../../pokemon/services/ListPokemons';
import { useNavigate } from "react-router-dom"



interface PokedexCardProps {
    pokemon: PokemonListInterface;
}

const Card = styled.section`
    padding: 4em;
    background-color: #22aabf;
    border-radius:.5em;
    text-align: center;
    cursor: pointer;

`

export const PokedexCard: React.FC<PokedexCardProps> = ({pokemon}) => {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`)
    }


    return (
        <>
           <Card onClick={handleClick}>
            {pokemon.name}  
           </Card> 
        </>
    );
};

