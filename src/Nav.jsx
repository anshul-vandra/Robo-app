import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Errordefault from './Errordefault'
// import Errorcom from './Searchrobo';
import Searchrobo from './Searchrobo';

const Nav = () => {
    return (<>
        <div className="cont">
            <NavLink exact activeClassName="activeclass" to="/Search">SEARCH</NavLink>
            <NavLink exact activeClassName="activeclass" to='/'>HOME</NavLink>
            {/* <NavLink exact activeClassName="activeclass" to='/about'>ABOUT</NavLink> */}
            {/* <NavLink exact activeClassName="activeclass" to='/contact'>CONTACT</NavLink> */}
            {/* <NavLink exact activeClassName="activeclass" to="/user/anshul/vndra">USER</NavLink> */}
        </div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Contact' component={Contact} />
            {/* <Route exact path='/about' render={(() => { return <><About name='anshul' /></> })} /> */}
            {/* <Route exact path="/user/:fname/:lname" component={User} /> */}
            <Route exact path="/Search" component={Searchrobo} />
            <Route component={Errordefault} />
        </Switch>

    </>)
}
export default Nav;