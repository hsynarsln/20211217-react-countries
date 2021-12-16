import React, { useEffect, useState } from 'react';
import '../App.css';
import Country from './Country';

const FlagApp = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setError(true);
        }
      })
      .then(data => setCountries(data))
      .catch(err => console.log(err));
  }, []);

  if (!error) {
    return (
      <div className='card-container'>
        {countries.map((country, index) => (
          <Country country={country} key={index} />
        ))}
      </div>
    );
  } else {
    return <h1>Something went wrong!</h1>;
  }
};

export default FlagApp;
