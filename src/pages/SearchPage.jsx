import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import SearchButton from '../components/SearchButton.jsx'

function SearchPage() {
  const [searchBar, setSearchBar] = useState("");

  console.log(searchBar)
    
  const navigate = useNavigate();
  const goToResult = () => {
    navigate(`/result?searchBar=${searchBar}`);
  }
    
  return (
    <div className='flex justify-center items-center'>
      <div>
        <h2 className=' mb-5 text-center'>
          Movie Search App
        </h2>
        <div className='flex'>
          <SearchBar value={searchBar} setSearchBar={setSearchBar} />
          <SearchButton goToResult={goToResult}/>
        </div>
      </div>
    </div>
  )
}

export default SearchPage;
