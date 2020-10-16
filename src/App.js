import React, {useState, useEffect } from 'react';
import CountryList from './components/CountryList'
import './App.css';
import SearchBox from './components/SearchBox';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");

  
  useEffect(() => { 
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => setCountries(data))
  }, [countries])

  let selectedCountries = [];
  const handleSearchChange = (e) => {
    console.log("Entered Here")
    setSearchField(e.target.value);
    console.log(e.target.value)
    selectedCountries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(selectedCountries)
  }

  const handleChange = (e) => {
    setSearchField(e.target.value);
  } 

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <React.Fragment>
      {/* <SearchBox handleChange={handleSearchChange} /> */}
      <input type="text" onChange={handleChange} className="search-box" />
      {countries.length === 0 && <h1>Loading...</h1> }
      <CountryList countries={filteredCountries} />
    </React.Fragment>
  );
}

export default App;
