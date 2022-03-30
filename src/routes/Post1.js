import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Answer1 from "./Answer1";

function Post1 () {
    const [postFound, setPostFound] = useState(false);
    const handlePostFound = () => {
        setPostFound(true);
    }

    return(
        <>
            <h1>POST 1</h1>
            <Link to='/post2'>NEXT</Link>
            <button onClick={handlePostFound}>Post Found</button>

            {postFound && <Answer1 />}
            
        </>
    )
}

export default Post1;