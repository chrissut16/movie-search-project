import { useState } from 'react'
import axios from 'axios';
import SearchBar from '../components/SearchBar'
import Button from '../components/Button.jsx'
import Result from '../components/Result.jsx';

function SearchPage() {
    const [list, setList] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    const getMovie = async () => {
        const movieUrl = `https://www.omdbapi.com/?apikey=99724efc&s=${searchBar}`;
        
        const response = await axios.get(movieUrl);
  
        setList(response.data.Search);
        console.log(list)
    }

    return (
    <div>
      <SearchBar setSearchBar={setSearchBar} />
      <Button getMovie={getMovie}/>
      <Result list={list} />
    </div>
    )

}

export default SearchPage;
