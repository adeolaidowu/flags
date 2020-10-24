import React, {useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import './App.css';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import FilterBox from './components/FilterBox';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");

  
  useEffect(() => { 
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => {
    setCountries(data);
  })
  }, [])

  
  const handleChange = (e) => {
    setSearchField(e);
  }

  const handleRegionChange = (e) => {
    setRegion(e);
  }

  const filteredCountries = 
  searchField !== "" ? 
  countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase())) :
  region !== "" ? countries.filter(country => country.region.toLowerCase() === region) : countries;
  return (
    <div className="app">
      <Header />
      <div className="filters">
        <SearchBox handleSearchChange={handleChange} />
        <FilterBox handleRegionChange={handleRegionChange} region={region} />
      </div>
      {countries.length === 0 && <h1>Loading...</h1> }
      {filteredCountries.length > 0 ? <CountryList countries={filteredCountries} />: <h4>No such Country</h4> }
    </div>
  );
}

export default App;
