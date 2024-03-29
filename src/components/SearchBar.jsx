import React from 'react';

const SearchBar = ({ searchBar, setSearchBar }) => {
    return (
        <div >
            <input 
            placeholder='Type in movie name...'
            value={searchBar}
            onChange={(event) => setSearchBar(event.target.value)}
            className='text-lg p-2 border-none rounded-l'
            ></input>
        </div>
    )
}

export default SearchBar;