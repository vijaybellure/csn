import {useNavigate} from 'react-router-dom'
import {credentials} from './dict.js'
import { names } from './Navbar1.js';
// import { Button } from '@mui/material';

function Login() {



    const navigate= useNavigate();

    var NavigateToHome=()=>{
      
      var b= document.querySelector('input.passwordInput').value
      var a= document.querySelector('input.emailInput').value
      if(a!=null)
      {
        var m= a.slice(0,a.indexOf("@"))
        names.push(m);
      }
      if(credentials[a]===b)
      {
        
        navigate("/Home")

      }
      else{

        alert("Invalid login")
      }
      
    }



  return (
    
    <div className=''>
      


    <div className='LoginPage'>

        <img className='loginImage' src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg" data-blue-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg" alt="Capgemini" data-white-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"/>


  <div className="container">
    <label htmlFor="uname" ><b>Username</b></label>
    <input type="email" className="emailInput"  placeholder="Enter Username" name="uname" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password"  className="passwordInput" placeholder="Enter Password" name="psw" required/>
    <button type="submit" onClick={NavigateToHome} >Login</button>
   </div>
   
  <div className="container"/>
    <span className="psw">Forgot <a href="/forgotPass">password?</a></span>
  </div>





    </div>
  )
}

export default Login
