import React from 'react'
import NavBar2 from './NavBar2'
// import MyFriends from './MyFriends'
import LatestGroups from './LatestGroups'
import "./Members.css"
import { Link } from 'react-router-dom'
import MyFriends from './MyFriends'
import "../index.css"

function Members() {
  return (
    <div className="Members">
      <NavBar2/>
      <div className="members">
        <div className="MembersHeading">
          Members
        </div>
        <hr />
        <br />
        <div className="profile1">

          <div className="profiles">
          <Link to="/John"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle"  alt="Avatar" />
            John</Link>
          </div>
          
        <div className="profileButtons">
          <button className="addFriend">Add Friend</button>
          <button className="sendMessage">Send Message</button>
          <button className="viewProfile">View Profile</button>
        </div>
        </div>
        <hr />
        <br />
        <div className="profile1">

          <div className="profiles">
          <Link to="/Scarlett"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" class="rounded-circle"  alt="Avatar" />
            Scarlett</Link>
          </div>

        <div className="profileButtons">
          <button className="addFriend">Add Friend</button>
          <button className="sendMessage">Send Message</button>
          <button className="viewProfile">View Profile</button>
        </div>
        </div>
        <hr />
        <br />
        <div className="profile1">

          <div className="profiles">
          <Link to="/Pablo"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle"  alt="Avatar" />
            Pablo</Link>
          </div>

        <div className="profileButtons">
          <button className="addFriend">Add Friend</button>
          <button className="sendMessage">Send Message</button>
          <button className="viewProfile">View Profile</button>
        </div>
        </div>
        <hr />
        <br />
        <div className="profile1">

          <div className="profiles">
          <Link to="/Marie"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle"  alt="Avatar" />
          Marie</Link> 
          </div>

        <div className="profileButtons">
          <button className="addFriend">Add Friend</button>
          <button className="sendMessage">Send Message</button>
          <button className="viewProfile">View Profile</button>
        </div>
        </div>
        <hr />
        <br />
        <div className="profile1">

          <div className="profiles">
          <Link to="/Rosy"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="rounded-circle"  alt="Avatar" />
            Rosy</Link>
          </div>

        <div className="profileButtons">
          <button className="addFriend">Add Friend</button>
          <button className="sendMessage">Send Message</button>
          <button className="viewProfile">View Profile</button>
        </div>
        </div>
        
      </div>
      <div className="adjustMembers">

      <MyFriends/>
      </div>

      <LatestGroups/>
    </div>
  )
}

export default Members
