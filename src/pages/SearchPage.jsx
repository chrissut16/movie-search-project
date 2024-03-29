import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar'
import SearchButton from '../components/SearchButton.jsx'
import Result from '../components/Result.jsx';


function SearchPage() {
    // const [list, setList] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    console.log(searchBar)
    
    const navigate = useNavigate();
    const goToResult = () => {
      navigate(`/result?searchBar=${searchBar}`);
    }

    // const getMovie = async () => {
    //     const movieUrl = `https://www.omdbapi.com/?apikey=99724efc&s=${searchBar}`;
        
    //     const response = await axios.get(movieUrl);
  
    //     setList(response.data.Search);
    //     // console.log(list)
    // }

    // useEffect(() => {
    //   getMovie();
    // }, []);

    return (
    <div className='flex justify-center items-center'>
      <div className='w-fit'>
        <h2 className=' mb-5 text-center'>
          Movie Search App
        </h2>
        <div className='flex'>
          <SearchBar value={searchBar} setSearchBar={setSearchBar} />
          <SearchButton goToResult={goToResult}/>
          {/* <Result list={list} /> */}
        </div>
      </div>
    </div>
    )
}

export default SearchPage;
