import React from 'react';
import { useLocation } from 'react-router-dom';

const About=(props)=>
{
    const location=useLocation();
    
    return(<>
    <div style={{textAlign:'center'}}>
    <h1>your path name : {location.pathname} using useLocation</h1>
    <h1>hello this is {props.name} this side</h1>
    </div>
    </>)

}
export default About;