import React from 'react'
import { navlink } from '../data';
import { Link } from 'react-router-dom';
import '../App.css'

export const Navbar = () => {

  return (
    <div className="navbar">
        {
            navlink.map((title , index)=>(<Link to={navlink[index].link} key={index} className="nav-link">{navlink[index].title}</Link>))
        }
    </div>
  )
}
