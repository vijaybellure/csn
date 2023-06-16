import React from 'react'
import { Link } from 'react-router-dom'
function MyFriends() {
  return (
    <div className="myfriends">

      <h4 id="wall">
      My Friends
      </h4>
      
    <div className="photos">

    <Link to="/John"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

    <Link to="/Pablo"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="friedlist-photos"  alt="Avatar" />
      </Link>

      <Link to="/Scarlett"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

            <Link to="/Smith"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

            <Link to="/Robert"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

            <Link to="/Jennifer"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

            <Link to="/Rosy"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

            <Link to="/Marie"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" class="friedlist-photos"  alt="Avatar" />
            </Link>

            <Link to="/Charlie"><img src={require("./pexels-pixabay-220453.jpg")} style={{height:"100px"}} class="friedlist-photos"  alt="Avatar" />
            </Link>
            <button className='ViewFriends'>View All Friends</button>
    </div>
    
    </div>
  )
}

export default MyFriends
