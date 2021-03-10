import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
        <div className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/request">Request Appointment</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
        );
    }
}

export default Navbar;