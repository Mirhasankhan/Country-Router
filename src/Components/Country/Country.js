import React from 'react';
import './Country.css';
import { Link } from "react-router-dom";

const Country = (props) => {
    const {name, region, capital, population, flag} = props.country;
    
    return (
        <div className="country-style">
            <h1>Country Name: {name}</h1>
            <h2>Capital : {capital}</h2>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <img src={flag} alt=""/>
            <p>Details Of: <Link to={`/country/${name}`}>{name}</Link></p>
        </div>
    );
};

export default Country;