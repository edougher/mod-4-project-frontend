import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
        <div className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/appointments">Appontments</NavLink>
        <NavLink to="/signin">SignIn</NavLink>
      </div>
        );
    }
}

export default Navbar;