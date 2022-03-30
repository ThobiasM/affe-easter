import React from "react";
import './../App.css';

function Answer1 (props) {

    return(
        <>
          <div className="options">Option</div>  
          <img 
            className="answerImg" 
            src="https://cdn.pixabay.com/photo/2021/03/05/22/44/dinosaur-6072475_960_720.png" 
            alt="T-rex"
            onClick={props.handleNextPost} />
          <div>Option</div>  
          <div>Option</div>  
          <div>Option</div>  
          <div>Option</div>
          <a href="https://www.flaticon.com/free-icons/dinosaur" title="dinosaur icons">Dinosaur icons created by Freepik - Flaticon</a>  
        </>
    )
}

export default Answer1;