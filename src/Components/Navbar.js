import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Assets/css/navbar.css';
import planet from '../Assets/images/planet.png';

const links = [
  {
    id: 1,
    name: 'Rockets',
    pathName: '/',
  },
  {
    id: 2,
    name: 'Missions',
    pathName: '/missions',
  },
  {
    id: 3,
    name: 'Profile',
    pathName: '/profile',
  },
];

function Navbar() {
  const location = useLocation();

  const linkClasses = (pathName) => `link ${location.pathname === pathName ? 'active-link' : ''}`;
  return (
    <header>
      <nav className="navbar mt-3">
        <div className="d-flex align-items-center">
          <img src={planet} alt="Planet" className="planet" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <div className="nav-space-between">
          <ul className="nav nav-container">
            {links?.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={`${link.pathName}`}
                  className={linkClasses(link.pathName)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
