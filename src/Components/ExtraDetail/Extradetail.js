import React from 'react';

const Extradetail = (props) => {
    const {name, capital, region, population} = props.country
    const newStyle = {border: '2px solid blue', padding:'20px', margin: '20px', borderRadius: '10px'}
    return (
        <div style={newStyle}>
            <h2>Country Name: {name}</h2>
            <h2>Capital : {capital}</h2>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Extradetail;