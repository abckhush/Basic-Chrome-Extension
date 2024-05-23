import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './icon.png';

function Home() {
    return (
        <div className="home">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              GradeBot.ai
            </p>
          </header>
          <div>
            <Link to="/login">Login</Link> | <Link to="/register">Sign Up</Link>
          </div>
        </div>
    );
  }
  
  export default Home;