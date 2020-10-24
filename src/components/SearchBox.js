import React from 'react'

function SearchBox({handleSearchChange}) {
    const handleChange = e => {
        handleSearchChange(e.target.value);
    }
    return (
            <input type="text" onChange={handleChange} className="search-box" placeholder="Search for a country" />
    )
}

export default SearchBox
