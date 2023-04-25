import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Assets/css/navbar.css';

const links = [{
  id: 1,
  name: 'Rockets',
  pathName: '/',
}, {
  id: 2,
  name: 'Missions',
  pathName: '/missions',
}];

function Navbar() {
  const location = useLocation();
  const linkClasses = (pathName) => `link ${location.pathname === pathName ? 'active-link' : ''}`;
  return (
    <header>
      <nav className="navbar">
        <h1>Space Travelers Hub</h1>
        <div className="nav-space-between">
          <ul className="nav">
            {
              links?.map((link) => (
                <li key={link.id}>
                  <NavLink to={`${link.pathName}`} className={linkClasses(link.pathName)}>{link.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
