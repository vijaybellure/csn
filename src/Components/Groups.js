import React from 'react'
import NavBar2 from './NavBar2'
import "./Groups.css"
import { Link } from 'react-router-dom'
import MyFriends from './MyFriends'
import LatestGroups from './LatestGroups'
function Groups() {
  return (
    
    <div>
      <NavBar2/>

        <div className="groups">

        <div className="groupsHeading">Groups</div>

        <hr />
        <br />

          <div className="groupIcon1">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
           <p className='IconName'>Capgemini Group</p> </Link>
           <p className='IconDescription'>This is Capgemini Group</p>
          </div>
          <hr />
          <div className="groupIcon1">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
           <p className='IconName'>Dot Net Group</p> </Link>
           <p className='IconDescription'>This is Dot Net Group</p>
          </div>
          <hr />
          <div className="groupIcon1">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
           <p className='IconName'>Java Group</p> </Link>
           <p className='IconDescription'>This is Java Group</p>
          </div>
          <hr />
          <div className="groupIcon1">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
           <p className='IconName'>DCX Group</p> </Link>
           <p className='IconDescription'>This is DCX Group</p>
          </div>
        
        </div>
        <div className="adjustGroups">
        <MyFriends/>
        </div>

      <LatestGroups/>
    </div>
  
  )
}

export default Groups
