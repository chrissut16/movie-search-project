import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input 
            placeholder='Type in movie name...'
            onChange={(event) => props.setSearchBar(event.target.value)}
            ></input>
        </div>
    )
}

export default SearchBar;