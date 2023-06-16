// import React, { useState } from 'react'
import NavBar2 from './NavBar2'
import MyFriends from './MyFriends'
import LatestGroups from './LatestGroups'
import { names } from './Navbar1'
import "./Profile.css"
import { details } from './dict'
import "./Home.css"
function Profile() {
  
  return (
    <div className='Mprofile'>
      <NavBar2/>


      <div className="profile2">

        <div className="profileHeading">

          {names.slice(-1)}
        </div>
        <br />
        <hr />
        <br />
        <div className="singleProfile">
          {/* <img src={photo} alt="" /> */}
          <img src={details[names.slice(-1)][5]} alt="" />
          <div className="listItems">
            <li className="listx">Name:{names.slice(-1)}</li>
            <li className="listx">Email:{details[names.slice(-1)][0]}</li>
            <li className="listx">City:{details[names.slice(-1)][1]}</li>
            <li className="listx">State:{details[names.slice(-1)][2]}</li>
            <li className="listx">Gender:{details[names.slice(-1)][3]}</li>
            <li className="listx">Profession:{details[names.slice(-1)][4]}</li>
          </div>
          <div className="profileWall">
          <h4 id="wall">
        Profile wall
      </h4>
      <textarea className='textArea' name="" id="idtext" cols="30" rows="10"></textarea>
          <br />
          <button type="submit">submit</button> 
          <div className="wallButtons">
          <button onClick={()=>document.getElementById("idtext").focus()} className='pbn'   name="filename" type="file" >text</button>
          {/* <button className='pbn'   name="filename" type="file" >image</button> */}
          {/* <button className='pbn'   name="filename" type="file" >Video</button> */}
          <div class="pbn">
    {/* <button type="button" class="pbn">Image</button> */}
    <input className='pbn' name="img" type="file" accept="image/*" />
</div>
{/* <div class="pbn">
    <button type="button" class="pbn">Video</button>
    <input  className='pbn' name="img" type="file" accept="image/*" />
</div> */}
          </div>
         
          </div>
        </div>
      </div>



      <div className="adjustProfile1">
          <MyFriends/>
      </div>

      <div className="adjustProfile2">
        <LatestGroups/>
      </div>

    </div>
  )
}

export default Profile
