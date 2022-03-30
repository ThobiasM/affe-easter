import React from "react";

function Start (props) {
    return(
        <div className="flexContainer">
            <div className="flexContainerCol">
                <h1>AFFES PÅSKEREBUS</h1>
                <button onClick={props.handleClick}>START</button>
            </div>
            
        </div>
    )
}

export default Start;