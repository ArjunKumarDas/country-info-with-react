import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    // load data from api use fetch
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>setCountries(data))
        .catch(error => console.log(error))
    },[])
    return (
        <Container>
                {
                    countries.map(country => <Country country={country}></Country> )
                }
        </Container>
    );
};

export default Home;