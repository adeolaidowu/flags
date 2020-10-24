import React from 'react'

function Country({country}) {
    return (
        <div className="card">
            <img src={country.flag} alt="country-flag" className="img" />
            <div className="container">
                <h5>{country.name}</h5>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    )
}

export default Country

