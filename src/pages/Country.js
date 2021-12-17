import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import '../App.css';

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const Country = props => {
  // console.log(props);
  const {
    flag,
    capital,
    name: { common: countryName },
    flags,
    population,
    region,
    maps: { openStreetMaps: countryMap },
    borders
  } = props.country;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ width: 300, padding: 1, margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {flag}
            </Avatar>
          }
          title={countryName}
          subheader={capital}
        />
        <CardMedia component='img' height='194' image={flags[0]} alt={countryName} />
        <CardContent>
          <Typography align='justify' variant='body2' color='text.secondary'>
            Population: {population}
          </Typography>
          <Typography align='justify' variant='body2' color='text.secondary'>
            Region: {region}
          </Typography>
          {borders ? (
            <Typography align='justify' variant='body2' color='text.secondary'>
              Neigbours: {borders.join(',')}
            </Typography>
          ) : (
            <Typography align='justify' variant='body2' color='text.secondary'>
              No Neighbours
            </Typography>
          )}
          {/* <Typography align='justify' variant='body2' color='text.secondary'>
            Languages: {languages}
          </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <iframe width='260' height='250' src={countryMap} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='Embedded youtube' />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Country;
