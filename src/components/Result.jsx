import React from "react";

const Result = (props) => {
    return (
        <>
        {props.list?.map((lists, index) => 
        <div 
            onClick={() =>{
                window.open(`https://www.imdb.com/title/${lists.imdbID}`)}}
              // location.href = `https://www.imdb.com/title/${lists.imdbID}/`
                key={index} className="flex flex-col justify-between items-center my-3 mx-5 pb-3 px-4 w-[300px] bg-neutral-900 cursor-pointer hover:bg-neutral-800 duration-300 hover:scale-105">
            <p className="font-semibold w-[250px] text-center">{lists.Title}</p>
            <img src={lists.Poster} alt="movie.jpg"></img>
            <p className="font-semibold">{lists.Year}</p>
        </div>)}
        </>
    )
}

export default Result;   

{/* <img src={lists.Poster} alt="movie"
onClick={() =>{
    navigate('/')
}}></img> */}