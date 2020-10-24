import React from 'react'

function FilterBox({region, handleRegionChange}) {
    const handleChange = (e) => {
        handleRegionChange(e.target.value);
    }
    return (
        <select value={region} onChange={handleChange} className="filter-box">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}

export default FilterBox
