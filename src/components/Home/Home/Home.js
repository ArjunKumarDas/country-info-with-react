import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Country from '../Country/Country';
// import axios from '../axios/axios';
const Home = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);
    // load data from api use fetch
    useEffect(() =>{
        const url = 'https://restcountries.eu/rest/v2/all'
         fetch(url)
        .then(res => res.json())
        .then(data =>setCountries(data))
        .catch(error => console.log(error))
    },[])
    //  load data from api use axios;
    //  useEffect( () =>{
    //     const url = 'https://restcountries.eu/rest/v2/all'
    //     axios(url)
    //     .then(data => setCountries(data.data.countries))
    // },[])

 
    return (
        <Container>
            <p>Total country : {countries.length}</p>
            <p>Add Country : {cart}</p>
                {
                    countries.map(country => <Country country={country}></Country> )
                }
        </Container>
    );
};

export default Home;