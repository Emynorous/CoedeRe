import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="custom-title">
        <span className="custom-red">Code</span>Red
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <img src="https://clipartcraft.com/images/house-clipart-red-2.png" alt="Home" className="button-icon" />

              Home
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/report">
              <img src="https://th.bing.com/th/id/R.f631b5be336d751154624aeafaebb7df?rik=h3nkNlBURMZFzg&pid=ImgRaw&r=0" alt="Report" className="button-icon" />

              Report
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view-reports">
              <img src="https://th.bing.com/th/id/R.e2372ec636477a531154fd6cc6067c1c?rik=gwZFm0ic8lmK2Q&pid=ImgRaw&r=0" alt="View Reports" className="button-icon" />

              View Reports
            </Link>
          </li>
        </ul>
        <span className="navbar-text">
          <Login />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;