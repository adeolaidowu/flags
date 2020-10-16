import React from 'react'

function SearchBox({handleChange}) {
    // const handleChange = e => {
    //     handleSearchChange(e.target.value);
    // }
    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default SearchBox
