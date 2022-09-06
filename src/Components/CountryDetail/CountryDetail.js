import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Extradetail from '../ExtraDetail/Extradetail';

const CountryDetail = () => {
    
    const [singleCountry, setSingleCountry] = useState([])

    useEffect(() => {
        const url = `https://restcountries.com/v2/name/${countryDetail}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleCountry(data));
    }, [])
    const {countryDetail} = useParams();
    // console.log(singleCountry)
    return (
        <div>
            {
                singleCountry.map(country => <Extradetail country={country}></Extradetail>)
            }
        </div>
    );
};

export default CountryDetail;