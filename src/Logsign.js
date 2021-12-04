import './logsigh.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
function Login()
{
    return(

        <div>
            x<form>
        <h2 >Log in Page</h2>
        
        <p id = "n"> Name :
        <input type="text"   id = "Name"></input></p>
        
        <p id ="p">Password :
            <input type="password" id="pass"></input>
        </p>
        
      
        <p id ="s">
        <button type="submit" >Log in </button>
        </p> 
        
        
        <Link to = "/signup">Sign up if you haven't registered
        </Link>
    </form>

        </div>
    );
}
export default Login;