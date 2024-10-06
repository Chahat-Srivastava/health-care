import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between login and register

  return (
    <div className="hero is-fullheight has-background-light">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title has-text-info">Welcome to the Healthcare Portal</h1>
          <div className="tabs is-centered">
            <ul>
              <li className={showLogin ? 'is-active' : ''}>
                <a onClick={() => setShowLogin(true)}>Login</a>
              </li>
              <li className={!showLogin ? 'is-active' : ''}>
                <a onClick={() => setShowLogin(false)}>Register</a>
              </li>
            </ul>
          </div>
          {showLogin ? <Login /> : <Register />} {/* Conditionally render Login or Register */}
        </div>
      </div>
    </div>
  );
};

export default Home;
