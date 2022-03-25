import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListPokemons, PokemonListInterface } from '../pokemon/services/ListPokemons';
import { GetPokemonsDetails } from '../pokemon/services/GetPokemonsDetails';
import { PokemonDetail } from '../pokemon/services/interfaces/PokemonDetail';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { useNavigate } from "react-router-dom"
import { PokedexCard } from './components/PokedexCard';


interface PokedexProps {

}




export const Pokedex: React.FC<PokedexProps> = () => {

    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]); //faz a leitura dos dados || modifica os dados
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    

    useEffect(() => {
        ListPokemons().then((response) => setPokemons(response.results))


    }, []);

    

    return (
        <div>
            <nav>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Pokedex
                        </Typography>
                    </Toolbar>
                </AppBar>
            </nav>
            <Container maxWidth="lg" >
                <Box mt={2}>
                    <Grid container spacing={2}>

                        {pokemons.map((pokemon) => (
                            <>
                                <Grid item xs={6} lg={3}>
                                    <PokedexCard pokemon={pokemon}/>
                                </Grid>
                            </>
                        ))}

                    </Grid>


                </Box>
            </Container>
        </div>
    );
};

