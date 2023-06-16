import React from 'react'
import NavBar2 from './NavBar2'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MyFriends from './MyFriends'
import LatestGroups from './LatestGroups'
import "./Home.css"

function Home() {
  const [likes1,setLikes1]= useState(0)
  const [likes2,setLikes2]= useState(0)
  const [likes3,setLikes3]= useState(0)
  const [follow1,setFollow1]= useState("Follow")
  const [follow2,setFollow2]= useState("Follow")
  const [follow3,setFollow3]= useState("Follow")
  var updateLikes1=()=>{
    if(likes1===0)
    {
      setLikes1(1)
    }
    else{
      setLikes1(0);
    }
  }
  var updateLikes2=()=>{
    if(likes2===0)
    {
      setLikes2(1)
    }
    else{
      setLikes2(0);
    }
  }
  var updateLikes3=()=>{
    if(likes3===0)
    {
      setLikes3(1)
    }
    else{
      setLikes3(0);
    }
  }
  var following1=()=>{
    if(follow1==="Follow")
    {

      setFollow1("Following")
    }
    else{
      setFollow1("Follow")
    }
  }
  var following2=()=>{
    if(follow2==="Follow")
    {

      setFollow2("Following")
    }
    else{
      setFollow2("Follow")
    }
  }
  var following3=()=>{
    if(follow3==="Follow")
    {

      setFollow3("Following")
    }
    else{
      setFollow3("Follow")
    }
  }
  var TextFunc=()=>{
    document.getElementById("commentBox1").focus();
  }
  var TextFunc1=()=>{
    document.getElementById("textbox").focus();
  }
  var TextFunc2=()=>{
    document.getElementById("commentBox2").focus();
  }
  var TextFunc3=()=>{
    document.getElementById("commentBox3").focus();
  }
  
  return (
    <>
    <div className='homepage'>
      <NavBar2/>

      <div className="wall">

        <div >
          <h4 id="wall">
            wall
          </h4>
          <textarea className='textArea' name="" id="textbox" cols="30" rows="10"></textarea>
          <br />
          <button type="submit">submit</button> 
          <div className="wallButtons">
          <button  onClick={TextFunc1}  name="filename" type="file" >text</button>

          <div class="choose_file">
    <button type="button" class="btn btn-default">Image</button>
    <input name="img" type="file" accept="image/*" />
</div>
<div class="choose_file">
    <button type="button" class="btn btn-default">Video</button>
    <input name="img" type="file" accept="image/*" />
</div>
          </div>
        </div>
      </div>

{/* the first wall start here */}
      <div className='wall1'>
        <div className="mainProfile">
          <div className="profile">
          <Link to="/John"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle"  alt="Avatar" />
            John</Link>
          </div>
          <p>{likes1} likes</p>
          </div>
          
  <div class="container">
  <div class="arrow">
    <div class="outer"></div>
    <div class="inner"></div>
  </div>

  <div class="message-body">
    <p>Hello world! This is a test message to show how to make an arrow on the side of the box.</p>
  </div>
    
  <div className="actions">
    <Link onClick={TextFunc} className='action1' to="/Home">Comment</Link> -
    <Link className='action1' to="/Home" onClick={updateLikes1}>Like</Link> -
    <Link className='action1' to="/Home" onClick={following1}>{follow1}</Link> -
    <a className='action1' href="Share">Share</a>
  </div >
    {/* comment box and comments starts */}
    <div className="commentContainer">
    <input id="commentBox1" type="text" />
    <div className="comments">
    <Link to="/Pablo"> <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="commentPhoto"
  alt="Avatar" />
          </Link> 
          <p>What is this bro</p>
    </div>
    <div className="comments">
    <Link to="/Scarlett"> <img 
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="commentPhoto" alt="avatar"
         />
          </Link> 
          
          <p>What is this bro</p>
    </div>
    </div>

</div>
      </div>
      {/* the first wall ends here */}
{/* the Second wall start here */}
      <div className='wall1'>
        <div className="mainProfile">
          <div className="profile">
          <Link to="/Smith"> <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle shadow-4"
   alt="Avatar" />
            Smith</Link>
          </div>
          <p>{likes2} likes</p>
          </div>
          
  <div class="container">
  <div class="arrow">
    <div class="outer"></div>
    <div class="inner"></div>
  </div>

  <div class="message-body">
    <p>Hello world! This is a test message to show how to make an arrow on the side of the box.</p>
  </div>
    
  <div className="actions">
    <Link onClick={TextFunc2} to="/Home">Comment</Link> -
    <Link to="/Home" onClick={updateLikes2}>Like</Link> -
    <Link to="/Home" onClick={following2}>{follow2}</Link> -
    <a href="Share">Share</a>
  </div >
    {/* comment box and comments starts */}
    <div className="commentContainer">
    <input id="commentBox2" type="text" />
    <div className="comments">
    <Link to="/Robert"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" className="commentPhoto"  alt="Avatar" />
          </Link> 
          <p>What is this bro</p>
    </div>
    <div className="comments">
    <Link to="/Jennifer"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="commentPhoto"  alt="Avatar" />
          </Link> 
          <p>What is this bro</p>
    </div>
    </div>

</div>
      </div>
      {/* the second wall ends here */}
{/* the Second wall start here */}
      <div className='wall1'>
        <div className="mainProfile">
          <div className="profile">
          <Link to="/Rosy"> <img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="rounded-circle" 
  alt="Avatar" />
            Rosy</Link>
          </div>
          <p>{likes3} likes</p>
          </div>
          
  <div class="container">
  <div class="arrow">
    <div class="outer"></div>
    <div class="inner"></div>
  </div>

  <div class="message-body">
    <p>Hello world! This is a test message to show how to make an arrow on the side of the box.</p>
  </div>
    
  <div className="actions">
    <Link onClick={TextFunc3} to="/Home">Comment</Link> -
    <Link to="/Home" onClick={updateLikes3}>Like</Link> -
    <Link to="/Home" onClick={following3}>{follow3}</Link> -
    <a href="Share">Share</a>
  </div >
    {/* comment box and comments starts */}
    <div className="commentContainer">
    <input id="commentBox3" type="text" />
    <div className="comments">
    <Link to="/Marie"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="commentPhoto"  alt="Avatar" />
          </Link> 
          <p>What is this bro</p>
    </div>
    <div className="comments">
    <Link to="/John"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="commentPhoto"  alt="Avatar" />
          </Link> 
          <p>What is this bro</p>
    </div>
    </div>

</div>
      </div>
    

    <div className="adjust1
    ">

      <MyFriends/>
    </div>
{/*     
    <div className="adjust2">

      <LatestGroups/>
    </div> */}
      <LatestGroups/>
      
    </div>
    </>
  )
}

export default Home
