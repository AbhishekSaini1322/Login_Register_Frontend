import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
// import LogOut from './LogOut'
// import { AppBar, Typography, Toolbar, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className='container'>
     <Link className='button' to='/login'>Login</Link>
     <Link className='button' to='/register'>Register</Link>
     {/* <Link to='/LogOut'>LogOut</Link> */}
     {/* <LogOut/> */}
    </div>
  )
}

export default Navbar