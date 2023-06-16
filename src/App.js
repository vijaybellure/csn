import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';
import Home from './Components/Home';
import Members from './Components/Members';
import Groups from './Components/Groups';
import Photos from './Components/Photos';
import Profile from './Components/Profile';
import PersonProfile from './Components/PersonProfile';
// import PersonProfile from './Components/PersonProfile';


function App() {
  return (
    <>
    {/* <Login/> */}
    <BrowserRouter>
    <Navbar1  />

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/LogOut" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Members" element={<Members/>}/>
      <Route path="/Groups" element={<Groups/>}/>
      <Route path="/Photos" element={<Photos/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/John" element={<PersonProfile/>}/>
      {/* <Route path="Profile/person" element={<PersonProfile/>}/> */}
    </Routes>

    </BrowserRouter>
  
    </>
  );
}

export default App;
