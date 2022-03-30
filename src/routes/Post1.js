import React, { useState } from "react";
/* import { Link } from 'react-router-dom';
 */import Answer1 from "./Answer1";

function Post1 () {
    const [postFound, setPostFound] = useState(false);
    const handlePostFound = () => {
        setPostFound(true);
    }

    return(
        <div className="flexContainer">
            <div className="flexContainerCol">
                <h1>POST 1</h1>
                <button onClick={handlePostFound}>Post Found</button>
                {postFound && <Answer1 />}
            </div>
        </div>
    )
}

export default Post1;