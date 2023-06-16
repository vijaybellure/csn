import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function LatestGroups() {
  const navigate= useNavigate();
  return (
    <div className='groups1'>
      <h4 id="wall">
        My Groups
      </h4>
        <div className="groupsPhoto">

          <div className="group1">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
           <p className='groupName1'>Dot Net Group</p> </Link>
           <p className='descriptionGroup1' style={{marginBlockStart:"-70px"}}>This is capgemini Dot net Group </p>
          </div>

          <div className="group2">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
          <p className='groupName2'>Java Group</p></Link>
          <p  className='descriptionGroup2' style={{marginBlockStart:"-70px"}}>this is capgemini Java Group</p>
          </div>



          <div className="group3">
          <Link to="/keplar"><img src={require("./defaultGroup.png")} style={{height:"100px"}} class="GroupPhoto"  alt="Avatar" />
          <p className='groupName3'>Dcx Group</p></Link>
          <p  className='descriptionGroup3' style={{marginBlockStart:"-70px"}}>this is capgemini Dcx group</p>
          </div>
         
        </div>
        <button onClick={()=>{navigate("/Groups")}} className='ViewFriends'>View All Groups</button>
      </div>
  
  )
}

export default LatestGroups
