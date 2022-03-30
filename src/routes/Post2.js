import React from "react";
import { Link } from 'react-router-dom';

function Post2 () {
    return(
        <>
            <h1>POST 2</h1>
            <Link to='/post3'>Til Post 3</Link>
        </>
    )
}

export default Post2;