import React, { useEffect, useState } from 'react';
import {PokemonDetail} from "./services/interfaces/PokemonDetail"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid } from '@material-ui/core';
import {Box} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import {GetPokemonsDetails} from "./services/GetPokemonsDetails"


interface pokemonDetailsProps {
    
}



export const PokemonDetails: React.FC<pokemonDetailsProps> = () => {

    let {name} = useParams();

    const [selectedPokemonDetails, setSelectedPokemonDetails ] = useState<PokemonDetail| undefined>(undefined);
    
    useEffect(() => {
        if(!name) return;
        
        GetPokemonsDetails(name)
        .then((response) => setSelectedPokemonDetails(response)) 
        
        
        
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
                    {name}
                </Typography>
            </Toolbar>
            </AppBar>
        </nav>
        <Container maxWidth="lg" >
            <Box mt={2}>
                <img src={selectedPokemonDetails?.sprites.front_default} alt="imagem do pokemon"/>
            </Box>
        </Container>
            
        </div>
    );
};

