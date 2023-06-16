import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar2.css"
import { names } from './Navbar1'

function NavBar2() {
  return (
    <div className>
      <nav className="Navbar2">
            <ul>
        <p className='nameHeading'  style={{color:"black"}}>Welcome {names.slice(-1)}</p>
                
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Members">Members</Link></li>
                <li><Link to="/Groups">Groups</Link></li>
                <li><Link to="/Photos">Photos</Link></li>
                <li><Link to="/Profile">Profile</Link></li> 
                <li ><Link to="/Logout">Log Out</Link></li>

            </ul>
      </nav>
      
    </div>
  )
}

export default NavBar2
