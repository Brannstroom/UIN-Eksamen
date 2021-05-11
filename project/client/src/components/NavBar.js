import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/gameuin.png';

export default function NavBar() {
  return (
    <header className="navigationBar">
      <NavLink to="/" exact>
        <img className="navimg" src={logo} width="100%" alt="Game UIN Logo" />
      </NavLink>
      <div>
        <nav>
          <NavLink className="navbar" to="/" exact>
            Hjem
          </NavLink>
          <NavLink className="navbar" to="/Kontakt">
            Kontakt oss
          </NavLink>
          <NavLink className="navbar" to="/Galleri">
            Galleri
          </NavLink>
          <NavLink className="navbar" to="/Omoss">
            Om oss
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
