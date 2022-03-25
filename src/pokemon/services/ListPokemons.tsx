import axios from "axios";
import { GetPokemonsDetails } from "./GetPokemonsDetails";
import { PokemonDetail } from "./interfaces/PokemonDetail";



export interface PokemonListInterface{
    name: string;
    url: string;
}


interface ListPokemonsInterface{
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetail[];
}

export async function ListPokemons(): Promise<ListPokemonsInterface>{
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

    const response = await axios.get<ListPokemonsInterface>(endpoint);

    const promiseArr = response.data.results.map(({name}) => GetPokemonsDetails(name))
    const resultsPromise = await Promise.all(promiseArr)
    
    return{
        ...response.data,
        results: resultsPromise
    }
}