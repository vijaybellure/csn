import React from 'react'
import NavBar2 from './NavBar2'
import MyFriends from './MyFriends'
import LatestGroups from './LatestGroups'
import "./Photos.css"

function Photos() {
  return (
    <div>
      <NavBar2/>
      <div className="photos1">
        <div className="photosHeading">
          Photos
        </div>
        <br />
        <hr />
        <br />
        <img className='Pictures' src={require("./capgemini-india-gachibowli-hyderabad-bpo-vj0i2h8ykc.webp")} alt="Hyd-capmus" />
        <img className='Pictures' src={require("./Campus.jpg")} alt="capmus" />
        <img className='Pictures' src={require("./Dartmoor-e1663849625927.webp")} alt="DartMore" />
        <img className='Pictures' src={require("./20220913151400_IMG_3001.webp")} alt="Hyd-capmus" />
        <img className='Pictures' src={require("./epip-campus.jpg")} alt="epi-capmus" />
        <img className='Pictures' src={require("./Capgemini.jpg")} alt="epi-capmus" />
        <img className='Pictures' src={require("./Capgemini-Logo.wine.png")} alt="logo1" />
        <img className='Pictures' src={require("./Kaziranga.webp")} alt="kaziranga" />
        <img className='Pictures' src={require("./Khana.jpg")} alt="khana" />
        <img className='Pictures' src={require("./LeafCapgemini.png")} alt="leaf" />
      </div>
      <div className="adjustPhotos">
        <MyFriends/>
        </div>

      <LatestGroups/>
    </div>
  )
}

export default Photos
