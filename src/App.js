import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Final from './car';
import './logsigh.css';

import Login from './Logsign';
import Signup from './L2';
import NotFoundPage from './notfound';

function App() {
  return(
    <div>
    <div className = "x1">
   <h1>Welcome to the home Page</h1>
   
   <div id = "sign">
   
   
   <Link to = "/login"><button>login </button></Link>

   
   <Link to = "/signup"><button>signup</button></Link>
   </div>


   </div>
   <Final class = "roll" pic = "./roll.jpeg" name = "Red Rolls Royce"/>
   <Final class= "ghost" pic = "./pic.jpeg" name = "Rolls royce ghost"/>
   </div>
  );
}

export default App;
