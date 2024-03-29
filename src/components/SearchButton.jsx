import React from "react";
// import { useNavigate } from "react-router-dom";

const SearchButton = ({ goToResult }) => {

    return(
    <button 
        className="bg-white border-none hover:bg-gray-300 cursor-pointer duration-300 rounded-r px-3"
        onClick={() => {goToResult();}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    </button>
    )
}

export default SearchButton;