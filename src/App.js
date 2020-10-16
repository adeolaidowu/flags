import React, {useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import FilterBox from './components/FilterBox';

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
      {/* <FontAwesomeIcon icon="coffee" style={{fontSize: '150px'}}/> */}
      <Header />
      <div className="filters">
        <input type="text" onChange={handleChange} className="search-box" placeholder="Search for a country" />
        <FilterBox />
      </div>
      {countries.length === 0 && <h1>Loading...</h1> }
      {filteredCountries.length > 0 ? <CountryList countries={filteredCountries} />: <h4>No such Country</h4> }
    </React.Fragment>
  );
}

export default App;
