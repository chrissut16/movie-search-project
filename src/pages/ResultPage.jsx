
import axios from 'axios';
import Result from '../components/Result.jsx'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';

function ResultPage() {
  const [list, setList] = useState([]);

  const [searchParams] = useSearchParams();
  const searchBar = searchParams.get('searchBar');

  const movieUrl = `https://www.omdbapi.com/?apikey=99724efc&s=`;

  console.log(`the search value is: ${searchBar}`)
  
  const getMovie = async () => {
    try {
      const response = await axios.get(movieUrl + searchBar);
      setList(response.data.Search);
      console.log(response)
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    getMovie();
  }, [searchBar]);

  return (
  <div className=''>
    <div className='box-border justify-center flex p-5 fixed bg-neutral-900 w-full h-fit inset-x-0 top-0 z-50'>
          <BackButton />
          <h3 className='m-auto'>Results:</h3>
    </div>
    <div className='flex'>
      <div className='flex flex-wrap mt-[100px] justify-center'>
        <Result list={list} />
      </div>
    </div>
  </div>
  )
}

export default ResultPage;
