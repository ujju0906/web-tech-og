import './logsigh.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Signup()
{
    return(
        <div>
        <form>
            <h2 >Sign in Page</h2>


<p id = "n"> Name :
<input type="text"   id = "Name"></input></p>

<p id ="p">Password :
    <input type="password" id="pass"></input>
</p>

<p id ="r">Renter Password :
    <input type="password" id="rpass"></input>
</p>

<div id ="s">
<button type="submit" >Sign in </button>
</div> 
<Link to = "/login">login if you have already registered</Link>



</form>

        </div>
    );
}
export default Signup;