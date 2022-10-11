import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () =>{
    return (
        <div className="bg-dark col-12 no-gutter fluid">
            <h2 className="text-danger">Product Manager</h2>
            <NavLink to='/' className="m-3" end>Form</NavLink>
            <NavLink to='/all' end>List</NavLink>

        </div>
    )
}

export default NavBar