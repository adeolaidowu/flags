import React from 'react'
import Country from './Country';

function CountryList({countries}) {
    //console.log(countries)
    return (
        <div className="country-list">
            {countries && countries.map(country => (
                <Country country={country} key={country.name} />
            ))}
        </div>
    )
}

export default CountryList;
