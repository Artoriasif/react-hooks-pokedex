import React from 'react';
import styled from "styled-components";
import { PokemonListInterface } from '../../pokemon/services/ListPokemons';
import { useNavigate } from "react-router-dom"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PokemonDetail } from '../../pokemon/services/interfaces/PokemonDetail';
import { OpenInBrowser } from '@material-ui/icons';
import { Chip } from '@material-ui/core';


interface PokedexCardProps {
    pokemon: PokemonDetail;
}

// const Card = styled.section`
//     padding: 4em;
//     background-color: #22aabf;
//     border-radius:.5em;
//     text-align: center;
//     cursor: pointer;

// `

export const PokedexCard: React.FC<PokedexCardProps> = ({pokemon}) => {


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`)
    }


    return (
        <>
           {/* <Card onClick={handleClick}>
            {pokemon.name}  
           </Card>  */}

           <Card>
               <CardMedia
        style={{height: 0, paddingTop: '56%'}}
        image={pokemon.sprites.front_default}
        title="Paella dish"
      />
      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => <Chip label={type.type.name} color="primary" size="small" />)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClick} aria-label="add to favorites">
          <OpenInBrowser />
        </IconButton>
        <IconButton aria-label="share" disabled>
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
        </>
    );
};

