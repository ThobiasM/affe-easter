import React, { useState } from "react";
/* import { Link } from 'react-router-dom';
 */import Answer1 from "./Answer1";

function Post1 (props) {

    return(
        <div className="flexContainer">
            <div className="flexContainerCol">
                <h1>POST 1</h1>
                <button onClick={props.handlePostFound}>Post Found</button>
            </div>
        </div>
    )
}

export default Post1;