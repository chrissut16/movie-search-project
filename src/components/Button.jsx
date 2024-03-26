import React from "react";

const Button = ({ getMovie }) => {
    return(
    <div>
        <button 
        onClick={getMovie}
        >Submit
        </button>
    </div>
    )
}

export default Button;