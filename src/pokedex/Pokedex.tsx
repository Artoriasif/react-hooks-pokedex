import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListPokemons, PokemonListInterface } from '../pokemon/services/ListPokemons';
import {GetPokemonsDetails} from '../pokemon/services/GetPokemonsDetails';
import { PokemonDetail } from '../pokemon/services/interfaces/PokemonDetail';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid } from '@material-ui/core';
import {Box} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {useNavigate} from "react-router-dom"


interface PokedexProps {
    
}




export const Pokedex: React.FC<PokedexProps> = () => {

    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]); //faz a leitura dos dados || modifica os dados
    const [selectedPokemon, setSelectedPokemon ] = useState<PokemonListInterface | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
       ListPokemons().then((response) => setPokemons(response.results)) 


    }, []);

    function handleClick(pokemon: PokemonListInterface){
        navigate(`/pokemon/${pokemon.name}`)
    }

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
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography  color="textSecondary" gutterBottom>
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                {pokemon.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => handleClick(pokemon)} size="small">Abrir</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>
                             ))}
                       
                    </Grid>
                    
                   
                </Box>
            </Container>
        </div>
    );
};

