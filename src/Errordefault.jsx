import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Errordefault =()=>
{
    return(<>
        <h1 style={{textAlign:'center'}}>404 oopss Errord </h1>
        <NavLink exact to='/'><h1>Go back</h1></NavLink>
        <Route exact path='/'/>
        </>)
}
export default Errordefault;