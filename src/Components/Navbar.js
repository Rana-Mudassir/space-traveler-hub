import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/css/navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1>Space Travelers Hub</h1>
        <div className="nav-space-between">
          <ul className="nav">
            <li className="nav-link">
              <NavLink to="/" className={window.location.pathname === '/' ? 'active' : ''}>View</NavLink>
            </li>
            <li>
              <NavLink id="navItem" to="/rockets" className={window.location.pathname === '/rockets' ? 'active' : ''}>Rockets</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
