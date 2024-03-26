import React from "react";

const Result = (props) => {
    return (
        <>
        {props.list?.map((lists, index) => 
        <div>
            <img src={lists.Poster} alt="movie"></img>
        </div>)}
        </>
    )
}

export default Result;