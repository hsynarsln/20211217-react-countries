import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import '../App.css';

const Country = ({ country }) => {
  // console.log({ country });

  return (
    <div>
      <Card sx={{ width: 300, padding: 1, margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {country.flag}
            </Avatar>
          }
          title={country.name.common}
          subheader={country.capital}
        />
        <CardMedia component='img' height='194' image={country.flags[0]} alt={country.name.common} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Population: {country.population}
            <br />
            Region: {country.region}
            <br />
            {/* Languages: {country.languages} */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Country;
