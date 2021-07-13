import React from 'react';
import { useParams } from 'react-router-dom';

const User=()=>
{
    const {fname,lname}=useParams();
    return(<>
        <h1 style={{textAlign:'center'}}>it's user page . 
            <p>
               {fname} {lname} this is example of useparams
            </p>
        </h1>
    </>)
}
export default User ;